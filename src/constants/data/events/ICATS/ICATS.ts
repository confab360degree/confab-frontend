import { HiOutlineSpeakerphone } from "react-icons/hi"
import { IoDocumentTextOutline } from "react-icons/io5"
import { LuCalendarDays, LuCircleCheckBig } from "react-icons/lu"

export const ConferenceSessionsList =[
 
    {
    key:1,
    title:'Artificial Intelligence and Emerging Technologies',
    sessionsList:[
       'Generative AI and Large Language Models',
        'Machine Learning and Deep Learning Applications',
        'AI in Decision-Making and Business Intelligence',
        'Internet of Things (IoT) and Smart Systems',
        'Blockchain, Web3, and Digital Innovation',
        'Robotics, Automation, and Industry 5.0',
        'Cybersecurity and AI-Driven Risk Management',
        'Ethical and Responsible AI'
        ]
  },
  {
    key:2,
    title:'Trade, Commerce, and Digital Economy',
    sessionsList:[
        'Digital Trade and Cross-Border Commerce',
        'E-Commerce and Omnichannel Retailing',
        'FinTech and Digital Payment Systems',
        'Global Trade Policies and Economic Integration',
        'Supply Chain Digitalization and Logistics',
        'International Business and Market Expansion',
        'Consumer Analytics and Digital Marketing',
        'Trade Competitiveness in the AI Era'
    ]
  },
   {
    key:3,
    title:'Sustainable Business and Management',
    sessionsList:[
    'Sustainable Business Models and Strategies',
    'ESG (Environmental, Social, and Governance) Practices',
    'Corporate Social Responsibility and Shared Value',
    'Green Entrepreneurship and Innovation',
    'Circular Economy and Resource Efficiency',
    'Sustainable Operations and Supply Chain Management',
    'Responsible Leadership and Governance',
    'Climate Change and Business Resilience'
    ]
  },

  {
    key:4,
    title:'Innovation, Entrepreneurship, and Future of Work',
    sessionsList:[
    'Innovation Management and Technology Adoption',
    'Start-up Ecosystems and Entrepreneurial Development',
    'Digital Transformation and Organizational Change',
    'Human-AI Collaboration in the Workplace',
    'Future Skills and Workforce Development',
    'Talent Management in the Digital Age',
    'Innovation in SMEs and Family Businesses',
    'Knowledge Management and Organizational Learning'
    ]
  },

  {
    key:5,
    title:'AI, Society, Education, and Sustainable Development',
    sessionsList:[
      'AI in Education and Learning Innovation',
    'Smart Governance and Public Policy',
    'Sustainable Development Goals (SDGs) and Technology',
    'Digital Inclusion and Social Innovation',
    'AI for Healthcare and Social Well-being',
    'Data Ethics, Privacy, and Governance',
    'Technology for Rural and Community Development',
    'Interdisciplinary Approaches to Sustainable Development'
    ]
  },
    
]


export const ImportantDateList = [
    // {
    //     key:1,
    //     title:'Submission of Abstract (up to 500 words)',
    //     date:'30th July 2026',
    //     // status:'Extended',
    //     Icon:LuCalendarDays,
    // },
    // {
    //     key:2,
    //     title:'Decision on Abstract',
    //     date:'September 2026',
    //     status:'Onward',
    //     Icon:LuCircleCheckBig
        
    // },
    {
        key:1,
        title:'Full Paper Submission',
        date:'10th September 2026',
        status:'',
        Icon:IoDocumentTextOutline
    },
    {
        key:2,
        title:'Decision on Full Paper',
        date:'17th September 2026',
        // status:'',
        Icon:HiOutlineSpeakerphone
    },
     {
        key:3,
        title:'Revised Paper Submission',
        date:'25th September 2026',
        status:'',
        Icon:HiOutlineSpeakerphone
    },
    {
        key:4,
        title:'Start of Registration',
        date:'17th September 2026',
        status:'',
        Icon:HiOutlineSpeakerphone
    },
    {
        key:5,
        title:'Last Date of Registration',
        date:'30th September 2026',
        status:'',
        Icon:HiOutlineSpeakerphone
    },
]



