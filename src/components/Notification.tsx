import { useEffect, useState } from "react";

interface NotificationProps {
  message: string;
  isVisible?: boolean;
  onClose?: () => void;
}

const Notification = ({
  message,
  isVisible = false,
  onClose,
}: NotificationProps) => {
  const [show, setShow] = useState(isVisible);

  useEffect(() => {
    setShow(isVisible);

    if (isVisible) {
      const timer = setTimeout(() => {
        setShow(false);
        onClose?.();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <div
      className={`
        fixed bottom-4 right-16 
        bg-blue-100 border border-blue-200 text-blue-800
        px-4 py-3 rounded-lg shadow-lg
        transform transition-all duration-300 ease-in-out
        z-[9999]
        ${show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}
      `}
    >
      {message}
    </div>
  );
};

export default Notification;
