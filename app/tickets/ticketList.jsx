import Link from "next/link";

async function getTickets() {
      const res = await fetch('http://localhost:4000/tickets', {
            next: {
                  revalidate: 0
            }
      })
      return res.json()
}
export default async function () {
      const tickets = await getTickets();
      return (
            <>
                  {tickets.length > 0 && <p>Currently open ickets open</p>}
                  {tickets.map(ticket => (
                        <Link  key={ticket.id} href={`/tickets/${ticket.id}`}>
                              <div className="card my-4">
                                    <h3>{ticket.title}</h3>
                                    <p>{ticket.body.slice(0, 100)}...</p>
                                    <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
                              </div>
                        </Link>
                  ))}
                  {tickets.length == 0 && (
                        <div className="text-center">There are no open tickets...</div>
                  )}
            </>
      )
}

