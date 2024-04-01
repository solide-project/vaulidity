"use client";

import { Icon } from '@iconify/react';
import { InformationTitle } from './information/information-title';
import { Button } from '../ui/button';
import { FileTree } from '../file-explorer/file-tree';
import { IDE } from './ide';
import { download } from '@/lib/file';
import { useFileSystem } from '../file-explorer/file-provider';
import { downloadFile } from '@/lib/helper/download';

interface SourceIDEProps extends React.HTMLAttributes<HTMLDivElement> {
}

export const SourceIDE = ({ }: SourceIDEProps) => {
    const { fs } = useFileSystem()

    const downloadSource = async () => {
        const sources = await fs.generateSources()
        const sourceBlob: Blob = await download(sources)
        downloadFile({
            source: sourceBlob,
            name: "contract.zip",
        })
    }


    return <div className="my-8">
        <div className="flex justify-between">
            <InformationTitle
                icon="lucide:code"
                title="Source" />
            <Button variant="ghost" className="flex space-x-2" onClick={downloadSource}>
                <Icon icon="tabler:file-download" inline={true} fontSize={24}></Icon>
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
    </div>
}