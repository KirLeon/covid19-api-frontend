export module Regions {

  const NORTH_AMERICA_COUNTRIES = ["Antigua and Barbuda", "Bahamas", "Barbados", "Belize", "Canada", "Costa Rica", "Cuba",
    "Dominica", "Dominican Republic", "El Salvador", "Grenada", "Guatemala", "Haiti", "Honduras", "Jamaica", "Mexico",
    "Nicaragua", "Panama", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and Grenadines", "Trinidad and Tobago",
    "United States of America"];
  const EUROPEAN_COUNTRIES = ["Albania", "Andorra", "Austria", "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria",
    "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece",
    "Holy See (Vatican City State)", "Hungary", "Iceland", "Ireland", "Italy", "Latvia", "Liechtenstein", "Lithuania",
    "Luxembourg", "Malta", "Moldova", "Monaco", "Montenegro", "Netherlands", "North Macedonia", "Norway", "Poland",
    "Portugal", "Romania", "Russian Federation", "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden",
    "Switzerland", "Ukraine", "United Kingdom"];
  const ASIAN_COUNTRIES = ["Afghanistan", "Armenia", "Azerbaijan", "Bahrain", "Bangladesh", "Bhutan", "Brunei Darussalam",
    "Cambodia", "China", "Cyprus", "Georgia", "India", "Indonesia", "Iran, Islamic Republic of", "Iraq", "Israel", "Japan",
    "Jordan", "Kazakhstan", "Korea (North)", "Korea (South)", "Kuwait", "Kyrgyzstan", "Lao PDR", "Lebanon", "Malaysia",
    "Maldives", "Mongolia", "Myanmar", "Nepal", "Oman", "Pakistan", "Palestinian Territory", "Philippines", "Qatar",
    "Saudi Arabia", "Singapore", "Sri Lanka", "Syrian Arab Republic (Syria)", "Taiwan, Republic of China", "Tajikistan",
    "Thailand", "Timor-Leste", "Turkey", "Turkmenistan", "United Arab Emirates", "Uzbekistan", "Viet Nam", "Yemen"];
  const AFRICAN_COUNTRIES = ["Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cabo Verde", "Cameroon",
    "Central African Republic", "Chad", "Comoros", "Congo (Brazzaville)", "Congo (Kinshasa)", "C?te d'Ivoire", "Djibouti",
    "Egypt", "Equatorial Guinea", "Eritrea", "Eswatini", "Ethiopia", "Gabon", "Gambia", "Ghana", "Guinea", "Guinea-Bissau",
    "Kenya", "Lesotho", "Liberia", "Libya", "Madagascar", "Malawi", "Mali", "Mauritania", "Mauritius", "Morocco", "Mozambique",
    "Namibia", "Niger", "Nigeria", "Rwanda", "Sao Tome and Principe", "Senegal", "Seychelles", "Sierra Leone", "Somalia",
    "South Africa", "South Sudan", "Sudan", "Tanzania, United Republic of", "Togo", "Tunisia", "Uganda", "Zambia", "Zimbabwe"];
  const SOUTH_AMERICA_COUNTRIES = ["Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Ecuador", "Guyana", "Paraguay",
    "Peru", "Suriname", "Uruguay", "Venezuela (Bolivarian Republic)"];
  const OTHER_WORLD_COUNTRIES = ["World", "Antarctica", "Australia", "New Zealand", "French Southern Territories", "Heard and Mcdonald Islands"];

  export function getCountriesByContinent(continent: string): string[] {
    switch (continent) {
      case "North America":
        return NORTH_AMERICA_COUNTRIES
      case "South America":
        return SOUTH_AMERICA_COUNTRIES
      case "Europe":
        return EUROPEAN_COUNTRIES
      case "Asia":
        return ASIAN_COUNTRIES
      case "Africa":
        return AFRICAN_COUNTRIES
      case "Other World":
        return OTHER_WORLD_COUNTRIES
      default:
        return []
    }
  }
}
