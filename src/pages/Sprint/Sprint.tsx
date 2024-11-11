import { Grid, Flex, Box,Text } from "@chakra-ui/react";
import NavBar from "@/components/base/NavBar/NavBar";
import SideBar from "@/components/base/SideBarComponent/SideBarComponent";

function Sprint(){
    return(
        
            <Flex height={"100%"} width={"100%"} flexDirection={"column"} bgGradient={"to-bl"} gradientFrom={"var(--gradient1)"} gradientTo={"var(--gradient2)"}>
                <NavBar></NavBar>
                <Box >
                <Grid gridTemplateColumns={"0.5fr 1fr"} >
                    <SideBar ></SideBar>
                    
                        <Grid fontFamily={"'Poppins',sans-serif"} gridTemplateRows={"0.4fr 0.05fr 0.25fr 0.08fr auto"} marginTop={"15vh"}     >
                            <Box >
                                <Text fontSize={"2rem"}>Calculadora Web</Text >
                                <Text fontSize={"1rem"}>Neste projeto, vamos criar uma calculadora funcional usando JavaScript, HTML e CSS. Ela permitirá operações básicas, 
                                    como adição, subtração, multiplicação e divisão, com uma interface simples e interativa. Essa calculadora é ideal 
                                    para introduzir manipulação de eventos e lógica de programação, além de consolidar conhecimentos em desenvolvimento web.
                                </Text>
                            </Box>
                            <Text backgroundColor={"white"} width={"70vw"} height={"0.1vh"} marginBottom={"1vh"} padding={"0"} ></Text>
                            <Box  marginBottom={"0"}>
                                <Text fontSize={"2rem"}>
                                    Projeto
                                </Text>
                                <Text fontSize={"1rem"}>Projeto.pdf
                                </Text>
                            </Box>
                            <Box backgroundColor={"white"} width={"70vw"} height={"0.1vh"} marginTop="1vh" ></Box>
                            <Box  >
                                <Text fontSize={"2rem"}> Materiais</Text>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Flex>
           
    )
}

export default Sprint;