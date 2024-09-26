import Image from "next/image";

const image1 = require("@/assets/image1.png");
const image2 = require("@/assets/image2.png");
const image3 = require("@/assets/image3.png");
const image4 = require("@/assets/image4.png");
const image5 = require("@/assets/image5.png");

export const Projects = () => {
    return (
        <div className="md:my-[2em] sm:my-[2em] flex items-center flex-col">
            <div className="overflow-hidden flex gap-[2em] items-center justify-center">
                <Image src={image1} alt="" width={400} height={50}/>
                <Image src={image2} alt=""/>
                <Image src={image3} alt=""/>
                <Image src={image4} alt=""/>
                <Image src={image5} alt=""/>
            </div>
            <div className="flex gap-[20em] h-[10em] w-[100%]">
                <div className="shadow-bottomblack sm:mt-[10em] "></div>
                <div className="shadow-bottomblack sm:mt-[10em] "></div>
                <div className="shadow-bottomblack sm:mt-[10em] "></div>
                <div className="shadow-bottomblack sm:mt-[10em] "></div>
                <div className="shadow-bottomblack sm:mt-[10em] "></div>
            </div>
        </div>
    )
}