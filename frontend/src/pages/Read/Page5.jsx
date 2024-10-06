// import React from 'react'

// export default function Page5() {
//   return (
//     <div>
//       <h3 className="text-xl font-semibold mt-6">13. User-Generated Content Policy</h3>
//       <p><strong>Purpose:</strong> To establish guidelines for user-generated content (UGC) submitted to the company’s platforms.</p>
//       <p><strong>Policy:</strong></p>
//       <ul className="list-decimal list-inside mb-4">
//         <li><strong>Content Moderation:</strong> All UGC will be reviewed for appropriateness and relevance. Content that violates community guidelines will be removed.</li>
//         <li><strong>Intellectual Property:</strong> Users must not submit content that infringes upon the rights of others. Users retain ownership of their content but grant the company a license to use it.</li>
//         <li><strong>Respectful Interaction:</strong> Users must engage respectfully with others in any comments or discussions associated with UGC.</li>
//       </ul>
//       <p><strong>Enforcement:</strong> Violation of this policy will lead to content removal and potential suspension from the platform.</p>

//       <h3 className="text-xl font-semibold mt-6">14. Data Retention Policy</h3>
//       <p><strong>Purpose:</strong> To define the organization's data retention practices to ensure compliance with legal and regulatory requirements.</p>
//       <p><strong>Policy:</strong></p>
//       <ul className="list-decimal list-inside mb-4">
//         <li><strong>Retention Periods:</strong> Data will be retained only for as long as necessary for business purposes and legal compliance. Specific retention periods for different types of data will be defined and documented.</li>
//         <li><strong>Data Disposal:</strong> After the retention period has expired, data will be securely disposed of using appropriate methods to prevent unauthorized access.</li>
//         <li><strong>Periodic Reviews:</strong> Regular reviews of data retention practices will be conducted to ensure compliance and relevance to business operations.</li>
//       </ul>
//       <p><strong>Enforcement:</strong> Non-compliance with this policy may result in disciplinary action and potential legal ramifications.</p>

//       <h3 className="text-xl font-semibold mt-6">15. User Consent Policy</h3>
//       <p><strong>Purpose:</strong> To ensure that the organization obtains informed consent from users for data collection and processing.</p>
//       <p><strong>Policy:</strong></p>
//       <ul className="list-decimal list-inside mb-4">
//         <li><strong>Explicit Consent:</strong> Users must provide explicit consent for the collection and processing of their personal data. Consent forms must be clear, concise, and free of legal jargon.</li>
//         <li><strong>Withdrawal of Consent:</strong> Users have the right to withdraw their consent at any time. Processes for withdrawing consent must be straightforward and accessible.</li>
//         <li><strong>Age Verification:</strong> Consent must be obtained from a parent or guardian for users under the age of 16 (or applicable age as per local laws).</li>
//       </ul>
//       <p><strong>Enforcement:</strong> Non-compliance with the consent policy may result in disciplinary action and potential legal consequences.</p>

//     </div>
//   )
// }

import React from 'react'
import Header from '../../components/Header'

export default function Page5() {
  return (
    <div>
      {/* <Header/> */}
      <h3 className="text-xl font-semibold mt-6">13. User-Generated Content Policy</h3>
      <p><strong>Purpose:</strong> To provide guidelines for users who post content (e.g., reviews, comments) on the website.</p>
      <p><strong>Policy:</strong></p>
      <ul className="list-decimal list-inside mb-4">
        <li><strong>Allowed Content:</strong> Users may post reviews or comments, provided the content is not offensive, defamatory, or illegal.</li>
        <li><strong>Moderation:</strong> The company reserves the right to remove inappropriate content.</li>
        <li><strong>User Responsibility:</strong> Users are solely responsible for the content they post.</li>
      </ul>
      <p><strong>Enforcement:</strong> Violations of this policy will result in content removal and possible suspension of user privileges.</p>

      <h3 className="text-xl font-semibold mt-6">14. Data Retention Policy</h3>
      <p><strong>Purpose:</strong> To explain how long user data is stored and how it is securely deleted when no longer needed.</p>
      <p><strong>Policy:</strong></p>
      <ul className="list-decimal list-inside mb-4">
        <li><strong>Retention Periods:</strong> Data is retained for as long as necessary for the purpose for which it was collected.</li>
        <li><strong>Secure Deletion:</strong> Data will be securely deleted once it is no longer needed or upon user request.</li>
      </ul>
      <p><strong>Enforcement:</strong> Non-compliance with data retention procedures will result in disciplinary action.</p>

      <h3 className="text-xl font-semibold mt-6">15. User Consent Policy</h3>
      <p><strong>Purpose:</strong> To specify how and when user consent is obtained for the collection and use of personal data.</p>
      <p><strong>Policy:</strong></p>
      <ul className="list-decimal list-inside mb-4">
        <li><strong>Consent for Collection:</strong> Users must provide consent before their data is collected.</li>
        <li><strong>Withdrawing Consent:</strong>Users may withdraw consent at any time by updating their account settings. </li>
        <li><strong>Marketing Consent:</strong> Specific consent is required to receive marketing communications.</li>
      </ul>
      <p><strong>Enforcement:</strong> Non-compliance will result in suspension of data collection and marketing communications. </p>

    </div>
  )
}
