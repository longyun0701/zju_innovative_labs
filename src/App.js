import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {News00} from "./news_components/news00.js"

import {About} from "./main_pages/about.js"
import {staffs} from "./main_pages/personnel.js"
import {equips, prePath_equip} from "./main_pages/equipment.js"
import {Personnel} from "./main_pages/personnel.js"
import {Equipment, Equip0, Priced_abbrs} from "./main_pages/equipment.js"

import {Pricing} from "./main_pages/pricing.js"

import {useState} from "react";

const CN = 0, EN = 1;

const news_list_cn = [
  //"[新闻] 2023年全国高校化学实验教学研讨会在浙江大学成功举办 [2023/8/23]",
  //"[新闻] 国家级实验教学示范中心阶段性总结专家组到中心考察 [2023/8/14]",
  //"[新闻] 中心与内蒙古师范大学及赤峰学院举行同步课堂教学活动 [2023/6/8]",
  //"[新闻] 我校师生在2022年全国仿真创新应用大赛总决赛中斩获佳绩 [2022/12/12]", 
  "[通知] 关于化学实验教学中心开放实验室的通知 [2021/4/28]"
 ];

const news_list_en = [
  //"[News] 2023 National Seminar for College Chemistry Labs Held in ZJU [2023/8/23]",
  //"[News] Expert Team Conducts Evaluation at the Natinoal-Level Center [2023/8/14]",
  //"[News] Sync. Teaching with NeiMenggu Normal Univ. & ChiFeng College [2023/6/8]",
  //"[News] Won the 2022 SIAC (simulation innovation application) Finals [2022/12/12]", 
  "[Notice] Opening of Facilities at the Chemistry Exp. Teaching Center [2021/4/28]"
];


function GraphicPageTitle({onClickLangFuncs,lang}) {
  const title_en = "Zhejiang University: Innovative Labs of Chemistry, National Demonstration Center";
  const title_cn = "化学国家级实验教学示范中心 浙江大学创新化学实验室";
  const title = (lang===CN)? title_cn:title_en;

  return (
    <div>
      
    <table>
      <td> <h1b color="black">  {title} </h1b> </td> 
      <td align="right"><lang> <div class="highlight_shift" onClick={onClickLangFuncs[0]}>简体中文</div>
                               <div class="highlight_shift" onClick={onClickLangFuncs[1]}>English</div></lang></td>
    </table>

    <table bgcolor="#003f9a">
      <tr height="100">
        <td align="right" width="30%">
          <img src="assets/zjuchemlogo.png" width="280" height="70" alt="logo of ZJU Chem"/>
        </td>

        <td align="center" width="20%">
           
        </td>

        <td align="center" width="50%">
          <img src="assets/qiushi_banner_1.png" width="360" height="90" alt="ZJU Chem Innovative Labs"/> 
        </td>
      </tr>
    </table>

    </div>
  )
}


function L1Tabs({onClickTabFuncs, lang}) {
  const tab_list_en = ['Home', 'About', 'Equipment', 'Test Pricing', 'Contact us'];
  const tab_list_cn = ['首 页', '实 验 室 简 介', '仪 器 设 备', '收 费 标 准','联 系 我 们'];
  const tab_list = (lang===CN)?tab_list_cn:tab_list_en;

  return (<div>
    
      <table bgcolor="#305faa" border-top='2px'>
      
        <tr height="36">
        {
          tab_list.map((tab_name,i)=>
                <td width="20%" align="center" verticle-align="middle">
                  <div onClick={onClickTabFuncs[i]}><tab_l1 class="highlight_tab">{tab_name}</tab_l1></div>
                </td>
          )
        }
        </tr>
      </table>
    </div>)  
}

function NewsPic(){

  const news_pics = ["news_pic1.jpg", "news_pic2.jpg", 
                     "news_pic3.jpg", "news_pic4.jpg", "news_pic5.jpg"];
  const prePath = "assets/";

  const slider_settings = {
    dots:true,
    infinite:true,
    autoplay:true,
    speed: 1000,
    slidesToShow: 1,
    SlidesToScroll: 1,
    arrows: false,
    //swipeToSlide: true,
  };

  return (
    <div>
     <Slider {...slider_settings} style={{width: "390px"}}>
        {
          news_pics.map((news_pic0)=>
            <div><img src= {prePath + news_pic0} width="390" height="234" alt="pictural news"/></div>
          )
        }
      </Slider>
    </div>
  )

}

