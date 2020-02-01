/*active button class onclick*/
const jsLD = '<div class="loader-dot"> <div class="loading"> <div class="a" style="--n: 5;"> <div class="dot_lhie dot_ldcontent" style="--i: 0;"></div> <div class="dot_lhie dot_ldcontent" style="--i: 1;"></div> <div class="dot_lhie dot_ldcontent" style="--i: 2;"></div> <div class="dot_lhie dot_ldcontent" style="--i: 3;"></div> <div class="dot_lhie dot_ldcontent" style="--i: 4;"></div> </div> </div> </div>';
$('nav a').click(function(e) {
  e.preventDefault();
  $('nav a').removeClass('active');
  $(this).addClass('active');
  if(this.id === !'studentManager'){
    $('.studentManager').addClass('noshow');
  }
  else if(this.id === 'studentManager') {
    $('.studentManager').removeClass('noshow');
    $('.rightbox').children().not('.studentManager').addClass('noshow');
    if($('.studentAll').html() == "" || $('.studentAll').hasClass('formtest') == undefined)
    {
      var jsLoading = '<form class="form-view full-width"><div class="form-input box-loading">  <input class="text input input_f disabled" type="text">  </div><div class="form-input heigh-250px box-loading">  <input class="input input_f disabled" type="text">  </div> <div class="form-input box-loading">  <input class="input input_f disabled" type="text">  </div><div class="box-loading">  <input class="input input_f disabled box-loading" type="text">  </div><div class="box-loading">  <input class="input input_f" type="text">  </div><div class="box-loading">  <input class="input input_f" type="text">  </div><div class="form-input-absoluted box-loading"></div> </form>';
      $('.studentAll').append(jsLoading);
      studentManager_();
    }
  }
  else if (this.id === 'profile') {
    $('.profile').removeClass('noshow');
    $('.rightbox').children().not('.profile').addClass('noshow');
    if($('.profileGV').html() == "" || $('.profileGV').hasClass('formtest') == undefined)
    {
      var jsLoading = '<form class="form-view"><div class="form-input validate-input box-loading"> <span class="label-input">Họ và tên:</span> <input class="text input input_f disabled" type="text"> <span class="focus-input"></span> </div><div class="form-input validate-input box-loading"> <span class="label-input">Email:</span> <input class="input input_f disabled" type="text"> <span class="focus-input"></span> </div><div class="form-input validate-input box-loading"> <span class="label-input">Số điện thoại:</span> <input class="input input_f disabled box-loading" type="text"> <span class="focus-input"></span> </div><div class="form-input validate-input box-loading"> <span class="label-input">Nhập mật khẩu cũ:</span> <input class="input input_f" type="text"> <span class="focus-input"></span> </div><div class="form-input validate-input box-loading" > <span class="label-input">Nhập mật khẩu mới:</span> <input class="input input_f" type="text"> <span class="focus-input"></span> </div><div class="form-input-absoluted box-loading"></div> </div></form>';
      $('.profileGV').append(jsLoading);
      profile_();

    }
    // else if ($('.rightbox').children('.profileGV')) {
    //   {
    //     alert('ĐÃ TẢI');
    //   }
    // }
  }
  else if(this.id === 'subscription') {
    $('.subscription').removeClass('noshow');
    $('.rightbox').children().not('.subscription').addClass('noshow');
    if($('#view_topic_st_reg').html() == "")
    {
      var jsLoading = '<form class="form-view full-width"><div class="form-input box-loading">  <input class="text input input_f disabled" type="text">  </div><div class="form-input heigh-250px box-loading">  <input class="input input_f disabled" type="text">  </div> <div class="form-input box-loading">  <input class="input input_f disabled" type="text">  </div><div class="box-loading">  <input class="input input_f disabled box-loading" type="text">  </div><div class="box-loading">  <input class="input input_f" type="text">  </div><div class="box-loading">  <input class="input input_f" type="text">  </div><div class="form-input-absoluted box-loading"></div> </form>';
      $('#view_topic_st_reg').append(jsLoading);
      topicManager_();
    }

  }
    else if(this.id === 'privacy') {
    $('.privacy').removeClass('noshow');
    $('.rightbox').children().not('.privacy').addClass('noshow');
  }
  else if(this.id === 'settings') {
    $('.settings').removeClass('noshow');
    $('.rightbox').children().not('.settings').addClass('noshow');
  }
  else if(this.id === 'pushNotification') {
    $('.pushNotification').removeClass('noshow');
    $('.rightbox').children().not('.pushNotification').addClass('noshow');
  }
  else if(this.id === 'notif') {
    $('.notif').removeClass('noshow');
    $('.rightbox').children().not('.notif').addClass('noshow');
  }
});

