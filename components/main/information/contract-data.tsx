import { ExplorerData } from "@/lib/explorer/interface"
import { InformationTitle } from "./information-title"
import { Editor } from "@monaco-editor/react"
import Link from "next/link"

const BTFSGateway = "https://gateway.btfs.io/btfs"

interface ContractDataProps extends React.HTMLAttributes<HTMLDivElement> {
    data?: ExplorerData
}

export const ContractData = ({
    data,
}: ContractDataProps) => {
    return <div className="my-8">
        <InformationTitle
            icon="lucide:scroll-text"
            title="Contract" />

        <div className="flex-1 overflow-y-auto container">
            <div className="rounded bg-white divide-y">
                <div className="flex px-5 py-3 gap-x-4 gap-y-1">
                    <div className="w-56">Storage ID:</div>
                    <div className="break-all flex-1 leading-5">
                        {data?.bytecodeId}
                    </div>
                </div>
                <div className="flex px-5 py-3 gap-x-4 gap-y-1">
                    <div className="w-56">BTFS CID:</div>
                    <div className="break-all flex-1 leading-5">
                        {data?.metadataId &&
                            <Link className="text-primary hover:underline" target="_blank"
                                href={`${BTFSGateway}/${data?.metadataId}`}>
                                {data?.metadataId || ""}
                            </Link>}
                    </div>
                </div>
                <div className="flex px-5 py-3 gap-x-4 gap-y-1">
                    <div className="w-56">Timestamp:</div>
                    <div className="break-all flex-1 leading-5">{data?.timestamp?.toString()}</div>
                </div>
                <div className="flex px-5 py-3 gap-x-4 gap-y-1">
                    <div className="w-56">Explorer:</div>
                    <div className="break-all flex-1 leading-5">
                        {data?.explorer &&
                            <Link className="text-primary hover:underline" target="_blank"
                                href={data?.explorer}>{data?.address || ""}</Link>}
                    </div>
                </div>
                <div className="flex px-5 py-3 gap-x-4 gap-y-1">
                    <div className="w-56">View on Solide IDE:</div>
                    <div className="break-all flex-1 leading-5">
                        {data?.ideURL &&
                            <Link className="text-primary hover:underline" target="_blank"
                                href={data?.ideURL || ""}>{data?.ideURL || ""}</Link>}
                    </div>
                </div>
                <div className="flex px-5 py-3 gap-x-4 gap-y-1">
                    <div className="w-56">Bytecode:</div>
                    <div className="break-all flex-1 leading-5">
                        {data?.bytecode &&
                            <Editor height="20vh" defaultLanguage="javascript" defaultValue={data?.bytecode || "HERE"}
                                options={{
                                    wordWrap: "on",
                                    lineNumbers: 'off',
                                    glyphMargin: false,
                                    folding: false,
                                    // Undocumented see https://github.com/Microsoft/vscode/issues/30795#issuecomment-410998882
                                    lineDecorationsWidth: 0,
                                    lineNumbersMinChars: 0
                                }}
                            />}
                    </div>
                </div>
                <div className="flex px-5 py-3 gap-x-4 gap-y-1">
                    <div className="w-56">Contract Name:</div>
                    <div className="break-all flex-1 leading-5">{data?.name || ""}</div>
                </div>
                <div className="flex px-5 py-3 gap-x-4 gap-y-1">
                    <div className="w-56">Language:</div>
                    <div className="break-all flex-1 leading-5">{data?.language}</div>
                </div>
                <div className="flex px-5 py-3 gap-x-4 gap-y-1">
                    <div className="w-56">Bytecode:</div>
                    <div className="break-all flex-1 leading-5">{data?.compilerVersion}</div>
                </div>
            </div>
        </div>
    </div>
}
