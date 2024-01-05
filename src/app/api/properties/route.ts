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
            images: ["hhttps://crimsonoaks.com.ng/wp-content/uploads/2023/05/7351f264-5075-48b4-b3af-d6fb52bc07ee-1080x570.jpg", "https://crimsonoaks.com.ng/wp-content/uploads/2023/05/57f62263-0c0b-44e9-870c-6d31a6b01459-1080x570.jpg"],
            name: "Modern Apartment",
            description: "State-of-the-art apartment complex with multiple units and amenities.",
            address: "Metropolitan Towers, Gwarinpa",
            price: 485000000,
            bedrooms: 5,    
            bathrooms: 6,
            sqft: 4000,
            features:["Multiple Units", "Swimming Pool", "Fitness Center"],
            propertyType: "Apartment Complex",
            type: "land",
            status: "Sale",
            monthlyPayment: 180000,
            nearbySchools: ["Gwarinpa Secondary School"],
            communicationInfo: "Family-friendly neighborhood with recreational facilities",
        }
    })


    return NextResponse.json(propertiesResult);
}

export async function GET(req: NextRequest) {

    const result = await dbClient.property.findMany();

    return NextResponse.json(result);
}
