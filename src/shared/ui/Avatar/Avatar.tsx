import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { useMemo } from 'react';
interface AvatarProps {
  className?: string
  src?: string
  size?: number
  alt?: string
}

export const Avatar = ({ className, size, alt, src }: AvatarProps) => {
  const styles = useMemo(() => ({
    width: size,
    height: size
  }), [size]);
  return (
      <img className={classNames(cls.Avatar, {}, [className])} style={styles} src={src} alt={alt}/>
  );
};
