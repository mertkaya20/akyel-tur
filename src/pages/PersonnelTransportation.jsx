import React from "react";
import {
  Users,
  Building,
  Clock,
  Shield,
  Star,
  Wifi,
  Coffee,
  Phone,
  MapPin,
  CheckCircle,
  Calendar,
  Award,
  Route,
  MessageCircle,
  Zap,
  Navigation,
  Briefcase,
  Globe,
  ThumbsUp,
  Target,
  Car,
  Settings,
  UserCheck,
  Smartphone,
  AirVent,
  Headphones,
  Gift,
  Medal,
  Trophy,
  Compass,
  Heart,
  PlaneTakeoff,
  Utensils,
  Sparkles,
} from "lucide-react";
// import { Link } from "react-router-dom";

const PersonnelTransport = () => {
  const corporateFeatures = [
    {
      icon: <Users className="w-8 h-8 text-red-500" />,
      title: "Grup Taşımacılığı",
      description: "Personel gruplarınız için güvenli ve konforlu toplu taşıma",
    },
    {
      icon: <Building className="w-8 h-8 text-red-500" />,
      title: "Kurumsal Çözümler",
      description:
        "İşletmenizin ihtiyaçlarına özel tasarlanmış taşıma planları",
    },
    {
      icon: <Clock className="w-8 h-8 text-red-500" />,
      title: "Düzenli Servisler",
      description: "Günlük, haftalık ve aylık düzenli personel servisi",
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: "Güvenlik Önceliği",
      description:
        "Lisanslı şoförler ve tam sigortalı araçlarla güvenli yolculuk",
    },
  ];

  const transportServices = [
    {
      icon: <Car className="w-6 h-6 text-red-500" />,
      title: "Araç Filosu",
      items: [
        "Lüks otobüsler",
        "Minibüsler",
        "Midibüsler",
        "VIP araçlar",
        "Klimasız araçlar",
        "Engelli dostu araçlar",
      ],
    },
    {
      icon: <Route className="w-6 h-6 text-red-500" />,
      title: "Güzergah Planlaması",
      items: [
        "Optimum rota belirleme",
        "Trafik analizi",
        "Alternatif güzergahlar",
        "Durak noktaları",
        "Zaman hesaplama",
        "GPS takip sistemi",
      ],
    },
    {
      icon: <Settings className="w-6 h-6 text-red-500" />,
      title: "Özel Hizmetler",
      items: [
        "Özel durak noktaları",
        "Esnek saatler",
        "Acil durum servisi",
        "Özel etkinlik taşıma",
        "Havaalanı transferi",
        "Misafir taşıma",
      ],
    },
  ];

  const corporatePackages = [
    {
      icon: <Briefcase className="w-8 h-8 text-red-500" />,
      title: "Günlük Servis",
      description: "Ev-iş arası günlük personel taşıma hizmeti",
      features: [
        "Sabah-akşam servisi",
        "Esnek saatler",
        "Birden fazla durak",
        "Hafta içi hizmet",
        "Klimalı araçlar",
      ],
    },
    {
      icon: <Building className="w-8 h-8 text-red-500" />,
      title: "Kurumsal Paket",
      description: "Büyük şirketler için özel tasarlanmış hizmet",
      features: [
        "Aylık sözleşme",
        "Özel filo tahsisi",
        "Yedek araç garantisi",
        "Raporlama sistemi",
        "Esnek ödeme",
      ],
    },
    {
      icon: <Calendar className="w-8 h-8 text-red-500" />,
      title: "Etkinlik Taşıma",
      description: "Kurumsal etkinlikler için özel taşıma",
      features: [
        "Seminer-toplantı",
        "Gezi organizasyonu",
        "Rehberli turlar",
        "Grup aktiviteleri",
        "Özel program",
      ],
    },
    {
      icon: <Globe className="w-8 h-8 text-red-500" />,
      title: "Şehirler Arası",
      description: "Farklı şehirler arası personel taşıma",
      features: [
        "Konforlu yolculuk",
        "Dinlenme molaları",
        "İkram servisi",
        "Wi-Fi bağlantısı",
        "Güvenli seyahat",
      ],
    },
  ];

  const whyChooseCorporate = [
    "Profesyonel ve deneyimli şoför kadrosu",
    "Modern ve bakımlı araç filosu",
    "Esnek hizmet saatleri ve güzergahları",
    "Kurumsal faturalama ve raporlama",
    "7/24 müşteri desteği ve operasyon",
    "Personel güvenliği ve konfor önceliği",
    "Maliyet etkin toplu taşıma çözümleri",
    "Çevreci ve yakıt tasarruflu araçlar",
    "Tam sigorta kapsamı ve güvenlik",
    "Özel isteklere göre kişiselleştirme",
    "Düzenli bakım ve temizlik",
    "Teknolojik takip ve yönetim sistemi",
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
              <Users className="w-16 h-16 text-red-200" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Personel Taşımacılığı
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100">
              Kurumsal personel taşıma hizmetleri ile güvenli ve konforlu
              seyahat
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/iletisim"
                className="bg-white text-red-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Hemen Teklif Al
              </a>
              <button
                onClick={() => scrollToSection("kurumsal-avantajlar")}
                className="cursor-pointer border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-500 transition-colors duration-200"
              >
                Kurumsal Avantajlar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Features Section */}
      <section id="kurumsal-avantajlar" className="py-20">
        <div className="container mx-auto px-7 sm:px-8 md:px-14 lg:px-20 xl:px-32">
          <div className="text-center py-10">
            <div className="flex justify-center items-center gap-2 mb-2">
              <div className="bg-red-500 p-2 rounded-md">
                <Star className="w-4 h-4 text-white" />
              </div>
              <p className="uppercase tracking-widest text-red-600 font-semibold text-md">
                Kurumsal Hizmet
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Kurumsal Taşıma Avantajları
            </h1>

            <div className="flex justify-center mt-4 relative h-1">
              <span className="w-16 h-1 bg-red-500 rounded-full animate-move" />
            </div>

            <p className="text-lg pt-3 text-gray-600 max-w-2xl mx-auto">
              Profesyonel personel taşıma çözümleri ile işletmenizin
              verimliliğini artırın
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {corporateFeatures.map((feature, index) => (
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

      {/* Transport Services Section */}
      <section className="py-20 ">
        <div className="container mx-auto px-7 sm:px-8 md:px-14 lg:px-20 xl:px-32">
          <div className="text-center py-10">
            <div className="flex justify-center items-center gap-2 mb-2">
              <div className="bg-red-500 p-2 rounded-md">
                <Settings className="w-4 h-4 text-white" />
              </div>
              <p className="uppercase tracking-widest text-red-600 font-semibold text-md">
                Hizmet Detayları
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Taşıma Hizmet Özellikleri
            </h1>

            <div className="flex justify-center mt-4 relative h-1">
              <span className="w-16 h-1 bg-red-500 rounded-full animate-move" />
            </div>

            <p className="text-lg pt-3 text-gray-600 max-w-2xl mx-auto">
              Kurumsal ihtiyaçlarınıza özel hazırlanmış taşıma çözümleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transportServices.map((service, index) => (
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

      {/* Corporate Packages Section */}
      <section className="py-20">
        <div className="container mx-auto px-7 sm:px-8 md:px-14 lg:px-20 xl:px-32">
          <div className="text-center py-10">
            <div className="flex justify-center items-center gap-2 mb-2">
              <div className="bg-red-500 p-2 rounded-md">
                <Gift className="w-4 h-4 text-white" />
              </div>
              <p className="uppercase tracking-widest text-red-600 font-semibold text-md">
                Hizmet Paketleri
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Kurumsal Taşıma Paketleri
            </h1>

            <div className="flex justify-center mt-4 relative h-1">
              <span className="w-16 h-1 bg-red-500 rounded-full animate-move" />
            </div>

            <p className="text-lg pt-3 text-gray-600 max-w-2xl mx-auto">
              Şirketinizin büyüklüğü ve ihtiyaçlarına göre özel paketler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {corporatePackages.map((pkg, index) => (
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

      {/* Image Section - Corporate Transportation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-7 sm:px-8 md:px-14 lg:px-20 xl:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-red-500 p-2 rounded-md">
                  <Building className="w-4 h-4 text-white" />
                </div>
                <p className="uppercase tracking-widest text-red-600 font-semibold text-md">
                  KURUMSAL ÇÖZÜM
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Profesyonel Personel Taşımacılığı
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                İşletmenizin personel taşıma ihtiyaçlarını karşılamak için özel
                olarak tasarlanmış hizmetlerimiz ile çalışanlarınızın konforlu
                ve güvenli seyahat etmesini sağlıyoruz. Düzenli servislerimiz
                ile işletmenizin verimliliğini artırın.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">
                    Modern ve konforlu araç filosu
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">
                    Deneyimli ve güvenilir şoför kadrosu
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">
                    Esnek güzergah ve zaman planlaması
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                  alt="Kurumsal personel taşımacılığı"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section - Safety & Comfort */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-7 sm:px-8 md:px-14 lg:px-20 xl:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-red-500 p-2 rounded-md">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <p className="uppercase tracking-widest text-red-600 font-semibold text-md">
                  GÜVENLİK & KONFOR
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Güvenlik ve Konfor Önceliğimiz
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Personel taşımacılığında en önemli unsur güvenliktir. Tüm
                araçlarımız düzenli bakımdan geçer, şoförlerimiz profesyonel
                eğitimlerle donatılır. Çalışanlarınızın güvenliği bizim için
                öncelik, konforlu yolculuk ise garantimizdir.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">
                    Düzenli araç bakım ve kontrolleri
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">
                    Lisanslı ve eğitimli şoförler
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">Tam sigorta kapsamı</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">
                    GPS takip ve güvenlik sistemi
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80"
                  alt="Güvenli personel taşımacılığı"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Corporate Section */}
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
              Neden Bizi Tercih Etmelisiniz?
            </h1>

            <div className="flex justify-center mt-4 relative h-1">
              <span className="w-16 h-1 bg-red-500 rounded-full animate-move" />
            </div>

            <p className="text-lg pt-3 text-gray-600 max-w-2xl mx-auto">
              Kurumsal personel taşımacılığında güvenilir ortağınızız
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {whyChooseCorporate.map((reason, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
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
            Kurumsal Personel Taşımacılığı İçin Hemen İletişime Geçin
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Özel teklif almak ve detaylı bilgi için bize ulaşın. Ücretsiz keşif
            ve danışmanlık hizmeti
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/iletisim"
              className="bg-white text-red-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Hemen İletişime Geç
            </a>
            <a
              href="/iletisim"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-500 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              Ücretsiz Teklif Al
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PersonnelTransport;
