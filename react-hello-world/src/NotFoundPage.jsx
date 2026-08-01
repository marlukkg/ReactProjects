import { Link } from "react-router-dom"

function NotFoundPage() {

  return (
    <div>
      <h1 style={{ paddingTop: '150px' }}>404 Not Found</h1>
      <Link to="/">Home</Link>
    </div>
  )
}

export default NotFoundPage