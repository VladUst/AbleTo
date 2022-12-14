import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData';
/* import { getProfileLoading } from 'entities/Profile/model/selectors/getProfileLoading';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError'; */
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation('profile');
  const data = useSelector(getProfileData);
  // const isLoading = useSelector(getProfileLoading);
  // const error = useSelector(getProfileError);

  return (
      <div className={classNames(cls.ProfileCard, {}, [className])}>
          <div className={cls.header}>
              <Text title={t('Профиль')} />
              <Button
                    className={cls.editBtn}
                    theme={ButtonTheme.OUTLINE}
                >
                  {t('Редактировать')}
              </Button>
          </div>
          <div className={cls.data}>
              <Input
                    value={data?.name}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                />
              <Input
                    value={data?.username}
                    placeholder={t('Ваш логин')}
                    className={cls.input}
                />
          </div>
      </div>
  );
};
