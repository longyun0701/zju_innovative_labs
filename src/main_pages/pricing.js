import React from "react";
import {equips, prePath_reserv, Priced_abbrs, TextWithMarkup} from "./equipment.js"

const CN = 0;
//const EN = 1;

export function Pricing({lang}) {

    const reserv = (lang===CN)?"点击预约": "Book a slot";
    const columns_cn = ['现有仪器', '所在位置', '校内标准', '校外标准', '预约链接'];
    const columns_en = ['Equipment', 'Location', 'Internal Fee', 'External Fee', 'Reserve It'];
    const cols = (lang===CN)?columns_cn: columns_en;

    return (
        <div>

        <br/>

        <tr className="underscore-row" align="center">
            <td width=""><b>{cols[0]}</b></td>
            <td width=""><b>{cols[1]}</b></td>
            <td width=""><b>{cols[2]}</b></td>
            <td width=""><b>{cols[3]}</b></td>
            <td width=""><b>{cols[4]}</b></td>
        </tr>

        {Priced_abbrs.map((abbr)=>{
            const equip = equips[abbr];
            const cost_in = (lang===CN)?equip['Cost_in_cn']:equip['Cost_in_en'];
            const cost_out = (lang===CN)?equip['Cost_out_cn']:equip['Cost_out_en'];

            const location = (lang===CN)?equip.Location_cn:equip.Location_en ;
            const reserv_link = prePath_reserv + equip.reserv_id;
            const name = (lang === CN) ? equip.Name_cn : equip.Name_en;

            return (

                <tr className="underscore-row2">
                    <td className="equip_intro" width="220px" align="center"><b>{name}</b></td>
                    <td className="equip_intro" width="120px" padding="5px" align="center">{location}</td>
                    <td className="equip_intro" width="280px" padding="5px">{cost_in.map((line)=>{return (<div>{TextWithMarkup(line)}</div>)})}</td>
                    <td className="equip_intro" width="280px" padding="5px">{cost_out.map((line)=>{return (<div>{TextWithMarkup(line)}</div>)})}</td>
                    <td className="equip_intro" width="100px" padding="5px" align="center"><a href={reserv_link} target='_blank' class="highlight_shift"> {reserv} </a></td>                
                </tr>
                
            );

        })}

        </div>


    )



}