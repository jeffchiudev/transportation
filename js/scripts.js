$(document).ready(function() {
  $("form#transportation_survey").submit(function(event) {
    event.preventDefault();
    $("#work-responses").show();
    $("input:checkbox[name=work-transportation]:checked").each(function() {
      const workTransportationMode = $(this).val();
      $("#work-responses").append(workTransportationMode + "<br>");
    });  
    $("#nonWork-responses").show();
    $("input:checkbox[name=nonWork-transportation]:checked").each(function() {
      const workTransportationMode2 = $(this).val();
      $("#nonWork-responses").append(workTransportationMode2 + "<br>");
    }); 
    $("transportation_survey").hide();
  });
});