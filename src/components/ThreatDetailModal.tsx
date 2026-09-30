import React from 'react';
import { X, ShieldAlert, ArrowUpRight, CheckCircle, ShieldCheck } from 'lucide-react';
import { ThreatItem } from '../types';

interface ThreatDetailModalProps {
  threat: ThreatItem | null;
  onClose: () => void;
  onPanicTap: () => void;
}

export const ThreatDetailModal: React.FC<ThreatDetailModalProps> = ({ threat, onClose, onPanicTap }) => {
  if (!threat) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-sm rounded-3xl bg-[#17181f] border border-zinc-700/80 p-5 shadow-2xl shadow-black/80 overflow-hidden animate-in slide-in-from-bottom-6 duration-300">
        {/* Subtle accent glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-start justify-between pb-3 border-b border-zinc-800">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-zinc-800/90 border border-zinc-700 flex items-center justify-center text-rose-400">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <span className={`text-[11px] font-semibold uppercase tracking-wider ${
                threat.statusType === 'rising'
                  ? 'text-rose-400'
                  : threat.statusType === 'easing'
                  ? 'text-emerald-400'
                  : 'text-zinc-400'
              }`}>
                Trend: {threat.statusBadge}
              </span>
              <p className="text-xs text-zinc-400">{threat.subtext}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-4 space-y-3">
          <h3 className="text-base font-bold text-white leading-snug">
            {threat.title}
          </h3>

          <div className="bg-[#101115] rounded-xl p-3 border border-zinc-800/80 space-y-2">
            <h4 className="text-xs font-semibold text-zinc-300 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              How this vector attacks:
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {threat.description ||
                "Attackers deploy adversary-in-the-middle reverse proxies to harvest live session cookies. Even if two-factor authentication (2FA) is turned on, valid session cookies allow instant takeover without passwords."}
            </p>
          </div>

          <div className="bg-emerald-950/20 border border-emerald-500/25 rounded-xl p-3 space-y-1.5">
            <h4 className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Immediate Countermeasure:
            </h4>
            <p className="text-xs text-zinc-300 leading-relaxed">
              {threat.mitigation ||
                "Immediately revoke active OAuth refresh tokens and perform a global session eviction across all linked devices."}
            </p>
          </div>
        </div>

        <div className="pt-2 flex flex-col gap-2">
          <button
            onClick={() => {
              onClose();
              onPanicTap();
            }}
            className="w-full py-3 px-4 bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 active:scale-[0.98] text-white rounded-xl text-xs font-bold tracking-wide uppercase shadow-lg shadow-rose-950/50 transition-all flex items-center justify-center gap-2"
          >
            <span>Trigger Emergency Lockdown</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="w-full py-2.5 px-4 bg-zinc-800/80 hover:bg-zinc-800 text-zinc-300 hover:text-white rounded-xl text-xs font-medium transition-colors"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
};
