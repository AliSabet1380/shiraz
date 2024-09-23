import { Card } from "@/components/card";
import { places } from "@/constant";

const FamousPlaces = () => {
  return (
    <section className="min-h-screen space-y-32 px-4 lg:px-16 lg:max-w-screen-2xl lg:mx-auto pt-20  pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {places.map((place, i) => (
          <Card
            href={`/famous-places/${place.id}`}
            key={i}
            label={place.label}
            description={place.desc}
            image={place.image}
          />
        ))}
      </div>
    </section>
  );
};

export default FamousPlaces;
