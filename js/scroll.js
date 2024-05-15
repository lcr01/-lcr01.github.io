$(document).ready(function() {
  // 鑾峰彇杞挱椤瑰拰鎸囩ず鐐�
  var items = $('.carousel-item');
  var points = $('.carousel-nav button');

  // 瀹氫箟杞挱鍑芥暟
  function carousel() {
    // 鑾峰彇褰撳墠杞挱椤�
    var activeItem = $('.carousel-item.active');
    // 鑾峰彇涓嬩竴杞挱椤�
    var nextItem = activeItem.next();

    // 濡傛灉涓嬩竴杞挱椤逛笉瀛樺湪锛屽垯浠庡ご寮€濮嬭疆鎾�
    if (!nextItem.length) {
      nextItem = items.first();
    }

    // 鍒囨崲杞挱椤瑰拰鎸囩ず鐐规牱寮�
    activeItem.removeClass('active');
    nextItem.addClass('active');
    points.eq(nextItem.index()).addClass('active').siblings().removeClass('active');
  }

  // 瀹氫箟瀹氭椂鍣紝姣忛殧5绉掑垏鎹竴娆¤疆鎾」
  var timer = setInterval(carousel, 2000);

  // 褰撻紶鏍囨偓鍋滃湪杞挱瀹瑰櫒涓婃椂锛屾竻闄ゅ畾鏃跺櫒
  $('.carousel').hover(function() {
    clearInterval(timer);
  }, function() {
    timer = setInterval(carousel, 3000);
  });

  // 褰撶偣鍑绘寚绀虹偣鏃讹紝璺宠浆鑷崇浉搴旂殑杞挱椤�
  points.click(function() {
    var index = $(this).index();
    var activeItem = $('.carousel-item.active');
    var nextItem = items.eq(index);

    // 濡傛灉褰撳墠杞挱椤瑰拰涓嬩竴涓疆鎾」鐩稿悓锛屽垯涓嶆墽琛屼换浣曟搷浣�
    if (activeItem.index() == nextItem.index()) {
      return;
    }

    // 鍒囨崲杞挱椤瑰拰鎸囩ず鐐规牱寮�
    activeItem.removeClass('active');
    nextItem.addClass('active');
    points.eq(nextItem.index()).addClass('active').siblings().removeClass('active');
  });
});
