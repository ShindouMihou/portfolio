"use client";

import SelectableApplication from "@/components/SelectableApplication";

export default function ViewableApplications() {
    return (
        <div className={"flex flex-row flex-wrap gap-4 py-4 mx-auto items-center justify-center"}>
            <SelectableApplication
                domain={"https://flyght.mihou.dev"}
                image={"https://portfolio-image-assets.mihou.dev/flyght-profile.png"}
                alt={"Flyght"}
            />
            <SelectableApplication
                domain={"https://threadscore.mihou.dev"}
                image={"https://portfolio-image-assets.mihou.dev/threadscore.png"}
                alt={"Threadscore"}
            />
            <SelectableApplication
                domain={"https://blog.mihou.dev"}
                image={"https://portfolio-image-assets.mihou.dev/primrose.png"}
                alt={"Primrose"}
            />
            <SelectableApplication
                domain={"https://exponie.mihou.dev"}
                image={"https://exponie.mihou.dev/favicon.png"}
                alt={"Exponie"}
            />
            <SelectableApplication
                domain={"https://beemo.gg"}
                image={"https://portfolio-image-assets.mihou.dev/47e5abaedee90b70a37826ee3d7435e6.png"}
                alt={"Beemo"}
            />
            <SelectableApplication
                domain={"https://irina.pages.dev"}
                image={"https://portfolio-image-assets.mihou.dev/ddaaa9e3ef8cfc724ba42c44cc54b265.png"}
                alt={"Bellus"}
            />
            <SelectableApplication
                domain={"https://rubberduck.mihou.dev"}
                image={"https://portfolio-image-assets.mihou.dev/Rubber_Duck_in_White.png"}
                alt={"My Rubber Duck"}
            />
        </div>
    )
}
