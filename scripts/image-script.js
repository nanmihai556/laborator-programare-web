

$(document).ready(function() {
    // Attach click event handler to images with class "popup-image"
    $(".popup-image").click(function() {
        // Get the source of the clicked image
        var imgSrc = $(this).attr("src");

        // Set the source of the popup image to the clicked image source
        $("#popup-img").attr("src", imgSrc);

        // Show the modal dialog box
        $("#popup").show();
    });

    // Attach click event handler to close button
    $(".close").click(function() {
        // Hide the modal dialog box
        $("#popup").hide();
    });
});
