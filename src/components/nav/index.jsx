import Logo from "../../assets/images/logo/logo.svg";
import Button from "../shared/Button";

const Nav = () => {
  const menu = [
    { href: "#home", text: "Home" },
    { href: "#about", text: "About" },
    { href: "#pricing", text: "Pricing" },
    { href: "blog-grids.html", text: "Blog" },
  ];

  return (
    <div className="ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent">
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="flex w-full items-center justify-between px-4 py-3">
            <a
              // href="index.html"
              className="navbar-logo block w-60 max-w-full px-4"
            >
              <img src={Logo} alt="logo" className="header-logo h-12" />
            </a>

            <ul className="hidden lg:flex">
              {menu.map((link, index) => (
                <li className="group relative" key={index}>
                  <a
                    href={link.href}
                    className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>

            <div className="sm:flex">
              <Button variant="primary"> Sign In</Button>
              <Button variant="secondary"> Sign In</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
