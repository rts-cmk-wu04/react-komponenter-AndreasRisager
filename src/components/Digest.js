// Digest.js
import "./Digest.css";

function Digest({ results }) {

    return (
        <section className="digest">
            <h1>News digest</h1>
            {results[10] && results[10].digest.map(function(result) {
                return (
                <article className="newsDigest" key={result.id}>
                    <span className="bulletpoint" style={{backgroundColor: result.color}}>{result.number}</span>
                    <h2>{result.title}</h2>
                    <p>{result.text}</p>
                </article>
                )
            })}
        </section>
    )
}

export default Digest;