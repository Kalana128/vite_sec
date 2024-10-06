// import React from 'react'

// export default function Page2() {
//   return (
//     <div>
//       <h3 className="text-xl font-semibold mt-6">4. Code of Conduct</h3>
//       <p><strong>Purpose:</strong> To define standards for ethical and professional behavior within the workplace.</p>
//       <p><strong>Policy:</strong></p>
//       <ul className="list-decimal list-inside mb-4">
//         <li><strong>Professionalism:</strong> Employees are expected to conduct themselves in a manner that upholds the company’s values of integrity, respect, and ethical conduct. Interactions with colleagues, clients, and external partners must be handled with professionalism and respect.</li>
//         <li><strong>Non-Discrimination:</strong> Australian Migration Services (Pvt) Ltd is committed to providing an inclusive environment free from discrimination or harassment based on race, gender, age, religion, or any other protected characteristic.</li>
//         <li><strong>Conflict of Interest:</strong> Employees must avoid situations where personal interests conflict with company interests. Any potential conflicts must be disclosed to management.</li>
//         <li><strong>Gifts and Hospitality:</strong> Employees must not accept gifts, hospitality, or any form of compensation from clients, vendors, or other third parties that could influence or appear to influence decision-making.</li>
//       </ul>
//       <p><strong>Enforcement:</strong> Violations of the Code of Conduct will be addressed with appropriate disciplinary measures, which may include termination.</p>

//       <h3 className="text-xl font-semibold mt-6">5. Health and Safety Policy</h3>
//       <p><strong>Purpose:</strong> To provide a safe working environment for all employees.</p>
//       <p><strong>Policy:</strong></p>
//       <ul className="list-decimal list-inside mb-4">
//         <li><strong>Workplace Safety:</strong> Employees must adhere to all health and safety guidelines. Hazards must be reported immediately to management, and safety equipment must be used as required.</li>
//         <li><strong>Emergency Procedures:</strong> Employees must familiarize themselves with emergency procedures, including evacuation routes, emergency contacts, and first-aid protocols.</li>
//         <li><strong>Wellness Programs:</strong> The company promotes employee wellness through various initiatives, including health screenings and mental health resources. Employees are encouraged to participate in wellness programs.</li>
//       </ul>
//       <p><strong>Enforcement:</strong> Non-compliance with health and safety policies will lead to disciplinary actions, including possible termination for serious violations.</p>

//       <h3 className="text-xl font-semibold mt-6">6. Remote Work Policy</h3>
//       <p><strong>Purpose:</strong> To establish guidelines for remote work and ensure that employees maintain productivity and accountability while working from home or other remote locations.</p>
//       <p><strong>Policy:</strong></p>
//       <ul className="list-decimal list-inside mb-4">
//         <li><strong>Work Hours:</strong> Remote employees are expected to maintain the same work hours as in the office, ensuring availability during designated working hours.</li>
//         <li><strong>Productivity:</strong> Employees must set up a dedicated workspace that promotes productivity and minimizes distractions. Regular communication with supervisors and team members is essential to maintain collaboration and support.</li>
//         <li><strong>Equipment:</strong> Employees must use company-provided equipment for work-related tasks. Personal devices should only be used with prior approval from management and must comply with security protocols.</li>
//         <li><strong>Data Security:</strong> Remote employees must ensure that company data remains secure by using VPNs, secure internet connections, and keeping their work devices updated and protected.</li>
//       </ul>
//       <p><strong>Enforcement:</strong> Non-compliance with the remote work policy will result in corrective action and may affect eligibility for remote work in the future.</p>

//     </div>
//   )
// }

import React from 'react'
import Header from '../../components/Header'

export default function Page2() {
  return (
    <div>
      {/* <Header/> */}
      <h3 className="text-xl font-semibold mt-6">4. Code of Conduct</h3>
      <p><strong>Purpose:</strong> To define standards for ethical and professional behavior within the workplace.</p>
      <p><strong>Policy:</strong></p>
      <ul className="list-decimal list-inside mb-4">
        <li><strong>Professionalism:</strong> Employees are expected to conduct themselves in a manner that upholds the company’s values of integrity, respect, and ethical conduct. Interactions with colleagues, clients, and external partners must be handled with professionalism and respect.</li>
        <li><strong>Non-Discrimination:</strong> Australian Migration Services (Pvt) Ltd is committed to providing an inclusive environment free from discrimination or harassment based on race, gender, age, religion, or any other protected characteristic.</li>
        <li><strong>Conflict of Interest:</strong> Employees must avoid situations where personal interests conflict with company interests. Any potential conflicts must be disclosed to management.</li>
        <li><strong>Gifts and Hospitality:</strong> Employees must not accept gifts, hospitality, or any form of compensation from clients, vendors, or other third parties that could influence or appear to influence decision-making.</li>
      </ul>
      <p><strong>Enforcement:</strong> Violations of the Code of Conduct will be addressed with appropriate disciplinary measures, which may include termination.</p>

      <h3 className="text-3xl font-semibold mt-16 text-blue-600">5. Health and Safety Policy</h3>
      <p><strong>Purpose:</strong>To provide a safe and healthy working environment for all employees, ensuring compliance with occupational health and safety regulations.</p>
      <p><strong>Policy:</strong></p>
      <ul className="list-decimal list-inside mb-4">
        <li><strong>Workplace Safety:</strong> Employees must adhere to all safety procedures and policies in place to prevent workplace accidents and injuries. This includes following emergency protocols and reporting unsafe conditions.</li>
        <li><strong>Ergonomics:</strong> Employees must ensure their workstations are ergonomically sound to prevent strain and injury. Equipment, such as chairs and monitors, must be adjusted appropriately.</li>
        <li><strong>Incident Reporting:</strong> Any accidents, injuries, or unsafe conditions must be reported immediately to the safety officer or HR department.</li>
      </ul>
      <p><strong>Enforcement:</strong> Non-compliance with health and safety standards will result in corrective action, including possible suspension for repeated violations.</p>

      <h3 className="text-xl font-semibold mt-6">6. Remote Work Policy</h3>
      <p><strong>Purpose:</strong> To establish expectations and guidelines for employees working remotely, ensuring productivity and security are maintained.</p>
      <p><strong>Policy:</strong></p>
      <ul className="list-decimal list-inside mb-4">
        <li><strong>Work Hours and Availability:</strong>Employees are expected to maintain their regular work hours while working remotely and must be available for communication during these hours.</li>
        <li><strong>Security Practices:</strong>  Employees must use secure, company-approved tools and networks when working remotely. VPN usage is mandatory for accessing company systems from outside the office.</li>
        <li><strong>Data Protection:</strong>Employees are responsible for ensuring that sensitive data is not compromised while working remotely. This includes locking devices when not in use and using secure communication channels.</li>
      </ul>
      <p><strong>Enforcement:</strong>Failure to comply with the remote work policy may result in a reassessment of the employee’s eligibility to work remotely and potential disciplinary action.</p>

    </div>
  )
}
