"use client"

import { ChainID, getIconByChainId, getNetworkNameFromChainID } from "@/lib/chains";
import { InformationTitle } from "./information/information-title";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const items = [
    // {
    //     chain: ChainID.TRON_NILE_TESTNET,
    //     address: "TE43ModJ1frz3T9uv4bfaARGsTETuPzFnn"
    // },
    {
        chain: ChainID.TRON_NILE_TESTNET,
        address: "TVPaonF8QAWHAi59vcz3a93mQdNSATjnLP"
    }, 
    {
        chain: ChainID.ETHEREUM_MAINNET,
        address: "0xdac17f958d2ee523a2206206994597c13d831ec7"
    }, 
    {
        chain: ChainID.BASE_SEPOLIA,
        address: "0x289A8325cC454d9369f2bcD589AC3015856fb3cb"
    },
    {
        chain: ChainID.ZKEVM_POLYGON_CARDONA,
        address: "0xbef6A4ae00eFdea4F1Ed3E4CFC5C8B594AC852FF"
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