var loaderColor = '#fff';
var backgroundColor = '#921111';
var coverOptions = {
    enable: true,
    transition: true
};
var coverAssets = [{
    src: 'assets/christmas/item_cover_right.png',
    id: 'coverB',
    property: {
        x: 1920,
        y: 0,
        regX: 908,
        regY: 0
    }
}, {
    src: 'assets/christmas/item_cover_left.png',
    id: 'coverA',
    property: {
        x: 0,
        y: 0,
        regX: 0,
        regY: 0
    }
}, {
    src: 'assets/christmas/button_open.png',
    id: 'coverOpen',
    property: {
        x: 960,
        y: 540
    }
}];
var backgroundAssets = [{
    src: 'assets/christmas/background.png',
    id: 'background',
    property: {
        x: 0,
        y: 0,
        regX: 0,
        regY: 0
    }
}];
var elementAssets = [{
    src: 'assets/christmas/bg_star.png',
    id: 'bgStar',
    property: {
        x: 960,
        y: 540
    }
}, {
    src: 'assets/christmas/item_cloudbottom_left.png',
    id: 'cloudBottomLeft',
    property: {
        x: 0,
        y: 0,
        regX: 0,
        regY: 0
    }
}, {
    src: 'assets/christmas/item_hang2.png',
    id: 'hang2',
    property: {
        x: 500,
        y: 0,
        regY: 0
    }
}, {
    src: 'assets/christmas/item_cloudtop_left.png',
    id: 'cloudTopLeft',
    property: {
        x: 0,
        y: 0,
        regX: 0,
        regY: 0
    }
}, {
    src: 'assets/christmas/item_cloudbottom_right.png',
    id: 'cloudBottomRight',
    property: {
        x: 1920,
        y: 0,
        regX: 849,
        regY: 0
    }
}, {
    src: 'assets/christmas/item_cloudtop_right.png',
    id: 'cloudTopRight',
    property: {
        x: 1920,
        y: 0,
        regX: 577,
        regY: 0
    }
}, {
    src: 'assets/christmas/item_hang1.png',
    id: 'hang1',
    property: {
        x: 300,
        y: 0,
        regY: 0
    }
}, {
    src: 'assets/christmas/item_hang3.png',
    id: 'hang3',
    property: {
        x: 750,
        y: 0,
        regY: 0
    }
}, {
    src: 'assets/christmas/item_hang4.png',
    id: 'hang4',
    property: {
        x: 1300,
        y: 0,
        regY: 0
    }
}, {
    src: 'assets/christmas/item_hang5.png',
    id: 'hang5',
    property: {
        x: 1600,
        y: 0,
        regY: 0
    }
}, {
    src: 'assets/christmas/item_tree_left.png',
    id: 'treeLeft',
    property: {
        x: 300,
        y: 650
    }
}, {
    src: 'assets/christmas/item_tree_right.png',
    id: 'treeRight',
    property: {
        x: 1600,
        y: 650
    }
}, {
    src: 'assets/christmas/item_gifts_left.png',
    id: 'giftsLeft',
    property: {
        x: 400,
        y: 900
    }
}, {
    src: 'assets/christmas/item_gifts_right.png',
    id: 'giftsRight',
    property: {
        x: 1600,
        y: 900
    }
}, {
    src: 'assets/christmas/logo.png',
    id: 'logo',
    property: {
        x: 960,
        y: 300
    }
}, {
    src: 'assets/christmas/item_link.png',
    id: 'companyLogo',
    property: {
        x: 960,
        y: 830
    }
}];
var messageProperty = {
    text: 'May this Christmas end the present\x0Ayear on a cheerful note and make way\x0Afor a fresh and bright New Year.\x0A\x0AHere\xE2\u20AC\u2122s wishing you a Merry Christmas\x0Aand a Happy New Year!',
    font: '50px Caveat',
    lineHeight: 50,
    color: '#fff',
    align: 'center',
    x: 960,
    y: 460
};
var fallingEffects = {
    enable: true,
    images: ['assets/christmas/snow.png'],
    alpha: true,
    scale: true,
    total: 50,
    wind: 0,
    speed: 5,
    direction: true
};
var greetingOptions = {
    music: true,
    musicFile: 'assets/christmas/christmas.ogg',
    fullscreen: true
};

function initApp() {
    parallaxElementX('bgStar', 30);
    parallaxElementX('cloudBottomLeft', 80);
    parallaxElementX('cloudTopLeft', 50);
    parallaxElementX('cloudBottomRight', 80);
    parallaxElementX('cloudTopRight', 50);
    parallaxElementX('hang1', 170);
    parallaxElementX('hang2', 150);
    parallaxElementX('hang3', 120);
    parallaxElementX('hang4', 150);
    parallaxElementX('hang5', 160);
    parallaxElementX('treeLeft', 210);
    parallaxElementX('treeRight', 200);
    parallaxElementX('giftsLeft', 250);
    parallaxElementX('giftsRight', 260);
    createURL('companyLogo', 'https://uaiim.github.io');
    outputXML(coverAssets, false);
    outputXML(backgroundAssets, true);
    outputXML(elementAssets, true)
}

function outputXML(_0xe87axc, _0xe87axd) {
    var _0xe87axe = '';
    for (var _0xe87axf = 0; _0xe87axf < _0xe87axc['length']; _0xe87axf++) {
        var _0xe87ax10 = '';
        var _0xe87ax11 = '';
        var _0xe87ax12 = '';
        var _0xe87ax13 = '';
        if (_0xe87axc[_0xe87axf]['property']['x'] != undefined) {
            _0xe87ax10 = ' x="' + _0xe87axc[_0xe87axf]['property']['x'] + '"'
        };
        if (_0xe87axc[_0xe87axf]['property']['y'] != undefined) {
            _0xe87ax11 = ' y="' + _0xe87axc[_0xe87axf]['property']['y'] + '"'
        };
        if (_0xe87axc[_0xe87axf]['property']['regX'] != undefined) {
            _0xe87ax12 = ' regX="' + _0xe87axc[_0xe87axf]['property']['regX'] + '"'
        };
        if (_0xe87axc[_0xe87axf]['property']['regY'] != undefined) {
            _0xe87ax13 = ' regY="' + _0xe87axc[_0xe87axf]['property']['regY'] + '"'
        };
        var _0xe87ax14 = '';
        if (_0xe87axd) {
            _0xe87ax14 = 'id="' + _0xe87axc[_0xe87axf]['id'] + '"'
        };
        _0xe87axe += '<item ' + _0xe87ax14 + _0xe87ax10 + _0xe87ax11 + _0xe87ax12 + _0xe87ax13 + '>' + _0xe87axc[_0xe87axf]['src'] + '</item>\x0A'
    };
    console['log'](_0xe87axe)
}
var stageW = 1920;
var stageH = 1080;
var contentW = 1600;
var contentH = 850;
var appData = {
    viewport: '',
    viewport_old: '',
    init: false,
    action: false,
    moveX: 0,
    moveY: 0,
    landscape: {
        active: false,
        width: 0,
        height: 0,
        contentWidth: 0,
        contentHeight: 0,
        parallaxX: [],
        parallaxY: [],
        parallaxRotate: []
    },
    portrait: {
        active: false,
        width: 0,
        height: 0,
        contentWidth: 0,
        contentHeight: 0,
        parallaxX: [],
        parallaxY: [],
        parallaxRotate: []
    }
};
var greetingOptions = {
    colors: {
        text: '#000',
        background: '#000'
    },
    music: false,
    music_file: '',
    fullscreen: false,
    landscape: {
        cover: false,
        cover_transition: true,
        cover_assets: [],
        design_assets: [],
        text: [],
        parallax_effects: [],
        links: [],
        falling_effects: {
            enable: false,
            assets: [],
            alpha: true,
            scale: true,
            total: 50,
            wind: 0,
            speed: 5,
            direction: true
        }
    },
    portrait: {
        cover: false,
        cover_transition: true,
        cover_assets: [],
        design_assets: [],
        text: [],
        parallax_effects: [],
        links: [],
        falling_effects: {
            enable: false,
            assets: [],
            alpha: true,
            scale: true,
            total: 50,
            wind: 0,
            speed: 5,
            direction: true
        }
    }
};

function initMain() {
    if (!$['browser']['mobile'] || !isTablet) {
        $('#canvasHolder')['show']()
    };
    $('#appCanvas')['hide']();
    $('#appCanvas')['fadeIn']();
    initAppCanvas();
    buildAppCanvas();
    buildAppGeneral();
    initApp();
    resizeCanvas()
}
var windowW = windowH = 0;
var scalePercent = 0;
var offset = {
    x: 0,
    y: 0,
    left: 0,
    top: 0
};

