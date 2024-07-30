import { motion } from "framer-motion";
import styled from "styled-components";

export const Drag = styled(motion.div)`
  display: flex;
  max-width: 100px;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`

export const IconLabel = styled.span`
  color: #FFF;
  font-size: 14px;
  letter-spacing: -2%;
`