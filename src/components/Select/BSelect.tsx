"use client"

import Select, {Props as SelectProps} from "react-select";
import InputWrapper from "@/components/InputWrapper/InputWrapper";
import {Cols} from "@/components/GridSystem/Grid/Grid";
import "./select.scss";

interface BSelectProps extends SelectProps {
    name: string;
    label: string;
    placeholder: string,
    col: Cols,
}

export default function BSelect({
    isClearable = true,
    isDisabled = false,
    isSearchable = true,
    name,
    options,
    placeholder,
    label,
    col,
    isLoading = false,
    isRtl = false,
    ...props
}: BSelectProps) {
    return (
        <InputWrapper
            label={label}
            name={name}
            col={col}
        >
            <Select
                classNamePrefix="react-select"
                className="customSelect"
                isDisabled={isDisabled}
                isLoading={isLoading}
                isClearable={isClearable}
                isRtl={isRtl}
                isSearchable={isSearchable}
                name="color"
                options={options}
                placeholder={placeholder}
                {...props}
            />
        </InputWrapper>
    );
};