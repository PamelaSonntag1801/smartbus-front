"use client"

import {InputText, InputTextProps} from "primereact/inputtext";
import {useState} from "react";
import {Cols} from "@/components/GridSystem/Grid/Grid";
import InputWrapper from "@/components/InputWrapper/InputWrapper";

interface IInputTextProps extends InputTextProps {
    name: string;
    id?: string;
    label: string;
    placeholder?: string;
    initialData?: string | null;
    col?: Cols;
    notSet?: boolean;
}

export default function Input({
    name,
    label,
    initialData,
    col = 2,
    ...props
}: IInputTextProps) {
    const [inputValue, setInputValue] = useState(initialData);
    
    return (
        <InputWrapper label={label} name={name} col={col}>
            <InputText
                name={name}
                id={name}
                onChange={(e) => setInputValue(e.target.value)}
                style={{
                    width: "100%"
                }}
                value={inputValue}
                {...props}
            />
        </InputWrapper>
    );
};