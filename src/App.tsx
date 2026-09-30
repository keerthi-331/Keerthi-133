/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Shield,
  AlertTriangle,
  AlertCircle,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Clipboard,
  ShieldAlert,
  Smartphone,
  Clock,
  TrendingUp,
  Mail,
  Copy,
  Check,
  Calendar,
  AtSign,
  Radio,
  ExternalLink,
  ChevronRight,
  X,
  Loader2
} from 'lucide-react';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'home' | 'containment' | 'recovery'>('home');
  const [username, setUsername] = useState<string>('');
  const [dateOfCompromise, setDateOfCompromise] = useState<string>('Today (Within the last 2 hours)');
  const [selectedPlatform, setSelectedPlatform] = useState<'Instagram' | 'WhatsApp' | 'LinkedIn'>('WhatsApp');
  const [copied, setCopied] = useState<boolean>(false);
  const [isEvicting, setIsEvicting] = useState<boolean>(false);
  const [evictionDone, setEvictionDone] = useState<boolean>(false);
  const [evictionStep, setEvictionStep] = useState<number>(0);
  const [selectedThreatModal, setSelectedThreatModal] = useState<any | null>(null);

  // Live Threat Data Matrix
  const threatTrends = [
    {
      id: 1,
      title: 'Fake login pages stealing active sessions',
      time: 'Reported 2h ago',
      status: 'Rising',
      color: 'text-red-500 bg-red-500/10',
      description: 'Reverse-proxy phishing kits (evilginx) mirror login flows to capture active cookies without triggering 2FA alerts.',
      remedy: 'Terminate all active browser sessions immediately and reset OAuth application grants.',
    },
    {
      id: 2,
      title: 'Code-sharing takeover phishing scams',
      time: 'Reported 5h ago',
      status: 'Rising',
      color: 'text-red-500 bg-red-500/10',
      description: 'Attackers pose as mutual contacts requesting help recovering accounts by tricking victims into forwarding SMS codes.',
      remedy: 'Never forward or screenshot security pins. Report unauthorized session access to support.',
    },
    {
      id: 3,
      title: 'Fake security alert verification emails',
      time: 'Reported yesterday',
      status: 'Steady',
      color: 'text-gray-400 bg-gray-500/10',
      description: 'Spoofed "Account Suspended in 24 Hours" emails linking to counterfeit credential harvesting portals.',
      remedy: 'Only review security notices directly within the official mobile app settings menu.',
    },
    {
      id: 4,
      title: 'SIM-swap identity attempts from carriers',
      time: 'Reported 2 days ago',
      status: 'Easing',
      color: 'text-emerald-500 bg-emerald-500/10',
      description: 'Social engineering targeting telecom support agents to migrate phone numbers to unauthorized attacker eSIMs.',
      remedy: 'Establish a carrier verbal security password and transition from SMS 2FA to authenticator apps.',
    },
  ];

  // Dynamic Support Email Mapping Strategy
  const supportEmails: Record<'Instagram' | 'WhatsApp' | 'LinkedIn', string> = {
    Instagram: 'security@meta.com',
    WhatsApp: 'support@whatsapp.com',
    LinkedIn: 'security-escalations@linkedin.com',
  };

  const getEmailSubject = () => {
    const handleIdentifier = username.trim() || '@User';
    if (selectedPlatform === 'WhatsApp') {
      return `URGENT: Unauthorized Session Access, Request for Immediate Account Block: ${handleIdentifier}`;
    }
    return `URGENT: Unauthorized Session Access - Account Containment Request: ${handleIdentifier}`;
  };

  const getEmailBodyText = () => {
    const userDisplay = username.trim() || '[INSERT USERNAME]';
    const dateDisplay = dateOfCompromise.trim() || '[DATE OF BREACH]';

    if (selectedPlatform === 'WhatsApp') {
      return `To the WhatsApp Support and Security Team,

I am the registered owner of the WhatsApp account linked to the phone number [PHONE NUMBER, with country code] (profile name: ${userDisplay}). I am reporting a security incident and requesting urgent administrative action.

INCIDENT SUMMARY
On or about ${dateDisplay}, my account was accessed by an unauthorized party through a Session Hijacking / Pass-the-Cookie attack...`;
    }

    if (selectedPlatform === 'Instagram') {
      return `To the Instagram / Meta Security and Incident Recovery Team,

I am the registered owner of the profile account linked to handle/identifier: ${userDisplay}.

I am reporting a severe security breach incident on or about ${dateDisplay} and requesting urgent administrative containment action.

INCIDENT SUMMARY:
My active account session was hijacked by a malicious third party using a specialized Session Hijacking / Pass-the-Cookie exploit vector framework, fully bypassing active Two-Factor Authentication parameters. Please enforce an immediate administrative lock on this account to protect user data privacy.`;
    }

    return `To the LinkedIn Security and Incident Recovery Team,

I am the registered owner of the profile account linked to handle/identifier: ${userDisplay}.

I am reporting a severe security breach incident on or about ${dateDisplay} and requesting urgent administrative containment action.

INCIDENT SUMMARY:
My active cloud workspace session was hijacked by a malicious third party using a specialized Session Hijacking / Pass-the-Cookie exploit vector framework, fully bypassing active Two-Factor Authentication parameters. Please enforce an immediate administrative lock on this account to protect user data privacy.`;
  };

  const emailBodyText = getEmailBodyText();
  const emailSubject = getEmailSubject();

  const handleSendEmail = () => {
    const subject = encodeURIComponent(emailSubject);
    const body = encodeURIComponent(emailBodyText);
    const targetEmail = supportEmails[selectedPlatform];

    // Direct native device trigger link open
    window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`Subject: ${emailSubject}\n\n${emailBodyText}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Simulated eviction routine
  const launchEvictionProtocol = () => {
    setIsEvicting(true);
    setEvictionStep(0);
    setEvictionDone(false);

    const interval = setInterval(() => {
      setEvictionStep((prev) => {
        if (prev < 4) {
          return prev + 1;
        } else {
          setEvictionDone(true);
          clearInterval(interval);
          return prev;
        }
      });
    }, 600);
  };

  const evictionLogs = [
    'Broadcasting global logout event across active cluster nodes...',
    'Invalidating OAuth 2.0 refresh tokens & session cookies...',
    'Revoking web browser sessions and companion device links...',
    'Neutralizing adversary session credentials...',
    'Complete: All devices forcibly evicted from account.',
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-2 sm:p-4 antialiased text-white font-sans selection:bg-red-500/30 selection:text-red-200">
      {/* Mobile Frame Shell Simulation */}
      <div className="w-full max-w-[400px] h-[820px] bg-[#121212] rounded-[48px] border-8 border-[#262626] relative flex flex-col overflow-hidden shadow-2xl shadow-red-950/20">

        {/* Phone Notch/Dynamic Island Accent */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-5 bg-[#262626] rounded-full z-50 flex items-center justify-center pointer-events-none">
          <div className="w-2 h-2 rounded-full bg-[#121212] ml-auto mr-4" />
        </div>

        {/* --- GLOBAL APPLICATION HEADER & CUSTOM EMBEDDED LOGO --- */}
        <header className="pt-9 pb-3.5 px-6 border-b border-white/5 flex items-center justify-between bg-[#161616]/80 backdrop-blur-md sticky top-0 z-40">
          <div className="flex items-center gap-3">
            {/* Custom SVG Security Shield & Medical Cross Logo */}
            <div className="relative w-9 h-9 flex items-center justify-center bg-red-950/30 rounded-xl border border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.1)] shrink-0">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-6 h-6 stroke-red-500 stroke-[2] drop-shadow-[0_0_4px_rgba(239,68,68,0.5)]"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M12 8v8M9 12h6" />
              </svg>
              <div className="absolute inset-0 rounded-xl animate-pulse bg-red-500/5 pointer-events-none" />
            </div>
            <div>
              <h1 className="font-bold tracking-tight text-lg text-white">
                BreachMedics{' '}
                <span className="text-red-500 font-extrabold text-xs tracking-widest uppercase ml-1 px-1 bg-red-500/10 rounded border border-red-500/20">
                  AI
                </span>
              </h1>
              <p className="text-[10px] text-gray-500 uppercase font-medium tracking-wider">
                Cyber Incident Response
              </p>
            </div>
          </div>

          {currentScreen !== 'home' && (
            <button
              onClick={() => setCurrentScreen('home')}
              className="text-xs font-semibold text-gray-400 hover:text-white flex items-center gap-1 bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
          )}
        </header>

        {/* --- SCREEN VIEW CONTROLLER ROUTER --- */}
        <main className="flex-1 overflow-y-auto px-6 py-4 space-y-4 no-scrollbar">

          {/* VIEW 1: FRONT WELCOME DASHBOARD */}
          {currentScreen === 'home' && (
            <div className="space-y-6 animate-in fade-in duration-200">

              {/* Radar Pulsing Action Button */}
              <div className="flex flex-col items-center justify-center py-6">
                <div className="relative flex items-center justify-center my-2">
                  <div className="absolute w-52 h-52 bg-red-600/10 rounded-full animate-ping pointer-events-none duration-1000" />
                  <div className="absolute w-44 h-44 bg-red-600/20 rounded-full animate-pulse pointer-events-none" />

                  <button
                    onClick={() => setCurrentScreen('containment')}
                    className="relative w-44 h-44 rounded-full bg-gradient-to-br from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 active:scale-95 transition-all flex flex-col items-center justify-center text-center p-4 border-4 border-red-500/30 shadow-[0_0_35px_rgba(239,68,68,0.4)] group z-10 cursor-pointer"
                  >
                    <AlertTriangle className="w-8 h-8 mb-2 animate-bounce text-white group-hover:scale-110 transition-transform" />
                    <span className="font-extrabold text-xs tracking-wide leading-tight text-white drop-shadow-md">
                      ⚠️ TAP IN PANIC:
                    </span>
                    <span className="font-bold text-[10px] uppercase opacity-90 mt-1 tracking-wider text-white">
                      Account Hacked
                    </span>
                  </button>
                </div>
                <p className="text-center text-xs text-gray-400 mt-5 max-w-[280px] leading-relaxed mx-auto">
                  Instant 60-second isolation protocols for Instagram, WhatsApp, and Google
                </p>
              </div>

              {/* Threat Feed Segment */}
              <div className="space-y-3 pt-1">
                <div className="flex items-center gap-2 px-1">
                  <Clock className="w-4 h-4 text-red-500" />
                  <h3 className="text-xs uppercase font-semibold text-gray-400 tracking-wider">
                    Recent threat trends near you
                  </h3>
                </div>

                <div className="space-y-2">
                  {threatTrends.map((threat) => (
                    <div
                      key={threat.id}
                      onClick={() => setSelectedThreatModal(threat)}
                      className="p-3 bg-[#181818] rounded-xl border border-white/5 flex items-start justify-between gap-3 hover:bg-[#202020] transition-colors cursor-pointer group"
                    >
                      <div className="space-y-0.5">
                        <p className="text-xs font-medium text-gray-200 group-hover:text-white transition-colors">
                          {threat.title}
                        </p>
                        <p className="text-[10px] text-gray-500">{threat.time}</p>
                      </div>
                      <span
                        className={`text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1 shrink-0 ${threat.color}`}
                      >
                        <TrendingUp className="w-2.5 h-2.5" />
                        {threat.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* VIEW 2: ACTIVE INCIDENT CONTAINMENT MODULE */}
          {currentScreen === 'containment' && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="space-y-1">
                <h2 className="text-sm font-bold text-red-400 flex items-center gap-1.5 uppercase tracking-wide">
                  <ShieldAlert className="w-4 h-4" /> Active Incident Containment
                </h2>
                <p className="text-[11px] text-gray-500">Step 1 of 3 · Session hijack response</p>
              </div>

              {/* Chronological Security Timeline */}
              <div className="space-y-4 relative before:absolute before:left-[19px] before:top-4 before:bottom-4 before:w-[1px] before:bg-white/10">

                {/* Active Card Step 1 */}
                <div className="relative pl-10">
                  <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-[#121212] border-2 border-red-500 flex items-center justify-center text-red-500 font-bold text-xs shadow-[0_0_10px_rgba(239,68,68,0.2)] z-10">
                    1
                  </div>
                  <div className="p-4 bg-[#181818] rounded-2xl border border-red-500/30 space-y-3">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                      Sever Active Session Cookies
                    </h4>
                    <p className="text-[11px] text-gray-400 leading-relaxed">
                      Log the hacker out of every device. Stolen session cookies bypass standard password updates.
                    </p>
                    <button
                      onClick={launchEvictionProtocol}
                      className="w-full py-2.5 px-3 bg-red-600 hover:bg-red-500 active:scale-[0.98] rounded-xl text-[11px] font-bold tracking-wide uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-red-950/40"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Launch Device Eviction Settings</span>
                    </button>
                    {evictionDone && (
                      <p className="text-[10px] text-emerald-400 font-medium flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-emerald-400" />
                        <span>All unauthorized sessions invalidated!</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Card Step 2: Revoke connected third party apps */}
                <div className="relative pl-10">
                  <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-[#121212] border-2 border-emerald-500 flex items-center justify-center text-emerald-400 font-bold text-xs z-10">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="p-4 bg-[#181818] rounded-2xl border border-white/5 space-y-2">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center justify-between">
                      <span>Revoke Connected Apps</span>
                      <span className="text-[9px] text-emerald-400 font-mono">Stage 2</span>
                    </h4>
                    <p className="text-[11px] text-gray-400 leading-relaxed">
                      Settings → Apps and websites → remove anything unfamiliar.
                    </p>
                  </div>
                </div>

                {/* Input Card Step 3 */}
                <div className="relative pl-10">
                  <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-[#121212] border-2 border-gray-600 flex items-center justify-center text-gray-300 font-bold text-xs z-10">
                    3
                  </div>
                  <div className="p-4 bg-[#181818] rounded-2xl border border-white/5 space-y-3">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                      Generate Security Escalation Matrix
                    </h4>
                    <p className="text-[11px] text-gray-400">
                      Configure your compromised account identifiers for formal appeal generation.
                    </p>

                    <div className="space-y-2.5">
                      <div>
                        <label className="block text-[10px] font-semibold text-gray-300 mb-1">
                          Compromised Handle / Username
                        </label>
                        <div className="relative">
                          <AtSign className="w-3.5 h-3.5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="@yourhandle"
                            className="w-full bg-[#121212] border border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-semibold text-gray-300 mb-1">
                          Date of Compromise
                        </label>
                        <div className="relative">
                          <Calendar className="w-3.5 h-3.5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                          <select
                            value={dateOfCompromise}
                            onChange={(e) => setDateOfCompromise(e.target.value)}
                            className="w-full bg-[#121212] border border-white/10 rounded-xl pl-9 pr-7 py-2 text-xs text-white focus:outline-none focus:border-red-500 transition-colors appearance-none cursor-pointer"
                          >
                            <option value="Today (Within the last 2 hours)">Today (Within the last 2 hours)</option>
                            <option value="Today (Earlier today)">Today (Earlier today)</option>
                            <option value="Yesterday">Yesterday</option>
                            <option value="2 to 3 days ago">2 to 3 days ago</option>
                            <option value="Over a week ago">Over a week ago</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Execution Trigger Button */}
              <div className="pt-2">
                <button
                  onClick={() => setCurrentScreen('recovery')}
                  className="w-full py-3 px-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 active:scale-[0.98] rounded-xl text-xs font-bold tracking-wide uppercase transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-950/50"
                >
                  <span>Export Formal Recovery Packet</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* VIEW 3: EXPORTED RECOVERY PACKET VIEW */}
          {currentScreen === 'recovery' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="space-y-1">
                <h2 className="text-sm font-bold text-white flex items-center gap-1.5 uppercase tracking-wide">
                  <Clipboard className="w-4 h-4 text-red-500" /> Exported Recovery Packet
                </h2>
                <p className="text-[11px] text-gray-500">Select target provider for dispatch</p>
              </div>

              {/* Horizontal Navigation Selector Tabs */}
              <div className="flex bg-[#181818] p-1 rounded-xl border border-white/5 gap-1">
                {(['Instagram', 'WhatsApp', 'LinkedIn'] as const).map((platform) => {
                  const isActive = selectedPlatform === platform;
                  return (
                    <button
                      key={platform}
                      onClick={() => setSelectedPlatform(platform)}
                      className={`flex-1 py-1.5 text-[11px] font-bold rounded-lg transition-all ${
                        isActive
                          ? 'bg-red-600 text-white shadow-md shadow-red-950/40'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {platform === 'WhatsApp' ? 'B: WhatsApp' : platform === 'Instagram' ? 'Instagram (Meta)' : 'C: LinkedIn'}
                    </button>
                  );
                })}
              </div>

              {/* Dispatch Action Header Card */}
              <div className="p-3 bg-[#181818] rounded-xl border border-white/5 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-red-400" />
                  <div>
                    <p className="font-semibold text-white">Target Escalation Queue</p>
                    <p className="text-[10px] text-gray-400 font-mono">{supportEmails[selectedPlatform]}</p>
                  </div>
                </div>
                <button
                  onClick={handleSendEmail}
                  className="px-3 py-1.5 bg-red-600/90 hover:bg-red-500 text-white text-[11px] font-bold rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3 h-3" />
                  <span>Send Mail</span>
                </button>
              </div>

              {/* Pre-filled Text Container Pane */}
              <div className="bg-[#161616] rounded-2xl border border-white/10 p-3.5 space-y-3 relative">
                <div className="flex items-center justify-between pb-2 border-b border-white/5">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    Formal Legal / Support Text
                  </span>
                  <button
                    onClick={handleCopy}
                    className={`flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-lg transition-all ${
                      copied
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'bg-white/5 hover:bg-white/10 text-gray-300'
                    }`}
                  >
                    {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>

                <div className="text-[11px] font-mono text-gray-300 leading-relaxed max-h-56 overflow-y-auto space-y-2 select-text bg-[#0e0e0e] p-2.5 rounded-xl border border-white/5">
                  <p className="text-white font-bold">Subject: {emailSubject}</p>
                  <div className="h-[1px] bg-white/5 my-1" />
                  <p className="whitespace-pre-wrap">{emailBodyText}</p>
                </div>
              </div>

              {/* Return to Safety Center Sticky Button */}
              <div className="pt-2">
                <button
                  onClick={() => setCurrentScreen('home')}
                  className="w-full py-2.5 px-4 bg-[#202020] hover:bg-[#282828] border border-white/10 rounded-xl text-xs font-semibold text-gray-300 hover:text-white transition-colors flex items-center justify-center gap-1.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>← Return to Safety Center</span>
                </button>
              </div>
            </div>
          )}
        </main>

        {/* --- GLOBAL BOTTOM PHONE BAR INDICATOR --- */}
        <div className="py-2 flex justify-center items-center bg-[#121212] shrink-0 border-t border-white/5">
          <div className="w-24 h-1 bg-white/20 rounded-full" />
        </div>
      </div>

      {/* --- EVICTION SIMULATION MODAL --- */}
      {isEvicting && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-xs rounded-2xl bg-[#181818] border border-red-500/30 p-5 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-red-500 font-bold text-xs uppercase tracking-wider">
                <ShieldAlert className="w-4 h-4 animate-pulse" />
                <span>Global Eviction</span>
              </div>
              <button
                onClick={() => setIsEvicting(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="w-full bg-black/40 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-red-500 h-full transition-all duration-300"
                style={{ width: `${Math.min(100, ((evictionStep + 1) / evictionLogs.length) * 100)}%` }}
              />
            </div>

            <div className="space-y-2 text-[11px] font-mono text-gray-300 bg-black/40 p-3 rounded-xl max-h-40 overflow-y-auto">
              {evictionLogs.map((log, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-2 ${
                    i <= evictionStep ? 'text-gray-200' : 'text-gray-600'
                  }`}
                >
                  {i < evictionStep ? (
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  ) : i === evictionStep && !evictionDone ? (
                    <Loader2 className="w-3.5 h-3.5 text-red-500 animate-spin shrink-0 mt-0.5" />
                  ) : i === evictionStep && evictionDone ? (
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <div className="w-3.5 h-3.5 rounded-full border border-gray-700 shrink-0 mt-0.5" />
                  )}
                  <span>{log}</span>
                </div>
              ))}
            </div>

            {evictionDone ? (
              <button
                onClick={() => setIsEvicting(false)}
                className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold uppercase transition-colors"
              >
                Done
              </button>
            ) : (
              <p className="text-center text-[10px] text-red-400 font-mono animate-pulse">
                Eviction in progress...
              </p>
            )}
          </div>
        </div>
      )}

      {/* --- THREAT DETAIL POPUP MODAL --- */}
      {selectedThreatModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-xs rounded-2xl bg-[#181818] border border-white/10 p-5 shadow-2xl space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${selectedThreatModal.color}`}>
                  {selectedThreatModal.status}
                </span>
                <h3 className="text-xs font-bold text-white mt-1.5 leading-snug">
                  {selectedThreatModal.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedThreatModal(null)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-[11px] text-gray-300 leading-relaxed">
              {selectedThreatModal.description}
            </p>

            <div className="p-2.5 rounded-xl bg-red-950/20 border border-red-500/20 text-[10px] text-red-300 space-y-1">
              <span className="font-bold uppercase tracking-wider block">Recommended Action:</span>
              <p>{selectedThreatModal.remedy}</p>
            </div>

            <button
              onClick={() => {
                setSelectedThreatModal(null);
                setCurrentScreen('containment');
              }}
              className="w-full py-2 bg-red-600 hover:bg-red-500 text-white rounded-xl text-xs font-bold uppercase transition-colors"
            >
              Trigger Lockdown
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
