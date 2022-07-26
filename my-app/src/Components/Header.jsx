import { Image,Flex, Input, Stack, Text, Icon} from "@chakra-ui/react";



function HeaderBar({setQuery,query}){


    return (
        <div>
            <Flex w='100%' m='auto' justifyContent='space-evenly' h='100px' >
                <Flex w='15%' alignItems='center'>
                    <Image w='150px' src="https://www.sephora.com/img/ufe/logo.svg" />
                </Flex>
            <Flex w='60%' justifyContent='space-evenly' alignItems='center'>
                    <Flex w='40%' alignItems='center' >
                        <Input value={query} onChange={e=>setQuery(e.target.value)} placeholder="🔍  Search" variant='filled' size='md' w='80%' bgColor='gray.200' borderRadius='20px'></Input>
                    </Flex>
                    <Flex alignItems='center'>
                        <Image boxSize={'25px'} src={"https://www.sephora.com/img/ufe/icons/stores.svg"} />
                        <Stack ml={'1rem'} spacing={'-0.5'}>
                            <Text fontSize='md' fontWeight={'medium'}>Stores & Services</Text>
                            <Text textAlign={'left'} fontSize='xs'>Choose Your Store</Text>
                        </Stack>
                        
                    </Flex>
                    <Flex alignItems='center'>
                        <Image boxSize={'25px'} src={"https://www.sephora.com/img/ufe/icons/community.svg"} />
                        <Text fontSize='md' ml={'1rem'} fontWeight={'medium'}>Community</Text>
                        
                    </Flex>
                    <Flex alignItems='center' h='50px' borderLeft={'0.5px solid #EEEEEE'} pl='1rem'>
                        <Image boxSize={'25px'} src={"https://www.sephora.com/img/ufe/icons/me32.svg"} />
                        <Text fontSize='md' ml={'1rem'} fontWeight={'medium'}>Sign In</Text>
                    </Flex>
            </Flex>
                    

                <Flex alignItems='center' justifyContent='space-evenly' w={'10%'}>
                    <Icon boxSize={'25px'}><svg width="24" height="24" fill="none" class="css-13o7eu2"><g fill="none" fill-rule="evenodd"><path d="M11.99 2C6.471 2 2 6.477 2 12s4.472 10 9.99 10a9.936 9.936 0 0 0 5.822-1.874L22 21.25l-1.209-4.517A9.965 9.965 0 0 0 21.98 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.99 2.5C6.748 2.5 2.5 6.753 2.5 12s4.249 9.5 9.49 9.5c2.064 0 3.973-.66 5.53-1.78a.5.5 0 0 1 .422-.077l3.351.9-.985-3.68a.5.5 0 0 1 .043-.367A9.464 9.464 0 0 0 21.479 12a.5.5 0 0 1 1 0c0 1.726-.417 3.355-1.154 4.793l1.158 4.327a.5.5 0 0 1-.613.613l-3.962-1.063a10.435 10.435 0 0 1-5.919 1.83C6.196 22.5 1.5 17.799 1.5 12c0-5.798 4.696-10.5 10.49-10.5a.5.5 0 1 1 0 1z" fill="currentColor"></path><path d="M18.5 10a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm0 1a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z" fill="currentColor"></path><path fill="currentColor" d="m14.692 8.885 6.769-7.193.667.629-6.769 7.192z"></path></g></svg></Icon>
                    <Icon boxSize={'25px'}><svg viewBox="0 0 24 24" data-at="love_icon_large" aria-hidden="true" class="css-psp8z9 e65zztl0" data-comp="Icon StyledComponent "><path d="M22 3.1c2.7 2.2 2.6 7.2.1 9.7-2.2 2.8-7.4 8.1-9.3 9.6-.5.4-1.1.4-1.6 0-1.8-1.5-7-6.8-9.2-9.6-2.6-2.6-2.7-7.6 0-9.7C4.6.5 9.7.7 12 4.2 14.3.8 19.3.5 22 3.1zm-.7.8c-2.4-2.4-7.2-2-8.9 1.5-.1.3-.4.4-.7.2-.1 0-.2-.1-.2-.2-1.6-3.5-6.5-4-8.9-1.5C.4 5.6.5 10 2.7 12.2c2.2 2.7 7.3 8 9.1 9.4.1.1.2.1.3 0 1.8-1.4 6.9-6.7 9.1-9.5 2.3-2.1 2.4-6.5.1-8.2z"></path></svg></Icon>
                    <Icon boxSize={'25px'}><svg class="css-9uy14h" data-at="basket_icon_large" aria-label="Go To Basket"><path d="M23.498 10c.326 0 .566.28.487.57l-3.078 11.32c-.177.652-.816 1.11-1.55 1.11H4.643c-.733 0-1.371-.458-1.55-1.11L.015 10.57c-.079-.29.16-.57.487-.57h22.996zm-3.112 9.999H3.613l.453 1.668a.588.588 0 0 0 .576.414h14.716c.271 0 .509-.17.575-.414L20.386 20zm.815-3H2.797l.544 2h17.317l.543-2zm.816-3H1.981l.544 2h18.948l.544-2zm.839-3.08H1.144L1.71 13h20.579l.567-2.08zm-9.037-9.205l5.612 5.2a.5.5 0 1 1-.68.734l-5.612-5.2a1.674 1.674 0 0 0-2.278 0l-5.612 5.2a.5.5 0 1 1-.68-.734l5.612-5.2a2.674 2.674 0 0 1 3.638 0z"></path></svg></Icon>

                </Flex>
            </Flex>
        </div>
    )
}

export default HeaderBar