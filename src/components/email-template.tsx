interface EmailTemplateProps {
    firstName: string;
  }
  
  export const EmailTemplate = ({ firstName }: EmailTemplateProps) => {
    return (
      <div>
        <h1>Welcome, {firstName.split("@")[0]}</h1>
        <h3>You have subscribed successfully</h3>
      </div>
    );
  };