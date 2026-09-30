import React, { useState } from 'react';
import {
  ShieldAlert,
  GlobeLock,
  MessageSquareWarning,
  MailWarning,
  Smartphone,
  ChevronRight,
  TrendingUp,
  Activity,
  Radio,
  Sparkles
} from 'lucide-react';
import { ThreatItem } from '../types';
import { ThreatDetailModal } from './ThreatDetailModal';

interface HomeDashboardViewProps {
  onPanicTap: () => void;
}

const threatTrends: ThreatItem[] = [
  {
    id: 't1',
    title: 'Fake login pages stealing sessions',
    subtext: 'Reported 2h ago',
    statusBadge: 'Rising',
    statusType: 'rising',
    icon: 'GlobeLock',
    description:
      'Malicious reverse-proxy phishing kits (evilginx) mimic Instagram & Google login pages to hijack session tokens, bypassing 2FA without triggering password alerts.',
    mitigation:
      'Immediately force global logout across all active sessions and unlink all authorized third-party OAuth apps.',
  },
  {
    id: 't2',
    title: 'Code-sharing takeover scams',
    subtext: 'Reported 5h ago',
    statusBadge: 'Rising',
    statusType: 'rising',
    icon: 'MessageSquareWarning',
    description:
      'Attackers pose as mutual friends on WhatsApp or IG requesting help recovering an account by asking you to send back a screenshot of an SMS link or 6-digit code.',
    mitigation:
      'Never screenshot or forward security codes. Request an administrative session revocation immediately.',
  },
  {
    id: 't3',
    title: 'Fake security alert emails',
    subtext: 'Reported yesterday',
    statusBadge: 'Steady',
    statusType: 'steady',
    icon: 'MailWarning',
    description:
      'Spoofed notifications warning "Your account has been restricted" or "Copyright notice violation" that direct victims to credential-harvesting landing pages.',
    mitigation:
      'Inspect sender headers and navigate to platform security portals directly via official mobile app settings.',
  },
  {
    id: 't4',
    title: 'SIM-swap attempts from local carriers',
    subtext: 'Reported 2 days ago',
    statusBadge: 'Easing',
    statusType: 'easing',
    icon: 'Smartphone',
    description:
      'Social engineering targeting cellular customer service representatives to reassign phone numbers to attacker eSIMs to intercept SMS 2FA.',
    mitigation:
      'Set an exclusive carrier PIN and switch from SMS authentication to hardware security keys or authenticator apps.',
  },
];

