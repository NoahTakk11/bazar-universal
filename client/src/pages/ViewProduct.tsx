//Componets
import ProductDetail from "../components/ProductDetail";
import SearchBox from "../components/SearchBox";

export default function ViewProduct() {
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
      <ProductDetail />
    </>
  );
}
