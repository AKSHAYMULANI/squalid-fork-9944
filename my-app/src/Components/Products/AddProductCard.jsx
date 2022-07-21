import { Image, Stack, Text } from "@chakra-ui/react";


function AddProductCard({imgUrl, Title, Colors, price, desc }){
    return (
        <div>
            <Stack w={'100%'} textAlign='left' p={'5px'}>
                <Image w={'100%'} src={imgUrl} />
                <Text>  {Title}</Text>
                <Text>  {desc}</Text>
                <Text>  Colors:{Colors}</Text>
                <Text>  ${price}</Text>

            </Stack>
        </div>
    )
}

export default AddProductCard