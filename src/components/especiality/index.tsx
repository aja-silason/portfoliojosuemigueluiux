import { CardEpecialist } from "../cards"

export const Especiality = () => {

    const landing = require("@/assets/landingwhiteicon.png");
    const app = require("@/assets/appwhiteicon.png");
    const atach = require("@/assets/atachwhiteicon.png");
    const blog = require("@/assets/blogswhiteicon.png");
    const dashboard = require("@/assets/dashboardwhiteicon.png");
    const global = require("@/assets/globalwhiteicon.png");
    return (
        <div className="p-[5em] flex flex-col w-[100%] items-center gap-[4em] py-[10em]">
            <div className="flex flex-col gap-[.5em] text-center items-center">
                <p className="text-[#105D94] font-[syne] font-[600] text-[16px]">MINHA ESPECIALIDADE</p>
                <h1 className="font-[grotesk] font-[700] text-[35px]">Como Posso lhe ajudar</h1>
                <p className="font-[grotesk] font-[400] text-[16px] w-[60%] text-[#FFFFFFB2]">Através de um design bem projetado e com propósito, ajudo empresas que querem evoluir no digital 
                com projetos que sejam únicos e eficientes.</p>
            </div>

            <div className="flex flex-wrap gap-[2em] w-[70%] items-center p-[1em]">
                <CardEpecialist icon={global} title="Sites" description="Design de sites funcionais e atraentes."/>
                <CardEpecialist icon={atach} title="Sistemas" description="Desenvolvimento de sistemas intuitivos e eficientes."/>
                <CardEpecialist icon={app} title="Aplicativos" description="Design de aplicativos modernos e user-friendly."/>
                <CardEpecialist icon={dashboard} title="Dashboard" description="Design de dashboards interativos e informativos."/>
                <CardEpecialist icon={landing} title="Landing Page" description="Criação de landing pages eficazes e envolventes."/>
                <CardEpecialist icon={blog} title="Blogs" description=""/>
            </div>
        </div>
    )
}