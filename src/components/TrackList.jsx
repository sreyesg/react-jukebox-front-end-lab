const TrackList = (props) => {
    // console.log(props.trackList)
    const tracks = props.trackList.map((track) => (
        
        <a key={track._id}>
            <li>{track.title}</li>
        </a>
    ))
    
    return(
        <div>
            <h1>Track List</h1>
            {tracks.length === 0 ? <h2>No Tracks Yet</h2>:<ul>{tracks}</ul>}
        </div>
    )
}

export default TrackList