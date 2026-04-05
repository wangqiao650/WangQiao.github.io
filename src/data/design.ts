import { Project } from '../../types';

export const DESIGN_DATA: Project[] = [
  {
    id: 'd1',
    common: {
      category: 'Video Production',
      image: '/video-prod-cover.jpg', // 建议替换为你上传到public的图片
      figmaUrl: 'https://github.com/wangqiao650', 
      gallery: []
    },
    zh: {
      title: '影像工程 | 全链路视频制作',
      subtitle: '从创意策划到成片交付',
      description: '完整经历了从前期分镜（Storyboard）到后期渲染的全流程实操。优化多机位协作流，确保在既定框架下实现视觉效果的最大化。',
      role: '视频后期专家',
      tags: ['工作流管理', '多机位剪辑', '后期合成', 'PR'],
      awards: ["学术课程优秀产出"],
      concept: "强调‘工程化思维’。在保证素材组织严谨性的基础上，通过精细化修剪与转场处理，解决实拍过程中的逻辑断层，还原导演意图。",
      roleDetail: "负责工程目录搭建、多机位同步剪辑、字幕系统开发及最终导出参数优化。"
    },
    en: {
      title: 'Video Engineering | Full-link Production',
      subtitle: 'From Creative Planning to Final Delivery',
      description: 'A comprehensive practice covering the entire workflow from initial storyboarding to final post-rendering. Optimized multi-camera collaborative flows to maximize visual impact within set frameworks.',
      role: 'Post-production Expert',
      tags: ['Workflow', 'Multi-cam', 'Compositing', 'Premiere Pro'],
      awards: ["Outstanding Academic Project"],
      concept: "Emphasizing 'Engineering Thinking'. Ensuring rigorous material organization while solving logical gaps in raw footage through precise trimming and transition handling to restore the director's vision.",
      roleDetail: "Responsible for project directory structuring, multi-camera synchronization, subtitle system development, and final export optimization."
    }
  },
  {
    id: 'd2',
    common: {
      category: 'Photography',
      image: '/portrait-cover.jpg',
      figmaUrl: 'https://github.com/wangqiao650'
    },
    zh: {
      title: '人像摄影 | 风格化视觉探索',
      subtitle: '人像艺术表现研究',
      description: '基于不同主题的风格化人像创作，探索色彩表现力与人物情绪在特定环境下的化学反应。',
      role: '人像摄影师',
      tags: ['人像摄影', '色彩美学', '氛围感'],
      awards: ["个人委约作品"],
      concept: "以‘情绪媒介’为核心，利用大光圈虚化或特殊滤镜营造梦幻/胶片感视觉，突出主体在画面中的视觉中心地位。",
      roleDetail: "负责模特沟通导摄、外景选址考察、后期胶片色调风格化调教及成片排版设计。"
    },
    en: {
      title: 'Portrait Photography | Stylized Exploration',
      subtitle: 'Portrait Artistic Expression Research',
      description: 'Stylized portrait creations based on diverse themes, exploring the chemical reaction between color expressiveness and human emotions in specific environments.',
      role: 'Portrait Photographer',
      tags: ['Portrait', 'Color Aesthetics', 'Atmosphere'],
      awards: ["Personal Commissioned Work"],
      concept: "Focusing on 'Emotion as a Medium', using large aperture bokeh or special filters to create a dreamy/filmic aesthetic, highlighting the subject's central position in the frame.",
      roleDetail: "Responsible for model direction, location scouting, post-processing film-style grading, and final layout design."
    }
  },
  {
    id: 'd3',
    common: {
      category: 'UI/UX Design',
      image: '/campus-app-cover.jpg',
      figmaUrl: 'https://github.com/wangqiao650'
    },
    zh: {
      title: '交互原型 | 吱吱校园',
      subtitle: '校园二手循环交易系统',
      description: '专为大学生打造的垂直化二手书及闲置物品交易平台。通过“积分激励制”解决校园废弃物处置痛点，构建绿色、高信任度的校内循环经济生态。',
      role: '交互设计师 / 产品经理',
      tags: ['高保真原型', '交互逻辑', '校园生态', 'Axure'],
      awards: ["优秀项目作品"], 
      concept: "以‘低碳循环’为核心，采用卡片式布局与低门槛的操作路径降低认知负荷。视觉上通过绿色系传递环保理念，交互上引入环保积分激励模型。",
      roleDetail: "负责用户画像建模、全链路用户路径分析、功能架构规划及基于 Axure 的高保真动态原型开发。"
    },
    en: {
      title: 'UX Prototype | Zhizhi Campus',
      subtitle: 'Campus Second-hand Trading System',
      description: 'A vertical platform for university students to trade second-hand books and idle items. Solving waste disposal pain points via a credit incentive system.',
      role: 'Interaction Designer / PM',
      tags: ['Hi-fi Prototype', 'Logic', 'Eco-system', 'Axure'],
      awards: ["Excellence Project Award"],
      concept: "Centered on 'Low-carbon Circulation', utilizing card-based layouts to reduce cognitive load. The UI uses green tones to convey environmental values with an integrated credit system.",
      roleDetail: "Responsible for user persona modeling, user journey mapping, functional architecture, and Axure-based high-fidelity prototyping."
    }
  },
  {
    id: 'd4',
    common: {
      category: 'Motion Graphics',
      image: '/ae-study-cover.jpg',
      figmaUrl: 'https://github.com/wangqiao650'
    },
    zh: {
      title: 'After Effects | 视觉特效研究',
      subtitle: '多层级合成与光影表现练习',
      description: '利用三方插件（如Trapcode/Optical Flares）进行的视觉渲染实验。',
      role: '特效/合成师',
      tags: ['视觉特效', '动态图形', '后期合成'],
      awards: ["练习作品 / 非商业项目"],
      concept: "探索数学逻辑与艺术美感的平衡点。",
      roleDetail: "多通道合成流程、色彩空间管理及复杂图层遮罩处理。"
    },
    en: {
      title: 'After Effects | VFX Research',
      subtitle: 'Multi-layer Compositing & Lighting Practice',
      description: 'Visual rendering experiments using third-party plugins like Trapcode and Optical Flares.',
      role: 'VFX / Compositor',
      tags: ['VFX', 'Motion Graphics', 'Compositing'],
      awards: ["Practice Work / Non-commercial"],
      concept: "Exploring the balance between mathematical logic and artistic aesthetics.",
      roleDetail: "Handling multi-pass compositing workflows, color space management, and complex layer masking."
    }
  },
  {
    id: 'd5',
    common: {
      category: 'Thesis Project',
      image: '/thesis-cover.jpg',
      figmaUrl: 'https://github.com/wangqiao650'
    },
    zh: {
      title: '本科毕设 | 层层常德',
      subtitle: '数字插画设计',
      description: '本课题通过数字插画和AR技术相结合的方式，推广常德文化，利用分层构图与动态展示强化视觉效果。',
      role: '全流程负责人',
      tags: ['数字插画', 'AR设计', '非遗文化'],
      awards: ["毕业设计入选作品"],
      concept: "探讨AR技术在文化传播中的应用，为非遗文化的现代化表达和文创产品设计提供创新路径。",
      roleDetail: "独立完成从文化调研、插画绘制到AR交互逻辑的完整开发。"
    },
    en: {
      title: 'Undergraduate Thesis | Layers of Changde',
      subtitle: 'Digital Illustration & AR Design',
      description: 'Integrating digital illustration with AR technology to promote Changde culture, using layered composition to enhance visual interaction.',
      role: 'Lead Designer',
      tags: ['Digital Illustration', 'AR', 'Intangible Heritage'],
      awards: ["Thesis Selection"],
      concept: "Exploring AR's application in cultural dissemination, providing innovative paths for modern expression of intangible heritage.",
      roleDetail: "Independently completed cultural research, illustration drawing, and AR interaction logic development."
    }
  }
];
