// header change bg
var bg = $('.header .bg-wrapper')
var i = 0
setInterval(function() {
    var w = bg.outerWidth() / 3
    if (i === 2) {
        i = 0
    } else {
        i ++
    }
    bg.css({
        '-webkit-transform': 'translateX(-' + i * w + 'px)',
        'transform': 'translateX(-' + i * w + 'px)'
    })
}, 3000)
