import { groq } from 'next-sanity';
import { client } from './lib/client';
import { buildQuery } from './help';

interface GetResourcesParams {
    query?: string;
    category?: string;
    page: string;
}

export const getResources = async (params: GetResourcesParams) => {
    const { query, category, page } = params;

    try {
        const resources = await client.fetch(
            groq`${buildQuery({
                type: 'resource',
                query: query,
                category: category,
                page: parseInt(page),
            })}{
        title,
        _id,
       price,
        "image": poster.asset->url,
        views,
        slug,
        category
      }`
        );

        return resources;
    } catch (error) {
        console.log(error);
    }
}