export const GuestList = [
    // {
    //     key:1,
    //     title:'Guest of Honor',
    //     GuestList: [
    //         {
    //             key:1,
    //             image:'/assets/images/ITNSSEM/xx.jpg',
    //             name:'Government officials (they will confirm at the time of the event)',
    //             role:'xx',
    //             location:'India'
    //         }
    //     ]
    // },
    // {
    //     key:2,
    //     title:'Chief Guest',
    //     GuestList: [
    //         {
    //             key:1,
    //             image:'/assets/images/ITNSSEM/xx.jpg',
    //             name:'Government officials (they will confirm at the time of the event)',
    //             role:'xx',
    //             location:'India'
    //         }
    //     ]
    // },
    {
        key:3,
        title:'Keynote Speakers',
        GuestList: [
             {
                key:1,
                image:'/assets/images/ICATS/mark.webp',
                name:'Dr. Mark de Souza James',
                role:'Senior Quality Solutions Lead',
                location:'Roche'
            },
            {
                key:2,
                image:'/assets/images/IMCAITCSBM/miguel.jpg',
                name:'Dr. Miguel Sahagun',
                role:'High-Point University',
                location:'USA'
            },
            // {
            //     key:3,
            //     image:'/assets/images/ITNSSEM/AR.jpg',
            //     name:'Prof. (Dr.) Alvaro Rocha',
            //     role:'World Top 1% Scientist',
            //     location:'Portugal'
            // },
            {
                key:4,
                image:'/assets/images/advisoryBoard/Fernando.webp',
                name:'Prof. Fernando Ortiz-Rodríguez',
                role:'Tamaulipas Autonomous University (UAT)',
                location:'Mexico'
            },
            {
                key:5,
                image:'/assets/images/advisoryBoard/Anoop-Pandey.webp',
                name:'Prof. (Dr.) Anoop Pandey',
                role:'HNB Garhwal University',
                location:'Uttarakhand, India'
            },
            {
                key:6,
                image:'/assets/images/ICATS/randa.jpg',
                name:'Dr. Randa Diab-Bahman',
                role:'Assistant Dean/Professor & GCC Expert',
                location:'Kuwait'
            },
            {
                key:7,
                image:'/assets/images/ICATS/fernando.jpg',
                name:'Prof. Fernando Moreira',
                role:'Full Professor, Science and Technology Department',
                location:'Universidade Portucalense (UPT)'
            },
            {
                key:8,
                image:'/assets/images/ICATS/marcellin.jpg',
                name:'Assoc. Prof. (Dr.) Yovogan Marcellin',
                role:'Sofia University',
                location:'Bulgaria'
            },
            {
                key:8,
                image:'/assets/images/ICATS/ashokan.jpg',
                name:'Prof. (Dr.) Asokan Vasudevan',
                role:'INTI International University',
                location:'Malaysia'
            },
            // {
            //     key:6,
            //     image:'/assets/images/ITNSSEM/SRahman.jpg',
            //     name:'Assoc. Prof. Dr. Sophia Rahaman',
            //     role:'Manipal Academy of Higher Education, Dubai Campus',
            //     location:'UAE'
            // },
          
            // {
            //     key:6,
            //     image:'/assets/images/ITNSSEM/Dr.Pushan-Kumar-D-scaled.png',
            //     name:'xx',
            //     role:'INTI International University',
            //     location:'Malaysia'
            // },
            // {
            //     key:7,
            //     image:'/assets/images/ITNSSEM/Dr.-Sabyasachi-Saha.jpeg',
            //     name:'xx',
            //     role:'INTI International University',
            //     location:'Malaysia'
            // },
            // {
            //     key:8,
            //     image:'/assets/images//ITNSSEM//Anuj-kumra-1.webp',
            //     name:'xx',
            //     role:'INTI International University',
            //     location:'Malaysia'
            // },
    
        ],
        
    },
    {
        key:4,
        title:'Industry Leaders',
        GuestList: [
            {
                key:1,
                image:'/assets/images/ICATS/Clement.webp',
                name:'Mr. Sunday Clement',
                role:'Regional Director (West Africa), Healthcare Solutions,',
                location:'Nigeria'
            },
            {
                key:2,
                image:'/assets/images/ICATS/ST.jpg',
                name:'Mr. Sitaram Tadepalli',
                role:'Senior Vice President, DBS Bank,',
                location:'India'
            },
            {
                key:3,
                image:'/assets/images/ICATS/deepayan.jpg',
                name:'Mr. Deepayan Kumar Das',
                role:'Managing Director, MAHR Metrology India Pvt. Ltd,',
                location:'India'
            },
            {
                key:4,
                image:'/assets/images/ICATS/ganesh.webp',
                name:'Mr. Ganesh Kashyap',
                role:'CEO,Landis+Gyr India and Global Development Center,',
                location:'India'
            },
            {
                key:5,
                image:'/assets/images/ICATS/kundan.webp',
                name:'Mr. Kundan Das',
                role:'Vice President, Sales4.0 Smart Industry Advisory,',
                location:'India'
            },
            {
                key:6,
                image:'/assets/images/ICATS/vivekanandhan.webp',
                name:'Mr. Vivekanandhan Koodalingam',
                role:'Founder,Faraday Ozone,',
                location:'India'
            },
            {
                key:7,
                image:'/assets/images/ICATS/rinoo.jpg',
                name:'Mr. Rinoo Rajesh',
                role:'Principal Advisor,Twimbit,',
                location:'India'
            },
            {
                key:8,
                image:'/assets/images/ICATS/sanjay.jpg',
                name:'Mr. Sanjay Kumar Sharma',
                role:'Director, Physics Wallah',
                location:'India'
            },
            // {
            //     key:4,
            //     image:'/assets/images/ITNSSEM/YB.jpg',
            //     name:'Mr. Yakub Bhetasiwala',
            //     role:'Managing Director, Sharon Controls India Pvt Ltd',
            //     location:'India'
            // },
            ]
            
    },
]

