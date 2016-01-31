(function($) {
  
  /* 
   * Help Scout beacon 
   */
   
  $("#btn-open-ticket").on("click", function(e) {
    e.preventDefault();

    HS.beacon.open();
  });
  
  
  /* 
   * Expand/collapse details 
   */
  
  if (location.hash.match(/^#incident-details/)) location.hash = ''; 
  
  $(document).delegate(".details-toggle", "click", function(e) {
    e.preventDefault();
    
    $(this)
      .closest(".details").toggleClass("expanded");
  });

  
  /*
   * Status History Filter
   */
   var incidents = null,
       templates = {
         incidents: $("#js-template-incident").html(),
         noIncident: $("#js-template-no-incident").html()
       };
   
   function padDate(n) {
     return n < 10 ? "0" + n : n;
   };

   function formatDate(d) {
     return "" + d.getUTCFullYear() + "-" + padDate((d.getUTCMonth() + 1)) + "-" + padDate(d.getUTCDate());
   };
   
   function loadIncidents() {
     if (incidents) {
       return $.Deferred().resolve(incidents).promise();
     } else {
       return $.getJSON("/status.json").then(function(data) {
         return incidents = data;
       });
     }
   };

  function loadHistory(year, $container) {      
    loadIncidents().then(function(incidents) {
      var now = new Date(),
          endDate = year === now.getFullYear() ? now : new Date("" + year + "-12-31"),
          startDate = new Date("" + year + "-01-01"),
          incidentMap = {},
          output = [],
          oneDay = 60*60*24*1000,
          date;
          
      incidents.forEach(function(group) {
        incidentMap[group.name] = group.items;
      });
      
      while (endDate >= startDate) {
        date = formatDate(endDate);
        if (incidentMap[date]) {
          output.push(Mustache.render(templates.incidents, {
            incidents: incidentMap[date].map(function(incident) {
              return {
                incident: incident,
                description: incident.description && marked(incident.description),
                details: incident.details && marked(incident.details),
                open: !incident.resolved,
                hasDetails: !!incident.details
              }
            })
          }));
        } else {
          output.push(Mustache.render(templates.noIncident, {date: date}));
        }
        endDate.setTime(endDate.getTime() - oneDay);
      }
      $container.html(output.join(""));
    });
  };
  
  function updateHistoryDropdown($link) {
    $link
      .closest(".dropdown")
        .find(".selected").removeClass("selected").end()
        .find(".dropdown-toggle").text($link.text()).end()
      .end()
      .parent().addClass("selected");
  };
  

  if (location.search) {
    
    var year  = (location.search.match(/year=(\d+)/) || [])[1],
        $link = $("#js-history-link-" + year);
        
    if ($link.length) {
      loadHistory(parseInt(year, 10), $("#js-history-container"));
      updateHistoryDropdown($link);
    } else {
      location.search = ''
    }
  }

})(jQuery);