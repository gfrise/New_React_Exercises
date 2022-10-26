import React, { useState, useMemo } from 'react'

export function FilteredList({list}) {
    
    const filter = useMemo(()=> {
        return   list.filter((el) => el.age > 18)
    }, [list])

    return (
        <>
            <ul>
            {filter.map((el) => <li key={el.id}>{el.name}</li>)}
            </ul>
        </>
    )
}