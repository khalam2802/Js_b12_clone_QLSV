var dssv = [];

// lấy json lên khi user load trang
var dataJson=localStorage.getItem("DSSV_LOCAL");
// convert ngược từ JSON thành array
if (dataJson!=null){
  dssv=JSON.parse(dataJson);
  renderDSSV(dssv);
}
function themSinhVien() {
  var sv=layThongTinTuForm();
  dssv.push(sv);
  // convert array dssv thành json
  var dataJson=JSON.stringify(dssv);
  console.log('dataJson: ', dataJson);
  // set get move
  // lưu json xuống
  localStorage.setItem("DSSV_LOCAL",dataJson);
  
  
// render lên layout
  renderDSSV(dssv);
}

function xoaSV(id) {
  // tìm vị trí
  var viTri = -1;
  for (var i = 0; i < dssv.length; i++) {
    var sv = dssv[i];
    if (sv.ma == id) {
      viTri = i;
    }
    dssv.splice(viTri, 1);
  }
  renderDSSV(dssv);
}
function suaSV(id){
  console.log('id: ', id);
  var viTri=dssv.findIndex(function(item){
    return item.ma==id;
  });
  if (viTri!=-1){
    console.log('viTri: ', viTri);
  document.getElementById("txtMaSV").disabled=true;

    showThongTinLenForm(dssv[viTri]);
  }
  renderDSSV(dssv);
}
function capNhatSinhVien(){
  var sv=layThongTinTuForm();
  document.getElementById("txtMaSV").disabled=false;
  var viTri=dssv.findIndex(function(item){
    return item.ma==sv.ma;
  });
  if (viTri!=-1){
    dssv[viTri]=sv;
    renderDSSV(dssv);
    resetForm();
  }

}
function resetForm(){
  document.getElementById("formQLSV").reset();
}

