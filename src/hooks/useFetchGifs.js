import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"


const useFetchGifs = (category) => {


    const [state, setstate] = useState({
        data: [],
        loading: true
    })
    

    useEffect(() => {
        getGifs(category)
            .then(img => setstate({
                data: img,
                loading: false
            }
            ))
    }, [category])

return state

}

export default useFetchGifs
