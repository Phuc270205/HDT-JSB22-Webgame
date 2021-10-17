let HumanInfor = []
  
  
//  lay  ra the form co id tuong ung
const formSubmit = document.getElementById("info");
formSubmit.addEventListener("submit", function (event) {
    event.preventDefault();
    // ngan su kien load lai trang mac dinh cua trinh duyet
    alert("ban da bam vao submit roi day");


    // khai bao bien data chua toan bo thong tin minh nhap trong form
    const data={
      name: formSubmit.name.value.trim(),
      Age: formSubmit.email.value.trim(),
      PhoneNumber: formSubmit.website.value.trim(),
      sex: formSubmit.sex.value.trim()
    }
    console.log(data);
    HumanInfor.push(data);


    formSubmit.name.value = "";
    formSubmit.email.value = "";
    formSubmit.website.value = "";
    formSubmit.sex.value = "";

})