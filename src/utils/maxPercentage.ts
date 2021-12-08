import { readDataBase } from "./readDatabase";

export function maxPercentage(id: number, year: number) {
  const coverage = readDataBase();
  
  const stateCoverage = coverage.filter((item) => item.id_estado === id && item.ano === year)

  const percentages = stateCoverage.map((item) => (item.cob_vac_bcg))
  
  const maxValue = Math.max(...percentages)
  
  const numToRound = maxValue > 1000 ? maxValue / 1000 : maxValue

  return +(Math.round(numToRound * 100) / 100).toFixed(2)
}

