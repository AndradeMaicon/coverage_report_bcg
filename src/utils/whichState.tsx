import { ReactComponent as RondoniaSvg } from '../assets/rondonia.svg';
import { ReactComponent as AcreSvg } from '../assets/acre.svg';
import { ReactComponent as AmazonasSvg } from '../assets/amazonas.svg';
import { ReactComponent as RoraimaSvg } from '../assets/roraima.svg';
import { ReactComponent as ParaSvg } from '../assets/para.svg';
import { ReactComponent as AmapaSvg } from '../assets/amapa.svg';
import { ReactComponent as TocantinsSvg } from '../assets/tocantins.svg';
import { ReactComponent as MaranhaoSvg } from '../assets/maranhao.svg';
import { ReactComponent as PiauiSvg } from '../assets/piaui.svg';
import { ReactComponent as CearaSvg } from '../assets/ceara.svg';
import { ReactComponent as RioGrandeDoNorteSvg } from '../assets/rioGrandeDoNorte.svg';
import { ReactComponent as ParaibaSvg } from '../assets/paraiba.svg';
import { ReactComponent as PernambucoSvg } from '../assets/pernambuco.svg';
import { ReactComponent as AlagoasSvg } from '../assets/alagoas.svg';
import { ReactComponent as SergipeSvg } from '../assets/sergipe.svg';
import { ReactComponent as BahiaSvg } from '../assets/bahia.svg';
import { ReactComponent as MinasGeraisSvg } from '../assets/minasGerais.svg';
import { ReactComponent as EspiritoSantoSvg } from '../assets/espiritoSanto.svg';
import { ReactComponent as RioDeJaneiroSvg } from '../assets/rioDeJaneiro.svg';
import { ReactComponent as SaoPauloSvg } from '../assets/saoPaulo.svg';
import { ReactComponent as ParanaSvg } from '../assets/parana.svg';
import { ReactComponent as SantaCatarinaSvg } from '../assets/santaCatarina.svg';
import { ReactComponent as RioGrandeDoSulSvg } from '../assets/rioGrandeDoSul.svg';
import { ReactComponent as MatoGrossoDoSulSvg } from '../assets/matoGrossoDoSul.svg';
import { ReactComponent as MatoGrossoSvg } from '../assets/matoGrosso.svg';
import { ReactComponent as GoiasSvg } from '../assets/goias.svg';
import { ReactComponent as DistritoFederalSvg } from '../assets/distritoFederal.svg';


export function whichState(id: number) {
  switch (true) {
    case (+id === 11):
        return <RondoniaSvg />
    case (+id === 12):
        return <AcreSvg />
    case (+id === 13):
        return <AmazonasSvg />
    case (+id === 14):
        return <RoraimaSvg />
    case (+id === 15):
        return <ParaSvg />
    case (+id === 16):
        return <AmapaSvg />
    case (+id === 17):
        return <TocantinsSvg />
    case (+id === 21):
        return <MaranhaoSvg />
    case (+id === 22):
        return <PiauiSvg />
    case (+id === 23):
        return <CearaSvg />
    case (+id === 24):
        return <RioGrandeDoNorteSvg />
    case (+id === 25):
        return <ParaibaSvg />
    case (+id === 26):
        return <PernambucoSvg />
    case (+id === 27):
        return <AlagoasSvg />
    case (+id === 28):
        return <SergipeSvg />
    case (+id === 29):
        return <BahiaSvg />
    case (+id === 31):
        return <MinasGeraisSvg />
    case (+id === 32):
        return <EspiritoSantoSvg />
    case (+id === 33):
        return <RioDeJaneiroSvg />
    case (+id === 35):
        return <SaoPauloSvg />
    case (+id === 41):
        return <ParanaSvg />
    case (+id === 42):
        return <SantaCatarinaSvg />
    case (+id === 43):
        return <RioGrandeDoSulSvg />
    case (+id === 50):
        return <MatoGrossoDoSulSvg />
    case (+id === 51):
        return <MatoGrossoSvg />
    case (+id === 52):
        return <GoiasSvg />
    case (+id === 53):
        return <DistritoFederalSvg />
    default:
      break;
  }
}

/* 
  [X] -> 11 - Rondônia/RO
  [X] -> 12 - Acre/AC
  [X] -> 13 - Amazonas/AM
  [X] -> 14 - Roraima/RR
  [X] -> 15 - Pará/PA
  [X] -> 16 - Amapá/AP
  [X] -> 17 - Tocantins/TO
  [X] -> 21 - Maranhão/MA
  [X] -> 22 - Piauí/PI
  [X] -> 23 - Ceará/CE
  [X] -> 24 - Rio Grande do Norte/RN
  [X] -> 25 - Paraíba/PB
  [X] -> 26 - Pernambuco/PE
  [X] -> 27 - Alagoas/AL
  [x] -> 28 - Sergipe/SE
  [X] -> 29 - Bahia/BA
  [X] -> 31 - Minas Gerais/MG
  [X] -> 32 - Espírito Santo/ES
  [X] -> 33 - Rio de Janeiro/RJ
  [X] -> 35 - São Paulo/SP
  [X] -> 41 - Paraná/PR
  [X] -> 42 - Santa Catarina/SC
  [X] -> 43 - Rio Grande do Sul/RS
  [X] -> 50 - Mato Grosso do Sul/MS
  [X] -> 51 - Mato Grosso/MT
  [X] -> 52 - Goiás/GO
  [] -> 53 - Distrito Federal/DF
*/