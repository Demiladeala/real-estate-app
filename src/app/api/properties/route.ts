import { NextResponse, NextRequest } from "next/server";
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

export async function POST(req: NextRequest){
    const body = await req.json() as RequestParams

    const propertiesResult = await dbClient.property.create({
        data: {
            images: ["https://www.abujaproperties.com/wp-content/uploads/2021/06/AAA.png"],
            name: "Land For Sale",
            description: "A beautiful commercial land measuring 6,900sqm is available for outright sale.The table land comes with a clean title; CofO. Location is very strategic in the heart of Central Area, Abuja.",
            address: "Central Area ,Abuja",
            price: 2500000000,
            bedrooms: 0,    
            bathrooms: 0,
            sqft: 6900,
            acre: 0.158,
            features:[],
            propertyType: "Land",
            type: "land",
            status: "Sale",
            availability: "Active",
            monthlyPayment: 180000,
            propertyUsage: "Residential",
            nearbySchools: ["Central High School"],
            communicationInfo: "Family-friendly neighborhood with recreational facilities",
        }
    })


    return NextResponse.json(propertiesResult);
}

export async function GET() {

    const result = await dbClient.property.findMany();

    return NextResponse.json(result);
}
