import { ExplorerData } from "@/lib/explorer/interface"
import { Editor } from "@monaco-editor/react"
import { CopyText } from "@/components/main/copy-text"

interface SettingsTabProps extends React.HTMLAttributes<HTMLDivElement> {
    data: ExplorerData
}

export const SettingsTab = ({ data }: SettingsTabProps) => {
    return <div className="my-4">
        <div className="flex justify-between items-center my-1 px-2">
            <div className="font-bold">Compiler Settings</div>
            <CopyText payload={data?.settings || ""} />
        </div>

        {data?.settings &&
            <Editor height="40vh" defaultLanguage="json" defaultValue={data?.settings || "Contract detail not found."}
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