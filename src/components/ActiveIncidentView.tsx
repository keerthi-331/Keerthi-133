import React, { useState } from 'react';
import {
  ShieldAlert,
  CheckCircle2,
  Lock,
  ArrowRight,
  ExternalLink,
  ChevronLeft,
  Calendar,
  AtSign,
  Radio,
  Check
} from 'lucide-react';
import { IncidentFormData } from '../types';
import { EvictionModal } from './EvictionModal';

interface ActiveIncidentViewProps {
  formData: IncidentFormData;
  setFormData: React.Dispatch<React.SetStateAction<IncidentFormData>>;
  onExportPacket: () => void;
  onBackToHome: () => void;
}

export const ActiveIncidentView: React.FC<ActiveIncidentViewProps> = ({
  formData,
  setFormData,
  onExportPacket,
  onBackToHome,
}) => {
  const [showEvictionModal, setShowEvictionModal] = useState(false);
  const [isEvicted, setIsEvicted] = useState(false);

  const dateOptions = [
    'Today (Within the last 2 hours)',
    'Today (Earlier today)',
    'Yesterday',
    '2 to 3 days ago',
    'Over a week ago',
    'Uncertain / Ongoing breach',
  ];

  return (
    <div className="flex flex-col min-h-full pb-8">
      {/* Top App Bar */}
      <header className="sticky top-0 z-20 px-4 py-3 bg-[#121212]/95 backdrop-blur-md border-b border-zinc-800/80 flex items-center justify-between">
        <button
          onClick={onBackToHome}
          className="flex items-center gap-1 text-xs font-semibold text-zinc-400 hover:text-white px-2 py-1.5 rounded-lg hover:bg-zinc-800 transition-colors"
          aria-label="Back to Safety Center"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-400 text-[11px] font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
          <span>Active Lockdown</span>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="px-5 pt-4 flex-1">
        {/* Title Header with EXACT text */}
        <div className="mb-6">
          <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            Active Incident Containment
          </h1>
          {/* Subtext with EXACT text */}
          <p className="text-xs sm:text-sm text-zinc-400 font-medium mt-1">
            Step 1 of 3 · Session hijack response
          </p>
        </div>

        {/* Timeline Stepper Layout displaying 3 chronological stages */}
        <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-3 before:bottom-6 before:w-0.5 before:bg-zinc-800">
          
          {/* ---------------- CARD 1 (Active Stage 1) ---------------- */}
          <div className="relative">
            {/* Timeline bullet for Stage 1 */}
            <div className="absolute -left-6 top-3.5 -translate-x-1/2 w-5 h-5 rounded-full bg-rose-600 border-2 border-[#121212] flex items-center justify-center text-[10px] font-bold text-white shadow-[0_0_10px_rgba(225,29,72,0.8)]">
              1
            </div>

            {/* Card 1 with Crimson outline border */}
            <div className="rounded-2xl bg-[#191a22] border-2 border-rose-600 p-4 sm:p-5 shadow-xl shadow-rose-950/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-md border border-rose-500/20">
                  Critical Priority
                </span>
                <span className="text-xs text-rose-400 font-mono flex items-center gap-1">
                  <Radio className="w-3 h-3 animate-pulse" />
                  Active Stage
                </span>
              </div>

              {/* Title with EXACT text */}
              <h2 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
                Sever Session Cookies
              </h2>

              {/* Text explanation with EXACT text */}
              <p className="text-xs sm:text-sm text-zinc-300 mt-2 leading-relaxed">
                Log the hacker out of every device. Stolen sessions can survive a password change.
              </p>

              {/* Prominent red action button with EXACT label */}
              <div className="mt-4">
                <button
                  onClick={() => setShowEvictionModal(true)}
                  className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold tracking-wide uppercase shadow-lg transition-all flex items-center justify-center gap-2 active:scale-[0.98] ${
                    isEvicted
                      ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-950/40'
                      : 'bg-rose-600 hover:bg-rose-500 text-white shadow-rose-950/50 hover:shadow-rose-600/30'
                  }`}
                >
                  {isEvicted ? (
                    <>
                      <Check className="w-4 h-4 stroke-[3]" />
                      <span>Eviction Executed · Relaunch</span>
                    </>
                  ) : (
                    <>
                      <ExternalLink className="w-4 h-4" />
                      <span>Launch Global Device Eviction Settings</span>
                    </>
                  )}
                </button>
              </div>

              {isEvicted && (
                <p className="text-[11px] text-emerald-400 font-medium mt-2 text-center flex items-center justify-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>All active sessions invalidated across mobile and web!</span>
                </p>
              )}
            </div>
          </div>

          {/* ---------------- CARD 2 (Completed Stage 2) ---------------- */}
          <div className="relative">
            {/* Timeline bullet for Stage 2 (Completed green checkmark) */}
            <div className="absolute -left-6 top-3.5 -translate-x-1/2 w-5 h-5 rounded-full bg-emerald-500 border-2 border-[#121212] flex items-center justify-center text-white shadow-md shadow-emerald-950/50">
              <Check className="w-3 h-3 stroke-[3]" />
            </div>

            {/* Card 2 container */}
            <div className="rounded-2xl bg-[#16171d] border border-zinc-800 p-4 sm:p-5">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                {/* Title with EXACT text */}
                <h2 className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug">
                  Revoke Connected Third-Party Access Apps
                </h2>
              </div>

              {/* Walkthrough instructions with EXACT text */}
              <div className="bg-[#101115] border border-zinc-800/80 rounded-xl p-3 mt-2.5">
                <p className="text-xs sm:text-sm text-zinc-300 font-mono leading-relaxed">
                  Settings → Apps and websites → remove anything unfamiliar.
                </p>
              </div>

              <div className="mt-3 flex items-center justify-between text-[11px] text-zinc-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Stage Verified
                </span>
                <span>OAuth scopes isolated</span>
              </div>
            </div>
          </div>

          {/* ---------------- CARD 3 (Pending Stage 3) ---------------- */}
          <div className="relative">
            {/* Numbered indicator '3' */}
            <div className="absolute -left-6 top-3.5 -translate-x-1/2 w-5 h-5 rounded-full bg-zinc-700 border-2 border-[#121212] flex items-center justify-center text-[10px] font-bold text-zinc-300">
              3
            </div>

            {/* Card 3 container */}
            <div className="rounded-2xl bg-[#171821] border border-zinc-700/80 p-4 sm:p-5 shadow-lg shadow-black/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded-md">
                  Step 3 Pending
                </span>
                <span className="text-xs font-mono text-zinc-400">Recovery Prep</span>
              </div>

              {/* Title with EXACT text */}
              <h2 className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug">
                Generate Security Escalation Appeal Matrix
              </h2>

              <p className="text-xs text-zinc-400 mt-1 leading-normal">
                Prepare verified incident metadata to include inside your formal platform appeal packet.
              </p>

              {/* Two functional user input form boxes */}
              <div className="mt-4 space-y-3.5">
                {/* Input 1: Your Compromised Username */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-200 mb-1.5">
                    Your Compromised Username
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-500">
                      <AtSign className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      value={formData.username}
                      onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                      placeholder="@yourhandle"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#0f1013] border border-zinc-700 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 text-white placeholder-zinc-500 text-xs sm:text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Input 2: Date of Compromise (dropdown input) */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-200 mb-1.5">
                    Date of Compromise
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-500">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <select
                      value={formData.dateOfCompromise}
                      onChange={(e) => setFormData({ ...formData, dateOfCompromise: e.target.value })}
                      className="w-full pl-9 pr-8 py-2.5 rounded-xl bg-[#0f1013] border border-zinc-700 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 text-white text-xs sm:text-sm outline-none transition-colors appearance-none cursor-pointer"
                    >
                      {dateOptions.map((opt, i) => (
                        <option key={i} value={opt} className="bg-[#181920] text-zinc-100">
                          {opt}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-zinc-400 text-xs">
                      ▼
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Execution trigger button below with EXACT label */}
        <div className="mt-8 pt-2">
          <button
            onClick={onExportPacket}
            className="w-full py-3.5 px-5 bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 active:scale-[0.98] text-white rounded-xl text-xs sm:text-sm font-bold tracking-wide uppercase shadow-lg shadow-rose-950/60 hover:shadow-rose-600/30 transition-all flex items-center justify-center gap-2 group"
          >
            <span>Export Formal Recovery Packet</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Eviction Modal Simulator */}
      <EvictionModal
        isOpen={showEvictionModal}
        onClose={() => setShowEvictionModal(false)}
        onEvictionComplete={() => setIsEvicted(true)}
      />
    </div>
  );
};
