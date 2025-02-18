// Types for MSA configuration
interface MSAConfig {
  city: string;
  state: string;
  counties: string[];
  surroundingCities: string[];
  msa_region: string;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  address: {
    street: string;
    zipCode: string;
  };
}

// MSA Configuration with addresses
export const MSA_CONFIG: Record<string, MSAConfig> = {
  "New York-Newark-Jersey City": {
    city: "New York",
    state: "NY",
    counties: ["New York", "Kings", "Bronx", "Queens", "Richmond"],
    surroundingCities: ["Newark", "Jersey City", "Yonkers", "Paterson", "Elizabeth"],
    msa_region: "NY Metro Area",
    coordinates: { latitude: "40.7128", longitude: "-74.0060" },
    address: { street: "60 Centre St", zipCode: "10007" }
  },
  "Los Angeles-Long Beach-Anaheim": {
    city: "Los Angeles",
    state: "CA",
    counties: ["Los Angeles", "Orange"],
    surroundingCities: ["Long Beach", "Anaheim", "Santa Ana", "Irvine", "Glendale"],
    msa_region: "Greater Los Angeles",
    coordinates: { latitude: "34.0522", longitude: "-118.2437" },
    address: { street: "111 N Hill St", zipCode: "90012" }
  },
  "Chicago-Naperville-Elgin": {
    city: "Chicago",
    state: "IL",
    counties: ["Cook", "DuPage", "Lake"],
    surroundingCities: ["Naperville", "Elgin", "Aurora", "Joliet", "Waukegan"],
    msa_region: "Chicagoland",
    coordinates: { latitude: "41.8781", longitude: "-87.6298" },
    address: { street: "50 W Washington St", zipCode: "60602" }
  },
  "Dallas-Fort Worth-Arlington": {
    city: "Dallas",
    state: "TX",
    counties: ["Dallas", "Tarrant", "Collin"],
    surroundingCities: ["Fort Worth", "Arlington", "Plano", "Irving", "Frisco"],
    msa_region: "DFW Metroplex",
    coordinates: { latitude: "32.7767", longitude: "-96.7970" },
    address: { street: "600 Commerce St", zipCode: "75202" }
  },
  "Houston-The Woodlands-Sugar Land": {
    city: "Houston",
    state: "TX",
    counties: ["Harris", "Fort Bend", "Montgomery"],
    surroundingCities: ["The Woodlands", "Sugar Land", "Katy", "Pearland", "Spring"],
    msa_region: "Greater Houston",
    coordinates: { latitude: "29.7604", longitude: "-95.3698" },
    address: { street: "201 Caroline St", zipCode: "77002" }
  },
  "Washington-Arlington-Alexandria": {
    city: "Washington",
    state: "DC",
    counties: ["District of Columbia", "Montgomery", "Prince George's"],
    surroundingCities: ["Arlington", "Alexandria", "Bethesda", "Silver Spring", "Rockville"],
    msa_region: "DC Metro Area",
    coordinates: { latitude: "38.9072", longitude: "-77.0369" },
    address: { street: "500 Indiana Ave NW", zipCode: "20001" }
  },
  "Miami-Fort Lauderdale-Pompano Beach": {
    city: "Miami",
    state: "FL",
    counties: ["Miami-Dade", "Broward", "Palm Beach"],
    surroundingCities: ["Fort Lauderdale", "Pompano Beach", "Hialeah", "Hollywood", "Boca Raton"],
    msa_region: "South Florida Metro",
    coordinates: { latitude: "25.7617", longitude: "-80.1918" },
    address: { street: "73 W Flagler St", zipCode: "33130" }
  },
  "Philadelphia-Camden-Wilmington": {
    city: "Philadelphia",
    state: "PA",
    counties: ["Philadelphia", "Montgomery", "Bucks"],
    surroundingCities: ["Camden", "Wilmington", "Chester", "Norristown", "King of Prussia"],
    msa_region: "Greater Philadelphia",
    coordinates: { latitude: "39.9526", longitude: "-75.1652" },
    address: { street: "1301 Filbert St", zipCode: "19107" }
  },
  "Atlanta-Sandy Springs-Alpharetta": {
    city: "Atlanta",
    state: "GA",
    counties: ["Fulton", "DeKalb", "Gwinnett"],
    surroundingCities: ["Sandy Springs", "Alpharetta", "Marietta", "Roswell", "Johns Creek"],
    msa_region: "Metro Atlanta",
    coordinates: { latitude: "33.7490", longitude: "-84.3880" },
    address: { street: "185 Central Ave SW", zipCode: "30303" }
  },
  "Boston-Cambridge-Newton": {
    city: "Boston",
    state: "MA",
    counties: ["Suffolk", "Middlesex", "Norfolk"],
    surroundingCities: ["Cambridge", "Newton", "Somerville", "Waltham", "Quincy"],
    msa_region: "Greater Boston",
    coordinates: { latitude: "42.3601", longitude: "-71.0589" },
    address: { street: "1 Pemberton Square", zipCode: "02108" }
  },
  "San Francisco-Oakland-Berkeley": {
    city: "San Francisco",
    state: "CA",
    counties: ["San Francisco", "Alameda", "San Mateo"],
    surroundingCities: ["Oakland", "Berkeley", "San Mateo", "Fremont", "Hayward"],
    msa_region: "SF Bay Area",
    coordinates: { latitude: "37.7749", longitude: "-122.4194" },
    address: { street: "400 McAllister St", zipCode: "94102" }
  },
  "Phoenix-Mesa-Chandler": {
    city: "Phoenix",
    state: "AZ",
    counties: ["Maricopa", "Pinal"],
    surroundingCities: ["Mesa", "Chandler", "Scottsdale", "Gilbert", "Tempe"],
    msa_region: "Valley of the Sun",
    coordinates: { latitude: "33.4484", longitude: "-112.0740" },
    address: { street: "201 W Jefferson St", zipCode: "85003" }
  },
  "Riverside-San Bernardino-Ontario": {
    city: "Riverside",
    state: "CA",
    counties: ["Riverside", "San Bernardino"],
    surroundingCities: ["San Bernardino", "Ontario", "Corona", "Moreno Valley", "Fontana"],
    msa_region: "Inland Empire",
    coordinates: { latitude: "33.9806", longitude: "-117.3755" },
    address: { street: "4050 Main St", zipCode: "92501" }
  },
  "Detroit-Warren-Dearborn": {
    city: "Detroit",
    state: "MI",
    counties: ["Wayne", "Oakland", "Macomb"],
    surroundingCities: ["Warren", "Dearborn", "Sterling Heights", "Troy", "Livonia"],
    msa_region: "Metro Detroit",
    coordinates: { latitude: "42.3314", longitude: "-83.0458" },
    address: { street: "2 Woodward Ave", zipCode: "48226" }
  },
  "Seattle-Tacoma-Bellevue": {
    city: "Seattle",
    state: "WA",
    counties: ["King", "Pierce", "Snohomish"],
    surroundingCities: ["Tacoma", "Bellevue", "Everett", "Renton", "Kent"],
    msa_region: "Puget Sound Region",
    coordinates: { latitude: "47.6062", longitude: "-122.3321" },
    address: { street: "516 3rd Ave", zipCode: "98104" }
  },
  "Minneapolis-St. Paul-Bloomington": {
    city: "Minneapolis",
    state: "MN",
    counties: ["Hennepin", "Ramsey", "Dakota", "Anoka", "Washington"],
    surroundingCities: ["St. Paul", "Bloomington", "Brooklyn Park", "Plymouth", "Eagan"],
    msa_region: "Twin Cities",
    coordinates: { latitude: "44.9778", longitude: "-93.2650" },
    address: { street: "300 S 6th St", zipCode: "55487" }
  },
  "San Diego-Carlsbad": {
    city: "San Diego",
    state: "CA",
    counties: ["San Diego"],
    surroundingCities: ["Carlsbad", "Oceanside", "Chula Vista", "El Cajon", "Escondido"],
    msa_region: "San Diego County",
    coordinates: { latitude: "32.7157", longitude: "-117.1611" },
    address: { street: "220 W Broadway", zipCode: "92101" }
  },
  "Tampa-St. Petersburg-Clearwater": {
    city: "Tampa",
    state: "FL",
    counties: ["Hillsborough", "Pinellas", "Pasco", "Hernando"],
    surroundingCities: ["St. Petersburg", "Clearwater", "Largo", "Brandon", "Spring Hill"],
    msa_region: "Tampa Bay Area",
    coordinates: { latitude: "27.9506", longitude: "-82.4572" },
    address: { street: "800 E Twiggs St", zipCode: "33602" }
  },
  "Denver-Aurora-Lakewood": {
    city: "Denver",
    state: "CO",
    counties: ["Denver", "Arapahoe", "Jefferson", "Adams", "Douglas"],
    surroundingCities: ["Aurora", "Lakewood", "Centennial", "Thornton", "Arvada"],
    msa_region: "Front Range Urban Corridor",
    coordinates: { latitude: "39.7392", longitude: "-104.9903" },
    address: { street: "1437 Bannock St", zipCode: "80202" }
  },
  "Baltimore-Columbia-Towson": {
    city: "Baltimore",
    state: "MD",
    counties: ["Baltimore City", "Baltimore County", "Anne Arundel", "Howard", "Harford"],
    surroundingCities: ["Columbia", "Towson", "Ellicott City", "Glen Burnie", "Dundalk"],
    msa_region: "Central Maryland",
    coordinates: { latitude: "39.2904", longitude: "-76.6122" },
    address: { street: "100 N Calvert St", zipCode: "21202" }
  },
  "St. Louis-Metro East": {
    city: "St. Louis",
    state: "MO",
    counties: ["St. Louis City", "St. Louis County", "St. Charles"],
    surroundingCities: ["Clayton", "Florissant", "Belleville", "Alton", "Granite City"],
    msa_region: "Greater St. Louis",
    coordinates: { latitude: "38.6270", longitude: "-90.1994" },
    address: { street: "10 N Tucker Blvd", zipCode: "63101" }
  },
  "Charlotte-Concord-Gastonia": {
    city: "Charlotte",
    state: "NC",
    counties: ["Mecklenburg", "Gaston", "Union", "Cabarrus", "Iredell"],
    surroundingCities: ["Concord", "Gastonia", "Rock Hill", "Huntersville", "Kannapolis"],
    msa_region: "Metro Charlotte",
    coordinates: { latitude: "35.2271", longitude: "-80.8431" },
    address: { street: "832 E 4th St", zipCode: "28202" }
  },
  "Orlando-Kissimmee-Sanford": {
    city: "Orlando",
    state: "FL",
    counties: ["Orange", "Seminole", "Osceola", "Lake"],
    surroundingCities: ["Kissimmee", "Sanford", "Altamonte Springs", "Winter Park", "Apopka"],
    msa_region: "Central Florida",
    coordinates: { latitude: "28.5383", longitude: "-81.3792" },
    address: { street: "425 N Orange Ave", zipCode: "32801" }
  },
  "San Antonio-New Braunfels": {
    city: "San Antonio",
    state: "TX",
    counties: ["Bexar", "Comal", "Guadalupe"],
    surroundingCities: ["New Braunfels", "Schertz", "Cibolo", "Converse", "Universal City"],
    msa_region: "Greater San Antonio",
    coordinates: { latitude: "29.4241", longitude: "-98.4936" },
    address: { street: "300 Dolorosa St", zipCode: "78205" }
  },
  "Portland-Vancouver-Hillsboro": {
    city: "Portland",
    state: "OR",
    counties: ["Multnomah", "Washington", "Clackamas", "Clark"],
    surroundingCities: ["Vancouver", "Hillsboro", "Gresham", "Beaverton", "Tigard"],
    msa_region: "Portland Metro",
    coordinates: { latitude: "45.5152", longitude: "-122.6784" },
    address: { street: "1021 SW 4th Ave", zipCode: "97204" }
  },
  "Sacramento-Roseville-Folsom": {
    city: "Sacramento",
    state: "CA",
    counties: ["Sacramento", "Placer", "El Dorado", "Yolo"],
    surroundingCities: ["Roseville", "Folsom", "Elk Grove", "Citrus Heights", "Davis"],
    msa_region: "Greater Sacramento",
    coordinates: { latitude: "38.5816", longitude: "-121.4944" },
    address: { street: "720 9th St", zipCode: "95814" }
  },
  "Pittsburgh-New Castle-Weirton": {
    city: "Pittsburgh",
    state: "PA",
    counties: ["Allegheny", "Beaver", "Butler", "Washington", "Westmoreland"],
    surroundingCities: ["New Castle", "Weirton", "Bethel Park", "Monroeville", "Penn Hills"],
    msa_region: "Western Pennsylvania",
    coordinates: { latitude: "40.4406", longitude: "-79.9959" },
    address: { street: "414 Grant St", zipCode: "15219" }
  },
  "Las Vegas-Henderson-Paradise": {
    city: "Las Vegas",
    state: "NV",
    counties: ["Clark"],
    surroundingCities: ["Henderson", "Paradise", "North Las Vegas", "Spring Valley", "Enterprise"],
    msa_region: "Southern Nevada",
    coordinates: { latitude: "36.1699", longitude: "-115.1398" },
    address: { street: "200 Lewis Ave", zipCode: "89101" }
  },
  "Austin-Round Rock-Georgetown": {
    city: "Austin",
    state: "TX",
    counties: ["Travis", "Williamson", "Hays", "Bastrop", "Caldwell"],
    surroundingCities: ["Round Rock", "Georgetown", "Cedar Park", "San Marcos", "Pflugerville"],
    msa_region: "Central Texas",
    coordinates: { latitude: "30.2672", longitude: "-97.7431" },
    address: { street: "1000 Guadalupe St", zipCode: "78701" }
  },
  "Columbus-Marion-Zanesville": {
    city: "Columbus",
    state: "OH",
    counties: ["Franklin", "Delaware", "Licking"],
    surroundingCities: ["Dublin", "Westerville", "Reynoldsburg", "Grove City", "Hilliard"],
    msa_region: "Central Ohio",
    coordinates: { latitude: "39.9612", longitude: "-82.9988" },
    address: { street: "369 S High St", zipCode: "43215" }
  },
  "Kansas City-Overland Park": {
    city: "Kansas City",
    state: "MO",
    counties: ["Jackson", "Clay", "Platte"],
    surroundingCities: ["Overland Park", "Independence", "Lee's Summit", "Olathe", "Shawnee"],
    msa_region: "Metro Kansas City",
    coordinates: { latitude: "39.0997", longitude: "-94.5786" },
    address: { street: "415 E 12th St", zipCode: "64106" }
  },
  "Cincinnati-Wilmington": {
    city: "Cincinnati",
    state: "OH",
    counties: ["Hamilton", "Butler", "Warren"],
    surroundingCities: ["Norwood", "Forest Park", "Mason", "Fairfield", "West Chester"],
    msa_region: "Greater Cincinnati",
    coordinates: { latitude: "39.1031", longitude: "-84.5120" },
    address: { street: "1000 Main St", zipCode: "45202" }
  },
  "Cleveland-Akron-Canton": {
    city: "Cleveland",
    state: "OH",
    counties: ["Cuyahoga", "Summit", "Lake"],
    surroundingCities: ["Akron", "Parma", "Lakewood", "Euclid", "Cleveland Heights"],
    msa_region: "Northeast Ohio",
    coordinates: { latitude: "41.4993", longitude: "-81.6944" },
    address: { street: "1200 Ontario St", zipCode: "44113" }
  },
  "Indianapolis-Carmel-Anderson": {
    city: "Indianapolis",
    state: "IN",
    counties: ["Marion", "Hamilton", "Johnson"],
    surroundingCities: ["Carmel", "Fishers", "Noblesville", "Greenwood", "Lawrence"],
    msa_region: "Central Indiana",
    coordinates: { latitude: "39.7684", longitude: "-86.1581" },
    address: { street: "200 E Washington St", zipCode: "46204" }
  },
  "San Jose-Sunnyvale-Santa Clara": {
    city: "San Jose",
    state: "CA",
    counties: ["Santa Clara"],
    surroundingCities: ["Sunnyvale", "Santa Clara", "Mountain View", "Milpitas", "Cupertino"],
    msa_region: "Silicon Valley",
    coordinates: { latitude: "37.3382", longitude: "-121.8863" },
    address: { street: "191 N 1st St", zipCode: "95113" }
  },
  "Nashville-Davidson-Murfreesboro": {
    city: "Nashville",
    state: "TN",
    counties: ["Davidson", "Rutherford", "Williamson"],
    surroundingCities: ["Murfreesboro", "Franklin", "Hendersonville", "Smyrna", "Brentwood"],
    msa_region: "Middle Tennessee",
    coordinates: { latitude: "36.1627", longitude: "-86.7816" },
    address: { street: "1 Public Square", zipCode: "37201" }
  },
  "Virginia Beach-Norfolk-Newport News": {
    city: "Virginia Beach",
    state: "VA",
    counties: ["Virginia Beach City", "Norfolk City", "Newport News City"],
    surroundingCities: ["Norfolk", "Newport News", "Chesapeake", "Hampton", "Portsmouth"],
    msa_region: "Hampton Roads",
    coordinates: { latitude: "36.8529", longitude: "-75.9780" },
    address: { street: "2425 Nimmo Pkwy", zipCode: "23456" }
  },
  "Providence-Warwick": {
    city: "Providence",
    state: "RI",
    counties: ["Providence", "Kent", "Bristol"],
    surroundingCities: ["Warwick", "Cranston", "Pawtucket", "East Providence", "Woonsocket"],
    msa_region: "Greater Providence",
    coordinates: { latitude: "41.8240", longitude: "-71.4128" },
    address: { street: "250 Benefit St", zipCode: "02903" }
  },
  "Milwaukee-Waukesha": {
    city: "Milwaukee",
    state: "WI",
    counties: ["Milwaukee", "Waukesha", "Washington"],
    surroundingCities: ["Waukesha", "West Allis", "Wauwatosa", "New Berlin", "Brookfield"],
    msa_region: "Greater Milwaukee",
    coordinates: { latitude: "43.0389", longitude: "-87.9065" },
    address: { street: "901 N 9th St", zipCode: "53233" }
  },
  "Jacksonville-St. Augustine": {
    city: "Jacksonville",
    state: "FL",
    counties: ["Duval", "St. Johns", "Clay"],
    surroundingCities: ["St. Augustine", "Orange Park", "Jacksonville Beach", "Ponte Vedra", "Neptune Beach"],
    msa_region: "First Coast",
    coordinates: { latitude: "30.3322", longitude: "-81.6557" },
    address: { street: "501 W Adams St", zipCode: "32202" }
  },
  "Oklahoma City": {
    city: "Oklahoma City",
    state: "OK",
    counties: ["Oklahoma", "Cleveland", "Canadian"],
    surroundingCities: ["Norman", "Edmond", "Moore", "Midwest City", "Del City"],
    msa_region: "Central Oklahoma",
    coordinates: { latitude: "35.4676", longitude: "-97.5164" },
    address: { street: "200 N Walker Ave", zipCode: "73102" }
  },
  "Raleigh-Cary": {
    city: "Raleigh",
    state: "NC",
    counties: ["Wake", "Durham", "Johnston"],
    surroundingCities: ["Cary", "Durham", "Chapel Hill", "Apex", "Wake Forest"],
    msa_region: "Research Triangle",
    coordinates: { latitude: "35.7796", longitude: "-78.6382" },
    address: { street: "316 Fayetteville St", zipCode: "27601" }
  },
  "Memphis": {
    city: "Memphis",
    state: "TN",
    counties: ["Shelby", "DeSoto", "Crittenden"],
    surroundingCities: ["Germantown", "Collierville", "Bartlett", "Southaven", "Horn Lake"],
    msa_region: "Mid-South",
    coordinates: { latitude: "35.1495", longitude: "-90.0490" },
    address: { street: "140 Adams Ave", zipCode: "38103" }
  },
  "Richmond": {
    city: "Richmond",
    state: "VA",
    counties: ["Richmond City", "Henrico", "Chesterfield"],
    surroundingCities: ["Petersburg", "Hopewell", "Colonial Heights", "Glen Allen", "Chester"],
    msa_region: "Greater Richmond",
    coordinates: { latitude: "37.5407", longitude: "-77.4360" },
    address: { street: "400 N 9th St", zipCode: "23219" }
  },
  "Buffalo-Cheektowaga": {
    city: "Buffalo",
    state: "NY",
    counties: ["Erie", "Niagara"],
    surroundingCities: ["Cheektowaga", "Tonawanda", "Amherst", "Kenmore", "Lackawanna"],
    msa_region: "Western New York",
    coordinates: { latitude: "42.8864", longitude: "-78.8784" },
    address: { street: "50 Delaware Ave", zipCode: "14202" }
  }
};