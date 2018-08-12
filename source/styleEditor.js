$(document).ready(function(){

  function updateStyling(selector, property, value) {
    $(selector).css(property, value);
  }
  
  let form = $('#style_editor');
  
  form.submit(function(event) {
    let selector = $("input[name='selector']").val();
    let property = $("input[name='property']").val();
    let value    = $("input[name='value']").val();
    
    updateStyling(selector, property, value);
    event.preventDefault();
  });
});