function NewsList({onClickMore, lang}) {


  let news_list = [], more="";
  if (lang===CN) {
    news_list = news_list_cn;
    more = "更多";
  }
  else if (lang===EN) {
    news_list = news_list_en;
    more = "More";
  }

  return (<div>
      {
        news_list.map((news0,i) => <tr> <div class="highlight_shift" onClick={onClickMore[i+1]}><txt>{news0}</txt></div> </tr>
        )
      }
      <br/><br/>
      <h4 onClick={onClickMore[0]}> <div class="highlight_shift"> {more + ' >>'} </div> </h4>
    
    </div>
  )

}

function NewsBrowser({onClickMore, lang}) {
  const header_en = "News & Notices";
  const header_cn = "新闻通知";
  
  const header = (lang===CN)?header_cn:header_en;
  const details = (lang===CN)?"更多新闻":"More News";

  return (
    <div>
      
      <div className="section_header">
        <span className="section_header_left">| {header}</span>
        <span onClick={onClickMore[0]} class="highlight_shift">{details + " >>"}</span>
      </div>
      <br/>
      <tr>
        <td width="43%" align="left"><NewsPic/></td>
        <td width="57%" style={{ verticalAlign: 'top', paddingLeft: '5px' }}><NewsList onClickMore={onClickMore} lang={lang}/></td>
      </tr>
      <br/>
    </div>
    
  )

}


function FacultySlider({onClickDetails, lang}){

  const header_en = "Staff";
  const header_cn = "平台成员";
  
  const header = (lang===CN)?header_cn:header_en;
  const details = (lang===CN)?"全体成员":"Detailed list";
  const slide_staffs = [staffs.staff_01, staffs.staff_02, staffs.staff_03, staffs.staff_04, staffs.staff_05,
                        staffs.staff_06, staffs.staff_07, staffs.staff_08, staffs.staff_09, ];

  const slider_settings = {
    dots:true,
    arrows: false,
    infinite:true,
    autoplay:true,
    speed: 1500,
    slidesToShow: 6,
    SlidesToScroll: 1,
    autoplaySpeed: 1000,
    pauseOnHover: false,
    //swipeToSlide: true,
  };

  return (
    <div>
     <div className="section_header">
       <span className="section_header_left">| {header}</span>
       <span onClick={onClickDetails} class="highlight_shift">{details + " >>"}</span>
     </div>
     <br/>
     <Slider {...slider_settings} style={{width: "960px"}}>
        {
          slide_staffs.map((s0)=> {
            const photo = s0.Photo;
            const name = (lang===CN)?s0.Name_cn:s0.Name_en;;
            return (
              <div align="center" onClick={onClickDetails} className="img_select">
                <img className="rounded_image" src={photo} width="150" height="200" alt={name}/>
                {name}
              </div>
            )

          }
          )
        }
      </Slider>
      <br/>
    </div>
  )

}


function EquipSlider({onClickDetails, onClickEquip0, lang}){

  const header_en = "Equipment";
  const header_cn = "仪器设备";
  
  const header = (lang===CN)?header_cn:header_en;
  const details = (lang===CN)?"所有仪器":"Detailed list";
  
  const slide_equips = Priced_abbrs; /*['UV-VIS','GC','HPLC','NMR', 'ICP-AES', 'AAS', 'IR', 'FL', 'EA',
                        'STA', 'AMP','SEM', 'GC-MS', 'NanoPS-ZetaPA', 'XRD', 'ITC', 
                        'CD', 'Raman','LC-TOF-MS',];*/

  const slider_settings = {
    dots:true,
    arrows: false,
    infinite:true,
    autoplay:true,
    speed: 1500,
    slidesToShow: 4,
    SlidesToScroll: 1,
    autoplaySpeed: 1000,
    pauseOnHover: false,
    //swipeToSlide: true,
  };

  return (
    <div>

     <div className="section_header">
       <span className="section_header_left">| {header}</span>
       <span onClick={onClickDetails} class="highlight_shift">{details + " >>"}</span>
     </div>
     <br/>
     <Slider {...slider_settings} style={{width: "960px"}}>
        {
          slide_equips.map((e0)=> {
            const equip = equips[e0];
            const photo = prePath_equip + e0 + '.png';
            const Abbr = equip['Abbr'];
            const name = (lang===CN)?equip.Name_cn:equip.Name_en;;
            return (
              <div className="img_select" align="center" onClick={()=>{onClickEquip0(Abbr)}}>
                <img className="rounded_image" src={photo} width="234" height="195" alt={name}/>
                {name}
              </div>
            )
          }
          )
        }
      </Slider>
      <br/>

    </div>
  )

}


