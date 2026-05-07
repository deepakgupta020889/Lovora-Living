import React, { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';

// Declaration to avoid TS errors since we are using CDN
declare global {
  interface Window {
    html2canvas: any;
  }
}

export const DownloadFab: React.FC = () => {
  const [isCapturing, setIsCapturing] = useState(false);

  const handleDownload = async () => {
    if (!window.html2canvas) {
      alert("HTML2Canvas library not loaded yet.");
      return;
    }

    setIsCapturing(true);

    try {
      const element = document.body;
      const canvas = await window.html2canvas(element, {
        useCORS: true, // Important for images from Unsplash
        scale: 2, // Retina quality
        backgroundColor: '#000000', // Match theme background (Pure Black)
      });

      // Add Watermark
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.save();
        const fontSize = 40;
        ctx.font = `italic ${fontSize}px 'Playfair Display'`;
        ctx.fillStyle = '#d4af37'; // Classic Metallic Gold
        ctx.textAlign = 'right';
        ctx.textBaseline = 'bottom';
        ctx.fillText('Novara Living Portfolio', canvas.width - 50, canvas.height - 50);
        ctx.restore();
      }

      // Trigger Download
      const link = document.createElement('a');
      link.download = 'Novara-Portfolio.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error("Screenshot failed:", error);
      alert("Could not capture portfolio. Please try again.");
    } finally {
      setIsCapturing(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isCapturing}
      className="fixed bottom-8 left-8 z-50 bg-luxury-gold text-luxury-dark p-4 rounded-full shadow-2xl hover:bg-white transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
      title="Download Portfolio as Image"
    >
      {isCapturing ? (
        <Loader2 className="animate-spin" size={24} />
      ) : (
        <Download size={24} className="group-hover:scale-110 transition-transform" />
      )}
    </button>
  );
};