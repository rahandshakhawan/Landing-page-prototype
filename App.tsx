import { useState } from 'react';
import { 
  Globe, Instagram, Facebook, Youtube, Phone, Check, Copy, Download, 
  ArrowRight, GraduationCap, MapPin, Sparkles, Code, Smartphone, Sliders, Eye 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import myLogo from './1000116992.png';

interface SchoolData {
  name: string;
  tagline: string;
  admissionsText: string;
  isAdmissionsOpen: boolean;
  websiteUrl: string;
  instagramUrl: string;
  facebookUrl: string;
  tiktokUrl: string;
  youtubeUrl: string;
  phone: string;
  whatsapp: string;
  address: string;
  primaryColor: string;
  secondaryColor: string;
}

export default function App() {
  const [data, setData] = useState<SchoolData>({
    name: "International Montessori School-Erbil",
    tagline: "Empowering independent hearts, inspiring creative minds.",
    admissionsText: "Open for Admissions 2026 - 2027",
    isAdmissionsOpen: true,
    websiteUrl: "https://imserbil.com",
    instagramUrl: "https://instagram.com/imserbil",
    facebookUrl: "https://facebook.com/imserbil",
    tiktokUrl: "https://tiktok.com/@imserbil",
    youtubeUrl: "https://youtube.com/@imserbil",
    phone: "+9647504123456",
    whatsapp: "9647504123456",
    address: "📍 Gulan Street, opposite Gulan Towers, Erbil, Kurdistan Region",
    primaryColor: "#292868",
    secondaryColor: "#65B6B6",
  });

  const [activeTab, setActiveTab] = useState<'preview' | 'html' | 'css'>('preview');
  const [copySuccess, setCopySuccess] = useState(false);
  const [editingField, setEditingField] = useState<string | null>(null)  // Generate Standalone HTML matching specifications
  const getHTMLCode = () => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.name} | Admissions & Links</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="light-blob blob-top-right"></div>
    <div class="light-blob blob-bottom-left"></div>

    <div class="container">
        <main class="linktree-card">
            ${data.isAdmissionsOpen ? `
            <div class="admissions-badge">
                <span class="status-indicator animate-pulse"></span>
                <span>${data.admissionsText}</span>
            </div>` : ''}

            <header class="profile-header">
                <div class="logo-container">
                <img src={myLogo} alt="School Logo" width="60" height="60" />
                </div>              
                <h1 class="school-name">${data.name}</h1>
                <div class="divider"></div>
                <p class="tagline">${data.tagline}</p>
            </header>

            <section class="links-container">
                <a href="${data.websiteUrl}" target="_blank" class="link-btn hero-btn">
                    <span class="btn-icon-text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                        Official Website
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>

                <a href="${data.instagramUrl}" target="_blank" class="link-btn">
                    <span class="btn-icon-text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                        Instagram
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>

                <a href="${data.facebookUrl}" target="_blank" class="link-btn">
                    <span class="btn-icon-text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                        Facebook Page
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>

                <a href="${data.tiktokUrl}" target="_blank" class="link-btn">
                    <span class="btn-icon-text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
                        TikTok Channel
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>

                <a href="${data.youtubeUrl}" target="_blank" class="link-btn">
                    <span class="btn-icon-text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
                        YouTube Presentations
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
            </section>

            <section class="contact-section">
                <div class="section-label-container">
                    <div class="section-line"></div>
                    <span class="section-label">Contact Information</span>
                    <div class="section-line"></div>
                </div>
                <div class="contact-grid">
                    <a href="https://wa.me/${data.whatsapp}" target="_blank" class="contact-card whatsapp-card">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                        WhatsApp
                    </a>
                    <a href="tel:${data.phone}" class="contact-card">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        Call Phone
                    </a>
                </div>
            </section>

            <footer class="school-footer">
                <div class="address">${data.address}</div>
                <div class="copyright">© 2026 ${data.name}. All Rights Reserved.</div>
            </footer>
        </main>
    </div>
</body>
</html>`;
  };

  const getCSSCode = () => {
    return `:root {
    --primary-color: ${data.primaryColor};
    --secondary-color: ${data.secondaryColor};
    --bg-dark-gradient: #15143b;
    --text-white: #ffffff;
    --font-heading: 'Outfit', sans-serif;
    --font-body: 'Plus Jakarta Sans', sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
}

body {
    font-family: var(--font-body);
    background-color: var(--primary-color);
    background-image: 
        radial-gradient(circle at 80% 20%, rgba(101, 182, 182, 0.15) 0%, transparent 45%),
        linear-gradient(135deg, var(--bg-dark-gradient) 0%, var(--primary-color) 45%, #181744 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px 16px;
    position: relative;
    overflow-x: hidden;
    line-height: 1.5;
}

.light-blob {
    position: absolute;
    width: 350px;
    height: 350px;
    border-radius: 50%;
    filter: blur(120px);
    opacity: 0.12;
    pointer-events: none;
    z-index: 0;
}
.blob-top-right {
    top: -5%;
    right: -10%;
    background-color: var(--secondary-color);
}
.blob-bottom-left {
    bottom: -10%;
    left: -10%;
    background-color: var(--secondary-color);
}

.container {
    width: 100%;
    max-width: 480px;
    z-index: 10;
    position: relative;
}

.linktree-card {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 8px;
}

.admissions-badge {
    position: absolute;
    top: -24px;
    left: 50%;
    transform: translateX(-50%);
    background: #022c2c;
    border: 1px solid #0d9488;
    color: var(--secondary-color);
    font-family: var(--font-heading);
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    padding: 6px 14px;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    gap: 8px;
    box-shadow: 0 4px 10px rgba(101, 182, 182, 0.2);
    white-space: nowrap;
    z-index: 20;
}

.status-indicator {
    width: 6.5px;
    height: 6.5px;
    border-radius: 50%;
    background-color: #22c55e;
}

.profile-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 32px;
    width: 100%;
}

.logo-container {
    width: 120px; /* Adjust size as needed */
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
    transition: transform 0.3s ease-in-out;
}

.logo-container img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: contain;
}

