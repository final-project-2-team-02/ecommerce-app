import React from 'react'
import { useSelector } from 'react-redux'

export const Nampil = () => {
    const { user } = useSelector((state) => state.persistedReducer.user)
    return (
        <div>{JSON.stringify(user)}</div>
    )
}
