import { Project } from '../../types';

export const VIDEOGRAPHY_DATA: Project[] = [
  {
    id: 'v1',
    common: {
      category: 'Video Production',
      image: 'https://via.placeholder.com/800x450?text=Viral+Video+1', // 建议替换为你的视频封面图
      videoUrl: 'https://v.douyin.com/0JEHJ0nFSLY/', // 替换为你视频的实际链接
    },
    zh: {
      title: '“整个路人”系列短视频',
      subtitle: '新概念系列剪辑',
      description: '单条视频点赞超百万，负责全流程剪辑与视觉包装。',
      role: '剪辑助理 / 视觉包装',
      tags: ['爆款', '百万点赞', '剪辑技巧'],
      concept: "通过综艺感极强的剪辑逻辑，将素材进行搞笑处理，创造出符合新媒体传播规律的内容。"
    },
    en: {
      title: '"Zheng Ge Lu Ren" Series',
      subtitle: 'Viral Short Video Series',
      description: 'Achieved over 1 million likes. Responsible for full-process editing.',
      role: 'Video Editor',
      tags: ['Viral', '1M+ Likes', 'Fast-paced'],
      concept: "Deconstructing raw footage into high-engagement content through rhythmic editing."
    }
  },
  {
    id: 'v2',
    common: {
      category: 'Commercial Video',
      image: 'https://via.placeholder.com/800x450?text=Sales+Video', 
    },
    zh: {
      title: '汽车品牌营销视频',
      subtitle: 'YouTube / TikTok 运营内容',
      description: '个人月销售额达到 15 万，主导账号内容的产出与引流。',
      role: '剪辑师 / 内容运营',
      tags: ['带货', '跨境电商', '转化率'],
      concept: "结合产品特性与汽车用户偏好，通过视觉引导提升点击率与转化率。"
    },
    en: {
      title: 'E-commerce Marketing Video',
      subtitle: 'Global Platform Strategy',
      description: 'Contributed to 150k CNY sales through strategic content production.',
      role: 'Lead Video Editor',
      tags: ['E-commerce', 'Sales Driven', 'Global'],
      concept: "Optimizing visual guidance to boost CTR and conversion rates for global users."
    }
  }
];
