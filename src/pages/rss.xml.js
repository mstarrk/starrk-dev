import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Juan Jose Morales | Blog',
    description: 'A mix of thoughts, lessons, and experiments in coding, game dev, and music. Just me sharing the cool stuff I’m working on.',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  });
}