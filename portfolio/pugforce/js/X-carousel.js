"use strict";

/*
 === X-carousel slider with "Before and After" ===
 Version: 1.0.0
 Author: EVNE Developers
 Author URI: http://www.evnedev.com/
 */

(function ($) {
    /**
     * @return {boolean}
     */
    var Carousel = function Carousel(poster) {

        var me = this;
        this.poster = poster;
        this.postersList = poster.find(".poster-list");
        this.nextBtn = poster.find(".poster-next-btn");
        this.prevBtn = poster.find(".poster-prev-btn");
        this.posterItems = poster.find(".poster-item");
        this.posterFirstItem = this.posterItems.first();
        this.posterLastItem = this.posterItems.last();
        this.rotateFlag = true;
        this.posterDescription = $('.poster-description');
        this.posterDescription.append('<div class="desc"></div>');
        $('.poster-description .desc').html(this.posterFirstItem.find('.desc').html());
        $('.slide-count span:nth-child(2)').html(this.posterItems.length);
        this.posterItems.each(function (i) {
            $(this).attr('data-count', i + 1);
        });

        this.setting = {
            posterWidthPersent: 85,
            zStepPX: 50,
            posterStepPersent: 10,
            perspective: 500,
            speed: 1000,
            autoPlay: true,
            delay: 2000
        };

        $.extend(this.setting, this.getSetting());
        this.setSettingValue();
        var img = new Image();
        img.src = this.posterFirstItem.find("img")[0].src;
        img.onload = function () {
            me.run();
        };
        if (this.setting.autoPlay) {
            this.autoPlay();
            this.poster.hover(function () {
                clearInterval(me.timer);
            }, function () {
                me.autoPlay();
            });
        }
        this.nextBtn.on('click', function () {
            if (me.rotateFlag === true) {
                me.rotateFlag = false;
                me.carouselRotate("left");
            }
        });
        this.prevBtn.on('click', function () {
            if (me.rotateFlag === true) {
                me.rotateFlag = false;
                me.carouselRotate("right");
            }
        });
        window.onresize = function () {
            if ($(window).width() > 768) {
                me.setPosterPos();
            } else {
                me.setPosterPosMobile();
            }
            me.beforeAfterSlider();
        };
    };
    Carousel.prototype = {
        run: function run() {
            if ($(window).width() > 768) {
                this.setPosterPos();
            } else {
                this.setPosterPosMobile();
            }
            this.beforeAfterSlider();
        },
        autoPlay: function autoPlay() {
            var self = this;
            this.timer = setInterval(function () {
                self.carouselRotate("right");
            }, this.setting.delay);
        },
        carouselRotate: function carouselRotate(dir) {
            var _this_ = this;
            var zIndexArr = [];
            if (dir === "left") {
                var lastZIndex = _this_.posterLastItem.css('z-index'),
                    lastOpacity = _this_.posterLastItem.find('img:first-child').css('opacity'),
                    lastTransform = _this_.posterLastItem.css('transform'),
                    curZIndex = [],
                    curOpacity = [],
                    curTransform = [];

                this.posterItems.each(function (i) {
                    var self = $(this);
                    var zIndex = void 0;
                    var transform = void 0;
                    var opacity = void 0;
                    if (i == 0) {
                        zIndex = lastZIndex;
                        opacity = lastOpacity;
                        transform = lastTransform;

                        curZIndex[i] = self.css("z-index");
                        curOpacity[i] = self.find('img:first-child').css('opacity');
                        curTransform[i] = self.css("transform");

                        self.css({
                            zIndex: zIndex,
                            transform: transform
                        }).find('img').css({ opacity: opacity });
                    } else {
                        curZIndex[i] = self.css("z-index");
                        curOpacity[i] = self.find('img:first-child').css('opacity');
                        curTransform[i] = self.css("transform");
                        zIndex = curZIndex[i - 1];
                        opacity = curOpacity[i - 1];
                        transform = curTransform[i - 1];

                        self.css({
                            zIndex: zIndex,
                            transform: transform
                        }).find('img').css({ opacity: opacity });
                    }

                    zIndexArr.push(zIndex);

                    setTimeout(function () {
                        _this_.rotateFlag = true;
                    }, _this_.setting.speed);
                });

                this.posterItems.each(function (i) {
                    $(this).css("zIndex", zIndexArr[i]);
                    if (zIndexArr[i] == Math.max.apply(Math, zIndexArr)) {
                        $(this).addClass('current').siblings().removeClass('current');
                    }
                });
            } else if (dir === "right") {
                var firstZIndex = _this_.posterFirstItem.css('z-index'),
                    firstOpacity = _this_.posterFirstItem.find('img:first-child').css('opacity'),
                    firstTransform = _this_.posterFirstItem.css('transform');
                this.posterItems.each(function () {
                    var self = $(this);
                    var zIndex = void 0;
                    var transform = void 0;
                    var opacity = void 0;
                    if (self.next().length > 0) {
                        var next = self.next();
                        zIndex = next.css("z-index");
                        opacity = next.find('img:first-child').css('opacity');
                        transform = next.css("transform");
                    } else {
                        zIndex = firstZIndex;
                        opacity = firstOpacity;
                        transform = firstTransform;
                    }

                    zIndexArr.push(zIndex);

                    self.css({
                        zIndex: zIndex,
                        transform: transform
                    }).find('img').css({ opacity: opacity });

                    setTimeout(function () {
                        _this_.rotateFlag = true;
                    }, _this_.setting.speed);
                });
                this.posterItems.each(function (i) {
                    $(this).css("zIndex", zIndexArr[i]);
                    if (zIndexArr[i] == Math.max.apply(Math, zIndexArr)) {
                        $(this).addClass('current').siblings().removeClass('current');
                    }
                });
            }
            $('.slide-count span').first().html($('.poster-item.current').attr('data-count'));
            this.posterDescription.hide().find('.desc').html($('.poster-item.current .desc').html());
            this.posterDescription.fadeIn(700);
            this.beforeAfterSlider();
        },
        setPosterPos: function setPosterPos() {

            var self = this;

            var zIndex = Math.floor(this.posterItems.size() / 2),
                sliceItems = self.posterItems.slice(1),
                sliceSize = sliceItems.length / 2,
                rightSlice = sliceItems.slice(0, sliceSize),
                leftSlice = sliceItems.slice(sliceSize);

            sliceItems.css({
                width: self.setting.posterWidthPersent + '%',
                transition: 'all ' + self.setting.speed / 1000 + 's'
            });

            self.posterFirstItem.css('-moz-transform', 'translateZ(0px) translateX(-50%) translateY(-50%)').css('-webkit-transform', 'translateZ(0px) translateX(-50%) translateY(-50%)').css('transform', 'translateZ(0px) translateX(-50%) translateY(-50%)').css({
                position: 'absolute',
                width: self.setting.posterWidthPersent + '%',
                zIndex: zIndex * 10,
                transition: 'all ' + self.setting.speed / 1000 + 's'
            }).find('img').css({ opacity: 1, transition: 'opacity ' + self.setting.speed / 1000 + 's' });
            self.poster.find('.subtitle, .poster-description, .posters-arrows').css({ width: self.setting.posterWidthPersent + '%' });

            self.postersList.css({
                perspective: self.setting.perspective,
                height: self.posterFirstItem.height()
            }).addClass('ready');

            rightSlice.each(function (i) {
                zIndex--;
                var transZ = -self.setting.zStepPX * (i + 1),
                    transX = self.setting.posterStepPersent * (i + 1) - 50;

                $(this).css('-moz-transform', 'translateZ(' + transZ + 'px) translateX(' + transX + '%) translateY(-50%)').css('-webkit-transform', 'translateZ(' + transZ + 'px) translateX(' + transX + '%) translateY(-50%)').css('transform', 'translateZ(' + transZ + 'px) translateX(' + transX + '%) translateY(-50%)').css({
                    zIndex: zIndex }).find('img').css({ opacity: 1 - 0.9 / sliceSize * (i + 1), transition: 'opacity ' + self.setting.speed / 1000 + 's' });
            });

            var oloop = Math.floor(this.posterItems.size() / 2);
            leftSlice.each(function (i) {

                var transZ = -self.setting.zStepPX * (oloop - i),
                    transX = -self.setting.posterStepPersent * (oloop - i) - 50;

                $(this).css('-moz-transform', 'translateZ(' + transZ + 'px) translateX(' + transX + '%) translateY(-50%)').css('-webkit-transform', 'translateZ(' + transZ + 'px) translateX(' + transX + '%) translateY(-50%)').css('transform', 'translateZ(' + transZ + 'px) translateX(' + transX + '%) translateY(-50%)').css({ zIndex: i
                }).find('img').css({ opacity: 1 - 0.9 / sliceSize * (oloop - i), transition: 'opacity ' + self.setting.speed / 1000 + 's' });
            });
        },
        setPosterPosMobile: function setPosterPosMobile() {

            var self = this;

            var zIndex = Math.floor(this.posterItems.size() / 2),
                sliceItems = self.posterItems.slice(1),
                sliceSize = sliceItems.length / 2,
                rightSlice = sliceItems.slice(0, sliceSize),
                leftSlice = sliceItems.slice(sliceSize);

            sliceItems.css({
                width: '100%',
                transition: 'all ' + self.setting.speed / 1000 + 's'
            });

            self.posterFirstItem.css('-moz-transform', 'translateZ(0px) translateX(-50%) translateY(-50%)').css('-webkit-transform', 'translateZ(0px) translateX(-50%) translateY(-50%)').css('transform', 'translateZ(0px) translateX(-50%) translateY(-50%)').css({
                position: 'absolute',
                width: '100%',
                zIndex: zIndex * 10,
                transition: 'all ' + self.setting.speed / 1000 + 's'
            }).find('img').css({ opacity: 1, transition: 'opacity ' + self.setting.speed / 1000 + 's' });

            self.postersList.css({
                perspective: 0,
                height: self.posterFirstItem.height()
            }).addClass('ready');

            rightSlice.each(function (i) {
                zIndex--;
                var transZ = 0,
                    transX = 55 * (i + 1);

                $(this).css('-moz-transform', 'translateZ(' + transZ + 'px) translateX(' + transX + '%) translateY(-50%)').css('-webkit-transform', 'translateZ(' + transZ + 'px) translateX(' + transX + '%) translateY(-50%)').css('transform', 'translateZ(' + transZ + 'px) translateX(' + transX + '%) translateY(-50%)').css({ zIndex: zIndex }).find('img').css({ opacity: 1 });
            });

            var oloop = Math.floor(this.posterItems.size() / 2);
            leftSlice.each(function (i) {

                var transZ = 0,
                    transX = -110 * (oloop - i) - 50;

                $(this).css('-moz-transform', 'translateZ(' + transZ + 'px) translateX(' + transX + '%) translateY(-50%)').css('-webkit-transform', 'translateZ(' + transZ + 'px) translateX(' + transX + '%) translateY(-50%)').css('transform', 'translateZ(' + transZ + 'px) translateX(' + transX + '%) translateY(-50%)').css({ zIndex: i
                }).find('img').css({ opacity: 1 });
            });
        },
        setVerticalAlign: function setVerticalAlign(height) {
            var verticalType = this.setting.verticalAlign,
                top = 0;
            if (verticalType === "middle") {
                top = (this.setting.height - height) / 2;
            } else if (verticalType === "top") {
                top = 0;
            } else if (verticalType === "bottom") {
                top = this.setting.height - height;
            } else {
                top = (this.setting.height - height) / 2;
            }

            return top;
        },
        setSettingValue: function setSettingValue() {
            this.posterFirstItem.addClass('current').siblings().removeClass('current');
        },
        getSetting: function getSetting() {
            var setting = this.poster.attr("data-setting");
            if (setting && setting != "") {
                return $.parseJSON(setting);
            } else {
                return [];
            }
        },
        beforeAfterSlider: function beforeAfterSlider() {

            var slideResize = function slideResize(e) {
                e.preventDefault();
                var width = void 0;

                if (e.type.startsWith('touch')) {
                    width = e.originalEvent.touches[0].clientX - $('li.poster-item.current').offset().left;
                } else {
                    width = e.offsetX === undefined ? e.pageX - e.originalEvent.layerX : e.offsetX;
                }

                if (width <= $(this).width()) {
                    $(this).find('.left.image').css('width', width + 'px');
                    $(this).find('.drag-btn').css('width', width + 'px');
                }
            };

            var enableSliderDrag = function enableSliderDrag(e) {
                e.preventDefault();
                $(this).css('cursor', 'ew-resize').on('mousemove.sliderns', slideResize).on('touchmove.sliderns', slideResize);
            };

            var disableSliderDrag = function disableSliderDrag(e) {
                e.preventDefault();
                $(this).css('cursor', 'default').off('mousemove.sliderns').off('touchmove.sliderns');
            };

            this.posterItems.each(function () {
                var item = $(this);
                var width = item.width();
                item.find('.image img').css('width', width + 'px');
                item.find('.left.image').css('width', Math.floor(width * 0.5));
                item.find('.drag-btn').css('width', Math.floor(width * 0.5));

                item.off('click mousedown mouseup touchstart touchend');

                if (item.hasClass('current')) {
                    item.on('click touchstart', slideResize).on('mousedown touchstart', enableSliderDrag).on('mouseup touchend', disableSliderDrag);
                }
            });
        }
    };

    Carousel.init = function (posters) {
        var _this_ = this;
        posters.each(function () {
            new _this_($(this));
        });
    };
    window.Carousel = Carousel;
})(jQuery);