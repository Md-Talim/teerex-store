import ProductCard from "@/components/product-card";
import data from "@/lib/data";

const getAllTShirts = () => {
  const results = data;

  return results;
};

const Home = () => {
  const allTShirts = getAllTShirts();

  return (
    <section className="m-8 grid grid-cols-[250px_1fr]">
      <aside>Filters</aside>
      <main className="space-y-10">
        <h1 className="text-4xl uppercase font-semibold">All T-Shirts</h1>

        <section className="grid grid-cols-4 gap-8">
          {allTShirts.map((tShirt) => (
            <ProductCard
              key={tShirt.id}
              id={tShirt.id}
              name={tShirt.name}
              price={tShirt.price}
              imageURL={tShirt.imageURL}
              gender={tShirt.gender as "Men" | "Women"}
            />
          ))}
        </section>
      </main>
    </section>
  );
};

export default Home;
