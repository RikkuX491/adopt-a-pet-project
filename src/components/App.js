import '../App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import {useState, useEffect} from "react"

import Home from "./Home"
import PetList from "./PetList"
import NewPetForm from "./NewPetForm"

function App() {

  const [pets, setPets] = useState([])
  const [formData, setFormData] = useState({})

  useEffect(() => {
    fetch('http://localhost:4000/pets')
    .then(response => response.json())
    .then(petData => setPets(petData))
  }, [])

  function updateFormData(event){
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  function addPet(event){
    event.preventDefault()

    fetch('http://localhost:4000/pets', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(newPet => setPets([...pets, newPet]))
  }

  const routes = [
    {
      path: "/",
      element: <Home/>,
      children: [
        {
          path: "/",
          element: <h1>Welcome to the Home Page</h1>
        },
        {
          path: "/pets",
          element: <PetList pets={pets}/>
        },
        {
          path: "/add_pet",
          element: <NewPetForm updateFormData={updateFormData} addPet={addPet}/>
        }
      ]
    }
  ]

  const router = createBrowserRouter(routes)

  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
