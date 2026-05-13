'use client';

import React, { useEffect, useState } from 'react';

export default function Dashboard() {
    const [logs, setLogs] = useState<string[]>([]);
    const [shockMessage, setShockMessage] = useState('');
    const [isFinished, setIsFinished] = useState(false);

    // ข้อความที่ดูเหมือน "Logs ลับ" ที่เผลอหลุดออกมา
    const leakedNotes = [
        "SYSTEM: ส่งรูปหลุดใน 'ถังขยะ' เข้าแชทกลุ่มครอบครัวเรียบร้อย...",
        "LOG: กำลังโอนเงินในวอลเล็ทไปช่วยค่าน้ำไฟมอสารคาม... จุกๆ",
        "CRITICAL: ประวัติการเข้าชมเว็บ (สีเทา) ถูกโพสต์ลง Facebook แล้วนะ",
        "DEBUG: แคปหน้าจอแชทที่ด่าเพื่อน ส่งไปให้เพื่อนคนนั้นดูแล้วครับ",
        "INTERNAL: ทำการยกเลิก 'เน็ตไม่อั้น' ของคุณเรียบร้อย... ยินดีด้วย!",
        "ALERT: ส่งข้อความ 'ยืมเงินหน่อย' ไปหาทุกคนในรายชื่อติดต่อแล้ว"
    ];

    const fakeLogs = [
        "> Initializing Global_Infiltrator.sh...",
        "> Accessing hidden partitions...",
        "> Found sensitive metadata in /Documents/Private",
        "> Bypassing MSU Network Security...",
        "> Establishing SSH tunnel to remote_server_X",
        "> Dumping browser cookies and saved passwords...",
        "> Transferring local data to decentralized cloud...",
        "> Status: 100% Successful."
    ];

    useEffect(() => {
        fakeLogs.forEach((log, index) => {
            setTimeout(() => {
                setLogs(prev => [...prev, log]);

                if (index === fakeLogs.length - 1) {
                    setTimeout(() => {
                        setIsFinished(true);
                        setShockMessage(leakedNotes[Math.floor(Math.random() * leakedNotes.length)]);
                    }, 600);
                }
            }, index * 700);
        });
    }, []);

    return (
        <div className="min-h-screen bg-[#050505] text-zinc-500 font-mono p-6 sm:p-10 flex flex-col items-center justify-center relative overflow-hidden">

            {/* Container หลัก: หน้าตาดูเรียบๆ นิ่งๆ */}
            <div className="w-full max-w-xl border border-zinc-900 bg-[#080808] p-8 shadow-sm">
                <header className="mb-6 flex justify-between items-center text-[9px] tracking-[0.3em] uppercase border-b border-zinc-900 pb-2">
                    <span>Process: Infiltrator_v4</span>
                    <span className={isFinished ? "text-red-900" : "text-emerald-900 animate-pulse"}>
                        {isFinished ? "[TERMINATED]" : "[ACTIVE]"}
                    </span>
                </header>

                <div className="space-y-1 h-56 overflow-y-auto text-[11px] leading-relaxed">
                    {logs.map((log, i) => (
                        <p key={i} className={i === logs.length - 1 && !isFinished ? "text-emerald-500/80" : "text-zinc-600"}>
                            {log}
                        </p>
                    ))}
                    {!isFinished && <span className="inline-block w-1 h-3 bg-emerald-500 animate-pulse ml-1" />}
                </div>
            </div>

            {/* 🚨 Notification ที่เผลอโผล่มา (มุมขวาล่าง) 🚨 */}
            {isFinished && (
                <div className="fixed top-6 right-6 w-72 bg-[#0c0c0c] border border-zinc-800 p-4 shadow-[0_0_30px_rgba(0,0,0,0.5)] animate-in slide-in-from-right-10 duration-500">
                    <div className="flex items-center gap-2 mb-2 border-b border-zinc-900 pb-2">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-ping" />
                        <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest">System Notification</span>
                    </div>
                    <p className="text-[11px] text-zinc-300 leading-tight italic font-light">
                        {shockMessage}
                    </p>
                    <div className="mt-3 text-[8px] text-zinc-700 text-right uppercase tracking-tighter">
                        Action required: None
                    </div>
                </div>
            )}

            <footer className="mt-8 text-[8px] text-zinc-900 uppercase tracking-[1em]">
                Accessing MSU Node-7
            </footer>
        </div>
    );
}