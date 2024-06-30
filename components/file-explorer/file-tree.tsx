"use client"

import { useState } from "react"
import { FolderOpen, FolderClosed, FileBox } from "lucide-react"

import { SolideFile, isSolideFile } from "@/lib/file"
import { cn } from "@/lib/utils"

import { useFileSystem } from "./file-provider"

interface FileTreeNodeProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  node: any
}

const iconsProps = {
  size: 18,
  className: "shrink-0",
}
const FileTreeNode = ({ name, node }: FileTreeNodeProps) => {
  const { handleIDEDisplay } = useFileSystem()
  const [isExpanded, setIsExpanded] = useState(false)

  const openFile = () => {
    handleIDEDisplay(node as SolideFile)
  }

  if (isSolideFile(node)) {
    return <div onClick={openFile}
      className="hover:bg-secondary flex items-center cursor-pointer space-x-1 pl-[16px]">
      <FileBox {...iconsProps} />
      <div className="truncate">
        {name}
      </div>
    </div>
  }

  return <div>
    <div onClick={() => node && setIsExpanded(!isExpanded)}
      className="hover:bg-secondary flex items-center cursor-pointer space-x-1 pl-[4px]" >
      {isExpanded ? <FolderOpen {...iconsProps} /> : <FolderClosed {...iconsProps} />}
      <div className="truncate">
        {name}
      </div>
    </div >
    {isExpanded && node && (
      <ul style={{ listStyleType: "none" }}>
        {Object.entries(node).map(([childName, childNode]) => <li key={childName}>
          <FileTreeNode name={childName} node={childNode} />
        </li>)}
      </ul>
    )}
  </div>
}

interface FileTreeProps extends React.HTMLAttributes<HTMLDivElement> {
  name?: string
}

export const FileTree = ({ name = "root", className }: FileTreeProps) => {
  const { fs } = useFileSystem()

  if (!fs) {
    return <div className={cn("overflow-x-auto", className)}>Empty</div>
  }

  return (
    <div className={cn("w-full h-full overflow-x-auto overflow-y-auto text-sm", className)}>
      {Object.keys(fs.fileSystem || {}).map((key) => {
        return <FileTreeNode key={key} name={key} node={fs.fileSystem[key]} />
      })}
    </div>
  )
}