.logo-container:hover {
    transform: scale(1.05);
}

.school-name {
    font-family: var(--font-heading);
    font-size: 26px;
    font-weight: 700;
    letter-spacing: -0.5px;
    color: var(--text-white);
    line-height: 1.25;
    margin-bottom: 8px;
}

.divider {
    height: 4px;
    width: 48px;
    background-color: var(--secondary-color);
    border-radius: 9999px;
    margin-bottom: 8px;
}

.tagline {
    color: var(--secondary-color);
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.18em;
}

.links-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 40px;
}

.link-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 16px 24px;
    background-color: var(--primary-color);
    border: 1px solid var(--secondary-color);
    border-radius: 16px;
    color: var(--text-white);
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
}

.btn-icon-text {
    display: flex;
    align-items: center;
    gap: 16px;
}

.link-btn:hover {
    background-color: var(--secondary-color) !important;
    color: var(--primary-color) !important;
    border-color: var(--secondary-color) !important;
    transform: translateY(-2.5px);
    box-shadow: 0 15px 25px -5px rgba(101, 182, 182, 0.3);
}

.contact-section {
    width: 100%;
}

.section-label-container {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
}

.section-line {
    height: 1px;
    flex: 1;
    background-color: rgba(255, 255, 255, 0.1);
}

.section-label {
    font-size: 10px;
    font-weight: 750;
    text-transform: uppercase;
    letter-spacing: 0.3em;
    color: var(--secondary-color);
}

.contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
}

.contact-card {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    background-color: rgba(255, 255, 255, 0.05);
    color: var(--text-white);
    text-decoration: none;
    font-size: 13.5px;
    font-weight: 600;
    transition: all 0.3s ease-in-out;
}

.contact-card:hover {
    background-color: var(--secondary-color) !important;
    color: var(--primary-color) !important;
    border-color: var(--secondary-color) !important;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px -5px rgba(101, 182, 182, 0.25);
}

.school-footer {
    margin-top: 48px;
    text-align: center;
}

.school-footer .address {
    font-size: 11px;
    color: rgba(255, 255, 255, 0.4);
    margin-bottom: 8px;
}

.school-footer .copyright {
    font-size: 9.5px;
    color: rgba(255, 255, 255, 0.3);
    letter-spacing: 0.2em;
    text-transform: uppercase;
}

