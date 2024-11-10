const TrackDetails = ({selected}) => {
    
    
    return(
        <article>
            <h2>Title: {selected.title}</h2>
            <p>Artist: {selected.artist}</p>
            
        </article>
    )
}

export default TrackDetails