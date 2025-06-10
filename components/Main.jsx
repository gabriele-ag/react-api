import {useState} from 'react'
import {useEffect} from 'react'
import axios from 'axios'



function Main () {
    const [actress, setActress] = useState([])

    const apiUrl = "https://lanciweb.github.io/demo/api/actresses/";

    useEffect(() => {
            axios.get(apiUrl).then((resp) => {
            const actressList = resp.data
            setActress(actressList)
            console.log(actressList)
        });
    },[])


    return (
            <div className="container">
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
            </div>

    )
}

export default Main