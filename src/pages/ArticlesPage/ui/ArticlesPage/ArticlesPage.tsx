import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';
import { memo } from 'react';

interface ArticlesPageProps {
  className?: string
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  return (
      <div className={classNames(cls.ArticlesPage, {}, [className])}>
          articles
      </div>
  );
};

export default memo(ArticlesPage);
