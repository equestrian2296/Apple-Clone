export default function ProductSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 bg-gray-100">
      <div
        className="relative flex items-start justify-center h-[540px] w-[720px] rounded-2xl overflow-hidden shadow-lg mx-auto"
        style={{ backgroundImage: `url(/assets/images/1.png)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute top-8 left-8 text-black p-6">
          <h2 className="text-3xl font-semibold">iPhone 16 Pro</h2>
          <p className="text-lg mt-2">Designed for Apple Intelligence.</p>
          <div className="mt-4 flex gap-4 items-center">
            <a href="/iphone-16-pro" className="text-blue-600 border-b-2 border-blue-600">Learn More</a>
            <a href="/buy-iphone-16-pro" className="bg-blue-500 text-black px-5 py-2 rounded-full hover:bg-blue-600 shadow-lg">Buy</a>
          </div>
        </div>
      </div>
      <div
        className="relative flex items-start justify-center h-[540px] w-[720px] rounded-2xl overflow-hidden shadow-lg mx-auto"
        style={{ backgroundImage: `url(/assets/images/2.png)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute top-8 left-8 text-black p-6">
          <h2 className="text-3xl font-semibold">MacBook Pro 14” and 16”</h2>
          <p className="text-lg mt-2">The most advanced Mac laptops for demanding workflows.</p>
          <div className="mt-4 flex gap-4 items-center">
            <a href="/macbook-pro" className="text-blue-600 border-b-2 border-blue-600">Learn More</a>
            <a href="/buy-macbook-pro" className="bg-blue-500 text-black px-5 py-2 rounded-full hover:bg-blue-600 shadow-lg">Buy</a>
          </div>
        </div>
      </div>
      <div
        className="relative flex items-start justify-center h-[540px] w-[720px] rounded-2xl overflow-hidden shadow-lg mx-auto"
        style={{ backgroundImage: `url(/assets/images/3.png)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute top-8 left-8 text-black p-6">
          <h2 className="text-3xl font-semibold">Apple Watch Ultra 2</h2>
          <p className="text-lg mt-2">The ultimate sports and adventure watch.</p>
          <div className="mt-4 flex gap-4 items-center">
            <a href="/apple-watch-ultra-2" className="text-blue-600 border-b-2 border-blue-600">Learn More</a>
            <a href="/buy-apple-watch-ultra-2" className="bg-blue-500 text-black px-5 py-2 rounded-full hover:bg-blue-600 shadow-lg">Buy</a>
          </div>
        </div>
      </div>
      <div
        className="relative flex items-start justify-center h-[540px] w-[720px] rounded-2xl overflow-hidden shadow-lg mx-auto"
        style={{ backgroundImage: `url(/assets/images/4.png)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute top-8 left-8 text-black p-6">
          <h2 className="text-3xl font-semibold">AirPods 4</h2>
          <p className="text-lg mt-2">The next evolution of sound and comfort.</p>
          <div className="mt-4 flex gap-4 items-center">
            <a href="/airpods-4" className="text-blue-600 border-b-2 border-blue-600">Learn More</a>
            <a href="/buy-airpods-4" className="bg-blue-500 text-black px-5 py-2 rounded-full hover:bg-blue-600 shadow-lg">Buy</a>
          </div>
        </div>
      </div>
    </section>
  );
}
