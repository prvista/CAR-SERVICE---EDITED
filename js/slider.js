var slider = tns({
    container: ".homeSlider__slider",
    items: 1,
    mode: "gallery",
    axis: "vertical", 
    slideBy: "page",
    autoplay: false,
    navPosition: "bottom",
    speed: 700,
    gutter: 100,
    containerControls: "#controls",
    prevButton: ".prev",
    nextButton: ".next",
    responsive: {
        1250: {
            items: 1,
        },
        200: {
            items: 1,
        },
    },
});

