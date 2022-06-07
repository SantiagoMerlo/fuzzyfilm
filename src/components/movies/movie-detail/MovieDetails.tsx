import React from "react";

type MovieDetailsProps = {
    values: {
        label: string,
        data: string
    }[]
}

export default function MovieDetails({ values }: MovieDetailsProps) {
    return <>
        {values.map(({ label, data }, index) => data && <div key={index} id={label} className="text-sm mt-3">
            <p><span className="font-bold text-indigo-600 capitalize">{label}:</span> {data}</p>
        </div>
        )}</>
}
