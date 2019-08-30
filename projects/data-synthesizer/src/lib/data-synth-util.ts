

// Client Side data generation configuration utilities.
export abstract class DataSynthUtil {


  // The field types; how to generate data for a field

  public static RANDOM_NUMERIC_RANGE_UNIFORM = 0x01;  // values uniformly distributed across a range; all values in the range have equal probability of being selected.
  public static RANDOM_NUMERIC_RANGE_NORMAL = 0x02;  // choose based on a normal frequency distribution, supply mean and std
  public static RANDOM_LIST_WEIGHTED = 0x03;  // picking items from a list need to supply the weights array if using this.
  public static RANDOM_LIST_UNIFORM = 0x04;  // just pick an item from a list; all weights/probabilities equal.
  public static DATE_IN_PAST_EXACT = 0x05;
  public static DATE_IN_FUTURE_EXACT = 0x06;

  // NOTE that decimals are supported in the min and max days values. so a min of 0 and max of 0.5 will be a date/time in the past 12 hours.
  public static DATE_IN_PAST_RANGE = 0x07;
  public static DATE_IN_FUTURE_RANGE = 0x08;
  public static UNIQUE_ID_UUID = 0x09;
  public static UNIQUE_ID_AUTOINCREMENT = 0x0a;

  public static OBJECT = 0x0c;  // if the field should be recursed into to generate child object data.

  // choose values based on an exponential frequency distribution.
  public static RANDOM_NUMERIC_RANGE_EXPONENTIAL = 0x0d;

  // you would use this if the field value was calculated completely from one or more other field values on the same record.
  // this type of field is handled differently in that all other field values will be calculated first,
  // and this field would be calculated in somewhat of a second pass through the values.
  public static CALCULATED = 0x0e;


  // not sure if useful; just to assign a constant string or number to this field for all records
  // public static CONSTANT = 0x0f;

  // useful if you have a set of items that you want to choose n items from,
  // and ensure the same item is only picked once, like picking cards from a deck.
  // you will need to supply a list/array to choose from, and the n items selected will be put into an array.
  public static ITEMS_FROM_SET = 0x10;

  // get today's date and a random time; you can optionally force to be during business hours.
  public static TIME_TODAY_IN_PAST_RANGE = 0x11;



