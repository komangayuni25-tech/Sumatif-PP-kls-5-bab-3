import React, { useState } from 'react';
import { CONFIG } from '../config';
import { ExamResult, Question } from '../types';
import { downloadStudentResultPDF } from '../utils/pdfGenerator';
import {
  X,
  Download,
  User,
  Calendar,
  Hash,
  Award,
  CheckCircle2,
  XCircle,
  Copy,
  Check,
  FileText,
  ListChecks,
  AlertCircle,
} from 'lucide-react';

interface StudentDetailModalProps {
  result: ExamResult | null;
  questions?: Question[];
  isOpen: boolean;
  onClose: () => void;
}

export const StudentDetailModal: React.FC<StudentDetailModalProps> = ({
  result,
  questions = [],
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'ringkasan' | 'jawaban'>('ringkasan');
  const [isCopied, setIsCopied] = useState(false);

  if (!isOpen || !result) return null;

  const isPass = result.status === 'Lulus' || result.nilai >= CONFIG.KKTP;

  // Handler salin seluruh teks jawaban ke clipboard
  const handleCopyAnswersText = () => {
    let copyText = `LEMBAR HASIL JAWABAN SISWA\n`;
    copyText += `Nama Siswa: ${result.nama}\n`;
    copyText += `Nomor Absen: ${result.noAbsen}\n`;
    copyText += `Kelas: ${result.kelas || CONFIG.KELAS}\n`;
    copyText += `Mata Pelajaran: ${CONFIG.MATA_PELAJARAN}\n`;
    copyText += `Nilai Akhir: ${result.nilai} (${result.status}) | Benar: ${result.benar} | Salah: ${result.salah}\n`;
    copyText += `Waktu: ${result.timestamp}\n\n`;
    copyText += `RINCIAN JAWABAN TIAP NOMOR:\n`;

    if (result.teksJawaban) {
      copyText += result.teksJawaban.split(' | ').join('\n');
    } else if (result.detailJawaban) {
      for (const k in result.detailJawaban) {
        copyText += `No ${k}: ${JSON.stringify(result.detailJawaban[k])}\n`;
      }
    } else {
      copyText += `(Teks rincian jawaban belum tersedia pada data tes versi terdahulu)`;
    }

    navigator.clipboard.writeText(copyText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  // Parse item rincian jika ada teksJawaban
  const textItems = result.teksJawaban ? result.teksJawaban.split(' | ') : [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-slate-200 relative max-h-[92vh] flex flex-col">
        {/* Header Modal */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 leading-tight">{result.nama}</h3>
              <p className="text-xs text-slate-500">
                Absen {result.noAbsen} • Kelas {result.kelas || CONFIG.KELAS} • {CONFIG.SEKOLAH}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigasi */}
        <div className="flex items-center gap-2 pt-3 pb-1 border-b border-slate-100 shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab('ringkasan')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'ringkasan'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>Ringkasan Nilai</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('jawaban')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'jawaban'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <ListChecks className="w-3.5 h-3.5" />
            <span>Teks Hasil Jawaban Siswa</span>
            {textItems.length > 0 && (
              <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-blue-100 text-blue-800 font-extrabold">
                {textItems.length}
              </span>
            )}
          </button>
        </div>

        {/* Modal Body Scrollable */}
        <div className="overflow-y-auto py-4 space-y-4 text-xs sm:text-sm text-slate-700 flex-1 pr-1">
          {/* TAB 1: RINGKASAN */}
          {activeTab === 'ringkasan' && (
            <div className="space-y-4">
              {/* Nilai Box */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500 block">Nilai Tes Sumatif</span>
                  <span className="text-xs text-slate-400">Standar KKTP: {CONFIG.KKTP}</span>
                </div>
                <div className="text-right">
                  <span
                    className={`text-3xl sm:text-4xl font-black block ${
                      isPass ? 'text-emerald-600' : 'text-amber-600'
                    }`}
                  >
                    {result.nilai}
                  </span>
                  <span
                    className={`inline-block text-[11px] font-bold px-2 py-0.5 rounded-full ${
                      isPass ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {result.status}
                  </span>
                </div>
              </div>

              {/* Grid Benar / Salah */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200">
                  <div className="flex items-center gap-1.5 text-emerald-800 font-bold text-xs mb-1">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Jawaban Benar</span>
                  </div>
                  <span className="text-2xl font-black text-emerald-900">{result.benar} Soal</span>
                </div>
                <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200">
                  <div className="flex items-center gap-1.5 text-rose-800 font-bold text-xs mb-1">
                    <XCircle className="w-4 h-4" />
                    <span>Jawaban Salah</span>
                  </div>
                  <span className="text-2xl font-black text-rose-900">{result.salah} Soal</span>
                </div>
              </div>

              {/* Meta Info */}
              <div className="space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-3">
                <div className="flex justify-between">
                  <span className="text-slate-400">Mata Pelajaran:</span>
                  <span className="font-semibold text-slate-800">{CONFIG.MATA_PELAJARAN}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Materi Pokok:</span>
                  <span className="font-semibold text-slate-800">{CONFIG.MATERI}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Waktu Pengerjaan:</span>
                  <span className="font-medium text-slate-800">{result.timestamp}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Tanggal Lahir:</span>
                  <span className="font-medium text-slate-800">{result.tglLahir || '-'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Satuan Pendidikan:</span>
                  <span className="font-medium text-slate-800">{CONFIG.SEKOLAH}</span>
                </div>
              </div>

              {/* Status Teks Jawaban */}
              <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 flex items-start gap-2.5">
                <FileText className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                <div className="text-xs text-blue-900 flex-1">
                  <p className="font-bold">Teks Jawaban Siswa Siap Diperiksa</p>
                  <p className="mt-0.5 text-slate-600">
                    Klik tab <strong>"Teks Hasil Jawaban Siswa"</strong> di atas untuk melihat rincian teks jawaban tiap butir soal atau menyalinnya.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: TEKS HASIL JAWABAN SISWA */}
          {activeTab === 'jawaban' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                <span className="text-xs font-bold text-slate-700">
                  Daftar Pilihan &amp; Jawaban Siswa
                </span>
                <button
                  type="button"
                  onClick={handleCopyAnswersText}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-blue-700 bg-white hover:bg-blue-50 rounded-lg border border-blue-200 shadow-2xs transition-all cursor-pointer"
                >
                  {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{isCopied ? 'Teks Berhasil Disalin!' : 'Salin Teks Jawaban'}</span>
                </button>
              </div>

              {/* Tampilkan rincian soal */}
              {textItems.length > 0 ? (
                <div className="space-y-2">
                  {textItems.map((itemStr, idx) => {
                    const isBenar = itemStr.includes('BENAR') || itemStr.includes('✓');
                    return (
                      <div
                        key={idx}
                        className={`p-2.5 rounded-xl border text-xs flex items-start gap-2.5 ${
                          isBenar
                            ? 'bg-emerald-50/50 border-emerald-200 text-slate-800'
                            : 'bg-rose-50/50 border-rose-200 text-slate-800'
                        }`}
                      >
                        <span
                          className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-[11px] shrink-0 ${
                            isBenar ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
                          }`}
                        >
                          {idx + 1}
                        </span>
                        <div className="flex-1 leading-relaxed">
                          <p className="font-medium">{itemStr}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : result.detailJawaban ? (
                <div className="space-y-2">
                  {Object.entries(result.detailJawaban).map(([qNum, ansVal]) => (
                    <div key={qNum} className="p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs">
                      <span className="font-bold text-blue-700 mr-2">Soal No. {qNum}:</span>
                      <span className="font-medium text-slate-800">
                        {typeof ansVal === 'object' ? JSON.stringify(ansVal) : String(ansVal)}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs text-center space-y-1">
                  <AlertCircle className="w-5 h-5 mx-auto text-amber-600 mb-1" />
                  <p className="font-bold">Teks Rincian Jawaban Belum Tersedia Pada Baris Ini</p>
                  <p className="text-[11px] text-amber-800">
                    Data siswa ini dikirimkan sebelum pembaruan kolom teks jawaban. Untuk setiap pengerjaan tes baru, teks jawaban lengkap nomor 1 s.d. 45 akan otomatis tercatat dan muncul di kolom ke-11 Google Spreadsheet serta di panel ini.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2 shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={() => downloadStudentResultPDF(result)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors shadow-xs cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Unduh Lembar Hasil (PDF)</span>
            </button>
            <button
              type="button"
              onClick={handleCopyAnswersText}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors border border-slate-300 cursor-pointer"
            >
              <Copy className="w-3.5 h-3.5 text-slate-600" />
              <span>{isCopied ? 'Tersalin' : 'Salin Teks'}</span>
            </button>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
