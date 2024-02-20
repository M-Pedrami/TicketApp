import Link from "next/link"
import { FaTicket} from "react-icons/fa6";
import { FaHome } from "react-icons/fa";


const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <FaHome className="icon"/>
        </Link>
        <Link href="/TicketPage/new">
          <FaTicket className="icon"/>
        </Link>
      </div>
      <div>
        <p className="text-default-text ">pedrami@pedrami.com</p>
      </div>
    </nav>
  )
}

export default Nav
