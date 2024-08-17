import { ReactNode } from 'react';
import Image from 'next/image';
import { Badge, BadgeType } from '../badge/Badge';
import Socius from '../../../../public/experience/socius.png';
import Etpay from '../../../../public/experience/etpay.png';
import Birchamn from '../../../../public/experience/birchman.jpg';
import Clever from '../../../../public/experience/clever.jpg';
import Bice from '../../../../public/experience/bice.png';
import Dplace from '../../../../public/experience/dplace.jpg';

import {
	BadgeContainer,
	Card,
	CardBody,
	Container,
	EmployerContainer,
	InfoContainer,
} from './styles';

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
			image: (
				<Image priority={false} src={Socius} width={120} height={120} alt="Socius" loading="lazy" />
			),
			company: 'SOCIUS',
			title: 'Desarrollador FrontEnd en SOCIUS',
			time: 'Mayo 2024 - Julio 2024',
			description: 'Maquetación de proyectos para AFC con ui kit de SONDA',
			badge: ['ReactJS', 'Typescript', 'Redux', 'Storybook', 'Gitlab', 'Git'],
		},
		{
			image: (
				<Image priority={false} src={Etpay} width={120} height={40} alt="etpay" loading="lazy" />
			),
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
			image: (
				<Image
					priority={false}
					src={Birchamn}
					width={120}
					height={120}
					alt="Birchamn"
					loading="lazy"
				/>
			),
			company: 'birchman',
			title: 'Desarrollador FrontEnd en Birchman Group',
			time: 'Mayo 2023 - Agosto 2023',
			description: [
				'Inicialización del proyecto para Zurich Santander desde 0 con ViteJS utilizando módulos.',
				'Creación de inicio de sesión y registro de usuarios con JWT y Session Storage.',
				'Creación de componetes custom con Material UI.',
			],
			badge: ['ReactJS', 'Typescript', 'Material UI', 'Github', 'Git'],
		},
		{
			image: (
				<Image priority={false} src={Bice} width={120} height={120} alt="bice" loading="lazy" />
			),
			company: 'Banco BICE',
			title: 'Desarrollador Full Stack en Banco BICE',
			time: 'Enero 2023 - Mayo 2023',
			description: [
				'Migración de servicios a bff.',
				'Implementación de componentes desde él ui-kit en ReactNative.',
				'Testing.',
				'Añadir documentación a los nuevos endpoints en Confluence.',
			],
			badge: ['React Native', 'Typescript', 'NodeJS', 'ExpressJS', 'Jest', 'Jira'],
		},
		{
			image: (
				<Image priority={false} src={Clever} width={120} height={120} alt="clever" loading="lazy" />
			),
			company: 'Clever By BICE',
			title: 'Desarrollador Full Stack en Clever By BICE',
			time: 'Diciembre 2021 - Diciembre 2022',
			description: [
				'Construcción de componentes en Storybook y nuevas features en los proyectos de Clever con ReactJS con TypeScript.',
				'Creación de migraciones, rutas y lógica backend en Ruby on Rails.',
				'Publicar nuevos componentes en npm.',
			],
			badge: ['ReactJS', 'Typescript', 'Storybook', 'Jest', 'Ruby on Rails', 'Github', 'Git'],
		},
		{
			image: (
				<Image priority={false} src={Dplace} width={120} height={120} alt="dplace" loading="lazy" />
			),
			company: 'Altiiro | Dplace',
			title: 'Practica Analista Programador (Diseñador Web | Front End)',
			time: 'Enero 2021 - Marzo 2021',
			description: [
				'Creación de wireframes y flujos de usuario',
				'Maquetación con HTML, CSS y Bootstrap 4',
			],
			badge: ['HTML', 'CSS', 'JQuery'],
		},
	];

	return (
		<Container>
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
		</Container>
	);
};
