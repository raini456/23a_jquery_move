//$(selector(htmlelement, cssclass,id)).methode -> .css(), .attr(), .hide(), .show ….
//$(selector(htmlelement, cssclass,id)).event(fn(){...} -> .click, .ready(), .on()
function createScreen(){
    console.log(allData);    
    for (var i = 0, max = allData.length; i < max; i++) {        
      var elemDiv=document.createElement('div');
      elemDiv.setAttribute("data-nr", i);//klare Zuweisung
      elemDiv.setAttribute("class", "listBtn");
      //elemDiv.className="listBtn";
      var t=document.createTextNode(allData[i].country);
      elemDiv.appendChild(t);
      elemDiv.click(alert(this.attr("data-nr")));
      //man kann immer gleich bei einer ID sie gleich ohne ein Auslesen ansprechen
      listB1.appendChild(elemDiv);
    }
}
function createScreen2() {
    console.log(allData);
    $.each(allData, function (index, item) {
        $('.listView').append("<div class='listBtn' data-nr='"+index+"'>"+item.country+"</div>");
    });
    $('.listBtn').click(function(){
        //alert($(this).attr('data-nr'));
    });
}
function showCountry(){
    //console.log(allData[0]);
    $('.listBtn').click(function(){
      var num = $(this).attr('data-nr');
      //alert(allData[num].flag);
      $('.countryFlag').css({
        backgroundImage:'url(assets/images/'+allData[num].flag+')'
      });
      $('.countryName').text(allData[num].country.upper);
      $('.countryPopulation').text(allData[num].people);
      $('.countryCapital').text(allData[num].capital);
  });
//      
}
$(document).ready(function(){
   $('.listView').click(function(){
        $('.moveBox').animate({
            marginLeft:'-290px'
        });
    });
    $('.detailView').click(function(){
        $('.moveBox').animate({
            marginLeft:'0px'
        });
    });
    createScreen2(); 
    showCountry();
});


