// Services.js
import "./Services.css";

function Services({ results }) {

    return (
        <section className="services">
            {results[2] && results[2].services.map(function(result) {
                return (
                <article className="service" style={{backgroundColor:result.color}} key={result.id}>
                    <img src={result.image} alt=""/>
                    <h1>{result.title}</h1>
                    <p>{result.text}</p>
                </article>
                )
            })}
        </section>
        
    )
}

export default Services;