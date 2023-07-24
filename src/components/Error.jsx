import { useNavigate } from "react-router-dom"

const Error = ({errorStatus, errorMessage}) => {

    const navigate = useNavigate()

    return (
        <section className="error">
            <h3>Error!</h3>
            <p>{errorStatus}</p>
            <p>{errorMessage}</p>
            <button className="back-btn" onClick={() => navigate(-1)}>Go back</button>
        </section>
    )
}

export default Error