"use client";

import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/stores/global";
import {requestRepositories} from "@/types/GitHubRepository";
import {setRepositories} from "@/stores/slices/repositories_slice";
import Repository from "@/components/Repository";
import BlogPostItemSkeleton from "@/components/BlogPostItemSkeleton";

export default function OpenSourceRepositories() {
    const repos = useSelector((store: RootState) => store.repositoriesSlice)
    const dispatch = useDispatch()
    useEffect(() => {
        requestRepositories()
            .then((repositories) => {
                dispatch(setRepositories(repositories))
            })
    }, [dispatch])

    return (
        <div className={"font-spaceMono w-full text-justify xl:px-6 leading-6 flex flex-col gap-8"}>
            <h2 className={"font-horizons text-2xl"}>
                Open-source Repositories ({(repos.isLoaded && repos.repositories.length) || ("...")})
            </h2>
            <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
                {!repos.isLoaded && (
                    <>
                        <BlogPostItemSkeleton/>
                        <BlogPostItemSkeleton/>
                        <BlogPostItemSkeleton/>
                    </>
                )}
                {repos.isLoaded && repos.repositories.map((repo) => (
                    <Repository
                        name={repo.name}
                        description={repo.description}
                        link={repo.html_url}
                        language={repo.language}
                        key={repo.html_url}
                    />
                ))}
            </div>
        </div>
    );
};