function resizeGameFunc() {
    setTimeout(function() {
        $('.mobileRotate')['css']('left', checkContentWidth($('.mobileRotate')));
        $('.mobileRotate')['css']('top', checkContentHeight($('.mobileRotate')));
        var _0xe87ax1f = !!navigator['userAgent']['match'](/Version\/[\d\.]+.*Safari/);
        var _0xe87ax20 = 0;
        windowW = $(window)['width']();
        windowH = $(window)['height']();
        if (_0xe87ax1f) {
            windowW = window['innerWidth'];
            windowH = window['innerHeight'];
            _0xe87ax20 = $(window)['height']() - window['innerHeight']
        };
        if (detectScreenSize()) {
            appData['viewport'] = 'portrait'
        } else {
            appData['viewport'] = 'landscape'
        };
        stageW = appData[appData['viewport']]['width'];
        stageH = appData[appData['viewport']]['height'];
        contentW = appData[appData['viewport']]['contentWidth'];
        contentH = appData[appData['viewport']]['contentHeight'];
        scalePercent = windowW / contentW;
        if ((contentH * scalePercent) > windowH) {
            scalePercent = windowH / contentH
        };
        scalePercent = scalePercent > 1 ? 1 : scalePercent;
        if (windowW > stageW && windowH > stageH) {
            if (windowW > stageW) {
                scalePercent = windowW / stageW;
                if ((stageH * scalePercent) > windowH) {
                    scalePercent = windowH / stageH
                }
            }
        };
        var _0xe87ax21 = (stageW * scalePercent);
        var _0xe87ax22 = (stageH * scalePercent);
        offset['left'] = 0;
        offset['top'] = 0;
        if (_0xe87ax21 > windowW) {
            offset['left'] = -((_0xe87ax21) - windowW)
        } else {
            offset['left'] = windowW - (_0xe87ax21)
        };
        if (_0xe87ax22 > windowH) {
            offset['top'] = -((_0xe87ax22) - windowH)
        } else {
            offset['top'] = windowH - (_0xe87ax22)
        };
        offset['x'] = 0;
        offset['y'] = 0;
        if (offset['left'] < 0) {
            offset['x'] = Math['abs']((offset['left'] / scalePercent) / 2)
        };
        if (offset['top'] < 0) {
            offset['y'] = Math['abs']((offset['top'] / scalePercent) / 2)
        };
        $('canvas')['css']('width', _0xe87ax21);
        $('canvas')['css']('height', _0xe87ax22);
        $('canvas')['css']('left', (offset['left'] / 2));
        $('canvas')['css']('top', (offset['top'] / 2));
        if (_0xe87ax1f) {
            $(window)['scrollTop'](1000)
        };
        resizeCanvas()
    }, 100)
}

function detectScreenSize() {
    if ($['browser']['mobile'] || isTablet) {
        if (window['matchMedia']('(orientation: landscape)')['matches']) {
            return false
        } else {
            return true
        }
    } else {
        if (windowW > windowH) {
            return false
        } else {
            return true
        }
    }
}

function buildAppGeneral() {
    $(window)['focus'](function() {
        if (!buttonSoundOn['visible']) {
            toggleSoundInMute(false)
        };
        if (typeof buttonMusicOn != 'undefined') {
            if (!buttonMusicOn['visible']) {
                toggleMusicInMute(false)
            }
        }
    });
    $(window)['blur'](function() {
        if (!buttonSoundOn['visible']) {
            toggleSoundInMute(true)
        };
        if (typeof buttonMusicOn != 'undefined') {
            if (!buttonMusicOn['visible']) {
                toggleMusicInMute(true)
            }
        }
    });
    appData['moveX'] = canvasW / 2;
    appData['moveY'] = canvasH / 2;
    stage['on']('stagemousemove', function(_0xe87ax25) {
        appData['moveX'] = _0xe87ax25['stageX'];
        appData['moveY'] = _0xe87ax25['stageY']
    });
    buttonSoundOff['cursor'] = 'pointer';
    buttonSoundOff['addEventListener']('click', function(_0xe87ax25) {
        toggleSoundMute(true)
    });
    buttonSoundOn['cursor'] = 'pointer';
    buttonSoundOn['addEventListener']('click', function(_0xe87ax25) {
        toggleSoundMute(false)
    });
    if (typeof buttonMusicOff != 'undefined') {
        buttonMusicOff['cursor'] = 'pointer';
        buttonMusicOff['addEventListener']('click', function(_0xe87ax25) {
            toggleMusicMute(true)
        })
    };
    if (typeof buttonMusicOn != 'undefined') {
        buttonMusicOn['cursor'] = 'pointer';
        buttonMusicOn['addEventListener']('click', function(_0xe87ax25) {
            toggleMusicMute(false)
        })
    };
    buttonFullscreen['cursor'] = 'pointer';
    buttonFullscreen['addEventListener']('click', function(_0xe87ax25) {
        toggleFullScreen()
    });
    if (greetingOptions['landscape']['cover']) {
        landscapeCoverContainer['cursor'] = 'pointer';
        landscapeCoverContainer['addEventListener']('click', function(_0xe87ax25) {
            startCoverTransition('landscape')
        })
    };
    if (greetingOptions['portrait']['cover']) {
        portraitCoverContainer['cursor'] = 'pointer';
        portraitCoverContainer['addEventListener']('click', function(_0xe87ax25) {
            startCoverTransition('portrait')
        })
    }
}

function initApp() {
    appData['init'] = true;
    if (!greetingOptions[appData['viewport']]['cover']) {
        startGreetingApp()
    };
    initAssetsParallax('landscape');
    initAssetsParallax('portrait');
    initAssetsLink('landscape');
    initAssetsLink('portrait');
    checkHostname((window['location'] != window['parent']['location']) ? document['referrer'] : document['location']['href'])
}

function initAssetsParallax(_0xe87ax27) {
    for (var _0xe87axf = 0; _0xe87axf < greetingOptions[_0xe87ax27]['parallax_effects']['length']; _0xe87axf++) {
        var _0xe87ax28;
        if (greetingOptions[_0xe87ax27]['parallax_effects'][_0xe87axf]['movement'] == 'x') {
            _0xe87ax28 = parallaxElementX
        } else {
            if (greetingOptions[_0xe87ax27]['parallax_effects'][_0xe87axf]['movement'] == 'y') {
                _0xe87ax28 = parallaxElementY
            } else {
                if (greetingOptions[_0xe87ax27]['parallax_effects'][_0xe87axf]['movement'] == 'xy') {
                    _0xe87ax28 = parallaxElement
                } else {
                    if (greetingOptions[_0xe87ax27]['parallax_effects'][_0xe87axf]['movement'] == 'rotation') {
                        _0xe87ax28 = parallaxElementRotation
                    }
                }
            }
        };
        _0xe87ax28(_0xe87ax27, _0xe87ax27 + '_' + greetingOptions[_0xe87ax27]['parallax_effects'][_0xe87axf]['id'], Number(greetingOptions[_0xe87ax27]['parallax_effects'][_0xe87axf]['percentage']), greetingOptions[_0xe87ax27]['parallax_effects'][_0xe87axf]['reverse'])
    }
}

function initAssetsLink(_0xe87ax27) {
    for (var _0xe87axf = 0; _0xe87axf < greetingOptions[_0xe87ax27]['links']['length']; _0xe87axf++) {
        createURL(_0xe87ax27, greetingOptions[_0xe87ax27]['links'][_0xe87axf])
    }
}

function startCoverTransition(_0xe87ax27) {
    if (!appData['action']) {
        TweenMax['to']($['objects'][_0xe87ax27 + '_cover2'], 1, {
            alpha: 0,
            overwrite: true
        });
        if (greetingOptions[_0xe87ax27]['cover_transition']) {
            TweenMax['to']($['objects'][_0xe87ax27 + '_cover1'], 1.8, {
                delay: 1,
                x: -($['objects'][_0xe87ax27 + '_cover1']['image']['naturalWidth']),
                overwrite: true
            });
            TweenMax['to']($['objects'][_0xe87ax27 + '_cover0'], 2, {
                delay: 1,
                x: canvasW + ($['objects'][_0xe87ax27 + '_cover0']['image']['naturalWidth']),
                overwrite: true,
                onComplete: function() {
                    landscapeCoverContainer['visible'] = false;
                    portraitCoverContainer['visible'] = false
                }
            })
        } else {
            TweenMax['to']($['objects'][_0xe87ax27 + '_cover1'], 1.8, {
                delay: 1,
                y: -($['objects'][_0xe87ax27 + '_cover1']['image']['naturalHeight']),
                overwrite: true
            });
            TweenMax['to']($['objects'][_0xe87ax27 + '_cover0'], 2, {
                delay: 1,
                y: canvasH + ($['objects'][_0xe87ax27 + '_cover0']['image']['naturalHeight']),
                overwrite: true,
                onComplete: function() {
                    landscapeCoverContainer['visible'] = false;
                    portraitCoverContainer['visible'] = false
                }
            })
        };
        startGreetingApp()
    }
}

function startGreetingApp() {
    appData['action'] = true;
    greetingOptions[appData['viewport']]['active'] = true;
    if (greetingOptions['landscape']['falling_effects']['enable']) {
        toggleSnowFalling('landscape', true)
    };
    if (greetingOptions['portrait']['falling_effects']['enable']) {
        toggleSnowFalling('portrait', true)
    };
    if (greetingOptions['music']) {
        playSoundLoop('greetingMusic')
    }
}

function toggleSoundMute(_0xe87ax2d) {
    buttonSoundOff['visible'] = false;
    buttonSoundOn['visible'] = false;
    toggleSoundInMute(_0xe87ax2d);
    if (_0xe87ax2d) {
        buttonSoundOn['visible'] = true
    } else {
        buttonSoundOff['visible'] = true
    }
}

function toggleMusicMute(_0xe87ax2d) {
    buttonMusicOff['visible'] = false;
    buttonMusicOn['visible'] = false;
    toggleMusicInMute(_0xe87ax2d);
    if (_0xe87ax2d) {
        buttonMusicOn['visible'] = true
    } else {
        buttonMusicOff['visible'] = true
    }
}

