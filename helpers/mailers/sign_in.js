const { sendMail } = require("../mailer");

function signInEmail(email, userName, signInURL) {
  sendMail({
    to: email,
    from: { email: "no-reply@analog.cafe", name: "Analog.Cafe" },
    subject: "Sign in to Analog.Cafe",
    templateId: "97f3d230-b442-435a-b97c-c65aaba0ea6e",
    substitutions: {
      signInURL,
      analog_profile_name: userName
    }
  });
}

module.exports = signInEmail;
