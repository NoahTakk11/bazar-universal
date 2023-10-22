import RatingStars from "./RatingStars";
interface Props {
  img: string;
  title: string;
  description: string;
  price: string;
  rating: string;
  id: string;
}
export default function ProductCard(props: Props) {
  return (
    <div
      id={props.id}
      className="w-full max-w-sm bg-slate-50 border border-gray-200 rounded-2xl shadow mb-4 md:min-h-[500px]"
    >
      <a href={`/items/${props.id}`}>
        <img className="p-8 rounded-t-lg" src={props.img} alt={props.title} />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900">
            {props.description}
          </h5>
        </a>
        <RatingStars rating={Number(props.rating)} />
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900">
            ${props.price}
          </span>
          <a
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}
