import { prisma } from "@/src/app/prisma/prismaClient";
import { NextResponse } from "next/server";


export async function GET() {
    const ingredients = await prisma.ingredient.findMany()

    return NextResponse.json(ingredients)
}