import React from 'react';
import Birthdaycard from './Birthdaycard';

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
