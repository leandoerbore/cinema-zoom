import {NextApiRequest, NextApiResponse} from "next";
import {PrismaClient} from "@prisma/client";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        const prisma = new PrismaClient()

        const films = await prisma.films.findMany()

        res.status(200).json(films)
    } catch (error) {
        res.status(400).json({message: 'Something went wrong'})
    }
};