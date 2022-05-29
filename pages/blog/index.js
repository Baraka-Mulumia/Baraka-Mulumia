import ArticleList from "../../components/blog/ArticleList";
import BlogPageHeader from "../../components/blog/BlogPageHeader";
import { Box } from "@chakra-ui/react";
import CustomHead from "../../components/subcomponents/CustomHead";

const metaData = {
    description:
        "A Coding campaign blog that aims at inspiring and sharing developer stories, To keep your motivation up, think of all the things you've always wanted to create",
    author: "Baraka Mulumia",
    title: "Coding Beyond the edge",
    iconUrl: "/image-assets/mshindi-creations-logo.png",
};

const BlogPage = () => {
    return (
        <Box>
            <CustomHead {...metaData} />
            <BlogPageHeader />
            <ArticleList />
        </Box>
    );
};
export default BlogPage;
