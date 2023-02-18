import { useEffect, useState } from "react";

export default function useRead(isDeleting) {
    const [isFetching, setIsFetching] = useState(true);
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_PROXY}/api/karyawan`, {
            method: 'GET',
        })
            .then(res => {
                return res.json()
            }).then(response => {
                setIsFetching(false)
                setPeople(response)
            }).catch(err => {
                console.log(err)
            })
    }, [isFetching, isDeleting])

    return { isFetching, people }
}