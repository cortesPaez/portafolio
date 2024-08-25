import { Drag, IconLabel } from './styles';
import Pdf from '@/public/windows/pdf.svg';
import Linkedin from '@/public/windows/linkedin.svg';

import useWindows from '@/store/windows';
import Image from 'next/image';

interface IDesktopIcon {
	icon: 'pdf' | 'linkedin' | 'file';
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
				}}
			>
				{iconMap.get(icon)?.icon}
				<IconLabel>{iconMap.get(icon)?.text}</IconLabel>
			</Drag>
		</>
	);
};
