import { useItems } from "../zustand/items-store";
import useSWR from "swr";
import axios from "axios";

//components
import SearchBox from "../components/SearchBox";
import Products from "../components/DisplayProducts";
import ProductData from "../components/ProductData";

export default function ListProducts() {
  const { category } = useItems();

  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const { data, error, isLoading } = useSWR(
    `http://localhost:8000/api/items?q=${category}`,
    fetcher
  );

  console.log(data?.items);
  console.log("--> ", category);
  return (
    <>
      <div className="md:flex md:items-center md:justify-center w-full">
        <img
          className="w-[200px] h-[200px] rounded-full ml-[25%]"
          src="../../public/vecteezy_small-store-isometric-cartoon-vector-illustration_11051432.jpg"
          alt=""
        />
        <div className="w-full">
          <SearchBox viewButton={false} />
        </div>
      </div>

      <h2 className="font-bold text-md text-gray-700 md:mt-10">
        Resultados de búsqueda de {category} : {data?.items.length}{" "}
      </h2>
      <ProductData category={category} stock={data?.items.length} />
      <Products
        data={data && data.items ? data.items : []}
        isLoading={!!isLoading}
        error={!!error}
      />
    </>
  );
}
