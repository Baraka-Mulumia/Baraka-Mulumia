import { Box, Divider, Flex, IconButton, Text, useColorModeValue } from "@chakra-ui/react";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import { A11y } from "swiper";
import ProjectCard from "../ProjectCard";
import React from "react";
import { projects } from "../../constants/projects-list";
import { randInt } from "../../lib/functions";

const SlideNextButton = () => {
    const swiper = useSwiper();
    const fillColor = useColorModeValue("primary.dark.100", "primary.light.100");

    return (
        <IconButton
            color={fillColor}
            onClick={() => swiper.slideNext()}
            icon={<HiArrowNarrowRight size={24} />}
            aria-label={"Go to next project"}
        />
    );
};
const SlidePrevButton = () => {
    const swiper = useSwiper();
    const fillColor = useColorModeValue("primary.dark.100", "primary.light.100");
    const buttonBg = useColorModeValue("primary.light.300", "primary.dark.300");

    return (
        <IconButton
            onClick={() => swiper.slidePrev()}
            color={fillColor}
            icon={<HiArrowNarrowLeft size={24} />}
            aria-label={"Go to prev project"}
        />
    );
};

const ProjectsSection = () => {
    return (
        <Box>
            <Flex
                justify={"center"}
                direction={"column"}
                align={"center"}
                w={"full"}
                gap={5}
                py={4}
            >
                <Text fontSize={"3xl"} fontWeight={600}>
                    Projects
                </Text>
                <Text maxW={"600px"} size={"lg"} textAlign={"center"} variant={"textPrimary"}>
                    Learning to code has changed my life because I am now headed down a path to
                    potential economic stability and personal growth. I look forward to working on
                    complex projects and on things that improve people&apos;s lives. <br />
                    <Text as={"span"} color={"blue.300"}>
                        Here is a collection of my most interesting projects.
                    </Text>
                </Text>
            </Flex>
            <Box display={{ base: "none", mxd: "block" }}>
                <Swiper
                    modules={[A11y]}
                    spaceBetween={10}
                    slidesPerView={2}
                    autoplay={{
                        stopOnLastSlide: false,
                        pauseOnMouseEnter: true,
                    }}
                    loop
                >
                    {projects.map((project) => (
                        <SwiperSlide key={randInt()}>
                            <ProjectCard project={project} />
                        </SwiperSlide>
                    ))}
                    <span slot="container-end">
                        <Divider />
                        <Flex py={2} w={"full"} justify={"center"} gap={4}>
                            <SlidePrevButton />
                            <SlideNextButton />
                        </Flex>
                    </span>
                </Swiper>
            </Box>
            <Box display={{ base: "block", mxd: "none" }}>
                <Swiper
                    modules={[A11y]}
                    spaceBetween={10}
                    slidesPerView={1}
                    autoplay={{
                        delay: 3000,
                        stopOnLastSlide: false,
                        pauseOnMouseEnter: true,
                    }}
                    loop
                >
                    {projects.map((project) => (
                        <SwiperSlide key={randInt()}>
                            <ProjectCard project={project} />
                        </SwiperSlide>
                    ))}
                    <span slot="container-end">
                        <Divider />
                        <Flex py={2} w={"full"} justify={"center"} gap={4}>
                            <SlidePrevButton />
                            <SlideNextButton />
                        </Flex>
                    </span>
                </Swiper>
            </Box>
        </Box>
    );
};
export default ProjectsSection;
