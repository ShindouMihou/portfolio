"use client";

import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/stores/global";
import {setRepositories} from "@/stores/slices/repositories_slice";
import Repository from "@/components/Repository";
import BlogPostItemSkeleton from "@/components/BlogPostItemSkeleton";
import {useImmediatelyFiringLocalRoute} from "@/http/localClient";
import {ChevronDown, ChevronUp} from "lucide-react";

export default function OpenSourceRepositories() {
    const repos = useSelector((store: RootState) => store.repositoriesSlice)
    const dispatch = useDispatch();

    const [showAll, setShowAll] = useState(false);

    const repositoriesState = useImmediatelyFiringLocalRoute("repositories", "getAll");
    useEffect(() => {
        if (repositoriesState.isSuccess) {
            dispatch(setRepositories(repositoriesState.result!.data!))
        }
    }, [repositoriesState, dispatch]);

    return (
        <div className={"font-spaceMono w-full text-justify xl:px-6 leading-6 flex flex-col gap-8"}>
            <div className={"flex flex-row items-center gap-4"}>
                <h2 className={"font-horizons text-2xl"}>
                    Open-source Repositories ({(repositoriesState.isSuccess && repos.repositories.length) || ("...")})
                </h2>
                <button onClick={() => setShowAll(!showAll)}>
                    {showAll && <ChevronDown size={24}/>}
                    {!showAll && <ChevronUp size={24}/>}
                </button>
            </div>
            <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
                {repositoriesState.isLoading && (
                    <>
                        <BlogPostItemSkeleton/>
                        <BlogPostItemSkeleton/>
                        <BlogPostItemSkeleton/>
                    </>
                )}
                {repositoriesState.isSuccess && repos.repositories.slice(0, showAll ? repos.repositories.length : 10).map((repo) => (
                    <Repository
                        name={repo.name}
                        description={repo.description}
                        link={repo.html_url}
                        language={repo.language}
                        key={repo.html_url}
                    />
                ))}
                {repositoriesState.isSuccess &&
                    <button
                        className={"w-fit opacity-50 hover:opacity-100 ease-in-out transition text-sm"}
                        onClick={() => setShowAll(!showAll)}
                    >
                        {!showAll ? `and ${repos.repositories.length - 10} more repositories... (click to show all)` : `hide additional repositories...`}
                    </button>
                }
            </div>
        </div>
    );
};
