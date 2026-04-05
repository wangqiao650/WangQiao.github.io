import { ArticleCategory, Language } from '../../types';

export interface ArticlesPageContent {
  title: string;
  description: string;
}

export const ARTICLES_PAGE_DATA: Record<Language, ArticlesPageContent> = {
  zh: {
    title: '生活',
    description: '个人思考、学习分享与生活记录。'
  },
  en: {
    title: 'Articles',
    description: 'Thoughts, learning journey, and life records.'
  }
};

export const ARTICLE_DATA = [
  {
    id: 't1',
    common: {
      category: ArticleCategory.TALK,
      link: 'https://github.com/yourname',
      coverImage: '/group photo.jpg',
      date: '2024-01-01'
    },
    zh: {
      title: '这个页面只是展示架，抱歉 -v- 我不喜欢写文章',
    },
    en: {
      title: 'Example Article Title',
    }
  }
];
