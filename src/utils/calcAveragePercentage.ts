import { readDataBase } from "./readDatabase";

export function calcAveragePercentage(id: number, year: number) {
  const coverage = readDataBase();
  let somePercents = 0; 
  
  const stateCoverage = coverage.filter((item) => item.id_estado === id && item.ano === year)

  const coverageTotal = stateCoverage.length;
  
  for(var i = 0; i < stateCoverage.length; i++) {
    somePercents += stateCoverage[i].cob_vac_bcg;
  }

  const stateAveragePercentage = somePercents / coverageTotal;

  return (Math.round(stateAveragePercentage * 100) / 100).toFixed(2).replace(".", ",")
}

