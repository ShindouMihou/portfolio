'use client'

import ViewableApplications from "@/components/ViewableApplications";
import WebViewer from "@/components/WebViewer";
import Introduction from "@/components/Introduction";
import OpenSourceRepositories from "@/components/OpenSourceRepositories";
import React from "react";
import BlogPosts from "@/components/BlogPosts";
import Navigation from "@/components/Navigation";

export default function Home() {
    return (
        <div className="p-8 w-full">
            <Navigation/>
            <main className={"py-8 pb-16 flex flex-col gap-8 w-full"}>
                <div className={"w-full flex flex-col gap-4"}>
                    <h2 className={"font-horizons text-4xl xl:text-6xl xl:text-center xl:px-12"}>
                        Crafting apps, one step at a time.
                    </h2>
                    <ViewableApplications/>
                    <WebViewer/>
                </div>
                <hr className={"border-zinc-900"}/>
                <Introduction/>
                <hr className={"border-zinc-900"}/>
                <BlogPosts/>
                <hr className={"border-zinc-900"}/>
                <OpenSourceRepositories/>
            </main>
        </div>
);
}
