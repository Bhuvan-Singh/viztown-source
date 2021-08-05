import React from 'react'

export default function Title({title}) {
    return (
        <div className="vt-listing-name my-2">
            <h3 className="font-bold text-black">{title}</h3>
        </div>
    )
}