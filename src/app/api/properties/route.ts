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
            images: ["https://www.wienerberger.co.uk/reference-projects/housing/apartments/jcr:content/root/responsivegrid_copy/teaserbox/smallteaserbox/image.imgTransformer/crop_1to1/lg-5/1696328373544/Corp_Wall_06.jpg"],
            name: "Modern Apartment Complex",
            description: "State-of-the-art apartment complex with multiple units and amenities.",
            address: "Metropolitan Towers, Mabushi",
            price: 90000000,
            bedrooms: 10,    
            bathrooms: 12,
            sqft: 8000,
            // acre: 0.0309,
            features:["Multiple Units","Swimming Pool","Fitness Center"],
            propertyType: "Apartment",
            type: "property",
            status: "Rent",
            availability: "Active",
            monthlyPayment: 180000,
            propertyUsage: "Residential",
            nearbySchools: ["Mabushi High School"],
            communicationInfo: "Family-friendly neighborhood with recreational facilities",




// 18	["https://hanoirealestate.com.vn/images/products/high-floor-modern-3bedroom-apartment-in-truc-bach_20211011358313.jpg"]	Modern 3 Bedroom Apartment	State-of-the-art apartment complex with multiple units and amenities.	Metropolitan Towers, Mabushi	90000000	10	12	8000	["Multiple Units","Swimming Pool","Fitness Center"]	Apartment	property	Rent		["Mabushi High School"]	Family-friendly neighborhood with recreational facilities	2024-01-09 07:46:32.878095+17	2024-01-09 07:46:32.878095+17		Active	Residential
// 19	["https://images.nigeriapropertycentre.com/properties/images/1672262/0641daa2556c83-luxury-4-bedroom-duplex-with-modern-amenities-terraced-duplexes-for-sale-lekki-phase-1-lekki-lagos.jpeg"]	Elegant 4 Bedroom Detached Duplex	State-of-the-art apartment complex with multiple units and amenities.	Metropolitan Towers, Mabushi	90000000	10	12	8000	["Multiple Units","Swimming Pool","Fitness Center"]	Apartment	property	Rent		["Mabushi High School"]	Family-friendly neighborhood with recreational facilities	2024-01-09 07:46:32.878095+18	2024-01-09 07:46:32.878095+18		Active	Residential
// 20	["https://www.engelvoelkers.com/images/c5cb04ce-8fbf-4f27-ae57-bf8bac788066/marbella-hillside:-contemporary-luxury-apartment-with-panoramic-views"]	Luxury Condominium with Panoramic Views	State-of-the-art apartment complex with multiple units and amenities.	Metropolitan Towers, Mabushi	90000000	10	12	8000	["Multiple Units","Swimming Pool","Fitness Center"]	Apartment	property	Rent		["Mabushi High School"]	Family-friendly neighborhood with recreational facilities	2024-01-09 07:46:32.878095+19	2024-01-09 07:46:32.878095+19		Active	Residential
// 21	["https://cf.bstatic.com/xdata/images/hotel/max1024x768/279609865.jpg?k=06c17adc1f36e7eb6156e25b16afde74a86890a1f06646d3c79cecfd69c84cdc&o=&hp=1"]	Cozy 2 Bedroom Apartment	State-of-the-art apartment complex with multiple units and amenities.	Metropolitan Towers, Mabushi	90000000	10	12	8000	["Multiple Units","Swimming Pool","Fitness Center"]	Apartment	property	Rent		["Mabushi High School"]	Family-friendly neighborhood with recreational facilities	2024-01-09 07:46:32.878095+20	2024-01-09 07:46:32.878095+20		Active	Residential
// 22	["https://cf.bstatic.com/xdata/images/hotel/max1024x768/499510132.jpg?k=c7e4d2768b7e327dce49da94544a695b54cdc87708a6037f740c95d458273bb1&o=&hp=1"]	Exclusive 3 Bedroom Apartment	State-of-the-art apartment complex with multiple units and amenities.	Metropolitan Towers, Mabushi	90000000	10	12	8000	["Multiple Units","Swimming Pool","Fitness Center"]	Apartment	property	Rent		["Mabushi High School"]	Family-friendly neighborhood with recreational facilities	2024-01-09 07:46:32.878095+21	2024-01-09 07:46:32.878095+21		Active	Residential
// 23	["https://images.nigeriapropertycentre.com/properties/images/1868387/064dca3a077f76-very-spacious-4-bedroom-terrace-duplex-terraced-duplexes-for-sale-lekki-lagos.jpg"]	Spacious 4 Bedroom Duplex	State-of-the-art apartment complex with multiple units and amenities.	Metropolitan Towers, Mabushi	90000000	10	12	8000	["Multiple Units","Swimming Pool","Fitness Center"]	Apartment	property	Rent		["Mabushi High School"]	Family-friendly neighborhood with recreational facilities	2024-01-09 07:46:32.878095+22	2024-01-09 07:46:32.878095+22		Active	Residential
// 24	["https://images.nigeriapropertycentre.com/properties/images/1063688/06135f26d98275-shopoffice-space-at-wuse-2-shops-for-rent-wuse-2-abuja.jpg"]	Commercial Retail Space	State-of-the-art apartment complex with multiple units and amenities.	Metropolitan Towers, Mabushi	90000000	10	12	8000	["Multiple Units","Swimming Pool","Fitness Center"]	Apartment	property	Rent		["Mabushi High School"]	Family-friendly neighborhood with recreational facilities	2024-01-09 07:46:32.878095+23	2024-01-09 07:46:32.878095+23		Active	Residential
// 25	["https://www.abujaproperties.com/wp-content/uploads/2021/06/AAA.png"]	Land For Sale	A beautiful commercial land measuring 6,900sqm is available for outright sale. The table land comes with a clean title; CofO. Location is very strategic in the heart of Central Area, Abuja.	Central Area ,Abuja	2500000000	0	0	6900	[]		land	Sale		["Central High School"]	Family-friendly neighborhood with recreational facilities	2024-01-09 07:46:32.878095+24	2024-01-09 07:46:32.878095+24	0.158	Active	Residential
        }
    })


    return NextResponse.json(propertiesResult);
}

export async function GET() {

    const result = await dbClient.property.findMany();

    return NextResponse.json(result);
}
