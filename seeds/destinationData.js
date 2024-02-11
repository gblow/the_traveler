const { Destinations } = require('../models');

const destinationdata = [
  {
    city: 'Birmingham',
    state: 'Alabama',
  },
  {
    city: 'Anchorage',
    state: 'Alaska',
  },
  {
    city: 'Tucson',
    state: 'Arizona',
  },
  {
    city: 'Little Rock',
    state: 'Arkansas',
  },
  {
    city: 'Los Angeles',
    state: 'California',
  },
  {
    city: 'Boulder',
    state: 'Colorado',
  },
  {
    city: 'New Haven',
    state: 'Connecticut',
  },
  {
    city: 'Wilmington',
    state: 'Delaware',
  },
  {
    city: 'Miami',
    state: 'Florida',
  },
  {
    city: 'Atlanta',
    state: 'Georgia',
  },
  {
    city: 'Honolulu',
    state: 'Hawaii',
  },
  {
    city: 'Boise',
    state: 'Idaho',
  },
  {
    city: 'Chicago',
    state: 'Illinois',
  },
  {
    city: 'Indianapolis',
    state: 'Indiana',
  },
  {
    city: 'Iowa City',
    state: 'Iowa',
  },
  {
    city: 'Lawrence',
    state: 'Kansas',
  },
  {
    city: 'Louisville',
    state: 'Kentucky',
  },
  {
    city: 'New Orleans',
    state: 'Louisiana',
  },
  {
    city: 'Portland',
    state: 'Maine',
  },
  {
    city: 'Annapolis',
    state: 'Maryland',
  },
  {
    city: 'Boston',
    state: 'Massachusetts',
  },
  {
    city: 'Ann Arbor',
    state: 'Michigan',
  },
  {
    city: 'Minneapolis',
    state: 'Minnesota',
  },
  {
    city: 'Gulfport',
    state: 'Mississippi',
  },
  {
    city: 'Kansas City',
    state: 'Missouri',
  },
  {
    city: 'Livingston',
    state: 'Montana',
  },
  {
    city: 'Omaha',
    state: 'Nebraska',
  },
  {
    city: 'Las Vegas',
    state: 'Nevada',
  },
  {
    city: 'Portsmouth',
    state: 'New Hampshire',
  },
  {
    city: 'Ocean City',
    state: 'New Jersey',
  },
  {
    city: 'Santa Fe',
    state: 'New Mexico',
  },
  {
    city: 'New York City',
    state: 'New York',
  },
  {
    city: 'Raleigh',
    state: 'North Carolina',
  },
  {
    city: 'Fargo',
    state: 'North Dakota',
  },
  {
    city: 'Cincinnati',
    state: 'Ohio',
  },
  {
    city: 'Tulsa',
    state: 'Oklahoma',
  },
  {
    city: 'Portland',
    state: 'Oregon',
  },
  {
    city: 'Philadelphia',
    state: 'Pennsylvania',
  },
  {
    city: 'Newport',
    state: 'Rhode Island',
  },
  {
    city: 'Folly Beach',
    state: 'South Carolina',
  },
  {
    city: 'Sioux Falls',
    state: 'South Dakota',
  },
  {
    city: 'Nashville',
    state: 'Tennessee',
  },
  {
    city: 'Austin',
    state: 'Texas',
  },
  {
    city: 'Salt Lake City',
    state: 'Utah',
  },
  {
    city: 'Burlington',
    state: 'Vermont',
  },
  {
    city: 'Arlington',
    state: 'Virginia',
  },
  {
    city: 'Seattle',
    state: 'Washington',
  },
  {
    city: 'Morgantown',
    state: 'West Virginia',
  },
  {
    city: 'Madison',
    state: 'Wisconsin',
  },
  {
    city: 'Jackson Hole',
    state: 'Wyoming',
  },
];



const seedDestinations = () => Destinations.bulkCreate(destinationdata);


module.exports = seedDestinations;

