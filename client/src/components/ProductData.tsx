import { AiOutlineShoppingCart } from "react-icons/ai";

interface Props {
  category: string;
  stock: number;
}
export default function ProductData(props: Props) {
  return (
    <ul className="grid grid-cols-2 gap-5 p-2">
      <li className="">
        <div className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-[#f0c5a8] ">
          <span className=" whitespace-nowrap text-center">
            {props.category} - {props.stock}
          </span>
        </div>
      </li>

      <li className="">
        <a
          href="/cart"
          className="flex items-center text-center p-3 font-extrabold text-slate-50 text-2xl rounded-lg bg-[#50dbff] "
        >
          <AiOutlineShoppingCart />
          <span className="text-center whitespace-nowrap">{}</span>
        </a>
      </li>
    </ul>
  );
}
