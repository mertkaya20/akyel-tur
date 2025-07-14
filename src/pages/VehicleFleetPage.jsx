import React, { useState } from "react";
import {
  Users,
  MapPin,
  Shield,
  Star,
  Car,
  CheckCircle,
  Info,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

const VehicleFleetPage = () => {
  const [selectedVehicle, setSelectedVehicle] = useState("vito");

  const vehicles = {
    vito: {
      id: "vito",
      name: "Mercedes Vito",
      image:
        "https://images.pexels.com/photos/17455625/pexels-photo-17455625.jpeg",
      category: "VIP Transfer Aracı",
      capacity: "8 Kişi",
      purpose: "Şehir İçi ve Şehirlerarası VIP Transfer",
      description:
        "Mercedes Vito, şehir içi ve şehirlerarası VIP transfer hizmetlerimizde kullandığımız premium minivan'ımızdır. Özellikle havalimanı karşılama, otel transferleri, iş toplantıları ve özel organizasyonlar için ideal bir seçimdir. Konforlu 8 kişilik kapasitesi ile aileler ve küçük gruplar için mükemmel bir çözüm sunar.",
      detailedInfo:
        "Mercedes Vito araçlarımız, müşterilerimize en üst düzey konfor ve güvenlik sağlamak için özenle seçilmiş ve düzenli bakımları yapılmaktadır. Araçlarımızda bulunan modern teknolojiler sayesinde yolculuğunuz boyunca hem güvenli hem de konforlu bir deneyim yaşayacaksınız. Özellikle iş seyahatlerinde tercih edilen bu araç, sessiz motor yapısı ve yumuşak süspansiyon sistemi ile yorucu yolculukları bile keyifli hale getirir.",
      features: [
        "8 adet konforlu ve ayarlanabilir koltuk",
        "Otomatik klima ve havalandırma sistemi",
        "USB şarj portları her koltuk için",
        "Panoramik camlar ve geniş iç mekan",
        "Bagaj alanı ve ek depolama bölümleri",
        "Güvenlik kemerleri ve airbag sistemi",
        "Bluetooth bağlantılı ses sistemi",
        "Profesyonel ve deneyimli şoför hizmeti",
      ],
      usage: [
        "Havalimanı karşılama ve uğurlama hizmetleri",
        "Otel ve konaklama transferleri",
        "İş toplantıları ve kurumsal etkinlikler",
        "Özel organizasyonlar ve düğün transferleri",
        "Şehir turları ve günübirlik geziler",
        "Hastane ve sağlık kuruluşu transferleri",
        "Özel davetler ve aile etkinlikleri",
      ],
      benefits:
        "Müşterilerimiz Mercedes Vito ile seyahat ederken, zamanında ve güvenli varış garantisi, konforlu yolculuk deneyimi, profesyonel hizmet kalitesi ve özel dikkat gösterilmesi avantajlarından yararlanırlar. Ayrıca araçlarımızın temizlik ve hijyen standartları en üst düzeyde tutularak sağlıklı bir seyahat ortamı sunulmaktadır.",
    },
    sprinter: {
      id: "sprinter",
      name: "Mercedes-Benz Sprinter",
      image:
        "https://www.mercedes-benz.com.tr/content/dam/Turkey/vans/models/minibus/minibus-stage.jpeg/1739897371059.jpg?im=Crop,rect=(71,0,1137,853);Resize=(512,384)",
      category: "Grup Transfer Aracı",
      capacity: "16 Kişi",
      purpose: "Orta Büyüklükteki Grup Transferleri",
      description:
        "Mercedes-Benz Sprinter, orta büyüklükteki gruplar için tasarlanmış premium minibüsümüzdür. Özellikle şirket personeli transferleri, okul gezileri, düğün konvoları ve grup turları için ideal bir seçimdir. 16 kişilik kapasitesi ile hem ekonomik hem de konforlu bir çözüm sunar.",
      detailedInfo:
        "Mercedes-Benz Sprinter araçlarımız, grup halinde seyahat eden müşterilerimize en iyi hizmeti verebilmek için özel olarak düzenlenmiştir. Yüksek tavan yapısı sayesinde iç mekan ferah ve geniştir. Uzun mesafe yolculuklarda bile yorulmadan seyahat edebilmeniz için ergonomik koltuklar ve gelişmiş süspansiyon sistemi bulunmaktadır. Ayrıca geniş bagaj alanı sayesinde tüm eşyalarınızı rahatlıkla taşıyabilirsiniz.",
      features: [
        "16 adet ergonomik ve rahat koltuk",
        "Yüksek tavan ile ferah iç mekan",
        "Güçlü klima ve havalandırma sistemi",
        "Panoramik camlar ve geniş görüş açısı",
        "Geniş bagaj bölümü",
        "Multimedya ve ses sistemi",
        "Güvenlik kemerleri ve güvenlik sistemleri",
        "LED iç aydınlatma sistemi",
        "Anti-patinaj ve fren destek sistemleri",
      ],
      usage: [
        "Şirket personeli günlük transferleri",
        "Okul gezileri ve öğrenci etkinlikleri",
        "Düğün konvoları ve davetiye transferleri",
        "Grup turları ve günübirlik geziler",
        "Kongre ve seminer katılımcı transferleri",
        "Spor takımı ve sporcu transferleri",
        "Havalimanı grup transferleri",
        "Özel organizasyon ve etkinlik transferleri",
      ],
      benefits:
        "Mercedes-Benz Sprinter ile seyahat eden müşterilerimiz, grup halinde ekonomik seyahat imkanı, geniş iç mekan konforu, güvenli ve dakik ulaşım, profesyonel şoför hizmeti ve temiz araç garantisinden yararlanırlar. Özellikle düzenli transfer ihtiyacı olan kurumlar için uzun dönemli anlaşma avantajları sunulmaktadır.",
    },
    sultan: {
      id: "sultan",
      name: "Otokar Sultan Comfort",
      image: "https://www.tasimacilar.com/d/other/otokar-sultan-002.jpg",
      category: "Öğrenci ve Personel Taşıma Otobüsü",
      capacity: "30 Kişi",
      purpose: "Öğrenci ve Personel Taşımacılığı",
      description:
        "Otokar Sultan Comfort, öğrenci taşımacılığı ve personel servis hizmetlerinde kullandığımız konforlu otobüsümüzdür. 30 öğrenci kapasitesi ile okul servis hizmetleri, kampüs içi ulaşım ve öğrenci etkinlikleri için özel olarak tasarlanmıştır. Güvenlik standartları en üst düzeyde tutularak çocuklarınızın güvenli seyahati sağlanır.",
      detailedInfo:
        "Otokar Sultan Comfort araçlarımız, öğrenci taşımacılığında uzun yılların deneyimi ile en güvenli ve konforlu seçenekleri sunar. Araçlarımızda çocuk güvenliği ön planda tutularak, özel güvenlik sistemleri ve takip teknolojileri kullanılmaktadır. Düzenli teknik bakımlar ve güvenlik kontrolleri yapılarak, öğrencilerinizin her gün güvenle seyahat etmesi sağlanır. Ayrıca deneyimli ve öğrenci taşımacılığı sertifikasına sahip şoförlerimiz ile hizmet verilmektedir.",
      features: [
        "30 adet öğrenci için özel tasarlanmış koltuk",
        "Güvenlik kemerleri ve çocuk güvenlik sistemleri",
        "CCTV güvenlik kamera sistemi",
        "GPS takip sistemi",
        "Otomatik klima ve havalandırma",
        "Acil durum çıkış kapıları",
        "İlk yardım kiti ve güvenlik ekipmanları",
        "Öğrenci sayım sistemi",
        "Ebeveyn bilgilendirme sistemi",
      ],
      usage: [
        "Okul servis hizmetleri (sabah-akşam)",
        "Kampüs içi öğrenci transferleri",
        "Okul gezileri ve eğitim etkinlikleri",
        "Özel okul ve kurs transferleri",
        "Yurt ve pansiyon transferleri",
        "Personel servis hizmetleri",
        "Fabrika ve işyeri personel taşıma",
        "Özel etkinlik ve organizasyon transferleri",
      ],
      benefits:
        "Otokar Sultan Comfort ile öğrenci taşımacılığında ailelerin en çok önemsediği güvenlik, dakiklik ve güvenilirlik garantisi sunulur. Ebeveynler çocuklarının güvenli şekilde okula ulaştığından emin olabilir, GPS takip sistemi ile anlık konum bilgisi alabilirler. Düzenli güzergah ve zamanında servis garantisi ile ailelerin işlerine odaklanmaları sağlanır.",
    },
    tourismo: {
      id: "tourismo",
      name: "Mercedes-Benz Tourismo",
      image:
        "https://www.mercedes-benz-bus.com/content/dam/mbo/markets/tr_TR/models/tourismo-rhd/images/teaser/mbbo-tr-teaser-tourismo-02.jpg",
      category: "Lüks Turizm Otobüsü",
      capacity: "49 Kişi",
      purpose: "Uzun Mesafe Turizm ve Özel Organizasyonlar",
      description:
        "Mercedes-Benz Tourismo, uzun mesafe turizm yolculukları ve büyük organizasyonlar için tasarlanmış en üst segment otobüsümüzdür. 49 kişilik kapasitesi ile büyük grupların konforlu ve güvenli seyahati için ideal seçimdir. Özellikle şehirlerarası turlar, umre ve hac ziyaretleri, büyük düğün organizasyonları için tercih edilir.",
      detailedInfo:
        "Mercedes-Benz Tourismo, turizm sektörünün en prestijli otobüslerinden biridir. Uzun mesafe yolculuklarda maksimum konfor sağlamak için tasarlanmış bu araç, en son teknoloji ve lüks donanımlarla donatılmıştır. Profesyonel turizm şoförlerimiz, uzun mesafe deneyimi ve müşteri hizmetleri eğitimi almış kişilerden oluşmaktadır. Araçlarımızda bulunan eğlence sistemi ve konfor özellikleri sayesinde uzun yolculuklar bile keyifli geçer.",
      features: [
        "49 adet lüks ve ayarlanabilir koltuk",
        "Geniş koltuk mesafesi ve bacak alanı",
        "Bireysel klima ve havalandırma kontrolleri",
        "Multimedya eğlence sistemi",
        "Wi-Fi internet bağlantısı",
        "USB şarj portları her koltukta",
        "Geniş bagaj bölümü",
        "Panoramik camlar ve manzara keyfi",
        "Kabin içi buzdolabı ve ikram servisi",
        "Tuvalet ve lavabo imkanı",
        "Gelişmiş güvenlik ve ABS sistemleri",
      ],
      usage: [
        "Şehirlerarası turizm gezileri",
        "Umre ve hac ziyaret organizasyonları",
        "Büyük düğün ve organizasyon transferleri",
        "Kongre ve seminer katılımcı transferleri",
        "Spor takımı ve taraftar transferleri",
        "Kültürel ve sanatsal etkinlik transferleri",
        "Şirket gezileri ve team building etkinlikleri",
        "Özel grup turları ve seyahatleri",
      ],
      benefits:
        "Mercedes-Benz Tourismo ile seyahat eden müşterilerimiz, en üst düzey lüks ve konfor, uzun mesafe yolculuklarda yorulmama, eğlence ve teknoloji imkanları, profesyonel rehberlik hizmeti ve premium hizmet kalitesinden yararlanırlar. Özellikle özel organizasyonlar için kişiselleştirilmiş hizmet seçenekleri sunulmaktadır.",
    },
  };

  const currentVehicle = vehicles[selectedVehicle];

  return (
    <div className="min-h-screen ">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-red-500 to-red-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Araç Filomuz
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
              Modern araç filomuzla güvenli, konforlu ve zamanında ulaşım
              sağlıyoruz.
            </p>
          </div>
        </div>
      </div>

      {/* Vehicle Selection */}
      <div className="bg-white shadow-md border-b-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-center my-2 mb-4">
            <div className="flex items-center space-x-2 bg-red-50 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-md  font-medium text-red-700">
                Premium Araç Filosu
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.values(vehicles).map((vehicle) => (
              <button
                key={vehicle.id}
                onClick={() => setSelectedVehicle(vehicle.id)}
                className={`group relative overflow-hidden rounded-xl p-4 transition-all duration-300 transform hover:scale-105 ${
                  selectedVehicle === vehicle.id
                    ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg"
                    : "bg-white border-2 border-gray-200 text-gray-700 hover:border-red-300 hover:shadow-md"
                }`}
              >
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    <Car
                      className={`w-8 h-8 ${
                        selectedVehicle === vehicle.id
                          ? "text-white"
                          : "text-red-500"
                      }`}
                    />
                  </div>
                  <h3 className="font-bold text-lg mb-1">{vehicle.name}</h3>
                  <p
                    className={`text-sm mb-2 ${
                      selectedVehicle === vehicle.id
                        ? "text-red-100"
                        : "text-gray-500"
                    }`}
                  >
                    {vehicle.category}
                  </p>
                  <div className="flex items-center justify-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span className="font-semibold">{vehicle.capacity}</span>
                  </div>
                </div>

                {selectedVehicle === vehicle.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-10 rounded-xl"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Vehicle Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Vehicle Image and Info */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px]">
              <img
                src={currentVehicle.image}
                alt={currentVehicle.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=400&fit=crop";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            </div>

            <div className="absolute inset-0 flex items-end">
              <div className="p-6 lg:p-8 text-white w-full">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="bg-red-500 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {currentVehicle.category}
                  </span>
                  <div className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-2 rounded-full">
                    <Users className="w-5 h-5 mr-2" />
                    <span className="font-semibold">
                      {currentVehicle.capacity}
                    </span>
                  </div>
                  <div className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-2 rounded-full">
                    <Shield className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Premium</span>
                  </div>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-2">
                  {currentVehicle.name}
                </h2>
                <p className="text-lg lg:text-xl opacity-90 max-w-2xl">
                  {currentVehicle.purpose}
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Information */}
          <div className="p-6 lg:p-8">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {/* Description */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <Info className="w-6 h-6 mr-3 text-red-500" />
                    Araç Hakkında
                  </h3>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {currentVehicle.description}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {currentVehicle.detailedInfo}
                    </p>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <CheckCircle className="w-6 h-6 mr-3 text-red-500" />
                    Araç Özellikleri
                  </h3>
                  <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6">
                    <div className="grid grid-cols-1 gap-3">
                      {currentVehicle.features.map((feature, index) => (
                        <div key={index} className="flex items-start group">
                          <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:bg-red-600 transition-colors"></div>
                          <span className="text-gray-700 font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Usage Areas */}
            <div className="mt-12 pt-8 border-t-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <MapPin className="w-6 h-6 mr-3 text-red-500" />
                Kullanım Alanları
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentVehicle.usage.map((use, index) => (
                  <div
                    key={index}
                    className="bg-white border-2 border-gray-100 hover:border-red-300 p-4 rounded-xl transition-all duration-200 hover:shadow-md group"
                  >
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:bg-red-600 transition-colors"></div>
                      <span className="text-gray-700 font-medium">{use}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="mt-12 pt-8 border-t-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Star className="w-6 h-6 mr-3 text-red-500" />
                Müşteri Avantajları
              </h3>
              <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-xl p-6 lg:p-8">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {currentVehicle.benefits}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="relative bg-gradient-to-r from-red-500 to-red-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              Rezervasyon İçin İletişime Geçin
            </h3>
            <p className="text-red-100 mb-8 text-lg lg:text-xl max-w-3xl mx-auto">
              {currentVehicle.name} ile güvenli ve konforlu seyahat planınızı
              yapmak için bizimle iletişime geçin.
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
                Teklif Alın
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleFleetPage;