export const ChiefPatronList =[
            {
                key:1,
                image:'/assets/images/ICATS/anuj.webp',
                name:'Prof. (Dr.) Anuj Kumar',
                detail:'Rushford Business School, Switzerland'
            },
            {
                key:2,
                image:'/assets/images/IMCAITCSBM/michael.jpg',
                name:'Michael E. Auer',
                detail:'CEO at CTI Consulting - Technology - Information'
            },
            
        ]


export const PatronList =[
            
            {
                key:1,
                image:'/assets/images/ICATS/nishu.jpg',
                name:'Prof. (Dr.) Nishu Ayedee',
                detail:'Confab 360 Degree, India'
            },
            {
                key:2,
                image:'/assets/images/ICATS/arjun.webp',
                name:'Dr. Arjun Mishra',
                detail:'Founder and CEO,Orchid University, India'
            },
            {
                key:3,
                image:'/assets/images/ICATS/vikas.webp',
                name:'Dr. Vikas Shukla',
                detail:'Co-founder, Orchid University, India'
            },
            // {
            //     key:4,
            //     image:'/assets/images/ITNSSEM/ashokan.jpg',
            //     name:'Prof. (Dr.) Asokan Vasudevan',
            //     detail:'Dean, INTI International University, Malaysia'
            // },
        ]

export const ConvenerList =[
            {
                key:1,
                image:'/assets/images/ICATS/neelesh.jpg',
                name:'Dr. Neelesh Kumar',
                detail:'BML Munjal University, Gurugram'
            },
        ]
export const CoconvenerList =[
            {
                key:1,
                image:'/assets/images/ICATS/minakshi.jpg',
                name:'Dr. Minakshi Malik',
                detail:'BML Munjal University, Gurugram'
            },
             {
                key:2,
                image:'/assets/images/ICATS/jaya.jpg',
                name:'Dr. Jaya Ahuja',
                detail:'BML Munjal University, Gurugram'
            },
        ]    

