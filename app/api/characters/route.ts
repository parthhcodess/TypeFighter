import { PrismaClient } from "../../../app/generated/prisma";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
    const characters = await prisma.characters.findMany();
    return NextResponse.json(characters);
}