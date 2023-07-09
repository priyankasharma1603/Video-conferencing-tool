document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the entered username and password
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Perform validation (e.g., check against the expected values)
    if (username === 'Hansu@1234' && password === 'Hansu@1234') {
      // Redirect to the conference page
      window.location.href = 'conference.html';
    } else {
      alert('Invalid username or password. Please try again.');
    }
  
    // Reset the form fields
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
  });
  
  function openJoinForm() {
    // Show the join form when the "Join the Meeting" button is clicked
    window.location.href = 'join.html';
  }
  
  function joinMeeting() {
    var link = document.getElementById('link-input').value;
    var code = document.getElementById('code-input').value;
  
    // Perform actions to join the meeting using the link and code
  
    // Redirect to the conference.html page
    window.location.href = "conference.html";
  }
  function openJoinForm() {
    // Show the join form when the "Join the Meeting" button is clicked
    document.getElementById('join-form').style.display = 'block';
    document.getElementById('join-options-link').style.display = 'block';
    document.getElementById('join-options-code').style.display = 'block';
    document.getElementById('join-button').innerHTML = 'Join via Link';
  }
  function joinMeeting() {
    var link = document.getElementById('link-input').value;
    var code = document.getElementById('code-input').value;
    
    if (link === 'connectmeeting/meeting' || code === '7067916908') {
      // Redirect to the conference.html page
      window.location.href = "join.html";
    } else {
      alert('Invalid link or code. Please try again.');
    }
  }