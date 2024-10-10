import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LinkIcon } from "lucide-react";

const carouselItems = [
  {
    id: 1,
    title: "Hunch ae",
    image: "/placeholder.svg?height=200&width=300",
    description: "A serene mountain landscape with snow-capped peaks.",
    link: "https://example.com/mountain",
  },
  {
    id: 2,
    title: "Theory AI",
    image: "/bluer-labs/assets/theoryai.jpeg?height=300&width=300",
    description: "The AI component of the TheoryAI GenAI app is designed to leverage advanced natural language processing (NLP) models to generate intelligent and contextually relevant responses. This directory contains the core functionalities that power the AI-driven features of the application, including:

Model Integration: Utilizes both base and fine-tuned models to provide high-quality responses tailored to specific use cases.
Response Generation: Implements functions to process user inputs, interact with the models, and generate coherent and contextually appropriate replies.
Data Handling: Manages the input data, including system messages, user prompts, and reference messages, ensuring that the models receive the necessary context for accurate response generation.
Error Handling: Includes robust error handling mechanisms to manage cases with insufficient data and other potential issues, ensuring a smooth user experience.",
    link: "https://example.com/beach",
  },
  {
    id: 3,
    title: "Kindred",
    image: "/placeholder.svg?height=200&width=300",
    description: "An impressive city skyline with modern skyscrapers.",
    link: "https://example.com/city",
  },
];

export default function CarouselDialog() {
  const [openDialog, setOpenDialog] = useState<number | null>(null);

  return (
    <div className="relative">
      <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
        <CarouselContent>
          {carouselItems.map((item) => (
            <CarouselItem key={item.id}>
              <Dialog
                open={openDialog === item.id}
                onOpenChange={(isOpen) =>
                  setOpenDialog(isOpen ? item.id : null)
                }
              >
                <DialogTrigger asChild>
                  <Card className="cursor-pointer border border-primary bg-transparent hover:scale-105 transition-transform">
                    <CardContent className="flex p-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 object-cover aspect-square"
                      />
                    </CardContent>
                    <div className="w-full p-4 flex items-center justify-center border-t border-primary bg-white">
                      <h3 className="text-lg font-semibold text-center">
                        {item.title}
                      </h3>
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px] md:max-w-[400px] lg:max-w-[400px] xl:max-w-[600px] w-screen h-screen flex flex-col justify-center items-center">
                  <DialogHeader>
                    <DialogTitle className="text-2xl mb-4">
                      {item.title}
                    </DialogTitle>
                    <DialogDescription className="text-md mb-6 text-center">
                      {item.description}
                    </DialogDescription>
                  </DialogHeader>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:text-primary-focus"
                  >
                    <LinkIcon className="mr-2" />
                    <span>Learn More</span>
                  </a>
                </DialogContent>
              </Dialog>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      {openDialog !== null && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm"
          aria-hidden="true"
        />
      )}
    </div>
  );
}
