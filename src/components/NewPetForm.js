import {useNavigate} from "react-router-dom"

function NewPetForm({updateFormData, addPet}){

    const navigate = useNavigate()

    return <form onSubmit={(event) => {
        addPet(event)
        navigate('/pets')
    }}>
        <input onChange={updateFormData} name="name" placeholder="Name"/>
        <input onChange={updateFormData} name="image" placeholder="Image"/>
        <input onChange={updateFormData} name="animal_type" placeholder="Animal Type"/>
        <input type="submit"/>
    </form>
}

export default NewPetForm