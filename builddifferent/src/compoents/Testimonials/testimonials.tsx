import React, { useState } from "react";

const testimonialPages = [
  [
    {
      name: "Roger Scott",
      role: "Marketing Manager",
      imageUrl: "path-to-roger-image.jpg",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      highlight: false,
    },
    {
      name: "Robit Nio",
      role: "Marketing Manager",
      imageUrl: "path-to-robit-image.jpg",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      highlight: true,
    },
    {
      name: "Hexarider",
      role: "Marketing Manager",
      imageUrl: "path-to-hexarider-image.jpg",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      highlight: false,
    },
  ],
  [
    {
      name: "Alice Doe",
      role: "Project Lead",
      imageUrl: "path-to-alice-image.jpg",
      text: "A world beyond mountains, where blind texts roam in peace.",
      highlight: false,
    },
    {
      name: "John Smith",
      role: "Developer",
      imageUrl: "path-to-john-image.jpg",
      text: "In a distant land, far from the tumult of word mountains.",
      highlight: true,
    },
    {
      name: "Jane Doe",
      role: "Designer",
      imageUrl: "path-to-jane-image.jpg",
      text: "Creativity thrives in the peaceful lands of Vokalia.",
      highlight: false,
    },
  ],
];

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (index) => {
    setCurrentPage(index);
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="text-center mb-8">
        <p className="text-yellow-600 uppercase font-semibold">Testimonial</p>
        <h2 className="text-3xl font-bold text-gray-900">Happy Clients</h2>
      </div>
      <div className="flex justify-center gap-6">
        {testimonialPages[currentPage].map((testimonial, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-lg transition-colors duration-300 ${
              testimonial.highlight
                ? "bg-yellow-500 text-white hover:bg-yellow-600"
                : "bg-white text-gray-900 hover:bg-yellow-500 hover:text-white"
            }`}
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.imageUrl}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full border-2 border-gray-300 mr-4"
              />
              <div>
                <h4 className="font-bold">{testimonial.name.toUpperCase()}</h4>
                <p className="text-sm text-yellow-600">{testimonial.role}</p>
              </div>
            </div>
            <p>{testimonial.text}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6 gap-2">
        {testimonialPages.map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index)}
            className={`h-2 w-6 rounded-full transition-colors duration-300 ${
              currentPage === index ? "bg-yellow-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
