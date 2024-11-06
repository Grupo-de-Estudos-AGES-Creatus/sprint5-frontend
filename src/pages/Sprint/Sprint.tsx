import { Flex } from "@chakra-ui/react";
import NavBar from "@/components/base/NavBar/NavBar";
import SideBar from "@/components/base/SideBarComponent/SideBarComponent";

function Sprint(){
    return(
        <Flex>
            <SideBar></SideBar>
            <NavBar></NavBar>
        </Flex>
    )
}

export default Sprint;