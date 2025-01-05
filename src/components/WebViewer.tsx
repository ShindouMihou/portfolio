"use client";

import {useSelector} from "react-redux";
import {RootState} from "@/stores/global";

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
                <iframe src={currentDomain.value}
                        id={"embed"}
                        className={"overflow-auto bg-white w-full h-full border-none scrollbar-none"}
                        seamless={true}
                        scrolling={"auto"}
                >
                </iframe>
            )}
        </div>
    )
}