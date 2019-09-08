'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('currencies', [
      {country:"AFGHANISTAN",name:"Afghani",code:"AFN",number:"971",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"ALBANIA",name:"Lek",code:"ALL",number:"008",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"ALGERIA",name:"Algerian Dinar",code:"DZD",number:"012",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"AMERICAN SAMOA",name:"US Dollar",code:"USD",number:"840",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"ANDORRA",name:"Euro",code:"EUR",number:"978",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"ANGOLA",name:"Kwanza",code:"AOA",number:"973",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"ANGUILLA",name:"East Caribbean Dollar",code:"XCD",number:"951",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"ANTARCTICA",name:"No universal currency",code:"",number:"",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"ANTIGUA AND BARBUDA",name:"East Caribbean Dollar",code:"XCD",number:"951",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"ARGENTINA",name:"Argentine Peso",code:"ARS",number:"032",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"ARMENIA",name:"Armenian Dram",code:"AMD",number:"051",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"ARUBA",name:"Aruban Florin",code:"AWG",number:"533",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"AUSTRALIA",name:"Australian Dollar",code:"AUD",number:"036",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"AUSTRIA",name:"Euro",code:"EUR",number:"978",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"AZERBAIJAN",name:"Azerbaijanian Manat",code:"AZN",number:"944",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"BAHAMAS (THE)",name:"Bahamian Dollar",code:"BSD",number:"044",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"BAHRAIN",name:"Bahraini Dinar",code:"BHD",number:"048",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"BANGLADESH",name:"Taka",code:"BDT",number:"050",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"BARBADOS",name:"Barbados Dollar",code:"BBD",number:"052",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"BELARUS",name:"Belarussian Ruble",code:"BYN",number:"933",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"BELGIUM",name:"Euro",code:"EUR",number:"978",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"BELIZE",name:"Belize Dollar",code:"BZD",number:"084",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"BENIN",name:"CFA Franc BCEAO",code:"XOF",number:"952",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"BERMUDA",name:"Bermudian Dollar",code:"BMD",number:"060",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"BHUTAN",name:"Ngultrum",code:"BTN",number:"064",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"BHUTAN",name:"Indian Rupee",code:"INR",number:"356",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"BOLIVIA (PLURINATIONAL STATE OF)",name:"Boliviano",code:"BOB",number:"068",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"BOLIVIA (PLURINATIONAL STATE OF)",name:"Mvdol",code:"BOV",number:"984",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"BONAIRE, SINT EUSTATIUS AND SABA",name:"US Dollar",code:"USD",number:"840",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"BOSNIA AND HERZEGOVINA",name:"Convertible Mark",code:"BAM",number:"977",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"BOTSWANA",name:"Pula",code:"BWP",number:"072",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"BOUVET ISLAND",name:"Norwegian Krone",code:"NOK",number:"578",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"BRAZIL",name:"Brazilian Real",code:"BRL",number:"986",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"BRITISH INDIAN OCEAN TERRITORY (THE)",name:"US Dollar",code:"USD",number:"840",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"BRUNEI DARUSSALAM",name:"Brunei Dollar",code:"BND",number:"096",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"BULGARIA",name:"Bulgarian Lev",code:"BGN",number:"975",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"BURKINA FASO",name:"CFA Franc BCEAO",code:"XOF",number:"952",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"BURUNDI",name:"Burundi Franc",code:"BIF",number:"108",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"CABO VERDE",name:"Cabo Verde Escudo",code:"CVE",number:"132",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"CAMBODIA",name:"Riel",code:"KHR",number:"116",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"CAMEROON",name:"CFA Franc BEAC",code:"XAF",number:"950",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"CANADA",name:"Canadian Dollar",code:"CAD",number:"124",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"CAYMAN ISLANDS (THE)",name:"Cayman Islands Dollar",code:"KYD",number:"136",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"CENTRAL AFRICAN REPUBLIC (THE)",name:"CFA Franc BEAC",code:"XAF",number:"950",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"CHAD",name:"CFA Franc BEAC",code:"XAF",number:"950",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"CHILE",name:"Unidad de Fomento",code:"CLF",number:"990",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"CHILE",name:"Chilean Peso",code:"CLP",number:"152",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"CHINA",name:"Yuan Renminbi",code:"CNY",number:"156",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"CHRISTMAS ISLAND",name:"Australian Dollar",code:"AUD",number:"036",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"COCOS (KEELING) ISLANDS (THE)",name:"Australian Dollar",code:"AUD",number:"036",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"COLOMBIA",name:"Colombian Peso",code:"COP",number:"170",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"COLOMBIA",name:"Unidad de Valor Real",code:"COU",number:"970",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"COMOROS (THE)",name:"Comoro Franc",code:"KMF",number:"174",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"CONGO (THE DEMOCRATIC REPUBLIC OF THE)",name:"Congolese Franc",code:"CDF",number:"976",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"CONGO (THE)",name:"CFA Franc BEAC",code:"XAF",number:"950",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"COOK ISLANDS (THE)",name:"New Zealand Dollar",code:"NZD",number:"554",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"COSTA RICA",name:"Costa Rican Colon",code:"CRC",number:"188",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"CROATIA",name:"Kuna",code:"HRK",number:"191",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"CUBA",name:"Peso Convertible",code:"CUC",number:"931",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"CUBA",name:"Cuban Peso",code:"CUP",number:"192",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"CURAÇAO",name:"Netherlands Antillean Guilder",code:"ANG",number:"532",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"CYPRUS",name:"Euro",code:"EUR",number:"978",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"CZECH REPUBLIC (THE)",name:"Czech Koruna",code:"CZK",number:"203",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"CÔTE D'IVOIRE",name:"CFA Franc BCEAO",code:"XOF",number:"952",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"DENMARK",name:"Danish Krone",code:"DKK",number:"208",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"DJIBOUTI",name:"Djibouti Franc",code:"DJF",number:"262",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"DOMINICA",name:"East Caribbean Dollar",code:"XCD",number:"951",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"DOMINICAN REPUBLIC (THE)",name:"Dominican Peso",code:"DOP",number:"214",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"ECUADOR",name:"US Dollar",code:"USD",number:"840",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"EGYPT",name:"Egyptian Pound",code:"EGP",number:"818",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"EL SALVADOR",name:"El Salvador Colon",code:"SVC",number:"222",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"EL SALVADOR",name:"US Dollar",code:"USD",number:"840",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"EQUATORIAL GUINEA",name:"CFA Franc BEAC",code:"XAF",number:"950",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"ERITREA",name:"Nakfa",code:"ERN",number:"232",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"ESTONIA",name:"Euro",code:"EUR",number:"978",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"ETHIOPIA",name:"Ethiopian Birr",code:"ETB",number:"230",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"EUROPEAN UNION",name:"Euro",code:"EUR",number:"978",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"FALKLAND ISLANDS (THE) [MALVINAS]",name:"Falkland Islands Pound",code:"FKP",number:"238",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"FAROE ISLANDS (THE)",name:"Danish Krone",code:"DKK",number:"208",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"FIJI",name:"Fiji Dollar",code:"FJD",number:"242",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"FINLAND",name:"Euro",code:"EUR",number:"978",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"FRANCE",name:"Euro",code:"EUR",number:"978",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"FRENCH GUIANA",name:"Euro",code:"EUR",number:"978",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"FRENCH POLYNESIA",name:"CFP Franc",code:"XPF",number:"953",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"FRENCH SOUTHERN TERRITORIES (THE)",name:"Euro",code:"EUR",number:"978",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"GABON",name:"CFA Franc BEAC",code:"XAF",number:"950",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"GAMBIA (THE)",name:"Dalasi",code:"GMD",number:"270",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"GEORGIA",name:"Lari",code:"GEL",number:"981",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"GERMANY",name:"Euro",code:"EUR",number:"978",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"GHANA",name:"Ghana Cedi",code:"GHS",number:"936",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"GIBRALTAR",name:"Gibraltar Pound",code:"GIP",number:"292",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"GREECE",name:"Euro",code:"EUR",number:"978",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"GREENLAND",name:"Danish Krone",code:"DKK",number:"208",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"GRENADA",name:"East Caribbean Dollar",code:"XCD",number:"951",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"GUADELOUPE",name:"Euro",code:"EUR",number:"978",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"GUAM",name:"US Dollar",code:"USD",number:"840",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"GUATEMALA",name:"Quetzal",code:"GTQ",number:"320",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"GUERNSEY",name:"Pound Sterling",code:"GBP",number:"826",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"GUINEA",name:"Guinea Franc",code:"GNF",number:"324",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"GUINEA-BISSAU",name:"CFA Franc BCEAO",code:"XOF",number:"952",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"GUYANA",name:"Guyana Dollar",code:"GYD",number:"328",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"HAITI",name:"Gourde",code:"HTG",number:"332",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"HAITI",name:"US Dollar",code:"USD",number:"840",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"HEARD ISLAND AND McDONALD ISLANDS",name:"Australian Dollar",code:"AUD",number:"036",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"HOLY SEE (THE)",name:"Euro",code:"EUR",number:"978",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"HONDURAS",name:"Lempira",code:"HNL",number:"340",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"HONG KONG",name:"Hong Kong Dollar",code:"HKD",number:"344",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"HUNGARY",name:"Forint",code:"HUF",number:"348",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"ICELAND",name:"Iceland Krona",code:"ISK",number:"352",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"INDIA",name:"Indian Rupee",code:"INR",number:"356",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"INDONESIA",name:"Rupiah",code:"IDR",number:"360",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"INTERNATIONAL MONETARY FUND (IMF) ",name:"SDR (Special Drawing Right)",code:"XDR",number:"960",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"IRAN (ISLAMIC REPUBLIC OF)",name:"Iranian Rial",code:"IRR",number:"364",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"IRAQ",name:"Iraqi Dinar",code:"IQD",number:"368",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"IRELAND",name:"Euro",code:"EUR",number:"978",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"ISLE OF MAN",name:"Pound Sterling",code:"GBP",number:"826",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"ISRAEL",name:"New Israeli Sheqel",code:"ILS",number:"376",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"ITALY",name:"Euro",code:"EUR",number:"978",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"JAMAICA",name:"Jamaican Dollar",code:"JMD",number:"388",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"JAPAN",name:"Yen",code:"JPY",number:"392",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"JERSEY",name:"Pound Sterling",code:"GBP",number:"826",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"JORDAN",name:"Jordanian Dinar",code:"JOD",number:"400",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"KAZAKHSTAN",name:"Tenge",code:"KZT",number:"398",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"KENYA",name:"Kenyan Shilling",code:"KES",number:"404",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"KIRIBATI",name:"Australian Dollar",code:"AUD",number:"036",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"KOREA (THE DEMOCRATIC PEOPLE’S REPUBLIC OF)",name:"North Korean Won",code:"KPW",number:"408",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"KOREA (THE REPUBLIC OF)",name:"Won",code:"KRW",number:"410",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"KUWAIT",name:"Kuwaiti Dinar",code:"KWD",number:"414",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"KYRGYZSTAN",name:"Som",code:"KGS",number:"417",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"LAO PEOPLE’S DEMOCRATIC REPUBLIC (THE)",name:"Kip",code:"LAK",number:"418",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"LATVIA",name:"Euro",code:"EUR",number:"978",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"LEBANON",name:"Lebanese Pound",code:"LBP",number:"422",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"LESOTHO",name:"Loti",code:"LSL",number:"426",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"LESOTHO",name:"Rand",code:"ZAR",number:"710",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"LIBERIA",name:"Liberian Dollar",code:"LRD",number:"430",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"LIBYA",name:"Libyan Dinar",code:"LYD",number:"434",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"LIECHTENSTEIN",name:"Swiss Franc",code:"CHF",number:"756",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"LITHUANIA",name:"Euro",code:"EUR",number:"978",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"LUXEMBOURG",name:"Euro",code:"EUR",number:"978",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"MACAO",name:"Pataca",code:"MOP",number:"446",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"MADAGASCAR",name:"Malagasy Ariary",code:"MGA",number:"969",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"MALAWI",name:"Kwacha",code:"MWK",number:"454",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"MALAYSIA",name:"Malaysian Ringgit",code:"MYR",number:"458",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"MALDIVES",name:"Rufiyaa",code:"MVR",number:"462",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"MALI",name:"CFA Franc BCEAO",code:"XOF",number:"952",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"MALTA",name:"Euro",code:"EUR",number:"978",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"MARSHALL ISLANDS (THE)",name:"US Dollar",code:"USD",number:"840",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"MARTINIQUE",name:"Euro",code:"EUR",number:"978",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"MAURITANIA",name:"Ouguiya",code:"MRU",number:"929",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"MAURITIUS",name:"Mauritius Rupee",code:"MUR",number:"480",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"MAYOTTE",name:"Euro",code:"EUR",number:"978",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"MEMBER COUNTRIES OF THE AFRICAN DEVELOPMENT BANK GROUP",name:"ADB Unit of Account",code:"XUA",number:"965",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"MEXICO",name:"Mexican Peso",code:"MXN",number:"484",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"MEXICO",name:"Mexican Unidad de Inversion (UDI)",code:"MXV",number:"979",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"MICRONESIA (FEDERATED STATES OF)",name:"US Dollar",code:"USD",number:"840",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"MOLDOVA (THE REPUBLIC OF)",name:"Moldovan Leu",code:"MDL",number:"498",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"MONACO",name:"Euro",code:"EUR",number:"978",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"MONGOLIA",name:"Tugrik",code:"MNT",number:"496",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"MONTENEGRO",name:"Euro",code:"EUR",number:"978",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"MONTSERRAT",name:"East Caribbean Dollar",code:"XCD",number:"951",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"MOROCCO",name:"Moroccan Dirham",code:"MAD",number:"504",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"MOZAMBIQUE",name:"Mozambique Metical",code:"MZN",number:"943",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"MYANMAR",name:"Kyat",code:"MMK",number:"104",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"NAMIBIA",name:"Namibia Dollar",code:"NAD",number:"516",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"NAMIBIA",name:"Rand",code:"ZAR",number:"710",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"NAURU",name:"Australian Dollar",code:"AUD",number:"036",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"NEPAL",name:"Nepalese Rupee",code:"NPR",number:"524",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"NETHERLANDS (THE)",name:"Euro",code:"EUR",number:"978",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"NEW CALEDONIA",name:"CFP Franc",code:"XPF",number:"953",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"NEW ZEALAND",name:"New Zealand Dollar",code:"NZD",number:"554",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"NICARAGUA",name:"Cordoba Oro",code:"NIO",number:"558",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"NIGER (THE)",name:"CFA Franc BCEAO",code:"XOF",number:"952",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"NIGERIA",name:"Naira",code:"NGN",number:"566",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"NIUE",name:"New Zealand Dollar",code:"NZD",number:"554",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"NORFOLK ISLAND",name:"Australian Dollar",code:"AUD",number:"036",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"NORTHERN MARIANA ISLANDS (THE)",name:"US Dollar",code:"USD",number:"840",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"NORWAY",name:"Norwegian Krone",code:"NOK",number:"578",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"OMAN",name:"Rial Omani",code:"OMR",number:"512",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"PAKISTAN",name:"Pakistan Rupee",code:"PKR",number:"586",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"PALAU",name:"US Dollar",code:"USD",number:"840",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"PALESTINE, STATE OF",name:"No universal currency",code:"",number:"",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"PANAMA",name:"Balboa",code:"PAB",number:"590",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"PANAMA",name:"US Dollar",code:"USD",number:"840",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"PAPUA NEW GUINEA",name:"Kina",code:"PGK",number:"598",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"PARAGUAY",name:"Guarani",code:"PYG",number:"600",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"PERU",name:"Nuevo Sol",code:"PEN",number:"604",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"PHILIPPINES (THE)",name:"Philippine Peso",code:"PHP",number:"608",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"PITCAIRN",name:"New Zealand Dollar",code:"NZD",number:"554",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"POLAND",name:"Zloty",code:"PLN",number:"985",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"PORTUGAL",name:"Euro",code:"EUR",number:"978",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"PUERTO RICO",name:"US Dollar",code:"USD",number:"840",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"QATAR",name:"Qatari Rial",code:"QAR",number:"634",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"REPUBLIC OF NORTH MACEDONIA",name:"Denar",code:"MKD",number:"807",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"ROMANIA",name:"Romanian Leu",code:"RON",number:"946",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"RUSSIAN FEDERATION (THE)",name:"Russian Ruble",code:"RUB",number:"643",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"RWANDA",name:"Rwanda Franc",code:"RWF",number:"646",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"RÉUNION",name:"Euro",code:"EUR",number:"978",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"SAINT BARTHÉLEMY",name:"Euro",code:"EUR",number:"978",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"SAINT HELENA, ASCENSION AND TRISTAN DA CUNHA",name:"Saint Helena Pound",code:"SHP",number:"654",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"SAINT KITTS AND NEVIS",name:"East Caribbean Dollar",code:"XCD",number:"951",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"SAINT LUCIA",name:"East Caribbean Dollar",code:"XCD",number:"951",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"SAINT MARTIN (FRENCH PART)",name:"Euro",code:"EUR",number:"978",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"SAINT PIERRE AND MIQUELON",name:"Euro",code:"EUR",number:"978",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"SAINT VINCENT AND THE GRENADINES",name:"East Caribbean Dollar",code:"XCD",number:"951",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"SAMOA",name:"Tala",code:"WST",number:"882",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"SAN MARINO",name:"Euro",code:"EUR",number:"978",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"SAO TOME AND PRINCIPE",name:"Dobra",code:"STN",number:"930",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"SAUDI ARABIA",name:"Saudi Riyal",code:"SAR",number:"682",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"SENEGAL",name:"CFA Franc BCEAO",code:"XOF",number:"952",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"SERBIA",name:"Serbian Dinar",code:"RSD",number:"941",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"SEYCHELLES",name:"Seychelles Rupee",code:"SCR",number:"690",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"SIERRA LEONE",name:"Leone",code:"SLL",number:"694",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"SINGAPORE",name:"Singapore Dollar",code:"SGD",number:"702",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"SINT MAARTEN (DUTCH PART)",name:"Netherlands Antillean Guilder",code:"ANG",number:"532",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"SISTEMA UNITARIO DE COMPENSACION REGIONAL DE PAGOS \"SUCRE\"",name:"Sucre",code:"XSU",number:"994",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"SLOVAKIA",name:"Euro",code:"EUR",number:"978",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"SLOVENIA",name:"Euro",code:"EUR",number:"978",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"SOLOMON ISLANDS",name:"Solomon Islands Dollar",code:"SBD",number:"090",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"SOMALIA",name:"Somali Shilling",code:"SOS",number:"706",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"SOUTH AFRICA",name:"Rand",code:"ZAR",number:"710",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS",name:"No universal currency",code:"",number:"",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"SOUTH SUDAN",name:"South Sudanese Pound",code:"SSP",number:"728",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"SPAIN",name:"Euro",code:"EUR",number:"978",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"SRI LANKA",name:"Sri Lanka Rupee",code:"LKR",number:"144",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"SUDAN (THE)",name:"Sudanese Pound",code:"SDG",number:"938",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"SURINAME",name:"Surinam Dollar",code:"SRD",number:"968",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"SVALBARD AND JAN MAYEN",name:"Norwegian Krone",code:"NOK",number:"578",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"SWAZILAND",name:"Lilangeni",code:"SZL",number:"748",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"SWEDEN",name:"Swedish Krona",code:"SEK",number:"752",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"SWITZERLAND",name:"WIR Euro",code:"CHE",number:"947",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"SWITZERLAND",name:"Swiss Franc",code:"CHF",number:"756",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"SWITZERLAND",name:"WIR Franc",code:"CHW",number:"948",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"SYRIAN ARAB REPUBLIC",name:"Syrian Pound",code:"SYP",number:"760",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"TAIWAN (PROVINCE OF CHINA)",name:"New Taiwan Dollar",code:"TWD",number:"901",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"TAJIKISTAN",name:"Somoni",code:"TJS",number:"972",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"TANZANIA, UNITED REPUBLIC OF",name:"Tanzanian Shilling",code:"TZS",number:"834",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"THAILAND",name:"Baht",code:"THB",number:"764",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"TIMOR-LESTE",name:"US Dollar",code:"USD",number:"840",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"TOGO",name:"CFA Franc BCEAO",code:"XOF",number:"952",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"TOKELAU",name:"New Zealand Dollar",code:"NZD",number:"554",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"TONGA",name:"Pa’anga",code:"TOP",number:"776",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"TRINIDAD AND TOBAGO",name:"Trinidad and Tobago Dollar",code:"TTD",number:"780",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"TUNISIA",name:"Tunisian Dinar",code:"TND",number:"788",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"TURKEY",name:"Turkish Lira",code:"TRY",number:"949",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"TURKMENISTAN",name:"Turkmenistan New Manat",code:"TMT",number:"934",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"TURKS AND CAICOS ISLANDS (THE)",name:"US Dollar",code:"USD",number:"840",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"TUVALU",name:"Australian Dollar",code:"AUD",number:"036",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"UGANDA",name:"Uganda Shilling",code:"UGX",number:"800",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"UKRAINE",name:"Hryvnia",code:"UAH",number:"980",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"UNITED ARAB EMIRATES (THE)",name:"UAE Dirham",code:"AED",number:"784",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"UNITED KINGDOM OF GREAT BRITAIN AND NORTHERN IRELAND (THE)",name:"Pound Sterling",code:"GBP",number:"826",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"UNITED STATES MINOR OUTLYING ISLANDS (THE)",name:"US Dollar",code:"USD",number:"840",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"UNITED STATES OF AMERICA (THE)",name:"US Dollar",code:"USD",number:"840",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"UNITED STATES OF AMERICA (THE)",name:"US Dollar (Next day)",code:"USN",number:"997",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"URUGUAY",name:"Uruguay Peso en Unidades Indexadas (URUIURUI)",code:"UYI",number:"940",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"URUGUAY",name:"Peso Uruguayo",code:"UYU",number:"858",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"UZBEKISTAN",name:"Uzbekistan Sum",code:"UZS",number:"860",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"VANUATU",name:"Vatu",code:"VUV",number:"548",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"VENEZUELA (BOLIVARIAN REPUBLIC OF)",name:"Bolivar",code:"VEF",number:"937",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"VIET NAM",name:"Dong",code:"VND",number:"704",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"VIRGIN ISLANDS (BRITISH)",name:"US Dollar",code:"USD",number:"840",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"VIRGIN ISLANDS (U.S.)",name:"US Dollar",code:"USD",number:"840",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"WALLIS AND FUTUNA",name:"CFP Franc",code:"XPF",number:"953",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"WESTERN SAHARA",name:"Moroccan Dirham",code:"MAD",number:"504",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"YEMEN",name:"Yemeni Rial",code:"YER",number:"886",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"ZAMBIA",name:"Zambian Kwacha",code:"ZMW",number:"967",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"ZIMBABWE",name:"Zimbabwe Dollar",code:"ZWL",number:"932",symbol:"",createdAt: new Date(),updatedAt: new Date()},
      {country:"ÅLAND ISLANDS",name:"Euro",code:"EUR",number:"978",symbol:"",createdAt: new Date(),updatedAt: new Date()},
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('currencies', null, {});
  }
};
