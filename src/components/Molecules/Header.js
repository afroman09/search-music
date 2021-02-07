import React,{ useState } from 'react'
import { useHistory } from 'react-router-dom'

const Header = () => {

    const [term, setTerm] = useState('')
    const history = useHistory()

    
    const handleSubmit = e => {
        e.preventDefault()
        history.push(`/Search?query=${term}`)
    }

    return (
        <div>
            <form onSubmit={ handleSubmit }>
            <input 
            type="text" 
            placeholder="検索" 
            // 値が変更されるたびにstateを更新
            onChange={(e) => setTerm(e.target.value)} 
            value={term}/>
            <button type="submit">🔍</button>
            </form>
        </div>
    )
}

export default Header
