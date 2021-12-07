import { useEffect, useState } from 'react';

import {ReactComponent as BrazilSvg} from '../../assets/br.svg';
import { readDataBase } from '../../utils/readDatabase';

import {
  Container,
  Content,
  Title,
  ReportBox,
  Map,
} from './styles';

export function Home () {
  const [color, setColor] = useState("");

  useEffect(() => {
    readDataBase()
  }, [])

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
        <ReportBox>
          <div className="report-item">
            <p className="state-name">Acre</p>
            <span className="coverage-percentage">{`${'45'}%`}</span>
          </div>
          <div className="report-item">
            <p className="state-name">Acre</p>
            <span className="coverage-percentage">{`${'45'}%`}</span>
          </div>
          <div className="report-item">
            <p className="state-name">Acre</p>
            <span className="coverage-percentage">{`${'45'}%`}</span>
          </div>
          <div className="report-item">
            <p className="state-name">Acre</p>
            <span className="coverage-percentage">{`${'45'}%`}</span>
          </div>
          <div className="report-item">
            <p className="state-name">Acre</p>
            <span className="coverage-percentage">{`${'45'}%`}</span>
          </div>
          <div className="report-item">
            <p className="state-name">Acre</p>
            <span className="coverage-percentage">{`${'45'}%`}</span>
          </div>
          <div className="report-item">
            <p className="state-name">Acre</p>
            <span className="coverage-percentage">{`${'45'}%`}</span>
          </div>
          <div className="report-item">
            <p className="state-name">Acre</p>
            <span className="coverage-percentage">{`${'45'}%`}</span>
          </div>
          <div className="report-item">
            <p className="state-name">Acre</p>
            <span className="coverage-percentage">{`${'45'}%`}</span>
          </div>
          <div className="report-item">
            <p className="state-name">Acre</p>
            <span className="coverage-percentage">{`${'45'}%`}</span>
          </div>
          <div className="report-item">
            <p className="state-name">Acre</p>
            <span className="coverage-percentage">{`${'45'}%`}</span>
          </div>
          <div className="report-item">
            <p className="state-name">Acre</p>
            <span className="coverage-percentage">{`${'45'}%`}</span>
          </div>
          <div className="report-item">
            <p className="state-name">Acre</p>
            <span className="coverage-percentage">{`${'45'}%`}</span>
          </div>
          <div className="report-item">
            <p className="state-name">Acre</p>
            <span className="coverage-percentage">{`${'45'}%`}</span>
          </div>
          <div className="report-item">
            <p className="state-name">Acre</p>
            <span className="coverage-percentage">{`${'45'}%`}</span>
          </div>
          <div className="report-item">
            <p className="state-name">Acre</p>
            <span className="coverage-percentage">{`${'45'}%`}</span>
          </div>
          <div className="report-item">
            <p className="state-name">Acre</p>
            <span className="coverage-percentage">{`${'45'}%`}</span>
          </div>
          <div className="report-item">
            <p className="state-name">Acre</p>
            <span className="coverage-percentage">{`${'45'}%`}</span>
          </div>
          <div className="report-item">
            <p className="state-name">Acre</p>
            <span className="coverage-percentage">{`${'45'}%`}</span>
          </div>
          <div className="report-item">
            <p className="state-name">Acre</p>
            <span className="coverage-percentage">{`${'45'}%`}</span>
          </div>
          <div className="report-item">
            <p className="state-name">Acre</p>
            <span className="coverage-percentage">{`${'45'}%`}</span>
          </div>
          <div className="report-item">
            <p className="state-name">Acre</p>
            <span className="coverage-percentage">{`${'45'}%`}</span>
          </div>
          <div className="report-item">
            <p className="state-name">Acre</p>
            <span className="coverage-percentage">{`${'45'}%`}</span>
          </div>
          <div className="report-item">
            <p className="state-name">Acre</p>
            <span className="coverage-percentage">{`${'45'}%`}</span>
          </div>
          <div className="report-item">
            <p className="state-name">Acre</p>
            <span className="coverage-percentage">{`${'45'}%`}</span>
          </div>
          <div className="report-item">
            <p className="state-name">Acre</p>
            <span className="coverage-percentage">{`${'45'}%`}</span>
          </div>
          <div className="report-item">
            <p className="state-name">Acre</p>
            <span className="coverage-percentage">{`${'45'}%`}</span>
          </div>
        </ReportBox>
      </Content>
      <Map>
        <BrazilSvg />
      </Map>
    </Container>
  )
}