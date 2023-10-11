import pr_1_d from '../assets/header/project-d-1.png'
import pr_1_m from '../assets/header/project-m-1.png'
import pr_2_d from '../assets/header/project-d-2.png'
import pr_3_d from '../assets/header/project-d-3.png'
import forRoad from '../assets/body/4road/4road.png'
import morfi1 from '../assets/body/morfi/morfi1.png'
import morfi2 from '../assets/body/morfi/morfi2.png'
import morfi3 from '../assets/body/morfi/morfi3.png'
import powerfit1 from '../assets/body/powerfit/powerfit1.png'
import powerfit2 from '../assets/body/powerfit/powerfit2.png'
import powerfit3 from '../assets/body/powerfit/powerfit3.png'
import bgfit from '../assets/body/fit.png'
import bgroad from '../assets/body/4road.png'
import bgmorfi from '../assets/body/morfi.png'
import person from '../assets/others/Person.png'
import person2 from '../assets/others/Person2.jpg'
import Beja from '../assets/team/Beja.png'
import Ale from '../assets/team/Ale.jpg'
import Gian from '../assets/team/Gian.png'
import Gabi from '../assets/team/Gabi.png'
import Axel from '../assets/team/Axel.png'
import Luisa from '../assets/team/Luisa.png'
import Jose from '../assets/team/Jose.png'
import Angelica from '../assets/team/Angelica.png'
import Masiel from '../assets/team/Masiel.png'
import message from '../assets/icons/message.svg'

export const EnData = {
  navData: ['METHODOLOGY', 'WHAT WE DO', 'TESTIMONIAL', 'PROJECT REQUEST'],
  navImg: message,
  headerData: [
    'UX/UI Agency',
    'Superior digital solutions that prioritize ',
    'user experiences.'
  ],
  homeFirstData: {
    title: 'OUR METHODOLOGY',
    f_description: [
      'We believe in putting users at the center of the equation to create a seamless user experience that not only enhances usability but also drives higher conversion rates. Our dedicated team of UX and UI designers, who are all experts in their field, ',
      'employ an agile and iterative approach',
      ' to tackle complex digital projects.'
    ],
    s_description: [
      ' When needed, we assemble interdisciplinary squads comprising specialists in branding, concept development, design, programming, and online marketing. Together, we collaboratively craft digital solutions that not only captivate with improved user experience but also showcase cutting-edge technology.'
    ]
  },
  homeSecondData: [
    {
      id: 0,
      name: 'MORFI',
      s_description: 'WEB APP',
      b_description: 'The table reservation revolution, for web and app',
      tag_1: 'Table reservation',
      tag_2: 'WebApp',
      img_d: pr_1_d,
      img_m: pr_1_m
    },
    {
      id: 1,
      name: '4 ROAD 4 YOU',
      s_description: 'WEB',
      b_description:
        'Parts and accessories for your off road vehicle, drive with power',
      tag_1: '4 Wheels drive auto parts',
      tag_2: 'E-comerce',
      img_d: pr_2_d,
      img_m: ''
    },
    {
      id: 2,
      name: 'Power fit',
      s_description: 'WEB-APP',
      b_description:
        'Control your gym, add events, manage memberships and more',
      tag_1: 'Gym management system',
      tag_2: 'Fit Managment system',
      img_d: pr_3_d,
      img_m: ''
    }
  ],
  sliderBg: [bgmorfi, bgroad, bgfit],
  homeThirdData: [
    {
      img: [morfi1, morfi2, morfi3],
      title: 'Morfi',
      description:
        'Morfi is a Web App project designed to make the process of table reservation easier, connecting clients with restaurants and additionally helping restaurants have control over their reservation. It was created to be a easy to use platform with very little necessary steps.'
    },
    {
      img: forRoad,
      title: '4 road 4 you',
      description:
        'An E-commerce that offers high quality vehicle reparations and car parts to their clients.'
    },
    {
      img: [powerfit1, powerfit2, powerfit3],
      title: 'Power fit',
      description:
        'A platform that allows you to have an overview of all your gym has to offer, such as events, personal training, as well as training plan options. Additionally with the ability to create and cancel memberships independently.'
    }
  ],
  homeFourthData: {
    title: 'Any questions?',
    description:
      'Gabriella, our adviser is available to answer any question you have.',
    form_title: 'Request form',
    data: ['+43 6602069525', 'or', 'Gabriella@gmail.com', 'Gabriella Vesovic']
  },
  homeFifthData: {
    s_title: 'Your MVP in 30 days',
    f_title: 'From an idea into a prototype in only 30 days',
    description: [
      'Instead of jumping into a long and expensive development processes, we create ',
      'an initial prototype in just 30 days,',
      ' in a way that allows you to make changes quickly and easily, as well as scale it with additional technologies if necessary.*'
    ],
    buttons: [
      'First muck ups ready in 1 week 📧',
      'We can start in the next 2 days or less 👨‍💻',
      'Prototye in 30 days🚀'
    ]
  },
  homeSixthData: [
    {
      id: 31,
      name: 'Philip Jhonas',
      company: 'Refisal Ltmd',
      comment:
        '“Fast, effective and communicative, working with UXFinity was a great experiences, they found, understood and then solved our problem. I  highly recommend them” ',
      img: person
    },
    {
      id: 32,
      name: 'Johanna Miller',
      company: 'Refisal Ltmd',
      comment:
        "From the moment I contacted UXFinity, their responsiveness was remarkable. They wasted no time in understanding my project's requirements and swiftly provided me with a detailed plan of action. This promptness was especially appreciated, as I had a tight schedule to meet.",
      img: person2
    }
  ],
  homeSeventhData: {
    sub_title: 'Does your company or startup need a website prototype?',
    title: ['Contact us', 'Let´s talk']
  },
  homeEighthData: {
    title: 'Our team for you',
    sub_title: 'Know us closer',
    description:
      'With our team of professionals we will make your business flourish',
    team: [
      {
        id: 41,
        name: 'Andres Bejarano',
        rol: 'CEO - Designer',
        img: Beja
      },
      {
        id: 42,
        name: 'Alejandra Lomónaco',
        rol: 'UX/UI  Designer',
        img: Ale
      },

      {
        id: 46,
        name: 'Gabriella Vesovic',
        rol: 'Marketing',
        img: Gabi
      },
      {
        id: 45,
        name: 'Gian Marquez',
        rol: 'Full-stack Developer',
        img: Gian
      },
      {
        id: 51,
        name: 'Luisa Markarian',
        rol: 'Front-end Developer',
        img: Luisa
      },
      {
        id: 47,
        name: 'Axel Torletti',
        rol: 'Full-stack Developer',
        img: Axel
      },
      {
        id: 48,
        name: 'Angélica Rodríguez',
        rol: 'Front-end Developer',
        img: Angelica
      },
      {
        id: 49,
        name: 'Jose Morales',
        rol: 'Front-end Developer',
        img: Jose
      },
      {
        id: 50,
        name: 'Masiel Venegas',
        rol: 'Back-end Developer',
        img: Masiel
      }
    ]
  },
  homeNinethData: {
    title:
      'Our team is going to provide you with the best design, code and  service.',
    inputs: [
      'First and last name *',
      'Company',
      'E-mail *',
      'Phone number',
      'How can we help you in your project *'
    ]
  },
  footer: {
    titles: ['Methodology', 'Testimonial', 'What we do'],
    other: '2023 | Privacy & Terms',
    made: 'Made With Love By UXFinityAgency. All Right Reserved',
    company: ['About Us', 'Carrier', 'We are hiring', 'Blog'],
    features: ['User experience', 'User Interface', 'Code', 'Support']
  }
}

