import {
  Button,
  FormControl,
  FormLabel,
  Stack,
  Textarea,
} from '@chakra-ui/react';

import { EInput } from '@/components/EInput';
import { ESelect } from '@/components/ESelect';
import { ErrorMessage } from '@/components/ErrorMessage';
import { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';

const services = [
  'Web app development',
  'Mobile app development',
  'Full-stack development',
  'GraphQL API development',
];

export const ContactForm: FunctionComponent<{
  size?: string;
  colorVariant?: 'primary' | 'secondary';
}> = ({ size = '2xl', colorVariant = 'primary' }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    //TODO: MAKE API CALL
    console.log(data);
  };

  return (
    <Stack maxW={size} p={3} alignSelf={'center'}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4}>
          <Stack spacing={4} direction={{ base: 'column', md: 'row' }}>
            <EInput
              label={'Full Name'}
              type={'text'}
              placeHolder={'e.g Jack Sparrow'}
              isRequired={true}
              colorVariant={colorVariant}
              formFieldName={'fullName'}
              isError={errors.fullName ? true : false}
              errorMessage={'This field is required'}
              register={register}
              registerProps={{
                required: true,
              }}
            />
            <EInput
              label={'Email address'}
              type={'email'}
              helperText={"I'll never share your email."}
              placeHolder={'e.g iamjack@me.com'}
              isRequired={true}
              colorVariant={colorVariant}
              isError={errors.email ? true : false}
              register={register}
              formFieldName={'email'}
              errorMessage={
                (errors.email?.message as string) || 'This field is required'
              }
              registerProps={{
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              }}
            />
          </Stack>
          <Stack spacing={4} direction={{ base: 'column', md: 'row' }}>
            <ESelect
              label={'Which Service are you looking for ? '}
              options={services}
              isRequired={true}
              colorVariant={colorVariant}
              formFieldName={'service'}
              isError={errors.service ? true : false}
              errorMessage={'This field is required'}
              register={register}
            />
          </Stack>

          <Stack spacing={4}>
            <FormControl>
              <FormLabel color={'primary.light.100'}>
                How can I help you ?
              </FormLabel>
              <Textarea
                placeholder='Tell me more about your project'
                _placeholder={{
                  color: colorVariant === 'primary' ? 'gray.500' : 'white',
                  fontSize: 'sm',
                  fontStyle: 'italic',
                }}
                {...register('message')}
              />
            </FormControl>
          </Stack>

          <Stack placeItems={'center'} py={5}>
            <Button variant={'primary'} type='submit'>
              Send Message
            </Button>
          </Stack>
        </Stack>
      </form>
    </Stack>
  );
};
