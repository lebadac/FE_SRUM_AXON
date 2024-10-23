import React from 'react';

const ProjectsPage = () => {
  const projects = [
    {
      id: 'P1',
      name: 'The regular lineup',
      leader: 'Nguyen Van A',
      skills: 'Cooking, Communication, Signing',
      startDate: '20/10/2024',
      endDate: '20/11/2024',
      quantity: '30',
      location: 'Binh Thanh'
    },
    {
      id: 'P2',
      name: 'EcoSummer',
      leader: 'Nguyen Van B',
      skills: 'Event-organizing, basic media skill, construction skill',
      startDate: '29/10/2024',
      endDate: '29/11/2024',
      quantity: '50',
      location: 'District 1'
    }
  ];

  return (
    <div className="w-full h-screen relative bg-gray-100">
      {/* Sidebar */}
      <div className="w-60 h-full absolute left-0 top-0 bg-gray-800 border-r border-gray-300 flex flex-col items-center gap-6">
        <div className="w-full p-6 flex flex-col gap-2.5">
          <div className="w-48 pl-4 pr-[26px] py-[13px] bg-gray-700 rounded-lg flex items-center gap-4">
            <div className="w-6 h-6"></div>
            <div className="text-white text-sm font-medium font-sans">Projects</div>
          </div>
          <div className="w-48 pl-4 pr-[26px] py-[13px] flex items-center gap-4">
            <div className="w-6 h-6"></div>
            <div className="grow text-gray-400 text-sm font-medium font-sans">Student</div>
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <div className="text-white text-xs font-medium">2</div>
            </div>
          </div>
          <div className="w-48 pl-4 pr-[26px] py-[13px] flex items-center gap-4">
            <div className="w-6 h-6"></div>
            <div className="grow text-gray-400 text-sm font-medium font-sans">Leader</div>
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <div className="text-white text-xs font-medium">3</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="ml-60 h-full flex flex-col">
        {/* Header */}
        <div className="h-24 px-6 py-8 bg-white border-b border-gray-300 flex items-center justify-between">
          <div className="text-gray-800 text-[32px] font-semibold font-sans">Projects</div>
          <div className="flex items-center gap-[23px]">
            <div className="text-gray-800 text-sm font-medium font-sans">Moni Roy</div>
            <div className="w-[18px] h-[18px] relative">
              <div className="w-1.5 h-1 absolute left-[6px] top-[7px]"></div>
            </div>
          </div>
        </div>

        {/* Projects table */}
        <div className="p-6 flex-grow">
          <div className="rounded-lg border border-gray-300">
            {/* Table header */}
            <div className="bg-gray-50 border-b border-gray-300 flex">
              <div className="w-20 pl-4 pr-3 py-3 font-semibold text-gray-800">Id</div>
              <div className="w-[153.14px] p-3 font-semibold text-gray-800">Project name</div>
              <div className="w-[153.14px] p-3 font-semibold text-gray-800">Leader name</div>
              <div className="w-[200px] p-3 font-semibold text-gray-800">Skills</div>
              <div className="w-[153.14px] p-3 font-semibold text-gray-800">Start date</div>
              <div className="w-[153.14px] p-3 font-semibold text-gray-800">End date</div>
              <div className="w-[100px] p-3 font-semibold text-gray-800">Quantity</div>
              <div className="w-[153.14px] p-3 font-semibold text-gray-800">Location</div>
            </div>

            {/* Table body */}
            {projects.map((project, index) => (
              <div key={project.id} className="bg-white border-b border-gray-300 flex">
                <div className="w-20 pl-4 pr-3 py-3 text-gray-600">{project.id}</div>
                <div className="w-[153.14px] p-3 text-gray-600">{project.name}</div>
                <div className="w-[153.14px] p-3 text-gray-600">{project.leader}</div>
                <div className="w-[200px] p-3 text-gray-600">{project.skills}</div>
                <div className="w-[153.14px] p-3 text-gray-600">{project.startDate}</div>
                <div className="w-[153.14px] p-3 text-gray-600">{project.endDate}</div>
                <div className="w-[100px] p-3 text-gray-600">{project.quantity}</div>
                <div className="w-[153.14px] p-3 text-gray-600">{project.location}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
