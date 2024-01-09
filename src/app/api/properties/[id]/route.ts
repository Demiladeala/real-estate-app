import { NextResponse } from "next/server"
import dbClient from "@/app/utils/dbClient";

type RequestParams = {
    images: string[];
    name: string;
    description: string;
    address: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    sqft: number;
    features: string[];
    propertyType: string;
    purpose: string;
    type: string;
    status: string;
    monthlyPayment?: number;
    nearbySchools: string[];
    communicationInfo: string;
}

export async function GET(req: any, {params}: any) {
    
    const {id} = params
    
    const result = await dbClient.property.findFirst({
        where:  {
            id: parseInt(id)
        }
    })

    return NextResponse.json(result);
}