function FootNote({lang}) {
  const address_cn = [["化学国家级实验教学示范中心", "创 新 化 学 实 验 室"], "地址：浙江省杭州市西湖区余杭塘路866号", 
                      "电话：+86-0571-87951352", "邮箱：chem@zju.edu.cn","邮编：310058",
                      "Copyright © 2023 浙江大学化学系    版权所有",
                    ];
  const address_en = [["National Demonstration Center for Experimental Chemistry Education","Innovative Labs of Chemistry"], "Address: 866 Yuhangtang Rd, Hangzhou, CHINA",
                      "Telephone: +86 (571) 8795 1352", "E-Mail: chem@zju.edu.cn", "Postal Code: 310058",
                      "Copyright © 2023 Dept. of Chemistry, Zhejiang University",
                    ];
  let address = [];

  if (lang===CN) address = address_cn;
  else if (lang===EN) address = address_en;

  return(
    <table bgcolor="#003f9a">
      <tr height="100">
        <td align="right" width="33%">
          <img src="assets/zjuchemlogo.png" width="280" height="70" alt="logo of ZJU Chem"/>
        </td>

        <td align="center" width="41%">
          <h2 className='white-h2'>{address[0][0]}</h2>
          <h3>{address[0][1]}</h3>
          <add>{address[5]}</add>
        </td>

        <td align="left" width="28%">
          <add>
            <tr>{address[1]}</tr>
            <tr>{address[2]}</tr> 
            <tr>{address[3]}</tr>
            <tr>{address[4]}</tr>
          </add>
        </td>
      </tr>
    
    </table>

  )

}

function FirstPage({onClickNewsMore, onClickDetails, onClickEquip0, lang}) {
  return (
    <table>
      <br/>
      <tr><div class="section-divider"><NewsBrowser onClickMore={onClickNewsMore} lang={lang}/></div></tr>
      <br/>
      <tr><div class="section-divider"><EquipSlider onClickDetails={onClickDetails[1]} onClickEquip0={onClickEquip0} lang={lang}/></div></tr>
      <br/>
      <tr><div class="section-divider"><FacultySlider onClickDetails={onClickDetails[0]} lang={lang}/></div></tr>
      <br/>
    </table>
  )
}




function NewsFull({onClickMore, lang}){


  let news_list = [];
  if (lang===CN) news_list = news_list_cn;
  else if (lang===EN) news_list = news_list_en;


return (<div> <br/>
  {
    news_list.map((news0,i) => <tr> <div class="highlight_shift" onClick={onClickMore[i]}>{news0}</div> </tr>
    )
  }

</div>
)
}


export default function HomePage(){

  const [showPageState, setShowPageState] = useState(0);
  const [lang, setLang] = useState(CN);
  const [equip0, setEquip0] = useState("UV-VIS");

  const onClickLangFuncs = [()=>{setLang(CN)}, ()=>{setLang(EN)}];
  

  const onClickTabFuncs = [()=>{setShowPageState(0)}, ()=>{setShowPageState(1)}, 
                           ()=>{setShowPageState(2)}, ()=>{setShowPageState(3)},
                           ()=>{setShowPageState(4)}, (e0)=>{setShowPageState(5); setEquip0(e0)},
                           ()=>{setShowPageState(6)}, ()=>{setShowPageState(7)},
                           ()=>{setShowPageState(8)}, ()=>{setShowPageState(9)},
                           ()=>{setShowPageState(10)}, ()=>{setShowPageState(11)}];

  const numTabs = 6;
  const tabPages = [<FirstPage onClickNewsMore={onClickTabFuncs.slice(numTabs)} 
                              onClickDetails={[onClickTabFuncs[4],onClickTabFuncs[2]]} 
                              onClickEquip0={onClickTabFuncs[5]}
                              lang={lang}/>, 
                    <About lang={lang}/>, <Equipment lang={lang} onClickEquip0={onClickTabFuncs[5]}/>, 
                    <Pricing lang={lang}/>, <Personnel lang={lang}/>, 
                    <Equip0 lang={lang} equip0={equip0}/>,
                   ];
  
  const newsPages = [<NewsFull lang={lang} onClickMore={onClickTabFuncs.slice(numTabs+1, numTabs+6)}/>, <News00 lang={lang}/>];

  const pages = tabPages.concat(newsPages);

  return (
    <div>
      <table width="1000px" bgcolor='#f0f0f0'>
        <tr><GraphicPageTitle onClickLangFuncs={onClickLangFuncs} lang={lang}/></tr>
        <tr><L1Tabs onClickTabFuncs={onClickTabFuncs} lang={lang}/></tr>
        <tr>{pages[showPageState]}</tr>
        <br/>
        <tr><FootNote lang={lang}/></tr>
      </table>  

    </div>
  )
    
}