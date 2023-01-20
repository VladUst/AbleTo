import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';
import { ChangeEvent, memo, useMemo } from 'react';

export interface SelectOption {
  value: string
  content: string
}

interface SelectProps {
  className?: string
  label?: string
  options?: SelectOption[]
  value?: string
  onChange?: (value: string) => void
  readonly?: boolean
}

export const Select = memo(({ className, label, options, value, onChange, readonly }: SelectProps) => {
  const optionsList = useMemo(() => {
    return options?.map(opt => (
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
    onChange?.(e.target.value);
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
});
