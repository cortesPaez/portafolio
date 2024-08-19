'use client';
import React, { useState, useEffect } from 'react';
import Arrow from '@/public/windows/arrow.svg';
import Folder from '@/public/windows/folder.svg';
import Image from 'next/image';
import Screen from '@/public/windows/screen.svg';
import Sound from '@/public/windows/sound.svg';
import Vscode from '@/public/windows/vscode.svg';
import Wifi from '@/public/windows/wifi.svg';
import Windows from '@/public/windows/windows.svg';

import {
	AppIconContainer,
	AppsBar,
	Bar,
	HoursWindows,
	IconContainer,
	WifiSoundContainer,
	WindowsIconContainer,
} from './styles';
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
		{
			icon: (
				<Image
					priority={false}
					src={Windows}
					height={24}
					width={24}
					alt="windows"
					key="windows"
					loading="lazy"
				/>
			),
		},
		{
			icon: (
				<Image
					priority={false}
					src={Screen}
					height={24}
					width={24}
					alt="screen"
					key="screen"
					loading="lazy"
				/>
			),
		},
		{
			icon: (
				<Image
					priority={false}
					src={Vscode}
					height={24}
					width={24}
					alt="windows"
					key="windows"
					loading="lazy"
				/>
			),
			onClick: () => setShowVscode(!showVscode),
		},
		// {
		// 	icon: (
		// 		<Image
		// 			priority={false}
		// 			src={Windows}
		// 			height={24}
		// 			width={24}
		// 			alt="windows"
		// 			key="windows"
		// 			loading="lazy"
		// 		/>
		// 	),
		// },
	];

	function formatDate(date: Date) {
		let d = new Date(date);
		let day = ('0' + d.getDate()).slice(-2);
		let month = ('0' + (d.getMonth() + 1)).slice(-2);
		let year = d.getFullYear();
		return `${day}-${month}-${year}`;
	}

	const iconsWindows = [
		<Image
			priority={false}
			src={Arrow}
			height={12}
			width={12}
			alt="arrow"
			key="arrow"
			loading="lazy"
		/>,

		<WifiSoundContainer key="">
			<Image
				priority={false}
				src={Wifi}
				height={20}
				width={20}
				alt="wifi"
				key="wifi"
				loading="lazy"
			/>
			<Image
				priority={false}
				src={Sound}
				height={20}
				width={20}
				alt="sound"
				key="sound"
				loading="lazy"
			/>
		</WifiSoundContainer>,
		<>
			<HoursWindows>
				{currentTime.toLocaleTimeString(undefined, {
					hour: '2-digit',
					minute: '2-digit',
					hour12: false,
				})}
				<br />
				<HoursWindows>{formatDate(new Date())}</HoursWindows>
			</HoursWindows>
		</>,
	];

	return (
		<Bar>
			<AppsBar>
				<div style={{ width: '100%' }}></div>
				<AppIconContainer>
					{appIcons.map(({ icon, onClick }, i) => (
						<IconContainer key={i} onClick={onClick}>
							{icon}
						</IconContainer>
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