  // sample person name data; commonly used data object
  // just provided as a convenience here.
  public static PersonNames = [
  {
    firstName: 'Ross',
    lastName: 'Holder'
  },
  {
    firstName: 'Jescie',
    lastName: 'Puckett'
  },
  {
    firstName: 'Wynne',
    lastName: 'Perkins'
  },
  {
    firstName: 'Jack',
    lastName: 'Kirby'
  },
  {
    firstName: 'Garrison',
    lastName: 'Gaines'
  },
  {
    firstName: 'Audra',
    lastName: 'Underwood'
  },
  {
    firstName: 'Cameran',
    lastName: 'Carr'
  },
  {
    firstName: 'Celeste',
    lastName: 'Mcneil'
  },
  {
    firstName: 'Ferris',
    lastName: 'Galloway'
  },
  {
    firstName: 'Thaddeus',
    lastName: 'Willis'
  },
  {
    firstName: 'Briar',
    lastName: 'Weaver'
  },
  {
    firstName: 'Maggie',
    lastName: 'Stevenson'
  },
  {
    firstName: 'Dean',
    lastName: 'Barnett'
  },
  {
    firstName: 'Aidan',
    lastName: 'Kaufman'
  },
  {
    firstName: 'Murphy',
    lastName: 'Lewis'
  },
  {
    firstName: 'Avye',
    lastName: 'Lancaster'
  },
  {
    firstName: 'Zephr',
    lastName: 'Vance'
  },
  {
    firstName: 'Winifred',
    lastName: 'Lopez'
  },
  {
    firstName: 'Rebekah',
    lastName: 'Kerr'
  },
  {
    firstName: 'Molly',
    lastName: 'Manning'
  },
  {
    firstName: 'Preston',
    lastName: 'Larson'
  },
  {
    firstName: 'Colt',
    lastName: 'Barrera'
  },
  {
    firstName: 'Jakeem',
    lastName: 'Clarke'
  },
  {
    firstName: 'Alisa',
    lastName: 'Michael'
  },
  {
    firstName: 'Halla',
    lastName: 'Stephens'
  },
  {
    firstName: 'Hillary',
    lastName: 'Larson'
  },
  {
    firstName: 'Price',
    lastName: 'Ball'
  },
  {
    firstName: 'Price',
    lastName: 'Finch'
  },
  {
    firstName: 'Farrah',
    lastName: 'Dean'
  },
  {
    firstName: 'Mikayla',
    lastName: 'Schroeder'
  },
  {
    firstName: 'Hedwig',
    lastName: 'Byers'
  },
  {
    firstName: 'Selma',
    lastName: 'Koch'
  },
  {
    firstName: 'Selma',
    lastName: 'Sutton'
  },
  {
    firstName: 'Emerald',
    lastName: 'Collier'
  },
  {
    firstName: 'Mark',
    lastName: 'Cross'
  },
  {
    firstName: 'Baker',
    lastName: 'Miller'
  },
  {
    firstName: 'Keiko',
    lastName: 'Dennis'
  },
  {
    firstName: 'Perry',
    lastName: 'Franklin'
  },
  {
    firstName: 'Isaiah',
    lastName: 'Short'
  },
  {
    firstName: 'Quincy',
    lastName: 'Santiago'
  },
  {
    firstName: 'Melanie',
    lastName: 'Eaton'
  },
  {
    firstName: 'Joy',
    lastName: 'Hess'
  },
  {
    firstName: 'Arthur',
    lastName: 'Richmond'
  },
  {
    firstName: 'Brennan',
    lastName: 'Marshall'
  },
  {
    firstName: 'Raven',
    lastName: 'Hughes'
  },
  {
    firstName: 'Richard',
    lastName: 'Puckett'
  },
  {
    firstName: 'Pearl',
    lastName: 'Odom'
  },
  {
    firstName: 'Avram',
    lastName: 'Riddle'
  },
  {
    firstName: 'Sybil',
    lastName: 'Molina'
  },
  {
    firstName: 'Lunea',
    lastName: 'Berg'
  },
  {
    firstName: 'Zorita',
    lastName: 'Estes'
  },
  {
    firstName: 'Justin',
    lastName: 'Rocha'
  },
  {
    firstName: 'Randall',
    lastName: 'Rice'
  },
  {
    firstName: 'Emerald',
    lastName: 'Mason'
  },
  {
    firstName: 'Tatyana',
    lastName: 'Casey'
  },
  {
    firstName: 'Timon',
    lastName: 'Chen'
  },
  {
    firstName: 'Nigel',
    lastName: 'Finch'
  },
  {
    firstName: 'Melanie',
    lastName: 'Stewart'
  },
  {
    firstName: 'Slade',
    lastName: 'Ferrell'
  },
  {
    firstName: 'Zorita',
    lastName: 'Chen'
  },
  {
    firstName: 'Macey',
    lastName: 'Horne'
  },
  {
    firstName: 'Yvonne',
    lastName: 'Beasley'
  },
  {
    firstName: 'Ashton',
    lastName: 'Kaufman'
  },
  {
    firstName: 'Rebekah',
    lastName: 'Mcconnell'
  },
  {
    firstName: 'Jessamine',
    lastName: 'Lara'
  },
  {
    firstName: 'Jolene',
    lastName: 'Peterson'
  },
  {
    firstName: 'Talon',
    lastName: 'Heath'
  },
  {
    firstName: 'Myles',
    lastName: 'Downs'
  },
  {
    firstName: 'Cedric',
    lastName: 'Bates'
  },
  {
    firstName: 'Nyssa',
    lastName: 'Glass'
  },
  {
    firstName: 'Zelda',
    lastName: 'Maldonado'
  },
  {
    firstName: 'Dylan',
    lastName: 'Herrera'
  },
  {
    firstName: 'Reagan',
    lastName: 'Bridges'
  },
  {
    firstName: 'Fiona',
    lastName: 'Gilliam'
  },
  {
    firstName: 'Lillith',
    lastName: 'Herring'
  },
  {
    firstName: 'Quamar',
    lastName: 'Buchanan'
  },
  {
    firstName: 'Conan',
    lastName: 'Mcintyre'
  },
  {
    firstName: 'Lucian',
    lastName: 'Gilliam'
  },
  {
    firstName: 'Malik',
    lastName: 'Nunez'
  },
  {
    firstName: 'Moana',
    lastName: 'Atkins'
  },
  {
    firstName: 'Kylee',
    lastName: 'Herrera'
  },
  {
    firstName: 'Winifred',
    lastName: 'Kramer'
  },
  {
    firstName: 'Yael',
    lastName: 'Levine'
  },
  {
    firstName: 'Fallon',
    lastName: 'Snyder'
  },
  {
    firstName: 'Zoe',
    lastName: 'Hancock'
  },
  {
    firstName: 'Geraldine',
    lastName: 'Stewart'
  },
  {
    firstName: 'Kyra',
    lastName: 'Case'
  },
  {
    firstName: 'Nadine',
    lastName: 'Sanford'
  },
  {
    firstName: 'Nadine',
    lastName: 'Contreras'
  },
  {
    firstName: 'Kato',
    lastName: 'Bond'
  },
  {
    firstName: 'Lael',
    lastName: 'Rowe'
  },
  {
    firstName: 'MacKensie',
    lastName: 'Bass'
  },
  {
    firstName: 'Cathleen',
    lastName: 'Mccoy'
  },
  {
    firstName: 'Veronica',
    lastName: 'Luna'
  },
  {
    firstName: 'Martena',
    lastName: 'Bell'
  },
  {
    firstName: 'April',
    lastName: 'Armstrong'
  },
  {
    firstName: 'Germaine',
    lastName: 'Walton'
  },
  {
    firstName: 'John',
    lastName: 'Hogan'
  },
  {
    firstName: 'Latifah',
    lastName: 'Hooper'
  },
  {
    firstName: 'Natalie',
    lastName: 'Ashley'
  },




  {
    firstName: 'Darius',
    lastName: 'Cash'
  },
  {
    firstName: 'Sylvia',
    lastName: 'Woodard'
  },
  {
    firstName: 'Ria',
    lastName: 'Shields'
  },
  {
    firstName: 'Reece',
    lastName: 'Bartlett'
  },
  {
    firstName: 'Maite',
    lastName: 'Graves'
  },
  {
    firstName: 'Lillian',
    lastName: 'Carroll'
  },
  {
    firstName: 'Alyssa',
    lastName: 'Warner'
  },
  {
    firstName: 'Devin',
    lastName: 'Maynard'
  },
  {
    firstName: 'Yuri',
    lastName: 'Harris'
  },
  {
    firstName: 'Carissa',
    lastName: 'Guy'
  },
  {
    firstName: 'Jasmine',
    lastName: 'Pitts'
  },
  {
    firstName: 'Sybill',
    lastName: 'Dixon'
  },
  {
    firstName: 'Carly',
    lastName: 'Santana'
  },
  {
    firstName: 'Camden',
    lastName: 'Soto'
  },
  {
    firstName: 'Camilla',
    lastName: 'Calderon'
  },
  {
    firstName: 'Remedios',
    lastName: 'Hahn'
  },
  {
    firstName: 'Cyrus',
    lastName: 'Boyd'
  },
  {
    firstName: 'Darrel',
    lastName: 'Humphrey'
  },
  {
    firstName: 'Yardley',
    lastName: 'Murphy'
  },
  {
    firstName: 'Aimee',
    lastName: 'Kidd'
  },
  {
    firstName: 'Sacha',
    lastName: 'Adams'
  },
  {
    firstName: 'Jamal',
    lastName: 'Foley'
  },
  {
    firstName: 'Dalton',
    lastName: 'Bryant'
  },
  {
    firstName: 'Avye',
    lastName: 'Humphrey'
  },
  {
    firstName: 'Callum',
    lastName: 'Good'
  },
  {
    firstName: 'Lael',
    lastName: 'Bradford'
  },
  {
    firstName: 'Tanek',
    lastName: 'Guthrie'
  },
  {
    firstName: 'Shoshana',
    lastName: 'Perry'
  },
  {
    firstName: 'Elton',
    lastName: 'Marsh'
  },
  {
    firstName: 'Arthur',
    lastName: 'Skinner'
  },
  {
    firstName: 'Ruth',
    lastName: 'Douglas'
  },
  {
    firstName: 'Deanna',
    lastName: 'Hicks'
  },
  {
    firstName: 'Clementine',
    lastName: 'Taylor'
  },
  {
    firstName: 'Brooke',
    lastName: 'Sellers'
  },
  {
    firstName: 'Leilani',
    lastName: 'Maddox'
  },
  {
    firstName: 'David',
    lastName: 'Dejesus'
  },
  {
    firstName: 'Melinda',
    lastName: 'Fisher'
  },
  {
    firstName: 'Jin',
    lastName: 'Hebert'
  },
  {
    firstName: 'Carter',
    lastName: 'Bean'
  },
  {
    firstName: 'Petra',
    lastName: 'Daniel'
  },
  {
    firstName: 'Sigourney',
    lastName: 'Hansen'
  },
  {
    firstName: 'Samson',
    lastName: 'Dunn'
  },
  {
    firstName: 'Fallon',
    lastName: 'Everett'
  },
  {
    firstName: 'Catherine',
    lastName: 'Rice'
  },
  {
    firstName: 'Carl',
    lastName: 'Daniel'
  },
  {
    firstName: 'Madeline',
    lastName: 'Shaffer'
  },
  {
    firstName: 'Patrick',
    lastName: 'Rowe'
  },
  {
    firstName: 'Karyn',
    lastName: 'Romero'
  },
  {
    firstName: 'Marsden',
    lastName: 'Mosley'
  },
  {
    firstName: 'Ingrid',
    lastName: 'Shepard'
  },
  {
    firstName: 'Oprah',
    lastName: 'Eaton'
  },
  {
    firstName: 'Ina',
    lastName: 'Melendez'
  },
  {
    firstName: 'Jerome',
    lastName: 'Michael'
  },
  {
    firstName: 'Fiona',
    lastName: 'Frazier'
  },
  {
    firstName: 'Yolanda',
    lastName: 'Pena'
  },
  {
    firstName: 'Alan',
    lastName: 'Dunlap'
  },
  {
    firstName: 'Elijah',
    lastName: 'Holder'
  },
  {
    firstName: 'Idona',
    lastName: 'Pugh'
  },
  {
    firstName: 'Stone',
    lastName: 'Haynes'
  },
  {
    firstName: 'Cameron',
    lastName: 'Dennis'
  },
  {
    firstName: 'April',
    lastName: 'Fry'
  },
  {
    firstName: 'Stone',
    lastName: 'Mitchell'
  },
  {
    firstName: 'Hadassah',
    lastName: 'Nicholson'
  },
  {
    firstName: 'Bert',
    lastName: 'Vance'
  },
  {
    firstName: 'Kaye',
    lastName: 'Byrd'
  },
  {
    firstName: 'Sarah',
    lastName: 'Farmer'
  },
  {
    firstName: 'Jayme',
    lastName: 'Douglas'
  },
  {
    firstName: 'Rana',
    lastName: 'Sullivan'
  },
  {
    firstName: 'Blake',
    lastName: 'Ratliff'
  },
  {
    firstName: 'Bert',
    lastName: 'Justice'
  },
  {
    firstName: 'Katell',
    lastName: 'Rosales'
  },
  {
    firstName: 'Rafael',
    lastName: 'Short'
  },
  {
    firstName: 'Winter',
    lastName: 'Morgan'
  },
  {
    firstName: 'Mason',
    lastName: 'Clements'
  },
  {
    firstName: 'Fitzgerald',
    lastName: 'Irwin'
  },
  {
    firstName: 'Raven',
    lastName: 'Mccoy'
  },
  {
    firstName: 'Nina',
    lastName: 'Stokes'
  },
  {
    firstName: 'Ifeoma',
    lastName: 'Phillips'
  },
  {
    firstName: 'Quentin',
    lastName: 'Reeves'
  },
  {
    firstName: 'Tiger',
    lastName: 'Knox'
  },
  {
    firstName: 'Inga',
    lastName: 'Joyner'
  },
  {
    firstName: 'Lillith',
    lastName: 'Mcdowell'
  },
  {
    firstName: 'Wilma',
    lastName: 'Hatfield'
  },
  {
    firstName: 'Dahlia',
    lastName: 'Gonzalez'
  },
  {
    firstName: 'Tatiana',
    lastName: 'Obrien'
  },
  {
    firstName: 'Igor',
    lastName: 'Brooks'
  },
  {
    firstName: 'Sylvester',
    lastName: 'Sloan'
  },
  {
    firstName: 'Thaddeus',
    lastName: 'Swanson'
  },
  {
    firstName: 'Graham',
    lastName: 'Cannon'
  },
  {
    firstName: 'Keely',
    lastName: 'Camacho'
  },
  {
    firstName: 'Penelope',
    lastName: 'Robertson'
  },
  {
    firstName: 'Kennan',
    lastName: 'Lopez'
  },
  {
    firstName: 'Duncan',
    lastName: 'Sutton'
  },
  {
    firstName: 'Hedy',
    lastName: 'Aguilar'
  },
  {
    firstName: 'Aristotle',
    lastName: 'Crawford'
  },
  {
    firstName: 'Leslie',
    lastName: 'Franks'
  },
  {
    firstName: 'Aidan',
    lastName: 'Christensen'
  },
  {
    firstName: 'Ayanna',
    lastName: 'Haynes'
  },
  {
    firstName: 'Florence',
    lastName: 'King'
  },
  {
    firstName: 'Bruce',
    lastName: 'Warner'
  },





  {
    firstName: 'Daniel',
    lastName: 'Tucker'
  },
  {
    firstName: 'Illana',
    lastName: 'Nguyen'
  },
  {
    firstName: 'Desiree',
    lastName: 'Freeman'
  },
  {
    firstName: 'Stone',
    lastName: 'Lowe'
  },
  {
    firstName: 'Abraham',
    lastName: 'Kim'
  },
  {
    firstName: 'Aaron',
    lastName: 'Velasquez'
  },
  {
    firstName: 'Shafira',
    lastName: 'Oconnor'
  },
  {
    firstName: 'Ila',
    lastName: 'Lindsey'
  },
  {
    firstName: 'Leandra',
    lastName: 'Sanchez'
  },
  {
    firstName: 'Garth',
    lastName: 'Wolf'
  },
  {
    firstName: 'Jordan',
    lastName: 'Hyde'
  },
  {
    firstName: 'Ray',
    lastName: 'Ross'
  },
  {
    firstName: 'Susan',
    lastName: 'Trujillo'
  },
  {
    firstName: 'Lesley',
    lastName: 'Petty'
  },
  {
    firstName: 'Noble',
    lastName: 'Reese'
  },
  {
    firstName: 'Jarrod',
    lastName: 'Browning'
  },
  {
    firstName: 'Dante',
    lastName: 'Strickland'
  },
  {
    firstName: 'Wing',
    lastName: 'Wise'
  },
  {
    firstName: 'Ali',
    lastName: 'Hoover'
  },
  {
    firstName: 'Lois',
    lastName: 'White'
  },
  {
    firstName: 'Karly',
    lastName: 'Greer'
  },
  {
    firstName: 'Hadley',
    lastName: 'Duncan'
  },
  {
    firstName: 'Erin',
    lastName: 'Gutierrez'
  },
  {
    firstName: 'Kristen',
    lastName: 'Mitchell'
  },
  {
    firstName: 'Emmanuel',
    lastName: 'Stein'
  },
  {
    firstName: 'Debra',
    lastName: 'Wyatt'
  },
  {
    firstName: 'Dane',
    lastName: 'Prince'
  },
  {
    firstName: 'Sopoline',
    lastName: 'Sweet'
  },
  {
    firstName: 'Madonna',
    lastName: 'Bryant'
  },
  {
    firstName: 'Colorado',
    lastName: 'Simon'
  },
  {
    firstName: 'Mark',
    lastName: 'Cross'
  },
  {
    firstName: 'Haley',
    lastName: 'Bass'
  },
  {
    firstName: 'Stone',
    lastName: 'Soto'
  },
  {
    firstName: 'Jayme',
    lastName: 'Malone'
  },
  {
    firstName: 'Dawn',
    lastName: 'Kinney'
  },
  {
    firstName: 'Xena',
    lastName: 'Kirkland'
  },
  {
    firstName: 'Piper',
    lastName: 'Dunlap'
  },
  {
    firstName: 'Emerald',
    lastName: 'Joyce'
  },
  {
    firstName: 'Fulton',
    lastName: 'Brown'
  },
  {
    firstName: 'Lee',
    lastName: 'Gilmore'
  },
  {
    firstName: 'Ethan',
    lastName: 'Dale'
  },
  {
    firstName: 'Berk',
    lastName: 'Nicholson'
  },
  {
    firstName: 'Emma',
    lastName: 'Pena'
  },
  {
    firstName: 'Fay',
    lastName: 'Hopkins'
  },
  {
    firstName: 'Martha',
    lastName: 'Odom'
  },
  {
    firstName: 'Helen',
    lastName: 'Kennedy'
  },
  {
    firstName: 'Kirby',
    lastName: 'Campbell'
  },
  {
    firstName: 'Melinda',
    lastName: 'Burks'
  },
  {
    firstName: 'Faith',
    lastName: 'Tillman'
  },
  {
    firstName: 'Reed',
    lastName: 'Pittman'
  },
  {
    firstName: 'Barry',
    lastName: 'Holder'
  },
  {
    firstName: 'Vance',
    lastName: 'George'
  },
  {
    firstName: 'Hector',
    lastName: 'Davidson'
  },
  {
    firstName: 'Justina',
    lastName: 'Baxter'
  },
  {
    firstName: 'Alan',
    lastName: 'Acosta'
  },
  {
    firstName: 'Madonna',
    lastName: 'Graham'
  },
  {
    firstName: 'Xena',
    lastName: 'Higgins'
  },
  {
    firstName: 'Hyatt',
    lastName: 'Dillon'
  },
  {
    firstName: 'Josiah',
    lastName: 'Rodriquez'
  },
  {
    firstName: 'Renee',
    lastName: 'House'
  },
  {
    firstName: 'Elijah',
    lastName: 'Pate'
  },
  {
    firstName: 'Linus',
    lastName: 'Gallegos'
  },
  {
    firstName: 'Vivien',
    lastName: 'Nichols'
  },
  {
    firstName: 'Fletcher',
    lastName: 'Lewis'
  },
  {
    firstName: 'Elmo',
    lastName: 'Ochoa'
  },
  {
    firstName: 'Yetta',
    lastName: 'Valentine'
  },
  {
    firstName: 'Brielle',
    lastName: 'Franks'
  },
  {
    firstName: 'Jillian',
    lastName: 'Lewis'
  },
  {
    firstName: 'Regan',
    lastName: 'Buck'
  },
  {
    firstName: 'Ralph',
    lastName: 'Sellers'
  },
  {
    firstName: 'Ignatius',
    lastName: 'Hansen'
  },
  {
    firstName: 'Odessa',
    lastName: 'Hobbs'
  },
  {
    firstName: 'Deborah',
    lastName: 'Atkins'
  },
  {
    firstName: 'Simone',
    lastName: 'Langley'
  },
  {
    firstName: 'Cassidy',
    lastName: 'Booth'
  },
  {
    firstName: 'Clark',
    lastName: 'Goodwin'
  },
  {
    firstName: 'Cheryl',
    lastName: 'Gilliam'
  },
  {
    firstName: 'Gannon',
    lastName: 'Witt'
  },
  {
    firstName: 'Jacob',
    lastName: 'Whitney'
  },
  {
    firstName: 'Emmanuel',
    lastName: 'Maddox'
  },
  {
    firstName: 'Ali',
    lastName: 'Herring'
  },
  {
    firstName: 'Kendall',
    lastName: 'Rodriguez'
  },
  {
    firstName: 'Declan',
    lastName: 'Hughes'
  },
  {
    firstName: 'Elijah',
    lastName: 'Nelson'
  },
  {
    firstName: 'Guinevere',
    lastName: 'Wolfe'
  },
  {
    firstName: 'Melyssa',
    lastName: 'Sloan'
  },
  {
    firstName: 'Shannon',
    lastName: 'Roberson'
  },
  {
    firstName: 'Lesley',
    lastName: 'Stuart'
  },
  {
    firstName: 'Jonas',
    lastName: 'Kim'
  },
  {
    firstName: 'Uriel',
    lastName: 'Hamilton'
  },
  {
    firstName: 'Megan',
    lastName: 'Mccray'
  },
  {
    firstName: 'Eden',
    lastName: 'Bean'
  },
  {
    firstName: 'Savannah',
    lastName: 'Gutierrez'
  },
  {
    firstName: 'Aspen',
    lastName: 'Barlow'
  },
  {
    firstName: 'Gail',
    lastName: 'Gomez'
  },
  {
    firstName: 'Maite',
    lastName: 'Leblanc'
  },
  {
    firstName: 'Theodore',
    lastName: 'Griffin'
  },
  {
    firstName: 'Sierra',
    lastName: 'Nieves'
  },
  {
    firstName: 'Neil',
    lastName: 'Murphy'
  },
  {
    firstName: 'Phyllis',
    lastName: 'Woodward'
  }
];

}
