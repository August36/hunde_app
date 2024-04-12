export const dynamic = "force-dynamic";

export const metadata = {
  title: "Frontpage",
  description: "Description",
};

export default async function Home() {
  const apiUrl = "https://dog.ceo/api/breeds/image/random";
  const res = await fetch(apiUrl);
  const data = await res.json();

  console.log(data);

  return (
    <main>
      <h1>Hello World</h1>
      <img src={data.message} alt="cute dawg"></img>
    </main>
  );
}
