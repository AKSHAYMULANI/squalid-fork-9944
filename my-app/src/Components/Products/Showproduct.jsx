import { Grid } from "@chakra-ui/react"
import { useState } from "react"
import MainHeader from "../MainHeader"
import AddProductCard from "./AddProductCard"
import { getProducts } from "./productApi"


function ShowProducts(){
    const [data, setData] = useState([])
    getProducts('Makeup').then((res)=>{
        setData(res.data)
    })

    return (
        <div>
            <MainHeader />
            <Grid templateColumns='repeat(4, 1fr)' gap={5} m='auto' w={'90%'}>
                {data.map((item) => (
                    <AddProductCard
                    imgUrl={item.imgUrl} Title={item.title} Colors={item.color} price={item.price} desc={item.desc} />
                ))

                }
            </Grid>
        </div>
    )
}

export default ShowProducts