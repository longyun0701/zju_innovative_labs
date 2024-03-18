import React from "react";



const CN = 0, EN = 1;

export function About({lang}) {

        const text_cn = {title: "创新化学实验室简介",
                         para_01: "创新化学实验室是化学国家级实验教学示范中心（浙江大学）专设的化学类大学生科研创新实训平台，支持和鼓励学生参加开放式实验教学、创新科研和各类社会实践活动，培养和加强学生实践能力、创新能力，充分发挥国家级实验教学示范中心的资源效益和示范辐射作用。",
                         para_02: "创新化学实验室配备各类实验仪器设备50多台（套），主要包括：400兆核磁共振波谱分析仪、气相色谱质谱联用仪、液相色谱飞行时间质谱联用仪、气相色谱仪、高效液相色谱仪、元素分析仪、同步热分析仪、X射线粉末衍射仪、红外光谱仪、微量旋光仪、荧光分光光度计、超微量分光光度计、紫外可见分光光度计、数字式阿贝折光仪、流动注射化学发光仪、表面积与孔隙度分析仪、表面张力测量仪、容量法卡氏水分测定仪、台式扫描电镜、能谱仪、氧弹式热量计、电化学工作站、电化学分析仪、核酸蛋白检测仪、生物显微镜、酶标定量测定仪、视频光学接触角测量仪、拉曼光谱仪、圆二色谱仪、离子色谱仪、凝胶色谱仪、原子吸收光谱仪、电感耦合等离子体发射光谱仪、激光纳米粒度及Zeta电位分析仪等实验教学设备，可基本满足化学实验类课程和创新实践需求。",
                         para_03: "创新化学实验室实行全年开放，开展化学实验技术和分析测试能力的强化训练，推动学生积极开展科技创新活动和感受化学科学的魅力，面向全校接受本科生实验课程论文、毕业论文、SRTP、挑战杯、省创、国创、课外拓展实验和研究生的毕业论文等部分实验的预约服务，同时提供必要的实验指导和分析测试。",
                         ending: "化学国家级实验教学示范中心",
                         ending2: "(浙江大学)",
                        };
    
        const text_en = {title: "Introduction to the Innovative Chemistry Labs, Zhejiang University",
                         para_01: "The Innovative Chemistry Labs serve as a practical training platform for undergraduates majored in chemistry as well as chemistry-related subjects, designed and run by the National Demonstration Center for Experimental Chemistry Education (ZJU). The Labs facilitate students to conduct open-ended experiments and innovative reseach and practices, from which students gain practical skills and creativity. Our labs fully leverage the resource benefits and demonstrative influence of the National Demonstration Center.",                         
                         para_02: "The Labs host more than 50 types of advanced equipment, including: UV-Vis Spectrophotometer, GC, HPLC, NMR, Inductively Coupled Plasma Atomic Emission Spectrometer, Atomic Absorption Spectroscopy, IR, Fluorescence Spectrometer, Elemental Analyzer, Simultaneous thermal analyzer, Automatic Micro Polarimeter, SEM, GC-MS, Nanoparticle Size and Zeta Potential Analyzer, XRD, Isothermal Titration Calorimetry, Circular Dichroism Spectrometer, Raman Microscope, Liquid Chromatography Time-of-Flight Mass Spectrometer, Biological Microscope, Oxygen Bomb Calorimeter, Spectrometer, Surface Tensiometer, FT-IR, Digital Abbe Refractometer, Chemiluminescence Analyzer, Surface Area and Porosity Analyzer, Volumetric Karl Fischer Moisture Analyzer, Electrochemical Analyzer and Workstation, Nucleic Acid and Protein Analyzer, Enzyme-Linked Immunosorbent Assay (ELISA) Reader, Video Optical Contact Angle Analyzer, Ion Chromatograph, and Gel Chromatograph. These can almost meet the needs of teaching labs in chemistry and innovative practice." ,
                         para_03: "The Labs open all year round, providing training for chemistry lab skills and testing and analytical abilities. The Labs also promote students' innovative activities in science and technology, immersing them into the beauty of chemistry. We open reservation service to the whole university, for equipment used for course project, final year thesis, SRTP, Challenge Cup, National and/or Provincial innovative projects, etc. We also provide necessary instructions on doing labs and tests.", 
                         ending: "National Demonstration Center for Experimental Chemistry Education",
                         ending2: "(Zhejiang University)",
                        };
        let text = "";
      
        if (lang===CN) text = text_cn;
        else if (lang===EN) text = text_en;
    
        const paras = [text.para_01, text.para_02, text.para_03, ];

        
      
        return (
          <div>
            {/*<h2>{text.title}</h2>*/}
            {
                paras.map((p)=>{return (<p className='para_cn'>{p}</p>)})
            }
            <br/>
            <br/>
            <div className="lab_name_container">
              <div className='centered'>{text.ending}</div>
              <div className='centered'>{text.ending2}</div>
            </div>

            <br/>
            {/*<hr width='500px'color='#D8D8D8'/>*/}
            <br/>



          </div>
        )
    }