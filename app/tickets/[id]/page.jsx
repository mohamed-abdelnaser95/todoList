import { notFound } from "next/navigation";

export const dynamicParams = false;

export async function generateStaticParams() {
      const res =  await fetch('http://localhost:4000/tickets/');
      const tickets = await res.json()
      return tickets.map(ticket => ({
            id: ticket.id
      }));
}

async function getTicket(id) {
      const res =  await fetch('http://localhost:4000/tickets/'+ id, {
            next : {
                  revalidate : 60
            }
      });

      if(!res.ok){
            notFound();
      }

      return res.json();
}

async function Page ({ params }) {
      const ticketDatails = await getTicket(params.id)
      return (
            <main>
                  <nav><h2>Ticket Detail</h2></nav>
                  <div className="card">
                        <h3>{ticketDatails.title}</h3>
                        <small>created By: {ticketDatails.user_email}</small>
                        <p>{ticketDatails.body}</p>
                        <div className={`pill ${ticketDatails.priority}`}>
                              {ticketDatails.priority}
                        </div>
                  </div> 
            </main>
      )
}

export default Page