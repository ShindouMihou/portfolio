"use client";
type Props = {
    name: string,
    link: string
}
export default function BlogPostItem({ name, link }: Props) {
    return (
        <div className={"flex flex-row items-center gap-4 hover:opacity-50 transition ease-in-out group"}>
            <p className={"text-xl text-yellow-500"}>•</p>
            <a href={link} target={"_blank"} className={"flex flex-col gap-1 select-none"}>
                <p className={"group-hover:text-yellow-500 leading-none"}>{name}</p>
            </a>
        </div>
    )
}