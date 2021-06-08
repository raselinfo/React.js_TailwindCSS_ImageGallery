import React, { useEffect, useState } from "react"
import ImagesCard from "./components/ImagesCard"
import ImageSearch from "./components/ImageSearch"
function App() {  
  const [images,setImages]=useState([])
  const [isLoding,setIsLoading]=useState(true)
  const [term,setTerm]=useState("")

  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_Key}&q=${term}&image_type=photo&pretty=true`)
    .then(res=>res.json())
    .then(data=>{
      setImages(data.hits)     
      setIsLoading(false)
  
    })
    .catch(err=>{
      console.log(err)
    })
  },[term])

  return (
   <div className="container mx-auto">
     <ImageSearch searchText={(text)=>setTerm(text)}></ImageSearch>
      {!isLoding && images.length === 0 && <h1 className="text-6xl text-center mx-auto mt-32">No Images found</h1>}
     {
        isLoding ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : <div className="grid grid-cols-3 gap-4">
          {
            images.map((image) => {
              return <ImagesCard key={image.id} image={image}></ImagesCard>
            })
          }

        </div>
     }
    
   </div>
  );
}

export default App;
