'use client';

import React, { useState } from 'react';
import { 
  LayoutDashboard,
  Users,       // Ikon untuk Member
  ShoppingBag, // Ikon untuk Pembeli
  Settings,
  Menu,
  X,
  Search,
  Bell,
  RefreshCw,
  FileCheck,
  Wallet,
  Coins,
  CheckCircle2,
  Package     
} from 'lucide-react';

export default function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Susunan menu sidebar yang diperbarui
  const sidebarMenus = [
    { name: 'Dashboard', icon: LayoutDashboard, active: true },
    { name: 'Member', icon: Users, active: false },       
    { name: 'Pembeli', icon: ShoppingBag, active: false }, 
    { name: 'Pengaturan', icon: Settings, active: false },
  ];

  // Data 3 Card Utama 
  const profitStats = [
    {
      title: "Penjualan Eceran",
      percentage: "15% – 30%",
      icon: ShoppingBag,
      iconBg: "bg-gradient-to-b from-[#F39C12] to-[#F1C40F]", 
      iconColor: "text-white",
      borderColor: "border-slate-200",
      numColor: "text-[#D4AF37]" 
    },
    {
      title: "Cashback Repeat Order",
      percentage: "15% – 30%",
      icon: RefreshCw,
      iconBg: "bg-[#0F766E]", 
      iconColor: "text-white",
      borderColor: "border-[#0F766E]", 
      numColor: "text-[#0F766E]" 
    },
    {
      title: "Penjualan Paket Sistem",
      percentage: "15% – 30%",
      icon: Package,
      iconBg: "bg-[#B7950B]", 
      iconColor: "text-white",
      borderColor: "border-slate-200",
      numColor: "text-[#B7950B]" 
    },
  ];

  // Data Pilar Keunggulan
  const coreFeatures = [
    { title: "Legalitas", icon: FileCheck, iconBg: "bg-[#0F766E]", iconColor: "text-white", cardBg: "bg-[#E6F4F1]", border: "border-[#0F766E]/30" },
    { title: "Modal", icon: Wallet, iconBg: "bg-[#D4AF37]/40", iconColor: "text-[#7D6608]", cardBg: "bg-[#FEF9E7]", border: "border-[#D4AF37]/20" },
    { title: "Skema Keuntungan", icon: Coins, iconBg: "bg-[#B7950B]", iconColor: "text-white", cardBg: "bg-[#FBEEE6]", border: "border-[#B7950B]/20" },
    { title: "Syariah", icon: CheckCircle2, iconBg: "bg-[#7D6608]/40", iconColor: "text-[#4A235A]", cardBg: "bg-[#F5EEF8]", border: "border-[#7D6608]/10" },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex font-sans antialiased overflow-x-hidden">
      
      {/* 1. SIDEBAR MOBILE & DESKTOP */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-60 bg-[#060F1E] text-slate-400 p-4 flex flex-col justify-between transform transition-transform duration-300 ease-in-out
        md:relative md:transform-none
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div>
          {/* Header Logo Brand */}
          <div className="flex flex-col items-center text-center pb-5 pt-6 px-2 border-b border-slate-800/60 relative">
            
            {/* Logo Image KINGSA */}
            <div className="w-24 h-24 md:w-28 md:h-28 mb-1 flex items-center justify-center">
              <img 
                src="kingsa.png"  
                alt="kingsa" 
                className="w-full h-full object-contain"
              />
            </div>

            {/* Nama Brand & Subtitle */}
            <h1 className="font-black text-xl tracking-widest text-[#D4AF37] uppercase font-serif mt-1">KINGSA</h1>
            <span className="text-xs text-slate-400 font-medium tracking-wide mt-1">Hub Dashboard</span>

            {/* Tombol Tutup Sidebar di HP */}
            <button onClick={() => setIsSidebarOpen(false)} className="md:hidden absolute right-2 top-4 text-slate-400 hover:text-white p-1 rounded-md bg-slate-800/40">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigasi List Menu */}
          <nav className="mt-6 space-y-1">
            {sidebarMenus.map((menu, idx) => {
              const Icon = menu.icon;
              return (
                <a
                  key={idx}
                  href="#"
                  onClick={() => setIsSidebarOpen(false)} // Otomatis menutup sidebar di HP setelah menu diklik
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                    menu.active 
                      ? 'bg-gradient-to-r from-[#D4AF37] to-[#F1C40F] text-[#060F1E] font-bold shadow-md' 
                      : 'text-slate-300 hover:bg-slate-800/40 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4" />
                    <span>{menu.name}</span>
                  </div>
                </a>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Overlay Mobile Backdrop */}
      {isSidebarOpen && (
        <div onClick={() => setIsSidebarOpen(false)} className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-xs transition-opacity" />
      )}

      {/* 2. MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* TOPBAR HEADER */}
        <header className="h-14 bg-white border-b border-slate-100 px-4 md:px-6 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-4">
            {/* Hamburger Menu untuk HP */}
            <button onClick={() => setIsSidebarOpen(true)} className="md:hidden p-2 rounded-md text-slate-600 hover:bg-slate-50 border border-slate-100">
              <Menu className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <button className="text-slate-400 hover:text-slate-600 p-1"><Search className="w-4 h-4" /></button>
            <button className="text-slate-400 hover:text-slate-600 p-1"><Bell className="w-4 h-4" /></button>
            
            {/* Mini Avatar Bulat */}
            <div className="w-7 h-7 rounded-full bg-[#060F1E] flex items-center justify-center p-1 border border-slate-100 shadow-sm overflow-hidden">
              <img 
                src="kingsa.png" 
                alt="kingsa" 
                className="w-full h-full object-contain"
              />
            </div>

            <button className="bg-gradient-to-r from-[#D4AF37] to-[#F1C40F] text-[#060F1E] px-3 md:px-4 py-1.5 rounded-md text-xs font-bold shadow-sm hover:brightness-105 transition-all">
              LOGIN
            </button>
          </div>
        </header>

        {/* UTAMA CONTENT */}
        <main className="p-4 md:p-8 space-y-6 md:space-y-8 flex-1 overflow-y-auto">
          
          {/* HEADER JUDUL HALAMAN */}
          <div className="space-y-1">
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight leading-snug">
              Persentase Keuntungan Produk <span className="text-[#D4AF37]">KINGSA</span>
            </h2>
            <p className="text-xs text-slate-400 font-medium">
              Persentase Keuntungan Produk sajan KINGSA
            </p>
            <div className="flex items-center gap-1.5 pt-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2ECC71] inline-block shadow-sm"></span>
              <span className="text-[11px] font-bold text-slate-600">Aktive system indicator</span>
            </div>
          </div>

          {/* GRID CARD RINGKASAN PROFITABILITAS */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
            {profitStats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={idx} 
                  className={`bg-white rounded-xl p-4 md:p-5 border ${stat.borderColor} shadow-xs flex flex-col justify-between`}
                >
                  <div>
                    <h3 className="text-xs font-extrabold text-slate-800 tracking-tight mb-4">Ringkasan Profitabilitas</h3>
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${stat.iconBg} ${stat.iconColor}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-slate-700">{stat.title}</span>
                    </div>
                  </div>
                  
                  {/* Persentase Angka */}
                  <div className="my-6 md:my-8 flex justify-center items-center border-t border-slate-100/70 pt-4 md:pt-5">
                    <span className={`text-3xl md:text-4xl font-black ${stat.numColor} tracking-tight`}>
                      {stat.percentage}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* SEKSI PILAR KEUNGGULAN */}
          <div className="space-y-3">
            <h3 className="text-sm font-black text-slate-800 uppercase tracking-wider">Pilar Keunggulan</h3>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {coreFeatures.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={idx} 
                    className={`${feature.cardBg} border ${feature.border} rounded-xl p-3 md:p-4 flex flex-col items-center justify-center text-center min-h-[110px] md:min-h-[120px] transition-transform duration-200 hover:scale-[1.02]`}
                  >
                    <div className={`p-2.5 rounded-xl ${feature.iconBg} ${feature.iconColor} mb-2 md:mb-2.5 shadow-xs`}>
                      <Icon className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <span className="text-[11px] md:text-xs font-bold text-slate-800 tracking-tight leading-tight">
                      {feature.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </main>
      </div>

      {/* Floating Hijau Tombol WhatsApp Kanan Bawah */}
      <div className="fixed bottom-4 right-4 md:bottom-5 md:right-5 z-40">
        <button className="w-10 h-10 md:w-11 md:h-11 bg-[#2ECC71] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#27AE60] transition-transform hover:scale-110">
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.37 5.374 0 12.007 0c3.212.001 6.231 1.253 8.5 3.528 2.27 2.274 3.52 5.294 3.519 8.504-.004 6.63-5.374 12.001-12.005 12.001-2.01 0-3.984-.503-5.742-1.464L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.023-5.11-2.884-6.973C16.53 1.91 14.057.885 11.43.884c-5.44 0-9.863 4.42-9.866 9.861-.001 1.716.463 3.39 1.342 4.869l-.1.365-1.048 3.827 3.923-1.029.359-.113z" />
          </svg>
        </button>
      </div>

    </div>
  );
}