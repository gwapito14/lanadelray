$.ajax({
	url:"https://api.spotify.com/v1/search?q=artist:Lana%20Del%20Rey&type=album"
	}).done(function(res){
		$.ajax({
			url:res.albums.items[3].href
		}).done(function(album){
		console.log(res);
		console.log(album);
		let count = album.tracks.total;
		var i;
		let html = ` <header class="align-center">
	<h1>ULTRAVIOLENCE</h1> <img src="http://www.theonesean.com/wp-content/uploads/2014/06/Ultraviolence-cover.png">
	<br></br>
 <h2>TRACKLIST: </h2>
	<p>
		1. Cruel World <br>
		2. Ultraviolence <br>
		3. Shades Of Cool <br <br> >
		4. Brooklyn Baby <br>
		5.  West Coast <br>
		6. Sad Girl <br>
		7. Pretty When You Cry <br>
		8. Money Power Glory <br>
		9. Fucked My Way Up To The Top <br>
		10. Old Money <br>
		11. The Other Woman <br>

		Bonus Tracks: <br>

		12. Black Beauty <br>
		13. Guns And Roses  <br>
		14. Florida Kilos </p>

	<p align="center"><img src="${res.albums.items[3].images[1].url}" alt="viray fccboi" /></p>
						<h2 align="left" class="major">${res.albums.items[3].name} </h2>`;
		for(i=0;i<count; i++){
			html = html + `<p align="center">${album.tracks.items[i].name}</p>
			<p align="center"><audio controls><source src="${album.tracks.items[i].preview_url}" type="audio/ogg"></audio></p>`;
		}

	

		html += ` </header>`;
		document.querySelector('.Ultraviolence').innerHTML = html;
	});
});
	$.ajax({
	url:"https://api.spotify.com/v1/search?q=artist:Lana%20Del%20Rey&type=album"
	}).done(function(res){
		$.ajax({
			url:res.albums.items[2].href
		}).done(function(album){
		console.log(res);
		console.log(album);
		let count = album.tracks.total;
		var i;
		let html = `<header class="align-center">
	<h1>HONEYMOON</h1> <img src="http://digitalspyuk.cdnds.net/15/34/980x490/landscape_lana-del-rey-honeymoon.jpg">
	<br></br>
	<h2>TRACKLIST: </h2>
	<p>
	1. Honeymoon <br>
	2. Music To Watch Boys To <br>
	3. Terrence Loves You <br>
	4. God Knows I Tried <br>
	5. High By The Beach <br>
	6. Freak <br>
	7. Art Deco <br>
	8. Burnt Norton (Interlude) <br >
	9. Religion <br>
	10. Salvatore <br>
	11. The Blackest Day <br>
	12. 24 <br>
	13. Swan Song <br>
	14. Don't Let Me Be Misunderstood <br>




    


	<p align="center"><img src="${res.albums.items[2].images[1].url}" alt="viray fccboi" /></p>
						<h2 align="left" class="major">${res.albums.items[2].name} </h2>`;
		for(i=0;i<count; i++){
			html = html + `<p align="center">${album.tracks.items[i].name}</p>
			<p align="center"><audio controls><source src="${album.tracks.items[i].preview_url}" type="audio/ogg"></audio></p>`;
		}

	

		html += ` </header>`;
		document.querySelector('.Honeymoon').innerHTML = html;
	});
});

