import Image from 'next/image';
import { Badge } from '../badge/Badge';
import Socius from '../../../../public/experience/socius.png';
import { BadgeContainer, Card, CardBody, EmployerContainer, InfoContainer } from './styles';

export const Experience = () => {
	return (
		<Card>
			<CardBody>
				<Image src={Socius} width={120} height={120} alt="Picture of the author" />
				<div>
					<EmployerContainer>
						<InfoContainer>
							<h2>Desarrollador FrontEnd en SOCIUS</h2>
							<span>Mayo 2024 - Julio 2024</span>
							<p>Maquetación de proyectos para AFC con ui kit de SONDA</p>
						</InfoContainer>
					</EmployerContainer>
					<BadgeContainer>
						<Badge text="ReactJS" />
						<Badge text="Typescript" />
						<Badge text="Redux" />
					</BadgeContainer>
				</div>
			</CardBody>
		</Card>
	);
};
