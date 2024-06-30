"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"

export interface CopyTextItem {
  payload: string
}

interface CopyTextProps extends React.HTMLAttributes<HTMLDivElement> {
  payload: string
}

export function CopyText({ payload }: CopyTextProps) {
  const CopyIcon = () => <Copy className="h-5 lg:w-5" />
  const [icon, setIcon] = useState<JSX.Element>(CopyIcon())

  function copyText(entryText: string) {
    setIcon(<Check className="h-5 text-emerald-400 lg:w-5" />)
    navigator.clipboard.writeText(entryText)
    setTimeout(() => {
      setIcon(CopyIcon())
    }, 1000)
  }

  return <div
    className="flex cursor-pointer items-center space-x-2 text-base"
    onClick={() => copyText(payload || "")}
  >
    {icon}
  </div>
}