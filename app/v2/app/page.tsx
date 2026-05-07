import { Header, Footer } from "@/components/layout";
import {
  HeroSection,
  QuickStartSection,
  FeaturesSection,
  ProvidersSection,
  SecuritySection,
  WorkspacesSection,
  FinalCtaSection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <QuickStartSection />
        <FeaturesSection />
        <ProvidersSection />
        <SecuritySection />
        <WorkspacesSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
