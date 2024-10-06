// import React from 'react'

// export default function Page12() {
//   return (
//     <div>
//       <h3 className="text-xl font-semibold mt-6">34. Privacy Policy</h3>
//       <p><strong>Purpose:</strong> To protect the privacy of clients and employees while ensuring compliance with privacy regulations.</p>
//       <p><strong>Policy:</strong></p>
//       <ul className="list-decimal list-inside mb-4">
//         <li><strong>Data Collection:</strong> The organization will only collect personal data necessary for its operations and will inform individuals about data collection practices.</li>
//         <li><strong>Data Usage:</strong> Personal data will be used only for the purposes outlined at the time of collection and will not be shared without consent.</li>
//         <li><strong>Data Security:</strong> The organization will implement appropriate security measures to protect personal data from unauthorized access and breaches.</li>
//       </ul>
//       <p><strong>Enforcement:</strong> Non-compliance with the privacy policy may lead to disciplinary action and legal ramifications.</p>

//       <h3 className="text-xl font-semibold mt-6">35. Crisis Management Policy</h3>
//       <p><strong>Purpose:</strong> To outline procedures for managing crises affecting the organization.</p>
//       <p><strong>Policy:</strong></p>
//       <ul className="list-decimal list-inside mb-4">
//         <li><strong>Crisis Identification:</strong> Employees must be trained to identify potential crises and report them promptly.</li>
//         <li><strong>Crisis Response Plan:</strong> The organization will develop and implement a crisis response plan that outlines roles, responsibilities, and procedures during a crisis.</li>
//         <li><strong>Post-Crisis Review:</strong> After a crisis, the organization will conduct a review to assess the response and identify areas for improvement.</li>
//       </ul>
//       <p><strong>Enforcement:</strong> Non-compliance with the crisis management policy may lead to disciplinary action and potential legal implications.</p>

//       <h3 className="text-xl font-semibold mt-6">36. Remote Work Policy</h3>
//       <p><strong>Purpose:</strong> To establish guidelines for remote work arrangements.</p>
//       <p><strong>Policy:</strong></p>
//       <ul className="list-decimal list-inside mb-4">
//         <li><strong>Eligibility:</strong> Employees must meet specific criteria to qualify for remote work arrangements.</li>
//         <li><strong>Work Hours:</strong> Employees must maintain regular work hours and be available for communication during those hours.</li>
//         <li><strong>Performance Expectations:</strong> Employees must meet performance expectations and deliverables while working remotely.</li>
//       </ul>
//       <p><strong>Enforcement:</strong> Non-compliance with the remote work policy may result in revocation of remote work privileges and potential disciplinary action.</p>
//     </div>
//   )
// }


import React from 'react'
import Header from '../../components/Header'

export default function Page12() {
  return (
    <div>
      {/* <Header/> */}
      <h3 className="text-xl font-semibold mt-6">34. External Payment Processor Policy </h3>
      <p><strong>Purpose:</strong> To describe the role of third-party payment processors (e.g., PayPal) in handling transactions.</p>
      <p><strong>Policy:</strong></p>
      <ul className="list-decimal list-inside mb-4">
        <li><strong>Third-Party Processors:</strong> The website uses third-party payment processors for secure transactions.</li>
        <li><strong>User Review:</strong> Users should review the terms of the payment processors used.</li>
      </ul>
      <p><strong>Enforcement:</strong> Payment disputes will be handled in accordance with the processor's terms.</p>

      <h3 className="text-xl font-semibold mt-6">35. Multi-Language Policy</h3>
      <p><strong>Purpose:</strong> To ensure that the website is available in multiple languages to accommodate diverse users.</p>
      <p><strong>Policy:</strong></p>
      <ul className="list-decimal list-inside mb-4">
        <li><strong>Language Options:</strong> The website offers various language options for users.</li>
        <li><strong>Switching Languages:</strong>  Users can switch languages using the settings or language tool.</li>
      </ul>
      <p><strong>Enforcement:</strong> Non-compliance may result in limited language availability.</p>

      <h3 className="text-xl font-semibold mt-6">36. Accessibility Feedback Policy</h3>
      <p><strong>Purpose:</strong> To encourage users to report any accessibility issues they encounter on the website.</p>
      <p><strong>Policy:</strong></p>
      <ul className="list-decimal list-inside mb-4">
        <li><strong>Report Issues:</strong>Users can report accessibility issues via a designated form or contact method.</li>
        <li><strong>Issue Resolution:</strong> The company will address issues as promptly as possible.</li>
      </ul>
      <p><strong>Enforcement:</strong> Failure to address reported issues may result in corrective action.</p>
    </div>
  )
}
