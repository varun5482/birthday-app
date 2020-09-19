import React from 'react';
import Birthdaycard from './Birthdaycard';

//Component is used to hold all the day Cards from MON-SUN which is being iterated by map
const CardHolder = (props) => {    
    return (
        <div className='card-holders'>
            {props.data.map(birthdayCards => {
                return <Birthdaycard dayData = {birthdayCards} />
            })}
        </div>
    )
}

export default CardHolder
