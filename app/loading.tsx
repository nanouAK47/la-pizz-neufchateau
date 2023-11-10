import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <section className="w-full bg-black flex-center text-golden">
      <Loader2 width={50} height={50} className="animate-spin mr-4" />
      <h1 className="text-2xl">Chargement...</h1>
    </section>
  );
}
