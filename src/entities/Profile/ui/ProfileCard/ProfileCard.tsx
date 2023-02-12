import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import cls from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency } from 'entities/Currency/model/types/currency';
import { CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import { HStack, VStack } from 'shared/ui/Stack';

interface ProfileCardProps {
  className?: string
  data?: Profile
  loading?: boolean
  error?: string
  readonly?: boolean
  onChangeFirstname?: (value?: string) => void
  onChangeLastname?: (value?: string) => void
  onChangeCity?: (value?: string) => void
  onChangeAge?: (value?: string) => void
  onChangeUsername?: (value?: string) => void
  onChangeAvatar?: (value?: string) => void
  onChangeCurrency?: (currency: Currency) => void
  onChangeCountry?: (country: Country) => void
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { t } = useTranslation('profile');
  const {
    className, data, loading, error, readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeAvatar,
    onChangeUsername,
    onChangeCountry,
    onChangeCurrency
  } = props;

  if (loading) {
    return (
        <HStack justify={'center'} max className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
            <Loader/>
        </HStack>
    );
  }

  if (error) {
    return (
        <HStack justify={'center'} max className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
            <Text theme={TextTheme.ERROR} align={TextAlign.CENTER} title={t('Ошибка загрузки профиля')}
                      text={t('Попробуйте обновить страницу')}/>
        </HStack>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly
  };
  return (
      <VStack gap={'8'} align={'start'} max className={classNames(cls.ProfileCard, mods, [className])}>
          {data?.avatar &&
          <HStack justify={'center'} max className={cls.avatarWrapper}>
              <Avatar src={data?.avatar} alt={'avatar'} size={150}/>
          </HStack>
              }
          <Input
                    value={data?.name}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                    onChange={onChangeFirstname}
                    readonly={readonly}
                />
          <Input
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    className={cls.input}
                    onChange={onChangeLastname}
                    readonly={readonly}
                />
          <Input
                  value={data?.age}
                  placeholder={t('Ваш возраст')}
                  className={cls.input}
                  onChange={onChangeAge}
                  readonly={readonly}
              />
          <Input
                  value={data?.city}
                  placeholder={t('Город')}
                  className={cls.input}
                  onChange={onChangeCity}
                  readonly={readonly}
              />
          <Input
                  value={data?.username}
                  placeholder={t('Введите имя пользователя')}
                  className={cls.input}
                  onChange={onChangeUsername}
                  readonly={readonly}
              />
          <Input
                  value={data?.avatar}
                  placeholder={t('Введите ссылку на аватар')}
                  className={cls.input}
                  onChange={onChangeAvatar}
                  readonly={readonly}
              />
          <CurrencySelect
                  className={cls.input}
                  value={data?.currency}
                  onChange={onChangeCurrency}
                  readonly={readonly}
              />
          <CountrySelect
                  className={cls.input}
                  value={data?.country}
                  onChange={onChangeCountry}
                  readonly={readonly}
              />
      </VStack>
  );
};
