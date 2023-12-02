import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(_req: NextApiRequest,res: NextApiResponse) {
    await res.revalidate('/comments');
    return res.json({ revalidated: true })
}