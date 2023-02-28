import {
  FormControl,
  FormHelperText,
  FormLabel,
  Select,
  useColorMode,
} from '@chakra-ui/react';

import AppText from './AppText';
import { FunctionComponent } from 'react';
import { map } from 'lodash';
import { uuid } from '@/lib/functions';

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
  const { colorMode } = useColorMode();

  const optionCOlor = colorMode == 'light' ? '#733D47' : '#FBFBFF';

  return (
    <FormControl>
      <FormLabel color={'primary.light.000'}>
        {label}
        <AppText as={'span'} color={'red.500'}>
          {isRequired ? '*' : ''}
        </AppText>
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
            color: optionCOlor,
          }}>
          Select a service
        </option>

        {map(options, option => (
          <option
            key={uuid()}
            value={option}
            style={{
              color: optionCOlor,
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
