"use client"

import { ExplorerData } from "@/lib/explorer/interface"
import { Information } from "./information/information"
import { SourceIDE } from "./source-ide"
import { useEffect } from "react"
import { useFileSystem } from "../file-explorer/file-provider"

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
        console.log(data)
        if (metadata.sources) {
            initIDE(metadata.sources);
        }
    }, [])

    return <div className="container">
        <Information data={data} />
        <SourceIDE />
    </div>
}