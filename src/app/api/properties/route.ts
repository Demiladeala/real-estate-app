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
            images: ["https://www.abujaproperties.com/wp-content/uploads/2021/11/AWUYE.png"],
            name: "Decent Land measuring 1,305sqm at Wuye",
            description: "A decent land measuring 1,305 sqm is available for outright sale at Wuye with building approvals. This land has CofO and its ready for sighting.",
            address: "Wuye, Abuja",
            price: 120000000,
            bedrooms: 0,    
            bathrooms: 0,
            sqft: 1350,
            acre: 0.0309,
            features:[],
            propertyType: "",
            type: "land",
            status: "Sale",
            nearbySchools: ["Wuye High School"],
            communicationInfo: "Family-friendly neighborhood with recreational facilities",
        }
    })


    return NextResponse.json(propertiesResult);
}

export async function GET(req: NextRequest) {

    const result = await dbClient.property.findMany();

    return NextResponse.json(result);
}
