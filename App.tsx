import React, { useState, useEffect, useRef } from 'react';
import Matter from 'matter-js';

// --- 1. 组件引入 (根据根目录结构) ---
import { Sidebar } from './components/Sidebar';
import { HeroSection } from './components/HeroSection';
import { PortfolioSection } from './components/PortfolioSection';
import { TimelineSection } from './components/TimelineSection';
import { MusicPlayer } from './components/MusicPlayer';

// --- 2. 图标引入 ---
import { 
  Mail, MapPin, RotateCcw, MessageSquare, Instagram, 
  Youtube, FileText, Aperture, Github, Camera 
} from 'lucide-react';

// --- 3. 数据引入 (注意路径：constants和types在根目录，data在src下) ---
import { NAV_ITEMS } from './src/data/navigation';
import { CONTACT_DATA } from './src/data/contact';
import { PORTFOLIO_PAGE_DATA } from './src/data/portfolioPage';
import { 
  CATEGORY_LABELS, 
  PROJECTS, 
  EXPERIENCES, 
  EXPERIENCE_LABELS, 
  LIFE_LABELS, 
  LIFE_DATA 
} from './constants'; 
import { Language, Category } from './types';

interface ExplodedElementData {
  element: HTMLElement;
  originalStyle: string;
}

function App() {
  // --- 状态定义 ---
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
  const scrollPositionRef = useRef<number>(0);

  // --- 视图过渡逻辑 (修复重复定义问题) ---
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

  // --- 基础生命周期 ---
  useEffect(() => {
    const hour = new Date().getHours();
    setTheme((hour >= 18 || hour < 6) ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const handleHeroNavigation = (category: Category) => {
    startViewTransition(() => {
      setPortfolioCategory(category);
      setActiveTab('portfolio');
    });
  };

  // --- 核心物理逻辑：TRIGGER GRAVITY (此处恢复你源码中的全部计算) ---
  const handleInteraction = (event: MouseEvent) => {
    if (!engineRef.current) return;
    const mouseX = event.clientX + window.scrollX;
    const mouseY = event.clientY + window.scrollY;
    const bodies = Matter.Composite.allBodies(engineRef.current.world);

    bodies.forEach((body: any) => {
      if (body.isStatic) return;
      const distance = Math.sqrt(Math.pow(mouseX - body.position.x, 2) + Math.pow(mouseY - body.position.y, 2));
      if (distance < 500 && event.type === 'mousedown') {
        const forceMagnitude = 0.8 * (1 - distance / 500);
        const angle = Math.atan2(body.position.y - mouseY, body.position.x - mouseX);
        Matter.Body.applyForce(body, body.position, {
          x: Math.cos(angle) * forceMagnitude,
          y: Math.sin(angle) * forceMagnitude
        });
      }
    });
  };

  const triggerGravity = () => {
    if (gravityActive || !Matter) return;
    scrollPositionRef.current = window.scrollY;
    document.body.style.height = `${document.documentElement.scrollHeight}px`;
    document.body.style.overflow = 'hidden';
    setGravityActive(true);

    const engine = Matter.Engine.create({ positionIterations: 12 });
    engineRef.current = engine;

    // 1. 消除大图
    const largeComponents = Array.from(document.querySelectorAll('main img, .aspect-\\[4\\/3\\]')) as HTMLElement[];
    largeComponents.forEach(el => {
      dissipatedElementsRef.current.push({ element: el, originalStyle: el.getAttribute('style') || '' });
      el.style.opacity = '0';
      el.style.pointerEvents = 'none';
    });

    // 2. 识别并爆炸文字/小组件
    const selector = 'nav h1, nav button, footer p, main h1, main h2, main h3, main p, main span, main svg, main button, main li';
    const candidates = Array.from(document.querySelectorAll(selector)) as HTMLElement[];
    const validElements = candidates.filter(el => {
      const rect = el.getBoundingClientRect();
      return rect.width > 5 && !candidates.some(parent => parent !== el && parent.contains(el));
    });

    const bodies = validElements.map(el => {
      const rect = el.getBoundingClientRect();
      const scrollX = window.scrollX, scrollY = window.scrollY;
      const body = Matter.Bodies.rectangle(rect.left + rect.width/2 + scrollX, rect.top + rect.height/2 + scrollY, rect.width, rect.height, {
        restitution: 0.2, frictionAir: 0.05
      });
      (body as any).domElement = el;
      
      explodedElementsRef.current.push({ element: el, originalStyle: el.getAttribute('style') || '' });
      el.style.position = 'absolute';
      el.style.left = `${rect.left + scrollX}px`;
      el.style.top = `${rect.top + scrollY}px`;
      el.style.width = `${rect.width}px`;
      el.style.zIndex = '1000';
      return body;
    });

    const floor = Matter.Bodies.rectangle(window.innerWidth/2, document.documentElement.scrollHeight + 500, window.innerWidth, 1000, { isStatic: true });
    Matter.Composite.add(engine.world, [floor, ...bodies]);
    
    const runner = Matter.Runner.create();
    runnerRef.current = runner;
    Matter.Runner.run(runner, engine);

    const update = () => {
      if (!engineRef.current) return;
      bodies.forEach(body => {
        const el = (body as any).domElement;
        const { x, y } = body.position;
        const initialLeft = parseFloat(el.style.left), initialTop = parseFloat(el.style.top);
        el.style.transform = `translate(${x - (initialLeft + parseFloat(el.style.width)/2)}px, ${y - (initialTop + el.offsetHeight/2)}px) rotate(${body.angle}rad)`;
      });
      requestRef.current = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('mousedown', handleInteraction);
  };

  const resetGravity = () => {
    window.removeEventListener('mousedown', handleInteraction);
    if (runnerRef.current) Matter.Runner.stop(runnerRef.current);
    if (requestRef.current) cancelAnimationFrame(requestRef.current);
    
    explodedElementsRef.current.forEach(({ element }) => {
      element.style.transition = 'transform 1s cubic-bezier(0.19, 1, 0.22, 1)';
      element.style.transform = 'translate(0, 0) rotate(0deg)';
    });
    
    setTimeout(() => {
      [...explodedElementsRef.current, ...dissipatedElementsRef.current].forEach(({ element, originalStyle }) => {
        element.setAttribute('style', originalStyle);
      });
      explodedElementsRef.current = [];
      dissipatedElementsRef.current = [];
      document.body.style.height = '';
      document.body.style.overflow = '';
      setGravityActive(false);
    }, 1000);
  };

  // --- 内容渲染路由 ---
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <>
            <HeroSection onNavigate={(tab) => startViewTransition(() => setActiveTab(tab))} onCategorySelect={handleHeroNavigation} language={language} />
            <PortfolioSection language={language} externalFilter={portfolioCategory} />
          </>
        );
      case 'portfolio':
        return (
          <div className="pt-20 w-full max-w-[96vw] mx-auto">
            <h1 className="text-[8vw] font-black mb-8">{PORTFOLIO_PAGE_DATA[language].title}</h1>
            <PortfolioSection language={language} externalFilter={portfolioCategory} />
          </div>
        );
      case 'experience':
        return (
          <div className="pt-20 w-full max-w-[96vw] mx-auto">
             <TimelineSection language={language} />
          </div>
        );
      case 'about':
        {
          const labels = LIFE_LABELS[language];
          return (
            <div className="pt-20 w-full max-w-[96vw] mx-auto pb-24">
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-64">
                   <div className="flex flex-wrap lg:flex-col gap-2">
                     {Object.entries(labels).map(([key, label]) => (
                       <button key={key} onClick={() => setFilter(key)} className={`px-6 py-3 rounded-full text-left font-bold ${filter === key ? 'bg-black text-white dark:bg-white dark:text-black' : 'text-gray-500'}`}>
                         {label}
                       </button>
                     ))}
                   </div>
                </div>
                <div className="flex-1 space-y-8">
                  {LIFE_DATA[language].filter(i => filter === 'All' || i.category === filter).map(item => (
                    <div key={item.id} className="group border-2 border-gray-100 dark:border-gray-800 rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row bg-white dark:bg-black">
                      <div className="md:w-2/5 aspect-video overflow-hidden">
                        <img src={item.coverImage || './default-cover.jpg'} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={item.title} />
                      </div>
                      <div className="md:w-3/5 p-8 flex flex-col justify-center">
                        <span className="text-sm opacity-30 mb-2">{item.date} — {item.category}</span>
                        <h3 className="text-3xl font-black mb-4">{item.title}</h3>
                        <p className="text-gray-400 italic">Read More</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        }
      case 'contact':
        {
          const c = CONTACT_DATA[language];
          return (
            <div className="pt-20 w-full max-w-[96vw] mx-auto pb-24">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* 微信卡片 */}
                <div className="p-12 border-2 border-gray-100 dark:border-gray-800 rounded-[2rem] hover:border-[#07C160] transition-colors text-center">
                  <MessageSquare className="mx-auto mb-6 text-gray-400" size={48} />
                  <h3 className="text-2xl font-bold mb-2">{language === 'zh' ? '微信' : 'WeChat'}</h3>
                  <p className="opacity-60">{c.socials.wechat}</p>
                </div>
                {/* 小红书卡片 */}
                <div className="p-12 border-2 border-gray-100 dark:border-gray-800 rounded-[2rem] hover:border-[#FF2442] transition-colors text-center">
                  <Instagram className="mx-auto mb-6 text-gray-400" size={48} />
                  <h3 className="text-2xl font-bold mb-2">{language === 'zh' ? '小红书' : 'Red'}</h3>
                  <p className="opacity-60">{c.socials.xiaohongshu}</p>
                </div>
                {/* B站卡片 */}
                <div className="p-12 border-2 border-gray-100 dark:border-gray-800 rounded-[2rem] hover:border-[#00AEEC] transition-colors text-center">
                  <Youtube className="mx-auto mb-6 text-gray-400" size={48} />
                  <h3 className="text-2xl font-bold mb-2">Bilibili</h3>
                  <p className="opacity-60">{c.socials.bilibili}</p>
                </div>
                {/* 摄影卡片 */}
                <div className="p-12 border-2 border-gray-100 dark:border-gray-800 rounded-[2rem] hover:border-[#0078FF] transition-colors text-center">
                  <Camera className="mx-auto mb-6 text-gray-400" size={48} />
                  <h3 className="text-2xl font-bold mb-2">500px</h3>
                  <p className="opacity-60">{c.socials.px500}</p>
                </div>
              </div>
              <div className="mt-8 p-12 border-2 border-gray-100 dark:border-gray-800 rounded-[2rem] text-center">
                <h3 className="text-xl opacity-50 mb-2">{c.emailMeLabel}</h3>
                <p className="text-4xl md:text-6xl font-black">{c.email}</p>
              </div>
            </div>
          );
        }
      default:
        return null;
    }
  };

  const appContent = CONTACT_DATA[language];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 overflow-x-hidden">
      <MusicPlayer language={language} />
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={(tab) => startViewTransition(() => setActiveTab(tab))} 
        language={language}
        toggleLanguage={() => setLanguage(l => l === 'zh' ? 'en' : 'zh')}
        theme={theme}
        toggleTheme={() => setTheme(t => t === 'light' ? 'dark' : 'light')}
        onTriggerGravity={triggerGravity}
      />

      <main className="w-full pt-40 pb-32">
        <div key={activeTab} className="animate-fade-in">{renderContent()}</div>
        <footer className="w-full max-w-[96vw] mx-auto mt-32 border-t-2 border-black dark:border-white pt-12 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2026 WaQi FAN</p>
          <p>{appContent.footerDesign}</p>
        </footer>
      </main>

      {gravityActive && (
        <div className="fixed bottom-8 left-0 w-full flex justify-center z-[1001] pointer-events-none">
          <button onClick={resetGravity} className="pointer-events-auto bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-bold text-xl shadow-2xl flex items-center gap-3">
            <RotateCcw size={24} /> {language === 'zh' ? '变回去' : 'Go Back'}
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
