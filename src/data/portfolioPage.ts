import { Language } from '../../types';

export interface PortfolioPageContent {
  title: string;
  description: string;
}

export const PORTFOLIO_PAGE_DATA: Record<Language, PortfolioPageContent> = {
  zh: {
    title: '作品',
    description: '精选ai创作、影像创作、交互设计，特效实验作品。'
  },
  en: {
    title: 'Portfolio',
    description: 'A selection of works spanning Videography, Visual Design, and Application Development.'
  }
};
