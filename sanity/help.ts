import queryString from "query-string";

interface BuildQueryParams {
    type: string;
    query?: string;
    category?: string;
    page: number;
    perPage?: number;
}

//location.search "foo=bar"  location.hash
//qs.parse(location.search) {foo:bar}
//parsed.foo='unicorn / parsed.ilike='pizza'  'foo=unicorn&ilike=pizza'
// location.search=stringified// ?foo=uni&ilike.search
interface URLSearchParams {
    params: string;
    key?: string;
    value?: string | null;
    keysToRemove?: string[];
}



export function filterData({ params, key, keysToRemove, value }: URLSearchParams) {
    const currentUrl = queryString.parse(params);

    if (keysToRemove) {
        keysToRemove.forEach((key) => {
            delete currentUrl[key];
        })

    } else if (key && value) {
        currentUrl[key] = value;
    }
    return queryString.stringifyUrl(
        {
            url: window.location.pathname,
            query: currentUrl
        }, {
        skipNull: true
    }

    )


}


export function buildQuery(params: BuildQueryParams) {
    const { type, query, category, page = 1, perPage = 8 } = params;

    const conditions = [`*[_type=="${type}"`];

    // if (category !== 'all' && category) {
    //     conditions.push(`category == "${category}"`);
    // }

    if (query && query !== undefined) {
        conditions.push(`title match "*${query}*"`);
    }
    if (category && category !== 'all' && category !== undefined) {
        conditions.push(`category == "${category}"`);
    }

    else if (category == 'all' && category == undefined || query == undefined) {
        const con = [`*[_type=="${type}"`];
        const offset = (page - 1) * perPage;
        const limit = perPage;
        return con.length > 1
            ? `${con[0]} && (${con
                .slice(1)
                .join(" && ")})][${offset}...${limit}]`

            : `${con[0]}][${offset}...${limit}]`;
    }

    // Calculate pagination limits
    const offset = (page - 1) * perPage;
    const limit = perPage;

    console.log(conditions.length > 1 ? `${conditions[0]} && ${conditions
        .slice(1)
        .join(" && ")}][${offset}...${limit}]`

        : `${conditions[0]}][${offset}...${limit}]`);

    return conditions.length > 1
        ? `${conditions[0]} && ${conditions
            .slice(1)
            .join(" && ")}][${offset}...${limit}]`

        : `${conditions[0]}][${offset}...${limit}]`;
}


