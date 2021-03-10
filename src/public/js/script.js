
document.addEventListener('DOMContentLoaded', function () {

  // Initialization sidenav
  var optionsSidenav = { fullWidth: true };
  var elemsSidenav = document.querySelectorAll('.sidenav');
  var instancesSidenav = M.Sidenav.init(elemsSidenav, optionsSidenav);

  // Initialization slider
  var optionsSlider = {};
  var elemsSlider = document.querySelectorAll('.slider');
  
  var instancesSlider = M.Slider.init(elemsSlider, optionsSlider);
  // document.querySelectorAll('.slider').style.height = "50px"; 
  console.log(elemsSlider)
  for (var elem of elemsSlider) {
    elem.style.height = "300px";
  }
 

  document.querySelector("ul.fullscreen").style.height = document.querySelector("div.slider").style.height;


  // Initialization dropdown
  var optionsDropdown = { coverTrigger: false, constrainWidth: false, };
  var elemsDropdown = document.querySelectorAll('.dropdown-trigger');
  var instancesDropdown = M.Dropdown.init(elemsDropdown, optionsDropdown);

  // Initialization Collapsible
  var optionsCollapsible = {};
  var elemsCollapsible = document.querySelectorAll('.collapsible');
  var instancesCollapsible = M.Collapsible.init(elemsCollapsible, optionsCollapsible);

  // Initialization Tooltip
  var optionsTooltip = {};
  var elemsTooltip = document.querySelectorAll('.tooltipped');
  var instancesTooltip = M.Tooltip.init(elemsTooltip, optionsTooltip);

  //   // Initialization Datepicker
  //   var optionsDatepicker = {
  //     format:'dd-mm-yyyy',
  //   i18n: {
  //     today: 'Hoje',
  //     clear: 'Limpar',
  //     done: 'Ok',
  //     nextMonth: 'Próximo mês',
  //     previousMonth: 'Mês anterior',
  //     weekdaysAbbrev: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
  //     weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  //     weekdays: ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'],
  //     monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  //     months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
  // }////consetar depois
  //   };
  //   var elemsDatepicker = document.querySelectorAll('.datepicker');
  //   var instancesDatepicker = M.Datepicker.init(elemsDatepicker, optionsDatepicker);


});

