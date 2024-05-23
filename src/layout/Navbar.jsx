import { Link } from "react-router-dom";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <a href="#about-section">About</a>
      </li>
      <li>
        <a href="#members-section">Members</a>
      </li>
    </>
  );
  return (
    <div className="navbar bg-goldenM lg:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-4 text-greenM font-semibold z-50 p-2 shadow bg-goldenM rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost p-0 text-greenM text-2xl font-extrabold"
        >
          BAAIOTAS <img className="h-8" src="" alt="" />
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="flex text-greenM font-medium gap-6">{navOptions}</ul>
      </div>
    </div>
  );
};

export default Navbar;
