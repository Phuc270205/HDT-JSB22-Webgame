// function myFunction (){
//   document.getElementById("demo").innerHTML = 
//   `
//     Noi dung da duoc thay doi
//   `
// }



function myFunction() {
    let x = document.getElementById("myBtn").
      attributes[0].name;
    // luu tru thuoc tinh dau tien cua the co #myBtn
    document.getElementById("demo").innerHTML = x;
  
  }
  
  
  //  ham doi mau
  // function changeColor(){
  //   // document.getElementById("h1").style.color = "red"
  //   document.querySelector("#h1").style.color = "red"
  // }
  
  //  tao ra 1 bien co ten la h1 de luu tru the minh muon trong do
  const h1 = document.getElementById("tieuDe");
  console.log(h1);
  
  h1.addEventListener("click", function () {
    console.log("addEventListener hoat dong nha");
    h1.style.color = "blue"
  })
  
  
  let HumanInfor = []
  
  
  //  lay  ra the form co id tuong ung
  const formSubmit = document.getElementById("info");
  formSubmit.addEventListener("submit", function (event) {
      event.preventDefault();
      // ngan su kien load lai trang mac dinh cua trinh duyet
      console.log("ban da bam vao submit roi day");
  
  
      // khai bao bien data chua toan bo thong tin minh nhap trong form
      const data={
        name: formSubmit.name.value.trim(),
        email: formSubmit.email.value.trim(),
        website: formSubmit.website.value.trim(),
        comment: formSubmit.comment.value.trim()
      }
      console.log(data);
      HumanInfor.push(data);
  
  
      formSubmit.name.value = "";
      formSubmit.email.value = "";
      formSubmit.website.value = "";
      formSubmit.comment.value = "";
  
  })