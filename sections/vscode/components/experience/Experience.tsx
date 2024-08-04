import { ReactNode } from 'react';
import Image from 'next/image';
import { Badge, BadgeType } from '../badge/Badge';
import Socius from '../../../../public/experience/socius.png';
import Etpay from '../../../../public/experience/etpay.png';
import Birchamn from '../../../../public/experience/birchman.jpg';

import { BadgeContainer, Card, CardBody, EmployerContainer, InfoContainer } from './styles';

interface IWorkExperience {
	image: ReactNode;
	company: string;
	title: string;
	time: string;
	description: string | string[];
	badge: BadgeType[];
}

export const Experience = () => {
	const workExperience: IWorkExperience[] = [
		{
			image: <Image src={Socius} width={120} height={120} alt="Picture of the author" />,
			company: 'SOCIUS',
			title: 'Desarrollador FrontEnd en SOCIUS',
			time: 'Mayo 2024 - Julio 2024',
			description: 'Maquetación de proyectos para AFC con ui kit de SONDA',
			badge: ['ReactJS', 'Typescript', 'Redux', 'Storybook', 'Gitlab', 'Git'],
		},
		{
			image: <Image src={Etpay} width={120} height={40} alt="Picture of the author" />,
			company: 'Etpay',
			title: 'Desarrollador FrontEnd en ETPay',
			time: 'Agosto 2023 - Abril 2024',
			description: [
				`Creación de componentes dinamicos y reutilizables.`,
				'Implementar nuevos modulos para los comercios.',
			],
			badge: ['ReactJS', 'Typescript', 'Redux', 'Storybook', 'Gitlab', 'Git', 'styled-components'],
		},
		{
			image: <Image src={Birchamn} width={120} height={120} alt="Picture of the author" />,
			company: 'Etpay',
			title: 'Desarrollador FrontEnd en Birchman Group',
			time: 'Mayo 2023 - Agosto 2023',
			description: [
				'Inicialización del proyecto para Zurich Santander desde 0 con ViteJS utilizando módulos.',
				'Creación de inicio de sesión y registro de usuarios con JWT y Session Storage.',
				'Creación de componetes custom con Material UI.',
			],
			badge: ['ReactJS', 'Typescript', 'Material UI', 'Github', 'Git'],
		},
	];

	return (
		<div style={{ maxHeight: '90%', overflowY: 'scroll' }}>
			{workExperience.map(({ image, company, title, time, description, badge }) => (
				<Card key={company}>
					<CardBody>
						{image}
						<div>
							<EmployerContainer>
								<InfoContainer>
									<h2>{title}</h2>
									<span>{time}</span>
									<ul>
										{typeof description === 'string' ? (
											<li>{description}</li>
										) : (
											description.map((item, i) => <li key={i}>{item}</li>)
										)}
									</ul>
								</InfoContainer>
							</EmployerContainer>
							<BadgeContainer>
								{badge.map((item) => (
									<Badge text={item} key={item} />
								))}
							</BadgeContainer>
						</div>
					</CardBody>
				</Card>
			))}
		</div>
	);
};
