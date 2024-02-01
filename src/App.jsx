import { useRef, useState } from "react";

function App() {
	const [startTimeNow, setStartTimeNow] = useState(null);
	const [timeNow, setTimeNow] = useState(null);
	const intervalRef = useRef(0);

	const handleStart = () => {
		setStartTimeNow(Date.now());
		setTimeNow(Date.now());

		clearInterval(intervalRef.current);
		intervalRef.current = setInterval(() => {
			setTimeNow(Date.now());
		}, 10);
	};

	const handleStop = () => {
		clearInterval(intervalRef.current);
	};

	let secondPassed = 0;
	if (startTimeNow != null && timeNow != null) {
		secondPassed = (timeNow - startTimeNow) / 1000;
	}

	console.log("logss");
	return (
		<div className="m-auto my-10 w-[200px] justify-center items-center text-center">
			<p className="text-teal-900 font-bold">
				Showing Time:{" "}
				<span className="text-pink-900">{secondPassed.toFixed(3)}</span>{" "}
			</p>
			<div>
				<button
					className="p-2 border rounded bg-sky-700 text-white"
					onClick={handleStart}
				>
					Start
				</button>
				<button
					className="p-2 border rounded bg-red-700 text-white"
					onClick={handleStop}
				>
					Stop
				</button>
			</div>
		</div>
	);
}

export default App;
