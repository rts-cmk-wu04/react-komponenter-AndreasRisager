// Newscard.js
import "./Newscard.css";

function Newscard({ results }) {

    return (
        <section className="newscards">
            {results[6] && results[6].newscard.map(function(result) {
                return (
                <article className="newscard" key={result.id}>
                    <img src={result.image} alt=""/>
                    <div className="text">
                        <h2 style={{color: result.categoryColor}}>{result.category}</h2>
                        <p>{result.text}</p>
                    </div>
                </article>
                )
            })}
        </section>
    )
}

export default Newscard;