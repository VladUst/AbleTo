import { Currency } from 'entities/Currency/model/types/currency';
import { Country } from 'entities/Country';

export enum ValidateProfileError {
  INCORRECT_USER_DATA = 'NO FIRSTNAME/LASTNAME',
  INCORRECT_AGE = 'INCORRECT AGE',
  INCORRECT_COUNTRY = 'INCORRECT COUNTRY',
  NO_DATA = 'NO_DATA',
  SERVER_ERROR = 'SERVER_ERROR'
}

export interface Profile {
  name?: string
  lastname?: string
  age?: number
  currency?: Currency
  country?: Country
  city?: string
  username?: string
  avatar?: string
}

export interface ProfileSchema {
  data?: Profile
  form?: Profile
  isLoading: boolean
  error?: string
  readonly: boolean
  validateErrors?: ValidateProfileError[]
}
