import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageCircle,
  User,
  FileText,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Environment variables
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // EmailJS
  useEffect(() => {
    if (!window.emailjs) {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
      script.onload = () => {
        if (EMAILJS_PUBLIC_KEY) {
          window.emailjs.init(EMAILJS_PUBLIC_KEY);
        }
      };
      document.head.appendChild(script);
    }
  }, [EMAILJS_PUBLIC_KEY]);

  // Date and Time
  const getCurrentDateTime = () => {
    const now = new Date();
    const date = now.toLocaleDateString("tr-TR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    const time = now.toLocaleTimeString("tr-TR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    return { date, time };
  };

  // Phone Number
  const formatPhoneNumber = (value) => {
    const numbers = value.replace(/\D/g, "");
    const truncatedNumbers = numbers.slice(0, 10);

    if (truncatedNumbers.length === 0) return "";
    if (truncatedNumbers.length <= 3) return `(${truncatedNumbers}`;
    if (truncatedNumbers.length <= 6)
      return `(${truncatedNumbers.slice(0, 3)})-${truncatedNumbers.slice(3)}`;
    if (truncatedNumbers.length <= 8)
      return `(${truncatedNumbers.slice(0, 3)})-${truncatedNumbers.slice(
        3,
        6
      )}-${truncatedNumbers.slice(6)}`;
    return `(${truncatedNumbers.slice(0, 3)})-${truncatedNumbers.slice(
      3,
      6
    )}-${truncatedNumbers.slice(6, 8)}-${truncatedNumbers.slice(8)}`;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const formattedPhone = formatPhoneNumber(value);
      setFormData((prev) => ({
        ...prev,
        [name]: formattedPhone,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const sendEmail = async (e) => {
    if (e) e.preventDefault();
    setIsSubmitting(true);
    setFormStatus("");

    // Environment variables control
    if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
      setFormStatus("config-error");
      setIsSubmitting(false);
      return;
    }

    // Form validation
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.message.trim()
    ) {
      setFormStatus("error");
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus("email-error");
      setIsSubmitting(false);
      return;
    }

    // Phone validation
    const phoneNumbers = formData.phone.replace(/\D/g, "");
    if (phoneNumbers.length !== 10) {
      setFormStatus("phone-error");
      setIsSubmitting(false);
      return;
    }

    // Name validation
    if (formData.name.trim().split(" ").length < 2) {
      setFormStatus("name-error");
      setIsSubmitting(false);
      return;
    }

    try {
      if (!window.emailjs) {
        throw new Error("EmailJS yüklenmedi");
      }

      // CurrentTime
      const { date, time } = getCurrentDateTime();

      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        title: formData.subject || "Yeni İletişim Mesajı",
        message: formData.message,
        date: date,
        time: time,
      };

      await window.emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      setFormStatus("success");

      // Clean form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch {
      setFormStatus("submit-error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Telefon",
      content: [
        "+90 (532) 346 11 94",
        "+90 (544) 299-18-77",
        "+90 (532) 466-98-89",
      ],
      names: ["Erol Akyel", "Sultan Akyel", "Onur Akyel"],
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "E-posta",
      content: "info@akyel-turizm.com",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Adres",
      content: "Denizli Merkezefendi Mah. Atatürk Bulvarı No:123",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-500 to-red-600 text-white py-12 sm:py-16 md:py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              İletişim
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-red-100 px-4">
              Hizmetlerimiz hakkında bilgi almak için bizimle iletişime geçin
            </p>
          </div>
        </div>
      </section>

      <div className="px-7 sm:px-8 md:px-14 lg:px-20 xl:px-32">
        {/* Contact Info Cards */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto">
            <div className="text-center py-6 sm:py-8 md:py-10">
              <div className="flex justify-center items-center gap-2 mb-2">
                <div className="bg-red-500 p-1.5 sm:p-2 rounded-md">
                  <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <p className="uppercase tracking-widest text-red-600 font-semibold text-xs sm:text-sm md:text-base">
                  İLETİŞİM BİLGİLERİ
                </p>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 px-4">
                Bizimle İletişime Geçin
              </h2>
              <div className="flex justify-center mt-3 sm:mt-4 relative h-1">
                <span className="w-12 sm:w-16 h-1 bg-red-500 rounded-full " />
              </div>
              <p className="text-sm sm:text-base md:text-lg pt-3 text-gray-600 max-w-2xl mx-auto px-4">
                Öğrenci taşımacılığı hizmetlerimiz hakkında detaylı bilgi almak
                için aşağıdaki iletişim bilgilerini kullanabilirsiniz
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-red-200"
                >
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <div className="bg-red-500 p-2 sm:p-3 rounded-full text-white">
                      {info.icon}
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 text-center">
                    {info.title}
                  </h3>
                  <div className="text-center text-sm sm:text-base break-words">
                    {info.title === "Telefon" && Array.isArray(info.content) ? (
                      <div className="space-y-2">
                        {info.content.map((phone, phoneIndex) => (
                          <div
                            key={phoneIndex}
                            className="flex items-center justify-center gap-2"
                          >
                            <span className="text-black font-medium">
                              {info.names[phoneIndex]}
                            </span>
                            <span className="text-gray-500">-</span>
                            <span className="text-gray-600">{phone}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-600">{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="text-center py-6 sm:py-8 md:py-10">
                <div className="flex justify-center items-center gap-2 mb-2">
                  <div className="bg-red-500 p-1.5 sm:p-2 rounded-md">
                    <Send className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <p className="uppercase tracking-widest text-red-600 font-semibold text-xs sm:text-sm md:text-base">
                    İLETİŞİM FORMU
                  </p>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 px-4">
                  Bize Mesaj Gönderin
                </h2>
                <div className="flex justify-center mt-3 sm:mt-4 relative h-1">
                  <span className="w-12 sm:w-16 h-1 bg-red-500 rounded-full" />
                </div>
                <p className="text-sm sm:text-base md:text-lg pt-3 text-gray-600 max-w-2xl mx-auto px-4">
                  Öğrenci taşımacılığı hizmetlerimiz hakkında sorularınızı
                  iletişim formumuz aracılığıyla gönderebilirsiniz
                </p>
              </div>

              <div className="bg-white p-4 sm:p-6 md:p-8 lg:p-12 rounded-lg shadow-lg">
                <div className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Ad Soyad *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 pl-10 sm:pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors text-sm sm:text-base"
                          placeholder={
                            isMobile
                              ? "Ad Soyad"
                              : "Adınızı ve soyadınızı girin"
                          }
                          required
                        />
                        <User className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        E-posta *
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 pl-10 sm:pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors text-sm sm:text-base"
                          placeholder={
                            isMobile ? "E-posta" : "E-posta adresinizi girin"
                          }
                          required
                        />
                        <Mail className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Telefon *
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 pl-10 sm:pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors text-sm sm:text-base"
                          placeholder="(555)-555-55-55"
                          maxLength={15}
                          required
                        />
                        <Phone className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Konu
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 pl-10 sm:pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors text-sm sm:text-base"
                          placeholder={isMobile ? "Konu" : "Mesajınızın konusu"}
                        />
                        <FileText className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Mesaj *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors resize-none text-sm sm:text-base"
                      placeholder={
                        isMobile ? "Mesajınız..." : "Mesajınızı buraya yazın..."
                      }
                      required
                    />
                  </div>

                  {formStatus === "success" && (
                    <div className="flex items-start gap-3 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-green-700 text-sm sm:text-base">
                        Mesajınız başarıyla gönderildi! En kısa sürede size
                        dönüş yapacağız.
                      </span>
                    </div>
                  )}

                  {formStatus === "error" && (
                    <div className="flex items-start gap-3 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-red-700 text-sm sm:text-base">
                        Lütfen tüm zorunlu alanları doldurun.
                      </span>
                    </div>
                  )}

                  {formStatus === "email-error" && (
                    <div className="flex items-start gap-3 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-red-700 text-sm sm:text-base">
                        Lütfen geçerli bir e-posta adresi girin.
                      </span>
                    </div>
                  )}

                  {formStatus === "phone-error" && (
                    <div className="flex items-start gap-3 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-red-700 text-sm sm:text-base">
                        Lütfen 10 haneli geçerli bir telefon numarası girin.
                      </span>
                    </div>
                  )}

                  {formStatus === "name-error" && (
                    <div className="flex items-start gap-3 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-red-700 text-sm sm:text-base">
                        Lütfen ad ve soyadınızı tam olarak girin.
                      </span>
                    </div>
                  )}

                  {formStatus === "config-error" && (
                    <div className="flex items-start gap-3 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-red-700 text-sm sm:text-base">
                        E-posta servisi yapılandırması eksik. Lütfen sistem
                        yöneticisiyle iletişime geçin.
                      </span>
                    </div>
                  )}

                  {formStatus === "submit-error" && (
                    <div className="flex items-start gap-3 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-red-700 text-sm sm:text-base">
                        Mesaj gönderilirken bir hata oluştu. Lütfen tekrar
                        deneyin.
                      </span>
                    </div>
                  )}

                  <div className="text-center pt-2 sm:pt-4">
                    <button
                      type="button"
                      onClick={sendEmail}
                      disabled={isSubmitting}
                      className="w-full sm:w-auto bg-red-500 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-200 flex items-center justify-center gap-2 mx-auto disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white"></div>
                          <span>Gönderiliyor...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span>Mesaj Gönder</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-8 sm:py-12 md:py-16 bg-white">
          <div className="container mx-auto">
            <div className="text-center py-6 sm:py-8 md:py-10">
              <div className="flex justify-center items-center gap-2 mb-2">
                <div className="bg-red-500 p-1.5 sm:p-2 rounded-md">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <p className="uppercase tracking-widest text-red-600 font-semibold text-xs sm:text-sm md:text-base">
                  KONUM
                </p>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 px-4">
                Ofis Konumumuz
              </h2>
              <div className="flex justify-center mt-3 sm:mt-4 relative h-1">
                <span className="w-12 sm:w-16 h-1 bg-red-500 rounded-full" />
              </div>
              <p className="text-sm sm:text-base md:text-lg pt-3 text-gray-600 max-w-2xl mx-auto px-4">
                Denizli merkezinde bulunan ofisimize kolayca ulaşabilirsiniz
              </p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-2xl ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3152.921167070558!2d29.04807871149084!3d37.79188721105708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzfCsDQ3JzMwLjgiTiAyOcKwMDMnMDIuNCJF!5e0!3m2!1str!2str!4v1752345226662!5m2!1str!2str"
                width="100%"
                height="384"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-64 sm:h-80 md:h-96"
              />
            </div>
          </div>
        </section>
      </div>

      {/* Quick Contact CTA */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-red-500 to-red-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Hızlı İletişim İçin Bizi Arayın
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-red-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Acil durumlar ve hızlı bilgi almak için direkt telefon hattımızı
            kullanabilirsiniz
          </p>
          <div className="flex justify-center">
            <a
              href="tel:+903121234567"
              className="bg-white text-red-500 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>+905324669889</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
