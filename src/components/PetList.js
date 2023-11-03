import Pet from "./Pet"

function PetList({pets}){

    const petComponents = pets.map(pet => {
        console.log(pet)
        return <Pet key={pet.id} pet={pet}/>
    })

    return <ul>
        {petComponents}
    </ul>
}

export default PetList