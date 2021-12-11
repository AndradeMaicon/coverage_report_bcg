/* eslint-disable react/jsx-no-target-blank */
import { Container } from "./styles";
import { GrLinkedin, GrGithub } from 'react-icons/gr';

export function Footer() {
  return (
    <Container>
        <div>
          <span className="footer-text"> Created by <strong>Maicon Andrade</strong> </span>
            
          <a 
            href="https://www.linkedin.com/in/maicon-andrade-a2291a225/"
            className="footer-link"
            target="_blank"
          >
            <GrLinkedin size={"1.2rem"} />
            {/* linkedin */}
          </a>
          <a 
            href="https://github.com/AndradeMaicon/coverage_report_bcg"
            className="footer-link"
            target="_blank"
          >
            <GrGithub size={"1.2rem"} />
            {/* github */}
          </a>
        </div>
    </Container>
  )
}