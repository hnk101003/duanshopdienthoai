function kiemtraForm() {
    var maKH = document.getElementById("ma_kh").value;
    var hoten = document.getElementById("ho_ten").value;
    var email = document.getElementById("email").value;
    var quoc_tich = document.getElementById("quoc_tich").value;
    var gioiTinh = document.getElementsByName("gioi_tinh");
    // var so_thich = document.getElementsByName("so_thich");
    var ghi_chu = document.getElementById("ghi_chu").value;

    kiemtra["gioitinh"] = new kiemtra (gioiTinh);
    // kiemtra["sothich"] = new kiemtra (so_thich);

    if (   maKH.length <=9 || hoten == "" || email == "" || kiemtra["gioitinh"].lap() == "" 
         || quoc_tich == "Chọn quốc tịch" || ghi_chu.length > 200 ) {
        if (maKH == "") {
            
            document.getElementById("thongbao1").innerText = "* Bạn chưa nhập mã khách hàng";
            document.getElementById("ma_kh").style.border = "1px solid red";
            document.getElementById("ma_kh").style.backgroundColor = "rgb(255, 180, 180)";
        } else {
            document.getElementById("thongbao1").innerText = "";
            document.getElementById("ma_kh").style = "";
        }
        if (hoten == "") {
            document.getElementById("thongbao2").innerText = "* Bạn chưa nhập họ và tên";
            document.getElementById("ho_ten").style.border = "1px solid red";
            document.getElementById("ho_ten").style.backgroundColor = "rgb(255, 180, 180)";
        } else {
            document.getElementById("thongbao2").innerText = "";
            document.getElementById("ho_ten").style = "";
        }
        if (email == "") {
            document.getElementById("thongbao3").innerText = "* Bạn chưa nhập email";
            document.getElementById("email").style.border = "1px solid red";
            document.getElementById("email").style.backgroundColor = "rgb(255, 180, 180)";
        } else {
            document.getElementById("thongbao3").innerText = "";
            document.getElementById("email").style = "";
        }
        if (kiemtra["gioitinh"].lap() == "") {
            document.getElementById("thongbao4").innerText = "* Bạn chưa chọn giới tính";
        } else {
            document.getElementById("thongbao4").innerText = "";
        }
        
        if (quoc_tich == "Chọn quốc tịch"){
            document.getElementById("thongbao6").innerText = "* Bạn chưa chọn quốc tịch";
        } else {
            document.getElementById("thongbao6").innerText = "";
        }
        if (ghi_chu.length > 200) {
            document.getElementById("thongbao7").innerText = "* Số kí tự không được vượt quá 200";
        } else {
            document.getElementById("thongbao7").innerText = "";
        } 

        return false;
    }
    else if (maKH != "" && hoten != "" && email != "" && kiemtra["gioitinh"].lap() != ""
	 && quoc_tich != "Chọn quốc tịch" && ghi_chu.length <= 200) {
        alert("Đăng ký thành công");
        return true;
    }
}
function  kiemtra(doi_tuong){
    var rong = "";

    this.lap = function(){
        for (var i = 0; i < doi_tuong.length; i++){
            if (doi_tuong[i].checked) {
                rong = doi_tuong[i].value;
            }
        }
        return rong;
    }
}
