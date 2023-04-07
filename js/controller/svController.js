function renderDSSV(svArr) {
  // render lên layout
  var contentHTML = "";
  for (var i = 0; i < svArr.length; i++) {
    var sv = svArr[i];
    // sv là item trong array dssv
    var contentTr = `<tr>
        <td>${sv.ma}</td>
        <td>${sv.ten}</td>
        <td>${sv.email}</td>
        <td>${sv.tinhDTB()}</td>
        <td><button onclick="xoaSV(${sv.ma})" class="btn btn-danger">Xóa</button>
        <button onclick="suaSV(${sv.ma})"
         class="btn btn-secondary">Sửa </button></td>
        
        </tr>`;
    contentHTML = contentHTML + contentTr;
  }
  document.getElementById("tbodySinhVien").innerHTML = contentHTML;
}
function layThongTinTuForm() {
  // lấy thông tin từ form
  var ma = document.getElementById("txtMaSV").value;
  var ten = document.getElementById("txtTenSV").value;
  var email = document.getElementById("txtEmail").value;
  var matkhau = document.getElementById("txtPass").value;
  var toan = document.getElementById("txtDiemToan").value * 1;
  var ly = document.getElementById("txtDiemLy").value * 1;
  var hoa = document.getElementById("txtDiemHoa").value * 1;
  // lưu lại
  var sv = new SinhVien(ma,ten,email,matkhau,toan,ly,hoa) 
  return sv;
}
function showThongTinLenForm(sv) {
  document.getElementById("txtMaSV").value = sv.ma;
  document.getElementById("txtTenSV").value = sv.ten;
  document.getElementById("txtEmail").value = sv.email;
  document.getElementById("txtPass").value = sv.matkhau;
  document.getElementById("txtDiemToan").value = sv.toan;
  document.getElementById("txtDiemLy").value = sv.ly;
  document.getElementById("txtDiemHoa").value = sv.hoa;
}
// localStorage
// JSON stringtify, JSON parse
