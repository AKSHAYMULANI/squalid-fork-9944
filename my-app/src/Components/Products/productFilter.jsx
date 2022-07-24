import {  Button, Heading, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";




function ProductFilter({ProTag, value, setValue}){
    
    return(
        <div>
            <Stack m={'auto'} textAlign='center'>
                <Heading>{ProTag}</Heading>
            </Stack>
            <br />
            <RadioGroup onChange={setValue} value={value} >
                <Stack>
                    <Text textAlign={'left'} fontSize='lg' borderBottom={'1px solid gray'}>Price Range</Text>
                    <Radio value="1">Under $10</Radio>
                    <Radio value="10">$10 to $20</Radio>
                    <Radio value="20">$20 to $30</Radio>
                    <Radio value="30">$30 and above</Radio>
                </Stack>
                <Button onClick={() => {setValue("-1")}}>Clear</Button>
            </RadioGroup>
            <br />
            
        </div>
    )
}

export default ProductFilter