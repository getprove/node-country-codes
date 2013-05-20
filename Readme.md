
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
{
  "AC": {
    "code": "247",
    "iso2": "AC",
    "name": "Ascension Island"
  },
  "AD": {
    "code": "376",
    "iso2": "AD",
    "name": "Andorra"
  },
  "AE": {
    "code": "971",
    "iso2": "AE",
    "name": "United Arab Emirates"
  },
  "AF": {
    "code": "93",
    "iso2": "AF",
    "name": "Afghanistan"
  },
  "AG": {
    "code": "1 268",
    "iso2": "AG",
    "name": "Antigua And Barbuda"
  },
  "AI": {
    "code": "1 264",
    "iso2": "AI",
    "name": "Anguilla"
  },
  "AL": {
    "code": "355",
    "iso2": "AL",
    "name": "Albania"
  },
  "AM": {
    "code": "374",
    "iso2": "AM",
    "name": "Armenia"
  },
  "AO": {
    "code": "244",
    "iso2": "AO",
    "name": "Angola"
  },
  "AQ": {
    "code": "672",
    "iso2": "AQ",
    "name": "Antarctica"
  },
  "AR": {
    "code": "54",
    "iso2": "AR",
    "name": "Argentina"
  },
  "AS": {
    "code": "1 684",
    "iso2": "AS",
    "name": "American Samoa"
  },
  "AT": {
    "code": "43",
    "iso2": "AT",
    "name": "Austria"
  },
  "AU": {
    "code": "61",
    "iso2": "AU",
    "name": "Australia"
  },
  "AW": {
    "code": "297",
    "iso2": "AW",
    "name": "Aruba"
  },
  "AZ": {
    "code": "994",
    "iso2": "AZ",
    "name": "Azerbaijan"
  },
  "BA": {
    "code": "387",
    "iso2": "BA",
    "name": "Bosnia & Herzegovina"
  },
  "BB": {
    "code": "1 246",
    "iso2": "BB",
    "name": "Barbados"
  },
  "BD": {
    "code": "880",
    "iso2": "BD",
    "name": "Bangladesh"
  },
  "BE": {
    "code": "32",
    "iso2": "BE",
    "name": "Belgium"
  },
  "BF": {
    "code": "226",
    "iso2": "BF",
    "name": "Burkina Faso"
  },
  "BG": {
    "code": "359",
    "iso2": "BG",
    "name": "Bulgaria"
  },
  "BH": {
    "code": "973",
    "iso2": "BH",
    "name": "Bahrain"
  },
  "BI": {
    "code": "257",
    "iso2": "BI",
    "name": "Burundi"
  },
  "BJ": {
    "code": "229",
    "iso2": "BJ",
    "name": "Benin"
  },
  "BL": {
    "code": "590",
    "iso2": "BL",
    "name": "Saint Barthélemy"
  },
  "BM": {
    "code": "1 441",
    "iso2": "BM",
    "name": "Bermuda"
  },
  "BN": {
    "code": "673",
    "iso2": "BN",
    "name": "Brunei Darussalam"
  },
  "BO": {
    "code": "591",
    "iso2": "BO",
    "name": "Bolivia, Plurinational State Of"
  },
  "BQ": {
    "code": "599",
    "iso2": "BQ",
    "name": "Bonaire, Saint Eustatius And Saba"
  },
  "BR": {
    "code": "55",
    "iso2": "BR",
    "name": "Brazil"
  },
  "BS": {
    "code": "1 242",
    "iso2": "BS",
    "name": "Bahamas"
  },
  "BT": {
    "code": "975",
    "iso2": "BT",
    "name": "Bhutan"
  },
  "BV": {
    "code": "",
    "iso2": "BV",
    "name": "Bouvet Island"
  },
  "BW": {
    "code": "267",
    "iso2": "BW",
    "name": "Botswana"
  },
  "BY": {
    "code": "375",
    "iso2": "BY",
    "name": "Belarus"
  },
  "BZ": {
    "code": "501",
    "iso2": "BZ",
    "name": "Belize"
  },
  "CA": {
    "code": "1",
    "iso2": "CA",
    "name": "Canada"
  },
  "CC": {
    "code": "61",
    "iso2": "CC",
    "name": "Cocos (Keeling) Islands"
  },
  "CD": {
    "code": "243",
    "iso2": "CD",
    "name": "Democratic Republic Of Congo"
  },
  "CF": {
    "code": "236",
    "iso2": "CF",
    "name": "Central African Republic"
  },
  "CG": {
    "code": "242",
    "iso2": "CG",
    "name": "Republic Of Congo"
  },
  "CH": {
    "code": "41",
    "iso2": "CH",
    "name": "Switzerland"
  },
  "CI": {
    "code": "225",
    "iso2": "CI",
    "name": "Cote d'Ivoire"
  },
  "CK": {
    "code": "682",
    "iso2": "CK",
    "name": "Cook Islands"
  },
  "CL": {
    "code": "56",
    "iso2": "CL",
    "name": "Chile"
  },
  "CM": {
    "code": "237",
    "iso2": "CM",
    "name": "Cameroon"
  },
  "CN": {
    "code": "86",
    "iso2": "CN",
    "name": "China"
  },
  "CO": {
    "code": "57",
    "iso2": "CO",
    "name": "Colombia"
  },
  "CP": {
    "code": "",
    "iso2": "CP",
    "name": "Clipperton Island"
  },
  "CR": {
    "code": "506",
    "iso2": "CR",
    "name": "Costa Rica"
  },
  "CU": {
    "code": "53",
    "iso2": "CU",
    "name": "Cuba"
  },
  "CV": {
    "code": "238",
    "iso2": "CV",
    "name": "Cape Verde"
  },
  "CW": {
    "code": "599",
    "iso2": "CW",
    "name": "Curacao"
  },
  "CX": {
    "code": "61",
    "iso2": "CX",
    "name": "Christmas Island"
  },
  "CY": {
    "code": "357",
    "iso2": "CY",
    "name": "Cyprus"
  },
  "CZ": {
    "code": "420",
    "iso2": "CZ",
    "name": "Czech Republic"
  },
  "DE": {
    "code": "49",
    "iso2": "DE",
    "name": "Germany"
  },
  "DG": {
    "code": "",
    "iso2": "DG",
    "name": "Diego Garcia"
  },
  "DJ": {
    "code": "253",
    "iso2": "DJ",
    "name": "Djibouti"
  },
  "DK": {
    "code": "45",
    "iso2": "DK",
    "name": "Denmark"
  },
  "DM": {
    "code": "1 767",
    "iso2": "DM",
    "name": "Dominica"
  },
  "DO": {
    "code": "1 809",
    "iso2": "DO",
    "name": "Dominican Republic"
  },
  "DZ": {
    "code": "213",
    "iso2": "DZ",
    "name": "Algeria"
  },
  "EA": {
    "code": "",
    "iso2": "EA",
    "name": "Ceuta, Mulilla"
  },
  "EC": {
    "code": "593",
    "iso2": "EC",
    "name": "Ecuador"
  },
  "EE": {
    "code": "372",
    "iso2": "EE",
    "name": "Estonia"
  },
  "EG": {
    "code": "20",
    "iso2": "EG",
    "name": "Egypt"
  },
  "EH": {
    "code": "212",
    "iso2": "EH",
    "name": "Western Sahara"
  },
  "ER": {
    "code": "291",
    "iso2": "ER",
    "name": "Eritrea"
  },
  "ES": {
    "code": "34",
    "iso2": "ES",
    "name": "Spain"
  },
  "ET": {
    "code": "251",
    "iso2": "ET",
    "name": "Ethiopia"
  },
  "EU": {
    "code": "388",
    "iso2": "EU",
    "name": "European Union"
  },
  "FI": {
    "code": "358",
    "iso2": "FI",
    "name": "Finland"
  },
  "FJ": {
    "code": "679",
    "iso2": "FJ",
    "name": "Fiji"
  },
  "FK": {
    "code": "500",
    "iso2": "FK",
    "name": "Falkland Islands"
  },
  "FM": {
    "code": "691",
    "iso2": "FM",
    "name": "Micronesia, Federated States Of"
  },
  "FO": {
    "code": "298",
    "iso2": "FO",
    "name": "Faroe Islands"
  },
  "FR": {
    "code": "33",
    "iso2": "FR",
    "name": "France"
  },
  "FX": {
    "code": "241",
    "iso2": "FX",
    "name": "France, Metropolitan"
  },
  "GA": {
    "code": "44",
    "iso2": "GA",
    "name": "Gabon"
  },
  "GB": {
    "code": "1 473",
    "iso2": "GB",
    "name": "United Kingdom"
  },
  "GD": {
    "code": "995",
    "iso2": "GD",
    "name": "Grenada"
  },
  "GE": {
    "code": "594",
    "iso2": "GE",
    "name": "Georgia"
  },
  "GF": {
    "code": "44",
    "iso2": "GF",
    "name": "French Guiana"
  },
  "GG": {
    "code": "",
    "iso2": "GG",
    "name": "Guernsey"
  },
  "GH": {
    "code": "233",
    "iso2": "GH",
    "name": "Ghana"
  },
  "GI": {
    "code": "350",
    "iso2": "GI",
    "name": "Gibraltar"
  },
  "GL": {
    "code": "299",
    "iso2": "GL",
    "name": "Greenland"
  },
  "GM": {
    "code": "220",
    "iso2": "GM",
    "name": "Gambia"
  },
  "GN": {
    "code": "224",
    "iso2": "GN",
    "name": "Guinea"
  },
  "GP": {
    "code": "590",
    "iso2": "GP",
    "name": "Guadeloupe"
  },
  "GQ": {
    "code": "240",
    "iso2": "GQ",
    "name": "Equatorial Guinea"
  },
  "GR": {
    "code": "30",
    "iso2": "GR",
    "name": "Greece"
  },
  "GS": {
    "code": "",
    "iso2": "GS",
    "name": "South Georgia And The South Sandwich Islands"
  },
  "GT": {
    "code": "502",
    "iso2": "GT",
    "name": "Guatemala"
  },
  "GU": {
    "code": "1 671",
    "iso2": "GU",
    "name": "Guam"
  },
  "GW": {
    "code": "245",
    "iso2": "GW",
    "name": "Guinea-bissau"
  },
  "GY": {
    "code": "592",
    "iso2": "GY",
    "name": "Guyana"
  },
  "HK": {
    "code": "852",
    "iso2": "HK",
    "name": "Hong Kong"
  },
  "HM": {
    "code": "",
    "iso2": "HM",
    "name": "Heard Island And McDonald Islands"
  },
  "HN": {
    "code": "504",
    "iso2": "HN",
    "name": "Honduras"
  },
  "HR": {
    "code": "385",
    "iso2": "HR",
    "name": "Croatia"
  },
  "HT": {
    "code": "509",
    "iso2": "HT",
    "name": "Haiti"
  },
  "HU": {
    "code": "36",
    "iso2": "HU",
    "name": "Hungary"
  },
  "IC": {
    "code": "",
    "iso2": "IC",
    "name": "Canary Islands"
  },
  "ID": {
    "code": "62",
    "iso2": "ID",
    "name": "Indonesia"
  },
  "IE": {
    "code": "353",
    "iso2": "IE",
    "name": "Ireland"
  },
  "IL": {
    "code": "972",
    "iso2": "IL",
    "name": "Israel"
  },
  "IM": {
    "code": "44",
    "iso2": "IM",
    "name": "Isle Of Man"
  },
  "IN": {
    "code": "91",
    "iso2": "IN",
    "name": "India"
  },
  "IO": {
    "code": "246",
    "iso2": "IO",
    "name": "British Indian Ocean Territory"
  },
  "IQ": {
    "code": "964",
    "iso2": "IQ",
    "name": "Iraq"
  },
  "IR": {
    "code": "98",
    "iso2": "IR",
    "name": "Iran, Islamic Republic Of"
  },
  "IS": {
    "code": "354",
    "iso2": "IS",
    "name": "Iceland"
  },
  "IT": {
    "code": "39",
    "iso2": "IT",
    "name": "Italy"
  },
  "JE": {
    "code": "44",
    "iso2": "JE",
    "name": "Jersey"
  },
  "JM": {
    "code": "1 876",
    "iso2": "JM",
    "name": "Jamaica"
  },
  "JO": {
    "code": "962",
    "iso2": "JO",
    "name": "Jordan"
  },
  "JP": {
    "code": "81",
    "iso2": "JP",
    "name": "Japan"
  },
  "KE": {
    "code": "254",
    "iso2": "KE",
    "name": "Kenya"
  },
  "KG": {
    "code": "996",
    "iso2": "KG",
    "name": "Kyrgyzstan"
  },
  "KH": {
    "code": "855",
    "iso2": "KH",
    "name": "Cambodia"
  },
  "KI": {
    "code": "686",
    "iso2": "KI",
    "name": "Kiribati"
  },
  "KM": {
    "code": "269",
    "iso2": "KM",
    "name": "Comoros"
  },
  "KN": {
    "code": "1 869",
    "iso2": "KN",
    "name": "Saint Kitts And Nevis"
  },
  "KP": {
    "code": "850",
    "iso2": "KP",
    "name": "Korea, Democratic People's Republic Of"
  },
  "KR": {
    "code": "82",
    "iso2": "KR",
    "name": "Korea, Republic Of"
  },
  "KW": {
    "code": "965",
    "iso2": "KW",
    "name": "Kuwait"
  },
  "KY": {
    "code": "1 345",
    "iso2": "KY",
    "name": "Cayman Islands"
  },
  "KZ": {
    "code": "7",
    "iso2": "KZ",
    "name": "Kazakhstan"
  },
  "LA": {
    "code": "856",
    "iso2": "LA",
    "name": "Lao People's Democratic Republic"
  },
  "LB": {
    "code": "961",
    "iso2": "LB",
    "name": "Lebanon"
  },
  "LC": {
    "code": "1 758",
    "iso2": "LC",
    "name": "Saint Lucia"
  },
  "LI": {
    "code": "423",
    "iso2": "LI",
    "name": "Liechtenstein"
  },
  "LK": {
    "code": "94",
    "iso2": "LK",
    "name": "Sri Lanka"
  },
  "LR": {
    "code": "231",
    "iso2": "LR",
    "name": "Liberia"
  },
  "LS": {
    "code": "266",
    "iso2": "LS",
    "name": "Lesotho"
  },
  "LT": {
    "code": "370",
    "iso2": "LT",
    "name": "Lithuania"
  },
  "LU": {
    "code": "352",
    "iso2": "LU",
    "name": "Luxembourg"
  },
  "LV": {
    "code": "371",
    "iso2": "LV",
    "name": "Latvia"
  },
  "LY": {
    "code": "218",
    "iso2": "LY",
    "name": "Libya"
  },
  "MA": {
    "code": "212",
    "iso2": "MA",
    "name": "Morocco"
  },
  "MC": {
    "code": "377",
    "iso2": "MC",
    "name": "Monaco"
  },
  "MD": {
    "code": "373",
    "iso2": "MD",
    "name": "Moldova"
  },
  "ME": {
    "code": "382",
    "iso2": "ME",
    "name": "Montenegro"
  },
  "MF": {
    "code": "590",
    "iso2": "MF",
    "name": "Saint Martin"
  },
  "MG": {
    "code": "261",
    "iso2": "MG",
    "name": "Madagascar"
  },
  "MH": {
    "code": "692",
    "iso2": "MH",
    "name": "Marshall Islands"
  },
  "MK": {
    "code": "389",
    "iso2": "MK",
    "name": "Macedonia, The Former Yugoslav Republic Of"
  },
  "ML": {
    "code": "223",
    "iso2": "ML",
    "name": "Mali"
  },
  "MM": {
    "code": "95",
    "iso2": "MM",
    "name": "Myanmar"
  },
  "MN": {
    "code": "976",
    "iso2": "MN",
    "name": "Mongolia"
  },
  "MO": {
    "code": "853",
    "iso2": "MO",
    "name": "Macao"
  },
  "MP": {
    "code": "1 670",
    "iso2": "MP",
    "name": "Northern Mariana Islands"
  },
  "MQ": {
    "code": "596",
    "iso2": "MQ",
    "name": "Martinique"
  },
  "MR": {
    "code": "222",
    "iso2": "MR",
    "name": "Mauritania"
  },
  "MS": {
    "code": "1 664",
    "iso2": "MS",
    "name": "Montserrat"
  },
  "MT": {
    "code": "356",
    "iso2": "MT",
    "name": "Malta"
  },
  "MU": {
    "code": "230",
    "iso2": "MU",
    "name": "Mauritius"
  },
  "MV": {
    "code": "960",
    "iso2": "MV",
    "name": "Maldives"
  },
  "MW": {
    "code": "265",
    "iso2": "MW",
    "name": "Malawi"
  },
  "MX": {
    "code": "52",
    "iso2": "MX",
    "name": "Mexico"
  },
  "MY": {
    "code": "60",
    "iso2": "MY",
    "name": "Malaysia"
  },
  "MZ": {
    "code": "258",
    "iso2": "MZ",
    "name": "Mozambique"
  },
  "NA": {
    "code": "264",
    "iso2": "NA",
    "name": "Namibia"
  },
  "NC": {
    "code": "687",
    "iso2": "NC",
    "name": "New Caledonia"
  },
  "NE": {
    "code": "227",
    "iso2": "NE",
    "name": "Niger"
  },
  "NF": {
    "code": "672",
    "iso2": "NF",
    "name": "Norfolk Island"
  },
  "NG": {
    "code": "234",
    "iso2": "NG",
    "name": "Nigeria"
  },
  "NI": {
    "code": "505",
    "iso2": "NI",
    "name": "Nicaragua"
  },
  "NL": {
    "code": "31",
    "iso2": "NL",
    "name": "Netherlands"
  },
  "NO": {
    "code": "47",
    "iso2": "NO",
    "name": "Norway"
  },
  "NP": {
    "code": "977",
    "iso2": "NP",
    "name": "Nepal"
  },
  "NR": {
    "code": "674",
    "iso2": "NR",
    "name": "Nauru"
  },
  "NU": {
    "code": "683",
    "iso2": "NU",
    "name": "Niue"
  },
  "NZ": {
    "code": "64",
    "iso2": "NZ",
    "name": "New Zealand"
  },
  "OM": {
    "code": "968",
    "iso2": "OM",
    "name": "Oman"
  },
  "PA": {
    "code": "507",
    "iso2": "PA",
    "name": "Panama"
  },
  "PE": {
    "code": "51",
    "iso2": "PE",
    "name": "Peru"
  },
  "PF": {
    "code": "689",
    "iso2": "PF",
    "name": "French Polynesia"
  },
  "PG": {
    "code": "675",
    "iso2": "PG",
    "name": "Papua New Guinea"
  },
  "PH": {
    "code": "63",
    "iso2": "PH",
    "name": "Philippines"
  },
  "PK": {
    "code": "92",
    "iso2": "PK",
    "name": "Pakistan"
  },
  "PL": {
    "code": "48",
    "iso2": "PL",
    "name": "Poland"
  },
  "PM": {
    "code": "508",
    "iso2": "PM",
    "name": "Saint Pierre And Miquelon"
  },
  "PN": {
    "code": "",
    "iso2": "PN",
    "name": "Pitcairn"
  },
  "PR": {
    "code": "1 787",
    "iso2": "PR",
    "name": "Puerto Rico"
  },
  "PS": {
    "code": "970",
    "iso2": "PS",
    "name": "Palestinian Territory, Occupied"
  },
  "PT": {
    "code": "351",
    "iso2": "PT",
    "name": "Portugal"
  },
  "PW": {
    "code": "680",
    "iso2": "PW",
    "name": "Palau"
  },
  "PY": {
    "code": "595",
    "iso2": "PY",
    "name": "Paraguay"
  },
  "QA": {
    "code": "974",
    "iso2": "QA",
    "name": "Qatar"
  },
  "RE": {
    "code": "262",
    "iso2": "RE",
    "name": "Reunion"
  },
  "RO": {
    "code": "40",
    "iso2": "RO",
    "name": "Romania"
  },
  "RS": {
    "code": "381",
    "iso2": "RS",
    "name": "Serbia"
  },
  "RU": {
    "code": "7",
    "iso2": "RU",
    "name": "Russian Federation"
  },
  "RW": {
    "code": "250",
    "iso2": "RW",
    "name": "Rwanda"
  },
  "SA": {
    "code": "966",
    "iso2": "SA",
    "name": "Saudi Arabia"
  },
  "SB": {
    "code": "677",
    "iso2": "SB",
    "name": "Solomon Islands"
  },
  "SC": {
    "code": "248",
    "iso2": "SC",
    "name": "Seychelles"
  },
  "SD": {
    "code": "249",
    "iso2": "SD",
    "name": "Sudan"
  },
  "SE": {
    "code": "46",
    "iso2": "SE",
    "name": "Sweden"
  },
  "SG": {
    "code": "65",
    "iso2": "SG",
    "name": "Singapore"
  },
  "SH": {
    "code": "290",
    "iso2": "SH",
    "name": "Saint Helena, Ascension And Tristan Da Cunha"
  },
  "SI": {
    "code": "386",
    "iso2": "SI",
    "name": "Slovenia"
  },
  "SJ": {
    "code": "47",
    "iso2": "SJ",
    "name": "Svalbard And Jan Mayen"
  },
  "SK": {
    "code": "421",
    "iso2": "SK",
    "name": "Slovakia"
  },
  "SL": {
    "code": "232",
    "iso2": "SL",
    "name": "Sierra Leone"
  },
  "SM": {
    "code": "378",
    "iso2": "SM",
    "name": "San Marino"
  },
  "SN": {
    "code": "221",
    "iso2": "SN",
    "name": "Senegal"
  },
  "SO": {
    "code": "252",
    "iso2": "SO",
    "name": "Somalia"
  },
  "SR": {
    "code": "597",
    "iso2": "SR",
    "name": "Suriname"
  },
  "ST": {
    "code": "239",
    "iso2": "ST",
    "name": "Sao Tome And Principe"
  },
  "SU": {
    "code": "",
    "iso2": "SU",
    "name": "USSR"
  },
  "SV": {
    "code": "503",
    "iso2": "SV",
    "name": "El Salvador"
  },
  "SX": {
    "code": "1 721",
    "iso2": "SX",
    "name": "Sint Maarten"
  },
  "SY": {
    "code": "963",
    "iso2": "SY",
    "name": "Syrian Arab Republic"
  },
  "SZ": {
    "code": "268",
    "iso2": "SZ",
    "name": "Swaziland"
  },
  "TA": {
    "code": "290",
    "iso2": "TA",
    "name": "Tristan de Cunha"
  },
  "TC": {
    "code": "1 649",
    "iso2": "TC",
    "name": "Turks And Caicos Islands"
  },
  "TD": {
    "code": "235",
    "iso2": "TD",
    "name": "Chad"
  },
  "TF": {
    "code": "",
    "iso2": "TF",
    "name": "French Southern Territories"
  },
  "TG": {
    "code": "228",
    "iso2": "TG",
    "name": "Togo"
  },
  "TH": {
    "code": "66",
    "iso2": "TH",
    "name": "Thailand"
  },
  "TJ": {
    "code": "992",
    "iso2": "TJ",
    "name": "Tajikistan"
  },
  "TK": {
    "code": "690",
    "iso2": "TK",
    "name": "Tokelau"
  },
  "TL": {
    "code": "670",
    "iso2": "TL",
    "name": "East Timor"
  },
  "TM": {
    "code": "993",
    "iso2": "TM",
    "name": "Turkmenistan"
  },
  "TN": {
    "code": "216",
    "iso2": "TN",
    "name": "Tunisia"
  },
  "TO": {
    "code": "676",
    "iso2": "TO",
    "name": "Tonga"
  },
  "TR": {
    "code": "90",
    "iso2": "TR",
    "name": "Turkey"
  },
  "TT": {
    "code": "1 868",
    "iso2": "TT",
    "name": "Trinidad And Tobago"
  },
  "TV": {
    "code": "688",
    "iso2": "TV",
    "name": "Tuvalu"
  },
  "TW": {
    "code": "886",
    "iso2": "TW",
    "name": "Taiwan, Province Of China"
  },
  "TZ": {
    "code": "255",
    "iso2": "TZ",
    "name": "Tanzania, United Republic Of"
  },
  "UA": {
    "code": "380",
    "iso2": "UA",
    "name": "Ukraine"
  },
  "UG": {
    "code": "256",
    "iso2": "UG",
    "name": "Uganda"
  },
  "UK": {
    "code": "",
    "iso2": "UK",
    "name": "United Kingdom"
  },
  "UM": {
    "code": "",
    "iso2": "UM",
    "name": "United States Minor Outlying Islands"
  },
  "US": {
    "code": "1",
    "iso2": "US",
    "name": "United States"
  },
  "UY": {
    "code": "598",
    "iso2": "UY",
    "name": "Uruguay"
  },
  "UZ": {
    "code": "998",
    "iso2": "UZ",
    "name": "Uzbekistan"
  },
  "VA": {
    "code": "379",
    "iso2": "VA",
    "name": "Vatican City State"
  },
  "VC": {
    "code": "1 784",
    "iso2": "VC",
    "name": "Saint Vincent And The Grenadines"
  },
  "VE": {
    "code": "58",
    "iso2": "VE",
    "name": "Venezuela, Bolivarian Republic Of"
  },
  "VG": {
    "code": "1 284",
    "iso2": "VG",
    "name": "Virgin Islands (British)"
  },
  "VI": {
    "code": "1 340",
    "iso2": "VI",
    "name": "Virgin Islands (US)"
  },
  "VN": {
    "code": "84",
    "iso2": "VN",
    "name": "Viet Nam"
  },
  "VU": {
    "code": "678",
    "iso2": "VU",
    "name": "Vanuatu"
  },
  "WF": {
    "code": "681",
    "iso2": "WF",
    "name": "Wallis And Futuna"
  },
  "WS": {
    "code": "685",
    "iso2": "WS",
    "name": "Samoa"
  },
  "YE": {
    "code": "967",
    "iso2": "YE",
    "name": "Yemen"
  },
  "YT": {
    "code": "262",
    "iso2": "YT",
    "name": "Mayotte"
  },
  "ZA": {
    "code": "27",
    "iso2": "ZA",
    "name": "South Africa"
  },
  "ZM": {
    "code": "260",
    "iso2": "ZM",
    "name": "Zambia"
  },
  "ZW": {
    "code": "263",
    "iso2": "ZW",
    "name": "Zimbabwe"
  }
}
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

