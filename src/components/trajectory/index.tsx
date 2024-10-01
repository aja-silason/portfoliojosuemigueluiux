import Image from "next/image";
import { Companies, PlayList, ProfileDetails, Trajectory } from "../cards";

const stars = require("@/assets/stars.png");

export const TrajectoryDetails = () => {
    return (
        <div className="flex md:mx-[15em] sm:mx-[10em] xl:mx-[5em] justify-center items-start gap-[2em] h-[100vh] my-[10em]">
            <Image src={stars} alt="" className="absolute z-0 "/>    
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