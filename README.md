# fCache
- library to cache form elements chooses and values on local storage by HTML5 local storage, fCache built on [jsCache](https://github.com/ahmedsaoud31/jsCache) library.
- library use CSS selector.
- [Demo](https://ahmedsaoud31.github.io/fCache)

# How to use ?
##### include classes

	<script src="Cache/Cache.js"></script>
	
	<script src="Cache/fCache.js"></script>

##### to cache form pass CSS selector for your form as argument to cache all form elements inside this form 

	fCache('#myForm');
	

##### to cache some form element pass it as CSS selector to cache this form elements inside this form 

	fCache('#myForm input');
	
##### to cache one form element pass it as CSS selector to cache this form element

	fCache('#myForm input[name=inputName]');
	

##### to clear cached data save the Object in variable to use clear function 

	var myForm = fCache('#myForm');
	
	myForm.clear();

##### Have a nice Caching :)

# fCache
- مكتبة لتخزين قيم ومختارات عناصر النماذج في الذاكرة المحلية عبر إستخدام تقنية التخزين في الإصدار الخامس من اللغة الهيكلية HTML, وتم البناء على المكتبة [jsCache](https://github.com/ahmedsaoud31/jsCache) للتخزين المحلي.
- المكتبة تستخدم نمط الإختيار سي إس إس في إختيار العناصر

# طريقة الإستخدام
##### قم بتضمين الملفات

	<script src="Cache/Cache.js"></script>
	
	<script src="Cache/fCache.js"></script>

##### لحفظ عناصر النماذج قم بتمرير مختار النموذج لوسيط للدالة لحفظ قيم ومختارات جميع العناصر داخل هذا النموذج كالتالي

	fCache('#myForm');

##### لحفظ عناصر محدده داخل النوذج قم بتمرير اسماء هذا العناصر ليتم حفظها فقط كالتالي

	fCache('#myForm input');

##### لحفظ عنصر محدد داخل النموذج قم بتمريره مباشراً

	fCache('#myForm input[name=inputName]');

#### لحذف القيم المخزنة وإلغاء حفظ العناصر لنوذج معين إحفظ القيمة المعادة في متغير لإستخدام دالة
#### clear

	var myForm = fCache('#myForm');
	
	myForm.clear();
	
### تخزين سعيد :)

