import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
    }
    
    return (
        
        <div className='alert alert-secondary' style={{backgroundColor:'#90EE90', height:40, padding:5, width: 200}}>
            <label style={{marginLeft: '1rem', color:'white'}} >Currency</label>
            <select name='hover_color' id="currency" onChange={(event)=>changeCurrency(event.target.value)} style={{background:'#90EE90', color:'white', border: 0, }}>
                <option style={{color:'black'}} value="$">$ Dollar</option>
                <option style={{color:'black'}} value="£">£ Pound</option>
                <option style={{color:'black'}} value="€">€ Euro</option>
                <option style={{color:'black'}} value="₹">₹ Rupee</option>
            </select>	
            		
        </div>
    );
};

export default Currency;