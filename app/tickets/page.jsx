import { Suspense } from 'react'
import TicketList from './ticketList'
import Loading from '../loading'
import Link from 'next/link'

const Tickets = () => {
      return (
            <main>
                  <nav>
                        <h2>Tickets</h2>
                        <Link href='/tickets/create'>Create Ticket</Link>
                  </nav>
                  <Suspense fallback={<Loading />}>
                        <TicketList />
                  </Suspense>
            </main>
      )
}

export default Tickets