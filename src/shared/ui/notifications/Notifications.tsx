import { Notification, NotificationProps } from '@mantine/core';
import { useState, useEffect } from 'react';

interface SimpleNotificationProps extends NotificationProps {
  title: string;
  message: string;
  autoClose?: number | boolean;
}

export const SimpleNotification = ({
  title,
  message,
  color = 'violet',
  autoClose = 5000,
  onClose,
  ...props
}: SimpleNotificationProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 10);

    if (autoClose && typeof autoClose === 'number') {
      const closeTimer = setTimeout(() => {
        handleClose();
      }, autoClose);

      return () => {
        clearTimeout(timer);
        clearTimeout(closeTimer);
      };
    }

    return () => clearTimeout(timer);
  }, [autoClose]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsOpen(false);
      if (onClose) onClose();
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        transform: isVisible ? 'translateY(0)' : 'translateY(100px)',
        opacity: isVisible ? 1 : 0,
        transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
      }}
    >
      <Notification
        title={title}
        color={color}
        onClose={handleClose}
        {...props}
      >
        {message}
      </Notification>
    </div>
  );
};
