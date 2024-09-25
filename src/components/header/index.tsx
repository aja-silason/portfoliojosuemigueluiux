import Image from "next/image"

const globalImage = require("@/assets/global.jpg");

export const Header = () => {
    return(
        <div className="text-white px-[5em] h-[100vh]">
            <div className="head border border-[#ffffffa1] rounded-[100px] h-[50px] flex justify-between items-center px-[1em]">
                <span>
                    <p className="font-[700] text-[14pt]">Josué Miguel</p>
                </span>
                <span className="text-white rounded-[100px] shadow-glow transition duration-300 "></span>
                <span className="flex gap-[.5em] items-center font-[400]">
                    <span className="w-[8px] h-[8px] bg-[#05900C] rounded-[100px]"></span>
                    Disponível para projectos
                    <Image src={globalImage} alt="global-image"/>
                </span>
            </div>
            <div className="profile"></div>
        </div>
    )
}