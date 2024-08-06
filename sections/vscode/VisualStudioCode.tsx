'use client';
import { FileList } from './components';
import Tabs from './components/tabs/Tabs';
import { Screen, ScreenBar } from './styles';
import useVisualStudioCode from '@/store/vscode';

const VisualStudioCode = () => {
	const { show, setShow } = useVisualStudioCode();

	return (
		<>
			<ScreenBar>
				<div onClick={() => setShow(!show)}>
					<svg
						width="13"
						height="13"
						viewBox="0 0 14 15"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<line
							y1="-0.712745"
							x2="17.8076"
							y2="-0.712745"
							transform="matrix(0.693512 0.720445 -0.693512 0.720445 0.242188 1.42551)"
							stroke="white"
							strokeWidth="1.42549"
						/>
						<line
							y1="-0.712745"
							x2="17.8076"
							y2="-0.712745"
							transform="matrix(-0.693512 0.720445 0.693512 0.720445 13.9644 1.42551)"
							stroke="white"
							strokeWidth="1.42549"
						/>
					</svg>
				</div>
			</ScreenBar>
			<Screen>
				<FileList />
				<Tabs />
			</Screen>
		</>
	);
};

export default VisualStudioCode;
