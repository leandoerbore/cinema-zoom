import { PrismaClient } from '@prisma/client'

import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        const { id } = req.body;
        const prisma = new PrismaClient()

        const savedSession = await prisma.sessions.findMany({
            where: {filmId: id}
        })

        res.status(200).json(savedSession)
    } catch (error) {
        res.status(400).json({message: 'Something went wrong'})
    }
};