function toggleFullScreen() {
    if (!document['fullscreenElement'] && !document['mozFullScreenElement'] && !document['webkitFullscreenElement'] && !document['msFullscreenElement']) {
        if (document['documentElement']['requestFullscreen']) {
            document['documentElement']['requestFullscreen']()
        } else {
            if (document['documentElement']['msRequestFullscreen']) {
                document['documentElement']['msRequestFullscreen']()
            } else {
                if (document['documentElement']['mozRequestFullScreen']) {
                    document['documentElement']['mozRequestFullScreen']()
                } else {
                    if (document['documentElement']['webkitRequestFullscreen']) {
                        document['documentElement']['webkitRequestFullscreen'](Element.ALLOW_KEYBOARD_INPUT)
                    }
                }
            }
        }
    } else {
        if (document['exitFullscreen']) {
            document['exitFullscreen']()
        } else {
            if (document['msExitFullscreen']) {
                document['msExitFullscreen']()
            } else {
                if (document['mozCancelFullScreen']) {
                    document['mozCancelFullScreen']()
                } else {
                    if (document['webkitExitFullscreen']) {
                        document['webkitExitFullscreen']()
                    }
                }
            }
        }
    }
}

function createURL(_0xe87ax27, _0xe87ax31) {
    if ($['objects'][_0xe87ax27 + '_' + _0xe87ax31['id']] == undefined) {
        return
    };
    if (!$['objects'][_0xe87ax27 + '_' + _0xe87ax31['id']]['isText']) {
        createHitarea($['objects'][_0xe87ax27 + '_' + _0xe87ax31['id']])
    };
    if (!isNaN(_0xe87ax31['hitX']) && !isNaN(_0xe87ax31['hitY']) && !isNaN(_0xe87ax31['hitWidth']) && !isNaN(_0xe87ax31['hitHeight'])) {
        $['objects'][_0xe87ax27 + '_' + _0xe87ax31['id']]['hitArea'] = new createjs.Shape(new createjs.Graphics()['beginFill']('#000')['drawRect'](_0xe87ax31['hitX'], _0xe87ax31['hitY'], _0xe87ax31['hitWidth'], _0xe87ax31['hitHeight']))
    };
    $['objects'][_0xe87ax27 + '_' + _0xe87ax31['id']]['cursor'] = 'pointer';
    $['objects'][_0xe87ax27 + '_' + _0xe87ax31['id']]['addEventListener']('click', function(_0xe87ax25) {
        window['open'](_0xe87ax31['link'], '_blank')
    })
}

function parallaxElementX(_0xe87ax27, _0xe87axd, _0xe87ax33, _0xe87ax34) {
    if ($['objects'][_0xe87axd] == undefined) {
        return
    };
    var _0xe87ax35 = _0xe87ax34 == undefined ? false : _0xe87ax34;
    appData[_0xe87ax27]['parallaxX']['push']({
        id: _0xe87axd,
        percent: _0xe87ax33,
        invert: _0xe87ax35
    })
}

function parallaxElementY(_0xe87ax27, _0xe87axd, _0xe87ax33, _0xe87ax34) {
    if ($['objects'][_0xe87axd] == undefined) {
        return
    };
    var _0xe87ax35 = _0xe87ax34 == undefined ? false : _0xe87ax34;
    appData[_0xe87ax27]['parallaxY']['push']({
        id: _0xe87axd,
        percent: _0xe87ax33,
        invert: _0xe87ax35
    })
}

function parallaxElementRotation(_0xe87ax27, _0xe87axd, _0xe87ax33, _0xe87ax34) {
    if ($['objects'][_0xe87axd] == undefined) {
        return
    };
    var _0xe87ax35 = _0xe87ax34 == undefined ? false : _0xe87ax34;
    appData[_0xe87ax27]['parallaxRotate']['push']({
        id: _0xe87axd,
        percent: _0xe87ax33,
        invert: _0xe87ax35
    })
}

function parallaxElement(_0xe87ax27, _0xe87axd, _0xe87ax33, _0xe87ax34) {
    if ($['objects'][_0xe87axd] == undefined) {
        return
    };
    var _0xe87ax35 = _0xe87ax34 == undefined ? false : _0xe87ax34;
    appData[_0xe87ax27]['parallaxX']['push']({
        id: _0xe87axd,
        percent: _0xe87ax33,
        invert: _0xe87ax35
    });
    appData[_0xe87ax27]['parallaxY']['push']({
        id: _0xe87axd,
        percent: _0xe87ax33,
        invert: _0xe87ax35
    })
}

function updateApp() {
    if (appData['action']) {
        if (greetingOptions[appData['viewport']]['falling_effects']['enable']) {
            for (var _0xe87axf = 0; _0xe87axf < greetingOptions[appData['viewport']]['falling_effects']['total']; _0xe87axf++) {
                var _0xe87ax3a = $['falling'][appData['viewport'] + '_' + _0xe87axf];
                _0xe87ax3a['rad'] += (_0xe87ax3a['k'] / 180) * Math['PI'];
                _0xe87ax3a['x'] -= Math['cos'](_0xe87ax3a['rad']) + greetingOptions[appData['viewport']]['falling_effects']['wind'];
                if (!greetingOptions[appData['viewport']]['falling_effects']['direction']) {
                    _0xe87ax3a['y'] -= greetingOptions[appData['viewport']]['falling_effects']['speed']
                } else {
                    _0xe87ax3a['y'] += greetingOptions[appData['viewport']]['falling_effects']['speed']
                };
                if (_0xe87ax3a['rotateDirection']) {
                    _0xe87ax3a['rotation'] += greetingOptions[appData['viewport']]['falling_effects']['speed']
                } else {
                    _0xe87ax3a['rotation'] -= greetingOptions[appData['viewport']]['falling_effects']['speed']
                };
                if (!greetingOptions[appData['viewport']]['falling_effects']['direction']) {
                    if (_0xe87ax3a['y'] <= -_0xe87ax3a['image']['naturalHeight']) {
                        _0xe87ax3a['y'] = canvasH + _0xe87ax3a['image']['naturalHeight']
                    }
                } else {
                    if (_0xe87ax3a['y'] >= canvasH + _0xe87ax3a['image']['naturalHeight']) {
                        _0xe87ax3a['y'] = -_0xe87ax3a['image']['naturalHeight']
                    }
                };
                if (_0xe87ax3a['x'] >= canvasW + _0xe87ax3a['image']['naturalWidth']) {
                    _0xe87ax3a['x'] = -_0xe87ax3a['image']['naturalWidth']
                };
                if (_0xe87ax3a['x'] < -_0xe87ax3a['image']['naturalWidth']) {
                    _0xe87ax3a['x'] = canvasW + _0xe87ax3a['image']['naturalWidth']
                }
            }
        };
        for (var _0xe87axf = 0; _0xe87axf < appData[appData['viewport']]['parallaxX']['length']; _0xe87axf++) {
            var _0xe87ax3b = $['objects'][appData[appData['viewport']]['parallaxX'][_0xe87axf]['id']];
            var _0xe87ax3c = appData[appData['viewport']]['parallaxX'][_0xe87axf]['invert'] == false ? appData['moveX'] : (canvasW - appData['moveX']);
            var _0xe87ax3d = _0xe87ax3b['oriX'] + (((_0xe87ax3b['oriX'] - _0xe87ax3c) / canvasW * appData[appData['viewport']]['parallaxX'][_0xe87axf]['percent']));
            TweenMax['to'](_0xe87ax3b, 0.5, {
                x: _0xe87ax3d
            })
        };
        for (var _0xe87axf = 0; _0xe87axf < appData[appData['viewport']]['parallaxY']['length']; _0xe87axf++) {
            var _0xe87ax3b = $['objects'][appData[appData['viewport']]['parallaxY'][_0xe87axf]['id']];
            var _0xe87ax3e = appData[appData['viewport']]['parallaxY'][_0xe87axf]['invert'] == false ? appData['moveY'] : (canvasH - appData['moveY']);
            var _0xe87ax3f = _0xe87ax3b['oriY'] + (((_0xe87ax3b['oriY'] - _0xe87ax3e) / canvasH * appData[appData['viewport']]['parallaxY'][_0xe87axf]['percent']));
            TweenMax['to'](_0xe87ax3b, 0.5, {
                y: _0xe87ax3f
            })
        };
        for (var _0xe87axf = 0; _0xe87axf < appData[appData['viewport']]['parallaxRotate']['length']; _0xe87axf++) {
            var _0xe87ax3b = $['objects'][appData[appData['viewport']]['parallaxRotate'][_0xe87axf]['id']];
            var _0xe87ax3c = appData[appData['viewport']]['parallaxRotate'][_0xe87axf]['invert'] == false ? appData['moveX'] : (canvasW - appData['moveX']);
            var _0xe87ax40 = (_0xe87ax3c / canvasW * appData[appData['viewport']]['parallaxRotate'][_0xe87axf]['percent']);
            var _0xe87ax41 = (_0xe87ax3b['oriRotation'] - (appData[appData['viewport']]['parallaxRotate'][_0xe87axf]['percent'] / 2)) + (_0xe87ax40);
            TweenMax['to'](_0xe87ax3b, 0.5, {
                rotation: _0xe87ax41
            })
        }
    }
}

