"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#fcfbfa] to-[#f4f0ea] font-sans overflow-x-hidden relative flex flex-col justify-between selection:bg-[#E2B76D] selection:text-[#0B1E36]">
      
      {/* BACKGROUND ORNAMEN KANAN (Sisi Kanan - Geometris Navy & Lipatan Emas Dinamis) */}
      <div className="absolute right-0 top-0 h-full w-[40%] bg-[#0B1E36] hidden lg:block clip-path-banner z-0 shadow-2xl">
        {/* Ornamen Titik-Titik Aksentuasi Khas Desain Flyer */}
        <div className="absolute top-12 right-12 opacity-20 grid grid-cols-6 gap-2 text-white">
          {Array.from({ length: 36 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-white" />
          ))}
        </div>
        {/* Garis Aksen Emas Ganda */}
        <div className="absolute left-0 top-0 h-full w-[6px] bg-gradient-to-b from-[#E2B76D] via-[#f3d39e] to-[#C59B51] -translate-x-1" />
        <div className="absolute left-4 top-0 h-full w-[1px] bg-[#E2B76D]/10 -translate-x-1" />
      </div>

      {/* HEADER / TOP NAV */}
      <header className="w-full max-w-7xl mx-auto px-6 pt-8 md:px-12 z-10 flex items-center justify-between">
        <div className="flex items-center gap-4 group cursor-pointer">
          <div>
            <h2 className="text-base md:text-lg font-black text-[#0B1E36] tracking-tight uppercase leading-none">
              PT. Bersama Kingsa Sejahtera
            </h2>
            <p className="text-[10px] md:text-xs text-[#C59B51] font-bold tracking-widest uppercase mt-1">
              Solusi Properti Terpercaya
            </p>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="w-full max-w-7xl mx-auto px-6 md:px-12 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-6 pb-12 z-10">
        
        {/* SEKTOR KIRI: INFOGRAFIK, TEKS UTAMA & CTA */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#0B1E36]/5 border border-[#0B1E36]/10 px-3 py-1 rounded-full text-xs font-semibold text-[#0B1E36] mx-auto lg:mx-0 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#E2B76D] animate-pulse" />
              Eksklusif Penawaran Properti 2026
            </div>
            
            <h1 className="text-4xl md:text-[56px] font-black text-[#0B1E36] leading-[1.1] tracking-tight uppercase">
              Solusi Properti <br />
              <span className="bg-gradient-to-r from-[#C59B51] via-[#E2B76D] to-[#A47C36] bg-clip-text text-transparent">
                Terpercaya
              </span>
            </h1>
            
            <p className="text-zinc-600 text-sm md:text-base max-w-md mx-auto lg:mx-0 font-medium leading-relaxed border-l-2 border-[#E2B76D]/50 pl-0 lg:pl-4">
              Membangun nilai, memberikan kenyamanan, dan mewujudkan masa depan yang lebih baik secara profesional dan berkelanjutan.
            </p>
          </div>

          {/* AKSI UTAMA: TOMBOL GO TO DASHBOARD YANG DITINGKATKAN */}
          <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={handleNavigate}
              className="group relative px-10 py-4 bg-gradient-to-r from-[#0B1E36] to-[#1a3d66] text-white font-bold text-base tracking-wider rounded-xl shadow-[0_20px_40px_-15px_rgba(11,30,54,0.4)] border border-[#E2B76D]/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_20px_40px_-10px_rgba(226,183,109,0.3)] cursor-pointer overflow-hidden flex items-center justify-center gap-4 min-w-[240px]"
            >
              {/* Garis Sorot Mengkilap */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              
              <span className="text-[#E2B76D] group-hover:text-white transition-colors duration-300">Go to Dashboard</span>
              
              <div className="p-1.5 bg-[#E2B76D] text-[#0B1E36] rounded-lg transition-colors duration-300 group-hover:bg-white">
                <svg className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1 stroke-current fill-none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* SEKTOR KANAN: FRAME FOTO KANTOR BERSIH TANPA TEKS */}
        <div className="lg:col-span-6 w-full flex items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-[500px] aspect-[4/3] sm:aspect-[16/11] rounded-2xl p-2 bg-gradient-to-br from-white to-[#f4f0ea] shadow-[0_30px_60px_-15px_rgba(11,30,54,0.2)] border border-zinc-200/60 group overflow-hidden">
            
            {/* Bingkai foto bagian dalam */}
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-zinc-100">
              <Image
                src="/kantor.jpg"
                alt="PT Bersama Kingsa Sejahtera Building"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-w-7xl) 100vw, 50vw"
                priority
              />
            </div>

            {/* Aksen emas dekoratif pembungkus luar sudut */}
            <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-[#E2B76D] rounded-tl-xl pointer-events-none" />
            <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-[#E2B76D] rounded-br-xl pointer-events-none" />
          </div>
        </div>
      </main>

      {/* FOOTER BAR: 4 PILAR UTAMA DENGAN DESAIN CARD COMPACT */}
      <footer className="w-full bg-[#0B1E36] border-t border-[#E2B76D]/30 py-6 z-10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          
          {/* PILAR 1 */}
          <div className="flex items-center gap-3.5 text-white bg-white/5 p-3 rounded-xl border border-white/5 hover:border-[#E2B76D]/30 transition-colors duration-300">
            <div className="p-2.5 bg-[#E2B76D]/10 rounded-lg border border-[#E2B76D]/20 text-[#E2B76D]">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-wider text-[#E2B76D]">Properti</p>
              <p className="text-[11px] text-zinc-300 font-medium">Berkualitas Tinggi</p>
            </div>
          </div>

          {/* PILAR 2 */}
          <div className="flex items-center gap-3.5 text-white bg-white/5 p-3 rounded-xl border border-white/5 hover:border-[#E2B76D]/30 transition-colors duration-300">
            <div className="p-2.5 bg-[#E2B76D]/10 rounded-lg border border-[#E2B76D]/20 text-[#E2B76D]">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-wider text-[#E2B76D]">Investasi</p>
              <p className="text-[11px] text-zinc-300 font-medium">Aman & Terjamin</p>
            </div>
          </div>

          {/* PILAR 3 */}
          <div className="flex items-center gap-3.5 text-white bg-white/5 p-3 rounded-xl border border-white/5 hover:border-[#E2B76D]/30 transition-colors duration-300">
            <div className="p-2.5 bg-[#E2B76D]/10 rounded-lg border border-[#E2B76D]/20 text-[#E2B76D]">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-wider text-[#E2B76D]">Layanan</p>
              <p className="text-[11px] text-zinc-300 font-medium">Sangat Profesional</p>
            </div>
          </div>

          {/* PILAR 4 */}
          <div className="flex items-center gap-3.5 text-white bg-white/5 p-3 rounded-xl border border-white/5 hover:border-[#E2B76D]/30 transition-colors duration-300">
            <div className="p-2.5 bg-[#E2B76D]/10 rounded-lg border border-[#E2B76D]/20 text-[#E2B76D]">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-wider text-[#E2B76D]">Nilai Investasi</p>
              <p className="text-[11px] text-zinc-300 font-medium">Terus Bertumbuh</p>
            </div>
          </div>

        </div>
      </footer>

      {/* Stilistik Global Tailwind Custom Shape */}
      <style jsx global>{`
        .clip-path-banner {
          clip-path: polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%);
        }
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}