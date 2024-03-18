import React from "react";
import {staffs} from "../main_pages/personnel.js";
import {equips} from "../main_pages/equipment.js";

const CN = 0, EN = 1;


const equips_b1=[{'equip': '核磁共振波谱分析仪（400兆）',
  'staff': '毛侦军',
  'tel': '88206126-8225',
  'mobile': '15088689276',
  'Email': 'maozhenjun@zju.edu.cn',
  'abbr': 'NMR'},
 {'equip': '气相色谱质谱联用仪',
  'staff': '蓝国纯',
  'tel': '88206126-8000',
  'mobile': '13634112371',
  'Email': 'langch@zju.edu.cn',
  'abbr': 'GC-MS'},
 {'equip': '元素分析仪',
  'staff': '秦敏锐',
  'tel': '88206126-8506',
  'mobile': '15868452010',
  'Email': 'qmr0906@163.com',
  'abbr': 'EA'},
 {'equip': '纳米粒度及Zeta电位分析仪',
  'staff': '方芳',
  'tel': '88206126-8218',
  'mobile': '13858055080',
  'Email': 'finedf@126.com',
  'abbr': 'NanoPS-ZetaPA'},
 {'equip': '梅特勒同步热分析仪',
  'staff': '何桂金',
  'tel': '88206126-8330',
  'mobile': '13732234303',
  'Email': 'guikinghe@zju.edu.cn',
  'abbr': 'STA'},
 {'equip': '傅立叶变换红外光谱仪（ATR）',
  'staff': '顾昊睿',
  'tel': '88206126-8218',
  'mobile': '18768114519',
  'Email': '471017772@qq.com',
  'abbr': 'FTIR'},
 {'equip': '微量旋光仪',
  'staff': '邵东贝',
  'tel': '88206126-8506',
  'mobile': '13867405056',
  'Email': 'iamlucky@zju.edu.cn',
  'abbr': 'AMP'},
 {'equip': 'X射线衍射仪',
  'staff': '何桂金',
  'tel': '88206126-8330',
  'mobile': '13732234303',
  'Email': 'guikinghe@zju.edu.cn',
  'abbr': 'XRD'},
 {'equip': '等温滴定量热仪',
  'staff': '何桂金',
  'tel': '88206126-8330',
  'mobile': '13732234303',
  'Email': 'guikinghe@zju.edu.cn',
  'abbr': 'ITC'},
 {'equip': '液相色谱飞行时间质谱联用仪',
  'staff': '顾昊睿',
  'tel': '88206126-8218',
  'mobile': '18768114519',
  'Email': '471017772@qq.com',
  'abbr': 'LC-TOF-MS'},
 {'equip': '显微拉曼光谱仪',
  'staff': '陈晨',
  'tel': '88206126',
  'mobile': '17328678209',
  'Email': '0020578@zju.edu.cn',
  'abbr': 'Raman'},
 {'equip': '圆二色光谱仪',
  'staff': '赵玲丽',
  'tel': '88206126-8205',
  'mobile': '15501122211',
  'Email': 'll.zhao@zju.edu.cn',
  'abbr': 'CD'},
 {'equip': '其它实验仪器',
  'staff': '胡芳',
  'tel': '88206126',
  'mobile': '15868191854',
  'Email': 'hufangchem@zju.edu.cn',
  'abbr': 'Others'}];


