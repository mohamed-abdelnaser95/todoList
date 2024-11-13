async function getTicket(id) {
      const res =  await fetch('http://localhost:4000/tickets/'+ id, {
            next : {
                  revalidate : 0
            }
      });

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