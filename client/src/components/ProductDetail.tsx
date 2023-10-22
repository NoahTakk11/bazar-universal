import { useParams } from "react-router-dom";

import useSWR from "swr";
import axios from "axios";

//Components
import SliderCarousel from "./SliderCarousel";
import RatingStars from "./RatingStars";
import ProductData from "./ProductData";

export default function ProductDetail() {
  const { id } = useParams();

  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const { data, error, isLoading } = useSWR(
    `http://localhost:8000/api/items/${id}`,
    fetcher
  );

  console.log(data);
  console.log("--> ", id);
  const item = data?.item[0];
  return (
    <div className="w-full">
      {!!isLoading && <p>Loading...</p>}
      {!!error && <p>Error</p>}
      {!item && <p>No se encuentra el producto!</p>}

      {item && (
        <div className="w-full flex flex-col items-center justify-center">
          <div className="md:w-1/2 md:flex md:items-center md:justify-center">
            <ProductData category={item.category} stock={item.stock} />
          </div>

          <div
            id={item.id}
            className="flex flex-col items-center justify-center my-10 w-full bg-slate-50 p-4 pt-5 rounded-[32px] shadow-xl border-slate-800 border-[1px]"
          >
            <div className="flex flex-col items-center justify-center ">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-[95%] rounded-3xl md:w-1/2"
              />
              <h1 className="text-3xl font-bold">
                Descuento! - {item.discountPercentage}%
              </h1>
              <h1 className="text-2xl font-bold">
                {item.title} - ${item.price}
              </h1>
              <RatingStars rating={Number(item.rating)} />
            </div>

            <SliderCarousel imgs={item.images} />

            <div className="gap-4 flex flex-col mb-10">
              <h2 className="text-2xl font-semibold">Detalles:</h2>
              <h3 className="text-xl font-semibold">Marca - {item.brand}</h3>

              <p className="text-start text-lg font-medium">
                <span className="text-xl font-semibold">Descripción : </span>
                {item.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
