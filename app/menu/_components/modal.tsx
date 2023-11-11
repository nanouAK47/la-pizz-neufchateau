import Image from "next/image";
import { Eye } from "lucide-react";
import { pizzas } from "@/constants";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Modal() {
  return (
    <>
      {pizzas.map((pizza) => (
        <Dialog key={pizza.name}>
          <DialogTrigger className="flex items-center text-golden font-bold">
            <Eye width={30} height={30} fill="#dcca87" stroke="white" />
            {pizza.name}
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <Image
                src={pizza.img}
                width={240}
                height={320}
                alt={`pizza ${pizza.name}`}
                className="mx-auto mb-4 rounded-full"
                priority
              />

              <DialogTitle className="text-2xl">{pizza.name}</DialogTitle>
              <DialogDescription className="text-base">
                {pizza.ingredient}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      ))}
    </>
  );
}
