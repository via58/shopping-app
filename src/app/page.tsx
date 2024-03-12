import { Information } from "./static/info";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>
        Testing Next js Application
      </h1>
      <Information />
    </main>
  );
}
