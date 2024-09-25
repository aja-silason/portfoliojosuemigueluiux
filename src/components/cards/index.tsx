
type AboutProps = {
    insta: string,
    linkefin: string,
}

const inta = require("@/assets/insta.png");
const linkedin = require("@/assets/linkedin.png");

export const About = ({insta, linkefin}: AboutProps) => {
    return(
        <div className="flex flex-col px-[5em] gap-[1em] text-white">
            <div className="flex flex-col gap-[.8em]">
                <span className="font-[syne] text-[#105D94] text-[16pt] font-[600]">Quem sou</span>
                <span className="font-[grotesk] text-[25pt] font-[400]">Com +1 ano de experiência no meio digital, atualmente trabalho como Designer Pleno e Freelancer, colaborando para o crescimento das empresas no mercado tech.</span>
                <span className="font-[grotesk] text-[25pt] font-[400]">Compartilho conteúdo sobre Design de produto no Linkedin com +4K conexões.</span>
            </div>
            <div>
                <span></span>
            </div>
        </div>
    )
}