import { mainFoods } from "@/constant";
import Image from "next/image";

const GoatDetials = ({ params }: { params: { id: string } }) => {
  const food = mainFoods.find((food) => food.id === params.id);

  if (!food) return <>No Match Found</>;

  return (
    <div className="pt-20 pb-20 mx-auto max-w-screen-lg px-4 lg:px-14 flex flex-col items-center justify-center space-y-16">
      <Image
        src={food.image}
        alt={food.label}
        width={250}
        height={250}
        className="rounded-full w-80 h-80 ring-2 p-1 ring-neutral-400 object-cover"
      />

      <h2 className="text-2xl">{food.label}</h2>
      <span className="text-gray-700 text-center">{food.desc}</span>
    </div>
  );
};

export default GoatDetials;
