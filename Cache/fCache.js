/**
 * @author		Ahmed Aboelsaoud Ahmed <ahmedsaoud31@gmail.com>
 * @viber		+201148024524
 * @whatsup		+201148024524
 * @github		https://github.com/ahmedsaoud31
 * @demo		https://ahmedsaoud31.github.io/fCache
 * @site		http://goo2pro.com
 */
(function(){

	var formCount = -1;
	var fCache = function (selector) {
		formCount++;
        return new formCache(selector, formCount);
    };
	
	var formCache = function(selector, count){
		
		// @var to save instance of this class
		var thisfCache = {};
		
		// @var to save start variables names
		var saveName = 'f';
		
		// @var to save now time in minutes 
		var fElements = ['INPUT', 'TEXTAREA', 'SELECT'];
		
		thisfCache.selector = selector;
		thisfCache.saveName = saveName+count;
		loadCache();
		
		
		/* 
		*  @function to cache form elements 
		*  @return none
		*/
		function loadCache(){
			var sel = document.querySelectorAll(thisfCache.selector);
			if(sel.length > 0){
				for(var i=0;i<sel.length;++i){
					var name = thisfCache.saveName+'s'+i;
					if(sel[i].tagName == 'INPUT'){
						loadInput(sel[i], name);
					}else if(sel[i].tagName == 'SELECT'){
						loadSelect(sel[i], name);
					}else if(sel[i].tagName == 'TEXTAREA'){
						loadTextarea(sel[i], name);
					}else{
						loadInputs(sel[i], name);
						loadSelects(sel[i], name);
						loadTextareas(sel[i], name);
					}
				}
			}
		}
		
		/* 
		*  @function to clear cached form elements 
		*  @return none
		*/
		thisfCache.clear = function(){
			var sel = document.querySelectorAll(thisfCache.selector);
			if(sel.length > 0){
				for(var i=0;i<sel.length;++i){
					var name = thisfCache.saveName+'s'+i;
					if(sel[i].tagName == 'INPUT'){
						clearInput(sel[i], name);
					}else if(sel[i].tagName == 'SELECT'){
						clearSelect(sel[i], name);
					}else if(sel[i].tagName == 'TEXTAREA'){
						clearTextarea(sel[i], name);
					}else{
						clearInputs(sel[i], name);
						clearSelects(sel[i], name);
						clearTextareas(sel[i], name);
					}
				}
			}
		}
		
		/* 
		*  @private function to cache inputs form elements 
		*  @return none
		*/
		function loadInput(input, name){
			var inputName = name+'i';
			input.dataset.fncache = inputName;
			if(input.getAttribute('type') == 'checkbox'){
				if(Cache.has(inputName)){
					input.checked = Cache.get(inputName);
				}
				input.onmouseup = function(){
					Cache.set(this.dataset.fncache, !this.checked);
				}
			}else if(input.getAttribute('type') == 'radio'){
				if(Cache.has(inputName)){
					input.checked = Cache.get(inputName);
				}
				input.onmouseup = function(){
					var radio = document.querySelectorAll('input[name='+this.name+']');
					if(radio.length > 0){
						for(var j=0;j<radio.length;++j){
							if(Cache.has(radio[j].dataset.fncache)){
								Cache.set(radio[j].dataset.fncache, false);
							}
						}
					}
					Cache.set(this.dataset.fncache, true);
				}
			}else{
				if(Cache.has(inputName)){
					input.value = Cache.get(inputName);
				}
				input.onkeyup = function(){
					Cache.set(this.dataset.fncache, this.value);
				}
			}
		}

		/* 
		*  @private function to cache selects form elements 
		*  @return none
		*/
		function loadSelect(select, name){
			var selectName = name+'s';
			select.dataset.fncache = selectName;
			select.onchange = function(){
				Cache.set(this.dataset.fncache, this.selectedIndex);
			}
			if(Cache.has(selectName)){
				select.selectedIndex = Cache.get(selectName);
			}
		}
		
		/* 
		*  @private function to cache text-areas form elements 
		*  @return none
		*/
		function loadTextarea(textarea, name){
			var textareaName = name+'t';
			textarea.dataset.fncache = textareaName;
			textarea.onkeyup = function(){
				Cache.set(this.dataset.fncache, this.value);
			}
			if(Cache.has(textareaName)){
				textarea.value = Cache.get(textareaName);
			}
		}
		
		/* 
		*  @private function to clear cached inputs form elements 
		*  @return none
		*/
		function clearInput(input, name){
			var inputName = name+'i';
			delete input.dataset.fncache;
			input.value = '';
			if(Cache.has(inputName)){
				Cache.delete(inputName);
			}
		}
		
		/* 
		*  @private function to clear cached selects form elements 
		*  @return none
		*/
		function clearSelect(select, name){
			var selectName = name+'s';
			delete select.dataset.fncache;
			select.value = '';
			if(Cache.has(selectName)){
				Cache.delete(selectName);
			}
		}
		
		/* 
		*  @private function to clear cached text-areas form elements 
		*  @return none
		*/
		function clearTextarea(textarea, name){
			var textareaName = name+'t';
			delete textarea.dataset.fncache;
			textarea.value = '';
			if(Cache.has(textareaName)){
				Cache.delete(textareaName);
			}
		}
		
		/* 
		*  @private function to cache all inputs form elements inside the selector 
		*  @return none
		*/
		function loadInputs(sel, name){
			var inputName = name+'i';
			var input = sel.querySelectorAll('input');
			if(input.length > 0){
				for(var i=0;i<input.length;++i){
					input[i].dataset.fncache = inputName+i;
					if(input[i].getAttribute('type') == 'checkbox'){
						if(Cache.has(inputName+i)){
							input[i].checked = Cache.get(inputName+i);
						}
						input[i].onmouseup = function(){
							Cache.set(this.dataset.fncache, !this.checked);
						}
					}else if(input[i].getAttribute('type') == 'radio'){
						if(Cache.has(inputName+i)){
							input[i].checked = Cache.get(inputName+i);
						}
						input[i].onmouseup = function(){
							var radio = document.querySelectorAll('input[name='+this.name+']');
							if(radio.length > 0){
								for(var j=0;j<radio.length;++j){
									if(Cache.has(radio[j].dataset.fncache)){
										Cache.set(radio[j].dataset.fncache, false);
									}
								}
							}
							Cache.set(this.dataset.fncache, true);
						}
					}else if(input[i].getAttribute('type') == 'submit' || input[i].getAttribute('type') == 'button'){
						
					}else{
						if(Cache.has(inputName+i)){
							input[i].value = Cache.get(inputName+i);
						}
						input[i].onkeyup = function(){
							Cache.set(this.dataset.fncache, this.value);
						}
					}
				}
			}
		}
		
		/* 
		*  @private function to cache all selects form elements inside the selector 
		*  @return none
		*/
		function loadSelects(sel, name){
			var selectName = name+'s';
			var select = sel.querySelectorAll('select');
			if(select.length > 0){
				for(var i=0;i<select.length;++i){
					select[i].dataset.fncache = selectName+i;
					select[i].onchange = function(){
						Cache.set(this.dataset.fncache, this.selectedIndex);
					}
					if(Cache.has(selectName+i)){
						select[i].selectedIndex = Cache.get(selectName+i);
					}
				}
			}
		}	
		
		/* 
		*  @private function to cache all text-areas form elements inside the selector 
		*  @return none
		*/
		function loadTextareas(sel, name){
			var textareaName = name+'t';
			var textarea = sel.querySelectorAll('textarea');
			if(textarea.length > 0){
				for(var i=0;i<textarea.length;++i){
					textarea[i].dataset.fncache = textareaName+i;
					textarea[i].onkeyup = function(){
						Cache.set(this.dataset.fncache, this.value);
					}
					if(Cache.has(textareaName+i)){
						textarea[i].value = Cache.get(textareaName+i);
					}
				}
			}
		}
		
		/* 
		*  @private function to clear all cached inputs elements inside the selector 
		*  @return none
		*/
		function clearInputs(sel, name){
			var inputName = name+'i';
			var input = sel.querySelectorAll('input');
			if(input.length > 0){
				for(var i=0;i<input.length;++i){
					delete input[i].dataset.fncache;
					if(Cache.has(inputName+i)){
						Cache.delete(inputName+i);
					}
					if(input[i].getAttribute('type') == 'checkbox'){
						input[i].selected = false;
					}else if(input[i].getAttribute('type') == 'radio'){
						input[i].selected = false;
					}else if(input[i].getAttribute('type') == 'submit' || input[i].getAttribute('type') == 'button'){
						
					}else{
						input[i].value = '';
					}
				}
			}
		}
		
		/* 
		*  @private function to clear all cached selects elements inside the selector 
		*  @return none
		*/
		function clearSelects(sel, name){
			var selectName = name+'s';
			var select = sel.querySelectorAll('select');
			if(select.length > 0){
				for(var i=0;i<select.length;++i){
					delete select[i].dataset.fncache;
					if(Cache.has(selectName+i)){
						Cache.delete(selectName+i);
					}
					select[i].selectedIndex = 0;
				}
			}
		}
		
		/* 
		*  @private function to clear all cached text-areas elements inside the selector 
		*  @return none
		*/
		function clearTextareas(sel, name){
			var textareaName = name+'t';
			var textarea = sel.querySelectorAll('textarea');
			if(textarea.length > 0){
				for(var i=0;i<textarea.length;++i){
					delete textarea[i].dataset.fncache;
					if(Cache.has(textareaName+i)){
						Cache.delete(textareaName+i);
					}
					textarea[i].value = '';
				}
			}
		}
		
		return thisfCache;
	};
	
	if(!window.fCache) {
		window.fCache = fCache;
	}
	
})(Cache, document);