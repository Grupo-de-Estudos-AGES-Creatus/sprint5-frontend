import { Grid, Flex, Box,Text } from "@chakra-ui/react";
import NavBar from "@/components/base/NavBar/NavBar";
import SideBar from "@/components/base/SideBarComponent/SideBarComponent";

function Sprint(){
    return(
        <Flex height={"100vh"} width={"100vw"} flexDirection={"column"} bgGradient={"to-bl"} gradientFrom={"var(--gradient1)"} gradientTo={"var(--gradient2)"}>
            <NavBar></NavBar>
            <Box >
            <Grid gridTemplateColumns={"auto 1fr"} >
                <SideBar ></SideBar>
                
                    <Grid gridTemplateRows={"0.6fr 0.1fr 0.5fr 0.1fr auto"} marginTop={"15vh"} padding={"0 20vh"}    >
                        <Box >
                            <Text fontSize={"6vh"}>Calculadora Web</Text >
                            <Text fontSize={"3vh"}>Neste projeto, vamos criar uma calculadora funcional usando JavaScript, HTML e CSS. Ela permitirá operações básicas, 
                                como adição, subtração, multiplicação e divisão, com uma interface simples e interativa. Essa calculadora é ideal 
                                para introduzir manipulação de eventos e lógica de programação, além de consolidar conhecimentos em desenvolvimento web.
                            </Text>
                        </Box>
                        <Text backgroundColor={"white"} width={"70vw"} height={"0.1vh"} marginBottom={"1vh"} padding={"0"} ></Text>
                        <Box  marginBottom={"0"}>
                            <Text fontSize={"6vh"}>Projeto</Text>
                            <Text>Projeto.pdf
                            </Text>
                        </Box>
                        <Box backgroundColor={"white"} width={"70vw"} height={"0.1vh"} marginTop="1vh" ></Box>
                        <Box paddingBottom={"15vh"} >
                            <Text fontSize={"6vh"}> Materiais</Text>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Flex>
    )
}

export default Sprint;