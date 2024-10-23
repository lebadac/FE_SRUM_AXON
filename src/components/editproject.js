import React, { useState } from 'react';
import banner from '../assets/right-side-banner.jpg';
import calendarImage from '../assets/calendar.svg'; // Adjust the path as necessary
import locationIcon from '../assets/location.svg';
import notFillIcon from '../assets/not-fill.svg'; // Adjust the path as necessary
import fillIcon from '../assets/fill.svg'; // Adjust the path as necessary

function ProjectList() {
    // Quản lý trạng thái của các trường
    const [projectName, setProjectName] = useState('');
    const [communitySize, setCommunitySize] = useState('');
    const [location, setLocation] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [skillsFilled, setSkillsFilled] = useState(false); // 
    
    // Xử lý sự kiện khi người dùng nhập dữ liệu
    const handleInputChange = (e) => setProjectName(e.target.value);
    const handleSizeChange = (e) => setCommunitySize(e.target.value);
    const handleLocationChange = (e) => setLocation(e.target.value);
    const handleStartDateChange = (e) => setStartDate(e.target.value);
    const handleEndDateChange = (e) => setEndDate(e.target.value);

    // Xử lý sự kiện khi người dùng chọn kỹ năng
    const handleSkillsChange = () => setSkillsFilled(true); // Simulate skills being filled

    // Xác định step hiện tại dựa trên dữ liệu đã điền
    const getCurrentStep = () => {
        if (!projectName) return 1;
        if (!skillsFilled) return 2;
        if (!startDate || !endDate) return 3;
        if (!location || !communitySize) return 4;
        return 5;
    };
    const currentStep = getCurrentStep();
    const skills = ['Event-organizing', 'Communication', 'Teamwork', 'Problem-solving', 'Leadership', 'Time management'];
    // Initialize state to track which skills are selected
    const [selectedSkills, setSelectedSkills] = useState(Array(skills.length).fill(false));

    // Function to toggle the selected state of a skill
    const toggleSkill = (index) => {
        const updatedSkills = [...selectedSkills];
        updatedSkills[index] = !updatedSkills[index];
        setSelectedSkills(updatedSkills);
    };

    return (
            <div className="container">
                <div className="left-container">
                    
                <div className="time-line">
            <div className="circle-container">
                <div className={`step circle step1 ${currentStep >= 1 ? 'active' : ''}`}>1</div>
                <div className="line line1"></div>
            </div>
            <div className="circle-container">
                <div className={`step circle step2 ${currentStep >= 2 ? 'active' : ''}`}>2</div>
                <div className="line line2"></div>
            </div>
            <div className="circle-container">
                <div className={`step circle step3 ${currentStep >= 3 ? 'active' : ''}`}>3</div>
                <div className="line line3"></div>
            </div>
            <div className="circle-container">
                <div className={`step circle step4 ${currentStep >= 4 ? 'active' : ''}`}>4</div>
            </div>
            </div>
            {/* Form điền thông tin */}
            
            <div className="fill-in">
                <div className={`project-name ${currentStep === 1 ? 'active' : ''}`}>
                    <h3>Community Name</h3>
                    <input
                        id ='input-project'
                        type="text"
                        placeholder="Mua he xanh ..."
                        value={projectName}
                        onChange={handleInputChange}
                    />
                </div>
                
                <div className={`require-skill ${skillsFilled ? 'active' : ''}`}>
                    <h3>Required Skills</h3>
                    <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div className="skill" key={index}>
                        <h4>{skill}</h4>
                        <img
                            src={selectedSkills[index] ? fillIcon : notFillIcon}
                            alt="Checkmark"
                            className="checkmark"
                            onClick={() => toggleSkill(index)}
                            style={{ cursor: 'pointer' }}
                        />
                        </div>
                    ))}
                    </div>
                </div>

                <div className={`time ${startDate && endDate ? 'active' : ''}`}>
                    {/* <img src={calendarImage} alt="Calendar" /> */}
                    <input 
                        type="date" 
                        className="date-picker" 
                        onChange={handleStartDateChange} 
                        placeholder="Select Start Date" 
                    />

                    <input 
                        type="date" 
                        className="date-picker" 
                        onChange={handleEndDateChange} 
                        placeholder="Select End Date" 
                    />

                    <img id = "location-icon" src={locationIcon} alt="Location" className="icon" />
                    <select
                        className="location-picker"
                        onChange={handleSizeChange}
                    >
                        <option value="">Select Location</option>
                        <option value="Ho Chi Minh">Ho Chi Minh</option>
                        <option value="Ho Chi Minh">Ha Noi</option>
                    </select>

                </div>

                <div className={`community-size ${communitySize ? 'active' : ''}`}>
                    <h3>Community Size</h3>
                    <select className="size-picker" onChange={handleSizeChange}>
                        <option value="" disabled hidden>Select community size</option> 
                        <option value="under50">Under 50 members</option>
                        <option value="50-100">50-100 members</option>
                        <option value="over100">Over 100 members</option>
                    </select>
                </div>
                <div className ="edit-container">
                    <div className="edit-button-container">
                        <button className="resubmit-button">Resubmit</button>
                    </div>
                    <div className="edit-button-container">
                        <button className="delete-button">Delete</button>
                    </div>
                </div>

            </div>
  
        </div>
        

        <div className="right-container">
            <img id='img1' src={banner} alt="Right Side Banner" />
        </div>
      </div>
    );
}

export default ProjectList;
