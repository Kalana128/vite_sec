// import React from 'react'

// export default function Page4() {
//   return (
//     <div>
//        <h3 className="text-xl font-semibold mt-6">10. Refund Policy</h3>
//       <p><strong>Purpose:</strong> To establish guidelines for the processing of refunds to clients.</p>
//       <p><strong>Policy:</strong></p>
//       <ul className="list-decimal list-inside mb-4">
//         <li><strong>Eligibility:</strong> Refunds will be considered only for services not rendered or in cases where the service does not meet the agreed-upon standards. Clients must provide documentation to support their request.</li>
//         <li><strong>Timeframe:</strong> Requests for refunds must be made within 30 days of the service date. Refund requests submitted after this period may be denied.</li>
//         <li><strong>Processing Time:</strong> Approved refunds will be processed within 14 business days, and clients will receive confirmation via email.</li>
//       </ul>
//       <p><strong>Enforcement:</strong> Any fraudulent refund requests will result in disciplinary action and may lead to termination of services.</p>

//       <h3 className="text-xl font-semibold mt-6">11. Security Policy</h3>
//       <p><strong>Purpose:</strong> To protect the organization's physical and digital assets from theft, damage, and unauthorized access.</p>
//       <p><strong>Policy:</strong></p>
//       <ul className="list-decimal list-inside mb-4">
//         <li><strong>Physical Security:</strong> All physical access to company premises must be controlled through ID badges, visitor logs, and security personnel.</li>
//         <li><strong>Digital Security:</strong> Employees must ensure that devices used for work are secured with passwords and kept updated with the latest security patches and antivirus software.</li>
//         <li><strong>Data Backup:</strong> Regular data backups must be performed to prevent data loss. Backup procedures must be tested periodically to ensure their effectiveness.</li>
//       </ul>
//       <p><strong>Enforcement:</strong> Breaches of security protocols will result in disciplinary action, including termination if warranted.</p>

//       <h3 className="text-xl font-semibold mt-6">12. Accessibility Policy</h3>
//       <p><strong>Purpose:</strong> To ensure that all company services and resources are accessible to individuals with disabilities.</p>
//       <p><strong>Policy:</strong></p>
//       <ul className="list-decimal list-inside mb-4">
//         <li><strong>Website Accessibility:</strong> The company's website must comply with WCAG 2.1 guidelines to ensure accessibility for all users.</li>
//         <li><strong>Training:</strong> Employees must receive training on accessibility best practices and be aware of the needs of clients with disabilities.</li>
//         <li><strong>Feedback:</strong> Clients are encouraged to provide feedback on accessibility issues, which the company will address promptly.</li>
//       </ul>
//       <p><strong>Enforcement:</strong> Failure to comply with this policy may result in corrective actions and additional training for employees.</p>

//     </div>
//   )
// }

import React from 'react'
import Header from '../../components/Header'

export default function Page4() {
  return (
    <div>
      {/* <Header/> */}
       <h3 className="text-xl font-semibold mt-6">10. Refund Policy</h3>
      <p><strong>Purpose:</strong>To explain the conditions under which users may request a refund for services purchased through the website.</p>
      <p><strong>Policy:</strong></p>
      <ul className="list-decimal list-inside mb-4">
        <li><strong>Refund Requests:</strong>Users can request a refund within the specified time frame after purchasing a service, typically 14 days. </li>
        <li><strong>Conditions for Refund:</strong> Services must be canceled within the allowed period, and users must meet any specified conditions.</li>
        <li><strong>Process:</strong> Users must contact customer support, providing documentation if required.</li>
        <li><strong>Exception:</strong> Non-refundable services are excluded from this policy.</li>
      </ul>
      <p><strong>Enforcement:</strong> Refunds will be processed following verification, and non-compliance with the policy will result in rejection of the refund request.</p>

      <h3 className="text-xl font-semibold mt-6">11. Security Policy</h3>
      <p><strong>Purpose:</strong>  To ensure that user data and transactions are secure</p>
      <p><strong>Policy:</strong></p>
      <ul className="list-decimal list-inside mb-4">
        <li><strong>Security Measures:</strong> SSL encryption is used to protect data during transmission.</li>
        <li><strong>User Recommendations:</strong>Users are encouraged to use strong passwords and log out after use.</li>
        <li><strong>Security Audits:</strong> Regular audits will be conducted to ensure the integrity of the website.</li>
      </ul>
      <p><strong>Enforcement:</strong> Violations of the security measures will result in restricted access to services.</p>

      <h3 className="text-xl font-semibold mt-6">12. Accessibility Policy</h3>
      <p><strong>Purpose:</strong> To ensure that the website is accessible to all users, including those with disabilities.</p>
      <p><strong>Policy:</strong></p>
      <ul className="list-decimal list-inside mb-4">
        <li><strong>Compliance:</strong>  The website complies with web accessibility standards like WCAG 2.1.</li>
        <li><strong>Features:</strong> Accessibility features include screen reader compatibility, keyboard navigation, and color contrast adjustments.</li>
        <li><strong>User Support:</strong> A contact method is available for users encountering accessibility issues.</li>
      </ul>
      <p><strong>Enforcement:</strong> Failure to address reported accessibility issues may result in corrective action.</p>

    </div>
  )
}
