import React from "react";
import {
  GraduationCap,
  Users,
  Clock,
  CheckCircle,
  Star,
  Target,
  Brain,
  Trophy,
  Medal,
  Phone,
  MapPin,
  Shield,
  Gift,
  Video,
  Home,
  Laptop,
} from "lucide-react";

const StudyServices = () => {
  const etutFeatures = [
    {
      icon: <GraduationCap className="w-8 h-8 text-red-500" />,
      title: "Güvenli Taşımacılık",
      description: "Öğrencilerin güvenli ve konforlu etüt merkezine ulaşımı",
    },
    {
      icon: <Target className="w-8 h-8 text-red-500" />,
      title: "Zamanında Varış",
      description: "Etüt saatlerine uygun zamanında teslim garantisi",
    },
    {
      icon: <Clock className="w-8 h-8 text-red-500" />,
      title: "Esnek Saatler",
      description: "Farklı etüt saatlerine uygun esnek sefer programı",
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: "Güvenli Araçlar",
      description: "Sigortalı ve güvenli araçlarla tam güvence",
    },
  ];

  const etutPackages = [
    {
      icon: <Home className="w-8 h-8 text-red-500" />,
      title: "Kapıdan Kapıya",
      description: "Evden alıp etüt merkezine güvenli ulaşım",
      features: [
        "Ev adresinden alma",
        "Etüt merkezine teslim",
        "Geri dönüş servisi",
        "Güvenli araçlar",
        "Zamanında varış",
      ],
    },
    {
      icon: <Users className="w-8 h-8 text-red-500" />,
      title: "Grup Servisi",
      description: "Aynı etüt merkezine giden öğrencilerle toplu servis",
      features: [
        "Ekonomik fiyat",
        "Sosyal ortam",
        "Güvenli seyahat",
        "Düzenli sefer",
        "Arkadaş grupları",
      ],
    },
    {
      icon: <Laptop className="w-8 h-8 text-red-500" />,
      title: "Özel Araç",
      description: "Sadece sizin için özel araç ile rahat ulaşım",
      features: [
        "Özel şoför",
        "Konforlu araç",
        "Esnek saatler",
        "Hızlı ulaşım",
        "Kişisel hizmet",
      ],
    },
    {
      icon: <Trophy className="w-8 h-8 text-red-500" />,
      title: "Sınav Servisi",
      description: "Önemli sınavlara özel ulaşım hizmeti",
      features: [
        "Erken kalkış",
        "Stres-free yolculuk",
        "Zamanında varış",
        "Güvenli dönüş",
        "Özel planlama",
      ],
    },
  ];

  const whyChooseUs = [
    "Güvenli ve konforlu araç filosu",
    "Deneyimli ve güvenilir şoför kadrosu",
    "Zamanında alma ve teslim garantisi",
    "Tüm etüt merkezlerine ulaşım imkanı",
    "Esnek sefer saatleri ve güzergahlar",
    "7/24 müşteri hizmetleri ve destek",
    "Uygun fiyat ve ödeme seçenekleri",
    "GPS takip sistemi ile güvenli yolculuk",
    "Sigortalı araçlar ve tam güvence",
    "Veli bilgilendirme ve SMS sistemi",
    "Özel günlerde özel servis hizmeti",
    "Acil durum müdahale ve destek",
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
              <GraduationCap className="w-16 h-16 text-red-200" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Etüt Servisleri
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100">
              Öğrencilerin etüt merkezlerine güvenli ve konforlu ulaşımı
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Hemen Başla
              </button>
              <button
                onClick={() => scrollToSection("etut-avantajlar")}
                className="cursor-pointer border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-500 transition-colors duration-200"
              >
                Etüt Avantajları
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Etüt Features Section */}
      <section id="etut-avantajlar" className="py-20">
        <div className="container mx-auto px-7 sm:px-8 md:px-14 lg:px-20 xl:px-32">
          <div className="text-center py-10">
            <div className="flex justify-center items-center gap-2 mb-2">
              <div className="bg-red-500 p-2 rounded-md">
                <Star className="w-4 h-4 text-white" />
              </div>
              <p className="uppercase tracking-widest text-red-600 font-semibold text-md">
                Etüt Hizmeti
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Etüt Servis Avantajları
            </h1>

            <div className="flex justify-center mt-4 relative h-1">
              <span className="w-16 h-1 bg-red-500 rounded-full animate-pulse" />
            </div>

            <p className="text-lg pt-3 text-gray-600 max-w-2xl mx-auto">
              Güvenli taşımacılık ve zamanında ulaşım garantisi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {etutFeatures.map((feature, index) => (
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

      {/* Etüt Packages Section */}
      <section className="py-20">
        <div className="container mx-auto px-7 sm:px-8 md:px-14 lg:px-20 xl:px-32">
          <div className="text-center py-10">
            <div className="flex justify-center items-center gap-2 mb-2">
              <div className="bg-red-500 p-2 rounded-md">
                <Gift className="w-4 h-4 text-white" />
              </div>
              <p className="uppercase tracking-widest text-red-600 font-semibold text-md">
                Etüt Paketleri
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Servis Paketleri
            </h1>

            <div className="flex justify-center mt-4 relative h-1">
              <span className="w-16 h-1 bg-red-500 rounded-full animate-pulse" />
            </div>

            <p className="text-lg pt-3 text-gray-600 max-w-2xl mx-auto">
              İhtiyaçlarınıza göre özel olarak hazırlanmış servis paketleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {etutPackages.map((pkg, index) => (
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

      {/* Image Section - Learning Experience */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-7 sm:px-8 md:px-14 lg:px-20 xl:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-red-500 p-2 rounded-md">
                  <Brain className="w-4 h-4 text-white" />
                </div>
                <p className="uppercase tracking-widest text-red-600 font-semibold text-md">
                  ÖĞRENME DENEYİMİ
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Güvenli Taşımacılık Hizmeti
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Öğrencilerinizin etüt merkezlerine güvenli ve konforlu ulaşımını
                sağlıyoruz. Deneyimli şoförlerimiz ve modern araç filomuzla
                ailelerin güvenini kazanmış durumdayız.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">
                    GPS takipli güvenli araçlar
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">
                    Deneyimli ve güvenilir şoförler
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">
                    Zamanında alma ve teslim
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                  alt="Güvenli taşımacılık"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section - Online Learning */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-7 sm:px-8 md:px-14 lg:px-20 xl:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-red-500 p-2 rounded-md">
                  <Video className="w-4 h-4 text-white" />
                </div>
                <p className="uppercase tracking-widest text-red-600 font-semibold text-md">
                  SERVİS TAKİP
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Akıllı Takip Sistemi
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                GPS takip sistemi ile öğrencilerinizin nerede olduğunu anlık
                olarak takip edebilirsiniz. Veliler için özel mobil uygulama ile
                servis durumunu 7/24 kontrol edebilirsiniz.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">Canlı GPS takip sistemi</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">
                    Veli bilgilendirme SMS'i
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">Mobil uygulama desteği</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">Acil durum bildirimleri</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                  alt="Online eğitim"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-2">
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
              Neden Etüt Servisimizi Seçmelisiniz?
            </h1>

            <div className="flex justify-center mt-4 relative h-1">
              <span className="w-16 h-1 bg-red-500 rounded-full animate-pulse" />
            </div>

            <p className="text-lg pt-3 text-gray-600 max-w-2xl mx-auto">
              Kaliteli eğitim ve başarı odaklı yaklaşım için doğru adres
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {whyChooseUs.map((reason, index) => (
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
            Başarı Yolculuğuna Hemen Başlayın
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Uzman öğretmenlerimiz ve kişiselleştirilmiş eğitim programlarımız
            ile hedeflerinize ulaşın
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Hemen Kayıt Ol
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-500 transition-colors duration-200 flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5" />
              Ücretsiz Deneme
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudyServices;