// Message
function closeMessage(el) {
  el.addClass('is-hidden');
}

$('.js-messageClose').on('click', function(e) {
  closeMessage($(this).closest('.Message'));
});

$('#js-helpMe').on('click', function(e) {
  alert('Help you we will, young padawan');
  closeMessage($(this).closest('.Message'));
});

$('#js-authMe').on('click', function(e) {
  alert('Okelidokeli, requesting data transfer.');
  closeMessage($(this).closest('.Message'));
});

$('#js-showMe').on('click', function(e) {
  alert("You're off to our help section. See you later!");
  closeMessage($(this).closest('.Message'));
});

$(document).ready(function() {
  setTimeout(function() {
    closeMessage($('#js-timer'));
  }, 5000);
});

function viewrp(mssv){
    $(".modelDetails").css("display","block")
}

$(document).ready(function(){
  $('.modelDetails-close').click(function(event) {
      $('.modelDetails').css("display","none");
      $('.modelCT_Decription').css("display","none");
  });
});

function studentManager_() {
  if(getCoo56yhjkk() == undefined)
  return;
  var url = APIurl  + getCoo56yhjkk() + "&action=ltLookup";

  $.getJSON(url, function(data) {
    var strText = '<div class="divTable"> <div class="divHeading"> <div class="cell_ith"> MSSV </div> <div class="cell_ith">Họ và tên</div> <div class="cell_ith"> Email </div> <div class="cell_ith"> Số điện thoại </div> <div class="cell_ith"> Ngày sinh </div> <div class="cell_ith"> Mã lớp </div> <div class="cell_ith"> Tên môn học </div> <div class="cell_ith"> Báo Cáo </div> </div>';
    $.each(data.lookup, function(key, val) {
      strText += '<div class="row_ith">'+ '<div class="cell_ith">'+ val["sv-masv"] + '</div>';
      strText += '<div class="cell_ith">' +val["sv-hoten"] + '</div>';
      strText += '<div class="cell_ith">' +val["sv-email"] + '</div>';
      strText += '<div class="cell_ith">' +val["sv-sdt"] + '</div>';
      strText += '<div class="cell_ith">' +val["sv-birth"] + '</div>';
      strText += '<div class="cell_ith">' +val["sv-malop"] + '</div>';
      strText += '<div class="cell_ith">' +val["sv-tenmonhoc"]  + '</div>';
      strText += '<div class="cell_ith">'+ '<button class="btn-hutech more" onclick="viewrp('+val["sv-masv"]+')"><i class="fas fa-search"><span>&nbsp;REVIEW</span></i></button>'  + "</div></div>";
    });
    strText += "</div>";
      $(".studentAll").html(strText);
      $("span#total_stduent").html(data.extension.tongDSHD);
  });
}
$(".studentManager").ready(function() {
studentManager_();
})
function profile_(){
  if(getCoo56yhjkk() == undefined)
  return;
  var url = APIurl  + getCoo56yhjkk() + "&action=ltprofile";

  $.getJSON(url, function(data) {
    var strText = '<div class="formtest">';
    $.each(data, function(key, val) {
      strText += '<div class="title"> <h2>thông tin cá nhân giảng viên</h2> </div>';
      strText += '<form class="form-view" onsubmit="return false;">'
      strText += '<div class="form-input validate-input" data-validate="Vui lòng nhập họ tên"> <span class="label-input">Họ và tên:</span> <input class="input input_f disabled" type="text" value="'+val[0]["gv-hoten"]+'" placeholder="Nhập họ và tên"> <span class="focus-input"></span> </div>';
      strText += '<div class="form-input validate-input" data-validate="Nhập đúng định dạng email"> <span class="label-input">Email:</span> <input class="input input_f disabled" type="text" value="'+ val[0]["gv-email"]+'" placeholder="Nhập email"> <span class="focus-input"></span> </div>'  ;
      strText += '<div class="form-input validate-input" data-validate="Số điện thoại là bắt buộc"> <span class="label-input">Số điện thoại:</span> <input class="input input_f disabled" type="text" value="'+ val[0]["gv-phone"]+'" placeholder="Nhập số điện thoại"> <span class="focus-input"></span> </div></form>';

      // Change password form
      strText += '<form class="form-view top-10px" onsubmit="return false;">';
      strText += '<div class="form-input validate-input" data-validate="Nhập mật khẩu cũ"> <span class="label-input">Nhập mật khẩu cũ:</span> <input id="oldPASS" class="input input_f" type="password" name="phone" placeholder="Nhập mật khẩu cũ"> <span class="focus-input"></span> </div><div class="form-input validate-input" data-validate="Nhập mật khẩu mới"> <span class="label-input">Nhập mật khẩu mới:</span> <input id="newPASS" class="input input_f" type="password" name="phone" placeholder="Nhập mật khẩu mới"> <span class="focus-input"></span> </div><div class="form-input-absoluted"><input id="submitChangePW" type="submit" class="inputButton btn-left" value="ĐÔNG Ý THAY ĐỖI MẬT KHẨU"> <div class="lg-oad loading-change  is-hidden"><i class="fas fa-spinner fa-pulse"></i></div> </div></div class="script_tab_sv"><script src="./assets/js/tab_profile.js"></script></div>';

    });
    strText += '</form></div>';
      $(".profileGV").html(strText);

  });
}
$(".profile").ready(function() {
  profile_();
})