export const HomeDashboardView: React.FC<HomeDashboardViewProps> = ({ onPanicTap }) => {
  const [selectedThreat, setSelectedThreat] = useState<ThreatItem | null>(null);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'GlobeLock':
        return <GlobeLock className="w-5 h-5 text-rose-400" />;
      case 'MessageSquareWarning':
        return <MessageSquareWarning className="w-5 h-5 text-rose-400" />;
      case 'MailWarning':
        return <MailWarning className="w-5 h-5 text-zinc-400" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-emerald-400" />;
      default:
        return <ShieldAlert className="w-5 h-5 text-rose-400" />;
    }
  };

  return (
    <div className="flex flex-col min-h-full pb-8">
      {/* Title bar at the top */}
      <header className="sticky top-0 z-20 px-5 py-3.5 bg-[#121212]/95 backdrop-blur-md border-b border-zinc-800/80 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-rose-600/20 border border-rose-500/40 flex items-center justify-center text-rose-500 shadow-sm shadow-rose-950/40">
            <ShieldAlert className="w-4 h-4" />
          </div>
          <div>
            <h1 className="text-base font-bold text-white tracking-tight leading-none">
              BreachMedics AI
            </h1>
            <p className="text-[10px] text-zinc-400 font-medium tracking-wide uppercase mt-0.5">
              Emergency Response Core
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Active Shield</span>
        </div>
      </header>

      {/* Main Panic Section */}
      <section className="px-5 pt-7 pb-6 flex flex-col items-center text-center relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />

        {/* Pulse Radar Container */}
        <div className="relative flex items-center justify-center my-4 group cursor-pointer">
          {/* Animated concentric radar rings */}
          <div className="absolute inset-0 rounded-full bg-rose-600/20 animate-radar-ring-1 pointer-events-none" />
          <div className="absolute inset-0 rounded-full bg-rose-600/15 animate-radar-ring-2 pointer-events-none" />
          
          {/* Outer radar grid line */}
          <div className="absolute -inset-4 rounded-full border border-rose-500/20 pointer-events-none" />
          <div className="absolute -inset-8 rounded-full border border-rose-500/10 pointer-events-none" />

          {/* The Massive Prominent Centered Radar Button */}
          <button
            onClick={onPanicTap}
            className="relative w-56 h-56 sm:w-60 sm:h-60 rounded-full bg-gradient-to-b from-[#b91c1c] via-[#881337] to-[#4c0519] border-4 border-rose-500/80 shadow-[0_0_50px_rgba(225,29,72,0.45)] hover:shadow-[0_0_65px_rgba(225,29,72,0.7)] active:scale-95 transition-all duration-200 flex flex-col items-center justify-center p-6 text-center z-10 select-none animate-radar-pulse"
            aria-label="Tap in panic: My account is hacked"
          >
            {/* Rotating radar sweep ray */}
            <div className="absolute inset-1 rounded-full overflow-hidden pointer-events-none opacity-40">
              <div className="w-full h-full bg-[conic-gradient(from_0deg_at_50%_50%,rgba(255,255,255,0.4)_0deg,transparent_60deg)] animate-radar-sweep" />
            </div>

            {/* Inner radar crosshair grid lines */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
              <div className="w-full h-[1px] bg-rose-300" />
              <div className="h-full w-[1px] bg-rose-300 absolute" />
            </div>

            {/* Button Content with EXACT text */}
            <div className="relative z-10 flex flex-col items-center justify-center gap-2">
              <span className="text-3xl filter drop-shadow">⚠️</span>
              <span className="text-lg sm:text-xl font-extrabold text-white tracking-tight leading-tight uppercase text-balance drop-shadow-md">
                TAP IN PANIC: MY ACCOUNT IS HACKED
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-rose-200/90 tracking-wider uppercase mt-1 bg-black/30 px-2.5 py-0.5 rounded-full border border-rose-400/30">
                <Radio className="w-3 h-3 text-rose-300 animate-pulse" />
                <span>60s Isolation</span>
              </span>
            </div>
          </button>
        </div>

        {/* Sub-header label below it with EXACT text */}
        <p className="mt-4 text-xs sm:text-sm text-zinc-300 font-medium max-w-xs leading-relaxed text-balance">
          Instant 60-second isolation protocols for Instagram, WhatsApp, and Google
        </p>
      </section>

      {/* Dynamic section: Recent threat trends near you */}
      <section className="px-5 mt-2 flex-1">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-rose-500" />
            <h2 className="text-sm font-bold text-white tracking-tight">
              Recent threat trends near you
            </h2>
          </div>
          <span className="text-[11px] font-mono text-zinc-400">Live Intel</span>
        </div>

        {/* 4 Distinct List Cards */}
        <div className="space-y-2.5">
          {threatTrends.map((threat) => {
            const isRising = threat.statusType === 'rising';
            const isEasing = threat.statusType === 'easing';
            const isSteady = threat.statusType === 'steady';

            return (
              <div
                key={threat.id}
                onClick={() => setSelectedThreat(threat)}
                className="group relative p-3.5 rounded-2xl bg-[#1a1b20] hover:bg-[#20222a] border border-zinc-800 hover:border-zinc-700 active:scale-[0.99] transition-all cursor-pointer flex items-center justify-between gap-3 shadow-md shadow-black/30"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedThreat(threat);
                  }
                }}
              >
                {/* Left side: Icon + Title & Subtext */}
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-[#252732] border border-zinc-700/80 flex items-center justify-center shrink-0 group-hover:border-zinc-600 transition-colors">
                    {renderIcon(threat.icon)}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-semibold text-white truncate leading-tight group-hover:text-rose-100 transition-colors">
                      {threat.title}
                    </p>
                    <p className="text-[11px] text-zinc-400 mt-0.5 leading-none">
                      {threat.subtext}
                    </p>
                  </div>
                </div>

                {/* Right side: Status Badge with exact required colored text */}
                <div className="flex items-center gap-2 shrink-0">
                  <span
                    className={`text-xs font-bold tracking-wide ${
                      isRising
                        ? 'text-rose-500'
                        : isEasing
                        ? 'text-emerald-400'
                        : 'text-zinc-400'
                    }`}
                  >
                    {threat.statusBadge}
                  </span>
                  <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Helper Banner */}
        <div className="mt-4 p-3 rounded-2xl bg-[#16171d] border border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Radar monitoring active across 3 platforms</span>
          </div>
          <button
            onClick={onPanicTap}
            className="text-rose-400 hover:text-rose-300 font-semibold underline underline-offset-2"
          >
            Run audit
          </button>
        </div>
      </section>

      {/* Threat Detail Modal */}
      <ThreatDetailModal
        threat={selectedThreat}
        onClose={() => setSelectedThreat(null)}
        onPanicTap={onPanicTap}
      />
    </div>
  );
};
