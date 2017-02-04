var App = {
    calculate: function() {
        let firstDate = $("#first").val();
        let secondDate = $("#second").val();
        
        // Split the strings
        var splitFirst = firstDate.split("/");
        var splitSecond = secondDate.split("/");
      
        // Now get the difference
        var dayInMil = 1000*60*60*24;
        firstDate = new Date(splitFirst[2], splitFirst[0], splitFirst[1]);
        secondDate = new Date(splitSecond[2], splitSecond[0], splitSecond[1]);

        var d1Ms = firstDate.getTime();
        var d2Ms = secondDate.getTime();

        // Difference in milliseconds
        var differenceMs = Math.abs(d1Ms - d2Ms);
        var differenceInDaysRounded = Math.round(differenceMs/dayInMil);

        if(isNaN(parseFloat(differenceInDaysRounded))) {
            $("#days").html("Incorrect input format");
            alert("We need you to enter your dates in the correct format given");
            return;
        }

        // Put it back into html
        $("#days").html("Number of days between dates: " + differenceInDaysRounded);
    }
};
