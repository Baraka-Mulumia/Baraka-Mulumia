import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  VStack,
  WrapItem,
} from '@chakra-ui/react';
import { FunctionComponent, useState } from 'react';

import { BsPerson } from 'react-icons/bs';
import { ErrorMessage } from '@/components/ErrorMessage';
import { MdOutlineEmail } from 'react-icons/md';
import { PageLoadingModal } from '@/modals/PageLoadingModal';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNotification } from '@/providers/Notification.provider';
import { useRouter } from 'next/router';

export const GetInTouchForm: FunctionComponent = () => {
  const { addNotification } = useNotification();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

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

      <WrapItem>
        <Box bg='white' borderRadius='lg'>
          <Box m={8} color='#0B0E3F'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <VStack spacing={5}>
                <FormControl id='name'>
                  <FormLabel>Your Name</FormLabel>
                  <InputGroup borderColor='#E0E1E7'>
                    <InputLeftElement pointerEvents='none'>
                      <BsPerson color='gray.800' />
                    </InputLeftElement>
                    <Input
                      type='text'
                      size='md'
                      {...register('fullName', { required: true })}
                    />
                  </InputGroup>
                  <Box h={6}>
                    {errors.fullName && (
                      <ErrorMessage message='This field is required' />
                    )}
                  </Box>
                </FormControl>
                <FormControl id='name'>
                  <FormLabel>Mail</FormLabel>
                  <InputGroup borderColor='#E0E1E7'>
                    <InputLeftElement pointerEvents='none'>
                      <MdOutlineEmail color='gray.800' />
                    </InputLeftElement>
                    <Input
                      type='text'
                      size='md'
                      {...register('email', {
                        required: true,
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                    />
                  </InputGroup>
                  <Box h={6}>
                    {errors.email && (
                      <ErrorMessage
                        message={
                          (errors.email.message as string) ||
                          'This field is required'
                        }
                      />
                    )}
                  </Box>
                </FormControl>
                <FormControl id='name'>
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    borderColor='gray.300'
                    _hover={{
                      borderRadius: 'gray.300',
                    }}
                    placeholder='message'
                    {...register('message', { required: true })}
                  />
                  <Box h={6}>
                    {errors.message && (
                      <ErrorMessage message='This field is required' />
                    )}
                  </Box>
                </FormControl>
                <FormControl id='name' float='right'>
                  <Button variant='primary' type='submit'>
                    Send Message
                  </Button>
                </FormControl>
              </VStack>
            </form>
          </Box>
        </Box>
      </WrapItem>
    </>
  );
};
