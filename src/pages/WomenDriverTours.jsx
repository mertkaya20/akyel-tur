import React from "react";
import {
  Users,
  MapPin,
  Shield,
  Star,
  Camera,
  Phone,
  CheckCircle,
  Compass,
  Medal,
  Heart,
  UserCheck,
} from "lucide-react";

const WomenDriverTours = () => {
  const tourFeatures = [
    {
      icon: <UserCheck className="w-8 h-8 text-red-500" />,
      title: "Kadın Şoför Hizmeti",
      description:
        "Deneyimli ve profesyonel kadın şoförlerimiz ile güvenli yolculuk",
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Kadın Dostu Ortam",
      description:
        "Kadınlar için özel olarak tasarlanmış konforlu gezi deneyimi",
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: "Güvenli Seyahat",
      description: "Özellikle kadın grupları için ekstra güvenlik önlemleri",
    },
    {
      icon: <Star className="w-8 h-8 text-red-500" />,
      title: "Özel Rotalar",
      description:
        "Kadın gruplarına özel seçilmiş destinasyonlar ve durma noktaları",
    },
  ];

  const destinations = [
    {
      name: "Güney Şelalesi",
      image:
        "https://images.pexels.com/photos/32531446/pexels-photo-32531446.jpeg",
      description: "Doğal güzellikler ve huzurlu piknik alanları",
      features: ["Doğa yürüyüşü", "Fotoğraf çekimi", "Huzurlu ortam"],
    },
    {
      name: "Pamukkale",
      image:
        "https://images.pexels.com/photos/10212470/pexels-photo-10212470.jpeg",
      description: "Termal havuzlar ve antik Hierapolis keşfi",
      features: ["Termal spa", "Antik tiyatro", "Kalsiyum terasları"],
    },
    {
      name: "Tripolis Antik Kenti",
      image:
        "https://images.pexels.com/photos/14840216/pexels-photo-14840216.jpeg",
      description: "Tarih ve kültür dolu antik kent gezisi",
      features: ["Arkeolojik keşif", "Tarihi bilgiler", "Kültürel deneyim"],
    },
  ];

  const whyChooseTours = [
    "Deneyimli ve güvenilir kadın şoförler",
    "Temiz ve hijyenik araç içi ortam",
    "Özel güvenlik protokolleri",
    "Esnek program ve zaman dilimi seçenekleri",
    "Mahremiyet ve konfor önceliği",
    "Kadın gruplarına özel indirimler",
    "7/24 güvenlik ve destek hizmeti",
    "Ailelerin gönül rahatlığı ile tercih ettiği hizmet",
    "Özel organizasyon ve etkinlik imkanları",
    "Unutulmaz ve güvenli gezi deneyimi",
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
              <UserCheck className="w-16 h-16 text-red-200" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Kadın Gruplara Özel Kadın Şoförlü Gezi Turları
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100">
              Kadın grupları için özel olarak tasarlanmış güvenli ve konforlu
              gezi deneyimi
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/iletisim"
                className="bg-white text-red-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Hemen Rezervasyon Yap
              </a>
              <button
                onClick={() => scrollToSection("tur-avantajlari")}
                className="cursor-pointer border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-500 transition-colors duration-200"
              >
                Özel Avantajlar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Features Section */}
      <section id="tur-avantajlari" className="py-20">
        <div className="container mx-auto px-7 sm:px-8 md:px-14 lg:px-20 xl:px-32">
          <div className="text-center py-10">
            <div className="flex justify-center items-center gap-2 mb-2">
              <div className="bg-red-500 p-2 rounded-md">
                <Star className="w-4 h-4 text-white" />
              </div>
              <p className="uppercase tracking-widest text-red-600 font-semibold text-md">
                Özel Avantajlar
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Kadın Şoförlü Tur Özellikleri
            </h1>

            <div className="flex justify-center mt-4 relative h-1">
              <span className="w-16 h-1 bg-red-500 rounded-full animate-move" />
            </div>

            <p className="text-lg pt-3 text-gray-600 max-w-2xl mx-auto">
              Kadın grupları için özel olarak tasarlanmış güvenli ve konforlu
              gezi deneyimi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tourFeatures.map((feature, index) => (
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

      {/* Experience Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-7 sm:px-8 md:px-14 lg:px-20 xl:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-red-500 p-2 rounded-md">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <p className="uppercase tracking-widest text-red-600 font-semibold text-md">
                  ÖZEL DENEYİM
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Gezi Deneyimi
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Kadın şoför ile gezi turlarımızda kadın grupları için özel
                olarak tasarlanmış konforlu ve güvenli bir deneyim sunuyoruz.
                Deneyimli kadın şoförlerimiz sayesinde gönül rahatlığı ile
                keyifli anılar biriktirin.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">
                    Deneyimli ve güvenilir kadın şoförler
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">
                    Kadın gruplarına özel mahremiyet
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">
                    Temiz ve hijyenik araç içi ortam
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1088&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Kadın şoförlü gezi turları"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
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
                Maksimum Güvenlik ve Konfor
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Kadın gruplarının güvenliği bizim önceliğimiz. Deneyimli kadın
                şoförlerimiz, özel güvenlik protokollerimiz ve tam sigortalı
                araçlarımızla her yolculukta gönül rahatlığı yaşayacaksınız.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">
                    Profesyonel ve deneyimli kadın şoförler
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">
                    Kadın gruplarına özel güvenlik önlemleri
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">Tam sigorta kapsamı</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">7/24 acil durum desteği</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1126&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Güvenli kadın şoförlü tur"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-20">
        <div className="container mx-auto px-7 sm:px-8 md:px-14 lg:px-20 xl:px-32">
          <div className="text-center py-10">
            <div className="flex justify-center items-center gap-2 mb-2">
              <div className="bg-red-500 p-2 rounded-md">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <p className="uppercase tracking-widest text-red-600 font-semibold text-md">
                Popüler Destinasyonlar
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Kadın Gruplarına Özel Rotalar
            </h1>

            <div className="flex justify-center mt-4 relative h-1">
              <span className="w-16 h-1 bg-red-500 rounded-full animate-move" />
            </div>

            <p className="text-lg pt-3 text-gray-600 max-w-2xl mx-auto">
              Özenle seçilmiş destinasyonlar ve kadın dostu durma noktaları
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Özel
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {destination.description}
                  </p>
                  <ul className="space-y-2">
                    {destination.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle className="w-4 h-4 text-red-500" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Tours Section */}
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
              Neden Kadın Şoförlü Turları?
            </h1>

            <div className="flex justify-center mt-4 relative h-1">
              <span className="w-16 h-1 bg-red-500 rounded-full animate-move" />
            </div>

            <p className="text-lg pt-3 text-gray-600 max-w-2xl mx-auto">
              Kadın grupları için özel olarak tasarlanmış güvenli ve konforlu
              gezi deneyimi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {whyChooseTours.map((reason, index) => (
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
            Güvenli ve Konforlu Gezi Deneyimi
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Kadın şoför ile gezi turlarımız hakkında detaylı bilgi almak ve
            rezervasyon yapmak için hemen iletişime geçin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/iletisim"
              className="bg-white text-red-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Rezervasyon Yap
            </a>
            <a
              href="/iletisim"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-500 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              İletişime Geç
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WomenDriverTours;
