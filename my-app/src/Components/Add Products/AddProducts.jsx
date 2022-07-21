import { Button, Input, Stack } from "@chakra-ui/react";
import { addProductApi } from "../Products/productApi";
import {useState} from "react"
import MainHeader from "../MainHeader";


function AddProducts(){
    const [imgUrl,setImgUrl] = useState("")
    const [type, setType] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [color, setColor] = useState("");
    const [price, setPrice] = useState(0);

    function handleClick(){
        setImgUrl("")
        setType("")
        setTitle("")
        setDesc("")
        setColor("")
        setPrice("")


    }
    
    return(
        <div>
            <MainHeader />
            <Stack>
                <Input value={type} placeholder="type" onChange={(e)=> setType(e.target.value)}></Input>
                <Input value={imgUrl} placeholder="imgurl" onChange={(e)=> setImgUrl(e.target.value)}></Input>
                <Input value={title} placeholder="title" onChange={(e)=> setTitle(e.target.value)}></Input>
                <Input value={desc} placeholder="desc" onChange={(e)=> setDesc(e.target.value)}></Input>
                <Input value={color} placeholder="color" onChange={(e)=> setColor(e.target.value)}></Input>
                <Input value={price} placeholder="price" onChange={(e)=> setPrice((e.target.value))}></Input>
                <Button onClick={()=> {addProductApi({ type,title,desc,color,price,imgUrl })
                handleClick()
                }}>ADD</Button>
            </Stack>
            
        </div>
    )
}

export default AddProducts