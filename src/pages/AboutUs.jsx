import React, { useState } from "react";
import {
  Heart,
  Shield,
  Clock,
  Award,
  Users,
  MapPin,
  Phone,
  Plus,
  Minus,
  Building,
  Mail,
  Star,
  CheckCircle,
  Target,
  Eye,
  Car,
  Calendar,
  ThumbsUp,
  TrendingUp,
  X,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

const AboutUs = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [expandedService, setExpandedService] = useState(null);

  const handleCertificateClick = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const handleCloseModal = () => {
    setSelectedCertificate(null);
  };

  // Modal'ı kapatmak için overlay'e tıklanma
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setSelectedCertificate(null);
    }
  };

  const toggleService = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  const certificates = [
    {
      name: "K2 Taşıt Belgesi",
      description: "Yolcu taşımacılığı için gerekli resmi belge",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=600&fit=crop",
    },
    {
      name: "Turizm Acente Belgesi",
      description: "Turizm ve seyahat hizmetleri için yetki belgesi",
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=600&fit=crop",
    },
    {
      name: "ISO 9001 Kalite Sertifikası",
      description: "Kalite yönetim sistemi standardı belgelendirmesi",
      image:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop",
    },
    {
      name: "Çevre ve Şehircilik Bakanlığı Ruhsatı",
      description: "Çevresel uygunluk ve faaliyet ruhsatı",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=600&fit=crop",
    },
    {
      name: "Ulaştırma Bakanlığı İzni",
      description: "Karayolu taşımacılığı için bakanlık izni",
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=600&fit=crop",
    },
    {
      name: "Kasko ve Sorumluluk Sigortası",
      description: "Araç filomuz için kapsamlı sigorta belgeleri",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=600&fit=crop",
    },
  ];

  const values = [
    {
      icon: Shield,
      title: "Güvenlik",
      description:
        "Müşterilerimizin güvenliği bizim için en önemli önceliktir. Tüm araçlarımız düzenli bakım ve kontrollere tabi tutulur.",
    },
    {
      icon: Heart,
      title: "Müşteri Memnuniyeti",
      description:
        "Her müşterimize özel ilgi gösteriyor, beklentilerini aşmaya odaklanıyoruz. Sizin memnuniyetiniz bizim başarımızdır.",
    },
    {
      icon: Clock,
      title: "Zamanında Hizmet",
      description:
        "Dakiklik ve güvenilirlik ilkelerimizle, her zaman zamanında ve profesyonel hizmet sunuyoruz.",
    },
    {
      icon: Award,
      title: "Kalite Standartları",
      description:
        "Sektörün en yüksek kalite standartlarını benimsiyor, sürekli gelişim ve iyileştirme odaklı çalışıyoruz.",
    },
  ];

  const services = [
    {
      name: "Okul Servisi",
      description:
        "**Çocuklarınızın Güvenliği Bizim Önceliğimiz** Akyel Tur, öğrenci taşımacılığı alanında güven ve konforu ön planda tutan bir taşıma hizmeti sunmaktadır. Güvenli ve bakımlı araçlarımız, deneyimli sürücü kadromuz ve öğrencilere özel güzergahlarımızla, öğrencilerin okullarına güvenle ve konforlu bir şekilde ulaşmalarını sağlıyoruz. Öğrencilerin değişen ihtiyaçlarına esnek bir şekilde cevap veriyor ve her zaman müşteri memnuniyetini ön planda tutuyoruz. Akyel Tur ile öğrencilerin güvenli ve konforlu bir yolculuk deneyimi yaşamasını sağlayın!",
      schools: [
        "Şehit Burak Erten İlkokulu",
        "Vali Recep Yazıcıoğlu İlkokulu",
        "Türkiye Odalar ve Borsalar Birliği Ortaokulu",
        "Abalıoğlu Yem Sanayi Ortaokulu",
      ],
    },
    {
      name: "Etüt Servisleri",
      description:
        "**Konforlu Uzun Mesafe Seyahatleri** Şehirlerarası uzun mesafe seyahatler için özel araçlarımızla hizmet veriyoruz. Konforlu koltuklar, klima sistemi ve güvenli sürüş ile uzun yolculuklarınızı keyifli hale getiriyoruz. Deneyimli sürücülerimiz ve bakımlı araçlarımızla, güvenli bir seyahat deneyimi yaşayın.",
      routes: [
        "İstanbul - Ankara",
        "İstanbul - İzmir",
        "İstanbul - Antalya",
        "İstanbul - Bursa",
        "İstanbul - Trabzon",
        "İstanbul - Bodrum",
      ],
    },
    {
      name: "Personel Taşımacılığı",
      description:
        "**Personel Taşımacılığında Güvenilir Çözüm** Fabrika çalışanlarınızın iş yerlerine güvenli ve konforlu ulaşımını sağlıyoruz. Düzenli seferler, güvenli araçlar ve profesyonel hizmet anlayışımızla, personel taşımacılığında en kaliteli hizmeti sunuyoruz. Esnek saat düzenlemeleri ve geniş araç kapasitemizle, her büyüklükteki işletmenin ihtiyaçlarına uygun çözümler üretiyoruz.",
      companies: [
        "Bosch Fabrikası",
        "Ford Otosan",
        "Vestel Elektronik",
        "Arçelik A.Ş.",
        "Tofaş Fabrikası",
        "Aygaz Dağıtım",
      ],
    },
    {
      name: "Grup Gezi Turları",
      description:
        "**Unutulmaz Seyahat Deneyimleri** Turistik geziler ve şehir turları için özel araçlarımızla hizmet veriyoruz. Deneyimli rehber sürücülerimiz eşliğinde, İstanbul'un ve çevresinin en güzel yerlerini keşfetme fırsatı sunuyoruz. Konforlu araçlar, esnek rotalar ve kişiselleştirilmiş hizmet anlayışımızla unutulmaz anılar biriktirin.",
      destinations: [
        "Sultanahmet Turu",
        "Boğaz Turu",
        "Büyükada Gezisi",
        "Bursa Turu",
        "Sapanca Turu",
        "Şile-Ağva Turu",
      ],
    },
    {
      name: "VIP Servis",
      description:
        "**Lüks ve Konforlu VIP Ulaşım** Özel ulaşım ihtiyaçlarınız için VIP araçlarımızla hizmet veriyoruz. İş toplantıları, özel davetler ve günlük ulaşım ihtiyaçlarınızda, konforlu ve prestijli bir seyahat deneyimi yaşayın. Temiz, bakımlı ve lüks araçlarımızla, her destinasyona güvenle ulaşın.",
      areas: [
        "Beşiktaş - Taksim",
        "Kadıköy - Üsküdar",
        "Şişli - Mecidiyeköy",
        "Bakırköy - Ataköy",
        "Levent - Maslak",
        "Bağdat Caddesi",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-500 to-red-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Hakkımızda</h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
              Deneyimimizle güvenli, konforlu ve kaliteli ulaşım hizmetleri
              sunuyoruz.
            </p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-red-500 p-2 rounded-md">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <p className="uppercase tracking-widest text-red-600 font-semibold text-md">
                  Hikayemiz
                </p>
              </div>

              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Güvenilir Ulaşım Partneri
              </h2>

              <div className="space-y-4 text-gray-600">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Soluta, praesentium? Obcaecati quae reiciendis voluptate?
                  Facilis repellat voluptas officiis expedita cupiditate vero
                  aut excepturi fugit at a quod officia, veniam suscipit. Nobis
                  cumque placeat suscipit dolorum vitae sed reprehenderit
                  veritatis voluptate..
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis rem ad quod consectetur cupiditate doloremque
                  voluptatibus iusto corporis ex. Aliquam vel repudiandae sed
                  placeat eum, necessitatibus commodi? Cupiditate, quam ipsam.
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Velit esse voluptas hic quibusdam sunt officia est autem ab?
                  Explicabo, cum quam obcaecati repellat temporibus tenetur.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop"
                alt="Ekibimiz"
                className="rounded-2xl w-full shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-red-500 text-white p-6 rounded-xl">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">Yıllık Deneyim</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 ">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center py-10">
            <div className="flex justify-center items-center gap-2 mb-2">
              <div className="bg-red-500 p-2 rounded-md">
                <Target className="w-4 h-4 text-white" />
              </div>
              <p className="uppercase tracking-widest text-red-600 font-semibold text-md">
                Değerlerimiz
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Temel İlkelerimiz
            </h1>

            <div className="flex justify-center mt-4 relative h-1">
              <span className="w-16 h-1 bg-red-500 rounded-full animate-move" />
            </div>

            <p className="text-lg pt-3 text-gray-600 max-w-2xl mx-auto">
              Bu değerler doğrultusunda her gün daha iyi hizmet sunmaya
              odaklanıyoruz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
                  <value.icon className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*Hizmetlerimiz*/}
      <div className="py-20 ">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center py-10">
            <div className="flex justify-center items-center gap-2 mb-2">
              <div className="bg-red-500 p-2 rounded-md">
                <Car className="w-4 h-4 text-white" />
              </div>
              <p className="uppercase tracking-widest text-red-600 font-semibold text-md">
                Hizmetlerimiz
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Sunduğumuz Hizmetler
            </h1>
            <div className="flex justify-center mt-4 relative h-1">
              <span className="w-16 h-1 bg-red-500 rounded-full animate-pulse" />
            </div>
            <p className="text-lg pt-3 text-gray-600 max-w-2xl mx-auto">
              Kaliteli ve güvenilir hizmet anlayışımızla size en iyisini
              sunuyoruz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div
                    className="flex items-center gap-4 p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => toggleService(index)}
                  >
                    <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium flex-1">
                      {service.name}
                    </span>
                    <div className="flex-shrink-0">
                      {expandedService === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </div>
                </div>

                {expandedService === index && (
                  <div className="absolute top-full left-0 right-0 z-50 bg-white rounded-xl shadow-xl border border-gray-200 mt-2">
                    <div className="p-6">
                      <div className="border-t pt-4">
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {service.description.split("**").map((part, i) =>
                            i % 2 === 1 ? (
                              <strong key={i} className="text-gray-800">
                                {part}
                              </strong>
                            ) : (
                              part
                            )
                          )}
                        </p>

                        <div className="mt-4">
                          <h4 className="text-sm font-semibold text-gray-800 mb-2">
                            {service.schools
                              ? "Hizmet Verdiğimiz Okullar:"
                              : service.companies
                              ? "Çalıştığımız Firmalar:"
                              : service.destinations
                              ? "Hizmet Verdiğimiz Destinasyonlar:"
                              : service.areas
                              ? "Hizmet Bölgelerimiz:"
                              : service.events
                              ? "Etkinlik Türleri:"
                              : service.routes
                              ? "Popüler Rotalar:"
                              : "Hizmet Alanları:"}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {(
                              service.schools ||
                              service.companies ||
                              service.destinations ||
                              service.areas ||
                              service.events ||
                              service.routes ||
                              service.services
                            ).map((item, i) => (
                              <span
                                key={i}
                                className="bg-red-50 text-red-700 text-xs px-2 py-1 rounded-full font-medium"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-2xl p-8 lg:p-12">
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-8 h-8" />
                <h3 className="text-2xl font-bold">Vizyonumuz</h3>
              </div>
              <p className="text-lg leading-relaxed">
                Türkiye'nin en güvenilir ve kaliteli ulaşım hizmetleri şirketi
                olarak, müşterilerimize unutulmaz seyahat deneyimleri sunmak ve
                sektörde öncü olmaya devam etmek.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-2xl p-8 lg:p-12">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8" />
                <h3 className="text-2xl font-bold">Misyonumuz</h3>
              </div>
              <p className="text-lg leading-relaxed">
                Modern araç filomuz, uzman ekibimiz ve kaliteli hizmet
                anlayışımızla her müşterimize güvenli, konforlu ve zamanında
                ulaşım çözümleri sunmak.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Certificates Section */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center py-10">
            <div className="flex justify-center items-center gap-2 mb-2">
              <div className="bg-red-500 p-2 rounded-md">
                <Award className="w-4 h-4 text-white" />
              </div>
              <p className="uppercase tracking-widest text-red-600 font-semibold text-md">
                Belgelerimiz
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Sahip Olduğumuz Belgelerimiz
            </h1>

            <div className="flex justify-center mt-4 relative h-1">
              <span className="w-16 h-1 bg-red-500 rounded-full animate-pulse" />
            </div>

            <p className="text-lg pt-3 text-gray-600 max-w-2xl mx-auto">
              Belgelerimiz, güvenilir ve yetkin hizmet anlayışımızın
              göstergesidir.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((certificate) => (
              <div
                key={certificate.id}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => handleCertificateClick(certificate)}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={certificate.image}
                    alt={certificate.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    {certificate.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {certificate.description}
                  </p>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4 text-gray-700" />
                </div>
              </div>
            ))}
          </div>

          {/* Modal for full-screen photo view */}
          {selectedCertificate && (
            <div
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
              onClick={handleOverlayClick}
            >
              <div className="relative w-full h-full max-w-6xl max-h-[95vh] flex items-center justify-center">
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.name}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                />
                <button
                  onClick={handleCloseModal}
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-red-400 transition-colors z-10 bg-black/60 hover:bg-black/80 rounded-full p-2 sm:p-3 backdrop-blur-sm shadow-lg"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="py-20 bg-gradient-to-r from-red-700 to-red-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Bizimle İletişime Geçin</h2>
          <p className="text-xl mb-8">Sorularınız için 7/24 hizmetinizdeyiz</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
              <Phone className="w-5 h-5" />
              <span>+90 (555) 123 45 67</span>
            </div>
            <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
              <Mail className="w-5 h-5" />
              <span>info@example.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
