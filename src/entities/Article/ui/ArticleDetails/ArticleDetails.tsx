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
import { Text, TextAlign, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticcleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleDetailsProps {
  className?: string
  id: string
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer
};

const renderBlock = (block: ArticleBlock) => {
  switch (block.type) {
    case ArticleBlockType.CODE:
      return (
          <ArticleCodeBlockComponent
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
      );
    case ArticleBlockType.IMAGE:
      return (
          <ArticleImageBlockComponent
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
      );
    case ArticleBlockType.TEXT:
      return (
          <ArticleTextBlockComponent
                    key={block.id}
                    className={cls.block}
                    block={block}
                />
      );
    default:
      return null;
  }
};

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const error = useSelector(getArticleDetailsError);
  const isLoading = useSelector(getArticleDetailsIsLoading);
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
    content = (<Text theme={TextTheme.ERROR} align={TextAlign.CENTER} title={t('Ошибка загрузки статьи')} />);
  } else {
    content = (<>
        <div className={cls.avatarWrapper}>
            <Avatar
                size={200}
                src={article?.img}
                className={cls.avatar}
            />
        </div>
        <Text
            className={cls.title}
            title={article?.title}
            text={article?.subtitle}
            size={TextSize.L}
        />
        <div className={cls.articleInfo}>
            <Icon className={cls.icon} Svg={EyeIcon}/>
            <Text text={String(article?.views)} />
        </div>
        <div className={cls.articleInfo}>
            <Icon className={cls.icon} Svg={CalendarIcon}/>
            <Text text={article?.createdAt} />
        </div>
        {article?.blocks.map(renderBlock)}
    </>);
  }

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
          <div className={classNames(cls.ArticleDetails, {}, [className])}>
              {content}
          </div>
      </DynamicModuleLoader>

  );
});
