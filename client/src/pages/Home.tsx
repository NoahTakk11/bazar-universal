//Components
import SearchBox from "../components/SearchBox";

export default function Home() {
  return (
    <>
      <img
        src="../../public/vecteezy_small-store-isometric-cartoon-vector-illustration_11051432.jpg"
        alt=""
        className="md:w-1/3"
      />
      <SearchBox viewButton={true} />
    </>
  );
}
