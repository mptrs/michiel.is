import React from 'react';
import { Helmet } from 'react-helmet';

import style from './layout.module.css';

require('typeface-playfair-display');
require('typeface-open-sans');

export default ({ children }) => (
	<div>
		<Helmet>
			<meta charSet="utf-8" />
			<title>
				Michiel.is Developer, maker, IoT enthusiast, &#x1F970; connected experiences & phygital,
				vlerk &#x1F984;&#x1F996;&#x1F412;
			</title>
			<link
				rel="icon"
				href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✨</text></svg>"
			/>
		</Helmet>

		<div className={style.page}>{children}</div>
	</div>
);
