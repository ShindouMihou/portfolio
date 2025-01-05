import {configureStore} from "@reduxjs/toolkit";
import domainSlice from "@/stores/slices/domain_slice";
import repositoriesSlice from "@/stores/slices/repositories_slice";
import blogPostsSlice from "@/stores/slices/blog_posts_slice";

export const store = configureStore({
    reducer: {
        domainSlice,
        repositoriesSlice,
        blogPostsSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch