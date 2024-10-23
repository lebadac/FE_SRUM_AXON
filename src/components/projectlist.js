import React, { useState } from 'react';
import banner from '../assets/right-side-banner.jpg';
import calendarImage from '../assets/calendar.svg'; // Adjust the path as necessary
import locationIcon from '../assets/location.svg';
import notFillIcon from '../assets/not-fill.svg'; // Adjust the path as necessary
import fillIcon from '../assets/fill.svg'; // Adjust the path as necessary
import { useNavigate } from 'react-router-dom';

function ProjectList() {
    // Quản lý trạng thái của các trường
    const [projectName, setProjectName] = useState('');
    const [currentStep, setCurrentStep] = useState(0);
    const [communitySize, setCommunitySize] = useState('');
    const [location, setLocation] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [skillsFilled, setSkillsFilled] = useState(false); // 
    const [errorMessage, setErrorMessage] = useState(''); 
    const [dateErrorMessage, setDateErrorMessage] = useState('');
    
    const navigate = useNavigate();

    // Xử lý sự kiện khi người dùng nhập dữ liệu
    const handleInputChange = (event) => {
        const value = event.target.value;
        if (value.length > 50) {
            setErrorMessage('You have entered more than 50 characters.'); // Thông báo lỗi
        } else {
            setErrorMessage(''); // Xóa thông báo lỗi nếu hợp lệ
            setProjectName(value);
        }


        // Update currentStep based on whether the input is filled
        if (value.trim() !== '') {
            setCurrentStep((prevStep) => Math.max(prevStep, 1));
        } else {
            setCurrentStep(0);
        }
    };

    const handleStartDateChange = (event) => {
        const selectedStartDate = event.target.value;
        setStartDate(selectedStartDate);
    
        if (endDate && new Date(selectedStartDate) >= new Date(endDate)) {
            setDateErrorMessage('Start date must be earlier than end date.');
        } else {
            setDateErrorMessage('');
        }
    
        updateStep();
    };
    
    
    const handleEndDateChange = (event) => {
        const selectedEndDate = event.target.value;
        setEndDate(selectedEndDate);
    
        if (startDate && new Date(startDate) >= new Date(selectedEndDate)) {
            setDateErrorMessage('End date must be later than start date.');
        } else {
            setDateErrorMessage('');
        }
    
        updateStep();
    };
    
    
    const handleLocationChange = (event) => {
        const selectedLocation = event.target.value;
        setLocation(selectedLocation);
        updateStep(startDate, endDate, selectedLocation); // Truyền giá trị đã chọn vào hàm updateStep
    };

    const handleSizeChange = (e) => {
        const selectedSize = e.target.value;
        setCommunitySize(selectedSize);
        updateStep(startDate, endDate, location, selectedSize); // Truyền kích thước cộng đồng vào updateStep
    };
    
    

    const updateStep = (
        startDateValue = startDate, 
        endDateValue = endDate, 
        locationValue = location, 
        communitySizeValue = communitySize
    ) => {
        if (startDateValue && endDateValue && locationValue && communitySizeValue) {
            setCurrentStep((prevStep) => Math.max(prevStep, 4)); // Kích hoạt step 4 khi tất cả điều kiện đều thỏa mãn
        } else if (startDateValue && endDateValue && locationValue) {
            setCurrentStep((prevStep) => Math.max(prevStep, 3)); // Kích hoạt step 3 nếu chưa có communitySize
        } else if (projectName.trim() !== '') {
            setCurrentStep((prevStep) => Math.max(prevStep, 1));
        } else {
            setCurrentStep(0);
        }
    };
    
    

    // Xử lý sự kiện khi người dùng chọn kỹ năng
    const handleSkillsChange = () => {
        setSkillsFilled(true);
        setCurrentStep((prevStep) => Math.max(prevStep, 2));
    };

    // Xác định step hiện tại dựa trên dữ liệu đã điền


    const skills = ['Event-organizing', 'Communication', 'Teamwork', 'Problem-solving', 'Leadership', 'Time management'];
    // Initialize state to track which skills are selected
    const [selectedSkills, setSelectedSkills] = useState(Array(skills.length).fill(false));
    // Navigate
    // Function to toggle the selected state of a skill
    const toggleSkill = (index) => {
        const updatedSkills = [...selectedSkills];
        updatedSkills[index] = !updatedSkills[index];
        setSelectedSkills(updatedSkills);
        // Check if any skill is selected to activate step 2
        if (updatedSkills.some(skill => skill)) {
            setCurrentStep(2);
          } else {
            setCurrentStep(1); // Reset to step 1 if no skills are selected
          }
    };
 
    // Define the click handler function
    const handleCreateButtonClick = () => {
        if (projectName.trim() === '') {
            alert('Please enter a project name before creating.');
            return;
        }

        if (dateErrorMessage) {
            alert('Please correct the date errors before creating.');
            return;
        }
        
        if (!startDate || !endDate || !location || !communitySize) {
            alert('Please fill in all required fields.');
            return;
        }
        // Perform any logic you need when the button is clicked
        console.log('Create button clicked');
        // Navigate to the aftersubmit page
        navigate('/aftersubmit');
    };
    const handleCancelButtonClick = () => {
        // Perform any logic you need for deleting
        console.log('Cancel button clicked');
        // Example: Call an API to delete data
        navigate('/aftersubmit');
    };

    return (
        <div className='screen'>
            <div className="leader-container">
                <div className="leader-left-container">
                    
            <div className="time-line">
                <div className="circle-container">
                    <div className={`step circle step1 ${currentStep >= 1 ? 'active' : ''}`}>1</div>
                    <div className={`line line1 ${currentStep >= 1 ? 'active' : ''}`}></div>
                </div>
                <div className="circle-container">
                    <div className={`step circle step2 ${currentStep >= 2 ? 'active' : ''}`}>2</div>
                    <div className={`line line2 ${currentStep >= 2 ? 'active' : ''}`}></div>
                </div>
                <div className="circle-container">
                    <div className={`step circle step3 ${currentStep >= 3 ? 'active' : ''}`}>3</div>
                    <div className={`line line3 ${currentStep >= 3 ? 'active' : ''}`}></div>
                </div>
                <div className="circle-container">
                    <div className={`step circle step4 ${currentStep >= 4 ? 'active' : ''}`}>4</div>
                    
                </div>
            </div>
            {/* Form điền thông tin */}
            
            <div className="leader-fill-in">
                <div className={`project-name ${currentStep === 1 ? 'active' : ''}`}>
                    <h3>Community Name</h3>
                    <input
                        id="input-project"
                        type="text"
                        placeholder="Mua he xanh ..."
                        value={projectName}
                        onChange={handleInputChange}
                        maxLength={50} // Limit input to 50 characters
                    />
                    {errorMessage && <p style={{ color: 'red', fontSize: '17px' }}>{errorMessage}</p>}
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

                <div className={`time ${startDate && endDate && location ? 'active' : ''}`}>
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

                    <img id="location-icon" src={locationIcon} alt="Location" className="icon" />
                    <select
                        className={`location-picker ${location ? 'active' : ''}`}
                        onChange={handleLocationChange}
                    >
                        <option value="">Select Location</option>
                        <option value="Ho Chi Minh">Ho Chi Minh</option>
                        <option value="Ha Noi">Ha Noi</option>
                    </select>
                    
                </div>
                {dateErrorMessage && <p style={{ color: 'red', fontSize: '14px' }}>{dateErrorMessage}</p>}


                <div className={`community-size ${communitySize ? 'active' : ''}`}>
                    <h3>Community Size</h3>
                    <select className="size-picker" onChange={handleSizeChange}>
                        <option value="" disabled hidden>Select community size</option> 
                        <option value="under50">Under 50 members</option>
                        <option value="50-100">50-100 members</option>
                        <option value="over100">Over 100 members</option>
                    </select>
                </div>
                <div className ="create-button-container">
                
                    <div className="button-container">
                        <button className="create-button" onClick={handleCreateButtonClick}>
                            Create
                        </button>
                    </div>
                    <div className="button-container">
                        <button className="delete-button" onClick={handleCancelButtonClick}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
  
        </div>
        

        <div className="leader-right-container">
            <img id='img1' src={banner} alt="Right Side Banner" />
        </div>
      </div>
        </div>
    );
}

export default ProjectList;
