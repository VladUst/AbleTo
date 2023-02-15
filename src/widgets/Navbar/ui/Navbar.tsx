import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';

interface NavbarProps {
  className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthOpen, setIsOpen] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();
  const onCloseModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onLogOut = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Text theme={TextTheme.INVERTED} className={cls.appName} title={t('CyberZone')} />
            <div className={cls.links}>
                {/* <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.articles_create} className={cls.link}>
                    {t('Создать статью')}
                </AppLink> */}
                <Dropdown
                    direction={'bottom left'}
                    className={cls.dropdown}
                    items={[
                      {
                        content: t('Профиль'),
                        href: RoutePath.profile + authData.id
                      },
                      {
                        content: t('Выйти'),
                        onClick: onLogOut
                      }
                    ]}
                    trigger={<Avatar size={30} src={authData.avatar}/>}
                />
                {/* <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onLogOut} className={cls.link}>
                    {t('Выйти')}
                </Button> */}
            </div>

        </header>
    );
  }

  return (
      <header className={classNames(cls.Navbar, {}, [className])}>
          <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onShowModal}>
              {t('Войти')}
          </Button>
          <LoginModal isOpen={isAuthOpen} onClose={onCloseModal}/>
      </header>
  );
});
