import React, { useState } from 'react';
import ResourceSearch from './components/ResourceSearch';
import ResourceList from './components/ResourceList';
import { resources as initialResources } from './data/resources';

function App() {
  const [filteredResources, setFilteredResources] = useState(initialResources);

  const handleSearch = ({ skills, experience }) => {
    const filtered = initialResources.filter(resource => {
      const hasRequiredSkills = skills.length === 0 || 
        skills.every(skill => 
          resource.skills.some(resourceSkill => 
            resourceSkill.toLowerCase().includes(skill.toLowerCase())
          )
        );
      const hasRequiredExperience = resource.experience >= experience;
      
      return hasRequiredSkills && hasRequiredExperience;
    });
    
    setFilteredResources(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Resource Management System
          </h1>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Search Resources</h2>
            <ResourceSearch onSearch={handleSearch} />
            
            <h2 className="text-xl font-semibold mb-4">Available Resources</h2>
            <ResourceList resources={filteredResources} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;