import React, { useState, useEffect } from 'react';
import {
	AppIconContainer,
	AppsBar,
	Bar,
	HoursWindows,
	IconContainer,
	WifiSoundContainer,
	WindowsIconContainer,
} from './styles';
import {
	ArrowIcon,
	FilesIcon,
	ScreenIcon,
	SoundIcon,
	SpotifyIcon,
	VsCodeIcon,
	WifiIcon,
	WindowsIcon,
} from '../../components/icons';
import useVisualStudioCode from '@/store/vscode';

export const TaskBar = () => {
	const { show: showVscode, setShow: setShowVscode } = useVisualStudioCode();
	const [currentTime, setCurrentTime] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentTime(new Date());
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	const appIcons = [
		<WindowsIcon key="windows" />,
		<ScreenIcon key="screen" />,
		<VsCodeIcon key="vscode" onClick={() => setShowVscode(!showVscode)} />,
		<FilesIcon key="file" />,
	];

	const iconsWindows = [
		<ArrowIcon style={{ marginTop: '5px', padding: '8px' }} key="arrow" />,
		<WifiSoundContainer key="">
			<WifiIcon key="wifi" />
			<SoundIcon key="sound" />
		</WifiSoundContainer>,
		<>
			<HoursWindows>
				{currentTime.toLocaleTimeString('en-us', {
					hour: '2-digit',
					minute: '2-digit',
					hour12: false,
				})}
				<br />
				<HoursWindows>{currentTime.toLocaleDateString()}</HoursWindows>
			</HoursWindows>
		</>,
	];

	return (
		<Bar>
			<AppsBar>
				<div style={{ width: '100%' }}></div>
				<AppIconContainer>
					{appIcons.map((icon, i) => (
						<IconContainer key={i}>{icon}</IconContainer>
					))}
				</AppIconContainer>
				<WindowsIconContainer>
					{iconsWindows.map((icons, i) => (
						<IconContainer key={i}>{icons}</IconContainer>
					))}
				</WindowsIconContainer>
			</AppsBar>
		</Bar>
	);
};
