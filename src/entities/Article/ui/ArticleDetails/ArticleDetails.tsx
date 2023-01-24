import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetails.module.scss';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { articleDetailsReducer } from '../../model/slices/articleDetailsSlice';
import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading
} from '../../model/selectors/articleDetails';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

interface ArticleDetailsProps {
  className?: string
  id: string
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer
};
export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const error = useSelector(getArticleDetailsError);
  /* const isLoading = useSelector(getArticleDetailsIsLoading); */
  const isLoading = true;
  const article = useSelector(getArticleDetailsData);
  let content;
  if (isLoading) {
    content = (<>
        <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
        <Skeleton className={cls.title} width={300} height={32} />
        <Skeleton className={cls.skeleton} width={600} height={24} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
    </>);
  } else if (error) {
    content = (<Text theme={TextTheme.ERROR} align={TextAlign.CENTER} title={t('Ошибка загрузки статьи.')} />);
  } else {
    content = (<div>ARTICLE DETAILS</div>);
  }

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
          <div className={classNames(cls.ArticleDetails, {}, [className])}>
              {content}
          </div>
      </DynamicModuleLoader>

  );
});
