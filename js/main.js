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
      console.log("Row: %o", this);
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

  /* Help boxes */
  var helpboxOverlay = document.createElement("div");
  var $currentHelpbox = null;
  helpboxOverlay.className = "help-box-overlay";
  var $helpboxOverlay = $(helpboxOverlay);
  document.body.appendChild(helpboxOverlay);
  $(".js--help-box-trigger").click(function(e) {
    e.preventDefault();
    if ($currentHelpbox) {
      var $container = $currentHelpbox.parent();
      $container.attr("style", "");
      $helpboxOverlay.hide();
      $currentHelpbox.hide();
      $currentHelpbox = null;
    } else {
      $helpboxOverlay.show();
      var $container = $(this).parent();
      $currentHelpbox = $container.find(".js--help-box");
      $container.css({position: "relative", "z-index": 950});
      var pos = $container.offset();
      if (pos.left + $container.width() > $(window).width() - 600) {
        // position on left side of container;
        $currentHelpbox.css({
          left: -410,
          top: -50
        });
      } else {
        $currentHelpbox.css({
          left: $container.width() + 30,
          top: -50
        });
      }
      $currentHelpbox.show();
    }
  });
  $helpboxOverlay.click(function(e) {
    if ($currentHelpbox) {
      var $container = $currentHelpbox.parent();
      $container.attr("style", "");
      $helpboxOverlay.hide();
      $currentHelpbox.hide();
      $currentHelpbox = null;
    }
  });

})();
