import { Card, CardTitle, CardDescription } from "@/components/ui/card";

const CardWithScroll: React.FC = () => {
  const cards = [
    { title: 'Software 1', description: 'Description of software 1.', imageSrc: '/path/to/image1.jpg' },
    { title: 'Software 2', description: 'Description of software 2.', imageSrc: '/path/to/image2.jpg' },
    { title: 'Software 3', description: 'Description of software 3.', imageSrc: '/path/to/image3.jpg' },
    { title: 'Software 4', description: 'Description of software 4.', imageSrc: '/path/to/image4.jpg' },
    { title: 'Software 5', description: 'Description of software 5.', imageSrc: '/path/to/image5.jpg' },
    { title: 'Software 6', description: 'Description of software 6.', imageSrc: '/path/to/image6.jpg' },
  ];

  return (
    <div className="h-full p-4">
      <div className="flex flex-wrap space-y-4">
        {cards.map((card, index) => (
          <div key={index} className="w-full lg:w-1/2 p-2">
            <Card className="flex flex-row h-32">
              <div className="flex-2 p-4">
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </div>
              <div className="w-1/3 bg-cover bg-center" style={{ backgroundImage: `url(${card.imageSrc})` }}></div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export { CardWithScroll };
