import Image from "next/image"
import Link from "next/link"

export const StartNowSection = () => {
    return (
        <div className="flex flex-col md:h-[360px] bg-[#1D87C5] relative items-center justify-center">
            <span className="absolute h-full w-full">
                <Image alt="" width={0} height={0} src={require("@/assets/NowSection.png")}/>
            </span>
            <span className="z-10 text-center flex flex-col gap-[.5em] items-center">
                <p className="text-[#FFFFFFB2] font-[grotesk] font-[700] text-[16px]">COMECE AGORA</p>
                <h3 className="text-[#FFFFFF] font-[grotesk] font-[700] text-[40px]">PRONTO PARA TRANSFORMAR O SEU NEGÓCIO?</h3>
                <Link href="/about" className="bg-[#FFFFFF] p-[14px] rounded-[32px]">
                    <span className="text-[#0E0C15] font-[grotesk] font-[900] text-[16px]">Inicie seu Projecto</span>
                </Link>
            </span>
        </div>
    )
}