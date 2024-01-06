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
            images: ["https://images.nigeriapropertycentre.com/properties/images/1063688/06135f26d98275-shopoffice-space-at-wuse-2-shops-for-rent-wuse-2-abuja.jpg"],
            name: "Commercial Retail Space",
            description: "State-of-the-art apartment complex with multiple units and amenities.",
            address: "Metropolitan Towers, Mabushi",
            price: 90000000,
            bedrooms: 10,    
            bathrooms: 12,
            sqft: 8000,
            features:["Multiple Units", "Swimming Pool", "Fitness Center"],
            propertyType: "Apartment",
            type: "property",
            status: "Rent",
            nearbySchools: ["Mabushi High School"],
            communicationInfo: "Family-friendly neighborhood with recreational facilities",
        }
    })


    return NextResponse.json(propertiesResult);
}

export async function GET(req: NextRequest) {

    const result = await dbClient.property.findMany();

    return NextResponse.json(result);
}
