"use client";

import {useSelector} from "react-redux";
import {RootState} from "@/stores/global";
import {ArrowLeft, ArrowRight, Ellipsis, RotateCw} from "lucide-react";

export default function WebViewer() {
    const currentDomain = useSelector((state: RootState) => state.domainSlice)
    return (
        <div
            className={"w-full h-[25rem] border border-dotted hover-flow"}
        >
            {currentDomain.value == "none" ? (
                <div className={"w-full bg-zinc-900 h-full p-4 text-white font-spaceMono"}>
                </div>
            ) : (
                <div className={"w-full h-full"}>
                    <div className={"flex flex-row items-center justify-between px-6 py-2"}>
                        <div className={"flex flex-row items-center gap-2"}>
                            <div className={"w-2 h-2 bg-red-500 rounded-full"}/>
                            <div className={"w-2 h-2 bg-yellow-500 rounded-full"}/>
                            <div className={"w-2 h-2 bg-green-500 rounded-full"}/>
                            <ArrowLeft size={14} className={"text-gray-500 ml-2"}/>
                            <ArrowRight size={14} className={"text-gray-500"}/>
                            <div className={"hidden md:block"}>
                                <RotateCw size={14} className={"text-gray-500"}/>
                            </div>
                        </div>
                        <a href={currentDomain.value} target={"_blank"} className={"py-1 px-3 rounded bg-zinc-900 w-fit md:w-[65%] h-fit"}>
                            <h3 className={"text-xs"}>{currentDomain.value.replaceAll("https://", "")}</h3>
                        </a>
                        <div>
                            <Ellipsis size={14} className={"text-gray-500"}/>
                        </div>
                    </div>
                    <iframe src={currentDomain.value}
                            id={"embed"}
                            className={"overflow-auto bg-white w-full h-full border-none scrollbar-none"}
                            seamless={true}
                            scrolling={"auto"}
                    >
                    </iframe>
                </div>
            )}
        </div>
    )
}