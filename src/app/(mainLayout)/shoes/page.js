import Image from "next/image";

export default async function Shoes() {
  const res = await fetch("http://localhost:5000/shoes", {
    next: {
      revalidate: 5,
    },
  });
  const shoes = await res.json();

  return (
    <div>
      <div className="container mx-auto">
        <h1 className="text-3xl text-center mb-8">Shoes Page</h1>
        <div className="grid grid-cols-4 gap-6">
          {shoes.map((shoe) => (
            <div key={shoe.id} className="space-y-4">
              <Image
                width={600}
                height={400}
                src={shoe.image}
                alt={shoe.name}
                className="rounded-lg"
              />
              <div className="flex justify-between">
                <h2 className="text-white text-xl">{shoe.title}</h2>
                <p className="text-lg">$ {shoe.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
