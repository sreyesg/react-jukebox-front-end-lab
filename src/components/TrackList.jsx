const TrackList = (props) => {
    
    const tracks = props.trackList.map((track) => (

        <article key={track._id}>
            <h2>{track.title}</h2>
            <p>Artist: {track.artist}</p>
            <button>Play</button>
        </article>
    ))
    
    return(
        <div>
            <h1>Track List</h1>
            {tracks.length === 0 ? <h2>No Tracks Yet</h2>:<ul>{tracks}</ul>}
        </div>
    )
}

export default TrackList