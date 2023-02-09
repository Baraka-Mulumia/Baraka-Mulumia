import { NextPage } from "next";
import { Text } from "@chakra-ui/react";

const Portfolio: NextPage = () => {
  return (
    <div>
      <h1>Portfolio</h1>
      <Text>
        {
          " As a software developer, I understand the importance of bridging the gap between a client's vision and my expertise to achieve powerful results. This is why I am proud to present my personal portfolio, where I can showcase the projects I've worked on and the impact I've made."
        }
      </Text>
    </div>
  );
};

export default Portfolio;
