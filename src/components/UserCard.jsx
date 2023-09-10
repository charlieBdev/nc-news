export const UserCard = ({ username, avatar_url }) => {

  return (
    <div
      className="w-full flex justify-between items-center p-3 rounded-lg shadow hover:shadow-lg"
    >
        <p>{username}</p>
        <img
            src={avatar_url}
            className="rounded-full w-12 h-12"
        />
    </div>
  )
}
