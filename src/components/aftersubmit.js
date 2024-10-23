import React from 'react';
import banner from '../assets/right-side-banner.jpg'; // Đường dẫn banner hình ảnh
function ProjectList() {
    return (
        <div className="after-submit-container">
                <div className="after-submit-left-container">
                    <div className="after-submit-left-item-container">
                        <div className="after-submit-left-item">
                            <h2>Registered Project</h2>
                            
                            <div className="project-box">
                                <p className="project-name">Project: abcdassdbggfhmfhjm</p>
                                <p className="status rejected">Status: Rejected</p>
                            </div>

                            <div className="project-box">
                                <p className="project-name">Project: abcdassdbggfhmfhjm</p>
                                <p className="status approved">Status: Approved</p>
                            </div>

                            <div className="project-box">
                                <p className="project-name">Project: abcdassdbggfhmfhjm</p>
                                <p className="status approved">Status: Approved</p>
                            </div>

                            <div className="project-box">
                                <p className="project-name">Project: abcdassdbggfhmfhjm</p>
                                <p className="status approved">Status: Approved</p>
                            </div>

                            <div className="project-box">
                                <p className="project-name">Project: abcdassdbggfhmfhjm</p>
                                <p className="status approved">Status: Approved</p>
                            </div>

                        </div>
                        <div className="button-container">
                            <button className="create-button">Create</button>
                        </div>
                    </div>
                </div>

            {/* Right Container */}
            <div className="leader-right-container">
                <img id='img1' src={banner} alt="Right Side Banner" />
            </div>
        </div>
    );
}

export default ProjectList;
