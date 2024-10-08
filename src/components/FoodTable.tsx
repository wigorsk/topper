type Props = {
    foodName: string,
    gramas: number,
    carboidratos: number,
    gorduras: number,
    proteinas: number,
}   

const basis = 'basis-20 md:basis-28 lg:basis-44'


export const FoodTable = ({ foodName, gramas, carboidratos, gorduras, proteinas }:Props) => {

    return (
        <tr className="py-2 flex items-center text-center bg-neutral-300 text-neutral-950">
            <td className="flex-1 text-start ml-5 md:ml-10 text-xs sm:text-sm md:text-base line-clamp-1">{foodName}</td>
            <td className={`${basis}`}>{gramas}</td>
            <td className={`${basis}`}>{carboidratos}</td>
            <td className={`${basis}`}>{gorduras}</td>
            <td className={`${basis}`}>{proteinas}</td>
        </tr>
    )
}