@media (max-width: 440px) {
    .contact-grid {
        grid-template-columns: 1fr;
    }
}
`;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const downloadFile = (filename: string, content: string) => {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div id="builder-root" className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans select-none overflow-hidden">
      
      {/* Top Header */}
      <header className="bg-slate-950/80 border-b border-slate-800 px-6 py-4 flex items-center justify-between backdrop-blur-md shrink-0">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 p-2 rounded-xl text-white shadow-lg shadow-indigo-600/20">
            <GraduationCap size={24} />
          </div>
          <div>
            <h1 className="font-bold text-lg tracking-tight flex items-center gap-2">
              IMS Erbil <span className="text-indigo-400 font-normal">Linktree Builder</span>
            </h1>
            <p className="text-xs text-slate-400">Professional customized marketing landing suite</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => {
              downloadFile('index.html', getHTMLCode());
              downloadFile('style.css', getCSSCode());
            }}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-4 py-2 rounded-lg text-xs transition duration-200 shadow-md shadow-indigo-600/10 cursor-pointer active:scale-95"
          >
            <Download size={14} /> Export Both Files
          </button>
        </div>
      </header>

      {/* Main Grid Content */}
      <div className="flex-1 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left Side: Customize control panel */}
        <section className="lg:col-span-5 border-r border-slate-850 bg-slate-900/40 overflow-y-auto p-6 flex flex-col gap-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h2 className="font-semibold text-sm text-slate-200 flex items-center gap-2">
              <Sliders size={15} className="text-indigo-400" /> Landing Configuration
            </h2>
            <span className="text-[10px] uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-2 py-0.5 rounded font-mono font-medium">Drafting Spec</span>
          </div>

          {/* School Name & Tagline */}
          <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/60 flex flex-col gap-3">
            <span className="text-[11px] text-indigo-400 font-bold uppercase tracking-wide">Institutional Info</span>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-slate-400">School Name</label>
              <input 
                type="text" 
                value={data.name} 
                onChange={(e) => setData({ ...data, name: e.target.value })}
                className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-indigo-500 text-slate-200 font-medium transition"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-slate-400">School Tagline / Subtitle</label>
              <textarea 
                rows={2} 
                value={data.tagline} 
                onChange={(e) => setData({ ...data, tagline: e.target.value })}
                className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-indigo-500 text-slate-200 transition resize-none leading-relaxed"
              />
            </div>
          </div>

          {/* Admissions Badge Toggle */}
          <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/60 flex flex-col gap-3.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-emerald-400 font-bold uppercase tracking-wide">Admissions Notice Badge</span>
              <div 
                onClick={() => setData({ ...data, isAdmissionsOpen: !data.isAdmissionsOpen })}
                className={`w-10 h-5.5 rounded-full p-0.5 transition duration-200 cursor-pointer flex items-center ${data.isAdmissionsOpen ? 'bg-emerald-500 justify-end' : 'bg-slate-800 justify-start'}`}
              >
                <div className="w-4.5 h-4.5 bg-white rounded-full shadow-md" />
              </div>
            </div>

            {data.isAdmissionsOpen && (
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-slate-400">Badge Text</label>
                <input 
                  type="text" 
                  value={data.admissionsText} 
                  onChange={(e) => setData({ ...data, admissionsText: e.target.value })}
                  className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-emerald-500 text-slate-200 transition"
                />
              </div>
            )}
          </div>

          {/* Social Branding Customizer */}
          <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/60 flex flex-col gap-3">
            <span className="text-[11px] text-teal-400 font-bold uppercase tracking-wide">Platform Redirection URLs</span>
            
            {[
              { label: 'Official College Website', field: 'websiteUrl' },
              { label: 'Instagram Handle URL', field: 'instagramUrl' },
              { label: 'Facebook Page URL', field: 'facebookUrl' },
              { label: 'TikTok Account URL', field: 'tiktokUrl' },
              { label: 'YouTube Custom URL', field: 'youtubeUrl' }
            ].map((item, index) => (
              <div key={index} className="flex flex-col gap-1">
                <label className="text-[11px] text-slate-400">{item.label}</label>
                <input 
                  type="url" 
                  value={data[item.field as keyof SchoolData] as string} 
                  onChange={(e) => setData({ ...data, [item.field]: e.target.value })}
                  className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-[11px] focus:outline-none focus:border-indigo-500 text-slate-300 font-mono transition"
                />
              </div>
            ))}
          </div>

          {/* Direct Operations Contacts */}
          <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/60 flex flex-col gap-3">
            <span className="text-[11px] text-amber-400 font-bold uppercase tracking-wide">Direct Operations Contacts</span>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-[11px] text-slate-400">Call Phone Line</label>
                <input 
                  type="tel" 
                  value={data.phone} 
                  onChange={(e) => setData({ ...data, phone: e.target.value })}
                  className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-amber-500 text-slate-200 font-mono transition"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[11px] text-slate-450 flex items-center gap-1">WhatsApp <span className="text-[9px] text-emerald-400 font-bold">(digits-only)</span></label>
                <input 
                  type="text" 
                  value={data.whatsapp} 
                  onChange={(e) => setData({ ...data, whatsapp: e.target.value })}
                  className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-emerald-500 text-slate-200 font-mono transition"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-1.5 mt-1">
              <label className="text-[11px] text-slate-400">Campus Address</label>
              <input 
                type="text" 
                value={data.address} 
                onChange={(e) => setData({ ...data, address: e.target.value })}
                className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-amber-500 text-slate-200 transition"
              />
            </div>
          </div>

          {/* Luxury Custom Colors */}
          <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/60 flex flex-col gap-3">
            <span className="text-[11px] text-pink-400 font-bold uppercase tracking-wide flex items-center gap-1">
              <Sparkles size={12} /> Exquisite Visual Branding Palette
            </span>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-slate-400 flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ backgroundColor: data.primaryColor }} /> Primary Background
                </label>
                <div className="flex gap-2">
                  <input 
                    type="color" 
                    value={data.primaryColor} 
                    onChange={(e) => setData({ ...data, primaryColor: e.target.value })}
                    className="w-8 h-8 rounded border border-slate-700 bg-transparent cursor-pointer"
                  />
                  <input 
                    type="text" 
                    value={data.primaryColor} 
                    onChange={(e) => setData({ ...data, primaryColor: e.target.value })}
                    className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-2 text-xs font-mono text-slate-300 uppercase focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-slate-400 flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ backgroundColor: data.secondaryColor }} /> Secondary Accent / Hover
                </label>
                <div className="flex gap-2">
                  <input 
                    type="color" 
                    value={data.secondaryColor} 
                    onChange={(e) => setData({ ...data, secondaryColor: e.target.value })}
                    className="w-8 h-8 rounded border border-slate-700 bg-transparent cursor-pointer"
                  />
                  <input 
                    type="text" 
                    value={data.secondaryColor} 
                    onChange={(e) => setData({ ...data, secondaryColor: e.target.value })}
                    className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-2 text-xs font-mono text-slate-300 uppercase focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Right Side: Tab panel with Smartphone Preview and Code Viewers */}
        <section className="lg:col-span-7 flex flex-col overflow-hidden bg-slate-950">
          
          {/* Navigation Tab */}
          <div className="bg-slate-920 border-b border-slate-850 px-6 py-2 flex items-center justify-between shrink-0">
            <div className="flex gap-2.5">
              {[
                { id: 'preview', label: 'Live Preview Render', icon: <Eye size={13} /> },
                { id: 'html', label: 'index.html', icon: <Code size={13} /> },
                { id: 'css', label: 'style.css', icon: <Code size={13} /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as 'preview' | 'html' | 'css')}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold cursor-pointer transition ${activeTab === tab.id ? 'bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
                >
                  {tab.icon} {tab.label}
                </button>
              ))}
            </div>

            {activeTab !== 'preview' && (
              <button
                onClick={() => copyToClipboard(activeTab === 'html' ? getHTMLCode() : getCSSCode())}
                className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-750 border border-slate-700 text-slate-300 font-medium px-3 py-1.5 rounded-lg text-xs transition duration-150 cursor-pointer active:scale-95"
              >
                {copySuccess ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                {copySuccess ? 'Copied' : 'Copy Code'}
              </button>
            )}
          </div>

          {/* Tab Viewport */}
          <div className="flex-grow overflow-auto relative flex items-center justify-center p-6 bg-slate-950/70">
            <AnimatePresence mode="wait">
              {activeTab === 'preview' && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  className="w-full max-w-sm shrink-0"
                >
                  {/* Smartphone Frame Wrapper */}
                  <div className="relative mx-auto rounded-[36px] bg-slate-900 overflow-hidden border-[6px] border-slate-800 shadow-2xl shadow-indigo-950/50 flex flex-col aspect-[9/18.5] w-full max-w-[340px]">
                    {/* Screen Camera Notch */}
                    <div className="absolute top-0 inset-x-0 h-5.5 bg-slate-900 z-50 flex justify-center items-center">
                      <div className="w-18 h-3 bg-black rounded-b-xl" />
                    </div>

                    {/* Smartphone Screen Viewport */}
                    <div 
                      className="flex-grow overflow-y-auto relative p-5 pt-8 text-slate-900 scrollbar-none"
                      style={{ 
                        backgroundColor: data.primaryColor,
                        backgroundImage: `radial-gradient(circle at 80% 20%, ${data.secondaryColor}25 0%, transparent 45%), linear-gradient(135deg, #15143b 0%, ${data.primaryColor} 45%, #181744 100%)`
                      }}
                    >
                      {/* Live responsive card */}
                      <div className="relative text-center flex flex-col gap-5 mt-4 text-white">
                        
                        {/* Status Badge */}
                        {data.isAdmissionsOpen && (
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-teal-950/80 backdrop-blur-sm border border-teal-500 text-teal-400 font-semibold text-[8.5px] uppercase tracking-wider py-1 px-3 rounded-full flex items-center gap-1.5 shadow-md shadow-teal-900/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            {data.admissionsText}
                          </div>
                        )}

                        {/* Top Crest - Centered white circle container matching Design HTML */}
                        <div className="flex justify-center mt-3">
                          <div 
                            className="w-18 h-18 bg-white rounded-full flex items-center justify-center shadow-lg border-2"
                            style={{ borderColor: `${data.secondaryColor}40` }}
                          >
                            <svg id="crest-inner" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" className="w-11 h-11">
                              <circle cx="60" cy="60" r="54" fill={data.primaryColor} stroke="#E2B13C" strokeWidth="2.5" />
                              <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                              <polygon points="60,30 84,42 84,72 60,92 36,72 36,42" fill="none" stroke="#E2B13C" strokeWidth="2"/>
                              <polygon points="60,40 61.5,44.5 66,44.5 62.5,47.5 64,52 60,49.5 56,52 57.5,47.5 54,44.5 58.5,44.5" fill="#E2B13C" />
                              <text x="60" y="68" fontFamily="'Outfit', sans-serif" fontWeight="700" fontSize="16" fill="#E2B13C" textAnchor="middle" letterSpacing="1">IMS</text>
                              <text x="60" y="78" fontFamily="'Outfit', sans-serif" fontWeight="500" fontSize="7" fill={data.secondaryColor} text-anchor="middle" letterSpacing="0.5">ERBIL</text>
                            </svg>
                          </div>
                        </div>

                        {/* Title & Tagline */}
                        <div className="flex flex-col items-center">
                          <h3 className="font-bold text-white text-[15.5px] leading-snug tracking-tight">
                            {data.name}
                          </h3>
                          <div className="h-0.5 w-10 my-2 rounded-full" style={{ backgroundColor: data.secondaryColor }} />
                          <p className="text-[10px] uppercase tracking-widest font-bold tracking-[0.16em]" style={{ color: data.secondaryColor }}>
                            {data.tagline}
                          </p>
                        </div>

                        {/* Links stack */}
                        <div className="flex flex-col gap-3">
                          {[
                            { name: 'Official Website', url: data.websiteUrl, icon: <Globe size={14} /> },
                            { name: 'Instagram', url: data.instagramUrl, icon: <Instagram size={14} /> },
                            { name: 'Facebook Page', url: data.facebookUrl, icon: <Facebook size={14} /> },
                            { name: 'TikTok Feed', url: data.tiktokUrl, icon: <VideoIcon size={14} /> },
                            { name: 'YouTube Channel', url: data.youtubeUrl, icon: <Youtube size={14} /> }
                          ].map((link, idx) => (
                            <a
                              key={idx}
                              href={link.url}
                              target="_blank"
                              className="group flex items-center justify-between p-3 rounded-xl text-white text-xs font-semibold tracking-wide border transition-all duration-300 relative overflow-hidden bg-transparent cursor-pointer"
                              style={{ 
                                borderColor: data.secondaryColor,
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = data.secondaryColor;
                                e.currentTarget.style.color = data.primaryColor;
                                e.currentTarget.style.transform = 'translateY(-1.5px)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.color = '#ffffff';
                                e.currentTarget.style.transform = 'none';
                              }}
                            >
                              <div className="flex items-center gap-3">
                                <span style={{ color: data.secondaryColor }} className="transition-colors">
                                  {link.icon}
                                </span>
                                <span>{link.name}</span>
                              </div>
                              <ArrowRight size={12} className="opacity-70 group-hover:translate-x-0.5 transition-transform" />
                            </a>
                          ))}
                        </div>

                        {/* Separator */}
                        <div className="flex items-center gap-2 my-1">
                          <div className="h-[1px] flex-1 bg-white/10" />
                          <span className="text-[9px] uppercase font-bold tracking-widest" style={{ color: data.secondaryColor }}>
                            Contact Information
                          </span>
                          <div className="h-[1px] flex-1 bg-white/10" />
                        </div>

                        {/* Contact Details Grid */}
                        <div className="grid grid-cols-2 gap-2.5">
                          <a 
                            href={`https://wa.me/${data.whatsapp}`} 
                            target="_blank"
                            className="border border-white/20 hover:text-slate-900 rounded-xl py-2 flex items-center justify-center gap-2 text-[10px] font-bold text-white transition-all duration-200"
                            style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = data.secondaryColor;
                              e.currentTarget.style.borderColor = data.secondaryColor;
                              e.currentTarget.style.color = data.primaryColor;
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                              e.currentTarget.style.color = '#ffffff';
                            }}
                          >
                            <WhatsAppIcon size={13} />
                            WhatsApp
                          </a>

                          <a 
                            href={`tel:${data.phone}`} 
                            className="border border-white/20 hover:text-slate-900 rounded-xl py-2 flex items-center justify-center gap-2 text-[10px] font-bold text-white transition-all duration-200"
                            style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = data.secondaryColor;
                              e.currentTarget.style.borderColor = data.secondaryColor;
                              e.currentTarget.style.color = data.primaryColor;
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                              e.currentTarget.style.color = '#ffffff';
                            }}
                          >
                            <Phone size={11} />
                            Call Phone
                          </a>
                        </div>

                        {/* Footer details in phone mockup */}
                        <div className="mt-2 text-center text-white/30 text-[8px] uppercase tracking-widest font-medium">
                          <p className="px-2 truncate">
                            Erbil, Kurdistan Region, Iraq
                          </p>
                          <p className="mt-1">
                            © 2026 IMS-Erbil
                          </p>
                        </div>

                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'html' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="w-full h-full flex flex-col"
                >
                  <pre className="flex-grow bg-slate-900 border border-slate-800 p-4 rounded-xl text-slate-300 font-mono text-xs overflow-auto select-text leading-relaxed whitespace-pre font-normal">
                    {getHTMLCode()}
                  </pre>
                </motion.div>
              )}

              {activeTab === 'css' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="w-full h-full flex flex-col"
                >
                  <pre className="flex-grow bg-slate-900 border border-slate-800 p-4 rounded-xl text-slate-300 font-mono text-xs overflow-auto select-text leading-relaxed whitespace-pre font-normal">
                    {getCSSCode()}
                  </pre>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

      </div>
    </div>
  );
}

// Inline SVGs for TikTok and WhatsApp
function VideoIcon(props: { size?: number; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 20} height={props.size || 20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14a3 3 0 1 1-3-3V5h3v4h-3a1 1 0 0 1 1-1" />
    </svg>
  );
}

function WhatsAppIcon(props: { size?: number; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}
