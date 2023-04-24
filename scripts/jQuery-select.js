$(document).ready(function() {
    // Listen for changes in the search input
    $("#search-select").on("change keyup paste", function() {
        // Get the search query
        var query = $(this).val().toLowerCase();

        // Filter the select options
        $("#my-select option").filter(function() {
            // Hide options that do not match the search query
            var optionText = $(this).text().toLowerCase();
            $(this).toggle(optionText.indexOf(query) > -1);
        });
    });
});
