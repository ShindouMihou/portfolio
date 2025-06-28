"use client";

import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/stores/global";
import {setDomain} from "@/stores/slices/domain_slice";

type SelectableApplicationProps = {
    domain: string,
    image: string,
    alt: string,
}
export default function SelectableApplication({ domain, image, alt } : SelectableApplicationProps) {
    const dispatch = useDispatch()
    const currentDomain = useSelector((state: RootState) => state.domainSlice)
    return (
        <button className={"block rounded-full w-16 h-16 border-2 border-r-0 border-dotted select-none " + (currentDomain.value == domain ? "border-yellow-500" : "border-background")} onClick={() => dispatch(setDomain(domain))}>
            <img
                src={image}
                className={"rounded-full w-16 h-16 object-cover hover:grayscale-0 duration-500 ease-in-out select-none bg-white " + (currentDomain.value == domain ? "grayscale-0" : "grayscale")}
                alt={alt}
                width={128}
                height={128}
            />
        </button>
    )
}