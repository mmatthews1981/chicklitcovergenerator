var app = new Vue({
    el: '#app',
    data: {
        title: 'The Communist Manifesto',
        authors: 'Karl Marx & Friedrich Engels',
        brown: '#602c25',
        turq: '#087E8B',
        white: '#ffffff',
        styleObject: {
            backgroundColor: '#ffd4e5'
        },
        fontObject: {
            color: this.white
        },
        graphic: 'img/cfbfc0e569311e43e5c6ba0d54a0bba4.png',
        imgObject: [
            {url: 'img/RedVelvet-450x456.png', name: 'red velvet'},
            {url: 'img/cupcakes-bottom-of-home.png', name: 'three chocolate'},
            {url: 'img/cupcake_cut2-min.png', name: 'chocolate'},
            {url: 'img/cfbfc0e569311e43e5c6ba0d54a0bba4.png', name: 'strawberry stars'},
            {url: 'img/BTgr6R9oc.png', name: 'vanilla gold'},
            {url: 'img/cupcake_cut1-min.png', name: 'peanutbutter'},
            {url: 'img/ENT_cupcake_0.png', name: 'swirl'},
            {url: 'img/twinkie2.png', name: 'twinkie'},
            {url: 'img/Crystals.png', name: 'healing crystals'},
            {url: 'img/kale__flowering-copy.png', name: 'kale'},
            {url: 'img/4o12a.gif', name: 'revolution'},
            {url: 'img/turkey1.png', name: 'thanksgiving'},
            {url: 'img/580b57fcd9996e24bc43c1b6.png', name: 'ice cream cone'},
            {url: 'img/chocolate_factory_tall_sundae.png', name: 'hot fudge sundae'},
            {url: 'img/Grenade-18.png', name: 'grenade'},
            {url: 'img/Wine-Bottle-10-246x500.png', name: 'wine'},
            {url: 'img/580b57fbd9996e24bc43bc98.png', name: 'penguin'}
        ]
    },
    methods: {
        changeHandler: onChange(event),
        turqFont: function () {
            this.fontObject.color = this.turq;
            onChange();
        },
        brownFont: function () {
            this.fontObject.color = this.brown;
            onChange();
        },
        whiteFont: function () {
            this.fontObject.color = this.white;
            onChange();
        }
    }
});

$('.basic').spectrum({
    showPaletteOnly: true,
    togglePaletteOnly: true,
    togglePaletteMoreText: 'more',
    togglePaletteLessText: 'less',
    color: app.styleObject.backgroundColor,
    palette: [
        ["#000", "#444", "#666", "#999", "#ccc", "#eee", "#f3f3f3", "#fff"],
        ["#f00", "#f90", "#ff0", "#0f0", "#0ff", "#00f", "#90f", "#f0f"],
        ["#f4cccc", "#fce5cd", "#fff2cc", "#d9ead3", "#d0e0e3", "#cfe2f3", "#d9d2e9", "#ead1dc"],
        ["#ea9999", "#f9cb9c", "#ffe599", "#b6d7a8", "#a2c4c9", "#9fc5e8", "#b4a7d6", "#d5a6bd"],
        ["#e06666", "#f6b26b", "#ffd966", "#93c47d", "#76a5af", "#6fa8dc", "#8e7cc3", "#c27ba0"],
        ["#c00", "#e69138", "#f1c232", "#6aa84f", "#45818e", "#3d85c6", "#674ea7", "#a64d79"],
        ["#900", "#b45f06", "#bf9000", "#38761d", "#134f5c", "#0b5394", "#351c75", "#741b47"],
        ["#600", "#783f04", "#7f6000", "#274e13", "#0c343d", "#073763", "#20124d", "#4c1130"]
    ],
    change: function (color) {
        app.styleObject.backgroundColor = "#" + color.toHex();
        onChange();
    }
});

function onChange() {
    var scrollPos = document.body.scrollTop;
    $('canvas').remove();
    setTimeout(function () {
        html2canvas($('.panel'), {
            onrendered: function (canvas) {
                document.getElementById("cover").appendChild(canvas);
                var pos = $('.panel').position();
                $('canvas').css('top', pos.top).css('left', pos.left);
                window.scrollTo(0, scrollPos);
            }
        });
    }, 10);

}

$('#title, #authors').keyup(function () {
    onChange();
});

$(document).ready(function () {
    onChange();
});
