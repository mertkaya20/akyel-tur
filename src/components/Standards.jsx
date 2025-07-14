import React from "react";
import { Shield, Users, Award, Heart, Scale } from "lucide-react";

const Standards = () => {
  const standards = [
    {
      icon: Shield,
      title: "Güvenlik",
      description:
        "Tüm turlarımızda en yüksek güvenlik standartlarını uygulayarak, konforlu ve güvenli bir deneyim sunuyoruz.",
    },
    {
      icon: Users,
      title: "Lorem ipsum.",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natusanimi, a odit vel,",
    },
    {
      icon: Award,
      title: "Kalite Garantisi",
      description:
        "Her detayda mükemmeliyeti hedefleyerek, standartlarımızı sürekli geliştiriyoruz.",
    },
    {
      icon: Heart,
      title: "Müşteri Memnuniyeti",
      description:
        "Misafirlerimizin beklentilerini aşmak için her zaman daha fazlasını yapmaya odaklanıyoruz.",
    },
  ];

  return (
    <section className="py-20 px-6  bg-white">
      <div className="max-w-6xl  mx-auto">
        {/* Header */}
        <div className="text-center py-10">
          <div className="flex justify-center items-center gap-2 mb-2">
            <div className="bg-red-500 p-2 rounded-md">
              <Scale className="w-4 h-4 text-white" />
            </div>
            <p className="uppercase tracking-widest text-red-600 font-semibold text-md">
              Standartlarımız
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Sizler İçin En İyisini Sunuyoruz
          </h1>

          <div className="flex justify-center mt-4 relative h-1">
            <span className="w-16 h-1 bg-red-500 rounded-full animate-move" />
          </div>

          <p className="text-lg pt-3 text-gray-600 max-w-2xl mx-auto">
            Unutulmaz deneyimlerinizi yaşatmak için benimsediğimiz temel
            değerler
          </p>
        </div>

        {/* Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {standards.map((standard, index) => {
            const IconComponent = standard.icon;
            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-xl border-2 border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:border-red-300 hover:bg-red-50"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 p-4 bg-red-50 rounded-full group-hover:bg-red-500 transition-colors duration-300 shadow-sm">
                    <IconComponent className="w-8 h-8 text-red-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-800 mb-3 group-hover:text-red-700 transition-colors duration-300">
                    {standard.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {standard.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Text */}
        <div className="mt-16 text-center">
          <div className="bg-red-50 p-8 rounded-lg border border-red-100">
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              Bu standartlar, her turda size en iyi deneyimi sunma taahhüdümüzün
              temelidir. Kaliteli hizmet anlayışımızla sizlere unutulmaz anılar
              yaşatmak için buradayız.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Standards;
