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

  const addNewTrack = async(formData) => {
    try {
      const newTrack = await trackService.create(formData)
      if(newTrack.error){
        throw new Error(newTrack.error)
      }
      setTrackList([...trackList, newTrack])
      setIsFormOpen(false)

    } catch (error) {
      console.log(error)
    }

  }
  const removeTrack = async(trackId) => {
    const removedTrack = await trackService.remove(trackId)
    if(removedTrack.error){
      throw new Error(removedTrack)
    }
    setTrackList(trackList.filter((track) => track._id !== removedTrack._id))
  }
  return (
    <>
    <h1>Jukebox</h1>
      
      <button onClick={updateIsFormOpen}>{isFormOpen ? "close Form": "New Track"}</button>
      {isFormOpen ? <TrackForm addNewTrack={addNewTrack}/>:''}
      <TrackList 
      trackList={trackList}
      removeTrack={removeTrack}
      updateSelected={updateSelected}

      />
      
    </>
  )
}

export default App
