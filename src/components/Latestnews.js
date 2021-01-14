// Latestnews.js
import "./Latestnews.css";

function Latestnews({ results }) {

    return (
        <section className="latestnews">
            <h1>Latest news</h1>
            {results[5] && results[5].latest.map(function(result) {
                return (
                <article className="news" key={result.id}>
                    <img src={result.image} alt=""/>
                    <div className="text">
                        <h2 style={{color: result.categoryColor}}>{result.category}</h2>
                        <p>{result.text}</p>
                    </div>
                </article>
                )
            })}
            <button>More news</button>
        </section>
        
    )
}

export default Latestnews;