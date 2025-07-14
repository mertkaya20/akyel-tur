import React from "react";
import { Car, Users } from "lucide-react";
import { Link } from "react-router-dom";

const VehicleFleet = () => {
  const vehicles = [
    {
      id: 1,
      name: "Mercedes Vito",
      category: "VIP Transfer",
      capacity: "8 Kişi",
      image:
        "https://images.pexels.com/photos/17455625/pexels-photo-17455625.jpeg",
      features: ["Konforlu İç Mekan", "Klima", "USB Şarj"],
      description: "Şehir içi ve şehirler arası konforlu yolculuk için ideal.",
    },
    {
      id: 2,
      name: "Mercedes-Benz Sprinter",
      category: "Grup Transferi",
      capacity: "16 Kişi",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLJf-LjK1i-ovqCEy_prvlM53N66Ix0dgAcA&s",
      features: ["Geniş İç Hacim", "Bagaj Alanı", "Profesyonel Sürücü"],
      description: "Büyük gruplar için konforlu ve güvenli ulaşım çözümü.",
    },
    {
      id: 3,
      name: "Otokar Sultan Comfort",
      category: "Otobüs",
      capacity: "45 Kişi",
      image: "https://www.tasimacilar.com/d/other/otokar-sultan-002.jpg",
      features: ["Uzun Mesafe", "Yüksek Konfor", "Güvenlik Sistemleri"],
      description: "Uzun mesafe seyahatler için üstün konfor ve güvenlik.",
    },
    {
      id: 4,
      name: "Mercedes-Benz Tourismo",
      category: "Lüks Otobüs",
      capacity: "49 Kişi",
      image:
        "https://www.mercedes-benz-bus.com/content/dam/mbo/markets/tr_TR/models/tourismo-rhd/images/teaser/mbbo-tr-teaser-tourismo-02.jpg",
      features: ["Premium İç Dizayn", "Eğlence Sistemi", "VIP Hizmet"],
      description: "Lüks seyahat deneyimi için en üst düzey konfor ve hizmet.",
    },
  ];

  return (
    <div className="py-16 px-7 sm:px-8 md:px-14 lg:px-20 xl:px-32 ">
      <div className="text-center py-10">
        <div className="flex justify-center items-center gap-2 mb-2">
          <div className="bg-red-500 p-2 rounded-md">
            <Car className="w-4 h-4 text-white" />
          </div>
          <p className="uppercase tracking-widest text-red-600 font-semibold text-md">
            Araç Filomuz
          </p>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Modern ve Konforlu Araçlarımız
        </h1>

        <div className="flex justify-center mt-4 relative h-1">
          <span className="w-16 h-1 bg-red-500 rounded-full animate-move" />
        </div>

        <p className="text-lg pt-3 text-gray-600 max-w-2xl mx-auto">
          Güvenli yolculuk deneyimi için en kaliteli araçlarla hizmetinizdeyiz
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {vehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
          >
            <div className="relative overflow-hidden">
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {vehicle.category}
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Users className="w-4 h-4 text-red-500" />
                  <span className="text-sm font-medium text-gray-700">
                    {vehicle.capacity}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {vehicle.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {vehicle.description}
              </p>

              <div className="space-y-2 mb-4">
                {vehicle.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
                <Link
                  to="/arac-filomuz"
                  className="w-full flex justify-center pt-2"
                >
                  <button className="bg-red-500 text-white text-sm font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:bg-red-600 hover:scale-105">
                    Detayları Gör
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleFleet;
