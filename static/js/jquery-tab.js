$.fn.tab = function(options) {
    var defaults = {
        event: "mouseover",
        active: 0,
        tips: true,
        tipsPosition: "top",
        swiper: true,
        callback: null
    };
    defaults = $.extend({}, defaults, options);

    this.each(function() {
        var ul = $(this);
        var childrens = $(this).children();
        if (defaults.width) {
            childrens.css({
                width: defaults.width,
                paddingLeft: 0,
                paddingRight: 0

            });
        }
        if (defaults.height) {
            childrens.css({
                height: defaults.height,
                lineHeight: defaults.height + "px",
                paddingTop: 0,
                paddingBottom: 0
            });

        }
        if (defaults.tips) {
            var tips = $("<span class='tips'/>");
            $(this).append(tips);
        }
        childrens.on(defaults.event, function() {
            var ele = $(this);
            var _top = ele.position().top,
            _width = ele.outerWidth(),
            _height = 4;
            if (defaults.tipsPosition == "bottom") {
                _top = ele.outerHeight() - 4;
            }else if(defaults.tipsPosition == "left"){
                _width = 4;
                _height = ele.outerHeight();
            }
            if (defaults.swiper) {
                ul.find(".tips").stop()
                ul.find(".tips").css({
                    width: _width,
                    height : _height
                }).animate({
                    left: ele.position().left,
                    top: _top+8
                }, 300).show();
            } else {
                ul.find(".tips").css({
                    width: _width,
                    height : _height,
                    left: ele.position().left,
                    top: _top
                }).show();
            }
            ele.siblings().removeClass("active");
            ele.addClass("active");
            if ($.isFunction(defaults.callback)) {
                defaults.callback(ele.index(), ele.text())
            }
        }).eq(defaults.active).addClass("active").trigger(defaults.event);
    })
};
