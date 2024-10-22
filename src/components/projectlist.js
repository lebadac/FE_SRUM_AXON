import React, { useState } from 'react';
import banner from '../assets/right-side-banner.jpg';
import calendarImage from '../assets/calendar.svg'; // Adjust the path as necessary
import locationIcon from '../assets/location.svg';

function ProjectList() {
    // Quản lý trạng thái của các trường
    const [projectName, setProjectName] = useState('');
    const [communitySize, setCommunitySize] = useState('');
    const [location, setLocation] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    // Xử lý sự kiện khi người dùng nhập dữ liệu
    const handleInputChange = (e) => setProjectName(e.target.value);
    const handleSizeChange = (e) => setCommunitySize(e.target.value);
    const handleLocationChange = (e) => setLocation(e.target.value);
    const handleStartDateChange = (e) => setStartDate(e.target.value);
    const handleEndDateChange = (e) => setEndDate(e.target.value);

    // Xác định step hiện tại dựa trên dữ liệu đã điền
    const getCurrentStep = () => {
        if (!projectName) return 1; // Nếu chưa nhập tên dự án, ở step 1
        if (!communitySize) return 2; // Nếu chưa chọn kích thước cộng đồng, ở step 2
        if (!startDate || !endDate) return 3; // Nếu chưa chọn ngày, ở step 3
        if (!location) return 4; // Nếu chưa chọn địa điểm, ở step 4
        return 5; // Nếu hoàn thành hết các trường
    };

    const currentStep = getCurrentStep();

    return (
      <div className="container">
        <div className="left-container">
            <div className="time-line">
                {/* Thanh timeline */}
                <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>1</div>
                <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>2</div>
                <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>3</div>
                <div className={`step ${currentStep >= 4 ? 'active' : ''}`}>4</div>
            </div>
            
            {/* Form điền thông tin */}
            <div className="fill-in">
                <div className="project-name">
                    <h3>Community Name</h3>
                    <input
                        id ='input-project'
                        type="text"
                        placeholder="Mua he xanh ..."
                        value={projectName}
                        onChange={handleInputChange}
                    />
                </div>
                
                <div class="require-skill">
                    <h3>Required Skills</h3>
                    <div class="skills-grid">
                        <div class="skill">
                            <h4>Event-organizing</h4>
                            <span class="checkmark">✔️</span>
                        </div>
                        <div class="skill">
                            <h4>Event-organizing</h4>
                            <span class="checkmark">✔️</span>
                        </div>
                        <div class="skill">
                            <h4>Event-organizing</h4>
                            <span class="checkmark">✔️</span>
                        </div>
                        <div class="skill">
                            <h4>Event-organizing</h4>
                            <span class="checkmark">✔️</span>
                        </div>
                        <div class="skill">
                            <h4>Event-organizing</h4>
                            <span class="checkmark">✔️</span>
                        </div>
                        <div class="skill">
                            <h4>Event-organizing</h4>
                            <span class="checkmark">✔️</span>
                        </div>
                    </div>
                </div>

                <div className="time">
                    <img src={calendarImage} alt="Calendar" />
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
                    <select className="location-picker" onChange={handleLocationChange}>
                        <option value="">Select Location</option>
                        <option value="Ho Chi Minh">Ho Chi Minh</option>
                    </select>
                </div>

                <div className="community-size">
                    <h3>Community Size</h3>
                    <select className="size-picker" onChange={handleSizeChange}>
                        <option value="" disabled hidden>Select community size</option> 
                        <option value="under50">Under 50 members</option>
                        <option value="50-100">50-100 members</option>
                        <option value="over100">Over 100 members</option>
                    </select>
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
