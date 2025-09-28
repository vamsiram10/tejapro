import FocusCards from "@/components/focus-cards";

export default function Page() {
  const cards = [
    // Add images 1.jpg to 54.jpg (from 1 to 54 inclusive)
    ...Array.from({ length: 54 }, (_, i) => ({
      title: `Image ${i + 1}`,
      src: `/images/${i + 1}.jpg`,
    })),
  ];

  return (
    <div
      style={{
        backgroundImage: "url('/ff.jpg')",
        backgroundRepeat: "repeat",
        backgroundSize: "contain",
        backgroundPosition: "top left",
        minHeight: "1000vh",
        width: "100vw",
        height: "100vh",
        maxWidth: "100vw",
        maxHeight: "1000vh",
      }}
    >
      <h1 className="absolute top-6 left-1/2 -translate-x-1/2 text-red-600  text-1xl md:text-4xl px-2 text-center w-[90vw] max-w-2xl font-bold">
        <b>TAT - TRY TO COMPLETE 1 OR 2 PICTURES EACH DAY TULASI !!!</b>
      </h1>
      <FocusCards cards={cards} />
    </div>
  );
}
