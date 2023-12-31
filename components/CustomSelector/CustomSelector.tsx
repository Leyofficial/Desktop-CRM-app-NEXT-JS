"use client"
import {Select} from "@chakra-ui/react";

export function CustomSelector() {
    return (
        <Select defaultValue={'option1'}>
            <option value='option1'>Sort by : Date Created</option>
            <option value='option2'>Sort by : Min price</option>
            <option value='option3'>Sort by : Max price</option>
        </Select>
    )
}