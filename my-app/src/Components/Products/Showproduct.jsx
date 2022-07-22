import { Flex, Grid } from "@chakra-ui/react"
import { useEffect } from "react"
import { useState } from "react"
import MainHeader from "../MainHeader"
import AddProductCard from "./AddProductCard"
import { getProducts } from "./productApi"
import ProductFilter from "./productFilter"


function ShowProducts({tag}){

    const [data, setData] = useState([])

    useEffect(()=>{
        getProducts(tag).then((res)=>{
        setData(res.data)
    })
    }, [tag])
    

    return (
        <div>
            <MainHeader />
            <Flex m='auto' w={'90%'} justify="space-evenly">
                <ProductFilter ProTag={tag} />
                <Grid templateColumns='repeat(4, 1fr)' gap={5} m='auto' w={'80%'}>
                    {data.map((item) => (
                        <AddProductCard
                        imgUrl={item.imgUrl} Title={item.title} Colors={item.color} price={item.price} desc={item.desc} />
                    ))

                    }
                </Grid>
            </Flex>
        </div>
    )
}

export default ShowProducts