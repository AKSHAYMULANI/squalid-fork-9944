import {  Heading, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";



function ProductFilter({ProTag}){

    const [value, setValue] = useState("")

    useEffect(()=>{
        if(value==='10'){
            console.log("10")
        }
        if(value==='20'){
            console.log("20")
        }
        if(value==='30'){
            console.log("30")
        }
    })
    
    return(
        <div>
            <Stack m={'auto'} textAlign='center'>
                <Heading>{ProTag}</Heading>
            </Stack>
            <br />
            <RadioGroup onChange={setValue} value={value} >
                <Stack>
                    <Text textAlign={'left'} fontSize='lg' borderBottom={'1px solid gray'}>Price Range</Text>
                    <Radio value="0">Under $10</Radio>
                    <Radio value="10">$10 to $20</Radio>
                    <Radio value="20">$20 to $30</Radio>
                    <Radio value="30">$30 and above</Radio>
                </Stack>
            </RadioGroup>
        </div>
    )
}

export default ProductFilter