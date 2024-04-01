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

            <div>
                {items.map((item, index: number) => {
                    return <div key={index}
                        className="border rounded-md cursor-pointer flex items-center space-x-2 hover:bg-gray-100"
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
                                "h-12 w-12 cursor-pointer border-none sm:h-16 sm:w-16 hover:bg-transparent"
                            )}
                        />
                        <div>{item.address}</div>
                    </div>
                })}

            </div>
        </div>
    </div>
}