export const Cochairlist =[
            {
                key:1,
                image:'/assets/images/ICATS/jolly.jpg',
                name:'Dr. Jolly Masih',
                detail:'SOM, BML Munjal University, Gurugram'
            },
            {
                key:2,
                image:'/assets/images/ICATS/atul.jpg',
                name:'Dr. Atul Mishra',
                detail:'SOET, BML Munjal University, Gurugram'
            },
             
            // {
            //     key:3,
            //     // image:'/assets/images/ITNSSEM/xx.jpg',
            //     name:'Mr. Puspanathan Doraisingam',
            //     detail:'INTI International University, Malaysia'
            // },
            
        ]

export const SCIntlList = [
  'Prof. Joe Houghton, UCD Michael Smurfit Graduate Business School, Dublin, Ireland',
    'Dr. Nishu Ayedee, Confab 360 Degree',
    'Prof. (Dr.) Alvaro Rocha, Rushford Business School, Switzerland',
    'Prof. (Dr.) Fernando Ortiz-Rodríguez, Universidad Autónoma de Tamaulipas, Mexico',
    'Prof. (Dr.) Kathrin G. Kind, Paris School of Management, France',
    'Prof. (Dr.) Asokan Vasudevan, INTI International University, Malaysia',
    'Prof. (Dr.) Anuj Kumar, Rushford Business School, Switzerland',
    'Prof. (Dr.) Arshi Naim, London Institute of Sustainable Development, United Kingdom',
    'Prof. (Dr.) Azlan Ali, Management and Science University, Malaysia',
    'Prof. (Dr.) Tareq Hashem, Applied Science University, Jordan',
    'Dr. Aryan Chaudhary, Thematic Working Group Member – Policy, Governance & Financing, World Health Organization, Denmark',
    'Dr. Sunitha Prabhuram, Manipal Academy of Higher Education, Dubai Campus, UAE',
    'Dr. Shad Ahmad Khan, American University of Phnom Penh, Cambodia',
    'Dr. Miguel Sahagun, High-Point University, USA',
    'Assoc. Prof. Dr. Sophia Rahaman, Manipal Academy of Higher Education, Dubai Campus, UAE',
    'Assoc. Prof. Dr. Vikineswaran A. Maniam, INTI International University, Malaysia',
    'Assoc. Prof. Dr. Anantha Raj A. Arokiasamy, INTI International University, Malaysia',
    'Assoc. Prof. Dr. Prabha Kiran, Westminster International University, Tashkent, Uzbekistan',
    'Assoc. Prof. Dr. Vu Thanh Huong, Vietnam National University, Hanoi, Vietnam',
    'Dr. Mulliati, S. Pd., M. Hum., M. Ed., Bosowa University, Indonesia',
    'Dr. Firman Menne, Bosowa University, Indonesia',
    'Dr. Rahaman Hasan, Canterbury Christ Church University, United Kingdom',
    'Dr. Haipeng Liu, Universidad Santa Paula, Costa Rica',
    'Dr. Lanita Winata, Griffith University, Australia',
    'Dr. Naim Ahmad, King Khalid University, Saudi Arabia',
    'Dr. Rasheedul Haque, MILA University, Malaysia',
    'Dr. Shaista Anwar, Liwa University, Abu Dhabi, United Arab Emirates',
    'Dr. Quang Minh Le, Vietnam National University, Hanoi, Vietnam',
    'Dr. Ahmad Shaheen, Arab Academy for Science, Technology and Maritime Transport, Egypt',
    'Dr. Abdullah M. Khataan, Arab Academy for Science, Technology and Maritime Transport, Egypt'

]

