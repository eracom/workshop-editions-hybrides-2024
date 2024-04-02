document.addEventListener("DOMContentLoaded", function() {
    var item2 = document.getElementById("item2");
    var item3 = document.getElementById("item3");
    var item4 = document.getElementById("item4");
    var item5 = document.getElementById("item5");
    var item6 = document.getElementById("item6");
    var grid2 = document.getElementById("grid2");
    var paragraph1 = document.getElementById("paragraph1");
    var paragraph2 = document.getElementById("paragraph2");
    var paragraph3 = document.getElementById("paragraph3");
    var paragraph4 = document.getElementById("paragraph4");
    var image = document.getElementById("image");
    var top_paragraph1 = document.getElementById("top-paragraph1");
    var top_paragraph2 = document.getElementById("top-paragraph2");
    var top_paragraph3 = document.getElementById("top-paragraph3");
    var top_paragraph4 = document.getElementById("top-paragraph4");
    var top_image = document.getElementById("top-image");
    var left_paragraph1 = document.getElementById("left-paragraph1");
    var left_paragraph2 = document.getElementById("left-paragraph2");
    var left_paragraph3 = document.getElementById("left-paragraph3");
    var left_paragraph4 = document.getElementById("left-paragraph4");
    var left_image = document.getElementById("left-image");
    var right_paragraph1 = document.getElementById("right-paragraph1");
    var right_paragraph2 = document.getElementById("right-paragraph2");
    var right_paragraph3 = document.getElementById("right-paragraph3");
    var right_paragraph4 = document.getElementById("right-paragraph4");
    var right_image = document.getElementById("right-image");
    var bottom_paragraph1 = document.getElementById("bottom-paragraph1");
    var bottom_paragraph2 = document.getElementById("bottom-paragraph2");
    var bottom_paragraph3 = document.getElementById("bottom-paragraph3");
    var bottom_paragraph4 = document.getElementById("bottom-paragraph4");
    var bottom_image = document.getElementById("bottom-image");

    item4.addEventListener("click", function(event) {
        // Hide items 1, 2, 3, and 5
        item2.style.display = "none";
        item3.style.display = "none";
        item5.style.display = "none";
        // Show grid2 and make it take the whole page
        grid2.style.display = "grid";
        grid2.style.gridColumn = "1 / span 3";
        grid2.style.gridRow = "1 / span 3";
    });

    // Variable scope issue: item should be passed as an argument
    function setupSound(item, hoverAudioSrc, clickAudioSrc, delay = 0) {
        // Ensure the item exists before proceeding
        if (!item) return;

        var hoverAudio = new Audio(hoverAudioSrc);
        var clickAudio = clickAudioSrc ? new Audio(clickAudioSrc) : null;
        var timeout;

        item.addEventListener("mouseenter", function() {
            if (item === item4 && grid2.style.display !== "grid") {
                timeout = setTimeout(function() {
                    hoverAudio.play().catch(error => console.error('Error playing audio:', error));
                }, delay);
            } else if (item === item6) {
                hoverAudio.play().catch(error => console.error('Error playing audio:', error));
                item.removeEventListener("mouseenter", arguments.callee);
            } else {
                hoverAudio.play().catch(error => console.error('Error playing audio:', error));
            }
        });

        item.addEventListener("mouseleave", function() {
            hoverAudio.pause();
            hoverAudio.currentTime = 0;
            clearTimeout(timeout); // Clear timeout to prevent delayed plays
        });

        if (clickAudio) {
            item.addEventListener("click", function() {
                clickAudio.play().catch(error => console.error('Error playing audio:', error));
            });
        }
    }

    // Keep existing setupSound calls for paragraphs and image unchanged
    setupSound(paragraph1, 'audio/blippy.mp3', 'audio/click_paragraph1.mp3');
    setupSound(paragraph2, 'audio/blippy.mp3', 'audio/click_paragraph2.mp3');
    setupSound(paragraph3, 'audio/blippy.mp3', 'audio/click_citation.mp3');
    setupSound(paragraph4, 'audio/blippy.mp3', 'audio/click_phrase.mp3');
    setupSound(image, 'audio/blippy.mp3', 'audio/click_image.mp3');
    setupSound(item2, 'audio/gauche.mp3',null);
    setupSound(item3, 'audio/droite.mp3',null);
    setupSound(item4, 'audio/sound4.mp3', 1000,null); // Delay of 1 second (1000 milliseconds)
    setupSound(item5, 'audio/haut.mp3');
    setupSound(item6, 'audio/sound6.mp3', 1000,null);

    // Setup sounds for other elements
    setupSound(top_paragraph1, 'audio/paragraph1_bas.mp3', null);
    setupSound(top_paragraph2, 'audio/paragraph2_bas.mp3', null);
    setupSound(top_paragraph3, 'audio/citation_bas.mp3', null);
    setupSound(top_paragraph4, 'audio/phrase_bas.mp3', null);
    setupSound(top_image, 'audio/image_bas.mp3', null);
    setupSound(left_paragraph1, 'audio/paragraph1_droite.mp3', null);
    setupSound(left_paragraph2, 'audio/paragraph2_droite.mp3', null);
    setupSound(left_paragraph3, 'audio/citation_droite.mp3', null);
    setupSound(left_paragraph4, 'audio/phrase_droite.mp3', null);
    setupSound(left_image, 'audio/image_droite.mp3', null);
    setupSound(right_paragraph1, 'audio/paragraph1_gauche.mp3', null);
    setupSound(right_paragraph2, 'audio/paragraph2_gauche.mp3', null);
    setupSound(right_paragraph3, 'audio/citation_gauche.mp3', null);
    setupSound(right_paragraph4, 'audio/phrase_gauche.mp3', null);
    setupSound(right_image, 'audio/image_gauche.mp3', null);
    setupSound(bottom_paragraph1, 'audio/paragraph1_haut.mp3', null);
    setupSound(bottom_paragraph2, 'audio/paragraph2_haut.mp3', null);
    setupSound(bottom_paragraph3, 'audio/citation_haut.mp3', null);
    setupSound(bottom_paragraph4, 'audio/phrase_haut.mp3', null);
    setupSound(bottom_image, 'audio/image_haut.mp3', null);
});
