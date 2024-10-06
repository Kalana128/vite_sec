// import React from 'react'

// export default function Page8() {
//   return (
//     <div>
//        <h3 className="text-xl font-semibold mt-6">22. Service Modification Policy</h3>
//       <p><strong>Purpose:</strong> To define the process for modifying or discontinuing services offered by the organization.</p>
//       <p><strong>Policy:</strong></p>
//       <ul className="list-decimal list-inside mb-4">
//         <li><strong>Notice of Changes:</strong> Clients will be notified of any changes to services or discontinuation at least 30 days in advance, whenever possible.</li>
//         <li><strong>Client Feedback:</strong> Feedback from clients will be considered in the decision-making process regarding service modifications or discontinuation.</li>
//         <li><strong>Transition Support:</strong> The organization will provide support and resources to clients impacted by service changes to ensure a smooth transition.</li>
//       </ul>
//       <p><strong>Enforcement:</strong> Non-compliance with this policy may lead to client dissatisfaction and potential legal issues.</p>

//       <h3 className="text-xl font-semibold mt-6">23. Anti-Spam Policy</h3>
//       <p><strong>Purpose:</strong> To outline the organization’s commitment to preventing spam and maintaining email best practices.</p>
//       <p><strong>Policy:</strong></p>
//       <ul className="list-decimal list-inside mb-4">
//         <li><strong>Consent:</strong> All email communications must be sent with the recipient’s consent, obtained through opt-in mechanisms.</li>
//         <li><strong>Unsubscribe Option:</strong> Every email communication must include an option for recipients to unsubscribe from future emails.</li>
//         <li><strong>Monitoring and Enforcement:</strong> The organization will monitor email practices regularly to ensure compliance with anti-spam regulations and best practices.</li>
//       </ul>
//       <p><strong>Enforcement:</strong> Violations of this policy may lead to disciplinary action and potential legal ramifications.</p>

//       <h3 className="text-xl font-semibold mt-6">24. Payment Processing Policy</h3>
//       <p><strong>Purpose:</strong> To ensure secure and efficient payment processing for clients.</p>
//       <p><strong>Policy:</strong></p>
//       <ul className="list-decimal list-inside mb-4">
//         <li><strong>Payment Processing Platforms:</strong> The organization will utilize reputable payment processing platforms to handle all transactions securely.</li>
//         <li><strong>Client Verification:</strong> Clients may be required to verify their identity before processing payments to prevent fraud.</li>
//         <li><strong>Transaction Records:</strong> Accurate records of all transactions must be maintained for auditing and compliance purposes.</li>
//       </ul>
//       <p><strong>Enforcement:</strong> Violations of this policy may lead to disciplinary action and potential legal consequences.</p>

//     </div>
//   )
// }


import React from 'react'
import Header from '../../components/Header'

export default function Page8() {
  return (
    <div>
      {/* <Header/> */}
       <h3 className="text-xl font-semibold mt-6">22. Service Modification Policy</h3>
      <p><strong>Purpose:</strong> To describe the company’s right to modify or discontinue services and how users will be informed of changes.</p>
      <p><strong>Policy:</strong></p>
      <ul className="list-decimal list-inside mb-4">
        <li><strong>Service Changes:</strong> The company reserves the right to modify, suspend, or discontinue any part of the website without prior notice.</li>
        <li><strong>User Notification:</strong> Significant changes to services will be communicated via website announcements or email.</li>
      </ul>
      <p><strong>Enforcement:</strong> Users affected by service changes may be offered alternatives.</p>

      <h3 className="text-xl font-semibold mt-6">23. Anti-Spam Policy</h3>
      <p><strong>Purpose:</strong> To prohibit users from engaging in spamming activities and outline measures for detecting and preventing spam.</p>
      <p><strong>Policy:</strong></p>
      <ul className="list-decimal list-inside mb-4">
        <li><strong>Prohibition:</strong> Users are prohibited from sending unsolicited emails or posting spammy content.</li>
        <li><strong>Spam Detection:</strong> The company uses technologies to detect and prevent spam.</li>
      </ul>
      <p><strong>Enforcement:</strong> Accounts violating this policy may be suspended or terminated.</p>

      <h3 className="text-xl font-semibold mt-6">24. Age Restriction Policy</h3>
      <p><strong>Purpose:</strong> To specify age restrictions for using the website, particularly for services requiring legal age.</p>
      <p><strong>Policy:</strong></p>
      <ul className="list-decimal list-inside mb-4">
        <li><strong>Minimum Age:</strong> Users must be at least 18 years old to use certain services. </li>
        <li><strong>Parental Consent:</strong> Minors may only use the website with the consent of a parent or guardian.</li>
      </ul>
      <p><strong>Enforcement:</strong> Age verification may be required, and non-compliance will result in account suspension.</p>

    </div>
  )
}
