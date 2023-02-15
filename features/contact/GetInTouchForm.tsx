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

import { BsPerson } from 'react-icons/bs';
import { ErrorMessage } from '@/components/ErrorMessage';
import { MdOutlineEmail } from 'react-icons/md';
import { useForm } from 'react-hook-form';

export const GetInTouchForm = () => {
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
  );
};
