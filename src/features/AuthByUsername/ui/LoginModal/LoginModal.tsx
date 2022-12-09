import { classNames } from 'shared/lib/classNames/classNames';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import { Modal } from 'shared/ui/Modal/Modal';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
  return (
      <Modal lazy className={classNames('', {}, [className])}
        onClose={onClose} isOpen={isOpen}>
          <Suspense fallback={<Loader/>}>
              <LoginFormAsync onSuccessLogin={onClose}/>
          </Suspense>
      </Modal>
  );
};
