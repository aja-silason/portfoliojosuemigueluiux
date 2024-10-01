import Image from "next/image";
import { CardJob } from "../cards"
import Link from "next/link";

export const MyWork = () => {

    const tagg = require("@/assets/taggimage.png");
    const uxpensive = require("@/assets/uxpensive.png");
    const vertodos = require("@/assets/vertodoscaso.png");
    const baxtterwebsite = require("@/assets/baxtterwebsite.png");

    // const aboutLink = "/about"

    return (
        <div className="py-[10em] px-[5em] flex flex-col gap-[6em]">
            <div className="flex justify-between">
                <span className="flex flex-col gap-[.5em]">
                    <p className="text-[#1D87C5] font-[syne] font-[600]">CASES DE DESIGN</p>
                    <h2 className="font-[700] font-[grotesk] text-[45px]">VEJA O MEU TRABALHO</h2>
                </span>
                <span className="border border-dashed px-[1em] py-[.5em] rounded-[10px] border-[#1D87C5] font-[700] font-[grotesk] flex h-[52px] items-center justify-center gap-[1em]">
                    {/* <Link href="/about">About</Link> */}
                    <p className="font-[700] font-[grotesk]">Ver todos cases</p>
                    <Image src={vertodos} alt="" className="mt-[.2em]"/>
                </span>
            </div>
            <div className="flex flex-wrap justify-between">
                <CardJob image={tagg} title="UI Design - Figma" description="TAAG - Angola Airlinnes"/>
                <CardJob image={uxpensive} title="UI Design - Figma" description="uXPensive"/>
                <CardJob image={baxtterwebsite} title="UI Design - Figma" description="Baxtter Angola"/>
            </div>
        </div>
    )
}