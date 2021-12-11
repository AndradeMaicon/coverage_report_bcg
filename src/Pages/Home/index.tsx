import { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { ReactComponent as BrazilSvg } from '../../assets/br.svg';
import { InfoCard } from '../../components/InfoCard';
import { reportSummary } from '../../utils/reportSummary'; 
import { whichColor } from '../../utils/whichColor';

import {
  Container,
  Title,
  SubTitle,
  ReportBox,
  Percentage,
} from './styles';


interface IPosition {
  x: number;
  y: number;
}

export function Home () {
  const [position, setPosition] = useState<IPosition>({
    x: 0,
    y: 0,
  })

  const [stateName, setStateName] = useState("")
  const [statePercentage, setStatePercentage] = useState(0)

  const setTarget = useCallback((path: Element) => {
    let [ x , y ] = [ 0, 0 ];


    const dimensions = path.getBoundingClientRect()

    x = dimensions.x - 75 + (dimensions.width / 2);
    y = dimensions.y - 70 + (dimensions.height / 2);

    setPosition({ x, y })
  }, [])

  function clearTarget () {
    setPosition({
      x: 0,
      y: 0
    })
  }

  const setInfoBoxData = useCallback((id: string) => {
    const data = (reportSummary.filter(item => item.id === +id))[0]

    if (data.id) {
      setStateName(data.stateName)
      setStatePercentage(data.percentage)
    }
  }, [])

  useEffect(() => {
    reportSummary.forEach((item) => {
      let path = document.getElementById(`${item.id}`)
      path && path.setAttribute("fill", whichColor(item.percentage))
    })
  }, [])

  useEffect(() => {
    const svgPaths = Array.from(document.querySelectorAll("div.home-map > svg > g > path"))

    if(svgPaths) {
      svgPaths.forEach(path => {
        path.addEventListener("mouseenter", () => {
          setTarget(path)
          setInfoBoxData(path.id)
        })
      })

      return () => {
        svgPaths.forEach(path => {
          path.removeEventListener("mouseenter", () => {
            setTarget(path)
            setInfoBoxData(path.id)
          })
        })
      }
    }
  }, [ setTarget, setInfoBoxData ])

  useEffect(() => {
    const brazilMap = document.getElementById("brazil-svg")
    
    if(brazilMap) {
      brazilMap.addEventListener("mouseout", () => clearTarget())

      return () => {
        brazilMap.removeEventListener("mouseout", () => clearTarget())
      }
    }
  }, [])

  return (
    <>
      <InfoCard
        title={stateName}
        data={statePercentage}
        target={position}
      />
      <Container>
        <motion.div
          className="home-content"
          initial={{
            opacity: 0,
            x: -500,
          }}
          animate={{
            opacity: 1, 
            x: 0,
          }}
          transition={{
            ease: 'easeOut',
            opacity: { duration: 0.5 },
            x: { duration: 0.8 },
          }}
        >
          <Title>
            Cobertura de <br/>
            vacinação <span>BCG</span> 
          </Title>
          <SubTitle>
            Percentual máximo atingido por munícipio em cada estado em 2019.
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
        </motion.div>
        <motion.div 
          className="home-map"
          initial={{
            opacity: 0,
            x: 500,
          }}
          animate={{
            opacity: 1, 
            x: 0,
          }}
          transition={{
            ease: 'easeOut',
            opacity: { duration: 0.5 },
            x: { duration: 0.8 },
          }}
        >
          <BrazilSvg id="brazil-svg"/>
        </motion.div>
      </Container>
    </>
  )
}