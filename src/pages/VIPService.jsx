import React from "react";
import {
  Crown,
  Clock,
  Shield,
  Star,
  Coffee,
  Phone,
  MapPin,
  CheckCircle,
  Heart,
  UserCheck,
  Gift,
  Briefcase,
  Globe,
  Smartphone,
  Armchair,
  Gem,
  Trophy,
  Medal,
} from "lucide-react";
import { Link } from "react-router-dom";

const VIPService = () => {
  const vipFeatures = [
    {
      icon: <Crown className="w-8 h-8 text-red-500" />,
      title: "Premium Araçlar",
      description: "Premium araçlarla konforlu ve prestijli seyahat",
    },
    {
      icon: <UserCheck className="w-8 h-8 text-red-500" />,
      title: "Özel Şoför Hizmeti",
      description: "Deneyimli ve profesyonel şoförlerimizle güvenli yolculuk",
    },
    {
      icon: <Clock className="w-8 h-8 text-red-500" />,
      title: "7/24 Hizmet",
      description: "Gün boyu kesintisiz hizmet, istediğiniz saatte yanınızda",
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: "Maksimum Güvenlik",
      description: "Sigortalı araçlar ve güvenlik önlemleri ile tam güvence",
    },
  ];

  const luxuryServices = [
    {
      icon: <Armchair className="w-6 h-6 text-red-500" />,
      title: "Konfor Özellikleri",
      items: [
        "Deri koltuklar",
        "Klima kontrolü",
        "Masaj koltuğu",
        "Panoramik cam tavan",
        "Ambient ışıklandırma",
        "Ayak desteği",
      ],
    },
    {
      icon: <Smartphone className="w-6 h-6 text-red-500" />,
      title: "Teknoloji Donanımı",
      items: [
        "Wi-Fi bağlantısı",
        "Tablet/iPad",
        "Premium ses sistemi",
        "Kablosuz şarj",
        "USB-C portları",
        "Bluetooth bağlantı",
      ],
    },
    {
      icon: <Coffee className="w-6 h-6 text-red-500" />,
      title: "İkram Servisi",
      items: [
        "Soğuk içecekler",
        "Sıcak içecekler",
        "Atıştırmalık",
        "Meyve tabağı",
        "Çikolata",
        "Özel istekler",
      ],
    },
  ];

  const vipPackages = [
    {
      icon: <Trophy className="w-8 h-8 text-red-500" />,
      title: "Havaalanı Transfer",
      description: "Lüks araçlarla havaalanı transfer hizmeti",
      features: [
        "Uçuş takibi",
        "Karşılama tabelası",
        "Bagaj yardımı",
        "Bekleme süresi dahil",
        "VIP terminal servisi",
      ],
    },
    {
      icon: <Briefcase className="w-8 h-8 text-red-500" />,
      title: "İş Seyahatleri",
      description: "Profesyonel iş seyahatleriniz için VIP hizmet",
      features: [
        "Toplantı masası",
        "Wi-Fi ve şarj",
        "Sessiz ortam",
        "Özel güzergah",
        "Esnek program",
      ],
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Özel Günler",
      description: "Düğün, nişan gibi özel günleriniz için",
      features: [
        "Süslü araçlar",
        "Şampanya servisi",
        "Çiçek süslemesi",
        "Özel müzik",
        "Fotoğraf çekimi",
      ],
    },
    {
      icon: <Globe className="w-8 h-8 text-red-500" />,
      title: "Şehir Turları",
      description: "Rehberli lüks araçla şehir keşfi",
      features: [
        "Profesyonel rehber",
        "Esnek program",
        "Foto molası",
        "Öğle yemeği dahil",
        "Giriş ücretleri",
      ],
    },
  ];

  const whyChooseVIP = [
    "Lüks araç filosu ile prestijli seyahat",
    "Deneyimli ve profesyonel şoför hizmeti",
    "7/24 müşteri desteği ve rezervasyon",
    "Konforlu ve güvenli yolculuk garantisi",
    "Özel isteklere göre kişiselleştirilebilir hizmet",
    "Havaalanı VIP transfer hizmeti",
    "İş seyahatleri için özel donanım",
    "Temiz ve bakımlı araçlar",
    "Tam sigorta kapsamı",
    "Esnek ödeme seçenekleri",
    "Gizlilik ve mahremiyet garantisi",
    "Özel etkinlik organizasyonu",
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-500 to-red-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <Crown className="w-16 h-16 text-red-200" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              VIP Servis Hizmeti
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100">
              Lüks araçlarla prestijli ve konforlu seyahat deneyimi
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/iletisim"
                className="bg-white text-red-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Hemen Rezervasyon
              </Link>
              <button
                onClick={() => scrollToSection("vip-avantajlar")}
                className="cursor-pointer border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-500 transition-colors duration-200"
              >
                VIP Avantajları
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* VIP Features Section */}
      <section id="vip-avantajlar" className="py-20">
        <div className="container mx-auto px-7 sm:px-8 md:px-14 lg:px-20 xl:px-32">
          <div className="text-center py-10">
            <div className="flex justify-center items-center gap-2 mb-2">
              <div className="bg-red-500 p-2 rounded-md">
                <Star className="w-4 h-4 text-white" />
              </div>
              <p className="uppercase tracking-widest text-red-600 font-semibold text-md">
                VIP Hizmet
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              VIP Servis Avantajları
            </h1>

            <div className="flex justify-center mt-4 relative h-1">
              <span className="w-16 h-1 bg-red-500 rounded-full animate-move" />
            </div>

            <p className="text-lg pt-3 text-gray-600 max-w-2xl mx-auto">
              Lüks ve konforun buluştuğu özel hizmet deneyimi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vipFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-red-500"
              >
                <div className="flex justify-center mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-7 sm:px-8 md:px-14 lg:px-20 xl:px-32">
          <div className="text-center py-10">
            <div className="flex justify-center items-center gap-2 mb-2">
              <div className="bg-red-500 p-2 rounded-md">
                <Gem className="w-4 h-4 text-white" />
              </div>
              <p className="uppercase tracking-widest text-red-600 font-semibold text-md">
                Lüks Hizmetler
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              VIP Hizmet Detayları
            </h1>

            <div className="flex justify-center mt-4 relative h-1">
              <span className="w-16 h-1 bg-red-500 rounded-full animate-move" />
            </div>

            <p className="text-lg pt-3 text-gray-600 max-w-2xl mx-auto">
              Size özel hazırlanan lüks hizmet paketleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {luxuryServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  {service.icon}
                  <h3 className="text-lg font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-red-500" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIP Packages Section */}
      <section className="py-20">
        <div className="container mx-auto px-7 sm:px-8 md:px-14 lg:px-20 xl:px-32">
          <div className="text-center py-10">
            <div className="flex justify-center items-center gap-2 mb-2">
              <div className="bg-red-500 p-2 rounded-md">
                <Gift className="w-4 h-4 text-white" />
              </div>
              <p className="uppercase tracking-widest text-red-600 font-semibold text-md">
                VIP Paketler
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Özel Hizmet Paketleri
            </h1>

            <div className="flex justify-center mt-4 relative h-1">
              <span className="w-16 h-1 bg-red-500 rounded-full animate-move" />
            </div>

            <p className="text-lg pt-3 text-gray-600 max-w-2xl mx-auto">
              İhtiyaçlarınıza göre özel olarak hazırlanmış VIP paketler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vipPackages.map((pkg, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-red-200"
              >
                <div className="flex justify-center mb-6">{pkg.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  {pkg.title}
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  {pkg.description}
                </p>
                <ul className="space-y-2">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-red-500" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section - VIP Experience */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-7 sm:px-8 md:px-14 lg:px-20 xl:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-red-500 p-2 rounded-md">
                  <Crown className="w-4 h-4 text-white" />
                </div>
                <p className="uppercase tracking-widest text-red-600 font-semibold text-md">
                  VIP DENEYİM
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Lüks ve Konforun Buluşması
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                VIP servisimiz ile seyahat etmek sadece bir ulaşım değil, aynı
                zamanda bir deneyimdir. Profesyonel hizmetimiz, araç konforumuz
                ve özel ilgimizle size unutulmaz anlar yaşatıyoruz.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">Konforlu, lüks araçlar</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">
                    Profesyonel şoför hizmeti
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">
                    Wi-Fi ve teknoloji donanımı
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="VIP lüks araç"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section - 24/7 Service */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-7 sm:px-8 md:px-14 lg:px-20 xl:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-red-500 p-2 rounded-md">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <p className="uppercase tracking-widest text-red-600 font-semibold text-md">
                  7/24 HİZMET
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Kesintisiz VIP Hizmet
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                VIP müşterilerimiz için gece gündüz kesintisiz hizmet sunuyoruz.
                Acil durumlar, özel etkinlikler veya beklenmedik seyahat
                ihtiyaçlarınız için her zaman hazırız. Tek bir telefonla
                profesyonel hizmetimize ulaşın.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">
                    24 saat kesintisiz rezervasyon
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">Acil durum hizmetleri</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">Özel etkinlik desteği</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">
                    Hızlı müdahale garantisi
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="24/7 VIP hizmet"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose VIP Section */}
      <section className="py-20">
        <div className="container mx-auto px-7 sm:px-8 md:px-14 lg:px-20 xl:px-32">
          <div className="text-center py-10">
            <div className="flex justify-center items-center gap-2 mb-2">
              <div className="bg-red-500 p-2 rounded-md">
                <Medal className="w-4 h-4 text-white" />
              </div>
              <p className="uppercase tracking-widest text-red-600 font-semibold text-md">
                Tercih Sebebi
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Neden VIP Servisimizi Tercih Edin?
            </h1>

            <div className="flex justify-center mt-4 relative h-1">
              <span className="w-16 h-1 bg-red-500 rounded-full animate-move" />
            </div>

            <p className="text-lg pt-3 text-gray-600 max-w-2xl mx-auto">
              Lüks, konfor ve güvenilirlik arayışınızda doğru adrestesiniz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {whyChooseVIP.map((reason, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <CheckCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-br from-red-500 to-red-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-7 sm:px-8 md:px-14 lg:px-20 xl:px-32 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            VIP Deneyimi İçin Hemen Rezervasyon Yapın
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Lüks araçlar, profesyonel hizmet ve unutulmaz deneyim için bize
            ulaşın
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/iletisim"
              className="bg-white text-red-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Hemen Rezervasyon
            </Link>
            <Link
              to="/iletisim"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-500 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              Özel Teklif Al
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VIPService;
