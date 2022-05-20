import Head from "next/head";

const CustomHead = ({
    description = "Baraka Mulumia Mshindi Personal portfolio",
    author = "baraka mulumia",
    title = "Baraka | Edge Software Solutions",
    meta = [
        {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0",
        },
    ],
}) => {
    const metaData = [
        {
            name: `description`,
            content: description,
        },
        {
            property: `og:title`,
            content: title,
        },
        {
            property: `og:description`,
            content: description,
        },
        {
            property: `og:type`,
            content: `website`,
        },
        {
            name: `twitter:card`,
            content: `summary`,
        },
        {
            name: `twitter:creator`,
            content: author,
        },
        {
            name: `twitter:title`,
            content: title,
        },
        {
            name: `twitter:description`,
            content: description,
        },
    ].concat(meta);

    return (
        <Head>
            <title>{title}</title>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            {metaData.map(({ name, content }, i) => (
                <meta key={i} name={name} content={content} />
            ))}
            <link rel="icon" href={"/baraka-favicon.ico"} />
        </Head>
    );
};

export default CustomHead;

CustomHead.defaultProps = {
    lang: `en`,
    meta: [],
};
