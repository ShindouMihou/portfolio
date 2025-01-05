"use client";

type Props = {
    name: string,
    description: string,
    link: string,
    language: string
}
export default function Repository({ name, description, link, language }: Props) {
    return (
        <div className={"flex flex-row items-center gap-4 hover:opacity-50 transition ease-in-out group"}>
            <p className={"text-xl text-yellow-500"}>•</p>
            <a href={link} target={"_blank"} className={"flex flex-col gap-1 select-none"}>
                <p className={"group-hover:text-yellow-500 leading-none"}>{name}</p>
                <p className={"text-xs text-zinc-500 text-left"}>{language ?? "Unknown language"}</p>
                <p className={"text-xs text-zinc-400 text-left pb-1"}>{description ?? "No description provided."}</p>
            </a>
        </div>
    )
}