import Link from "next/link";
import { FaTicket } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";

const Nav = () => {
  const User = {
    name: "John Doe",
    email: "john@doe.com",
  };
  return (
    <nav className="flex justify-between items-center bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <FaHome className="icon" />
        </Link>
        <Link href="/TicketPage/new">
          <FaTicket className="icon" />
        </Link>
      </div>
      <div>
        <p className="text-default-text ">{User.email}</p>
      </div>
      <Link
        href="/signup"
        className="text-white text-xs border-2 border-white rounded-xl py-2 px-4"
      >
        Sign Up
      </Link>
    </nav>
  );
};

export default Nav;
