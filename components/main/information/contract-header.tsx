import { Button, buttonVariants } from "@/components/ui/button"
import { ExplorerData } from "@/lib/explorer/interface"
import { CopyText } from "@/components/main/copy-text"
import { Share } from "lucide-react"
import { VerificationStatus } from "./verification-status"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface ContractHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    data: ExplorerData
}

export const ContractHeader = ({ data }: ContractHeaderProps) => {
    const mask = (data: string) => data.slice(0, 6) + "..." + data.slice(-4)

    return <div className="flex flex-col md:flex-row justify-between my-8">
        <div className="flex space-x-2 items-center">
            <h2 className="text-xl font-bold sm:text-2xl">
                {data.name || "Unknown"}
            </h2>
            <div className="flex items-center space-x-2">
                <div>{mask(data.address) || "Unknown"}</div>
                <CopyText payload={data.address} />
            </div>
            <div>
                <VerificationStatus data={data} />
            </div>
        </div>

        <div className="flex space-x-2">
            <Button variant="ghost" size="sm"
                className="flex items-center space-x-1"
                onClick={() => navigator.clipboard.writeText(window.location.href)}>
                <Share size={14} />
                <div>Share</div>
            </Button>
            {data?.explorer &&
                <Link className={cn("text-primary hover:underline", buttonVariants({ size: "sm" }))} target="_blank"
                    href={data?.explorer}>View on Explorer</Link>}
            {data?.ideURL &&
                <Link className={cn("text-primary hover:underline", buttonVariants({ size: "sm" }))} target="_blank"
                    href={data?.ideURL}>Load on IDE</Link>}
        </div>
    </div>
}