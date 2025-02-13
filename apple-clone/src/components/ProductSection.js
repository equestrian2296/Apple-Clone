export default function ProductSection({ title, description, image }) {
    return (
      <section className="h-screen flex flex-col items-center justify-center text-center bg-gray-100">
        <h2 className="text-4xl font-semibold">{title}</h2>
        <p className="text-lg mt-2">{description}</p>
        <img src={image} alt={title} className="mt-4 w-1/2" />
      </section>
    );
  }
  