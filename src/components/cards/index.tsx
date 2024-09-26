import Image from "next/image";
import { ReactNode } from "react";


export const About = () => {
    return(
        <div className="flex flex-col px-[5em] gap-[1em] text-white">
            <div className="flex flex-col gap-[.8em]">
                <span className="font-[syne] text-[#105D94] text-[16pt] font-[600]">Quem sou</span>
                <span className="font-[grotesk] text-[25pt] font-[400]">Com +1 ano de experiência no meio digital, atualmente trabalho como Designer Pleno e Freelancer, colaborando para o crescimento das empresas no mercado tech.</span>
                <span className="font-[grotesk] text-[25pt] font-[400]">Compartilho conteúdo sobre Design de produto no Linkedin com +4K conexões.</span>
            </div>
            <div className="border-t-[1px] border-[#ddd] opacity-5"></div>
            <div>
                <DetailsAbout/>
            </div>
        </div>
    )
}

type DetailsProps = {
    insta: string,
    linkefin: string,
}

const insta = require("@/assets/insta.png");
const linkedin = require("@/assets/lkdIn.png");
const eyeAndStar = require("@/assets/EyeAndStar.png");

const DetailsAbout = () => {
    return(
        <div className="flex justify-between">
            <span className="flex gap-[1em]">
                <SocialIconCard icon={<Image src={insta} alt=""/>}/>
                <SocialIconCard icon={<Image src={linkedin} alt=""/>}/>
            </span>

            <span className="flex gap-[.5em] items-center font-[grotesk] font-[400] text-[24px]">
                <Image src={eyeAndStar} alt=""/>
                Explore o meu portfólio e se surpreenda
            </span>
        </div>
    )
}


type SocialIconCardProps = {
    icon: ReactNode
}

const SocialIconCard = ({icon}: SocialIconCardProps) => {
    return(
        <div className="w-[58px] h-[58px] border-r-[0px] border-t-[1px] border-l-[1px] border-b-[0px] border-gray-500 border-opacity-[.2] rounded-[.5em] flex items-center justify-center">
            {icon}
        </div>
    )
}
