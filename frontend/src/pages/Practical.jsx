import Header from '../components/Header'
import React, { useState } from 'react';

const questions = [
  {
    question: "Which of the following emails is likely a phishing attempt?",
    options: [
      "A. email@legitimatecompany.com",
      "B. email@unknown-website.com",
      "C. email@bank.com"
    ],
    answer: 1, // Option B
    type: "multiple-choice"
  },
  {
    question: "What does HTTPS stand for?",
    options: [
      "A. Hypertext Transfer Protocol Secure",
      "B. Hypertext Transport Protocol",
      "C. Hypertext Transfer Protocol Standard"
    ],
    answer: 0, // Option A
    type: "multiple-choice"
  },
  {
    question: "Is it safe to share your password with your colleague?",
    answer: false,
    type: "true-false"
  },
  {
    question: "What should you do if you receive an unsolicited email asking for sensitive information?",
    options: [
      "A. Respond immediately",
      "B. Report it to your IT department",
      "C. Ignore it"
    ],
    answer: 1, // Option B
    type: "multiple-choice"
  },
  {
    question: "What is the minimum length recommended for a strong password?",
    options: [
      "A. 6 characters",
      "B. 8 characters",
      "C. 12 characters"
    ],
    answer: 2, // Option C
    type: "multiple-choice"
  },
];

