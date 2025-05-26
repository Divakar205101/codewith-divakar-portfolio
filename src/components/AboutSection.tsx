
import React from 'react';
import { User, Code, Book } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-primary-600">Me</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn more about my journey, experience, and passion for technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="prose prose-lg">
              <p className="text-gray-700 leading-relaxed mb-6">
                I am Divakar, working as a Java Full Stack Developer with 2+ years of experience. 
                I'm passionate about learning new technologies, discovering interesting facts, 
                watching cricket, and going on trips.
              </p>
              <p className="text-gray-700 leading-relaxed">
                My journey in software development has been driven by curiosity and a love for 
                problem-solving. I enjoy creating efficient, scalable solutions that make a 
                real difference in people's lives.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Book className="w-6 h-6 text-primary-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Education</h3>
                  <p className="text-gray-600">BSc from VDA Degree College</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Code className="w-6 h-6 text-primary-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Current Role</h3>
                  <p className="text-gray-600">Software Engineer at Chegus Infotech</p>
                  <p className="text-sm text-gray-500">April 2023 – Present</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <User className="w-6 h-6 text-primary-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Experience</h3>
                  <p className="text-gray-600">2+ years in Full Stack Development</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">2+</div>
              <div className="text-gray-700 font-medium">Years Experience</div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">10+</div>
              <div className="text-gray-700 font-medium">Technologies</div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">1</div>
              <div className="text-gray-700 font-medium">Major Project</div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-gray-700 font-medium">Dedication</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