export const ERList = [
    'Prof. (Dr.) Chetan Choudhary, Sankalchand Patel University, Visnagar, India',
    'Dr. Shubham Singhania, Fore School of Management, New Delhi',
    'Dr. Millo Yaja, IIT Madras, Chennai, India',
    'Dr. Nikita Jain, Poornima College of Engineering, Jaipur, India',
    'Prof. (Dr.) Alok Satsangi, NSHM Knowledge Campus, Durgapur, India',
    'Prof. (Dr.) Deepshika Kalra, MERI, Delhi, India',
    'Prof. (Dr.) Kamal Kant Sharma,Chandigarh University, India',
    'Prof. (Dr.) Shamik Tiwari, IILM University, Gurugram, India',
    'Prof. (Dr.) Deepali Bhatnagar, Amity University Jaipur, India',
    'Prof. (Dr.) Purvi Pujari, Vijay Patil School of Management, Navi Mumbai, India',
    'Prof. (Dr.) Sunil Patel, Unitedworld School of Business, Karnavati University, India',
    'Prof. (Dr.) Aftab Haider Rizvi, Vijay Patil School of Management, Navi Mumbai, India',
    'Prof. (Dr.) Jayanta Chakraborti, Kirloskar Institute of Management, Pune, India',
    'Dr. Sri Sakuntala, Malla Reddy University, Hyderabad, India',
    'Dr. Sindhu Ravindranath, IBS Business School, Hyderabad, India',
    'Dr. Venkata Naga Manjula. P, IBS Hyderabad, IFHE Foundation, Hyderabad, India',
    'Dr. Gurpreet Kaur Chhabra, MERI College, Delhi, India',
    'Dr. Rashi Taggar, Shri Mata Vaishno Devi University, Jammu, India',
    'Assoc. Prof. Dr. Shirmila T., Madras Christian College, Chennai, India',
    'Assoc. Prof. Dr. Debasis Dash, SVKMs NMIMS Mukesh Patel School of Technology Management & Engineering, Mumbai, India',
    'Assoc. Prof. Dr. Asmat Ara Shaikh, Nutan Maharashtra Institute of Engineering & Technology, Talegaon, Pune',
    'Dr. Kuldeep Bhalerao, Bharati Vidyapeeths Institute of Management Studies & Research, India',
    'Dr. Shreyas J., Manipal Institute of Technology, MAHE, Karnataka, India',
    'Dr. P. Johanna Jasmine, Madras Christian College, Chennai, India',
    'Dr. Jolly Masih, School of Management, BML Munjal University, Haryana, India',
    'Dr. Sonal Trivedi, Manav Rachna University, Faridabad, Haryana, India',
    'Dr. Pushan Kumar Dutta, Amity University Kolkata, India',
    'Dr. Prashant Chaudhary, Dr. Vishwanath Karad MIT World Peace University, Pune, India',
    'Dr. Sukhmeet Kaur, Dr. Vishwanath Karad MIT World Peace University, Pune, India',
    'Dr. Anjani Srivastava, Manav Rachna International Institute of Research and Studies, India',
    'Dr. Arya Kumar, KIIT Deemed to be University, Odisha, India',
    'Dr. Sweta Leena Hota, KIIT Deemed to be University, Odisha, India',
    'Dr. Birendra Kumar Saraswat, GL Bajaj Institute of Technology and Management, India',
    'Dr. Chirag Patel, Sankalchand Patel University, Visnagar, India',
    'Dr. Sunny Nanade, SVKMs NMIMS Mukesh Patel School of Technology Management & Engineering, Mumbai, India',
    'Prof. (Dr.) A. Ibemcha Chanu, Bodoland University, Assam, India'

]

