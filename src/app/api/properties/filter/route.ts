import { NextResponse, NextRequest } from "next/server";
import dbClient from "@/app/utils/dbClient";

export async function GET(req:any, res: any) {
    return NextResponse.json("Testing Filter API")
}