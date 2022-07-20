import {
    Alert,
    AlertDescription,
  } from '@chakra-ui/react'


function Alertbar(){
    return (<div>
        <Alert bgColor='#F2DEE9'>
          <AlertDescription w="80%" m="auto">Beauty Insiders: <b>Earn Points Faster*▸</b> Not a Beauty Insider?  <b>Join now▸ </b>Free shipping with code <b>FREESHIP.</b> *Terms apply.</AlertDescription>  
        </Alert>
    </div>)
}

export default Alertbar