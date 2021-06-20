import { useState } from 'react'

export const FormInputHooks = () => {
    const [input, setInput] = useState({})

    const handleInputChange = (e) => setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.value
    })

    return [input, handleInputChange]
}