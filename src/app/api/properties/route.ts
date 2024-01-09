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
            images: ["https://crimsonoaks.com.ng/wp-content/uploads/2023/05/7351f264-5075-48b4-b3af-d6fb52bc07ee-1080x570.jpg","https://crimsonoaks.com.ng/wp-content/uploads/2023/05/57f62263-0c0b-44e9-870c-6d31a6b01459-1080x570.jpg"],
            name: "Modern Apartment",
            description: "State-of-the-art apartment complex with multiple units and amenities.",
            address: "Metropolitan Towers, Gwarinpa",
            price: 4850000,
            bedrooms: 5,    
            bathrooms: 6,
            sqft: 4000,
            // acre: 0.0309,
            features:["Multiple Units","Swimming Pool","Fitness Center"],
            propertyType: "Apartment Complex",
            type: "property",
            status: "Sale",
            availability: "Active",
            monthlyPayment: 180000,
            propertyUsage: "Residential",
            nearbySchools: ["Gwarinpa Secondary School"],
            communicationInfo: "Family-friendly neighborhood with recreational facilities",


// 11	["https://www.mesitis.com.cy/ImageHandler.ashx?propImageID=ff92d9ab-fee2-ea11-a1df-a4badb3ceacd&isp=1"]	Modern 2 Bedroom Apartment	Spacious and modern apartment with stunning city views.	Luxury Towers, Wuse	8500000	2	2	1200	["Balcony","Parking","Security"]	Apartment	property	Sale		["Wuse Elementary School"]	Restaurants and cafes within walking distance	2024-01-09 07:46:32.878095+10	2024-01-09 07:46:32.878095+10		Active	Residential
// 12	["https://static.giggster.com/images/location/ca5202c1-854f-4eb2-83c0-635c5f1e01e4/d859ba35-e9fa-474f-8b44-dfe8ae061b22/gallery_2.jpeg","https://static.giggster.com/images/location/ca5202c1-854f-4eb2-83c0-635c5f1e01e4/4dcc199d-0c60-4858-8a8b-8158ee0f4992/gallery_2.jpeg"]	Luxury Condominium with City Views	Spacious condominium with panoramic views of the city.	Skyline Residences, Maitama	12000000	3	2	1800	["City Views","Swimming Pool","Fitness Center"]	Condominium	property	Sale		["Maitama Academy"]	Easy access to public transportation	2024-01-09 07:46:32.878095+11	2024-01-09 07:46:32.878095+11		Active	Residential
// 13	["https://images.nigeriapropertycentre.com/properties/images/2021497/06566c5e98ab5f-fully-detached-4-bedroom-bungalow-detached-bungalows-for-sale-kubwa-abuja.jpg","https://images.nigeriapropertycentre.com/properties/images/2021497/06566c5ee7489c-fully-detached-4-bedroom-bungalow-detached-bungalows-for-sale-kubwa-abuja.jpg","https://images.nigeriapropertycentre.com/properties/images/2021497/06566c5efc26b9-fully-detached-4-bedroom-bungalow-detached-bungalows-for-sale-kubwa-abuja.jpg"]	Detached Bungalow with Garden	Charming detached bungalow with a lush garden in a serene neighborhood.	Green Oasis, Garki	6000000	3	2	1500	["Private Garden","Cozy Interior","Security"]	Detached Bungalow	property	Sale		["Garki Elementary School"]	Quiet residential area with green spaces	2024-01-09 07:46:32.878095+12	2024-01-09 07:46:32.878095+12		Active	Residential
// 14	["https://assets.iwgplc.com/image/upload/f_auto,q_auto,w_400,h_260,c_fill/CentreImagery/4035/4035_4.jpg"]	Commercial Office Space	Prime location for a commercial office space in Abuja's business district.	Business Hub, Central Area	8000000	2	2	3000	["Conference Rooms","High-Speed Internet","Parking"]	Office Space	property	Sale		[]	Central business district with easy access to transportation	2024-01-09 07:46:32.878095+13	2024-01-09 07:46:32.878095+13		Active	Commercial
// 15	["https://images.privateproperty.com.ng/large/luxury-5-bedroom-fully-detached-duplex-JY6FLe1DJTF3CVApagzB.jpg"]	Luxurious 5 Bedroom Detached Duplex	Exquisite 5-bedroom detached duplex with modern amenities.	Elite Estates, Asokoro	15000000	5	6	4000	["Smart Home Technology","Gym","Security System","Walk-in Closets"]	Detached Duplex	property	Sale		["Asokoro High School"]	Centrally located with access to urban amenities	2024-01-09 07:46:32.878095+14	2024-01-09 07:46:32.878095+14		Active	Residential
// 16	["https://images.nigeriapropertycentre.com/properties/images/1283136/0624ec3ee52310-fully-furnished-luxury-two-2-bedroom-apartment-at-karu-fct-abuja-short-let-karu-abuja.jpg"]	Exclusive 2 Bedroom Apartment	Modern 2-bedroom apartment with exclusive features and city views.	Metropolitan Heights, Gwarinpa	7500000	2	2	1400	["City Views","Swimming Pool","Fitness Center"]	Apartment	property	Sale		["Gwarinpa Secondary School"]	Family-friendly neighborhood with recreational facilities	2024-01-09 07:46:32.878095+15	2024-01-09 07:46:32.878095+15		Active	Residential
// 17	["https://www.wienerberger.co.uk/reference-projects/housing/apartments/jcr:content/root/responsivegrid_copy/teaserbox/smallteaserbox/image.imgTransformer/crop_1to1/lg-5/1696328373544/Corp_Wall_06.jpg"]	Modern Apartment Complex	State-of-the-art apartment complex with multiple units and amenities.	Metropolitan Towers, Mabushi	90000000	10	12	8000	["Multiple Units","Swimming Pool","Fitness Center"]	Apartment	property	Sale		["Mabushi High School"]	Family-friendly neighborhood with recreational facilities	2024-01-09 07:46:32.878095+16	2024-01-09 07:46:32.878095+16		Active	Residential
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
