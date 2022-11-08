import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUser } from '../redux/userredux'


export const Listaja = () => {
    const { user } = useSelector((state) => state.user)
    const dispach = useDispatch()
    const url = 'https://fakestoreapi.com/users';
    useEffect(() => {
        const fetching = () => {
            dispach(fetchUser(url))
        }
        fetching()
        console.log(user);
    }, [url])

    return (
        <div>{JSON.stringify(user)}</div>
    )
}
