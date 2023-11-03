function Pet({pet}){

    console.log(pet)

    return <li>
        <h1>{pet.name}</h1>
        <img src={pet.image}/>
        <h1>{pet.animal_type}</h1>
    </li>
}

export default Pet