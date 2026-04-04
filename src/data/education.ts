import { Language } from '../../types';

export const EDUCATION_DATA: Record<Language, any> = {
  zh: {
    title: "教育经历",
    about: "就读于湖南应用技术学院数字媒体艺术专业，专业前 15%。擅长数字图像处理、影视后期及特效制作。",
    openToWork: "2025届毕业生 | 寻找视频制作/AI创作/新媒体岗位",
    viewHonorsLabel: "查看荣誉奖项",
    honorsTitle: "在校荣誉",
    competitionsTitle: "竞赛与技能",
    scholarshipsLabel: "奖学金",
    titlesLabel: "荣誉称号",
    experiences: [
      {
        id: '1',
        year: '2021.09 - 2025.06',
        title: '数字媒体艺术 (本科)',
        institution: '湖南应用技术学院',
        description: '核心课程：数字图像处理、影视后期制作、影视特效、音视频处理等。',
        type: 'education'
      },
      {
        id: '2',
        year: '2023.06 - 2023.09',
        title: '剪辑助理',
        institution: '广州逸起文化传媒有限公司',
        description: '负责账号内容全流程剪辑，参与百万点赞爆款视频制作。',
        type: 'work'
      },
      {
        id: '3',
        year: '2025.02 - 2025.12',
        title: '剪辑师',
        institution: '广州乔卓科技有限公司',
        description: '主导多平台内容产出，达成 15 万个人销售额，负责 YouTube/TikTok/Ins 运营。',
        type: 'work'
      }
    ],
    honors: {
      scholarships: ["专业前 15% 优秀学生"],
      titles: ["校学生优秀干部"],
      competitions: [
        { level: "校级", awards: ["校排球杯第一名 (2023)", "院辩论赛第一名 (2022)"] },
        { level: "技能", awards: ["英语二级", "普通话二级甲等", "计算机二级"] }
      ]
    }
  },
  en: {
    title: "Education",
    about: "Digital Media Arts major at Hunan Institute of Applied Technology. Top 15% of the class.",
    openToWork: "Class of 2025 | Seeking Video/AI/New Media Roles",
    viewHonorsLabel: "Honors & Awards",
    honorsTitle: "Academic Honors",
    competitionsTitle: "Competitions",
    scholarshipsLabel: "Scholarships",
    titlesLabel: "Titles",
    experiences: [
      {
        id: '1',
        year: '2021 - 2025',
        title: 'Digital Media Arts (B.A.)',
        institution: 'HIAT',
        description: 'Focused on Video Production, VFX, and Digital Imaging.',
        type: 'education'
      }
    ],
    honors: {
      scholarships: ["Academic Excellence (Top 15%)"],
      titles: ["Excellent Student Leader"],
      competitions: [
        { level: "Campus", awards: ["1st Prize - Volleyball Cup", "1st Prize - Debate Competition"] }
      ]
    }
  }
};
