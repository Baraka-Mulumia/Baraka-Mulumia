import { FunctionComponent } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

type SeoProps = {
  title?: string;
  description?: string;
  author?: string;
  iconUrl?: string;
  meta?: {
    name: string;
    content: string;
  }[];
  lang?: string;
};

export const AppHead: FunctionComponent<SeoProps> = ({
  description = "Baraka Mulumia | Building digital solutions, one line of code at a time.",
  author = "Baraka Mulumia",
  title = "Baraka M Mulumia",
  iconUrl = "/ic_launcher-web.png",
  meta = [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
  ],
}) => {
  const { asPath } = useRouter();
  const currentUrl = asPath.split("/")[1];

  const currentPath = currentUrl?.includes("?")
    ? currentUrl?.slice(
        0,
        currentUrl.split("")?.findIndex((char) => char === "?") ??
          currentUrl.length - 1
      )
    : currentUrl;

  const pageTitle = `${title}  ${
    currentPath
      ? " | " + currentPath[0]?.toUpperCase() + currentPath.slice(1)
      : ""
  }`;

  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: pageTitle,
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
      <title>{pageTitle}</title>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="language" content="en" />
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
      <link rel="apple-touch-icon" href={iconUrl} key="apple" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={iconUrl}
        key="icon32"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={iconUrl}
        key="icon16"
      />
      <link rel="icon" href={iconUrl} key="favicon" />
    </Head>
  );
};
