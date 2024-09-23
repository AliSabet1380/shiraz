import { Card } from "../../../components/card";
import { mainFoods, otherFoods } from "@/constant";

const Gaots = () => {
  return (
    <section className="min-h-screen space-y-32 px-4 lg:px-16 lg:max-w-screen-2xl lg:mx-auto pt-20  pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {mainFoods.map((food, i) => (
          <Card
            href={`/foods/${food.id}`}
            key={i}
            label={food.label}
            description={food.desc}
            image={food.image}
          />
        ))}
      </div>

      <div className="w-full space-y-6">
        <h2 className="text-center text-2xl text-gray-700">
          دیگر غذا ها و خوراکی های شیرازی
        </h2>
        <div className="mx-auto max-w-2xl flex items-center justify-center lg:justify-around flex-wrap gap-2">
          {otherFoods.map((food, i) => (
            <div
              key={i}
              className="p-1 rounded-md border border-gray-600 bg-slate-600 text-white font-semibold"
            >
              {food}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gaots;
