import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaEnvira, FaPython } from 'react-icons/fa';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'project' },
  { id: nanoid(), href: '#contact', text: 'contact' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML & CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'JavaScript ( ES6 )',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React.Js',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'MongoDB',
    icon: <FaEnvira className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in Firebase, developing efficient and interactive full-stack applications with a strong database architecture.',
  },
  {
    id: nanoid(),
    title: 'Python',
    icon: <FaPython className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in Python, building interactive and dynamic web applications with a focus on seamless user interactions and functionality.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: './images/flashchat.png',
    url: 'https://flashchatvh.vercel.app',
    github: 'https://github.com/harshpatel2414',
    title: 'flash-chat',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: './images/gnews.png',
    url: 'https://gonewsvh.vercel.app',
    github: 'https://github.com/harshpatel2414',
    title: 'go-news',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://gonewsvh.vercel.app',
    github: 'https://github.com/harshpatel2414',
    title: 'third project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
];
export const reviews = [
  {
    id: 1,
    name: 'Sushant Garudkar',
    job: 'web developer',
    image: './images/MyPhoto.png',
    text: "The design is both aesthetically pleasing and functional, reflecting a good understanding of user experience. Navigation is intuitive, and the layout effectively highlights key projects and information",
  },
  {
    id: 2,
    name: 'Vishal Singh',
    job: 'web designer',
    image: './images/MyPhoto.png',
    text: 'Portfolio offers a glimpse into their skill set and creativity in the digital realm. The site is clean, well-organized, and immediately captures attention with its sleek design.',
  },
  {
    id: 3,
    name: 'Viraj Vadhane',
    job: 'web designer',
    image: './images/MyPhoto.png',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
];