
function checkValue() {
    let counter = document.getElementsByClassName("counter");
    let i = 0;
    let storeArr = [];
    while (i < counter.length) {

        counter[i].value.trim().length > 0 ? storeArr.push(counter[i].value) : "";
        i++
    }
    return storeArr;
}

const isNumber = () =>{

    let checkNumber = false;
    let empCodeInput = document.getElementById('empCode');
    let salaryInput = document.getElementById('salary');
    !isNaN(empCodeInput.value) && !isNaN(salaryInput.value) ? checkNumber = true : checkNumber = false; 

    return checkNumber;
}
$(function () {

    let fullName = $("#fullName");
    let empCode = $("#empCode");
    let salary = $("#salary");
    let city = $("#city");
  
    $("#submit").click(function () {

        let totalValue = $.trim(fullName.val() + empCode.val() + salary.val() + city.val());
        let checkTdTag = $('.tdTag').text();
        let tbody = $("<tbody></tbody>");
        let nodeTr = $("<tr class ='trRemove'></tr>");
        let nodeTd = $(`<td class="tdTag">${fullName.val()}</td><td class="tdTag">${empCode.val()}</td><td class="tdTag">${salary.val()}</td><td class="tdTag">${city.val()}</td><td> <button class="btn btn-danger float-right">remove</button></td>`);
        
        if (checkValue().length === 4) {

            if (isNumber()) {
        
                nodeTr.append(nodeTd);
                tbody.append(nodeTr);
                $("#tableContent").append(tbody);
                $("#errorMessage").html(" message :---");
            } else {

                $("#errorMessage").html(" <h3 class ='text-dark'>message :</h3> <span class ='mt-2 ml-3 text-danger'>EMP Code and Salary mus be number</span>");
            }

            if (checkTdTag === totalValue) {
                
                $('.trRemove').last().remove(); //không tại Thêm hàng Mới Khi tấc cả input.value trùng nhau.
                $("#errorMessage").html("<h3 class ='text-dark'>message :</h3> <span class ='mt-2 ml-3 text-danger'>value already exists</span>");
            }
        } else {

            $("#errorMessage").html(" <h3 class ='text-dark'>message :</h3> <span class ='mt-2 ml-3 text-danger'>No fields are empty</span>");
        }

        $('button.btn-danger.float-right').on('click', function () {
           
            $(this).parent().parent().remove();
        });
    })
});