// ------------------------------------------------------
// ------------------------ESDATA----------------------------
// ------------------------------------------------------

export const EsData = {
  navData: ['METODOLOGIA', '¿QUE HACEMOS?', 'TESTIMONIOS', 'PROJECT REQUEST'],
  navImg: message,
  headerData: [
    'UX/UI Agency',
    'Superior digital solutions that prioritize ',
    'user experiences.'
  ],
  homeFirstData: {
    title: 'OUR METHODOLOGY',
    f_description: [
      'We believe in putting users at the center of the equation to create a seamless user experience that not only enhances usability but also drives higher conversion rates. Our dedicated team of UX and UI designers, who are all experts in their field, ',
      'employ an agile and iterative approach',
      ' to tackle complex digital projects.'
    ],
    s_description: [
      ' When needed, we assemble interdisciplinary squads comprising specialists in branding, concept development, design, programming, and online marketing. Together, we collaboratively craft digital solutions that not only captivate with improved user experience but also showcase cutting-edge technology.'
    ]
  },
  homeSecondData: [
    {
      id: 0,
      name: 'MORFI',
      s_description: 'WEB APP',
      b_description: 'The table reservation revolution, for web and app',
      tag_1: 'Table reservation',
      tag_2: 'WebApp',
      img_d: pr_1_d,
      img_m: pr_1_m
    },
    {
      id: 1,
      name: '4 ROAD 4 YOU',
      s_description: 'WEB',
      b_description:
        'Parts and accessories for your off road vehicle, drive with power',
      tag_1: '4 Wheels drive auto parts',
      tag_2: 'E-comerce',
      img_d: pr_2_d,
      img_m: ''
    },
    {
      id: 2,
      name: 'Power fit',
      s_description: 'WEB-APP',
      b_description:
        'Control your gym, add events, manage memberships and more',
      tag_1: 'Gym management system',
      tag_2: 'Fit Managment system',
      img_d: pr_3_d,
      img_m: ''
    }
  ],
  sliderBg: [bgmorfi, bgroad, bgfit],
  homeThirdData: [
    {
      img: [morfi1, morfi2, morfi3],
      title: 'Morfi',
      description:
        'Morfi is a Web App project designed to make the process of table reservation easier, connecting clients with restaurants and additionally helping restaurants have control over their reservation. It was created to be a easy to use platform with very little necessary steps.'
    },
    {
      img: forRoad,
      title: '4 road 4 you',
      description:
        'An E-commerce that offers high quality vehicle reparations and car parts to their clients.'
    },
    {
      img: [powerfit1, powerfit2, powerfit3],
      title: 'Power fit',
      description:
        'A platform that allows you to have an overview of all your gym has to offer, such as events, personal training, as well as training plan options. Additionally with the ability to create and cancel memberships independently.'
    }
  ],
  homeFourthData: {
    title: 'Any questions?',
    description:
      'Gabriella, our adviser is available to answer any question you have.',
    form_title: 'Request form',
    data: ['+43 6602069525', 'or', 'Gabriella@gmail.com', 'Gabriella Vesovic']
  },
  homeFifthData: {
    s_title: 'Your MVP in 30 days',
    f_title: 'From an idea into a prototype in only 30 days',
    description: [
      'Instead of jumping into a long and expensive development processes, we create ',
      'an initial prototype in just 30 days,',
      ' in a way that allows you to make changes quickly and easily, as well as scale it with additional technologies if necessary.*'
    ],
    buttons: [
      'First muck ups ready in 1 week 📧',
      'We can start in the next 2 days or less 👨‍💻',
      'Prototye in 30 days🚀'
    ]
  },
  homeSixthData: [
    {
      id: 31,
      name: 'Philip Jhonas',
      company: 'Refisal Ltmd',
      comment:
        '“Fast, effective and communicative, working with UXFinity was a great experiences, they found, understood and then solved our problem. I  highly recommend them” ',
      img: person
    },
    {
      id: 32,
      name: 'Johanna Miller',
      company: 'Refisal Ltmd',
      comment:
        "From the moment I contacted UXFinity, their responsiveness was remarkable. They wasted no time in understanding my project's requirements and swiftly provided me with a detailed plan of action. This promptness was especially appreciated, as I had a tight schedule to meet.",
      img: person2
    }
  ],
  homeSeventhData: {
    sub_title: 'Does your company or startup need a website prototype?',
    title: ['Contact us', 'Let´s talk']
  },
  homeEighthData: {
    title: 'Our team for you',
    sub_title: 'Know us closer',
    description:
      'With our team of professionals we will make your business flourish',
    team: [
      {
        id: 41,
        name: 'Andres Bejarano',
        rol: 'CEO - Designer',
        img: Beja
      },
      {
        id: 42,
        name: 'Alejandra Lomónaco',
        rol: 'UX/UI  Designer',
        img: Ale
      },

      {
        id: 46,
        name: 'Gabriella Vesovic',
        rol: 'Marketing',
        img: Gabi
      },
      {
        id: 45,
        name: 'Gian Marquez',
        rol: 'Full-stack Developer',
        img: Gian
      },
      {
        id: 51,
        name: 'Luisa Markarian',
        rol: 'Front-end Developer',
        img: Luisa
      },
      {
        id: 47,
        name: 'Axel Torletti',
        rol: 'Full-stack Developer',
        img: Axel
      },
      {
        id: 48,
        name: 'Angélica Rodríguez',
        rol: 'Front-end Developer',
        img: Angelica
      },
      {
        id: 49,
        name: 'Jose Morales',
        rol: 'Front-end Developer',
        img: Jose
      },
      {
        id: 50,
        name: 'Masiel Venegas',
        rol: 'Back-end Developer',
        img: Masiel
      }
    ]
  },
  homeNinethData: {
    title:
      'Our team is going to provide you with the best design, code and  service.',
    inputs: [
      'First and last name *',
      'Company',
      'E-mail *',
      'Phone number',
      'How can we help you in your project *'
    ]
  },
  footer: {
    titles: ['Methodology', 'Testimonial', 'What we do'],
    other: '2023 | Privacy & Terms',
    made: 'Made With Love By UXFinityAgency. All Right Reserved',
    company: ['About Us', 'Carrier', 'We are hiring', 'Blog'],
    features: ['User experience', 'User Interface', 'Code', 'Support']
  }
}
