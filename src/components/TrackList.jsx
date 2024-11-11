const TrackList = (props) => {
    
    const tracks = props.trackList.map((track) => (

        <article key={track._id}>
            <h2>{track.title}</h2>
            <p>Artist: {track.artist}</p>
            <button>Play</button>
            <button onClick={() => props.removeTrack(track._id)}>Delete</button>
        </article>
    ))
    
    return(
        <>
        {tracks.length === 0 ? <h2>No Tracks Yet</h2>:<>{tracks}</>}
        </>    
        
    )
}

export default TrackList