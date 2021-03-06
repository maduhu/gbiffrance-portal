  function addFilter(type)
  { 
	if (type == "coordinates") $("#input-search-" + type).val("true");
	if (type == "place" || type == "taxa" || type == "coordinates" || type == "dataset" || type == "date")
    {
      $("#search-" + type).show();
      $("#search-submit").show();      
    }
    
  }
  
  function removeFilter(type)
  { 
    if (type == "coordinates") $("#input-search-" + type).val("false");
    else if (type == "place" || type == "taxa" || type == "dataset" || type == "date") $("#input-search-" + type).val('');
    if (type == "place" || type == "taxa" || type == "coordinates" || type == "dataset" || type == "date")
    {
      $("#search-" + type).hide();        
    }  
    hideSubmit();
  }
  
  function hideSubmit()
  {
    if ($(".search-input").filter(":visible").length == 0) 
	{
	  $("#search-submit").hide(); 
	}	  
  }
  
  function searchTaxas(search, page)
  {  
	// temporary solution
	search = search.replace(/ /g,"%20");
    $('#taxas').load(taxas({search: search, page: page}));
    $('#taxas').show()
  }
  
  function searchOccurrences(searchTaxa, searchPlace, searchDataset, searchDate, onlyWithCoordinates, from)
  {
	searchTaxa = searchTaxa.replace(/ /g,"%20");
	searchPlace = searchPlace.replace(/ /g,"%20");
	searchDataset = searchDataset.replace(/ /g,"%20");
	searchDate = searchDate.replace(/ /g,"%20");
	$('#occurrences').load(occurrences({searchTaxa: searchTaxa, searchPlace: searchPlace, searchDataset: searchDataset, searchDate: searchDate, onlyWithCoordinates: onlyWithCoordinates, from: from}));
	$('#occurrences').show(); 
  }
  
  function searchPlaces(search)
  {
	search = search.replace(/ /g,"%20");  
    $('#places').load(places({search: search}));
    $('#places').show() 
  }
  
  function searchDatasets(search)
  {
    search = search.replace(/ /g,"%20");
    search = search.replace(/\'/g,"%27");
    $('#datasets').load(datasets({search: search}));
    $('#datasets').show() 
  }
     
  $(document).ready(function() {	   
	if ($("#input-search-taxa").val() == '') $("#search-taxa").hide();
	if ($("#input-search-place").val() == '') $("#search-place").hide();
	if ($("#input-search-coordinates").val() == "false") $("#search-coordinates").hide();
	if ($("#input-search-dataset").val() == '') $("#search-dataset").hide();
	if ($("#input-search-date").val() == '') $("#search-date").hide();
	hideSubmit();
    /* Show filters */
    $("#search-filter-place").click(function() {addFilter('place')})
    $("#search-filter-taxa").click(function() {addFilter('taxa')})
    $("#search-filter-dataset").click(function() {addFilter('dataset')})
    $("#search-filter-coordinates").click(function() {addFilter('coordinates')})
    $("#search-filter-date").click(function() {addFilter('date')})
    
    /* Hide filters */
    $("#search-place").dblclick(function() {removeFilter('place')})
    $("#search-taxa").dblclick(function() {removeFilter('taxa')})
    $("#search-dataset").dblclick(function() {removeFilter('dataset')})
    $("#search-coordinates").dblclick(function() {removeFilter('coordinates')})
    $("#search-date").dblclick(function() {removeFilter('date')})
    //searchDatasets('${search}');
  });