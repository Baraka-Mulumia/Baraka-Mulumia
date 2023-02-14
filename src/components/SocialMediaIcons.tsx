import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { HStack, Icon, IconButton, Link } from "@chakra-ui/react";

import { IconType } from "react-icons";
import { map } from "lodash";

export const SocialMediaIcons = () => {
  const social_links = [
    {
      icon: BsGithub,
      href: "https://github.com/iambaraka",
      ariaLabel: "github",
    },
    {
      icon: BsLinkedin,
      href: "https://www.linkedin.com/in/baraka-mulumia/",
      ariaLabel: "linkedin",
    },
    {
      icon: BsTwitter,
      href: "https://twitter.com/barakamulumia",
      ariaLabel: "twitter",
    },
  ];

  const SocialMediaIconButton = ({
    icon,
    href,
    ariaLabel,
  }: {
    icon: IconType;
    href: string;
    ariaLabel: string;
  }) => {
    const iconColor = "primary.light.200";
    const iconHoverColor = "primary.dark.red";

    return (
      <Link isExternal href={href}>
        <IconButton
          aria-label={ariaLabel}
          variant="ghost"
          size="lg"
          isRound={true}
          _hover={{ bg: iconHoverColor }}
          icon={<Icon as={icon} color={iconColor} fontSize={"28px"} />}
        />
      </Link>
    );
  };

  return (
    <HStack mt={{ lg: 10, md: 10 }} spacing={5} px={5} alignItems="flex-start">
      {map(social_links, (social_link) => (
        <SocialMediaIconButton
          icon={social_link.icon}
          ariaLabel={social_link.ariaLabel}
          href={social_link.href}
          key={social_link.ariaLabel}
        />
      ))}
    </HStack>
  );
};
