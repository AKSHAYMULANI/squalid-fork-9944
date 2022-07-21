import { Grid } from "@chakra-ui/react"
import { useState } from "react"
import AddProductCard from "./AddProductCard"
import { getProducts } from "./productApi"


function ShowProducts(){
    const [data, setData] = useState([])
    getProducts('Eyeliner').then((res)=>{
        setData(res.data)
    })

    return (
        <div>
            <Grid templateColumns='repeat(4, 1fr)' gap={5}>
                {data.map((item) => (
                    <AddProductCard
                    imgUrl={item.image_link} Title={item.name} Colors={item.product_colors.length} price={item.price} />
                ))

                }
            </Grid>
        </div>
    )
}

export default ShowProducts