import { Project, Category } from '../../types';

export const DESIGN_DATA: Project[] = [
  {
    id: 'd5',
    image: '/photo5.png', // 对应你上传到 public 的图片
    externalLink: 'http://xhslink.com/o/25m0ubZfBw6', // 小红书作品链接
    category: Category.DESIGN,
    tags: ['高保真原型', '交互逻辑', '校园生态', 'Axure'],
    zh: {
      title: '交互原型 | 吱吱校园',
      subtitle: '校园二手循环交易系统',
      description: '专为大学生打造的垂直化二手书及闲置物品交易平台。通过“积分激励制”解决校园废弃物处置痛点，构建绿色、高信任度的校内循环经济生态。',
      role: 'UI/UX 设计师',
      concept: "以‘低碳循环’为核心，采用卡片式布局与低门槛的操作路径降低认知负荷。视觉上通过绿色系传递环保理念，交互上引入环保积分激励模型。",
      roleDetail: "负责用户画像建模、全链路用户路径分析、功能架构规划及基于 Axure 的高保真动态原型开发。"
    },
    en: {
      title: 'UX Prototype | Zhizhi Campus',
      subtitle: 'Campus Second-hand Trading System',
      description: 'A vertical platform for university students to trade second-hand books and idle items. Solving waste disposal pain points via a credit incentive system.',
      role: 'UI/UX Designer',
      concept: "Centered on 'Low-carbon Circulation', utilizing card-based layouts to reduce cognitive load. The UI uses green tones to convey environmental values with an integrated credit system.",
      roleDetail: "Responsible for user persona modeling, user journey mapping, functional architecture, and Axure-based high-fidelity prototyping."
    }
  }
];
