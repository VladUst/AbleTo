import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthOpen, setIsOpen] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return (
      <div className={classNames(cls.Navbar, {}, [className])}>
          <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onToggleModal}>
              {t('Войти')}
          </Button>
          <Modal isOpen={isAuthOpen} onClose={onToggleModal}>
              {/* eslint-disable-next-line max-len */}
              {t('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque, cum dolor eaque expedita quod recusandae reprehenderit saepe! Debitis fuga harum illum laboriosam nemo. Aut dignissimos dolor ipsa non sit.')}
          </Modal>
      </div>
  );
};
