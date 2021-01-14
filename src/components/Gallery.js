// Gallery.js
import "./Gallery.css";

function Gallery({ results }) {  

    return (
        <section className="gallery">
            {results[4] && results[4].gallery.map(function(result) {
                return (
                <article className="gallery_slide" key={result.id}>
                    <img src={result.big_image} alt="" className="bigImg"/>
                    <div className="content">
                        <div className="slide_bar">
                            <div className="publisher">
                                <img src={result.publisher_image} alt=""/>
                                <p>{result.publisher}</p>
                            </div>
                            <i className="fas fa-heart"></i>
                        </div>
                        <div className="text">
                            <h1>{result.title}</h1>
                            <p>{result.text}</p>
                        </div>
                        <div className="slides">
                            <div className="slideLine"></div>
                            <div className="slideLine"></div>
                            <div className="slideLine"></div>
                        </div>
                    </div>
                </article>
                )
            })}
        </section>
    )
}

export default Gallery;