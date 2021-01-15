// Iconcard.js
import "./Iconcard.css";

function Iconcard({ results }) {

    return (
        <section className="iconcards">
            {results[9] && results[9].iconcard.map(function(result) {
                return (
                <article className="iconcard" key={result.id} style={{backgroundColor: result.color}}>
                    <img src={result.image} alt=""/>
                    <h1>{result.title}</h1>
                </article>
                )
            })}
        </section>
    )
}

export default Iconcard;