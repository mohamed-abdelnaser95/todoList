import { Suspense } from 'react'
import TicketList from './ticketList'
import Loading from '../loading'

const Tickets = () => {
      return (
            <main>
                  <h2>Tickets</h2>
                  <Suspense fallback={<Loading />}>
                        <TicketList />
                  </Suspense>
            </main>
      )
}

export default Tickets