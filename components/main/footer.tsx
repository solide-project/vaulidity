"use client"

import { Icon } from "@iconify/react"
import Link from "next/link"
import { ToggleTheme } from "@/components/theme/toggle-theme"

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
}

export const Footer = ({
}: FooterProps) => {
    return <footer className="grid grid-cols-12 py-2 gap-4 border-t">
        <div className="col-span-12 sm:col-span-4 flex items-center justify-center gap-x-2">
            <Icon className="text-primary" icon="lucide:droplet" width="24" height="24" />
            <span className="font-semibold tracking-tight">
                Solide
            </span>
        </div>
        <div className="col-span-6 sm:col-span-4 flex items-center justify-center space-x-2 text-sm">
            <span>Solide</span>
            <span className="text-gray-400">© {new Date().getFullYear()}</span>
        </div>
        <div className="col-span-6 sm:col-span-4 flex items-center justify-center">
            <div className="flex gap-2 items-center">
                <Link href="http://dapp.solide0x.tech">
                    <Icon icon="ph:globe-light" fontSize={18} />
                </Link>
                <Link href="https://x.com/SolideProject" target="_blank">
                    <Icon icon="pajamas:twitter" fontSize={18} />
                </Link>
                <ToggleTheme />
            </div>
        </div>
    </footer>
}