function topicManager_(){
  if(getCoo56yhjkk() == undefined)
  return;
  var url = APIurl  + getCoo56yhjkk() + "&action=lt_view_topic";

  $.getJSON(url, function(data) {
    var strText = '<div class="divTable"> <div class="divHeading"> <div class="cell_ith">Thời gian đăng ký</div> <div class="cell_ith">MSSV </div> <div class="cell_ith">Họ và tên</div> <div class="cell_ith">Tên đề tài</div> <div class="cell_ith">Mô tả đề tài</div> <div class="cell_ith">Tên môn học </div><div class="cell_ith">Công cụ </div></div>';
    $.each(data.lookup, function(key, val) {
      strText += '<div class="row_ith">'+ '<div class="cell_ith">'+ val["time-reg"] + '</div>';
      strText += '<div class="cell_ith">' +val["sv-masv"] + '</div>';
      strText += '<div class="cell_ith">' +val["sv-hoten"] + '</div>';

      strText += '<div class="cell_ith">' +val["ten-detai"] + '</div>';
      strText += '<div class="cell_ith" style="width: 300px">' +val["mota-detai"] + '</div>';
      strText += '<div class="cell_ith">' +val["ten-monhoc"] + '</div>';

      strText += '<div class="cell_ith">' + '<button class="btn-hutech more" onclick="xemmotadetai(' + val["sv-masv"] + ')">XEM ĐỀ TÀI VÀ KIỂM DUYỆT</button>' + "</div></div>";
      strText += '</div>';

    });
    strText += "</div>";
      $("#view_topic_st_reg").html(strText);

  });
}
$("#view_topic_st_reg").ready(function() {
  topicManager_();
})
$("#pushsubmit").click(function(event) {
  var key = $.trim($("#pushkey").val()).replace(/ /g, '');
  var content = editor_contentNotification.getValue();
  var title = $("#pushtitlecontent").val();
  if (content.length == "" || content.length <= 10)
    return alert('Nội dung quá ngắn hoặc bạn chưa nhập nội dung! Xin cảm ơn');
  if (title.length == "" || title.length >50)
      return alert('Tiêu đề không được bỏ trống và không quá 50 ký tự! Xin cảm ơn');
  document.querySelector(".form-input-absoluted .downloading").classList.remove("is-hidden");
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbzYPTjObWfAe0sBQrCCjPN1FjYxdJ1Vp178WIN5rrnUeRlzw4ft/exec?request=ltpush&" + getCoo56yhjkk(),
    type: "post",
    data: {
      "key": key,
      "title": title,
      "contentnotification": content,
    },
    jsonp: "callback",
    success: function(response) {
      alert(response.result);
      document.querySelector(".form-input-absoluted .downloading").classList.add("is-hidden");

    }
  });
})
$("#sendconfirm").click(function(event) {
  var content = editor_contentNotification.getValue();
  var htmlcontents = tui.Editor.factory({
    el: document.querySelector('#htmlcontent'),
    viewer: true,
    initialValue: content
  });
  var gethtmlcontents = $("#htmlcontent .tui-editor-contents").html();

  var title = $("#pushtitlecontent").val();
  if (content.length == "" || content.length <= 10)
    return alert('Nội dung quá ngắn hoặc bạn chưa nhập nội dung! Xin cảm ơn');
  if (title.length == "" || title.length >50)
      return alert('Tiêu đề không được bỏ trống và không quá 50 ký tự! Xin cảm ơn');
  document.querySelector(".form-input-absoluted .sending").classList.remove("is-hidden");
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbzYPTjObWfAe0sBQrCCjPN1FjYxdJ1Vp178WIN5rrnUeRlzw4ft/exec?request=ltsendEmail&" + getCoo56yhjkk(),
    type: "post",
    data: {
      "title": title,
      "contentnotification": gethtmlcontents,
    },
    jsonp: "callback",
    success: function(response) {
      alert(response.result);
      document.querySelector(".form-input-absoluted .sending").classList.add("is-hidden");

    }
  });
})
$("#sendEmail").click(function(event) {
    $(".modelDetails").css("display","block")[0];
})
$('.modelDetails').ready(function() {
  var span = document.getElementsByClassName('cancelconfirm')[0];
  span.onclick = function() {
    $('.modelDetails').css("display","none");
  }
});


