import React, { useState, useEffect, useRef } from 'react';
import Matter from 'matter-js';

// --- 1. 组件引入 ---
import { Sidebar } from './components/Sidebar';
import { HeroSection } from './components/HeroSection';
import { PortfolioSection } from './components/PortfolioSection';
import { TimelineSection } from './components/TimelineSection';
import { MusicPlayer } from './components/MusicPlayer';

// --- 2. 图标引入 ---
import { 
  RotateCcw, MessageSquare, Instagram, 
  Youtube, Camera 
} from 'lucide-react';

// --- 3. 数据引入 ---
import { CONTACT_DATA } from './src/data/contact';
import { PORTFOLIO_PAGE_DATA } from './src/data/portfolioPage';
import { 
  LIFE_LABELS, 
  LIFE_DATA 
} from './constants'; 
import { Language, Category } from './types';

interface ExplodedElementData {
  element: HTMLElement;
  originalStyle: string;
}

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [language, setLanguage] = useState<Language>('zh');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [portfolioCategory, setPortfolioCategory] = useState<string>('All');
  const [gravityActive, setGravityActive] = useState(false);
  const [filter, setFilter] = useState('All');

  const engineRef = useRef<any>(null);
  const runnerRef = useRef<any>(null);
  const requestRef = useRef<number | null>(null);
  const explodedElementsRef = useRef<ExplodedElementData[]>([]);
  const dissipatedElementsRef = useRef<ExplodedElementData[]>([]);

  // --- 主题与滚动控制 ---
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  // --- 导航逻辑 (已修复重复定义与 ViewTransition 碎片) ---
  const handleHeroNavigation = (category: Category) => {
    setPortfolioCategory(category);
    setActiveTab('portfolio');
  };

  // --- 重力特效逻辑 ---
  const triggerGravity = () => {
    if (gravityActive) return;
    setGravityActive(true);
  };

  const resetGravity = () => {
    setGravityActive(false);
  };

  // --- 内容渲染路由 ---
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <>
            <HeroSection 
              onNavigate={(tab) => setActiveTab(tab)} 
              onCategorySelect={handleHeroNavigation} 
              language={language} 
            />
            <PortfolioSection language={language} externalFilter={portfolioCategory} />
          </>
        );
      
      case 'portfolio':
        return (
          <div className="pt-20 w-full max-w-[96vw] mx-auto">
            <div className="mb-24">
              <h1 className="text-[8vw] leading-none font-black mb-8">{PORTFOLIO_PAGE_DATA[language].title}</h1>
              <p className="text-2xl text-gray-500 max-w-2xl font-medium">{PORTFOLIO_PAGE_DATA[language].description}</p>
            </div>
            <PortfolioSection language={language} externalFilter={portfolioCategory} />
          </div>
        );

      case 'experience':
        return (
          <div className="pt-20 w-full max-w-[96vw] mx-auto pb-24">
            <div className="mb-24 flex flex-col items-center text-center">
              <h1 className="text-[8vw] leading-none font-black mb-8">
                {language === 'zh' ? '经历' : 'Experience'}
              </h1>
              <p className="text-2xl text-gray-500 dark:text-gray-400 max-w-2xl font-medium">
                {language === 'zh' ? '教育背景与职业生涯回顾' : 'A journey through my education and career.'}
              </p>
            </div>
            <TimelineSection language={language} />
          </div>
        );

      case 'about':
        return (
          <div className="pt-20 w-full max-w-[96vw] mx-auto pb-24">
            <div className="mb-24 flex flex-col items-center text-center">
              <h1 className="text-[12vw] md:text-[8vw] leading-none font-black mb-8 tracking-tighter">
                {language === 'zh' ? '生活' : 'LIFE'}
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 max-w-2xl font-medium px-4">
                {language === 'zh' ? '个人思考、学习分享与生活记录。' : 'Personal thoughts and life records.'}
              </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-64 flex-shrink-0">
                <div className="sticky top-32 flex flex-wrap lg:flex-col gap-2">
                  {Object.entries(LIFE_LABELS[language]).map(([key, label]) => (
                    <button key={key} onClick={() => setFilter(key)} className={`px-6 py-3 rounded-full text-left font-bold transition-all ${filter === key ? 'bg-black text-white dark:bg-white dark:text-black scale-105 shadow-xl' : 'text-gray-500'}`}>
                      {label as string}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex-1 space-y-8">
                {LIFE_DATA[language].filter(i => filter === 'All' || i.category === filter).map(item => (
                  <div key={item.id} className="group relative border-2 border-gray-100 dark:border-gray-800 rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row bg-white dark:bg-black">
                    <div className="md:w-2/5 aspect-video overflow-hidden">
                      <img src={item.coverImage || './default-cover.jpg'} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={item.title} />
                    </div>
                    <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                      <span className="text-sm font-black uppercase opacity-30 mb-4">{item.date} — {item.category}</span>
                      <h3 className="text-3xl md:text-4xl font-black mb-6">{item.title}</h3>
                      <div className="flex items-center gap-4 text-gray-400 font-bold italic">
                        {language === 'zh' ? '阅读全文' : 'Read More'}
                        <div className="w-12 h-[2px] bg-current group-hover:w-24 transition-all"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'contact': {
        const c = CONTACT_DATA[language] || CONTACT_DATA['zh'];
        return (
          <div className="pt-20 w-full max-w-[96vw] mx-auto pb-24">
            <div className="mb-24 flex flex-col items-center text-center">
              <h1 className="text-[8vw] leading-none font-black mb-8">{c.contactLabel}</h1>
              <p className="text-2xl text-gray-500 dark:text-gray-400 max-w-2xl font-medium">
                {c.intro}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-12 border-2 border-gray-100 dark:border-gray-800 rounded-[2rem] hover:border-[#07C160] transition-colors text-center">
                <MessageSquare className="mx-auto mb-6 text-gray-400" size={48} />
                <h3 className="text-2xl font-bold mb-2">{language === 'zh' ? '微信' : 'WeChat'}</h3>
                <p className="text-lg opacity-60">{c.socials.wechat}</p>
              </div>
              <div className="p-12 border-2 border-gray-100 dark:border-gray-800 rounded-[2rem] hover:border-[#FF2442] transition-colors text-center">
                <Instagram className="mx-auto mb-6 text-gray-400" size={48} />
                <h3 className="text-2xl font-bold mb-2">{language === 'zh' ? '小红书' : 'Red'}</h3>
                <p className="text-lg opacity-60">{c.socials.xiaohongshu}</p>
              </div>
              <div className="p-12 border-2 border-gray-100 dark:border-gray-800 rounded-[2rem] hover:border-[#00AEEC] transition-colors text-center">
                <Youtube className="mx-auto mb-6 text-gray-400" size={48} />
                <h3 className="text-2xl font-bold mb-2">Bilibili</h3>
                <p className="text-lg opacity-60">{c.socials.bilibili}</p>
              </div>
              <div className="p-12 border-2 border-gray-100 dark:border-gray-800 rounded-[2rem] hover:border-[#0078FF] transition-colors text-center">
                <Camera className="mx-auto mb-6 text-gray-400" size={48} />
                <h3 className="text-2xl font-bold mb-2">500px</h3>
                <p className="text-lg opacity-60">{c.socials.px500}</p>
              </div>
            </div>
            <div className="mt-8 p-12 border-2 border-gray-100 dark:border-gray-800 rounded-[2rem] text-center">
              <h3 className="text-xl font-medium mb-2 opacity-50">{c.emailMeLabel}</h3>
              <p className="text-4xl md:text-6xl font-black break-all">{c.email}</p>
            </div>
          </div>
        );
      }
      default:
        return null;
    }
  };

  const footerData = CONTACT_DATA[language] || CONTACT_DATA['zh'];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <MusicPlayer language={language} />
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={(tab) => setActiveTab(tab)}
        language={language}
        toggleLanguage={() => setLanguage(l => l === 'zh' ? 'en' : 'zh')}
        theme={theme}
        toggleTheme={() => setTheme(t => t === 'light' ? 'dark' : 'light')}
        onTriggerGravity={triggerGravity}
      />
      <main className="w-full pt-40 pb-32">
        <div key={activeTab} className="animate-fade-in">{renderContent()}</div>
        <footer className="w-full max-w-[96vw] mx-auto mt-32 border-t-2 border-black dark:border-white pt-12 flex justify-between items-center text-sm text-gray-400">
          <p>© 2026 WaQi FAN</p>
          <p>{footerData.footerDesign}</p>
        </footer>
      </main>
      {gravityActive && (
        <div className="fixed bottom-8 left-0 w-full flex justify-center z-[1001]">
          <button onClick={resetGravity} className="bg-black text-white dark:bg-white dark:text-black px-8 py-4 rounded-full font-bold flex items-center gap-3">
            <RotateCcw size={24} /> {language === 'zh' ? '变回去' : 'Go Back'}
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
