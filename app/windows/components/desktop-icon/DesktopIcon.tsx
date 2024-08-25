import { Drag, IconLabel } from './styles';
import Pdf from '@/public/windows/pdf.svg';
import Linkedin from '@/public/windows/linkedin.svg';
import Github from '@/public/windows/github.svg';

import useWindows from '@/store/windows';
import Image from 'next/image';

interface IDesktopIcon {
	icon: 'pdf' | 'linkedin' | 'github';
}

export const DesktopIcon = ({ icon }: IDesktopIcon) => {
	const { showPdf, setShowPdf, setShowVscode } = useWindows();
	const iconMap = new Map([
		[
			'pdf',
			{
				icon: <Image src={Pdf} alt="pdf" key="pdf" loading="lazy" width={51} priority={false} />,
				text: 'Curriculum',
			},
		],
		[
			'linkedin',
			{
				icon: (
					<Image
						src={Linkedin}
						alt="linkedin"
						key="linkedin"
						loading="lazy"
						width={51}
						priority={false}
					/>
				),
				text: 'Perfil de Linkedin',
			},
		],
		[
			'github',
			{
				icon: (
					<Image
						src={Github}
						alt="github"
						key="github"
						loading="lazy"
						width={51}
						priority={false}
					/>
				),
				text: 'Perfil de Github	',
			},
		],
	]);

	return (
		<>
			<Drag
				drag
				dragMomentum={false}
				onClick={() => {
					if (icon === 'pdf') {
						setShowPdf(!showPdf);
						setShowVscode(false);
					}

					if (icon === 'linkedin') {
						window.open('https://www.linkedin.com/in/ccortespaez/', '_blank');
					}

					if (icon === 'github') {
						window.open('https://github.com/cortesPaez', '_blank');
					}
				}}
			>
				{iconMap.get(icon)?.icon}
				<IconLabel>{iconMap.get(icon)?.text}</IconLabel>
			</Drag>
		</>
	);
};
