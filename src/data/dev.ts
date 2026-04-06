import { Project } from '../../types';

export const DEV_DATA: Project[] = [
  {
    id: 'dev1',
    common: {
      category: 'Ai工具', // 这里的 Key 记得在 constants.ts 的 CATEGORY_LABELS 里同步
      image: '/icon1.png', // 对应你即将上传到 public 的第一张图
      icon: 'layout-grid', 
      websiteUrl: 'https://ai-bot.cn/',
      githubUrl: '' 
    },
    zh: {
      title: 'AI 工具集',
      subtitle: '收录全球优质 AI 工具',
      description: '一个专注于发现和分享 AI 生产力工具的平台，涵盖设计、文案、音视频等全领域。',
      role: '链接跳转',
      tags: ['AI 导航', '生产力', '工具集'],
      roleDetail: "点击上方预览按钮即可访问该 AI 导航网站。"
    },
    en: {
      title: 'AI Bot Directory',
      subtitle: 'Global AI Tools Collection',
      description: 'A platform dedicated to discovering and sharing high-quality AI productivity tools.',
      role: 'Portal',
      tags: ['AI Navigation', 'Productivity', 'Tools'],
      roleDetail: "Click the preview button to visit the directory."
    }
  },
  {
    id: 'dev2',
    common: {
      category: 'Ai工具',
      image: '/icon2.png', // 对应 public/icon2.png
      icon: 'message-square',
      websiteUrl: 'https://askmany.cn/login',
      githubUrl: ''
    },
    zh: {
      title: 'AskManyAI',
      subtitle: '多模型聚合对话平台',
      description: '一站式访问多种顶尖 AI 语言模型，提供极速且稳定的智能对话体验。',
      role: 'AI 对话',
      tags: ['大模型', '聚合器', '效率'],
      roleDetail: "通过链接可直接进入登录页面开始对话。"
    },
    en: {
      title: 'AskManyAI',
      subtitle: 'Multi-Model AI Platform',
      description: 'One-stop access to multiple top-tier AI language models for a fast and stable chat experience.',
      role: 'AI Chat',
      tags: ['LLM', 'Aggregator', 'Efficiency'],
      roleDetail: "Visit the link to log in and start chatting."
    }
  },
  {
    id: 'dev3',
    common: {
      category: 'Ai工具',
      image: '/icon3.png', // 对应 public/icon3.png
      icon: 'box',
      websiteUrl: 'https://www.jizhihezi.com/',
      githubUrl: ''
    },
    zh: {
      title: '集知盒子',
      subtitle: '知识管理与 AI 辅助',
      description: '专业且美观的知识整理工具，支持 AI 辅助内容创作与管理。',
      role: '知识库',
      tags: ['知识管理', 'AI 写作', '盒子'],
      roleDetail: "集成多种高效的知识处理插件与 AI 功能。"
    },
    en: {
      title: 'JiZhiHezi',
      subtitle: 'Knowledge & AI Helper',
      description: 'A professional and aesthetic knowledge management tool with AI-assisted content creation.',
      role: 'Knowledge Base',
      tags: ['Management', 'AI Writing', 'Toolbox'],
      roleDetail: "Features various efficient plugins and AI capabilities."
    }
  },
  {
    id: 'dev4',
    common: {
      category: 'Ai工具',
      image: '/icon4.png', // 对应 public/icon4.png
      icon: 'play-circle',
      websiteUrl: 'https://rutube.ru/',
      githubUrl: ''
    },
    zh: {
      title: 'RUTUBE',
      subtitle: '俄罗斯主流视频平台',
      description: '提供丰富的视频内容展示，是进行视觉趋势调研与媒体参考的重要来源。',
      role: '视频媒介',
      tags: ['视频流', '国际化', '流媒体'],
      roleDetail: "访问该平台获取更多海外视频创作灵感。"
    },
    en: {
      title: 'RUTUBE',
      subtitle: 'Russian Video Platform',
      description: 'A mainstream video platform offering a wealth of content for visual trend research and media reference.',
      role: 'Video Media',
      tags: ['Video Stream', 'Global', 'Streaming'],
      roleDetail: "Visit the platform for international creative inspiration."
    }
  }
];
