import { useState, type FormEvent } from "react";
import { createIntroductionEmail } from "../contact.ts";

type ContactProps = {
  selectedPlan: string;
  onSelectPlan: (plan: string) => void;
};

export default function Contact({ selectedPlan, onSelectPlan }: ContactProps) {
  const [status, setStatus] = useState('');
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const email = createIntroductionEmail(new FormData(event.currentTarget));
    window.location.href = email;
    setStatus('Your email draft has been prepared. Please review and send it in your email app. If it does not open, email jw2318692@gmail.com directly.');
  }
  return (
    <section id="contact" className="contact"><div className="wrap contact-inner"><div><div className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</div><h2>Let’s talk about<br /><em>what’s next.</em></h2><p>Tell me where you are today and where you want to go.<br />We’ll explore how mentoring could help you get there.</p><img src="assets/conversation.jpg" alt="An open conversation about goals and the next step" width="1500" height="1000" loading="lazy" /></div><form id="contact-form" onSubmit={handleSubmit}><label htmlFor="name">Your name</label><input id="name" name="name" autoComplete="name" placeholder="What should I call you?" required maxLength={120} /><label htmlFor="email">Email address</label><input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} /><label htmlFor="plan">I’m interested in</label><select id="plan" name="plan" value={selectedPlan} onChange={event => onSelectPlan(event.target.value)}><option>Let’s find the right fit</option><option>Career Launch · 1 month</option><option>Career Mentorship · 6 months</option><option>Ongoing Support</option></select><label htmlFor="goal">Where are you now, and what’s your goal?</label><textarea id="goal" name="goal" placeholder="A little about your starting point and your next step…" rows={3} required maxLength={3000}></textarea><p className="form-note" id="contact-note">This opens your email app with an introduction ready to send to jw2318692@gmail.com. Your details are not stored on this website.</p><button className="button orange" id="submit-button" type="submit">Start the conversation <span>↗</span></button><p id="form-status" role="status" aria-live="polite">{status}</p></form></div></section>
  );
}