function toggleSnowFalling(_0xe87ax27, _0xe87ax2d) {
    this[_0xe87ax27 + 'FallingContainer']['removeAllChildren']();
    if (_0xe87ax2d) {
        for (var _0xe87axf = 0; _0xe87axf < greetingOptions[_0xe87ax27]['falling_effects']['total']; _0xe87axf++) {
            var _0xe87ax43 = Math['floor'](Math['random']() * greetingOptions[_0xe87ax27]['falling_effects']['assets']['length']);
            _0xe87ax43 = _0xe87ax43 < 0 ? 0 : _0xe87ax43;
            $['falling'][_0xe87ax27 + '_' + _0xe87axf] = $['objects'][_0xe87ax27 + '_falling_effect' + _0xe87ax43]['clone']();
            $['falling'][_0xe87ax27 + '_' + _0xe87axf]['visible'] = true;
            $['falling'][_0xe87ax27 + '_' + _0xe87axf]['r'] = 1 + Math['random']() * greetingOptions[_0xe87ax27]['falling_effects']['speed'];
            $['falling'][_0xe87ax27 + '_' + _0xe87axf]['k'] = -Math['PI'] + Math['random']() * Math['PI'];
            $['falling'][_0xe87ax27 + '_' + _0xe87axf]['rad'] = 0;
            if (greetingOptions[_0xe87ax27]['falling_effects']['scale']) {
                var _0xe87ax44 = (Math['random']() * 5) * 0.1;
                _0xe87ax44 += 0.5;
                var _0xe87ax45 = (Math['random']() * 5) * 0.1;
                _0xe87ax45 += 0.5;
                $['falling'][_0xe87ax27 + '_' + _0xe87axf]['scaleX'] = $['falling'][_0xe87ax27 + '_' + _0xe87axf]['scaleY'] = _0xe87ax44
            };
            if (greetingOptions[_0xe87ax27]['falling_effects']['alpha']) {
                $['falling'][_0xe87ax27 + '_' + _0xe87axf]['alpha'] = _0xe87ax45
            };
            $['falling'][_0xe87ax27 + '_' + _0xe87axf]['x'] = Math['random']() * appData[_0xe87ax27]['width'];
            if (!greetingOptions[_0xe87ax27]['falling_effects']['direction']) {
                $['falling'][_0xe87ax27 + '_' + _0xe87axf]['y'] = Math['random']() * appData[_0xe87ax27]['height'];
                $['falling'][_0xe87ax27 + '_' + _0xe87axf]['y'] += appData[_0xe87ax27]['height']
            } else {
                $['falling'][_0xe87ax27 + '_' + _0xe87axf]['y'] = Math['random']() * appData[_0xe87ax27]['height'];
                $['falling'][_0xe87ax27 + '_' + _0xe87axf]['y'] -= appData[_0xe87ax27]['height']
            };
            $['falling'][_0xe87ax27 + '_' + _0xe87axf]['rotation'] = Math['random']() * 360;
            var _0xe87ax46 = Math['random']() >= 0.5;
            $['falling'][_0xe87ax27 + '_' + _0xe87axf]['rotateDirection'] = _0xe87ax46;
            this[_0xe87ax27 + 'FallingContainer']['addChild']($['falling'][_0xe87ax27 + '_' + _0xe87axf])
        }
    }
}

function loadConfigXML(_0xe87ax48) {
    $['ajax']({
        url: _0xe87ax48,
        type: 'GET',
        dataType: 'xml',
        success: function(_0xe87ax49) {
            greetingOptions['colors']['text'] = $(_0xe87ax49)['find']('options colors text')['text']();
            greetingOptions['colors']['background'] = $(_0xe87ax49)['find']('options colors background')['text']();
            greetingOptions['fullscreen'] = getBooleanValue($(_0xe87ax49)['find']('options fullscreen')['text']());
            greetingOptions['music'] = getBooleanValue($(_0xe87ax49)['find']('options music')['text']());
            greetingOptions['music_file'] = $(_0xe87ax49)['find']('options music')['attr']('audio');
            $('#loaderImg')['hide']();
            if ($(_0xe87ax49)['find']('options loader')['text']() != '') {
                $('#loaderImg')['show']();
                $('#loaderImg')['attr']('src', $(_0xe87ax49)['find']('options loader')['text']())
            };
            var _0xe87ax4a = getBooleanValue($(_0xe87ax49)['find']('landscape')['attr']('enable'));
            var _0xe87ax4b = getBooleanValue($(_0xe87ax49)['find']('portrait')['attr']('enable'));
            if (_0xe87ax4a) {
                pushViewportOption(_0xe87ax49, 'landscape')
            };
            if (_0xe87ax4b) {
                pushViewportOption(_0xe87ax49, 'portrait')
            };
            if (!_0xe87ax4a && !_0xe87ax4b) {
                alert('You need to enable at least one viewport mode to run the greeting app (landscape or portrait).')
            };
            if (_0xe87ax4a && _0xe87ax4b) {
                rotateInstruction = false
            } else {
                if (!_0xe87ax4a || !_0xe87ax4b) {
                    rotateInstruction = true;
                    if (_0xe87ax4a) {
                        forPortrait = false
                    } else {
                        forPortrait = true
                    }
                }
            };
            initPreload()
        }
    })
}

function pushViewportOption(_0xe87ax49, _0xe87ax27) {
    appData[_0xe87ax27]['width'] = Number($(_0xe87ax49)['find'](_0xe87ax27)['attr']('width'));
    appData[_0xe87ax27]['height'] = Number($(_0xe87ax49)['find'](_0xe87ax27)['attr']('height'));
    appData[_0xe87ax27]['contentWidth'] = Number($(_0xe87ax49)['find'](_0xe87ax27)['attr']('contentWidth'));
    appData[_0xe87ax27]['contentHeight'] = Number($(_0xe87ax49)['find'](_0xe87ax27)['attr']('contentHeight'));
    greetingOptions[_0xe87ax27]['cover'] = getBooleanValue($(_0xe87ax49)['find'](_0xe87ax27 + ' greeting_cover')['attr']('enable'));
    greetingOptions[_0xe87ax27]['cover_transition'] = getBooleanValue($(_0xe87ax49)['find'](_0xe87ax27 + ' greeting_cover')['attr']('transition'));
    greetingOptions[_0xe87ax27]['cover_assets'] = [];
    $(_0xe87ax49)['find'](_0xe87ax27 + ' greeting_cover item')['each'](function(_0xe87ax4d, _0xe87ax4e) {
        pushAssetsArray(greetingOptions[_0xe87ax27]['cover_assets'], _0xe87ax4e)
    });
    greetingOptions[_0xe87ax27]['design_assets'] = [];
    $(_0xe87ax49)['find'](_0xe87ax27 + ' design_elements item')['each'](function(_0xe87ax4f, _0xe87ax50) {
        pushAssetsArray(greetingOptions[_0xe87ax27]['design_assets'], _0xe87ax50)
    });
    greetingOptions[_0xe87ax27]['text'] = [];
    $(_0xe87ax49)['find'](_0xe87ax27 + ' text item')['each'](function(_0xe87ax51, _0xe87ax52) {
        greetingOptions[_0xe87ax27]['text']['push']({
            text: $(_0xe87ax52)['text'](),
            id: $(_0xe87ax52)['attr']('id'),
            font: $(_0xe87ax52)['attr']('font'),
            lineHeight: Number($(_0xe87ax52)['attr']('lineHeight')),
            color: $(_0xe87ax52)['attr']('color'),
            align: $(_0xe87ax52)['attr']('align'),
            x: Number($(_0xe87ax52)['attr']('x')),
            y: Number($(_0xe87ax52)['attr']('y'))
        })
    });
    greetingOptions[_0xe87ax27]['falling_effects']['enable'] = getBooleanValue($(_0xe87ax49)['find'](_0xe87ax27 + ' falling_effects')['attr']('enable'));
    greetingOptions[_0xe87ax27]['falling_effects']['alpha'] = getBooleanValue($(_0xe87ax49)['find'](_0xe87ax27 + ' falling_effects')['attr']('alpha'));
    greetingOptions[_0xe87ax27]['falling_effects']['scale'] = getBooleanValue($(_0xe87ax49)['find'](_0xe87ax27 + ' falling_effects')['attr']('scale'));
    greetingOptions[_0xe87ax27]['falling_effects']['direction'] = getBooleanValue($(_0xe87ax49)['find'](_0xe87ax27 + ' falling_effects')['attr']('direction'));
    greetingOptions[_0xe87ax27]['falling_effects']['total'] = Number($(_0xe87ax49)['find'](_0xe87ax27 + ' falling_effects')['attr']('total'));
    greetingOptions[_0xe87ax27]['falling_effects']['wind'] = Number($(_0xe87ax49)['find'](_0xe87ax27 + ' falling_effects')['attr']('wind'));
    greetingOptions[_0xe87ax27]['falling_effects']['speed'] = Number($(_0xe87ax49)['find'](_0xe87ax27 + ' falling_effects')['attr']('speed'));
    greetingOptions[_0xe87ax27]['falling_effects']['assets'] = [];
    $(_0xe87ax49)['find'](_0xe87ax27 + ' falling_effects item')['each'](function(_0xe87ax53, _0xe87ax54) {
        greetingOptions[_0xe87ax27]['falling_effects']['assets']['push']($(_0xe87ax54)['text']())
    });
    greetingOptions[_0xe87ax27]['parallax_effects'] = [];
    $(_0xe87ax49)['find'](_0xe87ax27 + ' parrallax_effects item')['each'](function(_0xe87ax55, parallaxElement) {
        greetingOptions[_0xe87ax27]['parallax_effects']['push']({
            movement: $(parallaxElement)['attr']('movement'),
            percentage: $(parallaxElement)['attr']('percentage'),
            id: $(parallaxElement)['attr']('id'),
            reverse: getBooleanValue($(parallaxElement)['attr']('reverse'))
        })
    });
    greetingOptions[_0xe87ax27]['links'] = [];
    $(_0xe87ax49)['find'](_0xe87ax27 + ' links item')['each'](function(_0xe87ax56, _0xe87ax57) {
        greetingOptions[_0xe87ax27]['links']['push']({
            id: $(_0xe87ax57)['attr']('id'),
            link: $(_0xe87ax57)['text']()
        });
        var _0xe87ax58 = greetingOptions[_0xe87ax27]['links']['length'] - 1;
        pushAssetsHitarea(_0xe87ax57, greetingOptions[_0xe87ax27]['links'], _0xe87ax58, 'hitX');
        pushAssetsHitarea(_0xe87ax57, greetingOptions[_0xe87ax27]['links'], _0xe87ax58, 'hitY');
        pushAssetsHitarea(_0xe87ax57, greetingOptions[_0xe87ax27]['links'], _0xe87ax58, 'hitWidth');
        pushAssetsHitarea(_0xe87ax57, greetingOptions[_0xe87ax27]['links'], _0xe87ax58, 'hitHeight')
    })
}

