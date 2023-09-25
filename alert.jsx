// Get the active sequence
var sequence = app.project.activeSequence;

// Check if a sequence is open
if (sequence) {
    // Define the list of timestamps (in seconds)
    var timestamps = [
        0.37, 1.23, 1.7, 2.53, 3.83, 5.11, 6.39, 6.9, 7.69, 8.22,
        9.03, 9.66, 10.31, 11.12, 12.1, 12.77, 13.72, 16.32, 18.13, 19.11,
        20.76, 21.48, 22.38, 24.2, 24.82, 25.33, 26.61, 29.23, 31.18, 32.0,
        32.88, 35.81, 36.29, 38.96, 40.82, 41.42, 42.91, 44.19, 48.16, 50.55,
        52.38, 53.75, 55.01, 57.12, 59.86, 63.27, 63.9, 64.92, 65.85, 66.57,
        67.55, 68.5, 69.17, 69.96, 71.33, 72.91, 74.91, 75.53, 76.18, 77.21,
        78.02, 80.74, 83.03, 86.15, 89.56, 92.3, 94.11, 95.5, 96.41, 98.87,
        101.56, 104.7, 105.21, 109.27, 112.04, 112.55, 114.66, 116.45, 117.1,
        117.75, 119.75, 120.86, 122.49, 122.97, 124.9, 127.66, 131.61, 132.89,
        134.03, 135.86, 137.23, 138.11, 141.76, 145.68, 147.75, 148.26, 150.35
    ];

    // Loop through the timestamps and create markers
    for (var i = 0; i < timestamps.length; i++) {
        var timestampInSeconds = timestamps[i];
        
        // Create a marker at the timestamp in seconds
        var marker = sequence.markers.createMarker(timestampInSeconds);
        
        // Set marker name and comments as before
        marker.name = "Marker Ninja";
        marker.comments = (i + 1).toString();
    }
} else {
    alert("No sequence is currently open.");
}
