import { Flex, Grid,Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { useEffect } from "react"
import { useState } from "react"
import MainHeader from "../MainHeader"
import AddProductCard from "./AddProductCard"
import { getProducts, getPriceSort,getPriceFiltered,getProductQuery } from "./productApi"
import ProductFilter from "./productFilter"
// import SortProduct from "./SortProduct";


function ShowProducts({tag}){

    const [data, setData] = useState([])
    const [value, setValue] = useState(-1)
    const [type, setType] = useState("")
    const [priceSort, setPriceSort] = useState("")
    const [query, setQuery] = useState("")

    function Handlesort(valueofprice){
        setPriceSort(valueofprice)
                
    }

    useEffect(()=>{
        setValue("-1")
        getProducts(tag).then((res)=>{
        setData(res.data)
        setType(tag)
        setPriceSort("")
        setQuery("")
        })
        
        
    },[tag]) 

    useEffect(()=>{
        if(query===""){
        setValue("-1")
        getProducts(tag).then((res)=>{
        setData(res.data)
        setType(tag)
        setPriceSort("")
        setQuery("")
        })
        }
        else{
           getProductQuery(query).then((res)=>{
                setValue("-1")
                setData(res.data)
            })
        }
        
    },[query,tag])

    useEffect(()=>{
   
     if(value==='-1'){
        getProducts(type).then((res)=>{
            setData((res.data))
        })
        }

    if(value==='1'){
        getPriceFiltered(type,1,10).then((res)=>{
        setData((res.data))
    })
    }
    
    if(value==="10"){
        getPriceFiltered(type,10,20).then((res)=>{
            setData(res.data)
        })
        
    }
    if(value==="20"){
        getPriceFiltered(type,20,30).then((res)=>{
            setData(res.data)
        })
    }
    if(value==="30"){
        getPriceFiltered(type,30,400).then((res)=>{
            setData(res.data)
        })
    }
    
    }, [value,type])

    useEffect(()=>{
        if(priceSort==="Relevance"){
            getProducts(type).then((res)=>{
                setData((res.data))
            })
            }
        if(priceSort==='Law to high'){
            getPriceSort(type).then((res)=>{
                setData((res.data))
            })
            }
        if(priceSort==='High To law'){
            getPriceSort(type).then((res)=>{
                setData((res.data.reverse()))
            })
            } 
    },[priceSort,type])
    

    return (
        <div>
            <MainHeader setQuery={setQuery} query={query} />
            <Flex justify="right" mr = "2rem">
            <Menu closeOnSelect={true}>
            <MenuButton as={Button} colorScheme='gray'>
            Sort by: Price {priceSort}
            </MenuButton>
            <MenuList minWidth='240px'>
            <MenuItem onClick={()=>Handlesort('Relevance')}>Relevance(default) </MenuItem>
            <MenuItem  onClick={()=>Handlesort('Law to high')} >Low to High</MenuItem>
            <MenuItem onClick={()=>Handlesort('High To law')}>High to Low</MenuItem>
            </MenuList>
            </Menu>
            </Flex>
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