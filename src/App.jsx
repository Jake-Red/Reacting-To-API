import React, { useEffect, useState, } from 'react';
import PeopleDisplay from './components/peopledisplay';
import FilmDisplay from './components/filmsdisplay';

const App = () =>{          {/* I don't know how to load the components on screen*/}

    const handlePeopleLoad = () =>{
        return(
            <PeopleDisplay />
        )
    }

     const handleFilmLoad = () => {
        return (
            <FilmDisplay />
        )
    }


    return(
        <>
        <button className='bg-primary text-white' onClick={handlePeopleLoad}>Load People</button>
        <button className='bg-primary text-white'onClick={handleFilmLoad}>Load Films</button>
        </>
    )
}

export default App