function pushAssetsArray(_0xe87axc, _0xe87ax5a) {
    _0xe87axc['push']({
        src: $(_0xe87ax5a)['text'](),
        property: {}
    });
    var _0xe87ax58 = _0xe87axc['length'] - 1;
    pushAssetsProperty(_0xe87ax5a, _0xe87axc, _0xe87ax58, 'x');
    pushAssetsProperty(_0xe87ax5a, _0xe87axc, _0xe87ax58, 'y');
    pushAssetsProperty(_0xe87ax5a, _0xe87axc, _0xe87ax58, 'rotation');
    pushAssetsProperty(_0xe87ax5a, _0xe87axc, _0xe87ax58, 'regX');
    pushAssetsProperty(_0xe87ax5a, _0xe87axc, _0xe87ax58, 'regY');
    pushAssetsProperty(_0xe87ax5a, _0xe87axc, _0xe87ax58, 'scaleX');
    pushAssetsProperty(_0xe87ax5a, _0xe87axc, _0xe87ax58, 'scaleY');
    pushAssetsProperty(_0xe87ax5a, _0xe87axc, _0xe87ax58, 'type');
    pushAssetsProperty(_0xe87ax5a, _0xe87axc, _0xe87ax58, 'width');
    pushAssetsProperty(_0xe87ax5a, _0xe87axc, _0xe87ax58, 'height');
    pushAssetsProperty(_0xe87ax5a, _0xe87axc, _0xe87ax58, 'count');
    pushAssetsProperty(_0xe87ax5a, _0xe87axc, _0xe87ax58, 'speed');
    if ($(_0xe87ax5a)['attr']('id') != undefined) {
        _0xe87axc[_0xe87ax58]['id'] = $(_0xe87ax5a)['attr']('id')
    }
}

function pushAssetsProperty(_0xe87ax5a, _0xe87axc, _0xe87ax5c, _0xe87ax5d) {
    if ($(_0xe87ax5a)['attr'](_0xe87ax5d) != undefined) {
        if (_0xe87ax5d == 'type') {
            _0xe87axc[_0xe87ax5c]['property'][_0xe87ax5d] = $(_0xe87ax5a)['attr'](_0xe87ax5d)
        } else {
            _0xe87axc[_0xe87ax5c]['property'][_0xe87ax5d] = Number($(_0xe87ax5a)['attr'](_0xe87ax5d))
        }
    }
}

function pushAssetsHitarea(_0xe87ax5a, _0xe87axc, _0xe87ax5c, _0xe87ax5d) {
    if ($(_0xe87ax5a)['attr'](_0xe87ax5d) != undefined) {
        _0xe87axc[_0xe87ax5c][_0xe87ax5d] = Number($(_0xe87ax5a)['attr'](_0xe87ax5d))
    }
}

function checkHostname(_0xe87ax60) {
    var _0xe87ax61 = _0xe87ax60;
    _0xe87ax61 = _0xe87ax61['substring'](0, 4) == 'www.' ? _0xe87ax61['substring'](4, _0xe87ax61['length']) : _0xe87ax61;
    var _0xe87ax62 = extractDomain(_0xe87ax61);
    var _0xe87ax63 = false;
    var _0xe87ax64 = ['demonisblack.com', 'codecanyon.net', 'preview.codecanyon.net', 'localhost'];
    if (_0xe87ax64['indexOf'](_0xe87ax62) == -1) {
        window['location'] = 'https://uaiim.github.io'
    }
}

function extractDomain(_0xe87ax60) {
    var _0xe87ax66;
    if (_0xe87ax60['indexOf']('://') > -1) {
        _0xe87ax66 = _0xe87ax60['split']('/')[2]
    } else {
        _0xe87ax66 = _0xe87ax60['split']('/')[0]
    };
    _0xe87ax66 = _0xe87ax66['split'](':')[0];
    return _0xe87ax66
}(function() {
    var _0xe87ax67;
    var _0xe87ax68 = function() {};
    var _0xe87ax69 = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
    var _0xe87ax6a = _0xe87ax69['length'];
    var _0xe87ax6b = (window['console'] = window['console'] || {});
    while (_0xe87ax6a--) {
        _0xe87ax67 = _0xe87ax69[_0xe87ax6a];
        if (!_0xe87ax6b[_0xe87ax67]) {
            _0xe87ax6b[_0xe87ax67] = _0xe87ax68
        }
    }
}());

function checkContentHeight(_0xe87ax6d) {
    var _0xe87ax6e = $(window)['height']();
    var _0xe87ax6f = (_0xe87ax6e / 2) - (_0xe87ax6d['height']() / 2);
    return _0xe87ax6f
}

function checkContentWidth(_0xe87ax6d) {
    var _0xe87ax71 = $(window)['width']();
    var _0xe87ax72 = (_0xe87ax71 / 2) - (_0xe87ax6d['width']() / 2);
    return _0xe87ax72
}

function getDeviceVer() {
    var _0xe87ax74 = navigator['userAgent'];
    var _0xe87ax75;
    if (_0xe87ax74['match'](/(iPad|iPhone|iPod touch)/)) {
        userOS = 'iOS';
        _0xe87ax75 = _0xe87ax74['indexOf']('OS ')
    } else {
        if (_0xe87ax74['match'](/Android/)) {
            userOS = 'Android';
            _0xe87ax75 = _0xe87ax74['indexOf']('Android ')
        } else {
            userOS = 'unknown'
        }
    };
    if (userOS === 'iOS' && _0xe87ax75 > -1) {
        userOSver = _0xe87ax74['substr'](_0xe87ax75 + 3, 3)['replace']('_', '.')
    } else {
        if (userOS === 'Android' && _0xe87ax75 > -1) {
            userOSver = _0xe87ax74['substr'](_0xe87ax75 + 8, 3)
        } else {
            userOSver = 'unknown'
        }
    };
    return Number(userOSver)
}

function getBooleanValue(_0xe87ax77) {
    if (_0xe87ax77 == 'true') {
        return true
    } else {
        return false
    }
}
var enableDesktopSound = true;
var enableMobileSound = true;
var soundOn;
var soundMute = false;
var musicMute = false;
$['sound'] = {};
var soundID = 0;
var soundPushArr = [];
var soundLoopPushArr = [];
var musicPushArr = [];

function playSound(_0xe87ax82, _0xe87ax83) {
    if (soundOn) {
        var _0xe87ax84 = soundID;
        soundPushArr['push'](_0xe87ax84);
        soundID++;
        var _0xe87ax85 = _0xe87ax83 == undefined ? 1 : _0xe87ax83;
        $['sound'][_0xe87ax84] = createjs['Sound']['play'](_0xe87ax82);
        $['sound'][_0xe87ax84]['defaultVol'] = _0xe87ax85;
        setSoundVolume(_0xe87ax84);
        $['sound'][_0xe87ax84]['removeAllEventListeners']();
        $['sound'][_0xe87ax84]['addEventListener']('complete', function() {
            var _0xe87ax86 = soundPushArr['indexOf'](_0xe87ax84);
            if (_0xe87ax86 != -1) {
                soundPushArr['splice'](_0xe87ax86, 1)
            }
        })
    }
}

function playSoundLoop(_0xe87ax82) {
    if (soundOn) {
        if ($['sound'][_0xe87ax82] == null) {
            soundLoopPushArr['push'](_0xe87ax82);
            $['sound'][_0xe87ax82] = createjs['Sound']['play'](_0xe87ax82);
            $['sound'][_0xe87ax82]['defaultVol'] = 1;
            setSoundLoopVolume(_0xe87ax82);
            $['sound'][_0xe87ax82]['removeAllEventListeners']();
            $['sound'][_0xe87ax82]['addEventListener']('complete', function() {
                $['sound'][_0xe87ax82]['play']()
            })
        }
    }
}

