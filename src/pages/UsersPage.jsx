import { useContext, useEffect, useState } from "react"
import { getUsers } from "../utils/api"
import { UserCard } from "../components/UserCard"
import { UserContext } from "../context/userContext"

export const UsersPage = () => {

  const [users, setUsers] = useState([])
  const [isLoadingUsers, setIsLoadingUsers] = useState(true)
  const [isErrorLoadingUsers, setIsErrorLoadingUsers] = useState(false)

  useEffect(() => {
    getUsers()
      .then((users) => {
        setUsers(users)
        setIsLoadingUsers(false)
      })
      .catch((err) => {
        console.log(err)
        setIsErrorLoadingUsers(true)
      })
  }, [])

  return (
    <section className="">
      <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {users.map((user) => {
          return (
            <li key={user.username} >
              <UserCard 
                 username={user.username} 
                 avatar_url={user.avatar_url}
              />
            </li>
          )
        })}
      </ul>
    </section>
  )
}
