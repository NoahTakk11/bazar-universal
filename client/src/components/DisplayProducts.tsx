import { Product } from "../types/items";
import ProductCard from "./ProductCard";
import Loader from "./Loader";

interface Props {
  data: Product[];
  isLoading: boolean;
  error: boolean;
}
export default function Products(props: Props) {
  return (
    <div className="flex flex-col items-center justify-center mt-4 md:grid md:grid-cols-4 md:gap-3">
      {props.isLoading && (
        <div className="flex flex-col items-center justify-center md:absolute">
          <Loader />
        </div>
      )}
      {props.error && <p>Error</p>}
      {!props.data && <p>No hay productos</p>}
      {!props.isLoading &&
        !props.error &&
        props.data?.map((item) => (
          <div key={item.id}>
            <ProductCard
              img={item.thumbnail}
              title={item.title}
              price={String(item.price)}
              description={item.description}
              rating={String(item.rating)}
              id={String(item.id)}
            />
          </div>
        ))}
    </div>
  );
}
