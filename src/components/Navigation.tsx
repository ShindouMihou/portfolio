import Image from "next/image";
import React from "react";

export default function Navigation() {
    return (
        <nav className={"pb-4"}>
            <Image
                className="invert dark:invert-0"
                src="/mihou-logo.png"
                alt="Mihou Logo"
                width={32}
                height={32}
                priority
            />
        </nav>
    )
}