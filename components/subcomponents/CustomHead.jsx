import Head from "next/head";

const CustomHead = ({
    description = "A Front-End Architect, SaaS engineer and Creative-Coder",
    author = "baraka mulumia",
    title = "Baraka | Software Developer",
    iconUrl = "/baraka-favicon.ico",
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
            <link rel="apple-touch-icon" href={iconUrl} key="apple" />
            <link rel="icon" type="image/png" sizes="32x32" href={iconUrl} key="icon32" />
            <link rel="icon" type="image/png" sizes="16x16" href={iconUrl} key="icon16" />
            <link rel="icon" href={iconUrl} key="favicon" />
        </Head>
    );
};

export default CustomHead;

CustomHead.defaultProps = {
    lang: `en`,
    meta: [],
};
