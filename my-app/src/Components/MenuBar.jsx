
import { Flex } from "@chakra-ui/react";
import {  Link } from "react-router-dom";

export function Menubar(){
    return (
        <Flex p={'10px 10%'} justifyContent="space-evenly" bgColor="black" color={'white'}>
            
            <Link to="/Makeup">Makeup</Link>
            <Link to="/Skincare">Skincare</Link>
            <Link to="#">Brands</Link>
            <Link to="#">Hair</Link>
            <Link to="#">Fragrance</Link>
            <Link to="#">Tools & Brushes</Link>
            <Link to="#">Bath & Body</Link>
            <Link to="#">Sale & Offers</Link>
        </Flex>
    )
}