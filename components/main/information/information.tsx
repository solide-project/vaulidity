"use client"

import { ExplorerData } from "@/lib/explorer/interface"
import { ContractData } from "./contract-data"
import { VerificationStatus } from "./verification-status"

interface InformationProps extends React.HTMLAttributes<HTMLDivElement> {
    data?: ExplorerData
}

export const Information = ({
    data,
}: InformationProps) => {
    return <div>
        <VerificationStatus data={data} />
        <ContractData data={data} />
    </div>
}
