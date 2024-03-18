import React from "react";
import {equips} from "./equipment.js"

const CN = 0;
//const EN = 1;
export const prePath_fac = "assets/faculty/";

export const staffs = { staff_01: {
  Name_en: "Dr. Mao Zhenjun",
  Name_cn: "毛侦军 博士",
  Role_en: "Assistant Researcher",
  Role_cn: "助理研究员",
  Email: "maozhenjun@zju.edu.cn",
  Equip: ["NMR", ],
  Photo: prePath_fac + "faculty_Mao_zj.jpg",
  Tel: "88206126-8225",
  MP: "15088689276",

 },

staff_02: {
  Name_en: "Dr. He Guijin",
  Name_cn: "何桂金 博士",
  Role_en: "Lab Officer",
  Role_cn: "实验师",
  Email: "guikinghe@zju.edu.cn",
  Equip: ["STA", "XRD", "ITC"],
  Photo: prePath_fac + "faculty_He_gj.jpg",
  Tel: "88206126-8330",
  MP: "13732234303", 
},

staff_03: {
  Name_en: "Dr. Gu Haorui",
  Name_cn: "顾昊睿 博士",
  Role_en: "Lab Officer",
  Role_cn: "实验师",
  Email: "471017772@qq.com",
  Equip: ["LC-TOF-MS" , 'FTIR' ], //TODO: "ATR fourier transform IR will be added"
  Photo: prePath_fac + "faculty_Gu_hr.jpg",
  Tel: "88206126-8218",
  MP: "18768114519", 
},                      
staff_04: {
  Name_en: "Lan Guochun (Master's)",
  Name_cn: "蓝国纯 硕士",
  Role_en: "Lecturer",
  Role_cn: "讲师",
  Email: "langch@zju.edu.cn",
  Equip: ["GC-MS" , ],
  Photo: prePath_fac + "faculty_Lan_gc.jpg",
  Tel: "88206126-8000",
  MP: "13634112371", 
},

staff_05: {
  Name_en: "Qin Minrui (Master's)",
  Name_cn: "秦敏锐 硕士",
  Role_en: "Lab Officer",
  Role_cn: "实验师",
  Email: "qmr0906@163.com",
  Equip: ["EA" , ],
  Photo: prePath_fac + "faculty_Qin_minrui.jpg",
  Tel: "88206126-8506",
  MP: "15868452010", 
},

staff_06: {
  Name_en: "Fang Fang (Master's)",
  Name_cn: "方芳 硕士",
  Role_en: "Lab Officer",
  Role_cn: "实验师",
  Email: "finedf@126.com",
  Equip: ["NanoPS-ZetaPA" , "SEM",],
  Photo: prePath_fac + "faculty_Fang_f.jpg",
  Tel: "88206126-8218",
  MP: "13858055080", 
},

staff_07: {
  Name_en: "Shao Dongbei (Master's)",
  Name_cn: "邵东贝 硕士",
  Role_en: "Lab Officer",
  Role_cn: "实验师",
  Email: "iamlucky@zju.edu.cn",
  Equip: ["AMP", ],
  Photo: prePath_fac + "faculty_Shao_bd.jpg",
  Tel: "88206126-8506",
  MP: "13867405056", 
},

staff_08: {
  Name_en: "Dr. Chen Chen",
  Name_cn: "陈晨 博士",
  Role_en: "Lab Officer",
  Role_cn: "实验师",
  Email: "0020578@zju.edu.cn",
  Equip: ["Raman", ],
  Photo: prePath_fac + "faculty_Chen_c.jpg",
  Tel: "88206126",
  MP: "17328678209", 
},

staff_09: {
  Name_en: "Dr. Zhao Lingli",
  Name_cn: "赵玲丽 博士",
  Role_en: "Lab Officer",
  Role_cn: "实验师",
  Email: "ll.zhao@zju.edu.cn",
  Equip: ["CD", ],
  Photo: prePath_fac + "faculty_Zhao_ll.jpg",
  Tel: "88206126-8205",
  MP: "15501122211", 
},
staff_10: {
  Name_en: "Dr. Hu Fang",
  Name_cn: "胡芳 博士",
  Role_en: "Lab Officer",
  Role_cn: "实验师",
  Email: "hufangchem@zju.edu.cn",
  Equip: ["Others",],
  Photo: prePath_fac + "faculty_Dummy_f.jpg",
  Tel: "88206126",
  MP: "15868191854", 
},
}

export function Personnel({lang}) {
    const personnel_title = (lang===CN)?'平台成员':"Staff";
    const grids = [[staffs.staff_01, staffs.staff_02], 
                   [staffs.staff_03, staffs.staff_04],
                   [staffs.staff_05, staffs.staff_06],
                   [staffs.staff_07, staffs.staff_08],
                   [staffs.staff_09, staffs.staff_10],
                  ];
  
    return (
      <div>
  
        
        <h2>{personnel_title}</h2>
        <br/>
  
         { 
          grids.map((row)=>{ return (
            <tr><td width="80px"></td>
            {
              row.map((person)=>{
  
                const Name = lang===CN ? person.Name_cn: person.Name_en;
                const Role = lang===CN ? person.Role_cn: person.Role_en;
                const Contact = lang===CN ? ['电话','手机']: ['Tel', 'Mobile'];
                const Email = person.Email, email_link = `mailto:${Email}`;
                const Equips = person.Equip;
                const Tel = person.Tel;
                const MP = person.MP;
                const Managed = lang===CN ? '主管': 'in charge of';
  
                return (

                
                <td width="420px">
                  <tr>
                    <td width="170px">
                      <img src={person.Photo} width="162" height="216" alt={person.Name_en}/>
                    </td>
                    <td width="250px" class="fac_intro_text">
                        <strong>{Name}</strong><br/>
                        {Role}<br/><br/>

                        Email: <a class="highlight_shift" href={email_link}>{Email}</a><br/>
                        {Contact[0]}: {Tel}<br/>
                        {Contact[1]}: {MP}
                        <br/><br/>

                        {Managed}

                        {
                          Equips.map((equip)=> {
                            const equip0 = equips[equip];
                            const equip_name = (lang===CN) ? equip0['Name_cn']: equip0['Name_en']

                            return (<div>{equip_name} <br/></div>);
                          })
                        }
                    </td>
                  </tr>
                </td>
              )})
  
            }
            <td width="80px"></td></tr>
  
          ) })
  
         }
  
      </div>
  
  
    )
  
  }