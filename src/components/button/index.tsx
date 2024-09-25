import Link from "next/link"

type ButtonLinkProps = {
    text: string,
    href: string
}

export const ButtonLink = ({text, href}: ButtonLinkProps) => {
    return (
        <div className="z-10">
            <Link href={href} about="get your new project" className="bg-[#1D87C5] p-[14px] rounded-[8px] cursor-pointer transition-[600ms] hover:bg-[#1d87c5e0] font-[syne] font-[500]">
                {text}
            </Link>
        </div>
    )
}