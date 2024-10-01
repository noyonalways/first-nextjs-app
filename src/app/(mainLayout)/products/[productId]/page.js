"use client";

export default function DynamicProductPage({ params, searchParams }) {
  const { productId } = params;

  console.log(searchParams);

  return (
    <div className="container mx-auto py-4">
      <h1 className="text-3xl text-center">Dynamic Product Page</h1>

      <h2 className="text-xl my-2">Dynamic Product id {productId}</h2>
    </div>
  );
}
