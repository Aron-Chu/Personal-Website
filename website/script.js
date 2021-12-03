//add your api here below
var API_ENDPOINT = "https://loxrd9gtuc.execute-api.us-east-1.amazonaws.com/prod1/addcontactinformation"
//AJAX GET REQUEST

document.getElementById("saveprofile").onclick = function () {

    var inputData = {
        "Name": $("#name").val(),
        "Email": $("#email").val(),
        "Content": $("#message").val()
    };
    $.ajax({
        url: API_ENDPOINT,
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify(inputData),

        success: function (response) {
            console.log(response)
            console.log(JSON.stringify(inputData))
            document.getElementById("profileSaved").innerHTML = "Profile Saved!";
        },
        error: function () {
            alert("Success!");
        }
    });
}
//AJAX GET REQUEST
// document.getElementById("getprofile").onclick = function () {
//     $.ajax({
//         url: API_ENDPOINT,
//         type: 'GET',
//         contentType: 'application/json; charset=utf-8',
//         success: function (response) {
//             $('#employeeProfile tr').slice(1).remove();
//             jQuery.each(response, function (i, data) {
//                 $("#employeeProfile").append("<tr> \
//                 <td>" + data['empId'] + "</td> \
//                 <td>" + data['empFirstName'] + "</td> \
//                 <td>" + data['empLastName'] + "</td> \
//                 <td>" + data['empAge'] + "</td> \
//                 </tr>");
//             });
//         },
//         error: function () {
//             alert("error");
//         }
//     });
// }
