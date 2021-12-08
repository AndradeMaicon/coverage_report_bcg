import { readDataBase } from "./readDatabase";

interface ICityInfo {
  id_munic: number;
  nomemun: string;
  ano: number;
  cob_vac_bcg: number
}


export function cityList(id: number, year: number) {
  let cityInfo: ICityInfo[] = [];

  const coverage = readDataBase();
  
  const cities = coverage.filter((item) => item.id_estado === id && item.ano === year)

  cities.forEach(city => {
    cityInfo.push({
      id_munic: city.id_munic,
      nomemun: city.nomemun,
      ano: city.ano,
      cob_vac_bcg: city.cob_vac_bcg,
    })
  })

  return cityInfo;
}