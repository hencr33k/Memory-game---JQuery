var imageSrc = ["cheeki.jpg", "fredag.jpg", "heasky.jpg", "jasper.jpg", "john-cena.jpg", "kanye-roblox.png", "skeleton.jpg", "säkrat.jpg", "top-kek.png", "kappa.jpg", "cartman.png", "ruski.jpg"];
var imagesShown = 0;
var srcCode = "";
$(document).ready(function() {
    var newArr = imageSrc.concat(imageSrc);
    newArr = Shuffle(newArr);
    for (var i=0; i < imageSrc.length*2; i++) {
        var theDiv = document.createElement("div");
        theDiv.className = "unopened";
        var theImg = document.createElement("img");
        theImg.src = "img/"+newArr[i];
        theImg.hidden = true;
        theDiv.append(theImg);


        $("body").append(theDiv);

        // create a 6x4 grid
    }
    $("div").click(function() { 
        // $(this).css("border", "3px solid red");
        $(this).removeClass("unopened");
        $(this).addClass("opened");
        $(this).css("background-color", "blue");
        $(this).children('img').show();
        var thisSrc = $(this).children('img').attr("src");
        console.log(thisSrc + ":" + srcCode);
        if (thisSrc == srcCode ) {
            $("img[src*='" + thisSrc + "']").parent().removeClass("opened");
            $("img[src*='" + thisSrc + "']").parent().addClass("pairImage");  
            imagesShown = 0;  
/*             $(this).removeClass("unopened");
            $(this).addClass("pairImage"); */
        } else {
            imagesShown++;
        }
        if (imagesShown > 1) {
            imagesShown = 0;
            // hideImages();
            window.setTimeout(hideImages,500);
        } 
        console.log(imagesShown);
        srcCode = thisSrc;
    });

});

function hideImages() {
    $(".opened img").hide();
    $(".opened").css("background-color", "white");
}

function Shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};