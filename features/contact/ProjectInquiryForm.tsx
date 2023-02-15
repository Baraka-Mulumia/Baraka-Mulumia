import {
  Button,
  FormControl,
  FormLabel,
  Stack,
  Textarea,
} from '@chakra-ui/react';
import { FunctionComponent, useState } from 'react';

import { EInput } from '@/components/EInput';
import { ESelect } from '@/components/ESelect';
import { PageLoadingModal } from '@/modals/PageLoadingModal';
import { Service } from '@/lib/types';
import axios from 'axios';
import { map } from 'lodash';
import { useForm } from 'react-hook-form';
import { useNotification } from '@/providers/Notification.provider';
import { useRouter } from 'next/router';

export const ProjectInquiryForm: FunctionComponent<{
  size?: string;
  colorVariant?: 'primary' | 'secondary';
  services: Service[];
}> = ({ size = '2xl', colorVariant = 'primary', services }) => {
  const { addNotification } = useNotification();
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    setLoading(true);
    axios
      .post('/api/contact', data)
      .then(response => {
        router.push('/success-thank-you');
        addNotification({
          title: 'Message sent - Thank you!',
          message: 'Your message has been sent successfully',
          type: 'success',
          id: 'contact-form',
        });
      })
      .catch(error => {
        addNotification({
          title: 'Oops! Something went wrong',
          message: 'Your message has not been sent',
          type: 'error',
          id: 'contact-form',
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <PageLoadingModal
        visible={loading}
        loadingText={'Building your experience, one pixel at a time...'}
      />
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
                options={map(services, service => service.title)}
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
                  color={'white'}
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
    </>
  );
};
