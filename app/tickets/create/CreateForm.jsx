"use client"
import { useRouter } from "next/navigation";
import { useState } from "react"

export default function CreateForm() {
      const router = useRouter();
      const [title, setTitle] = useState();
      const [body, setBody] = useState();
      const [user_email, setEmail] = useState();
      const [priority, setPriority] = useState("low");
      const [isLoading, setIsLoading] = useState(false);

      async function handleSubmit (e) {
            e.preventDefault();
            const ticket = { title, body, user_email, priority };
            setIsLoading(true);

            const res = await fetch('http://localhost:4000/tickets', {
                  method: "POST",
                  headers: {'content-type' : 'application/json'},
                  body: JSON.stringify(ticket)
            })

            if(res.status === 201){
                  setIsLoading(false);
                  router.refresh();
                  router.push('/tickets');
            }
      } 
      return (
            <form className="w-1/2" onSubmit={handleSubmit}>
                  <label>
                        <span>Title:</span>
                        <input 
                              required
                              type="text" 
                              onChange={(e)=> setTitle(e.target.value)}
                              value={title}
                        />
                  </label>
                  <label>
                        <span>Body:</span>
                        <textarea 
                              required
                              onChange={(e)=> setBody(e.target.value)}
                              value={body}
                        />
                  </label>
                  <label>
                        <span>Email:</span>
                        <input 
                              required
                              type="text" 
                              onChange={(e)=> setEmail(e.target.value)}
                              value={user_email}
                        />
                  </label>
                  <label>
                        <span>Priority:</span>
                        <select 
                              required
                              onChange={(e)=> setPriority(e.target.value)}
                              value={priority}
                        >
                              <option value='low'>Low Priority</option>
                              <option value='medium'>Medium Priority</option>
                              <option value='high'>High Priority</option>
                        </select>
                  </label>

                  <button className="btn-primary" disabled={isLoading}>
                        {isLoading ? 
                              <span>Loading.....</span>
                              :
                              <span>Add Ticket</span>
                        }
                  </button>
            </form>
      )
}
