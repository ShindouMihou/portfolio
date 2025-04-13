import {createHook} from "@client.ts/core";

export const normalizeArrayResponsesHook = createHook({
    afterRequest: (_, result) => {
        if (result.data?.data) {
            return result.merge({
                data: result.data?.data
            });
        } else {
            return result;
        }
    }
})
