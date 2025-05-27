import { useEffect, useState } from "react";
import { Menu } from 'lucide-react';
import { PanelLeftClose } from 'lucide-react';

export default function Navbar() {


  const navigations = [
    { menu: "Home", link: "#home" },
    { menu: "About", link: "#about" },
    { menu: "Skills", link: "#skills" },
    { menu: "Projects", link: "#projects" },
    { menu: "Contact", link: "#contact" },
  ];

  const [activeSection, setActiveSection] = useState("");
  const [navOpen, setnavOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    navigations.forEach(({ link }) => {
      const id = link.replace("#", "");
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
        <nav className="fixed z-10 hidden md:block text-gray-800 bg-gradient-to-r from-white/80 to-gray-100/80 backdrop-blur-lg rounded-full w-[90%] p-4 mx-auto top-4 shadow-lg shadow-gray-400 right-0 left-0">
          <ul className="flex justify-center gap-10 font-medium text-lg">
            {navigations.map(({ menu, link }, index) => {
          const isActive = activeSection === link.replace("#", "");
          return (
            <a
              key={index}
              href={link}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${isActive ? "text-white bg-gradient-to-r from-blue-500 to-blue-700 shadow-md" : "text-gray-600 hover:text-blue-600 hover:bg-gray-200"
            }`}
            >
              <li>{menu}</li>
            </a>
          );
            })}
          </ul>
        </nav>

        {/* Mobile Navigation */}
      <Menu
        className="fixed z-10 text-gray-800 top-4 right-4 md:hidden cursor-pointer"
        size={32}
        onClick={() => setnavOpen(true)}
      />
      <nav
        className={`bg-white z-20 fixed top-0 h-full ${navOpen ? "left-0" : "-left-full"
          } w-[75%] shadow-lg transition-all ease-in-out duration-500`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold text-gray-800">Menu</h2>
          <PanelLeftClose
            className="text-gray-800 cursor-pointer"
            size={32}
            onClick={() => setnavOpen(false)}
          />
        </div>
        <ul className="mt-6 space-y-6 text-lg font-medium px-6">
          {navigations.map(({ menu, link }, index) => {
            return (
              <li key={index}>
                <a
                  href={link}
                  className="block py-2 px-4 rounded-lg text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-all duration-300"
                  onClick={() => setnavOpen(false)}
                >
                  {menu}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
