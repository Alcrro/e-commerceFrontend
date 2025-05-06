// app/components/ui/Rating.tsx
import styles from './productRating.module.scss';

interface RatingProps {
  rating: number | null;
}

function validateRating(rating: number): boolean {
  return rating >= 1 && rating <= 5;
}
const ProductRating = ({ rating }: RatingProps) => {
  return (
    <div className={styles.product_rating}>
      <div className={styles.star_container}>
        <div className={styles.star_background}>
          <div
            className={styles.star_filled}
            style={{
              width: `${typeof rating === 'number' ? `${(rating / 5) * 100}%` : 0}`,
            }}
          ></div>
        </div>
      </div>
      <span className={styles.rating_text}>
        ({typeof rating === 'number' ? rating.toFixed(1) : 0})
      </span>
    </div>
  );
};

export default ProductRating;
