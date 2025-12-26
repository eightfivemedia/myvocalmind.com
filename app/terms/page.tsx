import LegalPage from '@/components/landing/LegalPage';

export const metadata = {
  title: 'Terms of Service - VocalMind',
  description: 'VocalMind Terms of Service - Read our terms and conditions for using the app.',
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" lastUpdated="December 26, 2025">
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Agreement to Terms</h2>
          <p className="mb-4">
            Welcome to VocalMind! These Terms of Service ("Terms") govern your use of the VocalMind mobile application and website at myvocalmind.com (collectively, the "Service").
          </p>
          <p className="mb-4 font-semibold">
            By accessing or using VocalMind, you agree to be bound by these Terms. If you disagree with any part of these terms, you may not access the Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Description of Service</h2>
          <p className="mb-4">VocalMind is an AI-powered voice notes application that allows you to:</p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Record voice memos</li>
            <li>Automatically transcribe audio to text using AI</li>
            <li>Generate smart summaries of your recordings</li>
            <li>Organize and search your notes</li>
            <li>Sync data across your devices (optional)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Account and Access</h2>
          
          <h3 className="text-xl font-semibold text-white mb-3 mt-6">No Account Required</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>VocalMind does not require account creation or sign-in</li>
            <li>Access is provided immediately upon app installation</li>
            <li>Your data is stored locally on your device by default</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Age Requirements</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>You must be at least 13 years old to use VocalMind</li>
            <li>If you are under 18, you must have parental consent</li>
            <li>By using the Service, you represent that you meet these requirements</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Subscription and Pricing</h2>
          
          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Free Tier</h3>
          
          <h4 className="text-lg font-semibold text-white mb-2 mt-4">What's Included:</h4>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>10 voice recordings per month</li>
            <li>AI transcription and summaries</li>
            <li>Basic features</li>
            <li>Ad-supported experience</li>
          </ul>

          <h4 className="text-lg font-semibold text-white mb-2 mt-4">Limitations:</h4>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Monthly recording limit resets on the 1st of each month</li>
            <li>Ads displayed during app usage</li>
            <li>Standard support</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">VocalMind Pro</h3>
          
          <h4 className="text-lg font-semibold text-white mb-2 mt-4">Subscription Options:</h4>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Monthly: $9.99/month</li>
            <li>Annual: $79.99/year (save 33%)</li>
          </ul>

          <h4 className="text-lg font-semibold text-white mb-2 mt-4">Pro Features:</h4>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Unlimited voice recordings</li>
            <li>No advertisements</li>
            <li>Advanced AI features</li>
            <li>Priority support</li>
            <li>All future features included</li>
          </ul>

          <h4 className="text-lg font-semibold text-white mb-2 mt-4">Billing:</h4>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Subscriptions are billed through Apple App Store</li>
            <li>Payment is charged to your Apple ID account at confirmation of purchase</li>
            <li>Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current period</li>
            <li>You can manage and cancel subscriptions in your App Store account settings</li>
          </ul>

          <h4 className="text-lg font-semibold text-white mb-2 mt-4">Free Trials:</h4>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>We may offer free trial periods for Pro subscriptions</li>
            <li>You will be charged when the trial period ends unless you cancel before the trial expires</li>
            <li>Trials are available once per user</li>
          </ul>

          <h4 className="text-lg font-semibold text-white mb-2 mt-4">Refunds:</h4>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Refund requests are handled by Apple according to their refund policy</li>
            <li>We cannot process refunds directly</li>
            <li>Contact Apple Support for refund requests</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Acceptable Use</h2>
          
          <h3 className="text-xl font-semibold text-white mb-3 mt-6">You Agree to:</h3>
          
          <h4 className="text-lg font-semibold text-white mb-2 mt-4">Use the Service Lawfully</h4>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Comply with all applicable laws and regulations</li>
            <li>Respect intellectual property rights</li>
            <li>Not use the Service for illegal activities</li>
          </ul>

          <h4 className="text-lg font-semibold text-white mb-2 mt-4">Use the Service Responsibly</h4>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Record only content you have the right to record</li>
            <li>Not record private conversations without consent</li>
            <li>Respect others' privacy and confidentiality</li>
          </ul>

          <h4 className="text-lg font-semibold text-white mb-2 mt-4">Use the Service Fairly</h4>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Not abuse, exploit, or manipulate the Service</li>
            <li>Not attempt to bypass usage limits or restrictions</li>
            <li>Not reverse engineer or decompile the app</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">You Agree NOT to:</h3>
          
          <h4 className="text-lg font-semibold text-white mb-2 mt-4">Prohibited Content</h4>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Record, upload, or store illegal content</li>
            <li>Create content that violates others' rights</li>
            <li>Store malware, viruses, or harmful code</li>
            <li>Upload copyrighted material without permission</li>
          </ul>

          <h4 className="text-lg font-semibold text-white mb-2 mt-4">Prohibited Behavior</h4>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Harass, threaten, or harm others</li>
            <li>Impersonate others or misrepresent your identity</li>
            <li>Spam, abuse, or overload our systems</li>
            <li>Interfere with other users' access to the Service</li>
          </ul>

          <h4 className="text-lg font-semibold text-white mb-2 mt-4">Prohibited Technical Activities</h4>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Use bots, scrapers, or automated tools</li>
            <li>Attempt to bypass security measures</li>
            <li>Reverse engineer the application</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">User Content</h2>
          
          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Your Ownership</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>You retain all rights to your voice recordings and notes</li>
            <li>We do not claim ownership of your content</li>
            <li>You are solely responsible for your content</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">License to Us</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>You grant us a limited license to process your content to provide the Service</li>
            <li>This includes transcribing, storing, and generating summaries</li>
            <li>This license ends when you delete your content</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Your Responsibility</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>You are responsible for backing up your data</li>
            <li>We are not liable for data loss</li>
            <li>Ensure you comply with laws when recording (e.g., consent laws)</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Content Removal</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>We reserve the right to remove content that violates these Terms</li>
            <li>We may suspend or terminate accounts for violations</li>
            <li>We will notify you when possible before taking action</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Third-Party Services</h2>
          
          <h3 className="text-xl font-semibold text-white mb-3 mt-6">OpenAI Integration</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>We use OpenAI's APIs for transcription and AI summaries</li>
            <li>OpenAI's terms apply to their processing of your data</li>
            <li>We are not responsible for OpenAI service outages or errors</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Google Services</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>We use Firebase (Google Cloud) for storage and infrastructure</li>
            <li>Google's terms apply to cloud storage</li>
            <li>We are not responsible for Google service disruptions</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Advertising (Free Tier)</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Google AdMob provides advertising services</li>
            <li>Ad networks may collect data as described in our Privacy Policy</li>
            <li>Upgrade to Pro to remove all ads</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Intellectual Property</h2>
          
          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Our Rights</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>VocalMind, our logo, and app design are our property</li>
            <li>You may not copy, modify, or distribute our intellectual property</li>
            <li>All rights not expressly granted are reserved</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Trademarks</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>"VocalMind" is our trademark</li>
            <li>OpenAI, Whisper, and GPT-4 are trademarks of OpenAI</li>
            <li>Firebase and Google are trademarks of Google LLC</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Feedback</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>If you provide feedback or suggestions, we may use them freely</li>
            <li>You grant us an unlimited, perpetual license to implement your ideas</li>
            <li>We are not obligated to compensate you for feedback</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Service Availability</h2>
          
          <h3 className="text-xl font-semibold text-white mb-3 mt-6">No Guarantees</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>We provide the Service "as is" without guarantees</li>
            <li>We do not guarantee uninterrupted or error-free service</li>
            <li>Features may change or be discontinued</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Maintenance</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>We may perform maintenance that temporarily affects availability</li>
            <li>We will try to notify users of scheduled maintenance</li>
            <li>Emergency maintenance may occur without notice</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Service Changes</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>We may add, modify, or remove features</li>
            <li>We may change pricing with 30 days notice</li>
            <li>We may discontinue the Service with reasonable notice</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Disclaimers</h2>
          
          <h3 className="text-xl font-semibold text-white mb-3 mt-6">AI ACCURACY</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>AI transcriptions and summaries may contain errors</li>
            <li>Do not rely on transcriptions for critical or legal purposes</li>
            <li>Always verify important information</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">NO PROFESSIONAL ADVICE</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>VocalMind is not a substitute for professional advice</li>
            <li>Do not use the Service for medical, legal, or financial decisions</li>
            <li>Consult qualified professionals for important matters</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">THIRD-PARTY CONTENT</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>We are not responsible for content you create or store</li>
            <li>We are not responsible for third-party service failures</li>
            <li>Links to third-party sites are provided for convenience only</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Limitation of Liability</h2>
          <p className="mb-4 font-semibold">TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
          
          <h3 className="text-xl font-semibold text-white mb-3 mt-6">No Consequential Damages</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>We are not liable for indirect, incidental, or consequential damages</li>
            <li>This includes lost profits, data loss, or business interruption</li>
            <li>This applies even if we were advised of the possibility of such damages</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Limited Liability</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Our total liability is limited to the amount you paid in the last 12 months</li>
            <li>For free users, our liability is limited to $100 USD</li>
            <li>Some jurisdictions do not allow these limitations</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Exclusions</h3>
          <p className="mb-2">We are not liable for:</p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Data loss or corruption</li>
            <li>Third-party service failures (OpenAI, Firebase)</li>
            <li>Unauthorized access to your device</li>
            <li>Your violation of recording consent laws</li>
            <li>Force majeure events beyond our control</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Indemnification</h2>
          <p className="mb-4">
            You agree to indemnify and hold harmless VocalMind, its affiliates, and team members from any claims, damages, losses, or expenses (including legal fees) arising from:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Your use of the Service</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of any laws or rights of others</li>
            <li>Your content or recordings</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Privacy</h2>
          <p className="mb-4">
            Your privacy is important to us. Please review our <a href="/privacy" className="text-blue-300 hover:text-blue-200 underline">Privacy Policy</a> at myvocalmind.com/privacy to understand how we collect, use, and protect your information.
          </p>
          <p className="mb-4">
            By using VocalMind, you consent to our Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Recording Consent Laws</h2>
          
          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Your Responsibility</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>You are responsible for complying with recording consent laws</li>
            <li>Laws vary by jurisdiction regarding recording conversations</li>
            <li>Some jurisdictions require all-party consent to record</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">One-Party vs. All-Party Consent</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Some states/countries require only one party's consent (you)</li>
            <li>Others require all parties to consent to being recorded</li>
            <li>Violating these laws can result in criminal and civil penalties</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Our Position</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>We are not responsible for your compliance with recording laws</li>
            <li>We do not monitor content for legal compliance</li>
            <li>You assume all legal risk for your recordings</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Termination</h2>
          
          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Your Right to Terminate</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>You may stop using VocalMind at any time</li>
            <li>You may delete all your data at any time</li>
            <li>Uninstalling the app terminates your use</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Our Right to Terminate</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>We may suspend or terminate your access for violating these Terms</li>
            <li>We may terminate the Service entirely with reasonable notice</li>
            <li>We may terminate for any reason with notice</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Effect of Termination</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Your license to use VocalMind ends immediately</li>
            <li>Your data may be deleted from our servers</li>
            <li>Pro subscriptions are non-refundable upon termination for violations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Dispute Resolution</h2>
          
          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Informal Resolution</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Before filing any claim, contact us at <a href="mailto:support@myvocalmind.com" className="text-blue-300 hover:text-blue-200 underline">support@myvocalmind.com</a></li>
            <li>We will attempt to resolve disputes informally within 30 days</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Governing Law</h3>
          <p className="mb-4">
            These Terms are governed by the laws of [Your State/Country]. Disputes will be resolved in the courts of [Your Jurisdiction].
          </p>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Arbitration (If Applicable)</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Disputes may be resolved through binding arbitration</li>
            <li>Arbitration precludes jury trials and class actions</li>
            <li>You may opt out of arbitration by notifying us within 30 days</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Class Action Waiver</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>You agree to resolve disputes individually</li>
            <li>You waive the right to participate in class actions</li>
            <li>You waive the right to jury trials</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">General Terms</h2>
          
          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Entire Agreement</h3>
          <p className="mb-4">
            These Terms, along with our Privacy Policy, constitute the entire agreement. Previous agreements or understandings are superseded.
          </p>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Severability</h3>
          <p className="mb-4">
            If any provision is found invalid, the remaining provisions continue in effect. Invalid provisions will be modified to the minimum extent necessary.
          </p>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">No Waiver</h3>
          <p className="mb-4">
            Our failure to enforce any right or provision is not a waiver. Waivers must be in writing to be effective.
          </p>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Assignment</h3>
          <p className="mb-4">
            You may not transfer these Terms to anyone else. We may assign these Terms in connection with a merger or acquisition.
          </p>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Force Majeure</h3>
          <p className="mb-4">
            We are not liable for delays or failures due to circumstances beyond our control. This includes natural disasters, war, pandemics, or infrastructure failures.
          </p>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Updates to Terms</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>We may update these Terms at any time</li>
            <li>Material changes will be notified via email or in-app notification</li>
            <li>Continued use after changes constitutes acceptance</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Language</h3>
          <p className="mb-4">
            These Terms are written in English. Translations are for convenience only. The English version controls in case of conflicts.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Contact Us</h2>
          <p className="mb-4">If you have questions about these Terms, please contact us:</p>
          <ul className="list-none mb-4 space-y-2">
            <li><strong>Email:</strong> <a href="mailto:legal@myvocalmind.com" className="text-blue-300 hover:text-blue-200 underline">legal@myvocalmind.com</a></li>
            <li><strong>Support:</strong> <a href="mailto:support@myvocalmind.com" className="text-blue-300 hover:text-blue-200 underline">support@myvocalmind.com</a></li>
            <li><strong>Website:</strong> <a href="/support" className="text-blue-300 hover:text-blue-200 underline">https://myvocalmind.com/support</a></li>
            <li><strong>Mail:</strong> VocalMind Legal Department, [Your Business Address]</li>
          </ul>
        </section>

        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-white/80 italic">
            Thank you for using VocalMind! By using our Service, you agree to these Terms. We're committed to providing you with the best voice notes experience while protecting your rights and privacy.
          </p>
        </div>
      </div>
    </LegalPage>
  );
}

