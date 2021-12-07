import { useEffect, useState } from 'react';

import {ReactComponent as BrazilSvg} from '../../assets/br.svg';
import { reportSummary } from '../../utils/reportSummary'; 

import {
  Container,
  Content,
  Title,
  SubTitle,
  ReportBox,
  Map,
} from './styles';

export function Home () {
  const [color, setColor] = useState("");

  useEffect(() => {
    let path = document.getElementById("11")
    path?.setAttribute("fill", "#FFF")
  }, [])

  return (
    <Container>
      <Content>
        <Title>
          Cobertura de <br/>
          vaniação BCG 
        </Title>
        <SubTitle>
          Percentual maxímo em uma cidade 
          atigindo por cada estado em 2019.
        </SubTitle>
        <ReportBox>
          {reportSummary.map(item => (
            <div className="report-item" key={item.id}>
              <p className="state-name">
                {item.stateName} 
                <span className="coverage-percentage">
                  {`${item.percentage.toString().replace(".",",")}%`}
                </span>
              </p>
            </div>
          ))}
        </ReportBox>
      </Content>
      <Map>
        <BrazilSvg />
      </Map>
    </Container>
  )
}