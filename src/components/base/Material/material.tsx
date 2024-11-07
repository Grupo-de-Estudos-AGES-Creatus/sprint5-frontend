import { Box } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import Textura from "../../../assets/images/Textura.png";

function Material() {
    return (
        <Flex
            backgroundImage={`url(${Textura})`}
            backgroundSize={"cover"} 
            width={"250px"}
            height={"150px"}
            alignItems={"end"}
            borderRadius={"10px"}
            position={"relative"}
            
        >
            <Box
                backgroundColor={"#2e23a7"}
                width={"250px"}
                height={"35px"}
                textAlign={"center"}
                paddingTop={"5px"}
                borderRadius={"0px 0px 10px 10px"}
            >
                <h1>Material</h1>
            </Box>
            
            <Flex
                position={"absolute"}
                top={0}
                left={0}
                backgroundColor={"rgba(107, 99, 123, 0.7)"} 
                height={"77%"}
                width={"100%"}
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={"10px 10px 0px 0px"}
                
                pb={"35px"}
                overflow="hidden"
            >
            </Flex>
        </Flex>
    );
}

export default Material;
