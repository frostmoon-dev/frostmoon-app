"use client";
import { GlowingCard, NeonHeader } from "./ui";
import { FaSun, FaMoon } from 'react-icons/fa6';

export default function ProfessionalTab() {
  return (
    <div className="space-y-8">
      <NeonHeader text="Our Journeys" />
      
      {/* The Sun's Section */}
      <GlowingCard>
        <div className="flex items-center gap-4 mb-4">
          <FaSun size={24} style={{ color: 'var(--accent)'}} />
          <h3 className="text-2xl font-bold" style={{ color: 'var(--accent)' }}>The Sun's Path</h3>
        </div>
        <div className="space-y-4 text-sm md:text-base" style={{ color: 'var(--foreground)' }}>
          <p>
            This is a placeholder for his professional summary. What is his field? What is he passionate about in his career? What are his key skills and accomplishments?
          </p>
          <p>
            You can add more details about his career goals, the technologies he works with, or any major projects he's proud of.
          </p>
        </div>
      </GlowingCard>

      {/* The Moon's Section */}
      <GlowingCard>
        <div className="flex items-center gap-4 mb-4">
          <FaMoon size={24} style={{ color: 'var(--accent)'}} />
          <h3 className="text-2xl font-bold" style={{ color: 'var(--accent)' }}>The Moon's Calling</h3>
        </div>
        <div className="space-y-4 text-sm md:text-base" style={{ color: 'var(--foreground)' }}>
          <p>
            You can put your professional summary here! Talk about your expertise as a Microsoft D365 Technical Developer, your skills in X++, and your experience in the field.
          </p>
          <p>
            Feel free to elaborate on your journey, how you got into development, and what you love most about your work.
          </p>
        </div>
      </GlowingCard>
    </div>
  );
}
