export interface Event {
  id: string;
  title: string;
  venue: string;
  city: string;
  category: string;
  date: string;
  time: string;
  organizer: string;
  image: string;
  price: number;
  tag?: string;
}

export interface Person {
  id: string;
  name: string;
  bio: string;
  avatar: string;
  role: string;
}

export const cities = [
  { id: 'mumbai', name: 'Mumbai', icon: '🏙️' },
  { id: 'chennai', name: 'Chennai', icon: '🌊' },
  { id: 'delhi', name: 'Delhi NCR', icon: '🏛️' },
  { id: 'bengaluru', name: 'Bengaluru', icon: '🌿' },
  { id: 'hyderabad', name: 'Hyderabad', icon: '💎' },
  { id: 'chandigarh', name: 'Chandigarh', icon: '🌻' },
  { id: 'ahmedabad', name: 'Ahmedabad', icon: '🦁' },
  { id: 'pune', name: 'Pune', icon: '🎓' },
];

export const featuredEvent: Event = {
  id: 'bollywood-central',
  title: 'Bollywood Central',
  venue: 'Jab baje toh seedha dil ke centre mein lage',
  city: 'Mumbai',
  category: 'Hackathon',
  date: 'Jun 15, 2026',
  time: '10:00 AM',
  organizer: 'Nucleate Science',
  image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
  price: 0,
};

export const mockEvents: Event[] = [
  {
    id: 'tech-future-40',
    title: 'Tech Future 4.0',
    venue: 'Indian Institute of Technology, Delhi',
    city: 'New Delhi',
    category: 'Hackathons',
    date: 'Apr 20, 2026',
    time: '11:00 AM',
    organizer: 'Nucleate Science',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 125,
    tag: 'Early Bird',
  },
  {
    id: 'pop-shop-houston',
    title: 'Pop Shop Houston',
    venue: 'George R. Brown Convention Center',
    city: 'Houston',
    category: 'Design',
    date: 'May 10, 2026',
    time: '09:00 AM',
    organizer: 'Design Collective',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 200,
  },
  {
    id: 'gdgoc-ugm',
    title: 'GDGoC UGM',
    venue: 'Universitas Gadjah Mada',
    city: 'Yogyakarta',
    category: 'Tech',
    date: 'Nov 15, 2026',
    time: '08:00 AM',
    organizer: 'Google Developer Groups',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 0,
  },
  {
    id: 'boot-camp-2026',
    title: 'Dev Boot Camp',
    venue: 'Tech Hub, Bengaluru',
    city: 'Bengaluru',
    category: 'Hackathons',
    date: 'Jun 20, 2026',
    time: '09:00 AM',
    organizer: 'Dev Community',
    image: 'https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 150,
    tag: 'Popular',
  },
  {
    id: 'jornada-usuario',
    title: 'Jornada do Usuário',
    venue: 'Centro de Eventos, São Paulo',
    city: 'São Paulo',
    category: 'UX',
    date: 'Jul 5, 2026',
    time: '10:00 AM',
    organizer: 'KingPay',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 300,
  },
  {
    id: 'design-louder',
    title: 'Design Louder Conference',
    venue: 'Creative Space Mumbai',
    city: 'Mumbai',
    category: 'Design',
    date: 'Aug 12, 2026',
    time: '11:00 AM',
    organizer: 'Design Alliance',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 450,
  },
  {
    id: 'industri-ai',
    title: 'Industri AI',
    venue: 'IIT Madras',
    city: 'Chennai',
    category: 'Hackathons',
    date: 'Sep 8, 2026',
    time: '09:00 AM',
    organizer: 'Temenos',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 0,
    tag: 'Free',
  },
  {
    id: 'padmavyuh',
    title: 'Padmavyuh 2.0',
    venue: 'Dev Bhoomi Campus',
    city: 'Dehradun',
    category: 'Hackathons',
    date: 'Oct 3, 2026',
    time: '10:00 AM',
    organizer: 'Dev Bhoomi Labs',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 100,
  },
  {
    id: 'helvetica-conf',
    title: 'Helvetica Design Conf',
    venue: 'Design Studio, Hyderabad',
    city: 'Hyderabad',
    category: 'Design',
    date: 'Nov 20, 2026',
    time: '10:00 AM',
    organizer: 'Type Collective',
    image: 'https://images.pexels.com/photos/3760790/pexels-photo-3760790.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 250,
  },
  {
    id: 'simplicidade',
    title: 'Simplicidade Conference',
    venue: 'Arena Tech, Rio',
    city: 'Rio de Janeiro',
    category: 'Tech',
    date: 'Dec 5, 2026',
    time: '09:30 AM',
    organizer: 'Simple Labs',
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 175,
  },
];

