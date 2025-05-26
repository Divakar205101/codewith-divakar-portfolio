
import React from 'react';
import { Code, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const project = {
    title: 'Employment Management System',
    description: 'A complete microservices-based application to manage employee data with full CRUD operations, authentication, and scalable architecture.',
    role: 'Full Stack Developer',
    technologies: ['Spring Boot', 'Angular', 'HTML', 'CSS', 'SQL', 'Feign Client'],
    features: [
      'Microservices Architecture',
      'Employee Data Management',
      'Authentication & Authorization',
      'RESTful API Integration',
      'Responsive Frontend',
      'Database Operations'
    ]
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="text-primary-600">Project</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Showcasing my expertise through real-world application development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Project Image Placeholder */}
            <div className="h-64 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
              <div className="text-center">
                <Code className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                <p className="text-primary-700 font-medium">Project Screenshot</p>
                <p className="text-primary-600 text-sm">Coming Soon</p>
              </div>
            </div>

            <div className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 md:mb-0">
                  {project.title}
                </h3>
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                  {project.role}
                </span>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary-600 hover:bg-primary-700 text-white flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  View on GitHub
                </Button>
                <Button variant="outline" className="border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white">
                  Live Demo
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action for more projects */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Interested in seeing more projects?</p>
          <Button 
            variant="outline"
            className="border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white"
          >
            Visit My GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
