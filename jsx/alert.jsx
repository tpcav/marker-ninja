// Get the active sequence
var sequence = app.project.activeSequence;

// Check if a sequence is open
if (sequence) {
    // Define the list of timestamps (in seconds)
    var timestamps = [
        0.07, 1.18, 2.58, 3.99, 4.69, 6.11, 6.57, 7.27, 8.68, 10.08,
        11.03, 11.49, 12.19, 14.95, 18.74, 19.44, 45.0, 46.42, 46.88,
        47.35, 49.23, 49.69, 52.96, 53.92, 54.38, 54.85, 56.73, 57.66,
        59.54, 61.65, 62.32, 65.57, 69.17, 78.76, 82.5, 83.92, 86.26,
        87.66, 88.61, 89.07, 94.69, 96.57, 105.0, 106.42, 106.88, 107.35,
        109.23, 109.69, 110.16, 112.97, 113.92, 114.38, 114.85, 116.73,
        117.19, 117.66, 122.35, 124.23, 124.69, 125.16, 127.97, 129.85,
        132.19, 132.66, 134.54, 135.35, 136.05, 136.86, 139.44, 142.97,
        143.92, 144.85, 149.07, 149.98, 154.69, 159.85, 162.66, 164.54,
        166.65, 169.69
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
