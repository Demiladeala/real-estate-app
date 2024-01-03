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
            images: ["https://images.propertypro.ng/large/newly-built-4-bedroom-semi-detached-duplex-wIpiGpBhtbkiGxWEWIpN.jpeg"],
            name: "Newly Built 4 Bedroom Semi Detached Duplex",
            description: "4 bedroom House for sale Ikota Lekki Lagos selling for ₦100,000,000. See property details on PropertyPro.ng or browse all our range of properties in Ikota Lekki Lagos4 bedroom House for sale in Ikota Lekki Lagos Buy 4 bedroom House for sale Newly Built 4-Bedroom Semi Detached Duplex in Ikota Lekki Lagos is a House. ✓ Real-time photos. Contact now for quick details on Newly Built 4-Bedroom Semi Detached Duplex  Aesthetically newly built 4-bedroom Semi detached duplex in a nice and serene environment",
            address: "zone 7 Galadimawa, Abuja",
            price: 100000000,
            bedrooms: 3,    
            bathrooms: 3,
            sqft: 2049,
            features: ["swimming pool"],
            propertyType: "Detached Duplex",
            type: "property",
            status: "Rent",
            monthlyPayment: 100000,
            nearbySchools: ["Hunter Street Elementary School"],
            communicationInfo: "Few or no restaurants within walking distance",
        }
    })


    return NextResponse.json(propertiesResult);
}
