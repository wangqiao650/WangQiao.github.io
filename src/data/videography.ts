import { Project, Category } from '../../types';

export const VIDEOGRAPHY_DATA: Project[] = [
  {
    id: 'v1',
    image: '/photo1.png', // 对应你上传到 public 的图片
    externalLink: 'https://v.douyin.com/0JEHJ0nFSLY/',
    category: Category.VIDEO,
    tags: ['爆款', '百万点赞', '剪辑技巧'],
    zh: {
      title: '“整个路人”系列短视频',
      subtitle: '短视频制作',
      description: '单条视频点赞超百万，负责全流程剪辑与视觉包装。',
      role: '剪辑师 / 视觉包装',
      concept: "通过综艺感极强的剪辑逻辑，将素材进行搞笑处理，创造出符合新媒体传播规律的内容。"
    },
    en: {
      title: '"Zheng Ge Lu Ren" Series',
      subtitle: 'Short Video Production',
      description: 'Achieved over 1 million likes. Responsible for full-process editing.',
      role: 'Video Editor / Visual Wrapper',
      concept: "Deconstructing raw footage into high-engagement content through rhythmic editing."
    }
  },
  {
    id: 'v3',
    image: '/photo3.png', 
    externalLink: 'https://b23.tv/WETUQVa',
    category: Category.VIDEO,
    tags: ['非线性编辑', '视听语言', '叙事结构', 'PR'],
    zh: {
      title: '影像创作 | 视听叙事研究',
      subtitle: '短视频制作',
      description: '基于 Premiere Pro 的非线性编辑实验，通过对原始素材的解构与重组探索叙事可能。',
      role: '导演 / 剪辑',
    },
    en: {
      title: 'Audiovisual Narrative Research',
      subtitle: 'Short Video Production',
      description: 'Non-linear editing experiment based on Premiere Pro, exploring narrative possibilities.',
      role: 'Director / Editor',
    }
  },
  {
    id: 'v6',
    image: '/photo6.png',
    externalLink: 'https://v.douyin.com/y7H23cGNzDI/',
    category: Category.VIDEO,
    tags: ['视觉特效', '动态图形', '后期合成'],
    zh: {
      title: 'After Effects | 视觉特效研究',
      subtitle: '视觉特效',
      description: '利用三方插件（如 Trapcode/Optical Flare）进行的视觉特效合成实验。',
      role: '特效合成师',
    },
    en: {
      title: 'After Effects | VFX Research',
      subtitle: 'Visual Effects',
      description: 'VFX synthesis experiments using third-party plugins like Trapcode/Optical Flare.',
      role: 'VFX Compositor',
    }
  }
];
