
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
    "codes": [
        "+247"
    ],
    "iso2": "AC",
    "name": "Ascension Island"
  },
  "AD": {
    "codes": [
        "+376"
    ],
    "iso2": "AD",
    "name": "Andorra"
  },
  "AE": {
    "codes": [
        "+971"
    ],
    "iso2": "AE",
    "name": "United Arab Emirates"
  },
  "AF": {
    "codes": [
        "+93"
    ],
    "iso2": "AF",
    "name": "Afghanistan"
  },
  "AG": {
    "codes": [
        "+1 268"
    ],
    "iso2": "AG",
    "name": "Antigua And Barbuda"
  },
  "AI": {
    "codes": [
        "+1 264"
    ],
    "iso2": "AI",
    "name": "Anguilla"
  },
  "AL": {
    "codes": [
        "+355"
    ],
    "iso2": "AL",
    "name": "Albania"
  },
  "AM": {
    "codes": [
        "+374"
    ],
    "iso2": "AM",
    "name": "Armenia"
  },
  "AO": {
    "codes": [
        "+244"
    ],
    "iso2": "AO",
    "name": "Angola"
  },
  "AQ": {
    "codes": [
        "+672"
    ],
    "iso2": "AQ",
    "name": "Antarctica"
  },
  "AR": {
    "codes": [
        "+54"
    ],
    "iso2": "AR",
    "name": "Argentina"
  },
  "AS": {
    "codes": [
        "+1 684"
    ],
    "iso2": "AS",
    "name": "American Samoa"
  },
  "AT": {
    "codes": [
        "+43"
    ],
    "iso2": "AT",
    "name": "Austria"
  },
  "AU": {
    "codes": [
        "+61"
    ],
    "iso2": "AU",
    "name": "Australia"
  },
  "AW": {
    "codes": [
        "+297"
    ],
    "iso2": "AW",
    "name": "Aruba"
  },
  "AZ": {
    "codes": [
        "+994"
    ],
    "iso2": "AZ",
    "name": "Azerbaijan"
  },
  "BA": {
    "codes": [
        "+387"
    ],
    "iso2": "BA",
    "name": "Bosnia & Herzegovina"
  },
  "BB": {
    "codes": [
        "+1 246"
    ],
    "iso2": "BB",
    "name": "Barbados"
  },
  "BD": {
    "codes": [
        "+880"
    ],
    "iso2": "BD",
    "name": "Bangladesh"
  },
  "BE": {
    "codes": [
        "+32"
    ],
    "iso2": "BE",
    "name": "Belgium"
  },
  "BF": {
    "codes": [
        "+226"
    ],
    "iso2": "BF",
    "name": "Burkina Faso"
  },
  "BG": {
    "codes": [
        "+359"
    ],
    "iso2": "BG",
    "name": "Bulgaria"
  },
  "BH": {
    "codes": [
        "+973"
    ],
    "iso2": "BH",
    "name": "Bahrain"
  },
  "BI": {
    "codes": [
        "+257"
    ],
    "iso2": "BI",
    "name": "Burundi"
  },
  "BJ": {
    "codes": [
        "+229"
    ],
    "iso2": "BJ",
    "name": "Benin"
  },
  "BL": {
    "codes": [
        "+590"
    ],
    "iso2": "BL",
    "name": "Saint Barthélemy"
  },
  "BM": {
    "codes": [
        "+1 441"
    ],
    "iso2": "BM",
    "name": "Bermuda"
  },
  "BN": {
    "codes": [
        "+673"
    ],
    "iso2": "BN",
    "name": "Brunei Darussalam"
  },
  "BO": {
    "codes": [
        "+591"
    ],
    "iso2": "BO",
    "name": "Bolivia, Plurinational State Of"
  },
  "BQ": {
    "codes": [
        "+599"
    ],
    "iso2": "BQ",
    "name": "Bonaire, Saint Eustatius And Saba"
  },
  "BR": {
    "codes": [
        "+55"
    ],
    "iso2": "BR",
    "name": "Brazil"
  },
  "BS": {
    "codes": [
        "+1 242"
    ],
    "iso2": "BS",
    "name": "Bahamas"
  },
  "BT": {
    "codes": [
        "+975"
    ],
    "iso2": "BT",
    "name": "Bhutan"
  },
  "BV": {
    "codes": [],
    "iso2": "BV",
    "name": "Bouvet Island"
  },
  "BW": {
    "codes": [
        "+267"
    ],
    "iso2": "BW",
    "name": "Botswana"
  },
  "BY": {
    "codes": [
        "+375"
    ],
    "iso2": "BY",
    "name": "Belarus"
  },
  "BZ": {
    "codes": [
        "+501"
    ],
    "iso2": "BZ",
    "name": "Belize"
  },
  "CA": {
    "codes": [
        "+1"
    ],
    "iso2": "CA",
    "name": "Canada"
  },
  "CC": {
    "codes": [
        "+61"
    ],
    "iso2": "CC",
    "name": "Cocos (Keeling) Islands"
  },
  "CD": {
    "codes": [
        "+243"
    ],
    "iso2": "CD",
    "name": "Democratic Republic Of Congo"
  },
  "CF": {
    "codes": [
        "+236"
    ],
    "iso2": "CF",
    "name": "Central African Republic"
  },
  "CG": {
    "codes": [
        "+242"
    ],
    "iso2": "CG",
    "name": "Republic Of Congo"
  },
  "CH": {
    "codes": [
        "+41"
    ],
    "iso2": "CH",
    "name": "Switzerland"
  },
  "CI": {
    "codes": [
        "+225"
    ],
    "iso2": "CI",
    "name": "Cote d'Ivoire"
  },
  "CK": {
    "codes": [
        "+682"
    ],
    "iso2": "CK",
    "name": "Cook Islands"
  },
  "CL": {
    "codes": [
        "+56"
    ],
    "iso2": "CL",
    "name": "Chile"
  },
  "CM": {
    "codes": [
        "+237"
    ],
    "iso2": "CM",
    "name": "Cameroon"
  },
  "CN": {
    "codes": [
        "+86"
    ],
    "iso2": "CN",
    "name": "China"
  },
  "CO": {
    "codes": [
        "+57"
    ],
    "iso2": "CO",
    "name": "Colombia"
  },
  "CP": {
    "codes": [],
    "iso2": "CP",
    "name": "Clipperton Island"
  },
  "CR": {
    "codes": [
        "+506"
    ],
    "iso2": "CR",
    "name": "Costa Rica"
  },
  "CU": {
    "codes": [
        "+53"
    ],
    "iso2": "CU",
    "name": "Cuba"
  },
  "CV": {
    "codes": [
        "+238"
    ],
    "iso2": "CV",
    "name": "Cape Verde"
  },
  "CW": {
    "codes": [
        "+599"
    ],
    "iso2": "CW",
    "name": "Curacao"
  },
  "CX": {
    "codes": [
        "+61"
    ],
    "iso2": "CX",
    "name": "Christmas Island"
  },
  "CY": {
    "codes": [
        "+357"
    ],
    "iso2": "CY",
    "name": "Cyprus"
  },
  "CZ": {
    "codes": [
        "+420"
    ],
    "iso2": "CZ",
    "name": "Czech Republic"
  },
  "DE": {
    "codes": [
        "+49"
    ],
    "iso2": "DE",
    "name": "Germany"
  },
  "DG": {
    "codes": [],
    "iso2": "DG",
    "name": "Diego Garcia"
  },
  "DJ": {
    "codes": [
        "+253"
    ],
    "iso2": "DJ",
    "name": "Djibouti"
  },
  "DK": {
    "codes": [
        "+45"
    ],
    "iso2": "DK",
    "name": "Denmark"
  },
  "DM": {
    "codes": [
        "+1 767"
    ],
    "iso2": "DM",
    "name": "Dominica"
  },
  "DO": {
    "codes": [
        "+1 809",
        "+1 829",
        "+1 849"
    ],
    "iso2": "DO",
    "name": "Dominican Republic"
  },
  "DZ": {
    "codes": [
        "+213"
    ],
    "iso2": "DZ",
    "name": "Algeria"
  },
  "EA": {
    "codes": [],
    "iso2": "EA",
    "name": "Ceuta, Mulilla"
  },
  "EC": {
    "codes": [
        "+593"
    ],
    "iso2": "EC",
    "name": "Ecuador"
  },
  "EE": {
    "codes": [
        "+372"
    ],
    "iso2": "EE",
    "name": "Estonia"
  },
  "EG": {
    "codes": [
        "+20"
    ],
    "iso2": "EG",
    "name": "Egypt"
  },
  "EH": {
    "codes": [
        "+212"
    ],
    "iso2": "EH",
    "name": "Western Sahara"
  },
  "ER": {
    "codes": [
        "+291"
    ],
    "iso2": "ER",
    "name": "Eritrea"
  },
  "ES": {
    "codes": [
        "+34"
    ],
    "iso2": "ES",
    "name": "Spain"
  },
  "ET": {
    "codes": [
        "+251"
    ],
    "iso2": "ET",
    "name": "Ethiopia"
  },
  "EU": {
    "codes": [
        "+388"
    ],
    "iso2": "EU",
    "name": "European Union"
  },
  "FI": {
    "codes": [
        "+358"
    ],
    "iso2": "FI",
    "name": "Finland"
  },
  "FJ": {
    "codes": [
        "+679"
    ],
    "iso2": "FJ",
    "name": "Fiji"
  },
  "FK": {
    "codes": [
        "+500"
    ],
    "iso2": "FK",
    "name": "Falkland Islands"
  },
  "FM": {
    "codes": [
        "+691"
    ],
    "iso2": "FM",
    "name": "Micronesia, Federated States Of"
  },
  "FO": {
    "codes": [
        "+298"
    ],
    "iso2": "FO",
    "name": "Faroe Islands"
  },
  "FR": {
    "codes": [
        "+33"
    ],
    "iso2": "FR",
    "name": "France"
  },
  "FX": {
    "codes": [
        "+241"
    ],
    "iso2": "FX",
    "name": "France, Metropolitan"
  },
  "GA": {
    "codes": [
        "+44"
    ],
    "iso2": "GA",
    "name": "Gabon"
  },
  "GB": {
    "codes": [
        "+1 473"
    ],
    "iso2": "GB",
    "name": "United Kingdom"
  },
  "GD": {
    "codes": [
        "+995"
    ],
    "iso2": "GD",
    "name": "Grenada"
  },
  "GE": {
    "codes": [
        "+594"
    ],
    "iso2": "GE",
    "name": "Georgia"
  },
  "GF": {
    "codes": [
        "+44"
    ],
    "iso2": "GF",
    "name": "French Guiana"
  },
  "GG": {
    "codes": [],
    "iso2": "GG",
    "name": "Guernsey"
  },
  "GH": {
    "codes": [
        "+233"
    ],
    "iso2": "GH",
    "name": "Ghana"
  },
  "GI": {
    "codes": [
        "+350"
    ],
    "iso2": "GI",
    "name": "Gibraltar"
  },
  "GL": {
    "codes": [
        "+299"
    ],
    "iso2": "GL",
    "name": "Greenland"
  },
  "GM": {
    "codes": [
        "+220"
    ],
    "iso2": "GM",
    "name": "Gambia"
  },
  "GN": {
    "codes": [
        "+224"
    ],
    "iso2": "GN",
    "name": "Guinea"
  },
  "GP": {
    "codes": [
        "+590"
    ],
    "iso2": "GP",
    "name": "Guadeloupe"
  },
  "GQ": {
    "codes": [
        "+240"
    ],
    "iso2": "GQ",
    "name": "Equatorial Guinea"
  },
  "GR": {
    "codes": [
        "+30"
    ],
    "iso2": "GR",
    "name": "Greece"
  },
  "GS": {
    "codes": [],
    "iso2": "GS",
    "name": "South Georgia And The South Sandwich Islands"
  },
  "GT": {
    "codes": [
        "+502"
    ],
    "iso2": "GT",
    "name": "Guatemala"
  },
  "GU": {
    "codes": [
        "+1 671"
    ],
    "iso2": "GU",
    "name": "Guam"
  },
  "GW": {
    "codes": [
        "+245"
    ],
    "iso2": "GW",
    "name": "Guinea-bissau"
  },
  "GY": {
    "codes": [
        "+592"
    ],
    "iso2": "GY",
    "name": "Guyana"
  },
  "HK": {
    "codes": [
        "+852"
    ],
    "iso2": "HK",
    "name": "Hong Kong"
  },
  "HM": {
    "codes": [],
    "iso2": "HM",
    "name": "Heard Island And McDonald Islands"
  },
  "HN": {
    "codes": [
        "+504"
    ],
    "iso2": "HN",
    "name": "Honduras"
  },
  "HR": {
    "codes": [
        "+385"
    ],
    "iso2": "HR",
    "name": "Croatia"
  },
  "HT": {
    "codes": [
        "+509"
    ],
    "iso2": "HT",
    "name": "Haiti"
  },
  "HU": {
    "codes": [
        "+36"
    ],
    "iso2": "HU",
    "name": "Hungary"
  },
  "IC": {
    "codes": [],
    "iso2": "IC",
    "name": "Canary Islands"
  },
  "ID": {
    "codes": [
        "+62"
    ],
    "iso2": "ID",
    "name": "Indonesia"
  },
  "IE": {
    "codes": [
        "+353"
    ],
    "iso2": "IE",
    "name": "Ireland"
  },
  "IL": {
    "codes": [
        "+972"
    ],
    "iso2": "IL",
    "name": "Israel"
  },
  "IM": {
    "codes": [
        "+44"
    ],
    "iso2": "IM",
    "name": "Isle Of Man"
  },
  "IN": {
    "codes": [
        "+91"
    ],
    "iso2": "IN",
    "name": "India"
  },
  "IO": {
    "codes": [
        "+246"
    ],
    "iso2": "IO",
    "name": "British Indian Ocean Territory"
  },
  "IQ": {
    "codes": [
        "+964"
    ],
    "iso2": "IQ",
    "name": "Iraq"
  },
  "IR": {
    "codes": [
        "+98"
    ],
    "iso2": "IR",
    "name": "Iran, Islamic Republic Of"
  },
  "IS": {
    "codes": [
        "+354"
    ],
    "iso2": "IS",
    "name": "Iceland"
  },
  "IT": {
    "codes": [
        "+39"
    ],
    "iso2": "IT",
    "name": "Italy"
  },
  "JE": {
    "codes": [
        "+44"
    ],
    "iso2": "JE",
    "name": "Jersey"
  },
  "JM": {
    "codes": [
        "+1 876"
    ],
    "iso2": "JM",
    "name": "Jamaica"
  },
  "JO": {
    "codes": [
        "+962"
    ],
    "iso2": "JO",
    "name": "Jordan"
  },
  "JP": {
    "codes": [
        "+81"
    ],
    "iso2": "JP",
    "name": "Japan"
  },
  "KE": {
    "codes": [
        "+254"
    ],
    "iso2": "KE",
    "name": "Kenya"
  },
  "KG": {
    "codes": [
        "+996"
    ],
    "iso2": "KG",
    "name": "Kyrgyzstan"
  },
  "KH": {
    "codes": [
        "+855"
    ],
    "iso2": "KH",
    "name": "Cambodia"
  },
  "KI": {
    "codes": [
        "+686"
    ],
    "iso2": "KI",
    "name": "Kiribati"
  },
  "KM": {
    "codes": [
        "+269"
    ],
    "iso2": "KM",
    "name": "Comoros"
  },
  "KN": {
    "codes": [
        "+1 869"
    ],
    "iso2": "KN",
    "name": "Saint Kitts And Nevis"
  },
  "KP": {
    "codes": [
        "+850"
    ],
    "iso2": "KP",
    "name": "Korea, Democratic People's Republic Of"
  },
  "KR": {
    "codes": [
        "+82"
    ],
    "iso2": "KR",
    "name": "Korea, Republic Of"
  },
  "KW": {
    "codes": [
        "+965"
    ],
    "iso2": "KW",
    "name": "Kuwait"
  },
  "KY": {
    "codes": [
        "+1 345"
    ],
    "iso2": "KY",
    "name": "Cayman Islands"
  },
  "KZ": {
    "codes": [
        "+7",
        "+7 6",
        "+7 7"
    ],
    "iso2": "KZ",
    "name": "Kazakhstan"
  },
  "LA": {
    "codes": [
        "+856"
    ],
    "iso2": "LA",
    "name": "Lao People's Democratic Republic"
  },
  "LB": {
    "codes": [
        "+961"
    ],
    "iso2": "LB",
    "name": "Lebanon"
  },
  "LC": {
    "codes": [
        "+1 758"
    ],
    "iso2": "LC",
    "name": "Saint Lucia"
  },
  "LI": {
    "codes": [
        "+423"
    ],
    "iso2": "LI",
    "name": "Liechtenstein"
  },
  "LK": {
    "codes": [
        "+94"
    ],
    "iso2": "LK",
    "name": "Sri Lanka"
  },
  "LR": {
    "codes": [
        "+231"
    ],
    "iso2": "LR",
    "name": "Liberia"
  },
  "LS": {
    "codes": [
        "+266"
    ],
    "iso2": "LS",
    "name": "Lesotho"
  },
  "LT": {
    "codes": [
        "+370"
    ],
    "iso2": "LT",
    "name": "Lithuania"
  },
  "LU": {
    "codes": [
        "+352"
    ],
    "iso2": "LU",
    "name": "Luxembourg"
  },
  "LV": {
    "codes": [
        "+371"
    ],
    "iso2": "LV",
    "name": "Latvia"
  },
  "LY": {
    "codes": [
        "+218"
    ],
    "iso2": "LY",
    "name": "Libya"
  },
  "MA": {
    "codes": [
        "+212"
    ],
    "iso2": "MA",
    "name": "Morocco"
  },
  "MC": {
    "codes": [
        "+377"
    ],
    "iso2": "MC",
    "name": "Monaco"
  },
  "MD": {
    "codes": [
        "+373"
    ],
    "iso2": "MD",
    "name": "Moldova"
  },
  "ME": {
    "codes": [
        "+382"
    ],
    "iso2": "ME",
    "name": "Montenegro"
  },
  "MF": {
    "codes": [
        "+590"
    ],
    "iso2": "MF",
    "name": "Saint Martin"
  },
  "MG": {
    "codes": [
        "+261"
    ],
    "iso2": "MG",
    "name": "Madagascar"
  },
  "MH": {
    "codes": [
        "+692"
    ],
    "iso2": "MH",
    "name": "Marshall Islands"
  },
  "MK": {
    "codes": [
        "+389"
    ],
    "iso2": "MK",
    "name": "Macedonia, The Former Yugoslav Republic Of"
  },
  "ML": {
    "codes": [
        "+223"
    ],
    "iso2": "ML",
    "name": "Mali"
  },
  "MM": {
    "codes": [
        "+95"
    ],
    "iso2": "MM",
    "name": "Myanmar"
  },
  "MN": {
    "codes": [
        "+976"
    ],
    "iso2": "MN",
    "name": "Mongolia"
  },
  "MO": {
    "codes": [
        "+853"
    ],
    "iso2": "MO",
    "name": "Macao"
  },
  "MP": {
    "codes": [
        "+1 670"
    ],
    "iso2": "MP",
    "name": "Northern Mariana Islands"
  },
  "MQ": {
    "codes": [
        "+596"
    ],
    "iso2": "MQ",
    "name": "Martinique"
  },
  "MR": {
    "codes": [
        "+222"
    ],
    "iso2": "MR",
    "name": "Mauritania"
  },
  "MS": {
    "codes": [
        "+1 664"
    ],
    "iso2": "MS",
    "name": "Montserrat"
  },
  "MT": {
    "codes": [
        "+356"
    ],
    "iso2": "MT",
    "name": "Malta"
  },
  "MU": {
    "codes": [
        "+230"
    ],
    "iso2": "MU",
    "name": "Mauritius"
  },
  "MV": {
    "codes": [
        "+960"
    ],
    "iso2": "MV",
    "name": "Maldives"
  },
  "MW": {
    "codes": [
        "+265"
    ],
    "iso2": "MW",
    "name": "Malawi"
  },
  "MX": {
    "codes": [
        "+52"
    ],
    "iso2": "MX",
    "name": "Mexico"
  },
  "MY": {
    "codes": [
        "+60"
    ],
    "iso2": "MY",
    "name": "Malaysia"
  },
  "MZ": {
    "codes": [
        "+258"
    ],
    "iso2": "MZ",
    "name": "Mozambique"
  },
  "NA": {
    "codes": [
        "+264"
    ],
    "iso2": "NA",
    "name": "Namibia"
  },
  "NC": {
    "codes": [
        "+687"
    ],
    "iso2": "NC",
    "name": "New Caledonia"
  },
  "NE": {
    "codes": [
        "+227"
    ],
    "iso2": "NE",
    "name": "Niger"
  },
  "NF": {
    "codes": [
        "+672"
    ],
    "iso2": "NF",
    "name": "Norfolk Island"
  },
  "NG": {
    "codes": [
        "+234"
    ],
    "iso2": "NG",
    "name": "Nigeria"
  },
  "NI": {
    "codes": [
        "+505"
    ],
    "iso2": "NI",
    "name": "Nicaragua"
  },
  "NL": {
    "codes": [
        "+31"
    ],
    "iso2": "NL",
    "name": "Netherlands"
  },
  "NO": {
    "codes": [
        "+47"
    ],
    "iso2": "NO",
    "name": "Norway"
  },
  "NP": {
    "codes": [
        "+977"
    ],
    "iso2": "NP",
    "name": "Nepal"
  },
  "NR": {
    "codes": [
        "+674"
    ],
    "iso2": "NR",
    "name": "Nauru"
  },
  "NU": {
    "codes": [
        "+683"
    ],
    "iso2": "NU",
    "name": "Niue"
  },
  "NZ": {
    "codes": [
        "+64"
    ],
    "iso2": "NZ",
    "name": "New Zealand"
  },
  "OM": {
    "codes": [
        "+968"
    ],
    "iso2": "OM",
    "name": "Oman"
  },
  "PA": {
    "codes": [
        "+507"
    ],
    "iso2": "PA",
    "name": "Panama"
  },
  "PE": {
    "codes": [
        "+51"
    ],
    "iso2": "PE",
    "name": "Peru"
  },
  "PF": {
    "codes": [
        "+689"
    ],
    "iso2": "PF",
    "name": "French Polynesia"
  },
  "PG": {
    "codes": [
        "+675"
    ],
    "iso2": "PG",
    "name": "Papua New Guinea"
  },
  "PH": {
    "codes": [
        "+63"
    ],
    "iso2": "PH",
    "name": "Philippines"
  },
  "PK": {
    "codes": [
        "+92"
    ],
    "iso2": "PK",
    "name": "Pakistan"
  },
  "PL": {
    "codes": [
        "+48"
    ],
    "iso2": "PL",
    "name": "Poland"
  },
  "PM": {
    "codes": [
        "+508"
    ],
    "iso2": "PM",
    "name": "Saint Pierre And Miquelon"
  },
  "PN": {
    "codes": [],
    "iso2": "PN",
    "name": "Pitcairn"
  },
  "PR": {
    "codes": [
        "+1 787",
        "+1 939"
    ],
    "iso2": "PR",
    "name": "Puerto Rico"
  },
  "PS": {
    "codes": [
        "+970"
    ],
    "iso2": "PS",
    "name": "Palestinian Territory, Occupied"
  },
  "PT": {
    "codes": [
        "+351"
    ],
    "iso2": "PT",
    "name": "Portugal"
  },
  "PW": {
    "codes": [
        "+680"
    ],
    "iso2": "PW",
    "name": "Palau"
  },
  "PY": {
    "codes": [
        "+595"
    ],
    "iso2": "PY",
    "name": "Paraguay"
  },
  "QA": {
    "codes": [
        "+974"
    ],
    "iso2": "QA",
    "name": "Qatar"
  },
  "RE": {
    "codes": [
        "+262"
    ],
    "iso2": "RE",
    "name": "Reunion"
  },
  "RO": {
    "codes": [
        "+40"
    ],
    "iso2": "RO",
    "name": "Romania"
  },
  "RS": {
    "codes": [
        "+381"
    ],
    "iso2": "RS",
    "name": "Serbia"
  },
  "RU": {
    "codes": [
        "+7",
        "+7 3",
        "+7 4",
        "+7 8"
    ],
    "iso2": "RU",
    "name": "Russian Federation"
  },
  "RW": {
    "codes": [
        "+250"
    ],
    "iso2": "RW",
    "name": "Rwanda"
  },
  "SA": {
    "codes": [
        "+966"
    ],
    "iso2": "SA",
    "name": "Saudi Arabia"
  },
  "SB": {
    "codes": [
        "+677"
    ],
    "iso2": "SB",
    "name": "Solomon Islands"
  },
  "SC": {
    "codes": [
        "+248"
    ],
    "iso2": "SC",
    "name": "Seychelles"
  },
  "SD": {
    "codes": [
        "+249"
    ],
    "iso2": "SD",
    "name": "Sudan"
  },
  "SE": {
    "codes": [
        "+46"
    ],
    "iso2": "SE",
    "name": "Sweden"
  },
  "SG": {
    "codes": [
        "+65"
    ],
    "iso2": "SG",
    "name": "Singapore"
  },
  "SH": {
    "codes": [
        "+290"
    ],
    "iso2": "SH",
    "name": "Saint Helena, Ascension And Tristan Da Cunha"
  },
  "SI": {
    "codes": [
        "+386"
    ],
    "iso2": "SI",
    "name": "Slovenia"
  },
  "SJ": {
    "codes": [
        "+47"
    ],
    "iso2": "SJ",
    "name": "Svalbard And Jan Mayen"
  },
  "SK": {
    "codes": [
        "+421"
    ],
    "iso2": "SK",
    "name": "Slovakia"
  },
  "SL": {
    "codes": [
        "+232"
    ],
    "iso2": "SL",
    "name": "Sierra Leone"
  },
  "SM": {
    "codes": [
        "+378"
    ],
    "iso2": "SM",
    "name": "San Marino"
  },
  "SN": {
    "codes": [
        "+221"
    ],
    "iso2": "SN",
    "name": "Senegal"
  },
  "SO": {
    "codes": [
        "+252"
    ],
    "iso2": "SO",
    "name": "Somalia"
  },
  "SR": {
    "codes": [
        "+597"
    ],
    "iso2": "SR",
    "name": "Suriname"
  },
  "ST": {
    "codes": [
        "+239"
    ],
    "iso2": "ST",
    "name": "Sao Tome And Principe"
  },
  "SU": {
    "codes": [],
    "iso2": "SU",
    "name": "USSR"
  },
  "SV": {
    "codes": [
        "+503"
    ],
    "iso2": "SV",
    "name": "El Salvador"
  },
  "SX": {
    "codes": [
        "+1 721"
    ],
    "iso2": "SX",
    "name": "Sint Maarten"
  },
  "SY": {
    "codes": [
        "+963"
    ],
    "iso2": "SY",
    "name": "Syrian Arab Republic"
  },
  "SZ": {
    "codes": [
        "+268"
    ],
    "iso2": "SZ",
    "name": "Swaziland"
  },
  "TA": {
    "codes": [
        "+290"
    ],
    "iso2": "TA",
    "name": "Tristan de Cunha"
  },
  "TC": {
    "codes": [
        "+1 649"
    ],
    "iso2": "TC",
    "name": "Turks And Caicos Islands"
  },
  "TD": {
    "codes": [
        "+235"
    ],
    "iso2": "TD",
    "name": "Chad"
  },
  "TF": {
    "codes": [],
    "iso2": "TF",
    "name": "French Southern Territories"
  },
  "TG": {
    "codes": [
        "+228"
    ],
    "iso2": "TG",
    "name": "Togo"
  },
  "TH": {
    "codes": [
        "+66"
    ],
    "iso2": "TH",
    "name": "Thailand"
  },
  "TJ": {
    "codes": [
        "+992"
    ],
    "iso2": "TJ",
    "name": "Tajikistan"
  },
  "TK": {
    "codes": [
        "+690"
    ],
    "iso2": "TK",
    "name": "Tokelau"
  },
  "TL": {
    "codes": [
        "+670"
    ],
    "iso2": "TL",
    "name": "East Timor"
  },
  "TM": {
    "codes": [
        "+993"
    ],
    "iso2": "TM",
    "name": "Turkmenistan"
  },
  "TN": {
    "codes": [
        "+216"
    ],
    "iso2": "TN",
    "name": "Tunisia"
  },
  "TO": {
    "codes": [
        "+676"
    ],
    "iso2": "TO",
    "name": "Tonga"
  },
  "TR": {
    "codes": [
        "+90"
    ],
    "iso2": "TR",
    "name": "Turkey"
  },
  "TT": {
    "codes": [
        "+1 868"
    ],
    "iso2": "TT",
    "name": "Trinidad And Tobago"
  },
  "TV": {
    "codes": [
        "+688"
    ],
    "iso2": "TV",
    "name": "Tuvalu"
  },
  "TW": {
    "codes": [
        "+886"
    ],
    "iso2": "TW",
    "name": "Taiwan, Province Of China"
  },
  "TZ": {
    "codes": [
        "+255"
    ],
    "iso2": "TZ",
    "name": "Tanzania, United Republic Of"
  },
  "UA": {
    "codes": [
        "+380"
    ],
    "iso2": "UA",
    "name": "Ukraine"
  },
  "UG": {
    "codes": [
        "+256"
    ],
    "iso2": "UG",
    "name": "Uganda"
  },
  "UK": {
    "codes": [],
    "iso2": "UK",
    "name": "United Kingdom"
  },
  "UM": {
    "codes": [],
    "iso2": "UM",
    "name": "United States Minor Outlying Islands"
  },
  "US": {
    "codes": [
        "+1"
    ],
    "iso2": "US",
    "name": "United States"
  },
  "UY": {
    "codes": [
        "+598"
    ],
    "iso2": "UY",
    "name": "Uruguay"
  },
  "UZ": {
    "codes": [
        "+998"
    ],
    "iso2": "UZ",
    "name": "Uzbekistan"
  },
  "VA": {
    "codes": [
        "+379",
        "+39"
    ],
    "iso2": "VA",
    "name": "Vatican City State"
  },
  "VC": {
    "codes": [
        "+1 784"
    ],
    "iso2": "VC",
    "name": "Saint Vincent And The Grenadines"
  },
  "VE": {
    "codes": [
        "+58"
    ],
    "iso2": "VE",
    "name": "Venezuela, Bolivarian Republic Of"
  },
  "VG": {
    "codes": [
        "+1 284"
    ],
    "iso2": "VG",
    "name": "Virgin Islands (British)"
  },
  "VI": {
    "codes": [
        "+1 340"
    ],
    "iso2": "VI",
    "name": "Virgin Islands (US)"
  },
  "VN": {
    "codes": [
        "+84"
    ],
    "iso2": "VN",
    "name": "Viet Nam"
  },
  "VU": {
    "codes": [
        "+678"
    ],
    "iso2": "VU",
    "name": "Vanuatu"
  },
  "WF": {
    "codes": [
        "+681"
    ],
    "iso2": "WF",
    "name": "Wallis And Futuna"
  },
  "WS": {
    "codes": [
        "+685"
    ],
    "iso2": "WS",
    "name": "Samoa"
  },
  "YE": {
    "codes": [
        "+967"
    ],
    "iso2": "YE",
    "name": "Yemen"
  },
  "YT": {
    "codes": [
        "+262"
    ],
    "iso2": "YT",
    "name": "Mayotte"
  },
  "ZA": {
    "codes": [
        "+27"
    ],
    "iso2": "ZA",
    "name": "South Africa"
  },
  "ZM": {
    "codes": [
        "+260"
    ],
    "iso2": "ZM",
    "name": "Zambia"
  },
  "ZW": {
    "codes": [
        "+263"
    ],
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

