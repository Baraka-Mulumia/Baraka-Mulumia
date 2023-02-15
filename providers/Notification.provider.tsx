import {
  FunctionComponent,
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { NotificationType } from '@/types';
import { useToast } from '@chakra-ui/react';

type NotificationContextType = {
  addNotification: (notification: NotificationType) => void;
  removeNotification: () => void;
  notification: NotificationType | null;
};

const NotificationContext = createContext<NotificationContextType>({
  addNotification: () => {},
  removeNotification: () => {},
  notification: null,
});

export const NotificationProvider: FunctionComponent<PropsWithChildren<{}>> = ({
  children,
}) => {
  const [notification, setNotification] = useState<NotificationType | null>(
    null,
  );

  const toast = useToast();

  const addNotification = useCallback((notification: NotificationType) => {
    setNotification(notification);
  }, []);

  const removeNotification = useCallback(() => {
    setNotification(null);
  }, []);

  //TODO! Create custom render for toast

  useEffect(() => {
    if (notification) {
      toast({
        title: notification.title,
        description: notification.message,
        status: notification.type,
        duration: 5000,
        isClosable: true,
        position: 'top',
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
