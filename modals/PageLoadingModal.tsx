import {
  Box,
  Button,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Text,
  VStack,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { FunctionComponent, useEffect, useRef } from 'react';

type PageLOadingModalProps = {
  visible: boolean;
  loadingText?: string;
};

export const PageLoadingModal: FunctionComponent<PageLOadingModalProps> = ({
  visible,
  loadingText = 'Loading...',
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (visible) {
      onOpen();
    } else {
      onClose();
    }
  }, [visible]);

  const darkBg = 'rgba(0, 0, 0, 0.8)';

  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      blockScrollOnMount={true}
      scrollBehavior='inside'
      preserveScrollBarGap={false}
      size='full'>
      <ModalOverlay blur={100} />
      <ModalContent bg={darkBg}>
        <ModalBody>
          <VStack h={'full'} pt={20}>
            <Spinner
              thickness='8px'
              speed='0.65s'
              emptyColor='yellow.500'
              color='blue.500'
              h={32}
              w={32}
            />
            <Text color={'white'} fontSize={'2xl'}>
              {loadingText}
            </Text>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
