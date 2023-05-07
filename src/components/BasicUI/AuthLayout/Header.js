import { Box, Flex, HStack, Image, useColorMode, IconButton } from '@chakra-ui/react'
import React from 'react'
import { getColor, colorKeys } from '../../../config/constants/appColors'
import LogoImage from "../../../assets/images/easy-lms-logo.svg"
import APP_ICONS from "../../../config/constants/icons"
import { Link } from 'react-router-dom'

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const menu = [
        {
            title: "Features",
            link: "/features"
        },
        {
            title: "Solutions",
            link: "/solutions",
        },
        {
            title: "Pricing",
            link: "/pricing"
        },
        {
            title: "Client Stories",
            link: "/client-stories"
        },
        {
            title: "About Us",
            link: "/about-us",
        },
        {
            title: "Demo",
            link: "/demo",
        },
        {
            title: "Help",
            link: "/help"
        }
    ]
    return (
        <Flex
            as="header"
            align="center"
            justify="space-between"
            w="full"
            px="4"
            minH="60px"
            bg={getColor(colorKeys.layoutHeaderBackground, colorMode)}
            h="14"
            pos="sticky"
            top="0"
            zIndex={99}
        >
            <Flex>
                <Box pr="15px">
                    <Image src={LogoImage} w="130px" h="42px" />
                </Box>

                <HStack>
                    {menu.map((item, index) =>
                        <Link to={item.link} key={index}>
                            <Box m={"12px 0"} p="0px 15px" color="white" fontSize={"15px"} fontWeight="bold">
                                {item.title}
                            </Box>
                        </Link>
                    )}
                </HStack>
            </Flex>

            <HStack>
                <Link to={"/start-free-trial"}>
                    <Box rounded={"full"} m={"12px 0"} p="0px 15px" color="white" bg={getColor(colorKeys.primaryButtonFill, colorMode)} fontSize={"15px"} fontWeight="bold" lineHeight={"36px"}>
                        Start Free Trial
                    </Box>
                </Link>

                <IconButton size="sm" mr={4} rounded="full" boxSize="6" bg="transparent !important" color="white" onClick={toggleColorMode} as={colorMode === 'light' ? APP_ICONS.DarkMode : APP_ICONS.LighMode}>
                    Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
                </IconButton>

                <Link to={"/start-free-trial"}>
                    <Box m={"12px 0"} p="0px 15px" color="white" fontSize={"15px"} fontWeight="bold">
                        Login
                    </Box>
                </Link>
            </HStack>

        </Flex>
    )
}

export default Header