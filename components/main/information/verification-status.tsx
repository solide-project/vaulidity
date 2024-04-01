import { InformationTitle } from "./information-title"
import { Icon } from "@iconify/react"
import { ExplorerData } from "@/lib/explorer/interface"

interface VerificationStatusProps extends React.HTMLAttributes<HTMLDivElement> {
    data?: ExplorerData
}

export const VerificationStatus = ({
    data,
}: VerificationStatusProps) => {
    return <div className="my-8">
        <InformationTitle
            icon="lucide:badge-check"
            title="Status" />

        <div className="flex space-x-8 justify-center">
            <div className="flex space-x-4">
                {data?.status?.onchain
                    ? <VerificationCard icon="lucide:shield-check" title="Verified on chain" status={true} />
                    : <VerificationCard icon="lucide:shield-alert" title="Not verified on chain" />}
            </div>
            <div className="flex space-x-4">
                {data?.status?.bytecode
                    ? <VerificationCard icon="lucide:folder-check" title="Stored on Solidity Database" status={true} />
                    : <VerificationCard icon="lucide:folder-x" title="Not available on Solide" />}
            </div>
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
    return <div className="flex space-x-4">
        <Icon className={status ? "text-green-800" : "text-red-800"} icon={icon} inline={true} fontSize={24} />
        <span>{title}</span>
    </div>
}