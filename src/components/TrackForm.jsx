import { useState } from "react"

const TrackForm = (props) => {
    
    const initialState = ({
        title: '',
        artist: ''
    })

    const [formData, setFormData] = useState(initialState)
    
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]:event.target.value})
    }
    const hanldeSubmit = (event) => {
        event.preventDefault()
        props.addNewTrack(formData)

    }
    return(
        <form onSubmit={hanldeSubmit}>

            <label htmlFor="title">Title</label>
            <input 
            type="text" 
            name="title" 
            id="title"
            value={FormData.title}
            onChange={handleChange}
            />
            <label htmlFor="artist">Artist</label>
            <input 
            type="text" 
            name="artist" 
            id="artist"
            value={FormData.artist}
            onChange={handleChange}
            />
        <button type="submit">Submit</button>
        
        </form>
    )
}

export default TrackForm