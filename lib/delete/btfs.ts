'use server';

export default async function btfs(cid: string): Promise<any> {
    'use server';
    const response = await fetch(`https://gateway.btfs.io/btfs/${cid}`)

    return response.json()
}