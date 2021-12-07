import { useEffect, useState } from 'react';

import { ReactComponent as BrazilSvg } from '../../assets/br.svg';
import { reportSummary } from '../../utils/reportSummary'; 
import { whichColor } from '../../utils/whichColor';

import {
  Container,
  Content,
  Title,
  SubTitle,
  ReportBox,
  Percentage,
  Map,
} from './styles';

export function Home () {
  useEffect(() => {
    reportSummary.forEach((item) => {
      let path = document.getElementById(`${item.id}`)
      path && path.setAttribute("fill", whichColor(item.percentage))
    })
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
                <Percentage color={whichColor(item.percentage)}>
                  {`${item.percentage.toString().replace(".",",")}%`}
                </Percentage>
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