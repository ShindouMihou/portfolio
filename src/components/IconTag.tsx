"use client";
type Props = { children: string };
export function IconTag({ children }: Props) {
    return (
        <div
            className={"bg-zinc-800 bg-opacity-40 rounded-full px-2 hidden group-hover:block group-hover:animate-blur-transition ease-in-out transition"}>
            <p>{children}</p>
        </div>
    );
}
