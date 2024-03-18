import React from "react";
import {useState} from "react";
import {staffs} from "./personnel.js"

const CN = 0;
//const EN = 1;
export const prePath_equip = "assets/equips/";
export const prePath_reserv = 'http://zjuequip-zju-edu-cn-s.webvpn.zju.edu.cn:8001/search/searchAction.do?ms=queryEquList&keyword=';

export const equips = {'UV-VIS': {'Batch': '1',
'Staff_name': '胡芳',
'Cost_out_en': [''],
'Intro_cn': '紫外-可见分光光度计可用于有机化合物的结构分析，也可进行微量单组分和多组分的定性、定量测定，检测下限达10^-^4 -- 10^-^6 mol/L，在生化分析中被广泛应用于蛋白质、酶、氨基酸、核酸等多种生物大分子化合物的研究。主要应用于环境、农业、医药、食品、生物、高分子、化工等领域。',
'Location_en': '',
'reserv_id': '',
'Cost_out_cn': [''],
'nStudents': [['6592'], ['7360']],
'Location_cn': '',
'Intro_en': 'Ultraviolet - Visible (UV-Vis) Spectrophotometer can be used to analyze structures of organic compounds. It is particularly useful for qualitative and quantitative analyses of single- and multi-components at trace level (detection limit as low as 10^-^4 -- 10^-^6 mol/L).  Widely applied in biochemical analysis, it is used extensively in the research of various biological macromolecules, such as proteins, enzymes, amino acids, and nucleic acids. It finds primary applications in fields including environmental science, agriculture, pharmaceuticals, food science, biology, polymers, chemical engineering, etc.',
'nCourses': '2',
'Name_cap': 'ULTRAVIOLET - VISIBLE SPECTROPHOTOMETER',
'Cost_in_en': [''],
'ID': '1',
'Name_cn': '紫外-可见分光光度计',
'Dept_cn': [['化学系'], ['面向全校', '(化学工程与工艺、高分子材料与科学、食品科学与工程、医学等)']],
'Cost_in_cn': [''],
'Staff': 'staff_10',
'Dept_en': [['Dept Chemistry'],
 ['University-wide',
  '(Chem Engg、Polymer Mater Sci、Food Sci&Tech、Medicine)']],
'Course_cn': [['中级化学实验'], ['大学化学实验']],
'Course_en': [['Interm Chem Exp'], ['College Chem Lab']],
'Name_en': 'Ultraviolet - Visible Spectrophotometer',
'Abbr': 'UV-VIS'},
'GC': {'Batch': '1',
'Staff_name': '胡芳',
'Cost_out_en': [''],
'Intro_cn': '气相色谱是一种广泛、实用、快速的分析技术，用于分析气体和易气化的化合物，如挥发性有机物等；可以检测出 10^-^1^1  -- 10^-^1^3 g的痕量组分，满足环境监测、农药残留等日常检测的需要。主要应用于医药、食品、环境、化工等众多领域。',
'Location_en': '',
'reserv_id': '',
'Cost_out_cn': [''],
'nStudents': [['6592'], ['7360']],
'Location_cn': '',
'Intro_en': 'Gas chromatography (GC) is a practical and rapid analytical technique, widely used for the analysis of gases and easily vaporizable compounds, such as volatile organic compounds. It is capable of detecting trace components as low as 10^-^1^1  -- 10^-^1^3 g, meeting needs for routine testing applications in environmental monitoring and pesticide residue. It finds primary applications in fields including pharmaceuticals, food and environmental science, and chemical engineering.',
'nCourses': '2',
'Name_cap': 'GAS CHROMATOGRAPH',
'Cost_in_en': [''],
'ID': '2',
'Name_cn': '气相色谱仪',
'Dept_cn': [['化学系'], ['面向全校', '(化学工程与工艺、高分子材料与科学、食品科学与工程、医学等)']],
'Cost_in_cn': [''],
'Staff': 'staff_10',
'Dept_en': [['Dept Chemistry'],
 ['University-wide',
  '(Chem Engg、Polymer Mater Sci、Food Sci&Tech、Medicine)']],
'Course_cn': [['中级化学实验'], ['大学化学实验']],
'Course_en': [['Interm Chem Exp'], ['College Chem Lab']],
'Name_en': 'Gas Chromatograph',
'Abbr': 'GC'},
'HPLC': {'Batch': '1',
'Staff_name': '胡芳',
'Cost_out_en': [''],
'Intro_cn': '高效液相色谱是当今应用最为广泛的色谱分离分析方法，可分析低分子量低沸点样品；高沸点、高分子有机化合物（包括非极性、极性）；离子型无机化合物；热不稳定、具有生物活性的生物分子。主要应用于食品、医药、生物、化工、环境等领域。',
'Location_en': '',
'reserv_id': '',
'Cost_out_cn': [''],
'nStudents': [['6592'], ['7360']],
'Location_cn': '',
'Intro_en': 'High-performance liquid chromatography (HPLC) is the most widely used chromatographic separation and analysis method today. It can analyze low molecular weight, low boiling point samples; high boiling point, high molecular weight organic compounds (nonpolar and polar); ionic inorganic compounds; and thermally unstable, biologically active biomolecules. It is primarily applied in fields such as food science, pharmaceuticals, biology, chemical engineering, and environmental science.',
'nCourses': '2',
'Name_cap': 'HIGH PERFORMANCE LIQUID CHROMATOGRAPH',
'Cost_in_en': [''],
'ID': '3',
'Name_cn': '高效液相色谱仪',
'Dept_cn': [['化学系'], ['面向全校', '(化学工程与工艺、高分子材料与科学、食品科学与工程、医学等)']],
'Cost_in_cn': [''],
'Staff': 'staff_10',
'Dept_en': [['Dept Chemistry'],
 ['University-wide',
  '(Chem Engg、Polymer Mater Sci、Food Sci&Tech、Medicine)']],
'Course_cn': [['中级化学实验'], ['大学化学实验']],
'Course_en': [['Interm Chem Exp'], ['College Chem Lab']],
'Name_en': 'High Performance Liquid Chromatograph',
'Abbr': 'HPLC'},
'NMR': {'Batch': '1',
'Staff_name': '毛侦军',
'Cost_out_en': ['(1) ^1H 160CNY/sample',
 '(2) ^1^3C 240CNY/sample',
 '(3) DEPT 240CNY/sample',
 '(4) 2-D ^1H-^1H related 240CNY/sample',
 '(5) HMQC(HSQC) 360CNY/sample',
 '(6) HMBC 450CNY/sample',
 '(7)  Deuterated Solv. borne by User'],
'Intro_cn': '核磁共振仪是化学成分分析和分子结构测定的高端科学仪器，提供一维谱（H谱、C谱、F谱、P谱、N谱）以及多种二维谱（H-HCOSY、HMQC、HMBC）的实验测试，用于分子结构分析、含量测定及反应机理研究等。广泛应用于化学、化工、食品、医药等领域的样品分析。',
'Location_en': 'RM-228 ZhouHoufu Bldg, Zijingang Campus',
'reserv_id': '20015351',
'Cost_out_cn': ['(1) ^1H谱 160元/样',
 '(2) ^1^3C谱 240元/样',
 '(3) DEPT谱240元/样',
 '(4) 二维核磁^1H-^1H相关谱240元/样',
 '(5) HMQC(HSQC)360元/样',
 '(6) HMBC 450元/样',
 '(7) 氘代溶剂费自理'],
'nStudents': [['6592'], ['400(机时数)']],
'Location_cn': '紫金港校区化学实验中心228',
'Intro_en': 'Nuclear Magnetic Resonance (NMR) spectrometer is a highly advanced scientific instrument used for chemical composition analysis and molecular structure determination. It offers 1-D spectra (H-NMR, C-NMR, F-NMR, P-NMR, N-NMR) as well as various 2-D spectra (H-HCOSY, HMQC, HMBC) for experimental testing, to analyze molecular structure, to determine chemical compositions, and to research into reaction mechanisms. It finds extensive applications in sample analysis across fields such as chemistry, chemical engineering, food science, and pharmaceuticals.',
'nCourses': '2',
'Name_cap': 'NUCLEAR MAGNETIC RESONANCE SPECTROMETER ',
'Cost_in_en': ['(1) ^1H 80CNY/sample',
 '(2) ^1^3C 120CNY/sample',
 '(3) DEPT 120CNY/sample',
 '(4) 2-D ^1H-^1H related 160CNY/sample',
 '(5) HMQC(HSQC) 240CNY/sample',
 '(6) HMBC 300CNY/sample',
 '(7) Deuterated Solv. borne by User'],
'ID': '4',
'Name_cn': '核磁共振仪',
'Dept_cn': [['化学系'], ['面向全校', '(化学工程与工艺、高分子材料与科学、食品科学与工程、医学等)']],
'Cost_in_cn': ['(1) ^1H谱 80元/样',
 '(2) ^1^3C谱 120元/样',
 '(3) DEPT谱120元/样',
 '(4) 二维核磁^1H-^1H相关谱160元/样',
 '(5) HMQC(HSQC)240元/样',
 '(6) HMBC 300元/样',
 '(7) 氘代溶剂费自理'],
'Staff': 'staff_01',
'Dept_en': [['Dept Chemistry'],
 ['University-wide',
  '(Chem Engg、Polymer Mater Sci、Food Sci&Tech、Medicine)']],
'Course_cn': [['中级化学实验'], ['有机合成实验', '大学化学实验', '综合化学实验']],
'Course_en': [['Interm Chem Exp'],
 ['Labs Organ Synth', 'College Chem Lab', 'Labs Comprehensive Chem']],
'Name_en': 'Nuclear Magnetic Resonance Spectrometer ',
'Abbr': 'NMR'},
'ICP-AES': {'Batch': '1',
'Staff_name': '胡芳',
'Cost_out_en': [''],
'Intro_cn': '电感耦合等离子体光谱（ICP-AES）分析技术主要用于液体试样（包括经化学处理能转变成溶液的固体试样）中金属元素和部分非金属元素的定性和定量分析，适用于微量元素的分析，可分析的元素为大多数的金属和硅、磷、硫等少量的非金属。以其快速、准确、灵敏等特点，广泛应用于环境、地球科学、化工、生物、食品、医药等领域中的多元素分析。',
'Location_en': '',
'reserv_id': '',
'Cost_out_cn': [''],
'nStudents': [['6592']],
'Location_cn': '',
'Intro_en': 'Inductively Coupled Plasma Atomic Emission Spectrometer (ICP-AES) analytical technique is primarily used for qualitative and quantitative analysis of metallic and some non-metallic elements in liquid samples (including solid samples transformed into solutions through chemical treatment). It is well-suited for trace element analysis for most metals, as well as a few non-metals such as silicon, phosphorus, and sulfur. With its speed, accuracy, and sensitivity, ICP-AES finds wide applications in multi-element analysis across various fields including environmental science, earth sciences, chemical engineering, biology, food science, and pharmaceuticals.',
'nCourses': '1',
'Name_cap': 'INDUCTIVELY COUPLED PLASMA ATOMIC EMISSION SPECTROMETER',
'Cost_in_en': [''],
'ID': '5',
'Name_cn': '电感耦合等离子体发射光谱仪',
'Dept_cn': [['化学系']],
'Cost_in_cn': [''],
'Staff': 'staff_10',
'Dept_en': [['Dept Chemistry']],
'Course_cn': [['中级化学实验']],
'Course_en': [['Interm Chem Exp']],
'Name_en': 'Inductively Coupled Plasma Atomic Emission Spectrometer',
'Abbr': 'ICP-AES'},
'AAS': {'Batch': '1',
'Staff_name': '胡芳',
'Cost_out_en': [''],
'Intro_cn': '原子吸收光谱是基于待测元素的基态原子蒸汽对其特征谱线的吸收，由特征谱线的特征性和谱线被减弱的程度对待测元素进行定性定量分析的一种仪器分析的方法。广泛用于地球科学、化工、农业、医药、食品及环境监测等方面的常量及微痕量元素分析。',
'Location_en': '',
'reserv_id': '',
'Cost_out_cn': [''],
'nStudents': [['6592'], ['7360']],
'Location_cn': '',
'Intro_en': "Atomic Absorption Spectroscopy (AAS) is an instrumental analytical method based on the absorption of characteristic spectral lines of the target element's ground-state atomic vapor. It uses the distinctiveness of these spectral lines and the degree of their attenuation to qualitatively and quantitatively analyze the target element. AAS is widely employed for the analysis of both major and trace elements in various fields including earth sciences, chemical engineering, agriculture, pharmaceuticals, food science, and environmental monitoring.",
'nCourses': '2',
'Name_cap': 'ATOMIC ABSORPTION SPECTROSCOPY',
'Cost_in_en': [''],
'ID': '6',
'Name_cn': '原子吸收光谱仪',
'Dept_cn': [['化学系'], ['面向全校', '(化学工程与工艺、高分子材料与科学、食品科学与工程、医学等)']],
'Cost_in_cn': [''],
'Staff': 'staff_10',
'Dept_en': [['Dept Chemistry'],
 ['University-wide',
  '(Chem Engg、Polymer Mater Sci、Food Sci&Tech、Medicine)']],
'Course_cn': [['中级化学实验'], ['大学化学实验']],
'Course_en': [['Interm Chem Exp'], ['College Chem Lab']],
'Name_en': 'Atomic Absorption Spectroscopy',
'Abbr': 'AAS'},
'IR': {'Batch': '1',
'Staff_name': '胡芳',
'Cost_out_en': [''],
'Intro_cn': '红外光谱主要用来研究分子的结构和化学键以及表征和鉴别化学物种，适用于固态、液态或气态等样品，无机、有机、高分子化合物均可检测。广泛应用于化学、环境科学、生物学、材料科学、医药、农学等研究领域。',
'Location_en': '',
'reserv_id': '',
'Cost_out_cn': [''],
'nStudents': [['6592'], ['7360']],
'Location_cn': '',
'Intro_en': 'Infrared spectroscopy (IR) is primarily used to study molecular structures, chemical bonds, and to characterize and identify chemical species. It is applicable to solid, liquid, or gaseous samples, and can detect inorganic, organic, and polymeric compounds. It finds widespread applications in research fields such as chemistry, environmental science, biology, materials science, pharmaceuticals, and agriculture.',
'nCourses': '2',
'Name_cap': 'INFRARED SPECTROSCOPY',
'Cost_in_en': [''],
'ID': '7',
'Name_cn': '红外光谱仪',
'Dept_cn': [['化学系'], ['面向全校', '(化学工程与工艺、高分子材料与科学、食品科学与工程、医学等)']],
'Cost_in_cn': [''],
'Staff': 'staff_10',
'Dept_en': [['Dept Chemistry'],
 ['University-wide',
  '(Chem Engg、Polymer Mater Sci、Food Sci&Tech、Medicine)']],
'Course_cn': [['中级化学实验'], ['大学化学实验']],
'Course_en': [['Interm Chem Exp'], ['College Chem Lab']],
'Name_en': 'Infrared Spectroscopy',
'Abbr': 'IR'},
'FL': {'Batch': '1',
'Staff_name': '胡芳',
'Cost_out_en': [''],
'Intro_cn': '荧光分光光度计适合于分析经光源激发后产生荧光的物质或经化学处理后产生荧光的物质，可进行定性和定量分析、化学表征、色谱流出物的检测等。在食品、化工、生物、医药等领域广泛应用。',
'Location_en': '',
'reserv_id': '',
'Cost_out_cn': [''],
'nStudents': [['6592'], ['7360']],
'Location_cn': '',
'Intro_en': 'Fluorescence Spectrometer is suitable for analyzing substances that produce fluorescence either by light source excitation or chemical treatment. They can be used for qualitative and quantitative analysis, chemical characterization, and detection of chromatographic effluents. It is widely applied in fields such as food science, chemical engineering, biology, and pharmaceuticals.',
'nCourses': '2',
'Name_cap': 'FLUORESCENCE SPECTROMETER',
'Cost_in_en': [''],
'ID': '8',
'Name_cn': '荧光分光光度计',
'Dept_cn': [['化学系'], ['面向全校', '(化学工程与工艺、高分子材料与科学、食品科学与工程、医学等)']],
'Cost_in_cn': [''],
'Staff': 'staff_10',
'Dept_en': [['Dept Chemistry'],
 ['University-wide',
  '(Chem Engg、Polymer Mater Sci、Food Sci&Tech、Medicine)']],
'Course_cn': [['中级化学实验'], ['大学化学实验']],
'Course_en': [['Interm Chem Exp'], ['College Chem Lab']],
'Name_en': 'Fluorescence Spectrometer',
'Abbr': 'FL'},
'EA': {'Batch': '2',
'Staff_name': '秦敏锐',
'Cost_out_en': ['(1) CHN mode 260CNY/sample', '(2) CHNS mode 360CNY/sample'],
'Intro_cn': '元素分析仪可测定样品中C、H、N、S、O 元素的百分含量，用量少，准确度高。适用于化学、药物、合成材料、煤、油、地质材料、农业产品、环境污染物等样品的分析。广泛应用于化学、环境、材料、医药、地质、石油、煤炭等学科领域的研究。',
'Location_en': 'RM-231 ZhouHoufu Bldg, Zijingang Campus',
'reserv_id': '21003350',
'Cost_out_cn': ['(1) CHN模式 260元/样', '(2) CHNS模式 360元/样'],
'nStudents': [['4800'], ['7776']],
'Location_cn': '紫金港校区化学实验中心231',
'Intro_en': 'Elemental analyzer can determine the composition of C, H, N, S, and O elements in samples with high accuracy and minimal sample usage. It is suitable for the analysis of samples from various fields including chemistry, pharmaceuticals, synthetic materials, coal, petroleum, geological materials, agricultural products, and environmental pollutants. It is widely employed in research fields such as chemistry, environmental science, materials science, pharmaceuticals, geology, petroleum, and coal.',
'nCourses': '2',
'Name_cap': 'ELEMENTAL ANALYZER',
'Cost_in_en': ['(1) CHN mode 130CNY/sample', '(2) CHNS mode 180CNY/sample'],
'ID': '9',
'Name_cn': '元素分析仪',
'Dept_cn': [['化学系'], ['面向全校', '(化学工程与工艺、高分子材料与科学、食品科学与工程、医学等)']],
'Cost_in_cn': ['(1) CHN模式 130元/样', '(2) CHNS模式 180元/样'],
'Staff': 'staff_05',
'Dept_en': [['Dept Chemistry'],
 ['University-wide',
  '(Chem Engg、Polymer Mater Sci、Food Sci&Tech、Medicine)']],
'Course_cn': [['基础化学实验', '有机合成实验', '综合化学实验'], ['大学化学实验']],
'Course_en': [['Labs Basic Chem',
  'Labs Organ Synth',
  'Labs Comprehensive Chem'],
 ['College Chem Lab']],
'Name_en': 'Elemental Analyzer',
'Abbr': 'EA'},
'STA': {'Batch': '2',
'Staff_name': '何桂金',
'Cost_out_en': ['(1) <1000^oC: 150CNY/sample(60 min，100CNY/ex hr)',
 '(2) 1000～1500^oC: 150CNY/sample(60 min，200CNY/ex hr)'],
'Intro_cn': '同步热分析仪将热重分析（TG）与差热分析（DTA）或差示扫描量热（DSC）结合为一体，可同步测定TG和DTA数据，表征样品的物理、化学性质随温度变化特性。可满足化学、化工、材料、能源、环境、药学、生物、食品等学科的研究、新产品开发和产品质量管理等测试要求。',
'Location_en': 'RM-231 ZhouHoufu Bldg, Zijingang Campus',
'reserv_id': '21001068',
'Cost_out_cn': ['(1) 低于1000度: 150元/样 (限时60 min，超时100元/小时)',
 '(2) 1000～1500度: 300元/样 (限时60 min，超时200元/小时)'],
'nStudents': [['9504'], ['21216']],
'Location_cn': '紫金港校区化学实验中心231',
'Intro_en': 'Simultaneous Thermal Analyzer (STA) combines thermogravimetric analysis (TG) with either differential thermal analysis (DTA) or differential scanning calorimetry (DSC), allowing simultaneous measurement of TG and DTA data. It characterizes the physical and chemical properties of a sample as they change with temperature. This instrument meets the testing requirements for research, new product development, and product quality management in various fields including chemistry, chemical engineering, materials science, energy, environmental science, pharmaceuticals, biology, and food science.',
'nCourses': '2',
'Name_cap': 'SIMULTANEOUS THERMAL ANALYZER',
'Cost_in_en': ['(1) <1000^oC: 100CNY/sample(60 min，70CNY/ex hr)',
 '(2) 1000～1500^oC: 150CNY/sample(60 min，100CNY/ex hr)'],
'ID': '10',
'Name_cn': '同步热分析仪',
'Dept_cn': [['化学系'],
 ['面向全校', '(化学工程、高分子科学与工程、生物工程、制药工程、环境科学、环境工程、资源环境科学、食品科学与工程、药物学等)']],
'Cost_in_cn': ['(1) 低于1000度: 100元/样 (限时60 min，超时70元/小时)',
 '(2) 1000～1500度: 150元/样 (限时60min，超时100元/小时)'],
'Staff': 'staff_02',
'Dept_en': [['Dept Chemistry'],
 ['University-wide',
  '(Chem Engg、Polymer Mater Sci、BioEngineering、Pharm Engg、Environ Sci、Environ Engg、Res&Environ Sci、Food Sci&Tech、Pharmacology)']],
'Course_cn': [['中级化学实验'], ['大学化学实验']],
'Course_en': [['Interm Chem Exp'], ['College Chem Lab']],
'Name_en': 'Simultaneous Thermal Analyzer',
'Abbr': 'STA'},
'AMP': {'Batch': '2',
'Staff_name': '邵东贝',
'Cost_out_en': ['100 CNY/sample'],
'Intro_cn': '微量旋光仪用于测定具有旋光活性的样品的旋光度、比旋光度及其含量，样品用量少，操作简便。在化学、医药、化工、生物、材料、食品、农业、海洋、环境科学等领域具有广泛应用。',
'Location_en': 'RM-535 ZhouHoufu Bldg, Zijingang Campus',
'reserv_id': '20031143',
'Cost_out_cn': ['100元/样'],
'nStudents': [['4800'], ['7776']],
'Location_cn': '紫金港校区化学实验中心535',
'Intro_en': 'Automatic Micro Polarimeter (AMP) is used to measure the optical rotation, specific rotation, and content of samples exhibiting optical activity. It is easy to operate and requires small amounts of samples. It finds widespread applications in various fields including chemistry, pharmaceuticals, chemical engineering, biology, materials science, food science, agriculture, marine science, and environmental science.',
'nCourses': '2',
'Name_cap': 'AUTOMATIC MICRO POLARIMETER',
'Cost_in_en': ['120 CNY/hr + 10 CNY start fee'],
'ID': '11',
'Name_cn': '微量旋光仪',
'Dept_cn': [['化学系'], ['面向全校', '(化学工程与工艺、高分子材料与科学、食品科学与工程、医学等)']],
'Cost_in_cn': ['120元/小时，开机费10元'],
'Staff': 'staff_07',
'Dept_en': [['Dept Chemistry'],
 ['University-wide',
  '(Chem Engg、Polymer Mater Sci、Food Sci&Tech、Medicine)']],
'Course_cn': [['基础化学实验', '有机合成实验', '综合化学实验'], ['大学化学实验']],
'Course_en': [['Labs Basic Chem',
  'Labs Organ Synth',
  'Labs Comprehensive Chem'],
 ['College Chem Lab']],
'Name_en': 'Automatic Micro Polarimeter',
'Abbr': 'AMP'},
'SEM': {'Batch': '2',
'Staff_name': '方芳',
'Cost_out_en': [''],
'Intro_cn': '扫描电子显微镜通过对样品表面进行高分辨形貌观察，提供亚微米、纳米尺寸的高分辨图像，结合高性能X射线能谱仪，同时进行样品表层的微区点、线、面元素定性、半定量分析，具有形貌、化学组分综合分析能力。适用于化学、材料、生物、医学、地质、高分子等领域的分析测试。',
'Location_en': '',
'reserv_id': '',
'Cost_out_cn': [''],
'nStudents': [['12000']],
'Location_cn': '',
'Intro_en': 'Scanning Electron Microscopy (SEM) provides high-resolution sub-micron and nanoscale  imaging of the surface of a sample. Combined with high-performance X-ray energy-dispersive spectrometry (EDS), it allows for qualitative and semi-quantitative analysis of elemental composition at micro-areas, lines, and surfaces of the sample. SEM possesses comprehensive analytical capabilities for morphology and chemical composition analysis. It is applicable for analytical testing in fields such as chemistry, materials science, biology, medicine, geology, and polymer science.',
'nCourses': '1',
'Name_cap': 'SCANNING ELECTRON MICROSCOPE',
'Cost_in_en': [''],
'ID': '12',
'Name_cn': '扫描电子显微镜',
'Dept_cn': [['化学系']],
'Cost_in_cn': [''],
'Staff': 'staff_06',
'Dept_en': [['Dept Chemistry']],
'Course_cn': [['综合化学实验', '化学生物学实验']],
'Course_en': [['Labs Comprehensive Chem', 'Labs Chem Biology']],
'Name_en': 'Scanning Electron Microscope',
'Abbr': 'SEM'},
'GC-MS': {'Batch': '2',
'Staff_name': '蓝国纯',
'Cost_out_en': ['(1) GC/MS 1~4 components: 300CNY/sample',
 '(2) GC/MS >4 components: +40CNY/(component*sample)'],
'Intro_cn': '气相色谱质谱联用仪结合了气相色谱的高效分离能力和质谱的组分鉴定能力，应用于复杂组分的分离与鉴定，分辨率和灵敏度高，是化合物定性、定量分析的高效和有力的工具。广泛应用于化学、生命科学、食品、化工、医学、环境、农学等领域。',
'Location_en': 'RM-229 ZhouHoufu Bldg, Zijingang Campus',
'reserv_id': '20039386',
'Cost_out_cn': ['(1) GC/MS 1~4个组份: 300元/样',
 '(2) GC/MS大于4个组份解析: 加40元/(组份*样)'],
'nStudents': [['1000'], ['400']],
'Location_cn': '紫金港校区化学实验中心229',
'Intro_en': 'Gas Chromatography Mass Spectrometry (GC-MS) combines the efficient separation capabilities of gas chromatography with the component identification abilities of mass spectrometry. It is used for the separation and identification of complex mixtures, offering high resolution and sensitivity. It is a powerful tool for compound qualitative and quantitative analysis and finds widespread applications in various fields, including chemistry, life sciences, food science, chemical engineering, medicine, environmental science, and agriculture.',
'nCourses': '2',
'Name_cap': 'GAS CHROMATOGRAPH MASS SPECTROMETER',
'Cost_in_en': ['(1) GC/MS 1~4 components: 150CNY/sample',
 '(2) GC/MS >4 components: +20CNY/(component*sample)'],
'ID': '13',
'Name_cn': '气相色谱质谱联用仪',
'Dept_cn': [['化学系'], ['面向全校', '(化学工程与工艺、高分子材料与科学、食品科学与工程、医学等)']],
'Cost_in_cn': ['(1) GC/MS 1~4个组份: 150元/样', '(2) GC/MS大于4个组份解析: 加20元/(组份*样)'],
'Staff': 'staff_04',
'Dept_en': [['Dept Chemistry'],
 ['University-wide',
  '(Chem Engg、Polymer Mater Sci、Food Sci&Tech、Medicine)']],
'Course_cn': [['中级化学实验', '基础化学实验', '有机合成实验'], ['大学化学实验']],
'Course_en': [['Interm Chem Exp', 'Labs Basic Chem', 'Labs Organ Synth'],
 ['College Chem Lab']],
'Name_en': 'Gas Chromatograph Mass Spectrometer',
'Abbr': 'GC-MS'},
'NanoPS-ZetaPA': {'Batch': '2',
'Staff_name': '方芳',
'Cost_out_en': ['300CNY/ea'],
'Intro_cn': '纳米粒度电位仪可用于测定纳米颗粒的粒径大小、粒径分布及Zeta电位分布，颗粒体系稳定性以及分子量信息的获取。粒径范围: 0.3 nm-10 μm，浓度范围: 0.1 ppm 40% w/v，检测角度:173度和 90度，最小样品量: 12 μL，配置透射光检测器以检测样品浓度并自动选择检测器角度。主要应用于化学、材料、生物、医药、化工等领域的研究。',
'Location_en': 'RM-229 ZhouHoufu Bldg, Zijingang Campus',
'reserv_id': '20032914',
'Cost_out_cn': ['300元/个'],
'nStudents': [['12000']],
'Location_cn': '紫金港校区化学实验中心229',
'Intro_en': 'Nanoparticle Size and Zeta Potential Analyzer is used to determine the particle size, size distribution, Zeta potential distribution, stability of particle systems, and obtain molecular weight information of nanoparticles. The particle size range is 0.3 nm to 10 μm, concentration range is from 0.1 ppm to 40% w/v, detection angles are at 173 degrees and 90 degrees, and the minimum sample volume required is 12 μL. It is equipped with a transmittance light detector to measure sample concentration and automatically select the detector angle. It is primarily applied in research fields including chemistry, materials science, biology, pharmaceuticals, and chemical engineering.',
'nCourses': '1',
'Name_cap': 'NANOPARTICLE SIZE AND ZETA POTENTIAL ANALYZER',
'Cost_in_en': ['150CNY/ea'],
'ID': '14',
'Name_cn': '纳米粒度及Zeta电位分析仪',
'Dept_cn': [['化学系']],
'Cost_in_cn': ['150元/个'],
'Staff': 'staff_06',
'Dept_en': [['Dept Chemistry']],
'Course_cn': [['综合化学实验', '化学生物学实验']],
'Course_en': [['Labs Comprehensive Chem', 'Labs Chem Biology']],
'Name_en': 'Nanoparticle Size and Zeta Potential Analyzer',
'Abbr': 'NanoPS-ZetaPA'},
'XRD': {'Batch': '3',
'Staff_name': '何桂金',
'Cost_out_en': [''],
'Intro_cn': 'X射线衍射是一种快速、准确、高效的材料无损检测技术。作为一种表征晶体结构的手段，在定性分析方面，可以确定样品是无定型还是晶体，分析物相组成以及确定晶胞尺寸等；在定量分析方面，可以确定平均晶粒尺寸，获取样品结晶度以及物相含量的定量分析等。目前广泛应用于材料、化学、生物、医药、陶瓷、冶金、矿产等诸多领域。',
'Location_en': '',
'reserv_id': '',
'Cost_out_cn': [''],
'nStudents': [['8640'], ['3840']],
'Location_cn': '',
'Intro_en': 'X-ray diffraction (XRD) is a rapid, accurate, and efficient non-destructive material testing technique. As a method for characterizing crystal structures, it can qualitatively determine whether a sample is amorphous or crystalline, analyze phase composition, and determine crystal cell dimensions. Quantitatively, it can determine average grain size, assess crystallinity, and perform quantitative analysis of phase content. It is widely used in various fields including materials science, chemistry, biology, pharmaceuticals, ceramics, metallurgy, and mining.',
'nCourses': '2',
'Name_cap': 'X-RAY DIFFRACTOMETER',
'Cost_in_en': [''],
'ID': '15',
'Name_cn': 'X射线衍射仪',
'Dept_cn': [['化学系'], ['化学系']],
'Cost_in_cn': [''],
'Staff': 'staff_02',
'Dept_en': [['Dept Chemistry'], ['Dept Chemistry']],
'Course_cn': [['中级化学实验'], ['物理化学实验']],
'Course_en': [['Interm Chem Exp'], ['Labs Phys Chem']],
'Name_en': 'X-Ray Diffractometer',
'Abbr': 'XRD'},
'ITC': {'Batch': '3',
'Staff_name': '何桂金',
'Cost_out_en': [''],
'Intro_cn': '等温滴定量热仪可以连续、准确地监测和记录一个变化过程的量热曲线，实现原位、在线和无损伤地同时提供热力学和动力学信息，从而可测出配位比，焓变，熵变，结合能力，动力学常数等。等温滴定量热仪主要应用于相互作用较强的分子间热力学、动力学参数的测量，是一种研究生物热力学与生物动力学的重要方法，广泛应用于超分子、药物、生命科学等方面的研究领域中。',
'Location_en': '',
'reserv_id': '',
'Cost_out_cn': [''],
'nStudents': [['8640'], ['3840']],
'Location_cn': '',
'Intro_en': 'Isothermal titration calorimetry (ITC) enables the continuous and accurate monitoring and recording of a heat curve during a changing process. It provides in-situ, online, and non-destructive access to both thermodynamic and kinetic information. This allows for the measurement of parameters such as binding constants, enthalpy changes, entropy changes, binding affinities, and kinetic constants. ITC is primarily used for measuring thermodynamic and kinetic parameters of interactions between molecules with relatively strong affinities. It is an important method in the study of biophysical thermodynamics and kinetics, it finds extensive applications in research areas such as supramolecular chemistry, pharmaceuticals, and life sciences.',
'nCourses': '2',
'Name_cap': 'ISOTHERMAL TITRATION CALORIMETRY',
'Cost_in_en': [''],
'ID': '16',
'Name_cn': '等温滴定量热仪',
'Dept_cn': [['化学系'], ['化学系']],
'Cost_in_cn': [''],
'Staff': 'staff_02',
'Dept_en': [['Dept Chemistry'], ['Dept Chemistry']],
'Course_cn': [['中级化学实验'], ['物理化学实验']],
'Course_en': [['Interm Chem Exp'], ['Labs Phys Chem']],
'Name_en': 'Isothermal Titration Calorimetry',
'Abbr': 'ITC'},
'CD': {'Batch': '3',
'Staff_name': '赵玲丽',
'Cost_out_en': ['Spectroscopy 200CNY/sample',
 'Variable Temperature 600CNY/sample'],
'Intro_cn': '圆二色光谱仪是研究分子结构不对称性最有效的分析仪器之一，能够用于手性小分子、生物大分子（如DNA分子、蛋白质和多糖）等的构象信息研究，是生物大分子二级结构、天然有机化学、手性化学、有机环境污染化学与污染控制化学等方面研究的强大工具，已广泛应用于环境、化学、生物、医药、食品、化工等领域。',
'Location_en': 'RM-231 ZhouHoufu Bldg, Zijingang Campus',
'reserv_id': '23016315',
'Cost_out_cn': ['光谱测试200元/样', '变温测试600元/样'],
'nStudents': [['6592'], ['7360']],
'Location_cn': '紫金港校区化学实验中心231',
'Intro_en': 'Circular dichroism spectrometer is most effective for studying the asymmetry in molecular structures and can be used to investigate the conformational information of chiral small molecules and biomacromolecules (such as DNA, proteins, and polysaccharides). It serves as a powerful tool in the research of secondary structures of biomacromolecules, natural organic chemistry, chiral chemistry, organic environmental pollution chemistry, and pollution control chemistry. It is widely applied in fields such as environmental science, chemistry, biology, pharmaceuticals, food science, and chemical engineering.',
'nCourses': '2',
'Name_cap': 'CIRCULAR DICHROISM SPECTROMETER',
'Cost_in_en': ['Spectroscopy 100CNY/sample',
 'Variable Temperature 300CNY/sample (in-Dept: free)'],
'ID': '17',
'Name_cn': '圆二色光谱仪',
'Dept_cn': [['化学系'], ['面向全校', '(化学工程与工艺、高分子材料与科学、食品科学与工程、医学等)']],
'Cost_in_cn': ['光谱测试100元/样', '变温测试300元/样 (院内免费)'],
'Staff': 'staff_09',
'Dept_en': [['Dept Chemistry'],
 ['University-wide',
  '(Chem Engg、Polymer Mater Sci、Food Sci&Tech、Medicine)']],
'Course_cn': [['中级化学实验'], ['大学化学实验']],
'Course_en': [['Interm Chem Exp'], ['College Chem Lab']],
'Name_en': 'Circular Dichroism Spectrometer',
'Abbr': 'CD'},
'Raman': {'Batch': '3',
'Staff_name': '陈晨',
'Cost_out_en': ['[Self-serve]',
 'Single-Pt:400CNY/hr',
 'Surf-scan:450CNY/hr',
 '[Commissioned]',
 'Single-Pt:250CNY/sample(3 pts，+80CNY/(ex pt))',
 'Surf-scan:650CNY/hr(hourly basis)'],
'Intro_cn': '拉曼光谱分析是一种基于拉曼散射的无损分析方法，可以提供样品化学结构、相和形态、结晶度及分子相互作用的详细信息。显微拉曼光谱仪可检测各种物理形态的样品，主要用于化学、材料、物理、高分子、医药、地质等领域。',
'Location_en': 'RM-231 ZhouHoufu Bldg, Zijingang Campus',
'reserv_id': '23013738',
'Cost_out_cn': ['[自主测试]',
 '单点:400元/小时; 面扫:450元/小时',
 '[委托测试]',
 '单点:250元/样(每个样品采集3个点，超出部分按80元/点加收)',
 '面扫:650元/小时(不足1小时按1小时收费)'],
'nStudents': [['6592']],
'Location_cn': '紫金港校区化学实验中心231',
'Intro_en': 'Raman spectroscopy is a non-destructive analytical method based on Raman scattering, which provides detailed information about the chemical structure, phases, morphology, crystallinity, and molecular interactions of a sample. Raman Microscope can detect samples in various physical forms and is primarily used in fields such as chemistry, materials science, physics, polymer science, pharmaceuticals, and geology.',
'nCourses': '1',
'Name_cap': 'RAMAN MICROSCOPE',
'Cost_in_en': ['[Self-serve]',
 'Single-Pt:250CNY/hr',
 'Surf-scan:400CNY/hr',
 '[Commissioned]',
 'Single-Pt:150CNY/sample(3 pts，+50CNY/(ex pt))',
 'Surf-scan:600CNY/hr(hourly basis)'],
'ID': '18',
'Name_cn': '显微拉曼光谱仪',
'Dept_cn': [['化学系']],
'Cost_in_cn': ['[自主测试]',
 '单点:250元/小时; 面扫:400元/小时',
 '[委托测试]',
 '单点:150元/样(每个样品采集3个点，超出部分按50元/点加收)',
 '面扫:600元/小时(不足1小时按1小时收费)'],
'Staff': 'staff_08',
'Dept_en': [['Dept Chemistry']],
'Course_cn': [['中级化学实验']],
'Course_en': [['Interm Chem Exp']],
'Name_en': 'Raman Microscope',
'Abbr': 'Raman'},
'LC-TOF-MS': {'Batch': '3',
'Staff_name': '顾昊睿',
'Cost_out_en': [''],
'Intro_cn': '液质联用（HPLC-MS）又叫液相色谱-质谱联用技术，它以液相色谱作为分离系统，质谱为检测系统。液质联用体现了色谱和质谱优势的互补，将色谱对复杂样品的高分离能力，与质谱具有高选择性、高灵敏度及能够提供相对分子质量与结构信息的优点结合起来，在医药、食品、环境、化学等许多领域得到了广泛的应用。',
'Location_en': '',
'reserv_id': '',
'Cost_out_cn': [''],
'nStudents': [['400(机时数)']],
'Location_cn': '',
'Intro_en': 'High-Performance Liquid Chromatography - Mass Spectrometry (HPLC-MS) is a technique that combines the separation of liquid chromatography with the detection of mass spectrometry, complementing their strengths: the high separation capability of chromatography for complex samples, and the high selectivity, sensitivity, and structural information provided by mass spectrometry. This technique has found wide applications in various fields, including pharmaceuticals, food science, environmental analysis, and chemistry.',
'nCourses': '１',
'Name_cap': 'LIQUID CHROMATOGRAPHY TIME-OF-FLIGHT MASS SPECTROMETER',
'Cost_in_en': [''],
'ID': '19',
'Name_cn': '液相色谱飞行时间质谱联用仪',
'Dept_cn': [['化学系']],
'Cost_in_cn': [''],
'Staff': 'staff_03',
'Dept_en': [['Dept Chemistry']],
'Course_cn': [['综合化学实验', '探索性化学实验']],
'Course_en': [['Labs Comprehensive Chem', 'Exploring Chem Labs']],
'Name_en': 'Liquid Chromatography Time-of-Flight Mass Spectrometer',
'Abbr': 'LC-TOF-MS'},
'FTIR': {'Batch': '4',
'Staff_name': '顾昊睿',
'Cost_out_en': ['(1) Pure sample: 100CNY/sample',
 '(2) Unknown pure sample analysis: 200CNY/(person*time)',
 '(3) Diff. Reflect.，Pyrolysis IR，A.T.R.，Polymer IR.，Quantitative Analysis，etc.: (quote as needed)'],
'Intro_cn': '红外光谱主要用来研究分子的结构和化学键以及表征和鉴别化学物种，适用于固态、液态或气态等样品，无机、有机、高分子化合物均可检测。广泛应用于化学、环境科学、生物学、材料科学、医药、农学等研究领域。',
'Location_en': 'RM-223 ZhouHoufu Bldg, Zijingang Campus',
'reserv_id': '17027115',
'Cost_out_cn': ['(1) 纯样测试: 100元/样',
 '(2) 未知纯样测试与解析: 200元/人*次',
 '(3) 漫反射光谱、热裂解红外光谱、衰减全反射光谱、共聚物红外解析、定量分析等: 根据测试要求定价'],
'nStudents': [['6592'], ['7360']],
'Location_cn': '紫金港校区化学实验中心223',
'Intro_en': 'Infrared spectroscopy (IR) is primarily used to study molecular structures, chemical bonds, and to characterize and identify chemical species. It is applicable to solid, liquid, or gaseous samples, and can detect inorganic, organic, and polymeric compounds. It finds widespread applications in research fields such as chemistry, environmental science, biology, materials science, pharmaceuticals, and agriculture.',
'nCourses': '1',
'Name_cap': 'FOURIER TRANSFORM INFRARED SPECTROMETER',
'Cost_in_en': ['(1) Pure sample: 30CNY/sample',
 '(2) Unknown pure sample analysis: 80CNY/(person*time)',
 '(3) Diff. Reflect.，Pyrolysis IR，A.T.R.，Polymer IR.，Quantitative Analysis，etc.: (quote as needed)'],
'ID': '20',
'Name_cn': '傅立叶变换红外光谱仪',
'Dept_cn': [['化学系'], ['面向全校', '(化学工程与工艺、高分子材料与科学、食品科学与工程、医学等)']],
'Cost_in_cn': ['(1) 纯样测试: 30元/样',
 '(2) 未知纯样测试与解析: 80元/人*次',
 '(3) 漫反射光谱、热裂解红外光谱、衰减全反射光谱、共聚物红外解析、定量分析等: 根据测试要求定价'],
'Staff': 'staff_03',
'Dept_en': [['Dept Chemistry'],
 ['University-wide',
  '(Chem Engg、Polymer Mater Sci、Food Sci&Tech、Medicine)']],
'Course_cn': [['中级化学实验'], ['大学化学实验']],
'Course_en': [['Interm Chem Exp'], ['College Chem Lab']],
'Name_en': 'Fourier Transform Infrared Spectrometer',
'Abbr': 'FTIR'},
'Others': {'Batch': '4',
'Staff_name': '胡芳',
'Cost_out_en': [''],
'Intro_cn': '',
'Location_en': '',
'reserv_id': '',
'Cost_out_cn': [''],
'nStudents': [['']],
'Location_cn': '',
'Intro_en': '',
'nCourses': '',
'Name_cap': 'OTHERS',
'Cost_in_en': [''],
'ID': '21',
'Name_cn': '其他仪器',
'Dept_cn': [['']],
'Cost_in_cn': [''],
'Staff': 'staff_10',
'Dept_en': [['']],
'Course_cn': [['']],
'Course_en': [['']],
'Name_en': 'Others',
'Abbr': 'Others'}};


