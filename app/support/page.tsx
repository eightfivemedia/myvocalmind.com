import LegalPage from '@/components/landing/LegalPage';

export const metadata = {
  title: 'Support & Help Center - VocalMind',
  description: 'Get help with VocalMind - FAQs, troubleshooting, feature guides, and contact support.',
};

export default function SupportPage() {
  return (
    <LegalPage title="Support & Help Center">
      <div className="space-y-8">
        <section>
          <p className="mb-8 text-lg">
            Welcome to VocalMind Support! We're here to help you get the most out of your AI-powered voice notes experience.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Quick Start Guide</h2>
          
          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Getting Started with VocalMind</h3>
          
          <h4 className="text-lg font-semibold text-white mb-2 mt-4">1. Install the App</h4>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Download VocalMind from the App Store</li>
            <li>Open the app (no sign-in required!)</li>
            <li>Grant microphone permission when prompted</li>
          </ul>

          <h4 className="text-lg font-semibold text-white mb-2 mt-4">2. Record Your First Note</h4>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Tap the microphone button on the home screen</li>
            <li>Speak clearly into your device</li>
            <li>Tap the stop button when finished</li>
            <li>Watch as AI transcribes and summarizes your recording!</li>
          </ul>

          <h4 className="text-lg font-semibold text-white mb-2 mt-4">3. View and Organize</h4>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Browse all your notes in the Notes tab</li>
            <li>Use search to find specific recordings</li>
            <li>Add tags to organize your notes</li>
            <li>Edit transcriptions if needed</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Frequently Asked Questions (FAQ)</h2>
          
          <h3 className="text-xl font-semibold text-white mb-3 mt-6">General Questions</h3>
          
          <h4 className="text-lg font-semibold text-white mb-2 mt-4">What is VocalMind?</h4>
          <p className="mb-4">
            VocalMind is an AI-powered voice notes app that automatically transcribes your voice recordings and generates smart summaries. It's perfect for capturing ideas, meeting notes, lectures, and more.
          </p>

          <h4 className="text-lg font-semibold text-white mb-2 mt-4">Do I need to create an account?</h4>
          <p className="mb-4">
            No! VocalMind works without any sign-in or account creation. Your privacy is our priority.
          </p>

          <h4 className="text-lg font-semibold text-white mb-2 mt-4">How does the AI transcription work?</h4>
          <p className="mb-4">
            We use OpenAI's Whisper API, one of the most accurate transcription technologies available. Your audio is processed securely and returned as text in seconds.
          </p>

          <h4 className="text-lg font-semibold text-white mb-2 mt-4">Is my data private and secure?</h4>
          <p className="mb-4">
            Yes! Your recordings are stored locally on your device by default. If you enable cloud sync, data is encrypted in transit and at rest. See our <a href="/privacy" className="text-blue-300 hover:text-blue-200 underline">Privacy Policy</a> for full details.
          </p>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Recording Questions</h3>
          
          <h4 className="text-lg font-semibold text-white mb-2 mt-4">How long can my recordings be?</h4>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li><strong>Free Tier:</strong> Up to 5 minutes per recording</li>
            <li><strong>Pro Tier:</strong> Up to 60 minutes per recording (effectively unlimited with chunking)</li>
          </ul>

          <h4 className="text-lg font-semibold text-white mb-2 mt-4">How many recordings can I make?</h4>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li><strong>Free Tier:</strong> 10 recordings per month</li>
            <li><strong>Pro Tier:</strong> Unlimited recordings</li>
          </ul>

          <h4 className="text-lg font-semibold text-white mb-2 mt-4">What audio quality should I use?</h4>
          <p className="mb-2">VocalMind automatically optimizes audio quality for the best transcription results. For best results:</p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Record in a quiet environment</li>
            <li>Speak clearly at a normal pace</li>
            <li>Keep your device within 1-2 feet of your mouth</li>
          </ul>

          <h4 className="text-lg font-semibold text-white mb-2 mt-4">Can I edit recordings after creating them?</h4>
          <p className="mb-2">You cannot edit the audio itself, but you can:</p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Edit the transcription text</li>
            <li>Add or modify notes</li>
            <li>Change the title</li>
            <li>Add tags</li>
          </ul>

          <h4 className="text-lg font-semibold text-white mb-2 mt-4">Why isn't my recording transcribing?</h4>
          <p className="mb-2">Check these common issues:</p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Ensure you have an internet connection (required for transcription)</li>
            <li>Make sure the recording is clear and audible</li>
            <li>Verify you haven't exceeded your monthly limit (Free tier)</li>
            <li>Check that the app has microphone permissions</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Transcription Questions</h3>
          
          <h4 className="text-lg font-semibold text-white mb-2 mt-4">How accurate is the transcription?</h4>
          <p className="mb-2">
            VocalMind uses state-of-the-art AI (OpenAI Whisper) which is highly accurate for clear audio. Accuracy depends on:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Audio quality</li>
            <li>Speaker clarity</li>
            <li>Background noise levels</li>
            <li>Language and accent</li>
          </ul>
          <p className="mb-4">Typical accuracy: 90-95% for clear recordings in English.</p>

          <h4 className="text-lg font-semibold text-white mb-2 mt-4">What languages are supported?</h4>
          <p className="mb-2">Currently, VocalMind supports:</p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>English (US, UK, Australian, Canadian)</li>
            <li>Spanish, French, German, Italian, Portuguese, Dutch</li>
            <li>Japanese, Chinese (Mandarin)</li>
          </ul>
          <p className="mb-4">More languages coming soon!</p>

          <h4 className="text-lg font-semibold text-white mb-2 mt-4">Can I edit transcriptions?</h4>
          <p className="mb-4">
            Yes! You can edit any transcription directly in the app. Just tap on the text and make your changes.
          </p>

          <h4 className="text-lg font-semibold text-white mb-2 mt-4">What if the transcription is wrong?</h4>
          <p className="mb-2">While AI is highly accurate, it's not perfect. You can:</p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Edit the transcription manually</li>
            <li>Re-record in a quieter environment</li>
            <li>Speak more clearly</li>
            <li>Contact support if errors are persistent</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Subscription & Billing</h3>
          
          <h4 className="text-lg font-semibold text-white mb-2 mt-4">What's included in the Free tier?</h4>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>10 voice recordings per month</li>
            <li>Up to 5 minutes per recording</li>
            <li>AI transcription and summaries</li>
            <li>Basic search</li>
            <li>Ad-supported</li>
          </ul>

          <h4 className="text-lg font-semibold text-white mb-2 mt-4">What's included in VocalMind Pro?</h4>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Unlimited voice recordings</li>
            <li>Up to 60 minutes per recording</li>
            <li>No advertisements</li>
            <li>Advanced AI features</li>
            <li>Priority support</li>
            <li>All future features</li>
          </ul>

          <h4 className="text-lg font-semibold text-white mb-2 mt-4">How much does Pro cost?</h4>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li><strong>Monthly:</strong> $9.99/month</li>
            <li><strong>Annual:</strong> $79.99/year (save 33%)</li>
          </ul>

          <h4 className="text-lg font-semibold text-white mb-2 mt-4">How do I upgrade to Pro?</h4>
          <ol className="list-decimal list-inside mb-4 space-y-2 ml-4">
            <li>Open VocalMind</li>
            <li>Tap Settings</li>
            <li>Tap "Upgrade to Pro"</li>
            <li>Choose Monthly or Annual</li>
            <li>Confirm with Apple Pay/Face ID</li>
          </ol>

          <h4 className="text-lg font-semibold text-white mb-2 mt-4">How do I cancel my subscription?</h4>
          <ol className="list-decimal list-inside mb-4 space-y-2 ml-4">
            <li>Open iPhone Settings</li>
            <li>Tap your name at the top</li>
            <li>Tap Subscriptions</li>
            <li>Select VocalMind</li>
            <li>Tap "Cancel Subscription"</li>
          </ol>

          <h4 className="text-lg font-semibold text-white mb-2 mt-4">Can I get a refund?</h4>
          <p className="mb-4">
            Refunds are handled by Apple according to their refund policy. Contact Apple Support to request a refund.
          </p>

          <h4 className="text-lg font-semibold text-white mb-2 mt-4">What happens if I cancel Pro?</h4>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>You keep Pro features until the end of your billing period</li>
            <li>After that, you revert to the Free tier (10 recordings/month)</li>
            <li>All your existing recordings and data remain accessible</li>
            <li>You can re-subscribe at any time</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Features & Functionality</h3>
          
          <h4 className="text-lg font-semibold text-white mb-2 mt-4">How does search work?</h4>
          <p className="mb-2">VocalMind searches across:</p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Note titles</li>
            <li>Transcription text</li>
            <li>AI summaries</li>
            <li>Tags you've added</li>
          </ul>
          <p className="mb-4">Just type in the search bar and results appear instantly!</p>

          <h4 className="text-lg font-semibold text-white mb-2 mt-4">Can I organize notes with tags?</h4>
          <p className="mb-2">Yes! Add tags to any note:</p>
          <ol className="list-decimal list-inside mb-4 space-y-2 ml-4">
            <li>Open a note</li>
            <li>Tap "Add Tags"</li>
            <li>Type your tag and press enter</li>
            <li>Tags help you filter and organize</li>
          </ol>

          <h4 className="text-lg font-semibold text-white mb-2 mt-4">Can I export my notes?</h4>
          <p className="mb-2">Yes! You can export:</p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Individual notes as text or PDF</li>
            <li>All notes at once</li>
            <li>Audio files</li>
            <li>Transcriptions</li>
          </ul>
          <p className="mb-4">Go to Settings → Export Data</p>

          <h4 className="text-lg font-semibold text-white mb-2 mt-4">Does VocalMind work offline?</h4>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li><strong>Recording:</strong> Yes, works offline</li>
            <li><strong>Transcription:</strong> No, requires internet connection</li>
            <li><strong>Viewing notes:</strong> Yes, works offline</li>
            <li><strong>Syncing:</strong> No, requires internet connection</li>
          </ul>

          <h4 className="text-lg font-semibold text-white mb-2 mt-4">Can I use VocalMind on multiple devices?</h4>
          <p className="mb-4">
            Currently, VocalMind is iOS-only. Cloud sync keeps your data in sync across your iPhone and iPad. Android support coming in 2026!
          </p>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Technical Issues</h3>
          
          <h4 className="text-lg font-semibold text-white mb-2 mt-4">The app won't record</h4>
          <p className="mb-2">Try these steps:</p>
          <ol className="list-decimal list-inside mb-4 space-y-2 ml-4">
            <li>Check microphone permissions: Go to Settings → VocalMind → Microphone → Enable</li>
            <li>Restart the app</li>
            <li>Restart your device</li>
            <li>Update to the latest version</li>
            <li>Contact support if issue persists</li>
          </ol>

          <h4 className="text-lg font-semibold text-white mb-2 mt-4">Transcription is taking too long</h4>
          <p className="mb-2">Transcription time depends on:</p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Recording length (1 minute of audio ≈ 10-20 seconds to transcribe)</li>
            <li>Internet speed</li>
            <li>Server load</li>
          </ul>
          <p className="mb-2">Typical wait times:</p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>1-minute recording: 10-20 seconds</li>
            <li>5-minute recording: 30-60 seconds</li>
            <li>30-minute recording: 2-4 minutes</li>
          </ul>

          <h4 className="text-lg font-semibold text-white mb-2 mt-4">The app keeps crashing</h4>
          <p className="mb-2">Try these solutions:</p>
          <ol className="list-decimal list-inside mb-4 space-y-2 ml-4">
            <li>Update to the latest version of VocalMind</li>
            <li>Update iOS to the latest version</li>
            <li>Restart your device</li>
            <li>Clear the app cache (Settings → Clear Cache)</li>
            <li>Uninstall and reinstall the app</li>
            <li>Contact support with crash details</li>
          </ol>

          <h4 className="text-lg font-semibold text-white mb-2 mt-4">I lost my recordings!</h4>
          <p className="mb-2">If you enabled cloud sync:</p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Your recordings are safely stored in the cloud</li>
            <li>Try logging out and back in</li>
            <li>Check your internet connection</li>
          </ul>
          <p className="mb-2">If you didn't enable cloud sync:</p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Recordings are stored locally</li>
            <li>Uninstalling deletes local data</li>
            <li>Check if you have a device backup</li>
          </ul>

          <h4 className="text-lg font-semibold text-white mb-2 mt-4">The app is using too much storage</h4>
          <p className="mb-2">Large storage usage is normal if you have many recordings. To reduce storage:</p>
          <ol className="list-decimal list-inside mb-4 space-y-2 ml-4">
            <li>Delete old recordings you no longer need</li>
            <li>Export and delete older notes</li>
            <li>Enable cloud sync and delete local copies</li>
            <li>Go to Settings → Manage Storage</li>
          </ol>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Privacy & Security</h3>
          
          <h4 className="text-lg font-semibold text-white mb-2 mt-4">Is my data encrypted?</h4>
          <p className="mb-2">Yes! VocalMind uses:</p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>HTTPS/TLS encryption for data in transit</li>
            <li>Encryption at rest on Firebase servers</li>
            <li>Secure connections to OpenAI APIs</li>
          </ul>

          <h4 className="text-lg font-semibold text-white mb-2 mt-4">Who can see my recordings?</h4>
          <p className="mb-2">Only you! We do not:</p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Share your data with third parties (except service providers)</li>
            <li>Sell your data</li>
            <li>Use your recordings for anything other than providing the service</li>
          </ul>
          <p className="mb-4">See our <a href="/privacy" className="text-blue-300 hover:text-blue-200 underline">Privacy Policy</a> for complete details.</p>

          <h4 className="text-lg font-semibold text-white mb-2 mt-4">Can VocalMind employees access my data?</h4>
          <p className="mb-2">Our team cannot access your audio recordings or transcriptions under normal circumstances. Access is only granted for:</p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Technical support (with your explicit permission)</li>
            <li>Legal requirements</li>
            <li>Service debugging (anonymized data only)</li>
          </ul>

          <h4 className="text-lg font-semibold text-white mb-2 mt-4">How do I delete my data?</h4>
          <p className="mb-2">To delete specific recordings:</p>
          <ol className="list-decimal list-inside mb-4 space-y-2 ml-4">
            <li>Swipe left on any recording</li>
            <li>Tap Delete</li>
          </ol>
          <p className="mb-2">To delete ALL data:</p>
          <ol className="list-decimal list-inside mb-4 space-y-2 ml-4">
            <li>Go to Settings</li>
            <li>Tap "Delete All Data"</li>
            <li>Confirm deletion</li>
            <li>All recordings and notes are permanently deleted</li>
          </ol>

          <h4 className="text-lg font-semibold text-white mb-2 mt-4">What happens to my data if I delete the app?</h4>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Local data is deleted from your device</li>
            <li>Cloud data (if enabled) remains for 30 days</li>
            <li>After 30 days, cloud data is permanently deleted</li>
            <li>You can manually delete cloud data in Settings before uninstalling</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Contact Support</h2>
          
          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Need More Help?</h3>
          <p className="mb-4">We're here for you! Choose the best way to reach us:</p>

          <h4 className="text-lg font-semibold text-white mb-2 mt-4">📧 Email Support</h4>
          <ul className="list-none mb-4 space-y-2">
            <li>General inquiries: <a href="mailto:support@myvocalmind.com" className="text-blue-300 hover:text-blue-200 underline">support@myvocalmind.com</a></li>
            <li>Technical issues: <a href="mailto:tech@myvocalmind.com" className="text-blue-300 hover:text-blue-200 underline">tech@myvocalmind.com</a></li>
            <li>Billing questions: <a href="mailto:billing@myvocalmind.com" className="text-blue-300 hover:text-blue-200 underline">billing@myvocalmind.com</a></li>
            <li>Privacy concerns: <a href="mailto:privacy@myvocalmind.com" className="text-blue-300 hover:text-blue-200 underline">privacy@myvocalmind.com</a></li>
          </ul>
          <p className="mb-4">
            <strong>Response Time:</strong> Pro users: Within 24 hours | Free users: Within 48 hours
          </p>

          <h4 className="text-lg font-semibold text-white mb-2 mt-4">💬 In-App Support</h4>
          <ol className="list-decimal list-inside mb-4 space-y-2 ml-4">
            <li>Open VocalMind</li>
            <li>Go to Settings</li>
            <li>Tap "Contact Support"</li>
            <li>Describe your issue</li>
            <li>We'll respond via email</li>
          </ol>

          <h4 className="text-lg font-semibold text-white mb-2 mt-4">🌐 Website</h4>
          <p className="mb-4">Visit myvocalmind.com for:</p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Latest updates and news</li>
            <li>Feature announcements</li>
            <li>Blog articles and tips</li>
            <li>Community forum (coming soon)</li>
          </ul>

          <h4 className="text-lg font-semibold text-white mb-2 mt-4">📱 Social Media</h4>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Twitter: @VocalMindApp</li>
            <li>Instagram: @vocalmindapp</li>
            <li>Facebook: /VocalMindApp</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">System Requirements</h2>
          
          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Minimum Requirements:</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>iOS 15.0 or later</li>
            <li>iPhone 8 or newer</li>
            <li>100 MB free storage</li>
            <li>Internet connection (for transcription)</li>
            <li>Microphone access</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Recommended:</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>iOS 17.0 or later</li>
            <li>iPhone 12 or newer</li>
            <li>500 MB free storage</li>
            <li>Wi-Fi connection (for faster transcription)</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Supported Devices:</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>iPhone (8 and later)</li>
            <li>iPad (5th generation and later)</li>
            <li>iPad Pro (all models)</li>
            <li>iPad Air (3rd generation and later)</li>
            <li>iPad mini (5th generation and later)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Tips & Best Practices</h2>
          
          <h3 className="text-xl font-semibold text-white mb-3 mt-6">🎤 Recording Tips</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Record in a quiet environment</li>
            <li>Keep your device 1-2 feet away</li>
            <li>Speak at a natural pace</li>
            <li>Avoid background music or TV</li>
            <li>Use headphones with a mic for calls</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">📝 Organization Tips</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Add tags immediately after recording</li>
            <li>Use descriptive titles</li>
            <li>Create a tagging system (e.g., #work, #personal, #ideas)</li>
            <li>Review and edit transcriptions promptly</li>
            <li>Archive old notes regularly</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3 mt-6">⚡ Productivity Tips</h3>
          <p className="mb-2">Use VocalMind for:</p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Meeting notes</li>
            <li>Lecture recordings</li>
            <li>Brainstorming sessions</li>
            <li>To-do lists</li>
            <li>Interview transcriptions</li>
            <li>Podcast script drafts</li>
            <li>Voice journaling</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Legal & Policies</h2>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li><a href="/privacy" className="text-blue-300 hover:text-blue-200 underline">Privacy Policy</a></li>
            <li><a href="/terms" className="text-blue-300 hover:text-blue-200 underline">Terms of Service</a></li>
            <li><a href="https://support.apple.com/en-us/HT204084" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline">Refund Policy</a></li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 mt-8">About VocalMind</h2>
          <p className="mb-4">
            VocalMind was created to make capturing and organizing your thoughts effortless. We believe that the best ideas happen when you're not at your desk, and typing on a phone is frustrating.
          </p>
          <p className="mb-4">
            <strong>Our Mission:</strong> Empower everyone to capture their thoughts instantly with AI-powered voice technology.
          </p>
          <p className="mb-2"><strong>Our Values:</strong></p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Privacy First</li>
            <li>User-Centric Design</li>
            <li>Continuous Innovation</li>
            <li>Transparent Communication</li>
            <li>Exceptional Support</li>
          </ul>
        </section>

        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-white/80 text-lg">
            <strong>Still have questions?</strong> Contact us at <a href="mailto:support@myvocalmind.com" className="text-blue-300 hover:text-blue-200 underline">support@myvocalmind.com</a>
          </p>
          <p className="text-white/80 mt-2">
            We're here to help make your VocalMind experience amazing! 🎤✨
          </p>
        </div>
      </div>
    </LegalPage>
  );
}

