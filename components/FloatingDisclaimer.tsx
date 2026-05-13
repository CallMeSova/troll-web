// app/components/FloatingDisclaimer.tsx
'use client';

import React, { useState } from 'react';

export default function FloatingDisclaimer() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 left-6 z-40 flex items-center gap-2 px-3 py-2 border border-zinc-800 bg-[#0a0a0a]/80 backdrop-blur-md text-zinc-500 hover:text-white hover:border-zinc-500 transition-all duration-300 rounded-sm shadow-xl"
            >
                <span className="text-[10px] font-bold uppercase tracking-widest">Disclaimer</span>
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/90 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="w-full max-w-lg border border-zinc-800 bg-[#0d0d0d] p-10 shadow-2xl relative font-mono">
                        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-zinc-600 hover:text-white text-xs">[ Close ]</button>
                        <header className="mb-8 border-b border-zinc-800 pb-4">
                            <h2 className="text-sm text-white font-black uppercase tracking-[0.3em]">Project Transparency</h2>
                        </header>
                        <div className="space-y-4 text-[11px] text-zinc-500 leading-relaxed uppercase">
                            <p>1. ระบบนี้เป็นเพียงการจำลองเพื่อความบันเทิงและทดสอบ UI/UX (Troll Project)</p>
                            <p>2. ข้อมูลรหัสผ่านทั้งหมดเป็นการสุ่มโดย Logic ของ Client และไม่มีการบันทึกลงฐานข้อมูลจริง</p>
                            <p className="text-zinc-400 italic border-l border-zinc-700 pl-4">ข้อมูลของคุณยังคงปลอดภัย 100%</p>
                        </div>

                        <section className="mt-6 pt-4 border-t border-zinc-800">
                            <h4 className="text-[10px] text-zinc-500 font-bold uppercase mb-1">Developer Identity</h4>
                            <p className="text-[10px] text-zinc-600">
                                Designed and Developed by **Vigothirapat (Vigo)**
                                <br />
                                GitHub: <a href="https://github.com/CallMeSova" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400">CallMeSova</a>
                                <br />
                                Gmail: vigothirapat2548@gmail.com
                            </p>
                        </section>
                    </div>
                </div>
            )}
        </>
    );
}