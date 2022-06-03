import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import AxiosClient from "../../lib/axios";

export default function MovieDetailsPage() {

    const { id } = useParams()

    useEffect(() => {
        (async () => {
            const request = await AxiosClient.get(`shows/${id}`)
            console.log(request)
        })()
        
    }, [])

    return <h3>Detail Page</h3>
}