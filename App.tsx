
import React, { useState, useEffect, useRef } from 'react';
import Matter from 'matter-js';
// 1. 修正组件路径：组件通常在 src/components 目录下
import { Sidebar } from './src/components/Sidebar';
import { HeroSection } from './src/components/HeroSection';
import { PortfolioSection } from './src/components/PortfolioSection';
import { ArticleSection } from './src/components/ArticleSection';
import { TimelineSection } from './src/components/TimelineSection';
import { MusicPlayer } from './src/components/MusicPlayer';

// 2. 补全图标引入
import { Mail, MapPin, RotateCcw, MessageSquare, Instagram, Youtube, FileText, Aperture, Github, Camera } from 'lucide-react';

// 3. 修正数据路径：全部指向 src/data
import { NAV_ITEMS } from './src/data/navigation'; 
import { CONTACT_DATA } from './src/data/contact';
import { ARTICLES_PAGE_DATA } from './src/data/articles';
import { PORTFOLIO_PAGE_DATA } from './src/data/portfolioPage';

// 4. 修正核心常量路径：指向 src/constants
import { 
  CATEGORY_LABELS, 
  PROJECTS, 
  EXPERIENCES, 
  EXPERIENCE_LABELS, 
  LIFE_LABELS, 
  LIFE_DATA 
} from './src/constants'; 

// 5. 修正类型定义路径
import { Language, Category } from './src/types';

interface ExplodedElementData {
  element: HTMLElement;
  originalStyle: string;
}

function App() {
  // 6. 状态定义：必须包含 filter，否则“生活”页面逻辑会崩溃
  const [activeTab, setActiveTab] = useState('dashboard');
  const [language, setLanguage] = useState<Language>('zh');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [portfolioCategory, setPortfolioCategory] = useState<string>('All');
  const [gravityActive, setGravityActive] = useState(false);
  const [filter, setFilter] = useState('All'); // <--- 关键修复点

  // 7. 视图过渡逻辑
  const startViewTransition = (update: () => void) => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      update();
      return;
    }
    const anyDoc = document as any;
    if (anyDoc && typeof anyDoc.startViewTransition === 'function') {
      anyDoc.startViewTransition(update);
    } else {
      update();
    }
  };

  // ... 后面接 engineRef, useEffect 等代码 ...

