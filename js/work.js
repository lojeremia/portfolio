$(document).ready(function(){

  /* PROGRESS BAR */
    function progress() {

    var windowScrollTop = $(window).scrollTop();
    var docHeight = $(document).height();
    var windowHeight = $(window).height();
    var progress = (windowScrollTop / (docHeight - windowHeight)) * 100;
    var $bgColor = progress > 99 ? '#fff' : '#9064a5';
    var $textColor = progress > 99 ? '#fff' : '#ADADAD';
  
    $('.progress .bar').width(progress + '%').css({ backgroundColor: $bgColor });
    $('h1').text(Math.round(progress) + '%').css({ color: $textColor });
    $('.fill').height(progress + '%').css({ backgroundColor: $bgColor });
  }
  
  progress();
  
  $(document).on('scroll', progress);
});

var currentPagePathName = document.location.pathname;

function getOffset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {
            top: rect.top + scrollTop,
            left: rect.left + scrollLeft
        };
    }

function getElements(type, name, parent, exclusions) {
        if (type === "class" && parent != undefined) {
            let targetChildren,
                result = []
            parent.childNodes.forEach(node => {
                let classesString = node.className;
                if (classesString) {
                    const classesArr = node.className.split(" ");
                    for (let i = 0; i < exclusions.length; i++) {
                        if (classesArr.indexOf(exclusions[i]) > -1) {
                            return false;
                        }
                    }
                    result.push(node)
                }
            });
            return result;
        } else if (type === "id" && parent != undefined) {
            return document.getElementById(name);
        }
    }

    function setAnimation(className, elements) {
        try {
            for ( var i = 0 ; i < elements.length ; i++ ) {
                elements[i].classList.add(className)
            }
        } catch (error) {
            console.log(error)
        }
    }



    // START bolt on animation to elements only editable by IT department, sections, hero titles
    if (document.title != 'Page not found - Bell' && currentPagePathName.indexOf('some-restricted-path') < 0) {
        // REFACTOR ABOVE TO 'boolean of animationAllowed'
        // ANIMATION - move up and fade in page sections, with exceptions
        var sectionsToAnimate = getElements('class', 'container', document.body, ['hero', 'noHero', 'nocontent', 'sub-nav-wrapper'])
        setAnimation('scroll-trigger_move-up-fade-in', sectionsToAnimate);
        // ANIMATION - fade up and move in hero titles
        var titlesToAnimate = getElements('class', 'hero-title', document.querySelector('.hero-text'), []);
        setAnimation('scroll-trigger_move-up-fade-in', titlesToAnimate);
    }



    // will trigger any item with a class prefixed trigger
    function triggerAnimations() {
        var animationTriggers = [["scroll-trigger_move-up", "animation_move-up"],["scroll-trigger_fade-in", "animation_fade-in"],["scroll-trigger_move-up-fade-in", "animation_move-up-fade-in"],["scroll-trigger_move-up-fade-in-sections", "animation_move-up-fade-in-sections"], ["scroll-trigger_move-in-left-fade-in", "animation_move-in-fade-in"],["scroll-trigger_move-in-right-fade-in", "animation_move-in-fade-in"]];
        var docHeight = document.documentElement.clientHeight;
        try {
            let pageBottom = (window.pageYOffset || document.documentElement.scrollTop) + docHeight;
            // modify offset below to change timing
            animationTriggers.forEach(function(triggerSet) {
                var trigger = triggerSet[0];
                var animation = triggerSet[1];
                var elementsToTrigger = document.querySelectorAll('[class*="scroll-trigger"]')
                elementsToTrigger.forEach(function(element) {
                    if (element.className.indexOf(trigger) >= 0 && getOffset(element).top + 50 < pageBottom) {
                        element.classList.add(animation)
                    }
                })
            })
        } catch (error) {
            console.log(error)
        }
    };

    //run once on load
    triggerAnimations();

    document.addEventListener('scroll', function() {
        triggerAnimations()
    })
