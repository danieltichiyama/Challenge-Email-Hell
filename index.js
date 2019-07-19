const emailLog = require("./email_log.json");

function countUniqueEmails(emailFile) {
  // do work here
  const theList = emailFile.emails; //this is an array

  return theList.reduce(function(p, c) {
    let email = c.email;
    if (!p[email]) {
      p[email] = 1;
    } else {
      p[email]++;
    }
    return p;
  }, {});
}

console.log(countUniqueEmails(emailLog));
