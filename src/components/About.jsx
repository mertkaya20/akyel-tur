import React from "react";
import { Tag, Bookmark, Shield, Users, Calendar, MapPin } from "lucide-react";
import Bus from "../assets/bus.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="hakkimizda" className="py-12 lg:py-20 ">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center px-7 sm:px-8 md:px-14 lg:px-20 xl:px-32">
        {/* Left Content */}
        <div>
          {/* Header */}
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-red-500 p-2 rounded-lg">
              <Tag className="w-4 h-4 text-white" />
            </div>
            <p className="text-red-500 font-semibold text-sm uppercase tracking-wide">
              HAKKIMIZDA
            </p>
          </div>

          {/* Title */}
          <div className="mb-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              <span className="text-red-500">1988</span>'Den Bu Güne
              <br />
              Güvenilir Yolculuk
            </h2>
          </div>

          {/* Description */}
          <div className="mb-8">
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              animi, a odit vel, voluptatem sit, obcaecati ipsam tempore
              corporis fugiat hic! Eaque non velit culpa dolor accusamus
              aspernatur nihil est?
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-red-50 p-4 rounded-xl border border-red-100">
              <div className="flex items-start gap-3">
                <div className="bg-red-500 p-2 rounded-lg flex-shrink-0">
                  <Tag className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm">
                    Lorem, ipsum dolor.
                  </h3>
                  <p className="text-gray-600 text-xs">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Commodi, quisquam?
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 p-4 rounded-xl border border-red-100">
              <div className="flex items-start gap-3">
                <div className="bg-red-500 p-2 rounded-lg flex-shrink-0">
                  <Bookmark className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm">
                    Lorem ipsum dolor sit.
                  </h3>
                  <p className="text-gray-600 text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio, ratione.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            <div className="text-center">
              <div className="bg-red-500 p-2 rounded-lg inline-block mb-2">
                <Calendar className="w-4 h-4 text-white" />
              </div>
              <div className="text-2xl font-bold text-red-500 mb-1">35+</div>
              <p className="text-gray-600 text-xs">Yıllık Tecrübe</p>
            </div>

            <div className="text-center">
              <div className="bg-red-500 p-2 rounded-lg inline-block mb-2">
                <Users className="w-4 h-4 text-white" />
              </div>
              <div className="text-2xl font-bold text-red-500 mb-1">10000+</div>
              <p className="text-gray-600 text-xs">Mutlu Müşteriler</p>
            </div>

            <div className="text-center">
              <div className="bg-red-500 p-2 rounded-lg inline-block mb-2">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <div className="text-2xl font-bold text-red-500 mb-1">Lorem.</div>
              <p className="text-gray-600 text-xs">Lorem, ipsum.</p>
            </div>
          </div>

          {/* Button */}
          <Link to="/hakkimizda">
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200">
              Daha Fazla Bilgi Al
            </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden">
          {/* Bus Image */}
          <img src={Bus} alt="Bus" className="w-full h-full object-cover" />

          {/* Top Badge */}
          <div className="absolute top-4 left-4 bg-white rounded-full px-3 py-2 flex items-center gap-2 shadow-lg">
            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
              <Shield className="w-3 h-3 text-white" />
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-xs">
                Kalite Garantisi
              </p>
              <p className="text-gray-600 text-xs">%100 Müşteri Memnuniyeti</p>
            </div>
          </div>

          {/* Bottom Badge */}
          <div className="absolute bottom-4 right-4 bg-white rounded-full px-3 py-2 flex items-center gap-2 shadow-lg">
            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
              <Users className="w-3 h-3 text-white" />
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-xs">Lorem.</p>
              <p className="text-gray-600 text-xs">Lorem, ipsum dolor.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