function App() {
  // --- 状态定义 (必须包含 filter，否则生活界面黑屏) ---
  const [activeTab, setActiveTab] = useState('dashboard');
  const [language, setLanguage] = useState<Language>('zh');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [portfolioCategory, setPortfolioCategory] = useState<string>('All');
  const [gravityActive, setGravityActive] = useState(false);
  const [filter, setFilter] = useState('All'); // <--- 关键修复

  // --- 视图过渡逻辑 ---
  const startViewTransition = (update: () => void) => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      update();
      return;
    }
    const anyDoc = document as any;
    if (anyDoc && typeof anyDoc.startViewTransition === 'function') {
      anyDoc.startViewTransition(update);
    } else {
      update();
    }
  };
  
  // ... 其余逻辑 (engineRef, useEffect 等) 保持不变

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [language, setLanguage] = useState<Language>('zh');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  const [portfolioCategory, setPortfolioCategory] = useState<string>('All');
  
  const [gravityActive, setGravityActive] = useState(false);
  
  // 【必须添加这一行，否则生活页面必黑屏】
  const [filter, setFilter] = useState('All'); 

  const startViewTransition = (update: () => void) => {
    // ... 后续代码保持不变
  

  const startViewTransition = (update: () => void) => {
    // Disable view transitions on mobile to prevent flickering and performance issues
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      update();
      return;
    }

    const anyDoc = document as any;
    if (anyDoc && typeof anyDoc.startViewTransition === 'function') {
      anyDoc.startViewTransition(update);
    } else {
      update();
    }
  };
  const engineRef = useRef<any>(null);
  const runnerRef = useRef<any>(null);
  const requestRef = useRef<number | null>(null);
  const explodedElementsRef = useRef<ExplodedElementData[]>([]);
  const dissipatedElementsRef = useRef<ExplodedElementData[]>([]);
  const scrollPositionRef = useRef<number>(0);

  useEffect(() => {
    // Automatic theme based on time: 18:30 - 06:00 is dark mode
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const currentTimeInMinutes = hour * 60 + minutes;
    const darkStartTimeInMinutes = 18 * 60 + 30; // 18:30
    const darkEndTimeInMinutes = 6 * 60; // 06:00
    
    const isDarkTime = currentTimeInMinutes >= darkStartTimeInMinutes || currentTimeInMinutes < darkEndTimeInMinutes;
    setTheme(isDarkTime ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Scroll to top when activeTab changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'zh' ? 'en' : 'zh');
  };

  const handleHeroNavigation = (category: Category) => {
    startViewTransition(() => {
      setPortfolioCategory(category);
      setActiveTab('portfolio');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  };
  
  // -------------------------
  // GRAVITY EXPLOSION LOGIC
  // -------------------------
  
  const handleInteraction = (event: MouseEvent) => {
    if (!engineRef.current) return;
    const engine = engineRef.current;
    
    const mouseX = event.clientX + window.scrollX;
    const mouseY = event.clientY + window.scrollY;
    
    const bodies = Matter.Composite.allBodies(engine.world);
    
    bodies.forEach((body: any) => {
      if (body.isStatic) return;

      // Add force on click
      if (event.type === 'mousedown') {
          const bodyX = body.position.x;
          const bodyY = body.position.y;
          const distance = Math.sqrt(Math.pow(mouseX - bodyX, 2) + Math.pow(mouseY - bodyY, 2));
          
          if (distance < 500) {
            const forceMagnitude = 0.8 * (1 - distance / 500); 
            const angle = Math.atan2(bodyY - mouseY, bodyX - mouseX);
            
            Matter.Body.applyForce(body, body.position, {
              x: Math.cos(angle) * forceMagnitude,
              y: Math.sin(angle) * forceMagnitude
            });
          }
      }
    });
  };

  const triggerGravity = () => {
    if (gravityActive) return;
    
    if (!Matter) return;

    scrollPositionRef.current = window.scrollY;
    // Lock body height to current scroll height to prevent layout jump
    document.body.style.height = `${document.documentElement.scrollHeight}px`; 
    document.body.style.overflow = 'hidden'; 
    
    setGravityActive(true);

    const Engine = Matter.Engine,
          Runner = Matter.Runner,
          Bodies = Matter.Bodies,
          Composite = Matter.Composite;

    const engine = Engine.create({
      positionIterations: 12,
      velocityIterations: 8,
      constraintIterations: 4
    });
    const world = engine.world;
    engineRef.current = engine;

    // Dissipate large images
    const largeComponents = Array.from(document.querySelectorAll('main img, .aspect-\\[4\\/3\\]')) as HTMLElement[];
    const dissipatedData: ExplodedElementData[] = [];
    
    largeComponents.forEach(el => {
      dissipatedData.push({
        element: el,
        originalStyle: el.getAttribute('style') || ''
      });
      el.style.transition = 'all 0.5s ease-out';
      el.style.transform = 'scale(0.8)';
      el.style.opacity = '0';
      el.style.pointerEvents = 'none';
    });
    dissipatedElementsRef.current = dissipatedData;

    // Selector: Target individual visible elements, avoid layout wrappers
    const selector = `
      nav h1, nav button, nav span,
      footer p,
      .rounded-\\[2rem\\]:not(.aspect-\\[4\\/3\\]),
      main h1, main h2, main h3, main h4, main p, main span, 
      main svg, main button, main a, 
      main li,
      div[class*="border-b-2"], 
      div[class*="h-[1px]"],
      div[class*="h-[2px]"]
    `;
    
    const candidates = Array.from(document.querySelectorAll(selector)) as HTMLElement[];
    
    const visibleCandidates = candidates.filter(el => {
       const rect = el.getBoundingClientRect();
       if (rect.width < 5 || rect.height < 5) return false;
       if (window.getComputedStyle(el).display === 'none') return false;
       if (window.getComputedStyle(el).opacity === '0') return false;
       if (largeComponents.includes(el)) return false;
       return true;
    });

    // Containment check to prevent overlapping physics bodies
    const validElements = visibleCandidates.filter(el => {
      return !visibleCandidates.some(parent => parent !== el && parent.contains(el));
    });

    const bodies: any[] = [];
    const explodedData: ExplodedElementData[] = [];

    validElements.forEach(el => {
      explodedData.push({
        element: el,
        originalStyle: el.getAttribute('style') || ''
      });

      const rect = el.getBoundingClientRect();
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;

      const centerX = rect.left + rect.width / 2 + scrollX;
      const centerY = rect.top + rect.height / 2 + scrollY;

      const body = Bodies.rectangle(centerX, centerY, rect.width, rect.height, {
        restitution: 0.2, 
        friction: 0.5,    
        frictionAir: 0.05, 
        density: 0.002,
        chamfer: { radius: Math.min(rect.width, rect.height) * 0.1 }, 
        angle: (Math.random() - 0.5) * 0.05
      });
      (body as any).domElement = el;
      bodies.push(body);

      // Lock Visuals
      el.style.boxSizing = 'border-box';
      el.style.position = 'absolute';
      el.style.left = `${rect.left + scrollX}px`;
      el.style.top = `${rect.top + scrollY}px`;
      el.style.width = `${rect.width}px`;
      el.style.height = `${rect.height}px`;
      el.style.margin = '0'; 
      el.style.transform = 'translate(0, 0) rotate(0deg)';
      el.style.zIndex = '1000';
      el.style.pointerEvents = 'none'; 
      el.style.transition = 'none';
    });

    explodedElementsRef.current = explodedData;

    const totalHeight = document.documentElement.scrollHeight;

    // Add floor
    const floor = Bodies.rectangle(
        window.innerWidth / 2, 
        totalHeight + 500, // Place floor well below content
        window.innerWidth, 
        1000, 
        { isStatic: true, render: { visible: false } }
    );

    // Add walls
    const wallLeft = Bodies.rectangle(
        -500, 
        totalHeight / 2, 
        1000, 
        totalHeight * 2, 
        { isStatic: true, render: { visible: false } }
    );
    const wallRight = Bodies.rectangle(
        window.innerWidth + 500, 
        totalHeight / 2, 
        1000, 
        totalHeight * 2, 
        { isStatic: true, render: { visible: false } }
    );

    Composite.add(world, [floor, wallLeft, wallRight, ...bodies]);

    const runner = Runner.create();
    runnerRef.current = runner;
    Runner.run(runner, engine);

    const update = () => {
      if (!engineRef.current) return;

      bodies.forEach(body => {
        const el = (body as any).domElement;
        if (el) {
          const { x, y } = body.position;
          const angle = body.angle;
          
          const initialLeft = parseFloat(el.style.left);
          const initialTop = parseFloat(el.style.top);
          const w = parseFloat(el.style.width);
          const h = parseFloat(el.style.height);

          const initialCenterX = initialLeft + w / 2;
          const initialCenterY = initialTop + h / 2;

          const dx = x - initialCenterX;
          const dy = y - initialCenterY;

          el.style.transform = `translate(${dx}px, ${dy}px) rotate(${angle}rad)`;
        }
      });

      requestRef.current = requestAnimationFrame(update);
    };
    
    update();

    setTimeout(() => {
        window.addEventListener('mousedown', handleInteraction);
    }, 50);
  };

  const resetGravity = () => {
    window.removeEventListener('mousedown', handleInteraction);

    if (runnerRef.current) Matter.Runner.stop(runnerRef.current);
    if (engineRef.current) {
      Matter.World.clear(engineRef.current.world, false);
      Matter.Engine.clear(engineRef.current);
    }
    if (requestRef.current) cancelAnimationFrame(requestRef.current);
    
    engineRef.current = null;
    runnerRef.current = null;

    const explodedData = explodedElementsRef.current;
    
    explodedData.forEach(({ element }) => {
      // FORCE REFLOW: Critical for smooth transition from chaos to order
      void element.offsetWidth; 
      
      // Use specific transition property to avoid conflicts
      element.style.transition = 'transform 1s cubic-bezier(0.19, 1, 0.22, 1)';
      // Reset transform to identity (relative to fixed start position)
      element.style.transform = 'translate(0, 0) rotate(0deg)';
    });

    const dissipatedData = dissipatedElementsRef.current;
    dissipatedData.forEach(({ element }) => {
      element.style.transition = 'all 1s ease';
      element.style.transform = 'scale(1)';
      element.style.opacity = '1';
    });

    setTimeout(() => {
      explodedData.forEach(({ element, originalStyle }) => {
        element.setAttribute('style', originalStyle);
      });
      dissipatedData.forEach(({ element, originalStyle }) => {
         element.setAttribute('style', originalStyle);
      });

      explodedElementsRef.current = [];
      dissipatedElementsRef.current = [];
      
      document.body.style.height = '';
      document.body.style.overflow = '';
      window.scrollTo(0, scrollPositionRef.current);
      
      setGravityActive(false);
    }, 1000); // Matches transition duration
  };


  const content = CONTACT_DATA[language];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <>
            <HeroSection 
              onNavigate={(tab) => startViewTransition(() => setActiveTab(tab))} 
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
               <h1 className="text-[8vw] leading-none font-black mb-8 text-black dark:text-white transition-colors duration-300">
                 {PORTFOLIO_PAGE_DATA[language].title}
               </h1>
               <p className="text-2xl text-gray-500 dark:text-gray-400 max-w-2xl font-medium transition-colors duration-300">
                 {PORTFOLIO_PAGE_DATA[language].description}
               </p>
             </div>
             <PortfolioSection language={language} externalFilter={portfolioCategory} />
          </div>
        );
     case 'articles':
  return (
    <div className="pt-20 w-full max-w-[96vw] mx-auto pb-24">
      <div className="mb-24 flex flex-col items-center text-center">
        <h1 className="text-[8vw] leading-none font-black mb-8 text-black dark:text-white transition-colors duration-300">
          {language === 'zh' ? '经历' : 'Experience'}
        </h1>
        <p className="text-2xl text-gray-500 dark:text-gray-400 max-w-2xl font-medium">
          {language === 'zh' ? '教育背景与职业生涯回顾' : 'A journey through my education and career.'}
        </p>
      </div>
      {/* 直接复用你已经有的 TimelineSection 组件，它就是专门展示经历的 */}
      <TimelineSection language={language} />
    </div>
  );
     case 'about': // 这里现在是“生活”板块
        const lifeLabels = LIFE_LABELS[language];
        const lifeItems = LIFE_DATA[language];

        return (
          <div className="pt-20 w-full max-w-[96vw] mx-auto pb-24">
            {/* 顶部巨幕标题 */}
            <div className="mb-24 flex flex-col items-center text-center">
              <h1 className="text-[12vw] md:text-[8vw] leading-none font-black mb-8 text-black dark:text-white tracking-tighter">
                {language === 'zh' ? '生活' : 'LIFE'}
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 max-w-2xl font-medium px-4">
                {language === 'zh' ? '个人思考、学习分享与生活记录。' : 'Personal thoughts and life records.'}
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
              {/* 左侧分类 */}
              <div className="lg:w-64 flex-shrink-0">
                <div className="sticky top-32">
                  <div className="flex items-center gap-2 mb-8 text-gray-400 font-bold uppercase tracking-widest text-sm">
                    <div className="w-4 h-[2px] bg-current"></div>
                    {language === 'zh' ? '分类' : 'Categories'}
                  </div>
                  <div className="flex flex-wrap lg:flex-col gap-2">
                    {Object.entries(lifeLabels).map(([key, label]) => (
                      <button
                        key={key}
                        onClick={() => setFilter(key)}
                        className={`px-6 py-3 rounded-full text-left transition-all duration-300 font-bold ${
                          filter === key 
                            ? 'bg-black text-white dark:bg-white dark:text-black scale-105 shadow-xl' 
                            : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500'
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* 右侧卡片列表 */}
              <div className="flex-1 space-y-8">
                {lifeItems
                  .filter(item => filter === 'All' || item.category === filter)
                  .map((item) => (
                    <div 
                      key={item.id}
                      className="group relative overflow-hidden border-2 border-gray-100 dark:border-gray-800 rounded-[2.5rem] hover:border-black dark:hover:border-white transition-all duration-500 bg-white dark:bg-black"
                    >
                      <div className="flex flex-col md:flex-row h-full">
                        <div className="md:w-2/5 aspect-video md:aspect-auto overflow-hidden">
                          <img 
                            src={item.coverImage || './default-cover.jpg'} 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                            alt={item.title}
                          />
                        </div>
                        <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                          <span className="text-sm font-black uppercase tracking-widest opacity-30 mb-4 block">
                            {item.date} — {item.category}
                          </span>
                          <h3 className="text-3xl md:text-4xl font-black mb-6 leading-tight text-black dark:text-white">
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-4 text-gray-400 font-bold italic">
                            {language === 'zh' ? '阅读全文' : 'Read More'}
                            <div className="w-12 h-[2px] bg-current group-hover:w-24 transition-all duration-500"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        );

      case 'contact':
        {
          const content = CONTACT_DATA[language];
          return (
            <div className="pt-20 w-full max-w-[96vw] mx-auto pb-24">
              <div className="mb-24 flex flex-col items-center text-center">
                <h1 className="text-[8vw] leading-none font-black mb-8 text-black dark:text-white">
                  {content.contactLabel}
                </h1>
                <p className="text-2xl text-gray-500 dark:text-gray-400 max-w-2xl font-medium">
                  {content.intro}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* WeChat / 公众号 */}
                <div className="p-12 border-2 border-gray-100 dark:border-gray-800 rounded-[2rem] hover:border-[#07C160] transition-colors duration-300 group cursor-default text-center">
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center text-gray-400 group-hover:text-[#07C160] transition-colors">
                    <MessageSquare size={48} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{language === 'zh' ? '微信/公众号' : 'WeChat'}</h3>
                  <p className="text-lg opacity-60">{content.socials.wechat}</p>
                </div>
                {/* 后续的小红书等 Social Card 保持不变... */}
        
        {/* WeChat / 公众号 */}
        <div className="p-12 border-2 border-gray-100 dark:border-gray-800 rounded-[2rem] hover:border-[#07C160] transition-colors duration-300 group cursor-default text-center">
          <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center text-gray-400 group-hover:text-[#07C160] transition-colors">
            <MessageSquare size={48} />
          </div>
          <h3 className="text-2xl font-bold mb-2">{language === 'zh' ? '微信/公众号' : 'WeChat'}</h3>
          <p className="text-lg opacity-60">{content.socials.wechat}</p>
        </div>

        {/* 小红书 */}
        <div className="p-12 border-2 border-gray-100 dark:border-gray-800 rounded-[2rem] hover:border-[#FF2442] transition-colors duration-300 group cursor-default text-center">
          <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center text-gray-400 group-hover:text-[#FF2442] transition-colors">
            <Instagram size={48} />
          </div>
          <h3 className="text-2xl font-bold mb-2">{language === 'zh' ? '小红书' : 'Red'}</h3>
          <p className="text-lg opacity-60">{content.socials.xiaohongshu}</p>
        </div>

        {/* Bilibili */}
        <div className="p-12 border-2 border-gray-100 dark:border-gray-800 rounded-[2rem] hover:border-[#00AEEC] transition-colors duration-300 group cursor-default text-center">
          <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center text-gray-400 group-hover:text-[#00AEEC] transition-colors">
            <Youtube size={48} />
          </div>
          <h3 className="text-2xl font-bold mb-2">{language === 'zh' ? '哔哩哔哩' : 'Bilibili'}</h3>
          <p className="text-lg opacity-60">{content.socials.bilibili}</p>
        </div>

        {/* 500px / Photography */}
        <div className="p-12 border-2 border-gray-100 dark:border-gray-800 rounded-[2rem] hover:border-[#0078FF] transition-colors duration-300 group cursor-default text-center">
          <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center text-gray-400 group-hover:text-[#0078FF] transition-colors">
            <Camera size={48} />
          </div>
          <h3 className="text-2xl font-bold mb-2">{language === 'zh' ? '视觉作品' : '500px'}</h3>
          <p className="text-lg opacity-60">{content.socials.px500}</p>
        </div>
      </div>

      {/* Email Section - 同样删除跳转，仅展示 */}
      <div className="mt-8 p-12 border-2 border-gray-100 dark:border-gray-800 rounded-[2rem] text-center cursor-default">
        <h3 className="text-xl font-medium mb-2 opacity-50">{content.emailMeLabel}</h3>
        <p className="text-4xl md:text-6xl font-black text-black dark:text-white break-all">
          {content.email}
        </p>
      </div>
    </div>
  );
      default:
        return (
          <>
            <HeroSection 
              onNavigate={(tab) => startViewTransition(() => setActiveTab(tab))} 
              onCategorySelect={handleHeroNavigation}
              language={language} 
            />
            <PortfolioSection language={language} externalFilter={portfolioCategory} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-sans selection:bg-black dark:selection:bg-white selection:text-white dark:selection:text-black overflow-x-hidden transition-colors duration-300">
      
      <MusicPlayer language={language} />
      {/* Dynamic Navigation */}
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={(tab) => startViewTransition(() => setActiveTab(tab))} 
        language={language}
        toggleLanguage={toggleLanguage}
        theme={theme}
        toggleTheme={toggleTheme}
        onTriggerGravity={triggerGravity}
      />

      {/* Main Content Area */}
      <main className="w-full pt-40 pb-32 vt-page">
         <div key={activeTab} className="animate-fade-in">
           {renderContent()}
         </div>

         {/* Footer */}
         <footer className="w-full max-w-[96vw] mx-auto mt-32 border-t-2 border-black dark:border-white pt-12 flex flex-col md:flex-row justify-between items-center text-sm font-light text-gray-400 dark:text-gray-500 uppercase tracking-wide gap-4 transition-colors duration-300">
            <p>© 2026 WaQi FAN</p>
            <p>{content.footerDesign}</p>
         </footer>
      </main>
      
      {/* Floating Reset Button for Gravity - Fixed Centering Wrapper */}
      {gravityActive && (
        <div className="fixed bottom-8 left-0 w-full flex justify-center z-[1001] pointer-events-none">
          <button 
            onClick={resetGravity}
            className="pointer-events-auto bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-bold text-xl shadow-2xl animate-fade-in hover:scale-110 transition-transform flex items-center gap-3 cursor-pointer"
          >
            <RotateCcw size={24} />
            {language === 'zh' ? '变回去' : 'Go Back'}
          </button>
        </div>
      )}

    </div>
  );
}

export default App;