export const InternationalAdvisoryList = [
  'Prof. (Dr.) Chetan Choudhary, Sankalchand Patel University, Visnagar, India',
  'Dr. Shubham Singhania, Fore School of Management, New Delhi',
  'Dr. Millo Yaja, IIT Madras, Chennai, India',
  'Dr. Nikita Jain, Poornima College of Engineering, Jaipur, India',
  'Prof. (Dr.) Alok Satsangi, NSHM Knowledge Campus, Durgapur, India',
  'Prof. (Dr.) Deepshika Kalra, MERI, Delhi, India',
  'Prof. (Dr.) Kamal Kant Sharma, Chandigarh University, India',
  'Prof. (Dr.) Shamik Tiwari, IILM University, Gurugram, India',
  'Prof. (Dr.) Deepali Bhatnagar, Amity University Jaipur, India',
  'Prof. (Dr.) Purvi Pujari, Vijay Patil School of Management, Navi Mumbai, India',
  'Prof. (Dr.) Sunil Patel, Unitedworld School of Business, Karnavati University, India',
  'Prof. (Dr.) Aftab Haider Rizvi, Vijay Patil School of Management, Navi Mumbai, India',
  'Prof. (Dr.) Jayanta Chakraborti, Kirloskar Institute of Management, Pune, India',
  'Dr. Sri Sakuntala, Malla Reddy University, Hyderabad, India',
  'Dr. Sindhu Ravindranath, IBS Business School, Hyderabad, India',
  'Dr. Venkata Naga Manjula. P, IBS Hyderabad, IFHE Foundation, Hyderabad, India',
  'Dr. Gurpreet Kaur Chhabra, MERI College, Delhi, India',
  'Dr. Rashi Taggar, Shri Mata Vaishno Devi University, Jammu, India',
  'Assoc. Prof. Dr. Shirmila T., Madras Christian College, Chennai, India',
  'Assoc. Prof. Dr. Debasis Dash, SVKMs NMIMS Mukesh Patel School of Technology Management & Engineering, Mumbai, India',
  'Assoc. Prof. Dr. Asmat Ara Shaikh, Nutan Maharashtra Institute of Engineering & Technology, Talegaon, Pune',
  'Dr. Kuldeep Bhalerao, Bharati Vidyapeeths Institute of Management Studies & Research, Navi Mumbai, India',
  'Dr. Shreyas J., Manipal Institute of Technology, MAHE, Karnataka, India',
  'Dr. P. Johanna Jasmine, Madras Christian College, Chennai, India',
  'Dr. Jolly Masih, School of Management, BML Munjal University, Haryana, India',
  'Dr. Sonal Trivedi, Manav Rachna University, Faridabad, Haryana, India',
  'Dr. Pushan Kumar Dutta, Amity University Kolkata, India',
  'Dr. Prashant Chaudhary, Dr. Vishwanath Karad MIT World Peace University, Pune, India',
  'Dr. Sukhmeet Kaur, Dr. Vishwanath Karad MIT World Peace University, Pune, India',
  'Dr. Anjani Srivastava, Manav Rachna International Institute of Research and Studies, Haryana, India',
  'Dr. Arya Kumar, KIIT Deemed to be University, Odisha, India',
  'Dr. Sweta Leena Hota, KIIT Deemed to be University, Odisha, India',
  'Dr. Birendra Kumar Saraswat, GL Bajaj Institute of Technology and Management, Greater Noida, India',
  'Dr. Chirag Patel, Sankalchand Patel University, Visnagar, India',
  'Dr. Sunny Nanade, SVKMs NMIMS Mukesh Patel School of Technology Management & Engineering, Mumbai, India',
  'Prof. (Dr.) A. Ibemcha Chanu, Bodoland University, Assam, India'
]

