import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import {
  articleDetailsCommentsReducer,
  getArticleComments
} from 'pages/ArticlesDetailsPage/model/slices/articleDetailsCommentsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import {
  fetchCommentsByArticleId
} from 'pages/ArticlesDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { AddCommentForm } from 'features/addCommentForm';

interface ArticleDetailsPageProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('article');
  const { id } = useParams<{ id: string }>();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const dispatch = useDispatch();
  const onSendComment = useCallback((text: string) => dispatch(addCommentForArticle(text)), [dispatch]);
  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });
  if (!id) {
    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            {t('Статья не найдена')}
        </div>);
  }
  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
          <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
              <ArticleDetails id={id}/>
              <Text className={cls.commentTitle} title={t('Комментарии')}/>
              <AddCommentForm onSendComment={onSendComment} />
              <CommentList isLoading={commentsIsLoading} comments={comments}/>
          </div>
      </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
