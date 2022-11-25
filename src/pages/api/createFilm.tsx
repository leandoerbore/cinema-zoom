import {NextApiRequest, NextApiResponse} from "next";
import {PrismaClient} from "@prisma/client";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        const { film  } = req.body;
        const prisma = new PrismaClient()

        const savedFilm = await prisma.films.create({
            data: film
        })

        res.status(200).json(savedFilm)
    } catch (error) {
        res.status(400).json({message: 'Something went wrong'})
    }
}