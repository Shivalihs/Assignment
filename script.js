// Creating the bar chart for Activity
const activityCtx = document.getElementById('activityChart').getContext('2d');
const activityChart = new Chart(activityCtx, {
    type: 'bar',
    data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
                label: 'Guest',
                data: [400, 300, 200, 250],
                backgroundColor: 'rgba(255, 99, 132, 0.7)', // Red color for Guest
                borderRadius: 10, // Makes the bars rounded
                categoryPercentage: 0.5, // Controls width of entire group
                barPercentage: 0.7
            },
            {
                label: 'User',
                data: [500, 450, 150, 300],
                backgroundColor: 'rgba(75, 192, 192, 0.7)', // Green color for User
                borderRadius: 10, // Makes the bars rounded
                categoryPercentage: 0.5, // Controls width of entire group
                barPercentage: 0.7
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false, // Ensures the chart fills the wrapper without distortion
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(200, 200, 200, 0.2)', // Light gray grid lines
                },
                ticks: {
                    stepSize: 100
                }
            },
            x: {
                grid: {
                    display: false, // Hide vertical grid lines
                }
            }
        },
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: '#888', // Legend text color
                    usePointStyle: true, // Use point style for labels
                }
            }
        }
    }
});

// Creating the doughnut chart for Product
const ctx = document.getElementById('productChart').getContext('2d');
const productChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Basic Tees', 'Custom Short Pants', 'Super Hoodies'],
        datasets: [{
            data: [55, 31, 14],
            backgroundColor: ['#4CAF50', '#FFEB3B', '#F44336'],
            borderWidth: 0,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false }, // Disable default legend
        },
        cutout: '70%', // Donut hole size
    }
});

function openModal() {
    document.getElementById('addProfileModal').style.display = 'block';
    openTab(null, 'basic'); // Reset to the first tab on open
    document.getElementById('next-done-button').innerText = 'Next'; // Set button to "Next" on open
}

function closeModal() {
    document.getElementById('addProfileModal').style.display = 'none';
}

function openTab(evt, tabName) {
    var i, tabcontent, tabbuttons;
    
    // Hide all tab contents
    tabcontent = document.getElementsByClassName('tab-content');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove('active');
    }

    // Remove the active class from all tab buttons
    tabbuttons = document.getElementsByClassName('tab-button');
    for (i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].classList.remove('active');
    }

    // Show the current tab and add an "active" class to the button that opened it
    document.getElementById(tabName).classList.add('active');
    if (evt) {
        evt.currentTarget.classList.add('active');
    }

    // Change the button text based on the tab
    if (tabName === 'basic') {
        document.getElementById('next-done-button').innerText = 'Next';
    } else if (tabName === 'social') {
        document.getElementById('next-done-button').innerText = 'Done';
    }
}

function nextOrDone() {
    // Check if the current tab is Basic, then navigate to Social
    if (document.getElementById('basic').classList.contains('active')) {
        openTab(null, 'social'); // Switch to the Social tab
    } else {
        closeModal(); // Close the modal when "Done" is clicked on the Social tab
    }
}
