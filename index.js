function updateDateTime() {
        var currentDate = new Date();
        var dateString = currentDate.toDateString();
        var timeString = currentDate.toLocaleTimeString();

        document.getElementById("datetime").innerHTML = "Current Date: " + dateString + "<br>Current Time: " + timeString;
    }

    
    setInterval(updateDateTime, 1000);

    updateDateTime();
