import { useState,useEffect } from 'react'
import './App.css'
import * as trackService from './services/trackServices'
import TrackList from './components/TrackList'


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
    </>
  )
}

export default App
