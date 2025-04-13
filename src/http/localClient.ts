import {createClient, createHook, createRoute} from "@client.ts/core";
import {GitHubRepository} from "@/types/GitHubRepository";
import {createQueryEngine} from "@client.ts/react";
import {normalizeArrayResponsesHook} from "@/http/hooks/normalizeArrayResponses";

export const localClient = createClient("", {
    repositories: {
        routes: {
            getAll: createRoute<GitHubRepository[]>().static("GET /repositories/meta.json")
        },
        hooks: [normalizeArrayResponsesHook]
    }
});

export const { useRoute: useLocalRoute, useImmediatelyFiringRoute: useImmediatelyFiringLocalRoute } = createQueryEngine(localClient);
