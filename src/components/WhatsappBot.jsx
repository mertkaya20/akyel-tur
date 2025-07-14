import React, { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const WhatsappBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Telephone number and message
  const phoneNumber = "905324669889";
  const message = "Merhaba! Size nasıl yardımcı olabilirim?";

  const handleWhatsAppClick = () => {
    // WhatsApp Web/App URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
    setIsOpen(false);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 z-40 bg-white rounded-2xl shadow-2xl border border-gray-200 w-80 max-w-[calc(100vw-2rem)] animate-in slide-in-from-bottom-5 fade-in duration-300">
          {/* Header */}
          <div className="bg-green-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Onur Akyel</h3>
                <p className="text-xs text-green-100">Destek Hattı</p>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="text-white hover:bg-green-700 rounded-full p-1 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Content */}
          <div className="p-4 space-y-4">
            {/* Bot Message */}
            <div className="flex items-start space-x-2">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-4 h-4 text-green-600" />
              </div>
              <div className="bg-gray-100 rounded-lg rounded-tl-none p-3 max-w-[70%]">
                <p className="text-sm text-gray-800">
                  Merhaba! Size nasıl yardımcı olabilirim? WhatsApp üzerinden
                  sohbete devam etmek için aşağıdaki butona tıklayın.
                </p>
              </div>
            </div>

            {/* Contact fast info */}
            <div className="bg-green-50 rounded-lg p-3 border border-green-200">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs font-medium text-green-700">
                  Hızlı İletişim
                </span>
              </div>
              <p className="text-sm text-green-600">
                WhatsApp üzerinden bize ulaşın, size en kısa sürede yardımcı
                olalım.
              </p>
            </div>

            {/* Keep going on whatsapp */}
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <Send className="w-4 h-4" />
              <span>WhatsApp'ta Devam Et</span>
            </button>
          </div>
        </div>
      )}

      {/* Whatsapp Button - Position */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={toggleChat}
          className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 relative"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.512z" />
            </svg>
          )}

          {/* Online */}
          {!isOpen && (
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
          )}
        </button>
      </div>
    </>
  );
};

export default WhatsappBot;
