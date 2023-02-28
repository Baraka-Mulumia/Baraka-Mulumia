import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from '@chakra-ui/react';

import AppText from './AppText';
import { FunctionComponent } from 'react';

type EInputProps = {
  label: string;
  type: string;
  placeHolder?: string;
  helperText?: string;
  isRequired?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  colorVariant?: 'primary' | 'secondary';
  register?: any;
  formFieldName: string;
  registerProps?: any;
  isError?: boolean;
  errorMessage?: string;
};

export const EInput: FunctionComponent<EInputProps> = ({
  label,
  type,
  helperText,
  placeHolder,
  isRequired = false,
  colorVariant = 'primary',
  register,
  formFieldName,
  registerProps,
  isError = false,
  errorMessage,
}) => {
  return (
    <FormControl>
      <FormLabel color={'primary.light.100'}>
        {label}
        <AppText as={'span'} color={'red.500'}>
          {isRequired ? '*' : ''}
        </AppText>
      </FormLabel>
      <Input
        type={type}
        placeholder={placeHolder}
        _placeholder={{
          color: colorVariant === 'primary' ? 'gray.500' : 'white',
          fontSize: 'sm',
          fontStyle: 'italic',
        }}
        {...register(formFieldName, { ...registerProps })}
      />
      {helperText && !isError && (
        <FormHelperText fontSize={'xs'}>{helperText}</FormHelperText>
      )}
      {isError && (
        <FormHelperText fontSize={'xs'} color={'red.500'}>
          {errorMessage}
        </FormHelperText>
      )}
    </FormControl>
  );
};