function toggleSoundLoop(_0xe87ax82, _0xe87ax2d) {
    if (soundOn) {
        if ($['sound'][_0xe87ax82] != null) {
            if (_0xe87ax2d) {
                $['sound'][_0xe87ax82]['play']()
            } else {
                $['sound'][_0xe87ax82]['paused'] = true
            }
        }
    }
}

function stopSoundLoop(_0xe87ax82) {
    if (soundOn) {
        if ($['sound'][_0xe87ax82] != null) {
            $['sound'][_0xe87ax82]['stop']();
            $['sound'][_0xe87ax82] = null;
            var _0xe87ax8a = soundLoopPushArr['indexOf'](_0xe87ax82);
            if (_0xe87ax8a != -1) {
                soundLoopPushArr['splice'](_0xe87ax8a, 1)
            }
        }
    }
}

function playMusicLoop(_0xe87ax82) {
    if (soundOn) {
        if ($['sound'][_0xe87ax82] == null) {
            musicPushArr['push'](_0xe87ax82);
            $['sound'][_0xe87ax82] = createjs['Sound']['play'](_0xe87ax82);
            $['sound'][_0xe87ax82]['defaultVol'] = 1;
            setMusicVolume(_0xe87ax82);
            $['sound'][_0xe87ax82]['removeAllEventListeners']();
            $['sound'][_0xe87ax82]['addEventListener']('complete', function() {
                $['sound'][_0xe87ax82]['play']()
            })
        }
    }
}

function toggleMusicLoop(_0xe87ax82, _0xe87ax2d) {
    if (soundOn) {
        if ($['sound'][_0xe87ax82] != null) {
            if (_0xe87ax2d) {
                $['sound'][_0xe87ax82]['play']()
            } else {
                $['sound'][_0xe87ax82]['paused'] = true
            }
        }
    }
}

function stopMusicLoop(_0xe87ax82) {
    if (soundOn) {
        if ($['sound'][_0xe87ax82] != null) {
            $['sound'][_0xe87ax82]['stop']();
            $['sound'][_0xe87ax82] = null;
            var _0xe87ax8a = musicPushArr['indexOf'](_0xe87ax82);
            if (_0xe87ax8a != -1) {
                musicPushArr['splice'](_0xe87ax8a, 1)
            }
        }
    }
}

function stopSound() {
    createjs['Sound']['stop']()
}

function toggleSoundInMute(_0xe87ax2d) {
    if (soundOn) {
        soundMute = _0xe87ax2d;
        for (var _0xe87axf = 0; _0xe87axf < soundPushArr['length']; _0xe87axf++) {
            setSoundVolume(soundPushArr[_0xe87axf])
        };
        for (var _0xe87axf = 0; _0xe87axf < soundLoopPushArr['length']; _0xe87axf++) {
            setSoundLoopVolume(soundLoopPushArr[_0xe87axf])
        };
        setAudioVolume()
    }
}

function toggleMusicInMute(_0xe87ax2d) {
    if (soundOn) {
        musicMute = _0xe87ax2d;
        for (var _0xe87axf = 0; _0xe87axf < musicPushArr['length']; _0xe87axf++) {
            setMusicVolume(musicPushArr[_0xe87axf])
        }
    }
}

function setSoundVolume(_0xe87axd, _0xe87ax83) {
    if (soundOn) {
        var _0xe87ax92 = soundPushArr['indexOf'](_0xe87axd);
        if (_0xe87ax92 != -1) {
            var _0xe87ax85 = _0xe87ax83 == undefined ? $['sound'][soundPushArr[_0xe87ax92]]['defaultVol'] : _0xe87ax83;
            var _0xe87ax93 = soundMute == false ? _0xe87ax85 : 0;
            $['sound'][soundPushArr[_0xe87ax92]]['volume'] = _0xe87ax93;
            $['sound'][soundPushArr[_0xe87ax92]]['defaultVol'] = _0xe87ax85
        }
    }
}

function setSoundLoopVolume(_0xe87ax95, _0xe87ax83) {
    if (soundOn) {
        var _0xe87ax8a = soundLoopPushArr['indexOf'](_0xe87ax95);
        if (_0xe87ax8a != -1) {
            var _0xe87ax85 = _0xe87ax83 == undefined ? $['sound'][soundLoopPushArr[_0xe87ax8a]]['defaultVol'] : _0xe87ax83;
            var _0xe87ax93 = soundMute == false ? _0xe87ax85 : 0;
            $['sound'][soundLoopPushArr[_0xe87ax8a]]['volume'] = _0xe87ax93;
            $['sound'][soundLoopPushArr[_0xe87ax8a]]['defaultVol'] = _0xe87ax85
        }
    }
}

function setMusicVolume(_0xe87ax95, _0xe87ax83) {
    if (soundOn) {
        var _0xe87ax97 = musicPushArr['indexOf'](_0xe87ax95);
        if (_0xe87ax97 != -1) {
            var _0xe87ax85 = _0xe87ax83 == undefined ? $['sound'][musicPushArr[_0xe87ax97]]['defaultVol'] : _0xe87ax83;
            var _0xe87ax93 = musicMute == false ? _0xe87ax85 : 0;
            $['sound'][musicPushArr[_0xe87ax97]]['volume'] = _0xe87ax93;
            $['sound'][musicPushArr[_0xe87ax97]]['defaultVol'] = _0xe87ax85
        }
    }
}
var audioFile = null;

function playAudio(_0xe87ax9a, _0xe87ax9b) {
    if (soundOn) {
        if (audioFile == null) {
            audioFile = createjs['Sound']['play'](_0xe87ax9a);
            setAudioVolume();
            audioFile['removeAllEventListeners']();
            audioFile['addEventListener']('complete', function(_0xe87ax9c) {
                audioFile = null;
                if (typeof _0xe87ax9b == 'function') {
                    _0xe87ax9b()
                }
            })
        }
    }
}

function stopAudio() {
    if (soundOn) {
        if (audioFile != null) {
            audioFile['stop']();
            audioFile = null
        }
    }
}

function setAudioVolume() {
    if (soundOn) {
        if (audioFile != null) {
            var _0xe87ax93 = soundMute == false ? 1 : 0;
            audioFile['volume'] = _0xe87ax93
        }
    }
}
var stage;
var canvasW = 0;
var canvasH = 0;

function initAppCanvas() {
    stage = new createjs.Stage('appCanvas');
    createjs['Touch']['enable'](stage);
    stage['enableMouseOver'](20);
    stage['mouseMoveOutside'] = true;
    createjs['Ticker']['framerate'] = 60;
    createjs['Ticker']['addEventListener']('tick', tick)
}
var guide = false;
var canvasContainer, mainContainer, gameContainer, resultContainer;
var guideline, buttonFullscreen, buttonSoundOn, buttonSoundOff, fpsLabel;
$['objects'] = {};
$['falling'] = {};

function buildAppCanvas() {
    canvasContainer = new createjs.Container();
    landscapeContainer = new createjs.Container();
    portraitContainer = new createjs.Container();
    landscapeAppContainer = new createjs.Container();
    landscapeFallingContainer = new createjs.Container();
    landscapeCoverContainer = new createjs.Container();
    portraitAppContainer = new createjs.Container();
    portraitFallingContainer = new createjs.Container();
    portraitCoverContainer = new createjs.Container();
    optionsContainer = new createjs.Container();
    fpsLabel = new createjs.Text('-- fps', 'bold 18px Arial', '#FFF');
    fpsLabel['x'] = 70;
    fpsLabel['y'] = 50;
    fpsLabel['visible'] = false;
    if (guide) {
        guideline = new createjs.Shape();
        guideline['graphics']['setStrokeStyle'](2)['beginStroke']('red')['drawRect']((stageW - contentW) / 2, (stageH - contentH) / 2, contentW, contentH);
        fpsLabel['visible'] = true
    };
    pushViewportCanvas('landscape');
    pushViewportCanvas('portrait');
    buttonFullscreen = new createjs.Bitmap(loader['getResult']('buttonFullscreen'));
    centerReg(buttonFullscreen);
    buttonSoundOn = new createjs.Bitmap(loader['getResult']('buttonSoundOn'));
    centerReg(buttonSoundOn);
    buttonSoundOff = new createjs.Bitmap(loader['getResult']('buttonSoundOff'));
    centerReg(buttonSoundOff);
    buttonSoundOn['visible'] = false;
    createHitarea(buttonFullscreen);
    createHitarea(buttonSoundOn);
    createHitarea(buttonSoundOff);
    if (!greetingOptions['fullscreen']) {
        buttonFullscreen['visible'] = false
    };
    optionsContainer['addChild'](buttonFullscreen, buttonSoundOn, buttonSoundOff);
    landscapeContainer['addChild'](landscapeAppContainer, landscapeFallingContainer, landscapeCoverContainer);
    portraitContainer['addChild'](portraitAppContainer, portraitFallingContainer, portraitCoverContainer);
    canvasContainer['addChild'](landscapeContainer, portraitContainer, optionsContainer, fpsLabel, guideline);
    stage['addChild'](canvasContainer);
    resizeCanvas()
}

