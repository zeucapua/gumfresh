import { Product } from "../utils/types.ts";

type Props = { product : Product };
export function GumroadCard({ product } : Props) {
    return (
        <article class="flex flex-col w-fit max-w-sm h-full border-4 border-white rounded-xl">
            <img src={product.thumbnail_url} alt={product.name} class="aspect-square rounded-t-lg" />
            <div class="flex flex-col p-8 gap-4">
                <p class="text-xl text-white font-bold">{product.name}</p>
                <div class="flex flex-row justify-between">
                <p class="text-3xl text-white">{product.formatted_price}</p>
                <a href={product.short_url}>
                    <button 
                        class="hover:font-bold hover:bg-[#ff90e8] transition-all duration-300 text-lg text-black font-bold px-4 py-2 rounded-xl bg-white" 
                    >
                       Buy on Gumroad
                    </button>
                </a>
                </div>
            </div>
        </article>
    );
}
