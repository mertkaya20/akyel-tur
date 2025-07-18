import React from "react";
import {
  Shield,
  Clock,
  Users,
  CheckCircle,
  Phone,
  MapPin,
  Award,
  Star,
  School,
  Bus,
  Heart,
  Navigation,
  UserCheck,
  Route,
  Medal,
  Gift,
} from "lucide-react";
import { Link } from "react-router-dom";

const StudentTransportation = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: "Güvenli Taşımacılık",
      description:
        "Deneyimli şoförlerimiz ve güvenlik önlemlerimizle çocuklarınız güvende",
    },
    {
      icon: <Clock className="w-8 h-8 text-red-500" />,
      title: "Zamanında Servis",
      description: "Öğrencilerinizi her zaman zamanında okula ve eve götürürüz",
    },
    {
      icon: <Users className="w-8 h-8 text-red-500" />,
      title: "Profesyonel Hizmet",
      description:
        "Yılların tecrübesi ile güvenilir ve kaliteli hizmet anlayışı",
    },
    {
      icon: <Award className="w-8 h-8 text-red-500" />,
      title: "Lisanslı Filo",
      description: "Tam lisanslı ve sigortalı araç filosu ile hizmet sunuyoruz",
    },
  ];

  const safetyServices = [
    {
      icon: <Shield className="w-6 h-6 text-red-500" />,
      title: "Güvenlik Önlemleri",
      items: [
        "GPS takip sistemi",
        "Emniyet kemeri kontrolü",
        "Acil durum protokolleri",
        "Düzenli araç bakımları",
        "Güvenlik kameraları",
        "İlk yardım çantası",
      ],
    },
    {
      icon: <UserCheck className="w-6 h-6 text-red-500" />,
      title: "Şoför Yetkinlikleri",
      items: [
        "Deneyimli şoförler",
        "Güvenlik eğitimleri",
        "Sabıka kaydı kontrolü",
        "İlk yardım sertifikası",
        "Düzenli sağlık kontrolü",
        "Pedagoji eğitimi",
      ],
    },
    {
      icon: <Route className="w-6 h-6 text-red-500" />,
      title: "Operasyonel Hizmet",
      items: [
        "Esnek güzergah planı",
        "Zamanında servis",
        "Veli bilgilendirme",
        "Acil durum iletişimi",
        "Hava durumu takibi",
        "Trafik optimizasyonu",
      ],
    },
  ];

  const servicePackages = [
    {
      icon: <Bus className="w-8 h-8 text-red-500" />,
      title: "Standart Servis",
      description: "Günlük okul servisi hizmetleri",
      features: [
        "Sabah ve akşam servisi",
        "Güvenli araç filosu",
        "Deneyimli şoför",
        "GPS takip",
        "Veli bilgilendirme",
      ],
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Özel Bakım",
      description: "Özel gereksinimli öğrenciler için",
      features: [
        "Özel donanımlı araçlar",
        "Eğitimli personel",
        "Birebir ilgi",
        "Özel güzergah",
        "Sağlık takibi",
      ],
    },
    {
      icon: <Star className="w-8 h-8 text-red-500" />,
      title: "Premium Hizmet",
      description: "Lüks araçlarla özel hizmet",
      features: [
        "Lüks araç filosu",
        "Klima sistemi",
        "Konforlu koltuklar",
        "Wi-Fi bağlantısı",
        "Özel güzergah",
      ],
    },
    {
      icon: <Navigation className="w-8 h-8 text-red-500" />,
      title: "Gezi Organizasyonu",
      description: "Okul gezileri için özel hizmet",
      features: [
        "Büyük araç kapasitesi",
        "Uzun mesafe servisi",
        "Rehber eşliği",
        "Güvenlik önlemleri",
        "Acil durum desteği",
      ],
    },
  ];

  const whyChooseUs = [
    "Tam lisanslı ve sigortalı araç filosu",
    "Deneyimli ve güvenilir şoför kadromuz",
    "Düzenli araç bakım ve kontrolleri",
    "Uygun fiyatlarla kaliteli hizmet",
    "7/24 müşteri desteği",
    "Esnek güzergah planlaması",
    "GPS takip sistemi",
    "Acil durum protokolleri",
    "Veli bilgilendirme sistemi",
    "Pedagoji eğitimi almış personel",
    "Özel gereksinimli öğrenci desteği",
    "Okul yönetimiyle koordinasyon",
  ];

  const schools = [
    "Şehit Burak Erten İlkokulu",
    "Vali Recep Yazıcıoğlu İlkokulu",
    "Türkiye Odalar ve Borsalar Birliği Ortaokulu",
    "Abalıoğlu Yem Sanayi Ortaokulu",
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
              <Bus className="w-16 h-16 text-red-200" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Okul Servisi
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100">
              Güvenli, konforlu ve zamanında öğrenci taşımacılığı hizmetleri
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/iletisim"
                className="bg-white text-red-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Hemen Teklif Alın
              </Link>
              <button
                onClick={() => scrollToSection("okul-servisi-ozellikleri")}
                className="cursor-pointer border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-500 transition-colors duration-200"
              >
                Detaylı Bilgi
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="okul-servisi-ozellikleri" className="py-20">
        <div className="container mx-auto px-7 sm:px-8 md:px-14 lg:px-20 xl:px-32">
          <div className="text-center py-10">
            <div className="flex justify-center items-center gap-2 mb-2">
              <div className="bg-red-500 p-2 rounded-md">
                <Star className="w-4 h-4 text-white" />
              </div>
              <p className="uppercase tracking-widest text-red-600 font-semibold text-md">
                Güvenli Servis
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Neden Akyel Turizm?
            </h1>

            <div className="flex justify-center mt-4 relative h-1">
              <span className="w-16 h-1 bg-red-500 rounded-full animate-move" />
            </div>

            <p className="text-lg pt-3 text-gray-600 max-w-2xl mx-auto">
              Öğrenci taşımacılığında güvenlik ve kaliteyi bir araya getiren
              profesyonel hizmetimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
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

      {/* Safety Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-7 sm:px-8 md:px-14 lg:px-20 xl:px-32">
          <div className="text-center py-10">
            <div className="flex justify-center items-center gap-2 mb-2">
              <div className="bg-red-500 p-2 rounded-md">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <p className="uppercase tracking-widest text-red-600 font-semibold text-md">
                Güvenlik Önlemleri
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Güvenlik Hizmet Detayları
            </h1>

            <div className="flex justify-center mt-4 relative h-1">
              <span className="w-16 h-1 bg-red-500 rounded-full animate-move" />
            </div>

            <p className="text-lg pt-3 text-gray-600 max-w-2xl mx-auto">
              Çocuklarınızın güvenliği için aldığımız özel önlemler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safetyServices.map((service, index) => (
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

      {/* Service Packages Section */}
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
              Özel Servis Paketleri
            </h1>

            <div className="flex justify-center mt-4 relative h-1">
              <span className="w-16 h-1 bg-red-500 rounded-full animate-move" />
            </div>

            <p className="text-lg pt-3 text-gray-600 max-w-2xl mx-auto">
              İhtiyaçlarınıza göre özel olarak hazırlanmış servis paketleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicePackages.map((pkg, index) => (
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

      {/* Image Section - Güvenli Taşımacılık */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-7 sm:px-8 md:px-14 lg:px-20 xl:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-red-500 p-2 rounded-md">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <p className="uppercase tracking-widest text-red-600 font-semibold text-md">
                  GÜVENLİK
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Güvenli Taşımacılık
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Modern araç filomuz ve deneyimli şoför kadromuzla
                öğrencilerinizi güvenle taşıyoruz. Tüm araçlarımızda güvenlik
                sistemleri mevcuttur ve düzenli bakımları yapılmaktadır.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">GPS takip sistemi</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">Emniyet kemeri kontrolü</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">Acil durum protokolleri</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                  alt="Güvenli okul otobüsü"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section - Profesyonel Hizmet */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-7 sm:px-8 md:px-14 lg:px-20 xl:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-red-500 p-2 rounded-md">
                  <UserCheck className="w-4 h-4 text-white" />
                </div>
                <p className="uppercase tracking-widest text-red-600 font-semibold text-md">
                  PROFESYONEL HİZMET
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Velilerle İletişim
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Deneyimli ve güvenilir şoförlerimiz, çocuklarınızın güvenliğini
                her zaman ön planda tutar. Tüm şoförlerimiz düzenli eğitimlerden
                geçer ve güvenlik protokollerini titizlikle uygular.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">
                    Deneyimli ve güvenilir şoförler
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">
                    Düzenli güvenlik eğitimleri
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">Sabıka kaydı kontrolü</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">İlk yardım sertifikası</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Profesyonel şoför"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schools Section */}
      <section className="py-20">
        <div className="container mx-auto px-7 sm:px-8 md:px-14 lg:px-20 xl:px-32">
          <div className="text-center py-10">
            <div className="flex justify-center items-center gap-2 mb-2">
              <div className="bg-red-500 p-2 rounded-md">
                <School className="w-4 h-4 text-white" />
              </div>
              <p className="uppercase tracking-widest text-red-600 font-semibold text-md">
                Okullar
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Hizmet Verdiğimiz Okullar
            </h1>

            <div className="flex justify-center mt-4 relative h-1">
              <span className="w-16 h-1 bg-red-500 rounded-full animate-move" />
            </div>

            <p className="text-lg pt-3 text-gray-600 max-w-2xl mx-auto">
              Prestijli eğitim kurumlarına güvenli öğrenci taşımacılığı hizmeti
              sunuyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {schools.map((school, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-red-200"
              >
                <div className="flex justify-center mb-4">
                  <School className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="font-semibold text-gray-900 text-center text-sm">
                  {school}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
              Neden Bizi Seçmelisiniz?
            </h1>

            <div className="flex justify-center mt-4 relative h-1">
              <span className="w-16 h-1 bg-red-500 rounded-full animate-move" />
            </div>

            <p className="text-lg pt-3 text-gray-600 max-w-2xl mx-auto">
              Öğrenci taşımacılığında güvenlik, kalite ve güvenilirlik için
              tercih edilen markayız
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {whyChooseUs.map((reason, index) => (
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
            Güvenli Öğrenci Taşımacılığı İçin Hemen İletişime Geçin
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Çocuklarınızın güvenliği için profesyonel hizmetimizi tercih edin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/iletisim"
              className="bg-white text-red-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Hemen Arayın
            </Link>
            <Link
              to="/iletisim"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-500 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              Teklif Al
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentTransportation;