export const mockPeople: Person[] = [
  {
    id: '1',
    name: 'Aman Kumar',
    bio: 'crafting the next-gen builder community & fine-tuning cod...',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
    role: 'Full Stack Developer',
  },
  {
    id: '2',
    name: 'Priya Sharma',
    bio: 'building AI tools for developers and designers worldwide...',
    avatar: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=200',
    role: 'AI Engineer',
  },
  {
    id: '3',
    name: 'Rahul Verma',
    bio: 'open source contributor, hackathon enthusiast, maker...',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    role: 'Backend Engineer',
  },
  {
    id: '4',
    name: 'Neha Singh',
    bio: 'designing systems that scale and feel effortless to use...',
    avatar: 'https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=200',
    role: 'UI/UX Designer',
  },
  {
    id: '5',
    name: 'Arjun Mehta',
    bio: 'web3 developer, DeFi researcher, building the future...',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200',
    role: 'Web3 Developer',
  },
  {
    id: '6',
    name: 'Kavya Reddy',
    bio: 'machine learning engineer focused on vision & NLP models...',
    avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=200',
    role: 'ML Engineer',
  },
];

export const aiQueryChips = [
  "who's training image models?",
  'who is in hyd?',
  'developers growing fast',
  'need a uiux guy for my project',
  'i need to hire a react engineer',
  'show me tier 1 hackathons',
  'find backend developers in pune',
  'open source contributors',
];

export const aiActionChips = [
  'Find Hackathons',
  'Help me learn',
  'Find ReactJS Developers',
  'Evaluate my submission',
];

export const aiSuggestions = [
  {
    label: 'Upcoming hackathons in my city',
    description: 'Get a curated list of nearby events matched to your skills',
  },
  {
    label: 'Find a team for my project',
    description: 'Connect with developers, designers, and PMs looking to collaborate',
  },
];

export const techFutureEvent = {
  id: 'tech-future-40',
  title: 'Tech Future 4.0',
  venue: 'Indian Institute of Technology, Delhi',
  location: 'New Delhi, India',
  category: 'Hackathons',
  organizer: 'Nucleate Science',
  date: 'Sunday, Apr 20',
  time: '11:00am – 3:00pm',
  image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
  description: 'A Designed to inspire clarity in both personal and professional spaces, the experience brings together designers, creators, and curious minds to explore how simplicity can drive deeper impact. Through engaging sessions, interactive showcases, and collaborative discussions, attendees discover ways to strip away excess and focus on what truly matters. Simplicidade encourages...',
  timeline: [
    { date: '10 Apr', day: 'Friday', event: 'Event Announce' },
    { date: '15 Apr', day: 'Wednesday', event: 'Registrations Open' },
    { date: '16 Apr', day: 'Thursday', event: 'Early Bird Ends' },
    { date: '17 Apr', day: 'Friday', event: 'Confirmation Emails Sent' },
    { date: '18 Apr', day: 'Wednesday', event: 'Registration Closes' },
    { date: '20 Apr', day: 'Thursday', event: 'Event Day' },
  ],
  hosts: [
    { name: 'Maroon 5', role: 'Main Artist', avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { name: 'Wiz Khalifa', role: 'Featured Artist', avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100' },
  ],
  rounds: [
    { month: 'Jun', day: '12', name: 'PPT Submission', round: 'Round 1', time: 'Thu 16:00' },
    { month: 'Jun', day: '27', name: 'Final Showdown', round: 'Round 2', time: 'Sat 16:00' },
  ],
  organizerName: 'Indian Institute of Technology - Delhi',
  organizerParticipants: '4,807 monthly participants',
  organizerImage: 'https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=800',
  ticketPrice: 125,
  earlyBirdPrice: 99,
};
