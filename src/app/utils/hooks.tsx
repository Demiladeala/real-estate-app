import { useState } from "react";

type initialStateType = {
    name?: string,
    type?: string;
    status?: string;
    bed?: number,
    bath?: number;
    sqft?: number;
    monthlyPayment?: number,
    communityInformation?: string;
    schools?: string[];
    description?: string,
    image?: string[];
    address?: string;
    price?: number,
    features?: string[];
}

type FormStateReturnType = 
[initialStateType,(key: string, value: string) => void];

export function useFormState(initialState: initialStateType):
FormStateReturnType{
    const [state, setState ] = useState(initialState);

    function setProperty(key: string, value: string) {
        setState((prevState) => ({ ...prevState, [key]: value}));
    }
    return [ state, setProperty];
}