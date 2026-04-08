import { Project, Category } from '../../types';

export const PHOTOGRAPHY_PROJECTS: Project[] = [
  {
    id: 'sample-1',
    image: 'https://via.placeholder.com/1920x1080?text=Project+Cover',
    category: Category.PHOTO,
    tags: ['标签1', '标签2'],
    zh: {
      title: '示例项目标题',
      subtitle: '示例副标题',
      description: '项目描述占位符。',
      role: '角色',
    },
    en: {
      title: 'Example Project Title',
      subtitle: 'Example Subtitle',
      description: 'Project description placeholder.',
      role: 'Role',
    }
  },
  {
    id: 'p4',
    image: '/photo4.png',
    externalLink: 'http://xhslink.com/o/HnljUey9x0',
    category: Category.PHOTO,
    tags: ['人像', '风格化', '视觉实验'],
    zh: {
      title: '人像摄影 | 风格化视觉探索',
      subtitle: '静态摄影',
      description: '基于不同主题 of 风格化人像创作，探索光影与色彩的视觉叙事力。',
      role: '摄影师 / 后期',
    },
    en: {
      title: 'Portrait Photography | Stylized Exploration',
      subtitle: 'Static Photography',
      description: 'Stylized portrait creation based on different themes, exploring the narrative power of light and color.',
      role: 'Photographer / Post-production',
    }
  },
  {
    id: 'p7',
    image: '/photo7.png',
    externalLink: 'http://xhslink.com/o/6xzprbHOD8r',
    category: Category.PHOTO,
    tags: ['数字插画', 'AR设计', '非遗文化'],
    zh: {
      title: '本科毕设 | 层层常德',
      subtitle: '本科毕设',
      description: '通过数字插画和AR技术相结合的方式，推广常德本土文化，赋予传统非遗新的生命力。',
      role: '主创',
    },
    en: {
      title: 'Graduation Project | Layered Changde',
      subtitle: 'Undergraduate Thesis',
      description: 'Combining digital illustration with AR technology to promote local culture and revitalize intangible cultural heritage.',
      role: 'Lead Creator',
    }
  }
];
