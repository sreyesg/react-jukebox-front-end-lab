const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`

const index = async() => {
    try {
        const res = await fetch(BASE_URL) 
        return res.json()
        
    } catch (error) {
        console.log(error)
    }
}

// Create 
const create = async(formData) => {
    try {
        res = await fetch(BASE_URL,{
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(formData)
        })
        return res.json()
    } catch (error) {
        console.log(error)
    }
}

// Update

const update = (formData, petId) => {
    try {
        res = fetch(`${BASE_URL}/${petId}`,{
            method: "PUT",
            headers: {"content-type":"application/json"},
            body: JSON.stringify(formData)
        })
    } catch (error) {
        
    }
}
// delete

const remove = async(trackId)=> {
    try {
        res = await fetch(`${BASE_URL}/${trackId}`, {
            method: "DELETE"
        })
        return res.json()
    } catch (error) {
        console.log(error)
    }
}


export {
    index,
    create,
    update,
    remove
}