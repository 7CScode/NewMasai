const countries = [
  {
    name: "India",
    region: "Asia",
    population: 1380004385,
    area: 3287263,
    capital: "New Delhi",
  },
  {
    name: "China",
    region: "Asia",
    population: 1444216107,
    area: 9596961,
    capital: "Beijing",
  },
  {
    name: "USA",
    region: "Americas",
    population: 331002651,
    area: 9372610,
    capital: "Washington, D.C.",
  },
  {
    name: "Brazil",
    region: "Americas",
    population: 212559417,
    area: 8515767,
    capital: "Brasília",
  },
  {
    name: "Russia",
    region: "Europe",
    population: 145934462,
    area: 17098242,
    capital: "Moscow",
  },
  {
    name: "Bangladesh",
    region: "Asia",
    population: 164689383,
    area: 147570,
    capital: "Dhaka",
  },
  {
    name: "Japan",
    region: "Asia",
    population: 126476461,
    area: 377975,
    capital: "Tokyo",
  },
  {
    name: "Nigeria",
    region: "Africa",
    population: 206139589,
    area: 923768,
    capital: "Abuja",
  },
  {
    name: "Pakistan",
    region: "Asia",
    population: 220892340,
    area: 881912,
    capital: "Islamabad",
  },
  {
    name: "Germany",
    region: "Europe",
    population: 83783942,
    area: 357114,
    capital: "Berlin",
  },
  {
    name: "UK",
    region: "Europe",
    population: 67886011,
    area: 243610,
    capital: "London",
  },
  {
    name: "France",
    region: "Europe",
    population: 65273511,
    area: 551695,
    capital: "Paris",
  },
  {
    name: "Italy",
    region: "Europe",
    population: 60461826,
    area: 301340,
    capital: "Rome",
  },
  {
    name: "South Africa",
    region: "Africa",
    population: 59308690,
    area: 1221037,
    capital: "Pretoria",
  },
  {
    name: "Egypt",
    region: "Africa",
    population: 102334404,
    area: 1002450,
    capital: "Cairo",
  },
  {
    name: "Mexico",
    region: "Americas",
    population: 128932753,
    area: 1964375,
    capital: "Mexico City",
  },
  {
    name: "Vietnam",
    region: "Asia",
    population: 97338579,
    area: 331212,
    capital: "Hanoi",
  },
  {
    name: "Philippines",
    region: "Asia",
    population: 109581078,
    area: 300000,
    capital: "Manila",
  },
  {
    name: "Turkey",
    region: "Asia",
    population: 84339067,
    area: 783562,
    capital: "Ankara",
  },
  {
    name: "Iran",
    region: "Asia",
    population: 83992949,
    area: 1648195,
    capital: "Tehran",
  },
  {
    name: "Spain",
    region: "Europe",
    population: 46754778,
    area: 505992,
    capital: "Madrid",
  },
  {
    name: "Thailand",
    region: "Asia",
    population: 69799978,
    area: 513120,
    capital: "Bangkok",
  },
  {
    name: "Argentina",
    region: "Americas",
    population: 45195774,
    area: 2780400,
    capital: "Buenos Aires",
  },
  {
    name: "Colombia",
    region: "Americas",
    population: 50882891,
    area: 1141748,
    capital: "Bogotá",
  },
  {
    name: "Canada",
    region: "Americas",
    population: 37742154,
    area: 9984670,
    capital: "Ottawa",
  },
];

function extractStats(countryList) {
  const records = [...countryList];

  const countOfCountries = countryList.length;

  const popAverage = Math.round(
    countryList.reduce((total, item) => total + item.population, 0) /
      countOfCountries
  );

  const topFivePopulated = [...records]
    .sort((a, b) => b.population - a.population)
    .slice(0, 5)
    .map((entry) => entry.name);

  const popByRegion = countryList.reduce((summary, country) => {
    summary[country.region] =
      (summary[country.region] || 0) + country.population;
    return summary;
  }, {});

  const densityTop = countryList
    .map((c) => ({
      name: c.name,
      density: Math.round(c.population / c.area),
    }))
    .sort((a, b) => b.density - a.density)
    .slice(0, 3);

  const smallestByArea = [...countryList]
    .sort((a, b) => a.area - b.area)
    .slice(0, 5)
    .map((c) => c.name);

  console.log("Total number of countries:", countOfCountries);
  console.log("Average population:", popAverage);
  console.log("Top 5 most populated countries:", topFivePopulated);
  console.log("Population grouped by region:", popByRegion);
  console.log("Top 3 countries by population density:", densityTop);
  console.log("5 smallest countries by area:", smallestByArea);
}
extractStats(countries);
