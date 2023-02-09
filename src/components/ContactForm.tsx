import {
  Button,
  FormControl,
  FormLabel,
  Stack,
  Textarea,
} from "@chakra-ui/react";

import { EInput } from "./EInput";
import { ESelect } from "./ESelect";
import { FunctionComponent } from "react";

const services = [
  "Web app development",
  "Mobile app development",
  "Full-stack development",
  "GraphQL API development",
];

export const ContactForm: FunctionComponent<{
  size?: string;
  colorVariant?: "primary" | "secondary";
}> = ({ size = "2xl", colorVariant = "primary" }) => {
  return (
    <Stack maxW={size} p={3} alignSelf={"center"}>
      <form>
        <Stack spacing={4}>
          <Stack spacing={4} direction={{ base: "column", md: "row" }}>
            <EInput
              label={"Full Name"}
              type={"text"}
              placeHolder={"e.g Jack Sparrow"}
              isRequired={true}
              colorVariant={colorVariant}
            />
            <EInput
              label={"Email address"}
              type={"email"}
              helperText={"I'll never share your email."}
              placeHolder={"e.g iamjack@me.com"}
              isRequired={true}
              colorVariant={colorVariant}
            />
          </Stack>
          <Stack spacing={4} direction={{ base: "column", md: "row" }}>
            <ESelect
              label={"Which Service are you looking for ? "}
              options={services}
              isRequired={true}
              colorVariant={colorVariant}
            />
          </Stack>

          <Stack spacing={4}>
            <FormControl>
              <FormLabel color={"primary.light.100"}>
                How can I help you ?
              </FormLabel>
              <Textarea
                placeholder="Tell me more about your project"
                _placeholder={{
                  color: colorVariant === "primary" ? "gray.500" : "white",
                  fontSize: "sm",
                  fontStyle: "italic",
                }}
              />
            </FormControl>
          </Stack>

          <Stack placeItems={"center"} mt={5}>
            <Button variant={"primary"}>Send</Button>
          </Stack>
        </Stack>
      </form>
    </Stack>
  );
};
