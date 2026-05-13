'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function RegisterPage() {
    const [pw, setPw] = useState('');
    const [msg, setMsg] = useState('');

    const fakeEmails = ["sova@msu.ac.th", "elon.musk@x.com", "god_of_hacker@gmail.com"];

    useEffect(() => {
        if (pw.length > 3) {
            const randomMail = fakeEmails[Math.floor(Math.random() * fakeEmails.length)];
            setMsg(`รหัสผ่านนี้ถูกใช้งานไปแล้วโดย: ${randomMail}`);
        } else {
            setMsg('');
        }
    }, [pw]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#050505] font-mono p-4">
            <div className="w-full max-w-sm border border-zinc-800 bg-[#0a0a0a] p-8 shadow-2xl">
                <header className="mb-8 border-b border-zinc-800 pb-4">
                    <h1 className="text-xl text-white tracking-tighter">/AUTH/REGISTER</h1>
                    <p className="text-[10px] text-zinc-600 uppercase mt-1">New Protocol Initialization</p>
                </header>

                {msg && (
                    <div className="mb-6 border border-yellow-900/50 bg-yellow-950/10 p-4">
                        <p className="text-[11px] text-yellow-500 leading-relaxed uppercase font-bold">
                            ⚠️ {msg}
                        </p>
                    </div>
                )}

                <div className="space-y-6">
                    <div className="space-y-2">
                        <label className="block text-[9px] text-zinc-600 uppercase">New Identifier</label>
                        <input
                            type="text"
                            className="w-full bg-[#0d0d0d] border border-zinc-800 p-3 text-sm text-white focus:outline-none focus:border-zinc-500"
                            placeholder="Email"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-[9px] text-zinc-600 uppercase">Create Key</label>
                        <input
                            type="password"
                            value={pw}
                            onChange={(e) => setPw(e.target.value)}
                            className="w-full bg-[#0d0d0d] border border-zinc-800 p-3 text-sm text-white focus:outline-none focus:border-zinc-500"
                            placeholder="••••••••"
                        />
                    </div>

                    <button className="w-full border text-white border-zinc-700 py-3 hover:bg-white hover:text-black transition-all duration-300 text-[10px] uppercase font-bold">
                        Initialize Account
                    </button>
                </div>

                <footer className="mt-8 pt-4 border-t border-zinc-800 text-center">
                    <Link href="/" className="text-[9px] text-zinc-600 hover:text-zinc-300 transition-colors uppercase">
                        Already have clearance? Login
                    </Link>
                </footer>
            </div>
        </div>
    );
}