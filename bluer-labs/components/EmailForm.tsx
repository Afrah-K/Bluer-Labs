import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const EmailForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage(result.message);
        setIsSuccess(true);
        setEmail('');
      } else {
        setMessage(result.error);
        setIsSuccess(false);
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
      setIsSuccess(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full lg:w-1/3">
      <div className="flex items-center space-x-2 w-full">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-8/10 border-gray-300 rounded-md"
          placeholder="your mail"
          required
        />
        <Button type="submit" className="w-2/10">
          Hi
        </Button>
      </div>
      {message && (
        <p className="mt-2 text-sm" style={{ color: isSuccess ? '#28a745' : '#ff0000' }}> {message}
        </p>
      )}
    </form>
  );
};

export default EmailForm;
