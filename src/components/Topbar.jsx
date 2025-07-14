import React, { useState, useEffect, useRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AkyelLogo from "../assets/akyellogo.png";
import { Link } from "react-router-dom";

const Topbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  // Dropdown
  const dropdownRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const closeServicesDropdown = () => {
    setIsServicesDropdownOpen(false);
  };

  const toggleMobileServices = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesDropdownOpen(false);
      }
    };

    if (isServicesDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup function
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isServicesDropdownOpen]);

  const services = [
    { name: "Okul Servisi", href: "/hizmetler/ogrenci-tasimaciligi" },
    { name: "Etüt Servisleri", href: "/hizmetler/etut-servisleri" },
    {
      name: "Personel Taşımacılığı",
      href: "/hizmetler/personel-tasimaciligi",
    },

    { name: "Grup Gezi Turları", href: "/hizmetler/grup-gezi-turlari" },
    { name: "VIP Servis", href: "/hizmetler/vip-servis" },
  ];

  return (
    <section className="w-full bg-white shadow-lg border-b border-gray-100 relative">
      <div className="w-full flex justify-between px-7 sm:px-8 md:px-14 lg:px-20 xl:px-32 gap-6 items-center py-4">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-32 h-12 flex items-center justify-start">
            <Link to="/">
              <img
                src={AkyelLogo}
                alt="Akyel Logo"
                className="max-w-full max-h-full object-contain"
              />
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="items-center lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 relative z-50"
            aria-label="Menüyü aç/kapat"
          >
            <MenuIcon className="text-gray-700 w-6 h-6" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-8 items-center">
          <li>
            <Link
              to="/"
              className="text-gray-700 hover:text-red-500 font-medium transition-colors duration-200 relative group"
            >
              Ana Sayfa
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/hakkimizda"
              className="text-gray-700 hover:text-red-500 font-medium transition-colors duration-200 relative group"
            >
              Hakkımızda
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={toggleServicesDropdown}
              className="cursor-pointer text-gray-700 hover:text-red-500 font-medium transition-colors duration-200 relative group flex items-center gap-1"
            >
              Hizmetlerimiz
              <ExpandMoreIcon
                className={`w-4 h-4 transition-transform duration-200 ${
                  isServicesDropdownOpen ? "rotate-180" : ""
                }`}
              />
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </button>

            {/* Desktop Dropdown Menu */}
            <div
              className={`absolute top-full left-0 mt-2 w-64 bg-white shadow-xl border border-gray-100 rounded-lg overflow-hidden transition-all duration-300 z-50 ${
                isServicesDropdownOpen
                  ? "opacity-100 visible transform translate-y-0"
                  : "opacity-0 invisible transform -translate-y-2"
              }`}
            >
              <div className="py-2">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.href}
                    onClick={closeServicesDropdown}
                    className="block px-4 py-3 text-gray-700 hover:text-red-500 hover:bg-gray-50 transition-colors duration-200 font-medium"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </li>
          <li>
            <Link
              to="/arac-filomuz"
              className="text-gray-700 hover:text-red-500 font-medium transition-colors duration-200 relative group"
            >
              Filomuz
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link to="/iletisim">
              <button className="cursor-pointer bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 shadow-md hover:shadow-lg">
                İletişim
              </button>
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" onClick={closeMobileMenu}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        </div>
      )}

      {/* Mobile Menu */}
      <div
        className={`
        fixed top-0 left-0 right-0 bg-white shadow-lg z-50 
        transform transition-transform duration-300 ease-in-out lg:hidden
        ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"}
      `}
      >
        <div className="px-7 sm:px-8 py-4">
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="w-32 h-12 flex items-center justify-start">
              <img
                src={AkyelLogo}
                alt="Akyel Logo"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="Menüyü kapat"
            >
              <CloseIcon className="text-gray-700 w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <nav className="space-y-2">
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="block py-3 text-gray-700 hover:text-red-500 font-medium transition-colors duration-200"
            >
              Ana Sayfa
            </Link>
            <Link
              to="/hakkimizda"
              onClick={closeMobileMenu}
              className="block py-3 text-gray-700 hover:text-red-500 font-medium transition-colors duration-200"
            >
              Hakkımızda
            </Link>

            {/* Mobile Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleMobileServices}
                className="w-full flex items-center py-3 text-gray-700 hover:text-red-500 font-medium transition-colors duration-200"
              >
                Hizmetlerimiz
                <ExpandMoreIcon
                  className={`w-5 h-5 ml-1 transition-transform duration-200 ${
                    isMobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Mobile Services Submenu */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isMobileServicesOpen
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-4 space-y-1 bg-gray-50 rounded-lg mt-2">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      onClick={closeMobileMenu}
                      className="block py-2 px-3 text-gray-600 hover:text-red-500 font-medium transition-colors duration-200 text-sm"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link
              to="/arac-filomuz"
              onClick={closeMobileMenu}
              className="block py-3  text-gray-700 hover:text-red-500 font-medium transition-colors duration-200"
            >
              Filomuz
            </Link>
            {/* Mobile Communication */}
            <div className="pt-4">
              <Link
                to="/iletisim"
                onClick={closeMobileMenu}
                className="block w-full"
              >
                <button className="w-full bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                  İletişim
                </button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
