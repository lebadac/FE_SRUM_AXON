import React, { useState } from "react";
import banner from "../assets/right-side-banner.jpg"; // Thay bằng đường dẫn banner phù hợp
import locationIcon from "../assets/location.svg";
function StudentRegister() {
  // Quản lý trạng thái của các trường
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("Male");
  const [studentID, setStudentID] = useState("");
  const [email, setEmail] = useState("");
  const [communitySize, setCommunitySize] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [communityName, setCommunityName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [skills, setSkills] = useState({
    eventOrganizing: false,
    media: false,
    cooking: false,
    communication: false,
    singing: false,
    construction: false,
  });

  // Xử lý sự kiện khi người dùng nhập dữ liệu
  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleGenderChange = (e) => setGender(e.target.value);
  const handleStudentIDChange = (e) => setStudentID(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMobileNumberChange = (e) => setMobileNumber(e.target.value);
  const handleCommunityNameChange = (e) => setCommunityName(e.target.value);
  const handleStartDateChange = (e) => setStartDate(e.target.value);
  const handleEndDateChange = (e) => setEndDate(e.target.value);
  const handleSizeChange = (e) => setCommunitySize(e.target.value);
  const handleSkillsChange = (e) => {
    setSkills({ ...skills, [e.target.name]: e.target.checked });
  };
  const [isOpen, setIsOpen] = useState(true); // State to control modal visibility

  const closeModal = () => {
    setIsOpen(false); // Update state to close the modal
  };

  if (!isOpen) return null;
  // Gửi form (giả sử có chức năng submit)
  const handleSubmit = () => {
    const formData = {
      firstName,
      lastName,
      gender,
      studentID,
      email,
      mobileNumber,
      communityName,
      skills,
    };
    console.log(formData);
  };

  return (
    <div className="screen">
      <div className="student-container">
        <div className="left-student-container">
          <div>
            <div className="fill-in">
              <div className="firstname">
                <h3>First Name</h3>
                <input
                  id="input-firstname"
                  type="text"
                  placeholder="Nemo"
                  value={firstName}
                  onChange={handleFirstNameChange}
                />
              </div>
              <div className="lastname">
                <h3>Last Name</h3>
                <input
                  id="input-lastname"
                  type="text"
                  placeholder="Nemo"
                  value={lastName}
                  onChange={handleLastNameChange}
                />
              </div>

              <div className="gender">
                <h3>Gender</h3>
                <div className="gender-ratio">
                  <label>
                    Male
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={gender === "Male"}
                      onChange={handleGenderChange}
                    />
                  </label>
                  <label>
                    Female
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      checked={gender === "Female"}
                      onChange={handleGenderChange}
                    />
                  </label>
                </div>
              </div>
              <div className="studentID">
                <h3>Student ID</h3>
                <h4>21520000</h4>
              </div>

              <div className="email">
                <h3>Email Address</h3>
                <input
                  type="email"
                  placeholder="123@gmail.com"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="mobile">
                <h3>Mobile Number</h3>
                <input
                  type="tel"
                  placeholder="123456778"
                  value={mobileNumber}
                  onChange={handleMobileNumberChange}
                />
              </div>
            </div>
            <div className="community-name">
              <h3>Community Name</h3>
              <select
                value={communityName}
                onChange={handleCommunityNameChange}
              >
                <option value="community1">Name 1</option>
                <option value="comminity2">Name 2</option>
              </select>
            </div>
            <div className="skills-box">
              <div className="skills">
                <h3>Required Skills</h3>
                <div className="skill-items">
                  <div className="skill-items-list">
                    <label>
                      <input
                        type="checkbox"
                        name="eventOrganizing"
                        checked={skills.eventOrganizing}
                        onChange={handleSkillsChange}
                      />
                      Event-organizing
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="media"
                        checked={skills.media}
                        onChange={handleSkillsChange}
                      />
                      Media
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="cooking"
                        checked={skills.cooking}
                        onChange={handleSkillsChange}
                      />
                      Cooking
                    </label>
                  </div>
                  <div className="skill-items-list">
                    <label>
                      <input
                        type="checkbox"
                        name="communication"
                        checked={skills.communication}
                        onChange={handleSkillsChange}
                      />
                      Communication
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="singing"
                        checked={skills.singing}
                        onChange={handleSkillsChange}
                      />
                      Singing
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="construction"
                        checked={skills.construction}
                        onChange={handleSkillsChange}
                      />
                      Construction
                    </label>
                  </div>
                </div>
                <div className={`time ${startDate && endDate ? "active" : ""}`}>
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

                  <img
                    id="location-icon"
                    src={locationIcon}
                    alt="Location"
                    className="icon"
                  />
                  <select
                    className="location-picker"
                    onChange={handleSizeChange}
                  >
                    <option value="">Select Location</option>
                    <option value="Ho Chi Minh">Ho Chi Minh</option>
                    <option value="Ho Chi Minh">Ha Noi</option>
                  </select>
                </div>

                <div
                  className={`community-size ${communitySize ? "active" : ""}`}
                >
                  <h3>Community Size</h3>
                  <select className="size-picker" onChange={handleSizeChange}>
                    <option value="" disabled hidden>
                      Select community size
                    </option>
                    <option value="under50">Under 50 members</option>
                    <option value="50-100">50-100 members</option>
                    <option value="over100">Over 100 members</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="button-container">
              <button className="create-button">Create</button>
              <button className="create-button cancel">Cancel</button>
            </div>
          </div>
        </div>

        <div className="right-container">
          <img id="img1" src={banner} alt="Right Side Banner" />
        </div>
      </div>
    </div>
  );
}

export default StudentRegister;
