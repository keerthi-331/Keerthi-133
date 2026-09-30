import React, { useState, useEffect } from 'react';
import { Wifi, Battery, Signal, Maximize2, Minimize2, Smartphone } from 'lucide-react';

interface MobileFrameProps {
  children: React.ReactNode;
  activeViewTitle?: string;
}

export const MobileFrame: React.FC<MobileFrameProps> = ({ children }) => {
  const [time, setTime] = useState<string>('09:41');
  const [isFullWidth, setIsFullWidth] = useState<boolean>(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setTime(`${hours}:${minutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#0a0b0e] flex flex-col items-center justify-center p-0 sm:py-6 sm:px-4 text-zinc-100 antialiased selection:bg-rose-500/30 selection:text-rose-200">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-rose-900/10 rounded-full blur-[140px] -translate-y-20" />
        <div className="w-[450px] h-[450px] bg-zinc-800/20 rounded-full blur-[120px] translate-y-40" />
      </div>

      {/* Top Simulator Control Bar (visible on desktop) */}
      <div className="hidden sm:flex items-center justify-between w-full max-w-[430px] mb-3 px-3 text-xs text-zinc-400">
        <div className="flex items-center gap-2">
          <Smartphone className="w-3.5 h-3.5 text-rose-500" />
          <span className="font-semibold text-zinc-300">BreachMedics AI Mobile Simulator</span>
        </div>
        <button
          onClick={() => setIsFullWidth(!isFullWidth)}
          className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-zinc-800/80 hover:bg-zinc-700/80 text-zinc-300 transition-colors text-[11px]"
          title="Toggle phone frame size"
        >
          {isFullWidth ? <Minimize2 className="w-3 h-3" /> : <Maximize2 className="w-3 h-3" />}
          <span>{isFullWidth ? 'Standard Mobile' : 'Expanded'}</span>
        </button>
      </div>

      {/* The Native Mobile Frame Simulator */}
      <div
        className={`relative w-full transition-all duration-300 ${
          isFullWidth ? 'sm:max-w-[480px]' : 'sm:max-w-[412px]'
        } sm:rounded-[44px] sm:border-[10px] sm:border-[#22242c] sm:ring-1 sm:ring-white/10 sm:shadow-[0_25px_70px_rgba(0,0,0,0.85),0_0_35px_rgba(225,29,72,0.12)] bg-[#121212] overflow-hidden flex flex-col min-h-screen sm:min-h-[850px] sm:max-h-[92vh]`}
      >
        {/* Mobile Device Status Bar */}
        <div className="sticky top-0 z-30 w-full bg-[#121212]/95 backdrop-blur-md px-6 pt-3 pb-1.5 flex items-center justify-between text-xs font-semibold text-zinc-300 select-none">
          {/* Time display */}
          <span className="tracking-tight text-white font-mono text-[13px]">{time}</span>

          {/* Dynamic Island / Camera Notch */}
          <div className="hidden sm:flex items-center justify-center">
            <div className="w-24 h-4 bg-black rounded-full border border-zinc-800/90 flex items-center justify-center gap-2 px-2 shadow-inner">
              <div className="w-2 h-2 rounded-full bg-zinc-900 border border-zinc-800" />
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-950" />
            </div>
          </div>

          {/* Device indicators: Signal, Wifi, Battery */}
          <div className="flex items-center gap-1.5 text-zinc-400">
            <Signal className="w-3.5 h-3.5" />
            <Wifi className="w-3.5 h-3.5" />
            <div className="flex items-center gap-0.5">
              <span className="text-[10px] font-mono text-zinc-300">98%</span>
              <Battery className="w-4 h-4 text-emerald-400" />
            </div>
          </div>
        </div>

        {/* Scrollable Mobile Screen Body */}
        <div className="flex-1 overflow-y-auto no-scrollbar relative flex flex-col bg-[#121212]">
          {children}
        </div>

        {/* Bottom Home Indicator Bar (Simulated iOS/Android bar) */}
        <div className="hidden sm:flex justify-center items-center py-2.5 bg-[#121212] shrink-0 border-t border-zinc-900/50">
          <div className="w-32 h-1 bg-zinc-600/70 rounded-full" />
        </div>
      </div>

      {/* Desktop Helper Footer */}
      <div className="hidden sm:block text-center mt-3 text-[11px] text-zinc-400 font-mono">
        Native Mobile Viewport Simulator · 60s Session Lockdown Protocol
      </div>
    </div>
  );
};
