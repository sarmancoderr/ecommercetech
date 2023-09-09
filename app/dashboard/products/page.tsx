import { Metadata } from "next";
import { FaPlus } from "react-icons/fa";
import { RiStarFill } from "react-icons/ri";
import { HeaderPage } from "./HeaderPage";

export const metadata: Metadata = {
  title: 'Productos'
}


export default function ProductsPage() {
  return (
    <>
        <HeaderPage />
        <button className="fixed bottom-5 right-5 bg-orange-700 p-3 shadow-xl rounded-lg">
            <FaPlus color='white' size={24} className='rounded-lg font-bold' />
        </button>
        <section className="grid grid-cols-2 gap-5">
            {Array(10).fill('a').map((i) => (<article className="bg-white rounded shadow-xl" key={'product-' + i}>
                <div style={{
                    backgroundImage: 'url("https://fakeimg.pl/350x200/ff0000,128/000,255")',
                    height: '170px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}></div>
                <div className="p-2">
                    <p className="font-bold">Macbook Pro</p>
                    <p>
                        <span>14.0</span>
                        <span>(2023)</span>
                    </p>
                    <p>
                        <strong>2690.10$</strong>
                        <strong>2990.90$</strong>
                    </p>
                    <p>2 left</p>
                    <p><RiStarFill /> 0</p>
                </div>
            </article>))}
        </section>
    </>
  )
}
