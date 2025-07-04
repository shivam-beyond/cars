export const footerLinks = [
  { path: '#', label: 'About' },
  { path: '#', label: 'Premium' },
  { path: '#', label: 'Campaigns' },
  { path: '#', label: 'Affiliate Program' },
  { path: '#', label: 'FAQs' },
  { path: '#', label: 'Contact' }
];

export const headerLinks = [
  { path: '#', label: 'Marketplace', active: true },
  { path: '#', label: 'Features', active: false },
  { path: '#', label: 'How it Works', active: false },
  { path: '#', label: 'Contact', active: false }
];

export const carMakes = [
  {
    id: 1,
    label: 'Toyota',
    value: 'toyota'
  },
  {
    id: 2,
    label: 'Honda',
    value: 'honda'
  },
  {
    id: 3,
    label: 'Ford',
    value: 'ford'
  },
  {
    id: 4,
    label: 'BMW',
    value: 'bmw'
  },
  {
    id: 5,
    label: 'Tesla',
    value: 'tesla'
  }
];

export const carColors = [
  {
    id: 1,
    label: 'Red',
    value: 'red',
    color: '#F44336'
  },
  {
    id: 2,
    label: 'Blue',
    value: 'blue',
    color: '#2196F3'
  },
  {
    id: 3,
    label: 'White',
    value: 'white',
    color: '#f7f7f7'
  },

  {
    id: 4,
    label: 'Black',
    value: 'black',
    color: '#111'
  },
  {
    id: 5,
    label: 'Silver',
    value: 'silver',
    color: '#CFD8DC'
  },
  {
    id: 6,
    label: 'Green',
    value: 'green',
    color: '#4CAF50'
  }
]


export const defaultFilters = {
  make: carMakes.reduce((acc, curr) => {
    acc[curr.value] = false;
    return acc;
  }, {}),
  color: carColors.reduce((acc, curr) => {
    acc[curr.value] = false;
    return acc;
  }, {}),
  zip: 10001,
  sort: 'default'
}