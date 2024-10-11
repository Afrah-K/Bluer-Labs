import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { LinkIcon } from "lucide-react";

const carouselItems = [
  {
    id: 1,
    title: "Hunch ae",
    description: "A serene mountain landscape with snow-capped peaks.",
    link: "https://hunch.ae/",
  },
  {
    id: 2,
    title: "Theory AI",
    description: `Leveraged LLM to generate intelligent and contextually relevant responses. Some of the core functionalities that power the AI-driven features of the application include:

    - **Model Integration**: Utilizes both base and fine-tuned models to provide high-quality responses tailored to specific use cases.
    - **Response Generation**: Implements functions to process user inputs, interact with the models, and generate coherent and contextually appropriate replies.
    - **Data Handling**: Manages the input data, including system messages, user prompts, and reference messages, ensuring that the models receive the necessary context for accurate response generation.
    - **Error Handling**: Includes robust error handling mechanisms to manage cases with insufficient data and other potential issues, ensuring a smooth user experience.`,
    link: " https://apps.apple.com/us/app/theoryai/id6615087642",
  },
  {
    id: 3,
    title: "Kindred",
    description: "An impressive city skyline with modern skyscrapers.",
    link: "https://www.kindredapp.co/",
  },
];

export default function CarouselDialog() {
  return (
    <div className="relative">
      <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
        <CarouselContent>
          {carouselItems.map((item) => (
            <CarouselItem key={item.id}>
              <Card className="cursor-pointer border  border-white bg-transparent hover:scale-105 transition-transform w-400 h-400">
                <CardContent className="p-4">
                  <div className="flex justify-center items-center space-x-2">
                    <h3 className="text-2xl font-light text-center">
                      {item.title}
                    </h3>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-focus"
                    >
                      <LinkIcon />
                    </a>
                  </div>
                  <p className="text-sm mt-4 text-justify">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
