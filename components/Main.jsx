import {useState} from 'react'
import {useEffect} from 'react'
import axios from 'axios'



function Main () {
    const [actress, setActress] = useState([])
    const [actor, setActor] = useState([])
    const [selectedType, setSelectedType] = useState("tutti")

    const apiUrl = "https://lanciweb.github.io/demo/api/actresses/";
    const apiUrl2 = "https://lanciweb.github.io/demo/api/actors/"

    useEffect(() => {
            axios.get(apiUrl).then((resp) => {
            const actressList = resp.data
            setActress(actressList)
            console.log(actressList)
        });
    },[])

    useEffect(() => {
        axios.get(apiUrl2).then((resp) => {
            const actorList = resp.data
            setActor(actorList)
            console.log(actorList)
        });
    }, []);

    


    return (
                
            <div className="container">
                <select name="" id="">

                </select>
                <option value="">

                </option>
                <h2 className='sectionCelebrityTitle'>Actresses</h2>
                    <ul className='boxCard'>
                        {actress.map((curActress, index) => (
                            <li key={index} className='list-actress'>
                                <div className='card'>
                                    <h3 className='actressName'>{curActress.name}</h3>
                                    <img src={curActress.image} alt="actress-image" />
                                    <p className='biography'>{curActress.biography}</p>
                                    <p className='birthyear'>Date of Birth - {curActress.birth_year}</p>
                                    <p className='nationality'>Nationality - {curActress.nationality}</p>
                                    <p className='awards'>AWARDS - {curActress.awards}</p>
                                </div>
                            </li>
                        )
                    )}
                    </ul>
                    <h2 className='sectionCelebrityTitle'>Actors</h2>
                    <ul className='boxCard'>
                        {actor.map((curActor, index) => (
                            <li key={index} className='list-actress'>
                                <div className='card'>
                                    <h3 className='actressName'>{curActor.name}</h3>
                                    <img src={curActor.image} alt="actress-image" />
                                    <p className='biography'>{curActor.biography}</p>
                                    <p className='birthyear'>Date of Birth - {curActor.birth_year}</p>
                                    <p className='nationality'>Nationality - {curActor.nationality}</p>
                                    <p className='awards'>AWARDS - {curActor.awards}</p>
                                </div>
                            </li>
                        )
                    )}
                    </ul>
                    
            </div>

    )
}

export default Main