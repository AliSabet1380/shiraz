import { Card } from "../../../components/card";
import { goats } from "@/constant";

const Gaots = () => {
  return (
    <section className="min-h-screen space-y-32 px-4 lg:px-16 lg:max-w-screen-2xl lg:mx-auto pt-20  pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {goats.map((goat, i) => (
          <Card
            href={`/goats/${goat.id}`}
            label={goat.label}
            image={goat.image}
            description={goat.description}
            key={i}
          />
        ))}
      </div>
    </section>
  );
};

export default Gaots;