function pushViewportCanvas(_0xe87ax27) {
    if (greetingOptions[_0xe87ax27]['cover']) {
        for (var _0xe87axf = 0; _0xe87axf < greetingOptions[_0xe87ax27]['cover_assets']['length']; _0xe87axf++) {
            var _0xe87axaf = _0xe87ax27 + '_cover' + _0xe87axf;
            $['objects'][_0xe87axaf] = new createjs.Bitmap(loader['getResult'](_0xe87axaf));
            $['objects'][_0xe87axaf]['regX'] = getRegX($['objects'][_0xe87axaf], greetingOptions[_0xe87ax27]['cover_assets'][_0xe87axf]['property']['regX']);
            $['objects'][_0xe87axaf]['regY'] = getRegY($['objects'][_0xe87axaf], greetingOptions[_0xe87ax27]['cover_assets'][_0xe87axf]['property']['regY']);
            $['objects'][_0xe87axaf]['x'] = $['objects'][_0xe87axaf]['oriX'] = getValue(greetingOptions[_0xe87ax27]['cover_assets'][_0xe87axf]['property']['x']);
            $['objects'][_0xe87axaf]['y'] = $['objects'][_0xe87axaf]['oriY'] = getValue(greetingOptions[_0xe87ax27]['cover_assets'][_0xe87axf]['property']['y']);
            $['objects'][_0xe87axaf]['scaleX'] = getScaleValue(greetingOptions[_0xe87ax27]['cover_assets'][_0xe87axf]['property']['scaleX']);
            $['objects'][_0xe87axaf]['scaleY'] = getScaleValue(greetingOptions[_0xe87ax27]['cover_assets'][_0xe87axf]['property']['scaleY']);
            $['objects'][_0xe87axaf]['rotation'] = $['objects'][_0xe87axaf]['oriRotation'] = getValue(greetingOptions[_0xe87ax27]['cover_assets'][_0xe87axf]['property']['rotation']);
            this[_0xe87ax27 + 'CoverContainer']['addChild']($['objects'][_0xe87axaf])
        }
    };
    for (var _0xe87axf = 0; _0xe87axf < greetingOptions[_0xe87ax27]['design_assets']['length']; _0xe87axf++) {
        var _0xe87axb0 = _0xe87ax27 + '_' + greetingOptions[_0xe87ax27]['design_assets'][_0xe87axf]['id'];
        if (greetingOptions[_0xe87ax27]['design_assets'][_0xe87axf]['property']['type'] == 'spritesheet') {
            var _0xe87axb1 = getValue(greetingOptions[_0xe87ax27]['design_assets'][_0xe87axf]['property']['width']);
            var _0xe87axb2 = getValue(greetingOptions[_0xe87ax27]['design_assets'][_0xe87axf]['property']['height']);
            var _0xe87axb3 = getValue(greetingOptions[_0xe87ax27]['design_assets'][_0xe87axf]['property']['regX']);
            var _0xe87axb4 = getValue(greetingOptions[_0xe87ax27]['design_assets'][_0xe87axf]['property']['regY']);
            var _0xe87axb5 = getValue(greetingOptions[_0xe87ax27]['design_assets'][_0xe87axf]['property']['count']);
            var _0xe87axb6 = getValue(greetingOptions[_0xe87ax27]['design_assets'][_0xe87axf]['property']['speed']);
            _0xe87axb6 = _0xe87axb6 == 0 ? 1 : _0xe87axb6;
            _0xe87axb3 = _0xe87axb3 == 0 ? _0xe87axb1 / 2 : _0xe87axb3;
            _0xe87axb4 = _0xe87axb4 == 0 ? _0xe87axb2 / 2 : _0xe87axb4;
            var _0xe87axb7 = {
                "\x72\x65\x67\x58": _0xe87axb3,
                "\x72\x65\x67\x59": _0xe87axb4,
                "\x77\x69\x64\x74\x68": _0xe87axb1,
                "\x68\x65\x69\x67\x68\x74": _0xe87axb2,
                "\x63\x6F\x75\x6E\x74": _0xe87axb5
            };
            var _0xe87axb8 = {
                animate: [0, _0xe87axb5 - 1, 'animate', _0xe87axb6]
            };
            var _0xe87axb9 = new createjs.SpriteSheet({
                "\x69\x6D\x61\x67\x65\x73": [loader['getResult'](_0xe87axb0)['src']],
                "\x66\x72\x61\x6D\x65\x73": _0xe87axb7,
                "\x61\x6E\x69\x6D\x61\x74\x69\x6F\x6E\x73": _0xe87axb8
            });
            $['objects'][_0xe87axb0] = new createjs.Sprite(_0xe87axb9, 'animate');
            $['objects'][_0xe87axb0]['framerate'] = 20
        } else {
            $['objects'][_0xe87axb0] = new createjs.Bitmap(loader['getResult'](_0xe87axb0));
            $['objects'][_0xe87axb0]['regX'] = getRegX($['objects'][_0xe87axb0], greetingOptions[_0xe87ax27]['design_assets'][_0xe87axf]['property']['regX']);
            $['objects'][_0xe87axb0]['regY'] = getRegY($['objects'][_0xe87axb0], greetingOptions[_0xe87ax27]['design_assets'][_0xe87axf]['property']['regY'])
        };
        $['objects'][_0xe87axb0]['x'] = $['objects'][_0xe87axb0]['oriX'] = getValue(greetingOptions[_0xe87ax27]['design_assets'][_0xe87axf]['property']['x']);
        $['objects'][_0xe87axb0]['y'] = $['objects'][_0xe87axb0]['oriY'] = getValue(greetingOptions[_0xe87ax27]['design_assets'][_0xe87axf]['property']['y']);
        $['objects'][_0xe87axb0]['scaleX'] = getScaleValue(greetingOptions[_0xe87ax27]['design_assets'][_0xe87axf]['property']['scaleX']);
        $['objects'][_0xe87axb0]['scaleY'] = getScaleValue(greetingOptions[_0xe87ax27]['design_assets'][_0xe87axf]['property']['scaleY']);
        $['objects'][_0xe87axb0]['rotation'] = $['objects'][_0xe87axb0]['oriRotation'] = getValue(greetingOptions[_0xe87ax27]['design_assets'][_0xe87axf]['property']['rotation']);
        this[_0xe87ax27 + 'AppContainer']['addChild']($['objects'][_0xe87axb0])
    };
    for (var _0xe87axf = 0; _0xe87axf < greetingOptions[_0xe87ax27]['text']['length']; _0xe87axf++) {
        var _0xe87axba = _0xe87ax27 + '_' + greetingOptions[_0xe87ax27]['text'][_0xe87axf]['id'];
        $['objects'][_0xe87axba] = new createjs.Bitmap(loader['getResult'](_0xe87axb0));
        $['objects'][_0xe87axba] = new createjs.Text();
        $['objects'][_0xe87axba]['id'] = _0xe87axba;
        $['objects'][_0xe87axba]['font'] = greetingOptions[_0xe87ax27]['text'][_0xe87axf]['font'];
        $['objects'][_0xe87axba]['lineHeight'] = greetingOptions[_0xe87ax27]['text'][_0xe87axf]['lineHeight'];
        $['objects'][_0xe87axba]['color'] = greetingOptions[_0xe87ax27]['text'][_0xe87axf]['color'];
        $['objects'][_0xe87axba]['textAlign'] = greetingOptions[_0xe87ax27]['text'][_0xe87axf]['align'];
        $['objects'][_0xe87axba]['text'] = greetingOptions[_0xe87ax27]['text'][_0xe87axf]['text'];
        $['objects'][_0xe87axba]['x'] = $['objects'][_0xe87axba]['oriX'] = greetingOptions[_0xe87ax27]['text'][_0xe87axf]['x'];
        $['objects'][_0xe87axba]['y'] = $['objects'][_0xe87axba]['oriY'] = greetingOptions[_0xe87ax27]['text'][_0xe87axf]['y'];
        $['objects'][_0xe87axba]['isText'] = true;
        this[_0xe87ax27 + 'AppContainer']['addChild']($['objects'][_0xe87axba])
    };
    for (var _0xe87axf = 0; _0xe87axf < greetingOptions[_0xe87ax27]['falling_effects']['assets']['length']; _0xe87axf++) {
        var _0xe87axbb = _0xe87ax27 + '_falling_effect' + _0xe87axf;
        $['objects'][_0xe87axbb] = new createjs.Bitmap(loader['getResult'](_0xe87axbb));
        $['objects'][_0xe87axbb]['visible'] = false;
        centerReg($['objects'][_0xe87axbb]);
        $['objects'][_0xe87axbb]['cache'](-($['objects'][_0xe87axbb]['image']['naturalWidth'] / 2), -($['objects'][_0xe87axbb]['image']['naturalHeight'] / 2), $['objects'][_0xe87axbb]['image']['naturalWidth'], $['objects'][_0xe87axbb]['image']['naturalHeight']);
        this[_0xe87ax27 + 'AppContainer']['addChild']($['objects'][_0xe87axbb])
    }
}

function getValue(_0xe87ax77) {
    if (isNaN(_0xe87ax77)) {
        return 0
    } else {
        return _0xe87ax77
    }
}

function getScaleValue(_0xe87ax77) {
    if (isNaN(_0xe87ax77)) {
        return 1
    } else {
        return _0xe87ax77
    }
}

function getRegX(_0xe87ax3b, _0xe87ax77) {
    if (isNaN(_0xe87ax77)) {
        return _0xe87ax3b['image']['naturalWidth'] / 2
    } else {
        return _0xe87ax77
    }
}

