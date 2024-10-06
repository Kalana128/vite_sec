import React, { useEffect, useState } from 'react';
import LearningButton from '../components/LearningButton';
import ProgressNames from '../components/ProgressNames';
import Header from '../components/Header';
import AuthService from '../api/userAPI';

export default function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState({});
  const [assesment, setAssesment] = useState(0);
  const [reading, setReading] = useState(0);

  // Retrieve progress values from localStorage on component mount
  useEffect(() => {
    const savedAssesment = localStorage.getItem('assesment');
    const savedReading = localStorage.getItem('reading');

    if (savedAssesment) {
      setAssesment(JSON.parse(savedAssesment));
    }
    if (savedReading) {
      setReading(JSON.parse(savedReading));
    }

    const fetchProfile = async () => {
      try {
        const userProfile = await AuthService.getCurrentUserDetails();
        setProfile(userProfile);
        setIsLoggedIn(!!userProfile);
      } catch (err) {
        console.error(err.message);
        setIsLoggedIn(false);
      }
    };

    fetchProfile();
  }, []);

  // Save progress to localStorage
  const saveProgress = (assesment, reading) => {
    localStorage.setItem('assesment', JSON.stringify(assesment));
    localStorage.setItem('reading', JSON.stringify(reading));
  };

  // Handle Pre-Assessment progress update only once
  const handlePreAssesmentClick = () => {
    const preAssessmentCompleted = localStorage.getItem('preAssessmentCompleted');

    if (isLoggedIn && !preAssessmentCompleted) {
      const newAssesment = 135;
      setAssesment(newAssesment);
      saveProgress(newAssesment, reading);

      // Mark Pre-Assessment as completed in localStorage
      localStorage.setItem('preAssessmentCompleted', true);

      window.location.href = '/preAssement';
    } else if (!isLoggedIn) {
      window.location.href = '/sign-in';
    } else {
      // If pre-assessment is already completed, just redirect
      window.location.href = '/preAssement';
    }
  };

  const handleContentClick = () => {
    if (isLoggedIn) {
      const newReading = 270;
      setReading(newReading);
      saveProgress(assesment, newReading);
      window.location.href = '/content';
    } else {
      window.location.href = '/sign-in';
    }
  };

  const handleFinalAssesmentClick = () => {
    if (isLoggedIn) {
      const newAssesment = 450;
      setAssesment(newAssesment);
      saveProgress(newAssesment, reading);
      window.location.href = '/finalassesment';
    } else {
      window.location.href = '/sign-in';
    }
  };

  const handlePracticalClick = () => {
    if (isLoggedIn) {
      const newReading = 450;
      setReading(newReading);
      saveProgress(assesment, newReading);
      window.location.href = '/practical';
    } else {
      window.location.href = '/sign-in';
    }
  };

  return (
    <div>
      <Header />
      {/* Progress and Welcome message */}
      <div className='flex justify-between items-center mt-20 w-[90%] mx-auto'>
        {/* Welcome Note */}
        <div className='w-[40%] bg-slate-100'>
          <div className='bg-blue-600 w-full mx-auto px-8 py-10 text-justify rounded-3xl'>
            <div className='-mt-8'>
              <span className='text-white font-semibold text-[48px]'>Hello, {profile.firstname}!</span>
            </div>
            <div className='mt-5'>
              <span className='text-lg text-white'>
                Welcome to our Security Awareness Training! As a valued member of our organization, you play a critical role in protecting our systems, data, and people from cyber threats...
              </span>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className='bg-slate-200 w-[55%] p-5 rounded-3xl'>
          <div>
            <span className='text-blue-600 font-semibold text-[30px]'>Your Progress</span>
          </div>
          <div>
            <div className='m-10'>
              <ProgressNames title='Read' assesment={reading} />
            </div>
          </div>
          <div className='m-10'>
            <ProgressNames title='Assesment' assesment={assesment} />
          </div>
        </div>
      </div>

      <div className='bg-slate-200 mt-16 py-10 w-[90%] mx-auto'>
        <div className='pb-4 px-8 mb-5'>
          <span className='text-4xl font-bold text-blue-500'>Enroll Courses,</span>
        </div>

        <div className='flex justify-around items-center'>
          <div onClick={handlePreAssesmentClick} className='bg-white rounded-3xl p-5 flex flex-col justify-center items-center w-[14%] aspect-square'>
            <LearningButton title='Pre-Assessment' icon='PA' />
          </div>
          <div onClick={handleContentClick} className='bg-white rounded-3xl p-5 flex flex-col justify-center items-center w-[14%] aspect-square'>
            <LearningButton title='Reading' icon='RE' />
          </div>
          <div onClick={handlePracticalClick} className='bg-white rounded-3xl p-5 flex flex-col justify-center items-center w-[14%] aspect-square'>
            <LearningButton title='Practical' icon='PR' />
          </div>
          <div onClick={handleFinalAssesmentClick} className='bg-white rounded-3xl p-5 flex flex-col justify-center items-center w-[14%] aspect-square'>
            <LearningButton title='Final-Assessment' icon='FA' />
          </div>
        </div>
      </div>
    </div>
  );
}




