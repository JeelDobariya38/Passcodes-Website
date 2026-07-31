import {
  Lock,
  Smartphone,
  WifiOff,
  Code2,
  Fingerprint,
  RefreshCw,
} from 'lucide-react';
import { SectionHeader } from '@/components/shared/SectionHeader';

const features = [
  {
    icon: Lock,
    title: 'On-Device Storage',
    description:
      'Your passwords live only on your device — never uploaded to any cloud. End-to-end encryption is on the roadmap.',
  },
  {
    icon: WifiOff,
    title: 'Fully Offline',
    description:
      'No internet connection required. Your data never leaves your device. Zero cloud dependency.',
  },
  {
    icon: Smartphone,
    title: 'Android Native',
    description:
      'Built specifically for Android with native performance and Material Design principles.',
  },
  {
    icon: Fingerprint,
    title: 'Biometric Lock',
    description:
      'Protect your vault with fingerprint or face unlock for quick, secure access.',
  },
  {
    icon: Code2,
    title: 'Open Source',
    description:
      'Fully transparent codebase on GitHub. Audit the code yourself. Community driven.',
  },
  {
    icon: RefreshCw,
    title: 'Auto Backup',
    description:
      'Local backup and restore functionality. Export your data anytime in encrypted format.',
  },
];

export function FeatureGrid() {
  return (
    <section className="px-4 pb-20 sm:px-6" aria-labelledby="features-heading">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="Why Passcodes?"
          subtitle="A password manager that respects your privacy and keeps things simple."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="feature-card">
              <span className="feature-icon mb-4">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
