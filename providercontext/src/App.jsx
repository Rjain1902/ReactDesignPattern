import { useState ,useEffect} from 'react'
import './App.css'

function App() {
  const [loading, setIsLoading] = useState(true)
  const[data,setData]=useState(null)

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>(res.json()))
    .then((data)=>{
      setTimeout(()=>{
        setData(data)
        console.log(data)
        setIsLoading(false)

      },2000)
    })

  },[])
  if(loading){
    return <h1>Loading..</h1>
  }

  return (
    <div>
      {data.map((data)=>  <>
        <h1>{data.id}</h1>
        <h1>{data.name}</h1></> 
       
        
      )}
    </div>
  )
}

export default App
