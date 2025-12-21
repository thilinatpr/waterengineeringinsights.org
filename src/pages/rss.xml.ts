import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const insights = await getCollection('insights');
  const caseStudies = await getCollection('case-studies');

  const allPosts = [
    ...insights.map(post => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/insights/${post.slug}/`,
    })),
    ...caseStudies.map(post => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/case-studies/${post.slug}/`,
    })),
  ].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title: 'Water Engineering Insights',
    description: 'Technical insights and case studies from the field of water engineering, hydraulics, and environmental systems.',
    site: context.site || 'https://waterengineeringinsights.org',
    items: allPosts,
    customData: `<language>en-us</language>`,
  });
}
