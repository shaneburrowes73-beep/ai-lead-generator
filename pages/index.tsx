import { useEffect } from 'react';
import { registerArtifact } from '@/lib/registerArtifact';

export default function Home() {
  useEffect(() => {
    registerArtifact({
      name: 'AI Lead Generator',
      type: 'application',
      url: typeof window !== 'undefined' ? window.location.origin : '',
      description: 'AI-powered lead generation tool',
      metadata: {
        version: '1.0.0',
        status: 'beta',
      },
    });
  }, []);

  return (
    <div style={{ padding: '40px' }}>
      <h1>AI Lead Generator</h1>
      <p>Beta Testing Program</p>
      <div style={{ marginTop: '20px' }}>
        <a href="/feedback" style={{ marginRight: '10px' }}>Submit Feedback</a>
        <a href="/feedback-status">View Status</a>
      </div>
    </div>
  );
}