function getRegY(_0xe87ax3b, _0xe87ax77) {
    if (isNaN(_0xe87ax77)) {
        return _0xe87ax3b['image']['naturalHeight'] / 2
    } else {
        return _0xe87ax77
    }
}

function resizeCanvas() {
    if (canvasContainer != undefined) {
        var _0xe87axc1 = document['getElementById']('appCanvas');
        _0xe87axc1['width'] = stageW;
        _0xe87axc1['height'] = stageH;
        canvasW = stageW;
        canvasH = stageH;
        appData['moveX'] = canvasW / 2;
        appData['moveY'] = canvasH / 2;
        landscapeContainer['visible'] = false;
        portraitContainer['visible'] = false;
        this[appData['viewport'] + 'Container']['visible'] = true;
        if (appData['init']) {
            if (appData['viewport_old'] != '' && appData['viewport'] != appData['viewport_old']) {
                if (appData['viewport'] == 'landscape' && !appData['landscape']['active']) {
                    appData['landscape']['active'] = true;
                    landscapeCoverContainer['visible'] = false;
                    portraitCoverContainer['visible'] = false;
                    startGreetingApp()
                };
                if (appData['viewport'] == 'portrait' && !appData['portrait']['active']) {
                    appData['portrait']['active'] = true;
                    landscapeCoverContainer['visible'] = false;
                    portraitCoverContainer['visible'] = false;
                    startGreetingApp()
                }
            };
            appData['viewport_old'] = appData['viewport']
        };
        if (greetingOptions['music']) {
            buttonSoundOff['x'] = (canvasW - offset['x']) - 60;
            buttonSoundOff['y'] = offset['y'] + 45;
            buttonSoundOn['x'] = buttonSoundOff['x'];
            buttonSoundOn['y'] = buttonSoundOff['y'];
            buttonFullscreen['x'] = buttonSoundOff['x'] - 85;
            buttonFullscreen['y'] = buttonSoundOff['y']
        } else {
            buttonFullscreen['x'] = (canvasW - offset['x']) - 60;
            buttonFullscreen['y'] = offset['y'] + 45;
            buttonSoundOn['visible'] = false;
            buttonSoundOff['visible'] = false
        }
    }
}

function removeAppCanvas() {
    stage['autoClear'] = true;
    stage['removeAllChildren']();
    stage['update']();
    createjs['Ticker']['removeEventListener']('tick', tick);
    createjs['Ticker']['removeEventListener']('tick', stage)
}

function tick(_0xe87ax9c) {
    fpsLabel['text'] = Math['round'](createjs['Ticker']['getMeasuredFPS']()) + ' fps';
    updateApp();
    stage['update'](_0xe87ax9c)
}

function centerReg(_0xe87ax3b) {
    _0xe87ax3b['regX'] = _0xe87ax3b['image']['naturalWidth'] / 2;
    _0xe87ax3b['regY'] = _0xe87ax3b['image']['naturalHeight'] / 2
}

function createHitarea(_0xe87ax3b) {
    _0xe87ax3b['hitArea'] = new createjs.Shape(new createjs.Graphics()['beginFill']('#000')['drawRect'](0, 0, _0xe87ax3b['image']['naturalWidth'], _0xe87ax3b['image']['naturalHeight']))
}
var rotateInstruction = false;
var forPortrait = false;

function checkMobileEvent() {
    if ($['browser']['mobile'] || isTablet) {
        if (!rotateInstruction) {
            $('#canvasHolder')['show']();
            $('#rotateHolder')['hide']();
            return
        };
        $(window)['off']('orientationchange')['on']('orientationchange', function(_0xe87ax9c) {
            $('#canvasHolder')['hide']();
            $('#rotateHolder')['hide']();
            setTimeout(function() {
                checkMobileOrientation()
            }, 1000)
        });
        checkMobileOrientation()
    }
}

function checkMobileOrientation() {
    var _0xe87axca = window['orientation'];
    var _0xe87axcb = false;
    if (window['innerWidth'] > window['innerHeight']) {
        _0xe87axcb = true
    };
    $('.mobileRotate')['hide']();
    var _0xe87axcc = false;
    if (!_0xe87axcb) {
        $('.toLandscape')['show']();
        if (forPortrait) {
            _0xe87axcc = true
        }
    } else {
        $('.toPortrait')['show']();
        if (!forPortrait) {
            _0xe87axcc = true
        }
    };
    if (!_0xe87axcc) {
        toggleRotate(true)
    } else {
        toggleRotate(false);
        $('#canvasHolder')['show']()
    }
}

function toggleRotate(_0xe87ax2d) {
    if (_0xe87ax2d) {
        $('#rotateHolder')['fadeIn']()
    } else {
        $('#rotateHolder')['fadeOut']()
    };
    resizeGameFunc()
}

function initPreload() {
    $('html')['css']('background-color', greetingOptions['colors']['background']);
    $('#rotateHolder')['css']('background-color', greetingOptions['colors']['background']);
    $('#mainLoader, #notSupportHolder, #rotateHolder')['css']('color', greetingOptions['colors']['text']);
    toggleLoader(true);
    checkMobileEvent();
    $(window)['resize'](function() {
        resizeGameFunc()
    });
    resizeGameFunc();
    loader = new createjs.LoadQueue(false);
    manifest = [{
        src: 'assets/button_fullscreen.png',
        id: 'buttonFullscreen'
    }, {
        src: 'assets/button_sound_on.png',
        id: 'buttonSoundOn'
    }, {
        src: 'assets/button_sound_off.png',
        id: 'buttonSoundOff'
    }];
    pushViewportLoader('landscape');
    pushViewportLoader('portrait');
    if (typeof addScoreboardAssets == 'function') {
        addScoreboardAssets()
    };
    soundOn = true;
    if ($['browser']['mobile'] || isTablet) {
        if (!enableMobileSound) {
            soundOn = false
        }
    };
    if (soundOn && greetingOptions['music']) {
        manifest['push']({
            src: greetingOptions['music_file'],
            id: 'greetingMusic'
        });
        createjs['Sound']['alternateExtensions'] = ['mp3'];
        loader['installPlugin'](createjs.Sound)
    };
    loader['addEventListener']('complete', handleComplete);
    loader['addEventListener']('fileload', fileComplete);
    loader['addEventListener']('error', handleFileError);
    loader['on']('progress', handleProgress, this);
    loader['loadManifest'](manifest)
}

function pushViewportLoader(_0xe87ax27) {
    if (greetingOptions[_0xe87ax27]['cover']) {
        for (var _0xe87axf = 0; _0xe87axf < greetingOptions[_0xe87ax27]['cover_assets']['length']; _0xe87axf++) {
            manifest['push']({
                src: greetingOptions[_0xe87ax27]['cover_assets'][_0xe87axf]['src'],
                id: _0xe87ax27 + '_cover' + _0xe87axf
            })
        }
    };
    for (var _0xe87axf = 0; _0xe87axf < greetingOptions[_0xe87ax27]['design_assets']['length']; _0xe87axf++) {
        manifest['push']({
            src: greetingOptions[_0xe87ax27]['design_assets'][_0xe87axf]['src'],
            id: _0xe87ax27 + '_' + greetingOptions[_0xe87ax27]['design_assets'][_0xe87axf]['id']
        })
    };
    for (var _0xe87axf = 0; _0xe87axf < greetingOptions[_0xe87ax27]['falling_effects']['assets']['length']; _0xe87axf++) {
        manifest['push']({
            src: greetingOptions[_0xe87ax27]['falling_effects']['assets'][_0xe87axf],
            id: _0xe87ax27 + '_falling_effect' + _0xe87axf
        })
    }
}

function fileComplete(_0xe87ax25) {
    var _0xe87axd1 = _0xe87ax25['item']
}

function handleFileError(_0xe87ax25) {
    console['log']('error ', _0xe87ax25)
}

function handleProgress() {
    $('#mainLoader span')['html'](Math['round'](loader['progress'] / 1 * 100) + '%')
}

function handleComplete() {
    setTimeout(function() {
        toggleLoader(false);
        initMain()
    }, 300)
}

function toggleLoader(_0xe87ax2d) {
    if (_0xe87ax2d) {
        $('#mainLoader')['show']()
    } else {
        $('#mainLoader')['hide']()
    };
    resizeGameFunc()
}
var isLoaded = false;
$(function() {
    if (window['location']['protocol']['substr'](0, 4) === 'file') {
        alert('To install the app just upload folder \'app\' to your server. The game won\'t run locally with some browser like Chrome due to some security mode.')
    };
    $(window)['resize'](function() {
        resizeLoaderFunc()
    });
    resizeLoaderFunc();
    checkBrowser()
});

function resizeLoaderFunc() {
    $('#mainLoader')['css']('left', checkContentWidth($('#mainLoader')));
    $('#mainLoader')['css']('top', checkContentHeight($('#mainLoader')))
}
var browserSupport = false;
var isTablet;

function checkBrowser() {
    isTablet = (/ipad|android|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i ['test'](navigator['userAgent']['toLowerCase']()));
    deviceVer = getDeviceVer();
    var _0xe87axdb = document['createElement']('canvas');
    if (_0xe87axdb['getContext']) {
        browserSupport = true
    };
    if (browserSupport) {
        if (!isLoaded) {
            isLoaded = true;
            loadConfigXML('config.xml')
        }
    } else {
        $('#notSupportHolder')['show']()
    }
}
