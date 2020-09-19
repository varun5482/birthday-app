import React,{useEffect,useState} from 'react';
import JsonInput from './JsonInput';
import CardHolder from './CardHolder';
import '../css/birthdayComponent.css';

const BirthdayParent = (props) => {
    let [birthdayDatesHolder,updateBirthdays] = useState([
        {day: 'MON', birthdays: []},
        {day: 'TUE', birthdays: []},
        {day: 'WED', birthdays: []},
        {day: 'THU', birthdays: []},
        {day: 'FRI', birthdays: []},
        {day: 'SAT', birthdays: []},
        {day: 'SUN', birthdays: []},
    ]);
    
    const getInital = (sentName) => {
        let name = sentName.split(" ");
        let inital = '';
        name.map(nameItem => {
            inital += nameItem[0];
        } )
        inital = inital.toUpperCase();
        return inital;
    }

    const resetData = () => {
        let data = [
            {day: 'MON', birthdays: []},
            {day: 'TUE', birthdays: []},
            {day: 'WED', birthdays: []},
            {day: 'THU', birthdays: []},
            {day: 'FRI', birthdays: []},
            {day: 'SAT', birthdays: []},
            {day: 'SUN', birthdays: []},
        ]; 
        return data;       
    }

    const updateData  = (data) => {
        let birthdayDatesTemp = [...birthdayDatesHolder];
        birthdayDatesTemp = resetData();
        let {jsonData,year} = data;
        jsonData.map( person => {
            let birthdate = new Date(person.birthday);
            birthdate.setFullYear(year);
            let inital = getInital(person.name);
            let day = birthdate.getDay();
            day = day == 0 ? 6 : day-1;
            birthdayDatesTemp[day].birthdays.push(inital);
        })
        updateBirthdays(birthdayDatesTemp);
    }

    return (
        <div className='parent-div'>
            <div className='title-div'>Birthday Cal</div>
            <CardHolder data = {birthdayDatesHolder} />
           <JsonInput updateData = {(data) => {updateData(data)}} />     
        </div>
    )
}

export default BirthdayParent;
