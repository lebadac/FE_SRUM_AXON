import React, { useState, useEffect } from "react";
import banner from "../assets/right-side-banner.jpg";
import axiosInstance from "../api/axios";

function StudentRegister() {
  const [name, setName] = useState("");
  const [studentID, setStudentID] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState("");

  // Fetch student and project data
  useEffect(() => {
    const fetchStudentInfo = async () => {
      try {
        const studentInfo = await axiosInstance.get("/users/myInfo");
        setName(studentInfo.data.result.name);
        setStudentID(studentInfo.data.result.studentID);
        setMobileNumber(studentInfo.data.result.phone);
      } catch (error) {
        console.error("Error fetching student info:", error);
      }
    };

    const fetchProjects = async () => {
      try {
        const projectsData = await axiosInstance.get("/projects");
        setProjects(projectsData.data.result);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchStudentInfo();
    fetchProjects();
  }, []);

  // Handle project selection
  const handleProjectChange = (e) => {
    setSelectedProject(e.target.value);
  };

  // Submit registration form
  const handleSubmit = async () => {
    const selectedProjectDetails = projects.find(
      (project) => project.id === selectedProject
    );
    const formData = {
      studentId: studentID,
      projectId: selectedProjectDetails, // Project ID of selected project
    };

    try {
      const response = await axiosInstance.post("/registration", formData);
      console.log("Registration successful:", response.data);
    } catch (error) {
      console.error("Error submitting registration:", error);
    }
  };

  return (
    <div className="screen">
      <div className="student-container">
        <div className="left-student-container">
          <h2 className="form-title">Student Registration</h2>
          <div className="fill-in">
            <div className="input-group">
              <label>Full Name</label>
              <input type="text" value={name} disabled />
            </div>

            <div className="input-group">
              <label>Student ID</label>
              <input type="text" value={studentID} disabled />
            </div>

            <div className="input-group">
              <label>Mobile Number</label>
              <input type="tel" value={mobileNumber} disabled />
            </div>

            <div className="input-group">
              <label>Available Projects</label>
              <select value={selectedProject} onChange={handleProjectChange}>
                {projects.map((project) => (
                  <option key={project.id} value={project.id}>
                    {project.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="button-container">
              <button className="create-button" onClick={handleSubmit}>
                Register
              </button>
              <button className="create-button cancel">Cancel</button>
            </div>
          </div>
        </div>

        <div className="right-container">
          <img className="banner-img" src={banner} alt="Right Side Banner" />
        </div>
      </div>
    </div>
  );
}

export default StudentRegister;
