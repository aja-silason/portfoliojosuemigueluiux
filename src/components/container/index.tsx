import { ReactNode } from "react"

type ContainerProps = {
    children: ReactNode
}

export const Container = ({children}: ContainerProps) => {
    return (
        <div className="m-0 p-0 bg-[#07080E] md:h-full xl:h-full sm::h-full md:py-[2em] sm:py-[2em] xl:py-[2em] text-white">
            {children}
        </div>
    )
}