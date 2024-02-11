const { Destinations } = require('../models');

const destinationdata = [
  {
    city: 'Birmingham',
    state: 'Alabama',
    attraction: 'The Civil Rights District',
  },
  {
    city: 'Anchorage',
    state: 'Alaska',
    attraction: 'The Anchorage Market and Festival',
  },
  {
    city: 'Tucson',
    state: 'Arizona',
    attraction: 'Catalina State Park',
  },
  {
    city: 'Little Rock',
    state: 'Arkansas',
    attraction: 'The Old State House Museum',
  },
  {
    city: 'Los Angeles',
    state: 'California',
    attraction: 'Los Angeles County Museum of Art (LACMA)',
  },
  {
    city: 'Boulder',
    state: 'Colorado',
    attraction: 'Flatirons Hike',
  },
  {
    city: 'New Haven',
    state: 'Connecticut',
    attraction: 'Yale University Campus',
  },
  {
    city: 'Wilmington',
    state: 'Delaware',
    attraction: 'Nemours Mansion',
  },
  {
    city: 'Miami',
    state: 'Florida',
    attraction: 'South Beach',
  },
  {
    city: 'Atlanta',
    state: 'Georgia',
    attraction: 'Martin Luther King, Jr. National Historical Park',
  },
  {
    city: 'Honolulu',
    state: 'Hawaii',
    attraction: 'Waikiki Beach',
  },
  {
    city: 'Boise',
    state: 'Idaho',
    attraction: 'Boise River Greenbelt',
  },
  {
    city: 'Chicago',
    state: 'Illinois',
    attraction: 'Millennium Park',
  },
  {
    city: 'Indianapolis',
    state: 'Indiana',
    attraction: 'Indianapolis Motor Speedway',
  },
  {
    city: 'Iowa City',
    state: 'Iowa',
    attraction: 'The Iowa Avenue Literary Walk',
  },
  {
    city: 'Lawrence',
    state: 'Kansas',
    attraction: 'University of Kansas Campus',
  },
  {
    city: 'Louisville',
    state: 'Kentucky',
    attraction: 'Churchill Downs',
  },
  {
    city: 'New Orleans',
    state: 'Louisiana',
    attraction: 'Bourbon Street and the French Quarter',
  },
  {
    city: 'Portland',
    state: 'Maine',
    attraction: 'The Old Port',
  },
  {
    city: 'Annapolis',
    state: 'Maryland',
    attraction: 'The U.S. Naval Academy Campus',
  },
  {
    city: 'Boston',
    state: 'Massachusetts',
    attraction: 'The Freedom Trail',
  },
  {
    city: 'Ann Arbor',
    state: 'Michigan',
    attraction: 'Tour of the Huron River',
  },
  {
    city: 'Minneapolis',
    state: 'Minnesota',
    attraction: 'The Mall of America',
  },
  {
    city: 'Gulfport',
    state: 'Mississippi',
    attraction: 'Sailing Charter',
  },
  {
    city: 'Kansas City',
    state: 'Missouri',
    attraction: 'Historic Jazz District',
  },
  {
    city: 'Livingston',
    state: 'Montana',
    attraction: 'Kayaking down the Yellowstone River',
  },
  {
    city: 'Omaha',
    state: 'Nebraska',
    attraction: 'The Old Market',
  },
  {
    city: 'Las Vegas',
    state: 'Nevada',
    attraction: 'Red Rock Canyon National Conservation Area',
  },
  {
    city: 'Portsmouth',
    state: 'New Hampshire',
    attraction: 'The Market Square',
  },
  {
    city: 'Ocean City',
    state: 'New Jersey',
    attraction: 'Oceanside Boardwalk'
  },
  {
    city: 'Santa Fe',
    state: 'New Mexico',
    attraction: "The Georgia O'Keeffe Museum",
  },
  {
    city: 'New York City',
    state: 'New York',
    attraction: 'The Statue of Liberty',
  },
  {
    city: 'Raleigh',
    state: 'North Carolina',
    attraction: 'The Neuse River Trail',
  },
  {
    city: 'Fargo',
    state: 'North Dakota',
    attraction: 'The Roger Maris Museum',
  },
  {
    city: 'Cincinnati',
    state: 'Ohio',
    attraction: 'Eden Park',
  },
  {
    city: 'Tulsa',
    state: 'Oklahoma',
    attraction: 'Brookside Neighborhood',
  },
  {
    city: 'Portland',
    state: 'Oregon',
    attraction: 'Forest Park',
  },
  {
    city: 'Philadelphia',
    state: 'Pennsylvania',
    attraction: 'Independence Hall',
  },
  {
    city: 'Newport',
    state: 'Rhode Island',
    attraction: 'Cliff Walk',
  },
  {
    city: 'Folly Beach',
    state: 'South Carolina',
    attraction: 'Folly Beach Pier',
  },
  {
    city: 'Sioux Falls',
    state: 'South Dakota',
    attraction: 'Falls Park',
  },
  {
    city: 'Nashville',
    state: 'Tennessee',
    attraction: 'The Country Music Hall of Fame and Museum',
  },
  {
    city: 'Austin',
    state: 'Texas',
    attraction: 'Zilker Metropolitan Park',
  },
  {
    city: 'Salt Lake City',
    state: 'Utah',
    attraction: 'Temple Square',
  },
  {
    city: 'Burlington',
    state: 'Vermont',
    attraction: 'Church Street Marketplace',
  },
  {
    city: 'Arlington',
    state: 'Virginia',
    attraction: 'Arlington National Cemetery',
  },
  {
    city: 'Seattle',
    state: 'Washington',
    attraction: 'Chihuly Gardens and Glass',
  },
  {
    city: 'Morgantown',
    state: 'West Virginia',
    attraction: 'WVU’s Mountaineer Field at Milan Puskar Stadium',
  },
  {
    city: 'Madison',
    state: 'Wisconsin',
    attraction: 'Tour of the State Capitol',
  },
  {
    city: 'Jackson Hole',
    state: 'Wyoming',
    attraction: 'Grand Teton or Yellowstone National Parks',
  },
];



const seedDestinations = () => Destinations.bulkCreate(destinationdata);


module.exports = seedDestinations;

