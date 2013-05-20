
# country-codes

List of **257** countries with their respective ISO2 country code and telephone calling codes.

For a sprite of the flag icons in PNG format, reference to "flags.less" and "flags.png" in the root folder of this repo.

For individual flag icons adhering to ISO 3166-1 alpha-2 country codes, see the "icons" folder of this repo.

Much love to [FAMFAMFAM](http://www.famfamfam.com/lab/icons/flags/) for these awesome icons.

This module was made by the folks at [Prove](https://getprove.com) and using <https://github.com/LinkToBooks/country-data/>.

Feel free to contribute and send a pull request.


## Index

* [Example Usage](#example-usage)
* [Contributors](#contributors)
* [License](#license)


## Example Usage

```bash
npm install country-codes
```

Input:

```js
var countryCodes = require('countryCodes')
console.log(countryCodes)
```

Output:

```json
{ AC: { codes: [ '+247' ], iso: 'AC', name: 'Ascension Island' },
  AD: { codes: [ '+376' ], iso: 'AD', name: 'Andorra' },
  AE: { codes: [ '+971' ], iso: 'AE', name: 'United Arab Emirates' },
  AF: { codes: [ '+93' ], iso: 'AF', name: 'Afghanistan' },
  AG: { codes: [ '+1 268' ], iso: 'AG', name: 'Antigua And Barbuda' },
  AI: { codes: [ '+1 264' ], iso: 'AI', name: 'Anguilla' },
  AL: { codes: [ '+355' ], iso: 'AL', name: 'Albania' },
  AM: { codes: [ '+374' ], iso: 'AM', name: 'Armenia' },
  AO: { codes: [ '+244' ], iso: 'AO', name: 'Angola' },
  AQ: { codes: [ '+672' ], iso: 'AQ', name: 'Antarctica' },
  AR: { codes: [ '+54' ], iso: 'AR', name: 'Argentina' },
  AS: { codes: [ '+1 684' ], iso: 'AS', name: 'American Samoa' },
  AT: { codes: [ '+43' ], iso: 'AT', name: 'Austria' },
  AU: { codes: [ '+61' ], iso: 'AU', name: 'Australia' },
  AW: { codes: [ '+297' ], iso: 'AW', name: 'Aruba' },
  AZ: { codes: [ '+994' ], iso: 'AZ', name: 'Azerbaijan' },
  BA: { codes: [ '+387' ], iso: 'BA', name: 'Bosnia & Herzegovina' },
  BB: { codes: [ '+1 246' ], iso: 'BB', name: 'Barbados' },
  BD: { codes: [ '+880' ], iso: 'BD', name: 'Bangladesh' },
  BE: { codes: [ '+32' ], iso: 'BE', name: 'Belgium' },
  BF: { codes: [ '+226' ], iso: 'BF', name: 'Burkina Faso' },
  BG: { codes: [ '+359' ], iso: 'BG', name: 'Bulgaria' },
  BH: { codes: [ '+973' ], iso: 'BH', name: 'Bahrain' },
  BI: { codes: [ '+257' ], iso: 'BI', name: 'Burundi' },
  BJ: { codes: [ '+229' ], iso: 'BJ', name: 'Benin' },
  BL: { codes: [ '+590' ], iso: 'BL', name: 'Saint Barthélemy' },
  BM: { codes: [ '+1 441' ], iso: 'BM', name: 'Bermuda' },
  BN: { codes: [ '+673' ], iso: 'BN', name: 'Brunei Darussalam' },
  BO:
   { codes: [ '+591' ],
     iso: 'BO',
     name: 'Bolivia, Plurinational State Of' },
  BQ:
   { codes: [ '+599' ],
     iso: 'BQ',
     name: 'Bonaire, Saint Eustatius And Saba' },
  BR: { codes: [ '+55' ], iso: 'BR', name: 'Brazil' },
  BS: { codes: [ '+1 242' ], iso: 'BS', name: 'Bahamas' },
  BT: { codes: [ '+975' ], iso: 'BT', name: 'Bhutan' },
  BV: { codes: [], iso: 'BV', name: 'Bouvet Island' },
  BW: { codes: [ '+267' ], iso: 'BW', name: 'Botswana' },
  BY: { codes: [ '+375' ], iso: 'BY', name: 'Belarus' },
  BZ: { codes: [ '+501' ], iso: 'BZ', name: 'Belize' },
  CA: { codes: [ '+1' ], iso: 'CA', name: 'Canada' },
  CC: { codes: [ '+61' ], iso: 'CC', name: 'Cocos (Keeling) Islands' },
  CD:
   { codes: [ '+243' ],
     iso: 'CD',
     name: 'Democratic Republic Of Congo' },
  CF:
   { codes: [ '+236' ],
     iso: 'CF',
     name: 'Central African Republic' },
  CG: { codes: [ '+242' ], iso: 'CG', name: 'Republic Of Congo' },
  CH: { codes: [ '+41' ], iso: 'CH', name: 'Switzerland' },
  CI: { codes: [ '+225' ], iso: 'CI', name: 'Cote d\'Ivoire' },
  CK: { codes: [ '+682' ], iso: 'CK', name: 'Cook Islands' },
  CL: { codes: [ '+56' ], iso: 'CL', name: 'Chile' },
  CM: { codes: [ '+237' ], iso: 'CM', name: 'Cameroon' },
  CN: { codes: [ '+86' ], iso: 'CN', name: 'China' },
  CO: { codes: [ '+57' ], iso: 'CO', name: 'Colombia' },
  CP: { codes: [], iso: 'CP', name: 'Clipperton Island' },
  CR: { codes: [ '+506' ], iso: 'CR', name: 'Costa Rica' },
  CU: { codes: [ '+53' ], iso: 'CU', name: 'Cuba' },
  CV: { codes: [ '+238' ], iso: 'CV', name: 'Cape Verde' },
  CW: { codes: [ '+599' ], iso: 'CW', name: 'Curacao' },
  CX: { codes: [ '+61' ], iso: 'CX', name: 'Christmas Island' },
  CY: { codes: [ '+357' ], iso: 'CY', name: 'Cyprus' },
  CZ: { codes: [ '+420' ], iso: 'CZ', name: 'Czech Republic' },
  DE: { codes: [ '+49' ], iso: 'DE', name: 'Germany' },
  DG: { codes: [], iso: 'DG', name: 'Diego Garcia' },
  DJ: { codes: [ '+253' ], iso: 'DJ', name: 'Djibouti' },
  DK: { codes: [ '+45' ], iso: 'DK', name: 'Denmark' },
  DM: { codes: [ '+1 767' ], iso: 'DM', name: 'Dominica' },
  DO:
   { codes: [ '+1 809', '+1 829', '+1 849' ],
     iso: 'DO',
     name: 'Dominican Republic' },
  DZ: { codes: [ '+213' ], iso: 'DZ', name: 'Algeria' },
  EA: { codes: [], iso: 'EA', name: 'Ceuta, Mulilla' },
  EC: { codes: [ '+593' ], iso: 'EC', name: 'Ecuador' },
  EE: { codes: [ '+372' ], iso: 'EE', name: 'Estonia' },
  EG: { codes: [ '+20' ], iso: 'EG', name: 'Egypt' },
  EH: { codes: [ '+212' ], iso: 'EH', name: 'Western Sahara' },
  ER: { codes: [ '+291' ], iso: 'ER', name: 'Eritrea' },
  ES: { codes: [ '+34' ], iso: 'ES', name: 'Spain' },
  ET: { codes: [ '+251' ], iso: 'ET', name: 'Ethiopia' },
  EU: { codes: [ '+388' ], iso: 'EU', name: 'European Union' },
  FI: { codes: [ '+358' ], iso: 'FI', name: 'Finland' },
  FJ: { codes: [ '+679' ], iso: 'FJ', name: 'Fiji' },
  FK: { codes: [ '+500' ], iso: 'FK', name: 'Falkland Islands' },
  FM:
   { codes: [ '+691' ],
     iso: 'FM',
     name: 'Micronesia, Federated States Of' },
  FO: { codes: [ '+298' ], iso: 'FO', name: 'Faroe Islands' },
  FR: { codes: [ '+33' ], iso: 'FR', name: 'France' },
  FX: { codes: [ '+241' ], iso: 'FX', name: 'France, Metropolitan' },
  GA: { codes: [ '+44' ], iso: 'GA', name: 'Gabon' },
  GB: { codes: [ '+1 473' ], iso: 'GB', name: 'United Kingdom' },
  GD: { codes: [ '+995' ], iso: 'GD', name: 'Grenada' },
  GE: { codes: [ '+594' ], iso: 'GE', name: 'Georgia' },
  GF: { codes: [ '+44' ], iso: 'GF', name: 'French Guiana' },
  GG: { codes: [], iso: 'GG', name: 'Guernsey' },
  GH: { codes: [ '+233' ], iso: 'GH', name: 'Ghana' },
  GI: { codes: [ '+350' ], iso: 'GI', name: 'Gibraltar' },
  GL: { codes: [ '+299' ], iso: 'GL', name: 'Greenland' },
  GM: { codes: [ '+220' ], iso: 'GM', name: 'Gambia' },
  GN: { codes: [ '+224' ], iso: 'GN', name: 'Guinea' },
  GP: { codes: [ '+590' ], iso: 'GP', name: 'Guadeloupe' },
  GQ: { codes: [ '+240' ], iso: 'GQ', name: 'Equatorial Guinea' },
  GR: { codes: [ '+30' ], iso: 'GR', name: 'Greece' },
  GS:
   { codes: [],
     iso: 'GS',
     name: 'South Georgia And The South Sandwich Islands' },
  GT: { codes: [ '+502' ], iso: 'GT', name: 'Guatemala' },
  GU: { codes: [ '+1 671' ], iso: 'GU', name: 'Guam' },
  GW: { codes: [ '+245' ], iso: 'GW', name: 'Guinea-bissau' },
  GY: { codes: [ '+592' ], iso: 'GY', name: 'Guyana' },
  HK: { codes: [ '+852' ], iso: 'HK', name: 'Hong Kong' },
  HM:
   { codes: [],
     iso: 'HM',
     name: 'Heard Island And McDonald Islands' },
  HN: { codes: [ '+504' ], iso: 'HN', name: 'Honduras' },
  HR: { codes: [ '+385' ], iso: 'HR', name: 'Croatia' },
  HT: { codes: [ '+509' ], iso: 'HT', name: 'Haiti' },
  HU: { codes: [ '+36' ], iso: 'HU', name: 'Hungary' },
  IC: { codes: [], iso: 'IC', name: 'Canary Islands' },
  ID: { codes: [ '+62' ], iso: 'ID', name: 'Indonesia' },
  IE: { codes: [ '+353' ], iso: 'IE', name: 'Ireland' },
  IL: { codes: [ '+972' ], iso: 'IL', name: 'Israel' },
  IM: { codes: [ '+44' ], iso: 'IM', name: 'Isle Of Man' },
  IN: { codes: [ '+91' ], iso: 'IN', name: 'India' },
  IO:
   { codes: [ '+246' ],
     iso: 'IO',
     name: 'British Indian Ocean Territory' },
  IQ: { codes: [ '+964' ], iso: 'IQ', name: 'Iraq' },
  IR:
   { codes: [ '+98' ],
     iso: 'IR',
     name: 'Iran, Islamic Republic Of' },
  IS: { codes: [ '+354' ], iso: 'IS', name: 'Iceland' },
  IT: { codes: [ '+39' ], iso: 'IT', name: 'Italy' },
  JE: { codes: [ '+44' ], iso: 'JE', name: 'Jersey' },
  JM: { codes: [ '+1 876' ], iso: 'JM', name: 'Jamaica' },
  JO: { codes: [ '+962' ], iso: 'JO', name: 'Jordan' },
  JP: { codes: [ '+81' ], iso: 'JP', name: 'Japan' },
  KE: { codes: [ '+254' ], iso: 'KE', name: 'Kenya' },
  KG: { codes: [ '+996' ], iso: 'KG', name: 'Kyrgyzstan' },
  KH: { codes: [ '+855' ], iso: 'KH', name: 'Cambodia' },
  KI: { codes: [ '+686' ], iso: 'KI', name: 'Kiribati' },
  KM: { codes: [ '+269' ], iso: 'KM', name: 'Comoros' },
  KN: { codes: [ '+1 869' ], iso: 'KN', name: 'Saint Kitts And Nevis' },
  KP:
   { codes: [ '+850' ],
     iso: 'KP',
     name: 'Korea, Democratic People\'s Republic Of' },
  KR: { codes: [ '+82' ], iso: 'KR', name: 'Korea, Republic Of' },
  KW: { codes: [ '+965' ], iso: 'KW', name: 'Kuwait' },
  KY: { codes: [ '+1 345' ], iso: 'KY', name: 'Cayman Islands' },
  KZ:
   { codes: [ '+7', '+7 6', '+7 7' ],
     iso: 'KZ',
     name: 'Kazakhstan' },
  LA:
   { codes: [ '+856' ],
     iso: 'LA',
     name: 'Lao People\'s Democratic Republic' },
  LB: { codes: [ '+961' ], iso: 'LB', name: 'Lebanon' },
  LC: { codes: [ '+1 758' ], iso: 'LC', name: 'Saint Lucia' },
  LI: { codes: [ '+423' ], iso: 'LI', name: 'Liechtenstein' },
  LK: { codes: [ '+94' ], iso: 'LK', name: 'Sri Lanka' },
  LR: { codes: [ '+231' ], iso: 'LR', name: 'Liberia' },
  LS: { codes: [ '+266' ], iso: 'LS', name: 'Lesotho' },
  LT: { codes: [ '+370' ], iso: 'LT', name: 'Lithuania' },
  LU: { codes: [ '+352' ], iso: 'LU', name: 'Luxembourg' },
  LV: { codes: [ '+371' ], iso: 'LV', name: 'Latvia' },
  LY: { codes: [ '+218' ], iso: 'LY', name: 'Libya' },
  MA: { codes: [ '+212' ], iso: 'MA', name: 'Morocco' },
  MC: { codes: [ '+377' ], iso: 'MC', name: 'Monaco' },
  MD: { codes: [ '+373' ], iso: 'MD', name: 'Moldova' },
  ME: { codes: [ '+382' ], iso: 'ME', name: 'Montenegro' },
  MF: { codes: [ '+590' ], iso: 'MF', name: 'Saint Martin' },
  MG: { codes: [ '+261' ], iso: 'MG', name: 'Madagascar' },
  MH: { codes: [ '+692' ], iso: 'MH', name: 'Marshall Islands' },
  MK:
   { codes: [ '+389' ],
     iso: 'MK',
     name: 'Macedonia, The Former Yugoslav Republic Of' },
  ML: { codes: [ '+223' ], iso: 'ML', name: 'Mali' },
  MM: { codes: [ '+95' ], iso: 'MM', name: 'Myanmar' },
  MN: { codes: [ '+976' ], iso: 'MN', name: 'Mongolia' },
  MO: { codes: [ '+853' ], iso: 'MO', name: 'Macao' },
  MP:
   { codes: [ '+1 670' ],
     iso: 'MP',
     name: 'Northern Mariana Islands' },
  MQ: { codes: [ '+596' ], iso: 'MQ', name: 'Martinique' },
  MR: { codes: [ '+222' ], iso: 'MR', name: 'Mauritania' },
  MS: { codes: [ '+1 664' ], iso: 'MS', name: 'Montserrat' },
  MT: { codes: [ '+356' ], iso: 'MT', name: 'Malta' },
  MU: { codes: [ '+230' ], iso: 'MU', name: 'Mauritius' },
  MV: { codes: [ '+960' ], iso: 'MV', name: 'Maldives' },
  MW: { codes: [ '+265' ], iso: 'MW', name: 'Malawi' },
  MX: { codes: [ '+52' ], iso: 'MX', name: 'Mexico' },
  MY: { codes: [ '+60' ], iso: 'MY', name: 'Malaysia' },
  MZ: { codes: [ '+258' ], iso: 'MZ', name: 'Mozambique' },
  NA: { codes: [ '+264' ], iso: 'NA', name: 'Namibia' },
  NC: { codes: [ '+687' ], iso: 'NC', name: 'New Caledonia' },
  NE: { codes: [ '+227' ], iso: 'NE', name: 'Niger' },
  NF: { codes: [ '+672' ], iso: 'NF', name: 'Norfolk Island' },
  NG: { codes: [ '+234' ], iso: 'NG', name: 'Nigeria' },
  NI: { codes: [ '+505' ], iso: 'NI', name: 'Nicaragua' },
  NL: { codes: [ '+31' ], iso: 'NL', name: 'Netherlands' },
  NO: { codes: [ '+47' ], iso: 'NO', name: 'Norway' },
  NP: { codes: [ '+977' ], iso: 'NP', name: 'Nepal' },
  NR: { codes: [ '+674' ], iso: 'NR', name: 'Nauru' },
  NU: { codes: [ '+683' ], iso: 'NU', name: 'Niue' },
  NZ: { codes: [ '+64' ], iso: 'NZ', name: 'New Zealand' },
  OM: { codes: [ '+968' ], iso: 'OM', name: 'Oman' },
  PA: { codes: [ '+507' ], iso: 'PA', name: 'Panama' },
  PE: { codes: [ '+51' ], iso: 'PE', name: 'Peru' },
  PF: { codes: [ '+689' ], iso: 'PF', name: 'French Polynesia' },
  PG: { codes: [ '+675' ], iso: 'PG', name: 'Papua New Guinea' },
  PH: { codes: [ '+63' ], iso: 'PH', name: 'Philippines' },
  PK: { codes: [ '+92' ], iso: 'PK', name: 'Pakistan' },
  PL: { codes: [ '+48' ], iso: 'PL', name: 'Poland' },
  PM:
   { codes: [ '+508' ],
     iso: 'PM',
     name: 'Saint Pierre And Miquelon' },
  PN: { codes: [], iso: 'PN', name: 'Pitcairn' },
  PR: { codes: [ '+1 787', '+1 939' ], iso: 'PR', name: 'Puerto Rico' },
  PS:
   { codes: [ '+970' ],
     iso: 'PS',
     name: 'Palestinian Territory, Occupied' },
  PT: { codes: [ '+351' ], iso: 'PT', name: 'Portugal' },
  PW: { codes: [ '+680' ], iso: 'PW', name: 'Palau' },
  PY: { codes: [ '+595' ], iso: 'PY', name: 'Paraguay' },
  QA: { codes: [ '+974' ], iso: 'QA', name: 'Qatar' },
  RE: { codes: [ '+262' ], iso: 'RE', name: 'Reunion' },
  RO: { codes: [ '+40' ], iso: 'RO', name: 'Romania' },
  RS: { codes: [ '+381' ], iso: 'RS', name: 'Serbia' },
  RU:
   { codes: [ '+7', '+7 3', '+7 4', '+7 8' ],
     iso: 'RU',
     name: 'Russian Federation' },
  RW: { codes: [ '+250' ], iso: 'RW', name: 'Rwanda' },
  SA: { codes: [ '+966' ], iso: 'SA', name: 'Saudi Arabia' },
  SB: { codes: [ '+677' ], iso: 'SB', name: 'Solomon Islands' },
  SC: { codes: [ '+248' ], iso: 'SC', name: 'Seychelles' },
  SD: { codes: [ '+249' ], iso: 'SD', name: 'Sudan' },
  SE: { codes: [ '+46' ], iso: 'SE', name: 'Sweden' },
  SG: { codes: [ '+65' ], iso: 'SG', name: 'Singapore' },
  SH:
   { codes: [ '+290' ],
     iso: 'SH',
     name: 'Saint Helena, Ascension And Tristan Da Cunha' },
  SI: { codes: [ '+386' ], iso: 'SI', name: 'Slovenia' },
  SJ: { codes: [ '+47' ], iso: 'SJ', name: 'Svalbard And Jan Mayen' },
  SK: { codes: [ '+421' ], iso: 'SK', name: 'Slovakia' },
  SL: { codes: [ '+232' ], iso: 'SL', name: 'Sierra Leone' },
  SM: { codes: [ '+378' ], iso: 'SM', name: 'San Marino' },
  SN: { codes: [ '+221' ], iso: 'SN', name: 'Senegal' },
  SO: { codes: [ '+252' ], iso: 'SO', name: 'Somalia' },
  SR: { codes: [ '+597' ], iso: 'SR', name: 'Suriname' },
  ST: { codes: [ '+239' ], iso: 'ST', name: 'Sao Tome And Principe' },
  SU: { codes: [], iso: 'SU', name: 'USSR' },
  SV: { codes: [ '+503' ], iso: 'SV', name: 'El Salvador' },
  SX: { codes: [ '+1 721' ], iso: 'SX', name: 'Sint Maarten' },
  SY: { codes: [ '+963' ], iso: 'SY', name: 'Syrian Arab Republic' },
  SZ: { codes: [ '+268' ], iso: 'SZ', name: 'Swaziland' },
  TA: { codes: [ '+290' ], iso: 'TA', name: 'Tristan de Cunha' },
  TC:
   { codes: [ '+1 649' ],
     iso: 'TC',
     name: 'Turks And Caicos Islands' },
  TD: { codes: [ '+235' ], iso: 'TD', name: 'Chad' },
  TF: { codes: [], iso: 'TF', name: 'French Southern Territories' },
  TG: { codes: [ '+228' ], iso: 'TG', name: 'Togo' },
  TH: { codes: [ '+66' ], iso: 'TH', name: 'Thailand' },
  TJ: { codes: [ '+992' ], iso: 'TJ', name: 'Tajikistan' },
  TK: { codes: [ '+690' ], iso: 'TK', name: 'Tokelau' },
  TL: { codes: [ '+670' ], iso: 'TL', name: 'East Timor' },
  TM: { codes: [ '+993' ], iso: 'TM', name: 'Turkmenistan' },
  TN: { codes: [ '+216' ], iso: 'TN', name: 'Tunisia' },
  TO: { codes: [ '+676' ], iso: 'TO', name: 'Tonga' },
  TR: { codes: [ '+90' ], iso: 'TR', name: 'Turkey' },
  TT: { codes: [ '+1 868' ], iso: 'TT', name: 'Trinidad And Tobago' },
  TV: { codes: [ '+688' ], iso: 'TV', name: 'Tuvalu' },
  TW:
   { codes: [ '+886' ],
     iso: 'TW',
     name: 'Taiwan, Province Of China' },
  TZ:
   { codes: [ '+255' ],
     iso: 'TZ',
     name: 'Tanzania, United Republic Of' },
  UA: { codes: [ '+380' ], iso: 'UA', name: 'Ukraine' },
  UG: { codes: [ '+256' ], iso: 'UG', name: 'Uganda' },
  UK: { codes: [], iso: 'UK', name: 'United Kingdom' },
  UM:
   { codes: [],
     iso: 'UM',
     name: 'United States Minor Outlying Islands' },
  US: { codes: [ '+1' ], iso: 'US', name: 'United States' },
  UY: { codes: [ '+598' ], iso: 'UY', name: 'Uruguay' },
  UZ: { codes: [ '+998' ], iso: 'UZ', name: 'Uzbekistan' },
  VA:
   { codes: [ '+379', '+39' ],
     iso: 'VA',
     name: 'Vatican City State' },
  VC:
   { codes: [ '+1 784' ],
     iso: 'VC',
     name: 'Saint Vincent And The Grenadines' },
  VE:
   { codes: [ '+58' ],
     iso: 'VE',
     name: 'Venezuela, Bolivarian Republic Of' },
  VG:
   { codes: [ '+1 284' ],
     iso: 'VG',
     name: 'Virgin Islands (British)' },
  VI: { codes: [ '+1 340' ], iso: 'VI', name: 'Virgin Islands (US)' },
  VN: { codes: [ '+84' ], iso: 'VN', name: 'Viet Nam' },
  VU: { codes: [ '+678' ], iso: 'VU', name: 'Vanuatu' },
  WF: { codes: [ '+681' ], iso: 'WF', name: 'Wallis And Futuna' },
  WS: { codes: [ '+685' ], iso: 'WS', name: 'Samoa' },
  YE: { codes: [ '+967' ], iso: 'YE', name: 'Yemen' },
  YT: { codes: [ '+262' ], iso: 'YT', name: 'Mayotte' },
  ZA: { codes: [ '+27' ], iso: 'ZA', name: 'South Africa' },
  ZM: { codes: [ '+260' ], iso: 'ZM', name: 'Zambia' },
  ZW: { codes: [ '+263' ], iso: 'ZW', name: 'Zimbabwe' } }
```

## Contributors

* Nick Baugh <niftylettuce@gmail.com> (http://niftylettuce.com)


## License

The MIT License

Copyright (c) 2013- Prove <support@getprove.com> (https://getprove.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

