import React, { useState } from 'react';
import { GAS_SCRIPT_TEMPLATE } from '../services/gasService';
import { CONFIG } from '../config';
import { X, Copy, Check, ExternalLink, Code2, AlertCircle } from 'lucide-react';

interface GasGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GasGuideModal: React.FC<GasGuideModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(GAS_SCRIPT_TEMPLATE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-3xl w-full p-6 shadow-2xl border border-slate-200 relative max-h-[90vh] flex flex-col">
        {/* Header Modal */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Panduan Integrasi Google Apps Script
              </h3>
              <p className="text-xs text-slate-500">
                Langkah menghubungkan Google Spreadsheet sebagai sumber data utama
              </p>
            </div>
          </div>
          <button
            id="btn-close-gas-guide"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Konten Scrollable */}
        <div className="overflow-y-auto py-4 space-y-4 text-xs sm:text-sm text-slate-700 pr-1">
          {/* Info URL Aktif */}
          <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 text-xs">
            <span className="font-bold block mb-1">URL Endpoint Google Apps Script Terpasang:</span>
            <code className="font-mono text-[11px] break-all bg-white px-2 py-1 rounded border border-blue-200 block text-blue-800">
              {CONFIG.GOOGLE_APPS_SCRIPT_URL}
            </code>
          </div>

          {/* Langkah demi langkah */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
              Langkah Konfigurasi / Pembaruan di Google Spreadsheet:
            </h4>
            <ol className="list-decimal list-inside space-y-2.5 text-xs leading-relaxed text-slate-600">
              <li>
                Buka <strong className="text-slate-800">Google Spreadsheet</strong> Anda yang terhubung dengan ujian ini.
              </li>
              <li>
                Header kolom pada baris 1 (A1 s.d. K1):
                <div className="mt-1.5 p-2 bg-slate-100 rounded-lg font-mono text-[10.5px] text-slate-800 overflow-x-auto whitespace-nowrap">
                  A1: Timestamp | B1: Nama | C1: Kelas | D1: Nomor Absen | E1: Tanggal Lahir | F1: Benar | G1: Salah | H1: Nilai | I1: Status | J1: Mata Pelajaran | K1: Teks Jawaban Siswa
                </div>
                <p className="mt-1 text-[11px] text-blue-700 font-medium">
                  * Catatan: Skrip terbaru di bawah akan otomatis menambahkan kolom <strong>K1 (Teks Jawaban Siswa)</strong> jika belum ada di spreadsheet Anda.
                </p>
              </li>
              <li>
                Klik menu <strong className="text-slate-800">Ekstensi (Extensions)</strong> &gt; <strong className="text-slate-800">Apps Script</strong>.
              </li>
              <li>
                Hapus semua kode lama di editor, lalu klik tombol <strong>"Salin Skrip"</strong> di bawah dan tempelkan ke editor Apps Script.
              </li>
              <li>
                Klik ikon <strong className="text-slate-800">Simpan (Ctrl+S / Ikon Disket)</strong>.
              </li>
              <li>
                Jika sudah pernah deploy: Klik <strong className="text-slate-800">Terapkan (Deploy)</strong> &gt; <strong className="text-slate-800">Kelola Penerapan (Manage Deployments)</strong> &gt; Klik ikon <strong>Pensil (Edit)</strong> &gt; Pada opsi <em>Versi (Version)</em> pilih <strong>"Versi Baru" (New Version)</strong> &gt; Klik <strong>Terapkan (Deploy)</strong>.
              </li>
              <li>
                Jika baru pertama kali: Klik <strong className="text-slate-800">Terapkan</strong> &gt; <strong className="text-slate-800">Penerapan Baru</strong> &gt; Jenis <strong>Aplikasi Web</strong> &gt; Akses: <strong className="text-emerald-700">Siapa saja (Anyone)</strong>.
              </li>
            </ol>
          </div>

          {/* Box Kode Skrip */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold text-slate-800">
                Kode Lengkap Google Apps Script (doGet &amp; doPost):
              </span>
              <button
                id="btn-copy-gas-script"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Tersalin!' : 'Salin Skrip'}</span>
              </button>
            </div>
            <pre className="p-3 bg-slate-900 text-slate-100 rounded-xl font-mono text-[11px] overflow-x-auto max-h-56 leading-normal">
              {GAS_SCRIPT_TEMPLATE}
            </pre>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-slate-200 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
