let galeria = $.get("https://api.flickr.com/services/rest/?&method=flickr.galleries.getPhotos&api_key=f423abc384c4b9477c3550831f8dfc71&gallery_id=72157696968632245&per_page=6&page=1&format=json", function(data){
    console.log(data);
    $(`#container`).append(`<div id="1"><img src="https://farm1.staticflickr.com/944/41284471965_86fe9ba306_q.jpg"/></div>
    <div id="2"><img src="https://farm1.staticflickr.com/950/28304155758_e419bef892_q.jpg"/></div>
    <div id="3"><img src="https://farm1.staticflickr.com/982/42147933101_225037971b_q.jpg"/></div>
    <div id="4"><img src="https://farm1.staticflickr.com/968/27228079837_d293a93be6_q.jpg"/></div>
    <div id="5"><img src="https://farm1.staticflickr.com/974/42077993121_49c03d4f51_q.jpg"/></div>
    <div id="6"><img src="https://farm1.staticflickr.com/959/41140742375_ffeaf5742c_q.jpg"/></div>`)
})