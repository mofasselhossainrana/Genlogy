import mofasselImage from '../assets/team/mofassel.jpeg'
import tafimImage from '../assets/team/tafim.png'
import meshkatImage from '../assets/team/meshkat.jpeg'
import somadhanSplash from '../assets/projects/somadhan/splash.jpg'
import somadhanLogin from '../assets/projects/somadhan/login.jpg'
import somadhanDashboard from '../assets/projects/somadhan/dashboard.jpg'
import fmTransmitterImage from '../assets/projects/fm transmter/rasberrypi.png'

export const services = [
  { id: 'software', number: '01', icon: 'code', title: 'Full-Stack Web & Software', text: 'Reliable digital products, internal tools, and platforms engineered from interface to infrastructure.', tags: ['React & Node', 'APIs', 'Cloud systems'] },
  { id: 'ai', number: '02', icon: 'memory', title: 'AI & Machine Learning', text: 'Intelligent workflows, useful models, and decision support designed around measurable outcomes.', tags: ['LLM workflows', 'Computer vision', 'Inference'] },
  { id: 'iot', number: '03', icon: 'sensors', title: 'IoT Solutions & Systems', text: 'Connected devices and telemetry pipelines that turn physical signals into operational insight.', tags: ['Embedded', 'MQTT', 'Telemetry'] },
]

export const projects = [
  {
    id: 'somadhan',
    title: 'Somadhan (Student Help Desk)',
    type: 'Full-stack web application',
    categories: ['software'],
    status: 'Live',
    summary: 'A full-stack student help desk for creating, managing, searching, and tracking support tickets in one place.',
    description: 'Somadhan is a full-stack student help desk web application designed to make it easier for students to create, manage, search, and track support tickets in one place. The platform includes user authentication, ticket management, status and priority handling, comments, search and filtering, and a clean dashboard interface. It was built as a practical full-stack project to connect frontend, backend, API, authentication, and database concepts into one complete web application.',
    stack: ['Python', 'Django', 'Django REST Framework', 'React', 'JavaScript', 'PostgreSQL'],
    coverImage: somadhanSplash,
    gallery: [
      { image: somadhanLogin, alt: 'Somadhan login screen', label: 'Login' },
      { image: somadhanDashboard, alt: 'Somadhan dashboard', label: 'Dashboard' },
    ],
    liveUrl: 'https://somadhan-nine.vercel.app',
    accent: 'blue',
  },
  {
    id: 'raspberry-pi-fm-transmitter',
    title: 'Raspberry Pi FM Transmitter',
    type: 'Embedded systems',
    categories: ['iot'],
    status: 'Experimental',
    summary: 'A low-power experimental FM transmitter built with a Raspberry Pi Zero 2 W.',
    description: 'Developed a low-power experimental FM transmitter using a Raspberry Pi Zero 2 W, demonstrating direct RF signal generation through GPIO 4 and transmission of WAV audio to a nearby FM receiver. The project explores software-controlled RF signal generation and wireless audio transmission using a low-cost embedded platform. It provided practical experience with Raspberry Pi GPIO, signal generation, audio processing, and FM modulation while demonstrating how an embedded system can be used for basic wireless communication experiments.',
    stack: ['Raspberry Pi Zero 2 W', 'Raspberry Pi OS', 'GPIO', 'fm_transmitter', 'SoX', 'WAV Audio', 'FM Transmission'],
    features: ['FM signal generation using Raspberry Pi GPIO 4', 'WAV audio transmission', 'Test-signal generation using SoX', 'Configurable FM transmission frequency', 'Short-range wireless audio transmission', 'Practical testing with an FM radio receiver'],
    coverImage: fmTransmitterImage,
    coverAlt: 'Raspberry Pi FM Transmitter hardware setup',
    coverMode: 'contain',
    gallery: [],
    liveUrl: null,
    overviewTitle: 'A practical wireless experiment.',
    stackTitle: 'A practical embedded foundation.',
    ctaTitle: 'Have an embedded system in mind?',
    ctaText: 'Genlogy can help turn a practical hardware or wireless requirement into a dependable system.',
    accent: 'mint',
  },
]

export const founders = [
  { id: 'mofassel-hossain-rana', name: 'MD. Mofassel Hossain Rana', role: 'Full-Stack Web Developer', intro: 'Builds modern, scalable web applications with a focus on clean architecture and practical solutions.', image: mofasselImage, focus: ['Full-Stack Web'], links: { linkedin: '', github: '' } },
  { id: 'nura-alom-tafim', name: 'Nura Alom Tafim', role: 'AI/ML Expert', intro: 'Explores intelligent solutions using AI and machine learning to turn complex problems into practical systems.', image: tafimImage, focus: ['AI/ML'], links: { linkedin: '', github: '' } },
  { id: 'jobayer-kabir-meshkat', name: 'Jobayer Kabir Meshkat', role: 'IoT Expert', intro: 'Works on connected systems and IoT solutions that bridge hardware, software, and real-world applications.', image: meshkatImage, focus: ['IoT'], links: { linkedin: '', github: '' } },
]

export const principles = [
  ['Practical Problem Solving', 'Technology earns its place when it removes a real operational constraint.'],
  ['Modern Technology Stack', 'We select current tools with a clear reason, not novelty for its own sake.'],
  ['Cross-Disciplinary Rigor', 'Software, intelligence, and hardware are considered as one connected system.'],
  ['End-to-End Ownership', 'From first requirement to deployment, we build for the whole lifecycle.'],
]
