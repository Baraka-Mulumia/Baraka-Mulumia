import { Box, Divider, Flex, IconButton, Text, useColorModeValue } from "@chakra-ui/react";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import { A11y } from "swiper";
import ProjectCard from "../ProjectCard";
import { randInt } from "../../lib/functions";

const projects = [
    {
        id: "P100",
        name: "Beyond the edge",
        desc: "A Coding campaign blog that aims at inspiring and sharing developer stories, To keep your motivation up, think of all the things you've always wanted to create",
        technologies: ["NextJs", "Sanity-Studio"],
        img: "/image-assets/projects/baraka-mulumia-blog.png",
    },
    {
        id: "P101",
        name: "Tender Bureau",
        desc: "A single information platform to get real-time database for contractors and suppliers looking for government and private tendering business opportunities",
        technologies: ["NextJS", "Sanity-Studio", "MongoDB"],
        img: "/image-assets/projects/tender-bureau-tenders-image.png",
    },
    {
        id: "P102",
        name: "Translify",
        desc: "Lead Generation Specialists for Moving Products and Goods, A freight forwarding platform to make commodities be where and when they are demanded by the you.",
        technologies: ["ReactJs", "NodeJs", "MongoDB"],
        img: "/image-assets/projects/translify-landing-page.png",
    },
];

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
                <Text fontSize={"5xl"} fontWeight={600}>
                    Recent Works
                </Text>
                <Text maxW={"600px"} size={"xl"} textAlign={"center"} variant={"textPrimary"}>
                    Learning to code has changed my life because I am now headed down a path to
                    potential economic stability and personal growth. I look forward to working on
                    complex projects and on things that improve people&apos;s lives.
                </Text>
            </Flex>
            <Box display={{ base: "none", mxd: "block" }}>
                <Swiper
                    modules={[A11y]}
                    spaceBetween={10}
                    slidesPerView={2}
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
