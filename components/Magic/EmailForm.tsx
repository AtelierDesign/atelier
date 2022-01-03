import { useState } from 'react';
import { Input, Icon, MonochromeIcons, CallToAction } from '@magiclabs/ui';

export const EmailForm = ({ onEmailSubmit, disabled }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    onEmailSubmit(email);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3 className="form-header">Login</h3>
        <div className="input-wrapper">
          <Input
            placeholder="Enter your email"
            size="sm"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            prefix={<Icon inline type={MonochromeIcons.Envelope} size={22} />}
          />
        </div>
        <div>
          <CallToAction
            leadingIcon={MonochromeIcons.PaperPlane}
            color="primary"
            size="sm"
            disabled={disabled}
            onClick={handleSubmit}>
            Send Magic Link
          </CallToAction>
        </div>
      </form>
    </>
  );
};
