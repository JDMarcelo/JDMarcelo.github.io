
		document.getElementById('login-form').addEventListener('submit', function(event) {
			event.preventDefault(); // Prevent the form from submitting normally

			// Get the values from the form
			var username = document.getElementById('username').value;
			var password = document.getElementById('password').value;

			// Hardcoded list of users and passwords (for demonstration purposes only)
			var users = [
				{ username: 'user1', password: 'password1' },
				{ username: 'user2', password: 'password2' },
				{ username: 'user3', password: 'password3' }
			];

			// Check if the entered username and password match any of the users
			var user = users.find(function(u) {
				return u.username === username && u.password === password;
			});

			if (user) {
				// Login successful, redirect the user to the registration form
				window.location.assign('catalog.html');
				alert('Redirecting to registration form...');
			} else {
				// Login failed, display an error message
				alert('Invalid username or password');
			}
		});
