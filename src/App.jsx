import { useState,useEffect } from 'react'
import './App.css'
import * as trackService from './services/trackServices'
import TrackList from './components/TrackList'
import TrackDetails from './components/TrackDetails'

function App() {
  const [trackList, setTrackList] = useState([])
  const [selected, setSelected] = useState([])
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

  return (
    <>
    <h1>Jukebox</h1>
      
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
