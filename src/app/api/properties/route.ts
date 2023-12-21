import { NextResponse, NextRequest } from "next/server";
import dbClient from "@/app/utils/dbClient";
import { cookies } from "next/headers";

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

export async function POST(req: NextRequest){
    const body = await req.json() as RequestParams

    const propertiesResult = await dbClient.property.create({
        data: {
            images: body.images,
            name: body.name,
            description: body.description,
            address: body.address,
            price: body.price,
            bedrooms: body.bedrooms,
            bathrooms: body.bathrooms,
            sqft: body.sqft,
            features: body.features,
            propertyType: body.propertyType,
            purpose: body.purpose,
            type: body.type,
            status: body.status,
            monthlyPayment: body.monthlyPayment,
            nearbySchools: body.nearbySchools,
            communicationInfo: body.communicationInfo,
        }
    })


    return NextResponse.json(propertiesResult);
}
