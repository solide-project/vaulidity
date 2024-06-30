"use client";

import { Icon } from '@iconify/react';
import { Button } from '@/components/ui/button';
import { FileTree } from '@/components/file-explorer/file-tree';
import { IDE } from '@/components/main/ide';
import { download } from '@/lib/file';
import { useFileSystem } from '@/components/file-explorer/file-provider';
import { downloadFile } from '@/lib/helper/download';

interface SourceTabProps extends React.HTMLAttributes<HTMLDivElement> {
}

export const SourceTab = ({ }: SourceTabProps) => {
    const { fs } = useFileSystem()

    const downloadSource = async () => {
        const sources = await fs.generateSources()
        const sourceBlob: Blob = await download(sources)
        downloadFile({
            source: sourceBlob,
            name: "contract.zip",
        })
    }

    return <div className="my-4">
        <div className="flex justify-between items-center my-1 px-2">
            <div className="font-bold">Source Code</div>
            <Button variant="ghost" size="sm"
                className="flex items-center space-x-1"
                onClick={downloadSource}>
                <Icon icon="tabler:file-download" inline={true} fontSize={18}></Icon>
                <div>Download</div>
            </Button>
        </div>

        <div className="grid grid-cols-12 container">
            <div className="col-span-3">
                <FileTree name={"root"} />
            </div>
            <div className="col-span-9">
                <IDE />
            </div>
        </div>
    </div >
}