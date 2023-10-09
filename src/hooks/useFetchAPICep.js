import { useState } from "react"

export const useFetchAPICep = () => {

    const url = 'https://viacep.com.br/ws/'

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const searchCEP = async (cep) => {

        setLoading(true)
        // search the zip
        try {
            const data = await fetch(`${url}${cep}/json/`)
            const res = await data.json()
            setLoading(false)
            return res
        } catch (error) {
            setError(error)
        }

        setLoading(false)
        
    }

    return {searchCEP, loading, error}
}