import pr_1_d from '../assets/header/project-d-1.png'
import pr_1_m from '../assets/header/project-m-1.png'
import pr_2_d from '../assets/header/project-d-2.png'
import pr_3_d from '../assets/header/project-d-3.png'
import morfi from '../assets/body/morfi/morfi.png'
import forRoad from '../assets/body/4road/4road.png'
import powerfit from '../assets/body/powerfit/powerfit.png'
import morfi1 from '../assets/body/morfi/morfi1.png'
import morfi2 from '../assets/body/morfi/morfi2.png'
import morfi3 from '../assets/body/morfi/morfi3.png'
import powerfit1 from '../assets/body/powerfit/powerfit1.png'
import powerfit2 from '../assets/body/powerfit/powerfit2.png'
import powerfit3 from '../assets/body/powerfit/powerfit3.png'

export const EnData = {
  navData: ['Showcase', 'What we do', 'Testimonial', "PROJECT REQUEST"],
  headerData:['UX/UI Agency','Superior digital solutions that prioritize ','user experiences.'],
  headerSlider: [
    {
      id: 0,
      name: 'MORFI',
      s_description: 'WEB APP',
      b_description: 'The table reserve revolution, for web and app',
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
  homeFirstData: {
    title: 'Need a prototype for your start up or bussines?',
    buttons: ['Product design (UX,UI) 🧑🏻‍🎨', 'Development 🧑‍💻', 'Consulting 📈'],
    flexBoxOne: ['Create and engineer a ', 'digital product', ' from scratch'],
    flexBoxTwo:
      'We adopt your vision and craft an exquisite and functional user interface, drawing upon the finest UX methodologies. Our use of agile and contemporary programming techniques, along with rapid deployment capabilities, ensures immediate user feedback and enables seamless adjustments as required'
  },
  homeSecondData: [
    {
      img: [morfi1, morfi2, morfi3],
      title: 'Morfi',
      description:
        'Web App project designed to make easier the table reserve process, connecting client with restaurants, and helping the restaurants to have control of their reserves, created to be a easy to use platform with just a couple steps.'
    },
    {
      img: forRoad,
      title: '4 road 4 you',
      description:
        'E-comer that offer to their clients reparation and Auto-parts with the best quality on the market.'
    },
    {
      img: [powerfit1, powerfit2, powerfit3],
      title: 'Power fit',
      description:
        'Platform to have a control over your gym, create events, create and cancel memberships, make a schedule and more, create training plans to your users and more.'
    }
  ]
}

export const EsData = {
  navData: ['Proyectos', '¿Qué hacemos?', 'Testimonios', 'SOLICITAR PROYECTO'],
  headerData:['UX/UI Agency','Superior digital solutions that prioritize ','user experiences.'],
  headerSlider: [
    {
      id: 0,
      name: 'MORFI 1',
      s_description: 'APP WEB',
      b_description:
        'La revolución de la reserva de mesa, para web y aplicación',
      tag_1: 'Resevación de mesa',
      tag_2: 'AppWeb',
      img_d: pr_1_d,
      img_m: pr_1_m
    },
    {
      id: 1,
      name: '4 ROAD 4 YOU',
      s_description: 'APP WEB',
      b_description:
        'La revolución de la reserva de mesa, para web y aplicación',
      tag_1: 'Resevación de mesa',
      tag_2: 'AppWeb',
      img_d: pr_2_d,
      img_m: ''
    },
    {
      id: 2,
      name: 'MORFI 3',
      s_description: 'APP WEB',
      b_description:
        'La revolución de la reserva de mesa, para web y aplicación',
      tag_1: 'Resevación de mesa',
      tag_2: 'AppWeb',
      img_d: pr_3_d,
      img_m: ''
    }
  ],
  homeFirstData: {
    title: '¿Necesita un prototipo para su startup o negocio?',
    buttons: [
      'Diseño de Productos (UX,UI) 🧑🏻‍🎨',
      'Desarrollo 🧑‍💻',
      'Consultas 📈'
    ],
    flexBoxOne: ['Cree y diseñe un ', 'producto digital', ' desde cero'],
    flexBoxTwo:
      'Adoptamos su visión y creamos una interfaz de usuario exquisita y funcional, basándonos en las mejores metodologías de UX. Nuestro uso de técnicas de programación ágiles y contemporáneas, junto con capacidades de implementación rápida, garantiza la retroalimentación inmediata del usuario y permite ajustes sin problemas según sea necesario.'
  },
  homeSecondData: [
    {
      img: [morfi1, morfi2, morfi3],

      title: 'Morfi',
      description:
        'Proyecto web diseñada para facilitar el proceso de reserva de mesas, conectando al cliente con los restaurantes y ayudando a los restaurantes a tener el control de sus reservas, creada para ser una plataforma fácil de usar con solo un par de pasos.'
    },
    {
      img: forRoad,
      title: '4 road 4 you',
      description:
        'E-comer que ofrece a sus clientes reparación y Autopartes con la mejor calidad del mercado.'
    },
    {
      img: [powerfit1, powerfit2, powerfit3],

      title: 'Power fit',
      description:
        'Plataforma para tener un control sobre tu gimnasio, organizar horarios, crear membresías, eventos, planes de entrenamiento para tus usuarios y más.'
    }
  ]
}
