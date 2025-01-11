import React from 'react';

const ResourceList = ({ resources }) => {
  return (
    <div className="mt-8">
      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">ID</th>
              <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Name</th>
              <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Skills</th>
              <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Experience</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {resources.map((resource) => (
              <tr key={resource.resourceId}>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                  {resource.resourceId}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {resource.resourceName}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {resource.skills.join(', ')}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {resource.experience} years
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResourceList;