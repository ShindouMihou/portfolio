import {createClient, createRoute} from "@client.ts/core";
import {normalizeArrayResponsesHook} from "@/http/hooks/normalizeArrayResponses";
import {createQueryEngine} from "@client.ts/react";

export type BlogPost = {
    title: string;
    slug: string;
}

export const blogClient = createClient("https://primrose.mihou.dev", {
    posts: {
        routes: {
            get: createRoute<BlogPost[]>().static("GET /posts/list?limit=100")
        },
        hooks: [normalizeArrayResponsesHook]
    }
});

export const { useRoute:useBlogRoute } = createQueryEngine(blogClient);
