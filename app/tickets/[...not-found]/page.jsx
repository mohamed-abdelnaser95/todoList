import Link from "next/link"

const NotFound = () => {
      return (
            <main className="text-center">
                  <h2 className="text-3xl">There was a problem.</h2>
                  <p>We could not find the ticket you are looking for..</p>
                  <p>Go back to all <Link href='/tickets'>Tickets</Link></p>
            </main>
      )
}

export default NotFound