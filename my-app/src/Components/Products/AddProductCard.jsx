import { Image, Stack, Text } from "@chakra-ui/react";


function AddProductCard({imgUrl, Title, Colors, price }){
    return (
        <div>
            <Stack w={'100%'}>
                <Image w={'100%'} src={imgUrl} />
                <Text>{Title}</Text>
                <Text>Colors:{Colors}</Text>
                <Text>${price}</Text>

            </Stack>
        </div>
    )
}

export default AddProductCard