"use client"

import { ChainID, getIconByChainId, getNetworkNameFromChainID } from "@/lib/chains";
import { InformationTitle } from "./information/information-title";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const items = [
    {
        chain: ChainID.TRON_NILE_TESTNET,
        address: "TE43ModJ1frz3T9uv4bfaARGsTETuPzFnn"
    }, 
    {
        chain: ChainID.ETHEREUM_MAINNET,
        address: "0xdac17f958d2ee523a2206206994597c13d831ec7"
    }, 
    {
        chain: ChainID.SHARDEUM_SPHINX_1_X,
        address: "0x88f8b1027b2e8a4b5397537eb3ed3fc459a3e63f"
    },
    {
        chain: ChainID.BITTORRENT_TESTNET,
        address: "0x602b480060228Cb29A7b132de0b653d48D529771"
    }
]

interface ExplorerNotFoundProps extends React.HTMLAttributes<HTMLDivElement> {
    message?: string
}

export const ExplorerNotFound = ({ message }: ExplorerNotFoundProps) => {
    const router = useRouter()
    
    return <div className="container">
        {message && <div className="text-red-500 text-center my-8">{message}</div>}
        <div className="mb-16">
            <InformationTitle
                icon="lucide:box"
                title="Explore" />

            <div className="grid grid-col-3 gap-4">
                {items.map((item, index: number) => {
                    return <div key={index}
                        className="flex items-center gap-2 bg-grayscale-025 hover:bg-grayscale-050 rounded-md cursor-pointer pl-2"
                        onClick={() => router.push(`/${item.chain}/${item.address}`)}
                    >
                        <Image
                            width={64} height={64}
                            alt={getNetworkNameFromChainID(item.chain)}
                            loader={() => getIconByChainId(item.chain)}
                            src={getIconByChainId(item.chain)}
                            // src={getIconByChainId(chainId.toString())}
                            className={cn(
                                buttonVariants({ size: "icon", variant: "outline" }),
                                "h-8 w-8 cursor-pointer border-none sm:h-12 sm:w-12 bg-transparent"
                            )}
                        />
                        <div>{item.address}</div>
                    </div>
                })}

            </div>
        </div>
    </div>
}