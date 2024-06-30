import { ExplorerData } from "@/lib/explorer/interface"
import { Editor } from "@monaco-editor/react"
import { CopyText } from "@/components/main/copy-text"

interface AbiTabProps extends React.HTMLAttributes<HTMLDivElement> {
    data: ExplorerData
}

export const AbiTab = ({ data }: AbiTabProps) => {
    return <div className="my-4">
        <div className="flex justify-between items-center my-1 px-2">
            <div className="font-bold">ABI</div>
            <CopyText payload={data?.abi || ""} />
        </div>

        {data?.abi &&
            <Editor height="40vh" defaultLanguage="json" defaultValue={data?.abi || "Contract detail not found."}
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
}