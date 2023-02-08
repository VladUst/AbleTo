import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';
import { ChangeEvent, useMemo } from 'react';

export interface SelectOption<T extends string> {
  value: T
  content: string
}

interface SelectProps<T extends string> {
  className?: string
  label?: string
  options?: Array<SelectOption<T>>
  value?: T
  onChange?: (value: T) => void
  readonly?: boolean
}

export const Select = <T extends string>({ className, label, options, value, onChange, readonly }: SelectProps<T>) => {
  const optionsList = useMemo(() => {
    return options?.map((opt) => (
        <option
                className={cls.option}
                value={opt.value}
                key={opt.value}
            >
            {opt.content}
        </option>
    ));
  }, [options]);

  const changeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T);
  };

  const mods: Mods = {
    [cls.readonly]: readonly
  };

  return (
      <div className={classNames(cls.SelectWrap, mods, [className])}>
          {label && (
          <span className={cls.label}>
              {label + '>'}
          </span>
          )}
          <select className={cls.select} value={value} disabled={readonly} onChange={changeSelect}>
              {optionsList}
          </select>
      </div>
  );
};
