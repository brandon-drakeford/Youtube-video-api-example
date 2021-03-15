import React, { useEffect, useState } from 'react'

export default function SearchBar (props) {
    const [term, setTerm] = useState('')
    const [debouncedTerm, setDebouncedTerm] = useState(term)

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term)
        }, 1000)

        return () => {
            clearTimeout(timerId)
        }
    }, [term])

    useEffect(() => {
        if (debouncedTerm) {
            props.onFormSubmit(debouncedTerm)
        }
    }, [debouncedTerm])

    function onFormSubmit (e){
        e.preventDefault()
        props.onFormSubmit(term)
    }

    return (
        <div className="search-bar ui segment">
            <form onSubmit={onFormSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input type="text" onChange={(e) => setTerm(e.target.value)} value={term} />
                </div>
            </form>
        </div>
    )
}