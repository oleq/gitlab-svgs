(function(d){	const l = d['ro'] = d['ro'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"%0 din %1",Bold:"Îngroșat",Cancel:"Anulare",Downloadable:"Descărcabil","Dropdown toolbar":"Bară listă opțiuni","Edit link":"Modifică link","Editor toolbar":"Bară editor",Italic:"Cursiv",Link:"Link","Link URL":"Link URL",Next:"Înainte","Open in a new tab":"Deschide în tab nou","Open link in new tab":"Deschide link în tab nou",Previous:"Înapoi",Redo:"Revenire","Rich Text Editor":"Editor de text","Rich Text Editor, %0":"Editor de text, %0",Save:"Salvare","Show more items":"","This link has no URL":"Acest link nu are niciun URL",Undo:"Anulare",Unlink:"Șterge link"}	);l.getPluralForm=function(n){return (n==1?0:(((n%100>19)||((n%100==0)&&(n!=0)))?2:1));;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));