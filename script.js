// Dashboard Message and Back Button Functionality
document.addEventListener('DOMContentLoaded', function() {
    const dashboardMessage = document.getElementById('dashboardMessage');
    
    // Show dashboard message when login is successful
    function showDashboardMessage() {
        dashboardMessage.style.display = 'flex';
    }
    
    // Show dashboard message after successful login
    // This should be called after your login validation
    window.showDashboardMessage = showDashboardMessage;
}); 