$(function(){
	var searchedFor = [true, true]

	var resetIcons = function(){
		$('img').removeClass('grey-fade-in');
	}

	var setIcons = function(searchTerms, searchedThis){
		var thisSearch = [];

		$.each(searchedThis, function(index, value){
			if(value == false){
				searchTerms[index] = '';
			}
		})

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
		console.log(thisSearch)
		$.each(thisSearch, function(index, value){
			if(value !== '.'){
				$('img' + value).addClass('grey-fade-in')
			}
		})

		$.each(searchedFor, function(index, value){
			searchedFor[index] = false;
		})
	}

	$('ul').on('click', 'li', function(){
		var clickedText = $(this).text()
		var clickedId = $(this).attr('class');
		
		$(this).parent().prev('button').attr('id', clickedId)
		$(this).parent().prev('button').html(clickedText + '<span class="icon"><i class="fa fa-chevron-down" aria-hidden="true"></i></span>')
	})

	$('button.search').click(function(){
		event.preventDefault();
		var searchTerms =[];
		resetIcons();
		searchTerms.push($('.type').attr('id'));
		searchTerms.push($('.school-level').attr('id'));
		setIcons(searchTerms, searchedFor);
	})

	$('button').on('click', function(){
		var thisClassList = $(this.classList);
		var dropdownClass = ('ul.' + thisClassList[0] + '-dropdown');
		if(thisClassList[0] == 'type') {
			searchedFor[0] = true
		}
		if (thisClassList[0] == 'school-level') {
			searchedFor[1] = true
		}
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