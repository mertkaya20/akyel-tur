// file: components/Services.jsx
import React from "react";
import { ChevronDown, Copy } from "lucide-react";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: "Okul Servisi",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus animi, a odit vel, voluptatem sit, obcaecati ipsam tempore corporis fugiat hic! Eaque non velit culpa dolor accusamus aspernatur nihil est?",
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 2,
      title: "Etüt Servisleri",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus animi, a odit vel, voluptatem sit, obcaecati ipsam tempore corporis fugiat hic! Eaque non velit culpa dolor accusamus aspernatur nihil est?",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 3,
      title: "Fabrika Personel Taşımacılığı",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus animi, a odit vel, voluptatem sit, obcaecati ipsam tempore corporis fugiat hic! Eaque non velit culpa dolor accusamus aspernatur nihil est?",
      image:
        "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 4,
      title: "Grup Gezi Turları",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus animi, a odit vel, voluptatem sit, obcaecati ipsam tempore corporis fugiat hic! Eaque non velit culpa dolor accusamus aspernatur nihil est?",
      image:
        "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 5,
      title: "VIP Servis",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus animi, a odit vel, voluptatem sit, obcaecati ipsam tempore corporis fugiat hic! Eaque non velit culpa dolor accusamus aspernatur nihil est?",
      image:
        "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <section className="w-full pb-20">
      <div className="text-center py-10">
        <div className="flex justify-center items-center gap-2 mb-2">
          <div className="bg-red-500 p-2 rounded-md">
            <Copy className="w-4 h-4 text-white" />
          </div>
          <p className="uppercase tracking-widest text-red-600 font-semibold text-md">
            Hizmetlerimiz
          </p>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Ayrıcalıklı Hizmetler
        </h1>

        <div className="flex justify-center mt-4 relative h-1">
          <span className="w-16 h-1 bg-red-500 rounded-full animate-move" />
        </div>
      </div>

      <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-7 sm:px-8 md:px-14 lg:px-20 xl:px-32">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="group bg-white rounded-3xl shadow-xl overflow-hidden h-[500px] w-full transform transition duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl flex flex-col"
          >
            <div className="relative h-56">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute -bottom-4 left-4 z-10">
                <div className="bg-red-500 rounded-xl p-3 shadow-lg">
                  <div className="grid grid-cols-2 gap-1">
                    <div className="w-2 h-2 bg-white rounded-sm"></div>
                    <div className="w-2 h-2 bg-white rounded-sm"></div>
                    <div className="w-2 h-2 bg-white rounded-sm"></div>
                    <div className="w-2 h-2 bg-white rounded-sm"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col flex-grow justify-between px-6 pt-10 pb-6">
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-gray-800 mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-m leading-relaxed line-clamp-4">
                  {service.description}
                </p>
              </div>

              <div className="mt-auto flex justify-center">
                <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 transition-colors duration-300 rounded-xl p-3 shadow-lg">
                  <p className="text-white text-sm font-semibold">
                    Devamını Gör
                  </p>
                  <ChevronDown className="w-5 h-5 mt-1 text-white transition-all duration-300 transform group-hover:-rotate-90" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
