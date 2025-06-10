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
        <body>
            <div className="container">
                    <ul className='boxCard'>
                        {actress.map((curActress, index) => (
                            <li key={index} className='list-actress'>
                                <div className='card'>
                                    <h3>{curActress.name}</h3>
                                    <img src={curActress.image} alt="actress-image" />
                                    <p className='biography'>{curActress.biography}</p>
                                    <p className='birthyear'>{curActress.birth_year}</p>
                                    <p className='nationality'>{curActress.nationality}</p>
                                    <p className='awards'>{curActress.awards}</p>
                                </div>
                            </li>
                        )
                    )}
                    </ul>
            </div>
        </body>
    )
}

export default Main