"use client"

import { ExplorerData } from "@/lib/explorer/interface"
import { useEffect } from "react"
import { useFileSystem } from "../file-explorer/file-provider"
import { ContractHeader } from "./information/contract-header"
import { ContractTabs } from "./information/tabs/contract-tabs"
import { ContractData } from "./information/contract-data"

interface ExplorerDashboardProps extends React.HTMLAttributes<HTMLDivElement> {
    data: ExplorerData
    metadata: any
}

export const ExplorerDashboard = ({
    data,
    metadata
}: ExplorerDashboardProps) => {
    const { initIDE } = useFileSystem()

    useEffect(() => {
        // console.log(data)
        if (metadata.sources) {
            initIDE(metadata.sources);
        }
    }, [])

    return <div className="container">
        <ContractHeader data={data} />
        <hr className="my-4" />
        <ContractData data={data} />
        <ContractTabs data={data} />
    </div>
}