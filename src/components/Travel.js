// Travel.js
import "./Travel.css";

function Travel({ result }) {
    // console.log(result[0] && result[0].travel.image);


    return (
        <article className="travel">
            <img src={result[0] && result[0].travel.image} alt=""/>
            <div>
                <span>{result[0] && result[0].travel.category}</span>
                <h1>{result[0] && result[0].travel.title}</h1>
                <p>{result[0] && result[0].travel.text}</p>
            </div>
        </article>
    )
}

export default Travel;