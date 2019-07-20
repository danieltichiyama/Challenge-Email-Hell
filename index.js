const emailLog = require("./email_log.json");

function countUniqueEmails(emailFile) {
  // do work here
  const theList = emailFile.emails; //this is an array

  return theList.reduce(function(previous, current) {
    let email = current.email;
    if (!previous[email]) {
      previous[email] = 1;
    } else {
      previous[email]++;
    }
    return previous;
  }, {});
}

console.log(countUniqueEmails(emailLog));