// import React from 'react'
// import LearningButton from '../components/LearningButton'
// import ProgressNames from '../components/ProgressNames'
// import ProgressBar from '../components/ProgressBar'
// import { Link, useNavigate } from 'react-router-dom';

// export default function Dashboard() {
//   const navigate = useNavigate();

//   const handleNavigate = (path) => {
//     const storedValue = localStorage.getItem('isLoggedIn');
//     if (storedValue !== 'true') {
//       alert('Please sign in to access this page');
//       navigate('/sign-in'); // Commented out to stop redirect to signin
//     } else {
//       navigate();
//     }
//   };

//   return (
//     <div>
//       {/* Progress and Welocme massege */}
//       <div className=' flex justify-between items-center mt-20 w-[90%] mx-auto'>

//         {/* Welcome Note */}
//         <div className='w-[40%] bg-slate-700'>

//           <div className=' bg-blue-600 w-full mx-auto px-8 py-10 text-justify'>
//             <div className=' -mt-8'>
//               <span className='text-white font-semibold text-[48px]'>Hello, Kalana!</span>
//             </div>
//             <div className=' mt-5'>
//               <span className='text-2xl text-white '> Welcome to our Security Awareness Training! As a valued member of our organization, you play a critical role in protecting our systems, data, and people from cyber threats. This training will empower you with the knowledge and skills to identify and mitigate risks, and help build a culture of security that is strong, resilient, and unwavering. Let's work together to build a safer and more secure organization for everyone!</span>
//             </div>
//           </div>
          
//         </div>

//         {/* Progress bar */}
//         <div className=' bg-slate-200 w-[55%] p-5 '>

//             <div>
//               <span className=' text-blue-600 font-semibold text-[30px]'>Your Progress</span>
//             </div>

//             <div>
//               <div className=' m-10'>
//               <ProgressNames title='Read' />
//               </div>
//             </div>

//               <div className='m-10'>
//               <ProgressNames title='Practical' />
//               </div>
                 
//         </div>
//       </div>

//       <div className=' bg-slate-200 mt-16 py-10 w-[90%] mx-auto '>

//         <div className='pb-4 px-8 mb-5 '> 
//           <span className=' text-4xl font-bold text-blue-500'>Enroll Cources,</span>
//         </div>

//         <div className='flex justify-around items-center'>
//           <div onClick={() => handleNavigate('/preAssement')} className=' bg-white rounded-3xl p-5 flex flex-col justify-center items-center w-[13%] aspect-square'><LearningButton title='Pre-Assessment' icon='PA'/></div>
//           <div onClick={() => handleNavigate('/content')} className=' bg-white rounded-3xl p-5 flex flex-col justify-center items-center w-[13%] aspect-square '><LearningButton title='Reading' icon='RE'/></div>
//           <LearningButton title='Practical' icon='PR'/>
//           <div onClick={() => handleNavigate('/finalassesment')} className=' bg-white rounded-3xl p-5 flex flex-col justify-center items-center w-[13%] aspect-square'><LearningButton title='Final-Assessment' icon='FA'/></div>
//         </div> 
//       </div>

//     </div>
//   )
// }