export function TextWithMarkup(input) {
    let output = [];
    let buffer = "";
  
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
  
      if (char === "^") {
        if (buffer) {
          output.push(buffer);
          buffer = "";
        }
        output.push(<sup key={i} style={{ fontSize: "0.6em", margin: 0, padding: 0}}>{input[++i]}</sup>);
      } else {
        buffer += char;
      }
    }
  
    if (buffer) {
      output.push(buffer);
    }
  
    return <div>{output}</div>;
  }


export const PricedEquips = Object.keys(equips).filter((key) => equips[key].reserv_id !== "")
      .reduce((result, key) => {
      result[key] = equips[key];
      return result;}, {});

export const Priced_abbrs = Object.keys(PricedEquips);

export function Equipment({lang,onClickEquip0}) {

    const [searchText, setSearchText] = useState('');

    const equips_list = ['NMR', 'FTIR', 'GC-MS', 'NanoPS-ZetaPA', 'STA', 'CD', 'Raman', 'EA', 'AMP', 
                         'LC-TOF-MS', 'ITC', 'XRD', 'SEM', 'ICP-AES',
                         'HPLC', 'GC', 'AAS', 'IR', 'FL', 'UV-VIS'];
    const [filteredEquips, setFilteredEquips] = useState(equips_list);
    const numRows = Math.ceil(filteredEquips.length / 2);
    const grids = [];
    const placeholder_search = (lang===CN)?"搜索仪器":"Search Equipment";
    const clear_search = (lang===CN)?"清除搜索":"Clear";

    for (let i = 0; i < numRows; i++) {
      const row = [];
      for (let j = 0; j < 2; j++) {
        const index = i * 2 + j;
        if (index < filteredEquips.length) {
          row.push(equips[filteredEquips[index]]);
        }
      }
      grids.push(row);
    }
                      
  /*
    const grids = [[equips['NMR'], equips['FTIR']], 
                   [equips['GC-MS'], equips['NanoPS-ZetaPA']],
                   [equips['STA'], equips['XRD']],
                   [equips['HPLC'], equips['GC']],
                   [equips['ICP-AES'], equips['AAS']],
                   [equips['IR'], equips['FL']],
                   [equips['EA'], equips['ITC']],
                   [equips['AMP'], equips['SEM']],
                   [equips['CD'], equips['Raman']],
                   [equips['LC-TOF-MS'], equips['UV-VIS']],
                  ];
*/

    const handleSearchChange = (e) => {
      const newText = e.target.value;
      setSearchText(newText);
  
      // Filter the list of tools based on the search text
      const filtered = equips_list.filter((tool) => { 
        const c1 = tool.toLowerCase().includes(newText.toLowerCase());
        const c2 = equips[tool]['Name_cn'].includes(newText.toLowerCase());
        const c3 = equips[tool]['Name_en'].toLowerCase().includes(newText.toLowerCase());
        return c1 || c2 || c3;
      }
      );
      setFilteredEquips(filtered);
    };
  
    return (
      <div>
  
        <br/>
        <tr>
          <td width="50px"></td>
          <td width="900px"> <input type="text" placeholder={placeholder_search} id="searchBox" 
                              value={searchText} onChange={handleSearchChange}/> &nbsp;
                            <button onClick={() => {setSearchText("");setFilteredEquips(equips_list);}}>{clear_search}</button><br/><br/>
                              
          </td>
          <td width="50px"></td>
        </tr>
        <br/>
  
         { 
          grids.map((row)=>{ return (
            <tr><td width="50px"></td>
            {
              row.map((equip)=>{
  
                const Name_cn = equip['Name_cn'], Name_en = equip['Name_en'], Abbr = equip['Abbr']; //lang===CN ? person.Name_cn: person.Name_en;
                //const Contact = staffs[equip['Staff']];
                const Photo = prePath_equip + Abbr + '.png'
                //const Contact_name = (lang===CN) ? ("负责人: " + Contact.Name_cn) : ("Managed by: " + Contact.Name_en);
                const detail = (lang===CN)?"详情":"Details";
                const reserv = (lang===CN)?"预约使用":"Book a slot";
                const reserv_id = equip.reserv_id;
                const reserv_link = prePath_reserv + reserv_id;

                return (
                <td width="450px">
                  <tr>
                    <td width="180px">

                      <img src={Photo} width="180" height="150" alt={Abbr}/>
                      <br/>
                    </td>
                    <td width="270px" class="fac_intro_text">
                        <strong>{Name_cn}</strong><br/>
                        {Name_en} <br/>
                        ({Abbr})<br/><br/>
                        {/*Contact_name*/}

                        <lang> <div class="highlight_shift" onClick={()=>{onClickEquip0(Abbr)}}>{detail} </div> 
                        {
                          reserv_id !== '' && (<a href={reserv_link} target='_blank' class="highlight_shift"> {reserv} </a>)
                        }                       
                        
                        </lang>

                        <br/>
                    </td>
                  </tr>
                </td>
              )})
  
            }
            <td width="50px"></td></tr>
  
          ) }) 
         } 
      </div>

    )
  
  }

