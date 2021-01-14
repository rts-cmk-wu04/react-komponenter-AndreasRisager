// Imagecard.js
import "./Imagecard.css";

function Imagecard({ results }) {

    return (
        <>
            {results[7] && results[7].imagecard.map(function(result) {
                return (
                <article className="imagecard" key={result.id}>
                    <img src={result.image} alt=""/>
                    <div className="text">
                        <h2 style={{color: result.categoryColor}}>{result.category}</h2>
                        <p>{result.text}</p>
                    </div>
                </article>
                )
            })}
        </>
    )
}

export default Imagecard;