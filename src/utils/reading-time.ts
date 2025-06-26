import { remark } from 'remark';
import strip from 'strip-markdown';

export function getReadingTime(content: string) {
  const text = remark().use(strip).processSync(content).toString();
  const wordsPerMinute = 200;
  const words = text.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
}
