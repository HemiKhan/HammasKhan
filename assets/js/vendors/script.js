$(document).ready(function () {
    $(".btncalcuate").click(function () {

        var s1 = $(".subject1").val();
        var s2 = $(".subject2").val();
        var s3 = $(".subject3").val();
        var s4 = $(".subject4").val();
        var s5 = $(".subject5").val();
        var s6 = $(".subject6").val();

        var grades = "";

        var totalGrades = parseFloat(s1) + parseFloat(s2) + parseFloat(s3) + parseFloat(s4) + parseFloat(s5) + parseFloat(s6);

        var perc = (totalGrades / 600) * 100;

        if (perc <= 100 && perc >= 80) {
            grades = 'A';
        }
        else if (perc <= 79 && perc >= 60) {
            grades = 'B';
        }
        else if (perc <= 59 && perc >= 40) {
            grades = 'C';
        }
        else {
            grades = 'F';
        }

        if (perc >= 39.5) {
            $(".msg").text("Out of 600 your total is " + totalGrades + " and percentage is" + perc + "%. Your grade is " + grades + ". You are Pass.");
        }
        else {
            $(".msg").text("Out of 600 your total is " + totalGrades + " and percentage is" + perc + "%. Your grade is " + grades + ". You are Fail .");
        }

    });
});