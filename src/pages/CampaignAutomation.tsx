import React, { useState } from 'react';
import '../styles/CampaignAutomation.css';

const CampaignAutomation = () => {
  const [emailTemplate, setEmailTemplate] = useState('');
  const [scheduleDate, setScheduleDate] = useState('');
  const [followUpTime, setFollowUpTime] = useState('');
  const [followUpEnabled, setFollowUpEnabled] = useState(false);

  // Type the event parameters
  const handleTemplateChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEmailTemplate(e.target.value);
  };

  const handleScheduleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setScheduleDate(e.target.value);
  };

  const handleFollowUpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFollowUpTime(e.target.value);
  };

  const handleFollowUpToggle = () => {
    setFollowUpEnabled(!followUpEnabled);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Template:', emailTemplate);
    console.log('Scheduled Date:', scheduleDate);
    console.log('Follow-up enabled:', followUpEnabled);
    if (followUpEnabled) {
      console.log('Follow-up time:', followUpTime);
    }
  };

  return (
    <div className="campaign-container">
      <h1>Campaign Automation</h1>
      <form className="campaign-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="emailTemplate">Custom Email Template:</label>
          <textarea
            id="emailTemplate"
            value={emailTemplate}
            onChange={handleTemplateChange}
            placeholder="Enter your email template here..."
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="scheduleDate">Schedule Email Dispatch:</label>
          <input
            type="datetime-local"
            id="scheduleDate"
            value={scheduleDate}
            onChange={handleScheduleDateChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="followUpTime">Follow-Up Time (in hours):</label>
          <input
            type="number"
            id="followUpTime"
            value={followUpTime}
            onChange={handleFollowUpChange}
            disabled={!followUpEnabled}
          />
        </div>

        <div className="form-group">
  <div className="checkbox-group">
    <input
      type="checkbox"
      checked={followUpEnabled}
      onChange={handleFollowUpToggle}
      id="followUpToggle"
    />
    <label htmlFor="followUpToggle" className="checkbox-label">
      Enable Follow-Up Sequences
    </label>
  </div>
</div>


        <button type="submit" className="submit-btn">
          Create Campaign
        </button>
      </form>
    </div>
  );
};

export default CampaignAutomation;