export function Equip0({lang, equip0}) {
    const equip = equips[equip0];
    const Photo = prePath_equip + equip['Abbr'] + '.png';
    const Intro = (lang===CN)?equip['Intro_cn']:equip['Intro_en'];
    const Contact = staffs[equip['Staff']];
    const Contact_name = (lang===CN)?Contact.Name_cn : Contact.Name_en;
    const Email = Contact.Email, Tel = Contact.Tel, MP = Contact.MP;
    const email_link = `mailto:${Email}`;
    const Contact_header = (lang===CN)? ["负责人:", '电话:','手机:'] : ["Managed by:", 'Tel:', 'Mobile:'];
    const reserv_id = equip.reserv_id;

    //const nCourses = equip['nCourses'];
    const Depts = (lang===CN)? equip['Dept_cn'] : equip['Dept_en'];
    const Courses = (lang===CN)?equip['Course_cn']:  equip['Course_en'];
    const nStudents = equip['nStudents'];

    
    const reserv_link = prePath_reserv + reserv_id;

    const reserv = (lang===CN)?"预约使用": "Book a slot for using it";
    const notAvailable = (lang===CN)?"该仪器暂不可预约":"Unable to book/access at the moment";
    const location = (lang===CN)?equip['Location_cn']: equip['Location_en'];
    const cost_in = (lang===CN)?equip['Cost_in_cn']:equip['Cost_in_en'];
    const cost_out = (lang===CN)?equip['Cost_out_cn']:equip['Cost_out_en'];
    


    return ( <div>

            <h2>{equip.Name_cn} ({equip.Abbr})</h2>
            <h2>{equip.Name_cap}</h2>            

        <tr>
            <td width="400px">
                <a href={Photo} target="_blank"><img src={Photo} width="380" height="316" alt={equip['Abbr']}/></a>
            </td>
            
            <td width="600px"> 
                
                <div className='centered'>
                  {reserv_id !== '' && (<a href={reserv_link} target='_blank' className='reserve_in_detail'> {reserv} </a>)
                  }
                </div>
                <br/>

                <p className='para_cn'>{TextWithMarkup(Intro)}</p>

                
                {/*<br/><br/><br/>*/}
                <br/><br/>

                <strong>{(lang===CN)?"承担本科教学情况":"Used for Undergrad Education"}</strong>:<br/>

                <tr className="underscore-row" align="center">
                    <td width='300px'> <strong>{(lang===CN)?"面向院系":"Faculty/Deptartment"}</strong></td>
                    <td width='160px'> <strong>{(lang===CN)?"课程名称":"Courses"} </strong></td>
                    <td width='140px'> <strong>{(equip0==='GC-MS') ?  
                                                ((lang===CN)? '年均机时数': 'Annual Service Machine Hours')   : 
                                                ((lang===CN)? '年均人时数': 'Annual Service Person Hours') }
                                       </strong></td>
                </tr>

                {
                    Depts.map((dept,i)=>{ 
                      const hrs_cn = nStudents[i];
                      const hrs_en = (hrs_cn=='400(机时数)')? '400(machine hrs)': hrs_cn;
                      const hrs = (lang===CN) ? hrs_cn : hrs_en;
                    return(
                    <tr className="underscore-row2" align="center">
                        <td width='300px'> {Depts[i].map((d)=>{return (<div>{d}<br/></div>)})} </td>
                        <td width='160px'> 
                            {Courses[i].map((c)=>{return (<div>{c}<br/></div>)})}
                        </td>
                        <td width='140px'> {hrs}</td>
                    </tr>                    
                    )})
                }

                <br/><br/>


                {reserv_id === ''?(<div>{notAvailable}</div>) : (

                <div>

                  <strong>{(lang===CN)?"仪器所在位置":"Location"}</strong>: 
                    {location} <button onClick={() => {window.open(reserv_link, '_blank')}}>{reserv}</button><br/><br/>

                  <tr className="underscore-row" align="center">
                    <td width="300px">
                      <strong>{(lang===CN)?"校内收费标准":"Internal Fee"}</strong>
                    </td>
                    <td width="300px">
                      <strong>{(lang===CN)?"校外收费标准":"External Fee"}</strong>
                    </td>
                  </tr>
                  <tr className="underscore-row2">
                    <td width="300px">
                      {
                        ((equip0 === 'NanoPS-ZetaPA') || (equip0 === 'AMP') || (equip0 === 'CD')) ? 
                        cost_in.map((line)=>{return (<div align='center'>{TextWithMarkup(line)}</div>)}) :
                        cost_in.map((line)=>{return (<div>{TextWithMarkup(line)}</div>)})
                      }
                    </td>

                    <td width="300px">
                      {
                        ((equip0 === 'NanoPS-ZetaPA') || (equip0 === 'AMP') || (equip0 === 'CD')) ? 
                        cost_out.map((line)=>{return (<div align='center'>{TextWithMarkup(line)}</div>)}) :
                        cost_out.map((line)=>{return (<div>{TextWithMarkup(line)}</div>)})
                      }
                    </td>

                  </tr>
                </div>
                )}



                {/*<br/><br/><br/>*/}
                <br/><br/>



                {Contact_header[0]} {Contact_name}<br/>
                <a class="highlight_shift" href={email_link}>{Email}</a><br/>
                {Contact_header[1]} {Tel}<br/>
                {Contact_header[2]} {MP}<br/>

            </td>

        </tr>





    </div>
    )




}
