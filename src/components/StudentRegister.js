import React, { useState } from "react";
import banner from "../assets/right-side-banner.jpg"; // Thay bằng đường dẫn banner phù hợp

function StudentRegister() {
  // Quản lý trạng thái của các trường
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("Male");
  const [studentID, setStudentID] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [communityName, setCommunityName] = useState("");
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
  const handleSkillsChange = (e) => {
    setSkills({ ...skills, [e.target.name]: e.target.checked });
  };

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
      <div className="container">
        <div className="left-container">
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
              </div>
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
