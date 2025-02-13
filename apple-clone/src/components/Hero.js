export default function Hero() {
    return (
      <section className="h-screen flex flex-col items-center justify-center text-center bg-black text-white">
        <h1 className="text-5xl font-bold">iPhone 16 Pro</h1>
        <p className="text-xl mt-2">Hello, Apple Intelligence</p>
        <div className="mt-4">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">Learn More</button>
          <button className="ml-4 border border-white px-6 py-2 rounded-lg">Buy</button>
        </div>
      </section>
    );
  }
  