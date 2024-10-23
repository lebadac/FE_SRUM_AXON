import React from 'react';
import banner from '../assets/right-side-banner.jpg'; // Đường dẫn banner hình ảnh
import { useNavigate } from 'react-router-dom';

function AfterSubmit() {
    const navigate = useNavigate();

    const handleProjectBoxClick = (projectName) => {
        // Perform any logic you need when the project box is clicked
        console.log(`Project box clicked: ${projectName}`);
        // Example: Navigate to a detailed view of the project
        navigate(`/project/${projectName}`); // Adjust the path as necessary
    };
    
    // Define the click handler for the Create button
    const handleCreateButtonClick = () => {
        // Perform any logic you need when the button is clicked
        console.log('Create button clicked');
        // Example: Navigate to a new page or reset form state
        navigate('/create-new'); // Adjust the path as necessary
    };

    return (
        <div className='screen'>
        <div className="after-submit-container">
                <div className="after-submit-left-container">
                    <div className="after-submit-left-item-container">
                        <div className="after-submit-left-item">
                            <h2>Registered Project</h2>
                            
                            <div className="project-box" onClick={() => handleProjectBoxClick('abcdassdbggfhmfhjm')}>
                                <p className="project-name">Project: abcdassdbggfhmfhjm</p>
                                <p className="status rejected">Status: Rejected</p>
                            </div>

                            <div className="project-box" onClick={() => handleProjectBoxClick('abcdassdbggfhmfhjm')}>
                                <p className="project-name">Project: abcdassdbggfhmfhjm</p>
                                <p className="status rejected">Status: Rejected</p>
                            </div>
                            
                            <div className="project-box" onClick={() => handleProjectBoxClick('abcdassdbggfhmfhjm')}>
                                <p className="project-name">Project: abcdassdbggfhmfhjm</p>
                                <p className="status rejected">Status: Rejected</p>
                            </div>

                            <div className="project-box" onClick={() => handleProjectBoxClick('abcdassdbggfhmfhjm')}>
                                <p className="project-name">Project: abcdassdbggfhmfhjm</p>
                                <p className="status rejected">Status: Rejected</p>
                            </div>

                        </div>
                        <div className="button-container">
                            <button className="create-button" onClick={handleCreateButtonClick}>
                                Create
                            </button>
                        </div>
                    </div>
                </div>

            {/* Right Container */}
            <div className="leader-right-container">
                <img id='img1' src={banner} alt="Right Side Banner" />
            </div>
        </div>
        </div>
    );
}

export default AfterSubmit;
