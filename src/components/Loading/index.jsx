import React from 'react';
import { LoadingWrapper } from './styled';

const Loading = () => {
	return (
		<LoadingWrapper>
			<div class="loading circle">
				<div />
				<ul className="s-cricle">
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>
		</LoadingWrapper>
	);
};

export default Loading;
