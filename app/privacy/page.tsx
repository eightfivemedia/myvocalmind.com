import LegalPage from '@/components/landing/LegalPage';

export const metadata = {
  title: 'Privacy Policy - VocalMind',
  description: 'VocalMind Privacy Policy - Learn how we collect, use, and protect your information.',
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="December 26, 2025">
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Introduction</h2>
          <p className="mb-4">
            Welcome to VocalMind ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience using our AI-powered voice notes application.
          </p>
          <p className="mb-4">
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website at myvocalmind.com.
          </p>
          <p className="mb-4 font-semibold">
            Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the application.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Information We Collect</h2>
          
          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Information You Provide to Us</h3>
          
          <h4 className="text-lg font-semibold text-white mb-2 mt-4">Audio Recordings</h4>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Voice recordings you create within the app</li>
            <li>Duration and timestamp of recordings</li>
          </ul>

          <h4 className="text-lg font-semibold text-white mb-2 mt-4">User-Generated Content</h4>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Text notes you create or edit</li>
            <li>Transcriptions generated from your voice recordings</li>
            <li>AI-generated summaries of your recordings</li>
          </ul>

          <h4 className="text-lg font-semibold text-white mb-2 mt-4">Device Information</h4>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Device type and model</li>
            <li>Operating system version</li>
            <li>Unique device identifiers (for app functionality only)</li>
            <li>App version</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Information Automatically Collected</h3>
          
          <h4 className="text-lg font-semibold text-white mb-2 mt-4">Usage Data</h4>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>App features you use</li>
            <li>Frequency of app usage</li>
            <li>Crash reports and performance data (if you opt-in)</li>
          </ul>

          <h4 className="text-lg font-semibold text-white mb-2 mt-4">Advertising Data (Free Tier Only)</h4>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Device advertising identifier (IDFA)</li>
            <li>Ad interaction data</li>
            <li>This data is collected by our advertising partner (Google AdMob) to show relevant ads</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">How We Use Your Information</h2>
          <p className="mb-4">We use the information we collect to:</p>
          
          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Provide Core Functionality</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Process and transcribe your voice recordings using OpenAI's Whisper API</li>
            <li>Generate AI summaries using OpenAI's GPT-4</li>
            <li>Store and sync your recordings across your devices</li>
            <li>Enable search functionality across your notes</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Improve Our Service</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Analyze app usage to improve features</li>
            <li>Fix bugs and optimize performance</li>
            <li>Develop new features based on user needs</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Display Advertisements (Free Tier Only)</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Show relevant ads through Google AdMob</li>
            <li>Measure ad performance</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Communicate With You</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Send important app updates</li>
            <li>Respond to your support requests</li>
            <li>Send service-related notifications</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">How We Share Your Information</h2>
          <p className="mb-4 font-semibold">
            We do NOT sell your personal information to third parties.
          </p>
          <p className="mb-4">We share your information only in the following circumstances:</p>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Service Providers</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li><strong>OpenAI</strong>: We send your audio recordings to OpenAI for transcription (Whisper API) and summary generation (GPT-4). OpenAI's privacy policy applies to this processing.</li>
            <li><strong>Firebase/Google Cloud</strong>: We use Firebase for cloud storage and app infrastructure. Your data is stored on Google's secure servers.</li>
            <li><strong>Google AdMob</strong> (Free Tier Only): Advertising partner that displays ads in the free version of the app.</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Legal Requirements</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>When required by law, subpoena, or court order</li>
            <li>To protect our rights, property, or safety</li>
            <li>To prevent fraud or illegal activity</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Business Transfers</h3>
          <p className="mb-4">
            In connection with a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Data Storage and Security</h2>
          
          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Where We Store Your Data</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Audio recordings: Firebase Cloud Storage (Google Cloud Platform)</li>
            <li>Transcriptions and notes: Firebase Firestore</li>
            <li>Server locations: United States (primary)</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">How We Protect Your Data</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Data encrypted in transit using HTTPS/TLS</li>
            <li>Data encrypted at rest on Firebase servers</li>
            <li>Secure API connections to OpenAI</li>
            <li>Regular security audits and updates</li>
            <li>No user authentication means no password vulnerabilities</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Data Retention</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>We retain your data for as long as you use the app</li>
            <li>You can delete individual recordings or all data at any time</li>
            <li>Deleted data is permanently removed from our servers within 30 days</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Your Data Rights</h2>
          <p className="mb-4">You have the right to:</p>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Access Your Data</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>View all your recordings and notes within the app</li>
            <li>Export your data (available in app settings)</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Delete Your Data</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Delete individual recordings</li>
            <li>Delete all your data by uninstalling the app or using the "Delete All Data" option in settings</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Control Your Data</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Disable cloud sync (data stays on device only)</li>
            <li>Opt out of crash reporting and analytics</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Advertising Controls (Free Tier)</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Use iOS Settings → Privacy → Advertising → Limit Ad Tracking</li>
            <li>Upgrade to Pro to remove all ads</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">No User Accounts</h2>
          <p className="mb-4">VocalMind does not require account creation or sign-in. Your data is:</p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li><strong>Stored locally</strong> on your device</li>
            <li><strong>Optionally synced</strong> to Firebase Cloud Storage</li>
            <li><strong>Not linked to an email address or personal identifier</strong></li>
            <li><strong>Tied to your device</strong> only</li>
          </ul>
          <p className="mb-4">This means:</p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>We cannot identify you personally</li>
            <li>Your privacy is enhanced</li>
            <li>You control when data is uploaded to the cloud</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Third-Party Services</h2>
          
          <h3 className="text-xl font-semibold text-white mb-3 mt-6">OpenAI</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>We use OpenAI's Whisper API for transcription</li>
            <li>We use OpenAI's GPT-4 for AI summaries</li>
            <li>Your audio is sent to OpenAI for processing</li>
            <li>OpenAI's Privacy Policy: <a href="https://openai.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline">https://openai.com/privacy</a></li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Google Firebase</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Cloud storage and app infrastructure</li>
            <li>Google's Privacy Policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline">https://policies.google.com/privacy</a></li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Google AdMob (Free Tier Only)</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Advertising services</li>
            <li>Google's Privacy Policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline">https://policies.google.com/privacy</a></li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Children's Privacy</h2>
          <p className="mb-4">
            VocalMind is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately at <a href="mailto:privacy@myvocalmind.com" className="text-blue-300 hover:text-blue-200 underline">privacy@myvocalmind.com</a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">International Data Transfers</h2>
          <p className="mb-4">
            Your data may be transferred to and processed in countries other than your country of residence, including the United States. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">California Privacy Rights (CCPA)</h2>
          <p className="mb-4">If you are a California resident, you have specific rights under the California Consumer Privacy Act:</p>
          
          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Right to Know</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Categories of personal information we collect</li>
            <li>How we use your personal information</li>
            <li>Whether we sell or share personal information (we do not)</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Right to Delete</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Request deletion of your personal information</li>
            <li>Subject to certain exceptions</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Right to Opt-Out</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Opt-out of the sale of personal information (we do not sell data)</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Non-Discrimination</h3>
          <p className="mb-4">
            We will not discriminate against you for exercising your privacy rights.
          </p>
          <p className="mb-4">
            To exercise these rights, contact us at <a href="mailto:privacy@myvocalmind.com" className="text-blue-300 hover:text-blue-200 underline">privacy@myvocalmind.com</a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">European Privacy Rights (GDPR)</h2>
          <p className="mb-4">If you are in the European Economic Area (EEA), you have rights under the General Data Protection Regulation:</p>
          
          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Legal Basis for Processing</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Contractual necessity (to provide the service)</li>
            <li>Legitimate interests (to improve our service)</li>
            <li>Consent (for advertising and analytics)</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Your Rights</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Right of access</li>
            <li>Right to rectification</li>
            <li>Right to erasure ("right to be forgotten")</li>
            <li>Right to restrict processing</li>
            <li>Right to data portability</li>
            <li>Right to object to processing</li>
            <li>Right to withdraw consent</li>
          </ul>
          <p className="mb-4">
            To exercise these rights, contact us at <a href="mailto:privacy@myvocalmind.com" className="text-blue-300 hover:text-blue-200 underline">privacy@myvocalmind.com</a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Do Not Track Signals</h2>
          <p className="mb-4">
            We do not currently respond to "Do Not Track" (DNT) signals as there is no industry standard for compliance.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Changes to This Privacy Policy</h2>
          <p className="mb-4">We may update this Privacy Policy from time to time. We will notify you of any changes by:</p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Posting the new Privacy Policy on this page</li>
            <li>Updating the "Last Updated" date</li>
            <li>Sending an in-app notification for material changes</li>
          </ul>
          <p className="mb-4">
            Your continued use of VocalMind after changes constitutes acceptance of the updated Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Contact Us</h2>
          <p className="mb-4">If you have questions or concerns about this Privacy Policy, please contact us:</p>
          <ul className="list-none mb-4 space-y-2">
            <li><strong>Email:</strong> <a href="mailto:privacy@myvocalmind.com" className="text-blue-300 hover:text-blue-200 underline">privacy@myvocalmind.com</a></li>
            <li><strong>Website:</strong> <a href="/support" className="text-blue-300 hover:text-blue-200 underline">https://myvocalmind.com/support</a></li>
            <li><strong>Mail:</strong> VocalMind Privacy Team, [Your Business Address]</li>
          </ul>
        </section>

        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-white/80 italic">
            Your privacy matters to us. We are committed to transparency and protecting your data. If you have any questions about how we handle your information, please don't hesitate to reach out.
          </p>
        </div>
      </div>
    </LegalPage>
  );
}