export function News00({lang}) {
    const text_cn = {title: "关于化学实验教学中心开放实验室的通知",
                     para_01: "为了进一步加强学生实践能力、创新能力的培养，鼓励和支持学生参加开放式实验教学、创新科研和各类社会实践活动，充分发挥化学国家级实验教学示范中心的资源效益，化学实验教学中心专门开设化学类大学生科研创新实训平台—创新化学实验室，主要开展化学实验技术和分析测试能力的强化训练，推动学生积极开展科技创新活动和感受化学科学的魅力，面向全校接受本科生实验课程论文、毕业论文、SRTP、挑战杯、省创、国创、课外拓展实验和研究生的毕业论文等部分实验的预约服务，并为其提供必要的实验指导和分析测试。",
                     para_02: "开放共享第一批主要仪器设备如下：",
                     para_03: "地址：浙江大学紫金港校区周厚复化学楼二楼南区创新化学实验室。",

                     ending1: "浙江大学化学系",
                     ending2: "化学国家级实验教学示范中心",
                     ending3: "2021年4月28日",
                    };

    const text_en = {title: "Important Notice: Opening of Lab Facilities at Chemistry Experimental Teaching Center",
                     para_01: "To enhance students' practical and innovative skills, to encourage and support their participation in open labs, innovative research, and various social practice activities, and to fully leverage the resource benefits of the National Demonstration Center, our Center has established a dedicated research and innovation training platform, the Innovative Labs of Chemistry, for undergraduate students who study chemistry and related subjects. These labs primarily focus on strengthening training in chemical experimental skills and analytical testing techniques, promoting students' active engagement in scientific and technological innovation activities, and allowing them to experience the charm of chemistry. Students are encouraged to reserve experimental services related to undergraduate lab courses, final year project, Student Research Training Program (SRTP), the 'Challenge Cup' competition, provincial- & national-level innovation competitions, extra-curricular experimental projects, and thesis research for graduate students. As needed, we also provide experimental training and/or guidance as well as analytical testing services.",
                     para_02: "As the first batch, the following pieces of equipment are open for booking:",
                     para_03: "Location: Innovative Labs of Chemistry, 2nd Floor of South Wing, Zhou Houfu Building for Chemistry, Zijingang Campus, Zhejiang University.",

                     ending1: "Department of Chemistry, Zhejiang University",
                     ending2: "National Demonstration Center for Experimental Chemistry Education",
                     ending3: "April 28, 2021",
                   };
    let text = "";
  
    if (lang===CN) text = text_cn;
    else if (lang===EN) text = text_en;

    const columns_cn = ['仪器设备名称', '负责人', '联系电话', '手机', '电子邮件'];
    const columns_en = ['Equipment', 'Managed by', 'Office Tel', 'Mobile Phone', 'Email'];
    const cols = (lang===CN)?columns_cn: columns_en;
  
    return (
      <div>
        <h2>{text.title}</h2>

        <p className='para_cn'>{text.para_01}</p>
        <p className='para_cn'>{text.para_02}</p>


        <tr className="underscore-row" align="center">
            <td width=""><b>{cols[0]}</b></td>
            <td width=""><b>{cols[1]}</b></td>
            <td width=""><b>{cols[2]}</b></td>
            <td width=""><b>{cols[3]}</b></td>
            <td width=""><b>{cols[4]}</b></td>
        </tr>

        {equips_b1.map((equip0)=>{

            const name_cn = equip0['equip'], name_en = equips[equip0['abbr']]['Name_en'];
            const staff_cn = equip0['staff'], staff_en = staffs[equips[equip0['abbr']]['Staff']]['Name_en']
            const tel = equip0['tel'];
            const mobile = equip0['mobile'];
            const email = equip0['Email'];
            const email_link = `mailto:${email}`;
            

            const name  = (lang===CN) ? name_cn : name_en;
            const staff = (lang===CN) ? staff_cn: staff_en;


            return (

                <tr className="underscore-row2">
                    <td className="equip_intro" width="360px" align="center"><b>{name}</b></td>
                    <td className="equip_intro" width="180px" padding="5px" align="center">{staff}</td>
                    <td className="equip_intro" width="180px" padding="5px" align="center">{tel}</td>
                    <td className="equip_intro" width="160px" padding="5px" align="center">{mobile}</td>
                    <td className="equip_intro" width="120px" padding="5px" align="center">
                      <a class="highlight_shift" href={email_link}>{email}</a> 
                    </td>
                            
                </tr>
                
            );

        })}

        <br/>

        <p className='para_cn'>{text.para_03}</p>

        <br/>
        <div className="lab_name_container">
          <div className='centered'>{text.ending1}</div>
          <div className='centered'>{text.ending2}</div>
          <div className='centered'>{text.ending3}</div>
        </div>
        <br/>
      </div>
    )
}