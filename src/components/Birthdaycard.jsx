import React from 'react';
import '../css/birthdayComponent.css';

const Birthdaycard = (props) => {
    let {day,birthdays} = props.dayData;
    let totalCards = birthdays.length;
    let cardClass = 'card';
    if(birthdays.length == 0){
        cardClass += ' no-birthday';
    }

    const getRandomColor = () => {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let index = 0; index < 6; index++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const getCard = (birthday) =>{
        let backgroundColor = getRandomColor();
        let widths = {
            maxWidth: '100%',
            minWidth: '100%'
        }
        if(totalCards == 1){
            widths.maxWidth = widths.minWidth = '100%';
        }else if(totalCards < 5 && totalCards > 1){
            widths.maxWidth = '45%';
            widths.minWidth = '44%';
        }else if(totalCards > 4 && totalCards < 9){
            widths.maxWidth = '29%';
            widths.minWidth = '28%';
        }else{
            widths.maxWidth = '20%';
            widths.minWidth = '19%';
        }
        return <div className='card-initals' style={{background:backgroundColor,maxWidth:widths.maxWidth,minWidth:widths.minWidth}}>{birthday}</div>
    }

    return (
        <div className={cardClass}>
            <div className='card-head'>{day}</div>
            <div className='card-body'>
                {birthdays.length > 0 ? birthdays.map(birthday => {
                    return getCard(birthday);
                }):<div className="no-birthday-holder">
                        <div className='first-div'><span>.</span><span>.</span></div>
                        <div className="second-div">~</div>
                    </div>}
            </div>
        </div>
    )
}

export default Birthdaycard;
