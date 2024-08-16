import React from 'react';
import { Drag, IconLabel } from './styles';
import Pdf from '../../public/windows/pdf.svg';
import useVisualStudioCode from '@/store/vscode';
import Image from 'next/image';

interface IDesktopIcon {
	icon: 'pdf' | 'spotify' | 'file';
}

export const DesktopIcon = ({ icon }: IDesktopIcon) => {
	const { showPdf, setShowPdf } = useVisualStudioCode();
	const iconMap = new Map([
		[
			'pdf',
			{
				icon: <Image src={Pdf} alt="pdf" key="pdf" loading="lazy" />,
				text: 'Curriculum',
			},
		],
	]);

	return (
		<Drag
			drag
			dragMomentum={false}
			onClick={() => {
				icon === 'pdf' && setShowPdf(!showPdf);
			}}
		>
			{iconMap.get(icon)?.icon}
			<IconLabel>{iconMap.get(icon)?.text}</IconLabel>
		</Drag>
	);
};
