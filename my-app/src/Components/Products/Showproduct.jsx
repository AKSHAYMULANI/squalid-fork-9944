import { Flex, Grid,Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { useEffect } from "react"
import { useState } from "react"
import MainHeader from "../MainHeader"
import AddProductCard from "./AddProductCard"
import { getPricefilterSort, getProducts, getPriceSort } from "./productApi"
import ProductFilter from "./productFilter"
// import SortProduct from "./SortProduct";


function ShowProducts({tag}){

    const [data, setData] = useState([])
    const [value, setValue] = useState(-1)
    const [type, setType] = useState("")
    const [priceSort, setPriceSort] = useState("")

    function Handlesort(valueofprice){
        setPriceSort(valueofprice)
        if(value==='-1' && priceSort!==""){
            getPriceSort(type,priceSort).then((res)=>{
                setData((res.data))
        })
        }
    }

    useEffect(()=>{
        setValue("-1")
        getProducts(tag).then((res)=>{
        setData(res.data)
        setType(tag)
        setPriceSort("")
        })
        
        
    },[tag]) 

    useEffect(()=>{
   
  

    if(value==='1'){
        getPricefilterSort(type,1,10,priceSort).then((res)=>{
        setData((res.data))
    })
    }
    
    if(value==="10"){
        getPricefilterSort(type,10,20,priceSort).then((res)=>{
            setData(res.data)
        })
        
    }
    if(value==="20"){
        getPricefilterSort(type,20,30,priceSort).then((res)=>{
            setData(res.data)
        })
    }
    if(value==="30"){
        getPricefilterSort(type,30,400,priceSort).then((res)=>{
            setData(res.data)
        })
    }
    
    }, [value,type,priceSort])
    
    console.log(priceSort, value, data)

    return (
        <div>
            <MainHeader />
            <div>
            <Menu closeOnSelect={true}>
            <MenuButton as={Button} colorScheme='blue'>
            Sort by: Price 
            </MenuButton>
            <MenuList minWidth='240px'>
            <MenuItem onClick={()=>Handlesort('')}>Relevance(default)</MenuItem>
            <MenuItem  onClick={()=>Handlesort('asc')} >Low to High</MenuItem>
            <MenuItem onClick={()=>Handlesort('desending')}>High to Low</MenuItem>
            </MenuList>
            </Menu>
        </div>
            <Flex m='auto' w={'90%'} justify="space-evenly">
                <ProductFilter ProTag={tag} value={value} setValue={setValue} />
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