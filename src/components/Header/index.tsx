import { Container } from "./styles";
import { SelectInput } from "../SelectInput";

export function Header () {
  return (
    <Container>
      <div className="search-box">
        <span>
          Informe o estado e ano <br />
          ue deseja analisar
        </span>

        <div className="search-inputs">
          <SelectInput label="selecione um estado" placeholder="Rio de Janeiro - RJ"/>
          <SelectInput label="selecione o ano" placeholder="2019"/>
        </div>
      </div>
    </Container>
  )
}