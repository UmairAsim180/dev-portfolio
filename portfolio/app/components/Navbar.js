export default function Navbar() {
  const navigations = [
    { menu: "Home", link: "#," },
    { menu: "About", link: "#," },
    { menu: "Skills", link: "#," },
    { menu: "Contact", link: "#," },
  ]
  return (
    <nav className="fixed z-[10] bg-secondry/50 backdrop-blur-md p-5 w-full">
      <ul className="flex gap-5 font-semibold text-md">
        {
          navigations.map(({ menu, link }, index) => {
            return (
              <a key={index} href={link}>
                <li>{menu}</li>
              </a>
            )
          })
        }
      </ul>
    </nav>
  )
}