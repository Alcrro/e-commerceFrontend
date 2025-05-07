import style from './productCounter.module.scss';
// app/components/ui/ProductCounter.tsx
interface ProductCounterProps {
  quantity: number;
}

const ProductCounter = ({ quantity }: ProductCounterProps) => {
  return (
    <div className={style.product_counter}>
      <div
        className={`${style.decrease} ${quantity <= 1 ? style.notAllowed : style.itsFine}`}
      >
        -
      </div>
      <div className={style.counter}>{quantity}</div>
      <div className={style.increase}>+</div>
    </div>
  );
};

export default ProductCounter;
