// Dashboard Message and Back Button Functionality
document.addEventListener('DOMContentLoaded', function() {
    const dashboardMessage = document.getElementById('dashboardMessage');
    const backButton = document.getElementById('backToMain');
    
    // Show dashboard message when login is successful
    function showDashboardMessage() {
        dashboardMessage.style.display = 'flex';
    }
    
    // Hide dashboard message and return to main page
    function hideDashboardMessage() {
        dashboardMessage.style.display = 'none';
        // Scroll to top of the page
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    // Add click event listener to back button
    if (backButton) {
        backButton.addEventListener('click', hideDashboardMessage);
    }
    
    // Show dashboard message after successful login
    // This should be called after your login validation
    window.showDashboardMessage = showDashboardMessage;
}); 