import React, { useState } from 'react';

const ProjectApplicantsPopup = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState('notConfirmed');

  // Mock data for applicants (replace this with actual data from your API)
  const applicants = [
    { id: 'S1', name: 'Nguyen Thi Xuan', school: 'University of Information Technology', status: 'notConfirmed' },
    { id: 'S2', name: 'Nguyen Thi Hoa', school: 'Hutech', status: 'notConfirmed' },
    { id: 'S3', name: 'Nguyen Van A', school: 'University of Information Technology', status: 'accepted' },
    // Add more applicants as needed
  ];

  const filteredApplicants = applicants.filter(applicant => applicant.status === activeTab);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="w-[932px] h-[669px] p-6 bg-white rounded-2xl flex-col justify-center items-center gap-[27px] inline-flex">
        <div className="w-full flex justify-between items-center">
          <h2 className="text-2xl font-semibold font-poppins">{project.name} - Applicants</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="h-[30px] relative w-full">
          <div className="left-[16px] top-0 absolute justify-start items-center gap-[33px] inline-flex">
            <div
              className={`cursor-pointer ${activeTab === 'notConfirmed' ? 'text-[#22b473]' : 'text-[#bbbbbb]'} text-base font-semibold font-['Montserrat'] leading-[25px]`}
              onClick={() => setActiveTab('notConfirmed')}
            >
              Not confirmed
            </div>
            <div
              className={`cursor-pointer ${activeTab === 'accepted' ? 'text-[#22b473]' : 'text-[#bbbbbb]'} text-base font-semibold font-['Montserrat'] leading-[25px]`}
              onClick={() => setActiveTab('accepted')}
            >
              Accepted
            </div>
          </div>
          <div className="w-[887px] h-1 left-0 top-[27px] absolute">
            <div className={`w-[133.98px] h-[3px] left-[${activeTab === 'notConfirmed' ? '6.78px' : '153.78px'}] top-0 absolute bg-[#22b473] rounded-tl-[10px] rounded-tr-[10px] transition-all duration-300`}></div>
            <div className="w-[884px] h-[0.84px] left-0 top-[3.06px] absolute bg-[#e9e9e9]"></div>
          </div>
        </div>
        <div className="self-stretch h-[497px] rounded-lg border border-[#bbbbbb] flex-col justify-start items-start flex overflow-y-auto">
          <div className="self-stretch bg-[#e9f8f1] border-b border-[#dcdfe6] justify-start items-start inline-flex">
            <div className="w-[100px] self-stretch pl-4 pr-3 py-3 justify-start items-center gap-1 flex">
              <div className="grow shrink basis-0 text-[#242424] text-base font-semibold font-['Montserrat'] leading-[25px]">Id</div>
            </div>
            <div className="w-[300.67px] self-stretch p-3 justify-start items-center gap-1 flex">
              <div className="text-[#242424] text-base font-semibold font-['Montserrat'] leading-[25px]">Student name</div>
            </div>
            <div className="w-[300.67px] self-stretch p-3 justify-start items-center gap-1 flex">
              <div className="grow shrink basis-0 text-[#242424] text-base font-semibold font-['Montserrat'] leading-[25px]">School name</div>
            </div>
            <div className="w-[146px] self-stretch p-3 justify-start items-center gap-1 flex">
              <div className="grow shrink basis-0 text-[#242424] text-base font-semibold font-['Montserrat'] leading-[25px]">Actions</div>
            </div>
          </div>
          {filteredApplicants.map((applicant) => (
            <div key={applicant.id} className="self-stretch bg-white border-b border-[#bbbbbb] justify-start items-start inline-flex">
              <div className="w-[100px] self-stretch pl-4 pr-3 py-3 justify-start items-center gap-1 flex">
                <div className="grow shrink basis-0 text-[#6c6c6c] text-sm font-medium font-['Montserrat'] leading-normal">{applicant.id}</div>
              </div>
              <div className="w-[300.67px] self-stretch p-3 justify-start items-center gap-1 flex">
                <div className="grow shrink basis-0 text-[#6c6c6c] text-sm font-medium font-['Montserrat'] leading-normal">{applicant.name}</div>
              </div>
              <div className="w-[300.67px] self-stretch p-3 justify-start items-center gap-1 flex">
                <div className="grow shrink basis-0 text-[#6c6c6c] text-sm font-medium font-['Montserrat'] leading-normal">{applicant.school}</div>
              </div>
              <div className="w-[146px] h-14 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="self-stretch grow shrink basis-0 p-3 justify-center items-center gap-2 inline-flex">
                  {activeTab === 'notConfirmed' && (
                    <div className="justify-start items-center gap-4 flex">
                      <button className="p-1 bg-[#e9f8f1] rounded-[100px] justify-start items-center gap-2.5 flex">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <button className="p-1 bg-[#f9dedc]/40 rounded-[100px] justify-start items-center gap-2.5 flex">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  )}
                  {activeTab === 'accepted' && (
                    <span className="text-green-600 font-semibold">Accepted</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="justify-start items-center gap-10 inline-flex">
          <div className="justify-start items-center flex">
            <div className="w-10 h-10 px-4 py-[11px] bg-[#22b473] rounded-[10px] flex-col justify-center items-center gap-2.5 inline-flex">
              <div className="text-white text-[15px] font-medium font-['Inter']">1</div>
            </div>
            <div className="w-10 h-10 px-4 py-[11px] rounded-[10px] flex-col justify-center items-center gap-2.5 inline-flex">
              <div className="text-[#bbbbbb] text-[15px] font-medium font-['Inter']">2</div>
            </div>
            <div className="w-10 h-10 px-4 py-[11px] rounded-[10px] flex-col justify-center items-center gap-2.5 inline-flex">
              <div className="text-[#bbbbbb] text-[15px] font-medium font-['Inter']">3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectApplicantsPopup;
