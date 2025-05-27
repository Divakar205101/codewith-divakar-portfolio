import React from "react";

const achievements = [
  "Delivered multiple enterprise-level web applications with full-stack Java and Angular.",
  "Optimized application performance improving user experience and loading speed.",
  "Successfully implemented microservices using Spring Boot and Feign Client.",
  "Built and maintained CI/CD pipelines using Jenkins and Docker.",
  "Resolved critical production issues and enhanced insurance domain applications.",
  "Developed reusable Angular components and responsive UI with Tailwind CSS.",
];

const Achievements = () => {
  return (
    <section id="achievements" className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary-600">Achievements</h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700 text-lg">
          {achievements.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Achievements;
