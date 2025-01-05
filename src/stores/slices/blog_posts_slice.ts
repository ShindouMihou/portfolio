import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {BlogPost} from "@/types/BlogPost";
export const blogPostsSlice = createSlice({
    name: 'blog_posts',
    initialState: { posts: [] as BlogPost[], isLoaded: false },
    reducers: {
        setPosts: (state, action: PayloadAction<BlogPost[]>) => {
            state.posts = action.payload
            state.isLoaded = true
        }
    }
})
export const { setPosts } = blogPostsSlice.actions
export default blogPostsSlice.reducer