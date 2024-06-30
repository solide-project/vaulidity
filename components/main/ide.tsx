import { useEffect, useState } from "react"
import Editor, { useMonaco } from "@monaco-editor/react"

import { useFileSystem } from "@/components/file-explorer/file-provider"

import { SolideFile } from "@/lib/file"
import { useTheme } from "next-themes"

interface IDEProps extends React.HTMLAttributes<HTMLDivElement> {
    defaultLanguage?: string
}

export function IDE({ defaultLanguage = "sol" }: IDEProps) {
    const { theme } = useTheme()
    const { selectedFile, handleIDEChange } = useFileSystem()
    const [file, setSelectedFile] = useState<SolideFile>({} as SolideFile)

    useEffect(() => {
        setSelectedFile(selectedFile)
    }, [selectedFile])

    const monaco = useMonaco()
    useEffect(() => {
        if (monaco) {
            console.log(monaco)
        }
    }, [monaco])

    const onChange = async (newValue: string | undefined, event: any) => {
        if (!newValue) return
        handleIDEChange(selectedFile.filePath, newValue)
    }

    return <Editor
        key={file.filePath}
        height="75vh"
        theme={theme === "light" ? "vs" : "vs-dark"}
        defaultLanguage={defaultLanguage}
        defaultValue={file.content || ""}
        options={{ readOnly: true }}
    />
}
