import { useState,useEffect } from 'react'
import './App.css'
import * as trackService from './services/trackServices'
import TrackList from './components/TrackList'
import TrackDetails from './components/TrackDetails'
import TrackForm from './components/TrackForm'

function App() {
  const [trackList, setTrackList] = useState([])
  const [selected, setSelected] = useState([])
  const [isFormOpen, setIsFormOpen] =useState(false)
  // Default Data
  useEffect(() => {
    
    const fetchTracks = async() => {
      try {
        const tracks = await trackService.index() 
        if(tracks.error){
          throw new Error(tracks.Error)
        }
        setTrackList(tracks)
      } catch (error) {
        console.log(error)
      }
    } 
    fetchTracks()  
  },
  [])

  const updateSelected = (selectedTrack) => {
    setSelected(selectedTrack)  
  }
  const updateIsFormOpen = () => {
    setIsFormOpen(!isFormOpen)
  }

  const addNewTrack = (formData) => {
    console.log(formData,'for new Track')
  }
  return (
    <>
    <h1>Jukebox</h1>
      
      <button onClick={updateIsFormOpen}>{isFormOpen ? "close Form": "New Track"}</button>
      {isFormOpen ? <TrackForm addNewTrack={addNewTrack}/>:''}
      <TrackList 
      trackList={trackList}
      updateSelected={updateSelected}
      />
      
      {selected.length === 0 ? (<h2>No Track selected</h2>)
      :(
      <TrackDetails 
      selected={selected}/>
      
      )}
    </>
  )
}

export default App
