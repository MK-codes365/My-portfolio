// Nav type
export type navLinkType = {
  label: string;
  url: string;
};

// Top Header Primary Links (sleek, concise desktop bar)
const headerNavLinks: navLinkType[] = [
  {
    label: 'Services',
    url: '#services',
  },
  {
    label: 'Skills',
    url: '#skills-section',
  },
  {
    label: 'Experience',
    url: '#experience-section',
  },
  {
    label: 'Education',
    url: '#education-section',
  },
  {
    label: 'Projects',
    url: '#works',
  },
  {
    label: 'Contact',
    url: '#contact-section',
  },
];

// Full Drawer Navigation Links (comprehensive menu)
const navbarLinks: navLinkType[] = [
  {
    label: 'Home',
    url: '#app',
  },
  {
    label: 'Services',
    url: '#services',
  },
  {
    label: 'Skills',
    url: '#skills-section',
  },
  {
    label: 'Experience',
    url: '#experience-section',
  },
  {
    label: 'Education',
    url: '#education-section',
  },
  {
    label: 'Projects',
    url: '#works',
  },
  {
    label: 'Coding Profiles',
    url: '#coding-profiles-section',
  },
  {
    label: 'About',
    url: '#about-me-section',
  },
  {
    label: 'Contact',
    url: '#contact-section',
  },
];

const navLinks = headerNavLinks;

const socialLinks = [
  {
    label: 'GitHub',
    url: 'https://github.com/MK-codes365',
    username: 'MK-codes365',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/mukut-kumar/',
    username: 'mukut-kumar',
  },
  {
    label: 'X',
    url: 'https://x.com/Mukutkumar89',
    username: 'Mukutkumar89',
  },
  {
    label: 'LeetCode',
    url: 'https://leetcode.com/u/mukut_kumar_089/',
    username: 'mukut_kumar_089',
  },
  {
    label: 'GeeksforGeeks',
    url: 'https://www.geeksforgeeks.org/profile/mukutkumar89',
    username: 'mukutkumar89',
  },
];

const resumeUrl = `${import.meta.env.BASE_URL}Mukut_Resume.pdf`;

const resourceLinks = [
  {
    label: 'GitHub Profile',
    url: 'https://github.com/MK-codes365',
  },
  {
    label: 'LinkedIn Profile',
    url: 'https://www.linkedin.com/in/mukut-kumar/',
  },
  {
    label: 'LeetCode Profile',
    url: 'https://leetcode.com/u/mukut_kumar_089/',
  },
  {
    label: 'GeeksforGeeks Profile',
    url: 'https://www.geeksforgeeks.org/profile/mukutkumar89',
  },
];

const heroText =
  'A passionate full-stack developer crafting high-performance web applications, scalable architectures, and delightful interactive experiences.';

const locationPlace = `26°26'59.0"N 80°19'55.0"E`;
const locationCountry = 'India, Kanpur';

// cal.com
const dataCalNamespace = '30min';
const dataCalLink = 'brhoom/30min';
const dataCalConfig =
  '{"layout":"month_view", "theme": "dark", "brand": "#8C8C73"}';

export {
  socialLinks,
  resourceLinks,
  heroText,
  locationPlace,
  locationCountry,
  navLinks,
  headerNavLinks,
  navbarLinks,
  dataCalNamespace,
  dataCalLink,
  dataCalConfig,
  resumeUrl,
};
