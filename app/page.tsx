'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);

  // State สำหรับเก็บรหัสที่เราสุ่มแกล้ง User ไว้
  const [requiredPass, setRequiredPass] = useState<string | null>(null);

  const chaoticPasswords = [
    "P@ssw0rd_Inw_Za_007",
    "12345678_Dog_Lover",
    "zagreus_fanboy_69",
    "admin_sood_lor",
    "i_love_javascript_555"
  ];

  const insults = [
    `รหัส "${pw}" เนี่ยนะ? นึกว่าเลขท้ายสองตัวงวดที่แล้ว กากเกิ๊น!`,
    `ใช้รหัส "${pw}"? ถามจริงพี่ชาย... แมวที่หอผมยังเดาถูกเลยนะแบบนี้`,
    `รหัสทรงนี้... หัวจะปวด ไม่มีความปลอดภัยเลยนะวัยรุ่น`,
    `รหัส "${pw}" คือที่สุดของความสิ้นคิดครับ ไปพักก่อนนนน`,
    `นี่รหัสผ่านหรือรหัสตู้ ATM ป้าข้างบ้านครับเนี่ย? "${pw}" มาเชียว`
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!id || !pw) return;
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      // เช็กว่า User พิมพ์รหัสที่เราสุ่มประจานไปหรือยัง
      if (requiredPass && pw === requiredPass) {
        // ถ้าพิมพ์ตรงกับที่สุ่มให้ -> ผ่าน!
        router.push('/dashboard');
      } else {
        // ถ้ายังไม่ตรง (หรือกดครั้งแรก) -> สุ่มด่าและบังคับรหัสใหม่
        const randomInsult = insults[Math.floor(Math.random() * insults.length)];
        const newFakeLeaked = chaoticPasswords[Math.floor(Math.random() * chaoticPasswords.length)];

        setRequiredPass(newFakeLeaked); // บันทึกรหัสที่ต้องพิมพ์ตาม
        setMsg(`${randomInsult}\n\nรหัสคุณมันกระจอกไป เอาตัวตึงตัวนี้ไปใช้แทนนะ: "${newFakeLeaked}" \n\n(พิมพ์ตามให้ถูกนะจ๊ะ เดี๋ยวจะหาว่าพี่ไม่เตือน)`);
      }
    }, 1200);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#050505] font-mono p-4 text-zinc-400">
      <div className="w-full max-w-sm border border-zinc-800 bg-[#0a0a0a] p-8 shadow-2xl">
        <header className="mb-8 border-b border-zinc-800 pb-4">
          <h1 className="text-xl text-white tracking-tighter">/AUTH/LOGIN</h1>
          <p className="text-[10px] text-zinc-600 uppercase mt-1">Sova Secure Gateway v4.0</p>
        </header>

        {msg && (
          <div className="mb-6 border border-red-900/50 bg-red-950/10 p-4 animate-in fade-in slide-in-from-top-1">
            <p className="text-[11px] text-red-500 leading-relaxed whitespace-pre-line uppercase font-bold">
              {msg}
            </p>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-[9px] text-zinc-600 uppercase tracking-widest">User ID</label>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="w-full bg-[#0d0d0d] border border-zinc-800 p-3 text-sm text-white focus:outline-none focus:border-zinc-500 transition-all"
              placeholder="Username / Email"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-[9px] text-zinc-600 uppercase tracking-widest">Security Key</label>
            <input
              type="password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              className="w-full bg-[#0d0d0d] border border-zinc-800 p-3 text-sm text-white focus:outline-none focus:border-zinc-500 transition-all"
              placeholder="••••••••"
            />
          </div>

          <button className="w-full border text-white border-zinc-700 py-3 hover:bg-white hover:text-black transition-all duration-300 text-[10px] uppercase font-bold tracking-widest">
            {loading ? 'Analyzing...' : (requiredPass ? 'Confirm Leaked Key' : 'Execute')}
          </button>
        </form>

        <footer className="mt-8 pt-4 border-t border-zinc-800 text-center">
          <Link href="/register" className="text-[9px] text-zinc-600 hover:text-zinc-300 transition-colors uppercase">
            Request Clearance
          </Link>
        </footer>
      </div>
    </div>
  );
}