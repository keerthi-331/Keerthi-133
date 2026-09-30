import React, { useState, useEffect } from 'react';
import { ShieldAlert, CheckCircle2, Loader2, X, Terminal, Radio, AlertTriangle } from 'lucide-react';

interface EvictionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEvictionComplete?: () => void;
}

export const EvictionModal: React.FC<EvictionModalProps> = ({ isOpen, onClose, onEvictionComplete }) => {
  const [step, setStep] = useState<number>(0);
  const [isDone, setIsDone] = useState<boolean>(false);

  const logs = [
    { title: 'Connecting to Federated Identity Provider hubs...', sub: 'Querying active session pools' },
    { title: 'Invalidating Meta / Instagram refresh tokens...', sub: '3 stale browser sessions detected (Munich, Frankfurt)' },
    { title: 'Severing WhatsApp Web & linked companion sessions...', sub: 'Revoked 2 QR-linked desktop instances' },
    { title: 'Broadcasting universal token blacklist...', sub: 'Cookie session signatures neutralized across CDN edge nodes' },
    { title: 'Account session lockdown enforced.', sub: 'All devices logged out. Stolen cookie replay attacks blocked.' },
  ];

  useEffect(() => {
    if (!isOpen) {
      setStep(0);
      setIsDone(false);
      return;
    }

    const timer = setInterval(() => {
      setStep((prev) => {
        if (prev < logs.length - 1) {
          return prev + 1;
        } else {
          setIsDone(true);
          clearInterval(timer);
          if (onEvictionComplete) {
            onEvictionComplete();
          }
          return prev;
        }
      });
    }, 700);

    return () => clearInterval(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-sm rounded-2xl bg-[#18191f] border border-rose-500/40 p-5 shadow-2xl shadow-rose-950/60 overflow-hidden">
        {/* Glowing aura */}
        <div className="absolute -top-16 -right-16 w-36 h-36 bg-rose-600/20 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-500">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-white leading-tight">Global Session Eviction</h3>
              <p className="text-xs text-rose-400 font-mono flex items-center gap-1.5 mt-0.5">
                <Radio className="w-3 h-3 animate-pulse" />
                Active Force Logout
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/80 transition-colors"
            aria-label="Close eviction status"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-zinc-800 rounded-full h-1.5 mb-4 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-rose-600 to-rose-400 transition-all duration-500 rounded-full"
            style={{ width: `${Math.min(100, ((step + 1) / logs.length) * 100)}%` }}
          />
        </div>

        {/* Terminal logs list */}
        <div className="space-y-3 bg-[#121316] rounded-xl p-3.5 border border-zinc-800/80 mb-5 max-h-56 overflow-y-auto">
          {logs.map((log, index) => {
            const isCompleted = index < step || (index === step && isDone);
            const isCurrent = index === step && !isDone;
            const isPending = index > step;

            return (
              <div
                key={index}
                className={`flex items-start gap-2.5 text-xs transition-opacity duration-300 ${
                  isPending ? 'opacity-30' : 'opacity-100'
                }`}
              >
                <div className="mt-0.5 shrink-0">
                  {isCompleted ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : isCurrent ? (
                    <Loader2 className="w-4 h-4 text-rose-500 animate-spin" />
                  ) : (
                    <div className="w-4 h-4 rounded-full border border-zinc-700 flex items-center justify-center text-[9px] text-zinc-500 font-mono">
                      {index + 1}
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`font-medium leading-tight ${isCurrent ? 'text-rose-200' : isCompleted ? 'text-zinc-200' : 'text-zinc-500'}`}>
                    {log.title}
                  </p>
                  <p className="text-[11px] text-zinc-400 mt-0.5 leading-snug font-mono">
                    {log.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {isDone ? (
          <div className="space-y-3">
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-2.5 flex items-center gap-2 text-emerald-300 text-xs font-medium">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
              <span>All unauthorized sessions invalidated successfully!</span>
            </div>
            <button
              onClick={onClose}
              className="w-full py-2.5 px-4 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl text-sm font-semibold transition-colors flex items-center justify-center"
            >
              Done · Return to Steps
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-2 py-2 text-xs text-rose-400 font-mono">
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
            <span>Evicting compromised hardware profiles...</span>
          </div>
        )}
      </div>
    </div>
  );
};
