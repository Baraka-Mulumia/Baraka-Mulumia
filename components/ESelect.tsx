import {
  FormControl,
  FormHelperText,
  FormLabel,
  Select,
  Text,
} from '@chakra-ui/react';

import { FunctionComponent } from 'react';
import { map } from 'lodash';

type ESelectProps = {
  label: string;
  options: string[];
  isRequired?: boolean;
  colorVariant?: 'primary' | 'secondary';
  register?: any;
  formFieldName: string;
  registerProps?: any;
  isError?: boolean;
  errorMessage?: string;
};

export const ESelect: FunctionComponent<ESelectProps> = ({
  label,
  options,
  isRequired = false,
  register,
  formFieldName,
  registerProps,
  isError = false,
  errorMessage,
}) => {
  return (
    <FormControl>
      <FormLabel color={'primary.light.000'}>
        {label}
        <Text as={'span'} color={'red.500'}>
          {isRequired ? '*' : ''}
        </Text>
      </FormLabel>
      <Select
        color={'primary.light.100'}
        defaultValue={''}
        required={isRequired}
        {...register(formFieldName, { ...registerProps })}>
        <option
          value=''
          disabled
          style={{
            color: '#733D47',
          }}>
          Select a service
        </option>

        {map(options, (option, index) => (
          <option
            key={index}
            value={option}
            style={{
              color: '#733D47',
            }}>
            {option}
          </option>
        ))}
      </Select>
      {isError && (
        <FormHelperText fontSize={'xs'} color={'red.500'}>
          {errorMessage}
        </FormHelperText>
      )}
    </FormControl>
  );
};
