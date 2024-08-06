import React from 'react';
import { Drag, IconLabel } from './styles';
import { FileIcon, PdfIcon, SpotifyDesktopIcon } from '../icons';

interface IDesktopIcon {
	icon: 'pdf' | 'spotify' | 'file';
}

export const DesktopIcon = ({ icon }: IDesktopIcon) => {
	const iconMap = new Map([
		['pdf', { icon: <PdfIcon key="opera" />, text: 'Curriculum' }],
		// ['file', { icon: <FileIcon key="file" />, text: 'Archivos' }],
		// ['spotify', { icon: <SpotifyDesktopIcon key="spotify" />, text: 'Spotify' }],
	]);

	return (
		<Drag drag dragMomentum={false}>
			{iconMap.get(icon)?.icon}
			<IconLabel>{iconMap.get(icon)?.text}</IconLabel>
		</Drag>
	);
};
