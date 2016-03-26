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
    $(".js-item .open").not(this).removeClass("open");
    $(this).toggleClass("open");


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

  // var $terminal = $(".js-terminal");
  // if ($terminal.length) {
  //   var script = [
  //     {
  //       prompt: '$', cmd: 'npm install netlify-cli', title: 'Install'
  //     },
  //     {
  //       output: ['Installing ...', 'done']
  //     },
  //     {
  //       prompt: '$', cmd: 'cd web-app'
  //     },
  //     {
  //       prompt: 'web-app$', cmd: 'npm run build', title: 'Build'
  //     },
  //     {
  //       output: ['building HTML pages', 'running post-css', 'babel compilation', 'all done, built output in dist/']
  //     },
  //     {
  //       prompt: 'web-app$', cmd: 'ls dist'
  //     },
  //     {
  //       output: ['css/<br>  js/<br>  /assets<br>  index.html<br>  about.html<br>  robots.txt</br>']
  //     },
  //     {
  //       prompt: 'web-app$', cmd: 'netlify deploy', title: 'Deploy'
  //     },
  //     {
  //       prompt: '  Create a new site (Y/n)?', cmd: 'Y'
  //     },
  //     {
  //       prompt: '  Folder to deploy?', cmd: 'dist/'
  //     },
  //     {
  //       output: ['Uploading....', 'Processing...', '  Your site is live at judge-recombination-12277.netlify.com']
  //     }
  //   ];
  //
  //   var $output      = $terminal.find('.js-terminal-output');
  //   var $container   = $output.closest('pre');
  //   var $title       = $terminal.find('.js-terminal-title');
  //   var $nav         = $title.closest('.blurb');
  //   var $template    = $title.closest('.js-terminal-title-template');
  //   //$template.remove();
  //
  //   // var titles = [];
  //   // for (var i in script) {
  //   //   if (script[i].title) {
  //   //     $nav.append($template.clone().find('.js-terminal-title').html(script[i].title).end());
  //   //   }
  //   // };
  //
  //
  // //   var current = 0;
  // //   var step = function() {
  // //     var line = script[current];
  // //     current = (current + 1) % (script.length - 1);
  // //     if (current === 0) {
  // //       $output.empty();
  // //     }
  // //     if (line.prompt) {
  // //       var $lineOutput = $("<span><strong>" + line.prompt + "</strong> " + "</span>");
  // //       $output.append($lineOutput);
  // //       typeLine($container, $lineOutput, line.cmd, step);
  // //     } else {
  // //       printOutput($container, $output, line.output, function() {
  // //         setTimeout(step, 2000);
  // //       });
  // //     }
  // //     // if (line.title) {
  // //     //   $nav.find(".js-terminal-title").each(function() {
  // //     //     var $el = $(this);
  // //     //     console.log('Checking if %s is %s', $el.html(), line.title);
  // //     //     $el.parent().toggleClass('active', $el.html() == line.title);
  // //     //   });
  // //     // }
  // //   }
  // //   step();
  // // }
  //
  // function typeLine($container, $el, line, nextStep) {
  //   var chars = line.split('');
  //   var type = function() {
  //     var char = chars.shift();
  //     if (char) {
  //       $el.append(char);
  //       setTimeout(type, Math.random() * 100 + 50)
  //     } else {
  //       $el.append("<br>");
  //       nextStep();
  //     }
  //     $container[0].scrollTop = $container[0].scrollHeight;
  //   }
  //   type();
  // }
  //
  // function printOutput($container, $el, lines, nextStep) {
  //   console.log()
  //   var output = function(i) {
  //     if (lines[i]) {
  //       $el.append("<div>  " + lines[i] + "</div>");
  //       setTimeout(function() { output(i+1); }, Math.random() * 600 + 200);
  //     } else {
  //       nextStep();
  //     }
  //     $container[0].scrollTop = $container[0].scrollHeight;
  //   }
  //   output(0);
  // }
})();
