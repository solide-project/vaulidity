import { Icon } from "@iconify/react"
import { ExplorerData } from "@/lib/explorer/interface"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

interface VerificationStatusProps extends React.HTMLAttributes<HTMLDivElement> {
    data?: ExplorerData
}

export const VerificationStatus = ({
    data,
}: VerificationStatusProps) => {
    return <div className="flex space-x-2 justify-center">
        <div className="flex space-x-4">
            {data?.status?.onchain
                ? <VerificationCard icon="lucide:shield-check" title="Verified on Explorer" status={true} />
                : <VerificationCard icon="lucide:shield-alert" title="Unverified on Explorer" />}
        </div>
        <div className="flex space-x-4">
            {data?.status?.bytecode
                && <VerificationCard icon="lucide:folder-check" title="Stored Verified on Solide" status={true} />}
        </div>
    </div>
}

interface VerificationCardProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string,
    icon: string,
    status?: boolean,
}

const VerificationCard = ({
    title,
    icon,
    status = false,
}: VerificationCardProps) => {
    return <Tooltip>
        <TooltipTrigger className="flex space-x-1 text-sm">
            <Icon className={status ? "text-green-800" : "text-red-800"} icon={icon} inline={true} fontSize={18} />
            <div className={cn("hidden md:block", status ? "text-green-800" : "text-red-800")}>{status ? "Verified" : ""}</div>
        </TooltipTrigger>
        <TooltipContent>
            <p>{title}</p>
        </TooltipContent>
    </Tooltip >
}