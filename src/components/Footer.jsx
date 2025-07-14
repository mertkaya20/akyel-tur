import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Plane,
  Camera,
  Star,
} from "lucide-react";
import NaturePhoto from "../assets/nature.avif";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = ["Turlar", "Turlar", "Turlar"];

  return (
    <footer className="relative text-gray-100 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${NaturePhoto})` }}
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="bg-red-500 p-2 rounded-lg">
                  <Plane className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Akyel Tur</h3>
              </div>
              <p className="text-gray-200 text-sm leading-relaxed">
                Türkiye'nin en güvenilir tur operatörü. Unutulmaz anılar
                yaratmak için buradayız.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold flex items-center">
              <Camera className="h-5 w-5 mr-2 text-red-400" />
              <p className="border-b-2 border-red-500">Hizmetlerimiz</p>
            </h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200 inline-block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold flex items-center">
              <Camera className="h-5 w-5 mr-2 text-red-400" />
              <p className="border-b-2 border-red-500">İletişim Bilgileri</p>
            </h3>
            <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
              <MapPin className="h-4 w-4 text-red-400" />
              <span className="text-sm">Merkez Efendi/Denizli</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
              <Phone className="h-4 w-4 text-red-400" />
              <span className="text-sm">+90 000 000 0000</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
              <Mail className="h-4 w-4 text-red-400" />
              <span className="text-sm">info@akyel-tur.com</span>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold flex items-center">
              <Star className="h-5 w-5 mr-2 text-red-400" />
              <p className="border-b-2 border-red-500">Bizi Takip Edin</p>
            </h3>

            <div className="space-y-4">
              <p className="text-gray-300 text-sm">
                Sosyal medyada bizi takip edin:
              </p>
              <div className="flex space-x-4">
                {[Facebook, Instagram].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="bg-red-500 hover:bg-red-400 p-2 rounded-full transition-colors duration-200 hover:scale-110 transform"
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-center text-gray-300 text-sm">
            © {currentYear} Akyel Tur. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
