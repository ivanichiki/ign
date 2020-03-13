import React,{useState} from "react";
import axios from 'axios'
import {useEffect} from "react";

function DataFetch() {
   const [loading, setLoading] = useState(true)
    const [error,setError] = useState('')
    const [post,setPost] = useState([])
    useEffect(()=> {


     let api =   axios.create({
            headers: {
                'Client-ID': 'lbyztstyczeu8l0b25u1wagcncg0h3'
            }
        })
            api.get('https://api.twitch.tv/helix/streams').then(response=>{
                setLoading(false)
                setPost(response.data.data)
                console.log(response.data.data)
                setError('')
            })
        .catch(error=>{
            setLoading(false)
            setPost({})
            setError('Something went wrong')
        })

        }
   ,[] )

    let Update = ()=> {

        let api =   axios.create({
            headers: {
                'Client-ID': 'lbyztstyczeu8l0b25u1wagcncg0h3'
            }
        })

        api.get('https://api.twitch.tv/helix/streams').then(response=> {
            setPost(response.data.data)
        })
    }

let newpost = post.map(el=> <div>  {el.user_name} </div>)
    return(
        <div>
        {loading?'Loading': post.title}

        {error? error: null}
            {newpost}
            <button onClick={Update}>Обновить</button>
        </div>
    )

}

export default DataFetch