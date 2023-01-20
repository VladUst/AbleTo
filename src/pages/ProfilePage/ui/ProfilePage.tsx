import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import {
  fetchProfileData,
  getProfileError, getProfileForm,
  getProfileLoading, getProfileReadonly, profileActions,
  ProfileCard,
  profileReducer
} from 'entities/Profile';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { Currency } from 'entities/Currency/model/types/currency';
import { Country } from 'entities/Country';

const reducers: ReducersList = {
  profile: profileReducer
};

const ProfilePage = () => {
  const dispatch = useDispatch();
  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileLoading);
  const isError = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const onChangeFirstname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ name: value ?? '' }));
  }, [dispatch]);

  const onChangeLastname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastname: value ?? '' }));
  }, [dispatch]);

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value ?? '' }));
  }, [dispatch]);

  const onChangeAge = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ age: Number(value ?? 0) }));
  }, [dispatch]);

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ username: value ?? '' }));
  }, [dispatch]);

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value ?? '' }));
  }, [dispatch]);

  const onChangeCurrency = useCallback((currency: Currency) => {
    dispatch(profileActions.updateProfile({ currency }));
  }, [dispatch]);

  const onChangeCountry = useCallback((country: Country) => {
    dispatch(profileActions.updateProfile({ country }));
  }, [dispatch]);

  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
          <div className={classNames('', {}, [])}>
              <ProfilePageHeader/>
              <ProfileCard
                  data={formData}
                  loading={isLoading}
                  error={isError}
                  readonly={readonly}
                  onChangeFirstname={onChangeFirstname}
                  onChangeLastname={onChangeLastname}
                  onChangeAge={onChangeAge}
                  onChangeCity={onChangeCity}
                  onChangeUsername={onChangeUsername}
                  onChangeAvatar={onChangeAvatar}
                  onChangeCurrency={onChangeCurrency}
                  onChangeCountry={onChangeCountry}
              />
          </div>
      </DynamicModuleLoader>

  );
};

export default ProfilePage;
