// header change bg
var bg = document.querySelector('.header .bg-wrapper')
if (bg) {
    var i = 0
    setInterval(function() {
        var w = bg.offsetWidth / 3
        if (i === 2) {
            i = 0
        } else {
            i ++
        }
        bg.style['-webkit-transform'] = 'translateX(-' + i * w + 'px)'
        bg.style['transform'] = 'translateX(-' + i * w + 'px)'
    }, 3000)
}
// notice change tab
var tab = document.querySelector('.module1-head .notice .tab')
if (tab) {
    var tabCon = document.querySelectorAll('.module1-content .notice')
    if (tabCon.length) {
        tab.addEventListener('click', function(e) {
            var value = e.target.getAttribute('value')
            Array.prototype.slice.call(tabCon).forEach(function(v, i) {
                if (Number(value) === i) {
                    tab.querySelectorAll('i')[i].setAttribute('class', 'on')
                    v.style.display = 'block'
                } else {
                    tab.querySelectorAll('i')[i].setAttribute('class', '')
                    v.style.display = 'none'
                }
            })
        })
    }
}

// link show
var button = document.querySelector('.links .links-item')
if (button) {
    var buttonCon = document.querySelectorAll('.links .links-item-menu')
    if (buttonCon.length) {
        button.addEventListener('click', function(e) {
            var value = e.target.getAttribute('value')
            Array.prototype.slice.call(buttonCon).forEach(function(v, i) {
                if (Number(value) === i) {
                    v.style.display = 'block'
                } else {
                    v.style.display = 'none'
                }
            })
        })
        document.body.addEventListener('click', function(e) {
            var _class = e.target.getAttribute('class')
            if (_class !== 'links-item-button') {
                Array.prototype.slice.call(buttonCon).forEach(function(v) {
                    v.style.display = 'none'
                })
            }
        })
    }
}

// 取时间
var time = document.querySelectorAll('.science-getTime .Article_PublishDate')
if (time.length) {
    var txt = document.querySelectorAll('.science .div_piccontenttitle_li .c_txt')
    if (txt.length) {
        Array.prototype.slice.call(time).forEach(function(v, i) {
            var el = document.createElement('div')
            el.setAttribute('class', 'publish-time')
            el.innerHTML = v.innerHTML
            txt[i].appendChild(el)
        })
    }
}

// 搜索
var search = document.querySelector('.header .search')
var form = document.querySelector('.search-pd form')
var search = document.querySelector('.header .search')
if (search && form) {
    search.querySelector('.submit').addEventListener('click', function() {
        form.querySelector('input').value = search.querySelector('input').value
        form.submit()
    })
}

// location icon
var icon = document.querySelectorAll('.listcolumnn .right .possplit')
if (icon.length) {
    Array.prototype.slice.call(icon).forEach(function(v) {
        v.innerHTML = '>'
    })
}

// 设为主页
function setHome() {
	var url = window.location.href
	try {
		document.body.style.behavior = 'url(#default#homepage)'
		document.body.setHomePage(url)
	} catch(e) {
		if(window.netscape) {
			try {
				netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect')
			} catch(e){
                alert('设置首页失败，请手动设置')
			}
		} else{
			alert('设置首页失败，请手动设置')
		}
 }
}

// 添加收藏
function addFavorite() {
	var sURL = window.location.href, sTitle = document.title
	try {
		window.external.addFavorite(sURL, sTitle)
	} catch (e) {
		try {
			window.sidebar.addPanel(sTitle, sURL, '')
		} catch (e) {
			alert('加入收藏失败，请使用ctrl+D或者command+D进行添加')
		}
	}
}

var home = document.querySelector('.set-home')
if (home) {
    home.addEventListener('click', function() {
        setHome()
    })
}

var favorite = document.querySelector('.add-favorite')
if (favorite) {
    favorite.addEventListener('click', function() {
        addFavorite()
    })
}

// link show
var oldLink = document.querySelector('.header .tool .show-link')
if (oldLink) {
    var oldLinkMenu = document.querySelector('.header .tool .show-link .show-link-menu')
    oldLink.addEventListener('click', function(e) {
        oldLinkMenu.style.display = 'block'
    })
    document.body.addEventListener('click', function(e) {
        var _value = e.target.getAttribute('value')
        if (_value !== 'show-link') {
            oldLinkMenu.style.display = 'none'
        }
    })
}

setTimeout(function linkAndChange() {
    // pic news to link
    var picNews = document.querySelectorAll('.module1-content .pic .picbase1-slidenav img')
    var picLink = document.querySelectorAll('.module1-content .getPicLink a')
    var picSlidenav = document.querySelectorAll('.module1-content .pic .picbase1-slidenav li')
    function getPicLink(i) {
        var v = picNews[i]
        var html = '<a href="'+ picLink[i].href +'"><img style="width: 550px;height: 430px;" src="' + v.src.replace('_s.', '.') + '" alt="' + v.alt + '"><div class="picbase1-content"><h2>' + v.alt + '</h2></div></a>'
        document.querySelector('.module1-content .pic .picbase1').innerHTML = html
    }
    var picNewIndex = 0
    var len = picNews.length
    if (len && picLink.length) {
        getPicLink(picNewIndex)
        setInterval(function() {
            if (picNewIndex === (len - 1)) {
                picNewIndex = 0
            } else {
                picNewIndex ++
            }
            getPicLink(picNewIndex)
            if (picSlidenav.length) {
                Array.prototype.slice.call(picSlidenav).forEach(function(v, i) {
                    if (picNewIndex === i) {
                        v.setAttribute('class', 'active')
                    } else {
                        v.setAttribute('class', '')
                    }
                })
            }
        }, 3000)
    }
}, 1000)
