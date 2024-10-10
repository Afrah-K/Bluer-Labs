'use client';
import Link from 'next/link';
import EmailForm from '@/components/EmailForm';
import { CardWithScroll } from "@/components/CardWithScroll";
import { FaLinkedin } from 'react-icons/fa'; // LinkedIn icon


export default function Home() {
  return (
    <div className="flex flex-col h-screen lg:flex-row lg:overflow-hidden">
      <div className="flex-1 p-7 overflow-y-auto">
        
        <h1 text-2xl font-light className="text-left">
          I build AI software.
        </h1>
        <p>
          <span><strong>Software</strong> for businesses and creators alike.</span>
          <br />
          <span>
            <i>Software</i> that <strong>understands</strong> and <strong>enhances</strong> customer conversations.
          </span>
          <br />
          <span>
            <i>Software</i> that <strong>predicts</strong> trends and drives business decisions.
          </span>
          <br />
          <span>
            <i>Software</i> that <strong>sees</strong> beyond human capability.
          </span>
        </p>
        <br />
        <p>
          <span>
            You imagine, I <strong>build</strong>.
          </span>
          <br />
          <span>
            Hi, I&apos;m Afrah, an AI engineer who works on that <strong>software</strong>.
          </span>
          <br />
          <span>
            I build end-to-end apps that <i>innovate</i> and <i>improve</i> your company.
          </span>
          <br />
          <span>
            <strong>That&apos;s all I do.</strong>
          </span>
        </p>
        <br />
        <div>
          <p>If that&apos;s something you find interesting, drop your mail:</p>
          <EmailForm />
          <br />
          <span>
            I&apos;ll reach out to you. Or book a call <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30LkwlTQDDIHy3dUn5d5hKdDGq4W8k90bH2fUtqfUlFabu8zTZKUud9doO5oXBRTvmGEyjoDr2?gv=true%27" className="font-bold underline">here</Link>.
          </span>

          <div className="flex space-x-6 mt-4">
            <a 
              href="https://www.linkedin.com/in/afrah-kausar-a5213b177/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-grey-600 hover:text-blue-800 font-medium flex items-center space-x-2"
            >
              <FaLinkedin className="w-5 h-5 text-grey-600" />
              <span>Stalk my LinkedIn</span>
            </a>
      
            <a 
              href="/case-studies" 
              className="text-grey-600 hover:text-blue-800 font-medium"
            >
              <span>Case Studies</span>
            </a>
            <a 
              href="https://afrah-kausar.vercel.app/" 
              className="text-grey-600 hover:text-blue-800 font-medium"
            >
              <span>Personal Website</span>
            </a>
          </div>
   
          {/* Mobile-only block */}
          <div className="lg:hidden mt-4">
            
            <h2 className="text-lg font-bold">Software I build</h2>
            <CardWithScroll />
          </div>
        </div>
      </div>
      
      {/* For PC View */}
      <div className="hidden lg:flex lg:flex-1 p-2 lg:pl-8 overflow-y-auto">
        <CardWithScroll />
      </div>
    </div>
  );
}
