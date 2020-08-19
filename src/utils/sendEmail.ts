import Mailgun from 'mailgun-js';

const mailGunClient = new Mailgun({
  apiKey: process.env.MAILGUN_API_KEY || '',
  domain: 'sandboxb82a047870874ab5923b3f905feabb9f.mailgun.org',
});

const sendEmail = (subject: string, html: string) => {
  // mailgun 무료 계정은 등록된 메일로만 전송이 가능함
  const emailData = {
    from: 'jjhwhwnsgh@gmail.com',
    to: 'jjhwhwnsgh@gmail.com',
    subject,
    html,
  };
  return mailGunClient.messages().send(emailData);
};

export const sendVerificationEmail = (fullName: string, key: string) => {
  const emailSubject = `Hello ${fullName}, please verify your email`;
  const emailBody = `Verification key is ${key}`;
  return sendEmail(emailSubject, emailBody);
};
