let base64String = "";
     
function imageConvert() {
    let file = document.querySelector(
        'input[type=file]')['files'][0];
    let reader = new FileReader();
    console.log("next");
    reader.onload = function () {
        base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
        imageBase64Stringsep = base64String;

        // alert(imageBase64Stringsep);
        console.log(base64String);
    }
    reader.readAsDataURL(file);
}
