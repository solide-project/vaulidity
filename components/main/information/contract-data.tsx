import { ExplorerData } from "@/lib/explorer/interface"
import Link from "next/link"
import Image from "next/image"
import { getIconByChainId } from "@/lib/chains"
import { useEffect, useState } from "react"
import { CopyText } from "../copy-text"

const BTFS_GATEWAY = "https://gateway.btfs.io/btfs"

interface ContractDataProps extends React.HTMLAttributes<HTMLDivElement> {
    data?: ExplorerData
}

export const ContractData = ({
    data,
}: ContractDataProps) => {
    const [settings, setSettings] = useState<any>({})

    useEffect(() => {
        if (data?.settings) {
            setSettings(JSON.parse(data.settings))
        }
    }, [])

    const mask = (data: string) => data.slice(0, 12) + "..." + data.slice(-12)

    return <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-6">
            <ContractDetail title="Contract address">
                <div>{data?.address}</div>
            </ContractDetail>
            <ContractDetail title="Contract name">
                <div>{data?.name}</div>
            </ContractDetail>
            <ContractDetail title="Network">
                <Image src={getIconByChainId(data?.chain || "")} height={18} width={18} alt="network" />
            </ContractDetail>
            <hr className="my-2" />
            <ContractDetail title="Language">
                <div>{data?.language}</div>
            </ContractDetail>
            <ContractDetail title="Compiler">
                <div>{data?.compilerVersion}</div>
            </ContractDetail>
            <ContractDetail title="Optimizations">
                <div>{settings?.optimizer?.enabled !== null ? settings?.optimizer?.enabled.toString() : "Unknown"}</div>
            </ContractDetail>
            <ContractDetail title="Runs">
                <div>{settings?.optimizer?.runs || "Unknown"}</div>
            </ContractDetail>
        </div>
        <div className="col-span-12 lg:col-span-6">
            <ContractDetail title="Storage ID">
                <div>{mask(data?.bytecodeId || "")}</div>
                <CopyText payload={data?.bytecodeId || ""} />
            </ContractDetail>
            <ContractDetail title="BTFS CID">
                {data?.metadataId
                    ? <Link className="text-primary hover:underline" target="_blank"
                        href={`${BTFS_GATEWAY}/${data?.metadataId}`}>
                        {data?.metadataId || ""}
                    </Link>
                    : <div>Source was not verified on Vaulidity</div>}
            </ContractDetail>
        </div>
    </div>
}

const ContractDetail = ({ title, children }: any) => {
    return <div className="flex px-5 py-1 gap-x-1 text-sm">
        <div className="w-48 text-gray-400">{title}:</div>
        <div className="break-all flex-1 leading-5 flex items-center gap-1">
            {children}
        </div>
    </div>
}