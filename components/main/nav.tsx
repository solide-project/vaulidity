"use client"

import { Droplet, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { ChainDropdown } from "./chain-dropdown";
import { useFileSystem } from "../file-explorer/file-provider";
import { useRouter } from "next/navigation";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useParams } from 'next/navigation'

interface NavBarProps extends React.HTMLAttributes<HTMLDivElement> {
}

export const NavBar = ({ }: NavBarProps) => {
    const router = useRouter()
    const params = useParams()

    const [address, setContractAddress] = useState<string>("");
    const [chain, setChain] = useState<string>("");

    const [isSearching, setIsSearching] = useState<boolean>(false);

    const handleSearch = async () => {
        if (params.chain === chain && params.contract === address) {
            return
        }

        router.push(`/${chain}/${address}`)
    }

    return <div className="flex justify-between px-4 sm:px-8 py-2 border-b sticky">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => router.push("/")}>
            <Droplet className="h-8 w-8 text-primary" />
            <div className="font-bold hidden sm:block">Vaulidity</div>
        </div>
        <div className="flex space-x-1">
            <div className={"flex items-center max-w-sm space-x-2 border border-gray-300 rounded-lg text-sm"}>
                <Input className="flex-1 bg-transparent border-0 w-[276px]" placeholder="0x..." type="text"
                    onChange={(e) => setContractAddress(e.target.value)} />
                <Button size="icon" variant="ghost" onClick={handleSearch} >
                    <Search className="h-4 w-4" />
                    <span className="sr-only">Send</span>
                </Button>
            </div>
            <ChainDropdown handleOnChange={(value: string) => setChain(value)} />
        </div>
    </div>
};