function xemmotadetai(mssv) {
  $(".modelCT_Decription").css("display", "block")[0];
  $('.wrapper-content-description').ready(function() {

  $("#sv_content_description").html(jsLD);
    var url = APIurl +"&mssv=" + mssv + "&action=xemmotadetai";
    $.getJSON(url, function(data) {
      var editor = tui.Editor.factory({
        el: document.querySelector('#sv_content_description'),
        viewer: true,
        minHeight: '500px',
        initialValue: data.motadetai
      });
      $("#mssv_require").val(data.mssv);
    });
  });
}
$(".modelCT_Decription").ready(function() {
  var note = $("#sendtext_optionalEmail").val();
  var mssv = $.trim($("#mssv_require").val()).replace(/ /g, '');
  $("#approved_detai").click(function(event) {
      var url = APIurl + getCoo56yhjkk() +"&mssv=" + mssv + "&note=" + note +  "&action=duyetdetai";
      $.getJSON(url, function(data) {
        // return alert(data.result)
        alertbox.show(data.result);
      });
  })
  $("#reject_detai").click(function(event) {
      var url = APIurl + getCoo56yhjkk() +"&mssv=" + mssv + "&note=" + note +  "&action=tuchoidetai";
      $.getJSON(url, function(data) {
        // return alert(data.result)
        alertbox.show(data.result);
      });
  })
});