export const ProgramCommitteeList = [
    {
        key: 1,
        image:'/assets/images/IMCAITCSBM/xx.jpg',
        name: 'Dr. SV Padmavathi Devi',
        detail: 'CSE (AI & ML)'
    },
    {
        key: 2,
        image:'/assets/images/IMCAITCSBM/xx.jpg',
        name: 'Dr. BVS Uma Prathyusha',
        detail: 'HoD, CSE(DS) and AI & DS'
    },
    {
        key: 3,
        image: '/assets/images/IMCAITCSBM/xx.jpg',
        name: 'Dr. N. Penchalaiah',
        detail: 'Professor, Dept. of CSE'
    },
    {
        key: 4,
        image: '/assets/images/IMCAITCSBM/xx.jpg',
        name: 'Dr. Kishore Mohan K.B',
        detail: 'HoD, ECE'
    },
    {
        key: 5,
        image: '/assets/images/IMCAITCSBM/xx.jpg',
        name: 'Dr. SA. Sivasankari',
        detail: 'Professor, Dept. of ECE'
    },
    {
        key: 6,
        image:'/assets/images/IMCAITCSBM/xx.jpg',
        name: 'Dr. P. Sreelakshmi',
        detail: 'Professor, Dept. of ECE'
    },
    {
        key: 7,
        image: '/assets/images/IMCAITCSBM/xx.jpg',
        name: 'Dr. G. V. Narayana',
        detail: 'Professor, Dept. of EEE'
    },
    {
        key: 8,
        image:'/assets/images/IMCAITCSBM/xx.jpg',
        name: 'Dr. Y. Harnadh',
        detail: 'HoD, Freshmen Engineering'
    },
    {
        key: 9,
        image:'/assets/images/IMCAITCSBM/xx.jpg',
        name: 'Dr. K. Vijaya Nirmala',
        detail: 'Dean School of Management Studies'
    },
    {
        key: 10,
        image:'/assets/images/IMCAITCSBM/xx.jpg',
        name: 'Dr. PMJ Stalin, Professor',
        detail: 'Dept. of MEC'
    },
    {
        key: 11,
        image:'/assets/images/IMCAITCSBM/xx.jpg',
        name: 'Prof. J. Suresh',
        detail: 'HoD, EEE'
    },
    {
        key: 12,
        image:'/assets/images/ICATS/xx.jpg',
        name: 'Prof. G. Pranay Kumar',
        detail: 'HoD, CE'
    }
]

export const publicationsList = [
    
  {
    key: 1,
    image: '/assets/images/ICATS/scopusLogo-600.png',
    title: 'Springer Proceedings Title (Scopus Indexed)',
    para: 'Reshaping Integration in the Fragmented World: Artificial Intelligence, Supply Chain and New Trade Governance (Align your paper with the above title.)'
  },
  {
    key: 2,
    image: '/assets/images/ICATS/springer.jpg',
    title: 'Conference Proceedings-Lecture Notes in Networks and Systems',
    para: 'Springer, Scopus'
  },
  {
    key: 3,
    image: '/assets/images/ICATS/15179.jpg',
    title: 'Conference Proceedings-Lecture Notes in Networks and Systems',
    para: 'Springer, Scopus'
  },
  {
    key: 4,
    image: '/assets/images/ICATS/sustainability-logo.png',
    title: 'Sustainability – MDPI',
    para: 'Scopus & SSCI Indexed'
  },
  {
    key: 5,
    image: '/assets/images/ICATS/images1.jpg',
    title: 'Innovation and Emerging Technologies Journal',
    para: 'Scopus Indexed'
  },
  {
    key: 6,
    image: '/assets/images/ICATS/images2.webp',
    title: 'International Journal of Innovative Technology and Interdisciplinary Sciences',
    para: 'Scopus Indexed'
  },
  {
    key: 7,
    image: '/assets/images/ICATS/images3.jpg',
    title: 'Journal of International Students',
    para: 'Scopus & Web of Science Indexed'
  },
  {
    key: 8,
    image: '/assets/images/ICATS/International-Journal-of-Engineering-Pedagogy-1.png',
    title: 'International Journal of Engineering Pedagogy',
    para: 'Scopus Indexed'
  },
  {
    key: 9,
    image: '/assets/images/ICATS/Journal-of-Information-and-Optimization-Sciences-1.png',
    title: 'Journal of Information and Optimization Sciences',
    para: 'Web of Science & ABDC Indexed'
  },
  {
    key: 10,
    image: '/assets/images/ICATS/Journal-of-Statistics-and-Management-Systems-1.png',
    title: 'Journal of Statistics and Management Systems',
    para: 'ABDC Indexed'
  },
  {
    key: 11,
    image: '/assets/images/ICATS/scopusLogo-600.png',
    title: 'Edited Books',
    para: 'Scopus Indexed'
  },
]
