import React, { useState } from 'react';
import {
  Copy,
  Check,
  ChevronLeft,
  FileText,
  ShieldCheck,
  Share2,
  Download,
  Phone,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { PlatformTab, IncidentFormData } from '../types';

interface RecoveryPacketViewProps {
  formData: IncidentFormData;
  onReturnToSafetyCenter: () => void;
}

export const RecoveryPacketView: React.FC<RecoveryPacketViewProps> = ({
  formData,
  onReturnToSafetyCenter,
}) => {
  // Horizontal navigation selector bar featuring three pill-tabs
  const [activeTab, setActiveTab] = useState<PlatformTab>('B: WhatsApp');
  const [copied, setCopied] = useState<boolean>(false);
  const [customPhone, setCustomPhone] = useState<string>('');
  const [substituteDetails, setSubstituteDetails] = useState<boolean>(false);

  const tabs: PlatformTab[] = ['Instagram (Meta)', 'B: WhatsApp', 'C: LinkedIn'];

  // Phone number placeholder or value
  const phoneNumber = customPhone.trim() || '[PHONE NUMBER]';
  const phoneNumberWithCode = customPhone.trim() || '[PHONE NUMBER, with country code]';
  const username = formData.username.trim() || '[INSERT USERNAME]';
  const breachDate = formData.dateOfCompromise.trim() || '[DATE OF BREACH]';

  // Packet contents
  const getSubjectText = () => {
    switch (activeTab) {
      case 'B: WhatsApp':
        return substituteDetails && customPhone.trim()
          ? `URGENT: Unauthorized Session Access, Request for Immediate Account Block: ${customPhone}`
          : 'URGENT: Unauthorized Session Access, Request for Immediate Account Block: [PHONE NUMBER]';
      case 'Instagram (Meta)':
        return substituteDetails && formData.username.trim()
          ? `URGENT: Account Compromise & Session Hijacking Escalation: ${formData.username}`
          : 'URGENT: Account Compromise & Session Hijacking Escalation: [INSERT USERNAME]';
      case 'C: LinkedIn':
        return substituteDetails && formData.username.trim()
          ? `SECURITY ESCALATION: Unauthorized Session Takeover Incident: ${formData.username}`
          : 'SECURITY ESCALATION: Unauthorized Session Takeover Incident: [INSERT USERNAME]';
    }
  };

  const getBodyText = () => {
    switch (activeTab) {
      case 'B: WhatsApp': {
        const phoneParam = substituteDetails ? phoneNumberWithCode : '[PHONE NUMBER, with country code]';
        const userParam = substituteDetails ? username : '[INSERT USERNAME]';
        const dateParam = substituteDetails ? breachDate : '[DATE OF BREACH]';

        return `To the WhatsApp Support and Security Team,

I am the registered owner of the WhatsApp account linked to the phone number ${phoneParam} (profile name: ${userParam}). I am reporting a security incident and requesting urgent administrative action.

INCIDENT SUMMARY
On or about ${dateParam}, my account was accessed by an unauthorized party through a Session Hijacking / Pass-the-Cookie attack...`;
      }
      case 'Instagram (Meta)': {
        const userParam = substituteDetails ? username : '[INSERT USERNAME]';
        const dateParam = substituteDetails ? breachDate : '[DATE OF BREACH]';

        return `To the Meta Security and Account Recovery Operations Team,

I am the registered account owner of the Instagram profile @${userParam.replace(/^@/, '')}. I am formally reporting an active session hijacking and credential takeover on ${dateParam}.

INCIDENT SUMMARY
The perpetrator circumvented standard authentication mechanisms using extracted session credentials and modified the associated recovery security channels. I request immediate revocation of all OAuth device tokens and expedited administrative identity verification.`;
      }
      case 'C: LinkedIn': {
        const userParam = substituteDetails ? username : '[INSERT USERNAME]';
        const dateParam = substituteDetails ? breachDate : '[DATE OF BREACH]';

        return `To the LinkedIn Trust and Safety Incident Response Team,

I am writing to file an urgent executive account security incident regarding profile ID / username ${userParam}. On or about ${dateParam}, an unauthorized actor obtained persistent session access.

INCIDENT SUMMARY
Malicious activity originating from unfamiliar IP addresses was detected. I request an immediate emergency account freeze, session termination across all enterprise sessions, and authorization to submit government ID verification.`;
      }
    }
  };

  const fullPacketText = `Subject: ${getSubjectText()}\n\n${getBodyText()}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullPacketText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="flex flex-col min-h-full pb-24">
      {/* Top App Header */}
      <header className="sticky top-0 z-20 px-4 py-3 bg-[#121212]/95 backdrop-blur-md border-b border-zinc-800/80 flex items-center justify-between">
        <button
          onClick={onReturnToSafetyCenter}
          className="flex items-center gap-1 text-xs font-semibold text-zinc-400 hover:text-white px-2 py-1.5 rounded-lg hover:bg-zinc-800 transition-colors"
          aria-label="Back to Safety Center"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Safety Center</span>
        </button>

        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[11px] font-semibold">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Packet Formatted</span>
        </div>
      </header>

      {/* Main Container */}
      <div className="px-5 pt-4 flex-1">
        {/* Title */}
        <div className="mb-4">
          <h1 className="text-xl font-bold text-white tracking-tight">
            Exported Recovery Packet
          </h1>
          <p className="text-xs text-zinc-400 mt-0.5">
            Formal legal and support dispatch for security investigations
          </p>
        </div>

        {/* Horizontal navigation selector bar featuring three pill-tabs */}
        <div className="mb-5 p-1 bg-[#181920] border border-zinc-800 rounded-xl flex items-center gap-1 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 min-w-[100px] py-2 px-3 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 select-none ${
                  isActive
                    ? 'bg-rose-600 text-white shadow-md shadow-rose-950/40'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Optional quick customizer banner for input variables */}
        <div className="mb-4 p-3 rounded-xl bg-[#16171d] border border-zinc-800 space-y-2 text-xs">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-zinc-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-rose-400" />
              Dynamic Personalization
            </span>
            <button
              onClick={() => setSubstituteDetails(!substituteDetails)}
              className={`text-[11px] font-bold px-2 py-0.5 rounded transition-colors ${
                substituteDetails
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                  : 'bg-zinc-800 text-zinc-400 border border-zinc-700'
              }`}
            >
              {substituteDetails ? 'Filled with Form Values' : 'Verbatim Placeholders'}
            </button>
          </div>

          {activeTab === 'B: WhatsApp' && (
            <div className="flex items-center gap-2 pt-1">
              <Phone className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
              <input
                type="text"
                placeholder="Optional: Enter phone e.g. +1 (555) 019-2834"
                value={customPhone}
                onChange={(e) => setCustomPhone(e.target.value)}
                className="w-full bg-[#0f1013] border border-zinc-800 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-zinc-500 outline-none focus:border-rose-500/80"
              />
            </div>
          )}
        </div>

        {/* Professional, pre-filled text container pane featuring a copy button asset */}
        <div className="relative rounded-2xl bg-[#171820] border border-zinc-800 shadow-xl shadow-black/40 overflow-hidden">
          {/* Header of container pane */}
          <div className="px-4 py-3 bg-[#13141a] border-b border-zinc-800/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-rose-400" />
              <span className="text-xs font-bold text-zinc-200">
                Official Incident Escalation Letter
              </span>
            </div>

            {/* Copy button asset */}
            <button
              onClick={handleCopy}
              className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all ${
                copied
                  ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-300'
                  : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 active:scale-95'
              }`}
              aria-label="Copy recovery packet text"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Packet</span>
                </>
              )}
            </button>
          </div>

          {/* Pre-filled Text Container Pane displaying exact requested text */}
          <div className="p-4 sm:p-5 text-xs sm:text-sm font-mono leading-relaxed space-y-4 text-zinc-300 select-text">
            {/* Subject Line */}
            <div className="p-2.5 rounded-lg bg-[#0e0f13] border border-zinc-800/80">
              <p className="text-[11px] font-sans font-bold text-zinc-500 uppercase tracking-wider mb-1">
                Subject line
              </p>
              <p className="text-white font-semibold break-words">
                Subject: {getSubjectText()}
              </p>
            </div>

            {/* Body Text Block */}
            <div className="p-3 rounded-xl bg-[#0e0f13] border border-zinc-800/80">
              <p className="text-[11px] font-sans font-bold text-zinc-500 uppercase tracking-wider mb-2">
                Body text block
              </p>
              <pre className="whitespace-pre-wrap font-mono text-zinc-200 leading-relaxed text-xs sm:text-[13px] break-words">
                {getBodyText()}
              </pre>
            </div>
          </div>

          {/* Quick Support Guidance */}
          <div className="px-4 py-3 bg-[#13141a]/80 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400">
            <span>Official dispatch format compliant with Meta Security</span>
            <span className="text-emerald-400 font-medium">Ready to email</span>
          </div>
        </div>

        {/* Tips section */}
        <div className="mt-4 p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 text-xs text-zinc-400 space-y-1">
          <p className="font-semibold text-zinc-300">Next Action Steps:</p>
          <ul className="list-disc list-inside space-y-1 text-zinc-400">
            <li>Send from the email originally tied to your registered account.</li>
            <li>Attach any screenshot evidence of unexpected device logouts.</li>
            <li>Maintain session quarantine on all mobile and desktop devices.</li>
          </ul>
        </div>
      </div>

      {/* Sticky button at the base reading "← Return to Safety Center" */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#121212] via-[#121212]/95 to-transparent z-30 flex justify-center pointer-events-none">
        <div className="w-full max-w-md pointer-events-auto">
          <button
            onClick={onReturnToSafetyCenter}
            className="w-full h-12 rounded-xl bg-zinc-800 hover:bg-zinc-700 active:scale-[0.98] border border-zinc-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-2xl shadow-black transition-all"
          >
            ← Return to Safety Center
          </button>
        </div>
      </div>
    </div>
  );
};
