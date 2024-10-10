import { Card, CardTitle, CardDescription } from "@/components/ui/card";

const CardWithScroll: React.FC = () => {
  const cards = [
    { title: 'Text into insights', description: 'Making customer interactions smoother and efficient. Think chatbots, automatic FAQ searches and customer & product insights.', imageSrc: '/path/to/image6.jpg' },
    { title: 'Automation', description: 'AI that handles repetitive tasks and streamlines operations. Create systems for automatically processing invoices, sort mails & more.', imageSrc: '/path/to/image6.jpg' },
    { title: 'Recommender Systems', description: 'Personalize user experiences and recommend products tailored to individual preferences, helping you engage customers and drive sales', imageSrc: '/path/to/image3.jpg' },
    { title: 'Gen AI', description: 'LLM Apps that generate creative content such as engaging articles or design eye-catching graphics based on your specifications.', imageSrc: '/path/to/image4.jpg' },
    { title: 'Business Analytics', description: 'Transforms your sales data to identify trends and predict future performance empowering you to make smarter business decisions.', imageSrc: '/path/to/image5.jpg' },
    { title: 'Speech Recognition/Audio Processing', description: 'Perform tasks that transform text to speech, and speech to text.', imageSrc: '/path/to/image7.jpg' },
    { title: 'Computer Vision', description: 'See and recognize things better than humans, making your quality inspections faster and more accurate. Identify defects, monitor and analyze images better.', imageSrc: '/path/to/image8.jpg' },
    { title: 'Custom AI Development', description: "Something new? There's nothing more I love than a good challenge", imageSrc: '/path/to/image1.jpg' },
  ];

  return (
    <div className="flex flex-wrap">
      {cards.map((card, index) => (
        <div key={index} className="w-full lg:w-1/2 p-2">
          <Card className="flex flex-col lg:flex-row h-48 border border-white bg-transparent"> {/* White outline and no fill */}
            <div className="flex-2 p-4">
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </div>
            <div className="w-full lg:w-1/3 bg-cover bg-center" style={{ backgroundImage: `url(${card.imageSrc})` }}></div>
          </Card>
        </div>
      ))}
    </div>
  );
}

export { CardWithScroll };
