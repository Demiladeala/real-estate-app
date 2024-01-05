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
            images: ["https://static.giggster.com/images/location/ca5202c1-854f-4eb2-83c0-635c5f1e01e4/d859ba35-e9fa-474f-8b44-dfe8ae061b22/gallery_2.jpeg", "https://static.giggster.com/images/location/ca5202c1-854f-4eb2-83c0-635c5f1e01e4/4dcc199d-0c60-4858-8a8b-8158ee0f4992/gallery_2.jpeg"],
            name: "Luxury Condominium with City Views",
            description: "Spacious condominium with panoramic views of the city.",
            address: "Skyline Residences, Maitama",
            price: 12000000,
            bedrooms: 3,    
            bathrooms: 2,
            sqft: 1800,
            features:["City Views", "Swimming Pool", "Fitness Center"],
            propertyType: "Condominium",
            type: "property",
            status: "Sale",
            nearbySchools: ["Maitama Academy"],
            communicationInfo: "Easy access to public transportation",
        }
    })


    return NextResponse.json(propertiesResult);
}

export async function GET(req: NextRequest) {

    const result = await dbClient.property.findMany();

    return NextResponse.json(result);
}
