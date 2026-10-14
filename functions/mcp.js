import { CASES, FIRM, SERVICES } from './_lib/site-data.js';

const SERVER_INFO = { name: 'unicornio-azul', version: '1.0.0' };
const PROTOCOL = '2025-03-26';

const TOOLS = [
  {
    name: 'list_services',
    description:
      'List Unicornio Azul service pillars (business development, product sourcing, digital marketing, digital channels) with URLs.',
    inputSchema: { type: 'object', properties: {}, additionalProperties: false },
  },
  {
    name: 'list_cases',
    description: 'List public Unicornio Azul case studies with URLs and short summaries.',
    inputSchema: { type: 'object', properties: {}, additionalProperties: false },
  },
  {
    name: 'get_contact',
    description: 'Return how a human or agent should start a project conversation (form URL and email).',
    inputSchema: { type: 'object', properties: {}, additionalProperties: false },
  },
];

export async function onRequest({ request }) {
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: cors() });
  }

  if (request.method === 'GET') {
    return json(
      {
        protocol: 'mcp',
        transport: 'streamable-http',
        serverInfo: SERVER_INFO,
        hint: 'POST JSON-RPC (initialize, tools/list, tools/call).',
      },
      200,
    );
  }

  if (request.method !== 'POST') {
    return json({ error: 'Method not allowed' }, 405);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json(rpcError(null, -32700, 'Parse error'), 400);
  }

  const batch = Array.isArray(body);
  const messages = batch ? body : [body];
  const responses = [];
  for (const message of messages) {
    const result = handle(message);
    if (result) responses.push(result);
  }

  if (responses.length === 0) {
    return new Response(null, { status: 202, headers: cors() });
  }

  return json(batch ? responses : responses[0], 200);
}

function handle(message) {
  if (!message || message.jsonrpc !== '2.0') {
    return rpcError(message?.id ?? null, -32600, 'Invalid Request');
  }

  const { id, method, params } = message;
  if (id === undefined) return null;

  switch (method) {
    case 'initialize':
      return rpcResult(id, {
        protocolVersion: PROTOCOL,
        capabilities: { tools: {} },
        serverInfo: SERVER_INFO,
      });
    case 'ping':
      return rpcResult(id, {});
    case 'tools/list':
      return rpcResult(id, { tools: TOOLS });
    case 'tools/call':
      return rpcResult(id, callTool(params?.name));
    default:
      return rpcError(id, -32601, `Method not found: ${method}`);
  }
}

function callTool(name) {
  const payload =
    name === 'list_services'
      ? SERVICES
      : name === 'list_cases'
        ? CASES
        : name === 'get_contact'
          ? {
              inquiryUrl: FIRM.inquiryUrl,
              email: FIRM.email,
              linkedin: FIRM.linkedin,
              note: 'There is no OAuth agent registration. Use the form or email.',
            }
          : null;

  if (!payload) {
    return { content: [{ type: 'text', text: `Unknown tool: ${name}` }], isError: true };
  }

  return { content: [{ type: 'text', text: JSON.stringify(payload, null, 2) }] };
}

function rpcResult(id, result) {
  return { jsonrpc: '2.0', id, result };
}

function rpcError(id, code, message) {
  return { jsonrpc: '2.0', id, error: { code, message } };
}

function cors() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Accept, MCP-Protocol-Version',
    'Content-Type': 'application/json; charset=utf-8',
  };
}

function json(body, status) {
  return new Response(JSON.stringify(body), { status, headers: cors() });
}
