'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
    const router = useRouter();
    const [pw, setPw] = useState('');
    const [msg, setMsg] = useState('');
    const [suggestedPass, setSuggestedPass] = useState('');
    const [isTrolled, setIsTrolled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const fakeEmails = ["admin_sova@msu.ac.th", "elon.musk@x.com", "god_of_hacker@gmail.com"];
    const chaoticSuggested = [
        "sova_CS_MSU_2026",
        "I_LOVE_NEXTJS_V16",
        "CYBER_SEC_GOD_69",
        "TERMINAL_ENJOYER_ZA",
        "HADES_DASH_STRIKE"
    ];

    const handleRegisterAttempt = (e: React.FormEvent) => {
        e.preventDefault();
        if (pw.length < 4) return;

        setIsLoading(true);

        // จำลองการตรวจสอบฐานข้อมูล (หลอกๆ)
        setTimeout(() => {
            setIsLoading(false);
            setIsTrolled(true);

            const randomMail = fakeEmails[Math.floor(Math.random() * fakeEmails.length)];
            const randomPick = chaoticSuggested[Math.floor(Math.random() * chaoticSuggested.length)];

            setMsg(`ขออภัย! รหัสผ่านนี้ถูกใช้งานไปแล้วโดยผู้ใช้: ${randomMail}`);
            setSuggestedPass(randomPick);
        }, 1200);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#050505] font-mono p-4">
            <div className="w-full max-w-sm border border-zinc-800 bg-[#0a0a0a] p-8 shadow-2xl transition-all">

                <header className="mb-8 border-b border-zinc-800 pb-4">
                    <h1 className="text-xl text-white tracking-tighter uppercase">/Register_New_User</h1>
                    <p className="text-[10px] text-zinc-600 mt-1 uppercase tracking-widest font-bold">MSU Security Protocol v4.0</p>
                </header>

                {/* 🚨 ส่วนที่จะแสดงหลังจากกดยืนยัน (isTrolled === true) 🚨 */}
                {isTrolled && (
                    <div className="mb-8 space-y-4 animate-in fade-in slide-in-from-top-2 duration-500">
                        <div className="border border-red-900/50 bg-red-950/10 p-4 border-l-2 border-l-red-600">
                            <p className="text-[11px] text-red-500 leading-relaxed uppercase font-bold">
                                ⚠️ {msg}
                            </p>
                        </div>

                        <div className="border border-zinc-800 bg-zinc-900/30 p-4 border-l-2 border-l-emerald-500">
                            <p className="text-[10px] text-zinc-400 uppercase mb-2 font-bold tracking-tighter">ระบบได้สุ่มรหัสผ่านที่ปลอดภัยกว่าให้คุณแล้ว:</p>
                            <p className="text-[13px] text-emerald-500 font-black mb-4 select-all">"{suggestedPass}"</p>

                            <button
                                onClick={() => router.push('/dashboard')}
                                className="w-full py-3 bg-emerald-600/10 border border-emerald-500/50 text-emerald-500 text-[10px] uppercase font-bold hover:bg-emerald-500 hover:text-black transition-all tracking-[0.2em]"
                            >
                                ยอมรับรหัสนี้และเข้าสู่ระบบ
                            </button>
                        </div>
                    </div>
                )}

                <form onSubmit={handleRegisterAttempt} className="space-y-6">
                    <div className="space-y-2">
                        <label className="block text-[9px] text-zinc-600 uppercase tracking-widest font-bold">New Identifier</label>
                        <input
                            type="text"
                            required
                            className="w-full bg-[#0d0d0d] border border-zinc-800 p-3 text-sm text-white focus:outline-none focus:border-zinc-500 transition-colors"
                            placeholder="Email"
                            disabled={isTrolled || isLoading}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-[9px] text-zinc-600 uppercase tracking-widest font-bold">Initial Access Key</label>
                        <input
                            type="password"
                            required
                            value={pw}
                            onChange={(e) => setPw(e.target.value)}
                            className="w-full bg-[#0d0d0d] border border-zinc-800 p-3 text-sm text-white focus:outline-none focus:border-zinc-500 transition-colors"
                            placeholder="••••••••"
                            disabled={isTrolled || isLoading}
                        />
                    </div>

                    {!isTrolled && (
                        <button
                            type="submit"
                            disabled={pw.length < 4 || isLoading}
                            className={`w-full py-3 border text-[10px] uppercase font-bold tracking-[0.3em] transition-all duration-300 ${pw.length >= 4
                                ? 'border-zinc-500 text-white hover:bg-white hover:text-black'
                                : 'border-zinc-900 text-zinc-800 cursor-not-allowed'
                                }`}
                        >
                            {isLoading ? 'Checking Database...' : 'Initialize Account'}
                        </button>
                    )}
                </form>

                <footer className="mt-8 pt-4 border-t border-zinc-900 text-center">
                    <Link href="/" className="text-[9px] text-zinc-700 hover:text-zinc-400 transition-colors uppercase tracking-widest">
                        Back to Secure Auth
                    </Link>
                </footer>
            </div>
        </div>
    );
}