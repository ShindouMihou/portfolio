export type BlogPost = {
    title: string;
    slug: string;
}

export function requestBlogPosts() {
    return fetch('https://primrose.mihou.dev/posts/list?limit=100')
        .then((resp) => resp.json())
        .then((data) => data.data as BlogPost[])
}