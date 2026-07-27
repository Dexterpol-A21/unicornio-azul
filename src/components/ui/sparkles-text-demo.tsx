import { SparklesText } from '@/components/ui/sparkles-text';

/** Demo / playground for Magic UI SparklesText */
export function SparklesTextDemo() {
  return (
    <SparklesText
      text="extraordinarias"
      colors={{ first: '#0088B3', second: '#A8D8EA' }}
      sparklesCount={8}
    />
  );
}
