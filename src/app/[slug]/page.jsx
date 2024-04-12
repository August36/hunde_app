import { notFound } from "next/navigation";
import Image from "next/image";

export default async function DogPage({ params }) {
  const { slug } = params;

  const url = `https://nice-dogs.vercel.app/api/dogs?slug=${slug}`;
  const res = await fetch(url);

  if (res.status !== 200) return notFound();

  const data = await res.json();
  const { name, age, favouriteColor, image } = data;
  console.log(data);

  return (
    <main className="md:flex max-w-7xl mx-auto">
      <Image
        src={image.url}
        alt="A cute dog"
        width={image.width}
        height={image.height}
        priority={true} // disables lazy load
        className="w-full md:w-1/2 xl:w-[600px]"
        sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        600px"
      />
      <div>
        <h1>{name}</h1>
        <p>
          {name} is {age}
        </p>
        <p>
          {name} likes {favouriteColor}
        </p>
      </div>
    </main>
  );
}
