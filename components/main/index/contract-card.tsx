"use client"

import { getIconByChainId, getNetworkNameFromChainID } from "@/lib/chains"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"


interface ContractCardProps extends React.HTMLAttributes<HTMLDivElement> {
    item: any
}

export const ContractCard = ({ item }: ContractCardProps) => {
    const router = useRouter()

    return <div className="flex items-center gap-2 bg-grayscale-025 hover:bg-grayscale-050 rounded-md cursor-pointer pl-2 py-1"
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
                "cursor-pointer border-none h-8 sm:w-8 bg-transparent"
            )}
        />
        <div className="flex flex-col">
            <div className="text-bold">{item.name}</div>
            <div className="text-sm">{item.address}</div>
        </div>
    </div>
}