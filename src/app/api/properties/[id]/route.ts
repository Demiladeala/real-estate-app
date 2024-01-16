import { NextResponse } from "next/server"
import dbClient from "@/app/utils/dbClient";

export async function GET(req:any, {params}: any) {
    
    const {id} = params
    
    const result = await dbClient.property.findFirst({
        where:  {
            id: parseInt(id)
        }
    })

    return NextResponse.json(result);
}





