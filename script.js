//your JS code here. If required.
    // Get references to the counter element and the increment button
        var counterElement = document.getElementById('counter');
        var incrementBtn = document.getElementById('incrementBtn');

        // Initialize counter value
        var counterValue = 0;

        // Add click event listener to the increment button
        incrementBtn.addEventListener('click', function() {
            // Display the un-incremented value in an alert
            alert(counterValue);

            // Increment the counter value
            counterValue++;

            // Update the counter element on the webpage
            counterElement.textContent = counterValue;
        });