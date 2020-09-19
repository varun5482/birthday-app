import React,{useState} from 'react';
import '../css/birthdayComponent.css';
import defaultJson from './birthdayJSON.json';

const JsonInput = (props) => {
    const [dataHolder,updateData] = useState({
        jsonData: '',
        year: '',
    });

    const handleChange = (key,e) => {
        let value = e.target.value;
        let dummyData = {...dataHolder};
        dummyData[key] = value;
        updateData(dummyData);
    }

    //ON CLICKING ON UPDATE BUTTON
    const fetchBirthdays = () => {
        let data = {};
        if(dataHolder.jsonData){
            try{
                data.jsonData = JSON.parse(dataHolder.jsonData);
                let dataMissing = false;
                data.jsonData.map(person => {
                    if(!person.name || !person.birthday)
                        dataMissing = true;
                });
                if(dataMissing){
                    alert('The person data should contain birthday and name field. Please click on default json to see the example');
                    return;
                }
            }
            catch(err){
                alert('Enter a valid JSON. Please click Default JSON button to see example');
                return;
            }
        }else{
            alert('Enter JSON data');
            return;
        }
        if(dataHolder.year){
            var today = new Date();
            if(today.setFullYear(dataHolder.year)){
                data.year = dataHolder.year;
            }else{
                alert('Enter valid Year');
                return;
            }
        }else{
            alert('Enter a year');
            return;
        }
        props.updateData && props.updateData(data);
    }

    //GETTING THE DEFAULT EXAMPLE
    const setDefaultJson = () => {
        let dummyData = {...dataHolder};
        dummyData['jsonData'] = JSON.stringify(defaultJson);
        updateData(dummyData);
    }


    return (
        <div className="input-area">
            <div className="text-area-div">
                <textarea className='text-area-style' value={dataHolder.jsonData} onChange={(event) => {handleChange('jsonData',event)}} />
            </div>
            <div className="year-container-div">
                <div className="year-label">Year</div>
                <input className='year-input' type='number' value={dataHolder.year} onChange={(event) => {handleChange('year',event)}} />
                <div className="update-btn" onClick = {fetchBirthdays}>UPDATE</div>
                <div className="update-btn" onClick = {setDefaultJson}>Default JSON</div>
            </div>
        </div>
    )
}

export default JsonInput
