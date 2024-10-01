import Counter from "@/components/counter";

export default function CounterPage() {
  return (
    <div className="container mx-auto py-4">
      <h1 className="text-3xl text-center">Counter Page</h1>
      <>
        <h2 className="text-xl">Counter App</h2>
        <Counter />
      </>
    </div>
  );
}
