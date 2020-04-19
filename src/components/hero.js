import React from 'react';

import style from './hero.module.css';

export default () => (
	<section className={style.hero}>
		<h1 className={`${style.hero__heading} ${style.animate__popIn}`}>Michiel.is</h1>
		<p className={`${style.hero__sub} ${style.animate__popIn}`}>
			Developer, maker, IoT enthusiast, &#x1F970;connected experiences & phygital, vlerk
			&#x1F984;&#x1F996;&#x1F412;
		</p>
	</section>
);
