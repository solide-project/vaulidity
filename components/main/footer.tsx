"use client"

import { Icon } from "@iconify/react"
import Link from "next/link"

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
}

export const Footer = ({
}: FooterProps) => {
    return <footer className="grid grid-cols-12 py-2 gap-4 border-t">
        <div className="col-span-12 lg:col-span-4 flex items-center justify-center gap-x-2">
            <Icon className="text-primary" icon="lucide:droplet" width="24" height="24" />
            <span className="font-semibold tracking-tight">
                Solide
            </span>
        </div>
        <div className="col-span-12 lg:col-span-4 flex items-center justify-center">
            <span className="">Made with ❤️ by Solide Project</span>
        </div>
        <div className="col-span-12 lg:col-span-4 flex items-center justify-center">
            <div className="flex gap-2">
                <Link href={"http://dapp.solide0x.tech"}>
                    <Icon icon="lucide:globe" fontSize={24} />
                </Link>
            </div>
        </div>
    </footer>
}