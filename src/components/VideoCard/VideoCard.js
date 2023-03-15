import { React } from 'react';
import { Link } from 'react-router-dom';
import youtubeManager from '../../services/youtubeManager';
import FilterContent from '../FilterContent/FilterContent';
import Channel from './Channel';
import Thumbnail from './Thumbnail';

const VideoCard = (context) => {
	const { state: { filters }} = context;
	const filteredContent = youtubeManager.filter[filters](context);

	return (
		<div className="videoCard">
			<FilterContent { ...context }/>
			<div className="videoCard_container">
				{filteredContent.map((detail, key) =>
					<Link
						key={ key }
						to={ `/video${ detail.id }` }
						style={ { textDecoration: 'none', color: 'black' } }
						className="box-1"
					>
						<Thumbnail { ...{ ...context, data: detail } }/>
						<Channel { ...{ ...context, data: detail } }/>
					</Link>)}
			</div>
		</div>);
};

export default VideoCard;
