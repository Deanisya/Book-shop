import { useState } from 'react';
import { Star } from 'lucide-react';
import styles from './StarRating.module.scss';

export default function StarRating() {
	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(0);

	return (
		<div className={styles.starContainer}>
			{[1, 2, 3, 4, 5].map((star) => (
				<Star
					key={star}
					className={`${styles.star} ${(hover || rating) >= star ? styles.filled : ''}`}
					onClick={() => setRating(star)}
					onMouseEnter={() => setHover(star)}
					onMouseLeave={() => setHover(0)}
				/>
			))}
		</div>
	);
}
