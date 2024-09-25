import Image from "next/image";
import Style from "@/assets/stytle.module.css";
import { ButtonLink } from "../button";

const globalImage = require("@/assets/global.png");
const rotateImage = require("@/assets/rotate.png"); 
const profileImage = require("@/assets/profileImage.png"); 
const gradiente = require("@/assets/degrade.png"); 
const grade = require("@/assets/grade.png"); 
const hand = require("@/assets/hand.png"); 

export const Header = () => {
    return(
        <div className="text-white px-[5em] h-[100vh]">

            <div className="border border-[#ffffffA1] rounded-[100px] h-[60px] flex justify-between items-center px-[1em] bg-gradient-to-r from-[#00000046] to-[#ffffff0A] z-1">
                <span>
                    <p className="text-[16pt] font-[syne] font-[700]">Josué Miguel</p>
                </span>
                
                <span className="flex gap-[.5em] items-center font-[400] font-[grotesk]">
                    <span className="w-[8px] h-[8px] bg-[#05900C] rounded-[100px]"></span>
                    Disponível para projectos
                    <Image src={globalImage} alt="global-image"/>
                </span>
            </div>
            <div className="flex items-center justify-between flex-col gap-[2em]">
                <div className={`flex overflow-hidden items-center justify-center pt-[2em] my-[2em]`}>
                    <span className="flex items-center justify-center">
                        <Image src={rotateImage} alt="" className={`${Style.rotateText} z-1`}/>
                        <Image src={profileImage} alt="" className="z-1"/>
                    </span>

                    <Image src={grade} alt="" className="z-0 md:absolute md:mt-[15em] opacity-[.4]"/>
                    <Image src={gradiente} alt="" className="z-[1] md:absolute sm:absolute xl:absolute mt-[10em]"/>
                </div>

                <div className="w-[50%] text-center flex flex-col gap-[2em]">
                    <span className="flex gap-[.5em] items-center justify-center font-[grotesk] font-[500]">
                    Opaaaaah! <Image src={hand} alt="" className="z-1"/> Eu sou Josué Design
                    </span>
                    <span className="font-[900] font-[grotesk] text-[30pt]">
                    Construindo <span className="text-[#105D94]">produtos digitais</span> intuitivos de forma moderna e com alta qualidade
                    </span>
                </div>

                <ButtonLink text="Inicie seu Projecto" href="#"/>

            </div>

            
        </div>
    )
}
