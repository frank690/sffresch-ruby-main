var body = $('body');

window.lazySizesConfig = window.lazySizesConfig || {};
window.lazySizesConfig.loadHidden = false;

$(function () {
    'use strict';
    author();
    stickySidebar();
    pagination();
    facebook();
    video();
    gallery();
    offCanvas();
});

function author() {
    'use strict';
    $('.author-name').on('click', function () {
        $(this).next('.author-social').toggleClass('enabled');
    });
}

function stickySidebar() {
    'use strict';
    var marginTop = 30;

    jQuery('.sidebar-column, .related-column').theiaStickySidebar({
        additionalMarginTop: marginTop,
        additionalMarginBottom: 30,
    });
}

function pagination() {
    'use strict';
    var wrapper = $('.post-feed .row');
    var button = $('.infinite-scroll-button');

    if (body.hasClass('paged-next')) {
        wrapper.on('request.infiniteScroll', function (event, path) {
            button.hide();
        });

        wrapper.on('load.infiniteScroll', function (event, response, path) {
            if ($(response).find('body').hasClass('paged-next')) {
                button.show();
            }
        });

        wrapper.infiniteScroll({
            append: '.post-column',
            button: '.infinite-scroll-button',
            debug: false,
            hideNav: '.pagination',
            history: false,
            path: '.pagination .older-posts',
            scrollThreshold: false,
            status: '.infinite-scroll-status',
        });
    }
}

function facebook() {
    'use strict';
    var widget = $('.widget-facebook');

    if (
        widget.find('.fb-page').attr('data-href') ==
        '__YOUR_FACEBOOK_PAGE_URL__'
    ) {
        widget.remove();
    }
}

function video() {
    'use strict';
    $('.post-content').fitVids();
}

function gallery() {
    'use strict';
    var images = document.querySelectorAll('.kg-gallery-image img');
    images.forEach(function (image) {
        var container = image.closest('.kg-gallery-image');
        var width = image.attributes.width.value;
        var height = image.attributes.height.value;
        var ratio = width / height;
        container.style.flex = ratio + ' 1 0%';
    });
}

function offCanvas() {
    'use strict';
    $('.burger:not(.burger.close)').on('click', function () {
        body.addClass('canvas-visible canvas-opened');
        dimmer('open', 'medium');
    });

    $('.burger-close').on('click', function () {
        if (body.hasClass('canvas-opened')) {
            body.removeClass('canvas-opened');
            dimmer('close', 'medium');
        }
    });

    $('.dimmer').on('click', function () {
        if (body.hasClass('canvas-opened')) {
            body.removeClass('canvas-opened');
            dimmer('close', 'medium');
        }
    });
}


function dimmer(action, speed) {
    'use strict';
    var dimmer = $('.dimmer');

    switch (action) {
        case 'open':
            dimmer.fadeIn(speed);
            break;
        case 'close':
            dimmer.fadeOut(speed);
            break;
    }
}
