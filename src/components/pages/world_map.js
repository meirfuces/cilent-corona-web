import React , { useState } from "react";
import MainHeader from '../Layout/cart/mainHeader';
import { WorldMap } from "react-svg-worldmap";
const createVal = (countryName)=>{
const list = [
  {code: 'AF', names: ['Afghanistan']},
  {code: 'AX', names: ['Åland Islands']},
  {code: 'AL', names: ['Albania']},
  {code: 'DZ', names: ['Algeria']},
  {code: 'AS', names: ['American Samoa']},
  {code: 'AD', names: ['Andorra']},
  {code: 'AO', names: ['Angola']},
  {code: 'AI', names: ['Anguilla']},
  {code: 'AQ', names: ['Antarctica']},
  {code: 'AG', names: ['Antigua and Barbuda']},
  {code: 'AR', names: ['Argentina']},
  {code: 'AM', names: ['Armenia']},
  {code: 'AW', names: ['Aruba']},
  {code: 'AU', names: ['Australia']},
  {code: 'AT', names: ['Austria']},
  {code: 'AZ', names: ['Azerbaijan']},
  {code: 'BS', names: ['Bahamas']},
  {code: 'BH', names: ['Bahrain']},
  {code: 'BD', names: ['Bangladesh']},
  {code: 'BB', names: ['Barbados']},
  {code: 'BY', names: ['Belarus']},
  {code: 'BE', names: ['Belgium']},
  {code: 'BZ', names: ['Belize']},
  {code: 'BJ', names: ['Benin']},
  {code: 'BM', names: ['Bermuda']},
  {code: 'BT', names: ['Bhutan']},
  {code: 'BO', names: ['Bolivia', 'Bolivia (Plurinational State of)', 'Plurinational State of Bolivia']},
  {code: 'BQ', names: ['Bonaire, Sint Eustatius and Saba']},
  {code: 'BA', names: ['Bosnia and Herzegovina']},
  {code: 'BW', names: ['Botswana']},
  {code: 'BV', names: ['Bouvet Island']},
  {code: 'BR', names: ['Brazil']},
  {code: 'IO', names: ['British Indian Ocean Territory']},
  {code: 'BN', names: ['Brunei', 'Nation of Brunei, the Abode of Peace', 'Brunei Darussalam']},
  {code: 'BG', names: ['Bulgaria']},
  {code: 'BF', names: ['Burkina Faso']},
  {code: 'BI', names: ['Burundi']},
  {code: 'CV', names: ['Cabo Verde', 'Cape Verde', 'Republic of Cabo Verde']},
  {code: 'KH', names: ['Cambodia']},
  {code: 'CM', names: ['Cameroon']},
  {code: 'CA', names: ['Canada']},
  {code: 'KY', names: ['Cayman Islands']},
  {code: 'CF', names: ['Central African Republic']},
  {code: 'TD', names: ['Chad']},
  {code: 'CL', names: ['Chile']},
  {code: 'CN', names: ['China', 'PRC', 'People\'s Republic of China']},
  {code: 'CX', names: ['Christmas Island']},
  {code: 'CC', names: ['Cocos (Keeling) Islands']},
  {code: 'CO', names: ['Colombia']},
  {code: 'KM', names: ['Comoros']},
  {code: 'CG', names: ['Congo', 'Republic of the Congo']},
  {code: 'CD', names: ['Congo (Democratic Republic of the)', 'DRC', 'Congo-Kinshasa', 'DR Congo', 'the DROC', 'the Congo', 'Democratic Republic of the Congo']},
  {code: 'CK', names: ['Cook Islands']},
  {code: 'CR', names: ['Costa Rica']},
  {code: 'CI', names: ['Côte d\'Ivoire', 'Ivory Coast', 'Republic of Côte d\'Ivoire']},
  {code: 'HR', names: ['Croatia']},
  {code: 'CU', names: ['Cuba']},
  {code: 'CW', names: ['Curaçao']},
  {code: 'CY', names: ['Cyprus']},
  {code: 'CZ', names: ['Czech Republic']},
  {code: 'DK', names: ['Denmark']},
  {code: 'DJ', names: ['Djibouti']},
  {code: 'DM', names: ['Dominica']},
  {code: 'DO', names: ['Dominican Republic']},
  {code: 'EC', names: ['Ecuador']},
  {code: 'EG', names: ['Egypt']},
  {code: 'SV', names: ['El Salvador']},
  {code: 'GQ', names: ['Equatorial Guinea']},
  {code: 'ER', names: ['Eritrea']},
  {code: 'EE', names: ['Estonia']},
  {code: 'ET', names: ['Ethiopia']},
  {code: 'FK', names: ['Falkland Islands (Malvinas)']},
  {code: 'FO', names: ['Faroe Islands']},
  {code: 'FJ', names: ['Fiji', 'Fiji (Republic of)', 'Republic of Fiji']},
  {code: 'FI', names: ['Finland']},
  {code: 'FR', names: ['France']},
  {code: 'GF', names: ['French Guiana']},
  {code: 'PF', names: ['French Polynesia']},
  {code: 'TF', names: ['French Southern Territories']},
  {code: 'GA', names: ['Gabon']},
  {code: 'GM', names: ['Gambia']},
  {code: 'GE', names: ['Georgia']},
  {code: 'DE', names: ['Germany']},
  {code: 'GH', names: ['Ghana']},
  {code: 'GI', names: ['Gibraltar']},
  {code: 'GR', names: ['Greece']},
  {code: 'GL', names: ['Greenland']},
  {code: 'GD', names: ['Grenada']},
  {code: 'GP', names: ['Guadeloupe']},
  {code: 'GU', names: ['Guam']},
  {code: 'GT', names: ['Guatemala']},
  {code: 'GG', names: ['Guernsey']},
  {code: 'GN', names: ['Guinea']},
  {code: 'GW', names: ['Guinea-Bissau']},
  {code: 'GY', names: ['Guyana']},
  {code: 'HT', names: ['Haiti']},
  {code: 'HM', names: ['Heard Island and McDonald Islands']},
  {code: 'VA', names: ['The Vatican', 'Vatican City', 'Vatican City State', 'Holy See']},
  {code: 'HN', names: ['Honduras']},
  {code: 'HK', names: ['Hong Kong']},
  {code: 'HU', names: ['Hungary']},
  {code: 'IS', names: ['Iceland']},
  {code: 'IN', names: ['India']},
  {code: 'ID', names: ['Indonesia']},
  {code: 'IR', names: ['Iran', 'Iran (Islamic Republic of)']},
  {code: 'IQ', names: ['Iraq']},
  {code: 'IE', names: ['Ireland']},
  {code: 'IM', names: ['Isle of Man']},
  {code: 'IL', names: ['Israel']},
  {code: 'IT', names: ['Italy']},
  {code: 'JM', names: ['Jamaica']},
  {code: 'JP', names: ['Japan']},
  {code: 'JE', names: ['Jersey']},
  {code: 'JO', names: ['Jordan']},
  {code: 'KZ', names: ['Kazakhstan']},
  {code: 'KE', names: ['Kenya']},
  {code: 'KI', names: ['Kiribati']},
  {code: 'KP', names: ['North Korea', 'DPRK', 'DPR Korea', 'Korea (Democratic People\'s Republic of)', 'Democratic People\'s Republic of Korea']},
  {code: 'KR', names: ['South Korea', 'ROK', 'Korea (Republic of)', 'Republic of Korea']},
  {code: 'KW', names: ['Kuwait']},
  {code: 'KG', names: ['Kyrgyzstan']},
  {code: 'LA', names: ['Laos', 'Lao People\'s Democratic Republic']},
  {code: 'LV', names: ['Latvia']},
  {code: 'LB', names: ['Lebanon']},
  {code: 'LS', names: ['Lesotho']},
  {code: 'LR', names: ['Liberia']},
  {code: 'LY', names: ['Libya']},
  {code: 'LI', names: ['Liechtenstein']},
  {code: 'LT', names: ['Lithuania']},
  {code: 'LU', names: ['Luxembourg']},
  {code: 'MO', names: ['Macao']},
  {code: 'MK', names: ['Macedonia', 'Macedonia (the former Yugoslav Republic of)', 'North Macedonia', 'Republic of North Macedonia']},
  {code: 'MG', names: ['Madagascar']},
  {code: 'MW', names: ['Malawi']},
  {code: 'MY', names: ['Malaysia']},
  {code: 'MV', names: ['Maldives']},
  {code: 'ML', names: ['Mali']},
  {code: 'MT', names: ['Malta']},
  {code: 'MH', names: ['Marshall Islands']},
  {code: 'MQ', names: ['Martinique']},
  {code: 'MR', names: ['Mauritania']},
  {code: 'MU', names: ['Mauritius']},
  {code: 'YT', names: ['Mayotte']},
  {code: 'MX', names: ['Mexico']},
  {code: 'FM', names: ['Micronesia', 'FSM', 'Micronesia (Federated States of)', 'Federated States of Micronesia']},
  {code: 'MD', names: ['Moldova', 'Moldova (Republic of)', 'Republic of Moldova']},
  {code: 'MC', names: ['Monaco']},
  {code: 'MN', names: ['Mongolia']},
  {code: 'ME', names: ['Montenegro']},
  {code: 'MS', names: ['Montserrat']},
  {code: 'MA', names: ['Morocco']},
  {code: 'MZ', names: ['Mozambique']},
  {code: 'MM', names: ['Myanmar']},
  {code: 'NA', names: ['Namibia']},
  {code: 'NR', names: ['Nauru']},
  {code: 'NP', names: ['Nepal']},
  {code: 'NL', names: ['Netherlands']},
  {code: 'NC', names: ['New Caledonia']},
  {code: 'NZ', names: ['New Zealand']},
  {code: 'NI', names: ['Nicaragua']},
  {code: 'NE', names: ['Niger']},
  {code: 'NG', names: ['Nigeria']},
  {code: 'NU', names: ['Niue']},
  {code: 'NF', names: ['Norfolk Island']},
  {code: 'MP', names: ['Northern Mariana Islands']},
  {code: 'NO', names: ['Norway']},
  {code: 'OM', names: ['Oman']},
  {code: 'PK', names: ['Pakistan']},
  {code: 'PW', names: ['Palau']},
  {code: 'PS', names: ['Palestine', 'Palestine, State of', 'State of Palestine']},
  {code: 'PA', names: ['Panama']},
  {code: 'PG', names: ['Papua New Guinea']},
  {code: 'PY', names: ['Paraguay']},
  {code: 'PE', names: ['Peru']},
  {code: 'PH', names: ['Philippines']},
  {code: 'PN', names: ['Pitcairn']},
  {code: 'PL', names: ['Poland']},
  {code: 'PT', names: ['Portugal']},
  {code: 'PR', names: ['Puerto Rico']},
  {code: 'QA', names: ['Qatar']},
  {code: 'RE', names: ['Réunion']},
  {code: 'RO', names: ['Romania']},
  {code: 'RU', names: ['Russia', 'Russian Federation']},
  {code: 'RW', names: ['Rwanda']},
  {code: 'BL', names: ['Saint Barthélemy']},
  {code: 'SH', names: ['Saint Helena, Ascension and Tristan da Cunha']},
  {code: 'KN', names: ['Saint Kitts and Nevis']},
  {code: 'LC', names: ['Saint Lucia']},
  {code: 'MF', names: ['Saint Martin (French part)']},
  {code: 'PM', names: ['Saint Pierre and Miquelon']},
  {code: 'VC', names: ['Saint Vincent and the Grenadines']},
  {code: 'WS', names: ['Samoa']},
  {code: 'SM', names: ['San Marino']},
  {code: 'ST', names: ['Sao Tome and Principe', 'Saint Thomas and Prince', 'São Tomé and Príncipe', 'Democratic Republic of São Tomé and Príncipe']},
  {code: 'SA', names: ['Saudi Arabia']},
  {code: 'SN', names: ['Senegal']},
  {code: 'RS', names: ['Serbia']},
  {code: 'SC', names: ['Seychelles']},
  {code: 'SL', names: ['Sierra Leone']},
  {code: 'SG', names: ['Singapore']},
  {code: 'SX', names: ['Sint Maarten (Dutch part)']},
  {code: 'SK', names: ['Slovakia']},
  {code: 'SI', names: ['Slovenia']},
  {code: 'SB', names: ['Solomon Islands']},
  {code: 'SO', names: ['Somalia']},
  {code: 'ZA', names: ['South Africa']},
  {code: 'GS', names: ['South Georgia and the South Sandwich Islands']},
  {code: 'SS', names: ['South Sudan']},
  {code: 'ES', names: ['Spain']},
  {code: 'LK', names: ['Sri Lanka']},
  {code: 'SD', names: ['Sudan']},
  {code: 'SR', names: ['Suriname']},
  {code: 'SJ', names: ['Svalbard and Jan Mayen']},
  {code: 'SZ', names: ['Swaziland']},
  {code: 'SE', names: ['Sweden']},
  {code: 'CH', names: ['Switzerland']},
  {code: 'SY', names: ['Syria', 'Syrian Arab Republic']},
  {code: 'TW', names: ['Taiwan', 'Taiwan, Province of China', 'Republic of China (Taiwan)']},
  {code: 'TJ', names: ['Tajikistan']},
  {code: 'TZ', names: ['Tanzania', 'Tanzania, United Republic of', 'United Republic of Tanzania']},
  {code: 'TH', names: ['Thailand']},
  {code: 'TL', names: ['Timor-Leste']},
  {code: 'TG', names: ['Togo']},
  {code: 'TK', names: ['Tokelau']},
  {code: 'TO', names: ['Tonga']},
  {code: 'TT', names: ['Trinidad and Tobago']},
  {code: 'TN', names: ['Tunisia']},
  {code: 'TR', names: ['Turkey']},
  {code: 'TM', names: ['Turkmenistan']},
  {code: 'TC', names: ['Turks and Caicos Islands']},
  {code: 'TV', names: ['Tuvalu']},
  {code: 'UG', names: ['Uganda']},
  {code: 'UA', names: ['Ukraine']},
  {code: 'AE', names: ['United Arab Emirates']},
  {code: 'GB', names: ['United Kingdom', 'UK', 'U.K.', 'United Kingdom of Great Britain and Northern Ireland']},
  {code: 'US', names: ['United States', 'US', 'U.S.', 'USA', 'America', 'United States of America']},
  {code: 'UM', names: ['United States Minor Outlying Islands']},
  {code: 'UY', names: ['Uruguay']},
  {code: 'UZ', names: ['Uzbekistan']},
  {code: 'VU', names: ['Vanuatu']},
  {code: 'VE', names: ['Venezuela', 'Venezuela (Bolivarian Republic of)']},
  {code: 'VN', names: ['Vietnam']},
  {code: 'VG', names: ['Virgin Islands (British)']},
  {code: 'VI', names: ['Virgin Islands (U.S.)']},
  {code: 'WF', names: ['Wallis and Futuna']},
  {code: 'EH', names: ['Western Sahara']},
  {code: 'YE', names: ['Yemen']},
  {code: 'ZM', names: ['Zambia']},
  {code: 'ZW', names: ['Zimbabwe']}
];
for (var i = 0; i < list.length; ++i) {
  // console.log(list[i].names);
  // console.log(countryName);
  if (list[i].names[0]===countryName)
  return list[i].code.toLowerCase();
}


}
const convertMap =(countryName)=>{
  // for (var i = 0; i < list.length; ++i) {
  //   if (list[i].names.equal(countryName))
  //   return list[i].code;
  // }
}
const createMapWorld = async (allData)=>{
  // if (allData.length==0) return;
  var arr = [];
  allData.map(data=>{
   
    const ObjectW = { country: createVal(data.location), value: data.new_cases }
    arr.push({ country: createVal(data.location), value: data.new_cases })
   
  })
console.log(arr);
return arr
}
const data =
[
  { country: "AIA", value: 800 }, // china
  { country: "in", value: 131 }, // india
  { country: "us", value: 331 },  // united states
  { country: "id", value: 264 },  // indonesia
  { country: "pk", value: 350},  // pakistan
  { country: "br", value: 210 },  // brazil
  { country: "ng", value: 208 },  // nigeria
  { country: "bd", value: 15 },  // bangladesh
  { country: "ru", value: 141 },  // russia
  { country: "mx", value: 12 },   // mexico
  {country: "il", value:1500}, //israel
  {country: "gy", value:1500}, //Guyana
  {country: "gh", value:1500}, //Ghana
  {country: "CL", value:1500}, //CHILE
  {country: "et", value:1500} //etupia

]
  const World_map = (props) => {
    const mapData =createMapWorld(props.allData);
    const dataFake = data.slice(0,50);
    console.log(mapData);
    console.log(dataFake);
const stylingFunction = (context ) => {
  const opacityLevel = 0.1 + (1.5 * (context.countryValue - context.minValue) / (context.maxValue - context.minValue))
  return {
      fill: context.color, 
      fillOpacity: opacityLevel, 
      stroke: "green", 
      strokeWidth: 1, 
      strokeOpacity: 0.2, 
      cursor: "pointer" 
         }
}
  

    return (
        <React.Fragment>
        <MainHeader />
        <div  >
       <WorldMap styleFunction= {stylingFunction} color="red" title="corona death" value-suffix="people" size="xl" data={dataFake} />
       {/* <a href= "https://reactjsexample.com/a-simple-compact-and-free-react-svg-world-map/"><h3 > https://reactjsexample.com/a-simple-compact-and-free-react-svg-world-map/</h3></a> */}
    </div>
    {/* <h2>https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2</h2> */}
{/* <h1>World_map corona</h1>
<a href= "https://www.react-simple-maps.io"><h3 > https://www.react-simple-maps.io/</h3></a>
<hr></hr>

    */}
    {/* <button onClick ={this.createMapWorld}>click</button> */}
      </React.Fragment>
    );
  };
  
  export default World_map;
  

