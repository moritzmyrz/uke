import { GetMonth } from "functions/GetMonth";
import { GetWeekNum } from "functions/GetWeekNum";
import React from "react";
import "style/content.scss";
import Events from "./events";
import Footer from "./footer";

type AppProps = {
	time: Date;
};
const Main: React.FC<AppProps> = ({ time }: AppProps) => {
	return (
		<div id="container">
			<div className="main-top">
				<div id="title">
					<h1 id="dato">
						{`${time.getDate()}. ${GetMonth(time.getMonth())}
          ${time.getFullYear()}`}
					</h1>

					<h2 id="uke">Uke {GetWeekNum(time)}</h2>
				</div>
			</div>
			<Events time={time} />
			<Footer time={time} />
		</div>
	);
};

export default Main;
