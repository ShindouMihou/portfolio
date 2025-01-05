"use client";

import {getAgeFromDate} from "@/utils/age";
import {SiGithub, SiGmail} from "@icons-pack/react-simple-icons";
import {IconTag} from "@/components/IconTag";

export default function Introduction() {
    return (
        <>
            <div
                className={"font-spaceMono w-full gap-4 xl:gap-12 text-justify grid xl:grid-cols-2 xl:justify-between xl:px-6 leading-6"}>
                <div>
                    <h2 className={"font-horizons text-2xl"}>
                        Introduction
                    </h2>
                    <p>
                        I’m <b>Mihou</b>, {getAgeFromDate('12/22/2004')} years old from Bohol, who has experience
                        working with many frameworks, tools and cloud providers to build many applications ranging
                        from mobile applications, back-end and front-end applications and even open-source tools
                        and services for developers to use.
                    </p>
                </div>
                <div>
                    <p className={"xl:pt-4"}>
                        I began taking coding seriously roughly around 2019, making it about
                        roughly {getAgeFromDate('01/01/2019')} years since I've been coding. I'm most comfortable
                        with languages such as <b>Golang</b>, <b>Kotlin</b>, <b>Typescript</b> with knowledge in
                        many other languages such as <b>PHP</b>, <b>Java</b> and other languages.
                    </p>
                </div>
            </div>
            <div
                className={"font-spaceMono w-full text-justify xl:px-6 leading-6 flex flex-col gap-8"}>
                <p className={"xl:pt-4"}>
                    My primary way of deployment is with <b>Docker</b>, having built some tools around it,
                    and <b>Docker Swarm</b> plus I'm also experienced in frameworks, such as <b>Sveltekit</b>,
                    and <b>Next.js</b> having used them to build many web applications before. Additionally,
                    I've built mobile applications using <b>React Native</b> and <b>Capacitor.js paired with
                    SvelteKit</b>.
                </p>
                <p>
                    I've used many cloud providers from Cloudflare, for their <b>R2</b>, <b>Workers</b>, <b>Pages</b>
                    , <b>DNS Management</b>, <b>Zero Trust Platform</b>, <b>Tunnels</b> and many more, together
                    with <b>DigitalOcean</b> for their <b>Droplets</b> and <b>Object Storage</b>
                </p>
                <p>
                    <b>AWS</b> for
                    their <b>Elastic Compute Cloud (EC2)</b>, <b>Elastic Container Registry (ECR)</b>
                    , <b>Simple Cloud Storage (S3)</b>, <b>Simple Email Service (SES)</b>;
                    and <b>Azure</b> for their <b>Cloud Compute</b>; and <b>Google Cloud Platform</b> for
                    their <b>Compute Engine</b> and <b>AI Studio</b>.
                </p>
                <p>
                    I've also worked with databases such as <b>MongoDB</b>, <b>PostgreSQL</b>, <b>Redis </b>
                    for different live applications, depending on their needs. Furthermore, I've used publisher-subscriber,
                    and similar tools such as <b>Redis Pubsub</b> and <b>Nats.io</b> to communicate among clusters
                    and nodes to scale applications horizontally.
                 </p>
                <div className={"flex flex-row gap-4 items-center"}>
                    <a href={"https://github.com/ShindouMihou/"} target={"_blank"} className={"hover-flow"}>
                        <SiGithub size={24}/>
                    </a>
                    <a href={"mailto:hello@mihou.dev"} target={"_blank"} className={"hover-flow flex flex-row gap-2 items-center group"}>
                        <SiGmail size={24}/>
                        <IconTag>hello@mihou.dev</IconTag>
                    </a>
                </div>
            </div>
        </>
    )
}