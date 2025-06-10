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
                <ul>
                    {actress.map((curActress, index) => (
                        <li key={index} className='list-actress'>{curActress.name}</li>
                    )
                )}
                </ul>
            </div>
        </body>
    )
}

export default Main