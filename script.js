// Replace with your Power BI dashboard URL
const powerBiDashboardURL =
  "https://app.powerbi.com/groups/me/reports/c620e9b4-9d8f-41c3-a573-2b2708424b71?ctid=17f5884e-33ad-4df7-b837-218f86e45a72&pbi_source=linkShare";

// Function to open the Power BI dashboard in a new tab
function openPowerBiDashboard() {
  window.open(powerBiDashboardURL, "_blank");
}

// Add a click event listener to the button
document
  .getElementById("openDashboard")
  .addEventListener("click", openPowerBiDashboard);
