$(function(){
  $("#trigger").click(function(){
    $("#screen").fadeIn();
    // addClass → activeクラスを付ける
    $("#menu").addClass('active');
  });

  $("#close").click(function(){
    $("#screen").fadeOut();
    // removeClass → activeクラスを外す
    $("#menu").removeClass('active');
  });

  $("#screen").click(function(){
    $("#screen").fadeOut();
    $("#menu").removeClass('active');
  });
});
