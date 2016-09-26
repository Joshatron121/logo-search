$(function(){
	var searchedFor = [true, true]

	var resetIcons = function(){
		$('img').removeClass('grey');
		$('img').addClass('grey');
	}

	// var setIconsSetA = function(termsArray) {
	// 	if(termsArray[0] == 'SEARCH ALL') {
	// 		$('.lp').removeClass('grey');
	// 		$('.sp').removeClass('grey');
	// 	} else if (termsArray[0] == 'SCHOLARSHIP PROGRAM') {
	// 		$('.sp').removeClass('grey');
	// 	} else if (termsArray[0] == 'LOAN PROGRAM') {
	// 		$('.lp').removeClass('grey');
	// 	}
	// }

	// var setIconsSetB = function(termsArray) {
	// 	if(termsArray[1] == 'SEARCH ALL') {
	// 		$('.kg').removeClass('grey');
	// 		$('.hs').removeClass('grey');
	// 	} else if (termsArray[1] == 'KINDERGARTEN') {
	// 		$('.kg').removeClass('grey');
	// 	} else if (termsArray[1] == 'HIGH SCHOOL') {
	// 		$('.hs').removeClass('grey');
	// 	}
	// }

	var setIcons = function(searchTerms, searchedThis){
		var thisSearch = [];

		$.each(searchedThis, function(index, value){
			console.log(value)
			if(value == false){
				searchTerms[index] = '';
				console.log(searchTerms[index])
			}
		})

		console.log(searchTerms)

		$.each(searchTerms, function(index, value){
			if(value == 'all') {
				if(index == 0) {
					thisSearch.push('.lp');
					thisSearch.push('.sp');
				} else {
					thisSearch.push('.kg');
					thisSearch.push('.hs');
				}
			} else {
				thisSearch.push('.'+ value);
			}
		})
		$.each(thisSearch, function(index, value){
			if(value !== '.'){
				$(value).removeClass('grey')
			}
		})

		$.each(searchedFor, function(index, value){
			searchedFor[index] = false;
		})

		console.log(thisSearch)
		
	}

	$('ul').on('click', 'li', function(){
		var clickedText = $(this).text()
		var clickedId = $(this).attr('class');
		
		$(this).parent().prev('button').attr('id', clickedId)
		$(this).parent().prev('button').html(clickedText + '<span class="icon"><i class="fa fa-chevron-down" aria-hidden="true"></i></span>')
	})

	$('button.search').click(function(){
		event.preventDefault()
		var searchTerms =[]
		resetIcons()
		searchTerms.push($('.type').attr('id'))
		searchTerms.push($('.school-level').attr('id'))
		console.log(searchTerms)
		setIcons(searchTerms, searchedFor)
	})

	$('button').on('click', function(){
		var thisClassList = $(this.classList)
		var dropdownClass = ('ul.' + thisClassList[0] + '-dropdown')
		console.log(thisClassList[0])
		if(thisClassList[0] == 'type') {
			searchedFor[0] = true
		}
		if (thisClassList[0] == 'school-level') {
			searchedFor[1] = true
		}
		console.log('typeSearched: ' + searchedFor[0] + ' schoolSearched: ' + searchedFor[1])
		if($(dropdownClass).css('display') == 'none') {
			$(dropdownClass).fadeIn();
		} else {
			$(dropdownClass).fadeOut();
		}
	})

	$(document).click(function(event) { 
	    if(!$(event.target).closest('.type').length) {
	        if($('.type-dropdown').is(":visible") || $('.school-level-dropdown').is(":visible")) {
	            $('.type-dropdown').fadeOut();
	        }
	    }
	    if(!$(event.target).closest('.school-level').length) {
	        if($('.school-level-dropdown').is(":visible") || $('.type-dropdown').is(":visible")) {
	            $('.school-level-dropdown').fadeOut();
	        }
	    }   
	})
})