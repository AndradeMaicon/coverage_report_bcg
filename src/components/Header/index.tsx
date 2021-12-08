import { FiSearch } from "react-icons/fi";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from 'yup';

import { SelectInput } from "../SelectInput";
import { YearSelect } from "../YearSelect";

import { Container } from "./styles";

enum EStates {
  rondonia_RO = 11,
  acre_AC = 12,
  amazonas_AM = 13,
  roraima_RR = 14,
  rara_PA = 15,
  amapa_AP = 16,
  tocantins_TO = 17,
  maranhao_MA = 21,
  piaui_PI = 22,
  ceara_CE = 23,
  rioGrandeDoNorte_RN = 24,
  paraiba_PB = 25,
  pernambuco_PE = 26,
  alagoas_AL = 27,
  sergipe_SE = 28,
  bahia_BA = 29,
  minasGerais_MG = 31,
  espiritoSanto_ES = 32,
  rioDeJaneiro_RJ = 33,
  saoPaulo_SP = 35,
  parana_PR = 41,
  santaCatarina_SC = 42,
  rioGrandeDoSul_RS = 43,
  matoGrossoDoSul_MS = 50,
  matoGrosso_MT = 51,
  goiás_GO = 52,
  distritoFederal_DF = 53,
}

export interface IFormInput {
  state: EStates;
  year: String;
}

export function Header () {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    try {
      const schema = yup.object().shape({
        state: yup.number().required("Por favor selecione um estado")
      })

      schema.validate(data)

      if (data.year === "") {
        data.year = "2019"
      }

      fetch(`https://servicodados.ibge.gov.br/api/v3/malhas/estados/${11}?formato=image/svg+xml&qualidade=intermediaria&intrarregiao=municipio`)
      .then(resp => console.log(resp))

    } catch (error) {
      console.log(error)
    }
  };

  return (
    <Container>
      <div className="search-box">
        <span>
          Informe o estado e ano <br />
          que deseja analisar
        </span>

        <form className="search-inputs" onSubmit={handleSubmit(onSubmit)}>
          <SelectInput label="selecione um estado" register={register}/>
          <YearSelect label="selecione o ano" register={register}/>
          <button id="form-submit-button" type="submit">
            <FiSearch />
          </button>
        </form>
      </div>
    </Container>
  )
}