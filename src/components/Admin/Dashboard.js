import React, { useState, useEffect } from 'react';
import { FaUserGraduate } from 'react-icons/fa';
import axiosInstance from '../../api/axios'; // Ensure axiosInstance is correctly set up
import ProjectApplicantsPopup from './ProjectApplicantsPopup';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('pending');
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axiosInstance.get('/projects');
        console.log('API Response:', response.data); // Debugging line
        if (response.data.code === 1000) {
          setProjects(response.data.result);
        } else {
          setError('Failed to fetch projects');
        }
      } catch (err) {
        console.error('Error fetching projects:', err); // Debugging line
        setError('An error occurred while fetching projects');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects = projects.filter(project => project.action.toLowerCase() === activeTab);

  const openProjectApplicants = (project) => {
    setSelectedProject(project);
  };

  const closeProjectApplicants = () => {
    setSelectedProject(null);
  };

  const changeProjectAction = async (projectId, newAction) => {
    try {
      const response = await axiosInstance.put(`/projects/${projectId}`, {
        action: newAction,
      });
      if (response.data.code === 1000) {
        // Update the local state to reflect the change
        setProjects((prevProjects) =>
          prevProjects.map((project) =>
            project.id === projectId ? { ...project, action: newAction } : project
          )
        );
      } else {
        setError('Failed to update project action');
      }
    } catch (err) {
      console.error('Error updating project action:', err);
      setError('An error occurred while updating project action');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="bg-light-bg dark:bg-gray-900 min-h-screen font-jakarta">
      <div className="w-full grid grid-cols-[200px_1fr] min-h-screen">
        {/* Sidebar */}
        <div className="bg-white dark:bg-gray-800 border-r border-gray-300 dark:border-gray-700 p-4 flex flex-col gap-4">
          <div className="text-gray-900 dark:text-white text-lg font-semibold font-poppins mb-4">Dashboard</div>
          <div className="flex flex-col gap-2">
            <div className="bg-primary-600 rounded-lg p-2 flex items-center justify-center gap-2">
              <span className="font-medium font-inter text-white text-sm">Projects</span>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-col bg-white dark:bg-gray-900">
          {/* Header */}
          <div className="bg-white dark:bg-gray-800 shadow-md p-4"> 
            <h1 className="text-gray-900 dark:text-white text-xl font-semibold font-poppins">Projects</h1>
          </div>

          <div className="px-4 py-3 w-[100%]">
            <div className="flex items-center justify-start gap-6 relative">
              <div
                className={`text-[16px] font-semibold font-montserrat cursor-pointer px-4 py-2 rounded-t-lg transition-colors duration-200 ${
                  activeTab === 'pending'
                    ? 'text-primary-700 dark:text-primary-400 bg-white dark:bg-gray-800 border-t border-l border-r border-gray-300 dark:border-gray-600'
                    : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
                }`}
                onClick={() => setActiveTab('pending')}
              >
                Pending
              </div>
              <div
                className={`text-[16px] font-semibold font-montserrat cursor-pointer px-4 py-2 rounded-t-lg transition-colors duration-200 ${
                  activeTab === 'approved'
                    ? 'text-primary-700 dark:text-primary-400 bg-white dark:bg-gray-800 border-t border-l border-r border-gray-300 dark:border-gray-600'
                    : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
                }`}
                onClick={() => setActiveTab('approved')}
              >
                Approved
              </div>
              <div
                className={`text-[16px] font-semibold font-montserrat cursor-pointer px-4 py-2 rounded-t-lg transition-colors duration-200 ${
                  activeTab === 'rejected'
                    ? 'text-primary-700 dark:text-primary-400 bg-white dark:bg-gray-800 border-t border-l border-r border-gray-300 dark:border-gray-600'
                    : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
                }`}
                onClick={() => setActiveTab('rejected')}
              >
                Rejected
              </div>
            </div>
            <div className="w-full h-px bg-gray-300 dark:bg-gray-600"></div>
          </div>

          {/* Projects table */}
          <div className="p-4 flex-grow">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              {/* Table header */}
              <div className="bg-gray-50 dark:bg-gray-700 border-b border-gray-300 dark:border-gray-600 grid grid-cols-9 gap-2 p-2 text-gray-900 font-inter text-xs">
                <div className="font-inter dark:text-white font-semibold text-[16px] flex items-center justify-center">Id</div>
                <div className="font-inter dark:text-white font-semibold text-[16px] flex items-center justify-center">Project name</div>
                <div className="font-inter dark:text-white font-semibold text-[16px] flex items-center justify-center">Leader name</div>
                <div className="col-span-2 font-inter dark:text-white font-semibold text-[16px] flex items-center justify-center">Skills</div>
                <div className="font-inter dark:text-white font-semibold text-[16px] flex items-center justify-center">Start date</div>
                <div className="font-inter dark:text-white font-semibold text-[16px] flex items-center justify-center">End date</div>
                <div className="font-inter dark:text-white font-semibold text-[16px] flex items-center justify-center">Quantity</div>
                <div className="font-inter dark:text-white font-semibold text-[16px] flex items-center justify-center">Actions</div>
              </div>

              {/* Table body */}
              {filteredProjects.map((project) => (
                <div key={project.id} className="border-b border-gray-300 dark:border-gray-600 grid grid-cols-9 gap-4 py-3 px-4 text-gray-700 font-inter hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-xs items-center">
                  <div className="font-inter font-normal dark:text-gray-300 text-[16px] flex items-center justify-center">{project.id}</div>
                  <div className="font-inter font-normal dark:text-gray-300 text-[16px] flex items-center justify-center">{project.name}</div>
                  <div className="font-inter font-normal dark:text-gray-300 text-[16px] flex items-center justify-center">{project.leaderId}</div>
                  <div className="col-span-2 font-inter font-normal dark:text-gray-300 text-[16px] flex items-center justify-center">{project.skills.join(', ')}</div>
                  <div className="font-inter font-normal dark:text-gray-300 text-[16px] flex items-center justify-center">{project.startDate}</div>
                  <div className="font-inter font-normal dark:text-gray-300 text-[16px] flex items-center justify-center">{project.endDate}</div>
                  <div className="font-inter font-normal dark:text-gray-300 text-[16px] flex items-center justify-center">{project.quantity}</div>
                  <div className="flex justify-center items-center gap-2">
                    <button
                      onClick={() => openProjectApplicants(project)}
                      className="p-1.5 bg-blue-100 hover:bg-blue-200 rounded-full transition-colors duration-200 flex items-center justify-center"
                    >
                      <FaUserGraduate className="h-4 w-4 text-blue-600" />
                    </button>
                    <div className="flex justify-center items-center gap-2">
                      {activeTab === 'pending' && (
                        <>
                          <button
                            onClick={() => changeProjectAction(project.id, 'approved')}
                            className="p-1.5 bg-green-100 hover:bg-green-200 rounded-full transition-colors duration-200 flex items-center justify-center"
                          >
                            {/* Approve icon */}
                          </button>
                          <button
                            onClick={() => changeProjectAction(project.id, 'rejected')}
                            className="p-1.5 bg-red-100 hover:bg-red-200 rounded-full transition-colors duration-200 flex items-center justify-center"
                          >
                            {/* Reject icon */}
                          </button>
                        </>
                      )}
                      {activeTab === 'approved' && (
                        <span className="text-green-600 font-semibold">Approved</span>
                      )}
                      {activeTab === 'rejected' && (
                        <span className="text-red-600 font-semibold">Rejected</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedProject && (
        <ProjectApplicantsPopup
          project={selectedProject}
          onClose={closeProjectApplicants}
        />
      )}
    </div>
  );
};

export default Dashboard;
