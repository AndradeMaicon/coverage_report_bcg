import { useEffect, useState } from "react"
import { motion } from "framer-motion"

import { whichColor } from "../../utils/whichColor"
import { StyleContainer, Title, Data, InfoBoxArrow } from "./styles"


interface IPosition {
  x: number;
  y: number;
}

interface IProps {
  title: string;
  data: number;
  target: IPosition;
}

export function InfoCard({ title, data, target }:IProps) {
  const [position, setPosition] = useState<IPosition>({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    setPosition({
      x: target.x,
      y: target.y
    })
  }, [target])

  return (
    <StyleContainer>
      <motion.div 
        className="infoBox"
        initial={{
          opacity: 0,
        }}
        animate={{
          x: position.x,
          y: position.y,
          opacity: (position.x > 0 && position.y > 0) ? 1 : 0,
          pointerEvents: 'none'
        }}
        transition={{
          ease: 'easeInOut',
          opacity: { duration: 0 },
          x: { duration: 0 },
          y: { duration: 0 }
        }}
      >
        <div className="infoCard-content">
          <Title>{title}</Title>
          <Data color={whichColor(data)}>{data}%</Data>
        </div>
        <InfoBoxArrow />
      </motion.div>
    </StyleContainer>
  )
}