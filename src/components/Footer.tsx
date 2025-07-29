import Image from "next/image";
import React from "react";
import {SiGithub, SiGmail} from "@icons-pack/react-simple-icons";
import {IconTag} from "@/components/IconTag";

export default function Footer() {
    return (
        <footer className={"pb-4 flex flex-row justify-between items-center"}>
            <Image
                className="invert dark:invert-0"
                src="/mihou-logo.png"
                alt="Mihou Logo"
                width={32}
                height={32}
                priority
            />
            <div className={"flex flex-row gap-4 items-center"}>
                <a href={"https://github.com/ShindouMihou/"} target={"_blank"} className={"hover-flow"}>
                    <SiGithub size={24}/>
                </a>
                <a href={"mailto:hello@mihou.dev"} target={"_blank"} className={"hover-flow flex flex-row gap-2 items-center group"}>
                    <IconTag>hello@mihou.dev</IconTag>
                    <SiGmail size={24}/>
                </a>
            </div>
        </footer>
    )
}