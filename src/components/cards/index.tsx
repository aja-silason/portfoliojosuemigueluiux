import Image from "next/image";
import { ReactNode } from "react";
import Style from "@/assets/stytle.module.css";



const insta = require("@/assets/instagram.png");
const linkedin = require("@/assets/lkdIn.png");
const eyeAndStar = require("@/assets/EyeAndStar.png");

export const DetailsAbout = () => {
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


const profile = require("@/assets/profilejosue.png")

export const ProfileDetails = () => {
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

export const Companies = () => {
    return(
        <div className="w-[100%] border-[#ccc] border p-[2em] rounded-[8px] border-opacity-[.2] text-center flex flex-col gap-[1em] ">
            <span>
                <span className="font-[grotesk] font-[600] text-[14pt]">Empresas que Colaborei</span>
            </span>
            <span className="flex justify-center flex-wrap items-center gap-[4em]">
                <Image src={company1} alt="" width={180} height={68}/>
                <Image src={company2} alt="" width={180} height={68}/>
            </span>
        </div>
    )
}

export const Trajectory = () => {
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

const cardimage1 = require("@/assets/cardimage1.png");
const cardimage2 = require("@/assets/cardimage2.png");
const cardimage3 = require("@/assets/cardimage3.png");

export const PlayList = () => {
    return (
        <div className="border-[#ccc] border p-[2em] rounded-[8px] border-opacity-[.2] flex flex-col gap-[1em]">
            <TextBoldThin>Minha Playlist</TextBoldThin>
            <span className="flex overflow-x-scroll scrollbar-hidden overflow-hidden">
                <span className="flex gap-[1em] pr-[1em]">
                    <CardPlayList icon={cardimage1} description="Uma historia escrita por Deus, Vol 2" author="Thalles Roberto"/>
                    <CardPlayList icon={cardimage2} description="Sleep" author="Gentle Ambient piano to help you fall asleep. "/>
                    <CardPlayList icon={cardimage3} description="Uma historia escrita por Deus, Vol 1" author="Thalles Roberto"/>
                </span>
            </span>
        </div>
    )
}

type CardPlayListProps = {
    description: string,
    author: string,
    icon: string,
}

const CardPlayList = ({description, author, icon}: CardPlayListProps) => {
    return(
        <div className="h-[285px] w-[223px] flex-col flex gap-[.3em]">
            <Image src={icon} alt="" className="rounded-[.3em] w-[200px] h-[200px]"/>
            <span className="font-[600]">{description}</span>
            <span className="font-[500] font-[archivo] text-[12pt]">{author}</span>
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

const stars = require("@/assets/stars.png");

export const Services = () => {
    return (
        <div className="px-[8em] py-[10em]">
            <div className="flex justify-between z-10">
                <Image src={stars} alt="" className="absolute z-0 "/>    
                <Servicedetails/>
                <ServicesCard/>
            </div>

            <div className="flex justify-center">
                <span className="shadow-lowglow"></span>
            </div>

        </div>
    )
}

const rotateImage = require("@/assets/rotate.png"); 
const profileImage = require("@/assets/profileImage.png");

const Servicedetails = () => {
    return(
        <div className="flex flex-col gap-[3em] items-start w-[20em]">
            <span className="flex items-center justify-center">
                <Image src={rotateImage} alt="" className={`${Style.rotateText} z-1`}/>
                <Image src={profileImage} alt="" className="z-1"/>
            </span>
            <span className="flex flex-col">
                <span className="font-[grotesk] font-[700] text-[20pt] ml-[-.8em]">Meus Serviços</span>
                <span className="font-[grotesk] font-[400] text-[12pt] ml-[-1.3em]">Descubra os serviços que ofereço para projetar soluções que solucionam problemas dos usuários.</span>
            </span>
        </div>
    )
}

const atach = require("@/assets/atached.png");

const ServicesCard = () => {
    return(
        <div className="w-[40%] flex flex-col gap-[1em]">

            <Card title="UI Design" description="Crio interfaces visuais atraentes e intuitivas, garantindo uma experiência agradável para os usuários. Utilizamos cores, tipografia e layout para refletir a identidade da sua marca. Nosso objetivo é harmonizar estética e funcionalidade. Usamos ferramentas avançadas para entregar designs excepcionais."/>
            <Card title="UX Design" description="Otimizo a experiência do usuário com pesquisas e testes aprofundados. Criamos soluções intuitivas que atendem às necessidades dos usuários. Utilizamos métodos como personas e protótipos para garantir interações eficientes. Nosso foco é proporcionar uma experiência satisfatória e significativa."/>
            <Card title="Figma" description="Ofereço serviços especializados em Figma para design colaborativo e prototipagem interativa. Utilizamos todos os recursos da plataforma para garantir precisão e qualidade. Facilitamos a colaboração em tempo real e a construção de sistemas de design. Garantimos uma transição suave do design para o desenvolvimento."/>
            
        </div>
    )
}


type CardProps = {
    title: string,
    description: string,
}

const Card = ({title, description}: CardProps) => {
    return(
        <div className="border rounded-[15px] w-[100%] p-[2em] flex flex-col gap-[1em]">

            <Image src={atach} alt="" width={50} height={50}/>
            <div className="flex flex-col gap-[.2em]">
                <span className="font-[grotesk] font-[700] text-[20pt] z-10">{title}</span>
                <span className="font-[grotesk] font-[400] text-[12pt] text-white z-10">{description}</span>
                <span className="shadow-miniglow rounded-[100em] absolute mx-[14em] my-[4em]"></span>
            </div>
            
        </div>
    )   
}

type CardEpecialistProps = {
    icon: string,
    title: string,
    description: string,
}
export const CardEpecialist = ({icon, title, description}: CardEpecialistProps) => {
    return (
        <div className="w-[280px] h-[270px] backdrop-blur-1 p-[.8em] bg-gradient-to-r from-[#0E0C15] bg-[#0e0c1581] flex flex-col justify-between rounded-[10px]">
            <Image src={icon} alt="" width={40} height={40}/>
            <span className="flex flex-col gap-[.5em]">
                <p className="font-[700] font-[grotesk] text-[25px]">{title}</p>
                <p className="font-[400] font-[grotesk] text-[16px]">{description}</p>
            </span>
        </div>
    )
}


type CardJobProps = {
    image: string,
    title: string,
    description: string
}

export const CardJob = ({image, title, description}: CardJobProps) => {
    return(
        <div className="w-[400px] h-[400px] relative rounded-[20px]">
            <div className="absolute z-10 w-[100%] h-[100%] flex flex-col justify-end">
                <div className="bg-[#01031380] h-[120px] flex flex-col gap-[.5em] blur-[5px] w-[101%]"></div>
                <div className="p-[1em] absolute flex flex-col gap-[5px]">
                    <span className="border z-10 p-[1em] border-[#FFFFFF1A] rounded-[100px] w-[135px] text-[13px]">{title}</span>
                    <span className="z-10 font-[grotesk] font-[700] text-[25px]">{description}</span>
                </div>
            </div>
            <Image src={image} alt="" className="absolute w-[100%] h-[100%] rounded-[20px]"/>
        </div>
    )
}