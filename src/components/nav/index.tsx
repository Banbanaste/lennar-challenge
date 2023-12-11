import { useState, FC, ReactElement } from "react";
import SVG from "../svg";

interface HeaderProps {
  onClick: () => void;
  children: ReactElement;
}

// possible abstraction to its own component
// encapsulated in nav for now
const Header: FC<HeaderProps> = ({ onClick, children }) => {
  return (
    <header className="flex items-center justify-between w-full">
      <SVG.Logo />
      <button onClick={onClick}>{children}</button>
    </header>
  );
};

// show/hide dropdown nav items onclick w/ animation
// TODO:
// * working links
// * if the menu gets too large/complex we should make it its own component
// * * it currently has 4 sections
// * possibility for dynamic content?
// * Styled Components refactor?
export const Nav = () => {
  const [showDropdown, setDropdown] = useState(false);

  const onClick = () => {
    setDropdown((prev) => !prev);
  };

  const ANIMATED = `left-0 right-0 opacity-0 ease-in-out duration-300 ${
    showDropdown && "top-0 opacity-100 duration-500"
  }`;

  return (
    <>
      <nav className="relative">
        <Header onClick={onClick}>
          <SVG.Menu />
        </Header>
        <div
          className={`pt-4 px-5 pb-6 bg-white rounded-lg absolute -top-fullnav ${ANIMATED} z-10`}
        >
          <Header onClick={onClick}>
            <SVG.Close />
          </Header>
          <ul className="my-8 text-slate-700 p-none w-full">
            <li className="mb-5">
              <a>Product</a>
            </li>
            <li className="mb-5">
              <a>Features</a>
            </li>
            <li className="mb-5">
              <a>Marketplace</a>
            </li>
            <li className="mb-5">
              <a>Company</a>
            </li>
          </ul>
          <button className="px-4 py-3 bg-indigo-600 rounded-md w-full mb-6">
            Start free trial
          </button>
          <div className="flex justify-center gap-1">
            <span className="text-slate-500">Existing customer?</span>
            <a className="text-bold text-black">Login</a>
          </div>
        </div>
      </nav>
      <div
        className={`absolute top-0 left-0 bg-gray-500 opacity-75 h-screen w-screen z-0 duration-500 ${
          !showDropdown && "hidden duration-300"
        }`}
        onClick={onClick}
      />
    </>
  );
};
