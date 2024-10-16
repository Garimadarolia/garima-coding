// Handle link clicks
/*
function handleClick(instagram) {
    alert('you click on {instagram}');
}
function handleClick(linkedin) {
  alert('you click on {linkedin}');}
  function handleClick(email) {
      alert('you click on {email}');
  }
  
function handleClick(twitter) {
  alert('you click on {twitter}');
}*/

  
  // Toggle dark mode
  const toggleThemeButton = document.getElementById('toggle-theme');
  toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    document.querySelector('.container').classList.toggle('dark');
  });