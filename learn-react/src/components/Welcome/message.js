const hours = new Date().getHours();
var msg = 'Good Evening';
if (hours >= 0 && hours < 6) {
  msg = 'Good Night';
} else if (hours < 12) {
  msg = 'Good Morning';
} else if (hours < 18) {
  msg = 'Good Afternoon';
}

export { msg };

// NODE:    module.exports  and require
// JS:      export          and import
