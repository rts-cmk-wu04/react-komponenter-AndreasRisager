// Collection.js
import "./Collection.css";

function Collection({ results }) {

    return (
        <section className="collections">
            {results[3] && results[3].collection.map(function(result) {
                return (
                <article className="collection" key={result.id}>
                    <div className="image">
                        <img src={result.images[0].image} alt=""/>
                        <h2>{result.collection_number}</h2>
                        <img src={result.images[0].profile_image} alt="" className="profileImg"/>
                    </div>
                    <div className="text">
                    <h1>{result.title}</h1>
                    <p>By: {result.author}</p>
                    </div>
                </article>
                )
            })}
        </section>
        
    )
}

export default Collection;