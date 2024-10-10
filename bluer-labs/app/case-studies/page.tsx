'use client';

import CarouselDialog from "@/components/CarouselDialog"; // Import the carousel component

const CaseStudiesPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1>Case Studies</h1>
      <div className="flex items-center justify-center min-h-screen">
        <CarouselDialog /> {/* Render the carousel */}
      </div>
    </div>
  );
};

export default CaseStudiesPage;
