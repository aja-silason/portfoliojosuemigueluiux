import Image from "next/image";
import { ReactNode } from "react";

export const About = () => {
    return(
        <div className="flex flex-col px-[5em] gap-[1em] md:my-[5em] sm:my-[5em]">
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

const insta = require("@/assets/instagram.png");
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

const stars = require("@/assets/stars.png");

export const TrajectoryDetails = () => {
    return (
        <div className="flex md:mx-[15em] sm:mx-[10em] xl:mx-[5em] justify-center items-start gap-[2em] h-[100vh] my-[10em]">
            <Image src={stars} alt="" className="absolute z-0"/>    
            <span className="z-10 flex flex-col items-start justify-between w-[50%]">
                <ProfileDetails/>
                <Companies/>
            </span>

            <span className="z-10 flex flex-col w-[50%] gap-[1em]">
                <Trajectory/>
                <PlayList/>
            </span>
        </div>
    )
}

const profile = require("@/assets/profilejosue.png")

const ProfileDetails = () => {
    return(
        <div className="w-[100%] border-[#ccc] border p-[2em] rounded-[8px] border-opacity-[.2] mb-[1em] flex justify-between">
            <span className="w-[50%]">
                <Image src={profile} alt="" className="rounded-[8px]"/>
            </span>
            <span className="flex flex-col w-[50%] gap-[.5em]">
                <TextThin>
                    UI/UX | DIGITAL PRODUCT DESIGNER
                </TextThin>

                <TextBold>
                    Josué Miguel
                </TextBold>
                
                <TextThin>
                    Sou designer de produto apaixonado por criar interfaces.
                </TextThin>
            </span>
        </div>
    )
}

const company1 = require("@/assets/evoliumimage.png");
const company2 = require("@/assets/baxtterimage.png");

const Companies = () => {
    return(
        <div className="w-[100%] border-[#ccc] border p-[2em] rounded-[8px] border-opacity-[.2] text-center flex flex-col gap-[1em] ">
            <span>
                <span className="font-[grotesk] font-[600] text-[14pt]">Empresas que Colaborei</span>
            </span>
            <span className="flex justify-between">
                <Image src={company1} alt="" width={180} height={68}/>
                <Image src={company2} alt="" width={180} height={68}/>
            </span>
        </div>
    )
}

const Trajectory = () => {
    return(
        <div className="border-[#ccc] border p-[2em] rounded-[8px] border-opacity-[.2] flex flex-col gap-[1em]">
            <TextBoldThin>
                Minha Trajectória
            </TextBoldThin>
            <span className="flex flex-col gap-[1em]">
                <TextThin>
                    Em 2020 na pandemia eu abracei o mercado de tecnologia comecei a estudar programação com foco à Front-end mas acabei desistindo porque não consegui alcançar a metas que eu desejava por conta da ansiedade.
                </TextThin>
                <TextThin>
                    Ao longo da minha jornada fiz uma transição de carreira de programação para área de produtos digitais isto é no ano 2022, com foco à UX/UI Design. Com passar do tempo comecei a criar conteúdo no Linkedin sobre UX/UI Design.
                </TextThin>
                <TextThin>
                    Minha meta é aprimorar meu conhecimento técnico e minhas habilidades interpessoais (soft skills), visando ingressar no mercado de design em uma empresa conceituada. Desejo viver essa experiência e contribuir ativamente para o sucesso da organização.
                </TextThin>
            </span>
        </div>
    )
}

const PlayList = () => {
    return (
        <div className="border-[#ccc] border p-[2em] rounded-[8px] border-opacity-[.2] flex flex-col gap-[1em]">
            <TextBoldThin>Minha Playlist</TextBoldThin>
            <span className="flex overflow-x-scroll scrollbar-hidden overflow-hidden">
                <span className="flex gap-[1em] pr-[1em]">
                    <CardPlayList/>
                    <CardPlayList/>
                    <CardPlayList/>
                    <CardPlayList/>

                </span>
            </span>
        </div>
    )
}

const cardimage1 = require("@/assets/cardimage1.png");

const CardPlayList = () => {
    return(
        <div className="h-[285px] w-[223px] flex-col flex gap-[.5em]">
            <Image src={cardimage1} alt="" className="rounded-[.3em] w-[200px] h-[200px]"/>
            <span className="font-[600]">Uma historia escrita por Deus, Vol 2</span>
            <span className="font-[]">Thalles Roberto</span>
        </div>
    )
}

type TextThin = {
    children: ReactNode,
}

const TextThin = ({children}: TextThin) => {
    return (
        <span className={`font-[grotesk] font-[400] text-[11pt]`}>
            {children}
        </span>
    )
}

type TextBold = {
    children: ReactNode,
}
const TextBold = ({children}: TextBold) => {
    return(
        <span className={`font-[grotesk] font-[600] text-[22pt]`}>{children}</span>
    )
}

type TextBoldThin = {
    children: ReactNode,
}
const TextBoldThin = ({children}: TextBoldThin) => {
    return(
        <span className={`font-[grotesk] font-[600] text-[16pt]`}>{children}</span>
    )
}