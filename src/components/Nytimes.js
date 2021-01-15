// Nytimes.js
import "./Nytimes.css";

function Nytimes({ results }) {

    

    return (
        <section className="nytimescards">
            {results[11] && results[11].nytimes.map(function(result) {
                var backgroundStyle = {
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundImage: "url(" + result.background_image + ") "
                }
                
                return (
                <article className="nytimescard" key={result.id} style={ backgroundStyle }>
                    <div className="publisher">
                        <img src={result.logo} alt={result.publisher}/>
                        <p>{result.publisher}</p>
                    </div>
                    <p className="nytimescard__text">{result.text}</p>
                    <a href="/" style={{color: result.buttonColor, border: result.buttonBorder}}>{result.button}</a>
                </article>
                )
            })}
        </section>
    )
}

export default Nytimes;