(function() {
  $(".button").on('click', function(e) {
    $(this).addClass("js-clicked");
  });

  $(".js-swipe").swipe({
    swipe: function() {
      $(this).addClass("js-clicked");
      document.location.href = $(this).attr("href");
    },
    threshold: 10,
    excludedElements: ""
  });

  $('.off-canvas-toggle').on('click', function(e) {
    e.preventDefault();
    $('.off-canvas-wrap').toggleClass('open-menu');
  });

  $('.exit-off-canvas').on('click', function(e) {
    e.preventDefault();
    $('.off-canvas-wrap').removeClass('open-menu');
  });

  if ($('.docs-main').length) {
    var $ul = $("<ul class='nav'></ul>");
    var $li, id;
    $('.docs-main h2').each(function() {
      id = "#" + this.id;
      $li = $("<li><a></a></li>");
      $li.find("a").attr("href", id).text(this.textContent).toggleClass("current", document.location.hash === id);
      $ul.append($li);
    });
    $(".docs-aside .active").append($ul);
  }

  var player;
  var playerId = 0;
  var tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  document.body.appendChild(tag);

  function onPlayerReady(event) {
      //event.target.playVideo();
  }
  function onPlayerStateChange(event) {
      if(event.data == YT.PlayerState.ENDED) {
          player.destroy();
      }
  }

  $(".button-video").click(function(e){
    e.preventDefault();

    playerId++;
    var $img = $(this).find("img").attr("id", "player-" + (playerId));
    player = new YT.Player("player-" + playerId, {
        width : $img.width(),
        height : $img.height(),
        videoId : $(this).data('video-id'),
        playerVars: { 'autoplay': 1 },
        events : {
            'onReady' : onPlayerReady,
            'onStateChange' : onPlayerStateChange
        }
    });
    $(this).addClass("playing");
  });

  $(".js-pinned").pin({containerSelector: ".js-pinning-container", minWidth: 870, padding: {bottom: 80}});

  /* Responsive tables in documentation */
  $(".docs-main table").each(function() {
    var $td;
    var $table = $(this);
    var titles = [];
    $("th", $table).each(function() {
      titles.push($(this).text());
    });

    $("tbody tr", $table).each(function() {
      $("td", this).each(function(index) {
        $td = $(this);
        if (index) {
          $(this).attr("data-title", titles[index]);
        } else {
          $(this).attr("scope", "row");
        }

      });
    });

  });


  $(".js--help-box-trigger").click(function(e) {
    e.preventDefault()
    $(this).closest(".js-item").toggleClass("open");

    var $this = $(this);
    if ($this.data("helpbox")) {
      var $box = $this.data("helpbox");
      $box.hide();
      if ($box.data("parent")) {
        $box.data("parent").append($box);
      }
      $this.data("helpbox", null);
    } else {
      $(".help-box:visible").each(function() {
        $(this).hide().parent().find(".js--help-box-trigger").data("helpbox", null);
      });
      var $box = $(this).parent().find(".js--help-box");
      var $tr = $this.closest("tr");
      if ($tr.length) {
        var $tds = $tr.find("td").not($this.closest("td"));
        if ($tds.find(":visible").length == 0) {
          $box.show();
        } else {
          var width = $tr.closest("table").width() / 5 * 4 - 3;
          var height = $tr.height() - 2;
          $box.css({top: 0, left: 188, width: width, "min-height": height, "display": "table"});
        }
      } else {
        var $mobile = $this.closest(".mobile-pricing-table");
        if ($mobile.length) {
          $box.show();
        } else {
          var $fourth = $this.closest(".l-fourth");
          var $container = $fourth.next(".l-fourth");
          if ($container.length == 0) {
            $container = $fourth.prev(".l-fourth");
          }
          var $ul = $container.find("ul");
          var width = $ul.width() - 4;
          var height = $ul.height();
          $box.data("parent", $box.parent());
          $(document.body).append($box);
          $box.css({top: $ul.offset().top, left: $ul.offset().left + 2, width: width, "min-height": height, "display": "table"});
        }
      }
      $this.data("helpbox", $box);
    }
  });

  $(".js-read-more").click(function(e) {
    e.preventDefault();

    $(this).closest(".js-item").toggleClass("open");
  });
})();