export default function Practical() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const totalQuestions = questions.length;

  const handleAnswer = (index) => {
    const isCorrect = (index === questions[currentQuestion].answer || (questions[currentQuestion].type === 'true-false' && index === questions[currentQuestion].answer));
    setFeedback(isCorrect ? "Correct! Well done." : "Incorrect! Keep trying.");

    if (isCorrect) {
      setScore(score + 1);
    }
    
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setCompleted(true);
      localStorage.setItem('securityTrainingProgress', JSON.stringify({ currentQuestionIndex: nextQuestion, currentScore: score }));
    }
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    setFeedbackSubmitted(true);
    setFeedback("Thank you for your feedback!");
  };

  const completionPercentage = ((score / totalQuestions) * 100).toFixed(0);

  return (
    <div>
      <Header/>
    <div className='p-8 bg-gray-100 min-h-screen'>
      <h1 className='text-5xl font-bold text-blue-600 mt-2 mb-6'>Practical Security Awareness Training</h1>
      <p className=' text-xl py-5 '>In today’s fast-paced digital landscape, cyber threats are becoming more sophisticated and frequent, posing significant risks to both individuals and organizations. From phishing emails and malware infections to social engineering attacks and data breaches, cybercriminals are constantly looking for ways to exploit vulnerabilities. As employees, we play a crucial role in protecting the organization’s sensitive information and maintaining the integrity of its systems.
        <br/> <br/>
      Security awareness training is designed to equip you with the knowledge and skills needed to identify and respond to potential threats effectively. In this training, you’ll learn about various types of cyber threats, how they operate, and the best practices to prevent them. By staying informed and vigilant, you can help reduce the risk of security incidents, ensuring that both personal and organizational data remain secure.</p>

      {/* Introduction */}
      <section className='mb-8'>
        <h2 className='text-3xl font-bold mt-10 text-blue-600 underline'>Introduction to Security Awareness</h2>
        <p className='mt-6 text-lg'>
          In today's digital landscape, security awareness is more crucial than ever. 
          Cyber threats are constantly evolving, targeting individuals and organizations alike. 
          Understanding how to recognize and respond to these threats is essential to safeguarding our information.
        </p>
      </section>

      {/* Video Section */}
      <section className='mb-8'>
        <h2 className='text-2xl font-bold'>Training Video</h2>
       
       <div className=' mt-5'><span className=' text-2xl font-semibold'>Link:<a href="https://www.youtube.com/watch?v=JpfEBQn2CjM" className=' font-semibold underline pl-4 italic'>Pause, think and act - - Cyber security awareness video - Security Quotient</a></span>
       </div>
      
        <p className='mt-2 text-lg py-5'>Watch the video using given <a  href="https://www.youtube.com/watch?v=JpfEBQn2CjM"><span className=' text-blue-600'>link </span>link </a>to gain insights into the importance of security practices in your daily work routine.</p>
      </section>

      {/* Recognizing Phishing Attacks */}
      <section className='mb-8'>
        <h2 className='text-3xl font-bold mt-10 text-blue-600 underline'>Recognizing Phishing Attacks</h2>
        <p className='mt-6 text-lg'>
          Phishing attacks are deceptive tactics used to acquire sensitive information such as usernames, passwords, and credit card details. 
          Here are some signs to look out for:
          <ul className='list-disc ml-5 mt-2 px-4'>
            <li className=' text-lg py-2'><strong>Unexpected Requests:</strong> Emails or messages that request personal or financial information, especially if they come from unfamiliar sources.</li>
            <li className=' text-lg py-2'><strong>Suspicious Sender Addresses:</strong> Always check the sender’s email address. Phishing emails often use addresses that look similar to legitimate ones but may contain slight variations.</li>
            <li className=' text-lg py-2'><strong>Generic Greetings:</strong> Phishing messages often use generic greetings like “Dear Customer” instead of personalizing with your name.</li>
            <li className=' text-lg py-2'><strong>Urgent Language:</strong> Scare tactics are common in phishing attempts, urging you to act quickly or risk losing access to your account.</li>
            <li className=' text-lg py-2'><strong>Links that Don’t Match:</strong> Hover over links to see the actual URL. If it doesn’t match the company’s official website, it’s likely a scam.</li>
          </ul>
          If you suspect an email is a phishing attempt, do not click on any links or download attachments. Report it immediately to your IT department.
        </p>
      </section>

      {/* Safe Internet Practices */}
      <section className='mb-8'>
        <h2 className='text-3xl font-bold mt-10 text-blue-600 underline'>Safe Internet Practices</h2>
        <p className='mt-6 text-lg'>
          Implementing safe browsing habits is essential for protecting your personal and organizational data. Here are some practices to follow:
          <ul className='list-disc ml-5 mt-2 px-4'>
            <li className='text-lg py-2'><strong>Use HTTPS:</strong> Ensure that the websites you visit use HTTPS, which encrypts your data during transmission.</li>
            <li className='text-lg py-2'><strong>Avoid Public Wi-Fi:</strong> Avoid conducting sensitive transactions over public Wi-Fi networks. If you must use them, consider a VPN for added security.</li>
            <li className='text-lg py-2'><strong>Regularly Review Security Settings:</strong> Check and update your browser security settings periodically to ensure they are optimized for safety.</li>
            <li className='text-lg py-2'><strong>Clear Your Cache:</strong> Regularly clear your browser’s cache to remove potentially sensitive data stored during your browsing sessions.</li>
            <li className='text-lg py-2'><strong>Use Ad-blockers:</strong> Implementing ad-blockers can help you avoid malicious advertisements that may lead to phishing sites.</li>
            <li className='text-lg py-2'><strong>Verify Authenticity:</strong> Always verify the authenticity of a website before entering sensitive information by checking for contact details and reviews.</li>
          </ul>
        </p>
      </section>

      {/* Password Management */}
      <section className='mb-8'>
        <h2 className='text-3xl font-bold mt-10 text-blue-600 underline'>Password Management</h2>
        <p className='mt-6 text-lg'>
          Strong passwords are your first line of defense against unauthorized access. Here are guidelines to create and maintain strong passwords:
          <ul className='list-disc ml-5 mt-2 px-4'>
            <li className=' text-lg py-2'><strong>Use Lengthy Passwords:</strong> Aim for at least 12 characters, as longer passwords are harder to crack.</li>
            <li className=' text-lg py-2'><strong>Mix It Up:</strong> Incorporate uppercase letters, lowercase letters, numbers, and special symbols to increase complexity.</li>
            <li className=' text-lg py-2'><strong>Avoid Common Words:</strong> Do not use easily guessed passwords such as “password123” or your name. Use passphrases that are more secure.</li>
            <li className=' text-lg py-2'><strong>Password Managers:</strong> Consider using a password manager to securely store and generate strong passwords, making it easier to maintain unique passwords for different accounts.</li>
            <li className=' text-lg py-2'><strong>Regular Changes:</strong> Change your passwords regularly and especially after a data breach or suspected unauthorized access.</li>
            <li className=' text-lg py-2'><strong>Two-Factor Authentication (2FA):</strong> Enable 2FA on all accounts that offer it for an extra layer of security.</li>
          </ul>
        </p>
      </section>

      {/* Social Engineering Awareness */}
      <section className='mb-8'>
        <h2 className='text-3xl font-bold mt-10 text-blue-600 underline'>Social Engineering Awareness</h2>
        <p className='mt-6 text-lg'>
          Social engineering involves manipulating people into divulging confidential information. Here are some common tactics to be aware of:
          <ul className='list-disc ml-5 mt-2 px-4'>
            <li className=' text-lg py-2'><strong>Pretexting:</strong> Attackers create a fabricated scenario to obtain information. For example, pretending to be from IT support.</li>
            <li className=' text-lg py-2'><strong>Baiting:</strong> Offering something enticing, like free software, to persuade victims to disclose personal information.</li>
            <li className=' text-lg py-2'><strong>Tailgating:</strong> Gaining unauthorized access by following someone into a secure area. Always ensure you don’t let strangers into secure areas.</li>
            <li className=' text-lg py-2'><strong>Impersonation:</strong> Attackers may impersonate trusted individuals (like your manager) to extract sensitive information.</li>
            <li className=' text-lg py-2'><strong>Phone Scams:</strong> Be wary of unsolicited calls asking for sensitive information. Verify the identity of the caller before sharing any information.</li>
          </ul>
          Always be cautious about sharing information and verify the identity of those asking for it, especially if they contact you unexpectedly.
        </p>
      </section>

      {/* Quiz Section */}
      <section className='mb-8 mt-14'>
        <h2 className='text-3xl font-bold py-10 text-blue-600 underline'>Knowledge Check</h2>
        {completed ? (
          <div className='mt-4'>
            <h3 className='text-lg font-semibold'>Training Completed!</h3>
            <p>Your score: {score} out of {totalQuestions} ({completionPercentage}%)</p>
            <p className='mt-2'>Consider revisiting the training material if your score is below 80%.</p>
          </div>
        ) : (
          <div>
            <h3 className='text-lg font-semibold'>
              {questions[currentQuestion].question}
            </h3>
            <ul className='mt-2'>
              {questions[currentQuestion].options && questions[currentQuestion].options.map((option, index) => (
                <li key={index} className='mt-1'>
                  <button 
                    onClick={() => handleAnswer(index)}
                    className='bg-gray-200 rounded-md p-2 hover:bg-gray-300 transition duration-200'
                  >
                    {option}
                  </button>
                </li>
              ))}
              {questions[currentQuestion].type === 'true-false' && (
                <li className='mt-1'>
                  <button 
                    onClick={() => handleAnswer(true)}
                    className='bg-gray-200 rounded-md p-2 hover:bg-gray-300 transition duration-200'
                  >
                    True
                  </button>
                  <button 
                    onClick={() => handleAnswer(false)}
                    className='bg-gray-200 rounded-md p-2 hover:bg-gray-300 transition duration-200 ml-2'
                  >
                    False
                  </button>
                </li>
              )}
            </ul>
            {feedback && <p className='mt-2 text-sm text-gray-700'>{feedback}</p>}
          </div>
        )}
      </section>

      {/* Feedback Section */}
      <section>
        <h2 className='text-2xl font-semibold'>Feedback</h2>
        {!feedbackSubmitted ? (
          <form onSubmit={handleFeedbackSubmit} className='mt-4'>
            <textarea
              placeholder='Share your feedback...'
              className='w-full h-24 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            ></textarea>
            {/* <button
              type='submit'
              className='bg-blue-500 text-white px-4 py-2 rounded-md mt-2 shadow hover:bg-blue-600 transition duration-200'
            >
              Submit Feedback
            </button> */}
          </form>
        ) : (
          <p className='mt-4 text-lg'>Thank you for your feedback!</p>
        )}
      </section>

      {/* Final Notes */}
      <section>
        <h2 className='text-2xl font-bold mt-10'>Final Notes</h2>
        <p className='mt-2 '>
          Remember, security awareness is an ongoing effort. Stay vigilant and keep learning to protect yourself and your organization. 
          Here are some additional important points to keep in mind:
          <ul className='list-disc ml-5 mt-2 px-4'>
            <li className='py-2'><strong>Stay Informed:</strong> Regularly read up on the latest security threats and trends to remain proactive.</li>
            <li className='py-2'><strong>Engage in Continuous Learning:</strong> Attend workshops, webinars, and training sessions to refresh and expand your knowledge.</li>
            <li className='py-2'><strong>Participate in Simulations:</strong> Engage in security drills and simulations to enhance your skills in a controlled environment.</li>
            <li className='py-2'><strong>Promote a Culture of Security:</strong> Encourage your peers to adopt good security practices and share knowledge.</li>
            <li className='py-2'><strong>Report Suspicious Activity:</strong> Always report suspicious emails or activity to your IT department promptly.</li>
            <li className='py-2'><strong>Regularly Update Software:</strong> Keep all software and systems updated to protect against vulnerabilities.</li>
          </ul>
        </p>
      </section>
    </div>
    </div>
  );
}
