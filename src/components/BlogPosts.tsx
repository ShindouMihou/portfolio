"use client";

import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/stores/global";
import {setPosts} from "@/stores/slices/blog_posts_slice";
import { useBlogRoute} from "@/types/BlogPost";
import BlogPostItem from "@/components/BlogPostItem";
import BlogPostItemSkeleton from "@/components/BlogPostItemSkeleton";

export default function BlogPosts() {
    const store = useSelector((store: RootState) => store.blogPostsSlice)
    const dispatch = useDispatch()

    const [queryPosts, postsState] = useBlogRoute("posts", "get");
    useEffect(() => {
        queryPosts()
    }, [])

    useEffect(() => {
        if (postsState.result && postsState.status === "ok" && postsState.result.data) {
            dispatch(setPosts(postsState.result.data))
        }
    }, [postsState, dispatch]);

    return (
        <div className={"font-spaceMono w-full text-justify xl:px-6 leading-6 flex flex-col gap-8"}>
            <h2 className={"font-horizons text-2xl"}>
                Blog Posts
            </h2>
            <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
                {(postsState.status === "loading" || postsState.status === "unused") && (
                    <>
                        <BlogPostItemSkeleton/>
                        <BlogPostItemSkeleton/>
                        <BlogPostItemSkeleton/>
                    </>
                )}
                {postsState.status === "ok" && store.posts.map((post) => (
                    <BlogPostItem
                        name={post.title}
                        link={"https://blog.mihou.dev/read/" + post.slug}
                        key={post.slug}
                    />
                ))}
            </div>
        </div>
    );
};
