import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';

import { FunctionComponent } from 'react';

type EInputProps = {
  label: string;
  type: string;
  placeHolder?: string;
  helperText?: string;
  isRequired?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  colorVariant?: 'primary' | 'secondary';
};

export const EInput: FunctionComponent<EInputProps> = ({
  label,
  type,
  helperText,
  placeHolder,
  isRequired = false,
  onChange,
  colorVariant = 'primary',
}) => {
  return (
    <FormControl>
      <FormLabel color={'primary.light.100'}>
        {label}
        <Text as={'span'} color={'red.500'}>
          {isRequired ? '*' : ''}
        </Text>
      </FormLabel>
      <Input
        type={type}
        placeholder={placeHolder}
        _placeholder={{
          color: colorVariant === 'primary' ? 'gray.500' : 'white',
          fontSize: 'sm',
          fontStyle: 'italic',
        }}
      />
      {helperText && (
        <FormHelperText fontSize={'xs'}>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
};
