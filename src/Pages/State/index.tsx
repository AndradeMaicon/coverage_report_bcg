import { Link, useParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi"
import { motion } from 'framer-motion';

import { Container } from "./styles"
import { useCallback, useEffect, useState } from "react";
import { reportSummary } from "../../utils/reportSummary";
import { cityList } from "../../utils/cityList";
import { whichColor } from "../../utils/whichColor";
import { whichState } from "../../utils/whichState";
import { InfoCard } from "../../components/InfoCard";

interface ICityInfo {
  id_munic: number;
  nomemun: string;
  ano: number;
  cob_vac_bcg: number;
}

interface IParams {
  stateId: number;
  year: string;
}

interface IPosition {
  x: number;
  y: number;
}

export function State() {
  const [ stateCode, setStateCode ] = useState(0)
  const [ selectedYear, setSelectYear ] = useState("")
  const [ stateName, setStateName ] = useState("")
  const [ cities, setCities ] = useState<ICityInfo[]>([])

  const [position, setPosition] = useState<IPosition>({
    x: 0,
    y: 0,
  })

  const [cityName, setCityName] = useState("")
  const [cityPercentage, setCityPercentage] = useState(0)

  const params = useParams() as unknown as IParams;

  const setPageHeader = useCallback((year: string, id: number) => {
    const state = (reportSummary.filter((state) => (state.id === id)))[0]

    setSelectYear(year)
    setStateName(state.stateName)
  }, [])


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

  const setStateInfoBoxData = useCallback((id: string) => {
    const data = (cities.filter(item => item.id_munic === +id))[0]

    if (data.id_munic) {
      setCityName(data.nomemun)
      setCityPercentage(+(Math.round(data.cob_vac_bcg * 100) / 100).toFixed(2))
    }
  }, [cities])
  

  useEffect(() => {
    const svgPaths = Array.from(document.querySelectorAll("div#map-container > svg > g > path"))

    if(svgPaths) {
      svgPaths.forEach(path => {
        path.addEventListener("mouseenter", () => {
          setTarget(path)
          setStateInfoBoxData(path.id)
        })
      })

      return () => {
        svgPaths.forEach(path => {
          path.removeEventListener("mouseenter", () => {
            setTarget(path)
            setStateInfoBoxData(path.id)
          })
        })
      }
    }
  }, [ setTarget, setStateInfoBoxData ])

  useEffect(() => {
    const stateMap = Array.from(document.getElementsByTagName("g"))

    if(stateMap) {
      stateMap.forEach(item => {
        item.addEventListener("mouseout", () => clearTarget())
      })

      return () => {
        stateMap.forEach(item => {
          item.removeEventListener("mouseout", () => clearTarget())
        })
      }
    }
  }, [cities])

  useEffect(() => {
    setStateCode(params.stateId)
   
    setPageHeader(params.year, +params.stateId)

    setCities(cityList(+params.stateId, +params.year))
  }, [params, setPageHeader])

  useEffect(() => {
    cities.forEach((item) => {
      let path = document.getElementById(`${item.id_munic}`)
      path && path.setAttribute("fill", whichColor(item.cob_vac_bcg))
    })
  }, [cities])

  return (
    <>
      <InfoCard
        title={cityName}
        data={cityPercentage}
        target={position}
      />
      <Container>
        <motion.div 
          className="page-header"
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
          <Link className="go-back" to="/">
            <FiArrowLeft />
          </Link>
          <h1 id="state-name">
            {stateName} - <span id="year-selected">{selectedYear}</span>
          </h1>
        </motion.div>

        <motion.div 
          id="map-container"
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
          {whichState(stateCode)}
        </motion.div>
      </Container>
    </>
  )
}