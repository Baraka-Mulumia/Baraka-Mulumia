import { FormControl, FormLabel, Select, Text } from "@chakra-ui/react";

import { FunctionComponent } from "react";
import { map } from "lodash";

type ESelectProps = {
  label: string;
  options: string[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  isRequired?: boolean;
  colorVariant?: "primary" | "secondary";
};

export const ESelect: FunctionComponent<ESelectProps> = ({
  label,
  options,
  isRequired = false,
  onChange,
  colorVariant = "primary",
}) => {
  return (
    <FormControl>
      <FormLabel color={"primary.light.000"}>
        {label}
        <Text as={"span"} color={"red.500"}>
          {isRequired ? "*" : ""}
        </Text>
      </FormLabel>
      <Select onChange={onChange} color={"primary.light.100"}>
        <option
          value=""
          disabled
          selected
          style={{
            color: "#733D47",
          }}
        >
          Select a service
        </option>

        {map(options, (option, index) => (
          <option
            key={index}
            value={option}
            style={{
              color: "#733D47",
            }}
          >
            {option}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};
