import React,{useState} from 'react'
import SearchInput from '../Atoms/SearchInput'
import SearchButton from '../Atoms/SearchButton'
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
            <SearchInput onChange={e => setTerm(e.target.value)} value={term}/>
            <SearchButton/>
            </form>
        </div>
    )
}

export default Header
