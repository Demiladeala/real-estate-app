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
            images: ["hhttps://crimsonoaks.com.ng/wp-content/uploads/2023/05/7351f264-5075-48b4-b3af-d6fb52bc07ee-1080x570.jpg"],
            name: "Modern Apartment",
            description: "Executive duplex with an attached office space for a seamless work-life balance.",
            address: "Executive Lane, Garki",
            price: 48850000,
            bedrooms: 5,    
            bathrooms: 6,
            sqft: 4000,
            features:["Home Office", "Smart Home System", "Private Parking"],
            propertyType: "Detached Duplex",
            type: "property",
            status: "Sale",
            monthlyPayment: 180000,
            nearbySchools: ["Garki International School"],
            communicationInfo: "Proximity to government offices and diplomatic zones",
        }
    })


    return NextResponse.json(propertiesResult);
}
