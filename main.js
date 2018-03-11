// jQueryを使える事前準備
$(document).ready(function() {
  // この中にjQueryを記述していく

  var box = '変数の中身のテスト';
  // alert(box); alert()
  console.log('box');

  //クリックイベントの書き方
  $('.Box').on("click", function() {
    //alert('押されたよ');
    console.log('.box');
  });
}); //セミコロン忘れない！！！

//セレクタの練習
// $('#js').on("click",function(){
//   var elem = '<a href="">次ページ</a>';
//   $("#js").html(elem); //指定IDの内容に、セレクタの内容をhtmlで書き換える
//   $('#js').text(elem);
//   $('#js').css('color','#ff0');
//   $('#js').show(4000);
//   $('#js').prepend(elem);
//   $('#js').append(elem);
//   $('#js').empty();
//   $('#js').remove();
// });

//演習_1
// $(document).ready(function() {
//   var count = 0;
//
//   //showをクリックで2秒かけて表示
// if(count = 1){
//   $('#show').on("click", function() {
//     $('#ex').hide().fadeIn(4000);
//     });
// }else {
//   $('#show').on("click", function() {
//     count++;
//     $('.count').text(count);
//     $('.count').css('border', count + 'px solid #f00');
//   });
// }
//   //hideをクリックで2秒かけて非表示
//   $('#hide').on("click", function() {
//     $('#ex').hide(2000);
//   });
//   //クリック回数をカウントアップ＆カウント分のボーダーつける
// }); //セミコロン忘れない！！！


$(document).ready(function() {
  $('#ex').hide().fadeIn(4000);
  $('#ex').html("<p>かきくけこ</p>")
  $('#ex').css('background-color','black');
  $('#ex').css('color','white');
  $('#ex').prepend("<p>あいうえお</p>");
  $('#ex').append("<p>さしすせそ</p>");
  $("p:odd").css('color','black');
  $("p:odd").css('background-color','white');
});
