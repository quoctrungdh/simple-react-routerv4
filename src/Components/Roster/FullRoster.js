import React from 'react';
import { Link } from 'react-router-dom';

import PlayerAPI from '../../api/playerAPI';

const FullRoster = () => {
	return (
		<div>
			<ul>
				{
					PlayerAPI.all().map(p => (
						<li key={p.name}>
							<Link to={`/roster/${p.number}`}>{p.name}</Link>
						</li>
					))
				}
			</ul>
		</div>
	)
}

export default FullRoster;
