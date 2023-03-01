import {
  FunctionComponent,
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { ToastNotification } from '@/types';
import { useToast } from '@chakra-ui/react';

type NotificationContextType = {
  addNotification: (notification: ToastNotification) => void;
  removeNotification: () => void;
  notification: ToastNotification | null;
};

const NotificationContext = createContext<NotificationContextType>({
  addNotification: () => {},
  removeNotification: () => {},
  notification: null,
});

export const NotificationProvider: FunctionComponent<PropsWithChildren<{}>> = ({
  children,
}) => {
  const [notification, setNotification] = useState<ToastNotification | null>(
    null,
  );

  const toast = useToast();

  const addNotification = useCallback((notification: ToastNotification) => {
    setNotification(notification);
  }, []);

  const removeNotification = useCallback(() => {
    setNotification(null);
  }, []);

  useEffect(() => {
    if (notification) {
      toast({
        title: notification.title,
        description: notification.message,
        status: notification.type,
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      });

      setNotification(null);
    }
  }, [notification, toast]);

  return (
    <NotificationContext.Provider
      value={{ addNotification, removeNotification, notification }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);
