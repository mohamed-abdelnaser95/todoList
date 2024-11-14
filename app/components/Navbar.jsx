import Image from 'next/image'
import Link from 'next/link'

// features
import Logo from './todo-list.png'
const Navbar = () => {
      return (
            <nav>
                  <Image 
                        src={Logo}
                        alt='ToDo List'
                        width={40}
                  />
                  <h2>ToDo List</h2>
                  <Link href='/'>Dashboard</Link>
                  <Link href='/tickets'>Tickets</Link>
            </nav>
      )
}

export default Navbar