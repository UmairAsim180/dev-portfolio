import { useEffect, useState } from "react";

export default function Navbar() {
  const navigations = [
    { menu: "Home", link: "#home" },
    { menu: "About", link: "#about" },
    { menu: "Skills", link: "#skills" },
    { menu: "Projects", link: "#projects" },
    { menu: "Contact", link: "#contact" },
  ];

  const [activeSection, setActiveSection] = useState("");

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
    <nav className="fixed z-[10] text-color6 bg-color2/50 backdrop-blur-md rounded-full w-[90%] p-3 mx-auto top-3 shadow-md shadow-gray-800 right-0 left-0">
      <ul className="flex gap-8 font-semibold text-lg">
        {navigations.map(({ menu, link }, index) => {
          const isActive = activeSection === link.replace("#", "");
          return (
            <a
              key={index}
              href={link}
              className={`px-3 py-1 rounded-full transition-all ${
                isActive ? "text-zinc-800 bg-white" : "text-white"
              }`}
            >
              <li>{menu}</li>
            </a>
          );
        })}
      </ul>
    </nav>
  );
}
