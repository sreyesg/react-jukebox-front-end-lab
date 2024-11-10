import { useState,useEffect } from 'react'
import './App.css'
import * as trackService from './services/trackServices'


function App() {
  const [trackList, setTrackList] = useState([])

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
  return (
    <>
    <h1>This is my app</h1>
    </>
  )
}

export default App
