
# country-codes

List of countries with their respective ISO country code and telephone calling code.

For a sprite of the flag icons in PNG format, reference to "flags.less" and "flags.png" in the root folder of this repo.

For individual flag icons adhering to ISO 3166-1 alpha-2 country codes, see the "icons" folder of this repo.

Much love to [FAMFAMFAM](http://www.famfamfam.com/lab/icons/flags/) and <mjames@gmail.com> for these awesome icons.


## Index

* Example Usage
* Contributors
* License


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
{ AF: { name: 'Afghanistan', code: '93', iso3: 'AFG', iso2: 'AF' },
  AL: { name: 'Albania', code: '355', iso3: 'ALB', iso2: 'AL' },
  DZ: { name: 'Algeria', code: '213', iso3: 'DZA', iso2: 'DZ' },
  AS: { name: 'American Samoa', code: '1684', iso3: 'ASM', iso2: 'AS' },
  AD: { name: 'Andorra', code: '376', iso3: 'AND', iso2: 'AD' },
  AO: { name: 'Angola', code: '244', iso3: 'AGO', iso2: 'AO' },
  AI: { name: 'Anguilla', code: '1264', iso3: 'AIA', iso2: 'AI' },
  AR: { name: 'Argentina', code: '54', iso3: 'ARG', iso2: 'AR' },
  AM: { name: 'Armenia', code: '374', iso3: 'ARM', iso2: 'AM' },
  AW: { name: 'Aruba', code: '297', iso3: 'ABW', iso2: 'AW' },
  AU: { name: 'Australia', code: '61', iso3: 'AUS', iso2: 'AU' },
  AT: { name: 'Austria', code: '43', iso3: 'AUT', iso2: 'AT' },
  AZ: { name: 'Azerbaijan', code: '994', iso3: 'AZE', iso2: 'AZ' },
  BS: { name: 'Bahamas', code: '1242', iso3: 'BHS', iso2: 'BS' },
  BH: { name: 'Bahrain', code: '973', iso3: 'BHR', iso2: 'BH' },
  BD: { name: 'Bangladesh', code: '880', iso3: 'BGD', iso2: 'BD' },
  BB: { name: 'Barbados', code: '1246', iso3: 'BRB', iso2: 'BB' },
  BY: { name: 'Belarus', code: '375', iso3: 'BLR', iso2: 'BY' },
  BE: { name: 'Belgium', code: '32', iso3: 'BEL', iso2: 'BE' },
  BZ: { name: 'Belize', code: '501', iso3: 'BLZ', iso2: 'BZ' },
  BJ: { name: 'Benin', code: '229', iso3: 'BEN', iso2: 'BJ' },
  BT: { name: 'Bhutan', code: '975', iso3: 'BTN', iso2: 'BT' },
  BO: { name: 'Bolivia', code: '591', iso3: 'BOL', iso2: 'BO' },
  BA:
   { name: 'Bosnia and Herzegovina',
     code: '387',
     iso3: 'BIH',
     iso2: 'BA' },
  BW: { name: 'Botswana', code: '267', iso3: 'BWA', iso2: 'BW' },
  BR: { name: 'Brazil', code: '55', iso3: 'BRA', iso2: 'BR' },
  BN: { name: 'Brunei', code: '673', iso3: 'BRN', iso2: 'BN' },
  BG: { name: 'Bulgaria', code: '359', iso3: 'BGR', iso2: 'BG' },
  BF: { name: 'Burkina Faso', code: '226', iso3: 'BFA', iso2: 'BF' },
  BI: { name: 'Burundi', code: '257', iso3: 'BDI', iso2: 'BI' },
  KH: { name: 'Cambodia', code: '855', iso3: 'KHM', iso2: 'KH' },
  CM: { name: 'Cameroon', code: '237', iso3: 'CMR', iso2: 'CM' },
  CA: { name: 'Canada', code: '1', iso3: 'CAN', iso2: 'CA' },
  CV: { name: 'Cape Verde', code: '238', iso3: 'CPV', iso2: 'CV' },
  CF:
   { name: 'Central African Republic',
     code: '236',
     iso3: 'CAF',
     iso2: 'CF' },
  TD: { name: 'Chad', code: '235', iso3: 'TCD', iso2: 'TD' },
  CL: { name: 'Chile', code: '56', iso3: 'CHL', iso2: 'CL' },
  CN: { name: 'China', code: '86', iso3: 'CHN', iso2: 'CN' },
  CO: { name: 'Colombia', code: '57', iso3: 'COL', iso2: 'CO' },
  KM: { name: 'Comoros', code: '269', iso3: 'COM', iso2: 'KM' },
  CG: { name: 'Congo', code: '242', iso3: 'COG', iso2: 'CG' },
  CD:
   { name: 'Congo Democratic Republic',
     code: '243',
     iso3: 'COD',
     iso2: 'CD' },
  CR: { name: 'Costa Rica', code: '506', iso3: 'CRI', iso2: 'CR' },
  CI: { name: 'Cote d\'Ivoire', code: '225', iso3: 'CIV', iso2: 'CI' },
  HR: { name: 'Croatia', code: '385', iso3: 'HRV', iso2: 'HR' },
  CU: { name: 'Cuba', code: '53', iso3: 'CUB', iso2: 'CU' },
  CY: { name: 'Cyprus', code: '357', iso3: 'CYP', iso2: 'CY' },
  CZ: { name: 'Czech Republic', code: '420', iso3: 'CZE', iso2: 'CZ' },
  DK: { name: 'Denmark', code: '45', iso3: 'DNK', iso2: 'DK' },
  DJ: { name: 'Djibouti', code: '253', iso3: 'DJI', iso2: 'DJ' },
  DO:
   { name: 'Dominican Republic',
     code: '1809',
     iso3: 'DOM',
     iso2: 'DO' },
  EC: { name: 'Ecuador', code: '593', iso3: 'ECU', iso2: 'EC' },
  EG: { name: 'Egypt', code: '20', iso3: 'EGY', iso2: 'EG' },
  SV: { name: 'El Salvador', code: '503', iso3: 'SLV', iso2: 'SV' },
  GQ:
   { name: 'Equatorial Guinea',
     code: '240',
     iso3: 'GNQ',
     iso2: 'GQ' },
  ER: { name: 'Eritrea', code: '291', iso3: 'ERI', iso2: 'ER' },
  EE: { name: 'Estonia', code: '372', iso3: 'EST', iso2: 'EE' },
  ET: { name: 'Ethiopia', code: '251', iso3: 'ETH', iso2: 'ET' },
  FO: { name: 'Faeroe Islands', code: '298', iso3: 'FRO', iso2: 'FO' },
  FJ: { name: 'Fiji', code: '679', iso3: 'FJI', iso2: 'FJ' },
  FI: { name: 'Finland', code: '358', iso3: 'FIN', iso2: 'FI' },
  FR: { name: 'France', code: '33', iso3: 'FRA', iso2: 'FR' },
  GF: { name: 'French Guiana', code: '594', iso3: 'GUF', iso2: 'GF' },
  PF: { name: 'French Polynesia', code: '689', iso3: 'PYF', iso2: 'PF' },
  GA: { name: 'Gabon', code: '241', iso3: 'GAB', iso2: 'GA' },
  GM: { name: 'Gambia', code: '220', iso3: 'GMB', iso2: 'GM' },
  GE: { name: 'Georgia', code: '995', iso3: 'GEO', iso2: 'GE' },
  DE: { name: 'Germany', code: '49', iso3: 'DEU', iso2: 'DE' },
  GH: { name: 'Ghana', code: '233', iso3: 'GHA', iso2: 'GH' },
  GI: { name: 'Gibraltar', code: '350', iso3: 'GIB', iso2: 'GI' },
  GR: { name: 'Greece', code: '30', iso3: 'GRC', iso2: 'GR' },
  GL: { name: 'Greenland', code: '299', iso3: 'GRL', iso2: 'GL' },
  GP: { name: 'Guadeloupe', code: '590', iso3: 'GLP', iso2: 'GP' },
  GT: { name: 'Guatemala', code: '502', iso3: 'GTM', iso2: 'GT' },
  GN: { name: 'Guinea', code: '224', iso3: 'GIN', iso2: 'GN' },
  GW: { name: 'Guinea Bissau', code: '245', iso3: 'GNB', iso2: 'GW' },
  GY: { name: 'Guyana', code: '592', iso3: 'GUY', iso2: 'GY' },
  HT: { name: 'Haiti', code: '509', iso3: 'HTI', iso2: 'HT' },
  HN: { name: 'Honduras', code: '504', iso3: 'HND', iso2: 'HN' },
  HK: { name: 'Hong Kong', code: '852', iso3: 'HKG', iso2: 'HK' },
  HU: { name: 'Hungary', code: '36', iso3: 'HUN', iso2: 'HU' },
  IS: { name: 'Iceland', code: '354', iso3: 'ISL', iso2: 'IS' },
  IN: { name: 'India', code: '91', iso3: 'IND', iso2: 'IN' },
  ID: { name: 'Indonesia', code: '62', iso3: 'IDN', iso2: 'ID' },
  IR: { name: 'Iran', code: '98', iso3: 'IRN', iso2: 'IR' },
  IQ: { name: 'Iraq', code: '964', iso3: 'IRQ', iso2: 'IQ' },
  IE: { name: 'Ireland', code: '353', iso3: 'IRL', iso2: 'IE' },
  IL: { name: 'Israel', code: '972', iso3: 'ISR', iso2: 'IL' },
  IT: { name: 'Italy', code: '39', iso3: 'ITA', iso2: 'IT' },
  JP: { name: 'Japan', code: '81', iso3: 'JPN', iso2: 'JP' },
  JO: { name: 'Jordan', code: '962', iso3: 'JOR', iso2: 'JO' },
  KE: { name: 'Kenya', code: '254', iso3: 'KEN', iso2: 'KE' },
  KW: { name: 'Kuwait', code: '965', iso3: 'KWT', iso2: 'KW' },
  KG: { name: 'Kyrgyzstan', code: '996', iso3: 'KGZ', iso2: 'KG' },
  LA: { name: 'Laos', code: '856', iso3: 'LAO', iso2: 'LA' },
  LV: { name: 'Latvia', code: '371', iso3: 'LVA', iso2: 'LV' },
  LB: { name: 'Lebanon', code: '961', iso3: 'LBN', iso2: 'LB' },
  LS: { name: 'Lesotho', code: '266', iso3: 'LSO', iso2: 'LS' },
  LR: { name: 'Liberia', code: '231', iso3: 'LBR', iso2: 'LR' },
  LY: { name: 'Libya', code: '218', iso3: 'LBY', iso2: 'LY' },
  LI: { name: 'Liechtenstein', code: '423', iso3: 'LIE', iso2: 'LI' },
  LT: { name: 'Lithuania', code: '370', iso3: 'LTU', iso2: 'LT' },
  LU: { name: 'Luxembourg', code: '352', iso3: 'LUX', iso2: 'LU' },
  MO: { name: 'Macao', code: '853', iso3: 'MAC', iso2: 'MO' },
  MK: { name: 'Macedonia', code: '389', iso3: 'MKD', iso2: 'MK' },
  MG: { name: 'Madagascar', code: '261', iso3: 'MDG', iso2: 'MG' },
  MW: { name: 'Malawi', code: '265', iso3: 'MWI', iso2: 'MW' },
  MY: { name: 'Malaysia', code: '60', iso3: 'MYS', iso2: 'MY' },
  MV: { name: 'Maldives', code: '960', iso3: 'MDV', iso2: 'MV' },
  ML: { name: 'Mali', code: '223', iso3: 'MLI', iso2: 'ML' },
  MT: { name: 'Malta', code: '356', iso3: 'MLT', iso2: 'MT' },
  MH: { name: 'Marshall Islands', code: '692', iso3: 'MHL', iso2: 'MH' },
  MQ: { name: 'Martinique', code: '596', iso3: 'MTQ', iso2: 'MQ' },
  MR: { name: 'Mauritania', code: '222', iso3: 'MRT', iso2: 'MR' },
  MU: { name: 'Mauritius', code: '230', iso3: 'MUS', iso2: 'MU' },
  MX: { name: 'Mexico', code: '52', iso3: 'MEX', iso2: 'MX' },
  FM: { name: 'Micronesia', code: '691', iso3: 'FSM', iso2: 'FM' },
  MD: { name: 'Moldova', code: '373', iso3: 'MDA', iso2: 'MD' },
  MC: { name: 'Monaco', code: '377', iso3: 'MCO', iso2: 'MC' },
  MN: { name: 'Mongolia', code: '976', iso3: 'MNG', iso2: 'MN' },
  ME: { name: 'Montenegro', code: '382', iso3: 'MNE', iso2: 'ME' },
  MA: { name: 'Morocco', code: '212', iso3: 'MAR', iso2: 'MA' },
  MZ: { name: 'Mozambique', code: '258', iso3: 'MOZ', iso2: 'MZ' },
  MM: { name: 'Myanmar', code: '95', iso3: 'MMR', iso2: 'MM' },
  NA: { name: 'Namibia', code: '264', iso3: 'NAM', iso2: 'NA' },
  NR: { name: 'Nauru', code: '674', iso3: 'NRU', iso2: 'NR' },
  NP: { name: 'Nepal', code: '977', iso3: 'NPL', iso2: 'NP' },
  NL: { name: 'Netherlands', code: '31', iso3: 'NLD', iso2: 'NL' },
  AN:
   { name: 'Netherlands Antilles',
     code: '599',
     iso3: 'ANT',
     iso2: 'AN' },
  NC: { name: 'New Caledonia', code: '687', iso3: 'NCL', iso2: 'NC' },
  NZ: { name: 'New Zealand', code: '64', iso3: 'NZL', iso2: 'NZ' },
  NI: { name: 'Nicaragua', code: '505', iso3: 'NIC', iso2: 'NI' },
  NE: { name: 'Niger', code: '227', iso3: 'NER', iso2: 'NE' },
  NG: { name: 'Nigeria', code: '234', iso3: 'NGA', iso2: 'NG' },
  NU: { name: 'Niue', code: '683', iso3: 'NIU', iso2: 'NU' },
  KP: { name: 'North Korea ', code: '850', iso3: 'PRK', iso2: 'KP' },
  NO: { name: 'Norway', code: '47', iso3: 'NOR', iso2: 'NO' },
  OM: { name: 'Oman', code: '968', iso3: 'OMN', iso2: 'OM' },
  PK: { name: 'Pakistan', code: '92', iso3: 'PAK', iso2: 'PK' },
  PW: { name: 'Palau', code: '680', iso3: 'PLW', iso2: 'PW' },
  PS:
   { name: 'Palestinian Authority',
     code: '970',
     iso3: 'PSE',
     iso2: 'PS' },
  PA: { name: 'Panama', code: '507', iso3: 'PAN', iso2: 'PA' },
  PY: { name: 'Paraguay', code: '595', iso3: 'PRY', iso2: 'PY' },
  PE: { name: 'Peru', code: '51', iso3: 'PER', iso2: 'PE' },
  PH: { name: 'Philippines', code: '63', iso3: 'PHL', iso2: 'PH' },
  PL: { name: 'Poland', code: '48', iso3: 'POL', iso2: 'PL' },
  PT: { name: 'Portugal', code: '351', iso3: 'PRT', iso2: 'PT' },
  PR: { name: 'Puerto Rico', code: '1', iso3: 'PRI', iso2: 'PR' },
  QA: { name: 'Qatar', code: '974', iso3: 'QAT', iso2: 'QA' },
  RE: { name: 'Reunion', code: '262', iso3: 'REU', iso2: 'RE' },
  RO: { name: 'Romania', code: '40', iso3: 'ROU', iso2: 'RO' },
  RU: { name: 'Russia', code: '7', iso3: 'RUS', iso2: 'RU' },
  RW: { name: 'Rwanda', code: '250', iso3: 'RWA', iso2: 'RW' },
  PM:
   { name: 'Saint Pierre and Miquelon',
     code: '508',
     iso3: 'SPM',
     iso2: 'PM' },
  WS: { name: 'Samoa', code: '685', iso3: 'WSM', iso2: 'WS' },
  SM: { name: 'San Marino', code: '378', iso3: 'SMR', iso2: 'SM' },
  SA: { name: 'Saudi Arabia', code: '966', iso3: 'SAU', iso2: 'SA' },
  SN: { name: 'Senegal', code: '221', iso3: 'SEN', iso2: 'SN' },
  RS: { name: 'Serbia', code: '381', iso3: 'SRB', iso2: 'RS' },
  SC: { name: 'Seychelles', code: '248', iso3: 'SYC', iso2: 'SC' },
  SL: { name: 'Sierra Leone', code: '232', iso3: 'SLE', iso2: 'SL' },
  SG: { name: 'Singapore', code: '65', iso3: 'SGP', iso2: 'SG' },
  SK: { name: 'Slovakia', code: '421', iso3: 'SVK', iso2: 'SK' },
  SI: { name: 'Slovenia', code: '386', iso3: 'SVN', iso2: 'SI' },
  SO: { name: 'Somalia', code: '252', iso3: 'SOM', iso2: 'SO' },
  ZA: { name: 'South Africa', code: '27', iso3: 'ZAF', iso2: 'ZA' },
  KR: { name: 'South Korea', code: '82', iso3: 'KOR', iso2: 'KR' },
  ES: { name: 'Spain', code: '34', iso3: 'ESP', iso2: 'ES' },
  LK: { name: 'Sri Lanka', code: '94', iso3: 'LKA', iso2: 'LK' },
  SD: { name: 'Sudan', code: '249', iso3: 'SDN', iso2: 'SD' },
  SR: { name: 'Suriname', code: '597', iso3: 'SUR', iso2: 'SR' },
  SZ: { name: 'Swaziland', code: '268', iso3: 'SWZ', iso2: 'SZ' },
  SE: { name: 'Sweden', code: '46', iso3: 'SWE', iso2: 'SE' },
  CH: { name: 'Switzerland', code: '41', iso3: 'CHE', iso2: 'CH' },
  SY: { name: 'Syria', code: '963', iso3: 'SYR', iso2: 'SY' },
  TW: { name: 'Taiwan', code: '886', iso3: 'TWN', iso2: 'TW' },
  TJ: { name: 'Tajikistan', code: '992', iso3: 'TJK', iso2: 'TJ' },
  TZ: { name: 'Tanzania', code: '255', iso3: 'TZA', iso2: 'TZ' },
  TH: { name: 'Thailand', code: '66', iso3: 'THA', iso2: 'TH' },
  TG: { name: 'Togo', code: '228', iso3: 'TGO', iso2: 'TG' },
  TK: { name: 'Tokelau', code: '690', iso3: 'TKL', iso2: 'TK' },
  TO: { name: 'Tonga', code: '676', iso3: 'TON', iso2: 'TO' },
  TN: { name: 'Tunisia', code: '216', iso3: 'TUN', iso2: 'TN' },
  TR: { name: 'Turkey', code: '90', iso3: 'TUR', iso2: 'TR' },
  TM: { name: 'Turkmenistan', code: '993', iso3: 'TKM', iso2: 'TM' },
  TV: { name: 'Tuvalu', code: '688', iso3: 'TUV', iso2: 'TV' },
  UG: { name: 'Uganda', code: '256', iso3: 'UGA', iso2: 'UG' },
  UA: { name: 'Ukraine', code: '380', iso3: 'UKR', iso2: 'UA' },
  AE:
   { name: 'United Arab Emirates',
     code: '971',
     iso3: 'ARE',
     iso2: 'AE' },
  GB: { name: 'United Kingdom', code: '44', iso3: 'GBR', iso2: 'GB' },
  US: { name: 'United States', code: '1', iso3: 'USA', iso2: 'US' },
  UY: { name: 'Uruguay', code: '598', iso3: 'URY', iso2: 'UY' },
  UZ: { name: 'Uzbekistan', code: '998', iso3: 'UZB', iso2: 'UZ' },
  VU: { name: 'Vanuatu', code: '678', iso3: 'VUT', iso2: 'VU' },
  VE: { name: 'Venezuela', code: '58', iso3: 'VEN', iso2: 'VE' },
  VN: { name: 'Vietnam', code: '84', iso3: 'VNM', iso2: 'VN' },
  YE: { name: 'Yemen', code: '967', iso3: 'YEM', iso2: 'YE' },
  ZM: { name: 'Zambia', code: '260', iso3: 'ZMB', iso2: 'ZM' },
  ZW: { name: 'Zimbabwe', code: '263', iso3: 'ZWE', iso2: 'ZW' } }
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

