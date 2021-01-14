// VR.js
import "./VR.css";

function VR({ result }) {


    return (
        <article className="VR">
            <img src={result[8] && result[8].virtual[0].image} alt=""/>
            <span className="bookmark"></span>
            <h1>{result[8] && result[8].virtual[0].title}</h1>
            <h2>{result[8] && result[8].virtual[0].category}</h2>
        </article>
    )
}

export default VR;