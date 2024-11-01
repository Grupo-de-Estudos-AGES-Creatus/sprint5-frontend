import { Grid, Flex, GridItem, Text, Button, Image } from "@chakra-ui/react";
import logo from "../../assets/icons/logo-grupoEstudos.svg";
import ages from "../../assets/icons/logo-ages.svg";
import creatus from "../../assets/icons/logo-creatus.svg";

function LandingPage() {
  return (
    <Grid
      templateColumns={{ xl: "1fr 1fr", sm: "1fr" }}
      backgroundColor={"#fafafa"}
      height={"100vh"}
    >
      <GridItem>
        <Flex
          height={{ xl: "100vh", sm: "auto" }}
          marginTop={{base:"40px" ,sm:"80px",xl:"0"}}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image src={logo} alt="Logo" width={{base: "120px",sm:"200px",xl:"200px"}} />
          <Text color={"black"} maxWidth={{base:"250px" ,sm:"500px",xl:"600px"}} margin={"20px"} fontSize={{xl:"16px", sm:"16px", base:"12px"} }>
            Este grupo de estudos é um espaço colaborativo para aprender e
            desenvolver habilidades técnicas essenciais em HTML, CSS,
            JavaScript, React, MongoDB e uso do GitHub para controle de versão,
            além de explorar práticas do mundo real. Combinando conteúdo técnico
            e desenvolvimento de soft skills como comunicação, trabalho em
            equipe e resolução de problemas, o{" "}
          </Text>
          <Flex alignItems={"center"} gap={"20px"} flexDirection={{base:"column",sm:"row"}}>
            <Text color={"black"} fontSize={{xl:"16px", sm:"16px", base:"12px"} }>Powered by:</Text>
            <Image src={creatus} alt="Logo creatus" width={{base:"120px",sm:"180px",xl:"200px"}} />
            <Image src={ages} alt="Logo ages" width={{base:"80px",sm:"120px",xl:"180px"}}/>
          </Flex>
        </Flex>
      </GridItem>
      <GridItem>
        <Flex
          height={{ xl: "100vh", sm: "auto" }}
          flexDirection={{xl: "column", sm: "row", base:"column"}}
          justifyContent={"center"}
          alignItems={"center"}
          gap={{base:"20px",sm:"40px"}}
        >
          <Button
            fontSize={"24px"}
            background={"#2E23A7"}
            color={"#fafafa"}
            px="48px"
            py="12px"
            width={"200px"}
          >
            Formulário
          </Button>
          <Button
            fontSize={"24px"}
            background={"#fafafa"}
            color={"#2E23A7"}
            border={"2px solid #2E23A7"}
            px="48px"
            py="12px"
            width={"200px"}
          >
            Entrar
          </Button>
        </Flex>
      </GridItem>
    </Grid>
  );
}

export default LandingPage;
