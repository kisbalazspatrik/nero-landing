import Button from "@/components/button";

export default function Home() {
  return (
    <main className="full-width border-neutral-700 sm:border max-w-[1200px] sm:m-2 p-3 justify-center flex items-center flex-col">
      <p>Nero</p>
      <div className="flex flex-row">
        <Button type="solid">Solid</Button>
        <Button type="outline">Solid</Button>
        <Button type="link">Solid</Button>
      </div>
    </main>
  );
}
