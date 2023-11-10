import Button from "@/components/button";

export default function NotFound() {
  return (
    <div className="w-full h-[75vh] bg-black flex justify-center items-center">
      <div className="flex-center flex-col">
        <h1 className="text-7xl text-[#dcca87] text-center mb-8">
          Veuillez réessayer
        </h1>
        <p className="text-base text-white mb-8">
          Impossible de trouver la page demandée
        </p>
        <Button title="Revenir à la page d'accueil" href="/" />
      </div>
    </div>
  );
}
