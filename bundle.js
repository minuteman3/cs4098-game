(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var css = "/*!\n *  Font Awesome 4.0.3 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */\n/* FONT PATH\n * -------------------------- */\n@font-face {\n  font-family: 'FontAwesome';\n  src: url('assets/font-awesome-4.0.3/fonts/fontawesome-webfont.eot?v=4.0.3');\n  src: url('assets/font-awesome-4.0.3/fonts/fontawesome-webfont.eot?#iefix&v=4.0.3') format('embedded-opentype'), url('assets/font-awesome-4.0.3/fonts/fontawesome-webfont.woff?v=4.0.3') format('woff'), url('assets/font-awesome-4.0.3/fonts/fontawesome-webfont.ttf?v=4.0.3') format('truetype'), url('assets/font-awesome-4.0.3/fonts/fontawesome-webfont.svg?v=4.0.3#fontawesomeregular') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n.fa {\n  display: inline-block;\n  font-family: FontAwesome;\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n/* makes the font 33% larger relative to the icon container */\n.fa-lg {\n  font-size: 1.3333333333333333em;\n  line-height: 0.75em;\n  vertical-align: -15%;\n}\n.fa-2x {\n  font-size: 2em;\n}\n.fa-3x {\n  font-size: 3em;\n}\n.fa-4x {\n  font-size: 4em;\n}\n.fa-5x {\n  font-size: 5em;\n}\n.fa-fw {\n  width: 1.2857142857142858em;\n  text-align: center;\n}\n.fa-ul {\n  padding-left: 0;\n  margin-left: 2.142857142857143em;\n  list-style-type: none;\n}\n.fa-ul > li {\n  position: relative;\n}\n.fa-li {\n  position: absolute;\n  left: -2.142857142857143em;\n  width: 2.142857142857143em;\n  top: 0.14285714285714285em;\n  text-align: center;\n}\n.fa-li.fa-lg {\n  left: -1.8571428571428572em;\n}\n.fa-border {\n  padding: .2em .25em .15em;\n  border: solid 0.08em #eeeeee;\n  border-radius: .1em;\n}\n.pull-right {\n  float: right;\n}\n.pull-left {\n  float: left;\n}\n.fa.pull-left {\n  margin-right: .3em;\n}\n.fa.pull-right {\n  margin-left: .3em;\n}\n.fa-spin {\n  -webkit-animation: spin 2s infinite linear;\n  -moz-animation: spin 2s infinite linear;\n  -o-animation: spin 2s infinite linear;\n  animation: spin 2s infinite linear;\n}\n@-moz-keyframes spin {\n  0% {\n    -moz-transform: rotate(0deg);\n  }\n  100% {\n    -moz-transform: rotate(359deg);\n  }\n}\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n  }\n}\n@-o-keyframes spin {\n  0% {\n    -o-transform: rotate(0deg);\n  }\n  100% {\n    -o-transform: rotate(359deg);\n  }\n}\n@-ms-keyframes spin {\n  0% {\n    -ms-transform: rotate(0deg);\n  }\n  100% {\n    -ms-transform: rotate(359deg);\n  }\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(359deg);\n  }\n}\n.fa-rotate-90 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);\n  -webkit-transform: rotate(90deg);\n  -moz-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  -o-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.fa-rotate-180 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);\n  -webkit-transform: rotate(180deg);\n  -moz-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  -o-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.fa-rotate-270 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);\n  -webkit-transform: rotate(270deg);\n  -moz-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n  -o-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n.fa-flip-horizontal {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1);\n  -webkit-transform: scale(-1, 1);\n  -moz-transform: scale(-1, 1);\n  -ms-transform: scale(-1, 1);\n  -o-transform: scale(-1, 1);\n  transform: scale(-1, 1);\n}\n.fa-flip-vertical {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1);\n  -webkit-transform: scale(1, -1);\n  -moz-transform: scale(1, -1);\n  -ms-transform: scale(1, -1);\n  -o-transform: scale(1, -1);\n  transform: scale(1, -1);\n}\n.fa-stack {\n  position: relative;\n  display: inline-block;\n  width: 2em;\n  height: 2em;\n  line-height: 2em;\n  vertical-align: middle;\n}\n.fa-stack-1x,\n.fa-stack-2x {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n.fa-stack-1x {\n  line-height: inherit;\n}\n.fa-stack-2x {\n  font-size: 2em;\n}\n.fa-inverse {\n  color: #ffffff;\n}\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\n   readers do not read off random characters that represent icons */\n.fa-glass:before {\n  content: \"\\f000\";\n}\n.fa-music:before {\n  content: \"\\f001\";\n}\n.fa-search:before {\n  content: \"\\f002\";\n}\n.fa-envelope-o:before {\n  content: \"\\f003\";\n}\n.fa-heart:before {\n  content: \"\\f004\";\n}\n.fa-star:before {\n  content: \"\\f005\";\n}\n.fa-star-o:before {\n  content: \"\\f006\";\n}\n.fa-user:before {\n  content: \"\\f007\";\n}\n.fa-film:before {\n  content: \"\\f008\";\n}\n.fa-th-large:before {\n  content: \"\\f009\";\n}\n.fa-th:before {\n  content: \"\\f00a\";\n}\n.fa-th-list:before {\n  content: \"\\f00b\";\n}\n.fa-check:before {\n  content: \"\\f00c\";\n}\n.fa-times:before {\n  content: \"\\f00d\";\n}\n.fa-search-plus:before {\n  content: \"\\f00e\";\n}\n.fa-search-minus:before {\n  content: \"\\f010\";\n}\n.fa-power-off:before {\n  content: \"\\f011\";\n}\n.fa-signal:before {\n  content: \"\\f012\";\n}\n.fa-gear:before,\n.fa-cog:before {\n  content: \"\\f013\";\n}\n.fa-trash-o:before {\n  content: \"\\f014\";\n}\n.fa-home:before {\n  content: \"\\f015\";\n}\n.fa-file-o:before {\n  content: \"\\f016\";\n}\n.fa-clock-o:before {\n  content: \"\\f017\";\n}\n.fa-road:before {\n  content: \"\\f018\";\n}\n.fa-download:before {\n  content: \"\\f019\";\n}\n.fa-arrow-circle-o-down:before {\n  content: \"\\f01a\";\n}\n.fa-arrow-circle-o-up:before {\n  content: \"\\f01b\";\n}\n.fa-inbox:before {\n  content: \"\\f01c\";\n}\n.fa-play-circle-o:before {\n  content: \"\\f01d\";\n}\n.fa-rotate-right:before,\n.fa-repeat:before {\n  content: \"\\f01e\";\n}\n.fa-refresh:before {\n  content: \"\\f021\";\n}\n.fa-list-alt:before {\n  content: \"\\f022\";\n}\n.fa-lock:before {\n  content: \"\\f023\";\n}\n.fa-flag:before {\n  content: \"\\f024\";\n}\n.fa-headphones:before {\n  content: \"\\f025\";\n}\n.fa-volume-off:before {\n  content: \"\\f026\";\n}\n.fa-volume-down:before {\n  content: \"\\f027\";\n}\n.fa-volume-up:before {\n  content: \"\\f028\";\n}\n.fa-qrcode:before {\n  content: \"\\f029\";\n}\n.fa-barcode:before {\n  content: \"\\f02a\";\n}\n.fa-tag:before {\n  content: \"\\f02b\";\n}\n.fa-tags:before {\n  content: \"\\f02c\";\n}\n.fa-book:before {\n  content: \"\\f02d\";\n}\n.fa-bookmark:before {\n  content: \"\\f02e\";\n}\n.fa-print:before {\n  content: \"\\f02f\";\n}\n.fa-camera:before {\n  content: \"\\f030\";\n}\n.fa-font:before {\n  content: \"\\f031\";\n}\n.fa-bold:before {\n  content: \"\\f032\";\n}\n.fa-italic:before {\n  content: \"\\f033\";\n}\n.fa-text-height:before {\n  content: \"\\f034\";\n}\n.fa-text-width:before {\n  content: \"\\f035\";\n}\n.fa-align-left:before {\n  content: \"\\f036\";\n}\n.fa-align-center:before {\n  content: \"\\f037\";\n}\n.fa-align-right:before {\n  content: \"\\f038\";\n}\n.fa-align-justify:before {\n  content: \"\\f039\";\n}\n.fa-list:before {\n  content: \"\\f03a\";\n}\n.fa-dedent:before,\n.fa-outdent:before {\n  content: \"\\f03b\";\n}\n.fa-indent:before {\n  content: \"\\f03c\";\n}\n.fa-video-camera:before {\n  content: \"\\f03d\";\n}\n.fa-picture-o:before {\n  content: \"\\f03e\";\n}\n.fa-pencil:before {\n  content: \"\\f040\";\n}\n.fa-map-marker:before {\n  content: \"\\f041\";\n}\n.fa-adjust:before {\n  content: \"\\f042\";\n}\n.fa-tint:before {\n  content: \"\\f043\";\n}\n.fa-edit:before,\n.fa-pencil-square-o:before {\n  content: \"\\f044\";\n}\n.fa-share-square-o:before {\n  content: \"\\f045\";\n}\n.fa-check-square-o:before {\n  content: \"\\f046\";\n}\n.fa-arrows:before {\n  content: \"\\f047\";\n}\n.fa-step-backward:before {\n  content: \"\\f048\";\n}\n.fa-fast-backward:before {\n  content: \"\\f049\";\n}\n.fa-backward:before {\n  content: \"\\f04a\";\n}\n.fa-play:before {\n  content: \"\\f04b\";\n}\n.fa-pause:before {\n  content: \"\\f04c\";\n}\n.fa-stop:before {\n  content: \"\\f04d\";\n}\n.fa-forward:before {\n  content: \"\\f04e\";\n}\n.fa-fast-forward:before {\n  content: \"\\f050\";\n}\n.fa-step-forward:before {\n  content: \"\\f051\";\n}\n.fa-eject:before {\n  content: \"\\f052\";\n}\n.fa-chevron-left:before {\n  content: \"\\f053\";\n}\n.fa-chevron-right:before {\n  content: \"\\f054\";\n}\n.fa-plus-circle:before {\n  content: \"\\f055\";\n}\n.fa-minus-circle:before {\n  content: \"\\f056\";\n}\n.fa-times-circle:before {\n  content: \"\\f057\";\n}\n.fa-check-circle:before {\n  content: \"\\f058\";\n}\n.fa-question-circle:before {\n  content: \"\\f059\";\n}\n.fa-info-circle:before {\n  content: \"\\f05a\";\n}\n.fa-crosshairs:before {\n  content: \"\\f05b\";\n}\n.fa-times-circle-o:before {\n  content: \"\\f05c\";\n}\n.fa-check-circle-o:before {\n  content: \"\\f05d\";\n}\n.fa-ban:before {\n  content: \"\\f05e\";\n}\n.fa-arrow-left:before {\n  content: \"\\f060\";\n}\n.fa-arrow-right:before {\n  content: \"\\f061\";\n}\n.fa-arrow-up:before {\n  content: \"\\f062\";\n}\n.fa-arrow-down:before {\n  content: \"\\f063\";\n}\n.fa-mail-forward:before,\n.fa-share:before {\n  content: \"\\f064\";\n}\n.fa-expand:before {\n  content: \"\\f065\";\n}\n.fa-compress:before {\n  content: \"\\f066\";\n}\n.fa-plus:before {\n  content: \"\\f067\";\n}\n.fa-minus:before {\n  content: \"\\f068\";\n}\n.fa-asterisk:before {\n  content: \"\\f069\";\n}\n.fa-exclamation-circle:before {\n  content: \"\\f06a\";\n}\n.fa-gift:before {\n  content: \"\\f06b\";\n}\n.fa-leaf:before {\n  content: \"\\f06c\";\n}\n.fa-fire:before {\n  content: \"\\f06d\";\n}\n.fa-eye:before {\n  content: \"\\f06e\";\n}\n.fa-eye-slash:before {\n  content: \"\\f070\";\n}\n.fa-warning:before,\n.fa-exclamation-triangle:before {\n  content: \"\\f071\";\n}\n.fa-plane:before {\n  content: \"\\f072\";\n}\n.fa-calendar:before {\n  content: \"\\f073\";\n}\n.fa-random:before {\n  content: \"\\f074\";\n}\n.fa-comment:before {\n  content: \"\\f075\";\n}\n.fa-magnet:before {\n  content: \"\\f076\";\n}\n.fa-chevron-up:before {\n  content: \"\\f077\";\n}\n.fa-chevron-down:before {\n  content: \"\\f078\";\n}\n.fa-retweet:before {\n  content: \"\\f079\";\n}\n.fa-shopping-cart:before {\n  content: \"\\f07a\";\n}\n.fa-folder:before {\n  content: \"\\f07b\";\n}\n.fa-folder-open:before {\n  content: \"\\f07c\";\n}\n.fa-arrows-v:before {\n  content: \"\\f07d\";\n}\n.fa-arrows-h:before {\n  content: \"\\f07e\";\n}\n.fa-bar-chart-o:before {\n  content: \"\\f080\";\n}\n.fa-twitter-square:before {\n  content: \"\\f081\";\n}\n.fa-facebook-square:before {\n  content: \"\\f082\";\n}\n.fa-camera-retro:before {\n  content: \"\\f083\";\n}\n.fa-key:before {\n  content: \"\\f084\";\n}\n.fa-gears:before,\n.fa-cogs:before {\n  content: \"\\f085\";\n}\n.fa-comments:before {\n  content: \"\\f086\";\n}\n.fa-thumbs-o-up:before {\n  content: \"\\f087\";\n}\n.fa-thumbs-o-down:before {\n  content: \"\\f088\";\n}\n.fa-star-half:before {\n  content: \"\\f089\";\n}\n.fa-heart-o:before {\n  content: \"\\f08a\";\n}\n.fa-sign-out:before {\n  content: \"\\f08b\";\n}\n.fa-linkedin-square:before {\n  content: \"\\f08c\";\n}\n.fa-thumb-tack:before {\n  content: \"\\f08d\";\n}\n.fa-external-link:before {\n  content: \"\\f08e\";\n}\n.fa-sign-in:before {\n  content: \"\\f090\";\n}\n.fa-trophy:before {\n  content: \"\\f091\";\n}\n.fa-github-square:before {\n  content: \"\\f092\";\n}\n.fa-upload:before {\n  content: \"\\f093\";\n}\n.fa-lemon-o:before {\n  content: \"\\f094\";\n}\n.fa-phone:before {\n  content: \"\\f095\";\n}\n.fa-square-o:before {\n  content: \"\\f096\";\n}\n.fa-bookmark-o:before {\n  content: \"\\f097\";\n}\n.fa-phone-square:before {\n  content: \"\\f098\";\n}\n.fa-twitter:before {\n  content: \"\\f099\";\n}\n.fa-facebook:before {\n  content: \"\\f09a\";\n}\n.fa-github:before {\n  content: \"\\f09b\";\n}\n.fa-unlock:before {\n  content: \"\\f09c\";\n}\n.fa-credit-card:before {\n  content: \"\\f09d\";\n}\n.fa-rss:before {\n  content: \"\\f09e\";\n}\n.fa-hdd-o:before {\n  content: \"\\f0a0\";\n}\n.fa-bullhorn:before {\n  content: \"\\f0a1\";\n}\n.fa-bell:before {\n  content: \"\\f0f3\";\n}\n.fa-certificate:before {\n  content: \"\\f0a3\";\n}\n.fa-hand-o-right:before {\n  content: \"\\f0a4\";\n}\n.fa-hand-o-left:before {\n  content: \"\\f0a5\";\n}\n.fa-hand-o-up:before {\n  content: \"\\f0a6\";\n}\n.fa-hand-o-down:before {\n  content: \"\\f0a7\";\n}\n.fa-arrow-circle-left:before {\n  content: \"\\f0a8\";\n}\n.fa-arrow-circle-right:before {\n  content: \"\\f0a9\";\n}\n.fa-arrow-circle-up:before {\n  content: \"\\f0aa\";\n}\n.fa-arrow-circle-down:before {\n  content: \"\\f0ab\";\n}\n.fa-globe:before {\n  content: \"\\f0ac\";\n}\n.fa-wrench:before {\n  content: \"\\f0ad\";\n}\n.fa-tasks:before {\n  content: \"\\f0ae\";\n}\n.fa-filter:before {\n  content: \"\\f0b0\";\n}\n.fa-briefcase:before {\n  content: \"\\f0b1\";\n}\n.fa-arrows-alt:before {\n  content: \"\\f0b2\";\n}\n.fa-group:before,\n.fa-users:before {\n  content: \"\\f0c0\";\n}\n.fa-chain:before,\n.fa-link:before {\n  content: \"\\f0c1\";\n}\n.fa-cloud:before {\n  content: \"\\f0c2\";\n}\n.fa-flask:before {\n  content: \"\\f0c3\";\n}\n.fa-cut:before,\n.fa-scissors:before {\n  content: \"\\f0c4\";\n}\n.fa-copy:before,\n.fa-files-o:before {\n  content: \"\\f0c5\";\n}\n.fa-paperclip:before {\n  content: \"\\f0c6\";\n}\n.fa-save:before,\n.fa-floppy-o:before {\n  content: \"\\f0c7\";\n}\n.fa-square:before {\n  content: \"\\f0c8\";\n}\n.fa-bars:before {\n  content: \"\\f0c9\";\n}\n.fa-list-ul:before {\n  content: \"\\f0ca\";\n}\n.fa-list-ol:before {\n  content: \"\\f0cb\";\n}\n.fa-strikethrough:before {\n  content: \"\\f0cc\";\n}\n.fa-underline:before {\n  content: \"\\f0cd\";\n}\n.fa-table:before {\n  content: \"\\f0ce\";\n}\n.fa-magic:before {\n  content: \"\\f0d0\";\n}\n.fa-truck:before {\n  content: \"\\f0d1\";\n}\n.fa-pinterest:before {\n  content: \"\\f0d2\";\n}\n.fa-pinterest-square:before {\n  content: \"\\f0d3\";\n}\n.fa-google-plus-square:before {\n  content: \"\\f0d4\";\n}\n.fa-google-plus:before {\n  content: \"\\f0d5\";\n}\n.fa-money:before {\n  content: \"\\f0d6\";\n}\n.fa-caret-down:before {\n  content: \"\\f0d7\";\n}\n.fa-caret-up:before {\n  content: \"\\f0d8\";\n}\n.fa-caret-left:before {\n  content: \"\\f0d9\";\n}\n.fa-caret-right:before {\n  content: \"\\f0da\";\n}\n.fa-columns:before {\n  content: \"\\f0db\";\n}\n.fa-unsorted:before,\n.fa-sort:before {\n  content: \"\\f0dc\";\n}\n.fa-sort-down:before,\n.fa-sort-asc:before {\n  content: \"\\f0dd\";\n}\n.fa-sort-up:before,\n.fa-sort-desc:before {\n  content: \"\\f0de\";\n}\n.fa-envelope:before {\n  content: \"\\f0e0\";\n}\n.fa-linkedin:before {\n  content: \"\\f0e1\";\n}\n.fa-rotate-left:before,\n.fa-undo:before {\n  content: \"\\f0e2\";\n}\n.fa-legal:before,\n.fa-gavel:before {\n  content: \"\\f0e3\";\n}\n.fa-dashboard:before,\n.fa-tachometer:before {\n  content: \"\\f0e4\";\n}\n.fa-comment-o:before {\n  content: \"\\f0e5\";\n}\n.fa-comments-o:before {\n  content: \"\\f0e6\";\n}\n.fa-flash:before,\n.fa-bolt:before {\n  content: \"\\f0e7\";\n}\n.fa-sitemap:before {\n  content: \"\\f0e8\";\n}\n.fa-umbrella:before {\n  content: \"\\f0e9\";\n}\n.fa-paste:before,\n.fa-clipboard:before {\n  content: \"\\f0ea\";\n}\n.fa-lightbulb-o:before {\n  content: \"\\f0eb\";\n}\n.fa-exchange:before {\n  content: \"\\f0ec\";\n}\n.fa-cloud-download:before {\n  content: \"\\f0ed\";\n}\n.fa-cloud-upload:before {\n  content: \"\\f0ee\";\n}\n.fa-user-md:before {\n  content: \"\\f0f0\";\n}\n.fa-stethoscope:before {\n  content: \"\\f0f1\";\n}\n.fa-suitcase:before {\n  content: \"\\f0f2\";\n}\n.fa-bell-o:before {\n  content: \"\\f0a2\";\n}\n.fa-coffee:before {\n  content: \"\\f0f4\";\n}\n.fa-cutlery:before {\n  content: \"\\f0f5\";\n}\n.fa-file-text-o:before {\n  content: \"\\f0f6\";\n}\n.fa-building-o:before {\n  content: \"\\f0f7\";\n}\n.fa-hospital-o:before {\n  content: \"\\f0f8\";\n}\n.fa-ambulance:before {\n  content: \"\\f0f9\";\n}\n.fa-medkit:before {\n  content: \"\\f0fa\";\n}\n.fa-fighter-jet:before {\n  content: \"\\f0fb\";\n}\n.fa-beer:before {\n  content: \"\\f0fc\";\n}\n.fa-h-square:before {\n  content: \"\\f0fd\";\n}\n.fa-plus-square:before {\n  content: \"\\f0fe\";\n}\n.fa-angle-double-left:before {\n  content: \"\\f100\";\n}\n.fa-angle-double-right:before {\n  content: \"\\f101\";\n}\n.fa-angle-double-up:before {\n  content: \"\\f102\";\n}\n.fa-angle-double-down:before {\n  content: \"\\f103\";\n}\n.fa-angle-left:before {\n  content: \"\\f104\";\n}\n.fa-angle-right:before {\n  content: \"\\f105\";\n}\n.fa-angle-up:before {\n  content: \"\\f106\";\n}\n.fa-angle-down:before {\n  content: \"\\f107\";\n}\n.fa-desktop:before {\n  content: \"\\f108\";\n}\n.fa-laptop:before {\n  content: \"\\f109\";\n}\n.fa-tablet:before {\n  content: \"\\f10a\";\n}\n.fa-mobile-phone:before,\n.fa-mobile:before {\n  content: \"\\f10b\";\n}\n.fa-circle-o:before {\n  content: \"\\f10c\";\n}\n.fa-quote-left:before {\n  content: \"\\f10d\";\n}\n.fa-quote-right:before {\n  content: \"\\f10e\";\n}\n.fa-spinner:before {\n  content: \"\\f110\";\n}\n.fa-circle:before {\n  content: \"\\f111\";\n}\n.fa-mail-reply:before,\n.fa-reply:before {\n  content: \"\\f112\";\n}\n.fa-github-alt:before {\n  content: \"\\f113\";\n}\n.fa-folder-o:before {\n  content: \"\\f114\";\n}\n.fa-folder-open-o:before {\n  content: \"\\f115\";\n}\n.fa-smile-o:before {\n  content: \"\\f118\";\n}\n.fa-frown-o:before {\n  content: \"\\f119\";\n}\n.fa-meh-o:before {\n  content: \"\\f11a\";\n}\n.fa-gamepad:before {\n  content: \"\\f11b\";\n}\n.fa-keyboard-o:before {\n  content: \"\\f11c\";\n}\n.fa-flag-o:before {\n  content: \"\\f11d\";\n}\n.fa-flag-checkered:before {\n  content: \"\\f11e\";\n}\n.fa-terminal:before {\n  content: \"\\f120\";\n}\n.fa-code:before {\n  content: \"\\f121\";\n}\n.fa-reply-all:before {\n  content: \"\\f122\";\n}\n.fa-mail-reply-all:before {\n  content: \"\\f122\";\n}\n.fa-star-half-empty:before,\n.fa-star-half-full:before,\n.fa-star-half-o:before {\n  content: \"\\f123\";\n}\n.fa-location-arrow:before {\n  content: \"\\f124\";\n}\n.fa-crop:before {\n  content: \"\\f125\";\n}\n.fa-code-fork:before {\n  content: \"\\f126\";\n}\n.fa-unlink:before,\n.fa-chain-broken:before {\n  content: \"\\f127\";\n}\n.fa-question:before {\n  content: \"\\f128\";\n}\n.fa-info:before {\n  content: \"\\f129\";\n}\n.fa-exclamation:before {\n  content: \"\\f12a\";\n}\n.fa-superscript:before {\n  content: \"\\f12b\";\n}\n.fa-subscript:before {\n  content: \"\\f12c\";\n}\n.fa-eraser:before {\n  content: \"\\f12d\";\n}\n.fa-puzzle-piece:before {\n  content: \"\\f12e\";\n}\n.fa-microphone:before {\n  content: \"\\f130\";\n}\n.fa-microphone-slash:before {\n  content: \"\\f131\";\n}\n.fa-shield:before {\n  content: \"\\f132\";\n}\n.fa-calendar-o:before {\n  content: \"\\f133\";\n}\n.fa-fire-extinguisher:before {\n  content: \"\\f134\";\n}\n.fa-rocket:before {\n  content: \"\\f135\";\n}\n.fa-maxcdn:before {\n  content: \"\\f136\";\n}\n.fa-chevron-circle-left:before {\n  content: \"\\f137\";\n}\n.fa-chevron-circle-right:before {\n  content: \"\\f138\";\n}\n.fa-chevron-circle-up:before {\n  content: \"\\f139\";\n}\n.fa-chevron-circle-down:before {\n  content: \"\\f13a\";\n}\n.fa-html5:before {\n  content: \"\\f13b\";\n}\n.fa-css3:before {\n  content: \"\\f13c\";\n}\n.fa-anchor:before {\n  content: \"\\f13d\";\n}\n.fa-unlock-alt:before {\n  content: \"\\f13e\";\n}\n.fa-bullseye:before {\n  content: \"\\f140\";\n}\n.fa-ellipsis-h:before {\n  content: \"\\f141\";\n}\n.fa-ellipsis-v:before {\n  content: \"\\f142\";\n}\n.fa-rss-square:before {\n  content: \"\\f143\";\n}\n.fa-play-circle:before {\n  content: \"\\f144\";\n}\n.fa-ticket:before {\n  content: \"\\f145\";\n}\n.fa-minus-square:before {\n  content: \"\\f146\";\n}\n.fa-minus-square-o:before {\n  content: \"\\f147\";\n}\n.fa-level-up:before {\n  content: \"\\f148\";\n}\n.fa-level-down:before {\n  content: \"\\f149\";\n}\n.fa-check-square:before {\n  content: \"\\f14a\";\n}\n.fa-pencil-square:before {\n  content: \"\\f14b\";\n}\n.fa-external-link-square:before {\n  content: \"\\f14c\";\n}\n.fa-share-square:before {\n  content: \"\\f14d\";\n}\n.fa-compass:before {\n  content: \"\\f14e\";\n}\n.fa-toggle-down:before,\n.fa-caret-square-o-down:before {\n  content: \"\\f150\";\n}\n.fa-toggle-up:before,\n.fa-caret-square-o-up:before {\n  content: \"\\f151\";\n}\n.fa-toggle-right:before,\n.fa-caret-square-o-right:before {\n  content: \"\\f152\";\n}\n.fa-euro:before,\n.fa-eur:before {\n  content: \"\\f153\";\n}\n.fa-gbp:before {\n  content: \"\\f154\";\n}\n.fa-dollar:before,\n.fa-usd:before {\n  content: \"\\f155\";\n}\n.fa-rupee:before,\n.fa-inr:before {\n  content: \"\\f156\";\n}\n.fa-cny:before,\n.fa-rmb:before,\n.fa-yen:before,\n.fa-jpy:before {\n  content: \"\\f157\";\n}\n.fa-ruble:before,\n.fa-rouble:before,\n.fa-rub:before {\n  content: \"\\f158\";\n}\n.fa-won:before,\n.fa-krw:before {\n  content: \"\\f159\";\n}\n.fa-bitcoin:before,\n.fa-btc:before {\n  content: \"\\f15a\";\n}\n.fa-file:before {\n  content: \"\\f15b\";\n}\n.fa-file-text:before {\n  content: \"\\f15c\";\n}\n.fa-sort-alpha-asc:before {\n  content: \"\\f15d\";\n}\n.fa-sort-alpha-desc:before {\n  content: \"\\f15e\";\n}\n.fa-sort-amount-asc:before {\n  content: \"\\f160\";\n}\n.fa-sort-amount-desc:before {\n  content: \"\\f161\";\n}\n.fa-sort-numeric-asc:before {\n  content: \"\\f162\";\n}\n.fa-sort-numeric-desc:before {\n  content: \"\\f163\";\n}\n.fa-thumbs-up:before {\n  content: \"\\f164\";\n}\n.fa-thumbs-down:before {\n  content: \"\\f165\";\n}\n.fa-youtube-square:before {\n  content: \"\\f166\";\n}\n.fa-youtube:before {\n  content: \"\\f167\";\n}\n.fa-xing:before {\n  content: \"\\f168\";\n}\n.fa-xing-square:before {\n  content: \"\\f169\";\n}\n.fa-youtube-play:before {\n  content: \"\\f16a\";\n}\n.fa-dropbox:before {\n  content: \"\\f16b\";\n}\n.fa-stack-overflow:before {\n  content: \"\\f16c\";\n}\n.fa-instagram:before {\n  content: \"\\f16d\";\n}\n.fa-flickr:before {\n  content: \"\\f16e\";\n}\n.fa-adn:before {\n  content: \"\\f170\";\n}\n.fa-bitbucket:before {\n  content: \"\\f171\";\n}\n.fa-bitbucket-square:before {\n  content: \"\\f172\";\n}\n.fa-tumblr:before {\n  content: \"\\f173\";\n}\n.fa-tumblr-square:before {\n  content: \"\\f174\";\n}\n.fa-long-arrow-down:before {\n  content: \"\\f175\";\n}\n.fa-long-arrow-up:before {\n  content: \"\\f176\";\n}\n.fa-long-arrow-left:before {\n  content: \"\\f177\";\n}\n.fa-long-arrow-right:before {\n  content: \"\\f178\";\n}\n.fa-apple:before {\n  content: \"\\f179\";\n}\n.fa-windows:before {\n  content: \"\\f17a\";\n}\n.fa-android:before {\n  content: \"\\f17b\";\n}\n.fa-linux:before {\n  content: \"\\f17c\";\n}\n.fa-dribbble:before {\n  content: \"\\f17d\";\n}\n.fa-skype:before {\n  content: \"\\f17e\";\n}\n.fa-foursquare:before {\n  content: \"\\f180\";\n}\n.fa-trello:before {\n  content: \"\\f181\";\n}\n.fa-female:before {\n  content: \"\\f182\";\n}\n.fa-male:before {\n  content: \"\\f183\";\n}\n.fa-gittip:before {\n  content: \"\\f184\";\n}\n.fa-sun-o:before {\n  content: \"\\f185\";\n}\n.fa-moon-o:before {\n  content: \"\\f186\";\n}\n.fa-archive:before {\n  content: \"\\f187\";\n}\n.fa-bug:before {\n  content: \"\\f188\";\n}\n.fa-vk:before {\n  content: \"\\f189\";\n}\n.fa-weibo:before {\n  content: \"\\f18a\";\n}\n.fa-renren:before {\n  content: \"\\f18b\";\n}\n.fa-pagelines:before {\n  content: \"\\f18c\";\n}\n.fa-stack-exchange:before {\n  content: \"\\f18d\";\n}\n.fa-arrow-circle-o-right:before {\n  content: \"\\f18e\";\n}\n.fa-arrow-circle-o-left:before {\n  content: \"\\f190\";\n}\n.fa-toggle-left:before,\n.fa-caret-square-o-left:before {\n  content: \"\\f191\";\n}\n.fa-dot-circle-o:before {\n  content: \"\\f192\";\n}\n.fa-wheelchair:before {\n  content: \"\\f193\";\n}\n.fa-vimeo-square:before {\n  content: \"\\f194\";\n}\n.fa-turkish-lira:before,\n.fa-try:before {\n  content: \"\\f195\";\n}\n.fa-plus-square-o:before {\n  content: \"\\f196\";\n}\n";(require('lessify'))(css); module.exports = css;
},{"lessify":35}],2:[function(require,module,exports){
module.exports=[
    {
        "coords": [
            37.6788056,
            -122.2880726
        ],
        "name": "San Francisco",
        "morale": 100,
        "productivity": 200,
        "costPerWeek": 12000,
        "language": "english",
        "west": true,
        "highContext": false,
        "nationCulture": "american",
        "organizationalCulture": "undefined"
    },
    {
        "coords": [
            40.43,
            -74
        ],
        "name": "New York",
        "morale": 100,
        "productivity": 125,
        "costPerWeek": 7500,
        "language": "english",
        "west": true,
        "highContext": false,
        "nationCulture": "american",
        "organizationalCulture": "undefined"
    },
    {
        "coords": [
            53.24,
            -6.6
        ],
        "name": "Dublin",
        "morale": 100,
        "productivity": 100,
        "costPerWeek": 6000,
        "language": "english",
        "west": true,
        "highContext": false,
        "nationCulture": "european",
        "organizationalCulture": "undefined"
    },
    {
        "coords": [
            31.12,
            121.3
        ],
        "name": "Shanghai",
        "morale": 100,
        "productivity": 75,
        "costPerWeek": 4500,
        "language": "english",
        "west": true,
        "highContext": false,
        "nationCulture": "asian",
        "organizationalCulture": "undefined"
    },
    {
        "coords": [
            18.975,
            72.8258
        ],
        "name": "Mumbai",
        "morale": 100,
        "productivity": 20,
        "costPerWeek": 1200,
        "language": "english",
        "west": true,
        "highContext": false,
        "nationCulture": "asian",
        "organizationalCulture": "undefined"
    }
]
},{}],3:[function(require,module,exports){
module.exports={
    "information": "On this screen, you find the GAME MAP.<br />It has CITIES where you can allocate TEAMS.<br />To allocate a TEAM, just select a CITY, and it will be set up for you.<br />Be careful, though. Each TEAM costs money from your BUDGET based on which CITY it's in.<br />TEAMS are groups of developers that do all your work for you. <br />TEAMS are affected by things like MORALE and PRODUCTIVITY in each CITY.<br />The BUDGET value is the maximum amount you want to spend on the PROJECT.<br />",
    "eventRate": 2,
    "timerDuration": 1000,
    "moraleFuzzification": [
        {
            "option": "low",
            "values": [
                0,
                20,
                30
            ]
        },
        {
            "option": "med",
            "values": [
                40,
                50,
                80
            ]
        },
        {
            "option": "high",
            "values": [
                45,
                50,
                100
            ]
        }
    ],
    "completionFuzzification": [
        {
            "option": "design",
            "values": [
                -1,
                0,
                20
            ]
        },
        {
            "option": "implementation",
            "values": [
                10,
                20,
                35
            ]
        },
        {
            "option": "unittest",
            "values": [
                25,
                35,
                45
            ]
        },
        {
            "option": "integration",
            "values": [
                35,
                45,
                60
            ]
        },
        {
            "option": "systemtest",
            "values": [
                50,
                60,
                75
            ]
        },
        {
            "option": "deployment",
            "values": [
                65,
                75,
                90
            ]
        },
        {
            "option": "acceptance",
            "values": [
                85,
                100,
                101
            ]
        }
    ],
    "payFuzzification": [
        {
            "option": "low",
            "values": [
                0,
                4000,
                5000
            ]
        },
        {
            "option": "med",
            "values": [
                4500,
                7000,
                10000
            ]
        },
        {
            "option": "high",
            "values": [
                6500,
                7000,
                9007199254740992
            ]
        }
    ],
    "geoDistFuzzification": [
        {
            "option": "low",
            "values": [
                0,
                100,
                200
            ]
        },
        {
            "option": "med",
            "values": [
                200,
                500,
                1000
            ]
        },
        {
            "option": "high",
            "values": [
                1000,
                15000,
                30000
            ]
        }
    ],
    "culturalDistFuzzification": [
        {
            "option": "low",
            "values": [
                0,
                1,
                2
            ]
        },
        {
            "option": "med",
            "values": [
                2,
                4,
                5
            ]
        },
        {
            "option": "high",
            "values": [
                4,
                6,
                10
            ]
        }
    ]
}
},{}],4:[function(require,module,exports){
module.exports=[
    {
        "conditions": {},
        "message": "The manager at $site has slipped on a banana peel and died. What do you do?",
        "effects": {
            "morale": -20
        },
        "target": "city",
        "actions": [
            {
                "message": "Hire Manager",
                "effects": {
                    "money": -15000,
                    "stall": 1
                }
            },
            {
                "message": "Wing it",
                "effects": {
                    "stall": 4
                }
            }
        ]
    },
    {
        "conditions": {},
        "message": "Your stakeholders have come for an inspection of the Product.<br /> They Arrive in $site on Monday",
        "effects": {
            "stall": 1
        },
        "target": "city",
        "actions": []
    },
    {
        "conditions": {},
        "message": "An Industry Event at $site left some potential investors excited about your project.<br /> An Angel Investor wants to help the Company. <br />Extra investment! + $10,000",
        "effects": {
            "money": 10000
        },
        "target": "city",
        "actions": []
    },
    {
        "conditions": {
            "morale": [
                "low",
                "med"
            ],
            "pay": [
                "low"
            ]
        },
        "message": "Your employees at $site are threatening to strike unless you raise pay, what will you do?",
        "effects": {},
        "target": "city",
        "actions": [
            {
                "message": "Raise pay",
                "effects": {
                    "money": -2000,
                    "morale": 20
                }
            },
            {
                "message": "Nothing",
                "effects": {
                    "stall": 2,
                    "morale": -20
                }
            }
        ]
    },
    {
        "conditions": {
            "morale": [
                "low"
            ],
            "progress": [
                "design"
            ]
        },
        "message": "$module failed to pass design criteria, what do you do?",
        "effects": {
            "progress": 0
        },
        "target": "module",
        "actions": [
            {
                "message": "Encourage overtime",
                "effects": {
                    "money": -10000,
                    "morale": -5
                }
            },
            {
                "message": "Nothing",
                "effects": {
                    "stall": 1
                }
            }
        ]
    },
    {
        "conditions": {
            "morale": [
                "low",
                "med"
            ],
            "progress": [
                "implementation"
            ]
        },
        "message": "Implementation of $module has failed, what do you do?",
        "effects": {
            "progress": 15
        },
        "target": "module",
        "actions": [
            {
                "message": "Encourage overtime",
                "effects": {
                    "money": -10000,
                    "morale": -10
                }
            },
            {
                "message": "Nothing",
                "effects": {
                    "stall": 2
                }
            }
        ]
    },
    {
        "conditions": {
            "morale": [
                "low"
            ],
            "progress": [
                "unittest"
            ]
        },
        "message": "It was discovered that $module has no Unit Tests, the module needs to be tested!",
        "effects": {
            "progress": 15
        },
        "target": "module",
        "actions": [
            {
                "message": "Encourage overtime",
                "effects": {
                    "money": -10000,
                    "morale": -15
                }
            },
            {
                "message": "Nothing",
                "effects": {
                    "stall": 1
                }
            }
        ]
    },
    {
        "conditions": {
            "morale": [
                "low"
            ],
            "progress": [
                "integration"
            ]
        },
        "message": "$module fails to integrate, what do you do?",
        "effects": {
            "progress": 15
        },
        "target": "module",
        "actions": [
            {
                "message": "Encourage overtime",
                "effects": {
                    "money": -10000,
                    "morale": -20
                }
            },
            {
                "message": "Nothing",
                "effects": {
                    "stall": 1
                }
            }
        ]
    },
    {
        "conditions": {
            "morale": [
                "low"
            ],
            "progress": [
                "systemtest"
            ]
        },
        "message": "System tests on $module did not pass inspection, what do you do?",
        "effects": {
            "progress": 50
        },
        "target": "module",
        "actions": [
            {
                "message": "Encourage overtime",
                "effects": {
                    "money": -10000,
                    "morale": -15
                }
            },
            {
                "message": "Nothing",
                "effects": {
                    "stall": 1
                }
            }
        ]
    },
    {
        "conditions": {
            "morale": [
                "low"
            ],
            "progress": [
                "deployment"
            ]
        },
        "message": "$module fails to deploy correctly, what do you do?",
        "effects": {
            "progress": 65
        },
        "target": "module",
        "actions": [
            {
                "message": "Encourage overtime",
                "effects": {
                    "money": -10000,
                    "morale": -10
                }
            },
            {
                "message": "Nothing",
                "effects": {
                    "stall": 1
                }
            }
        ]
    },
    {
        "conditions": {
            "morale": [
                "low"
            ],
            "pay": [
                "high"
            ],
            "progress": [
                "acceptance"
            ]
        },
        "message": "$module fails acceptance tests, what do you do?",
        "effects": {
            "progress": 0
        },
        "target": "module",
        "actions": [
            {
                "message": "Encourage overtime",
                "effects": {
                    "money": -10000,
                    "morale": -5
                }
            },
            {
                "message": "Nothing",
                "effects": {
                    "stall": 1
                }
            }
        ]
    }
]
},{}],5:[function(require,module,exports){
module.exports={
    "message": "These pre-emptive interventions are available for your Project. What would you like to do?",
    "target": "intervention",
    "effects":{},
    "actions": [
        {
            "message": "Two Week Company Vacation",
            "effects": {
                "stall": 2,
                "morale": 100,
                "money": -10000
            }
        },
        {
            "message": "Implement Face-to-Face Meetings",
            "effects": {
                "morale": 5,
                "distance": -80,
                "culture": -40,
                "money": -40000
            }
        },
        {
            "message": "Draft Company Employee Exchange Program",
            "effects": {
                "morale": 5,
                "distance": -10,
                "culture": -50,
                "money": -20000
            }
        },
        {
            "message": "Weekly Video Conferences",
            "effects": {
                "morale": -5,
                "distance": -10,
                "money": -1000
            }
        },
        {
            "message": "Cultural Training",
            "effects": {
                "culture": -5,
                "money": -1000
            }
        },
        {
            "message": "Reduce Interaction Between Teams",
            "effects": {
                "morale": -10,
                "culture": -5
            }
        },
        {
            "message": "Do nothing"
        }
    ]
}
},{}],6:[function(require,module,exports){
module.exports={
    "projects": [
        {
            "name": "R&D Project",
            "budget": 50000,
            "eventRate": 5,
            "duration": 8,
            "revenue": {
                "months": 3,
                "amount": 40000
            },
            "modules": [
                {
                    "name": "AI Engine",
                    "cost": 600
                },
                {
                    "name": "Real-time Physics",
                    "cost": 600
                }
            ],
            "dialog": "This Project has two modules, make sure to allocate resources evenly for this Project to succeed. Be careful about over-spending on this short Project."
        },
        {
            "name": "RPG Game",
            "budget": 1000000,
            "duration": 72,
            "revenue": {
                "months": 16,
                "amount": 125000
            },
            "modules": [
                {
                    "name": "AI Engine",
                    "cost": 6000
                },
                {
                    "name": "UI Design",
                    "cost": 2000
                },
                {
                    "name": "Character Creation",
                    "cost": 1400
                },
                {
                    "name": "Procedural Generation",
                    "cost": 2500
                },
                {
                    "name": "Story Design",
                    "cost": 2500
                }
            ],
            "dialog": "This Project has five modules, each with a different cost, make sure to allocate lots of resources to AI Engine for this Project to succeed. Character Creation shouldn't take long for this Project."
        },
        {
            "name": "Software Simulator",
            "budget": 1000000,
            "duration": 24,
            "revenue": {
                "months": 36,
                "amount": 50000
            },
            "modules": [
                {
                    "name": "Time Simulator",
                    "cost": 8000
                },
                {
                    "name": "Event Generation",
                    "cost": 3000
                },
                {
                    "name": "UX Design",
                    "cost": 3750
                }
            ],
            "dialog": "This Project has three modules, each with a different cost. Simulating Time will be the most difficult task for this Project."
        },
        {
            "name": "Accounting Software",
            "budget": 720000,
            "duration": 40,
            "revenue": {
                "months": 24,
                "amount": 100000
            },
            "modules": [
                {
                    "name": "Legal Compliance",
                    "cost": 8000
                },
                {
                    "name": "User Interface",
                    "cost": 4000
                },
                {
                    "name": "Advanced Algorithms",
                    "cost": 3000
                }
            ],
            "dialog": "This Project has three modules, each with a different cost, Legal Compliance is really important in the Accounting Industry, and Normally takes up most of the effort."
        }
    ]
}
},{}],7:[function(require,module,exports){
function loadFuzzyEngine(n){for(var i=[getMemValues(config.moraleFuzzification),getMemValues(config.payFuzzification),getMemValues(config.completionFuzzification),getMemValues(config.geoDistFuzzification),getMemValues(config.culturalDistFuzzification)],t=[],e=0;e<n.length;e++){var o=i.map(function(){return[0]});"morale"in n[e].conditions&&(o[0]=getConditions(n[e].conditions.morale,config.moraleFuzzification)),"pay"in n[e].conditions&&(o[1]=getConditions(n[e].conditions.pay,config.payFuzzification)),"progress"in n[e].conditions&&(o[2]=getConditions(n[e].progress,config.completionFuzzification)),"geoDistance"in n[e].conditions&&(o[3]=getConditions(n[e].progress,config.geoDistFuzzification)),"culturalDistance"in n[e].conditions&&(o[3]=getConditions(n[e].progress,config.culturalDistFuzzification)),t.push(o)}return new FuzzyEngine(t,i)}function getMemValues(n){return values=n.map(function(n){return n.values})}function getConditions(n,i){return n?n.map(function(n){for(var t=0;t<i.length;t++)if(i[t].option==n)return t+1;return 0}):[0]}var FuzzyEngine=require("./fuzzyEngine.js"),config=require("../../config/client-config.json"),deepcopy=require("deepcopy"),EventGenerator=function(n,i){this.events=n||[],this.rate=i/100,this.lastEvent=1,this.engine=loadFuzzyEngine(this.events)};EventGenerator.prototype.getEvent=function(n){return Math.random()+.02*this.lastEvent>1-this.rate?(this.lastEvent=1,deepcopy(this.events[this.engine.run(n,Math.random())])):(this.lastEvent+=1,null)},module.exports=EventGenerator;
},{"../../config/client-config.json":3,"./fuzzyEngine.js":9,"deepcopy":31}],8:[function(require,module,exports){
function makeMembershipFunctions(e){for(var n=new Array(e.length),r=0;r<e.length;r++){n[r]=new Array(e[r].length+1),n[r][0]=makeAnyOption();for(var t=1;t<e[r].length+1;t++)n[r][t]=makeTrim(e[r][t-1])}return n}function makeAnyOption(){var e={};return e.any=!0,e}function makeTrim(e){var n={};return n.x0=e[0],n.x1=e[1],n.x2=e[1],n.x3=e[2],n}function membership(e,n){if(e.any)return 1;var r=0,t=n;return r=t<=e.x0?0:t>=e.x3?0:t>=e.x1&&t<=e.x2?1:t>e.x0&&t<e.x1?t/(e.x1-e.x0)-e.x0/(e.x1-e.x0):-t/(e.x3-e.x2)+e.x3/(e.x3-e.x2)}var Fuzzifier=function(e){this.memFuncs=makeMembershipFunctions(e)};Fuzzifier.prototype.getMembershipsValues=function(e){for(var n=new Array(this.memFuncs.length),r=0;r<e.length;r++){n[r]=[];for(var t=0;t<this.memFuncs[r].length;t++)n[r][t]=membership(this.memFuncs[r][t],e[r])}return n},module.exports=Fuzzifier;
},{}],9:[function(require,module,exports){
function GetWeightedRules(e,i,r,t,n,s){for(var u=0,l=e.count(),f=0;f<e.length;f++)if(e.get(f)){var h=GetWeight(i,s[f]);diff=n-t[f],(diff>l/2||0===t[f])&&(h*=diff/n,u+=h,r.push([h,f]))}return u}function GetRuleToCall(e,i,r){var t=0;r*=i;for(var n=0;n<e.length;n++)if(t+=e[n][0],t>=r)return e[n][1];throw"no rule was called"}function GetNonZeroVariables(e){for(var i=[],r=0;r<e.length;r++){i[r]=[];for(var t=0;t<e[r].length;t++)e[r][t]>0&&i[r].push(t)}return i}function GetWeight(e,i){for(var r=100,t=0;t<i.length;t++){for(var n=0,s=0;s<i[t].length;s++){var u=e[t][i[t][s]];u>n&&(n=u)}r>n&&(r=n)}return r}var InferenceEngine=require("./inferenceEngine.js"),Fuzzifier=require("./fuzzifier.js"),FuzzyEngine=function(e,i){this.rules=e.slice(0),this.memfuncs=i.slice(0),this.vars=this.memfuncs.map(function(e){return e.length}),this.tick=0,this.rulesFired=Array.apply(null,new Array(this.rules.length)).map(Number.prototype.valueOf,0),this.fuzzifier=new Fuzzifier(this.memfuncs),this.engine=new InferenceEngine(this.vars,this.rules)};FuzzyEngine.prototype.run=function(e,i){this.tick++;var r=this.fuzzifier.getMembershipsValues(e),t=GetNonZeroVariables(r),n=this.engine.getRulesToFire(t),s=[],u=GetWeightedRules(n,r,s,this.rulesFired,this.tick,this.rules),l=GetRuleToCall(s,u,i);return this.rulesFired[l]=this.tick,l},module.exports=FuzzyEngine;
},{"./fuzzifier.js":8,"./inferenceEngine.js":10}],10:[function(require,module,exports){
var BitArray=require("bit-array"),InferenceEngine=function(t,e){this.varOptBitMatches=new Array(t.length),this.ruleCount=e.length,this.varOptCnts=t;for(var r=0;r<t.length;r++){this.varOptBitMatches[r]=new Array(t[r]);for(var n=0;n<t[r]+1;n++)this.varOptBitMatches[r][n]=new BitArray(this.ruleCount)}for(var i=0;i<e.length;i++)for(var a=0;a<e[i].length;a++)for(var o=0;o<e[i][a].length;o++)this.varOptBitMatches[a][e[i][a][o]].set(i,!0)};InferenceEngine.prototype.getRulesToFire=function(t){if(t.length!=this.varOptCnts.length)throw"Wrong number of variables supplied";for(var e=this.GetRulesToFireInVariable(0,t[0]),r=1;r<t.length;r++)e.and(this.GetRulesToFireInVariable(r,t[r]));return e},InferenceEngine.prototype.GetRulesToFireInVariable=function(t,e){for(var r=new BitArray(this.ruleCount),n=0;n<e.length;n++){var i=e[n];if(i>=this.varOptCnts[t]+1)throw"Option out of range";r.or(this.varOptBitMatches[t][i])}return r},module.exports=InferenceEngine;
},{"bit-array":26}],11:[function(require,module,exports){
var client=require("./../config/client-config.json"),Module=function(e,t,o){this.progress=0,this.developersPerCity=e,this.cost=t+.25*t*(Math.random()-.5),this.name=o,this.stalled=0,this.name=o,this.weeks=0};Module.prototype.getPercentComplete=function(){return this.progress/this.cost*100},Module.prototype.setPercentComplete=function(e){this.progress=e/100*this.cost},Module.prototype.done=function(){return this.progress>=this.cost},Module.prototype.stall=function(e){this.stalled=e},Module.prototype.advance=function(e,t){if(null!=t){var o=this.getStage();if(t!=o)return o}if(this.stalled>0)return void this.stalled--;if(!this.done()){var r=0,i=this.developersPerCity;Object.keys(i).forEach(function(t){r+=e[t].progress(i[t])}),this.progress+=r,this.progress>this.cost&&(this.progress=this.cost)}if(null!=t){var s=client.completionFuzzification[t].values[2],n=this.getPercentComplete();return n>s&&this.setPercentComplete(s+1),this.getStage()}},Module.prototype.calculateMaximalProgressPerCycle=function(e){var t=this.developersPerCity,o=0;return Object.keys(t).forEach(function(r){o+=e[r].idealProgress(t[r])}),o},Module.prototype.getCost=function(e){var t=this.developersPerCity,o=0;return Object.keys(this.developersPerCity).forEach(function(r){var i=t[r];o+=e[r].cost(i)}),o},Module.prototype.getStage=function(){for(var e=client.completionFuzzification,t=this.getPercentComplete(),o=0;o<e.length;o++)if(t>=e[o].values[0]&&t<=e[o].values[2])return o},Module.prototype.getStageName=function(){for(var e=client.completionFuzzification,t=this.getPercentComplete(),o=0;o<e.length;o++)if(t>=e[o].values[0]&&t<=e[o].values[2])return e[o].option},Module.prototype.hasCity=function(e){return this.developersPerCity[e]>0},Module.prototype.isStalled=function(){return!this.done()&&this.stalled>0},Module.prototype.isBehindSchedule=function(e,t){var o=this.getPercentComplete();return o<this.calculateMaximalProgressPerCycle(t)*e},module.exports=Module;
},{"./../config/client-config.json":3}],12:[function(require,module,exports){
function timerLoop(){var e=!0;modStages=[],modules.forEach(function(n){waterfall?modStages.push(n.advance(cities,stage)):n.advance(cities),e=e&&n.done()});for(var n in cities)cities[n].advance();waterfall&&(stage=Math.min.apply(null,modStages)),updateFunc(modules,cities);var t=getRandomModule(modules);if(!t.done()){var u=cities[utils.randomCity(t)],a=gen.getEvent([u.morale,u.costPerDeveloper,t.getPercentComplete(),u.getGeoDist(),u.getCulturalDist()]);a&&(a.module=t,a.city=u,eventFunc(a))}e&&(doneFunc&&doneFunc(modules),stop())}function start(e,n,t,u,a,l,o,r){return modules=e,cities=n,updateFunc=t,doneFunc=u,eventFunc=a,intervalID=setInterval(timerLoop,config.timerDuration),gen=new EventGenerator(l,o),waterfall=r,intervalID}function unpause(){paused&&modules&&cities&&updateFunc&&doneFunc&&(paused=!1,intervalID=setInterval(timerLoop,config.timerDuration))}function pause(){paused?unpause():(paused=!0,clearInterval(intervalID))}function stop(){clearInterval(intervalID),modules=null,cities=null,doneFunc=null,updateFunc=null,intervalID=null,paused=!1}function getRandomModule(e){return e[Math.floor(Math.random()*e.length)]}var config=require("./../config/client-config.json"),Module=require("./Module.js"),EventGenerator=require("./EventGenerator/EventGenerator.js"),utils=require("./utils.js"),events=require("./events.js"),modules=null,cities=null,doneFunc=null,updateFunc=null,intervalID=null,gen=null,eventFunc=null,paused=!1,stage=0;module.exports={start:start,pause:pause,stop:stop,unpause:unpause};
},{"./../config/client-config.json":3,"./EventGenerator/EventGenerator.js":7,"./Module.js":11,"./events.js":15,"./utils.js":21}],13:[function(require,module,exports){
function onlabelShow(e,t,a){t.css("visibility","visible");var s=cities[a];if(curGameState===GameStates.SELECT_TEAMS)t.html("<strong>"+s.name+"</strong><br/>Morale: "+s.morale+"%<br/>Productivity: "+s.productivity+"%<br/>Cost per week: $"+s.costPerWeek+"<br/>");else if(curGameState===GameStates.PROGRESS){var o=[];modules.forEach(function(e){Object.keys(e.developersPerCity).forEach(function(e){o.push(e)})}),utils.contains(o,s.name)?t.html("Make an inquiry<br />into "+s.name):t.css("visibility","hidden")}else curGameState===GameStates.SELECT_HOME&&t.html("Select <strong>"+s.name+"</strong><br/>as your Home City ");maps.fixOverLap(a,t)}function inquire(e,t){if(modal.hidemodal(),curGameState===GameStates.PROGRESS){var a=gameData.citiesState[t];modal.dialog(a.inquire(e))}}function selectCity(e,t){if(curGameState===GameStates.PROGRESS){var a=[];if(modules.forEach(function(e){Object.keys(e.developersPerCity).forEach(function(e){a.push(e)})}),utils.contains(a,cities[t].name)){var s=cities[t];ProcessSim.pause(),modal.showInquire(s.name,['Send "are you on schedule?" email','Send "please report status of modules" email','Send "please list completed tasks" email',"Hold video conference","Make site visit"])}}else curGameState===GameStates.SELECT_TEAMS?teamPicker.addExtraDeveloperToCity(t,gameData):curGameState===GameStates.SELECT_HOME&&(sidebar.setListAllocation(selectedProject.modules.map(function(e){var t={};return t.name=e.name,t.cost=100*e.cost/selectedProject.cost,t.estimatedCost=e.cost,t.allocatedCost=0,t}),!0),sidebar.setHomeCity(cities[t].name),gameData.homeCity=cities[t],maps.makeHomeCity(t),sidebar.setListItemActive(0),curGameState=GameStates.SELECT_TEAMS)}function startSimulation(){if(curGameState===GameStates.SELECT_TEAMS){var e=sidebar.getActiveListItem(),t=selectedProject.modules[e].name;if(teamPicker.selectModule(t,e),!teamPicker.allModulesHaveTeams())return void modal.dialog("There needs to be at least one team for every module");curGameState=GameStates.PROGRESS,sidebar.setListAllocation([],!1),sidebar.showSelectTeams(!1),sidebar.setTitle(selectedProject.name),sidebar.showProgressState(!0),maps.runState(),startLoop(),sidebar.setButtonText("Interventions")}else if(curGameState===GameStates.PROGRESS){var a=deepcopy(interventions);a.city={name:""},a.module={name:""},showEvent(a)}}function selectProject(){$("#startScreen").hide();var e="<h1> Select A Project</h1>";e+=modal.makeChoices(projects,'<div id="project-budget" class="project"></div><div id="project-duration" class="project"></div><div id="project-revenue" class="project"></div><div id="project-description" class="project"></div>',"btn-projects",!0),modal.showmodal(e)}function projectdescription(e){$("#project-budget").html("Initial Budget: € "+utils.commafy(projects[e].budget)),$("#project-revenue").html("Predicted Revenue: € "+utils.commafy(projects[e].revenue.amount*projects[e].revenue.months)),$("#project-duration").html("Due in: "+projects[e].duration+" weeks"),$("#project-description").html(projects[e].dialog)}function selectType(e){modal.hidemodal(),e=e||0,modal.makeTypeChoice(e,["agile","waterfall"])}function startGame(e,t){e=e||0,modal.hidemodal(),isWaterFall="waterfall"===t,selectedProject=projects[e],selectedProject.cost=utils.calculateCost(selectedProject),$("#btn-options").show(),$("#map").show(),$("#map").empty(),$("#jvectormap-label").empty(),maps.buildmap(),curGameState=GameStates.SELECT_HOME,teamPicker.init(gameData,cities,selectedProject.modules,selectedProject.budget),sidebar.show(),sidebar.setButtonText("Start"),sidebar.setBudget(selectedProject.budget),sidebar.setDueDate(selectedProject.duration),sidebar.setListAllocation(selectedProject.modules.map(function(e){var t={};return t.name=e.name,t.estimatedCost=e.cost,t.allocatedCost=0,t}),!1),null===localStorage.getItem("firstTime")&&(modal.dialog(client.information+"<br/>Access this Information at any time from the Options Menu."),localStorage.setItem("firstTime",1)),moduleProgressOverTime=selectedProject.modules.map(function(){return[0]}),moduleProgressOverTime.push([0])}function showEvent(e){localStorage.getItem("audioEnabled")&&($("#event").get(0).load(),$("#event").get(0).play(),$("#eventmusic").get(0).load(),$("#eventmusic").get(0).play(),$("#music").get(0).pause()),ProcessSim.pause(),events.trackEvent(e),modal.showEvent(e,currentWeek)}function startLoop(){gameData.projectBudget=Number(selectedProject.budget),gameData.weeksTilDueDate=selectedProject.duration,sidebar.setCash(gameData.projectBudget),sidebar.setWeeks(gameData.weeksTilDueDate),sidebar.setProgress(0),modules=selectedProject.modules.map(function(e){return new Module(teamPicker.getDevelopers(e.name),e.cost,e.name)}),gameData.citiesState={},cities.forEach(function(e){var t=modules.filter(function(t){return t.hasCity(e.name)});gameData.citiesState[e.name]=new City(e,gameData.homeCity,t)});var e=selectedProject.eventRate||client.eventRate;sidebar.setListProgress(modules,!0),ProcessSim.start(modules,gameData.citiesState,simulationUpdate,simulationComplete,showEvent,eventData,e,isWaterFall)}function simulationUpdate(e,t){var a=[];cities.forEach(function(e){a.push(utils.contains(Object.keys(t),e.name)?t[e.name].status():0)}),maps.runState(a);var s=0,o=0;currentWeek+=1,moduleProgressOverTime[0].push(currentWeek);var r=1;e.forEach(function(e){s+=e.getCost(t),modulesProgree=e.getPercentComplete(),moduleProgressOverTime[r][moduleProgressOverTime[r].length-1]<100&&moduleProgressOverTime[r].push(modulesProgree),r+=1,o+=modulesProgree}),gameData.weeksTilDueDate--,gameData.projectBudget-=s,sidebar.setCash(gameData.projectBudget),sidebar.setWeeks(gameData.weeksTilDueDate),sidebar.setProgress(o/e.length)}function simulationComplete(e){var t=!0;e.forEach(function(e){t=t&&e.done()}),t?endGame():console.log("ERR: modules are not finished")}function endGame(){ProcessSim.stop(),modal.endGame(currentWeek,gameData.projectBudget,selectedProject,moduleProgressOverTime),localStorage.getItem("audioEnabled")&&($("#music-end").get(0).load(),$("#music-end").get(0).play())}function initialiseGame(){sidebar.init(function(e,t){teamPicker.selectModule(e,t)},teamPicker.addExtraDeveloperToCity,teamPicker.deductDeverloperFromCity),sidebar.hide(),modal.hidemodal(),maps.map=null,modules=[],moduleProgressOverTime=[[]],currentWeek=0,ProcessSim.stop(),$("#btn-options").hide(),$("#map").empty(),gameData.totalPayRoll=0,$("#startScreen").show(),localStorage.getItem("audioEnabled")&&($("#music").get(0).load(),$("#music").get(0).play())}function pause(){modal.pause(),curGameState===GameStates.PROGRESS&&ProcessSim.pause(),$("#btn-options").show()}function doEvent(e){localStorage.getItem("audioEnabled")&&($("#music").get(0).play(),$("#eventmusic").get(0).pause()),events.doEvent(e,gameData)&&unpause()}function creds(){var e='<p>Music by <a href="//www.matthewpablo.com">Matthew Pablo</a><br><br>Applause by <a href="//apricot.blender.org">Blender Foundation</a><br><br>Event Music by <a href="//opengameart.org/users/vwolfdog">VWolfDog</a><br><br>Development by<br><a href="//github.com/wheybags">Tom Mason</a><br><a href="//github.com/thatrandomer">Kevin Farrell</a><br><a href="//github.com/minuteman3">Miles McGuire</a><br><a href="//wrossmck.bitbucket.org">Ross McKinley</a></p>';modal.dialog(e)}function toggleAudio(){localStorage.getItem("audioEnabled")?($("#music").get(0).pause(),$("#audio").removeClass("fa-volume-up").addClass("fa-volume-off"),localStorage.removeItem("audioEnabled")):($("#music").get(0).load(),$("#music").get(0).play(),$("#audio").removeClass("fa-volume-off").addClass("fa-volume-up"),localStorage.setItem("audioEnabled",1))}function initAudio(){null===localStorage.getItem("firstTime")&&localStorage.setItem("audioEnabled",1),localStorage.getItem("audioEnabled")?($("#music").get(0).play(),$("#audio").removeClass("fa-volume-off").addClass("fa-volume-up")):($("#audio").removeClass("fa-volume-up").addClass("fa-volume-off"),localStorage.removeItem("audioEnabled"))}function unpause(){localStorage.getItem("audioEnabled")&&($("#music").get(0).play(),$("#eventmusic").get(0).pause()),ProcessSim.unpause(),modal.hidemodal()}var $=require("jquery"),cities=require("./../config/cities.json"),City=require("./city.js"),client=require("./../config/client-config.json"),deepcopy=require("deepcopy"),eventData=require("../config/events.json"),events=require("./events.js"),interventions=require("../config/interventions.json"),maps=require("./maps.js"),modal=require("./modal.js"),Module=require("./Module.js"),ProcessSim=require("./ProcessSimulator.js"),proj=require("./../config/projects.json"),sidebar=require("./sidebar.js"),teamPicker=require("./teamPicker.js"),utils=require("./utils.js"),projects=proj.projects,selectedProject,isWaterFall=!1,gameData={homeCity:"",weeksTilDueDate:0,projectBudget:0,totalPayRoll:0,citiesState:{}},modules=[],moduleProgressOverTime=[[]],currentWeek=0,GameStates={START:0,SELECT_HOME:1,SELECT_TEAMS:2,PROGRESS:3},curGameState=GameStates.START;$(document).ready(function(){var e=$("body"),t=function(){var t=.35,a=e.width(),s=30,o=a*t;s>o&&(o=s),$("body").css("font-size",o+"%")};$(window).resize(function(){t(),pt.resizemap(95)}),document.onkeydown=function(e){if(27===e.keyCode)pt.pause(),e.preventDefault();else if(38==e.keyCode){if(curGameState==GameStates.SELECT_TEAMS){var t=sidebar.getActiveListItem()-1;if(t>=0){var a=selectedProject.modules[t].name;teamPicker.selectModule(a,t)}}}else if(40==e.keyCode&&curGameState==GameStates.SELECT_TEAMS){var s=sidebar.getActiveListItem()+1;if(s<selectedProject.modules.length){var o=selectedProject.modules[s].name;teamPicker.selectModule(o,s)}}},t(),initAudio(),$("#map").bind("markerSelected.jvectormap",selectCity),$("#map").bind("markerLabelShow.jvectormap",onlabelShow),ProcessSim.stop(),interventions.actions.forEach(function(e){var t=0,a=2;if(e.effects){var s=e.message+" (";if(e.effects.stall&&a>t&&(t++,s=s+" Stalls Production for "+e.effects.stall+" Weeks,"),e.effects.morale&&a>t){t++;var o=e.effects.morale>0?" Increases":" Decreases";s=s+o+" Morale,"}if(e.effects.distance&&a>t){t++;var r=e.effects.distance>0?" Increases":" Decreases";s=s+r+" Geographic Distance,"}if(e.effects.culture&&a>t){t++;var i=e.effects.culture>0?" Increases":" Decreases";s=s+i+" Cultural Distance,"}e.effects.money&&(s=s+" $"+utils.commafy(-1*e.effects.money)+","),s=s.slice(0,s.length-1),s+=" )",e.message=s}})}),module.exports={initialiseGame:initialiseGame,selectProject:selectProject,startGame:startGame,endGame:endGame,selectType:selectType,startSimulation:startSimulation,projectdescription:projectdescription,inquire:inquire,pause:pause,evt:doEvent,resizemap:maps.resizemap,unpause:unpause,creds:creds,toggleAudio:toggleAudio,generateCharts:modal.generateCharts,addChartContainer:modal.addChartContainer};
},{"../config/events.json":4,"../config/interventions.json":5,"./../config/cities.json":2,"./../config/client-config.json":3,"./../config/projects.json":6,"./Module.js":11,"./ProcessSimulator.js":12,"./city.js":14,"./events.js":15,"./maps.js":17,"./modal.js":18,"./sidebar.js":19,"./teamPicker.js":20,"./utils.js":21,"deepcopy":31,"jquery":33}],14:[function(require,module,exports){
var States={GRAY:0,RED:1,YELLOW:2,GREEN:3},City=function(t,e,i){this.name=t.name,this.costPerDeveloper=t.costPerWeek,this.productivity=t.productivity,this.geoDistance=this.calculateGeoDistance(t,e),this.culturalDistance=this.calculateCulturalDistance(t,e),this.morale=100,this.stalled=0,this.cityMods=i,this.highContext=t.highContext};City.prototype.calculateCulturalDistance=function(t,e){var i=t.language!==e.language?4:0;return i+=t.west!==e.west?3:0,i+=t.highContext!==e.highContext?3:0,i+=t.nationCulture!==e.nationCulture?2:0,i+=t.organizationalCulture!==e.organizationalCulture?1:0},City.prototype.calculateGeoDistance=function(t,e){var i=t.coords[0],s=t.coords[1],o=e.coords[0],a=e.coords[1];return 48*Math.sqrt(Math.pow(i-o,2)+Math.pow(s-a,2))},City.prototype.advance=function(){this.stalled>1?this.stalled--:this.stalled=0},City.prototype.progress=function(t){return this.stalled>1?0:this.stalled>0?this.idealProgress(t)*(this.morale/100)*(this.stalled-1):this.idealProgress(t)*(this.morale/100)},City.prototype.idealProgress=function(t){return this.productivity*t},City.prototype.cost=function(t){return this.costPerDeveloper*t},City.prototype.status=function(){return this.cityMods.length?this.stalled>0||this.morale<10?States.RED:this.cityMods.some(function(t){return t.isStalled()})||this.morale<50?States.YELLOW:States.GREEN:States.GRAY},City.prototype.stall=function(t){this.stalled+=t},City.prototype.modifyMorale=function(t){this.morale=this.morale+t,this.morale<0&&(this.morale=0),this.morale>150&&(this.morale=150)},City.prototype.setMorale=function(t){this.morale=t,this.morale<0&&(this.morale=0)},City.prototype.getGeoDist=function(){return this.geoDistance},City.prototype.getCulturalDist=function(){return this.culturalDistance},City.prototype.inquire=function(t){var e="";if(0===t){var i=this.highContext||this.stalled<1&&this.morale>50&&!this.cityMods.some(function(t){return t.isStalled()});e=i?this.name+" is on Schedule":this.name+" is falling behind"}else 1===t?(this.stalled+=.1,this.cityMods.forEach(function(t){e+=t.done()?t.name+" has finished.</br>":t.name+" is "+(t.isStalled()&&!this.highContext?" behind":" fine")+"</br>"})):2===t?(this.stalled+=.2,this.cityMods.forEach(function(t){e+=t.done()?t.name+" has finished.</br>":t.name+" is currently doing "+t.getStageName()+"</br>"})):3===t?(this.stalled+=.5,this.cityMods.forEach(function(t){e+=t.done()?t.name+" has finished.</br>":t.name+" is currently doing "+t.getStageName()+" and is "+(t.isStalled()&&(!this.highContext||Math.random()>.5)?" behind":" fine")+"</br>"})):4===t&&(this.stalled+=1,this.cityMods.forEach(function(t){e+=t.done()?t.name+" has finished.</br>":t.name+" is currently doing "+t.getStageName()+" and is "+(t.isStalled()?" behind":" fine")+"</br>"}));return e},module.exports=City;
},{}],15:[function(require,module,exports){
function setEventAction(t){events[events.length-1].mitigation=events[events.length-1].actions[t]}function trackEvent(t){events.push(t)}function doEvent(t,e){setEventAction(t);var s=events,n=s[s.length-1],a=utils.objectadd(n.effects||{},n.actions[t].effects||{}),c=n.city,i=n.module,l=n.target;return a=a||{},t>n.actions.length?!1:("city"===l?(a.stall&&c.stall(a.stall),a.morale&&c.modifyMorale(a.morale)):"module"===l?(a.stall&&i.stall(a.stall),a.progress&&i.setPercentComplete(a.progress)):"cityModule"===l?a.stall&&(i.stall(a.stall),c.stall(a.stall)):"intervention"===l&&(a.stall&&Object.keys(e.citiesState).forEach(function(t){var s=e.citiesState[t];s.stall(a.stall)}),a.morale&&Object.keys(e.citiesState).forEach(function(t){var s=e.citiesState[t];s.modifyMorale(a.morale)}),a.distance&&Object.keys(e.citiesState).forEach(function(t){var s=e.citiesState[t];s.geoDistance=s.geoDistance*(100+a.distance)/100}),a.culture&&Object.keys(e.citiesState).forEach(function(t){var s=e.citiesState[t];s.culturalDistance=s.culturalDistance*(100+a.culture)/100})),a.money&&(e.projectBudget+=a.money),!0)}var eventData=require("../config/events.json"),utils=require("./utils.js"),events=[];module.exports={setEventAction:setEventAction,trackEvent:trackEvent,doEvent:doEvent};
},{"../config/events.json":4,"./utils.js":21}],16:[function(require,module,exports){
var style=require("../less/style.less"),fa=require("../assets/font-awesome-4.0.3/less/font-awesome.less"),pt=require("./app.js");window.pt=pt;
},{"../assets/font-awesome-4.0.3/less/font-awesome.less":1,"../less/style.less":22,"./app.js":13}],17:[function(require,module,exports){
function buildmap(){return resizemap(),map=new jvm.WorldMap({map:"world_mill_en",markers:cities.map(function(e){return e.coords}),container:$("#map"),series:{markers:[{attribute:"r",scale:[8,12],values:cities.map(function(e){return e.productivity})},{attribute:"state"}]},backgroundColor:"transparent",markersSelectable:!0,onRegionLabelShow:regionLabelShow})}function resizemap(e){e=e||85,document.getElementById("map")&&(document.getElementById("map").style.height=document.documentElement.clientHeight*e/100+"px")}function regionLabelShow(e,r){r.css("visibility","hidden")}function fixOverLap(e,r){var a=r.width()+25;cities[e].coords[1]<-100?r.css("margin-left",a):r.css("margin-left",-10)}function runState(e){map.series.markers[1].setValues(e)}function makeHomeCity(e){$(".jvectormap-marker[data-index="+e+"]").css("stroke"," #d33682")}function clearMapMarkers(){isMakerSelectable=!1,map.clearSelectedMarkers(),isMakerSelectable=!0}var $=require("jquery"),jvm=require("jvm"),cities=require("./../config/cities.json"),jvm_map=require("../lib/jquery-jvectormap-world-mill-en.js")(),map;module.exports={clearMapMarkers:clearMapMarkers,fixOverLap:fixOverLap,buildmap:buildmap,resizemap:resizemap,runState:runState,makeHomeCity:makeHomeCity,map:map};
},{"../lib/jquery-jvectormap-world-mill-en.js":25,"./../config/cities.json":2,"jquery":33,"jvm":24}],18:[function(require,module,exports){
function showmodal(e,n){n=n||!1,modal||(modal=!0,menu=n,e=e||"Pause Menu",$("#content").html('<div id="modal"><div class="modal-content">'+e+"</div></div>"))}function hidemodal(){modal=!1,menu=!1,$("#modal").empty(),$("#modal").hide()}function makeTypeChoice(e,n){var t="<h1>Please Select Project Type</h1><p>";t+="<p> Select what type of software engineering method you would like to follow",t+='</p><div class="modal-options">',n.forEach(function(n){t+='<button class="btn-action" onclick="pt.startGame('+e+", '"+n+"')\" >"+n+"</button>"}),t+="</div>",showmodal(t,!1)}function makeChoices(e,n,t,o){e=e||[{name:"Option 1",funct:""}],n=n||"",t=t||"btn-action",o=o||!1;var a="<p>",i="";return a+=n,a+='</p><div class="modal-options">',e.forEach(function(e,n){e.funct=e.funct||"selectType("+n+")",o&&(i='onmouseover="pt.projectdescription('+n+')" ',i+='ontouchstart="pt.projectdescription('+n+')" '),a+='<button class="'+t+'" onclick="pt.'+e.funct+'" '+i+" >"+e.name+"</button>"}),a+="</div>"}function dialog(e){e=e||"";var n="<h1>Information</h1><p>";n+=e,n+='</p><div class="modal-options">',n+='<button class="btn-action" onclick="pt.unpause()"> Continue </button>',n+="</div>",showmodal(n,!0)}function showInquire(e,n){var t="<h1>Inquire</h1><p>";t+="<p>You can perform an inquiry into a site to find out how it's performing. An inquiry may also cause some delays.",t+='</p><div class="modal-options">';for(var o=0;o<n.length;o++)t+='<p class="btn-action" onclick="pt.inquire('+o+", '"+e+"')\" >"+n[o]+"</p>";t+="</div>",showmodal(t,!1)}function showEvent(e,n){e.week=n;var t="<h1>Information</h1><p>";t+="<p>"+e.message.replace("$site",e.city.name).replace("$module",e.module.name),t+='</p><div class="modal-options">',e.actions.forEach(function(e,n){t+='<p class="btn-action" onclick="pt.evt('+n+')">'+(n+1)+". "+e.message+"</p>"}),0===e.actions.length&&(t+='<button class="btn-action" onclick="pt.hidemodal();pt.unpause()"> Continue </button>'),t+="</div>",showmodal(t,!1)}function showEvent(e,n){e.week=n;var t="<h1>Information</h1><p>";t+="<p>"+e.message.replace("$site",e.city.name).replace("$module",e.module.name),t+='</p><div class="modal-options">',e.actions.forEach(function(e,n){t+='<p class="btn-action" onclick="pt.evt('+n+')">'+(n+1)+". "+e.message+"</p>"}),0===e.actions.length&&(t+='<button class="btn-action" onclick="pt.unpause()"> Continue </button>'),t+="</div>",showmodal(t,!1)}function generateCharts(e,n,t,o){e=e||"gameover",t=t||{duration:n[0].length},o=o||t.duration;for(var a=null,i=[],s=1;s<n.length;s++){for(var r={type:"line",showInLegend:!0,name:t.modules[s-1].name,dataPoints:[]},d=0;d<n[s].length;d++){var u={x:n[0][d],y:n[s][d]};r.dataPoints.push(u)}i.push(r)}return a=new CanvasJS.Chart(e,{theme:"theme2",backgroundColor:"transparent",legend:{fontSize:16},axisX:{title:"Weeks",minimum:0},axisY:{title:"% Module Completion",minimum:0,maximum:105},toolTip:{enabled:!0,content:function(e){var n;return n="<div class='ttip'>"+e.entries[0].dataSeries.name+" <strong>"+e.entries[0].dataPoint.y.toFixed(1)+" % </strong></div>"},animationEnabled:!0},data:i}),a.render(),a}function addChartContainer(e){$("#gameover")&&$("#gameover").remove();var n,t,o;e=e||50,o=4*e/5,t=document.documentElement.clientHeight*e/100+"px;",n=document.documentElement.clientWidth*o/100+"px;",d=document.createElement("div"),d.id="gameover",d.setAttribute("style","width:"+n+";height:"+t+";"),$("body").append(d)}function endGame(e,n,t,o){addChartContainer(),hidemodal();var a=utils.revenue(e,t),i="<h1>"+t.name+" - Project Simulation Complete</h1>";i+='<div id="chartcontainer"></div>',i+='<div id="results">',i+="<p>The Project deadline was "+t.duration+' weeks and took <span id="res-time">'+e+"</span> weeks</p>",i+='<p>You have € <span id="res-balance">'+utils.commafy(n,0)+"</span> in the bank</p>",i+='<p>You spent <span id="res-budget">'+(100*(t.budget-n)/t.budget).toFixed(1)+"</span>% of your budget</p>",i+='<p>Your revenue is € <span id="res-revenue">'+utils.commafy(a,0)+"</span></p>",i+='<p>You earned <span id="res-revenuepc">'+(100*a/(t.revenue.amount*t.revenue.months)).toFixed(1)+"</span>% of the expected revenue</p>",i+='<p id="final-result">Your earnings are: € <span id="res-earnings">'+utils.commafy(a+n,0)+"</span></p>",i+="</div>",i+='<div class="modal-options">',i+='<button class="btn-action" onclick="pt.initialiseGame()"> Quit to Menu </button>',i+="</div>",showmodal(i,!1),$("#gameover").empty(),$("#gameover").show(),generateCharts("gameover",o,t,e),$("#gameover").detach().prependTo("#chartcontainer"),$("#gameover").show(),rg("#res-time",e-t.duration,!0),rg("#res-budget",(t.budget-n)/t.budget-1,!0),rg("#res-revenuepc",100*a/t.revenue.amount*t.revenue.months)}function rg(e,n,t){t=t||!1;var o=0;t&&(o=n,n=0),o>n?$(e).css("color","#dc322f"):$(e).css("color","#859900")}function pause(){if(modal||menu)modal&&menu&&hidemodal();else{var e="<h1>Pause</h1>";e+=makeChoices([{name:"Continue",funct:"pause()"},{name:"Toggle Audio",funct:"toggleAudio()"},{name:"End Game",funct:"endGame()"},{name:"Quit to Menu",funct:"initialiseGame()"}],client.information),showmodal(e,!0)}}var $=require("jquery"),Chart=require("../lib/canvasjs.js"),utils=require("./utils.js"),client=require("./../config/client-config.json"),menu=!1,modal=!1;module.exports={showmodal:showmodal,hidemodal:hidemodal,dialog:dialog,pause:pause,makeChoices:makeChoices,endGame:endGame,generateCharts:generateCharts,showInquire:showInquire,addChartContainer:addChartContainer,showEvent:showEvent,makeTypeChoice:makeTypeChoice};
},{"../lib/canvasjs.js":23,"./../config/client-config.json":3,"./utils.js":21,"jquery":33}],19:[function(require,module,exports){
function init(e,t,s){showProgressState(!1),showSelectTeams(!0),setTitle("Add Developers"),setPayroll(0),setBudgetedWeeks(0),setPayrollforModule(0),setLocations([]),upLocationFuction=t,downLocationFunction=s,itemSelectionFunc=e}function show(){$(sidebarTag).show()}function hide(){$(sidebarTag).hide()}function setListAllocation(e,t){t=t||!1,$(listTag).empty();for(var s=0;s<e.length;s++){var a=e[s],o=a.name+"<br/><span class='modulecost'>Estimated "+a.estimatedCost.toFixed(0)+" man hrs</span><br/>";o+="<span class='modulecost' data-allocated-city='"+a.name+"' >Allocated "+a.allocatedCost+" man hrs</span>",$(listTag).append($("<li></li>").html(o).attr("date-name",a.name))}t&&setListListner(itemSelectionFunc)}function setListProgress(e,t){t=t||!1,$(listTag).empty();for(var s=0;s<e.length;s++){var a=e[s].developersPerCity,o=e[s].name+"<br/>";Object.keys(a).forEach(function(e){o+="<span class='modulecost' >"+e+"</span></br>"}),$(listTag).append($("<li></li>").html(o))}}function setModuleManHours(e,t){$(".modulecost[data-allocated-city='"+e+"']").html("Allocated "+t+" man hrs per week")}function setListListner(e){$(itemsTag).click(function(){var t=$(this).attr("date-name"),s=$(this).index("li");e(t,s)})}function getActiveListItem(){return $(activeTag).index("li")}function setListItemActive(e){$(activeTag).removeClass(activeClass),$(listTag+" li:nth-child("+(e+1)+")").addClass(activeClass)}function setTitle(e){$(titleTag).html(e)}function setButtonText(e){$(buttonTag).html(e)}function setBudget(e){$(budgetTag).html("$ "+utils.commafy(e))}function setDueDate(e){$(dueDateTag).html(e.toFixed(0)+" weeks")}function setPayroll(e){$(payrollTag).html("$ "+utils.commafy(e))}function setBudgetedWeeks(e){$(budgetWeeksTag).html(e.toFixed(0)+" weeks")}function setCash(e){$(cashTag).html("$"+utils.commafy(e)),0>e?$(cashTag).css("color","#dc322f"):$(cashTag).css("color","#859900")}function setProgress(e){$(progressTag).html(e.toFixed(0)+"%")}function setWeeks(e){$(weeksTag).html(e.toFixed(0)+" weeks"),0>e?$(weeksTag).css("color","#dc322f"):$(weeksTag).css("color","#859900")}function setPayrollforModule(e){$(payrollforModuleTag).html("$"+utils.commafy(e))}function setLocations(e){$(locationTag).html("");for(var t in e){var s=cities[t],a=$("<li>");a.append(s.name);var o=$("<i></i>").attr("date-code",t).addClass("fa fa-chevron-up ticker tickerUp").click(function(){var e=$(this).attr("date-code");upLocationFuction(e)}),i=$("<i></i>").attr("date-code",t).addClass("fa fa-chevron-down ticker tickerDown").click(function(){var e=$(this).attr("date-code");downLocationFunction(e)});a.append($("<div></div>").addClass("tickerBox").html(o).append(i)),a.append($("<div>").addClass("teamMultiplier").html(e[t]+" devs")),$(locationTag).append(a)}}function showSelectTeams(e){$(selectTeamTagstatus).css("display",e?"block":"none"),$(selectTeamTag).css("display",e?"block":"none")}function showProgressState(e){$(progressStateTag).css("display",e?"block":"none")}function setHomeCity(e){$(homeCityHeaderTag).css("color","#93a1a1"),$(homeCityTag).html(e)}var cities=require("./../config/cities.json"),utils=require("./utils.js"),$=require("jquery"),activeClass="active",activeTag="."+activeClass,budgetTag="#budget",budgetWeeksTag="#budgetedWeeks",buttonTag="#btn-region",cashTag="#cash",dueDateTag="#duedate",gamePropertiesTag=".gameProperties",listTag=".nav",itemsTag=listTag+" li",locationTag="#locations",payrollTag="#totalPayroll",payrollforModuleTag="#costPerMonth",progressStateTag=".progess-state",progressTag="#progress",selectTeamTag=".select-teams",selectTeamTagstatus=".select-teams-status",sidebarTag="#HUD",titleTag="#sidebar-title",weeksTag="#weeks",homeCityTag="#homecity",homeCityHeaderTag="#homecityHeader",itemSelectionFunc,upLocationFuction,downLocationFunction;module.exports={setBudgetedWeeks:setBudgetedWeeks,setPayroll:setPayroll,setLocations:setLocations,setPayrollforModule:setPayrollforModule,setListItemActive:setListItemActive,getActiveListItem:getActiveListItem,showSelectTeams:showSelectTeams,setBudget:setBudget,setDueDate:setDueDate,setTitle:setTitle,setCash:setCash,setProgress:setProgress,setWeeks:setWeeks,showProgressState:showProgressState,show:show,hide:hide,setHomeCity:setHomeCity,setButtonText:setButtonText,init:init,setListListner:setListListner,setModuleManHours:setModuleManHours,setListAllocation:setListAllocation,setListProgress:setListProgress};
},{"./../config/cities.json":2,"./utils.js":21,"jquery":33}],20:[function(require,module,exports){
function init(e,t,a,l){teamsSelected={},selectedTeams={},gameData=e,cities=t,modules=a,budget=l,curModule=modules[0].name}function selectModule(e,t){var a=sidebar.getActiveListItem();0!==Object.keys(teamsSelected).length&&(selectedTeams[modules[a].name]=teamsSelected),teamsSelected=selectedTeams[e]?selectedTeams[e]:{};var l=calculatePayrollforMod(teamsSelected);sidebar.setPayrollforModule(l),sidebar.setLocations(teamsSelected),sidebar.setListItemActive(t),curModule=modules[t].name}function addExtraDeveloperToCity(e){teamsSelected[e]=(teamsSelected[e]||0)+1,gameData.totalPayRoll+=cities[e].costPerWeek,sidebar.setPayroll(gameData.totalPayRoll),sidebar.setBudgetedWeeks(budget/gameData.totalPayRoll),sidebar.setPayrollforModule(calculatePayrollforMod(teamsSelected)),sidebar.setLocations(teamsSelected,e),sidebar.setModuleManHours(curModule,calculateManHours(teamsSelected))}function deductDeverloperFromCity(e){teamsSelected[e]&&(teamsSelected[e]=teamsSelected[e]-1,gameData.totalPayRoll+=cities[e].costPerWeek,sidebar.setPayroll(gameData.totalPayRoll),sidebar.setBudgetedWeeks(budget/gameData.totalPayRoll),sidebar.setPayrollforModule(calculatePayrollforMod(teamsSelected)),sidebar.setLocations(teamsSelected,e),sidebar.setModuleManHours(curModule,calculateManHours(teamsSelected)),0===teamsSelected[e]&&delete teamsSelected[e])}function calculateManHours(e){var t=0;for(var a in e)t+=cities[a].productivity*e[a];return t}function calculatePayrollforMod(e){var t=0;for(var a in e)t+=cities[a].costPerWeek*e[a];return t}function allModulesHaveTeams(){var e=sidebar.getActiveListItem();return 0===Object.keys(teamsSelected).length?delete selectedTeams[modules[e].name]:selectedTeams[modules[e].name]=teamsSelected,Object.keys(selectedTeams).length===modules.length}function getDevelopers(e){var t={};return Object.keys(selectedTeams[e]).forEach(function(a){t[cities[a].name]=selectedTeams[e][a]}),t}var sidebar=require("./sidebar.js"),teamsSelected,selectedTeams,gameData,cities,budget,modules,curModule="";module.exports={init:init,selectModule:selectModule,addExtraDeveloperToCity:addExtraDeveloperToCity,deductDeverloperFromCity:deductDeverloperFromCity,calculatePayrollforMod:calculatePayrollforMod,allModulesHaveTeams:allModulesHaveTeams,getDevelopers:getDevelopers};
},{"./sidebar.js":19}],21:[function(require,module,exports){
function revenue(e,t){var n=t.revenue.amount*t.revenue.months,o=t.duration-e,r=t.revenue.amount*o;return n+r}function commafy(e,t){t=t||0,e=e.toFixed(t);var n=e.toString().split(".");return n[0]=n[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),n.join(".")}function getActiveCities(e){var t=[];return Object.keys(e).forEach(function(n){Object.keys(e[n]).forEach(function(e){contains(t,e)||t.push(e)})}),t}function contains(e,t){for(var n=0;n<e.length;n++)if(e[n]===t)return!0;return!1}function objectadd(e,t){return e==={}?t:(Object.keys(t).forEach(function(n){e[n]=t[n]}),e)}function randomCity(e){var t=Object.keys(e.developersPerCity);return t[Math.floor(Math.random()*t.length)]}function calculateCost(e){var t=0;return t=e.modules.reduce(function(e,t){return e+t.cost},0)}module.exports={getActiveCities:getActiveCities,contains:contains,revenue:revenue,objectadd:objectadd,randomCity:randomCity,calculateCost:calculateCost,commafy:commafy};
},{}],22:[function(require,module,exports){
var css = "/*\n        ██╗     ███████╗███████╗███████╗\n        ██║     ██╔════╝██╔════╝██╔════╝\n        ██║     █████╗  ███████╗███████╗\n        ██║     ██╔══╝  ╚════██║╚════██║\n        ███████╗███████╗███████║███████║\n        ╚══════╝╚══════╝╚══════╝╚══════╝\n*/\n/***\n *     ██████╗███████╗███████╗\n *    ██╔════╝██╔════╝██╔════╝\n *    ██║     ███████╗███████╗\n *    ██║     ╚════██║╚════██║\n *    ╚██████╗███████║███████║\n *     ╚═════╝╚══════╝╚══════╝               \n */\nhtml {\n  font-family: 'Helvetica Neue', 'Helvetica', 'Ariel', sans-serif;\n  color-profile: sRGB;\n  overflow-y: scroll;\n  color: #fdf6e3;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nbutton {\n  font-weight: 100;\n}\nstrong {\n  font-weight: 200;\n}\nh1 {\n  font-size: 0.75em;\n  text-transform: capitalize;\n}\np {\n  font-size: 0.25em;\n}\nimg {\n  margin-bottom: 0%;\n}\nhtml body {\n  background-color: #002b36;\n}\na {\n  color: #002b36;\n  text-decoration: none;\n}\na:hover {\n  color: #d33682;\n  text-decoration: none;\n  background-color: transparent;\n}\n.nav {\n  font-size: 0.3em;\n  list-style-type: none;\n  padding-left: 0em;\n  margin-bottom: 0.5em;\n  margin-left: 0em;\n  margin-top: 0em;\n}\n.nav li {\n  background-color: transparent;\n  cursor: pointer;\n  margin-right: -1em;\n  display: block;\n  padding-left: 0.5em;\n  position: relative;\n  text-shadow: none;\n  line-height: 1em;\n}\n.nav li:hover {\n  color: #d33682;\n}\n.nav li.inactive {\n  background-color: #002b36;\n  color: #fdf6e3;\n}\n.nav li.active {\n  color: #d33682;\n}\n.nav li.active a {\n  text-shadow: 0 -0.1em 0 rgba(0, 0, 0, 0.4);\n}\n/*\n        ███████╗██╗██████╗ ███████╗    ██████╗  █████╗ ██████╗ \n        ██╔════╝██║██╔══██╗██╔════╝    ██╔══██╗██╔══██╗██╔══██╗\n        ███████╗██║██║  ██║█████╗      ██████╔╝███████║██████╔╝\n        ╚════██║██║██║  ██║██╔══╝      ██╔══██╗██╔══██║██╔══██╗\n        ███████║██║██████╔╝███████╗    ██████╔╝██║  ██║██║  ██║\n        ╚══════╝╚═╝╚═════╝ ╚══════╝    ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝\n*/\n#HUD {\n  font-size: 0.78em;\n}\n#sidebar {\n  border-right: 0.05em solid #d33682;\n  border-top: 0.1em solid #d33682;\n  background: #073642;\n  color: #93a1a1;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  position: fixed;\n  height: 100%;\n  width: 20%;\n  left: 0;\n  top: 0;\n}\n#sidebar-title {\n  margin-bottom: 1.5em;\n  margin-top: 0.5em;\n  font-weight: 100;\n  font-size: 0.5em;\n}\n.modulecost {\n  font-size: 0.6em;\n  margin-left: 1em;\n}\n#locations {\n  -webkit-padding-start: 0.5em;\n  -khtml-padding-start: 0.5em;\n  -moz-padding-start: 0.5em;\n  -o-padding-start: 0.5em;\n  padding-start: 0.5em;\n  font-weight: 100;\n  font-size: 0.3em;\n  margin-top: 0;\n  width: 90%;\n}\n.location-header {\n  margin-bottom: 0.5em;\n  margin-left: 0.5em;\n  margin-top: 3em;\n  font-weight: 400;\n  font-size: 0.3em;\n}\n#costPerMonth {\n  display: block;\n  float: right;\n  margin-right: 0.5em;\n}\n.gameProperties {\n  font-size: 0.25em;\n  font-weight: 100;\n  display: block;\n  margin-left: 1em;\n  margin-top: 1em;\n  margin-bottom: 1em;\n}\n#statusbar {\n  border-bottom: 0.05em solid #d33682;\n  border-top: 0.1em solid #d33682;\n  background: #073642;\n  color: #93a1a1;\n  position: fixed;\n  width: 80.05%;\n  z-index: 1;\n  right: 0;\n  top: 0;\n}\n.select-teams-status {\n  width: 20%;\n  float: left;\n  margin-left: 1em;\n  margin-top: 0.5em;\n}\n.progess-state {\n  width: 20%;\n  float: left;\n  margin-left: 1em;\n  margin-top: 0.5em;\n}\n#budget {\n  margin-left: 0.5em;\n}\n#totalPayroll {\n  margin-left: 0.5em;\n}\n#duedate {\n  margin-left: 0.5em;\n}\n#budgetedWeeks {\n  margin-left: 0.5em;\n}\n#homecityHeader {\n  padding-left: 0.2em;\n  font-size: 0.4em;\n  margin: 0em;\n  color: #d33682;\n}\n#homecity {\n  padding-left: 0.6em;\n  margin-top: 0.1em;\n}\n.mixi-frames from {\n  background: #d33682;\n}\n.mixi-frames to {\n  background: #fdf6e3;\n}\n@-webkit-keyframes myfirst {\n  from {\n    background: #d33682;\n  }\n  to {\n    background: #fdf6e3;\n  }\n}\n@-moz-keyframes myfirst {\n  from {\n    background: #d33682;\n  }\n  to {\n    background: #fdf6e3;\n  }\n}\n@-ms-keyframes myfirst {\n  from {\n    background: #d33682;\n  }\n  to {\n    background: #fdf6e3;\n  }\n}\n@-o-keyframes myfirst {\n  from {\n    background: #d33682;\n  }\n  to {\n    background: #fdf6e3;\n  }\n}\n@keyframes myfirst {\n  from {\n    background: #d33682;\n  }\n  to {\n    background: #fdf6e3;\n  }\n}\n#locations li {\n  padding-bottom: 0.1em;\n  list-style: none;\n}\n#locations .teamMultiplierFade {\n  float: right;\n  padding-right: 0.3em;\n  padding-left: 0.3em;\n  margin-right: 0.5em;\n  color: #fdf6e3;\n  -webkit-border-radius: 0.5em;\n  -moz-border-radius: 0.5em;\n  border-radius: 0.5em;\n  -moz-background-clip: padding;\n  -webkit-background-clip: padding-box;\n  background-clip: padding-box;\n  animation: myfirst 3s;\n  -webkit-animation: myfirst 3s;\n  /* Safari and Chrome */\n}\n#locations .teamMultiplier {\n  float: right;\n  margin-right: 0.5em;\n  font-weight: 200;\n}\n.tickerBox {\n  float: right;\n  margin-left: -1em;\n}\n.ticker {\n  font-size: 0.7em;\n  align: right;\n  position: relative;\n}\n.ticker:hover {\n  color: #d33682;\n}\n.tickerUp {\n  right: -0.95em;\n  vertical-align: top;\n}\n.tickerDown {\n  vertical-align: bottom;\n}\n/***\n *    ██████╗ ██╗   ██╗████████╗████████╗ ██████╗ ███╗   ██╗███████╗\n *    ██╔══██╗██║   ██║╚══██╔══╝╚══██╔══╝██╔═══██╗████╗  ██║██╔════╝\n *    ██████╔╝██║   ██║   ██║      ██║   ██║   ██║██╔██╗ ██║███████╗\n *    ██╔══██╗██║   ██║   ██║      ██║   ██║   ██║██║╚██╗██║╚════██║\n *    ██████╔╝╚██████╔╝   ██║      ██║   ╚██████╔╝██║ ╚████║███████║\n *    ╚═════╝  ╚═════╝    ╚═╝      ╚═╝    ╚═════╝ ╚═╝  ╚═══╝╚══════╝\n *                                                                  \n */\nbutton {\n  -webkit-border-radius: 0.3em;\n  -moz-border-radius: 0.3em;\n  border-radius: 0.3em;\n  -moz-background-clip: padding;\n  -webkit-background-clip: padding-box;\n  background-clip: padding-box;\n  background-color: #4b85ad;\n  border: 0.1em solid transparent;\n  margin-left: 1em;\n  color: #eee8d5;\n  font-size: 0.2em;\n  padding: 0.5em 0 0.5em 0;\n  text-align: center;\n  width: 10em;\n  z-index: 997;\n}\nbutton:hover {\n  background-color: #268bd2;\n  border: 0.1em solid #268bd2;\n  cursor: pointer;\n  color: #fdf6e3;\n}\nbutton:active {\n  -webkit-box-shadow: inset 0 0 0.3em 0.3em #5882a0 rgba(0, 0, 0, 0.5);\n  -moz-box-shadow: inset 0 0 0.3em 0.3em #5882a0 rgba(0, 0, 0, 0.5);\n  box-shadow: inset 0 0 0.3em 0.3em #5882a0 rgba(0, 0, 0, 0.5);\n  -webkit-box-shadow: inset 0 0 0.3em 0.3em #5882a0;\n  -moz-box-shadow: inset 0 0 0.3em 0.3em #5882a0;\n  box-shadow: inset 0 0 0.3em 0.3em #5882a0;\n}\n#btn-region {\n  position: absolute;\n  bottom: 1em;\n  left: 5%;\n  width: 80%;\n}\n#btn-options {\n  position: absolute;\n  top: 1em;\n  right: 1em;\n  z-index: 999;\n}\n#btn-action {\n  margin-left: 0;\n  bottom: 1em;\n}\n.btn-projects {\n  display: list-item;\n}\n/*\n             ██╗██╗   ██╗███████╗ ██████╗████████╗ ██████╗ ██████╗ ███╗   ███╗ █████╗ ██████╗ \n             ██║██║   ██║██╔════╝██╔════╝╚══██╔══╝██╔═══██╗██╔══██╗████╗ ████║██╔══██╗██╔══██╗\n             ██║██║   ██║█████╗  ██║        ██║   ██║   ██║██████╔╝██╔████╔██║███████║██████╔╝\n        ██   ██║╚██╗ ██╔╝██╔══╝  ██║        ██║   ██║   ██║██╔══██╗██║╚██╔╝██║██╔══██║██╔═══╝ \n        ╚█████╔╝ ╚████╔╝ ███████╗╚██████╗   ██║   ╚██████╔╝██║  ██║██║ ╚═╝ ██║██║  ██║██║     \n         ╚════╝   ╚═══╝  ╚══════╝ ╚═════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝      \n*/\n.jvectormap-label {\n  -webkit-border-radius: 0.3em;\n  -moz-border-radius: 0.3em;\n  border-radius: 0.3em;\n  -moz-background-clip: padding;\n  -webkit-background-clip: padding-box;\n  background-clip: padding-box;\n  border: 1px solid #d33682;\n  position: absolute;\n  background: #002b36;\n  font-size: 0.25em;\n  font-weight: 100;\n  color: #b58900;\n  display: none;\n  padding: 0.3em;\n}\n.jvectormap-zoomin,\n.jvectormap-zoomout {\n  color: #d33682;\n  -webkit-border-radius: 0.5em;\n  -moz-border-radius: 0.5em;\n  border-radius: 0.5em;\n  -moz-background-clip: padding;\n  -webkit-background-clip: padding-box;\n  background-clip: padding-box;\n  position: absolute;\n  left: 0.3em;\n  padding: 0.3em;\n  width: 1em;\n  height: 1em;\n  cursor: pointer;\n  text-align: center;\n}\n.jvectormap-zoomin {\n  font-size: 0.25em;\n  bottom: 2em;\n}\n.jvectormap-zoomout {\n  font-size: 0.25em;\n  bottom: 0em;\n}\n.jvectormap-region {\n  fill: #002b36;\n  stroke: #2aa198;\n  stroke-width: 0.5;\n}\n.jvectormap-region:hover {\n  fill: #002b36;\n  stroke: #d33682;\n  stroke-width: 0.5;\n}\n/*\n*  markers\n*/\n.jvectormap-marker {\n  fill: #93a1a1;\n  stroke: #002b36;\n  stroke-width: 1.5;\n  cursor: pointer;\n}\n.jvectormap-marker:hover {\n  fill: #d33682;\n}\n.jvectormap-marker:active {\n  fill: #2aa198;\n}\n.jvectormap-marker[state=\"1\"] {\n  fill: #dc322f;\n}\n.jvectormap-marker[state=\"2\"] {\n  fill: #FFD801;\n}\n.jvectormap-marker[state=\"3\"] {\n  fill: #7FB347;\n}\n#map {\n  height: 6em;\n  margin-top: 1em;\n  float: right;\n  bottom: 0;\n  width: 80%;\n}\n/***\n *    ███╗   ███╗ ██████╗ ██████╗  █████╗ ██╗     \n *    ████╗ ████║██╔═══██╗██╔══██╗██╔══██╗██║     \n *    ██╔████╔██║██║   ██║██║  ██║███████║██║     \n *    ██║╚██╔╝██║██║   ██║██║  ██║██╔══██║██║     \n *    ██║ ╚═╝ ██║╚██████╔╝██████╔╝██║  ██║███████╗\n *    ╚═╝     ╚═╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝\n *                                                \n */\n#modal {\n  background-color: rgba(0, 43, 54, 0.7);\n  position: absolute;\n  display: block;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 998;\n  color: #002b36;\n}\n#modal .modal-content {\n  -webkit-border-radius: 0.1em;\n  -moz-border-radius: 0.1em;\n  border-radius: 0.1em;\n  -moz-background-clip: padding;\n  -webkit-background-clip: padding-box;\n  background-clip: padding-box;\n  background: #eee8d5;\n  font-weight: 200;\n  position: relative;\n  text-align: center;\n  margin: 5% 5%;\n  width: 90%;\n  height: 70%;\n}\n#modal .modal-content p {\n  font-size: 0.25em;\n  font-weight: 200;\n}\n#modal .modal-options {\n  position: absolute;\n  bottom: 0.25em;\n  width: 100%;\n}\n#modal .modal-options p {\n  margin-left: 16em;\n  line-height: 0.25em;\n  text-align: left;\n  font-size: 0.225em;\n  bottom: 1em;\n}\n#modal .modal-options p:hover {\n  font-weight: 200;\n  color: #d33682;\n}\n#modal .project {\n  font-size: 0.25em;\n  text-align: left;\n  margin-left: 20%;\n}\n#modal #project-duration {\n  float: right;\n  margin-right: 3em;\n}\n#modal #project-description {\n  margin-top: 3em;\n  margin-right: 3em;\n}\n#modal #chartcontainer {\n  float: right;\n  padding-right: 1em;\n}\n#modal #chartcontainer #chart-caption {\n  font-size: 0.2em;\n  margin-top: -1em;\n}\n/***\n *     ██████╗██╗  ██╗ █████╗ ██████╗ ████████╗███████╗\n *    ██╔════╝██║  ██║██╔══██╗██╔══██╗╚══██╔══╝██╔════╝\n *    ██║     ███████║███████║██████╔╝   ██║   ███████╗\n *    ██║     ██╔══██║██╔══██║██╔══██╗   ██║   ╚════██║\n *    ╚██████╗██║  ██║██║  ██║██║  ██║   ██║   ███████║\n *     ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝\n *                                                     \n */\n#gameover {\n  font-size: 0.3em;\n  margin-top: -1em;\n}\n#gameover canvas.canvasjs-chart-canvas {\n  right: 1em;\n}\n#gameover .ttip {\n  font-size: 1.5em;\n  font-weight: 200;\n  font-family: 'Helvetica Neue', 'Helvetica', 'Ariel', sans-serif;\n  color: #002b36;\n}\n#gameover .ttip strong {\n  font-weight: 400;\n}\n#results {\n  float: left;\n  padding-left: 1em;\n}\n#results span {\n  font-weight: 400;\n}\n#results #final-result {\n  font-weight: 800;\n}\n/***\n *    ███████╗████████╗ █████╗ ██████╗ ████████╗    ███████╗ ██████╗██████╗ ███████╗███████╗███╗   ██╗\n *    ██╔════╝╚══██╔══╝██╔══██╗██╔══██╗╚══██╔══╝    ██╔════╝██╔════╝██╔══██╗██╔════╝██╔════╝████╗  ██║\n *    ███████╗   ██║   ███████║██████╔╝   ██║       ███████╗██║     ██████╔╝█████╗  █████╗  ██╔██╗ ██║\n *    ╚════██║   ██║   ██╔══██║██╔══██╗   ██║       ╚════██║██║     ██╔══██╗██╔══╝  ██╔══╝  ██║╚██╗██║\n *    ███████║   ██║   ██║  ██║██║  ██║   ██║       ███████║╚██████╗██║  ██║███████╗███████╗██║ ╚████║\n *    ╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝       ╚══════╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═══╝\n *                                                                                                    \n */\n#startScreen {\n  position: absolute;\n  text-align: center;\n  display: table;\n  height: 100%;\n  width: 100%;\n  line-height: 0em;\n}\n#startScreen h1 {\n  color: #fdf6e3;\n  font-size: 3em;\n}\n#startScreen h2 {\n  color: #268bd2;\n  font-size: 1em;\n}\n#startScreen #startScreenCenterV {\n  display: table-cell;\n  vertical-align: middle;\n}\n#audiocontainer {\n  font-weight: 100;\n  font-size: 0.5em;\n  position: fixed;\n  width: 1em;\n  bottom: 0;\n  right: 0;\n}\n#audiocontainer #audio {\n  -webkit-transform: rotate(180deg);\n  -moz-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  -o-transform: rotate(180deg);\n  bottom: 0;\n  right: 0;\n}\n/***\n *    ████████╗███████╗███████╗████████╗██╗     ██╗███╗   ██╗ ██████╗ \n *    ╚══██╔══╝██╔════╝██╔════╝╚══██╔══╝██║     ██║████╗  ██║██╔════╝ \n *       ██║   █████╗  ███████╗   ██║   ██║     ██║██╔██╗ ██║██║  ███╗\n *       ██║   ██╔══╝  ╚════██║   ██║   ██║     ██║██║╚██╗██║██║   ██║\n *       ██║   ███████╗███████║   ██║   ███████╗██║██║ ╚████║╚██████╔╝\n *       ╚═╝   ╚══════╝╚══════╝   ╚═╝   ╚══════╝╚═╝╚═╝  ╚═══╝ ╚═════╝ \n *                                                                    \n */\n#__testling_output {\n  font-size: 0.25em;\n}\n";(require('lessify'))(css); module.exports = css;
},{"lessify":35}],23:[function(require,module,exports){
!function(){function t(t,i){t.prototype=e(i.prototype),t.prototype.constructor=t,t.parent=i.prototype}function e(t){function e(){}return e.prototype=t,new e}function a(t,e,i){return"millisecond"===i?t.setMilliseconds(t.getMilliseconds()+1*e):"second"===i?t.setSeconds(t.getSeconds()+1*e):"minute"===i?t.setMinutes(t.getMinutes()+1*e):"hour"===i?t.setHours(t.getHours()+1*e):"day"===i?t.setDate(t.getDate()+1*e):"week"===i?t.setDate(t.getDate()+7*e):"month"===i?t.setMonth(t.getMonth()+1*e):"year"===i&&t.setFullYear(t.getFullYear()+1*e),t}function n(t,e){return E[e+"Duration"]*t}function s(t,e){var i=!1;for(0>t&&(i=!0,t*=-1),t=""+t,e=e?e:1;t.length<e;)t="0"+t;return i?"-"+t:t}function o(t){if(!t)return t;t=t.replace(/^\s\s*/,"");for(var e=/\s/,i=t.length;e.test(t.charAt(--i)););return t.slice(0,i+1)}function r(t){t.roundRect=function(t,e,i,a,n,s,o,r){o&&(this.fillStyle=o),r&&(this.strokeStyle=r),"undefined"==typeof n&&(n=5),this.lineWidth=s,this.beginPath(),this.moveTo(t+n,e),this.lineTo(t+i-n,e),this.quadraticCurveTo(t+i,e,t+i,e+n),this.lineTo(t+i,e+a-n),this.quadraticCurveTo(t+i,e+a,t+i-n,e+a),this.lineTo(t+n,e+a),this.quadraticCurveTo(t,e+a,t,e+a-n),this.lineTo(t,e+n),this.quadraticCurveTo(t,e,t+n,e),this.closePath(),o&&this.fill(),r&&s>0&&this.stroke()}}function l(t,e){return t-e}function h(t,e){return t.x-e.x}function d(t){var e=((16711680&t)>>16).toString(16),i=((65280&t)>>8).toString(16);return t=((255&t)>>0).toString(16),e=2>e.length?"0"+e:e,i=2>i.length?"0"+i:i,t=2>t.length?"0"+t:t,"#"+e+i+t}function c(t,e,i){i=i||"normal";var a=t+"_"+e+"_"+i,n=Y[a];if(isNaN(n)){try{if(t="position:absolute; left:0px; top:-20000px; padding:0px;margin:0px;border:none;white-space:pre;line-height:normal;font-family:"+t+"; font-size:"+e+"px; font-weight:"+i+";",!W){var s=document.body;W=document.createElement("span"),W.innerHTML="";var o=document.createTextNode("Mpgyi");W.appendChild(o),s.appendChild(W)}W.style.display="",W.setAttribute("style",t),n=Math.round(W.offsetHeight),W.style.display="none"}catch(r){n=Math.ceil(1.1*e)}n=Math.max(n,e),Y[a]=n}return n}function x(t,e,i,a){if(t.addEventListener)t.addEventListener(e,i,a||!1);else{if(!t.attachEvent)return!1;t.attachEvent("on"+e,function(e){e=e||window.event,e.preventDefault=e.preventDefault||function(){e.returnValue=!1},e.stopPropagation=e.stopPropagation||function(){e.cancelBubble=!0},i.call(t,e)})}}function m(t,e,i){for(t*=N,e*=N,t=i.getImageData(t,e,2,2).data,e=!0,i=0;4>i;i++)if(t[i]!==t[i+4]|t[i]!==t[i+8]|t[i]!==t[i+12]){e=!1;break}return e?t[0]<<16|t[1]<<8|t[2]:0}function p(t,e,i){var a;a=t?t+"FontStyle":"fontStyle";var n=t?t+"FontWeight":"fontWeight",s=t?t+"FontSize":"fontSize";return t=t?t+"FontFamily":"fontFamily",a=""+(e[a]?e[a]+" ":i&&i[a]?i[a]+" ":""),a+=e[n]?e[n]+" ":i&&i[n]?i[n]+" ":"",a+=e[s]?e[s]+"px ":i&&i[s]?i[s]+"px ":"",e=e[t]?e[t]+"":i&&i[t]?i[t]+"":"",!L&&e&&(e=e.split(",")[0],"'"!==e[0]&&'"'!==e[0]&&(e="'"+e+"'")),a+=e}function u(t,e,i){return t in e?e[t]:i[t]}function g(t,e,i){if(L&&H){var a=t.getContext("2d");R=a.webkitBackingStorePixelRatio||a.mozBackingStorePixelRatio||a.msBackingStorePixelRatio||a.oBackingStorePixelRatio||a.backingStorePixelRatio||1,N=j/R,t.width=e*N,t.height=i*N,j!==R&&(t.style.width=e+"px",t.style.height=i+"px",a.scale(N,N))}else t.width=e,t.height=i}function y(t,e){var i=document.createElement("canvas");return i.setAttribute("class","canvasjs-chart-canvas"),g(i,t,e),L||"undefined"==typeof G_vmlCanvasManager||G_vmlCanvasManager.initElement(i),i}function f(t,e,i){this._defaultsKey=t;var a={};i&&D[i]&&D[i][t]&&(a=D[i][t]),this._options=e?e:{},this.setOptions(this._options,a)}function v(t,e){e=e||{},v.parent.constructor.call(this,"Chart",e,e.theme?e.theme:"theme1");var i=this;if(this._containerId=t,this._objectsInitialized=!1,this.overlaidCanvasCtx=this.ctx=null,this._indexLabels=[],this._panTimerId=0,this._lastTouchEventType="",this.panEnabled=!1,this._defaultCursor="default",this.plotArea={canvas:null,ctx:null,x1:0,y1:0,x2:0,y2:0,width:0,height:0},this._dataInRenderedOrder=[],this._container=document.getElementById(this._containerId)){this._container.innerHTML="";var a=0,n=0,a=this._options.width?this.width:0<this._container.clientWidth?this._container.clientWidth:this.width,n=this._options.height?this.height:0<this._container.clientHeight?this._container.clientHeight:this.height;if(this.width=a,this.height=n,this._canvasJSContainer=document.createElement("div"),this._canvasJSContainer.setAttribute("class","canvasjs-chart-container"),this._canvasJSContainer.style.position="relative",L||(this._canvasJSContainer.style.height="0px"),this._container.appendChild(this._canvasJSContainer),this.canvas=y(a,n),this.canvas.style.position="absolute",this.canvas.getContext){try{this.canvas.style.background=this.backgroundColor}catch(s){}this._canvasJSContainer.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.ctx.textBaseline="top",r(this.ctx),L?this.plotArea.ctx=this.ctx:(this.plotArea.canvas=y(a,n),this.plotArea.canvas.style.position="absolute",this.plotArea.canvas.setAttribute("class","plotAreaCanvas"),this._canvasJSContainer.appendChild(this.plotArea.canvas),this.plotArea.ctx=this.plotArea.canvas.getContext("2d")),this.overlaidCanvas=y(a,n),this.overlaidCanvas.style.position="absolute",this._canvasJSContainer.appendChild(this.overlaidCanvas),this.overlaidCanvasCtx=this.overlaidCanvas.getContext("2d"),this.overlaidCanvasCtx.textBaseline="top",this._eventManager=new I(this),this._toolBar=document.createElement("div"),this._toolBar.setAttribute("class","canvasjs-chart-toolbar"),this._toolBar.style.position="absolute",this._toolBar.style.top="0px",this._toolBar.style.right="0px",this._canvasJSContainer.appendChild(this._toolBar),this.zoomEnabled&&(this._zoomButton=document.createElement("button"),this._zoomButton.appendChild(document.createTextNode("Pan")),this._toolBar.appendChild(this._zoomButton),x(this._zoomButton,"click",function(){i.zoomEnabled?(i.zoomEnabled=!1,i.panEnabled=!0,i._zoomButton.innerHTML=i._cultureInfo.zoomText):(i.zoomEnabled=!0,i.panEnabled=!1,i._zoomButton.innerHTML=i._cultureInfo.panText),i.render()})),this.zoomEnabled&&(this._resetButton=document.createElement("button"),this._resetButton.appendChild(document.createTextNode("Reset")),this._toolBar.appendChild(this._resetButton),this.zoomEnabled=this._options.zoomEnabled?!0:!1,this.panEnabled=!1,this.overlaidCanvas.style.cursor=i._defaultCursor,x(this._resetButton,"click",function(){i._toolTip.hide(),i.zoomEnabled||i.panEnabled?(i.zoomEnabled=!0,i.panEnabled=!1,i._zoomButton.innerHTML=i._cultureInfo.panText,i._defaultCursor="default",i.overlaidCanvas.style.cursor=i._defaultCursor):(i.zoomEnabled=!1,i.panEnabled=!1),i.sessionVariables.axisX.internalMinimum=i._options.axisX&&i._options.axisX.minimum?i._options.axisX.minimum:null,i.sessionVariables.axisX.internalMaximum=i._options.axisX&&i._options.axisX.maximum?i._options.axisX.maximum:null,i.resetOverlayedCanvas(),i._toolBar.style.display="none",i.render()})),x(window,"resize",function(){var t=0,e=0;i._options.width?t=i.width:i.width=t=0<i._container.clientWidth?i._container.clientWidth:i.width,i._options.height?e=i.height:i.height=e=0<i._container.clientHeight?i._container.clientHeight:i.height,(i.canvas.width!==t*N||i.canvas.height!==e*N)&&(g(i.canvas,t,e),g(i.overlaidCanvas,t,e),g(i._eventManager.ghostCanvas,t,e),i.render())}),this._toolBar.style.display="none",this.bounds={x1:0,y1:0,x2:this.width,y2:this.height},x(this.overlaidCanvas,"click",function(t){i._mouseEventHandler(t)}),x(this.overlaidCanvas,"mousemove",function(t){i._mouseEventHandler(t)}),x(this.overlaidCanvas,"mouseup",function(t){i._mouseEventHandler(t)}),x(this.overlaidCanvas,"mousedown",function(t){i._mouseEventHandler(t)}),x(this.overlaidCanvas,"mouseout",function(t){i._mouseEventHandler(t)}),x(this.overlaidCanvas,window.navigator.msPointerEnabled?"MSPointerDown":"touchstart",function(t){i._touchEventHandler(t)}),x(this.overlaidCanvas,window.navigator.msPointerEnabled?"MSPointerMove":"touchmove",function(t){i._touchEventHandler(t)}),x(this.overlaidCanvas,window.navigator.msPointerEnabled?"MSPointerUp":"touchend",function(t){i._touchEventHandler(t)}),x(this.overlaidCanvas,window.navigator.msPointerEnabled?"MSPointerCancel":"touchcancel",function(t){i._touchEventHandler(t)}),this._toolTip=new A(this,this._options.toolTip,this.theme),this.layoutManager=new P(this),this.axisY2=this.axisY=this.axisX=this.data=null,this.renderCount=0,this.creditText&&this.creditHref&&(this._creditLink=document.createElement("a"),this._creditLink.setAttribute("class","canvasjs-chart-credit"),this._creditLink.setAttribute("style","outline:none;margin:0px;position:absolute;right:3px;top:"+(n-14)+"px;color:dimgrey;text-decoration:none;font-size:10px;font-family:Lucida Grande, Lucida Sans Unicode, Arial, sans-serif"),this._creditLink.setAttribute("tabIndex",-1),this._creditLink.setAttribute("href",this.creditHref),this._creditLink.innerHTML=this.creditText,this._creditLink.setAttribute("target","_blank"),this._canvasJSContainer.appendChild(this._creditLink)),this.sessionVariables={axisX:{internalMinimum:null,internalMaximum:null},axisY:{internalMinimum:null,internalMaximum:null},axisY2:{internalMinimum:null,internalMaximum:null}}}}else window.console&&window.console.log('CanvasJS Error: Chart Container with id "'+this._containerId+'" was not found')}function b(t,e){for(var i=[],a=0;a<t.length;a++)if(0==a)i.push(t[0]);else{var n,s,o;o=a-1,n=0===o?0:o-1,s=o===t.length-1?o:o+1,i[i.length]={x:t[o].x+(t[s].x-t[n].x)/e/3,y:t[o].y+(t[s].y-t[n].y)/e/3},o=a,n=0===o?0:o-1,s=o===t.length-1?o:o+1,i[i.length]={x:t[o].x-(t[s].x-t[n].x)/e/3,y:t[o].y-(t[s].y-t[n].y)/e/3},i[i.length]=t[a]}return i}function P(t){this._rightOccupied=this._leftOccupied=this._bottomOccupied=this._topOccupied=0,this.chart=t}function T(t,e){T.parent.constructor.call(this,"TextBlock",e),this.ctx=t,this._isDirty=!0,this._wrappedText=null,this._lineHeight=c(this.fontFamily,this.fontSize,this.fontWeight)}function _(t,e){_.parent.constructor.call(this,"Title",e,t.theme),this.chart=t,this.canvas=t.canvas,this.ctx=this.chart.ctx,"undefined"==typeof this._options.fontSize&&(this.fontSize=this.chart.getAutoFontSize(this.fontSize)),this.height=this.width=null,this.bounds={x1:null,y1:null,x2:null,y2:null}}function M(t,e,i){M.parent.constructor.call(this,"Legend",e,i),this.chart=t,this.canvas=t.canvas,this.ctx=this.chart.ctx,this.ghostCtx=this.chart._eventManager.ghostCtx,this.items=[],this.height=this.width=0,this.orientation=null,this.horizontalSpacing=10,this.dataSeries=[],this.bounds={x1:null,y1:null,x2:null,y2:null},"undefined"==typeof this._options.fontSize&&(this.fontSize=this.chart.getAutoFontSize(this.fontSize)),this.lineHeight=c(this.fontFamily,this.fontSize,this.fontWeight)}function S(t,e){S.parent.constructor.call(this,e),this.chart=t,this.canvas=t.canvas,this.ctx=this.chart.ctx}function k(t,e,i,a,n){k.parent.constructor.call(this,"DataSeries",e,i),this.chart=t,this.canvas=t.canvas,this._ctx=t.canvas.ctx,this.index=a,this.maxWidthInX=this.noDataPointsInPlotArea=0,this.id=n,this.chart._eventManager.objectMap[n]={id:n,objectType:"dataSeries",dataSeriesIndex:a},this.dataPointIds=[],this.axisY=this.axisX=null,this.axisPlacement=this.getDefaultAxisPlacement(),"undefined"==typeof this._options.indexLabelFontSize&&(this.indexLabelFontSize=this.chart.getAutoFontSize(this.indexLabelFontSize))}function C(t,e,i,a){if(C.parent.constructor.call(this,"Axis",e,t.theme),this.chart=t,this.canvas=t.canvas,this.ctx=t.ctx,this.intervalStartPosition=this.maxHeight=this.maxWidth=0,this.labels=[],this._labels=null,this.dataInfo={min:1/0,max:-1/0,viewPortMin:1/0,viewPortMax:-1/0,minDiff:1/0},"axisX"===i?(this.sessionVariables=this.chart.sessionVariables[i],this._options.interval||(this.intervalType=null)):this.sessionVariables="left"===a||"top"===a?this.chart.sessionVariables.axisY:this.chart.sessionVariables.axisY2,"undefined"==typeof this._options.titleFontSize&&(this.titleFontSize=this.chart.getAutoFontSize(this.titleFontSize)),"undefined"==typeof this._options.labelFontSize&&(this.labelFontSize=this.chart.getAutoFontSize(this.labelFontSize)),this.type=i,"axisX"!==i||e&&"undefined"!=typeof e.gridThickness||(this.gridThickness=0),this._position=a,this.lineCoordinates={x1:null,y1:null,x2:null,y2:null,width:null},this.labelAngle=(this.labelAngle%360+360)%360,90<this.labelAngle&&270>=this.labelAngle?this.labelAngle-=180:180<this.labelAngle&&270>=this.labelAngle?this.labelAngle-=180:270<this.labelAngle&&360>=this.labelAngle&&(this.labelAngle-=360),this._options.stripLines&&0<this._options.stripLines.length)for(this.stripLines=[],e=0;e<this._options.stripLines.length;e++)this.stripLines.push(new w(this.chart,this._options.stripLines[e],t.theme,++this.chart._eventManager.lastObjectId));this._absoluteMaximum=this._absoluteMinimum=this._titleTextBlock=null,this.hasOptionChanged("minimum")&&(this.sessionVariables.internalMinimum=this.minimum),this.hasOptionChanged("maximum")&&(this.sessionVariables.internalMaximum=this.maximum),this.trackChanges("minimum"),this.trackChanges("maximum")}function w(t,e,i,a){w.parent.constructor.call(this,"StripLine",e,i),this._thicknessType="pixel",this.id=a,null!==this.startValue&&null!==this.endValue&&(this.value=((this.startValue.getTime?this.startValue.getTime():this.startValue)+(this.endValue.getTime?this.endValue.getTime():this.endValue))/2,this.thickness=Math.max(this.endValue-this.startValue),this._thicknessType="value")}function A(t,e,i){A.parent.constructor.call(this,"ToolTip",e,i),this.chart=t,this.canvas=t.canvas,this.ctx=this.chart.ctx,this.currentDataPointIndex=this.currentSeriesIndex=-1,this._timerId=0,this._prevY=this._prevX=0/0,this._initialize()}function I(t){this.chart=t,this.lastObjectId=0,this.objectMap=[],this.rectangularRegionEventSubscriptions=[],this.previousDataPointEventObject=null,this.ghostCanvas=y(this.chart.width,this.chart.height),this.ghostCtx=this.ghostCanvas.getContext("2d"),this.mouseoveredObjectMaps=[]}function F(t,e){var i;e&&B[e]&&(i=B[e]),_.parent.constructor.call(this,"CultureInfo",i,t.theme),this.chart=t,this.canvas=t.canvas,this.ctx=this.chart.ctx}var L=!!document.createElement("canvas").getContext,X={Chart:{width:500,height:400,zoomEnabled:!1,backgroundColor:"white",theme:"theme1",animationEnabled:L?!0:!1,colorSet:"colorSet1",culture:"en",creditHref:"http://canvasjs.com/",creditText:"CanvasJS.com"},Title:{padding:0,text:null,verticalAlign:"top",horizontalAlign:"center",fontSize:20,fontFamily:"Calibri",fontWeight:"normal",fontColor:"black",fontStyle:"normal",borderThickness:0,borderColor:"black",cornerRadius:0,backgroundColor:null,margin:5},Legend:{name:null,verticalAlign:"center",horizontalAlign:"right",fontSize:14,fontFamily:"calibri",fontWeight:"normal",fontColor:"black",fontStyle:"normal",cursor:null,itemmouseover:null,itemmouseout:null,itemmousemove:null,itemclick:null},ToolTip:{enabled:!0,borderColor:null,shared:!1,animationEnabled:!0,content:null},Axis:{minimum:null,maximum:null,interval:null,intervalType:null,title:null,titleFontColor:"black",titleFontSize:20,titleFontFamily:"arial",titleFontWeight:"normal",titleFontStyle:"normal",labelAngle:0,labelFontFamily:"arial",labelFontColor:"black",labelFontSize:12,labelFontWeight:"normal",labelFontStyle:"normal",labelAutoFit:!1,labelWrap:!0,labelMaxWidth:null,prefix:"",suffix:"",includeZero:!0,tickLength:5,tickColor:"black",tickThickness:1,lineColor:"black",lineThickness:1,gridColor:"A0A0A0",gridThickness:0,interlacedColor:null,valueFormatString:null,margin:2,stripLines:[]},StripLine:{value:null,startValue:null,endValue:null,color:"orange",thickness:2,label:"",labelBackgroundColor:"#EEEEEE",labelFontFamily:"arial",labelFontColor:"orange",labelFontSize:12,labelFontWeight:"normal",labelFontStyle:"normal"},DataSeries:{name:null,dataPoints:null,label:"",bevelEnabled:!1,cursor:null,indexLabel:"",indexLabelPlacement:"outside",indexLabelOrientation:"horizontal",indexLabelFontColor:"black",indexLabelFontSize:12,indexLabelFontStyle:"normal",indexLabelFontFamily:"Arial",indexLabelFontWeight:"normal",indexLabelBackgroundColor:null,indexLabelLineColor:null,indexLabelLineThickness:1,indexLabelMaxWidth:null,indexLabelWrap:!0,lineThickness:2,color:null,startAngle:0,type:"column",xValueType:"number",axisYType:"primary",xValueFormatString:null,yValueFormatString:null,showInLegend:null,legendMarkerType:null,legendMarkerColor:null,legendText:null,markerType:"circle",markerColor:null,markerSize:null,markerBorderColor:null,markerBorderThickness:null,mouseover:null,mouseout:null,mousemove:null,click:null,toolTipContent:null,visible:!0},CultureInfo:{decimalSeparator:".",digitGroupSeparator:",",zoomText:"Zoom",panText:"Pan",resetText:"Reset",days:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),shortDays:"Sun Mon Tue Wed Thu Fri Sat".split(" "),months:"January February March April May June July August September October November December".split(" "),shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")},TextBlock:{x:0,y:0,width:null,height:null,maxWidth:null,maxHeight:null,padding:0,angle:0,text:"",horizontalAlign:"center",fontSize:12,fontFamily:"calibri",fontWeight:"normal",fontColor:"black",fontStyle:"normal",borderThickness:0,borderColor:"black",cornerRadius:0,backgroundColor:null,textBaseline:"top"}},B={en:{}},z={colorSet1:"#369EAD #C24642 #7F6084 #86B402 #A2D1CF #C8B631 #6DBCEB #52514E #4F81BC #A064A1 #F79647".split(" "),colorSet2:"#4F81BC #C0504E #9BBB58 #23BFAA #8064A1 #4AACC5 #F79647 #33558B".split(" "),colorSet3:"#8CA1BC #36845C #017E82 #8CB9D0 #708C98 #94838D #F08891 #0366A7 #008276 #EE7757 #E5BA3A #F2990B #03557B #782970".split(" ")},D={theme1:{Chart:{colorSet:z[0]},Title:{fontFamily:L?"Calibri, Optima, Candara, Verdana, Geneva, sans-serif":"calibri",fontSize:33,fontColor:"#3A3A3A",fontWeight:"bold",verticalAlign:"top",margin:10},Axis:{titleFontSize:26,titleFontColor:"#666666",titleFontFamily:L?"Calibri, Optima, Candara, Verdana, Geneva, sans-serif":"calibri",labelFontFamily:L?"Calibri, Optima, Candara, Verdana, Geneva, sans-serif":"calibri",labelFontSize:18,labelFontColor:"grey",tickColor:"#BBBBBB",tickThickness:2,gridThickness:2,gridColor:"#BBBBBB",lineThickness:2,lineColor:"#BBBBBB"},Legend:{verticalAlign:"bottom",horizontalAlign:"center",fontFamily:L?"monospace, sans-serif,arial black":"calibri"},DataSeries:{indexLabelFontColor:"grey",indexLabelFontFamily:L?"Calibri, Optima, Candara, Verdana, Geneva, sans-serif":"calibri",indexLabelFontSize:18,indexLabelLineThickness:1}},theme2:{Chart:{colorSet:"colorSet2"},Title:{fontFamily:"impact, charcoal, arial black, sans-serif",fontSize:32,fontColor:"#333333",verticalAlign:"top",margin:10},Axis:{titleFontSize:22,titleFontColor:"rgb(98,98,98)",titleFontFamily:L?"monospace, sans-serif,arial black":"arial",titleFontWeight:"bold",labelFontFamily:L?"monospace, Courier New, Courier":"arial",labelFontSize:16,labelFontColor:"grey",labelFontWeight:"bold",tickColor:"grey",tickThickness:2,gridThickness:2,gridColor:"grey",lineThickness:0},Legend:{verticalAlign:"bottom",horizontalAlign:"center",fontFamily:L?"monospace, sans-serif,arial black":"arial"},DataSeries:{indexLabelFontColor:"grey",indexLabelFontFamily:L?"Courier New, Courier, monospace":"arial",indexLabelFontWeight:"bold",indexLabelFontSize:18,indexLabelLineThickness:1}},theme3:{Chart:{colorSet:"colorSet1"},Title:{fontFamily:L?"Candara, Optima, Trebuchet MS, Helvetica Neue, Helvetica, Trebuchet MS, serif":"calibri",fontSize:32,fontColor:"#3A3A3A",fontWeight:"bold",verticalAlign:"top",margin:10},Axis:{titleFontSize:22,titleFontColor:"rgb(98,98,98)",titleFontFamily:L?"Verdana, Geneva, Calibri, sans-serif":"calibri",labelFontFamily:L?"Calibri, Optima, Candara, Verdana, Geneva, sans-serif":"calibri",labelFontSize:18,labelFontColor:"grey",tickColor:"grey",tickThickness:2,gridThickness:2,gridColor:"grey",lineThickness:2,lineColor:"grey"},Legend:{verticalAlign:"bottom",horizontalAlign:"center",fontFamily:L?"monospace, sans-serif,arial black":"calibri"},DataSeries:{bevelEnabled:!0,indexLabelFontColor:"grey",indexLabelFontFamily:L?"Candara, Optima, Calibri, Verdana, Geneva, sans-serif":"calibri",indexLabelFontSize:18,indexLabelLineColor:"lightgrey",indexLabelLineThickness:2}}},E={numberDuration:1,yearDuration:314496e5,monthDuration:2592e6,weekDuration:6048e5,dayDuration:864e5,hourDuration:36e5,minuteDuration:6e4,secondDuration:1e3,millisecondDuration:1,dayOfWeekFromInt:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ")},Y={},W=null,O=function(){var t=/D{1,4}|M{1,4}|Y{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|f{1,3}|t{1,2}|T{1,2}|K|z{1,3}|"[^"]*"|'[^']*'/g,e="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),i="Sun Mon Tue Wed Thu Fri Sat".split(" "),a="January February March April May June July August September October November December".split(" "),n="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),o=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,r=/[^-+\dA-Z]/g;return function(l,h,d){var c=d?d.days:e,x=d?d.months:a,m=d?d.shortDays:i,p=d?d.shortMonths:n;d="";var u=!1;if(l=l&&l.getTime?l:l?new Date(l):new Date,isNaN(l))throw SyntaxError("invalid date");"UTC:"===h.slice(0,4)&&(h=h.slice(4),u=!0),d=u?"getUTC":"get";var g=l[d+"Date"](),y=l[d+"Day"](),f=l[d+"Month"](),v=l[d+"FullYear"](),b=l[d+"Hours"](),P=l[d+"Minutes"](),T=l[d+"Seconds"](),_=l[d+"Milliseconds"](),M=u?0:l.getTimezoneOffset();return d=h.replace(t,function(t){switch(t){case"D":return g;case"DD":return s(g,2);case"DDD":return m[y];case"DDDD":return c[y];case"M":return f+1;case"MM":return s(f+1,2);case"MMM":return p[f];case"MMMM":return x[f];case"Y":return parseInt(String(v).slice(-2));case"YY":return s(String(v).slice(-2),2);case"YYY":return s(String(v).slice(-3),3);case"YYYY":return s(v,4);case"h":return b%12||12;case"hh":return s(b%12||12,2);case"H":return b;case"HH":return s(b,2);case"m":return P;case"mm":return s(P,2);case"s":return T;case"ss":return s(T,2);case"f":return String(_).slice(0,1);case"ff":return s(String(_).slice(0,2),2);case"fff":return s(String(_).slice(0,3),3);case"t":return 12>b?"a":"p";case"tt":return 12>b?"am":"pm";case"T":return 12>b?"A":"P";case"TT":return 12>b?"AM":"PM";case"K":return u?"UTC":(String(l).match(o)||[""]).pop().replace(r,"");case"z":return(M>0?"-":"+")+Math.floor(Math.abs(M)/60);case"zz":return(M>0?"-":"+")+s(Math.floor(Math.abs(M)/60),2);case"zzz":return(M>0?"-":"+")+s(Math.floor(Math.abs(M)/60),2)+s(Math.abs(M)%60,2);default:return t.slice(1,t.length-1)}})}}(),U=function(t,e,i){if(null===t)return"";t=Number(t);var a=0>t?!0:!1;a&&(t*=-1);var n=i?i.decimalSeparator:".",o=i?i.digitGroupSeparator:",",r="";e=String(e);var r=1,l=i="",h=-1,d=[],c=[],x=0,m=0,p=0,u=!1,g=0,l=e.match(/"[^"]*"|'[^']*'|[eE][+-]*[0]+|[,]+[.]|\u2030|./g);e=null;for(var y=0;l&&y<l.length;y++)if(e=l[y],"."===e&&0>h)h=y;else{if("%"===e)r*=100;else{if("‰"===e){r*=1e3;continue}if(","===e[0]&&"."===e[e.length-1]){r/=Math.pow(1e3,e.length-1),h=y+e.length-1;continue}"E"!==e[0]&&"e"!==e[0]||"0"!==e[e.length-1]||(u=!0)}0>h?(d.push(e),"#"===e||"0"===e?x++:","===e&&p++):(c.push(e),"#"!==e&&"0"!==e||m++)}for(u&&(e=Math.floor(t),g=(0===e?"":String(e)).length-x,r/=Math.pow(10,g)),0>h&&(h=y),r=(t*r).toFixed(m),e=r.split("."),t=(e[0]+"").split(""),r=(e[1]+"").split(""),t&&"0"===t[0]&&t.shift(),y=u=l=m=h=0;0<d.length;)if(e=d.pop(),"#"===e||"0"===e)if(h++,h===x){var f=t;if(t=[],"0"===e)for(e=x-m-(f?f.length:0);e>0;)f.unshift("0"),e--;for(;0<f.length;)i=f.pop()+i,y++,0===y%u&&l===p&&0<f.length&&(i=o+i);a&&(i="-"+i)}else 0<t.length?(i=t.pop()+i,m++,y++):"0"===e&&(i="0"+i,m++,y++),0===y%u&&l===p&&0<t.length&&(i=o+i);else"E"!==e[0]&&"e"!==e[0]||"0"!==e[e.length-1]||!/[eE][+-]*[0]+/.test(e)?","===e?(l++,u=y,y=0,0<t.length&&(i=o+i)):i=1<e.length&&('"'===e[0]&&'"'===e[e.length-1]||"'"===e[0]&&"'"===e[e.length-1])?e.slice(1,e.length-1)+i:e+i:(e=0>g?e.replace("+","").replace("-",""):e.replace("-",""),i+=e.replace(/[0]+/,function(t){return s(g,t.length)}));for(a=0;0<c.length;)e=c.shift(),"#"===e||"0"===e?0<r.length&&0!==Number(r.join(""))?i+=(0===a++?n:"")+r.shift():"0"===e&&(i+=(0===a++?n:"")+"0"):1<e.length&&('"'===e[0]&&'"'===e[e.length-1]||"'"===e[0]&&"'"===e[e.length-1])?i+=(0===a++?n:"")+e.slice(1,e.length-1):"E"!==e[0]&&"e"!==e[0]||"0"!==e[e.length-1]||!/[eE][+-]*[0]+/.test(e)?i+=(0===a++?n:"")+e:(e=0>g?e.replace("+","").replace("-",""):e.replace("-",""),i+=e.replace(/[0]+/,function(t){return s(g,t.length)}));return i},V=function(t){var e=0,i=0;return t=t||window.event,t.offsetX||0===t.offsetX?(e=t.offsetX,i=t.offsetY):t.layerX||0==t.layerX?(e=t.layerX,i=t.layerY):(e=t.pageX-t.target.offsetLeft,i=t.pageY-t.target.offsetTop),{x:e,y:i}},H=!0,j=window.devicePixelRatio||1,R=1,N=H?j/R:1;f.prototype.setOptions=function(t,e){if(X[this._defaultsKey]){var i,a=X[this._defaultsKey];for(i in a)this[i]=t&&i in t?t[i]:e&&i in e?e[i]:a[i]}},f.prototype.trackChanges=function(t){this._options._oldOptions||(this._options._oldOptions={}),this._options._oldOptions[t]=this._options[t]},f.prototype.isBeingTracked=function(t){return this._options._oldOptions||(this._options._oldOptions={}),this._options._oldOptions[t]?!0:!1},f.prototype.hasOptionChanged=function(t){return this._options._oldOptions||(this._options._oldOptions={}),this._options._oldOptions[t]!==this._options[t]},t(v,f),v.prototype._initialize=function(){this._selectedColorSet="undefined"!=typeof z[this.colorSet]?z[this.colorSet]:z.colorSet1,this.ctx.clearRect(0,0,this.width,this.height),this.ctx.beginPath(),this.axisY2=this.axisY=this.axisX=null,this._indexLabels=[],this._dataInRenderedOrder=[],this._events=[],this._eventManager&&this._eventManager.reset(),this.plotInfo={axisPlacement:null,axisXValueType:null,plotTypes:[]},this.layoutManager.reset(),this._cultureInfo=new F(this,this._options.culture),this.data=[];for(var t=0,e=0;e<this._options.data.length;e++)if(t++,!this._options.data[e].type||0<=v._supportedChartTypes.indexOf(this._options.data[e].type)){var i=new k(this,this._options.data[e],this.theme,t-1,++this._eventManager.lastObjectId);null===i.name&&(i.name="DataSeries "+t),null===i.color?1<this._options.data.length?(i._colorSet=[this._selectedColorSet[i.index%this._selectedColorSet.length]],i.color=this._selectedColorSet[i.index%this._selectedColorSet.length]):i._colorSet="line"===i.type||"stepLine"===i.type||"spline"===i.type||"area"===i.type||"stepArea"===i.type||"splineArea"===i.type||"stackedArea"===i.type||"stackedArea100"===i.type?[this._selectedColorSet[0]]:this._selectedColorSet:i._colorSet=[i.color],null===i.markerSize&&(("line"===i.type||"stepLine"===i.type||"spline"===i.type)&&i.dataPoints&&i.dataPoints.length<this.width/16||"scatter"===i.type)&&(i.markerSize=8),"bubble"!==i.type&&"scatter"!==i.type||!i.dataPoints||i.dataPoints.sort(h),this.data.push(i);var a,n=i.axisPlacement;if("normal"===n?"xySwapped"===this.plotInfo.axisPlacement?a='You cannot combine "'+i.type+'" with bar chart':"none"===this.plotInfo.axisPlacement?a='You cannot combine "'+i.type+'" with pie chart':null===this.plotInfo.axisPlacement&&(this.plotInfo.axisPlacement="normal"):"xySwapped"===n?"normal"===this.plotInfo.axisPlacement?a='You cannot combine "'+i.type+'" with line, area, column or pie chart':"none"===this.plotInfo.axisPlacement?a='You cannot combine "'+i.type+'" with pie chart':null===this.plotInfo.axisPlacement&&(this.plotInfo.axisPlacement="xySwapped"):"none"==n&&("normal"===this.plotInfo.axisPlacement?a='You cannot combine "'+i.type+'" with line, area, column or bar chart':"xySwapped"===this.plotInfo.axisPlacement?a='You cannot combine "'+i.type+'" with bar chart':null===this.plotInfo.axisPlacement&&(this.plotInfo.axisPlacement="none")),a&&window.console)return void window.console.log(a)}this._objectsInitialized=!0},v._supportedChartTypes="line stepLine spline column area stepArea splineArea bar bubble scatter stackedColumn stackedColumn100 stackedBar stackedBar100 stackedArea stackedArea100 pie doughnut".split(" "),v._supportedChartTypes.indexOf||(v._supportedChartTypes.indexOf=function(t,e){var i=this.length>>>0,a=Number(e)||0,a=0>a?Math.ceil(a):Math.floor(a);for(0>a&&(a+=i);i>a;a++)if(a in this&&this[a]===t)return a;return-1}),v.prototype.render=function(){this._initialize();for(var t=0;t<this.data.length;t++)("normal"===this.plotInfo.axisPlacement||"xySwapped"===this.plotInfo.axisPlacement)&&(this.data[t].axisYType&&"primary"!==this.data[t].axisYType?"secondary"===this.data[t].axisYType&&(this.axisY2||("normal"===this.plotInfo.axisPlacement?this.axisY2=new C(this,this._options.axisY2,"axisY","right"):"xySwapped"===this.plotInfo.axisPlacement&&(this.axisY2=new C(this,this._options.axisY2,"axisY","top"))),this.data[t].axisY=this.axisY2):(this.axisY||("normal"===this.plotInfo.axisPlacement?this.axisY=new C(this,this._options.axisY,"axisY","left"):"xySwapped"===this.plotInfo.axisPlacement&&(this.axisY=new C(this,this._options.axisY,"axisY","bottom"))),this.data[t].axisY=this.axisY),this.axisX||("normal"===this.plotInfo.axisPlacement?this.axisX=new C(this,this._options.axisX,"axisX","bottom"):"xySwapped"===this.plotInfo.axisPlacement&&(this.axisX=new C(this,this._options.axisX,"axisX","left"))),this.data[t].axisX=this.axisX);for(this._processData(),this._options.title&&(this._title=new _(this,this._options.title),this._title.render()),this.legend=new M(this,this._options.legend,this.theme),t=0;t<this.data.length;t++)this.data[t].showInLegend&&this.legend.dataSeries.push(this.data[t]);if(this.legend.render(),"normal"===this.plotInfo.axisPlacement||"xySwapped"===this.plotInfo.axisPlacement)this.layoutManager.getFreeSpace(),C.setLayoutAndRender(this.axisX,this.axisY,this.axisY2,this.plotInfo.axisPlacement,this.layoutManager.getFreeSpace());else{if("none"!==this.plotInfo.axisPlacement)return;this.preparePlotArea()}for(t=0;t<this.plotInfo.plotTypes.length;t++)for(var e=this.plotInfo.plotTypes[t],i=0;i<e.plotUnits.length;i++){var a=e.plotUnits[i];"line"===a.type?this.renderLine(a):"stepLine"===a.type?this.renderStepLine(a):"spline"===a.type?this.renderSpline(a):"column"===a.type?this.renderColumn(a):"bar"===a.type?this.renderBar(a):"area"===a.type?this.renderArea(a):"stepArea"===a.type?this.renderStepArea(a):"splineArea"===a.type?this.renderSplineArea(a):"stackedColumn"===a.type?this.renderStackedColumn(a):"stackedColumn100"===a.type?this.renderStackedColumn100(a):"stackedBar"===a.type?this.renderStackedBar(a):"stackedBar100"===a.type?this.renderStackedBar100(a):"stackedArea"===a.type?this.renderStackedArea(a):"stackedArea100"===a.type?this.renderStackedArea100(a):"bubble"===a.type?this.renderBubble(a):"scatter"===a.type?this.renderScatter(a):"pie"===a.type?this.renderPie(a):"doughnut"===a.type&&this.renderPie(a);for(var n=0;n<a.dataSeriesIndexes.length;n++)this._dataInRenderedOrder.push(this.data[a.dataSeriesIndexes[n]])}0<this._indexLabels.length&&this.renderIndexLabels(),this.attachPlotAreaEventHandlers(),this.zoomEnabled||this.panEnabled||"none"===this._toolBar.style.display||(this._toolBar.style.display="none"),this._toolTip._updateToolTip(),this.renderCount++},v.prototype.attachPlotAreaEventHandlers=function(){this.attachEvent({context:this,chart:this,mousedown:this._plotAreaMouseDown,mouseup:this._plotAreaMouseUp,mousemove:this._plotAreaMouseMove,cursor:this.zoomEnabled?"col-resize":"move",cursor:this.panEnabled?"move":"default",capture:!0,bounds:this.plotArea})},v.prototype.categoriseDataSeries=function(){for(var t="",e=0;e<this.data.length;e++)if(t=this.data[e],t.dataPoints&&0!==t.dataPoints.length&&t.visible&&0<=v._supportedChartTypes.indexOf(t.type)){for(var i=null,a=!1,n=null,s=!1,o=0;o<this.plotInfo.plotTypes.length;o++)if(this.plotInfo.plotTypes[o].type===t.type){a=!0,i=this.plotInfo.plotTypes[o];break}for(a||(i={type:t.type,totalDataSeries:0,plotUnits:[]},this.plotInfo.plotTypes.push(i)),o=0;o<i.plotUnits.length;o++)if(i.plotUnits[o].axisYType===t.axisYType){s=!0,n=i.plotUnits[o];
break}s||(n={type:t.type,previousDataSeriesCount:0,index:i.plotUnits.length,plotType:i,axisYType:t.axisYType,axisY:"primary"===t.axisYType?this.axisY:this.axisY2,axisX:this.axisX,dataSeriesIndexes:[]},i.plotUnits.push(n)),i.totalDataSeries++,n.dataSeriesIndexes.push(e)}for(e=0;e<this.plotInfo.plotTypes.length;e++)for(i=this.plotInfo.plotTypes[e],o=t=0;o<i.plotUnits.length;o++)i.plotUnits[o].previousDataSeriesCount=t,t+=i.plotUnits[o].dataSeriesIndexes.length},v.prototype.assignIdToDataPoints=function(){for(var t=0;t<this.data.length;t++){var e=this.data[t];if(e.dataPoints)for(var i=e.dataPoints.length,a=0;i>a;a++)e.dataPointIds[a]=++this._eventManager.lastObjectId}},v.prototype._processData=function(){this.assignIdToDataPoints(),this.categoriseDataSeries();for(var t=0;t<this.plotInfo.plotTypes.length;t++)for(var e=this.plotInfo.plotTypes[t],i=0;i<e.plotUnits.length;i++){var a=e.plotUnits[i];"line"===a.type||"stepLine"===a.type||"spline"===a.type||"column"===a.type||"area"===a.type||"stepArea"===a.type||"splineArea"===a.type||"bar"===a.type||"bubble"===a.type||"scatter"===a.type?this._processMultiseriesPlotUnit(a):"stackedColumn"===a.type||"stackedBar"===a.type||"stackedArea"===a.type?this._processStackedPlotUnit(a):"stackedColumn100"!==a.type&&"stackedBar100"!==a.type&&"stackedArea100"!==a.type||this._processStacked100PlotUnit(a)}},v.prototype._processMultiseriesPlotUnit=function(t){if(t.dataSeriesIndexes&&!(1>t.dataSeriesIndexes.length))for(var e,i,a=t.axisY.dataInfo,n=t.axisX.dataInfo,s=!1,o=0;o<t.dataSeriesIndexes.length;o++){var r=this.data[t.dataSeriesIndexes[o]],l=0,h=!1,d=!1;if("normal"===r.axisPlacement||"xySwapped"===r.axisPlacement)var c=this.sessionVariables.axisX.internalMinimum?this.sessionVariables.axisX.internalMinimum:this._options.axisX&&this._options.axisX.minimum?this._options.axisX.minimum:-1/0,x=this.sessionVariables.axisX.internalMaximum?this.sessionVariables.axisX.internalMaximum:this._options.axisX&&this._options.axisX.maximum?this._options.axisX.maximum:1/0;for((r.dataPoints[l].x&&r.dataPoints[l].x.getTime||"dateTime"===r.xValueType)&&(s=!0),l=0;l<r.dataPoints.length;l++){if("undefined"==typeof r.dataPoints[l].x&&(r.dataPoints[l].x=l),r.dataPoints[l].x.getTime?(s=!0,e=r.dataPoints[l].x.getTime()):e=r.dataPoints[l].x,i=r.dataPoints[l].y,e<n.min&&(n.min=e),e>n.max&&(n.max=e),i<a.min&&(a.min=i),i>a.max&&(a.max=i),l>0){var m=e-r.dataPoints[l-1].x;0>m&&(m*=-1),n.minDiff>m&&0!==m&&(n.minDiff=m)}if(!(c>e)||h){if(!h&&(h=!0,l>0)){l-=2;continue}if(e>x&&!d)d=!0;else if(e>x&&d)continue;r.dataPoints[l].label&&(t.axisX.labels[e]=r.dataPoints[l].label),e<n.viewPortMin&&(n.viewPortMin=e),e>n.viewPortMax&&(n.viewPortMax=e),i<a.viewPortMin&&(a.viewPortMin=i),i>a.viewPortMax&&(a.viewPortMax=i)}}this.plotInfo.axisXValueType=r.xValueType=s?"dateTime":"number"}},v.prototype._processStackedPlotUnit=function(t){if(t.dataSeriesIndexes&&!(1>t.dataSeriesIndexes.length)){for(var e,i,a=t.axisY.dataInfo,n=t.axisX.dataInfo,s=!1,o=[],r=[],l=0;l<t.dataSeriesIndexes.length;l++){var h=this.data[t.dataSeriesIndexes[l]],d=0,c=!1,x=!1;if("normal"===h.axisPlacement||"xySwapped"===h.axisPlacement)var m=this.sessionVariables.axisX.internalMinimum?this.sessionVariables.axisX.internalMinimum:this._options.axisX&&this._options.axisX.minimum?this._options.axisX.minimum:-1/0,p=this.sessionVariables.axisX.internalMaximum?this.sessionVariables.axisX.internalMaximum:this._options.axisX&&this._options.axisX.maximum?this._options.axisX.maximum:1/0;for((h.dataPoints[d].x&&h.dataPoints[d].x.getTime||"dateTime"===h.xValueType)&&(s=!0),d=0;d<h.dataPoints.length;d++){if("undefined"==typeof h.dataPoints[d].x&&(h.dataPoints[d].x=d),h.dataPoints[d].x.getTime?(s=!0,e=h.dataPoints[d].x.getTime()):e=h.dataPoints[d].x,i=h.dataPoints[d].y,e<n.min&&(n.min=e),e>n.max&&(n.max=e),d>0){var u=e-h.dataPoints[d-1].x;0>u&&(u*=-1),n.minDiff>u&&0!==u&&(n.minDiff=u)}if(!(m>e)||c){if(!c&&(c=!0,d>0)){d-=2;continue}if(e>p&&!x)x=!0;else if(e>p&&x)continue;h.dataPoints[d].label&&(t.axisX.labels[e]=h.dataPoints[d].label),e<n.viewPortMin&&(n.viewPortMin=e),e>n.viewPortMax&&(n.viewPortMax=e),i>=0?o[e]=o[e]?o[e]+i:i:r[e]=r[e]?r[e]+i:i}}this.plotInfo.axisXValueType=h.xValueType=s?"dateTime":"number"}for(d in o)isNaN(d)||(t=o[d],t<a.min&&(a.min=t),t>a.max&&(a.max=t),d<n.viewPortMin||d>n.viewPortMax||(t<a.viewPortMin&&(a.viewPortMin=t),t>a.viewPortMax&&(a.viewPortMax=t)));for(d in r)isNaN(d)||(t=r[d],t<a.min&&(a.min=t),t>a.max&&(a.max=t),d<n.viewPortMin||d>n.viewPortMax||(t<a.viewPortMin&&(a.viewPortMin=t),t>a.viewPortMax&&(a.viewPortMax=t)))}},v.prototype._processStacked100PlotUnit=function(t){if(t.dataSeriesIndexes&&!(1>t.dataSeriesIndexes.length)){for(var e,i,a=t.axisY.dataInfo,n=t.axisX.dataInfo,s=!1,o=!1,r=!1,l=[],h=0;h<t.dataSeriesIndexes.length;h++){var d=this.data[t.dataSeriesIndexes[h]],c=0,x=!1,m=!1;if("normal"===d.axisPlacement||"xySwapped"===d.axisPlacement)var p=this.sessionVariables.axisX.internalMinimum?this.sessionVariables.axisX.internalMinimum:this._options.axisX&&this._options.axisX.minimum?this._options.axisX.minimum:-1/0,u=this.sessionVariables.axisX.internalMaximum?this.sessionVariables.axisX.internalMaximum:this._options.axisX&&this._options.axisX.maximum?this._options.axisX.maximum:1/0;for((d.dataPoints[c].x&&d.dataPoints[c].x.getTime||"dateTime"===d.xValueType)&&(s=!0),c=0;c<d.dataPoints.length;c++){if("undefined"==typeof d.dataPoints[c].x&&(d.dataPoints[c].x=c),d.dataPoints[c].x.getTime?(s=!0,e=d.dataPoints[c].x.getTime()):e=d.dataPoints[c].x,i=d.dataPoints[c].y,e<n.min&&(n.min=e),e>n.max&&(n.max=e),c>0){var g=e-d.dataPoints[c-1].x;0>g&&(g*=-1),n.minDiff>g&&0!==g&&(n.minDiff=g)}if(!(p>e)||x){if(!x&&(x=!0,c>0)){c-=2;continue}if(e>u&&!m)m=!0;else if(e>u&&m)continue;d.dataPoints[c].label&&(t.axisX.labels[e]=d.dataPoints[c].label),e<n.viewPortMin&&(n.viewPortMin=e),e>n.viewPortMax&&(n.viewPortMax=e),i>=0?o=!0:r=!0,l[e]=l[e]?l[e]+Math.abs(i):Math.abs(i)}}this.plotInfo.axisXValueType=d.xValueType=s?"dateTime":"number"}o&&!r?(a.max=99,a.min=1):o&&r?(a.max=99,a.min=-99):!o&&r&&(a.max=-1,a.min=-99),a.viewPortMin=a.min,a.viewPortMax=a.max,t.dataPointYSums=l}},v.prototype.getDataPointAtXY=function(t,e,i){i=i||!1;for(var a=[],n=this._dataInRenderedOrder.length-1;n>=0;n--){var s=null;(s=this._dataInRenderedOrder[n].getDataPointAtXY(t,e,i))&&a.push(s)}for(t=null,e=!1,i=0;i<a.length;i++)if(("line"===a[i].dataSeries.type||"stepLine"===a[i].dataSeries.type||"area"===a[i].dataSeries.type||"stepArea"===a[i].dataSeries.type)&&(n=u("markerSize",a[i].dataPoint,a[i].dataSeries)||8,a[i].distance<=n/2)){e=!0;break}for(i=0;i<a.length;i++)e&&"line"!==a[i].dataSeries.type&&"stepLine"!==a[i].dataSeries.type&&"area"!==a[i].dataSeries.type&&"stepArea"!==a[i].dataSeries.type||(t?a[i].distance<=t.distance&&(t=a[i]):t=a[i]);return t},v.prototype.getObjectAtXY=function(t,e,i){var a=null;if(i=this.getDataPointAtXY(t,e,i||!1))a=i.dataSeries.dataPointIds[i.dataPointIndex];else if(L)a=m(t,e,this._eventManager.ghostCtx);else for(i=0;i<this.legend.items.length;i++){var n=this.legend.items[i];t>=n.x1&&t<=n.x2&&e>=n.y1&&e<=n.y2&&(a=n.id)}return a},v.prototype.getAutoFontSize=function(t){return t/=400,Math.round(Math.min(this.width,this.height)*t)},v.prototype.resetOverlayedCanvas=function(){this.overlaidCanvasCtx.clearRect(0,0,this.width,this.height)},v.prototype.attachEvent=function(t){this._events.push(t)},v.prototype._touchEventHandler=function(t){if(t.changedTouches){var e=[],i=(e=t.changedTouches)?e[0]:t;switch(t.type){case"touchstart":case"MSPointerDown":e=["mousemove","mousedown"];break;case"touchmove":case"MSPointerMove":e=["mousemove"];break;case"touchend":case"MSPointerUp":e="touchstart"===this._lastTouchEventType||"MSPointerDown"===this._lastTouchEventType?["mouseup","click"]:["mouseup"];break;default:return}this._lastTouchEventType=t.type;for(var a=0;a<e.length;a++){var n=e[a],s=document.createEvent("MouseEvent");s.initMouseEvent(n,!0,!0,window,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null),i.target.dispatchEvent(s),t.preventManipulation&&t.preventManipulation(),t.preventDefault&&t.preventDefault()}}},v.prototype._mouseEventHandler=function(t){t.preventManipulation&&t.preventManipulation(),t.preventDefault&&t.preventDefault(),"undefined"==typeof t.target&&t.srcElement&&(t.target=t.srcElement);var e,i,a=V(t),n=t.type;if(t.which?i=3==t.which:t.button&&(i=2==t.button),!i){if(v.capturedEventParam)e=v.capturedEventParam,"mouseup"===n&&(v.capturedEventParam=null,e.chart.overlaidCanvas.releaseCapture?e.chart.overlaidCanvas.releaseCapture():document.body.removeEventListener("mouseup",e.chart._mouseEventHandler,!1)),e.hasOwnProperty(n)&&e[n].call(e.context,a.x,a.y);else if(this._events){for(i=0;i<this._events.length;i++)if(this._events[i].hasOwnProperty(n)){e=this._events[i];var s=e.bounds;if(a.x>=s.x1&&a.x<=s.x2&&a.y>=s.y1&&a.y<=s.y2){e[n].call(e.context,a.x,a.y),"mousedown"===n&&!0===e.capture?(v.capturedEventParam=e,this.overlaidCanvas.setCapture?this.overlaidCanvas.setCapture():document.body.addEventListener("mouseup",this._mouseEventHandler,!1)):"mouseup"===n&&(e.chart.overlaidCanvas.releaseCapture?e.chart.overlaidCanvas.releaseCapture():document.body.removeEventListener("mouseup",this._mouseEventHandler,!1));break}e=null}t.target.style.cursor=e&&e.cursor?e.cursor:this._defaultCursor}this._toolTip&&this._toolTip.enabled&&(n=this.plotArea,(a.x<n.x1||a.x>n.x2||a.y<n.y1||a.y>n.y2)&&this._toolTip.hide()),this.isDrag&&this.zoomEnabled||!this._eventManager||this._eventManager.mouseEventHandler(t)}},v.prototype._plotAreaMouseDown=function(t,e){this.isDrag=!0,this.dragStartPoint="none"!==this.plotInfo.axisPlacement?{x:t,y:e,xMinimum:this.axisX.minimum,xMaximum:this.axisX.maximum}:{x:t,y:e}},v.prototype._plotAreaMouseUp=function(t,e){var i,a;if(("normal"===this.plotInfo.axisPlacement||"xySwapped"===this.plotInfo.axisPlacement)&&this.isDrag){var n=0,n=this.axisX.lineCoordinates,n="xySwapped"===this.plotInfo.axisPlacement?e-this.dragStartPoint.y:this.dragStartPoint.x-t;if(Math.abs(this.axisX.maximum-this.axisX.minimum),2<Math.abs(n)){if(this.panEnabled)n=!1,a=0,this.axisX.sessionVariables.internalMinimum<this.axisX._absoluteMinimum?(a=this.axisX._absoluteMinimum-this.axisX.sessionVariables.internalMinimum,this.axisX.sessionVariables.internalMinimum+=a,this.axisX.sessionVariables.internalMaximum+=a,n=!0):this.axisX.sessionVariables.internalMaximum>this.axisX._absoluteMaximum&&(a=this.axisX.sessionVariables.internalMaximum-this.axisX._absoluteMaximum,this.axisX.sessionVariables.internalMaximum-=a,this.axisX.sessionVariables.internalMinimum-=a,n=!0),n&&this.render();else if(this.zoomEnabled){if(this.resetOverlayedCanvas(),!this.dragStartPoint)return;"xySwapped"===this.plotInfo.axisPlacement?(i=Math.min(this.dragStartPoint.y,e),a=Math.max(this.dragStartPoint.y,e),1<Math.abs(i-a)&&(n=this.axisX.lineCoordinates,a=this.axisX.maximum-(this.axisX.maximum-this.axisX.minimum)/n.height*(a-n.y1),n=this.axisX.maximum-(this.axisX.maximum-this.axisX.minimum)/n.height*(i-n.y1),a=Math.max(a,this.axisX.dataInfo.min),n=Math.min(n,this.axisX.dataInfo.max),Math.abs((n-a)/this.axisX.dataInfo.minDiff)>=.008*this.height&&(this.axisX.sessionVariables.internalMinimum=a,this.axisX.sessionVariables.internalMaximum=n,this.render()))):"normal"===this.plotInfo.axisPlacement&&(a=Math.min(this.dragStartPoint.x,t),i=Math.max(this.dragStartPoint.x,t),1<Math.abs(a-i)&&(n=this.axisX.lineCoordinates,a=(this.axisX.maximum-this.axisX.minimum)/n.width*(a-n.x1)+this.axisX.minimum,n=(this.axisX.maximum-this.axisX.minimum)/n.width*(i-n.x1)+this.axisX.minimum,a=Math.max(a,this.axisX.dataInfo.min),n=Math.min(n,this.axisX.dataInfo.max),Math.abs((n-a)/this.axisX.dataInfo.minDiff)>=.01*this.width&&(this.axisX.sessionVariables.internalMinimum=a,this.axisX.sessionVariables.internalMaximum=n,this.render())))}this.zoomEnabled&&"none"===this._toolBar.style.display&&(this._toolBar.style.display="inline",this._zoomButton.innerHTML=this._cultureInfo.panText,this._resetButton.innerHTML=this._cultureInfo.resetText)}}this.isDrag=!1},v.prototype._plotAreaMouseMove=function(t,e){if(this.isDrag&&"none"!==this.plotInfo.axisPlacement){var i=0,a=0,a=this.axisX.lineCoordinates;if("xySwapped"===this.plotInfo.axisPlacement?(i=e-this.dragStartPoint.y,a=Math.abs(this.axisX.maximum-this.axisX.minimum)/a.height*i):(i=this.dragStartPoint.x-t,a=Math.abs(this.axisX.maximum-this.axisX.minimum)/a.width*i),2<Math.abs(i)&&8>Math.abs(i)&&(this.panEnabled||this.zoomEnabled)?this._toolTip.hide():!this._toolTip.enabled||this.panEnabled||this.zoomEnabled||this._toolTip.mouseMoveHandler(t,e),2<Math.abs(i)&&(this.panEnabled||this.zoomEnabled))if(this.panEnabled){this.axisX.sessionVariables.internalMinimum=this.dragStartPoint.xMinimum+a,this.axisX.sessionVariables.internalMaximum=this.dragStartPoint.xMaximum+a,i=0,this.axisX.sessionVariables.internalMinimum<this.axisX._absoluteMinimum-n(this.axisX.interval,this.axisX.intervalType)?(i=this.axisX._absoluteMinimum-n(this.axisX.interval,this.axisX.intervalType)-this.axisX.sessionVariables.internalMinimum,this.axisX.sessionVariables.internalMinimum+=i,this.axisX.sessionVariables.internalMaximum+=i):this.axisX.sessionVariables.internalMaximum>this.axisX._absoluteMaximum+n(this.axisX.interval,this.axisX.intervalType)&&(i=this.axisX.sessionVariables.internalMaximum-(this.axisX._absoluteMaximum+n(this.axisX.interval,this.axisX.intervalType)),this.axisX.sessionVariables.internalMaximum-=i,this.axisX.sessionVariables.internalMinimum-=i);var s=this;clearTimeout(this._panTimerId),this._panTimerId=setTimeout(function(){s.render()},0)}else this.zoomEnabled&&(i=this.plotArea,this.resetOverlayedCanvas(),a=this.overlaidCanvasCtx.globalAlpha,this.overlaidCanvasCtx.globalAlpha=.7,this.overlaidCanvasCtx.fillStyle="#A0ABB8","xySwapped"===this.plotInfo.axisPlacement?this.overlaidCanvasCtx.fillRect(i.x1,this.dragStartPoint.y,i.x2-i.x1,e-this.dragStartPoint.y):"normal"===this.plotInfo.axisPlacement&&this.overlaidCanvasCtx.fillRect(this.dragStartPoint.x,i.y1,t-this.dragStartPoint.x,i.y2-i.y1),this.overlaidCanvasCtx.globalAlpha=a)}else this._toolTip.enabled&&this._toolTip.mouseMoveHandler(t,e)},v.prototype.preparePlotArea=function(){var t=this.plotArea,e=this.axisY?this.axisY:this.axisY2;!L&&(0<t.x1||0<t.y1)&&t.ctx.translate(t.x1,t.y1),this.axisX&&e?(t.x1=this.axisX.lineCoordinates.x1<this.axisX.lineCoordinates.x2?this.axisX.lineCoordinates.x1:e.lineCoordinates.x1,t.y1=this.axisX.lineCoordinates.y1<e.lineCoordinates.y1?this.axisX.lineCoordinates.y1:e.lineCoordinates.y1,t.x2=this.axisX.lineCoordinates.x2>e.lineCoordinates.x2?this.axisX.lineCoordinates.x2:e.lineCoordinates.x2,t.y2=this.axisX.lineCoordinates.y2>this.axisX.lineCoordinates.y1?this.axisX.lineCoordinates.y2:e.lineCoordinates.y2,t.width=t.x2-t.x1,t.height=t.y2-t.y1):(e=this.layoutManager.getFreeSpace(),t.x1=e.x1,t.x2=e.x2,t.y1=e.y1,t.y2=e.y2,t.width=e.width,t.height=e.height),L||(t.canvas.width=t.width,t.canvas.height=t.height,t.canvas.style.left=t.x1+"px",t.canvas.style.top=t.y1+"px",(0<t.x1||0<t.y1)&&t.ctx.translate(-t.x1,-t.y1))},v.prototype.getPixelCoordinatesOnPlotArea=function(t,e){return{x:this.axisX.getPixelCoordinatesOnAxis(t).x,y:this.axisY.getPixelCoordinatesOnAxis(e).y}},v.prototype.renderIndexLabels=function(){var t=this.plotArea.ctx;t.textBaseline="middle";for(var e=this.plotArea,i=0;i<this._indexLabels.length;i++){var a,n,s,o=this._indexLabels[i];t.fillStyle=u("indexLabelFontColor",o.dataPoint,o.dataSeries),t.font=p("indexLabel",o.dataPoint,o.dataSeries);var r=this.replaceKeywordsWithValue(u("indexLabel",o.dataPoint,o.dataSeries),o.dataPoint,o.dataSeries),l=t.measureText(r).width,h=u("indexLabelFontSize",o.dataPoint,o.dataSeries),d=u("indexLabelPlacement",o.dataPoint,o.dataSeries),c=u("indexLabelOrientation",o.dataPoint,o.dataSeries),x=s=0,m=0,g=0,y=0;o.point.x<e.x1||o.point.x>e.x2||o.point.y<e.y1||o.point.y>e.y2||("column"===o.chartType||"stackedColumn"===o.chartType||"stackedColumn100"===o.chartType||"bar"===o.chartType||"stackedBar"===o.chartType||"stackedBar100"===o.chartType?(Math.abs(o.bounds.x1,o.bounds.x2),Math.abs(o.bounds.y1,o.bounds.y2),"normal"===this.plotInfo.axisPlacement?("outside"===d?(x=e.y1,m=e.y2):"inside"===d&&(x=o.bounds.y1,m=o.bounds.y2),"horizontal"===c?(a=o.point.x-l/2,n=0<=o.dataPoint.y?Math.min(Math.max(o.point.y-h/2-5,x+h/2+5),m-h/2-5):Math.max(Math.min(o.point.y+h/2+5,m-h/2),x+h/2+5)):"vertical"===c&&(a=o.point.x,n=0<=o.dataPoint.y?Math.min(Math.max(o.point.y-5,x+l+5),m):Math.max(Math.min(o.point.y+l+5,m-5),x),s=-90)):"xySwapped"===this.plotInfo.axisPlacement&&("outside"===d?(g=e.x1,y=e.x2):"inside"===d&&(g=o.bounds.x1,y=o.bounds.x2),"horizontal"===c?(n=o.point.y,a=0<=o.dataPoint.y?Math.max(Math.min(o.point.x+5,y-l),g):Math.min(Math.max(o.point.x-l-5,g),y)):"vertical"===c&&(n=o.point.y+l/2,a=0<=o.dataPoint.y?Math.max(Math.min(o.point.x+h/2+5,y-h/2),g):Math.min(Math.max(o.point.x-h/2-5,g+h/2),y+h/2),s=-90))):"horizontal"===c?(a=o.point.x-l/2,n=0<=o.dataPoint.y?Math.max(o.point.y-h/2-5,e.y1+h/2):Math.min(o.point.y+h/2+5,e.y2-h/2)):"vertical"===c&&(a=o.point.x,n=0<=o.dataPoint.y?Math.max(o.point.y-5,e.y1+l):Math.min(o.point.y+l+5,e.y2),s=-90),t.save(),t.translate(a,n),t.rotate(Math.PI/180*s),t.fillText(r,0,0),t.restore())}},v.prototype.renderLine=function(t){var e=this.plotArea.ctx;if(!(0>=t.dataSeriesIndexes.length)){var i=this._eventManager.ghostCtx;e.save();var a=this.plotArea;e.beginPath(),e.rect(a.x1,a.y1,a.width,a.height),e.clip();for(var a=[],n=0;n<t.dataSeriesIndexes.length;n++){var s=t.dataSeriesIndexes[n],o=this.data[s];e.lineWidth=o.lineThickness;var r=o.dataPoints,l=o.id;this._eventManager.objectMap[l]={objectType:"dataSeries",dataSeriesIndex:s},l=d(l),i.strokeStyle=l,i.lineWidth=0<o.lineThickness?Math.max(o.lineThickness,4):0,l=o._colorSet[0],e.strokeStyle=l;var h,c,x=!0,m=0;if(e.beginPath(),0<r.length){for(var p=!1,m=0;m<r.length;m++)if(h=r[m].x.getTime?r[m].x.getTime():r[m].x,!(h<t.axisX.dataInfo.viewPortMin||h>t.axisX.dataInfo.viewPortMax))if("number"!=typeof r[m].y)m>0&&(e.stroke(),L&&i.stroke()),p=!0;else{h=t.axisX.conversionParameters.reference+t.axisX.conversionParameters.pixelPerUnit*(h-t.axisX.conversionParameters.minimum)+.5<<0,c=t.axisY.conversionParameters.reference+t.axisY.conversionParameters.pixelPerUnit*(r[m].y-t.axisY.conversionParameters.minimum)+.5<<0;var u=o.dataPointIds[m];if(this._eventManager.objectMap[u]={id:u,objectType:"dataPoint",dataSeriesIndex:s,dataPointIndex:m,x1:h,y1:c},x||p?(e.beginPath(),e.moveTo(h,c),L&&(i.beginPath(),i.moveTo(h,c)),p=x=!1):(e.lineTo(h,c),L&&i.lineTo(h,c),0==m%500&&(e.stroke(),e.beginPath(),e.moveTo(h,c),L&&(i.stroke(),i.beginPath(),i.moveTo(h,c)))),0<r[m].markerSize||0<o.markerSize){var g=o.getMarkerProperties(m,h,c,e);a.push(g),(!o.maxWidthInX||g.size>o.maxWidthInX)&&(o.maxWidthInX=g.size/(1<t.axisX.conversionParameters.pixelPerUnit?t.axisX.conversionParameters.pixelPerUnit-1:t.axisX.conversionParameters.pixelPerUnit)),u=d(u),L&&a.push({x:h,y:c,ctx:i,type:g.type,size:g.size,color:u,borderColor:u,borderThickness:g.borderThickness})}(r[m].indexLabel||o.indexLabel)&&this._indexLabels.push({chartType:"line",dataPoint:r[m],dataSeries:o,point:{x:h,y:c},color:l})}e.stroke(),L&&i.stroke()}}G.drawMarkers(a),e.restore(),e.beginPath(),L&&i.beginPath()}},v.prototype.renderStepLine=function(t){var e=this.plotArea.ctx;if(!(0>=t.dataSeriesIndexes.length)){var i=this._eventManager.ghostCtx;e.save();var a=this.plotArea;e.beginPath(),e.rect(a.x1,a.y1,a.width,a.height),e.clip();for(var a=[],n=0;n<t.dataSeriesIndexes.length;n++){var s=t.dataSeriesIndexes[n],o=this.data[s];e.lineWidth=o.lineThickness;var r=o.dataPoints,l=o.id;this._eventManager.objectMap[l]={objectType:"dataSeries",dataSeriesIndex:s},l=d(l),i.strokeStyle=l,i.lineWidth=0<o.lineThickness?Math.max(o.lineThickness,4):0,l=o._colorSet[0],e.strokeStyle=l;var h,c,x=!0,m=0;if(e.beginPath(),0<r.length){for(var p=!1,m=0;m<r.length;m++)if(h=r[m].getTime?r[m].x.getTime():r[m].x,!(h<t.axisX.dataInfo.viewPortMin||h>t.axisX.dataInfo.viewPortMax))if("number"!=typeof r[m].y)m>0&&(e.stroke(),L&&i.stroke()),p=!0;else{var u=c;h=t.axisX.conversionParameters.reference+t.axisX.conversionParameters.pixelPerUnit*(h-t.axisX.conversionParameters.minimum)+.5<<0,c=t.axisY.conversionParameters.reference+t.axisY.conversionParameters.pixelPerUnit*(r[m].y-t.axisY.conversionParameters.minimum)+.5<<0;var g=o.dataPointIds[m];this._eventManager.objectMap[g]={id:g,objectType:"dataPoint",dataSeriesIndex:s,dataPointIndex:m,x1:h,y1:c},x||p?(e.beginPath(),e.moveTo(h,c),L&&(i.beginPath(),i.moveTo(h,c)),p=x=!1):(e.lineTo(h,u),L&&i.lineTo(h,u),e.lineTo(h,c),L&&i.lineTo(h,c),0==m%500&&(e.stroke(),e.beginPath(),e.moveTo(h,c),L&&(i.stroke(),i.beginPath(),i.moveTo(h,c)))),(0<r[m].markerSize||0<o.markerSize)&&(u=o.getMarkerProperties(m,h,c,e),a.push(u),(!o.maxWidthInX||u.size>o.maxWidthInX)&&(o.maxWidthInX=u.size/(1<t.axisX.conversionParameters.pixelPerUnit?t.axisX.conversionParameters.pixelPerUnit-1:t.axisX.conversionParameters.pixelPerUnit)),g=d(g),L&&a.push({x:h,y:c,ctx:i,type:u.type,size:u.size,color:g,borderColor:g,borderThickness:u.borderThickness})),(r[m].indexLabel||o.indexLabel)&&this._indexLabels.push({chartType:"stepLine",dataPoint:r[m],dataSeries:o,point:{x:h,y:c},color:l})}e.stroke(),L&&i.stroke()}}G.drawMarkers(a),e.restore(),e.beginPath(),L&&i.beginPath()}},v.prototype.renderSpline=function(t){function e(t){if(t=b(t,2),0<t.length){i.beginPath(),L&&a.beginPath(),i.moveTo(t[0].x,t[0].y),L&&a.moveTo(t[0].x,t[0].y);for(var e=0;e<t.length-3;e+=3)i.bezierCurveTo(t[e+1].x,t[e+1].y,t[e+2].x,t[e+2].y,t[e+3].x,t[e+3].y),L&&a.bezierCurveTo(t[e+1].x,t[e+1].y,t[e+2].x,t[e+2].y,t[e+3].x,t[e+3].y),e>0&&0===e%3e3&&(i.stroke(),i.beginPath(),i.moveTo(t[e+3].x,t[e+3].y),L&&(a.stroke(),a.beginPath(),a.moveTo(t[e+3].x,t[e+3].y)));i.stroke(),L&&a.stroke()}}var i=this.plotArea.ctx;if(!(0>=t.dataSeriesIndexes.length)){var a=this._eventManager.ghostCtx;i.save();var n=this.plotArea;i.beginPath(),i.rect(n.x1,n.y1,n.width,n.height),i.clip();for(var n=[],s=0;s<t.dataSeriesIndexes.length;s++){var o=t.dataSeriesIndexes[s],r=this.data[o];i.lineWidth=r.lineThickness;var l=r.dataPoints,h=r.id;this._eventManager.objectMap[h]={objectType:"dataSeries",dataSeriesIndex:o},h=d(h),a.strokeStyle=h,a.lineWidth=0<r.lineThickness?Math.max(r.lineThickness,4):0,h=r._colorSet[0],i.strokeStyle=h;var c,x,m=0,p=[];if(i.beginPath(),0<l.length)for(m=0;m<l.length;m++)if(c=l[m].getTime?l[m].x.getTime():l[m].x,!(c<t.axisX.dataInfo.viewPortMin||c>t.axisX.dataInfo.viewPortMax))if("number"!=typeof l[m].y)m>0&&(e(p),p=[]);else{c=t.axisX.conversionParameters.reference+t.axisX.conversionParameters.pixelPerUnit*(c-t.axisX.conversionParameters.minimum)+.5<<0,x=t.axisY.conversionParameters.reference+t.axisY.conversionParameters.pixelPerUnit*(l[m].y-t.axisY.conversionParameters.minimum)+.5<<0;var u=r.dataPointIds[m];if(this._eventManager.objectMap[u]={id:u,objectType:"dataPoint",dataSeriesIndex:o,dataPointIndex:m,x1:c,y1:x},p[p.length]={x:c,y:x},0<l[m].markerSize||0<r.markerSize){var g=r.getMarkerProperties(m,c,x,i);n.push(g),(!r.maxWidthInX||g.size>r.maxWidthInX)&&(r.maxWidthInX=g.size/(1<t.axisX.conversionParameters.pixelPerUnit?t.axisX.conversionParameters.pixelPerUnit-1:t.axisX.conversionParameters.pixelPerUnit)),u=d(u),L&&n.push({x:c,y:x,ctx:a,type:g.type,size:g.size,color:u,borderColor:u,borderThickness:g.borderThickness})}(l[m].indexLabel||r.indexLabel)&&this._indexLabels.push({chartType:"spline",dataPoint:l[m],dataSeries:r,point:{x:c,y:x},color:h})}e(p)}G.drawMarkers(n),i.restore(),i.beginPath(),L&&a.beginPath()}};var q=function(t,e,i,a,n,s,o,r,l,h){var d=a-e>15&&n-i>15?8:.35*Math.min(a-e,n-i);t.beginPath(),t.moveTo(e,i),t.save(),t.fillStyle=s,t.fillRect(e,i,a-e,n-i),t.restore(),!0===o&&(t.save(),t.beginPath(),t.moveTo(e,i),t.lineTo(e+d,i+d),t.lineTo(a-d,i+d),t.lineTo(a,i),t.closePath(),o=t.createLinearGradient((a+e)/2,i+d,(a+e)/2,i),o.addColorStop(0,s),o.addColorStop(1,"rgba(255, 255, 255, .4)"),t.fillStyle=o,t.fill(),t.restore()),!0===r&&(t.save(),t.beginPath(),t.moveTo(e,n),t.lineTo(e+d,n-d),t.lineTo(a-d,n-d),t.lineTo(a,n),t.closePath(),o=t.createLinearGradient((a+e)/2,n-d,(a+e)/2,n),o.addColorStop(0,s),o.addColorStop(1,"rgba(255, 255, 255, .4)"),t.fillStyle=o,t.fill(),t.restore()),!0===l&&(t.save(),t.beginPath(),t.moveTo(e,i),t.lineTo(e+d,i+d),t.lineTo(e+d,n-d),t.lineTo(e,n),t.closePath(),o=t.createLinearGradient(e+d,(n+i)/2,e,(n+i)/2),o.addColorStop(0,s),o.addColorStop(1,"rgba(255, 255, 255, 0.1)"),t.fillStyle=o,t.fill(),t.restore()),!0===h&&(t.save(),t.beginPath(),t.moveTo(a,i),t.lineTo(a-d,i+d),t.lineTo(a-d,n-d),t.lineTo(a,n),o=t.createLinearGradient(a-d,(n+i)/2,a,(n+i)/2),o.addColorStop(0,s),o.addColorStop(1,"rgba(255, 255, 255, 0.1)"),t.fillStyle=o,o.addColorStop(0,s),o.addColorStop(1,"rgba(255, 255, 255, 0.1)"),t.fillStyle=o,t.fill(),t.closePath(),t.restore())};v.prototype.renderColumn=function(t){var e=this.plotArea.ctx;if(!(0>=t.dataSeriesIndexes.length)){var i,a,n,s=null,o=this.plotArea,r=0,l=t.axisY.conversionParameters.reference+t.axisY.conversionParameters.pixelPerUnit*(0-t.axisY.conversionParameters.minimum)<<0,r=.15*this.width,h=t.axisX.dataInfo.minDiff,c=.9*(o.width/Math.abs(t.axisX.maximum-t.axisX.minimum)*Math.abs(h)/t.plotType.totalDataSeries)<<0;for(c>r?c=r:1/0===h?c=r:1>c&&(c=1),e.save(),L&&this._eventManager.ghostCtx.save(),e.beginPath(),e.rect(o.x1,o.y1,o.width,o.height),e.clip(),L&&(this._eventManager.ghostCtx.rect(o.x1,o.y1,o.width,o.height),this._eventManager.ghostCtx.clip()),o=0;o<t.dataSeriesIndexes.length;o++){var h=t.dataSeriesIndexes[o],x=this.data[h],m=x.dataPoints;if(x.maxWidthInX=c/(1<t.axisX.conversionParameters.pixelPerUnit?t.axisX.conversionParameters.pixelPerUnit-1:t.axisX.conversionParameters.pixelPerUnit),0<m.length)for(var p=c>5&&x.bevelEnabled?!0:!1,r=0;r<m.length;r++)if(n=m[r].getTime?m[r].x.getTime():m[r].x,!(n<t.axisX.dataInfo.viewPortMin||n>t.axisX.dataInfo.viewPortMax)&&"number"==typeof m[r].y){i=t.axisX.conversionParameters.reference+t.axisX.conversionParameters.pixelPerUnit*(n-t.axisX.conversionParameters.minimum)+.5<<0,a=t.axisY.conversionParameters.reference+t.axisY.conversionParameters.pixelPerUnit*(m[r].y-t.axisY.conversionParameters.minimum)+.5<<0,i=i-t.plotType.totalDataSeries*c/2+(t.previousDataSeriesCount+o)*c<<0;var u,g=i+c<<0;0<=m[r].y?u=l:(u=a,a=l),a>u&&(u=a=u),s=m[r].color?m[r].color:x._colorSet[r%x._colorSet.length],q(e,i,a,g,u,s,p&&0<=m[r].y,0>m[r].y&&p,!1,!1),s=x.dataPointIds[r],this._eventManager.objectMap[s]={id:s,objectType:"dataPoint",dataSeriesIndex:h,dataPointIndex:r,x1:i,y1:a,x2:g,y2:u},s=d(s),L&&q(this._eventManager.ghostCtx,i,a,g,u,s,!1,!1,!1,!1),(m[r].indexLabel||x.indexLabel)&&this._indexLabels.push({chartType:"column",dataPoint:m[r],dataSeries:x,point:{x:i+(g-i)/2,y:0<=m[r].y?a:u},bounds:{x1:i,y1:Math.min(a,u),x2:g,y2:Math.max(a,u)},color:s})}}e.restore(),L&&this._eventManager.ghostCtx.restore()}},v.prototype.renderStackedColumn=function(t){var e=this.plotArea.ctx;if(!(0>=t.dataSeriesIndexes.length)){var i,a=null,n=this.plotArea,s=[],o=[],r=0,l=t.axisY.conversionParameters.reference+t.axisY.conversionParameters.pixelPerUnit*(0-t.axisY.conversionParameters.minimum)<<0,r=.15*this.width,h=t.axisX.dataInfo.minDiff,c=.9*(n.width/Math.abs(t.axisX.maximum-t.axisX.minimum)*Math.abs(h)/t.plotType.plotUnits.length)<<0;for(c>r?c=r:1/0===h?c=r:1>c&&(c=1),e.save(),L&&this._eventManager.ghostCtx.save(),e.beginPath(),e.rect(n.x1,n.y1,n.width,n.height),e.clip(),L&&(this._eventManager.ghostCtx.rect(n.x1,n.y1,n.width,n.height),this._eventManager.ghostCtx.clip()),h=0;h<t.dataSeriesIndexes.length;h++){var x=t.dataSeriesIndexes[h],m=this.data[x],p=m.dataPoints;if(m.maxWidthInX=c/(1<t.axisX.conversionParameters.pixelPerUnit?t.axisX.conversionParameters.pixelPerUnit-1:t.axisX.conversionParameters.pixelPerUnit),0<p.length){var u=c>5&&m.bevelEnabled?!0:!1;for(e.strokeStyle="#4572A7 ",r=0;r<p.length;r++)if(a=p[r].x.getTime?p[r].x.getTime():p[r].x,!(a<t.axisX.dataInfo.viewPortMin||a>t.axisX.dataInfo.viewPortMax)&&"number"==typeof p[r].y){n=t.axisX.conversionParameters.reference+t.axisX.conversionParameters.pixelPerUnit*(a-t.axisX.conversionParameters.minimum)+.5<<0,i=t.axisY.conversionParameters.reference+t.axisY.conversionParameters.pixelPerUnit*(p[r].y-t.axisY.conversionParameters.minimum)+.5<<0;var g,y=n-t.plotType.plotUnits.length*c/2+t.index*c<<0,f=y+c<<0;if(0<=p[r].y){var v=s[a]?s[a]:0;i-=v,g=l-v,s[a]=v+(g-i)}else v=o[a]?o[a]:0,g=i+v,i=l+v,o[a]=v+(g-i);a=p[r].color?p[r].color:m._colorSet[r%m._colorSet.length],q(e,y,i,f,g,a,u&&0<=p[r].y,0>p[r].y&&u,!1,!1),a=m.dataPointIds[r],this._eventManager.objectMap[a]={id:a,objectType:"dataPoint",dataSeriesIndex:x,dataPointIndex:r,x1:y,y1:i,x2:f,y2:g},a=d(a),L&&q(this._eventManager.ghostCtx,y,i,f,g,a,!1,!1,!1,!1),(p[r].indexLabel||m.indexLabel)&&this._indexLabels.push({chartType:"stackedColumn",dataPoint:p[r],dataSeries:m,point:{x:n,y:0<=p[r].y?i:g},bounds:{x1:y,y1:Math.min(i,g),x2:f,y2:Math.max(i,g)},color:a})}}}e.restore(),L&&this._eventManager.ghostCtx.restore()}},v.prototype.renderStackedColumn100=function(t){var e=this.plotArea.ctx;if(!(0>=t.dataSeriesIndexes.length)){var i,a=null,n=this.plotArea,s=[],o=[],r=0,l=t.axisY.conversionParameters.reference+t.axisY.conversionParameters.pixelPerUnit*(0-t.axisY.conversionParameters.minimum)<<0,r=.15*this.width,h=t.axisX.dataInfo.minDiff,c=.9*(n.width/Math.abs(t.axisX.maximum-t.axisX.minimum)*Math.abs(h)/t.plotType.plotUnits.length)<<0;for(c>r?c=r:1/0===h?c=r:1>c&&(c=1),e.save(),L&&this._eventManager.ghostCtx.save(),e.beginPath(),e.rect(n.x1,n.y1,n.width,n.height),e.clip(),L&&(this._eventManager.ghostCtx.rect(n.x1,n.y1,n.width,n.height),this._eventManager.ghostCtx.clip()),h=0;h<t.dataSeriesIndexes.length;h++){var x=t.dataSeriesIndexes[h],m=this.data[x],p=m.dataPoints;if(m.maxWidthInX=c/(1<t.axisX.conversionParameters.pixelPerUnit?t.axisX.conversionParameters.pixelPerUnit-1:t.axisX.conversionParameters.pixelPerUnit),0<p.length)for(var u=c>5&&m.bevelEnabled?!0:!1,r=0;r<p.length;r++)if(a=p[r].x.getTime?p[r].x.getTime():p[r].x,!(a<t.axisX.dataInfo.viewPortMin||a>t.axisX.dataInfo.viewPortMax)&&"number"==typeof p[r].y){n=t.axisX.conversionParameters.reference+t.axisX.conversionParameters.pixelPerUnit*(a-t.axisX.conversionParameters.minimum)+.5<<0,i=t.axisY.conversionParameters.reference+t.axisY.conversionParameters.pixelPerUnit*((0!==t.dataPointYSums[a]?100*(p[r].y/t.dataPointYSums[a]):0)-t.axisY.conversionParameters.minimum)+.5<<0;var g,y=n-t.plotType.plotUnits.length*c/2+t.index*c<<0,f=y+c<<0;if(0<=p[r].y){var v=s[a]?s[a]:0;i-=v,g=l-v,s[a]=v+(g-i)}else v=o[a]?o[a]:0,g=i+v,i=l+v,o[a]=v+(g-i);a=p[r].color?p[r].color:m._colorSet[r%m._colorSet.length],q(e,y,i,f,g,a,u&&0<=p[r].y,0>p[r].y&&u,!1,!1),a=m.dataPointIds[r],this._eventManager.objectMap[a]={id:a,objectType:"dataPoint",dataSeriesIndex:x,dataPointIndex:r,x1:y,y1:i,x2:f,y2:g},a=d(a),L&&q(this._eventManager.ghostCtx,y,i,f,g,a,!1,!1,!1,!1),(p[r].indexLabel||m.indexLabel)&&this._indexLabels.push({chartType:"stackedColumn100",dataPoint:p[r],dataSeries:m,point:{x:n,y:0<=p[r].y?i:g},bounds:{x1:y,y1:Math.min(i,g),x2:f,y2:Math.max(i,g)},color:a})}}e.restore(),L&&this._eventManager.ghostCtx.restore()}},v.prototype.renderBar=function(t){var e=this.plotArea.ctx;if(!(0>=t.dataSeriesIndexes.length)){var i,a,n,s=null,o=this.plotArea,r=0,l=t.axisY.conversionParameters.reference+t.axisY.conversionParameters.pixelPerUnit*(0-t.axisY.conversionParameters.minimum)<<0,r=.15*this.height,h=t.axisX.dataInfo.minDiff,c=.9*(o.height/Math.abs(t.axisX.maximum-t.axisX.minimum)*Math.abs(h)/t.plotType.totalDataSeries)<<0;for(c>r?c=r:1/0===h?c=r:1>c&&(c=1),e.save(),L&&this._eventManager.ghostCtx.save(),e.beginPath(),e.rect(o.x1,o.y1,o.width,o.height),e.clip(),L&&(this._eventManager.ghostCtx.rect(o.x1,o.y1,o.width,o.height),this._eventManager.ghostCtx.clip()),o=0;o<t.dataSeriesIndexes.length;o++){var h=t.dataSeriesIndexes[o],x=this.data[h],m=x.dataPoints;if(x.maxWidthInX=c/(1<t.axisX.conversionParameters.pixelPerUnit?t.axisX.conversionParameters.pixelPerUnit-1:t.axisX.conversionParameters.pixelPerUnit),0<m.length){var p=c>5&&x.bevelEnabled?!0:!1;
for(e.strokeStyle="#4572A7 ",r=0;r<m.length;r++)if(n=m[r].getTime?m[r].x.getTime():m[r].x,!(n<t.axisX.dataInfo.viewPortMin||n>t.axisX.dataInfo.viewPortMax)&&"number"==typeof m[r].y){a=t.axisX.conversionParameters.reference+t.axisX.conversionParameters.pixelPerUnit*(n-t.axisX.conversionParameters.minimum)+.5<<0,i=t.axisY.conversionParameters.reference+t.axisY.conversionParameters.pixelPerUnit*(m[r].y-t.axisY.conversionParameters.minimum)+.5<<0,a=a-t.plotType.totalDataSeries*c/2+(t.previousDataSeriesCount+o)*c<<0;var u,g=a+c<<0;0<=m[r].y?u=l:(u=i,i=l),s=m[r].color?m[r].color:x._colorSet[r%x._colorSet.length],q(e,u,a,i,g,s,p,!1,!1,!1),s=x.dataPointIds[r],this._eventManager.objectMap[s]={id:s,objectType:"dataPoint",dataSeriesIndex:h,dataPointIndex:r,x1:u,y1:a,x2:i,y2:g},s=d(s),L&&q(this._eventManager.ghostCtx,u,a,i,g,s,!1,!1,!1,!1),this._indexLabels.push({chartType:"bar",dataPoint:m[r],dataSeries:x,point:{x:0<=m[r].y?i:u,y:a+(g-a)/2},bounds:{x1:Math.min(u,i),y1:a,x2:Math.max(u,i),y2:g},color:s})}}}e.restore(),L&&this._eventManager.ghostCtx.restore()}},v.prototype.renderStackedBar=function(t){var e=this.plotArea.ctx;if(!(0>=t.dataSeriesIndexes.length)){var i,a=null,n=this.plotArea,s=[],o=[],r=0,l=t.axisY.conversionParameters.reference+t.axisY.conversionParameters.pixelPerUnit*(0-t.axisY.conversionParameters.minimum)<<0,r=.15*this.width,h=t.axisX.dataInfo.minDiff,c=.9*(n.height/Math.abs(t.axisX.maximum-t.axisX.minimum)*Math.abs(h)/t.plotType.plotUnits.length)<<0;for(c>r?c=r:1/0===h?c=r:1>c&&(c=1),e.save(),L&&this._eventManager.ghostCtx.save(),e.beginPath(),e.rect(n.x1,n.y1,n.width,n.height),e.clip(),L&&(this._eventManager.ghostCtx.rect(n.x1,n.y1,n.width,n.height),this._eventManager.ghostCtx.clip()),h=0;h<t.dataSeriesIndexes.length;h++){var x=t.dataSeriesIndexes[h],m=this.data[x],p=m.dataPoints;if(m.maxWidthInX=c/(1<t.axisX.conversionParameters.pixelPerUnit?t.axisX.conversionParameters.pixelPerUnit-1:t.axisX.conversionParameters.pixelPerUnit),0<p.length){var u=c>5&&m.bevelEnabled?!0:!1;for(e.strokeStyle="#4572A7 ",r=0;r<p.length;r++)if(a=p[r].x.getTime?p[r].x.getTime():p[r].x,!(a<t.axisX.dataInfo.viewPortMin||a>t.axisX.dataInfo.viewPortMax)&&"number"==typeof p[r].y){n=t.axisX.conversionParameters.reference+t.axisX.conversionParameters.pixelPerUnit*(a-t.axisX.conversionParameters.minimum)+.5<<0,i=t.axisY.conversionParameters.reference+t.axisY.conversionParameters.pixelPerUnit*(p[r].y-t.axisY.conversionParameters.minimum)+.5<<0;var g,y=n-t.plotType.plotUnits.length*c/2+t.index*c<<0,f=y+c<<0;if(0<=p[r].y){var v=s[a]?s[a]:0;g=l+v,i+=v,s[a]=v+(i-g)}else v=o[a]?o[a]:0,g=i-v,i=l-v,o[a]=v+(i-g);a=p[r].color?p[r].color:m._colorSet[r%m._colorSet.length],q(e,g,y,i,f,a,u,!1,!1,!1),a=m.dataPointIds[r],this._eventManager.objectMap[a]={id:a,objectType:"dataPoint",dataSeriesIndex:x,dataPointIndex:r,x1:g,y1:y,x2:i,y2:f},a=d(a),L&&q(this._eventManager.ghostCtx,g,y,i,f,a,!1,!1,!1,!1),this._indexLabels.push({chartType:"stackedBar",dataPoint:p[r],dataSeries:m,point:{x:0<=p[r].y?i:g,y:n},bounds:{x1:Math.min(g,i),y1:y,x2:Math.max(g,i),y2:f},color:a})}}}e.restore(),L&&this._eventManager.ghostCtx.restore()}},v.prototype.renderStackedBar100=function(t){var e=this.plotArea.ctx;if(!(0>=t.dataSeriesIndexes.length)){var i,a=null,n=this.plotArea,s=[],o=[],r=0,l=t.axisY.conversionParameters.reference+t.axisY.conversionParameters.pixelPerUnit*(0-t.axisY.conversionParameters.minimum)<<0,r=.15*this.width,h=t.axisX.dataInfo.minDiff,c=.9*(n.height/Math.abs(t.axisX.maximum-t.axisX.minimum)*Math.abs(h)/t.plotType.plotUnits.length)<<0;for(c>r?c=r:1/0===h?c=r:1>c&&(c=1),e.save(),L&&this._eventManager.ghostCtx.save(),e.beginPath(),e.rect(n.x1,n.y1,n.width,n.height),e.clip(),L&&(this._eventManager.ghostCtx.rect(n.x1,n.y1,n.width,n.height),this._eventManager.ghostCtx.clip()),h=0;h<t.dataSeriesIndexes.length;h++){var x=t.dataSeriesIndexes[h],m=this.data[x],p=m.dataPoints;if(m.maxWidthInX=c/(1<t.axisX.conversionParameters.pixelPerUnit?t.axisX.conversionParameters.pixelPerUnit-1:t.axisX.conversionParameters.pixelPerUnit),0<p.length){var u=c>5&&m.bevelEnabled?!0:!1;for(e.strokeStyle="#4572A7 ",r=0;r<p.length;r++)if(a=p[r].x.getTime?p[r].x.getTime():p[r].x,!(a<t.axisX.dataInfo.viewPortMin||a>t.axisX.dataInfo.viewPortMax)&&"number"==typeof p[r].y){n=t.axisX.conversionParameters.reference+t.axisX.conversionParameters.pixelPerUnit*(a-t.axisX.conversionParameters.minimum)+.5<<0,i=t.axisY.conversionParameters.reference+t.axisY.conversionParameters.pixelPerUnit*((0!==t.dataPointYSums[a]?100*(p[r].y/t.dataPointYSums[a]):0)-t.axisY.conversionParameters.minimum)+.5<<0;var g,y=n-t.plotType.plotUnits.length*c/2+t.index*c<<0,f=y+c<<0;if(0<=p[r].y){var v=s[a]?s[a]:0;g=l+v,i+=v,s[a]=v+(i-g)}else v=o[a]?o[a]:0,g=i-v,i=l-v,o[a]=v+(i-g);a=p[r].color?p[r].color:m._colorSet[r%m._colorSet.length],q(e,g,y,i,f,a,u,!1,!1,!1),a=m.dataPointIds[r],this._eventManager.objectMap[a]={id:a,objectType:"dataPoint",dataSeriesIndex:x,dataPointIndex:r,x1:g,y1:y,x2:i,y2:f},a=d(a),L&&q(this._eventManager.ghostCtx,g,y,i,f,a,!1,!1,!1,!1),this._indexLabels.push({chartType:"stackedBar100",dataPoint:p[r],dataSeries:m,point:{x:0<=p[r].y?i:g,y:n},bounds:{x1:Math.min(g,i),y1:y,x2:Math.max(g,i),y2:f},color:a})}}}e.restore(),L&&this._eventManager.ghostCtx.restore()}},v.prototype.renderArea=function(t){function e(){v&&(0>=t.axisY.minimum&&0<=t.axisY.maximum?u=f:0>t.axisY.maximum?u=s.y1:0<t.axisY.minimum&&(u=n.y2),i.lineTo(x,u),i.lineTo(v.x,u),i.closePath(),i.fill(),L&&(a.lineTo(x,u),a.lineTo(v.x,u),a.closePath(),a.fill()),i.beginPath(),i.moveTo(x,m),a.beginPath(),a.moveTo(x,m),v={x:x,y:m})}var i=this.plotArea.ctx;if(!(0>=t.dataSeriesIndexes.length)){var a=this._eventManager.ghostCtx,n=t.axisX.lineCoordinates,s=t.axisY.lineCoordinates,o=[],r=this.plotArea;for(i.save(),L&&a.save(),i.beginPath(),i.rect(r.x1,r.y1,r.width,r.height),i.clip(),L&&(a.beginPath(),a.rect(r.x1,r.y1,r.width,r.height),a.clip()),r=0;r<t.dataSeriesIndexes.length;r++){var l=t.dataSeriesIndexes[r],h=this.data[l],c=h.dataPoints,o=h.id;this._eventManager.objectMap[o]={objectType:"dataSeries",dataSeriesIndex:l},o=d(o),a.fillStyle=o;var x,m,p,u,o=[],g=!0,y=0,f=t.axisY.conversionParameters.reference+t.axisY.conversionParameters.pixelPerUnit*(0-t.axisY.conversionParameters.minimum)+.5<<0,v=null;if(0<c.length){var b=h._colorSet[y%h._colorSet.length];i.fillStyle=b;for(var P=!0;y<c.length;y++)if(p=c[y].x.getTime?c[y].x.getTime():c[y].x,!(p<t.axisX.dataInfo.viewPortMin||p>t.axisX.dataInfo.viewPortMax))if("number"!=typeof c[y].y)e(),P=!0;else{x=t.axisX.conversionParameters.reference+t.axisX.conversionParameters.pixelPerUnit*(p-t.axisX.conversionParameters.minimum)+.5<<0,m=t.axisY.conversionParameters.reference+t.axisY.conversionParameters.pixelPerUnit*(c[y].y-t.axisY.conversionParameters.minimum)+.5<<0,g||P?(i.beginPath(),i.moveTo(x,m),v={x:x,y:m},L&&(a.beginPath(),a.moveTo(x,m)),P=g=!1):(i.lineTo(x,m),L&&a.lineTo(x,m),0==y%250&&e());var T=h.dataPointIds[y];this._eventManager.objectMap[T]={id:T,objectType:"dataPoint",dataSeriesIndex:l,dataPointIndex:y,x1:x,y1:m},0!==c[y].markerSize&&(0<c[y].markerSize||0<h.markerSize)&&(p=h.getMarkerProperties(y,x,m,i),o.push(p),(!h.maxWidthInX||p.size>h.maxWidthInX)&&(h.maxWidthInX=p.size/(1<t.axisX.conversionParameters.pixelPerUnit?t.axisX.conversionParameters.pixelPerUnit-1:t.axisX.conversionParameters.pixelPerUnit)),T=d(T),L&&o.push({x:x,y:m,ctx:a,type:p.type,size:p.size,color:T,borderColor:T,borderThickness:p.borderThickness})),(c[y].indexLabel||h.indexLabel)&&this._indexLabels.push({chartType:"area",dataPoint:c[y],dataSeries:h,point:{x:x,y:m},color:b})}e(),G.drawMarkers(o)}}i.restore(),L&&this._eventManager.ghostCtx.restore()}},v.prototype.renderSplineArea=function(t){function e(){var e=b(f,2);if(0<e.length){i.beginPath(),i.moveTo(e[0].x,e[0].y),L&&(a.beginPath(),a.moveTo(e[0].x,e[0].y));for(var o=0;o<e.length-3;o+=3)i.bezierCurveTo(e[o+1].x,e[o+1].y,e[o+2].x,e[o+2].y,e[o+3].x,e[o+3].y),L&&a.bezierCurveTo(e[o+1].x,e[o+1].y,e[o+2].x,e[o+2].y,e[o+3].x,e[o+3].y);0>=t.axisY.minimum&&0<=t.axisY.maximum?p=g:0>t.axisY.maximum?p=s.y1:0<t.axisY.minimum&&(p=n.y2),y={x:e[0].x,y:e[0].y},i.lineTo(e[e.length-1].x,p),i.lineTo(y.x,p),i.closePath(),i.fill(),L&&(a.lineTo(e[e.length-1].x,p),a.lineTo(y.x,p),a.closePath(),a.fill())}}var i=this.plotArea.ctx;if(!(0>=t.dataSeriesIndexes.length)){var a=this._eventManager.ghostCtx,n=t.axisX.lineCoordinates,s=t.axisY.lineCoordinates,o=[],r=this.plotArea;for(i.save(),L&&a.save(),i.beginPath(),i.rect(r.x1,r.y1,r.width,r.height),i.clip(),L&&(a.beginPath(),a.rect(r.x1,r.y1,r.width,r.height),a.clip()),r=0;r<t.dataSeriesIndexes.length;r++){var l=t.dataSeriesIndexes[r],h=this.data[l],c=h.dataPoints,o=h.id;this._eventManager.objectMap[o]={objectType:"dataSeries",dataSeriesIndex:l},o=d(o),a.fillStyle=o;var x,m,p,o=[],u=0,g=t.axisY.conversionParameters.reference+t.axisY.conversionParameters.pixelPerUnit*(0-t.axisY.conversionParameters.minimum)+.5<<0,y=null,f=[];if(0<c.length){for(color=h._colorSet[u%h._colorSet.length],i.fillStyle=color;u<c.length;u++)if(x=c[u].x.getTime?c[u].x.getTime():c[u].x,!(x<t.axisX.dataInfo.viewPortMin||x>t.axisX.dataInfo.viewPortMax))if("number"!=typeof c[u].y)u>0&&(e(),f=[]);else{x=t.axisX.conversionParameters.reference+t.axisX.conversionParameters.pixelPerUnit*(x-t.axisX.conversionParameters.minimum)+.5<<0,m=t.axisY.conversionParameters.reference+t.axisY.conversionParameters.pixelPerUnit*(c[u].y-t.axisY.conversionParameters.minimum)+.5<<0;var v=h.dataPointIds[u];if(this._eventManager.objectMap[v]={id:v,objectType:"dataPoint",dataSeriesIndex:l,dataPointIndex:u,x1:x,y1:m},f[f.length]={x:x,y:m},0!==c[u].markerSize&&(0<c[u].markerSize||0<h.markerSize)){var P=h.getMarkerProperties(u,x,m,i);o.push(P),(!h.maxWidthInX||P.size>h.maxWidthInX)&&(h.maxWidthInX=P.size/(1<t.axisX.conversionParameters.pixelPerUnit?t.axisX.conversionParameters.pixelPerUnit-1:t.axisX.conversionParameters.pixelPerUnit)),v=d(v),L&&o.push({x:x,y:m,ctx:a,type:P.type,size:P.size,color:v,borderColor:v,borderThickness:P.borderThickness})}(c[u].indexLabel||h.indexLabel)&&this._indexLabels.push({chartType:"splineArea",dataPoint:c[u],dataSeries:h,point:{x:x,y:m},color:color})}e(),G.drawMarkers(o)}}i.restore(),L&&this._eventManager.ghostCtx.restore()}},v.prototype.renderStepArea=function(t){function e(){v&&(0>=t.axisY.minimum&&0<=t.axisY.maximum?u=f:0>t.axisY.maximum?u=s.y1:0<t.axisY.minimum&&(u=n.y2),i.lineTo(x,u),i.lineTo(v.x,u),i.closePath(),i.fill(),L&&(a.lineTo(x,u),a.lineTo(v.x,u),a.closePath(),a.fill()),i.beginPath(),i.moveTo(x,m),a.beginPath(),a.moveTo(x,m),v={x:x,y:m})}var i=this.plotArea.ctx;if(!(0>=t.dataSeriesIndexes.length)){var a=this._eventManager.ghostCtx,n=t.axisX.lineCoordinates,s=t.axisY.lineCoordinates,o=[],r=this.plotArea;for(i.save(),L&&a.save(),i.beginPath(),i.rect(r.x1,r.y1,r.width,r.height),i.clip(),L&&(a.beginPath(),a.rect(r.x1,r.y1,r.width,r.height),a.clip()),r=0;r<t.dataSeriesIndexes.length;r++){var l=t.dataSeriesIndexes[r],h=this.data[l],c=h.dataPoints,o=h.id;this._eventManager.objectMap[o]={objectType:"dataSeries",dataSeriesIndex:l},o=d(o),a.fillStyle=o;var x,m,p,u,o=[],g=!0,y=0,f=t.axisY.conversionParameters.reference+t.axisY.conversionParameters.pixelPerUnit*(0-t.axisY.conversionParameters.minimum)+.5<<0,v=null,b=!1;if(0<c.length){var P=h._colorSet[y%h._colorSet.length];for(i.fillStyle=P;y<c.length;y++)if(p=c[y].x.getTime?c[y].x.getTime():c[y].x,!(p<t.axisX.dataInfo.viewPortMin||p>t.axisX.dataInfo.viewPortMax)){var T=m;"number"!=typeof c[y].y?(e(),b=!0):(x=t.axisX.conversionParameters.reference+t.axisX.conversionParameters.pixelPerUnit*(p-t.axisX.conversionParameters.minimum)+.5<<0,m=t.axisY.conversionParameters.reference+t.axisY.conversionParameters.pixelPerUnit*(c[y].y-t.axisY.conversionParameters.minimum)+.5<<0,g||b?(i.beginPath(),i.moveTo(x,m),v={x:x,y:m},L&&(a.beginPath(),a.moveTo(x,m)),b=g=!1):(i.lineTo(x,T),L&&a.lineTo(x,T),i.lineTo(x,m),L&&a.lineTo(x,m),0==y%250&&(0>=t.axisY.minimum&&0<=t.axisY.maximum?u=f:0>t.axisY.maximum?u=s.y1:0<t.axisY.minimum&&(u=n.y2),i.lineTo(x,u),i.lineTo(v.x,u),i.closePath(),i.fill(),i.beginPath(),i.moveTo(x,m),L&&(a.lineTo(x,u),a.lineTo(v.x,u),a.closePath(),a.fill(),a.beginPath(),a.moveTo(x,m)),v={x:x,y:m})),T=h.dataPointIds[y],this._eventManager.objectMap[T]={id:T,objectType:"dataPoint",dataSeriesIndex:l,dataPointIndex:y,x1:x,y1:m},0!==c[y].markerSize&&(0<c[y].markerSize||0<h.markerSize)&&(p=h.getMarkerProperties(y,x,m,i),o.push(p),(!h.maxWidthInX||p.size>h.maxWidthInX)&&(h.maxWidthInX=p.size/(1<t.axisX.conversionParameters.pixelPerUnit?t.axisX.conversionParameters.pixelPerUnit-1:t.axisX.conversionParameters.pixelPerUnit)),T=d(T),L&&o.push({x:x,y:m,ctx:a,type:p.type,size:p.size,color:T,borderColor:T,borderThickness:p.borderThickness})),(c[y].indexLabel||h.indexLabel)&&this._indexLabels.push({chartType:"stepArea",dataPoint:c[y],dataSeries:h,point:{x:x,y:m},color:P}))}e(),G.drawMarkers(o)}}i.restore(),L&&this._eventManager.ghostCtx.restore()}},v.prototype.renderStackedArea=function(t){var e=this.plotArea.ctx;if(!(0>=t.dataSeriesIndexes.length)){var i,a,n,s=null,o=[],r=this.plotArea,h=[],c=[],x=0,m=t.axisY.conversionParameters.reference+t.axisY.conversionParameters.pixelPerUnit*(0-t.axisY.conversionParameters.minimum)<<0,p=this._eventManager.ghostCtx;for(L&&p.beginPath(),e.save(),L&&p.save(),e.beginPath(),e.rect(r.x1,r.y1,r.width,r.height),e.clip(),L&&(p.beginPath(),p.rect(r.x1,r.y1,r.width,r.height),p.clip()),xValuePresent=[],r=0;r<t.dataSeriesIndexes.length;r++){var u=t.dataSeriesIndexes[r],g=this.data[u],y=g.dataPoints;for(g.dataPointIndexes=[],x=0;x<y.length;x++)u=y[x].x.getTime?y[x].x.getTime():y[x].x,g.dataPointIndexes[u]=x,xValuePresent[u]||(c.push(u),xValuePresent[u]=!0);c.sort(l)}for(r=0;r<t.dataSeriesIndexes.length;r++){var u=t.dataSeriesIndexes[r],g=this.data[u],y=g.dataPoints,f=!0,v=[],x=g.id;if(this._eventManager.objectMap[x]={objectType:"dataSeries",dataSeriesIndex:u},x=d(x),p.fillStyle=x,0<c.length){for(s=g._colorSet[0],e.fillStyle=s,x=0;x<c.length;x++){n=c[x];var b=null,b=0<=g.dataPointIndexes[n]?y[g.dataPointIndexes[n]]:{x:n,y:0};if(!(n<t.axisX.dataInfo.viewPortMin||n>t.axisX.dataInfo.viewPortMax)&&"number"==typeof b.y){i=t.axisX.conversionParameters.reference+t.axisX.conversionParameters.pixelPerUnit*(n-t.axisX.conversionParameters.minimum)+.5<<0,a=t.axisY.conversionParameters.reference+t.axisY.conversionParameters.pixelPerUnit*(b.y-t.axisY.conversionParameters.minimum)+.5<<0;var P=h[n]?h[n]:0;if(a-=P,v.push({x:i,y:m-P}),h[n]=m-a,f)e.beginPath(),e.moveTo(i,a),L&&(p.beginPath(),p.moveTo(i,a)),f=!1;else if(e.lineTo(i,a),L&&p.lineTo(i,a),0==x%250){for(;0<v.length;){var T=v.pop();e.lineTo(T.x,T.y),L&&p.lineTo(T.x,T.y)}e.closePath(),e.fill(),e.beginPath(),e.moveTo(i,a),L&&(p.closePath(),p.fill(),p.beginPath(),p.moveTo(i,a)),v.push({x:i,y:m-P})}if(0<=g.dataPointIndexes[n]){var _=g.dataPointIds[g.dataPointIndexes[n]];this._eventManager.objectMap[_]={id:_,objectType:"dataPoint",dataSeriesIndex:u,dataPointIndex:g.dataPointIndexes[n],x1:i,y1:a}}0<=g.dataPointIndexes[n]&&0!==b.markerSize&&(0<b.markerSize||0<g.markerSize)&&(n=g.getMarkerProperties(x,i,a,e),o.push(n),(!g.maxWidthInX||n.size>g.maxWidthInX)&&(g.maxWidthInX=n.size/(1<t.axisX.conversionParameters.pixelPerUnit?t.axisX.conversionParameters.pixelPerUnit-1:t.axisX.conversionParameters.pixelPerUnit)),markerColor=d(_),L&&o.push({x:i,y:a,ctx:p,type:n.type,size:n.size,color:markerColor,borderColor:markerColor,borderThickness:n.borderThickness})),(b.indexLabel||g.indexLabel)&&this._indexLabels.push({chartType:"stackedArea",dataPoint:b,dataSeries:g,point:{x:i,y:a},color:s})}}for(;0<v.length;)T=v.pop(),e.lineTo(T.x,T.y),L&&p.lineTo(T.x,T.y);e.closePath(),e.fill(),e.beginPath(),e.moveTo(i,a),L&&(p.closePath(),p.fill(),p.beginPath(),p.moveTo(i,a))}delete g.dataPointIndexes}G.drawMarkers(o),e.restore(),L&&p.restore()}},v.prototype.renderStackedArea100=function(t){var e=this.plotArea.ctx;if(!(0>=t.dataSeriesIndexes.length)){var i,a,n,s=null,o=this.plotArea,r=[],h=[],c=[],x=0,m=t.axisY.conversionParameters.reference+t.axisY.conversionParameters.pixelPerUnit*(0-t.axisY.conversionParameters.minimum)<<0,p=.15*this.width,u=t.axisX.dataInfo.minDiff,u=.9*o.width/Math.abs(t.axisX.maximum-t.axisX.minimum)*Math.abs(u)<<0,g=this._eventManager.ghostCtx;for(e.save(),L&&g.save(),e.beginPath(),e.rect(o.x1,o.y1,o.width,o.height),e.clip(),L&&(g.beginPath(),g.rect(o.x1,o.y1,o.width,o.height),g.clip()),xValuePresent=[],o=0;o<t.dataSeriesIndexes.length;o++){var y=t.dataSeriesIndexes[o],f=this.data[y],v=f.dataPoints;for(f.dataPointIndexes=[],x=0;x<v.length;x++)y=v[x].x.getTime?v[x].x.getTime():v[x].x,f.dataPointIndexes[y]=x,xValuePresent[y]||(c.push(y),xValuePresent[y]=!0);c.sort(l)}for(o=0;o<t.dataSeriesIndexes.length;o++){var y=t.dataSeriesIndexes[o],f=this.data[y],v=f.dataPoints,b=!0,s=f.id;this._eventManager.objectMap[s]={objectType:"dataSeries",dataSeriesIndex:y},s=d(s),g.fillStyle=s,1==v.length&&(u=p),1>u?u=1:u>p&&(u=p);var P=[];if(0<c.length){for(s=f._colorSet[x%f._colorSet.length],e.fillStyle=s,x=0;x<c.length;x++){n=c[x];var T=null,T=0<=f.dataPointIndexes[n]?v[f.dataPointIndexes[n]]:{x:n,y:0};if(!(n<t.axisX.dataInfo.viewPortMin||n>t.axisX.dataInfo.viewPortMax)&&"number"==typeof T.y){a=0!==t.dataPointYSums[n]?100*(T.y/t.dataPointYSums[n]):0,i=t.axisX.conversionParameters.reference+t.axisX.conversionParameters.pixelPerUnit*(n-t.axisX.conversionParameters.minimum)+.5<<0,a=t.axisY.conversionParameters.reference+t.axisY.conversionParameters.pixelPerUnit*(a-t.axisY.conversionParameters.minimum)+.5<<0;var _=h[n]?h[n]:0;if(a-=_,P.push({x:i,y:m-_}),h[n]=m-a,b)e.beginPath(),e.moveTo(i,a),L&&(g.beginPath(),g.moveTo(i,a)),b=!1;else if(e.lineTo(i,a),L&&g.lineTo(i,a),0==x%250){for(;0<P.length;){var M=P.pop();e.lineTo(M.x,M.y),L&&g.lineTo(M.x,M.y)}e.closePath(),e.fill(),e.beginPath(),e.moveTo(i,a),L&&(g.closePath(),g.fill(),g.beginPath(),g.moveTo(i,a)),P.push({x:i,y:m-_})}if(0<=f.dataPointIndexes[n]){var S=f.dataPointIds[f.dataPointIndexes[n]];this._eventManager.objectMap[S]={id:S,objectType:"dataPoint",dataSeriesIndex:y,dataPointIndex:f.dataPointIndexes[n],x1:i,y1:a}}0<=f.dataPointIndexes[n]&&0!==T.markerSize&&(0<T.markerSize||0<f.markerSize)&&(n=f.getMarkerProperties(x,i,a,e),r.push(n),(!f.maxWidthInX||n.size>f.maxWidthInX)&&(f.maxWidthInX=n.size/(1<t.axisX.conversionParameters.pixelPerUnit?t.axisX.conversionParameters.pixelPerUnit-1:t.axisX.conversionParameters.pixelPerUnit)),markerColor=d(S),L&&r.push({x:i,y:a,ctx:g,type:n.type,size:n.size,color:markerColor,borderColor:markerColor,borderThickness:n.borderThickness})),(T.indexLabel||f.indexLabel)&&this._indexLabels.push({chartType:"stackedArea100",dataPoint:T,dataSeries:f,point:{x:i,y:a},color:s})}}for(;0<P.length;)M=P.pop(),e.lineTo(M.x,M.y),L&&g.lineTo(M.x,M.y);e.closePath(),e.fill(),e.beginPath(),e.moveTo(i,a),L&&(g.closePath(),g.fill(),g.beginPath(),g.moveTo(i,a))}delete f.dataPointIndexes}G.drawMarkers(r),e.restore(),L&&g.restore()}},v.prototype.renderBubble=function(t){var e=this.plotArea.ctx,i=t.dataSeriesIndexes.length;if(!(0>=i)){var a,n,s=this.plotArea,o=0,r=.15*this.width,o=t.axisX.dataInfo.minDiff,i=.9*(s.width/Math.abs(t.axisX.maximum-t.axisX.minimum)*Math.abs(o)/i)<<0;e.save(),L&&this._eventManager.ghostCtx.save(),e.beginPath(),e.rect(s.x1,s.y1,s.width,s.height),e.clip(),L&&(this._eventManager.ghostCtx.rect(s.x1,s.y1,s.width,s.height),this._eventManager.ghostCtx.clip());for(var l=-1/0,h=1/0,c=0;c<t.dataSeriesIndexes.length;c++)for(var x=t.dataSeriesIndexes[c],m=this.data[x],p=m.dataPoints,u=0,o=0;o<p.length;o++)a=a=p[o].getTime?p[o].x.getTime():p[o].x,a<t.axisX.dataInfo.viewPortMin||a>t.axisX.dataInfo.viewPortMax||"undefined"==typeof p[o].z||(u=p[o].z,u>l&&(l=u),h>u&&(h=u));for(var g=25*Math.PI,s=Math.max(Math.pow(.25*Math.min(s.height,s.width)/2,2)*Math.PI,g),c=0;c<t.dataSeriesIndexes.length;c++)if(x=t.dataSeriesIndexes[c],m=this.data[x],p=m.dataPoints,1==p.length&&(i=r),1>i?i=1:i>r&&(i=r),0<p.length)for(e.strokeStyle="#4572A7 ",o=0;o<p.length;o++)if(a=a=p[o].getTime?p[o].x.getTime():p[o].x,!(a<t.axisX.dataInfo.viewPortMin||a>t.axisX.dataInfo.viewPortMax)&&"number"==typeof p[o].y){a=t.axisX.conversionParameters.reference+t.axisX.conversionParameters.pixelPerUnit*(a-t.axisX.conversionParameters.minimum)+.5<<0,n=t.axisY.conversionParameters.reference+t.axisY.conversionParameters.pixelPerUnit*(p[o].y-t.axisY.conversionParameters.minimum)+.5<<0;var u=p[o].z,y=2*Math.max(Math.sqrt((g+(s-g)/(l-h)*(u-h))/Math.PI)<<0,1),u=m.getMarkerProperties(o,e);u.size=y,G.drawMarker(a,n,e,u.type,u.size,u.color,u.borderColor,u.borderThickness),(!m.maxWidthInX||u.size>m.maxWidthInX)&&(m.maxWidthInX=u.size/(1<t.axisX.conversionParameters.pixelPerUnit?t.axisX.conversionParameters.pixelPerUnit-1:t.axisX.conversionParameters.pixelPerUnit));var f=m.dataPointIds[o];this._eventManager.objectMap[f]={id:f,objectType:"dataPoint",dataSeriesIndex:x,dataPointIndex:o,x1:a,y1:n,size:y},y=d(f),L&&G.drawMarker(a,n,this._eventManager.ghostCtx,u.type,u.size,y,y,u.borderThickness)}e.restore(),L&&this._eventManager.ghostCtx.restore()}},v.prototype.renderScatter=function(t){var e=this.plotArea.ctx,i=t.dataSeriesIndexes.length;if(!(0>=i)){var a,n,s=this.plotArea,o=0,r=.15*this.width,o=t.axisX.dataInfo.minDiff,i=.9*(s.width/Math.abs(t.axisX.maximum-t.axisX.minimum)*Math.abs(o)/i)<<0;e.save(),L&&this._eventManager.ghostCtx.save(),e.beginPath(),e.rect(s.x1,s.y1,s.width,s.height),e.clip(),L&&(this._eventManager.ghostCtx.rect(s.x1,s.y1,s.width,s.height),this._eventManager.ghostCtx.clip());for(var l=0;l<t.dataSeriesIndexes.length;l++){var h=t.dataSeriesIndexes[l],c=this.data[h],x=c.dataPoints;if(1==x.length&&(i=r),1>i?i=1:i>r&&(i=r),0<x.length){e.strokeStyle="#4572A7 ",Math.pow(.3*Math.min(s.height,s.width)/2,2);for(var m=0,p=0,o=0;o<x.length;o++)if(a=a=x[o].getTime?x[o].x.getTime():x[o].x,!(a<t.axisX.dataInfo.viewPortMin||a>t.axisX.dataInfo.viewPortMax)&&"number"==typeof x[o].y){a=t.axisX.conversionParameters.reference+t.axisX.conversionParameters.pixelPerUnit*(a-t.axisX.conversionParameters.minimum)+.5<<0,n=t.axisY.conversionParameters.reference+t.axisY.conversionParameters.pixelPerUnit*(x[o].y-t.axisY.conversionParameters.minimum)+.5<<0;var u=c.getMarkerProperties(o,a,n,e);G.drawMarker(u.x,u.y,u.ctx,u.type,u.size,u.color,u.color,u.thickness),(!c.maxWidthInX||u.size>c.maxWidthInX)&&(c.maxWidthInX=u.size/(1<t.axisX.conversionParameters.pixelPerUnit?t.axisX.conversionParameters.pixelPerUnit-1:t.axisX.conversionParameters.pixelPerUnit)),Math.sqrt((m-a)*(m-a)+(p-n)*(p-n))<Math.min(u.size,5)||(m=c.dataPointIds[o],this._eventManager.objectMap[m]={id:m,objectType:"dataPoint",dataSeriesIndex:h,dataPointIndex:o,x1:a,y1:n},m=d(m),L&&G.drawMarker(u.x,u.y,this._eventManager.ghostCtx,u.type,u.size,m,m,u.borderThickness),m=a,p=n)}}}e.restore(),L&&this._eventManager.ghostCtx.restore()}};var J=function(t,e,i,a,n,s,o){t.save(),"pie"===n?(t.beginPath(),t.moveTo(e.x,e.y),t.arc(e.x,e.y,i,s,o,!1),t.fillStyle=a,t.strokeStyle="white",t.lineWidth=2,t.closePath(),t.stroke(),t.fill()):"doughnut"===n&&(t.beginPath(),t.arc(e.x,e.y,i,s,o,!1),t.arc(e.x,e.y,.6*i,o,s,!0),t.closePath(),t.fillStyle=a,t.strokeStyle="white",t.lineWidth=2,t.stroke(),t.fill()),t.restore()};v.prototype.renderPie=function(t){function e(t){u.frame=0,u.maxFrames=t||1}function i(){if(d&&c){for(var t=0,e=0;e<c.length;e++)t+=Math.abs(c[e].y);for(var i=0,a=0,n=0,s=0,e=0;e<c.length;e++){var o=c[e],r=d.dataPointIds[e],l={id:r,objectType:"dataPoint",dataPointIndex:e,dataSeriesIndex:0};g.push(l);var x=o.indexLabel?o.indexLabel:d.indexLabel?d.indexLabel:o.label?o.label:d.label?d.label:"";h._eventManager.objectMap[r]=l,l.center={x:P.x,y:P.y},l.y=o.y,l.radius=_,l.indexLabelText=h.replaceKeywordsWithValue(x,o,d,e),l.indexLabelPlacement=d.indexLabelPlacement,l.indexLabelLineColor=o.indexLabelLineColor?o.indexLabelLineColor:d.indexLabelLineColor?d.indexLabelLineColor:o.color?o.color:d._colorSet[e%d._colorSet.length],l.indexLabelLineThickness=o.indexLabelLineThickness?o.indexLabelLineThickness:d.indexLabelLineThickness,l.indexLabelFontColor=o.indexLabelFontColor?o.indexLabelFontColor:d.indexLabelFontColor,l.indexLabelFontStyle=o.indexLabelFontStyle?o.indexLabelFontStyle:d.indexLabelFontStyle,l.indexLabelFontWeight=o.indexLabelFontWeight?o.indexLabelFontWeight:d.indexLabelFontWeight,l.indexLabelFontSize=o.indexLabelFontSize?o.indexLabelFontSize:d.indexLabelFontSize,l.indexLabelFontFamily=o.indexLabelFontFamily?o.indexLabelFontFamily:d.indexLabelFontFamily,l.indexLabelBackgroundColor=o.indexLabelBackgroundColor?o.indexLabelBackgroundColor:d.indexLabelBackgroundColor?d.indexLabelBackgroundColor:null,l.indexLabelMaxWidth=o.indexLabelMaxWidth?o.indexLabelMaxWidth:d.indexLabelMaxWidth?d.indexLabelMaxWidth:.33*m.width,l.indexLabelWrap=o.indexLabelWrap?o.indexLabelWrap:d.indexLabelWrap,l.startAngle=0===e?d.startAngle?d.startAngle/180*Math.PI:0:g[e-1].endAngle,l.startAngle=(l.startAngle+2*Math.PI)%(2*Math.PI),l.endAngle=l.startAngle+2*Math.PI/t*Math.abs(o.y),o=(l.endAngle+l.startAngle)/2,o=(o+2*Math.PI)%(2*Math.PI),l.midAngle=o,l.midAngle>Math.PI/2-v&&l.midAngle<Math.PI/2+v?((0===i||g[n].midAngle>l.midAngle)&&(n=e),i++):l.midAngle>3*Math.PI/2-v&&l.midAngle<3*Math.PI/2+v&&((0===a||g[s].midAngle>l.midAngle)&&(s=e),a++),l.hemisphere=o>Math.PI/2&&o<=3*Math.PI/2?"left":"right",l.indexLabelTextBlock=new T(h.plotArea.ctx,{fontSize:l.indexLabelFontSize,fontFamily:l.indexLabelFontFamily,fontColor:l.indexLabelFontColor,fontStyle:l.indexLabelFontStyle,fontWeight:l.indexLabelFontWeight,horizontalAlign:"left",backgroundColor:l.indexLabelBackgroundColor,maxWidth:l.indexLabelMaxWidth,maxHeight:l.indexLabelWrap?5*l.indexLabelFontSize:1.5*l.indexLabelFontSize,text:l.indexLabelText,padding:0,textBaseline:"top"}),l.indexLabelTextBlock.measureText()}for(o=t=0,r=!1,e=0;e<c.length;e++)l=g[(n+e)%c.length],i>1&&l.midAngle>Math.PI/2-v&&l.midAngle<Math.PI/2+v&&(i/2>=t&&!r?(l.hemisphere="right",t++):(l.hemisphere="left",r=!0));for(r=!1,e=0;e<c.length;e++)l=g[(s+e)%c.length],a>1&&l.midAngle>3*Math.PI/2-v&&l.midAngle<3*Math.PI/2+v&&(a/2>=o&&!r?(l.hemisphere="left",o++):(l.hemisphere="right",r=!0))}}function a(){var t=h.plotArea.ctx;if(null!==u&&u.frame<u.maxFrames){0===u.frame&&(u.prevMaxAngle=g[0].startAngle),t.clearRect(m.x1,m.y1,m.width,m.height);for(var t=u.prevMaxAngle+2*Math.PI/u.maxFrames,i=0;i<c.length;i++){var s=0===i?g[i].startAngle:o,o=s+(g[i].endAngle-g[i].startAngle),r=!1;o>t&&(o=t,r=!0);var l=c[i].color?c[i].color:d._colorSet[i%d._colorSet.length];if(o>s&&J(h.plotArea.ctx,g[i].center,g[i].radius,l,d.type,s,o),r)break}u.frame++,u.prevMaxAngle=t,u.frame<u.maxFrames?h.requestAnimFrame.call(window,a):(e(L?15:4),n())}}function n(){var t=h.plotArea.ctx;if(null!==u&&u.frame<u.maxFrames){for(t.clearRect(m.x1,m.y1,m.width,m.height),t=0;t<c.length;t++){var e=g[t].startAngle,i=g[t].endAngle;if(i>e){var a=.07*_*Math.cos(g[t].midAngle),s=.07*_*Math.sin(g[t].midAngle),o=!1;c[t].exploded?(Math.abs(g[t].center.x-(P.x+a))>Math.abs(.5*a/u.maxFrames)||Math.abs(g[t].center.y-(P.y+s))>Math.abs(.5*s/u.maxFrames))&&(g[t].center.x+=a/u.maxFrames,g[t].center.y+=s/u.maxFrames,o=!0):(Math.abs(g[t].center.x-P.x)>Math.abs(.5*a/u.maxFrames)||Math.abs(g[t].center.y-P.y)>Math.abs(.5*s/u.maxFrames))&&(g[t].center.x-=a/u.maxFrames,g[t].center.y-=s/u.maxFrames,o=!0),o&&(a={},a.dataSeries=d,a.dataPoint=d.dataPoints[t],a.index=t,h._toolTip.highlightObjects([a])),J(h.plotArea.ctx,g[t].center,g[t].radius,c[t].color?c[t].color:d._colorSet[t%d._colorSet.length],d.type,e,i)}}for(u.frame++,t=h.plotArea.ctx,t.fillStyle="black",t.strokeStyle="grey",t.textBaseline="middle",t.lineJoin="round",e=e=0;e<c.length;e++)i=g[e],i.indexLabelText&&(i.indexLabelTextBlock.y-=i.indexLabelTextBlock.height/2,a=0,a="left"===i.hemisphere?"outside"===d.indexLabelPlacement?-(i.indexLabelTextBlock.width+x):-i.indexLabelTextBlock.width/2:"outside"===d.indexLabelPlacement?x:-i.indexLabelTextBlock.width/2,i.indexLabelTextBlock.x+=a,i.indexLabelTextBlock.render(!0),i.indexLabelTextBlock.x-=a,i.indexLabelTextBlock.y+=i.indexLabelTextBlock.height/2,"outside"===i.indexLabelPlacement&&(a=i.center.x+_*Math.cos(i.midAngle),s=i.center.y+_*Math.sin(i.midAngle),t.strokeStyle=i.indexLabelLineColor,t.lineWidth=i.indexLabelLineThickness,t.beginPath(),t.moveTo(a,s),t.lineTo(i.indexLabelTextBlock.x,i.indexLabelTextBlock.y),t.lineTo(i.indexLabelTextBlock.x+("left"===i.hemisphere?-x:x),i.indexLabelTextBlock.y),t.stroke()),t.lineJoin="miter");u.frame<u.maxFrames&&h.requestAnimFrame.call(window,n)}}function s(t,e){var i=0,i=t.indexLabelTextBlock.y-t.indexLabelTextBlock.height/2,a=t.indexLabelTextBlock.y+t.indexLabelTextBlock.height/2,n=e.indexLabelTextBlock.y-e.indexLabelTextBlock.height/2,s=e.indexLabelTextBlock.y+e.indexLabelTextBlock.height/2;return i=e.indexLabelTextBlock.y>t.indexLabelTextBlock.y?n-a:i-s}function o(t){for(var e=null,i=1;i<c.length;i++){if(e=(t+i+g.length)%g.length,g[e].hemisphere!==g[t].hemisphere){e=null;break}if(g[e].indexLabelText&&e!==t&&(0>s(g[e],g[t])||("right"===g[t].hemisphere?g[e].indexLabelTextBlock.y>=g[t].indexLabelTextBlock.y:g[e].indexLabelTextBlock.y<=g[t].indexLabelTextBlock.y)))break;e=null}return e}function r(t,e){e=e||0;var i=0,a=P.y-1*M,n=P.y+1*M;if(t>=0&&t<c.length){var l=g[t];if(0>e&&l.indexLabelTextBlock.y<a||e>0&&l.indexLabelTextBlock.y>n)return 0;var h=e,d=0,x=0,x=d=d=0;for(0>h?l.indexLabelTextBlock.y-l.indexLabelTextBlock.height/2>a&&l.indexLabelTextBlock.y-l.indexLabelTextBlock.height/2+h<a&&(h=-(a-(l.indexLabelTextBlock.y-l.indexLabelTextBlock.height/2+h))):l.indexLabelTextBlock.y+l.indexLabelTextBlock.height/2<a&&l.indexLabelTextBlock.y+l.indexLabelTextBlock.height/2+h>n&&(h=l.indexLabelTextBlock.y+l.indexLabelTextBlock.height/2+h-n),h=l.indexLabelTextBlock.y+h,a=0,a="right"===l.hemisphere?P.x+Math.sqrt(Math.pow(M,2)-Math.pow(h-P.y,2)):P.x-Math.sqrt(Math.pow(M,2)-Math.pow(h-P.y,2)),x=P.x+_*Math.cos(l.midAngle),d=P.y+_*Math.sin(l.midAngle),d=Math.sqrt(Math.pow(a-x,2)+Math.pow(h-d,2)),x=Math.acos(_/M),d=Math.acos((M*M+_*_-d*d)/(2*_*M)),h=x>d?h-l.indexLabelTextBlock.y:0,a=null,n=1;n<c.length;n++){if(a=(t-n+g.length)%g.length,g[a].hemisphere!==g[t].hemisphere){a=null;break}if(g[a].indexLabelText&&g[a].hemisphere===g[t].hemisphere&&a!==t&&(0>s(g[a],g[t])||("right"===g[t].hemisphere?g[a].indexLabelTextBlock.y<=g[t].indexLabelTextBlock.y:g[a].indexLabelTextBlock.y>=g[t].indexLabelTextBlock.y)))break;a=null}x=a,d=o(t),n=a=0,0>h?(n="right"===l.hemisphere?x:d,i=h,null!==n&&(x=-h,h=l.indexLabelTextBlock.y-l.indexLabelTextBlock.height/2-(g[n].indexLabelTextBlock.y+g[n].indexLabelTextBlock.height/2),y>h-x&&(a=-x,p++,n=r(n,a),+n.toFixed(b)>+a.toFixed(b)&&(i=h>y?-(h-y):-(x-(n-a)))))):h>0&&(n="right"===l.hemisphere?d:x,i=h,null!==n&&(x=h,h=g[n].indexLabelTextBlock.y-g[n].indexLabelTextBlock.height/2-(l.indexLabelTextBlock.y+l.indexLabelTextBlock.height/2),y>h-x&&(a=x,p++,n=r(n,a),+n.toFixed(b)<+a.toFixed(b)&&(i=h>y?h-y:x-(a-n))))),i&&(h=l.indexLabelTextBlock.y+i,a=0,a="right"===l.hemisphere?P.x+Math.sqrt(Math.pow(M,2)-Math.pow(h-P.y,2)):P.x-Math.sqrt(Math.pow(M,2)-Math.pow(h-P.y,2)),l.midAngle>Math.PI/2-v&&l.midAngle<Math.PI/2+v?(n=(t-1+g.length)%g.length,n=g[n],x=g[(t+1+g.length)%g.length],"left"===l.hemisphere&&"right"===n.hemisphere&&a>n.indexLabelTextBlock.x?a=n.indexLabelTextBlock.x-15:"right"===l.hemisphere&&"left"===x.hemisphere&&a<x.indexLabelTextBlock.x&&(a=x.indexLabelTextBlock.x+15)):l.midAngle>3*Math.PI/2-v&&l.midAngle<3*Math.PI/2+v&&(n=(t-1+g.length)%g.length,n=g[n],x=g[(t+1+g.length)%g.length],"right"===l.hemisphere&&"left"===n.hemisphere&&a<n.indexLabelTextBlock.x?a=n.indexLabelTextBlock.x+15:"left"===l.hemisphere&&"right"===x.hemisphere&&a>x.indexLabelTextBlock.x&&(a=x.indexLabelTextBlock.x-15)),l.indexLabelTextBlock.y=h,l.indexLabelTextBlock.x=a,l.indexLabelAngle=Math.atan2(l.indexLabelTextBlock.y-P.y,l.indexLabelTextBlock.x-P.x))}return i}function l(){var t=h.plotArea.ctx;t.fillStyle="grey",t.strokeStyle="grey",t.font="16px Arial",t.textBaseline="middle";for(var i=0,n=t=0,t=0;10>t&&(1>t||n>0);t++){if(_-=n,n=0,"outside"===d.indexLabelPlacement){for(M=_*f,i=0;i<c.length;i++){var l=g[i];
l.indexLabelTextBlock.x=P.x+M*Math.cos(l.midAngle),l.indexLabelTextBlock.y=P.y+M*Math.sin(l.midAngle),l.indexLabelAngle=l.midAngle,l.radius=_}for(var p,u,i=0;i<c.length;i++){var l=g[i],v=o(i);if(null!==v){p=g[i],u=g[v];var T=0,T=s(p,u)-y;if(0>T){for(var S=u=p=0;S<c.length;S++)S!==i&&g[S].hemisphere===l.hemisphere&&(g[S].indexLabelTextBlock.y<l.indexLabelTextBlock.y?p++:u++);S=T/(p+u||1)*u,p=-1*(T-S);var k=u=0;"right"===l.hemisphere?(u=r(i,S),p=-1*(T-u),k=r(v,p),+k.toFixed(b)<+p.toFixed(b)&&+u.toFixed(b)<=+S.toFixed(b)&&r(i,-(p-k))):(u=r(v,S),p=-1*(T-u),k=r(i,p),+k.toFixed(b)<+p.toFixed(b)&&+u.toFixed(b)<=+S.toFixed(b)&&r(v,-(p-k)))}}}}else for(i=0;i<c.length;i++)l=g[i],M="pie"===d.type?.7*_:.8*_,T=P.x+M*Math.cos(l.midAngle),S=P.y+M*Math.sin(l.midAngle),l.indexLabelTextBlock.x=T,l.indexLabelTextBlock.y=S;for(i=0;i<c.length;i++)l=g[i],l.indexLabelTextBlock.measureText(),T=T=0,"right"===l.hemisphere?(T=m.x2-(l.indexLabelTextBlock.x+l.indexLabelTextBlock.width+x),T*=-1):T=m.x1-(l.indexLabelTextBlock.x-l.indexLabelTextBlock.width-x),T>0&&(Math.abs(l.indexLabelTextBlock.y-l.indexLabelTextBlock.height/2-P.y)<_||Math.abs(l.indexLabelTextBlock.y+l.indexLabelTextBlock.height/2-P.y)<_)&&(T/=Math.abs(Math.cos(l.indexLabelAngle)),T>9&&(T*=.3),T>n&&(n=T)),T=T=0,0<l.indexLabelAngle&&l.indexLabelAngle<Math.PI?(T=m.y2-(l.indexLabelTextBlock.y+l.indexLabelTextBlock.height/2+5),T*=-1):T=m.y1-(l.indexLabelTextBlock.y-l.indexLabelTextBlock.height/2-5),T>0&&Math.abs(l.indexLabelTextBlock.x-P.x)<_&&(T/=Math.abs(Math.sin(l.indexLabelAngle)),T>9&&(T*=.3),T>n&&(n=T));for(i=function(t,e,i){for(var a=[],n=0;a.push(g[e]),e!==i;e=(e+1+c.length)%c.length);for(a.sort(function(t,e){return t.y-e.y}),e=0;e<a.length&&(i=a[e],t>n);e++)n+=i.indexLabelTextBlock.height,i.indexLabelTextBlock.text="",i.indexLabelText="",i.indexLabelTextBlock.measureText()},v=l=-1,S=k=0;S<c.length;S++)if(p=g[S],p.indexLabelText){var C=o(S);null!==C&&(u=g[C],T=0,T=s(p,u),0>T?(0>l&&(l=S),C!==l&&(v=C),k+=-T):k>0&&(i(k,l,v),v=l=-1,k=0))}k>0&&i(k,l,v)}e(h.animationEnabled&&0===h.renderCount?L?60:30:1),a()}var h=this;if(!(0>=t.dataSeriesIndexes.length)){var d=this.data[t.dataSeriesIndexes[0]],c=d.dataPoints,x=10,m=this.plotArea,p=0,u={frame:0,maxFrames:1},g=[],y=2,f=1.3,v=20/180*Math.PI,b=6,P={x:(m.x2+m.x1)/2,y:(m.y2+m.y1)/2},_="inside"===d.indexLabelPlacement?.95*Math.min(m.width,m.height)/2:.8*Math.min(m.width,m.height)/2,M=_*f;this.pieDoughnutClickHandler=function(t){u.frame===u.maxFrames&&(t=t.dataPoint,t.exploded=t.exploded?!1:!0,e(L?15:4),1<this.dataPoints.length&&n())},i(),l()}},v.prototype.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}(),P.prototype.registerSpace=function(t,e){"top"===t?this._topOccupied+=e.height:"bottom"===t?this._bottomOccupied+=e.height:"left"===t?this._leftOccupied+=e.width:"right"===t&&(this._rightOccupied+=e.width)},P.prototype.unRegisterSpace=function(t,e){"top"===t?this._topOccupied-=e.height:"bottom"===t?this._bottomOccupied-=e.height:"left"===t?this._leftOccupied-=e.width:"right"===t&&(this._rightOccupied-=e.width)},P.prototype.getFreeSpace=function(){return{x1:this._leftOccupied,y1:this._topOccupied,x2:this.chart.width-this._rightOccupied,y2:this.chart.height-this._bottomOccupied,width:this.chart.width-this._rightOccupied-this._leftOccupied,height:this.chart.height-this._bottomOccupied-this._topOccupied}},P.prototype.reset=function(){this._topOccupied=0,this._bottomOccupied=3,this._rightOccupied=this._leftOccupied=0},t(T,f),T.prototype.render=function(t){t&&this.ctx.save();var e=this.ctx.font;this.ctx.textBaseline=this.textBaseline;var i=0;this._isDirty&&this.measureText(this.ctx),this.ctx.translate(this.x,this.y+i),"middle"===this.textBaseline&&(i=-this._lineHeight/2),this.ctx.font=this._getFontString(),this.ctx.rotate(Math.PI/180*this.angle);var a=0,n=this.padding,s=null;for((0<this.borderThickness&&this.borderColor||this.backgroundColor)&&this.ctx.roundRect(0,i,this.width,this.height,this.cornerRadius,this.borderThickness,this.backgroundColor,this.borderColor),this.ctx.fillStyle=this.fontColor,i=0;i<this._wrappedText.lines.length;i++)s=this._wrappedText.lines[i],"right"===this.horizontalAlign?a=this.width-s.width-this.padding:"left"===this.horizontalAlign?a=this.padding:"center"===this.horizontalAlign&&(a=(this.width-2*this.padding)/2-s.width/2+this.padding),this.ctx.fillText(s.text,a,n),n+=s.height;this.ctx.font=e,t&&this.ctx.restore()},T.prototype.setText=function(t){this.text=t,this._isDirty=!0,this._wrappedText=null},T.prototype.measureText=function(){if(null===this.maxWidth)throw"Please set maxWidth and height for TextBlock";return this._wrapText(this.ctx),this._isDirty=!1,{width:this.width,height:this.height}},T.prototype._getLineWithWidth=function(t,e,i){if(t=String(t),!t)return{text:"",width:0};var a=i=0,n=t.length-1,s=1/0;for(this.ctx.font=this._getFontString();n>=a;){var s=Math.floor((a+n)/2),o=t.substr(0,s+1);if(i=this.ctx.measureText(o).width,e>i)a=s+1;else{if(!(i>e))break;n=s-1}}return i>e&&1<o.length&&(o=o.substr(0,o.length-1),i=this.ctx.measureText(o).width),e=!0,(o.length===t.length||" "===t[o.length])&&(e=!1),e&&(t=o.split(" "),1<t.length&&t.pop(),o=t.join(" "),i=this.ctx.measureText(o).width),{text:o,width:i}},T.prototype._wrapText=function(){var t=new String(o(this.text)),e=[],i=this.ctx.font,a=0,n=0;for(this.ctx.font=this._getFontString();0<t.length;){var s=this.maxHeight-2*this.padding,r=this._getLineWithWidth(t,this.maxWidth-2*this.padding,!1);r.height=this._lineHeight,e.push(r),n=Math.max(n,r.width),a+=r.height,t=o(t.slice(r.text.length,t.length)),s&&a>s&&(r=e.pop(),a-=r.height)}this._wrappedText={lines:e,width:n,height:a},this.width=n+2*this.padding,this.height=a+2*this.padding,this.ctx.font=i},T.prototype._getFontString=function(){return p("",this,null)},t(_,f),_.prototype.render=function(){if(this.text){var t,e,i=this.chart.layoutManager.getFreeSpace(),a=0,n=0,s=0,o=0,r=0;"top"===this.verticalAlign||"bottom"===this.verticalAlign?(o=i.width-2*this.margin,r=.5*i.height-2*this.margin,s=0):"center"===this.verticalAlign&&("left"===this.horizontalAlign||"right"===this.horizontalAlign?(o=i.height-2*this.margin,r=.5*i.width-2*this.margin):"center"===this.horizontalAlign&&(o=i.width-2*this.margin,r=.5*i.height-2*this.margin));var r=new T(this.ctx,{fontSize:this.fontSize,fontFamily:this.fontFamily,fontColor:this.fontColor,fontStyle:this.fontStyle,fontWeight:this.fontWeight,horizontalAlign:this.horizontalAlign,verticalAlign:this.verticalAlign,borderColor:this.borderColor,borderThickness:this.borderThickness,backgroundColor:this.backgroundColor,maxWidth:o,maxHeight:r,cornerRadius:this.cornerRadius,text:this.text,padding:this.padding,textBaseline:"top"}),l=r.measureText();"top"===this.verticalAlign||"bottom"===this.verticalAlign?("top"===this.verticalAlign?(n=this.margin,e="top"):"bottom"===this.verticalAlign&&(n=i.y2-this.margin-l.height,e="bottom"),"left"===this.horizontalAlign?a=i.x1+this.margin:"center"===this.horizontalAlign?a=i.x1+(o/2-l.width/2)+this.margin:"right"===this.horizontalAlign&&(a=i.x2-this.margin-l.width),t=this.horizontalAlign,this.width=l.width,this.height=l.height):"center"===this.verticalAlign&&("left"===this.horizontalAlign?(a=i.x1+this.margin,n=i.y2-this.margin-(o/2-l.width/2),s=-90,e="left",this.width=l.height,this.height=l.width):"right"===this.horizontalAlign?(a=i.x2-this.margin,n=i.y1+this.margin+(o/2-l.width/2),s=90,e="right",this.width=l.height,this.height=l.width):"center"===this.horizontalAlign&&(n=i.y1+(i.height/2-l.height/2),a=i.x1+(i.width/2-l.width/2),e="center",this.width=l.width,this.height=l.height),t="center"),r.x=a,r.y=n,r.angle=s,r.horizontalAlign=t,r.render(!0),this.chart.layoutManager.registerSpace(e,{width:this.width+2*this.margin,height:this.height+2*this.margin}),this.bounds={x1:a,y1:n,x2:a+this.width,y2:n+this.height},this.ctx.textBaseline="top"}},t(M,f),M.prototype.render=function(){var t=this.chart.layoutManager.getFreeSpace(),e=null,i=0,a=0,n=0,s=0,o=[],r=[];"top"===this.verticalAlign||"bottom"===this.verticalAlign?(this.orientation="horizontal",e=this.verticalAlign,n=.9*t.width,s=.5*t.height):"center"===this.verticalAlign&&(this.orientation="vertical",e=this.horizontalAlign,n=.5*t.width,s=.9*t.height);for(var l=0;l<this.dataSeries.length;l++){var h=this.dataSeries[l],c=h.legendMarkerType?h.legendMarkerType:"line"!==h.type&&"stepLine"!==h.type&&"spline"!==h.type&&"scatter"!==h.type&&"bubble"!==h.type||!h.markerType?k.getDefaultLegendMarker(h.type):h.markerType,x=h.legendText?h.legendText:h.name,m=h.legendMarkerColor?h.legendMarkerColor:h.markerColor?h.markerColor:h._colorSet[0],p=h.markerSize||"line"!==h.type&&"stepLine"!==h.type&&"spline"!==h.type?.6*this.lineHeight:0;if("pie"!==h.type&&"doughnut"!==h.type)c={markerType:c,markerColor:m,text:x,textBlock:null,chartType:h.type,markerSize:p,lineColor:h._colorSet[0],dataSeriesIndex:l,dataPointIndex:null},o.push(c);else for(var u=0;u<h.dataPoints.length;u++)p=h.dataPoints[u],c=p.legendMarkerType?p.legendMarkerType:h.legendMarkerType?h.legendMarkerType:k.getDefaultLegendMarker(h.type),x=p.legendText?p.legendText:h.legendText?h.legendText:p.name?p.name:"DataPoint: "+(u+1),m=p.markerColor?p.markerColor:h.markerColor?h.markerColor:p.color?p.color:h.color?h.color:h._colorSet[u%h._colorSet.length],p=0!==p.markerSize&&(0!==h.markerSize||p.markerSize)||"line"!==h.type&&"stepLine"!==h.type&&"spline"!==h.type?.6*this.lineHeight:0,c={markerType:c,markerColor:m,text:x,textBlock:null,chartType:h.type,markerSize:p,dataSeriesIndex:l,dataPointIndex:u},o.push(c)}if(0<o.length){for(h=null,l=u=0;l<o.length;l++)c=o[l],"horizontal"===this.orientation?(c.textBlock=new T(this.ctx,{x:0,y:0,maxWidth:n,maxHeight:this.lineHeight,angle:0,text:c.text,horizontalAlign:"left",fontSize:this.fontSize,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontColor:this.fontColor,fontStyle:this.fontStyle,textBaseline:"top"}),c.textBlock.measureText(),(!h||h.width+c.textBlock.width+(0===h.width?0:this.horizontalSpacing)>n)&&(h={items:[],width:0},r.push(h),this.height=r.length*(c.textBlock.height+5)),c.textBlock.x=h.width,c.textBlock.y=0,h.width+=Math.round(c.textBlock.width+c.textBlock._lineHeight+(0===h.width?0:.5*c.textBlock._lineHeight))):(this.height+this.lineHeight<s?(h={items:[],width:0},r.push(h),this.height=r.length*this.lineHeight):(h=r[u],u=(u+1)%r.length),c.textBlock=new T(this.ctx,{x:0,y:0,maxWidth:n,maxHeight:1.5*this.fontSize,angle:0,text:c.text,horizontalAlign:"left",fontSize:this.fontSize,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontColor:this.fontColor,fontStyle:this.fontStyle,textBaseline:"top"}),c.textBlock.measureText(),c.textBlock.x=h.width,c.textBlock.y=0,h.width+=c.textBlock.width+c.textBlock._lineHeight+(0===h.width?0:.5*c.textBlock._lineHeight)),h.items.push(c),this.width=Math.max(h.width,this.width);this.height=r.length*this.lineHeight}for("top"===this.verticalAlign?(a="left"===this.horizontalAlign?t.x1+2:"right"===this.horizontalAlign?t.x2-this.width-2:t.x1+t.width/2-this.width/2,i=t.y1):"center"===this.verticalAlign?(a="left"===this.horizontalAlign?t.x1+2:"right"===this.horizontalAlign?t.x2-this.width-2:t.x1+t.width/2-this.width/2,i=t.y1+t.height/2-this.height/2):"bottom"===this.verticalAlign&&(a="left"===this.horizontalAlign?t.x1+2:"right"===this.horizontalAlign?t.x2-this.width-2:t.x1+t.width/2-this.width/2,i=t.y2-this.height-5),this.items=o,l=0;l<this.items.length;l++)c=o[l],c.id=++this.chart._eventManager.lastObjectId,this.chart._eventManager.objectMap[c.id]={id:c.id,objectType:"legendItem",legendItemIndex:l,dataSeriesIndex:c.dataSeriesIndex,dataPointIndex:c.dataPointIndex};for(l=0;l<r.length;l++)for(h=r[l],t=0;t<h.items.length;t++)c=h.items[t],s=c.textBlock.x+a+(0===t?.2*p:.4*this.lineHeight+.2*p),o=i+l*this.lineHeight,n=s,this.chart.data[c.dataSeriesIndex].visible||(this.ctx.globalAlpha=.5),("line"===c.chartType||"stepLine"===c.chartType||"spline"===c.chartType)&&(this.ctx.strokeStyle=c.lineColor,this.ctx.lineWidth=Math.ceil(this.lineHeight/8),this.ctx.beginPath(),this.ctx.moveTo(s-.1*this.lineHeight,o+this.lineHeight/2),this.ctx.lineTo(s+.7*this.lineHeight,o+this.lineHeight/2),this.ctx.stroke(),n-=.1*this.lineHeight),G.drawMarker(s+p/2,o+this.lineHeight/2,this.ctx,c.markerType,p,c.markerColor,null,0),c.textBlock.x=s+Math.round(.9*this.lineHeight),c.textBlock.y=o,c.textBlock.render(!0),this.chart.data[c.dataSeriesIndex].visible||(this.ctx.globalAlpha=1),s=d(c.id),this.ghostCtx.fillStyle=s,this.ghostCtx.beginPath(),this.ghostCtx.fillRect(n,c.textBlock.y,c.textBlock.x+c.textBlock.width-n,c.textBlock.height),c.x1=this.chart._eventManager.objectMap[c.id].x1=n,c.y1=this.chart._eventManager.objectMap[c.id].y1=c.textBlock.y,c.x2=this.chart._eventManager.objectMap[c.id].x2=c.textBlock.x+c.textBlock.width,c.y2=this.chart._eventManager.objectMap[c.id].y2=c.textBlock.y+c.textBlock.height;this.chart.layoutManager.registerSpace(e,{width:this.width+2+2,height:this.height+5+5}),this.bounds={x1:a,y1:i,x2:a+this.width,y2:i+this.height}},t(S,f),S.prototype.render=function(){var t=this.chart.layoutManager.getFreeSpace();this.ctx.fillStyle="red",this.ctx.fillRect(t.x1,t.y1,t.x2,t.y2)},t(k,f),k.prototype.getDefaultAxisPlacement=function(){var t=this.type;return"column"===t||"line"===t||"stepLine"===t||"spline"===t||"area"===t||"stepArea"===t||"splineArea"===t||"stackedColumn"===t||"stackedLine"===t||"bubble"===t||"scatter"===t||"stackedArea"===t||"stackedColumn100"===t||"stackedLine100"===t||"stackedArea100"===t?"normal":"bar"===t||"stackedBar"===t||"stackedBar100"===t?"xySwapped":"pie"===t||"doughnut"===t?"none":(window.console.log("Unknown Chart Type: "+t),null)},k.getDefaultLegendMarker=function(t){return"column"===t||"stackedColumn"===t||"stackedLine"===t||"bar"===t||"stackedBar"===t||"stackedBar100"===t||"bubble"===t||"scatter"===t||"stackedColumn100"===t||"stackedLine100"===t||"stepArea"===t?"square":"line"===t||"stepLine"===t||"spline"===t||"pie"===t||"doughnut"===t?"circle":"area"===t||"splineArea"===t||"stackedArea"===t||"stackedArea100"===t?"triangle":(window.console.log("Unknown Chart Type: "+t),null)},k.prototype.getDataPointAtX=function(t,e){if(!this.dataPoints||0===this.dataPoints.length)return null;var i={dataPoint:null,distance:1/0,index:0/0},a=null,n=0,s=0,o=1,r=1/0,l=0,h=0,d=0;for("none"!==this.chart.plotInfo.axisPlacement&&(d=this.dataPoints[this.dataPoints.length-1].x-this.dataPoints[0].x,d=d>0?(this.dataPoints.length-1)/d*(t-this.dataPoints[0].x)>>0:0);;){if(s=o>0?d+n:d-n,s>=0&&s<this.dataPoints.length){var a=this.dataPoints[s],c=Math.abs(a.x-t);if(c<i.distance&&(i.dataPoint=a,i.distance=c,i.index=s),a=Math.abs(a.x-t),r>=a?r=a:o>0?l++:h++,l>1e3&&h>1e3)break}else if(0>d-n&&d+n>=this.dataPoints.length)break;-1===o?(n++,o=1):o=-1}return e||i.dataPoint.x!==t?e&&null!==i.dataPoint?i:null:i},k.prototype.getDataPointAtXY=function(t,e,i){if(!this.dataPoints||0===this.dataPoints.length)return null;i=i||!1;var a=[],n=0,s=0,o=1,r=!1,l=1/0,h=0,d=0,c=0;for("none"!==this.chart.plotInfo.axisPlacement&&(c=this.chart.axisX.getXValueAt({x:t,y:e}),s=this.dataPoints[this.dataPoints.length-1].x-this.dataPoints[0].x,c=s>0?(this.dataPoints.length-1)/s*(c-this.dataPoints[0].x)>>0:0);;){if(s=o>0?c+n:c-n,s>=0&&s<this.dataPoints.length){var x=this.chart._eventManager.objectMap[this.dataPointIds[s]],m=this.dataPoints[s];if(x){switch(this.type){case"column":case"stackedColumn":case"stackedColumn100":case"bar":case"stackedBar":case"stackedBar100":t>=x.x1&&t<=x.x2&&e>=x.y1&&e<=x.y2&&(a.push({dataPoint:m,dataPointIndex:s,dataSeries:this,distance:Math.min(Math.abs(x.x1-t),Math.abs(x.x2-t),Math.abs(x.y1-e),Math.abs(x.y2-e))}),r=!0);break;case"line":case"stepLine":case"spline":case"area":case"stepArea":case"stackedArea":case"stackedArea100":case"splineArea":case"scatter":var p=u("markerSize",m,this)||4,g=i?20:p,y=Math.sqrt(Math.pow(x.x1-t,2)+Math.pow(x.y1-e,2));g>=y&&a.push({dataPoint:m,dataPointIndex:s,dataSeries:this,distance:y}),s=Math.abs(x.x1-t),l>=s?l=s:o>0?h++:d++,p/2>=y&&(r=!0);break;case"bubble":p=x.size,y=Math.sqrt(Math.pow(x.x1-t,2)+Math.pow(x.y1-e,2)),p/2>=y&&(a.push({dataPoint:m,dataPointIndex:s,dataSeries:this,distance:y}),r=!0);break;case"pie":case"doughnut":p=x.center,g="doughnut"===this.type?.6*x.radius:0,y=Math.sqrt(Math.pow(p.x-t,2)+Math.pow(p.y-e,2)),y<x.radius&&y>g&&(y=Math.atan2(e-p.y,t-p.x),0>y&&(y+=2*Math.PI),y=(180*(y/Math.PI)%360+360)%360,p=(180*(x.startAngle/Math.PI)%360+360)%360,g=(180*(x.endAngle/Math.PI)%360+360)%360,0===g&&1<x.endAngle&&(g=360),p>g&&(g+=360,p>y&&(y+=360)),y>p&&g>y&&(a.push({dataPoint:m,dataPointIndex:s,dataSeries:this,distance:0}),r=!0))}if(r||h>1e3&&d>1e3)break}}else if(0>c-n&&c+n>=this.dataPoints.length)break;-1===o?(n++,o=1):o=-1}for(t=null,e=0;e<a.length;e++)t?a[e].distance<=t.distance&&(t=a[e]):t=a[e];return t},k.prototype.getMarkerProperties=function(t,e,i,a){var n=this.dataPoints;return{x:e,y:i,ctx:a,type:n[t].markerType?n[t].markerType:this.markerType,size:n[t].markerSize?n[t].markerSize:this.markerSize,color:n[t].markerColor?n[t].markerColor:this.markerColor?this.markerColor:n[t].color?n[t].color:this.color?this.color:this._colorSet[t%this._colorSet.length],borderColor:n[t].markerBorderColor?n[t].markerBorderColor:this.markerBorderColor?this.markerBorderColor:null,borderThickness:n[t].markerBorderThickness?n[t].markerBorderThickness:this.markerBorderThickness?this.markerBorderThickness:null}},t(C,f),C.prototype.createLabels=function(){var t,e,i=0,n=0,s=0,i=0;if("bottom"===this._position||"top"===this._position?(i=this.lineCoordinates.width/Math.abs(this.maximum-this.minimum)*this.interval,n=this.labelAutoFit?"undefined"==typeof this._options.labelMaxWidth?.9*i>>0:this.labelMaxWidth:"undefined"==typeof this._options.labelMaxWidth?.7*this.chart.width>>0:this.labelMaxWidth,s="undefined"==typeof this._options.labelWrap||this.labelWrap?.5*this.chart.height>>0:1.5*this.labelFontSize):("left"===this._position||"right"===this._position)&&(i=this.lineCoordinates.height/Math.abs(this.maximum-this.minimum)*this.interval,n=this.labelAutoFit?"undefined"==typeof this._options.labelMaxWidth?.3*this.chart.width>>0:this.labelMaxWidth:"undefined"==typeof this._options.labelMaxWidth?.5*this.chart.width>>0:this.labelMaxWidth,s="undefined"==typeof this._options.labelWrap||this.labelWrap?2*i>>0:1.5*this.labelFontSize),"axisX"===this.type&&"dateTime"===this.chart.plotInfo.axisXValueType)for(e=a(new Date(this.maximum),this.interval,this.intervalType),i=this.intervalStartPosition;e>i;a(i,this.interval,this.intervalType))t="axisX"===this.type&&this.labels[i]?this.labels[i]:O(i,this.valueFormatString,this.chart._cultureInfo),t=new T(this.ctx,{x:0,y:0,maxWidth:n,maxHeight:s,angle:this.labelAngle,text:this.prefix+t+this.suffix,horizontalAlign:"left",fontSize:this.labelFontSize,fontFamily:this.labelFontFamily,fontWeight:this.labelFontWeight,fontColor:this.labelFontColor,fontStyle:this.labelFontStyle,textBaseline:"middle"}),this._labels.push({position:i.getTime(),textBlock:t,effectiveHeight:null});else{if(e=this.maximum,this.labels&&this.labels.length){t=Math.ceil(this.interval);for(var o=Math.ceil(this.intervalStartPosition),r=!1,i=o;i<this.maximum;i+=t){if(!this.labels[i]){r=!1;break}r=!0}r&&(this.interval=t,this.intervalStartPosition=o)}for(i=this.intervalStartPosition;e>=i;i+=this.interval)t="axisX"===this.type&&this.labels[i]?this.labels[i]:U(i,this.valueFormatString,this.chart._cultureInfo),t=new T(this.ctx,{x:0,y:0,maxWidth:n,maxHeight:s,angle:this.labelAngle,text:this.prefix+t+this.suffix,horizontalAlign:"left",fontSize:this.labelFontSize,fontFamily:this.labelFontFamily,fontWeight:this.labelFontWeight,fontColor:this.labelFontColor,fontStyle:this.labelFontStyle,textBaseline:"middle",borderThickness:0}),this._labels.push({position:i,textBlock:t,effectiveHeight:null})}for(i=0;i<this.stripLines.length;i++)e=this.stripLines[i],t=new T(this.ctx,{x:0,y:0,backgroundColor:e.labelBackgroundColor,maxWidth:n,maxHeight:s,angle:this.labelAngle,text:e.label,horizontalAlign:"left",fontSize:e.labelFontSize,fontFamily:e.labelFontFamily,fontWeight:e.labelFontWeight,fontColor:e.labelFontColor,fontStyle:e.labelFontStyle,textBaseline:"middle",borderThickness:0}),this._labels.push({position:e.value,textBlock:t,effectiveHeight:null,stripLine:e})},C.prototype.createLabelsAndCalculateWidth=function(){var t=0;if(this._labels=[],"left"===this._position||"right"===this._position)for(this.createLabels(),i=0;i<this._labels.length;i++){var e=this._labels[i].textBlock.measureText(),a=0,a=0===this.labelAngle?e.width:e.width*Math.cos(Math.PI/180*Math.abs(this.labelAngle))+e.height/2*Math.sin(Math.PI/180*Math.abs(this.labelAngle));a>t&&(t=a),this._labels[i].effectiveWidth=a}return(this.title?c(this.titleFontFamily,this.titleFontSize,this.titleFontWeight)+2:0)+t+this.tickLength+5},C.prototype.createLabelsAndCalculateHeight=function(){var t=0;this._labels=[];var e,i=0;if(this.createLabels(),"bottom"===this._position||"top"===this._position)for(i=0;i<this._labels.length;i++){e=this._labels[i].textBlock,e=e.measureText();var a=0,a=0===this.labelAngle?e.height:e.width*Math.sin(Math.PI/180*Math.abs(this.labelAngle))+e.height/2*Math.cos(Math.PI/180*Math.abs(this.labelAngle));a>t&&(t=a),this._labels[i].effectiveHeight=a}return(this.title?c(this.titleFontFamily,this.titleFontSize,this.titleFontWeight)+2:0)+t+this.tickLength+5},C.setLayoutAndRender=function(t,e,i,a,n){var s,o,r,l=t.chart,h=l.ctx;if(t.calculateAxisParameters(),e&&e.calculateAxisParameters(),i&&i.calculateAxisParameters(),e&&i&&"undefined"==typeof e._options.maximum&&"undefined"==typeof e._options.minimum&&"undefined"==typeof e._options.interval&&"undefined"==typeof i._options.maximum&&"undefined"==typeof i._options.minimum&&"undefined"==typeof i._options.interval){r=(e.maximum-e.minimum)/e.interval;var d=(i.maximum-i.minimum)/i.interval;r>d?i.maximum=i.interval*r+i.minimum:d>r&&(e.maximum=e.interval*d+e.minimum)}if(d=e?e.margin:0,"normal"===a){t.lineCoordinates={};var c=Math.ceil(e?e.createLabelsAndCalculateWidth():0);s=Math.round(n.x1+c+d),t.lineCoordinates.x1=s,d=Math.ceil(i?i.createLabelsAndCalculateWidth():0),o=Math.round(n.x2-d>t.chart.width-10?t.chart.width-10:n.x2-d),t.lineCoordinates.x2=o,t.lineCoordinates.width=Math.abs(o-s);var x=Math.ceil(t.createLabelsAndCalculateHeight());a=Math.round(n.y2-x-t.margin),r=Math.round(n.y2-t.margin),t.lineCoordinates.y1=a,t.lineCoordinates.y2=a,t.boundingRect={x1:s,y1:a,x2:o,y2:r,width:o-s,height:r-a},e&&(s=Math.round(n.x1+e.margin),a=Math.round(10>n.y1?10:n.y1),o=Math.round(n.x1+c+e.margin),r=Math.round(n.y2-x-t.margin),e.lineCoordinates={x1:o,y1:a,x2:o,y2:r,height:Math.abs(r-a)},e.boundingRect={x1:s,y1:a,x2:o,y2:r,width:o-s,height:r-a}),i&&(s=Math.round(t.lineCoordinates.x2),a=Math.round(10>n.y1?10:n.y1),o=Math.round(s+d+i.margin),r=Math.round(n.y2-x-t.margin),i.lineCoordinates={x1:s,y1:a,x2:s,y2:r,height:Math.abs(r-a)},i.boundingRect={x1:s,y1:a,x2:o,y2:r,width:o-s,height:r-a}),t.calculateValueToPixelconversionParameters(),e&&e.calculateValueToPixelconversionParameters(),i&&i.calculateValueToPixelconversionParameters(),h.save(),h.rect(t.boundingRect.x1-40,t.boundingRect.y1,t.boundingRect.width+80,t.boundingRect.height),h.clip(),t.renderLabelsTicksAndTitle(),h.restore(),e&&e.renderLabelsTicksAndTitle(),i&&i.renderLabelsTicksAndTitle()}else{c=Math.ceil(t.createLabelsAndCalculateWidth()),e&&(e.lineCoordinates={},s=Math.round(n.x1+c+t.margin),o=Math.round(n.x2>e.chart.width-10?e.chart.width-10:n.x2),e.lineCoordinates.x1=s,e.lineCoordinates.x2=o,e.lineCoordinates.width=Math.abs(o-s)),i&&(i.lineCoordinates={},s=Math.round(n.x1+c+t.margin),o=Math.round(n.x2>i.chart.width-10?i.chart.width-10:n.x2),i.lineCoordinates.x1=s,i.lineCoordinates.x2=o,i.lineCoordinates.width=Math.abs(o-s));var x=Math.ceil(e?e.createLabelsAndCalculateHeight():0),m=Math.ceil(i?i.createLabelsAndCalculateHeight():0);e&&(a=Math.round(n.y2-x-e.margin),r=Math.round(n.y2-d>e.chart.height-10?e.chart.height-10:n.y2-d),e.lineCoordinates.y1=a,e.lineCoordinates.y2=a,e.boundingRect={x1:s,y1:a,x2:o,y2:r,width:o-s,height:x}),i&&(a=Math.round(n.y1+i.margin),r=n.y1+i.margin+m,i.lineCoordinates.y1=r,i.lineCoordinates.y2=r,i.boundingRect={x1:s,y1:a,x2:o,y2:r,width:o-s,height:m}),s=Math.round(n.x1+t.margin),a=Math.round(i?i.lineCoordinates.y2:10>n.y1?10:n.y1),o=Math.round(n.x1+c+t.margin),r=Math.round(e?e.lineCoordinates.y1:n.y2-d>t.chart.height-10?t.chart.height-10:n.y2-d),t.lineCoordinates={x1:o,y1:a,x2:o,y2:r,height:Math.abs(r-a)},t.boundingRect={x1:s,y1:a,x2:o,y2:r,width:o-s,height:r-a},t.calculateValueToPixelconversionParameters(),e&&e.calculateValueToPixelconversionParameters(),i&&i.calculateValueToPixelconversionParameters(),e&&e.renderLabelsTicksAndTitle(),i&&i.renderLabelsTicksAndTitle(),t.renderLabelsTicksAndTitle()}l.preparePlotArea(),n=t.chart.plotArea,h.save(),h.rect(n.x1,n.y1,Math.abs(n.x2-n.x1),Math.abs(n.y2-n.y1)),h.clip(),t.renderStripLinesOfThicknessType("value"),e&&e.renderStripLinesOfThicknessType("value"),i&&i.renderStripLinesOfThicknessType("value"),t.renderInterlacedColors(),e&&e.renderInterlacedColors(),i&&i.renderInterlacedColors(),h.restore(),t.renderGrid(),e&&e.renderGrid(),i&&i.renderGrid(),t.renderAxisLine(),e&&e.renderAxisLine(),i&&i.renderAxisLine(),t.renderStripLinesOfThicknessType("pixel"),e&&e.renderStripLinesOfThicknessType("pixel"),i&&i.renderStripLinesOfThicknessType("pixel")},C.prototype.renderLabelsTicksAndTitle=function(){var t=!1,e=0,i=1,a=0;if(0!==this.labelAngle&&360!==this.labelAngle&&(i=1.2),"undefined"==typeof this._options.interval){if("bottom"===this._position||"top"===this._position){for(s=0;s<this._labels.length;s++)n=this._labels[s],n.position<this.minimum||n.stripLine||(n=n.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)+n.textBlock.height*Math.sin(Math.PI/180*this.labelAngle),e+=n);e>this.lineCoordinates.width*i&&(t=!0)}if("left"===this._position||"right"===this._position){for(s=0;s<this._labels.length;s++)n=this._labels[s],n.position<this.minimum||n.stripLine||(n=n.textBlock.height*Math.cos(Math.PI/180*this.labelAngle)+n.textBlock.width*Math.sin(Math.PI/180*this.labelAngle),e+=n);e>this.lineCoordinates.height*i&&(t=!0)}}if("bottom"===this._position){for(var n,s=0,s=0;s<this._labels.length;s++)n=this._labels[s],n.position<this.minimum||n.position>this.maximum||(e=this.getPixelCoordinatesOnAxis(n.position),(this.tickThickness&&!this._labels[s].stripLine||this._labels[s].stripLine&&"pixel"===this._labels[s].stripLine._thicknessType)&&(this._labels[s].stripLine?(i=this._labels[s].stripLine,this.ctx.lineWidth=i.thickness,this.ctx.strokeStyle=i.color):(this.ctx.lineWidth=this.tickThickness,this.ctx.strokeStyle=this.tickColor),i=1===this.ctx.lineWidth%2?(e.x<<0)+.5:e.x<<0,this.ctx.beginPath(),this.ctx.moveTo(i,e.y<<0),this.ctx.lineTo(i,e.y+this.tickLength<<0),this.ctx.stroke()),(!t||0===a++%2||this._labels[s].stripLine)&&(0===n.textBlock.angle?(e.x-=n.textBlock.width/2,e.y+=this.tickLength+n.textBlock.fontSize/2):(e.x-=0>this.labelAngle?n.textBlock.width*Math.cos(Math.PI/180*this.labelAngle):0,e.y+=this.tickLength+Math.abs(0>this.labelAngle?n.textBlock.width*Math.sin(Math.PI/180*this.labelAngle)-5:5)),n.textBlock.x=e.x,n.textBlock.y=e.y,n.textBlock.render(!0)));this.title&&(this._titleTextBlock=new T(this.ctx,{x:this.lineCoordinates.x1,y:this.boundingRect.y2-this.titleFontSize-5,maxWidth:this.lineCoordinates.width,maxHeight:1.5*this.titleFontSize,angle:0,text:this.title,horizontalAlign:"center",fontSize:this.titleFontSize,fontFamily:this.titleFontFamily,fontWeight:this.titleFontWeight,fontColor:this.titleFontColor,fontStyle:this.titleFontStyle,textBaseline:"top"}),this._titleTextBlock.measureText(),this._titleTextBlock.x=this.lineCoordinates.x1+this.lineCoordinates.width/2-this._titleTextBlock.width/2,this._titleTextBlock.y=this.boundingRect.y2-this._titleTextBlock.height-2,this._titleTextBlock.render(!0))}else if("top"===this._position){for(s=0;s<this._labels.length;s++)n=this._labels[s],n.position<this.minimum||n.position>this.maximum||(e=this.getPixelCoordinatesOnAxis(n.position),(this.tickThickness&&!this._labels[s].stripLine||this._labels[s].stripLine&&"pixel"===this._labels[s].stripLine._thicknessType)&&(this._labels[s].stripLine?(i=this._labels[s].stripLine,this.ctx.lineWidth=i.thickness,this.ctx.strokeStyle=i.color):(this.ctx.lineWidth=this.tickThickness,this.ctx.strokeStyle=this.tickColor),i=1===this.ctx.lineWidth%2?(e.x<<0)+.5:e.x<<0,this.ctx.beginPath(),this.ctx.moveTo(i,e.y<<0),this.ctx.lineTo(i,e.y-this.tickLength<<0),this.ctx.stroke()),(!t||0===a++%2||this._labels[s].stripLine)&&(0===n.textBlock.angle?(e.x-=n.textBlock.width/2,e.y-=this.tickLength+n.textBlock.height/2):(e.x-=0<this.labelAngle?n.textBlock.width*Math.cos(Math.PI/180*this.labelAngle):0,e.y-=this.tickLength+Math.abs(0<this.labelAngle?n.textBlock.width*Math.sin(Math.PI/180*this.labelAngle)+5:5)),n.textBlock.x=e.x,n.textBlock.y=e.y,n.textBlock.render(!0)));this.title&&(this._titleTextBlock=new T(this.ctx,{x:this.lineCoordinates.x1,y:this.boundingRect.y1,maxWidth:this.lineCoordinates.width,maxHeight:1.5*this.titleFontSize,angle:0,text:this.title,horizontalAlign:"center",fontSize:this.titleFontSize,fontFamily:this.titleFontFamily,fontWeight:this.titleFontWeight,fontColor:this.titleFontColor,fontStyle:this.titleFontStyle,textBaseline:"top"}),this._titleTextBlock.measureText(),this._titleTextBlock.x=this.lineCoordinates.x1+this.lineCoordinates.width/2-this._titleTextBlock.width/2,this._titleTextBlock.render(!0))}else if("left"===this._position){for(s=0;s<this._labels.length;s++)n=this._labels[s],n.position<this.minimum||n.position>this.maximum||(e=this.getPixelCoordinatesOnAxis(n.position),(this.tickThickness&&!this._labels[s].stripLine||this._labels[s].stripLine&&"pixel"===this._labels[s].stripLine._thicknessType)&&(this._labels[s].stripLine?(i=this._labels[s].stripLine,this.ctx.lineWidth=i.thickness,this.ctx.strokeStyle=i.color):(this.ctx.lineWidth=this.tickThickness,this.ctx.strokeStyle=this.tickColor),i=1===this.ctx.lineWidth%2?(e.y<<0)+.5:e.y<<0,this.ctx.beginPath(),this.ctx.moveTo(e.x<<0,i),this.ctx.lineTo(e.x-this.tickLength<<0,i),this.ctx.stroke()),(!t||0===a++%2||this._labels[s].stripLine)&&(n.textBlock.x=e.x-n.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)-this.tickLength-5,n.textBlock.y=0===this.labelAngle?e.y-n.textBlock.height/2+this.labelFontSize/2:e.y-n.textBlock.width*Math.sin(Math.PI/180*this.labelAngle),n.textBlock.render(!0)));this.title&&(this._titleTextBlock=new T(this.ctx,{x:this.boundingRect.x1+5,y:this.lineCoordinates.y2,maxWidth:this.lineCoordinates.height,maxHeight:1.5*this.titleFontSize,angle:-90,text:this.title,horizontalAlign:"center",fontSize:this.titleFontSize,fontFamily:this.titleFontFamily,fontWeight:this.titleFontWeight,fontColor:this.titleFontColor,fontStyle:this.titleFontStyle,textBaseline:"top"}),this._titleTextBlock.measureText(),this._titleTextBlock.y=this.lineCoordinates.height/2+this._titleTextBlock.width/2+this.lineCoordinates.y1,this._titleTextBlock.render(!0))}else if("right"===this._position){for(s=0;s<this._labels.length;s++)n=this._labels[s],n.position<this.minimum||n.position>this.maximum||(e=this.getPixelCoordinatesOnAxis(n.position),(this.tickThickness&&!this._labels[s].stripLine||this._labels[s].stripLine&&"pixel"===this._labels[s].stripLine._thicknessType)&&(this._labels[s].stripLine?(i=this._labels[s].stripLine,this.ctx.lineWidth=i.thickness,this.ctx.strokeStyle=i.color):(this.ctx.lineWidth=this.tickThickness,this.ctx.strokeStyle=this.tickColor),i=1===this.ctx.lineWidth%2?(e.y<<0)+.5:e.y<<0,this.ctx.beginPath(),this.ctx.moveTo(e.x<<0,i),this.ctx.lineTo(e.x+this.tickLength<<0,i),this.ctx.stroke()),(!t||0===a++%2||this._labels[s].stripLine)&&(n.textBlock.x=e.x+this.tickLength+5,n.textBlock.y=0===this.labelAngle?e.y-n.textBlock.height/2+this.labelFontSize/2:e.y,n.textBlock.render(!0)));this.title&&(this._titleTextBlock=new T(this.ctx,{x:this.boundingRect.x2-5,y:this.lineCoordinates.y2,maxWidth:this.lineCoordinates.height,maxHeight:1.5*this.titleFontSize,angle:90,text:this.title,horizontalAlign:"center",fontSize:this.titleFontSize,fontFamily:this.titleFontFamily,fontWeight:this.titleFontWeight,fontColor:this.titleFontColor,fontStyle:this.titleFontStyle,textBaseline:"top"}),this._titleTextBlock.measureText(),this._titleTextBlock.y=this.lineCoordinates.height/2-this._titleTextBlock.width/2+this.lineCoordinates.y1,this._titleTextBlock.render(!0))
}},C.prototype.renderInterlacedColors=function(){var t,e,i=this.chart.plotArea.ctx,a=this.chart.plotArea,n=0;if(t=!0,"bottom"!==this._position&&"top"!==this._position||!this.interlacedColor){if(("left"===this._position||"right"===this._position)&&this.interlacedColor)for(i.fillStyle=this.interlacedColor,n=0;n<this._labels.length;n++)this._labels[n].stripLine||(t?(e=this.getPixelCoordinatesOnAxis(this._labels[n].position),t=this.getPixelCoordinatesOnAxis(n+1>=this._labels.length?this.maximum:this._labels[n+1].position),i.fillRect(a.x1,t.y,Math.abs(a.x1-a.x2),Math.abs(t.y-e.y)),t=!1):t=!0)}else for(i.fillStyle=this.interlacedColor,n=0;n<this._labels.length;n++)this._labels[n].stripLine||(t?(t=this.getPixelCoordinatesOnAxis(this._labels[n].position),e=this.getPixelCoordinatesOnAxis(n+1>=this._labels.length?this.maximum:this._labels[n+1].position),i.fillRect(t.x,a.y1,Math.abs(e.x-t.x),Math.abs(a.y1-a.y2)),t=!1):t=!0);i.beginPath()},C.prototype.renderStripLinesOfThicknessType=function(t){if(this.stripLines&&0<this.stripLines.length&&t)for(var e=this.chart.plotArea.ctx,i=0,i=0;i<this.stripLines.length;i++){var a=this.stripLines[i];if(a._thicknessType===t&&("pixel"!==t||!(a.value<this.minimum||a.value>this.maximum))){var n=this.getPixelCoordinatesOnAxis(a.value);e.strokeStyle=a.color,e.beginPath(),d(a.id);var s,o,r,l;e.lineWidth=Math.abs("pixel"===t?a.thickness:this.conversionParameters.pixelPerUnit*a.thickness),"bottom"===this._position||"top"===this._position?(s=o=1===e.lineWidth%2?(n.x<<0)+.5:n.x<<0,r=this.chart.plotArea.y1,l=this.chart.plotArea.y2):("left"===this._position||"right"===this._position)&&(r=l=1===e.lineWidth%2?(n.y<<0)+.5:n.y<<0,s=this.chart.plotArea.x1,o=this.chart.plotArea.x2),e.moveTo(s,r),e.lineTo(o,l),e.stroke()}}},C.prototype.renderGrid=function(){if(this.gridThickness&&0<this.gridThickness){var t,e=this.chart.ctx,i=this.chart.plotArea;if(e.lineWidth=this.gridThickness,e.strokeStyle=this.gridColor,"bottom"===this._position||"top"===this._position)for(a=0;a<this._labels.length&&!this._labels[a].stripLine;a++)this._labels[a].position<this.minimum||this._labels[a].position>this.maximum||(e.beginPath(),t=this.getPixelCoordinatesOnAxis(this._labels[a].position),t=1===e.lineWidth%2?(t.x<<0)+.5:t.x<<0,e.moveTo(t,i.y1<<0),e.lineTo(t,i.y2<<0),e.stroke());else if("left"===this._position||"right"===this._position)for(var a=0;a<this._labels.length&&!this._labels[a].stripLine;a++)this._labels[a].position<this.minimum||this._labels[a].position>this.maximum||(e.beginPath(),t=this.getPixelCoordinatesOnAxis(this._labels[a].position),t=1===e.lineWidth%2?(t.y<<0)+.5:t.y<<0,e.moveTo(i.x1<<0,t),e.lineTo(i.x2<<0,t),e.stroke())}},C.prototype.renderAxisLine=function(){var t=this.chart.ctx;if("bottom"===this._position||"top"===this._position){if(this.lineThickness){t.lineWidth=this.lineThickness,t.strokeStyle=this.lineColor?this.lineColor:"black";var e=1===this.lineThickness%2?(this.lineCoordinates.y1<<0)+.5:this.lineCoordinates.y1<<0;t.beginPath(),t.moveTo(this.lineCoordinates.x1,e),t.lineTo(this.lineCoordinates.x2,e),t.stroke()}}else"left"!==this._position&&"right"!==this._position||!this.lineThickness||(t.lineWidth=this.lineThickness,t.strokeStyle=this.lineColor,e=1===this.lineThickness%2?(this.lineCoordinates.x1<<0)+.5:this.lineCoordinates.x1<<0,t.beginPath(),t.moveTo(e,this.lineCoordinates.y1),t.lineTo(e,this.lineCoordinates.y2),t.stroke())},C.prototype.getPixelCoordinatesOnAxis=function(t){var e={},i=this.lineCoordinates.width,a=this.lineCoordinates.height;return("bottom"===this._position||"top"===this._position)&&(i/=Math.abs(this.maximum-this.minimum),e.x=this.lineCoordinates.x1+i*(t-this.minimum),e.y=this.lineCoordinates.y1),("left"===this._position||"right"===this._position)&&(i=a/Math.abs(this.maximum-this.minimum),e.y=this.lineCoordinates.y2-i*(t-this.minimum),e.x=this.lineCoordinates.x2),e},C.prototype.getXValueAt=function(t){if(!t)return null;var e=null;return"left"===this._position?e=(this.chart.axisX.maximum-this.chart.axisX.minimum)/this.chart.axisX.lineCoordinates.height*(this.chart.axisX.lineCoordinates.y2-t.y)+this.chart.axisX.minimum:"bottom"===this._position&&(e=(this.chart.axisX.maximum-this.chart.axisX.minimum)/this.chart.axisX.lineCoordinates.width*(t.x-this.chart.axisX.lineCoordinates.x1)+this.chart.axisX.minimum),e},C.prototype.calculateValueToPixelconversionParameters=function(t){t={pixelPerUnit:null,minimum:null,reference:null};var e=this.lineCoordinates.width,i=this.lineCoordinates.height;t.minimum=this.minimum,("bottom"===this._position||"top"===this._position)&&(t.pixelPerUnit=e/Math.abs(this.maximum-this.minimum),t.reference=this.lineCoordinates.x1),("left"===this._position||"right"===this._position)&&(t.pixelPerUnit=-1*i/Math.abs(this.maximum-this.minimum),t.reference=this.lineCoordinates.y2),this.conversionParameters=t},C.prototype.calculateAxisParameters=function(){var t=this.chart.layoutManager.getFreeSpace();"bottom"===this._position||"top"===this._position?(this.maxWidth=t.width,this.maxHeight=t.height):(this.maxWidth=t.height,this.maxHeight=t.width);var e,i,a,n,t="axisX"===this.type?500>this.maxWidth?8:Math.max(6,Math.floor(this.maxWidth/62)):Math.floor(this.maxWidth/40);if("axisX"===this.type?(e=null!==this.sessionVariables.internalMinimum?this.sessionVariables.internalMinimum:this.dataInfo.viewPortMin,i=null!==this.sessionVariables.internalMaximum?this.sessionVariables.internalMaximum:this.dataInfo.viewPortMax,0===i-e&&(i+=.4,e-=.4),a=1/0!==this.dataInfo.minDiff?this.dataInfo.minDiff:1):"axisY"===this.type&&(e="undefined"==typeof this._options.minimum?this.dataInfo.viewPortMin:this._options.minimum,i="undefined"==typeof this._options.maximum?this.dataInfo.viewPortMax:this._options.maximum,0===i-e?(i+=5,e-=5):(0!==i&&(i+=Math.abs(.05)),0!==e&&(e-=Math.abs(.05))),this.includeZero&&"undefined"==typeof this._options.minimum&&e>0&&(e=0),this.includeZero&&"undefined"==typeof this._options.maximum&&0>i&&(i=0)),"axisX"===this.type&&"dateTime"===this.chart.plotInfo.axisXValueType?(n=i-e,this.intervalType||(t>=n/1?(this.interval=1,this.intervalType="millisecond"):t>=n/2?(this.interval=2,this.intervalType="millisecond"):t>=n/5?(this.interval=5,this.intervalType="millisecond"):t>=n/10?(this.interval=10,this.intervalType="millisecond"):t>=n/20?(this.interval=20,this.intervalType="millisecond"):t>=n/50?(this.interval=50,this.intervalType="millisecond"):t>=n/100?(this.interval=100,this.intervalType="millisecond"):t>=n/200?(this.interval=200,this.intervalType="millisecond"):t>=n/250?(this.interval=250,this.intervalType="millisecond"):t>=n/300?(this.interval=300,this.intervalType="millisecond"):t>=n/400?(this.interval=400,this.intervalType="millisecond"):t>=n/500?(this.interval=500,this.intervalType="millisecond"):n/(1*E.secondDuration)<=t?(this.interval=1,this.intervalType="second"):n/(2*E.secondDuration)<=t?(this.interval=2,this.intervalType="second"):n/(5*E.secondDuration)<=t?(this.interval=5,this.intervalType="second"):n/(10*E.secondDuration)<=t?(this.interval=10,this.intervalType="second"):n/(15*E.secondDuration)<=t?(this.interval=15,this.intervalType="second"):n/(20*E.secondDuration)<=t?(this.interval=20,this.intervalType="second"):n/(30*E.secondDuration)<=t?(this.interval=30,this.intervalType="second"):n/(1*E.minuteDuration)<=t?(this.interval=1,this.intervalType="minute"):n/(2*E.minuteDuration)<=t?(this.interval=2,this.intervalType="minute"):n/(5*E.minuteDuration)<=t?(this.interval=5,this.intervalType="minute"):n/(10*E.minuteDuration)<=t?(this.interval=10,this.intervalType="minute"):n/(15*E.minuteDuration)<=t?(this.interval=15,this.intervalType="minute"):n/(20*E.minuteDuration)<=t?(this.interval=20,this.intervalType="minute"):n/(30*E.minuteDuration)<=t?(this.interval=30,this.intervalType="minute"):n/(1*E.hourDuration)<=t?(this.interval=1,this.intervalType="hour"):n/(2*E.hourDuration)<=t?(this.interval=2,this.intervalType="hour"):n/(3*E.hourDuration)<=t?(this.interval=3,this.intervalType="hour"):n/(6*E.hourDuration)<=t?(this.interval=6,this.intervalType="hour"):n/(1*E.dayDuration)<=t?(this.interval=1,this.intervalType="day"):n/(2*E.dayDuration)<=t?(this.interval=2,this.intervalType="day"):n/(4*E.dayDuration)<=t?(this.interval=4,this.intervalType="day"):n/(1*E.weekDuration)<=t?(this.interval=1,this.intervalType="week"):n/(2*E.weekDuration)<=t?(this.interval=2,this.intervalType="week"):n/(3*E.weekDuration)<=t?(this.interval=3,this.intervalType="week"):n/(1*E.monthDuration)<=t?(this.interval=1,this.intervalType="month"):n/(2*E.monthDuration)<=t?(this.interval=2,this.intervalType="month"):n/(3*E.monthDuration)<=t?(this.interval=3,this.intervalType="month"):n/(6*E.monthDuration)<=t?(this.interval=6,this.intervalType="month"):(this.interval=n/(1*E.yearDuration)<=t?1:n/(2*E.yearDuration)<=t?2:n/(4*E.yearDuration)<=t?4:Math.floor(C.getNiceNumber(n/(t-1),!0)/E.yearDuration),this.intervalType="year")),this.minimum=null!==this.sessionVariables.internalMinimum?this.sessionVariables.internalMinimum:e-a/2,this.maximum=this.sessionVariables.internalMaximum?this.sessionVariables.internalMaximum:i+a/2,this.valueFormatString||("year"===this.intervalType?this.valueFormatString="YYYY":"month"===this.intervalType?this.valueFormatString="MMM YYYY":"week"===this.intervalType?this.valueFormatString="MMM DD YYYY":"day"===this.intervalType?this.valueFormatString="MMM DD YYYY":"hour"===this.intervalType?this.valueFormatString="hh:mm TT":"minute"===this.intervalType?this.valueFormatString="hh:mm TT":"second"===this.intervalType?this.valueFormatString="hh:mm:ss TT":"millisecond"===this.intervalType&&(this.valueFormatString="fff'ms'")),this.intervalStartPosition=this.getLabelStartPoint(new Date(this.minimum),this.intervalType,this.interval)):(this.intervalType="number",n=C.getNiceNumber(i-e,!1),this.interval=this._options&&this._options.interval?this._options.interval:C.getNiceNumber(n/(t-1),!0),this.minimum=null!==this.sessionVariables.internalMinimum?this.sessionVariables.internalMinimum:Math.floor(e/this.interval)*this.interval,this.maximum=null!==this.sessionVariables.internalMaximum?this.sessionVariables.internalMaximum:Math.ceil(i/this.interval)*this.interval,"axisX"===this.type?(null===this.sessionVariables.internalMinimum&&(this.minimum=e-a/2),this.sessionVariables.internalMaximum||(this.maximum=i+a/2),this.intervalStartPosition=Math.floor((this.minimum+.2*this.interval)/this.interval)*this.interval):"axisY"===this.type&&(this.intervalStartPosition=this.minimum)),"axisX"===this.type&&(this._absoluteMinimum=this._options&&"undefined"!=typeof this._options.minimum?this._options.minimum:this.dataInfo.min-a/2,this._absoluteMaximum=this._options&&"undefined"!=typeof this._options.maximum?this._options.maximum:this.dataInfo.max+a/2),!this.valueFormatString&&(this.valueFormatString="#,##0.##",n=Math.abs(this.maximum-this.minimum),1>n&&(e=Math.floor(Math.abs(Math.log(n)/Math.LN10))+2,e>2)))for(i=0;e-2>i;i++)this.valueFormatString+="#"},C.getNiceNumber=function(t,e){var i=Math.floor(Math.log(t)/Math.LN10),a=t/Math.pow(10,i);return(e?1.5>a?1:3>a?2:7>a?5:10:1>=a?1:2>=a?2:5>=a?5:10)*Math.pow(10,i)},C.prototype.getLabelStartPoint=function(){var t=n(this.interval,this.intervalType),t=new Date(Math.floor(this.minimum/t)*t);return"millisecond"!==this.intervalType&&("second"===this.intervalType?0<t.getMilliseconds()&&(t.setSeconds(t.getSeconds()+1),t.setMilliseconds(0)):"minute"===this.intervalType?(0<t.getSeconds()||0<t.getMilliseconds())&&(t.setMinutes(t.getMinutes()+1),t.setSeconds(0),t.setMilliseconds(0)):"hour"===this.intervalType?(0<t.getMinutes()||0<t.getSeconds()||0<t.getMilliseconds())&&(t.setHours(t.getHours()+1),t.setMinutes(0),t.setSeconds(0),t.setMilliseconds(0)):"day"===this.intervalType?(0<t.getHours()||0<t.getMinutes()||0<t.getSeconds()||0<t.getMilliseconds())&&(t.setDate(t.getDate()+1),t.setHours(0),t.setMinutes(0),t.setSeconds(0),t.setMilliseconds(0)):"week"===this.intervalType?(0<t.getDay()||0<t.getHours()||0<t.getMinutes()||0<t.getSeconds()||0<t.getMilliseconds())&&(t.setDate(t.getDate()+(7-t.getDay())),t.setHours(0),t.setMinutes(0),t.setSeconds(0),t.setMilliseconds(0)):"month"===this.intervalType?(1<t.getDate()||0<t.getHours()||0<t.getMinutes()||0<t.getSeconds()||0<t.getMilliseconds())&&(t.setMonth(t.getMonth()+1),t.setDate(1),t.setHours(0),t.setMinutes(0),t.setSeconds(0),t.setMilliseconds(0)):"year"===this.intervalType&&(0<t.getMonth()||1<t.getDate()||0<t.getHours()||0<t.getMinutes()||0<t.getSeconds()||0<t.getMilliseconds())&&(t.setFullYear(t.getFullYear()+1),t.setMonth(0),t.setDate(1),t.setHours(0),t.setMinutes(0),t.setSeconds(0),t.setMilliseconds(0))),t},t(w,f),t(A,f),A.prototype._initialize=function(){if(this.enabled){this.container=document.createElement("div"),this.container.setAttribute("class","canvasjs-chart-tooltip"),this.container.style.position="absolute",this.container.style.height="auto",this.container.style.boxShadow="1px 1px 2px 2px rgba(0,0,0,0.1)",this.container.style.zIndex="1000",this.container.style.display="none";var t;t='<div style=" width: auto;height: auto;min-width: 50px;',t+="line-height: 20px;",t+="padding: 5px;",t+="font-family: Calibri, Arial, Georgia, serif;",t+="font-weight: 400;",t+="font-style: "+(L?"italic;":"normal;"),t+="font-size: 14px;",t+="color: #000000;",t+="text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);",t+="text-align: left;",t+="border: 2px solid gray;",t+=L?"background: rgba(255,255,255,.9);":"background: rgb(255,255,255);",t+="text-indent: 0px;",t+="white-space: nowrap;",t+="border-radius: 10px;",L||(t+="filter: alpha(opacity = 90);",t+="filter: progid:DXImageTransform.Microsoft.Shadow(Strength=3, Direction=135, Color='#666666');"),t+='} "> Sample Tooltip</div>',this.container.innerHTML=t,this.contentDiv=this.container.firstChild,this.container.style.borderRadius=this.contentDiv.style.borderRadius,this.chart._canvasJSContainer.appendChild(this.container)}},A.prototype.mouseMoveHandler=function(t,e){this._lastUpdated&&40>(new Date).getTime()-this._lastUpdated||(this._lastUpdated=(new Date).getTime(),this._updateToolTip(t,e))},A.prototype._updateToolTip=function(t,e){if(this.enabled){if("undefined"==typeof t||"undefined"==typeof e){if(isNaN(this._prevX)||isNaN(this._prevY))return;t=this._prevX,e=this._prevY}else this._prevX=t,this._prevY=e;var i=null,a=null,n=[],s=0;if(this.shared&&"none"!==this.chart.plotInfo.axisPlacement){for(s="xySwapped"===this.chart.plotInfo.axisPlacement?(this.chart.axisX.maximum-this.chart.axisX.minimum)/this.chart.axisX.lineCoordinates.height*(this.chart.axisX.lineCoordinates.y2-e)+this.chart.axisX.minimum:(this.chart.axisX.maximum-this.chart.axisX.minimum)/this.chart.axisX.lineCoordinates.width*(t-this.chart.axisX.lineCoordinates.x1)+this.chart.axisX.minimum,i=[],a=0;a<this.chart.data.length;a++){var o=this.chart.data[a].getDataPointAtX(s,!0);o&&0<=o.index&&(o.dataSeries=this.chart.data[a],null!==o.dataPoint.y&&i.push(o))}if(0===i.length)return;for(i.sort(function(t,e){return t.distance-e.distance}),s=i[0],a=0;a<i.length;a++)i[a].dataPoint.x.valueOf()===s.dataPoint.x.valueOf()&&n.push(i[a]);i=null}else if((o=this.chart.getDataPointAtXY(t,e,!0))?(this.currentDataPointIndex=o.dataPointIndex,this.currentSeriesIndex=o.dataSeries.index):L?(o=m(t,e,this.chart._eventManager.ghostCtx),o>0&&"undefined"!=typeof this.chart._eventManager.objectMap[o]?(eventObject=this.chart._eventManager.objectMap[o],this.currentSeriesIndex=eventObject.dataSeriesIndex,this.currentDataPointIndex=0<=eventObject.dataPointIndex?eventObject.dataPointIndex:-1):this.currentDataPointIndex=-1):this.currentDataPointIndex=-1,0<=this.currentSeriesIndex){if(a=this.chart.data[this.currentSeriesIndex],o={},0<=this.currentDataPointIndex)i=a.dataPoints[this.currentDataPointIndex],o.dataSeries=a,o.dataPoint=i,o.index=this.currentDataPointIndex,o.distance=Math.abs(i.x-s);else{if("line"!==a.type&&"stepLine"!==a.type&&"spline"!==a.type&&"area"!==a.type&&"stepArea"!==a.type&&"splineArea"!==a.type&&"stackedArea"!==a.type&&"stackedArea100"!==a.type)return;s=(this.chart.axisX.maximum-this.chart.axisX.minimum)/this.chart.axisX.lineCoordinates.width*(t-this.chart.axisX.lineCoordinates.x1)+this.chart.axisX.minimum.valueOf(),o=a.getDataPointAtX(s,!0),o.dataSeries=a,this.currentDataPointIndex=o.index,i=o.dataPoint}null!==o.dataPoint.y&&n.push(o)}if(0<n.length){this.highlightObjects(n),s="",s=this.getToolTipInnerHTML({entries:n}),this.contentDiv.innerHTML=s,this.contentDiv.innerHTML=s,s=!1,"none"===this.container.style.display&&(s=!0,this.container.style.display="block");try{this.contentDiv.style.borderRightColor=this.contentDiv.style.borderLeftColor=this.contentDiv.style.borderColor=this.borderColor?this.borderColor:n[0].dataPoint.color?n[0].dataPoint.color:n[0].dataSeries.color?n[0].dataSeries.color:n[0].dataSeries._colorSet[n[0].index%n[0].dataSeries._colorSet.length]}catch(r){}"pie"===n[0].dataSeries.type||"doughnut"===n[0].dataSeries.type||"bar"===n[0].dataSeries.type||"stackedBar"===n[0].dataSeries.type||"stackedBar100"===n[0].dataSeries.type?toolTipLeft=t-10-this.container.clientWidth:(toolTipLeft=this.chart.axisX.lineCoordinates.width/Math.abs(this.chart.axisX.maximum-this.chart.axisX.minimum)*Math.abs(n[0].dataPoint.x-this.chart.axisX.minimum)+this.chart.axisX.lineCoordinates.x1+.5-this.container.clientWidth<<0,toolTipLeft-=10),toolTipLeft=toolTipLeft>0?toolTipLeft+"px":toolTipLeft+this.container.clientWidth+20+"px",n=1!==n.length||this.shared||"line"!==n[0].dataSeries.type&&"stepLine"!==n[0].dataSeries.type&&"spline"!==n[0].dataSeries.type&&"area"!==n[0].dataSeries.type&&"stepArea"!==n[0].dataSeries.type&&"splineArea"!==n[0].dataSeries.type&&"stackedArea"!==n[0].dataSeries.type&&"stackedArea100"!==n[0].dataSeries.type?"bar"===n[0].dataSeries.type||"stackedBar"===n[0].dataSeries.type||"stackedBar100"===n[0].dataSeries.type?n[0].dataSeries.axisX.lineCoordinates.y2-n[0].dataSeries.axisX.lineCoordinates.height/Math.abs(n[0].dataSeries.axisX.maximum-n[0].dataSeries.axisX.minimum)*Math.abs(n[0].dataPoint.x-n[0].dataSeries.axisX.minimum)+.5<<0:e:n[0].dataSeries.axisY.lineCoordinates.y2-n[0].dataSeries.axisY.lineCoordinates.height/Math.abs(n[0].dataSeries.axisY.maximum-n[0].dataSeries.axisY.minimum)*Math.abs(n[0].dataPoint.y-n[0].dataSeries.axisY.minimum)+.5<<0,n=-n+10,0<n+this.container.clientHeight+5&&(n-=n+this.container.clientHeight+5-0),this.container.style.left=toolTipLeft,this.container.style.bottom=n+"px",!this.animationEnabled||s?this.disableAnimation():this.enableAnimation()}}},A.prototype.highlightObjects=function(t){if(this.enabled){var e=this.chart.overlaidCanvasCtx;this.chart.resetOverlayedCanvas(),e.save();var i=this.chart.plotArea;for(e.rect(i.x1,i.y1,i.width,i.height),e.clip(),e.beginPath(),i=0;i<t.length;i++){var a=t[i];if((a=this.chart._eventManager.objectMap[a.dataSeries.dataPointIds[a.index]])&&a.objectType&&"dataPoint"===a.objectType){var n=this.chart.data[a.dataSeriesIndex],s=a.dataPointIndex;"line"===n.type||"stepLine"===n.type||"spline"===n.type||"scatter"===n.type||"area"===n.type||"stepArea"===n.type||"splineArea"===n.type||"stackedArea"===n.type||"stackedArea100"===n.type?(n=n.getMarkerProperties(s,a.x1,a.y1,this.chart.overlaidCanvasCtx),n.size=Math.max(1.5*n.size<<0,10),n.borderColor=n.borderColor||"#FFFFFF",n.borderThickness=n.borderThickness||Math.ceil(.1*n.size),G.drawMarkers([n])):"bubble"===n.type?(n=n.getMarkerProperties(s,a.x1,a.y1,this.chart.overlaidCanvasCtx),n.size=a.size,n.color="white",n.borderColor="white",e.globalAlpha=.3,G.drawMarkers([n]),e.globalAlpha=1):"column"===n.type||"stackedColumn"===n.type||"stackedColumn100"===n.type||"bar"===n.type||"stackedBar"===n.type||"stackedBar100"===n.type?(e.globalAlpha=.3,q(e,a.x1,a.y1,a.x2,a.y2,"white",!1,!1,!1,!1),e.globalAlpha=1):("pie"===n.type||"doughnut"===n.type)&&(e.globalAlpha=.3,J(e,a.center,a.radius,"white",n.type,a.startAngle,a.endAngle),e.globalAlpha=1)}}e.globalAlpha=1,e.restore()}},A.prototype.getToolTipInnerHTML=function(t){t=t.entries;for(var e="",i=null,a=null,n=0,s="",o=!0,r=0;r<t.length;r++)if(t[r].dataSeries.toolTipContent||t[r].dataPoint.toolTipContent){o=!1;break}if(o&&this.content&&"function"==typeof this.content)e=this.content({entries:t});else if(1<t.length)for(r=0;r<t.length;r++)i=t[r].dataSeries,a=t[r].dataPoint,n=t[r].index,s="",0===r&&o&&!this.content&&(s+="undefined"!=typeof this.chart.axisX.labels[a.x]?this.chart.axisX.labels[a.x]:"{x}",s+="</br>"),"line"===i.type||"stepLine"===i.type||"spline"===i.type||"area"===i.type||"stepArea"===i.type||"splineArea"===i.type||"column"===i.type||"bar"===i.type||"scatter"===i.type||"stackedColumn"===i.type||"stackedColumn100"===i.type||"stackedBar"===i.type||"stackedBar100"===i.type||"stackedArea"===i.type||"stackedArea100"===i.type?s+=a.toolTipContent?a.toolTipContent:i.toolTipContent?i.toolTipContent:this.content&&"function"!=typeof this.content?this.content:"<span style='\"'color:{color};'\"'>{name}:</span>&nbsp;&nbsp;{y}":"bubble"===i.type?s+=a.toolTipContent?a.toolTipContent:i.toolTipContent?i.toolTipContent:this.content&&"function"!=typeof this.content?this.content:"<span style='\"'color:{color};'\"'>{name}:</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}":("pie"===i.type||"doughnut"===i.type)&&(s+=a.toolTipContent?a.toolTipContent:i.toolTipContent?i.toolTipContent:this.content&&"function"!=typeof this.content?this.content:"&nbsp;&nbsp;{y}"),e+=this.chart.replaceKeywordsWithValue(s,a,i,n),r<t.length-1&&(e+="</br>");else i=t[0].dataSeries,a=t[0].dataPoint,n=t[0].index,"line"===i.type||"stepLine"===i.type||"spline"===i.type||"area"===i.type||"stepArea"===i.type||"splineArea"===i.type||"column"===i.type||"bar"===i.type||"scatter"===i.type||"stackedColumn"===i.type||"stackedColumn100"===i.type||"stackedBar"===i.type||"stackedBar100"===i.type||"stackedArea"===i.type||"stackedArea100"===i.type?s=a.toolTipContent?a.toolTipContent:i.toolTipContent?i.toolTipContent:this.content&&"function"!=typeof this.content?this.content:"<span style='\"'color:{color};'\"'>"+(a.label?"{label}":"{x}")+" :</span>&nbsp;&nbsp;{y}":"bubble"===i.type?s=a.toolTipContent?a.toolTipContent:i.toolTipContent?i.toolTipContent:this.content&&"function"!=typeof this.content?this.content:"<span style='\"'color:{color};'\"'>"+(a.label?"{label}":"{x}")+":</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}":("pie"===i.type||"doughnut"===i.type)&&(s=a.toolTipContent?a.toolTipContent:i.toolTipContent?i.toolTipContent:this.content&&"function"!=typeof this.content?this.content:(a.name?"{name}:&nbsp;&nbsp;":a.label?"{label}:&nbsp;&nbsp;":"")+"{y}"),e+=this.chart.replaceKeywordsWithValue(s,a,i,n);return e},A.prototype.enableAnimation=function(){this.container.style.WebkitTransition||(this.container.style.WebkitTransition="left .2s ease-out, bottom .2s ease-out",this.container.style.MozTransition="left .2s ease-out, bottom .2s ease-out",this.container.style.MsTransition="left .2s ease-out, bottom .2s ease-out",this.container.style.transition="left .2s ease-out, bottom .2s ease-out")},A.prototype.disableAnimation=function(){this.container.style.WebkitTransition&&(this.container.style.WebkitTransition="",this.container.style.MozTransition="",this.container.style.MsTransition="",this.container.style.transition="")},A.prototype.hide=function(){this.enabled&&(this.container.style.display="none",this.currentSeriesIndex=-1,this._prevY=this._prevX=0/0,this.chart.resetOverlayedCanvas())},v.prototype.replaceKeywordsWithValue=function(t,e,i,a){var n=this;return t.replace(/\{\s*[a-zA-Z]+\s*\}|"[^"]*"|'[^']*'/g,function(t){if('"'===t[0]&&'"'===t[t.length-1]||"'"===t[0]&&"'"===t[t.length-1])return t.slice(1,t.length-1);t=o(t.slice(1,t.length-1));var s=null;if("color"===t)return e.color?e.color:i.color?i.color:i._colorSet[a%i._colorSet.length];if(e.hasOwnProperty(t))s=e;else{if(!i.hasOwnProperty(t))return"";s=i}return"x"===t?n.axisX&&"dateTime"===n.plotInfo.axisXValueType?O(s[t],e.xValueFormatString?e.xValueFormatString:i.xValueFormatString?i.xValueFormatString:n.axisX&&n.axisX.valueFormatString?n.axisX.valueFormatString:"DD MMM YY",n._cultureInfo):U(s[t],e.xValueFormatString?e.xValueFormatString:i.xValueFormatString?i.xValueFormatString:"#,##0.########",n._cultureInfo):"y"===t?U(s[t],e.yValueFormatString?e.yValueFormatString:i.yValueFormatString?i.yValueFormatString:"#,##0.########",n._cultureInfo):s[t]})},I.prototype.reset=function(){this.lastObjectId=0,this.objectMap=[],this.rectangularRegionEventSubscriptions=[],this.previousDataPointEventObject=null,this.eventObjects=[],L&&(this.ghostCtx.clearRect(0,0,this.chart.width,this.chart.height),this.ghostCtx.beginPath())},I.prototype.getNewObjectTrackingId=function(){return++this.lastObjectId},I.prototype.mouseEventHandler=function(t){if("mousemove"===t.type||"click"===t.type){var e=[],i=V(t),a=null;if((a=this.chart.getObjectAtXY(i.x,i.y,!1))&&"undefined"!=typeof this.objectMap[a])if(a=this.objectMap[a],"dataPoint"===a.objectType){var n=this.chart.data[a.dataSeriesIndex],s=n.dataPoints[a.dataPointIndex],o=a.dataPointIndex;a.eventParameter={x:i.x,y:i.y,dataPoint:s,dataSeries:n._options,dataPointIndex:o,dataSeriesIndex:n.index},a.eventContext={context:s,userContext:s,mouseover:"mouseover",mousemove:"mousemove",mouseout:"mouseout",click:"click"},e.push(a),a=this.objectMap[n.id],a.eventParameter={x:i.x,y:i.y,dataPoint:s,dataSeries:n._options,dataPointIndex:o,dataSeriesIndex:n.index},a.eventContext={context:n,userContext:n._options,mouseover:"mouseover",mousemove:"mousemove",mouseout:"mouseout",click:"click"},e.push(this.objectMap[n.id])}else"legendItem"===a.objectType&&(n=this.chart.data[a.dataSeriesIndex],s=n.dataPoints[a.dataPointIndex],a.eventParameter={x:i.x,y:i.y,dataSeries:n._options,dataPoint:s,dataPointIndex:a.dataPointIndex,dataSeriesIndex:a.dataSeriesIndex},a.eventContext={context:this.chart.legend,userContext:this.chart.legend._options,mouseover:"itemmouseover",mousemove:"itemmousemove",mouseout:"itemmouseout",click:"itemclick"},e.push(a));for(n=[],i=0;i<this.mouseoveredObjectMaps.length;i++){for(s=!0,a=0;a<e.length;a++)if(e[a].id===this.mouseoveredObjectMaps[i].id){s=!1;break}s?this.fireEvent(this.mouseoveredObjectMaps[i],"mouseout",t):n.push(this.mouseoveredObjectMaps[i])}for(this.mouseoveredObjectMaps=n,i=0;i<e.length;i++){for(n=!1,a=0;a<this.mouseoveredObjectMaps.length;a++)if(e[i].id===this.mouseoveredObjectMaps[a].id){n=!0;break}n||(this.fireEvent(e[i],"mouseover",t),this.mouseoveredObjectMaps.push(e[i])),"click"===t.type?this.fireEvent(e[i],"click",t):"mousemove"===t.type&&this.fireEvent(e[i],"mousemove",t)}}},I.prototype.fireEvent=function(t,e,i){if(t&&e){var a=t.eventParameter,n=t.eventContext,s=t.eventContext.userContext;s&&n&&s[n[e]]&&s[n[e]].call(s,a),"mouseout"!==e?s.cursor&&s.cursor!==i.target.style.cursor&&(i.target.style.cursor=s.cursor):(i.target.style.cursor=this.chart._defaultCursor,delete t.eventParameter,delete t.eventContext),"click"===e&&"dataPoint"===t.objectType&&this.chart.pieDoughnutClickHandler&&this.chart.pieDoughnutClickHandler.call(this.chart.data[t.dataSeriesIndex],a)}},t(F,f);var G={drawMarker:function(t,e,i,a,n,s,o,r){if(i){var l=1;i.fillStyle=s?s:"#000000",i.strokeStyle=o?o:"#000000",i.lineWidth=r?r:0,"circle"===a?(i.moveTo(t,e),i.beginPath(),i.arc(t,e,n/2,0,2*Math.PI,!1),s&&i.fill(),r&&(o?i.stroke():(l=i.globalAlpha,i.globalAlpha=.15,i.strokeStyle="black",i.stroke(),i.globalAlpha=l))):"square"===a?(i.beginPath(),i.rect(t-n/2,e-n/2,n,n),s&&i.fill(),r&&(o?i.stroke():(l=i.globalAlpha,i.globalAlpha=.15,i.strokeStyle="black",i.stroke(),i.globalAlpha=l))):"triangle"===a?(i.beginPath(),i.moveTo(t-n/2,e+n/2),i.lineTo(t+n/2,e+n/2),i.lineTo(t,e-n/2),i.closePath(),s&&i.fill(),r&&(o?i.stroke():(l=i.globalAlpha,i.globalAlpha=.15,i.strokeStyle="black",i.stroke(),i.globalAlpha=l)),i.beginPath()):"cross"===a&&(i.strokeStyle=s,i.lineWidth=n/4,i.beginPath(),i.moveTo(t-n/2,e-n/2),i.lineTo(t+n/2,e+n/2),i.stroke(),i.moveTo(t+n/2,e-n/2),i.lineTo(t-n/2,e+n/2),i.stroke())}},drawMarkers:function(t){for(var e=0;e<t.length;e++){var i=t[e];G.drawMarker(i.x,i.y,i.ctx,i.type,i.size,i.color,i.borderColor,i.borderThickness)}}},K={Chart:function(t,e){var i=new v(t,e,this);this.render=function(){i.render()},this.options=i._options},addColorSet:function(t,e){z[t]=e},addCultureInfo:function(t,e){B[t]=e}};K.Chart.version="v1.4.0 Beta 2",window.CanvasJS=K}(),document.createElement("canvas").getContext||function(){function t(){return this.context_||(this.context_=new m(this))}function e(t,e){var i=I.call(arguments,2);return function(){return t.apply(e,i.concat(I.call(arguments)))}}function i(t){return String(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;")}function a(t){t.namespaces.g_vml_||t.namespaces.add("g_vml_","urn:schemas-microsoft-com:vml","#default#VML"),t.namespaces.g_o_||t.namespaces.add("g_o_","urn:schemas-microsoft-com:office:office","#default#VML"),t.styleSheets.ex_canvas_||(t=t.createStyleSheet(),t.owningElement.id="ex_canvas_",t.cssText="canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}")}function n(t){var e=t.srcElement;switch(t.propertyName){case"width":e.getContext().clearRect(),e.style.width=e.attributes.width.nodeValue+"px",e.firstChild.style.width=e.clientWidth+"px";break;case"height":e.getContext().clearRect(),e.style.height=e.attributes.height.nodeValue+"px",e.firstChild.style.height=e.clientHeight+"px"}}function s(t){t=t.srcElement,t.firstChild&&(t.firstChild.style.width=t.clientWidth+"px",t.firstChild.style.height=t.clientHeight+"px")}function o(){return[[1,0,0],[0,1,0],[0,0,1]]}function r(t,e){for(var i=o(),a=0;3>a;a++)for(var n=0;3>n;n++){for(var s=0,r=0;3>r;r++)s+=t[a][r]*e[r][n];i[a][n]=s}return i}function l(t,e){e.fillStyle=t.fillStyle,e.lineCap=t.lineCap,e.lineJoin=t.lineJoin,e.lineWidth=t.lineWidth,e.miterLimit=t.miterLimit,e.shadowBlur=t.shadowBlur,e.shadowColor=t.shadowColor,e.shadowOffsetX=t.shadowOffsetX,e.shadowOffsetY=t.shadowOffsetY,e.strokeStyle=t.strokeStyle,e.globalAlpha=t.globalAlpha,e.font=t.font,e.textAlign=t.textAlign,e.textBaseline=t.textBaseline,e.arcScaleX_=t.arcScaleX_,e.arcScaleY_=t.arcScaleY_,e.lineScale_=t.lineScale_}function h(t){var e=t.indexOf("(",3),i=t.indexOf(")",e+1),e=t.substring(e+1,i).split(",");return(4!=e.length||"a"!=t.charAt(3))&&(e[3]=1),e}function d(t,e,i){return Math.min(i,Math.max(e,t))}function c(t,e,i){return 0>i&&i++,i>1&&i--,1>6*i?t+6*(e-t)*i:1>2*i?e:2>3*i?t+6*(e-t)*(2/3-i):t}function x(t){if(t in D)return D[t];var e,i=1;if(t=String(t),"#"==t.charAt(0))e=t;else if(/^rgb/.test(t)){i=h(t),e="#";for(var a,n=0;3>n;n++)a=-1!=i[n].indexOf("%")?Math.floor(255*(parseFloat(i[n])/100)):+i[n],e+=L[d(a,0,255)];i=+i[3]}else if(/^hsl/.test(t)){if(n=i=h(t),e=parseFloat(n[0])/360%360,0>e&&e++,a=d(parseFloat(n[1])/100,0,1),n=d(parseFloat(n[2])/100,0,1),0==a)a=n=e=n;else{var s=.5>n?n*(1+a):n+a-n*a,o=2*n-s;a=c(o,s,e+1/3),n=c(o,s,e),e=c(o,s,e-1/3)}e="#"+L[Math.floor(255*a)]+L[Math.floor(255*n)]+L[Math.floor(255*e)],i=i[3]}else e=z[t]||t;return D[t]={color:e,alpha:i}}function m(t){this.m_=o(),this.mStack_=[],this.aStack_=[],this.currentPath_=[],this.fillStyle=this.strokeStyle="#000",this.lineWidth=1,this.lineJoin="miter",this.lineCap="butt",this.miterLimit=1*w,this.globalAlpha=1,this.font="10px sans-serif",this.textAlign="left",this.textBaseline="alphabetic",this.canvas=t;var e="width:"+t.clientWidth+"px;height:"+t.clientHeight+"px;overflow:hidden;position:absolute",i=t.ownerDocument.createElement("div");i.style.cssText=e,t.appendChild(i),e=i.cloneNode(!1),e.style.backgroundColor="red",e.style.filter="alpha(opacity=0)",t.appendChild(e),this.element_=i,this.lineScale_=this.arcScaleY_=this.arcScaleX_=1}function p(t,e,i,a){t.currentPath_.push({type:"bezierCurveTo",cp1x:e.x,cp1y:e.y,cp2x:i.x,cp2y:i.y,x:a.x,y:a.y}),t.currentX_=a.x,t.currentY_=a.y}function u(t,e){var i=x(t.strokeStyle),a=i.color,i=i.alpha*t.globalAlpha,n=t.lineScale_*t.lineWidth;1>n&&(i*=n),e.push("<g_vml_:stroke",' opacity="',i,'"',' joinstyle="',t.lineJoin,'"',' miterlimit="',t.miterLimit,'"',' endcap="',Y[t.lineCap]||"square",'"',' weight="',n,'px"',' color="',a,'" />')}function g(t,e,i,a){var n=t.fillStyle,s=t.arcScaleX_,o=t.arcScaleY_,r=a.x-i.x,l=a.y-i.y;
if(n instanceof v){var h=0,d=a=0,c=0,m=1;if("gradient"==n.type_){h=n.x1_/s,i=n.y1_/o;var p=y(t,n.x0_/s,n.y0_/o),h=y(t,h,i),h=180*Math.atan2(h.x-p.x,h.y-p.y)/Math.PI;0>h&&(h+=360),1e-6>h&&(h=0)}else p=y(t,n.x0_,n.y0_),a=(p.x-i.x)/r,d=(p.y-i.y)/l,r/=s*w,l/=o*w,m=T.max(r,l),c=2*n.r0_/m,m=2*n.r1_/m-c;s=n.colors_,s.sort(function(t,e){return t.offset-e.offset}),o=s.length,p=s[0].color,i=s[o-1].color,r=s[0].alpha*t.globalAlpha,t=s[o-1].alpha*t.globalAlpha;for(var l=[],u=0;o>u;u++){var g=s[u];l.push(g.offset*m+c+" "+g.color)}e.push('<g_vml_:fill type="',n.type_,'"',' method="none" focus="100%"',' color="',p,'"',' color2="',i,'"',' colors="',l.join(","),'"',' opacity="',t,'"',' g_o_:opacity2="',r,'"',' angle="',h,'"',' focusposition="',a,",",d,'" />')}else n instanceof b?r&&l&&e.push("<g_vml_:fill",' position="',-i.x/r*s*s,",",-i.y/l*o*o,'"',' type="tile"',' src="',n.src_,'" />'):(n=x(t.fillStyle),e.push('<g_vml_:fill color="',n.color,'" opacity="',n.alpha*t.globalAlpha,'" />'))}function y(t,e,i){return t=t.m_,{x:w*(e*t[0][0]+i*t[1][0]+t[2][0])-A,y:w*(e*t[0][1]+i*t[1][1]+t[2][1])-A}}function f(t,e,i){isFinite(e[0][0])&&isFinite(e[0][1])&&isFinite(e[1][0])&&isFinite(e[1][1])&&isFinite(e[2][0])&&isFinite(e[2][1])&&(t.m_=e,i&&(t.lineScale_=C(k(e[0][0]*e[1][1]-e[0][1]*e[1][0]))))}function v(t){this.type_=t,this.r1_=this.y1_=this.x1_=this.r0_=this.y0_=this.x0_=0,this.colors_=[]}function b(t,e){if(!t||1!=t.nodeType||"IMG"!=t.tagName)throw new P("TYPE_MISMATCH_ERR");if("complete"!=t.readyState)throw new P("INVALID_STATE_ERR");switch(e){case"repeat":case null:case"":this.repetition_="repeat";break;case"repeat-x":case"repeat-y":case"no-repeat":this.repetition_=e;break;default:throw new P("SYNTAX_ERR")}this.src_=t.src,this.width_=t.width,this.height_=t.height}function P(t){this.code=this[t],this.message=t+": DOM Exception "+this.code}var T=Math,_=T.round,M=T.sin,S=T.cos,k=T.abs,C=T.sqrt,w=10,A=w/2;navigator.userAgent.match(/MSIE ([\d.]+)?/);var I=Array.prototype.slice;a(document);var F={init:function(t){t=t||document,t.createElement("canvas"),t.attachEvent("onreadystatechange",e(this.init_,this,t))},init_:function(t){t=t.getElementsByTagName("canvas");for(var e=0;e<t.length;e++)this.initElement(t[e])},initElement:function(e){if(!e.getContext){e.getContext=t,a(e.ownerDocument),e.innerHTML="",e.attachEvent("onpropertychange",n),e.attachEvent("onresize",s);var i=e.attributes;i.width&&i.width.specified?e.style.width=i.width.nodeValue+"px":e.width=e.clientWidth,i.height&&i.height.specified?e.style.height=i.height.nodeValue+"px":e.height=e.clientHeight}return e}};F.init();for(var L=[],X=0;16>X;X++)for(var B=0;16>B;B++)L[16*X+B]=X.toString(16)+B.toString(16);var z={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000000",blanchedalmond:"#FFEBCD",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#00FFFF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgreen:"#006400",darkgrey:"#A9A9A9",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",grey:"#808080",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgreen:"#90EE90",lightgrey:"#D3D3D3",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#FF00FF",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",oldlace:"#FDF5E6",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",whitesmoke:"#F5F5F5",yellowgreen:"#9ACD32"},D={},E={},Y={butt:"flat",round:"round"},X=m.prototype;X.clearRect=function(){this.textMeasureEl_&&(this.textMeasureEl_.removeNode(!0),this.textMeasureEl_=null),this.element_.innerHTML=""},X.beginPath=function(){this.currentPath_=[]},X.moveTo=function(t,e){var i=y(this,t,e);this.currentPath_.push({type:"moveTo",x:i.x,y:i.y}),this.currentX_=i.x,this.currentY_=i.y},X.lineTo=function(t,e){var i=y(this,t,e);this.currentPath_.push({type:"lineTo",x:i.x,y:i.y}),this.currentX_=i.x,this.currentY_=i.y},X.bezierCurveTo=function(t,e,i,a,n,s){n=y(this,n,s),t=y(this,t,e),i=y(this,i,a),p(this,t,i,n)},X.quadraticCurveTo=function(t,e,i,a){t=y(this,t,e),i=y(this,i,a),a={x:this.currentX_+2/3*(t.x-this.currentX_),y:this.currentY_+2/3*(t.y-this.currentY_)},p(this,a,{x:a.x+(i.x-this.currentX_)/3,y:a.y+(i.y-this.currentY_)/3},i)},X.arc=function(t,e,i,a,n,s){i*=w;var o=s?"at":"wa",r=t+S(a)*i-A,l=e+M(a)*i-A;a=t+S(n)*i-A,n=e+M(n)*i-A,r!=a||s||(r+=.125),t=y(this,t,e),r=y(this,r,l),a=y(this,a,n),this.currentPath_.push({type:o,x:t.x,y:t.y,radius:i,xStart:r.x,yStart:r.y,xEnd:a.x,yEnd:a.y})},X.rect=function(t,e,i,a){this.moveTo(t,e),this.lineTo(t+i,e),this.lineTo(t+i,e+a),this.lineTo(t,e+a),this.closePath()},X.strokeRect=function(t,e,i,a){var n=this.currentPath_;this.beginPath(),this.moveTo(t,e),this.lineTo(t+i,e),this.lineTo(t+i,e+a),this.lineTo(t,e+a),this.closePath(),this.stroke(),this.currentPath_=n},X.fillRect=function(t,e,i,a){var n=this.currentPath_;this.beginPath(),this.moveTo(t,e),this.lineTo(t+i,e),this.lineTo(t+i,e+a),this.lineTo(t,e+a),this.closePath(),this.fill(),this.currentPath_=n},X.createLinearGradient=function(t,e,i,a){var n=new v("gradient");return n.x0_=t,n.y0_=e,n.x1_=i,n.y1_=a,n},X.createRadialGradient=function(t,e,i,a,n,s){var o=new v("gradientradial");return o.x0_=t,o.y0_=e,o.r0_=i,o.x1_=a,o.y1_=n,o.r1_=s,o},X.drawImage=function(t){var e,i,a,n,s,o,r,l;a=t.runtimeStyle.width,n=t.runtimeStyle.height,t.runtimeStyle.width="auto",t.runtimeStyle.height="auto";var h=t.width,d=t.height;if(t.runtimeStyle.width=a,t.runtimeStyle.height=n,3==arguments.length)e=arguments[1],i=arguments[2],s=o=0,r=a=h,l=n=d;else if(5==arguments.length)e=arguments[1],i=arguments[2],a=arguments[3],n=arguments[4],s=o=0,r=h,l=d;else{if(9!=arguments.length)throw Error("Invalid number of arguments");s=arguments[1],o=arguments[2],r=arguments[3],l=arguments[4],e=arguments[5],i=arguments[6],a=arguments[7],n=arguments[8]}var c=y(this,e,i),x=[];if(x.push(" <g_vml_:group",' coordsize="',10*w,",",10*w,'"',' coordorigin="0,0"',' style="width:',10,"px;height:",10,"px;position:absolute;"),1!=this.m_[0][0]||this.m_[0][1]||1!=this.m_[1][1]||this.m_[1][0]){var m=[];m.push("M11=",this.m_[0][0],",","M12=",this.m_[1][0],",","M21=",this.m_[0][1],",","M22=",this.m_[1][1],",","Dx=",_(c.x/w),",","Dy=",_(c.y/w),"");var p=y(this,e+a,i),u=y(this,e,i+n);e=y(this,e+a,i+n),c.x=T.max(c.x,p.x,u.x,e.x),c.y=T.max(c.y,p.y,u.y,e.y),x.push("padding:0 ",_(c.x/w),"px ",_(c.y/w),"px 0;filter:progid:DXImageTransform.Microsoft.Matrix(",m.join(""),", sizingmethod='clip');")}else x.push("top:",_(c.y/w),"px;left:",_(c.x/w),"px;");x.push(' ">','<g_vml_:image src="',t.src,'"',' style="width:',w*a,"px;"," height:",w*n,'px"',' cropleft="',s/h,'"',' croptop="',o/d,'"',' cropright="',(h-s-r)/h,'"',' cropbottom="',(d-o-l)/d,'"'," />","</g_vml_:group>"),this.element_.insertAdjacentHTML("BeforeEnd",x.join(""))},X.stroke=function(t){var e=[];e.push("<g_vml_:shape",' filled="',!!t,'"',' style="position:absolute;width:',10,"px;height:",10,'px;"',' coordorigin="0,0"',' coordsize="',10*w,",",10*w,'"',' stroked="',!t,'"',' path="');for(var i={x:null,y:null},a={x:null,y:null},n=0;n<this.currentPath_.length;n++){var s=this.currentPath_[n];switch(s.type){case"moveTo":e.push(" m ",_(s.x),",",_(s.y));break;case"lineTo":e.push(" l ",_(s.x),",",_(s.y));break;case"close":e.push(" x "),s=null;break;case"bezierCurveTo":e.push(" c ",_(s.cp1x),",",_(s.cp1y),",",_(s.cp2x),",",_(s.cp2y),",",_(s.x),",",_(s.y));break;case"at":case"wa":e.push(" ",s.type," ",_(s.x-this.arcScaleX_*s.radius),",",_(s.y-this.arcScaleY_*s.radius)," ",_(s.x+this.arcScaleX_*s.radius),",",_(s.y+this.arcScaleY_*s.radius)," ",_(s.xStart),",",_(s.yStart)," ",_(s.xEnd),",",_(s.yEnd))}s&&((null==i.x||s.x<i.x)&&(i.x=s.x),(null==a.x||s.x>a.x)&&(a.x=s.x),(null==i.y||s.y<i.y)&&(i.y=s.y),(null==a.y||s.y>a.y)&&(a.y=s.y))}e.push(' ">'),t?g(this,e,i,a):u(this,e),e.push("</g_vml_:shape>"),this.element_.insertAdjacentHTML("beforeEnd",e.join(""))},X.fill=function(){this.stroke(!0)},X.closePath=function(){this.currentPath_.push({type:"close"})},X.save=function(){var t={};l(this,t),this.aStack_.push(t),this.mStack_.push(this.m_),this.m_=r(o(),this.m_)},X.restore=function(){this.aStack_.length&&(l(this.aStack_.pop(),this),this.m_=this.mStack_.pop())},X.translate=function(t,e){f(this,r([[1,0,0],[0,1,0],[t,e,1]],this.m_),!1)},X.rotate=function(t){var e=S(t);t=M(t),f(this,r([[e,t,0],[-t,e,0],[0,0,1]],this.m_),!1)},X.scale=function(t,e){this.arcScaleX_*=t,this.arcScaleY_*=e,f(this,r([[t,0,0],[0,e,0],[0,0,1]],this.m_),!0)},X.transform=function(t,e,i,a,n,s){f(this,r([[t,e,0],[i,a,0],[n,s,1]],this.m_),!0)},X.setTransform=function(t,e,i,a,n,s){f(this,[[t,e,0],[i,a,0],[n,s,1]],!0)},X.drawText_=function(t,e,a,n,s){var o=this.m_;n=0;var r,l=1e3,h=0,d=[];if(r=this.font,E[r])r=E[r];else{var c=document.createElement("div").style;try{c.font=r}catch(x){}r=E[r]={style:c.fontStyle||"normal",variant:c.fontVariant||"normal",weight:c.fontWeight||"normal",size:c.fontSize||10,family:c.fontFamily||"sans-serif"}}var c=r,m=this.element_;r={};for(var p in c)r[p]=c[p];switch(p=parseFloat(m.currentStyle.fontSize),m=parseFloat(c.size),r.size="number"==typeof c.size?c.size:-1!=c.size.indexOf("px")?m:-1!=c.size.indexOf("em")?p*m:-1!=c.size.indexOf("%")?p/100*m:-1!=c.size.indexOf("pt")?m/.75:p,r.size*=.981,p=r.style+" "+r.variant+" "+r.weight+" "+r.size+"px "+r.family,m=this.element_.currentStyle,c=this.textAlign.toLowerCase()){case"left":case"center":case"right":break;case"end":c="ltr"==m.direction?"right":"left";break;case"start":c="rtl"==m.direction?"right":"left";break;default:c="left"}switch(this.textBaseline){case"hanging":case"top":h=r.size/1.75;break;case"middle":break;default:case null:case"alphabetic":case"ideographic":case"bottom":h=-r.size/2.25}switch(c){case"right":n=1e3,l=.05;break;case"center":n=l=500}e=y(this,e+0,a+h),d.push('<g_vml_:line from="',-n,' 0" to="',l,' 0.05" ',' coordsize="100 100" coordorigin="0 0"',' filled="',!s,'" stroked="',!!s,'" style="position:absolute;width:1px;height:1px;">'),s?u(this,d):g(this,d,{x:-n,y:0},{x:l,y:r.size}),s=o[0][0].toFixed(3)+","+o[1][0].toFixed(3)+","+o[0][1].toFixed(3)+","+o[1][1].toFixed(3)+",0,0",e=_(e.x/w)+","+_(e.y/w),d.push('<g_vml_:skew on="t" matrix="',s,'" ',' offset="',e,'" origin="',n,' 0" />','<g_vml_:path textpathok="true" />','<g_vml_:textpath on="true" string="',i(t),'" style="v-text-align:',c,";font:",i(p),'" /></g_vml_:line>'),this.element_.insertAdjacentHTML("beforeEnd",d.join(""))},X.fillText=function(t,e,i,a){this.drawText_(t,e,i,a,!1)},X.strokeText=function(t,e,i,a){this.drawText_(t,e,i,a,!0)},X.measureText=function(t){this.textMeasureEl_||(this.element_.insertAdjacentHTML("beforeEnd",'<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>'),this.textMeasureEl_=this.element_.lastChild);var e=this.element_.ownerDocument;return this.textMeasureEl_.innerHTML="",this.textMeasureEl_.style.font=this.font,this.textMeasureEl_.appendChild(e.createTextNode(t)),{width:this.textMeasureEl_.offsetWidth}},X.clip=function(){},X.arcTo=function(){},X.createPattern=function(t,e){return new b(t,e)},v.prototype.addColorStop=function(t,e){e=x(e),this.colors_.push({offset:t,color:e.color,alpha:e.alpha})},X=P.prototype=Error(),X.INDEX_SIZE_ERR=1,X.DOMSTRING_SIZE_ERR=2,X.HIERARCHY_REQUEST_ERR=3,X.WRONG_DOCUMENT_ERR=4,X.INVALID_CHARACTER_ERR=5,X.NO_DATA_ALLOWED_ERR=6,X.NO_MODIFICATION_ALLOWED_ERR=7,X.NOT_FOUND_ERR=8,X.NOT_SUPPORTED_ERR=9,X.INUSE_ATTRIBUTE_ERR=10,X.INVALID_STATE_ERR=11,X.SYNTAX_ERR=12,X.INVALID_MODIFICATION_ERR=13,X.NAMESPACE_ERR=14,X.INVALID_ACCESS_ERR=15,X.VALIDATION_ERR=16,X.TYPE_MISMATCH_ERR=17,G_vmlCanvasManager=F,CanvasRenderingContext2D=m,CanvasGradient=v,CanvasPattern=b,DOMException=P}();
},{}],24:[function(require,module,exports){
(function (global){
(function(t,e,s,a){jQuery=global.jQuery=require("jquery"),function(t){var e={set:{colors:1,values:1,backgroundColor:1,scaleColors:1,normalizeFunction:1,focus:1},get:{selectedRegions:1,selectedMarkers:1,mapObject:1,regionName:1}};t.fn.vectorMap=function(t){var s,a,s=this.children(".jvectormap-container").data("mapObject");if("addMap"===t)i.WorldMap.maps[arguments[1]]=arguments[2];else{if(("set"===t||"get"===t)&&e[t][arguments[1]])return a=arguments[1].charAt(0).toUpperCase()+arguments[1].substr(1),s[t+a].apply(s,Array.prototype.slice.call(arguments,2));t=t||{},t.container=this,s=new i.WorldMap(t)}return this}}(jQuery),function(t){function e(e){var s=e||window.event,a=[].slice.call(arguments,1),i=0,n=0,r=0;return e=t.event.fix(s),e.type="mousewheel",s.wheelDelta&&(i=s.wheelDelta/120),s.detail&&(i=-s.detail/3),r=i,void 0!==s.axis&&s.axis===s.HORIZONTAL_AXIS&&(r=0,n=-1*i),void 0!==s.wheelDeltaY&&(r=s.wheelDeltaY/120),void 0!==s.wheelDeltaX&&(n=-1*s.wheelDeltaX/120),a.unshift(e,i,n,r),(t.event.dispatch||t.event.handle).apply(this,a)}var s=["DOMMouseScroll","mousewheel"];if(t.event.fixHooks)for(var a=s.length;a;)t.event.fixHooks[s[--a]]=t.event.mouseHooks;t.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var t=s.length;t;)this.addEventListener(s[--t],e,!1);else this.onmousewheel=e},teardown:function(){if(this.removeEventListener)for(var t=s.length;t;)this.removeEventListener(s[--t],e,!1);else this.onmousewheel=null}},t.fn.extend({mousewheel:function(t){return t?this.bind("mousewheel",t):this.trigger("mousewheel")},unmousewheel:function(t){return this.unbind("mousewheel",t)}})}(jQuery);var i={inherits:function(t,e){function s(){}s.prototype=e.prototype,t.prototype=new s,t.prototype.constructor=t,t.parentClass=e},mixin:function(t,e){var s;for(s in e.prototype)e.prototype.hasOwnProperty(s)&&(t.prototype[s]=e.prototype[s])},min:function(t){var e,s=Number.MAX_VALUE;if(t instanceof Array)for(e=0;e<t.length;e++)t[e]<s&&(s=t[e]);else for(e in t)t[e]<s&&(s=t[e]);return s},max:function(t){var e,s=Number.MIN_VALUE;if(t instanceof Array)for(e=0;e<t.length;e++)t[e]>s&&(s=t[e]);else for(e in t)t[e]>s&&(s=t[e]);return s},keys:function(t){var e,s=[];for(e in t)s.push(e);return s},values:function(t){var e,s,a=[];for(s=0;s<arguments.length;s++){t=arguments[s];for(e in t)a.push(t[e])}return a}};i.$=jQuery,i.AbstractElement=function(t,e){this.node=this.createElement(t),this.name=t,this.properties={},e&&this.set(e)},i.AbstractElement.prototype.set=function(t,e){var s;if("object"==typeof t)for(s in t)this.properties[s]=t[s],this.applyAttr(s,t[s]);else this.properties[t]=e,this.applyAttr(t,e)},i.AbstractElement.prototype.get=function(t){return this.properties[t]},i.AbstractElement.prototype.applyAttr=function(t,e){this.node.setAttribute(t,e)},i.AbstractElement.prototype.remove=function(){i.$(this.node).remove()},i.AbstractCanvasElement=function(t,e,s){this.container=t,this.setSize(e,s),this.rootElement=new i[this.classPrefix+"GroupElement"],this.node.appendChild(this.rootElement.node),this.container.appendChild(this.node)},i.AbstractCanvasElement.prototype.add=function(t,e){e=e||this.rootElement,e.add(t),t.canvas=this},i.AbstractCanvasElement.prototype.addPath=function(t,e,s){var a=new i[this.classPrefix+"PathElement"](t,e);return this.add(a,s),a},i.AbstractCanvasElement.prototype.addCircle=function(t,e,s){var a=new i[this.classPrefix+"CircleElement"](t,e);return this.add(a,s),a},i.AbstractCanvasElement.prototype.addGroup=function(t){var e=new i[this.classPrefix+"GroupElement"];return t?t.node.appendChild(e.node):this.node.appendChild(e.node),e.canvas=this,e},i.AbstractShapeElement=function(t,e,s){this.style=s||{},this.style.current={},this.isHovered=!1,this.isSelected=!1,this.updateStyle()},i.AbstractShapeElement.prototype.setHovered=function(t){this.isHovered!==t&&(this.isHovered=t,this.updateStyle())},i.AbstractShapeElement.prototype.setSelected=function(t){this.isSelected!==t&&(this.isSelected=t,this.updateStyle(),i.$(this.node).trigger("selected",[t]))},i.AbstractShapeElement.prototype.setStyle=function(t,e){var s={};"object"==typeof t?s=t:s[t]=e,i.$.extend(this.style.current,s),this.updateStyle()},i.AbstractShapeElement.prototype.updateStyle=function(){var t={};i.AbstractShapeElement.mergeStyles(t,this.style.initial),i.AbstractShapeElement.mergeStyles(t,this.style.current),this.isHovered&&i.AbstractShapeElement.mergeStyles(t,this.style.hover),this.isSelected&&(i.AbstractShapeElement.mergeStyles(t,this.style.selected),this.isHovered&&i.AbstractShapeElement.mergeStyles(t,this.style.selectedHover)),this.set(t)},i.AbstractShapeElement.mergeStyles=function(t,e){var s;e=e||{};for(s in e)null===e[s]?delete t[s]:t[s]=e[s]},i.SVGElement=function(){i.SVGElement.parentClass.apply(this,arguments)},i.inherits(i.SVGElement,i.AbstractElement),i.SVGElement.svgns="http://www.w3.org/2000/svg",i.SVGElement.prototype.createElement=function(t){return document.createElementNS(i.SVGElement.svgns,t)},i.SVGElement.prototype.addClass=function(t){this.node.setAttribute("class",t)},i.SVGElement.prototype.getElementCtr=function(t){return i["SVG"+t]},i.SVGElement.prototype.getBBox=function(){return this.node.getBBox()},i.SVGGroupElement=function(){i.SVGGroupElement.parentClass.call(this,"g")},i.inherits(i.SVGGroupElement,i.SVGElement),i.SVGGroupElement.prototype.add=function(t){this.node.appendChild(t.node)},i.SVGCanvasElement=function(){this.classPrefix="SVG",i.SVGCanvasElement.parentClass.call(this,"svg"),i.AbstractCanvasElement.apply(this,arguments)},i.inherits(i.SVGCanvasElement,i.SVGElement),i.mixin(i.SVGCanvasElement,i.AbstractCanvasElement),i.SVGCanvasElement.prototype.setSize=function(t,e){this.width=t,this.height=e,this.node.setAttribute("width",t),this.node.setAttribute("height",e)},i.SVGCanvasElement.prototype.applyTransformParams=function(t,e,s){this.scale=t,this.transX=e,this.transY=s,this.rootElement.node.setAttribute("transform","scale("+t+") translate("+e+", "+s+")")},i.SVGShapeElement=function(t,e){i.SVGShapeElement.parentClass.call(this,t,e),i.AbstractShapeElement.apply(this,arguments)},i.inherits(i.SVGShapeElement,i.SVGElement),i.mixin(i.SVGShapeElement,i.AbstractShapeElement),i.SVGPathElement=function(t,e){i.SVGPathElement.parentClass.call(this,"path",t,e),this.node.setAttribute("fill-rule","evenodd")},i.inherits(i.SVGPathElement,i.SVGShapeElement),i.SVGCircleElement=function(t,e){i.SVGCircleElement.parentClass.call(this,"circle",t,e)},i.inherits(i.SVGCircleElement,i.SVGShapeElement),i.VMLElement=function(){i.VMLElement.VMLInitialized||i.VMLElement.initializeVML(),i.VMLElement.parentClass.apply(this,arguments)},i.inherits(i.VMLElement,i.AbstractElement),i.VMLElement.VMLInitialized=!1,i.VMLElement.initializeVML=function(){try{document.namespaces.rvml||document.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),i.VMLElement.prototype.createElement=function(t){return document.createElement("<rvml:"+t+' class="rvml">')}}catch(t){i.VMLElement.prototype.createElement=function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}document.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)"),i.VMLElement.VMLInitialized=!0},i.VMLElement.prototype.getElementCtr=function(t){return i["VML"+t]},i.VMLElement.prototype.addClass=function(t){i.$(this.node).addClass(t)},i.VMLElement.prototype.applyAttr=function(t,e){this.node[t]=e},i.VMLElement.prototype.getBBox=function(){var t=i.$(this.node);return{x:t.position().left/this.canvas.scale,y:t.position().top/this.canvas.scale,width:t.width()/this.canvas.scale,height:t.height()/this.canvas.scale}},i.VMLGroupElement=function(){i.VMLGroupElement.parentClass.call(this,"group"),this.node.style.left="0px",this.node.style.top="0px",this.node.coordorigin="0 0"},i.inherits(i.VMLGroupElement,i.VMLElement),i.VMLGroupElement.prototype.add=function(t){this.node.appendChild(t.node)},i.VMLCanvasElement=function(){this.classPrefix="VML",i.VMLCanvasElement.parentClass.call(this,"group"),i.AbstractCanvasElement.apply(this,arguments),this.node.style.position="absolute"},i.inherits(i.VMLCanvasElement,i.VMLElement),i.mixin(i.VMLCanvasElement,i.AbstractCanvasElement),i.VMLCanvasElement.prototype.setSize=function(t,e){var s,a,i,n;if(this.width=t,this.height=e,this.node.style.width=t+"px",this.node.style.height=e+"px",this.node.coordsize=t+" "+e,this.node.coordorigin="0 0",this.rootElement){for(s=this.rootElement.node.getElementsByTagName("shape"),i=0,n=s.length;n>i;i++)s[i].coordsize=t+" "+e,s[i].style.width=t+"px",s[i].style.height=e+"px";for(a=this.node.getElementsByTagName("group"),i=0,n=a.length;n>i;i++)a[i].coordsize=t+" "+e,a[i].style.width=t+"px",a[i].style.height=e+"px"}},i.VMLCanvasElement.prototype.applyTransformParams=function(t,e,s){this.scale=t,this.transX=e,this.transY=s,this.rootElement.node.coordorigin=this.width-e-this.width/100+","+(this.height-s-this.height/100),this.rootElement.node.coordsize=this.width/t+","+this.height/t},i.VMLShapeElement=function(t,e){i.VMLShapeElement.parentClass.call(this,t,e),this.fillElement=new i.VMLElement("fill"),this.strokeElement=new i.VMLElement("stroke"),this.node.appendChild(this.fillElement.node),this.node.appendChild(this.strokeElement.node),this.node.stroked=!1,i.AbstractShapeElement.apply(this,arguments)},i.inherits(i.VMLShapeElement,i.VMLElement),i.mixin(i.VMLShapeElement,i.AbstractShapeElement),i.VMLShapeElement.prototype.applyAttr=function(t,e){switch(t){case"fill":this.node.fillcolor=e;break;case"fill-opacity":this.fillElement.node.opacity=Math.round(100*e)+"%";break;case"stroke":this.node.stroked="none"===e?!1:!0,this.node.strokecolor=e;break;case"stroke-opacity":this.strokeElement.node.opacity=Math.round(100*e)+"%";break;case"stroke-width":this.node.stroked=0===parseInt(e,10)?!1:!0,this.node.strokeweight=e;break;case"d":this.node.path=i.VMLPathElement.pathSvgToVml(e);break;default:i.VMLShapeElement.parentClass.prototype.applyAttr.apply(this,arguments)}},i.VMLPathElement=function(t,e){var s=new i.VMLElement("skew");i.VMLPathElement.parentClass.call(this,"shape",t,e),this.node.coordorigin="0 0",s.node.on=!0,s.node.matrix="0.01,0,0,0.01,0,0",s.node.offset="0,0",this.node.appendChild(s.node)},i.inherits(i.VMLPathElement,i.VMLShapeElement),i.VMLPathElement.prototype.applyAttr=function(t,e){"d"===t?this.node.path=i.VMLPathElement.pathSvgToVml(e):i.VMLShapeElement.prototype.applyAttr.call(this,t,e)},i.VMLPathElement.pathSvgToVml=function(t){var e,s,a=0,i=0;return t=t.replace(/(-?\d+)e(-?\d+)/g,"0"),t.replace(/([MmLlHhVvCcSs])\s*((?:-?\d*(?:\.\d+)?\s*,?\s*)+)/g,function(t,n,r){r=r.replace(/(\d)-/g,"$1,-").replace(/^\s+/g,"").replace(/\s+$/g,"").replace(/\s+/g,",").split(","),r[0]||r.shift();for(var h=0,o=r.length;o>h;h++)r[h]=Math.round(100*r[h]);switch(n){case"m":return a+=r[0],i+=r[1],"t"+r.join(",");case"M":return a=r[0],i=r[1],"m"+r.join(",");case"l":return a+=r[0],i+=r[1],"r"+r.join(",");case"L":return a=r[0],i=r[1],"l"+r.join(",");case"h":return a+=r[0],"r"+r[0]+",0";case"H":return a=r[0],"l"+a+","+i;case"v":return i+=r[0],"r0,"+r[0];case"V":return i=r[0],"l"+a+","+i;case"c":return e=a+r[r.length-4],s=i+r[r.length-3],a+=r[r.length-2],i+=r[r.length-1],"v"+r.join(",");case"C":return e=r[r.length-4],s=r[r.length-3],a=r[r.length-2],i=r[r.length-1],"c"+r.join(",");case"s":return r.unshift(i-s),r.unshift(a-e),e=a+r[r.length-4],s=i+r[r.length-3],a+=r[r.length-2],i+=r[r.length-1],"v"+r.join(",");case"S":return r.unshift(i+i-s),r.unshift(a+a-e),e=r[r.length-4],s=r[r.length-3],a=r[r.length-2],i=r[r.length-1],"c"+r.join(",")}return""}).replace(/z/g,"e")},i.VMLCircleElement=function(t,e){i.VMLCircleElement.parentClass.call(this,"oval",t,e)},i.inherits(i.VMLCircleElement,i.VMLShapeElement),i.VMLCircleElement.prototype.applyAttr=function(t,e){switch(t){case"r":this.node.style.width=2*e+"px",this.node.style.height=2*e+"px",this.applyAttr("cx",this.get("cx")||0),this.applyAttr("cy",this.get("cy")||0);break;case"cx":if(!e)return;this.node.style.left=e-(this.get("r")||0)+"px";break;case"cy":if(!e)return;this.node.style.top=e-(this.get("r")||0)+"px";break;default:i.VMLCircleElement.parentClass.prototype.applyAttr.call(this,t,e)}},i.VectorCanvas=function(t,e,s){return this.mode=window.SVGAngle?"svg":"vml",this.impl="svg"==this.mode?new i.SVGCanvasElement(t,e,s):new i.VMLCanvasElement(t,e,s),this.impl},i.SimpleScale=function(t){this.scale=t},i.SimpleScale.prototype.getValue=function(t){return t},i.OrdinalScale=function(t){this.scale=t},i.OrdinalScale.prototype.getValue=function(t){return this.scale[t]},i.NumericScale=function(t,e,s,a){this.scale=[],e=e||"linear",t&&this.setScale(t),e&&this.setNormalizeFunction(e),s&&this.setMin(s),a&&this.setMax(a)},i.NumericScale.prototype={setMin:function(t){this.clearMinValue=t,this.minValue="function"==typeof this.normalize?this.normalize(t):t},setMax:function(t){this.clearMaxValue=t,this.maxValue="function"==typeof this.normalize?this.normalize(t):t},setScale:function(t){var e;for(e=0;e<t.length;e++)this.scale[e]=[t[e]]},setNormalizeFunction:function(t){"polynomial"===t?this.normalize=function(t){return Math.pow(t,.2)}:"linear"===t?delete this.normalize:this.normalize=t,this.setMin(this.clearMinValue),this.setMax(this.clearMaxValue)},getValue:function(t){var e,s,a=[],i=0,n=0;for("function"==typeof this.normalize&&(t=this.normalize(t)),n=0;n<this.scale.length-1;n++)e=this.vectorLength(this.vectorSubtract(this.scale[n+1],this.scale[n])),a.push(e),i+=e;for(s=(this.maxValue-this.minValue)/i,n=0;n<a.length;n++)a[n]*=s;for(n=0,t-=this.minValue;t-a[n]>=0;)t-=a[n],n++;return t=this.vectorToNum(n==this.scale.length-1?this.scale[n]:this.vectorAdd(this.scale[n],this.vectorMult(this.vectorSubtract(this.scale[n+1],this.scale[n]),t/a[n])))},vectorToNum:function(t){var e,s=0;for(e=0;e<t.length;e++)s+=Math.round(t[e])*Math.pow(256,t.length-e-1);return s},vectorSubtract:function(t,e){var s,a=[];for(s=0;s<t.length;s++)a[s]=t[s]-e[s];return a},vectorAdd:function(t,e){var s,a=[];for(s=0;s<t.length;s++)a[s]=t[s]+e[s];return a},vectorMult:function(t,e){var s,a=[];for(s=0;s<t.length;s++)a[s]=t[s]*e;return a},vectorLength:function(t){var e,s=0;for(e=0;e<t.length;e++)s+=t[e]*t[e];return Math.sqrt(s)}},i.ColorScale=function(){i.ColorScale.parentClass.apply(this,arguments)},i.inherits(i.ColorScale,i.NumericScale),i.ColorScale.prototype.setScale=function(t){var e;for(e=0;e<t.length;e++)this.scale[e]=i.ColorScale.rgbToArray(t[e])},i.ColorScale.prototype.getValue=function(t){return i.ColorScale.numToRgb(i.ColorScale.parentClass.prototype.getValue.call(this,t))},i.ColorScale.arrayToRgb=function(t){var e,s,a="#";for(s=0;s<t.length;s++)e=t[s].toString(16),a+=1==e.length?"0"+e:e;return a},i.ColorScale.numToRgb=function(t){for(t=t.toString(16);t.length<6;)t="0"+t;return"#"+t},i.ColorScale.rgbToArray=function(t){return t=t.substr(1),[parseInt(t.substr(0,2),16),parseInt(t.substr(2,2),16),parseInt(t.substr(4,2),16)]},i.DataSeries=function(t,e){var s;t=t||{},t.attribute=t.attribute||"fill",this.elements=e,this.params=t,t.attributes&&this.setAttributes(t.attributes),i.$.isArray(t.scale)?(s="fill"===t.attribute||"stroke"===t.attribute?i.ColorScale:i.NumericScale,this.scale=new s(t.scale,t.normalizeFunction,t.min,t.max)):this.scale=t.scale?new i.OrdinalScale(t.scale):new i.SimpleScale(t.scale),this.values=t.values||{},this.setValues(this.values)},i.DataSeries.prototype={setAttributes:function(t,e){var s,a=t;if("string"==typeof t)this.elements[t]&&this.elements[t].setStyle(this.params.attribute,e);else for(s in a)this.elements[s]&&this.elements[s].element.setStyle(this.params.attribute,a[s])},setValues:function(t){var e,s,a=Number.MIN_VALUE,n=Number.MAX_VALUE,r={};if(this.scale instanceof i.OrdinalScale||this.scale instanceof i.SimpleScale)for(s in t)r[s]=t[s]?this.scale.getValue(t[s]):this.elements[s].element.style.initial[this.params.attribute];else{if(!this.params.min||!this.params.max){for(s in t)e=parseFloat(t[s]),e>a&&(a=t[s]),n>e&&(n=e);this.params.min||this.scale.setMin(n),this.params.max||this.scale.setMax(a),this.params.min=n,this.params.max=a}for(s in t)e=parseFloat(t[s]),r[s]=isNaN(e)?this.elements[s].element.style.initial[this.params.attribute]:this.scale.getValue(e)}this.setAttributes(r),i.$.extend(this.values,t)},clear:function(){var t,e={};for(t in this.values)this.elements[t]&&(e[t]=this.elements[t].element.style.initial[this.params.attribute]);this.setAttributes(e),this.values={}},setScale:function(t){this.scale.setScale(t),this.values&&this.setValues(this.values)},setNormalizeFunction:function(t){this.scale.setNormalizeFunction(t),this.values&&this.setValues(this.values)}},i.Proj={degRad:180/Math.PI,radDeg:Math.PI/180,radius:6381372,sgn:function(t){return t>0?1:0>t?-1:t},mill:function(t,e,s){return{x:this.radius*(e-s)*this.radDeg,y:-this.radius*Math.log(Math.tan((45+.4*t)*this.radDeg))/.8}},mill_inv:function(t,e,s){return{lat:(2.5*Math.atan(Math.exp(.8*e/this.radius))-5*Math.PI/8)*this.degRad,lng:(s*this.radDeg+t/this.radius)*this.degRad}},merc:function(t,e,s){return{x:this.radius*(e-s)*this.radDeg,y:-this.radius*Math.log(Math.tan(Math.PI/4+t*Math.PI/360))}},merc_inv:function(t,e,s){return{lat:(2*Math.atan(Math.exp(e/this.radius))-Math.PI/2)*this.degRad,lng:(s*this.radDeg+t/this.radius)*this.degRad}},aea:function(t,e,s){var a=0,i=s*this.radDeg,n=29.5*this.radDeg,r=45.5*this.radDeg,h=t*this.radDeg,o=e*this.radDeg,l=(Math.sin(n)+Math.sin(r))/2,c=Math.cos(n)*Math.cos(n)+2*l*Math.sin(n),p=l*(o-i),m=Math.sqrt(c-2*l*Math.sin(h))/l,u=Math.sqrt(c-2*l*Math.sin(a))/l;return{x:m*Math.sin(p)*this.radius,y:-(u-m*Math.cos(p))*this.radius}},aea_inv:function(t,e,s){var a=t/this.radius,i=e/this.radius,n=0,r=s*this.radDeg,h=29.5*this.radDeg,o=45.5*this.radDeg,l=(Math.sin(h)+Math.sin(o))/2,c=Math.cos(h)*Math.cos(h)+2*l*Math.sin(h),p=Math.sqrt(c-2*l*Math.sin(n))/l,m=Math.sqrt(a*a+(p-i)*(p-i)),u=Math.atan(a/(p-i));return{lat:Math.asin((c-m*m*l*l)/(2*l))*this.degRad,lng:(r+u/l)*this.degRad}},lcc:function(t,e,s){var a=0,i=s*this.radDeg,n=e*this.radDeg,r=33*this.radDeg,h=45*this.radDeg,o=t*this.radDeg,l=Math.log(Math.cos(r)*(1/Math.cos(h)))/Math.log(Math.tan(Math.PI/4+h/2)*(1/Math.tan(Math.PI/4+r/2))),c=Math.cos(r)*Math.pow(Math.tan(Math.PI/4+r/2),l)/l,p=c*Math.pow(1/Math.tan(Math.PI/4+o/2),l),m=c*Math.pow(1/Math.tan(Math.PI/4+a/2),l);return{x:p*Math.sin(l*(n-i))*this.radius,y:-(m-p*Math.cos(l*(n-i)))*this.radius}},lcc_inv:function(t,e,s){var a=t/this.radius,i=e/this.radius,n=0,r=s*this.radDeg,h=33*this.radDeg,o=45*this.radDeg,l=Math.log(Math.cos(h)*(1/Math.cos(o)))/Math.log(Math.tan(Math.PI/4+o/2)*(1/Math.tan(Math.PI/4+h/2))),c=Math.cos(h)*Math.pow(Math.tan(Math.PI/4+h/2),l)/l,p=c*Math.pow(1/Math.tan(Math.PI/4+n/2),l),m=this.sgn(l)*Math.sqrt(a*a+(p-i)*(p-i)),u=Math.atan(a/(p-i));return{lat:(2*Math.atan(Math.pow(c/m,1/l))-Math.PI/2)*this.degRad,lng:(r+u/l)*this.degRad}}},i.WorldMap=function(t){var e,s=this;if(this.params=i.$.extend(!0,{},i.WorldMap.defaultParams,t),!i.WorldMap.maps[this.params.map])throw new Error("Attempt to use map which was not loaded: "+this.params.map);this.mapData=i.WorldMap.maps[this.params.map],this.markers={},this.regions={},this.regionsColors={},this.regionsData={},this.container=i.$("<div>").css({width:"100%",height:"100%"}).addClass("jvectormap-container"),this.params.container.append(this.container),this.container.data("mapObject",this),this.container.css({position:"relative",overflow:"hidden"}),this.defaultWidth=this.mapData.width,this.defaultHeight=this.mapData.height,this.setBackgroundColor(this.params.backgroundColor),this.onResize=function(){s.setSize()},i.$(window).resize(this.onResize);for(e in i.WorldMap.apiEvents)this.params[e]&&this.container.bind(i.WorldMap.apiEvents[e]+".jvectormap",this.params[e]);this.canvas=new i.VectorCanvas(this.container[0],this.width,this.height),"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch?this.params.bindTouchEvents&&this.bindContainerTouchEvents():this.bindContainerEvents(),this.bindElementEvents(),this.createLabel(),this.params.zoomButtons&&this.bindZoomButtons(),this.createRegions(),this.createMarkers(this.params.markers||{}),this.setSize(),this.params.focusOn&&("object"==typeof this.params.focusOn?this.setFocus.call(this,this.params.focusOn.scale,this.params.focusOn.x,this.params.focusOn.y):this.setFocus.call(this,this.params.focusOn)),this.params.selectedRegions&&this.setSelectedRegions(this.params.selectedRegions),this.params.selectedMarkers&&this.setSelectedMarkers(this.params.selectedMarkers),this.params.series&&this.createSeries()},i.WorldMap.prototype={transX:0,transY:0,scale:1,baseTransX:0,baseTransY:0,baseScale:1,width:0,height:0,setBackgroundColor:function(t){this.container.css("background-color",t)},resize:function(){var t=this.baseScale;this.width/this.height>this.defaultWidth/this.defaultHeight?(this.baseScale=this.height/this.defaultHeight,this.baseTransX=Math.abs(this.width-this.defaultWidth*this.baseScale)/(2*this.baseScale)):(this.baseScale=this.width/this.defaultWidth,this.baseTransY=Math.abs(this.height-this.defaultHeight*this.baseScale)/(2*this.baseScale)),this.scale*=this.baseScale/t,this.transX*=this.baseScale/t,this.transY*=this.baseScale/t},setSize:function(){this.width=this.container.width(),this.height=this.container.height(),this.resize(),this.canvas.setSize(this.width,this.height),this.applyTransform()},reset:function(){var t,e;for(t in this.series)for(e=0;e<this.series[t].length;e++)this.series[t][e].clear();this.scale=this.baseScale,this.transX=this.baseTransX,this.transY=this.baseTransY,this.applyTransform()},applyTransform:function(){var t,e,s,a;this.defaultWidth*this.scale<=this.width?(t=(this.width-this.defaultWidth*this.scale)/(2*this.scale),s=(this.width-this.defaultWidth*this.scale)/(2*this.scale)):(t=0,s=(this.width-this.defaultWidth*this.scale)/this.scale),this.defaultHeight*this.scale<=this.height?(e=(this.height-this.defaultHeight*this.scale)/(2*this.scale),a=(this.height-this.defaultHeight*this.scale)/(2*this.scale)):(e=0,a=(this.height-this.defaultHeight*this.scale)/this.scale),this.transY>e?this.transY=e:this.transY<a&&(this.transY=a),this.transX>t?this.transX=t:this.transX<s&&(this.transX=s),this.canvas.applyTransformParams(this.scale,this.transX,this.transY),this.markers&&this.repositionMarkers(),this.container.trigger("viewportChange",[this.scale/this.baseScale,this.transX,this.transY])},bindContainerEvents:function(){var t,e,s=!1,a=this;this.container.mousemove(function(i){return s&&(a.transX-=(t-i.pageX)/a.scale,a.transY-=(e-i.pageY)/a.scale,a.applyTransform(),t=i.pageX,e=i.pageY),!1}).mousedown(function(a){return s=!0,t=a.pageX,e=a.pageY,!1}),i.$("body").mouseup(function(){s=!1}),this.params.zoomOnScroll&&this.container.mousewheel(function(t,e,s,n){var r=i.$(a.container).offset(),h=t.pageX-r.left,o=t.pageY-r.top,l=Math.pow(1.3,n);a.label.hide(),a.setScale(a.scale*l,h,o),t.preventDefault()})},bindContainerTouchEvents:function(){var t,e,s,a,n,r,h,o=this,l=function(l){var c,p,m,u,d=l.originalEvent.touches;"touchstart"==l.type&&(h=0),1==d.length?(1==h&&(m=o.transX,u=o.transY,o.transX-=(s-d[0].pageX)/o.scale,o.transY-=(a-d[0].pageY)/o.scale,o.applyTransform(),o.label.hide(),(m!=o.transX||u!=o.transY)&&l.preventDefault()),s=d[0].pageX,a=d[0].pageY):2==d.length&&(2==h?(p=Math.sqrt(Math.pow(d[0].pageX-d[1].pageX,2)+Math.pow(d[0].pageY-d[1].pageY,2))/e,o.setScale(t*p,n,r),o.label.hide(),l.preventDefault()):(c=i.$(o.container).offset(),n=d[0].pageX>d[1].pageX?d[1].pageX+(d[0].pageX-d[1].pageX)/2:d[0].pageX+(d[1].pageX-d[0].pageX)/2,r=d[0].pageY>d[1].pageY?d[1].pageY+(d[0].pageY-d[1].pageY)/2:d[0].pageY+(d[1].pageY-d[0].pageY)/2,n-=c.left,r-=c.top,t=o.scale,e=Math.sqrt(Math.pow(d[0].pageX-d[1].pageX,2)+Math.pow(d[0].pageY-d[1].pageY,2)))),h=d.length};i.$(this.container).bind("touchstart",l),i.$(this.container).bind("touchmove",l)},bindElementEvents:function(){var t,e=this;this.container.mousemove(function(){t=!0}),this.container.delegate("[class~='jvectormap-element']","mouseover mouseout",function(t){var s=i.$(this).attr("class").baseVal?i.$(this).attr("class").baseVal:i.$(this).attr("class"),a=-1===s.indexOf("jvectormap-region")?"marker":"region",n=i.$(this).attr("region"==a?"data-code":"data-index"),r="region"==a?e.regions[n].element:e.markers[n].element,h="region"==a?e.mapData.paths[n].name:e.markers[n].config.name||"",o=i.$.Event(a+"LabelShow.jvectormap"),l=i.$.Event(a+"Over.jvectormap");"mouseover"==t.type?(e.container.trigger(l,[n]),l.isDefaultPrevented()||r.setHovered(!0),e.label.text(h),e.container.trigger(o,[e.label,n]),o.isDefaultPrevented()||(e.label.show(),e.labelWidth=e.label.width(),e.labelHeight=e.label.height())):(r.setHovered(!1),e.label.hide(),e.container.trigger(a+"Out.jvectormap",[n]))}),this.container.delegate("[class~='jvectormap-element']","mousedown",function(){t=!1}),this.container.delegate("[class~='jvectormap-element']","mouseup",function(){var s=i.$(this).attr("class").baseVal?i.$(this).attr("class").baseVal:i.$(this).attr("class"),a=-1===s.indexOf("jvectormap-region")?"marker":"region",n=i.$(this).attr("region"==a?"data-code":"data-index"),r=i.$.Event(a+"Click.jvectormap"),h="region"==a?e.regions[n].element:e.markers[n].element;t||(e.container.trigger(r,[n]),("region"===a&&e.params.regionsSelectable||"marker"===a&&e.params.markersSelectable)&&(r.isDefaultPrevented()||(e.params[a+"sSelectableOne"]&&e.clearSelected(a+"s"),h.setSelected(!h.isSelected))))})},bindZoomButtons:function(){var t=this;i.$("<div/>").addClass("jvectormap-zoomin").text("+").appendTo(this.container),i.$("<div/>").addClass("jvectormap-zoomout").html("&#x2212;").appendTo(this.container),this.container.find(".jvectormap-zoomin").click(function(){t.setScale(t.scale*t.params.zoomStep,t.width/2,t.height/2)}),this.container.find(".jvectormap-zoomout").click(function(){t.setScale(t.scale/t.params.zoomStep,t.width/2,t.height/2)})},createLabel:function(){var t=this;this.label=i.$("<div/>").addClass("jvectormap-label").appendTo(i.$("body")),this.container.mousemove(function(e){var s=e.pageX-15-t.labelWidth,a=e.pageY-15-t.labelHeight;5>s&&(s=e.pageX+15),5>a&&(a=e.pageY+15),t.label.is(":visible")&&t.label.css({left:s,top:a})})},setScale:function(t,e,s,a){var n,r=i.$.Event("zoom.jvectormap");t>this.params.zoomMax*this.baseScale?t=this.params.zoomMax*this.baseScale:t<this.params.zoomMin*this.baseScale&&(t=this.params.zoomMin*this.baseScale),"undefined"!=typeof e&&"undefined"!=typeof s&&(n=t/this.scale,a?(this.transX=e+this.defaultWidth*(this.width/(this.defaultWidth*t))/2,this.transY=s+this.defaultHeight*(this.height/(this.defaultHeight*t))/2):(this.transX-=(n-1)/t*e,this.transY-=(n-1)/t*s)),this.scale=t,this.applyTransform(),this.container.trigger(r,[t/this.baseScale])},setFocus:function(t,e,s){var a,n,r,h,o;if(i.$.isArray(t)||this.regions[t]){for(h=i.$.isArray(t)?t:[t],o=0;o<h.length;o++)this.regions[h[o]]&&(n=this.regions[h[o]].element.getBBox(),n&&("undefined"==typeof a?a=n:(r={x:Math.min(a.x,n.x),y:Math.min(a.y,n.y),width:Math.max(a.x+a.width,n.x+n.width)-Math.min(a.x,n.x),height:Math.max(a.y+a.height,n.y+n.height)-Math.min(a.y,n.y)},a=r)));this.setScale(Math.min(this.width/a.width,this.height/a.height),-(a.x+a.width/2),-(a.y+a.height/2),!0)}else t*=this.baseScale,this.setScale(t,-e*this.defaultWidth,-s*this.defaultHeight,!0)},getSelected:function(t){var e,s=[];for(e in this[t])this[t][e].element.isSelected&&s.push(e);return s},getSelectedRegions:function(){return this.getSelected("regions")},getSelectedMarkers:function(){return this.getSelected("markers")},setSelected:function(t,e){var s;if("object"!=typeof e&&(e=[e]),i.$.isArray(e))for(s=0;s<e.length;s++)this[t][e[s]].element.setSelected(!0);else for(s in e)this[t][s].element.setSelected(!!e[s])},setSelectedRegions:function(t){this.setSelected("regions",t)},setSelectedMarkers:function(t){this.setSelected("markers",t)},clearSelected:function(t){var e,s={},a=this.getSelected(t);for(e=0;e<a.length;e++)s[a[e]]=!1;this.setSelected(t,s)},clearSelectedRegions:function(){this.clearSelected("regions")},clearSelectedMarkers:function(){this.clearSelected("markers")},getMapObject:function(){return this},getRegionName:function(t){return this.mapData.paths[t].name},createRegions:function(){var t,e,s=this;for(t in this.mapData.paths)e=this.canvas.addPath({d:this.mapData.paths[t].path,"data-code":t},i.$.extend(!0,{},this.params.regionStyle)),i.$(e.node).bind("selected",function(t,e){s.container.trigger("regionSelected.jvectormap",[i.$(this).attr("data-code"),e,s.getSelectedRegions()])}),e.addClass("jvectormap-region jvectormap-element"),this.regions[t]={element:e,config:this.mapData.paths[t]}},createMarkers:function(t){var e,s,a,n,r,h=this;if(this.markersGroup=this.markersGroup||this.canvas.addGroup(),i.$.isArray(t))for(r=t.slice(),t={},e=0;e<r.length;e++)t[e]=r[e];for(e in t)n=t[e]instanceof Array?{latLng:t[e]}:t[e],a=this.getMarkerPosition(n),a!==!1&&(s=this.canvas.addCircle({"data-index":e,cx:a.x,cy:a.y},i.$.extend(!0,{},this.params.markerStyle,{initial:n.style||{}}),this.markersGroup),s.addClass("jvectormap-marker jvectormap-element"),i.$(s.node).bind("selected",function(t,e){h.container.trigger("markerSelected.jvectormap",[i.$(this).attr("data-index"),e,h.getSelectedMarkers()])}),this.markers[e]&&this.removeMarkers([e]),this.markers[e]={element:s,config:n})},repositionMarkers:function(){var t,e;for(t in this.markers)e=this.getMarkerPosition(this.markers[t].config),e!==!1&&this.markers[t].element.setStyle({cx:e.x,cy:e.y})},getMarkerPosition:function(t){return i.WorldMap.maps[this.params.map].projection?this.latLngToPoint.apply(this,t.latLng||[0,0]):{x:t.coords[0]*this.scale+this.transX*this.scale,y:t.coords[1]*this.scale+this.transY*this.scale}},addMarker:function(t,e,s){var a,i,n={},r=[],s=s||[];for(n[t]=e,i=0;i<s.length;i++)a={},a[t]=s[i],r.push(a);this.addMarkers(n,r)},addMarkers:function(t,e){var s;for(e=e||[],this.createMarkers(t),s=0;s<e.length;s++)this.series.markers[s].setValues(e[s]||{})},removeMarkers:function(t){var e;for(e=0;e<t.length;e++)this.markers[t[e]].element.remove(),delete this.markers[t[e]]},removeAllMarkers:function(){var t,e=[];for(t in this.markers)e.push(t);this.removeMarkers(e)},latLngToPoint:function(t,e){{var s,a,n,r=i.WorldMap.maps[this.params.map].projection,h=r.centralMeridian;this.width-2*this.baseTransX*this.baseScale,this.height-2*this.baseTransY*this.baseScale,this.scale/this.baseScale}return-180+h>e&&(e+=360),s=i.Proj[r.type](t,e,h),a=this.getInsetForPoint(s.x,s.y),a?(n=a.bbox,s.x=(s.x-n[0].x)/(n[1].x-n[0].x)*a.width*this.scale,s.y=(s.y-n[0].y)/(n[1].y-n[0].y)*a.height*this.scale,{x:s.x+this.transX*this.scale+a.left*this.scale,y:s.y+this.transY*this.scale+a.top*this.scale}):!1},pointToLatLng:function(t,e){var s,a,n,r,h,o=i.WorldMap.maps[this.params.map].projection,l=o.centralMeridian,c=i.WorldMap.maps[this.params.map].insets;for(s=0;s<c.length;s++)if(a=c[s],n=a.bbox,r=t-(this.transX*this.scale+a.left*this.scale),h=e-(this.transY*this.scale+a.top*this.scale),r=r/(a.width*this.scale)*(n[1].x-n[0].x)+n[0].x,h=h/(a.height*this.scale)*(n[1].y-n[0].y)+n[0].y,r>n[0].x&&r<n[1].x&&h>n[0].y&&h<n[1].y)return i.Proj[o.type+"_inv"](r,-h,l);return!1},getInsetForPoint:function(t,e){var s,a,n=i.WorldMap.maps[this.params.map].insets;for(s=0;s<n.length;s++)if(a=n[s].bbox,t>a[0].x&&t<a[1].x&&e>a[0].y&&e<a[1].y)return n[s]},createSeries:function(){var t,e;this.series={markers:[],regions:[]};for(e in this.params.series)for(t=0;t<this.params.series[e].length;t++)this.series[e][t]=new i.DataSeries(this.params.series[e][t],this[e])},remove:function(){this.label.remove(),this.container.remove(),i.$(window).unbind("resize",this.onResize)}},i.WorldMap.maps={},i.WorldMap.defaultParams={map:"world_mill_en",backgroundColor:"#505050",zoomButtons:!0,zoomOnScroll:!0,zoomMax:8,zoomMin:1,zoomStep:1.6,regionsSelectable:!1,markersSelectable:!1,bindTouchEvents:!0,regionStyle:{initial:{fill:"white","fill-opacity":1,stroke:"none","stroke-width":0,"stroke-opacity":1},hover:{"fill-opacity":.8},selected:{fill:"yellow"},selectedHover:{}},markerStyle:{initial:{fill:"grey",stroke:"#505050","fill-opacity":1,"stroke-width":1,"stroke-opacity":1,r:5},hover:{stroke:"black","stroke-width":2},selected:{fill:"blue"},selectedHover:{}}},i.WorldMap.apiEvents={onRegionLabelShow:"regionLabelShow",onRegionOver:"regionOver",onRegionOut:"regionOut",onRegionClick:"regionClick",onRegionSelected:"regionSelected",onMarkerLabelShow:"markerLabelShow",onMarkerOver:"markerOver",onMarkerOut:"markerOut",onMarkerClick:"markerClick",onMarkerSelected:"markerSelected",onViewportChange:"viewportChange"},a("undefined"!=typeof i?i:window.jvm)
}).call(global,void 0,void 0,void 0,function(t){module.exports=t});
}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"jquery":33}],25:[function(require,module,exports){
var $=require("jquery");module.exports=function(){$.fn.vectorMap("addMap","world_mill_en",{insets:[{width:900,top:0,height:440.7063107441331,bbox:[{y:-12671671.123330014,x:-20004297.151525836},{y:6930392.02513512,x:20026572.394749384}],left:0}],paths:{BD:{path:"M652.71,228.85l-0.04,1.38l-0.46,-0.21l-0.42,0.3l0.05,0.65l-0.17,-1.37l-0.48,-1.26l-1.08,-1.6l-0.23,-0.13l-2.31,-0.11l-0.31,0.36l0.21,0.98l-0.6,1.11l-0.8,-0.4l-0.37,0.09l-0.23,0.3l-0.54,-0.21l-0.78,-0.19l-0.38,-2.04l-0.83,-1.89l0.4,-1.5l-0.16,-0.35l-1.24,-0.57l0.36,-0.62l1.5,-0.95l0.02,-0.49l-1.62,-1.26l0.64,-1.31l1.7,1.0l0.12,0.04l0.96,0.11l0.19,1.62l0.25,0.26l2.38,0.37l2.32,-0.04l1.06,0.33l-0.92,1.79l-0.97,0.13l-0.23,0.16l-0.77,1.51l0.05,0.35l1.37,1.37l0.5,-0.14l0.35,-1.46l0.24,-0.0l1.24,3.92Z",name:"Bangladesh"},BE:{path:"M429.28,143.95l1.76,0.25l0.13,-0.01l2.16,-0.64l1.46,1.34l1.26,0.71l-0.23,1.8l-0.44,0.08l-0.24,0.25l-0.2,1.36l-1.8,-1.22l-0.23,-0.05l-1.14,0.23l-1.62,-1.43l-1.15,-1.31l-0.21,-0.1l-0.95,-0.04l-0.21,-0.68l1.66,-0.54Z",name:"Belgium"},BF:{path:"M413.48,260.21l-1.22,-0.46l-0.13,-0.02l-1.17,0.1l-0.15,0.06l-0.73,0.53l-0.87,-0.41l-0.39,-0.75l-0.13,-0.13l-0.98,-0.48l-0.14,-1.2l0.63,-0.99l0.05,-0.18l-0.05,-0.73l1.9,-2.01l0.08,-0.14l0.35,-1.65l0.49,-0.44l1.05,0.3l0.21,-0.02l1.05,-0.52l0.13,-0.13l0.3,-0.58l1.87,-1.1l0.11,-0.1l0.43,-0.72l2.23,-1.01l1.21,-0.32l0.51,0.4l0.19,0.06l1.25,-0.01l-0.14,0.89l0.01,0.13l0.34,1.16l0.06,0.11l1.35,1.59l0.07,1.13l0.24,0.28l2.64,0.53l-0.05,1.39l-0.42,0.59l-1.11,0.21l-0.22,0.17l-0.46,0.99l-0.69,0.23l-2.12,-0.05l-1.14,-0.2l-0.19,0.03l-0.72,0.36l-1.07,-0.17l-4.35,0.12l-0.29,0.29l-0.06,1.44l0.25,1.45Z",name:"Burkina Faso"},BG:{path:"M477.63,166.84l0.51,0.9l0.33,0.14l0.9,-0.21l1.91,0.47l3.68,0.16l0.17,-0.05l1.2,-0.75l2.78,-0.67l1.72,1.05l1.02,0.24l-0.97,0.97l-0.91,2.17l0.0,0.24l0.56,1.19l-1.58,-0.3l-0.16,0.01l-2.55,0.95l-0.2,0.28l-0.02,1.23l-1.92,0.24l-1.68,-0.99l-0.27,-0.02l-1.94,0.8l-1.52,-0.07l-0.15,-1.72l-0.12,-0.21l-0.99,-0.76l0.18,-0.18l0.02,-0.39l-0.17,-0.22l0.33,-0.75l0.91,-0.91l0.01,-0.42l-1.16,-1.25l-0.18,-0.89l0.24,-0.27Z",name:"Bulgaria"},BA:{path:"M468.39,164.66l0.16,0.04l0.43,-0.0l-0.43,0.93l0.06,0.34l1.08,1.06l-0.28,1.09l-0.5,0.13l-0.47,0.28l-0.86,0.74l-0.1,0.16l-0.28,1.29l-1.81,-0.94l-0.9,-1.22l-1.0,-0.73l-1.1,-1.1l-0.55,-0.96l-1.11,-1.3l0.3,-0.75l0.59,0.46l0.42,-0.04l0.46,-0.54l1.0,-0.06l2.11,0.5l1.72,-0.03l1.06,0.64Z",name:"Bosnia and Herzegovina"},BN:{path:"M707.34,273.57l0.76,-0.72l1.59,-1.03l-0.18,1.93l-0.9,-0.06l-0.28,0.14l-0.31,0.51l-0.68,-0.78Z",name:"Brunei"},BO:{path:"M263.83,340.79l-0.23,-0.12l-2.86,-0.11l-0.28,0.17l-0.77,1.67l-1.17,-1.51l-0.18,-0.11l-3.28,-0.64l-0.28,0.1l-2.02,2.3l-1.43,0.29l-0.91,-3.35l-1.31,-2.88l0.75,-2.41l-0.09,-0.32l-1.23,-1.03l-0.31,-1.76l-0.05,-0.12l-1.12,-1.6l1.49,-2.62l0.01,-0.28l-1.0,-2.0l0.48,-0.72l0.02,-0.29l-0.37,-0.78l0.87,-1.13l0.06,-0.18l0.05,-2.17l0.12,-1.71l0.5,-0.8l0.01,-0.3l-1.9,-3.58l1.3,0.15l1.34,-0.05l0.23,-0.12l0.51,-0.7l2.12,-0.99l1.31,-0.93l2.81,-0.37l-0.21,1.51l0.01,0.13l0.29,0.91l-0.19,1.64l0.11,0.27l2.72,2.27l0.15,0.07l2.71,0.41l0.92,0.88l0.12,0.07l1.64,0.49l1.0,0.71l0.18,0.06l1.5,-0.02l1.24,0.64l0.1,1.31l0.05,0.14l0.44,0.68l0.02,0.73l-0.44,0.03l-0.27,0.39l0.96,2.99l0.28,0.21l4.43,0.1l-0.28,1.12l0.0,0.15l0.27,1.02l0.15,0.19l1.27,0.67l0.52,1.42l-0.42,1.91l-0.66,1.1l-0.04,0.2l0.21,1.3l-0.19,0.13l-0.01,-0.27l-0.15,-0.24l-2.33,-1.33l-0.14,-0.04l-2.38,-0.03l-4.36,0.76l-0.21,0.16l-1.2,2.29l-0.03,0.13l-0.06,1.37l-0.79,2.53l-0.05,-0.08Z",name:"Bolivia"},JP:{path:"M781.17,166.78l1.8,0.67l0.28,-0.04l1.38,-1.01l0.43,2.67l-3.44,0.77l-0.18,0.12l-2.04,2.79l-3.71,-1.94l-0.42,0.15l-1.29,3.11l-2.32,0.04l-0.3,-2.63l1.12,-2.1l2.51,-0.16l0.28,-0.25l0.73,-4.22l0.58,-1.9l2.59,2.84l2.0,1.1ZM773.66,187.36l-0.92,2.24l-0.01,0.2l0.4,1.3l-1.18,1.81l-3.06,1.28l-4.35,0.17l-0.19,0.08l-3.4,3.06l-1.36,-0.87l-0.1,-1.95l-0.34,-0.28l-4.35,0.62l-2.99,1.33l-2.87,0.05l-0.28,0.2l0.09,0.33l2.37,1.93l-1.57,4.44l-1.35,0.97l-0.9,-0.79l0.57,-2.32l-0.15,-0.34l-1.5,-0.77l-0.81,-1.53l2.04,-0.75l0.14,-0.1l1.28,-1.72l2.47,-1.43l1.84,-1.92l4.83,-0.82l2.62,0.57l0.33,-0.16l2.45,-4.77l1.38,1.14l0.38,0.0l5.1,-4.02l0.09,-0.11l1.57,-3.57l0.02,-0.16l-0.42,-3.22l0.94,-1.67l2.27,-0.47l1.26,3.82l-0.07,2.23l-2.26,2.86l-0.06,0.19l0.04,2.93ZM757.85,196.18l0.22,0.66l-1.11,1.33l-0.8,-0.7l-0.33,-0.04l-1.28,0.65l-0.14,0.15l-0.54,1.34l-1.17,-0.57l0.02,-1.03l1.2,-1.45l1.24,0.28l0.29,-0.1l0.9,-1.03l1.51,0.5Z",name:"Japan"},BI:{path:"M494.7,295.83l-0.14,-2.71l-0.04,-0.13l-0.34,-0.62l0.93,0.12l0.3,-0.16l0.67,-1.25l0.9,0.11l0.11,0.76l0.08,0.16l0.46,0.48l0.02,0.56l-0.55,0.48l-0.96,1.29l-0.82,0.82l-0.61,0.07Z",name:"Burundi"},BJ:{path:"M427.4,268.94l-1.58,0.22l-0.52,-1.45l0.11,-5.73l-0.08,-0.21l-0.43,-0.44l-0.09,-1.13l-0.09,-0.19l-1.52,-1.52l0.24,-1.01l0.7,-0.23l0.18,-0.16l0.45,-0.97l1.07,-0.21l0.19,-0.12l0.53,-0.73l0.73,-0.65l0.68,-0.0l1.69,1.3l-0.08,0.67l0.02,0.14l0.52,1.38l-0.44,0.9l-0.01,0.24l0.2,0.52l-1.1,1.42l-0.76,0.76l-0.08,0.13l-0.47,1.59l0.05,1.69l-0.13,3.79Z",name:"Benin"},BT:{path:"M650.38,213.78l0.88,0.75l-0.13,1.24l-1.77,0.07l-2.1,-0.18l-1.57,0.4l-2.02,-0.91l-0.02,-0.24l1.54,-1.87l1.18,-0.6l1.67,0.59l1.32,0.08l1.01,0.67Z",name:"Bhutan"},JM:{path:"M226.67,238.37l1.64,0.23l1.2,0.56l0.11,0.19l-1.25,0.03l-0.14,0.04l-0.65,0.37l-1.24,-0.37l-1.17,-0.77l0.11,-0.22l0.86,-0.15l0.52,0.08Z",name:"Jamaica"},BW:{path:"M484.91,331.96l0.53,0.52l0.82,1.53l2.83,2.86l0.14,0.08l0.85,0.22l0.03,0.81l0.74,1.66l0.21,0.17l1.87,0.39l1.17,0.87l-3.13,1.71l-2.3,2.01l-0.07,0.1l-0.82,1.74l-0.66,0.88l-1.24,0.19l-0.24,0.2l-0.65,1.98l-1.4,0.55l-1.9,-0.12l-1.2,-0.74l-1.06,-0.32l-0.22,0.02l-1.22,0.62l-0.14,0.14l-0.58,1.21l-1.16,0.79l-1.18,1.13l-1.5,0.23l-0.4,-0.68l0.22,-1.53l-0.04,-0.19l-1.48,-2.54l-0.11,-0.11l-0.53,-0.31l-0.0,-7.25l2.18,-0.08l0.29,-0.3l0.07,-9.0l1.63,-0.08l3.69,-0.86l0.84,0.93l0.38,0.05l1.53,-0.97l0.79,-0.03l1.3,-0.53l0.23,0.1l0.92,1.96Z",name:"Botswana"},BR:{path:"M259.49,274.87l1.42,0.25l1.97,0.62l0.28,-0.05l0.67,-0.55l1.76,-0.38l2.8,-0.94l0.12,-0.08l0.92,-0.96l0.05,-0.33l-0.15,-0.32l0.73,-0.06l0.36,0.35l-0.27,0.93l0.17,0.36l0.76,0.34l0.44,0.9l-0.58,0.73l-0.06,0.13l-0.4,2.13l0.03,0.19l0.62,1.22l0.17,1.11l0.11,0.19l1.54,1.18l0.15,0.06l1.23,0.12l0.29,-0.15l0.2,-0.36l0.71,-0.11l1.13,-0.44l0.79,-0.63l1.25,0.19l0.65,-0.08l1.32,0.2l0.32,-0.18l0.23,-0.51l-0.05,-0.31l-0.31,-0.37l0.11,-0.31l0.75,0.17l0.13,0.0l1.1,-0.24l1.34,0.5l1.08,0.51l0.33,-0.05l0.67,-0.58l0.27,0.05l0.28,0.57l0.31,0.17l1.2,-0.18l0.17,-0.08l1.03,-1.05l0.76,-1.82l1.39,-2.16l0.49,-0.07l0.52,1.17l1.4,4.37l0.2,0.2l1.14,0.35l0.05,1.39l-1.8,1.97l0.01,0.42l0.78,0.75l0.18,0.08l4.16,0.37l0.08,2.25l0.5,0.22l1.78,-1.54l2.98,0.85l4.07,1.5l1.07,1.28l-0.37,1.23l0.36,0.38l2.83,-0.75l4.8,1.3l3.75,-0.09l3.6,2.02l3.27,2.84l1.93,0.72l2.13,0.11l0.76,0.66l1.22,4.56l-0.96,4.03l-1.22,1.58l-3.52,3.51l-1.63,2.91l-1.75,2.09l-0.5,0.04l-0.26,0.19l-0.72,1.99l0.18,4.76l-0.95,5.56l-0.74,0.96l-0.06,0.15l-0.43,3.39l-2.49,3.34l-0.06,0.13l-0.4,2.56l-1.9,1.07l-0.13,0.16l-0.51,1.38l-2.59,0.0l-3.94,1.01l-1.82,1.19l-2.85,0.81l-3.01,2.17l-2.12,2.65l-0.06,0.13l-0.36,2.0l0.01,0.13l0.4,1.42l-0.45,2.63l-0.53,1.23l-1.76,1.53l-2.76,4.79l-2.16,2.15l-1.69,1.29l-0.09,0.12l-1.12,2.6l-1.3,1.26l-0.45,-1.02l0.99,-1.18l0.01,-0.37l-1.5,-1.95l-1.98,-1.54l-2.58,-1.77l-0.2,-0.05l-0.81,0.07l-2.42,-2.05l-0.25,-0.07l-0.77,0.14l2.75,-3.07l2.8,-2.61l1.67,-1.09l2.11,-1.49l0.13,-0.24l0.05,-2.15l-0.07,-0.2l-1.26,-1.54l-0.35,-0.09l-0.64,0.27l0.3,-0.95l0.34,-1.57l0.01,-1.52l-0.16,-0.26l-0.9,-0.48l-0.27,-0.01l-0.86,0.39l-0.65,-0.08l-0.23,-0.8l-0.23,-2.39l-0.04,-0.12l-0.47,-0.79l-0.14,-0.12l-1.69,-0.71l-0.25,0.01l-0.93,0.47l-2.29,-0.44l0.15,-3.3l-0.03,-0.15l-0.62,-1.22l0.57,-0.39l0.13,-0.3l-0.22,-1.37l0.67,-1.13l0.44,-2.04l-0.01,-0.17l-0.59,-1.61l-0.14,-0.16l-1.25,-0.66l-0.22,-0.82l0.35,-1.41l-0.28,-0.37l-4.59,-0.1l-0.78,-2.41l0.34,-0.02l0.28,-0.31l-0.03,-1.1l-0.05,-0.16l-0.45,-0.68l-0.1,-1.4l-0.16,-0.24l-1.45,-0.76l-0.14,-0.03l-1.48,0.02l-1.04,-0.73l-1.62,-0.48l-0.93,-0.9l-0.16,-0.08l-2.72,-0.41l-2.53,-2.12l0.18,-1.54l-0.01,-0.13l-0.29,-0.91l0.26,-1.83l-0.34,-0.34l-3.28,0.43l-0.14,0.05l-1.3,0.93l-2.16,1.01l-0.12,0.09l-0.47,0.65l-1.12,0.05l-1.84,-0.21l-0.12,0.01l-1.33,0.41l-0.82,-0.21l0.16,-3.6l-0.48,-0.26l-1.97,1.43l-1.96,-0.06l-0.86,-1.23l-0.22,-0.13l-1.23,-0.11l0.34,-0.69l-0.05,-0.33l-1.36,-1.5l-0.92,-2.0l0.45,-0.32l0.13,-0.25l-0.0,-0.87l1.34,-0.64l0.17,-0.32l-0.23,-1.23l0.56,-0.77l0.05,-0.13l0.16,-1.03l2.7,-1.61l2.01,-0.47l0.16,-0.09l0.24,-0.27l2.11,0.11l0.31,-0.25l1.13,-6.87l0.06,-1.12l-0.4,-1.53l-0.1,-0.15l-1.0,-0.82l0.01,-1.45l1.08,-0.32l0.39,0.2l0.44,-0.24l0.08,-0.96l-0.25,-0.32l-1.22,-0.22l-0.02,-1.01l4.57,0.05l0.22,-0.09l0.6,-0.63l0.44,0.5l0.47,1.42l0.45,0.16l0.27,-0.18l1.21,1.16l0.23,0.08l1.95,-0.16l0.23,-0.14l0.43,-0.67l1.76,-0.55l1.05,-0.42l0.18,-0.2l0.25,-0.92l1.65,-0.66l0.18,-0.35l-0.14,-0.53l-0.26,-0.22l-1.91,-0.19l-0.29,-1.33l0.1,-1.64l-0.15,-0.28l-0.44,-0.25Z",name:"Brazil"},BS:{path:"M227.51,216.69l0.3,0.18l-0.24,1.07l0.03,-1.04l-0.09,-0.21ZM226.5,224.03l-0.13,0.03l-0.54,-1.3l-0.09,-0.12l-0.78,-0.64l0.4,-1.26l0.33,0.05l0.79,2.0l0.01,1.24ZM225.76,216.5l-2.16,0.34l-0.07,-0.41l0.85,-0.16l1.36,0.07l0.02,0.16Z",name:"The Bahamas"},BY:{path:"M480.08,135.28l2.09,0.02l0.13,-0.03l2.72,-1.3l0.16,-0.19l0.55,-1.83l1.94,-1.06l0.15,-0.31l-0.2,-1.33l1.33,-0.52l2.58,-1.3l2.39,0.8l0.3,0.75l0.37,0.17l1.22,-0.39l2.18,0.75l0.2,1.36l-0.48,0.85l0.01,0.32l1.57,2.26l0.92,0.6l-0.1,0.41l0.19,0.35l1.61,0.57l0.48,0.6l-0.64,0.49l-1.91,-0.11l-0.18,0.05l-0.48,0.32l-0.1,0.39l0.57,1.1l0.51,1.78l-1.79,0.17l-0.18,0.08l-0.77,0.73l-0.09,0.19l-0.13,1.31l-0.75,-0.22l-2.11,0.15l-0.56,-0.66l-0.39,-0.06l-0.8,0.49l-0.79,-0.4l-0.13,-0.03l-1.94,-0.07l-2.76,-0.79l-2.58,-0.27l-1.98,0.07l-0.15,0.05l-1.31,0.86l-0.8,0.09l-0.04,-1.16l-0.03,-0.12l-0.63,-1.28l1.22,-0.56l0.17,-0.27l0.01,-1.35l-0.04,-0.15l-0.66,-1.24l-0.08,-1.12Z",name:"Belarus"},BZ:{path:"M198.03,239.7l0.28,0.19l0.43,-0.1l0.82,-1.42l0.0,0.07l0.29,0.29l0.16,0.0l-0.02,0.35l-0.39,1.08l0.02,0.25l0.16,0.29l-0.23,0.8l0.04,0.24l0.09,0.14l-0.25,1.12l-0.38,0.53l-0.33,0.06l-0.21,0.15l-0.41,0.74l-0.25,0.0l0.17,-2.58l0.01,-2.2Z",name:"Belize"},RU:{path:"M688.57,38.85l0.63,2.39l0.44,0.19l2.22,-1.23l7.18,0.07l5.54,2.49l1.85,1.77l-0.55,2.34l-2.64,1.42l-6.57,2.76l-1.95,1.5l0.12,0.53l3.09,0.68l3.69,1.23l0.21,-0.01l1.98,-0.81l1.16,2.84l0.5,0.08l1.03,-1.18l3.86,-0.74l7.79,0.78l0.56,2.05l0.27,0.22l10.47,0.71l0.32,-0.29l0.13,-3.34l4.98,0.8l3.96,-0.02l3.88,2.43l1.06,2.79l-1.38,1.83l0.01,0.38l3.15,3.64l0.1,0.08l3.94,1.86l0.4,-0.14l2.28,-4.56l3.75,1.94l0.22,0.02l4.18,-1.22l4.76,1.4l0.26,-0.04l1.74,-1.23l3.98,0.63l0.32,-0.41l-1.71,-4.1l3.0,-1.86l22.39,3.04l2.06,2.67l0.1,0.08l6.55,3.51l0.17,0.03l10.08,-0.86l4.86,0.73l1.91,1.72l-0.29,3.13l0.18,0.31l3.08,1.26l0.19,0.01l3.32,-0.9l4.37,-0.11l4.78,0.87l4.61,-0.48l4.26,3.82l0.32,0.05l3.1,-1.4l0.12,-0.45l-1.91,-2.67l0.92,-1.64l7.78,1.22l5.22,-0.26l7.12,2.1l9.6,5.22l6.4,4.15l-0.2,2.44l0.14,0.28l1.69,1.04l0.45,-0.31l-0.51,-2.66l6.31,0.58l4.52,3.61l-2.1,1.52l-4.02,0.42l-0.27,0.29l-0.06,3.83l-0.81,0.67l-2.14,-0.11l-1.91,-1.39l-3.19,-1.13l-0.51,-1.63l-0.21,-0.2l-2.54,-0.67l-0.13,-0.0l-2.69,0.5l-1.12,-1.19l0.48,-1.36l-0.38,-0.39l-3.0,0.98l-0.17,0.44l1.02,1.76l-1.27,1.55l-3.09,1.71l-3.15,-0.29l-0.3,0.18l0.07,0.34l2.22,2.1l1.47,3.22l1.15,1.09l0.25,1.41l-0.48,0.76l-4.47,-0.81l-0.17,0.02l-6.97,2.9l-2.2,0.44l-0.11,0.05l-3.83,2.68l-3.63,2.32l-0.1,0.11l-0.76,1.4l-3.3,-2.4l-0.3,-0.03l-6.31,2.85l-0.99,-1.21l-0.4,-0.06l-2.32,1.54l-3.23,-0.49l-0.33,0.2l-0.79,2.39l-2.97,3.51l-0.07,0.21l0.09,1.47l0.22,0.27l2.62,0.74l-0.3,4.7l-2.06,0.12l-0.26,0.2l-1.07,2.94l0.04,0.27l0.83,1.19l-4.03,1.63l-0.18,0.21l-0.83,3.72l-3.55,0.79l-0.23,0.23l-0.73,3.32l-3.22,2.76l-0.76,-1.88l-1.07,-4.88l-1.39,-7.59l1.17,-4.76l2.05,-2.08l0.09,-0.19l0.11,-1.46l3.67,-0.77l0.15,-0.08l4.47,-4.61l4.29,-3.82l4.48,-3.01l0.11,-0.14l2.01,-5.43l-0.31,-0.4l-3.04,0.33l-0.24,0.17l-1.47,3.11l-5.98,3.94l-1.91,-4.36l-0.33,-0.17l-6.46,1.3l-0.15,0.08l-6.27,6.33l-0.01,0.41l1.7,1.87l-5.04,0.87l-3.51,0.34l0.16,-2.32l-0.26,-0.32l-3.89,-0.56l-0.19,0.04l-3.02,1.77l-7.63,-0.63l-8.24,1.1l-0.16,0.07l-8.11,7.09l-9.6,8.31l0.16,0.52l3.79,0.42l1.16,2.03l0.17,0.14l2.43,0.76l0.31,-0.08l1.5,-1.61l2.49,0.2l3.46,3.6l0.08,2.67l-1.91,3.26l-0.04,0.14l-0.21,3.91l-1.11,5.09l-3.73,4.55l-0.87,2.21l-6.73,7.14l-1.59,1.77l-3.23,1.72l-1.38,0.03l-1.48,-1.39l-0.37,-0.03l-3.36,2.22l-0.11,0.14l-0.16,0.42l-0.01,-1.09l1.0,-0.06l0.28,-0.27l0.36,-3.6l-0.61,-2.51l1.85,-0.94l2.94,0.53l0.32,-0.15l1.71,-3.1l0.84,-3.38l0.97,-1.18l1.32,-2.88l-0.34,-0.42l-4.14,0.95l-2.18,1.25l-3.51,-0.0l-0.95,-2.81l-0.1,-0.14l-2.97,-2.3l-0.11,-0.05l-4.19,-1.0l-0.89,-3.08l-0.87,-2.03l-0.95,-1.46l-1.54,-3.37l-0.12,-0.14l-2.27,-1.28l-3.83,-1.02l-3.37,0.1l-3.11,0.61l-0.13,0.06l-2.07,1.69l0.04,0.49l1.23,0.72l0.03,1.53l-1.34,1.05l-2.26,3.51l-0.05,0.17l0.02,1.27l-3.25,1.9l-2.87,-1.17l-0.14,-0.02l-2.86,0.26l-1.22,-1.02l-0.12,-0.06l-1.5,-0.35l-0.23,0.04l-3.62,2.27l-3.24,0.53l-2.28,0.79l-3.08,-0.51l-2.24,0.03l-1.49,-1.61l-2.45,-1.57l-0.11,-0.04l-2.6,-0.43l-3.17,0.43l-2.31,0.59l-3.31,-1.28l-0.45,-2.31l-0.21,-0.23l-2.94,-0.85l-2.26,-0.39l-2.77,-1.36l-0.37,0.09l-2.59,3.45l-0.03,0.32l0.91,1.74l-2.15,2.01l-3.47,-0.79l-2.44,-0.12l-1.59,-1.46l-0.2,-0.08l-2.55,-0.05l-2.12,-0.98l-0.24,-0.01l-3.85,1.57l-4.74,2.79l-2.59,0.55l-0.79,0.21l-1.21,-1.81l-0.29,-0.13l-3.05,0.41l-0.96,-1.25l-0.14,-0.1l-1.65,-0.6l-1.15,-1.82l-0.13,-0.12l-1.38,-0.6l-0.19,-0.02l-3.49,0.82l-3.35,-1.85l-0.38,0.08l-1.08,1.4l-5.36,-8.17l-3.02,-2.52l0.72,-0.85l0.01,-0.38l-0.37,-0.08l-6.22,3.21l-1.98,0.16l0.17,-1.51l-0.2,-0.31l-3.22,-1.17l-0.19,-0.0l-2.3,0.74l-0.72,-3.27l-0.24,-0.23l-4.5,-0.75l-0.21,0.04l-2.2,1.42l-6.21,1.27l-0.11,0.05l-1.16,0.81l-9.3,1.19l-0.18,0.09l-1.15,1.17l-0.02,0.39l1.56,2.01l-2.02,0.74l-0.16,0.42l0.35,0.68l-2.18,1.49l0.02,0.51l3.83,2.16l-0.45,1.13l-3.31,-0.13l-0.25,0.12l-0.57,0.77l-2.97,-1.59l-0.15,-0.04l-3.97,0.07l-0.13,0.03l-2.53,1.32l-2.84,-1.28l-5.52,-2.3l-0.12,-0.02l-3.91,0.09l-0.16,0.05l-5.17,3.6l-0.13,0.21l-0.25,1.89l-2.17,-1.6l-0.44,0.1l-2.0,3.59l0.06,0.37l0.55,0.5l-1.32,2.23l0.04,0.36l2.13,2.17l0.23,0.09l1.7,-0.08l1.42,1.89l-0.23,1.5l0.19,0.32l0.94,0.38l-0.89,1.44l-2.3,0.49l-0.17,0.11l-2.49,3.2l0.0,0.37l2.2,2.81l-0.23,1.93l0.06,0.22l2.56,3.32l-1.27,1.02l-0.4,0.66l-0.8,-0.15l-1.65,-1.75l-0.18,-0.09l-0.66,-0.09l-1.45,-0.64l-0.72,-1.16l-0.18,-0.13l-2.34,-0.63l-0.17,0.0l-1.32,0.41l-0.31,-0.4l-0.12,-0.09l-3.49,-1.48l-3.67,-0.49l-2.1,-0.52l-0.3,0.1l-0.12,0.14l-2.96,-2.4l-2.89,-1.19l-1.69,-1.42l1.27,-0.35l0.16,-0.1l2.08,-2.61l-0.04,-0.41l-1.02,-0.9l3.21,-1.12l0.2,-0.31l-0.07,-0.69l-0.37,-0.26l-1.86,0.42l0.05,-0.86l1.11,-0.76l2.35,-0.23l0.25,-0.19l0.39,-1.07l0.0,-0.19l-0.51,-1.64l0.95,-1.58l0.04,-0.16l-0.03,-0.95l-0.22,-0.28l-3.69,-1.06l-1.43,0.02l-1.45,-1.44l-0.29,-0.08l-1.83,0.49l-2.88,-1.04l0.04,-0.42l-0.04,-0.18l-0.89,-1.43l-0.23,-0.14l-1.77,-0.14l-0.13,-0.66l0.52,-0.56l0.01,-0.4l-1.6,-1.9l-0.27,-0.1l-2.55,0.32l-0.71,-0.16l-0.3,0.1l-0.53,0.63l-0.58,-0.08l-0.56,-1.97l-0.48,-0.94l0.17,-0.11l1.92,0.11l0.2,-0.06l0.97,-0.74l0.05,-0.42l-0.72,-0.91l-0.13,-0.1l-1.43,-0.51l0.09,-0.36l-0.13,-0.33l-0.97,-0.59l-1.43,-2.06l0.44,-0.77l0.04,-0.19l-0.25,-1.64l-0.2,-0.24l-2.45,-0.84l-0.19,-0.0l-1.05,0.34l-0.25,-0.62l-0.18,-0.17l-2.5,-0.84l-0.74,-1.93l-0.21,-1.7l-0.13,-0.21l-0.92,-0.63l0.83,-0.89l0.07,-0.27l-0.71,-3.26l1.69,-2.01l0.03,-0.34l-0.24,-0.41l2.63,-1.9l-0.01,-0.49l-2.31,-1.57l5.08,-4.61l2.33,-2.24l1.01,-2.08l-0.09,-0.37l-3.52,-2.56l0.94,-2.38l-0.04,-0.29l-2.14,-2.86l1.61,-3.35l-0.01,-0.29l-2.81,-4.58l2.19,-3.04l-0.06,-0.42l-3.7,-2.76l0.32,-2.67l1.87,-0.38l4.26,-1.77l2.46,-1.47l3.96,2.58l0.12,0.05l6.81,1.04l9.37,4.87l1.81,1.92l0.15,2.55l-2.61,2.06l-3.95,1.07l-11.1,-3.15l-0.17,0.0l-1.84,0.53l-0.1,0.53l3.97,2.97l0.15,1.77l0.16,4.14l0.19,0.27l3.21,1.22l1.94,1.03l0.44,-0.22l0.32,-1.94l-0.07,-0.25l-1.32,-1.52l1.25,-1.2l5.87,2.45l0.24,-0.01l2.11,-0.98l0.13,-0.42l-1.55,-2.75l5.52,-3.84l2.13,0.22l2.28,1.42l0.43,-0.12l1.46,-2.87l-0.04,-0.33l-1.97,-2.37l1.14,-2.38l-0.02,-0.3l-1.42,-2.07l6.15,1.22l1.14,1.92l-2.74,0.46l-0.25,0.3l0.02,2.36l0.12,0.24l1.97,1.44l0.25,0.05l3.87,-0.91l0.22,-0.23l0.58,-2.55l5.09,-1.98l8.67,-3.69l1.22,0.14l-2.06,2.2l0.18,0.5l3.11,0.45l0.23,-0.07l1.71,-1.41l4.59,-0.12l0.12,-0.03l3.53,-1.72l2.7,2.48l0.42,-0.01l2.85,-2.88l-0.0,-0.43l-2.42,-2.35l1.0,-1.13l7.2,1.31l3.42,1.36l9.06,4.97l0.39,-0.08l1.67,-2.27l-0.04,-0.4l-2.46,-2.23l-0.06,-0.82l-0.26,-0.27l-2.64,-0.38l0.69,-1.76l0.0,-0.22l-1.32,-3.47l-0.07,-1.27l4.52,-4.09l0.08,-0.11l1.6,-4.18l1.67,-0.84l6.33,1.2l0.46,2.31l-2.31,3.67l0.05,0.38l1.49,1.41l0.77,3.04l-0.56,6.05l0.09,0.24l2.62,2.54l-0.99,2.65l-4.87,5.96l0.17,0.48l2.86,0.61l0.31,-0.13l0.94,-1.42l2.67,-1.04l0.18,-0.19l0.64,-2.01l2.11,-1.98l0.05,-0.37l-1.38,-2.32l1.11,-2.74l-0.24,-0.41l-2.53,-0.33l-0.53,-2.16l1.96,-4.42l-0.05,-0.32l-3.03,-3.48l4.21,-2.94l0.12,-0.3l-0.52,-3.04l0.72,-0.06l1.18,2.35l-0.97,4.39l0.2,0.35l2.68,0.84l0.37,-0.38l-1.05,-3.07l3.89,-1.71l5.05,-0.24l4.55,2.62l0.36,-0.05l0.05,-0.36l-2.19,-3.84l-0.23,-4.78l4.07,-0.92l5.98,0.21l5.47,-0.64l0.2,-0.48l-1.88,-2.37l2.65,-2.99l2.75,-0.13l0.12,-0.03l4.82,-2.48l6.56,-0.67l0.23,-0.14l0.76,-1.27l6.33,-0.46l1.97,1.11l0.28,0.01l5.55,-2.71l4.53,0.08l0.29,-0.21l0.67,-2.18l2.29,-2.15l5.75,-2.13l3.48,1.4l-2.7,1.03l-0.19,0.31l0.26,0.26l5.47,0.78ZM871.83,65.73l0.25,-0.15l1.99,0.01l3.3,1.2l-0.08,0.22l-2.41,1.03l-5.73,0.49l-0.31,-1.0l2.99,-1.8ZM797.64,48.44l-2.22,1.51l-3.85,-0.43l-4.35,-1.85l0.42,-1.13l4.42,0.72l5.59,1.17ZM783.82,46.06l-1.71,3.25l-9.05,-0.14l-4.11,1.15l-4.64,-3.04l1.21,-3.13l3.11,-0.91l6.53,0.22l8.66,2.59ZM780.37,145.71l2.28,5.23l-3.09,-0.89l-0.37,0.19l-1.54,4.65l0.04,0.27l2.38,3.17l-0.05,1.4l-1.41,-1.41l-0.46,0.04l-1.23,1.81l-0.33,-1.86l0.28,-3.1l-0.28,-3.41l0.58,-2.46l0.11,-4.39l-0.03,-0.13l-1.44,-3.2l0.21,-4.39l2.19,-1.49l0.09,-0.41l-0.81,-1.3l0.48,-0.21l0.56,1.94l0.86,3.23l-0.05,3.36l1.03,3.35ZM780.16,57.18l-3.4,0.03l-5.06,-0.53l1.97,-1.59l2.95,-0.42l3.35,1.75l0.18,0.77ZM683.84,31.18l-13.29,1.97l4.16,-6.56l1.88,-0.58l1.77,0.34l6.08,3.02l-0.6,1.8ZM670.94,28.02l-5.18,0.65l-6.89,-1.58l-4.03,-2.07l-1.88,-3.98l-0.18,-0.16l-2.8,-0.93l5.91,-3.62l5.25,-1.29l4.73,2.88l5.63,5.44l-0.57,4.66ZM564.37,68.98l-0.85,0.23l-7.93,-0.57l-0.6,-1.84l-0.21,-0.2l-4.34,-1.18l-0.3,-2.08l2.34,-0.92l0.19,-0.29l-0.08,-2.43l4.85,-4.0l-0.12,-0.52l-1.68,-0.43l5.47,-3.94l0.11,-0.33l-0.6,-2.02l5.36,-2.55l8.22,-3.27l8.29,-0.96l4.34,-1.94l4.67,-0.65l1.45,1.72l-1.43,1.37l-8.8,2.52l-7.65,2.42l-7.92,4.84l-3.73,4.75l-3.92,4.58l-0.07,0.23l0.51,3.88l0.11,0.2l4.32,3.39ZM548.86,18.57l-3.28,0.75l-2.25,0.44l-0.22,0.19l-0.3,0.81l-2.67,0.86l-2.27,-1.14l1.2,-1.51l-0.23,-0.49l-3.14,-0.1l2.48,-0.54l3.55,-0.07l0.44,1.36l0.49,0.12l1.4,-1.35l2.2,-0.9l3.13,1.08l-0.54,0.49ZM477.5,133.25l-4.21,0.05l-2.69,-0.34l0.39,-1.03l3.24,-1.06l2.51,0.58l0.85,0.43l-0.2,0.71l-0.0,0.15l0.12,0.52Z",name:"Russia"},RW:{path:"M497.03,288.12l0.78,1.11l-0.12,1.19l-0.49,0.21l-1.25,-0.15l-0.3,0.16l-0.67,1.24l-1.01,-0.13l0.16,-0.92l0.22,-0.12l0.15,-0.24l0.09,-1.37l0.49,-0.48l0.42,0.18l0.25,-0.01l1.26,-0.65Z",name:"Rwanda"},RS:{path:"M469.75,168.65l0.21,-0.21l0.36,-1.44l-0.08,-0.29l-1.06,-1.03l0.54,-1.16l-0.28,-0.43l-0.26,0.0l0.55,-0.67l-0.01,-0.39l-0.77,-0.86l-0.45,-0.89l1.56,-0.67l1.39,0.12l1.22,1.1l0.26,0.91l0.16,0.19l1.38,0.66l0.17,1.12l0.14,0.21l1.46,0.9l0.35,-0.03l0.62,-0.54l0.09,0.06l-0.28,0.25l-0.03,0.42l0.29,0.34l-0.44,0.5l-0.07,0.26l0.22,1.12l0.07,0.14l1.02,1.1l-0.81,0.84l-0.42,0.96l0.04,0.3l0.12,0.15l-0.15,0.16l-1.04,0.04l-0.39,0.08l0.33,-0.81l-0.29,-0.41l-0.21,0.01l-0.39,-0.45l-0.13,-0.09l-0.32,-0.11l-0.27,-0.4l-0.14,-0.11l-0.4,-0.16l-0.31,-0.37l-0.34,-0.09l-0.45,0.17l-0.18,0.18l-0.29,0.84l-0.96,-0.65l-0.81,-0.33l-0.32,-0.37l-0.22,-0.18Z",name:"Republic of Serbia"},LT:{path:"M478.13,133.31l-0.14,-0.63l0.25,-0.88l-0.15,-0.35l-1.17,-0.58l-2.43,-0.57l-0.45,-2.51l2.58,-0.97l4.14,0.22l2.3,-0.32l0.26,0.54l0.22,0.17l1.26,0.22l2.25,1.6l0.19,1.23l-1.87,1.01l-0.14,0.18l-0.54,1.83l-2.54,1.21l-2.18,-0.02l-0.52,-0.91l-0.18,-0.14l-1.11,-0.32Z",name:"Lithuania"},LU:{path:"M435.95,147.99l0.33,0.49l-0.11,1.07l-0.39,0.04l-0.29,-0.15l0.21,-1.4l0.25,-0.05Z",name:"Luxembourg"},LR:{path:"M401.37,273.67l-0.32,0.01l-2.48,-1.15l-2.24,-1.89l-2.14,-1.38l-1.47,-1.42l0.44,-0.59l0.05,-0.13l0.12,-0.65l1.07,-1.3l1.08,-1.09l0.52,-0.07l0.43,-0.18l0.84,1.24l-0.15,0.89l0.07,0.25l0.49,0.54l0.22,0.1l0.71,0.01l0.27,-0.16l0.42,-0.83l0.19,0.02l-0.06,0.52l0.23,1.12l-0.5,1.03l0.06,0.35l0.73,0.69l0.14,0.08l0.71,0.15l0.92,0.91l0.06,0.76l-0.17,0.22l-0.06,0.15l-0.17,1.8Z",name:"Liberia"},RO:{path:"M477.94,155.19l1.02,-0.64l1.49,0.33l1.52,0.01l1.09,0.73l0.32,0.01l0.81,-0.46l1.8,-0.3l0.18,-0.1l0.54,-0.64l0.86,0.0l0.64,0.26l0.71,0.87l0.8,1.35l1.39,1.81l0.07,1.25l-0.26,1.3l0.01,0.15l0.45,1.42l0.15,0.18l1.12,0.57l0.25,0.01l1.05,-0.45l0.86,0.4l0.03,0.43l-0.92,0.51l-0.63,-0.24l-0.4,0.22l-0.64,3.41l-1.12,-0.24l-1.78,-1.09l-0.23,-0.04l-2.95,0.71l-1.25,0.77l-3.55,-0.16l-1.89,-0.47l-0.14,-0.0l-0.75,0.17l-0.61,-1.07l-0.3,-0.36l0.36,-0.32l-0.04,-0.48l-0.62,-0.38l-0.36,0.03l-0.62,0.54l-1.15,-0.71l-0.18,-1.14l-0.17,-0.22l-1.4,-0.67l-0.24,-0.86l-0.09,-0.14l-0.96,-0.87l1.49,-0.44l0.16,-0.11l1.51,-2.14l1.15,-2.09l1.44,-0.63Z",name:"Romania"},GW:{path:"M383.03,256.73l-1.12,-0.88l-0.14,-0.06l-0.94,-0.15l-0.43,-0.54l0.01,-0.27l-0.13,-0.26l-0.68,-0.48l-0.05,-0.16l0.99,-0.31l0.77,0.08l0.15,-0.02l0.61,-0.26l4.25,0.1l-0.02,0.44l-0.19,0.18l-0.08,0.29l0.17,0.66l-0.17,0.14l-0.44,0.0l-0.16,0.05l-0.57,0.37l-0.66,-0.04l-0.24,0.1l-0.92,1.03Z",name:"Guinea Bissau"},GT:{path:"M195.13,249.89l-1.05,-0.35l-1.5,-0.04l-1.06,-0.47l-1.19,-0.93l0.04,-0.53l0.27,-0.55l-0.03,-0.31l-0.24,-0.32l1.02,-1.77l3.04,-0.01l0.3,-0.28l0.06,-0.88l-0.19,-0.3l-0.3,-0.11l-0.23,-0.45l-0.11,-0.12l-0.9,-0.58l-0.35,-0.33l0.37,-0.0l0.3,-0.3l0.0,-1.15l4.05,0.02l-0.02,1.74l-0.2,2.89l0.3,0.32l0.67,-0.0l0.75,0.42l0.4,-0.11l-0.62,0.53l-1.17,0.7l-0.13,0.16l-0.18,0.49l0.0,0.21l0.14,0.34l-0.35,0.44l-0.49,0.13l-0.2,0.41l0.03,0.06l-0.27,0.16l-0.86,0.64l-0.12,0.22ZM199.35,245.38l0.07,-0.13l0.05,0.02l-0.13,0.11Z",name:"Guatemala"},GR:{path:"M487.2,174.55l-0.64,1.54l-0.43,0.24l-1.41,-0.08l-1.28,-0.28l-0.14,0.0l-3.03,0.77l-0.13,0.51l1.39,1.34l-0.78,0.29l-1.2,0.0l-1.23,-1.42l-0.47,0.02l-0.47,0.65l-0.04,0.27l0.56,1.76l0.06,0.11l1.02,1.12l-0.66,0.45l-0.04,0.46l1.39,1.35l1.15,0.79l0.02,1.06l-1.91,-0.63l-0.36,0.42l0.56,1.12l-1.2,0.23l-0.22,0.4l0.8,2.14l-1.15,0.02l-1.89,-1.15l-0.89,-2.19l-0.43,-1.91l-0.05,-0.11l-0.98,-1.35l-1.24,-1.62l-0.13,-0.63l1.07,-1.32l0.06,-0.14l0.13,-0.81l0.68,-0.36l0.16,-0.25l0.03,-0.54l1.4,-0.23l0.12,-0.05l0.87,-0.6l1.26,0.05l0.25,-0.11l0.34,-0.43l0.33,-0.07l1.81,0.08l0.13,-0.02l1.87,-0.77l1.64,0.97l0.19,0.04l2.28,-0.28l0.26,-0.29l0.02,-0.95l0.56,0.36ZM480.44,192.0l1.05,0.74l0.01,0.0l-1.26,-0.23l0.2,-0.51ZM481.76,192.79l1.86,-0.15l1.53,0.17l-0.02,0.19l0.34,0.3l-2.28,0.15l0.01,-0.13l-0.25,-0.31l-1.19,-0.22ZM485.65,193.28l0.65,-0.16l-0.05,0.12l-0.6,0.04Z",name:"Greece"},GQ:{path:"M444.81,282.04l-0.21,-0.17l0.74,-2.4l3.56,0.05l0.02,2.42l-3.34,-0.02l-0.76,0.13Z",name:"Equatorial Guinea"},GY:{path:"M271.34,264.25l1.43,0.81l1.44,1.53l0.06,1.19l0.28,0.28l0.84,0.05l2.13,1.92l-0.34,1.93l-1.37,0.59l-0.17,0.34l0.12,0.51l-0.43,1.21l0.03,0.26l1.11,1.82l0.26,0.14l0.56,0.0l0.32,1.29l1.25,1.78l-0.08,0.01l-1.34,-0.21l-0.24,0.06l-0.78,0.64l-1.06,0.41l-0.76,0.1l-0.22,0.15l-0.18,0.32l-0.95,-0.1l-1.38,-1.05l-0.19,-1.13l-0.6,-1.18l0.37,-1.96l0.65,-0.83l0.03,-0.32l-0.57,-1.17l-0.15,-0.14l-0.62,-0.27l0.25,-0.85l-0.08,-0.3l-0.58,-0.58l-0.24,-0.09l-1.15,0.1l-1.41,-1.58l0.48,-0.49l0.09,-0.22l-0.04,-0.92l1.31,-0.34l0.73,-0.52l0.04,-0.44l-0.75,-0.82l0.16,-0.66l1.74,-1.3Z",name:"Guyana"},GE:{path:"M525.41,174.19l0.26,-0.88l-0.0,-0.17l-0.63,-2.06l-0.1,-0.15l-1.45,-1.12l-0.11,-0.05l-1.31,-0.33l-0.66,-0.69l1.97,0.48l3.65,0.49l3.3,1.41l0.39,0.5l0.33,0.1l1.43,-0.45l2.14,0.58l0.7,1.14l0.13,0.12l1.06,0.47l-0.18,0.11l-0.08,0.43l1.08,1.41l-0.06,0.06l-1.16,-0.15l-1.82,-0.84l-0.31,0.04l-0.55,0.44l-3.29,0.44l-2.32,-1.41l-0.17,-0.04l-2.25,0.12Z",name:"Georgia"},GB:{path:"M412.82,118.6l-2.31,3.4l-0.0,0.33l0.31,0.13l2.52,-0.49l2.34,0.02l-0.56,2.51l-2.22,3.13l0.22,0.47l2.43,0.21l2.35,4.35l0.17,0.14l1.58,0.51l1.49,3.78l0.73,1.37l0.2,0.15l2.76,0.59l-0.25,1.75l-1.18,0.91l-0.08,0.39l0.87,1.49l-1.96,1.51l-3.31,-0.02l-4.15,0.88l-1.07,-0.59l-0.35,0.04l-1.55,1.44l-2.17,-0.35l-0.22,0.05l-1.61,1.15l-0.78,-0.38l3.31,-3.12l2.18,-0.7l0.21,-0.31l-0.26,-0.27l-3.78,-0.54l-0.48,-0.9l2.3,-0.92l0.13,-0.46l-1.29,-1.71l0.39,-1.83l3.46,0.29l0.32,-0.24l0.37,-1.99l-0.06,-0.24l-1.71,-2.17l-0.18,-0.11l-2.91,-0.58l-0.43,-0.68l0.82,-1.4l-0.03,-0.35l-0.82,-0.97l-0.46,0.01l-0.85,1.05l-0.11,-2.6l-0.05,-0.16l-1.19,-1.7l0.86,-3.53l1.81,-2.75l1.88,0.26l2.38,-0.24ZM406.39,132.84l-1.09,1.92l-1.65,-0.62l-1.26,0.02l0.41,-1.46l0.0,-0.16l-0.42,-1.51l1.62,-0.11l2.39,1.92Z",name:"United Kingdom"},GA:{path:"M448.76,294.47l-2.38,-2.34l-1.63,-2.04l-1.46,-2.48l0.06,-0.66l0.54,-0.81l0.61,-1.82l0.46,-1.69l0.63,-0.11l3.62,0.03l0.3,-0.3l-0.02,-2.75l0.88,-0.12l1.47,0.32l0.13,0.0l1.39,-0.3l-0.13,0.87l0.03,0.19l0.7,1.29l0.3,0.16l1.74,-0.19l0.36,0.29l-1.01,2.7l0.05,0.29l1.13,1.42l0.25,1.82l-0.3,1.56l-0.64,0.99l-1.93,-0.09l-1.26,-1.13l-0.5,0.17l-0.16,0.91l-1.48,0.27l-0.12,0.05l-0.86,0.63l-0.08,0.39l0.81,1.42l-1.48,1.08Z",name:"Gabon"},GN:{path:"M399.83,265.31l-0.69,-0.06l-0.3,0.16l-0.43,0.85l-0.39,-0.01l-0.3,-0.33l0.14,-0.87l-0.05,-0.22l-1.05,-1.54l-0.37,-0.11l-0.61,0.27l-0.84,0.12l0.02,-0.54l-0.04,-0.17l-0.35,-0.57l0.07,-0.63l-0.03,-0.17l-0.57,-1.11l-0.7,-0.9l-0.24,-0.12l-2.0,-0.0l-0.19,0.07l-0.51,0.42l-0.6,0.05l-0.21,0.11l-0.43,0.55l-0.3,0.7l-1.04,0.86l-0.91,-1.24l-1.0,-1.02l-0.69,-0.37l-0.52,-0.42l-0.3,-1.11l-0.37,-0.56l-0.1,-0.1l-0.4,-0.23l0.77,-0.85l0.62,0.04l0.18,-0.05l0.58,-0.38l0.46,-0.0l0.19,-0.07l0.39,-0.34l0.1,-0.3l-0.17,-0.67l0.15,-0.14l0.09,-0.2l0.03,-0.57l0.87,0.02l1.76,0.6l0.13,0.01l0.55,-0.06l0.22,-0.13l0.08,-0.12l1.18,0.17l0.17,-0.02l0.09,0.56l0.3,0.25l0.4,-0.0l0.14,-0.03l0.56,-0.29l0.23,0.05l0.63,0.59l0.15,0.07l1.07,0.2l0.24,-0.06l0.65,-0.52l0.77,-0.32l0.55,-0.32l0.3,0.04l0.44,0.45l0.34,0.74l0.84,0.87l-0.35,0.45l-0.06,0.15l-0.1,0.82l0.42,0.31l0.35,-0.16l0.05,0.04l-0.1,0.59l0.09,0.27l0.42,0.4l-0.06,0.02l-0.18,0.21l-0.2,0.86l0.03,0.21l0.56,1.02l0.52,1.71l-0.65,0.21l-0.15,0.12l-0.24,0.35l-0.03,0.28l0.16,0.41l-0.1,0.76l-0.12,0.0Z",name:"Guinea"},GM:{path:"M379.18,251.48l0.15,-0.55l2.51,-0.07l0.21,-0.09l0.48,-0.52l0.58,-0.03l0.91,0.58l0.16,0.05l0.78,0.01l0.14,-0.03l0.59,-0.31l0.16,0.24l-0.71,0.38l-0.94,-0.04l-1.02,-0.51l-0.3,0.01l-0.86,0.55l-0.37,0.02l-0.14,0.04l-0.53,0.31l-1.81,-0.04Z",name:"Gambia"},GL:{path:"M304.13,6.6l8.19,-3.63l8.72,0.28l0.19,-0.06l3.12,-2.28l8.75,-0.61l19.94,0.8l14.93,4.75l-3.92,2.01l-9.52,0.27l-13.48,0.6l-0.27,0.2l0.09,0.33l1.26,1.09l0.22,0.07l8.81,-0.67l7.49,2.07l0.19,-0.01l4.68,-1.78l1.76,1.84l-2.59,3.26l-0.01,0.36l0.34,0.11l6.35,-2.2l12.09,-2.32l7.31,1.14l1.17,2.13l-9.9,4.05l-1.43,1.32l-7.91,0.98l-0.26,0.31l0.29,0.29l5.25,0.25l-2.63,3.72l-2.02,3.61l-0.04,0.15l0.08,6.05l0.07,0.19l2.61,3.0l-3.4,0.2l-4.12,1.66l-0.04,0.54l4.5,2.67l0.53,3.9l-2.39,0.42l-0.19,0.48l2.91,3.83l-5.0,0.32l-0.27,0.22l0.12,0.33l2.69,1.84l-0.65,1.35l-3.36,0.71l-3.46,0.01l-0.21,0.51l3.05,3.15l0.02,1.53l-4.54,-1.79l-0.32,0.06l-1.29,1.26l0.11,0.5l3.33,1.15l3.17,2.74l0.85,3.29l-4.0,0.78l-1.83,-1.66l-3.1,-2.64l-0.36,-0.02l-0.13,0.33l0.8,2.92l-2.76,2.26l-0.09,0.33l0.28,0.2l6.59,0.19l2.47,0.18l-5.86,3.38l-6.76,3.43l-7.26,1.48l-2.73,0.02l-0.16,0.05l-2.67,1.72l-3.44,4.42l-5.28,2.86l-1.73,0.18l-3.33,1.01l-3.59,0.96l-0.15,0.1l-2.15,2.52l-0.07,0.19l-0.03,2.76l-1.21,2.49l-4.03,3.1l-0.1,0.33l0.98,2.94l-2.31,6.57l-3.21,0.21l-3.6,-3.0l-0.19,-0.07l-4.9,-0.02l-2.29,-1.97l-1.69,-3.78l-4.31,-4.86l-1.23,-2.52l-0.34,-3.58l-0.08,-0.17l-3.35,-3.67l0.85,-2.92l-0.09,-0.31l-1.5,-1.34l2.33,-4.7l3.67,-1.57l0.15,-0.13l1.02,-1.93l0.52,-3.47l-0.44,-0.31l-2.85,1.57l-1.33,0.64l-2.12,0.59l-2.81,-1.32l-0.15,-2.79l0.88,-2.17l2.09,-0.06l5.07,1.2l0.34,-0.17l-0.11,-0.37l-4.3,-2.9l-2.24,-1.58l-0.25,-0.05l-2.38,0.62l-1.7,-0.93l2.62,-4.1l-0.03,-0.36l-1.51,-1.75l-1.97,-3.3l-3.01,-5.21l-0.1,-0.11l-3.04,-1.85l0.03,-1.94l-0.18,-0.28l-6.82,-3.01l-5.35,-0.38l-6.69,0.21l-6.03,0.37l-2.81,-1.59l-3.84,-2.9l5.94,-1.5l5.01,-0.28l0.28,-0.29l-0.26,-0.31l-10.68,-1.38l-5.38,-2.1l0.27,-1.68l9.3,-2.6l9.18,-2.68l0.19,-0.16l0.97,-2.05l-0.18,-0.42l-6.29,-1.91l1.81,-1.9l8.58,-4.05l3.6,-0.63l0.23,-0.4l-0.92,-2.37l5.59,-1.5l7.66,-0.95l7.58,-0.05l2.65,1.84l0.31,0.02l6.52,-3.29l5.85,2.24l3.55,0.49l5.17,1.95l0.38,-0.16l-0.13,-0.39l-5.77,-3.16l0.29,-2.26Z",name:"Greenland"},KW:{path:"M540.87,207.81l0.41,0.94l-0.18,0.51l0.0,0.21l0.65,1.66l-1.15,0.05l-0.54,-1.12l-0.24,-0.17l-1.73,-0.2l1.44,-2.06l1.33,0.18Z",name:"Kuwait"},GH:{path:"M423.16,269.88l-3.58,1.34l-1.41,0.87l-2.13,0.69l-1.91,-0.61l0.09,-0.75l-0.03,-0.17l-1.04,-2.07l0.62,-2.7l1.04,-2.08l0.03,-0.19l-1.0,-5.46l0.05,-1.12l4.04,-0.11l1.08,0.18l0.18,-0.03l0.72,-0.36l0.75,0.13l-0.11,0.48l0.06,0.26l0.98,1.22l-0.0,1.77l0.24,1.99l0.05,0.13l0.55,0.81l-0.52,2.14l0.19,1.37l0.69,1.66l0.38,0.62Z",name:"Ghana"},OM:{path:"M568.16,231.0l-0.08,0.1l-0.84,1.61l-0.93,-0.11l-0.27,0.11l-0.58,0.73l-0.4,1.32l-0.01,0.14l0.29,1.61l-0.07,0.09l-1.0,-0.01l-0.16,0.04l-1.56,0.97l-0.14,0.2l-0.23,1.17l-0.41,0.4l-1.44,-0.02l-0.17,0.05l-0.98,0.65l-0.13,0.25l0.01,0.87l-0.97,0.57l-1.27,-0.22l-0.19,0.03l-1.63,0.84l-0.88,0.11l-2.55,-5.57l7.2,-2.49l0.19,-0.19l1.67,-5.23l-0.03,-0.25l-1.1,-1.78l0.05,-0.89l0.68,-1.03l0.05,-0.16l0.01,-0.89l0.96,-0.44l0.07,-0.5l-0.32,-0.26l0.16,-1.31l0.85,-0.01l1.03,1.67l0.09,0.09l1.4,0.96l0.11,0.05l1.82,0.34l1.37,0.45l1.75,2.32l0.13,0.1l0.7,0.26l-0.0,0.3l-1.25,2.19l-1.01,0.8ZM561.88,218.47l-0.01,0.02l-0.15,-0.29l0.3,-0.38l-0.14,0.65Z",name:"Oman"},_3:{path:"M543.2,261.06l-1.07,1.46l-1.65,1.99l-1.91,0.01l-8.08,-2.95l-0.89,-0.84l-0.9,-1.19l-0.81,-1.23l0.44,-0.73l0.76,-1.12l0.49,0.28l0.52,1.05l1.13,1.06l0.2,0.08l1.24,0.01l2.42,-0.65l2.77,-0.31l2.17,-0.78l1.31,-0.19l0.84,-0.43l1.03,-0.06l-0.01,4.54Z",name:"Somaliland"},_2:{path:"M384.23,230.37l0.07,-0.06l0.28,-0.89l0.99,-1.13l0.07,-0.13l0.8,-3.54l3.4,-2.8l0.09,-0.13l0.76,-2.17l0.07,5.5l-2.07,0.21l-0.24,0.17l-0.61,1.36l-0.02,0.16l0.43,3.46l-4.01,-0.01ZM391.82,218.2l0.07,-0.06l0.75,-1.93l1.86,-0.25l0.94,0.34l1.14,0.0l0.18,-0.06l0.73,-0.56l1.41,-0.08l-0.0,2.72l-7.08,-0.12Z",name:"Western Sahara"},_1:{path:"M472.71,172.84l-0.07,-0.43l-0.16,-0.22l-0.53,-0.27l-0.38,-0.58l0.3,-0.43l0.51,-0.19l0.18,-0.18l0.3,-0.87l0.12,-0.04l0.22,0.26l0.12,0.09l0.38,0.15l0.28,0.41l0.15,0.12l0.34,0.12l0.43,0.5l0.15,0.07l-0.12,0.3l-0.27,0.32l-0.03,0.18l-0.31,0.06l-1.48,0.47l-0.15,0.17Z",name:"Kosovo"},_0:{path:"M503.54,192.92l0.09,-0.17l0.41,0.01l-0.08,0.01l-0.42,0.15ZM504.23,192.76l1.02,0.02l0.4,-0.13l-0.09,0.29l0.03,0.08l-0.35,0.16l-0.24,-0.04l-0.06,-0.1l-0.18,-0.17l-0.19,-0.08l-0.33,-0.02Z",name:"Northern Cyprus"},JO:{path:"M510.26,200.93l0.28,-0.57l2.53,1.0l0.27,-0.02l4.57,-2.77l0.84,2.84l-0.28,0.25l-4.95,1.37l-0.14,0.49l2.24,2.48l-0.5,0.28l-0.13,0.14l-0.35,0.78l-1.76,0.35l-0.2,0.14l-0.57,0.94l-0.94,0.73l-2.45,-0.38l-0.03,-0.12l1.23,-4.32l-0.04,-1.1l0.34,-0.75l0.03,-0.12l0.0,-1.63Z",name:"Jordan"},HR:{path:"M455.49,162.73l1.53,0.09l0.24,-0.1l0.29,-0.34l0.64,0.38l0.14,0.04l0.98,0.06l0.32,-0.3l-0.01,-0.66l0.67,-0.25l0.19,-0.22l0.21,-1.11l1.72,-0.72l0.65,0.32l1.94,1.37l2.07,0.6l0.22,-0.02l0.67,-0.33l0.47,0.94l0.67,0.76l-0.63,0.77l-0.91,-0.55l-0.16,-0.04l-1.69,0.04l-2.2,-0.51l-1.17,0.07l-0.21,0.11l-0.36,0.42l-0.67,-0.53l-0.46,0.12l-0.52,1.29l0.05,0.31l1.21,1.42l0.58,0.99l1.15,1.14l0.95,0.68l0.92,1.23l0.1,0.09l1.75,0.91l-1.87,-0.89l-1.5,-1.11l-2.23,-0.88l-1.77,-1.9l0.12,-0.06l0.1,-0.47l-1.07,-1.22l-0.04,-0.94l-0.21,-0.27l-1.61,-0.49l-0.35,0.14l-0.53,0.93l-0.41,-0.57l0.04,-0.73Z",name:"Croatia"},HT:{path:"M237.82,234.68l1.35,0.1l1.95,0.37l0.18,1.15l-0.16,0.83l-0.51,0.37l-0.06,0.44l0.57,0.68l-0.02,0.22l-1.31,-0.35l-1.26,0.17l-1.49,-0.18l-0.15,0.02l-1.03,0.43l-1.02,-0.61l0.09,-0.36l2.04,0.32l1.9,0.21l0.19,-0.05l0.9,-0.58l0.05,-0.47l-1.05,-1.03l0.02,-0.86l-0.23,-0.3l-1.13,-0.29l0.18,-0.23Z",name:"Haiti"},HU:{path:"M461.96,157.92l0.68,-1.66l-0.03,-0.29l-0.15,-0.22l0.84,-0.0l0.3,-0.26l0.12,-0.84l0.88,0.57l0.98,0.38l0.16,0.01l2.1,-0.39l0.23,-0.21l0.14,-0.45l0.88,-0.1l1.06,-0.43l0.13,0.1l0.28,0.04l1.18,-0.4l0.14,-0.1l0.52,-0.67l0.63,-0.15l2.6,0.95l0.26,-0.03l0.38,-0.23l1.12,0.7l0.1,0.49l-1.31,0.57l-0.14,0.13l-1.18,2.14l-1.44,2.04l-1.85,0.55l-1.51,-0.13l-0.14,0.02l-1.92,0.82l-0.85,0.42l-1.91,-0.55l-1.83,-1.31l-0.74,-0.37l-0.44,-0.97l-0.26,-0.18Z",name:"Hungary"},HN:{path:"M202.48,251.87l-0.33,-0.62l-0.18,-0.14l-0.5,-0.15l0.13,-0.76l-0.11,-0.28l-0.34,-0.28l-0.6,-0.23l-0.18,-0.01l-0.81,0.22l-0.16,-0.24l-0.72,-0.39l-0.51,-0.48l-0.12,-0.07l-0.31,-0.09l0.24,-0.3l0.04,-0.3l-0.16,-0.4l0.1,-0.28l1.14,-0.69l1.0,-0.86l0.09,0.04l0.3,-0.05l0.47,-0.39l0.49,-0.03l0.14,0.13l0.29,0.06l0.31,-0.1l1.16,0.22l1.24,-0.08l0.81,-0.28l0.29,-0.25l0.63,0.1l0.69,0.18l0.65,-0.06l0.49,-0.2l1.04,0.32l0.38,0.06l0.7,0.44l0.71,0.56l0.92,0.41l0.1,0.11l-0.11,-0.01l-0.23,0.09l-0.3,0.3l-0.76,0.29l-0.58,0.0l-0.15,0.04l-0.45,0.26l-0.31,-0.07l-0.37,-0.34l-0.28,-0.07l-0.26,0.07l-0.18,0.15l-0.23,0.43l-0.04,-0.0l-0.33,0.28l-0.03,0.4l-0.76,0.61l-0.45,0.3l-0.15,0.16l-0.51,-0.36l-0.41,0.06l-0.45,0.56l-0.41,-0.01l-0.59,0.06l-0.27,0.31l0.04,0.96l-0.07,0.0l-0.25,0.16l-0.24,0.45l-0.42,0.06Z",name:"Honduras"},PR:{path:"M254.95,238.31l1.15,0.21l0.2,0.23l-0.36,0.36l-1.76,-0.01l-1.2,0.07l-0.09,-0.69l0.17,-0.18l1.89,0.01Z",name:"Puerto Rico"},PS:{path:"M509.66,201.06l-0.0,1.44l-0.29,0.63l-0.59,0.19l0.02,-0.11l0.52,-0.31l-0.02,-0.53l-0.41,-0.2l0.36,-1.28l0.41,0.17Z",name:"West Bank"},PT:{path:"M398.65,173.6l0.75,-0.63l0.7,-0.3l0.51,1.2l0.28,0.18l1.48,-0.0l0.2,-0.08l0.33,-0.3l1.16,0.08l0.52,1.11l-0.95,0.66l-0.13,0.24l-0.03,2.2l-0.33,0.35l-0.08,0.18l-0.08,1.17l-0.86,0.19l-0.2,0.44l0.93,1.64l-0.64,1.79l0.07,0.31l0.72,0.72l-0.24,0.56l-0.9,1.05l-0.07,0.26l0.17,0.77l-0.73,0.54l-1.18,-0.36l-0.16,-0.0l-0.85,0.21l0.31,-1.81l-0.23,-1.87l-0.23,-0.25l-0.99,-0.24l-0.49,-0.91l0.18,-1.72l0.93,-0.99l0.08,-0.16l0.17,-1.17l0.52,-1.76l-0.04,-1.36l-0.51,-1.14l-0.09,-0.8Z",name:"Portugal"},PY:{path:"M264.33,341.43l0.93,-2.96l0.07,-1.42l1.1,-2.1l4.19,-0.73l2.22,0.04l2.12,1.21l0.07,0.76l0.7,1.38l-0.16,3.48l0.24,0.31l2.64,0.5l0.19,-0.03l0.9,-0.45l1.47,0.62l0.38,0.64l0.23,2.35l0.3,1.07l0.25,0.21l0.93,0.12l0.16,-0.02l0.8,-0.37l0.61,0.33l-0.0,1.25l-0.33,1.53l-0.5,1.57l-0.39,2.26l-2.14,1.94l-1.85,0.4l-2.74,-0.4l-2.13,-0.62l2.26,-3.75l0.03,-0.24l-0.36,-1.18l-0.17,-0.19l-2.55,-1.03l-3.04,-1.95l-2.07,-0.43l-4.4,-4.12Z",name:"Paraguay"},PA:{path:"M213.65,263.79l0.18,-0.43l0.02,-0.18l-0.06,-0.28l0.23,-0.18l-0.01,-0.48l-0.4,-0.29l-0.01,-0.62l0.57,-0.13l0.68,0.69l-0.04,0.39l0.26,0.33l1.0,0.11l0.27,-0.1l0.49,0.44l0.24,0.07l1.34,-0.22l1.04,-0.62l1.49,-0.5l0.86,-0.73l0.99,0.11l0.18,0.28l1.35,0.08l1.02,0.4l0.78,0.72l0.71,0.53l-0.1,0.12l-0.05,0.3l0.53,1.34l-0.28,0.44l-0.6,-0.13l-0.36,0.22l-0.2,0.76l-0.41,-0.36l-0.44,-1.12l0.49,-0.53l-0.14,-0.49l-0.51,-0.14l-0.41,-0.72l-0.11,-0.11l-1.25,-0.7l-0.19,-0.04l-1.1,0.16l-0.22,0.15l-0.47,0.81l-0.9,0.56l-0.49,0.08l-0.22,0.17l-0.25,0.52l0.05,0.32l0.93,1.07l-0.41,0.21l-0.29,0.3l-0.81,0.09l-0.36,-1.26l-0.53,-0.1l-0.21,0.28l-0.5,-0.09l-0.44,-0.88l-0.22,-0.16l-0.99,-0.16l-0.61,-0.28l-0.13,-0.03l-1.0,0.0Z",name:"Panama"},PG:{path:"M808.4,298.6l0.62,0.46l1.19,1.56l1.04,0.77l-0.18,0.37l-0.42,0.15l-0.92,-0.82l-1.05,-1.53l-0.27,-0.96ZM804.09,296.06l-0.3,0.26l-0.36,-1.11l-0.66,-1.06l-2.55,-1.89l-1.42,-0.59l0.17,-0.15l1.16,0.6l0.85,0.55l1.01,0.58l0.97,1.02l0.9,0.76l0.24,1.03ZM796.71,297.99l0.15,0.82l0.34,0.24l1.43,-0.19l0.19,-0.11l0.68,-0.82l1.36,-0.87l0.13,-0.31l-0.21,-1.13l1.04,-0.03l0.3,0.25l-0.04,1.17l-0.74,1.34l-1.17,0.18l-0.22,0.15l-0.35,0.62l-2.51,1.13l-1.21,-0.0l-1.99,-0.71l-1.19,-0.58l0.07,-0.28l1.98,0.32l1.46,-0.2l0.24,-0.21l0.25,-0.79ZM789.24,303.52l0.11,0.15l2.19,1.62l1.6,2.62l0.27,0.14l1.09,-0.06l-0.07,0.77l0.23,0.32l1.23,0.27l-0.14,0.09l0.05,0.53l2.39,0.95l-0.11,0.28l-1.33,0.14l-0.51,-0.55l-0.18,-0.09l-4.59,-0.65l-1.87,-1.55l-1.38,-1.35l-1.28,-2.17l-0.16,-0.13l-3.27,-1.1l-0.19,0.0l-2.12,0.72l-1.58,0.85l-0.15,0.31l0.28,1.63l-1.65,0.73l-1.37,-0.4l-2.3,-0.09l-0.08,-15.65l3.95,1.57l4.58,1.42l1.67,1.25l1.32,1.19l0.36,1.39l0.19,0.21l4.06,1.51l0.39,0.85l-1.9,0.22l-0.25,0.39l0.55,1.68Z",name:"Papua New Guinea"},PE:{path:"M246.44,329.21l-0.63,1.25l-1.05,0.54l-2.25,-1.33l-0.19,-0.93l-0.16,-0.21l-4.95,-2.58l-4.46,-2.79l-1.87,-1.52l-0.94,-1.91l0.33,-0.6l-0.01,-0.31l-2.11,-3.33l-2.46,-4.66l-2.36,-5.02l-1.04,-1.18l-0.77,-1.81l-0.08,-0.11l-1.95,-1.64l-1.54,-0.88l0.61,-0.85l0.02,-0.31l-1.15,-2.27l0.69,-1.56l1.59,-1.26l0.12,0.42l-0.56,0.47l-0.11,0.25l0.07,0.92l0.36,0.27l0.97,-0.19l0.85,0.23l0.99,1.19l0.41,0.05l1.42,-1.03l0.11,-0.16l0.46,-1.64l1.45,-2.06l2.92,-0.96l0.11,-0.07l2.73,-2.62l0.84,-1.72l0.02,-0.18l-0.3,-1.65l0.28,-0.1l1.49,1.06l0.77,1.14l0.1,0.09l1.08,0.6l1.43,2.55l0.21,0.15l1.86,0.31l0.18,-0.03l1.25,-0.6l0.77,0.37l0.17,0.03l1.4,-0.2l1.57,0.96l-1.45,2.29l0.23,0.46l0.63,0.05l0.66,0.7l-1.51,-0.08l-0.24,0.1l-0.27,0.31l-1.96,0.46l-2.95,1.74l-0.14,0.21l-0.17,1.1l-0.6,0.82l-0.05,0.23l0.21,1.13l-1.31,0.63l-0.17,0.27l0.0,0.91l-0.53,0.37l-0.1,0.37l1.04,2.27l1.31,1.46l-0.44,0.9l0.24,0.43l1.52,0.13l0.87,1.23l0.24,0.13l2.21,0.07l0.18,-0.06l1.55,-1.13l-0.14,3.22l0.23,0.3l1.14,0.29l0.16,-0.0l1.18,-0.36l1.97,3.71l-0.45,0.71l-0.04,0.14l-0.12,1.8l-0.05,2.07l-0.92,1.2l-0.03,0.31l0.38,0.8l-0.48,0.72l-0.02,0.3l1.01,2.02l-1.5,2.64Z",name:"Peru"},PK:{path:"M609.08,187.76l1.66,1.21l0.71,2.11l0.2,0.19l3.62,1.01l-1.98,1.95l-2.65,0.4l-3.75,-0.68l-0.26,0.08l-1.23,1.22l-0.07,0.31l0.89,2.46l0.88,1.92l0.1,0.12l1.67,1.14l-1.8,1.35l-0.12,0.25l0.04,1.85l-2.35,2.67l-1.59,2.79l-2.5,2.72l-2.76,-0.2l-0.24,0.09l-2.76,2.83l0.04,0.45l1.54,1.13l0.27,1.94l0.09,0.17l1.34,1.29l0.4,1.83l-5.14,-0.01l-0.22,0.09l-1.53,1.63l-1.52,-0.56l-0.76,-1.88l-1.93,-2.03l-0.25,-0.09l-4.6,0.5l-4.05,0.05l-3.1,0.33l0.77,-2.53l3.48,-1.33l0.19,-0.33l-0.21,-1.24l-0.19,-0.23l-1.01,-0.37l-0.06,-2.18l-0.17,-0.26l-2.32,-1.16l-0.96,-1.57l-0.56,-0.65l3.16,1.05l0.14,0.01l2.45,-0.4l1.44,0.33l0.3,-0.1l0.4,-0.47l1.58,0.22l0.14,-0.01l3.25,-1.14l0.2,-0.27l0.08,-2.23l1.23,-1.38l1.73,0.0l0.28,-0.2l0.22,-0.61l1.68,-0.32l0.86,0.24l0.27,-0.05l0.98,-0.78l0.11,-0.26l-0.13,-1.57l0.96,-1.52l1.51,-0.67l0.14,-0.41l-0.74,-1.4l1.86,0.07l0.26,-0.13l0.69,-1.01l0.05,-0.2l-0.09,-0.94l1.14,-1.09l0.09,-0.28l-0.29,-1.41l-0.51,-1.07l1.23,-1.05l2.6,-0.58l2.86,-0.33l1.33,-0.54l1.3,-0.29Z",name:"Pakistan"},PH:{path:"M737.11,263.82l0.25,1.66l0.14,1.34l-0.54,1.46l-0.64,-1.79l-0.5,-0.1l-1.17,1.28l-0.05,0.32l0.74,1.71l-0.49,0.81l-2.6,-1.28l-0.61,-1.57l0.68,-1.07l-0.07,-0.4l-1.59,-1.19l-0.42,0.06l-0.69,0.91l-1.01,-0.08l-0.21,0.06l-1.58,1.2l-0.17,-0.3l0.87,-1.88l1.48,-0.66l1.18,-0.81l0.71,0.92l0.34,0.1l1.9,-0.69l0.18,-0.18l0.34,-0.94l1.57,-0.06l0.29,-0.32l-0.1,-1.38l1.41,0.83l0.36,2.06ZM734.94,254.42l0.56,2.24l-1.41,-0.49l-0.4,0.3l0.07,0.94l0.51,1.3l-0.54,0.26l-0.08,-1.34l-0.25,-0.28l-0.56,-0.1l-0.23,-0.91l1.03,0.14l0.34,-0.31l-0.03,-0.96l-0.06,-0.18l-1.14,-1.44l1.62,0.04l0.57,0.78ZM724.68,238.33l1.48,0.71l0.33,-0.04l0.44,-0.38l0.05,0.13l-0.37,0.97l0.01,0.23l0.81,1.75l-0.59,1.92l-1.37,0.79l-0.14,0.2l-0.39,2.07l0.01,0.14l0.56,2.04l0.23,0.21l1.33,0.28l0.14,-0.0l1.0,-0.27l2.82,1.28l-0.2,1.16l0.12,0.29l0.66,0.5l-0.13,0.56l-1.54,-0.99l-0.89,-1.29l-0.49,0.0l-0.44,0.65l-1.34,-1.28l-0.26,-0.08l-2.18,0.36l-0.96,-0.44l0.09,-0.72l0.69,-0.57l-0.01,-0.47l-0.75,-0.59l-0.47,0.14l-0.15,0.43l-0.86,-1.02l-0.34,-1.02l-0.07,-1.74l0.49,0.41l0.49,-0.21l0.26,-3.99l0.73,-2.1l1.23,0.0ZM731.12,258.92l-0.82,0.75l-0.83,1.64l-0.52,0.5l-1.17,-1.33l0.36,-0.47l0.62,-0.7l0.07,-0.15l0.24,-1.35l0.73,-0.08l-0.31,1.29l0.16,0.34l0.37,-0.09l1.21,-1.6l-0.12,1.24ZM726.66,255.58l0.85,0.45l0.14,0.03l1.28,-0.0l-0.03,0.62l-1.04,0.96l-1.15,0.55l-0.05,-0.71l0.17,-1.26l-0.01,-0.13l-0.16,-0.51ZM724.92,252.06l-0.45,1.5l-0.7,-0.83l-0.95,-1.43l1.44,0.06l0.67,0.7ZM717.48,261.28l-1.87,1.35l0.21,-0.3l1.81,-1.57l1.5,-1.75l0.97,-1.84l0.23,1.08l-1.56,1.33l-1.29,1.7Z",name:"Philippines"},PL:{path:"M458.8,144.25l-0.96,-1.98l0.18,-1.06l-0.01,-0.15l-0.62,-1.8l-0.82,-1.11l0.56,-0.73l0.05,-0.28l-0.51,-1.51l1.48,-0.87l3.88,-1.58l3.06,-1.14l2.23,0.52l0.15,0.66l0.29,0.23l2.4,0.04l3.11,0.39l4.56,-0.05l1.12,0.32l0.51,0.89l0.1,1.45l0.03,0.12l0.66,1.23l-0.01,1.08l-1.33,0.61l-0.14,0.41l0.74,1.5l0.07,1.53l1.22,2.79l-0.19,0.66l-1.09,0.33l-0.14,0.09l-2.27,2.72l-0.04,0.31l0.35,0.8l-2.22,-1.16l-0.21,-0.02l-1.72,0.44l-1.1,-0.31l-0.21,0.02l-1.3,0.61l-1.11,-1.02l-0.32,-0.05l-0.81,0.35l-1.15,-1.61l-0.21,-0.12l-1.65,-0.17l-0.19,-0.82l-0.23,-0.23l-1.72,-0.37l-0.34,0.17l-0.25,0.56l-0.88,-0.44l0.12,-0.69l-0.25,-0.35l-1.78,-0.27l-1.08,-0.97Z",name:"Poland"},ZM:{path:"M502.81,308.32l1.09,1.04l0.58,1.94l-0.39,0.66l-0.5,2.05l-0.0,0.14l0.45,1.95l-0.69,0.77l-0.06,0.11l-0.76,2.37l0.15,0.36l0.62,0.31l-6.85,1.9l-0.22,0.33l0.2,1.54l-1.62,0.3l-0.12,0.05l-1.43,1.02l-0.11,0.15l-0.25,0.73l-0.73,0.17l-0.14,0.08l-2.18,2.12l-1.33,1.6l-0.65,0.05l-0.83,-0.29l-2.75,-0.28l-0.24,-0.1l-0.15,-0.27l-0.99,-0.58l-0.12,-0.04l-1.73,-0.14l-1.88,0.54l-1.5,-1.48l-1.61,-2.01l0.11,-7.73l4.92,0.03l0.29,-0.37l-0.19,-0.79l0.34,-0.86l0.0,-0.21l-0.41,-1.11l0.26,-1.14l-0.01,-0.16l-0.12,-0.36l0.18,0.01l0.1,0.56l0.31,0.25l1.14,-0.06l1.44,0.21l0.76,1.05l0.19,0.12l2.01,0.35l0.19,-0.03l1.24,-0.65l0.44,1.03l0.22,0.18l1.81,0.34l0.85,0.99l1.02,1.39l0.24,0.12l1.92,0.02l0.3,-0.32l-0.21,-2.74l-0.47,-0.23l-0.53,0.36l-1.58,-0.89l-0.51,-0.34l0.29,-2.36l0.44,-2.99l-0.03,-0.18l-0.5,-0.99l0.61,-1.38l0.53,-0.24l3.26,-0.41l0.89,0.23l1.01,0.62l1.04,0.44l1.6,0.43l1.35,0.72Z",name:"Zambia"},EE:{path:"M482.19,120.88l0.23,-1.68l-0.43,-0.31l-0.75,0.37l-1.34,-1.1l-0.18,-1.75l2.92,-0.95l3.07,-0.53l2.66,0.6l2.48,-0.1l0.18,0.31l-1.65,1.96l-0.06,0.26l0.71,3.25l-0.88,0.94l-1.85,-0.01l-2.08,-1.3l-1.14,-0.47l-0.2,-0.01l-1.69,0.51Z",name:"Estonia"},EG:{path:"M508.07,208.8l-0.66,1.06l-0.53,2.03l-0.64,1.32l-0.32,0.26l-1.74,-1.85l-1.77,-3.86l-0.48,-0.09l-0.26,0.25l-0.07,0.32l1.04,2.88l1.55,2.76l1.89,4.18l0.94,1.48l0.83,1.54l2.08,2.73l-0.3,0.28l-0.1,0.23l0.08,1.72l0.11,0.22l2.91,2.37l-28.78,0.0l0.0,-19.06l-0.73,-2.2l0.61,-1.59l0.0,-0.2l-0.34,-1.04l0.73,-1.08l3.13,-0.04l2.36,0.72l2.48,0.81l1.15,0.43l0.23,-0.01l1.93,-0.87l1.02,-0.78l2.08,-0.21l1.59,0.31l0.62,1.24l0.52,0.03l0.46,-0.71l1.86,0.59l1.95,0.16l0.17,-0.04l0.92,-0.52l1.48,4.24Z",name:"Egypt"},ZA:{path:"M467.06,373.27l-0.13,-0.29l0.01,-1.58l-0.02,-0.12l-0.71,-1.64l0.59,-0.37l0.14,-0.26l-0.07,-2.13l-0.05,-0.15l-1.63,-2.58l-1.25,-2.31l-1.71,-3.37l0.88,-0.98l0.7,0.52l0.39,1.08l0.23,0.19l1.1,0.19l1.55,0.51l0.14,0.01l1.35,-0.2l0.11,-0.04l2.24,-1.39l0.14,-0.25l0.0,-9.4l0.16,0.09l1.39,2.38l-0.22,1.53l0.04,0.19l0.56,0.94l0.3,0.14l1.79,-0.27l0.16,-0.08l1.23,-1.18l1.17,-0.79l0.1,-0.12l0.57,-1.19l1.02,-0.52l0.9,0.28l1.16,0.73l0.14,0.05l2.04,0.13l0.13,-0.02l1.6,-0.62l0.18,-0.19l0.63,-1.93l1.18,-0.19l0.19,-0.12l0.78,-1.05l0.81,-1.71l2.18,-1.91l3.44,-1.88l0.89,0.02l1.17,0.43l0.21,-0.0l0.76,-0.29l1.07,0.21l1.15,3.55l0.63,1.82l-0.44,2.9l0.1,0.52l-0.74,-0.29l-0.18,-0.01l-0.72,0.19l-0.21,0.2l-0.22,0.74l-0.66,0.97l-0.05,0.18l0.02,0.93l0.09,0.21l1.49,1.46l0.27,0.08l1.47,-0.29l0.22,-0.18l0.43,-1.01l1.29,0.02l-0.51,1.63l-0.29,2.2l-0.59,1.12l-2.2,1.78l-1.06,1.39l-0.72,1.44l-1.39,1.93l-2.81,2.84l-1.75,1.65l-1.85,1.24l-2.55,1.06l-1.23,0.14l-0.24,0.18l-0.22,0.54l-1.27,-0.35l-0.2,0.01l-1.15,0.5l-2.62,-0.52l-0.12,0.0l-1.46,0.33l-0.98,-0.14l-0.16,0.02l-2.55,1.1l-2.11,0.44l-1.59,1.07l-0.93,0.06l-0.97,-0.92l-0.19,-0.08l-0.72,-0.04l-1.0,-1.16l-0.25,0.05ZM493.72,359.24l-1.12,-0.86l-0.31,-0.03l-1.23,0.59l-1.36,1.07l-1.39,1.78l0.01,0.38l1.88,2.11l0.31,0.09l0.9,-0.27l0.18,-0.15l0.4,-0.77l1.28,-0.39l0.18,-0.16l0.42,-0.88l0.76,-1.32l-0.05,-0.37l-0.87,-0.82Z",name:"South Africa"},EC:{path:"M220.2,293.48l1.25,-1.76l0.02,-0.31l-0.54,-1.09l-0.5,-0.06l-0.78,0.94l-1.03,-0.75l0.33,-0.46l0.05,-0.23l-0.38,-2.04l0.66,-0.28l0.17,-0.19l0.45,-1.52l0.93,-1.58l0.04,-0.2l-0.13,-0.78l1.19,-0.47l1.57,-0.91l2.35,1.34l0.17,0.04l0.28,-0.02l0.52,0.91l0.21,0.15l2.12,0.35l0.2,-0.03l0.55,-0.31l1.08,0.73l0.97,0.54l0.31,1.67l-0.71,1.49l-2.64,2.54l-2.95,0.97l-0.15,0.11l-1.53,2.18l-0.49,1.68l-1.1,0.8l-0.87,-1.05l-0.15,-0.1l-1.01,-0.27l-0.13,-0.0l-0.7,0.14l-0.03,-0.43l0.6,-0.5l0.1,-0.31l-0.26,-0.91Z",name:"Ecuador"},AL:{path:"M470.27,171.7l0.38,0.19l0.45,-0.18l0.4,0.61l0.11,0.1l0.46,0.24l0.13,0.87l-0.3,0.95l-0.0,0.17l0.36,1.28l0.12,0.17l0.9,0.63l-0.03,0.44l-0.67,0.35l-0.16,0.22l-0.14,0.88l-0.96,1.18l-0.06,-0.03l-0.04,-0.48l-0.12,-0.22l-1.28,-0.92l-0.19,-1.25l0.2,-1.96l0.33,-0.89l-0.06,-0.3l-0.36,-0.41l-0.13,-0.75l0.66,-0.9Z",name:"Albania"},AO:{path:"M461.62,299.93l0.55,1.67l0.73,1.54l1.56,2.18l0.28,0.12l1.66,-0.2l0.81,-0.34l1.28,0.33l0.33,-0.14l0.39,-0.67l0.56,-1.3l1.37,-0.09l0.27,-0.21l0.07,-0.23l0.67,-0.01l-0.13,0.53l0.29,0.37l2.74,-0.02l0.04,1.29l0.03,0.13l0.46,0.87l-0.35,1.52l0.18,1.55l0.07,0.16l0.75,0.85l-0.13,2.89l0.41,0.29l0.56,-0.21l1.11,0.05l1.5,-0.37l0.9,0.12l0.18,0.53l-0.27,1.15l0.01,0.17l0.4,1.08l-0.33,0.85l-0.01,0.18l0.12,0.51l-4.83,-0.03l-0.3,0.3l-0.12,8.13l0.07,0.19l1.69,2.1l1.27,1.25l-4.03,0.92l-5.93,-0.36l-1.66,-1.19l-0.18,-0.06l-10.15,0.11l-0.34,0.13l-1.35,-1.05l-0.17,-0.06l-1.62,-0.08l-1.6,0.45l-0.88,0.36l-0.17,-1.2l0.34,-2.19l0.85,-2.32l0.14,-1.13l0.79,-2.24l0.57,-1.0l1.42,-1.64l0.82,-1.15l0.05,-0.13l0.26,-1.88l-0.13,-1.51l-0.07,-0.16l-0.72,-0.87l-1.23,-2.91l0.09,-0.37l0.73,-0.95l0.05,-0.27l-1.27,-4.12l-1.19,-1.54l0.1,-0.2l0.86,-0.28l0.78,0.03l0.83,-0.29l7.12,0.03ZM451.81,298.94l-0.17,0.07l-0.5,-1.42l0.85,-0.92l0.53,-0.29l0.48,0.44l-0.56,0.32l-0.1,0.1l-0.41,0.65l-0.05,0.14l-0.07,0.91Z",name:"Angola"},KZ:{path:"M598.42,172.08l-1.37,0.54l-3.3,2.09l-0.11,0.12l-1.01,1.97l-0.56,0.01l-0.6,-1.24l-0.26,-0.17l-2.95,-0.09l-0.46,-2.22l-0.29,-0.24l-0.91,-0.02l0.17,-2.72l-0.12,-0.26l-3.0,-2.22l-0.2,-0.06l-4.29,0.24l-2.8,0.42l-2.36,-2.7l-6.4,-3.65l-0.23,-0.03l-6.45,1.83l-0.22,0.29l0.1,10.94l-0.84,0.1l-1.65,-2.21l-0.11,-0.09l-1.69,-0.84l-0.2,-0.02l-2.84,0.63l-0.14,0.07l-0.71,0.64l-0.02,-0.11l0.57,-1.17l0.0,-0.26l-0.48,-1.05l-0.17,-0.16l-2.78,-0.99l-1.08,-2.62l-0.13,-0.15l-1.24,-0.7l-0.04,-0.48l2.07,0.25l0.34,-0.29l0.09,-2.03l1.84,-0.44l2.12,0.45l0.36,-0.25l0.45,-3.04l-0.45,-2.06l-0.31,-0.23l-2.44,0.15l-2.07,-0.75l-0.23,0.01l-2.88,1.38l-2.21,0.62l-0.96,-0.38l0.22,-1.39l-0.06,-0.23l-1.6,-2.12l-0.25,-0.12l-1.72,0.08l-1.87,-1.91l1.33,-2.24l-0.06,-0.38l-0.55,-0.5l1.72,-3.08l2.3,1.7l0.48,-0.2l0.29,-2.26l4.99,-3.48l3.76,-0.08l5.46,2.27l2.96,1.33l0.26,-0.01l2.59,-1.36l3.82,-0.06l3.13,1.67l0.38,-0.09l0.63,-0.85l3.36,0.14l0.29,-0.19l0.63,-1.57l-0.13,-0.37l-3.64,-2.05l2.0,-1.36l0.1,-0.38l-0.32,-0.62l2.09,-0.76l0.13,-0.47l-1.65,-2.13l0.89,-0.91l9.27,-1.18l0.13,-0.05l1.17,-0.82l6.2,-1.27l2.26,-1.43l4.19,0.7l0.74,3.39l0.38,0.22l2.52,-0.81l2.9,1.06l-0.18,1.63l0.32,0.33l2.52,-0.23l5.0,-2.58l0.03,0.39l3.16,2.62l5.57,8.48l0.49,0.02l1.18,-1.53l3.22,1.78l0.21,0.03l3.5,-0.83l1.21,0.52l1.16,1.82l0.15,0.12l1.67,0.61l1.01,1.32l0.28,0.11l3.04,-0.41l1.1,1.64l-1.68,1.89l-1.97,0.28l-0.26,0.29l-0.12,3.09l-1.2,1.23l-4.81,-1.01l-0.35,0.2l-1.77,5.51l-1.14,0.62l-4.92,1.23l-0.2,0.41l2.14,5.06l-1.45,0.67l-0.17,0.31l0.15,1.28l-1.05,-0.3l-1.21,-1.04l-0.17,-0.07l-3.73,-0.32l-4.15,-0.08l-0.92,0.31l-3.46,-1.24l-0.22,0.01l-1.42,0.63l-0.17,0.21l-0.32,1.49l-3.82,-0.97l-0.15,0.0l-1.65,0.43l-0.2,0.17l-0.51,1.21Z",name:"Kazakhstan"},ET:{path:"M516.0,247.63l1.21,0.92l0.3,0.04l1.3,-0.53l0.46,0.41l0.19,0.08l1.65,0.03l2.05,0.96l0.67,0.88l1.07,0.79l1.0,1.45l0.7,0.68l-0.72,0.92l-0.85,1.19l-0.04,0.25l0.19,0.67l0.04,0.74l0.29,0.28l1.4,0.04l0.55,-0.15l0.23,0.19l-0.41,0.67l0.01,0.32l0.92,1.39l0.93,1.23l0.99,0.94l0.1,0.06l8.19,2.99l1.51,0.01l-6.51,6.95l-3.14,0.11l-0.18,0.06l-2.15,1.71l-1.51,0.04l-0.22,0.1l-0.6,0.69l-1.46,-0.0l-0.93,-0.78l-0.32,-0.04l-2.29,1.05l-0.12,0.1l-0.64,0.9l-1.44,-0.17l-0.51,-0.26l-0.17,-0.03l-0.56,0.07l-0.68,-0.02l-3.1,-2.08l-0.17,-0.05l-1.62,0.0l-0.68,-0.65l0.0,-1.28l-0.21,-0.29l-1.19,-0.38l-1.42,-2.63l-0.13,-0.12l-1.05,-0.53l-0.46,-1.0l-1.27,-1.23l-0.17,-0.08l-1.08,-0.13l0.53,-0.9l1.17,-0.05l0.26,-0.17l0.37,-0.77l0.03,-0.14l-0.03,-2.23l0.7,-2.49l1.08,-0.65l0.14,-0.19l0.24,-1.0l1.03,-1.85l1.47,-1.22l0.09,-0.12l1.02,-2.51l0.36,-1.96l2.62,0.48l0.33,-0.18l0.63,-1.55Z",name:"Ethiopia"},ZW:{path:"M498.95,341.2l-1.16,-0.23l-0.16,0.01l-0.74,0.28l-1.11,-0.41l-1.02,-0.04l-1.52,-1.13l-0.12,-0.05l-1.79,-0.37l-0.65,-1.46l-0.01,-0.86l-0.22,-0.29l-0.99,-0.26l-2.74,-2.77l-0.77,-1.46l-0.52,-0.5l-0.72,-1.54l2.24,0.23l0.78,0.28l0.12,0.02l0.85,-0.06l0.21,-0.11l1.38,-1.66l2.11,-2.05l0.81,-0.18l0.22,-0.2l0.27,-0.8l1.29,-0.93l1.53,-0.28l0.11,0.66l0.3,0.25l2.02,-0.05l1.04,0.48l0.5,0.59l0.18,0.1l1.13,0.18l1.11,0.7l0.01,3.06l-0.49,1.82l-0.11,1.94l0.03,0.16l0.35,0.68l-0.24,1.3l-0.27,0.17l-0.12,0.15l-0.64,1.83l-2.49,2.8Z",name:"Zimbabwe"},ES:{path:"M398.67,172.8l0.09,-1.45l-0.06,-0.2l-0.82,-1.05l3.16,-1.96l3.01,0.54l3.33,-0.02l2.64,0.52l2.14,-0.15l3.9,0.1l0.91,1.08l0.14,0.09l4.61,1.38l0.26,-0.04l0.77,-0.55l2.66,1.29l0.17,0.03l2.59,-0.35l0.1,1.28l-2.2,1.85l-3.13,0.62l-0.23,0.23l-0.21,0.92l-1.54,1.68l-0.97,2.4l0.02,0.26l0.85,1.46l-1.27,1.14l-0.09,0.14l-0.5,1.73l-1.73,0.53l-0.15,0.1l-1.68,2.1l-3.03,0.04l-2.38,-0.05l-0.17,0.05l-1.57,1.01l-0.9,1.01l-0.96,-0.19l-0.82,-0.86l-0.69,-1.6l-0.22,-0.18l-2.14,-0.41l-0.13,-0.62l0.83,-0.97l0.39,-0.86l-0.06,-0.33l-0.73,-0.73l0.63,-1.74l-0.02,-0.25l-0.8,-1.41l0.69,-0.15l0.23,-0.27l0.09,-1.29l0.33,-0.36l0.08,-0.2l0.03,-2.16l1.03,-0.72l0.1,-0.37l-0.7,-1.5l-0.25,-0.17l-1.46,-0.11l-0.22,0.07l-0.34,0.3l-1.17,0.0l-0.55,-1.29l-0.39,-0.16l-1.02,0.44l-0.45,0.36Z",name:"Spain"},ER:{path:"M527.15,253.05l-0.77,-0.74l-1.01,-1.47l-1.14,-0.86l-0.62,-0.84l-0.11,-0.09l-2.18,-1.02l-0.12,-0.03l-1.61,-0.03l-0.52,-0.46l-0.31,-0.05l-1.31,0.54l-1.38,-1.06l-0.46,0.12l-0.69,1.68l-2.49,-0.46l-0.2,-0.76l1.06,-3.69l0.24,-1.65l0.66,-0.66l1.76,-0.4l0.16,-0.1l0.97,-1.13l1.24,2.55l0.68,2.34l0.09,0.14l1.4,1.27l3.39,2.4l1.37,1.43l2.14,2.34l0.94,0.6l-0.32,0.26l-0.85,-0.17Z",name:"Eritrea"},ME:{path:"M469.05,172.9l-0.57,-0.8l-0.1,-0.09l-0.82,-0.46l0.16,-0.33l0.35,-1.57l0.72,-0.62l0.27,-0.16l0.48,0.38l0.35,0.4l0.12,0.08l0.79,0.32l0.66,0.43l-0.43,0.62l-0.28,0.11l-0.07,-0.25l-0.53,-0.1l-1.09,1.49l-0.05,0.23l0.06,0.32Z",name:"Montenegro"},MD:{path:"M488.2,153.75l0.14,-0.11l1.49,-0.28l1.75,0.95l1.06,0.14l0.92,0.7l-0.15,0.9l0.15,0.31l0.8,0.46l0.33,1.2l0.09,0.14l0.72,0.66l-0.11,0.28l0.1,0.33l-0.06,0.02l-1.25,-0.08l-0.17,-0.29l-0.39,-0.12l-0.52,0.25l-0.16,0.36l0.13,0.42l-0.6,0.88l-0.43,1.03l-0.22,0.12l-0.32,-1.0l0.25,-1.34l-0.08,-1.38l-0.06,-0.17l-1.43,-1.87l-0.81,-1.36l-0.78,-0.95l-0.12,-0.09l-0.29,-0.12Z",name:"Moldova"},MG:{path:"M544.77,316.45l0.64,1.04l0.6,1.62l0.4,3.04l0.63,1.21l-0.22,1.07l-0.15,0.26l-0.59,-1.05l-0.52,-0.01l-0.47,0.76l-0.04,0.23l0.46,1.84l-0.19,0.92l-0.61,0.53l-0.1,0.21l-0.16,2.15l-0.97,2.98l-1.24,3.59l-1.55,4.97l-0.96,3.67l-1.08,2.93l-1.94,0.61l-2.05,1.06l-3.2,-1.53l-0.62,-1.26l-0.18,-2.39l-0.87,-2.07l-0.22,-1.8l0.4,-1.69l1.01,-0.4l0.19,-0.28l0.01,-0.79l1.15,-1.91l0.04,-0.11l0.23,-1.66l-0.03,-0.17l-0.57,-1.21l-0.46,-1.58l-0.19,-2.25l0.82,-1.36l0.33,-1.51l1.11,-0.1l1.4,-0.53l0.9,-0.45l1.03,-0.03l0.21,-0.09l1.41,-1.45l2.12,-1.65l0.75,-1.29l0.03,-0.24l-0.17,-0.56l0.53,0.15l0.32,-0.1l1.38,-1.77l0.06,-0.18l0.04,-1.44l0.54,-0.74l0.62,0.77Z",name:"Madagascar"},MA:{path:"M378.66,230.13l0.07,-0.75l0.93,-0.72l0.82,-1.37l0.04,-0.21l-0.14,-0.8l0.8,-1.74l1.33,-1.61l0.79,-0.4l0.14,-0.15l0.66,-1.55l0.08,-1.46l0.83,-1.52l1.6,-0.94l0.11,-0.11l1.56,-2.71l1.2,-0.99l2.24,-0.29l0.17,-0.08l1.95,-1.83l1.3,-0.77l2.09,-2.28l0.07,-0.26l-0.61,-3.34l0.92,-2.3l0.33,-1.44l1.52,-1.79l2.48,-1.27l1.86,-1.16l0.1,-0.11l1.67,-2.93l0.72,-1.59l1.54,0.01l1.43,1.14l0.21,0.06l2.33,-0.19l2.55,0.62l0.97,0.03l0.83,1.6l0.15,1.71l0.86,2.96l0.09,0.14l0.5,0.45l-0.31,0.73l-3.11,0.44l-0.16,0.07l-1.07,0.97l-1.36,0.23l-0.25,0.28l-0.1,1.85l-2.74,1.02l-0.14,0.11l-0.9,1.3l-1.93,0.69l-2.56,0.44l-4.04,2.01l-0.17,0.27l0.02,2.91l-0.08,0.0l-0.3,0.31l0.05,1.15l-1.25,0.07l-0.16,0.06l-0.73,0.55l-0.98,0.0l-0.85,-0.33l-0.15,-0.02l-2.11,0.29l-0.24,0.19l-0.76,1.95l-0.63,0.16l-0.21,0.19l-1.15,3.29l-3.42,2.81l-0.1,0.17l-0.81,3.57l-0.98,1.12l-0.3,0.85l-5.13,0.19Z",name:"Morocco"},UZ:{path:"M587.83,186.48l0.06,-1.46l-0.19,-0.29l-3.31,-1.24l-2.57,-1.4l-1.63,-1.38l-2.79,-1.98l-1.2,-2.98l-0.12,-0.14l-0.84,-0.54l-0.18,-0.05l-2.61,0.13l-0.76,-0.48l-0.25,-2.25l-0.17,-0.24l-3.37,-1.6l-0.32,0.04l-2.08,1.73l-2.11,1.02l-0.16,0.35l0.31,1.14l-2.14,0.03l-0.09,-10.68l6.1,-1.74l6.25,3.57l2.36,2.72l0.27,0.1l2.92,-0.44l4.17,-0.23l2.78,2.06l-0.18,2.87l0.29,0.32l0.98,0.02l0.46,2.22l0.28,0.24l3.0,0.09l0.61,1.25l0.28,0.17l0.93,-0.02l0.26,-0.16l1.06,-2.06l3.21,-2.03l1.3,-0.5l0.19,0.08l-1.75,1.62l0.05,0.48l1.85,1.12l0.27,0.02l1.65,-0.69l2.4,1.27l-2.69,1.79l-1.79,-0.27l-0.89,0.06l-0.22,-0.52l0.48,-1.26l-0.34,-0.4l-3.35,0.69l-0.22,0.18l-0.78,1.87l-1.07,1.47l-1.93,-0.13l-0.29,0.16l-0.65,1.29l0.16,0.42l1.69,0.64l0.48,1.91l-1.25,2.6l-1.64,-0.53l-1.18,-0.03Z",name:"Uzbekistan"},MM:{path:"M670.1,233.39l-1.46,1.11l-1.68,0.11l-0.26,0.19l-1.1,2.7l-0.95,0.42l-0.14,0.42l1.21,2.27l1.61,1.92l0.94,1.55l-0.82,1.99l-0.77,0.42l-0.13,0.39l0.64,1.35l1.62,1.97l0.26,1.32l-0.04,1.15l0.02,0.13l0.92,2.18l-1.3,2.23l-0.79,1.69l-0.1,-0.77l0.74,-1.87l-0.02,-0.26l-0.8,-1.42l0.2,-2.68l-0.06,-0.2l-0.98,-1.27l-0.8,-2.98l-0.45,-3.22l-1.11,-2.22l-0.45,-0.1l-1.64,1.28l-2.74,1.76l-1.26,-0.2l-1.27,-0.49l0.79,-2.93l0.0,-0.14l-0.52,-2.42l-1.93,-2.97l0.26,-0.8l-0.22,-0.39l-1.37,-0.31l-1.65,-1.98l-0.12,-1.5l0.41,0.19l0.42,-0.26l0.05,-1.7l1.08,-0.54l0.16,-0.34l-0.24,-1.0l0.5,-0.79l0.05,-0.15l0.08,-2.35l1.58,0.49l0.36,-0.15l1.12,-2.19l0.15,-1.34l1.35,-2.18l0.04,-0.17l-0.07,-1.35l2.97,-1.71l1.67,0.45l0.38,-0.33l-0.18,-1.46l0.7,-0.4l0.15,-0.32l-0.13,-0.72l0.94,-0.13l0.74,1.41l0.11,0.12l0.95,0.56l0.07,1.89l-0.09,2.08l-2.28,2.15l-0.09,0.19l-0.3,3.15l0.35,0.32l2.37,-0.39l0.53,2.17l0.2,0.21l1.3,0.42l-0.63,1.9l0.14,0.36l1.86,0.99l1.1,0.49l0.24,0.0l1.45,-0.6l0.04,0.51l-2.01,1.6l-0.56,0.96l-1.34,0.56Z",name:"Myanmar"},ML:{path:"M390.79,248.2l0.67,-0.37l0.14,-0.18l0.36,-1.31l0.51,-0.04l1.68,0.69l0.21,0.0l1.34,-0.48l0.89,0.16l0.3,-0.13l0.29,-0.44l9.89,-0.04l0.29,-0.21l0.56,-1.8l-0.11,-0.33l-0.33,-0.24l-2.37,-22.1l3.41,-0.04l8.37,5.73l8.38,5.68l0.56,1.15l0.14,0.14l1.56,0.75l0.99,0.36l0.03,1.45l0.33,0.29l2.45,-0.22l0.01,5.52l-1.3,1.64l-0.06,0.15l-0.18,1.37l-1.99,0.36l-3.4,0.22l-0.19,0.09l-0.85,0.83l-1.48,0.09l-1.49,0.01l-0.54,-0.43l-0.26,-0.05l-1.38,0.36l-2.39,1.08l-0.13,0.12l-0.44,0.73l-1.88,1.11l-0.11,0.12l-0.3,0.57l-0.86,0.42l-1.1,-0.31l-0.28,0.07l-0.69,0.62l-0.09,0.16l-0.35,1.66l-1.93,2.04l-0.08,0.23l0.05,0.76l-0.63,0.99l-0.04,0.19l0.14,1.23l-0.81,0.29l-0.32,0.17l-0.27,-0.75l-0.39,-0.18l-0.65,0.26l-0.36,-0.04l-0.29,0.14l-0.37,0.6l-1.69,-0.02l-0.63,-0.34l-0.32,0.02l-0.12,0.09l-0.47,-0.45l0.1,-0.6l-0.09,-0.27l-0.31,-0.3l-0.33,-0.05l-0.05,0.02l0.02,-0.21l0.46,-0.59l-0.02,-0.39l-0.99,-1.02l-0.34,-0.74l-0.56,-0.56l-0.17,-0.09l-0.5,-0.07l-0.19,0.04l-0.58,0.35l-0.79,0.33l-0.65,0.51l-0.85,-0.16l-0.63,-0.59l-0.14,-0.07l-0.41,-0.08l-0.2,0.03l-0.59,0.31l-0.07,0.0l-0.1,-0.63l0.11,-0.85l-0.21,-0.98l-0.11,-0.17l-0.86,-0.66l-0.45,-1.34l-0.1,-1.36Z",name:"Mali"},MN:{path:"M641.06,150.59l2.41,-0.53l4.76,-2.8l3.67,-1.49l2.06,0.96l0.12,0.03l2.5,0.05l1.59,1.45l0.19,0.08l2.47,0.12l3.59,0.81l0.27,-0.07l2.43,-2.28l0.06,-0.36l-0.93,-1.77l2.33,-3.1l2.66,1.3l2.26,0.39l2.75,0.8l0.44,2.3l0.19,0.22l3.56,1.38l0.18,0.01l2.35,-0.6l3.1,-0.42l2.4,0.41l2.37,1.52l1.49,1.63l0.23,0.1l2.29,-0.03l3.13,0.52l0.15,-0.01l2.28,-0.79l3.27,-0.53l0.11,-0.04l3.56,-2.23l1.31,0.31l1.26,1.05l0.22,0.07l2.45,-0.22l-0.98,1.96l-1.77,3.21l-0.01,0.28l0.64,1.31l0.35,0.16l1.35,-0.38l2.4,0.48l0.22,-0.04l1.78,-1.09l1.82,0.92l2.11,2.07l-0.17,0.68l-1.79,-0.31l-3.74,0.45l-1.85,0.96l-1.78,2.01l-3.74,1.18l-2.46,1.61l-2.45,-0.6l-1.42,-0.28l-0.31,0.13l-1.31,1.99l0.0,0.33l0.78,1.15l0.3,0.74l-1.58,0.93l-1.75,1.59l-2.83,1.03l-3.77,0.12l-4.05,1.05l-2.81,1.54l-0.95,-0.8l-0.19,-0.07l-2.96,0.0l-3.64,-1.8l-2.55,-0.48l-3.38,0.41l-5.13,-0.67l-2.66,0.06l-1.35,-1.65l-1.12,-2.78l-0.21,-0.18l-1.5,-0.33l-2.98,-1.89l-0.12,-0.04l-3.37,-0.43l-2.84,-0.51l-0.75,-1.13l0.93,-3.54l-0.04,-0.24l-1.73,-2.55l-0.15,-0.12l-3.52,-1.18l-1.99,-1.61l-0.54,-1.85Z",name:"Mongolia"},MK:{path:"M472.73,173.87l0.08,0.01l0.32,-0.25l0.08,-0.44l1.29,-0.41l1.37,-0.28l1.03,-0.04l1.06,0.82l0.14,1.59l-0.22,0.04l-0.17,0.11l-0.32,0.4l-1.2,-0.05l-0.18,0.05l-0.9,0.61l-1.45,0.23l-0.85,-0.59l-0.3,-1.09l0.22,-0.71Z",name:"Macedonia"},MW:{path:"M507.18,313.84l-0.67,1.85l-0.01,0.16l0.7,3.31l0.31,0.24l0.75,-0.03l0.78,0.71l0.99,1.75l0.2,3.03l-0.91,0.45l-0.14,0.15l-0.59,1.38l-1.24,-1.21l-0.17,-1.62l0.49,-1.12l0.02,-0.16l-0.15,-1.03l-0.13,-0.21l-0.99,-0.65l-0.26,-0.03l-0.53,0.18l-1.31,-1.12l-1.15,-0.59l0.66,-2.06l0.75,-0.84l0.07,-0.27l-0.47,-2.04l0.48,-1.94l0.4,-0.65l0.03,-0.24l-0.64,-2.15l-0.08,-0.13l-0.44,-0.42l1.34,0.26l1.25,1.73l0.67,3.3Z",name:"Malawi"},MR:{path:"M390.54,247.66l-1.48,-1.58l-1.51,-1.88l-0.12,-0.09l-1.64,-0.67l-1.17,-0.74l-0.17,-0.05l-1.4,0.03l-0.12,0.03l-1.14,0.52l-1.15,-0.21l-0.26,0.08l-0.44,0.43l-0.11,-0.72l0.68,-1.29l0.31,-2.43l-0.28,-2.63l-0.29,-1.27l0.24,-1.24l-0.03,-0.2l-0.65,-1.24l-1.19,-1.05l0.32,-0.51l9.64,0.02l0.3,-0.34l-0.46,-3.71l0.51,-1.12l2.17,-0.22l0.27,-0.3l-0.08,-6.5l7.91,0.13l0.31,-0.3l0.01,-3.5l8.17,5.63l-2.89,0.04l-0.29,0.33l2.42,22.56l0.12,0.21l0.26,0.19l-0.43,1.38l-9.83,0.04l-0.25,0.13l-0.27,0.41l-0.77,-0.14l-0.15,0.01l-1.3,0.47l-1.64,-0.67l-0.14,-0.02l-0.79,0.06l-0.27,0.22l-0.39,1.39l-0.53,0.29Z",name:"Mauritania"},UG:{path:"M500.74,287.17l-2.84,-0.02l-0.92,0.32l-1.37,0.71l-0.29,-0.12l0.02,-1.6l0.54,-0.89l0.04,-0.13l0.14,-1.96l0.49,-1.09l0.91,-1.24l0.97,-0.68l0.8,-0.89l-0.13,-0.49l-0.79,-0.27l0.13,-2.55l0.78,-0.52l1.45,0.51l0.18,0.01l1.97,-0.57l1.72,0.01l0.18,-0.06l1.29,-0.97l0.98,1.44l0.29,1.24l1.05,2.75l-0.84,1.68l-1.94,2.66l-0.06,0.18l0.02,2.36l-4.8,0.18Z",name:"Uganda"},MY:{path:"M717.6,273.52l-1.51,0.7l-2.13,-0.41l-2.88,-0.0l-0.29,0.21l-0.84,2.77l-0.9,0.82l-0.08,0.12l-1.23,3.34l-1.81,0.47l-2.29,-0.68l-0.14,-0.01l-1.2,0.22l-0.14,0.07l-1.36,1.18l-1.47,-0.17l-0.12,0.01l-1.46,0.46l-1.51,-1.25l-0.24,-0.97l1.26,0.59l0.2,0.02l1.93,-0.47l0.22,-0.22l0.47,-1.98l0.9,-0.4l2.97,-0.54l0.17,-0.09l1.8,-1.98l1.02,-1.32l0.9,1.03l0.48,-0.04l0.43,-0.7l1.02,0.07l0.32,-0.27l0.25,-2.72l1.84,-1.67l1.23,-1.89l0.73,-0.01l1.12,1.11l0.1,0.99l0.18,0.24l1.66,0.71l1.85,0.67l-0.09,0.51l-1.45,0.11l-0.26,0.4l0.35,0.97ZM673.78,269.53l0.17,1.14l0.35,0.25l1.65,-0.3l0.18,-0.11l0.68,-0.86l0.31,0.13l1.41,1.45l0.99,1.59l0.13,1.57l-0.26,1.09l0.0,0.15l0.24,0.84l0.18,1.46l0.11,0.2l0.82,0.64l0.92,2.08l-0.03,0.52l-1.4,0.13l-2.29,-1.79l-2.86,-1.92l-0.27,-1.16l-0.07,-0.13l-1.39,-1.61l-0.33,-1.99l-0.05,-0.12l-0.84,-1.27l0.26,-1.72l-0.03,-0.18l-0.45,-0.87l0.13,-0.13l1.71,0.92Z",name:"Malaysia"},MX:{path:"M133.41,213.83l0.61,0.09l0.27,-0.09l0.93,-1.01l0.08,-0.18l0.09,-1.22l-0.09,-0.23l-1.93,-1.94l-1.46,-0.77l-2.96,-5.62l-0.86,-2.1l2.44,-0.18l2.68,-0.25l-0.03,0.08l0.17,0.4l3.79,1.35l5.81,1.97l6.96,-0.02l0.3,-0.3l0.0,-0.84l3.91,0.0l0.87,0.93l1.27,0.87l1.44,1.17l0.79,1.37l0.62,1.49l0.12,0.14l1.35,0.85l2.08,0.82l0.35,-0.1l1.49,-2.04l1.81,-0.05l1.63,1.01l1.21,1.8l0.86,1.58l1.47,1.55l0.53,1.82l0.73,1.32l0.14,0.13l1.98,0.84l1.78,0.59l0.61,-0.03l-0.78,1.89l-0.45,1.96l-0.19,3.58l-0.24,1.27l0.01,0.14l0.43,1.43l0.78,1.31l0.49,1.98l0.06,0.12l1.63,1.9l0.61,1.51l0.98,1.28l0.16,0.11l2.58,0.67l0.98,1.02l0.31,0.08l2.17,-0.71l1.91,-0.26l1.87,-0.47l1.67,-0.49l1.59,-1.06l0.11,-0.14l0.6,-1.52l0.22,-2.21l0.35,-0.62l1.58,-0.64l2.59,-0.59l2.18,0.09l1.43,-0.2l0.39,0.36l-0.07,1.02l-1.28,1.48l-0.65,1.68l0.07,0.32l0.33,0.32l-0.79,2.49l-0.28,-0.3l-0.24,-0.09l-1.0,0.08l-0.24,0.15l-0.74,1.28l-0.19,-0.13l-0.28,-0.03l-0.3,0.12l-0.19,0.29l0.0,0.06l-4.34,-0.02l-0.3,0.3l-0.0,1.16l-0.83,0.0l-0.28,0.19l0.08,0.33l0.93,0.86l0.9,0.58l0.24,0.48l0.16,0.15l0.2,0.08l-0.03,0.38l-2.94,0.01l-0.26,0.15l-1.21,2.09l0.02,0.33l0.25,0.33l-0.21,0.44l-0.04,0.22l-2.42,-2.35l-1.36,-0.87l-2.04,-0.67l-0.13,-0.01l-1.4,0.19l-2.07,0.98l-1.14,0.23l-1.72,-0.66l-1.85,-0.48l-2.31,-1.16l-1.92,-0.38l-2.79,-1.18l-2.04,-1.2l-0.6,-0.66l-0.19,-0.1l-1.37,-0.15l-2.45,-0.78l-1.07,-1.18l-2.63,-1.44l-1.2,-1.56l-0.44,-0.93l0.5,-0.15l0.2,-0.39l-0.2,-0.58l0.46,-0.55l0.07,-0.19l0.01,-0.91l-0.06,-0.18l-0.81,-1.13l-0.25,-1.08l-0.86,-1.36l-2.21,-2.63l-2.53,-2.09l-1.2,-1.63l-0.11,-0.09l-2.08,-1.06l-0.34,-0.48l0.35,-1.53l-0.16,-0.34l-1.24,-0.61l-1.39,-1.23l-0.6,-1.81l-0.24,-0.2l-1.25,-0.2l-1.38,-1.35l-1.11,-1.25l-0.1,-0.76l-0.05,-0.13l-1.33,-2.04l-0.85,-2.02l0.04,-0.99l-0.14,-0.27l-1.81,-1.1l-0.2,-0.04l-0.74,0.11l-1.34,-0.72l-0.42,0.16l-0.4,1.12l-0.0,0.19l0.41,1.3l0.24,2.04l0.06,0.15l0.88,1.16l1.84,1.86l0.4,0.61l0.12,0.1l0.27,0.14l0.29,0.82l0.31,0.2l0.2,-0.02l0.43,1.51l0.09,0.14l0.72,0.65l0.51,0.91l1.58,1.4l0.8,2.42l0.77,1.23l0.66,1.19l0.13,1.34l0.28,0.27l1.08,0.08l0.92,1.1l0.83,1.08l-0.03,0.24l-0.88,0.81l-0.13,-0.0l-0.59,-1.42l-0.07,-0.11l-1.67,-1.53l-1.81,-1.28l-1.15,-0.61l0.07,-1.85l-0.38,-1.45l-0.12,-0.17l-2.91,-2.03l-0.39,0.04l-0.11,0.11l-0.42,-0.46l-0.11,-0.08l-1.49,-0.63l-1.09,-1.16Z",name:"Mexico"},VU:{path:"M839.92,325.66l0.78,0.73l-0.18,0.07l-0.6,-0.8ZM839.13,322.74l0.27,1.36l-0.13,-0.06l-0.21,-0.02l-0.29,0.08l-0.22,-0.43l-0.03,-1.32l0.61,0.4Z",name:"Vanuatu"},FR:{path:"M444.58,172.63l-0.68,1.92l-0.72,-0.38l-0.51,-1.79l0.43,-0.95l1.15,-0.83l0.33,2.04ZM429.71,147.03l1.77,1.57l0.26,0.07l1.16,-0.23l2.12,1.44l0.56,0.28l0.16,0.03l0.61,-0.06l1.09,0.78l0.13,0.05l3.18,0.53l-1.09,1.94l-0.3,2.16l-0.48,0.38l-1.0,-0.26l-0.37,0.32l0.07,0.66l-1.73,1.68l-0.09,0.21l-0.04,1.42l0.41,0.29l0.96,-0.4l0.67,1.07l-0.09,0.78l0.04,0.19l0.61,0.97l-0.71,0.78l-0.07,0.28l0.65,2.39l0.21,0.21l1.09,0.31l-0.2,0.95l-2.08,1.58l-4.81,-0.8l-0.13,0.01l-3.65,0.99l-0.22,0.24l-0.25,1.6l-2.59,0.35l-2.74,-1.33l-0.31,0.03l-0.79,0.57l-4.38,-1.31l-0.79,-0.94l1.16,-1.64l0.05,-0.15l0.48,-6.17l-0.06,-0.21l-2.58,-3.3l-1.89,-1.65l-0.11,-0.06l-3.64,-1.17l-0.2,-1.88l2.92,-0.63l4.14,0.82l0.35,-0.36l-0.65,-3.0l1.77,1.05l0.27,0.02l5.83,-2.54l0.17,-0.19l0.71,-2.54l1.75,-0.53l0.27,0.88l0.27,0.21l1.04,0.05l1.08,1.23ZM289.1,278.45l-0.85,0.84l-0.88,0.13l-0.25,-0.51l-0.21,-0.16l-0.56,-0.1l-0.25,0.07l-0.63,0.55l-0.62,-0.29l0.5,-0.88l0.21,-1.11l0.42,-1.05l-0.03,-0.28l-0.93,-1.42l-0.18,-1.54l1.13,-1.87l2.42,0.78l2.55,2.04l0.33,0.81l-1.4,2.16l-0.77,1.84Z",name:"France"},FI:{path:"M492.26,76.42l-0.38,3.12l0.12,0.28l3.6,2.69l-2.14,2.96l-0.01,0.33l2.83,4.61l-1.61,3.36l0.03,0.31l2.15,2.87l-0.96,2.44l0.1,0.35l3.51,2.55l-0.81,1.72l-2.28,2.19l-5.28,4.79l-4.51,0.31l-4.39,1.37l-3.87,0.75l-1.34,-1.89l-0.11,-0.09l-2.23,-1.14l0.53,-3.54l-0.01,-0.14l-1.17,-3.37l1.12,-2.13l2.23,-2.44l5.69,-4.33l1.65,-0.84l0.16,-0.31l-0.26,-1.73l-0.15,-0.22l-3.4,-1.91l-0.77,-1.47l-0.07,-6.45l-0.12,-0.24l-3.91,-2.94l-3.0,-1.92l0.97,-0.76l2.6,2.17l0.21,0.07l3.2,-0.21l2.63,1.03l0.3,-0.05l2.39,-1.94l0.09,-0.13l1.18,-3.12l3.63,-1.42l2.87,1.59l-0.98,2.87Z",name:"Finland"},FJ:{path:"M869.98,327.07l-1.31,0.44l-0.14,-0.41l0.96,-0.41l0.85,-0.17l1.43,-0.78l-0.16,0.65l-1.64,0.67ZM867.58,329.12l0.54,0.47l-0.31,1.0l-1.32,0.3l-1.13,-0.26l-0.17,-0.78l0.72,-0.66l0.98,0.27l0.25,-0.04l0.43,-0.29Z",name:"Fiji"},FK:{path:"M268.15,427.89l2.6,-1.73l1.98,0.77l0.31,-0.05l1.32,-1.17l1.58,1.18l-0.54,0.84l-3.1,0.92l-1.0,-1.04l-0.39,-0.04l-1.9,1.35l-0.86,-1.04Z",name:"Falkland Islands"},NI:{path:"M202.1,252.6l0.23,-0.0l0.12,-0.11l0.68,-0.09l0.22,-0.15l0.23,-0.43l0.2,-0.01l0.28,-0.31l-0.04,-0.97l0.29,-0.03l0.5,0.02l0.25,-0.11l0.37,-0.46l0.51,0.35l0.4,-0.06l0.23,-0.28l0.45,-0.29l0.87,-0.7l0.11,-0.21l0.02,-0.26l0.23,-0.12l0.25,-0.48l0.29,0.27l0.14,0.07l0.5,0.12l0.22,-0.03l0.48,-0.28l0.66,-0.02l0.87,-0.33l0.36,-0.32l0.21,0.01l-0.11,0.48l0.0,0.14l0.22,0.8l-0.54,0.85l-0.27,1.03l-0.09,1.18l0.14,0.72l0.05,0.95l-0.24,0.15l-0.13,0.19l-0.23,1.09l0.0,0.14l0.14,0.53l-0.42,0.53l-0.06,0.24l0.12,0.69l0.08,0.15l0.18,0.19l-0.26,0.23l-0.49,-0.11l-0.35,-0.44l-0.16,-0.1l-0.79,-0.21l-0.23,0.03l-0.45,0.26l-1.51,-0.62l-0.31,0.05l-0.17,0.15l-1.81,-1.62l-0.6,-0.9l-1.04,-0.79l-0.77,-0.71Z",name:"Nicaragua"},NL:{path:"M436.22,136.65l1.82,0.08l0.36,0.89l-0.6,2.96l-0.53,1.06l-1.32,0.0l-0.3,0.34l0.35,2.89l-0.83,-0.47l-1.56,-1.43l-0.29,-0.07l-2.26,0.67l-1.02,-0.15l0.68,-0.48l0.1,-0.12l2.14,-4.84l3.25,-1.35Z",name:"Netherlands"},NO:{path:"M491.45,67.31l7.06,3.0l-2.52,0.94l-0.11,0.49l2.43,2.49l-3.82,1.59l-1.48,0.3l0.89,-2.61l-0.14,-0.36l-3.21,-1.78l-0.25,-0.02l-3.89,1.52l-0.17,0.17l-1.2,3.17l-2.19,1.78l-2.53,-0.99l-0.13,-0.02l-3.15,0.21l-2.69,-2.25l-0.38,-0.01l-1.43,1.11l-1.47,0.17l-0.26,0.26l-0.33,2.57l-4.42,-0.65l-0.33,0.22l-0.6,2.19l-2.17,-0.01l-0.27,0.16l-4.15,7.68l-3.88,5.76l-0.0,0.33l0.81,1.23l-0.7,1.27l-2.3,-0.06l-0.28,0.18l-1.63,3.72l-0.02,0.13l0.15,5.17l0.07,0.18l1.51,1.84l-0.79,4.24l-2.04,2.5l-0.92,1.75l-1.39,-1.88l-0.44,-0.05l-4.89,4.21l-3.16,0.81l-3.24,-1.74l-0.86,-3.82l-0.78,-8.6l2.18,-2.36l6.56,-3.28l5.0,-4.16l4.63,-5.74l5.99,-8.09l4.17,-3.23l6.84,-5.49l5.39,-1.92l4.06,0.24l0.23,-0.09l3.72,-3.67l4.51,0.19l4.4,-0.89ZM484.58,19.95l4.42,1.82l-3.25,2.68l-7.14,0.65l-7.16,-0.91l-0.39,-1.37l-0.28,-0.22l-3.48,-0.1l-2.25,-2.15l7.09,-1.48l3.55,1.36l0.28,-0.03l2.42,-1.66l6.18,1.41ZM481.99,33.92l-4.73,1.85l-3.76,-1.06l1.27,-1.02l0.04,-0.43l-1.18,-1.35l4.46,-0.94l0.89,1.83l0.17,0.15l2.83,0.96ZM466.5,23.95l7.64,3.87l-5.63,1.94l-0.19,0.19l-1.35,3.88l-2.08,0.96l-0.16,0.19l-1.14,4.18l-2.71,0.18l-4.94,-2.95l1.95,-1.63l-0.08,-0.51l-3.7,-1.54l-4.79,-4.54l-1.78,-4.01l6.29,-1.88l1.25,1.81l0.25,0.13l3.57,-0.08l0.26,-0.17l0.87,-1.79l3.41,-0.18l3.08,1.94Z",name:"Norway"},NA:{path:"M461.88,357.98l-1.61,-1.77l-0.94,-1.9l-0.54,-2.58l-0.62,-1.95l-0.83,-4.05l-0.06,-3.13l-0.33,-1.5l-0.07,-0.14l-0.95,-1.06l-1.27,-2.12l-1.3,-3.1l-0.59,-1.71l-1.98,-2.46l-0.13,-1.67l0.99,-0.4l1.44,-0.42l1.48,0.07l1.42,1.11l0.31,0.03l0.32,-0.15l9.99,-0.11l1.66,1.18l0.16,0.06l6.06,0.37l4.69,-1.06l2.01,-0.57l1.5,0.14l0.63,0.37l-1.0,0.41l-0.7,0.01l-0.16,0.05l-1.38,0.88l-0.79,-0.88l-0.29,-0.09l-3.83,0.9l-1.84,0.08l-0.29,0.3l-0.07,8.99l-2.18,0.08l-0.29,0.3l-0.0,17.47l-2.04,1.27l-1.21,0.18l-1.51,-0.49l-0.99,-0.18l-0.36,-1.0l-0.1,-0.14l-0.99,-0.74l-0.4,0.04l-0.98,1.09Z",name:"Namibia"},NC:{path:"M835.87,338.68l2.06,1.63l1.01,0.94l-0.49,0.32l-1.21,-0.62l-1.76,-1.16l-1.58,-1.36l-1.61,-1.79l-0.16,-0.41l0.54,0.02l1.32,0.83l1.08,0.87l0.79,0.73Z",name:"New Caledonia"},NE:{path:"M426.67,254.17l0.03,-1.04l-0.24,-0.3l-2.66,-0.53l-0.06,-1.0l-0.07,-0.17l-1.37,-1.62l-0.3,-1.04l0.15,-0.94l1.37,-0.09l0.19,-0.09l0.85,-0.83l3.34,-0.22l2.22,-0.41l0.24,-0.26l0.2,-1.5l1.32,-1.65l0.07,-0.19l-0.01,-5.74l3.4,-1.13l7.24,-5.12l8.46,-4.95l3.76,1.08l1.35,1.39l0.36,0.05l1.39,-0.77l0.55,3.66l0.12,0.2l0.82,0.6l0.03,0.69l0.1,0.21l0.87,0.74l-0.47,0.99l-0.96,5.26l-0.13,3.25l-3.08,2.34l-0.1,0.15l-1.08,3.37l0.08,0.31l0.94,0.86l-0.01,1.51l0.29,0.3l1.25,0.05l-0.14,0.66l-0.51,0.11l-0.24,0.26l-0.06,0.57l-0.04,0.0l-1.59,-2.62l-0.21,-0.14l-0.59,-0.1l-0.23,0.05l-1.83,1.33l-1.79,-0.68l-1.42,-0.17l-0.17,0.03l-0.65,0.32l-1.39,-0.07l-0.19,0.06l-1.4,1.03l-1.12,0.05l-2.97,-1.29l-0.26,0.01l-1.12,0.59l-1.08,-0.04l-0.85,-0.88l-0.11,-0.07l-2.51,-0.95l-0.14,-0.02l-2.69,0.3l-0.16,0.07l-0.65,0.55l-0.1,0.16l-0.34,1.41l-0.69,0.98l-0.05,0.15l-0.13,1.72l-1.47,-1.13l-0.18,-0.06l-0.9,0.01l-0.2,0.08l-0.32,0.28Z",name:"Niger"},NG:{path:"M442.0,272.7l-2.4,0.83l-0.88,-0.12l-0.19,0.04l-0.89,0.52l-1.78,-0.05l-1.23,-1.44l-0.88,-1.87l-1.77,-1.66l-0.21,-0.08l-3.78,0.03l0.13,-3.75l-0.06,-1.58l0.44,-1.47l0.74,-0.75l1.21,-1.56l0.04,-0.29l-0.22,-0.56l0.44,-0.9l0.01,-0.24l-0.54,-1.44l0.26,-2.97l0.72,-1.06l0.33,-1.37l0.51,-0.43l2.53,-0.28l2.38,0.9l0.89,0.91l0.2,0.09l1.28,0.04l0.15,-0.03l1.06,-0.56l2.9,1.26l0.13,0.02l1.28,-0.06l0.16,-0.06l1.39,-1.02l1.36,0.07l0.15,-0.03l0.64,-0.32l1.22,0.13l1.9,0.73l0.28,-0.04l1.86,-1.35l0.33,0.06l1.62,2.67l0.29,0.14l0.32,-0.04l0.73,0.74l-0.19,0.37l-0.12,0.74l-2.03,1.89l-0.07,0.11l-0.66,1.62l-0.35,1.28l-0.48,0.51l-0.07,0.12l-0.48,1.67l-1.26,0.98l-0.1,0.15l-0.38,1.24l-0.58,1.07l-0.2,0.91l-1.43,0.7l-1.26,-0.93l-0.19,-0.06l-0.95,0.04l-0.2,0.09l-1.41,1.39l-0.61,0.02l-0.26,0.17l-1.19,2.42l-0.61,1.67Z",name:"Nigeria"},NZ:{path:"M857.9,379.62l1.85,3.1l0.33,0.14l0.22,-0.28l0.04,-1.41l0.57,0.4l0.35,2.06l0.17,0.22l2.02,0.94l1.78,0.26l0.22,-0.06l1.31,-1.01l0.84,0.22l-0.53,2.27l-0.67,1.5l-1.71,-0.05l-0.25,0.12l-0.67,0.89l-0.05,0.23l0.21,1.15l-0.31,0.46l-2.15,3.57l-1.6,0.99l-0.28,-0.51l-0.15,-0.13l-0.72,-0.3l1.27,-2.15l0.01,-0.29l-0.82,-1.63l-0.15,-0.14l-2.5,-1.09l0.05,-0.69l1.67,-0.94l0.15,-0.21l0.42,-2.24l-0.11,-1.95l-0.03,-0.12l-0.97,-1.85l0.05,-0.41l-0.09,-0.25l-1.18,-1.17l-1.94,-2.49l-0.86,-1.64l0.38,-0.09l1.24,1.43l0.12,0.08l1.81,0.68l0.67,2.39ZM853.93,393.55l0.57,1.24l0.44,0.12l1.51,-1.03l0.52,0.91l0.0,1.09l-0.88,1.31l-1.62,2.2l-1.26,1.2l-0.05,0.38l0.64,1.02l-1.4,0.03l-0.14,0.04l-2.14,1.16l-0.14,0.17l-0.67,2.0l-1.38,3.06l-3.07,2.19l-2.12,-0.06l-1.55,-0.99l-0.14,-0.05l-2.53,-0.2l-0.31,-0.84l1.25,-2.15l3.07,-2.97l1.62,-0.59l1.81,-1.17l2.18,-1.63l1.55,-1.65l1.08,-2.18l0.9,-0.72l0.11,-0.17l0.35,-1.56l1.37,-1.07l0.4,0.91Z",name:"New Zealand"},NP:{path:"M641.26,213.53l-0.14,0.95l0.32,1.64l-0.21,0.78l-1.83,0.04l-2.98,-0.62l-1.86,-0.25l-1.37,-1.3l-0.18,-0.08l-3.38,-0.34l-3.21,-1.49l-2.38,-1.34l-2.16,-0.92l0.84,-2.2l1.51,-1.18l0.89,-0.57l1.83,0.77l2.5,1.76l1.39,0.41l0.78,1.21l0.17,0.13l1.91,0.53l2.0,1.17l2.92,0.66l2.63,0.24Z",name:"Nepal"},CI:{path:"M413.53,272.08l-0.83,0.02l-1.79,-0.49l-1.64,0.03l-3.04,0.46l-1.73,0.72l-2.4,0.89l-0.12,-0.02l0.16,-1.7l0.19,-0.25l0.06,-0.2l-0.08,-0.99l-0.09,-0.19l-1.06,-1.05l-0.15,-0.08l-0.71,-0.15l-0.51,-0.48l0.45,-0.92l0.02,-0.19l-0.24,-1.16l0.07,-0.43l0.14,-0.0l0.3,-0.26l0.15,-1.1l-0.02,-0.15l-0.13,-0.34l0.09,-0.13l0.83,-0.27l0.19,-0.37l-0.62,-2.02l-0.55,-1.0l0.14,-0.59l0.35,-0.14l0.24,-0.16l0.53,0.29l0.14,0.04l1.93,0.02l0.26,-0.14l0.36,-0.58l0.39,0.01l0.43,-0.17l0.28,0.79l0.43,0.16l0.56,-0.31l0.89,-0.32l0.92,0.45l0.39,0.75l0.14,0.13l1.13,0.53l0.3,-0.03l0.81,-0.59l1.02,-0.08l1.49,0.57l0.62,3.33l-1.03,2.09l-0.65,2.84l0.02,0.2l1.05,2.08l-0.07,0.64Z",name:"Ivory Coast"},CH:{path:"M444.71,156.27l0.05,0.3l-0.34,0.69l0.13,0.4l1.13,0.58l1.07,0.1l-0.12,0.81l-0.87,0.42l-1.75,-0.37l-0.34,0.18l-0.47,1.1l-0.86,0.07l-0.33,-0.38l-0.41,-0.04l-1.34,1.01l-1.02,0.13l-0.93,-0.58l-0.82,-1.32l-0.37,-0.12l-0.77,0.32l0.02,-0.84l1.74,-1.69l0.09,-0.25l-0.04,-0.38l0.73,0.19l0.26,-0.06l0.6,-0.48l2.02,0.02l0.24,-0.12l0.38,-0.51l2.31,0.84Z",name:"Switzerland"},CO:{path:"M232.24,284.95l-0.94,-0.52l-1.22,-0.82l-0.31,-0.01l-0.62,0.35l-1.88,-0.31l-0.54,-0.95l-0.29,-0.15l-0.37,0.03l-2.34,-1.33l-0.15,-0.35l0.57,-0.11l0.24,-0.32l-0.1,-1.15l0.46,-0.71l1.11,-0.15l0.21,-0.13l1.05,-1.57l0.95,-1.31l-0.08,-0.43l-0.73,-0.47l0.4,-1.24l0.01,-0.16l-0.53,-2.15l0.44,-0.54l0.06,-0.24l-0.4,-2.13l-0.06,-0.13l-0.93,-1.22l0.21,-0.8l0.52,0.12l0.32,-0.13l0.47,-0.75l0.03,-0.27l-0.52,-1.32l0.09,-0.11l1.14,0.07l0.22,-0.08l1.82,-1.71l0.96,-0.25l0.22,-0.28l0.02,-0.81l0.43,-2.01l1.28,-1.04l1.48,-0.05l0.27,-0.19l0.12,-0.31l1.73,0.19l0.2,-0.05l1.96,-1.28l0.97,-0.56l1.16,-1.16l0.64,0.11l0.43,0.44l-0.31,0.55l-1.49,0.39l-0.19,0.16l-0.6,1.2l-0.97,0.74l-0.73,0.94l-0.06,0.13l-0.3,1.76l-0.68,1.44l0.23,0.43l1.1,0.14l0.27,0.97l0.08,0.13l0.49,0.49l0.17,0.85l-0.27,0.86l-0.01,0.14l0.09,0.53l0.2,0.23l0.52,0.18l0.54,0.79l0.27,0.13l3.18,-0.24l1.31,0.29l1.7,2.08l0.31,0.1l0.96,-0.26l1.75,0.13l1.41,-0.27l0.56,0.27l-0.36,1.07l-0.54,0.81l-0.05,0.13l-0.2,1.8l0.51,1.79l0.07,0.12l0.65,0.68l0.05,0.32l-1.16,1.14l0.05,0.47l0.86,0.52l0.6,0.79l0.31,1.01l-0.7,-0.81l-0.44,-0.01l-0.74,0.77l-4.75,-0.05l-0.3,0.31l0.03,1.57l0.25,0.29l1.2,0.21l-0.02,0.24l-0.1,-0.05l-0.22,-0.02l-1.41,0.41l-0.22,0.29l-0.01,1.82l0.11,0.23l1.04,0.85l0.35,1.3l-0.06,1.02l-1.02,6.26l-0.84,-0.89l-0.19,-0.09l-0.25,-0.02l1.35,-2.13l-0.1,-0.42l-1.92,-1.17l-0.2,-0.04l-1.41,0.2l-0.82,-0.39l-0.26,0.0l-1.29,0.62l-1.63,-0.27l-1.4,-2.5l-0.12,-0.12l-1.1,-0.61l-0.83,-1.2l-1.67,-1.19l-0.27,-0.04l-0.54,0.19Z",name:"Colombia"},CN:{path:"M740.32,148.94l0.22,0.21l4.3,1.03l2.84,2.2l0.99,2.92l0.28,0.2l3.8,0.0l0.15,-0.04l2.13,-1.24l3.5,-0.8l-1.05,2.29l-0.95,1.13l-0.06,0.12l-0.85,3.41l-1.56,2.81l-2.83,-0.51l-0.19,0.03l-2.15,1.09l-0.15,0.34l0.65,2.59l-0.33,3.3l-1.03,0.07l-0.28,0.3l0.01,0.75l-1.09,-1.2l-0.48,0.05l-0.94,1.6l-3.76,1.26l-0.2,0.36l0.29,1.19l-1.67,-0.08l-1.11,-0.88l-0.42,0.05l-1.69,2.08l-2.71,1.57l-2.04,1.88l-3.42,0.84l-0.11,0.05l-1.8,1.34l-1.54,0.46l0.52,-0.53l0.06,-0.33l-0.44,-0.96l1.84,-1.84l0.02,-0.41l-1.32,-1.56l-0.36,-0.08l-2.23,1.08l-2.83,2.06l-1.52,1.85l-2.32,0.13l-0.2,0.09l-1.28,1.37l-0.03,0.37l1.32,1.97l0.18,0.13l1.83,0.43l0.07,1.08l0.18,0.26l1.98,0.84l0.3,-0.03l2.66,-1.96l2.06,1.04l0.12,0.03l1.4,0.07l0.27,1.0l-3.24,0.73l-0.17,0.11l-1.13,1.5l-2.38,1.4l-0.1,0.1l-1.29,1.99l0.1,0.42l2.6,1.5l0.97,2.72l1.52,2.56l1.66,2.08l-0.03,1.76l-1.4,0.67l-0.15,0.38l0.6,1.47l0.13,0.15l1.29,0.75l-0.35,2.0l-0.58,1.96l-1.22,0.21l-0.2,0.14l-1.83,2.93l-2.02,3.51l-2.29,3.13l-3.4,2.42l-3.42,2.18l-2.75,0.3l-0.15,0.06l-1.32,1.01l-0.68,-0.67l-0.41,-0.01l-1.37,1.27l-3.42,1.28l-2.62,0.4l-0.24,0.21l-0.8,2.57l-0.95,0.11l-0.53,-1.54l0.52,-0.89l-0.19,-0.44l-3.36,-0.84l-0.17,0.01l-1.09,0.4l-2.36,-0.64l-1.0,-0.9l0.35,-1.34l-0.23,-0.37l-2.22,-0.47l-1.15,-0.94l-0.36,-0.02l-2.08,1.37l-2.35,0.29l-1.98,-0.01l-0.13,0.03l-1.32,0.63l-1.28,0.38l-0.21,0.33l0.33,2.65l-0.78,-0.04l-0.14,-0.39l-0.07,-1.04l-0.41,-0.26l-1.72,0.71l-0.96,-0.43l-1.63,-0.86l0.65,-1.95l-0.19,-0.38l-1.43,-0.46l-0.56,-2.27l-0.34,-0.22l-2.26,0.38l0.25,-2.65l2.29,-2.15l0.09,-0.2l0.1,-2.21l-0.07,-2.09l-0.15,-0.25l-1.02,-0.6l-0.8,-1.52l-0.31,-0.16l-1.42,0.2l-2.16,-0.32l0.55,-0.74l0.01,-0.35l-1.17,-1.7l-0.41,-0.08l-1.67,1.07l-1.97,-0.63l-0.25,0.03l-2.89,1.73l-2.26,1.99l-1.82,0.3l-1.0,-0.66l-0.15,-0.05l-1.28,-0.06l-1.75,-0.61l-0.24,0.02l-1.35,0.69l-0.1,0.08l-1.2,1.45l-0.14,-1.41l-0.4,-0.25l-1.46,0.55l-2.83,-0.26l-2.77,-0.61l-1.99,-1.17l-1.91,-0.54l-0.78,-1.21l-0.17,-0.13l-1.36,-0.38l-2.54,-1.79l-2.01,-0.84l-0.28,0.02l-0.89,0.56l-3.31,-1.83l-2.35,-1.67l-0.57,-2.49l1.34,0.28l0.36,-0.28l0.08,-1.42l-0.05,-0.19l-0.93,-1.34l0.24,-2.18l-0.07,-0.22l-2.69,-3.32l-0.15,-0.1l-3.97,-1.11l-0.69,-2.05l-0.11,-0.15l-1.79,-1.3l-0.39,-0.73l-0.36,-1.57l0.08,-1.09l-0.18,-0.3l-1.52,-0.66l-0.22,-0.01l-0.51,0.18l-0.52,-2.21l0.59,-0.55l0.06,-0.35l-0.22,-0.44l2.12,-1.24l1.63,-0.55l2.58,0.39l0.31,-0.16l0.87,-1.75l3.05,-0.34l0.21,-0.12l0.84,-1.12l3.87,-1.59l0.15,-0.14l0.35,-0.68l0.03,-0.17l-0.17,-1.51l1.52,-0.7l0.15,-0.39l-2.12,-5.0l4.62,-1.15l1.35,-0.72l0.14,-0.17l1.72,-5.37l4.7,0.99l0.28,-0.08l1.39,-1.43l0.08,-0.2l0.11,-2.95l1.83,-0.26l0.18,-0.1l1.85,-2.08l0.61,-0.17l0.57,1.97l0.1,0.15l2.2,1.75l3.48,1.17l1.59,2.36l-0.93,3.53l0.04,0.24l0.9,1.35l0.2,0.13l2.98,0.53l3.32,0.43l2.97,1.89l1.49,0.35l1.08,2.67l1.52,1.88l0.24,0.11l2.74,-0.07l5.15,0.67l3.36,-0.41l2.39,0.43l3.67,1.81l0.13,0.03l2.92,-0.0l1.02,0.86l0.34,0.03l2.88,-1.59l3.98,-1.03l3.81,-0.13l3.02,-1.12l1.77,-1.61l1.73,-1.01l0.13,-0.37l-0.41,-1.01l-0.72,-1.07l1.09,-1.66l1.21,0.24l2.57,0.63l0.24,-0.04l2.46,-1.62l3.78,-1.19l0.13,-0.09l1.8,-2.03l1.66,-0.84l3.54,-0.41l1.93,0.35l0.34,-0.22l0.27,-1.12l-0.08,-0.29l-2.27,-2.22l-2.08,-1.07l-0.29,0.01l-1.82,1.12l-2.36,-0.47l-0.14,0.01l-1.18,0.34l-0.46,-0.94l1.69,-3.08l1.1,-2.21l2.75,1.12l0.26,-0.02l3.53,-2.06l0.15,-0.26l-0.02,-1.35l2.18,-3.39l1.35,-1.04l0.12,-0.24l-0.03,-1.85l-0.15,-0.25l-1.0,-0.58l1.68,-1.37l3.01,-0.59l3.25,-0.09l3.67,0.99l2.08,1.18l1.51,3.3l0.95,1.45l0.85,1.99l0.92,3.19ZM697.0,237.37l-1.95,1.12l-1.74,-0.68l-0.06,-1.9l1.08,-1.03l2.62,-0.7l1.23,0.05l0.37,0.65l-1.01,1.08l-0.54,1.4Z",name:"China"},CM:{path:"M453.76,278.92l-0.26,-0.11l-0.18,-0.02l-1.42,0.31l-1.56,-0.33l-1.17,0.16l-3.7,-0.05l0.3,-1.63l-0.04,-0.21l-0.98,-1.66l-0.15,-0.13l-1.03,-0.38l-0.46,-1.01l-0.13,-0.14l-0.48,-0.27l0.02,-0.46l0.62,-1.72l1.1,-2.25l0.54,-0.02l0.2,-0.09l1.41,-1.39l0.73,-0.03l1.32,0.97l0.31,0.03l1.72,-0.85l0.16,-0.2l0.22,-1.0l0.57,-1.03l0.36,-1.18l1.26,-0.98l0.1,-0.15l0.49,-1.7l0.48,-0.51l0.07,-0.13l0.35,-1.3l0.63,-1.54l2.06,-1.92l0.09,-0.17l0.12,-0.79l0.24,-0.41l-0.04,-0.36l-0.89,-0.91l0.04,-0.45l0.28,-0.06l0.85,1.39l0.16,1.59l-0.09,1.66l0.04,0.17l1.09,1.84l-0.86,-0.02l-0.72,0.17l-1.07,-0.24l-0.34,0.17l-0.54,1.19l0.06,0.34l1.48,1.47l1.06,0.44l0.32,0.94l0.73,1.6l-0.32,0.57l-1.23,2.49l-0.54,0.41l-0.12,0.21l-0.19,1.95l0.24,1.08l-0.18,0.67l0.07,0.28l1.13,1.25l0.24,0.93l0.92,1.29l1.1,0.8l0.1,1.01l0.26,0.73l-0.12,0.93l-1.65,-0.49l-2.02,-0.66l-3.19,-0.11Z",name:"Cameroon"},CL:{path:"M246.8,429.1l-1.14,0.78l-2.25,1.21l-0.16,0.23l-0.37,2.94l-0.75,0.06l-2.72,-1.07l-2.83,-2.34l-3.06,-1.9l-0.71,-1.92l0.67,-1.84l-0.02,-0.25l-1.22,-2.13l-0.31,-5.41l1.02,-2.95l2.59,-2.4l-0.13,-0.51l-3.32,-0.8l2.06,-2.4l0.07,-0.15l0.79,-4.77l2.44,0.95l0.4,-0.22l1.31,-6.31l-0.16,-0.33l-1.68,-0.8l-0.42,0.21l-0.72,3.47l-1.01,-0.27l0.74,-4.06l0.85,-5.46l1.12,-1.96l0.03,-0.22l-0.71,-2.82l-0.19,-2.94l0.76,-0.07l0.26,-0.2l1.53,-4.62l1.73,-4.52l1.07,-4.2l-0.56,-4.2l0.73,-2.2l0.01,-0.12l-0.29,-3.3l1.46,-3.34l0.45,-5.19l0.8,-5.52l0.78,-5.89l-0.18,-4.33l-0.49,-3.47l1.1,-0.56l0.13,-0.13l0.44,-0.88l0.9,1.29l0.32,1.8l0.1,0.18l1.16,0.97l-0.73,2.33l0.01,0.21l1.33,2.91l0.97,3.6l0.35,0.22l1.57,-0.31l0.16,0.34l-0.79,2.51l-2.61,1.25l-0.17,0.28l0.08,4.36l-0.48,0.79l0.01,0.33l0.6,0.84l-1.62,1.55l-1.67,2.6l-0.89,2.47l-0.02,0.13l0.23,2.56l-1.5,2.76l-0.03,0.21l1.15,4.8l0.11,0.17l0.54,0.42l-0.01,2.37l-1.4,2.7l-0.03,0.15l0.06,2.25l-1.8,1.78l-0.09,0.21l0.02,2.73l0.71,2.63l-1.33,0.94l-0.12,0.17l-0.67,2.64l-0.59,3.03l0.4,3.55l-0.84,0.51l-0.14,0.31l0.58,3.5l0.08,0.16l0.96,0.99l-0.7,1.08l0.11,0.43l1.04,0.55l0.19,0.8l-0.89,0.48l-0.16,0.31l0.26,1.77l-0.89,4.06l-1.31,2.67l-0.03,0.19l0.28,1.53l-0.73,1.88l-1.85,1.37l-0.12,0.26l0.22,3.46l0.06,0.16l0.88,1.19l0.28,0.12l1.32,-0.17l-0.04,2.13l0.04,0.15l1.04,1.95l0.24,0.16l5.94,0.44ZM248.79,430.71l0.0,7.41l0.3,0.3l2.67,0.0l1.01,0.06l-0.54,0.91l-1.99,1.01l-1.13,-0.1l-1.42,-0.27l-1.87,-1.06l-2.57,-0.49l-3.09,-1.9l-2.52,-1.83l-2.65,-2.93l0.93,0.32l3.54,2.29l3.32,1.23l0.34,-0.09l1.29,-1.57l0.83,-2.32l2.11,-1.28l1.43,0.32Z",name:"Chile"},CA:{path:"M280.14,145.66l-1.66,2.88l0.06,0.37l0.37,0.03l1.5,-1.01l1.17,0.49l-0.64,0.83l0.13,0.46l2.22,0.89l0.28,-0.03l1.02,-0.7l2.09,0.83l-0.69,2.1l0.37,0.38l1.43,-0.45l0.27,1.43l0.74,1.88l-0.95,2.5l-0.88,0.09l-1.34,-0.48l0.49,-2.34l-0.14,-0.32l-0.7,-0.4l-0.36,0.04l-2.81,2.66l-0.63,-0.05l1.2,-1.01l-0.1,-0.52l-2.4,-0.77l-2.79,0.18l-4.65,-0.09l-0.22,-0.54l1.37,-0.99l0.01,-0.48l-0.82,-0.65l1.91,-1.79l2.57,-5.17l1.49,-1.81l2.04,-1.07l0.63,0.08l-0.27,0.51l-1.33,2.07ZM193.92,74.85l-0.01,4.24l0.19,0.28l0.33,-0.07l3.14,-3.22l2.65,2.5l-0.71,3.04l0.06,0.26l2.42,2.88l0.46,0.0l2.66,-3.14l1.83,-3.74l0.03,-0.12l0.13,-4.53l3.23,0.31l3.63,0.64l3.18,2.08l0.13,1.91l-1.79,2.22l-0.0,0.37l1.69,2.2l-0.28,1.8l-4.74,2.84l-3.33,0.62l-2.5,-1.21l-0.41,0.17l-0.73,2.05l-2.39,3.44l-0.74,1.78l-2.78,2.61l-3.48,0.26l-0.17,0.07l-1.98,1.68l-0.1,0.21l-0.15,2.33l-2.68,0.45l-0.17,0.09l-3.1,3.2l-2.75,4.38l-0.99,3.06l-0.14,4.31l0.25,0.31l3.5,0.58l1.07,3.24l1.18,2.76l0.34,0.18l3.43,-0.69l4.55,1.52l2.45,1.32l1.76,1.65l0.12,0.07l3.11,0.96l2.63,1.46l0.13,0.04l4.12,0.2l2.41,0.3l-0.36,2.81l0.8,3.51l1.81,3.78l0.08,0.1l3.73,3.17l0.34,0.03l1.93,-1.08l0.13,-0.15l1.35,-3.44l0.01,-0.18l-1.31,-5.38l-0.08,-0.14l-1.46,-1.5l3.68,-1.51l2.84,-2.46l1.45,-2.55l0.04,-0.17l-0.2,-2.39l-0.04,-0.12l-1.7,-3.07l-2.9,-2.64l2.79,-3.66l0.05,-0.27l-1.08,-3.38l-0.8,-5.75l1.45,-0.75l4.18,1.03l2.6,0.38l0.18,-0.03l1.93,-0.95l2.18,1.23l3.01,2.18l0.73,1.42l0.25,0.16l4.18,0.27l-0.06,2.95l0.83,4.7l0.22,0.24l2.19,0.55l1.75,2.08l0.38,0.07l3.63,-2.03l0.11,-0.11l2.38,-4.06l1.36,-1.43l1.76,3.01l3.26,4.68l2.68,4.19l-0.94,2.09l0.12,0.38l3.31,1.98l2.23,1.98l0.13,0.07l3.94,0.89l1.48,1.02l0.96,2.82l0.22,0.2l1.85,0.43l0.88,1.13l0.17,3.53l-1.68,1.16l-1.76,1.14l-4.08,1.17l-0.11,0.06l-3.08,2.65l-4.11,0.52l-5.35,-0.69l-3.76,-0.02l-2.62,0.23l-0.2,0.1l-2.05,2.29l-3.13,1.41l-0.11,0.08l-3.6,4.24l-2.87,2.92l-0.05,0.36l0.33,0.14l2.13,-0.52l0.15,-0.08l3.98,-4.15l5.16,-2.63l3.58,-0.31l1.82,1.3l-2.09,1.91l-0.09,0.29l0.8,3.46l0.82,2.37l0.15,0.17l3.25,1.56l0.16,0.03l4.14,-0.45l0.21,-0.12l2.03,-2.86l0.11,1.46l0.13,0.22l1.26,0.88l-2.7,1.78l-5.51,1.83l-2.52,1.26l-2.75,2.16l-1.52,-0.18l-0.08,-2.16l4.19,-2.47l0.14,-0.34l-0.3,-0.22l-4.01,0.1l-2.66,0.36l-1.45,-1.56l0.0,-4.16l-0.11,-0.23l-1.11,-0.91l-0.28,-0.05l-1.5,0.48l-0.7,-0.7l-0.45,0.02l-1.91,2.39l-0.8,2.5l-0.82,1.31l-0.95,0.43l-0.77,0.15l-0.23,0.2l-0.18,0.56l-8.2,0.02l-0.13,0.03l-1.19,0.61l-2.95,2.45l-0.78,1.13l-4.6,0.01l-0.12,0.02l-1.13,0.48l-0.13,0.44l0.37,0.55l0.2,0.82l-0.01,0.09l-3.1,1.42l-2.63,0.5l-2.84,1.57l-0.47,0.0l-0.72,-0.4l-0.18,-0.27l0.03,-0.15l0.52,-1.0l1.2,-1.71l0.73,-1.8l0.02,-0.17l-1.03,-5.47l-0.15,-0.21l-2.35,-1.32l0.16,-0.29l-0.05,-0.35l-0.37,-0.38l-0.22,-0.09l-0.56,0.0l-0.35,-0.34l-0.11,-0.65l-0.46,-0.2l-0.39,0.26l-0.2,-0.03l-0.11,-0.33l-0.48,-0.25l-0.21,-0.71l-0.15,-0.18l-3.97,-2.07l-4.8,-2.39l-0.25,-0.01l-2.19,0.89l-0.72,0.03l-3.04,-0.82l-0.14,-0.0l-1.94,0.4l-2.4,-0.98l-2.56,-0.51l-1.7,-0.19l-0.62,-0.44l-0.42,-1.67l-0.3,-0.23l-0.85,0.02l-0.29,0.3l-0.01,0.95l-69.26,-0.01l-4.77,-3.14l-1.78,-1.41l-4.51,-1.38l-1.3,-2.73l0.34,-1.96l-0.17,-0.33l-3.06,-1.37l-0.41,-2.58l-0.11,-0.18l-2.92,-2.4l-0.05,-1.53l1.32,-1.59l0.07,-0.2l-0.07,-2.21l-0.16,-0.26l-4.19,-2.22l-2.52,-4.02l-1.56,-2.6l-0.08,-0.09l-2.28,-1.64l-1.65,-1.48l-1.31,-1.89l-0.38,-0.1l-2.51,1.21l-2.28,1.92l-2.03,-2.22l-1.85,-1.71l-2.44,-1.04l-2.28,-0.12l0.03,-37.72l4.27,0.98l4.0,2.13l2.61,0.4l0.24,-0.07l2.17,-1.81l2.92,-1.33l3.63,0.53l0.18,-0.03l3.72,-1.94l3.89,-1.06l1.6,1.72l0.37,0.06l1.87,-1.04l0.14,-0.19l0.48,-1.83l1.37,0.38l4.18,3.96l0.41,0.0l2.89,-2.62l0.28,2.79l0.37,0.26l3.08,-0.73l0.17,-0.12l0.85,-1.16l2.81,0.24l3.83,1.86l5.86,1.61l3.46,0.75l2.44,-0.26l2.89,1.89l-3.12,1.89l-0.14,0.31l0.24,0.24l4.53,0.92l6.84,-0.5l2.04,-0.71l2.54,2.44l0.39,0.02l2.72,-2.16l-0.01,-0.48l-2.26,-1.61l1.27,-1.16l2.94,-0.19l1.94,-0.42l1.89,0.97l2.49,2.32l0.24,0.08l2.71,-0.33l4.35,1.9l0.17,0.02l3.86,-0.67l3.62,0.1l0.31,-0.33l-0.26,-2.44l1.9,-0.65l3.58,1.36l-0.01,3.84l0.23,0.29l0.34,-0.17l1.51,-3.23l1.81,0.1l0.31,-0.22l1.13,-4.37l-0.08,-0.29l-2.68,-2.73l-2.83,-1.76l0.19,-4.73l2.77,-3.15l3.06,0.69l2.44,1.97l3.24,4.88l-2.05,2.02l0.15,0.51l4.41,0.85ZM265.85,150.7l-0.84,0.04l-3.15,-0.99l-1.77,-1.17l0.19,-0.06l3.17,0.79l2.39,1.27l0.01,0.12ZM249.41,3.71l6.68,0.49l5.34,0.79l4.34,1.6l-0.08,1.24l-5.91,2.56l-6.03,1.21l-2.36,1.38l-0.14,0.34l0.29,0.22l4.37,-0.02l-4.96,3.01l-4.06,1.64l-0.11,0.08l-4.21,4.62l-5.07,0.92l-0.12,0.05l-1.53,1.1l-7.5,0.59l-0.28,0.28l0.24,0.31l2.67,0.54l-1.04,0.6l-0.09,0.44l1.89,2.49l-2.11,1.66l-3.83,1.52l-0.15,0.13l-1.14,2.01l-3.41,1.55l-0.16,0.36l0.35,1.19l0.3,0.22l3.98,-0.19l0.03,0.78l-6.42,2.99l-6.44,-1.41l-7.41,0.79l-3.72,-0.62l-4.48,-0.26l-0.25,-2.0l4.37,-1.13l0.21,-0.38l-1.14,-3.55l1.13,-0.28l6.61,2.29l0.35,-0.12l-0.04,-0.37l-3.41,-3.45l-0.14,-0.08l-3.57,-0.92l1.62,-1.7l4.36,-1.3l0.2,-0.18l0.71,-1.94l-0.12,-0.36l-3.45,-2.15l-0.88,-2.43l6.36,0.23l1.94,0.61l0.23,-0.02l3.91,-2.1l0.15,-0.32l-0.26,-0.24l-5.69,-0.67l-8.69,0.37l-4.3,-1.92l-2.12,-2.39l-2.82,-1.68l-0.44,-1.65l3.41,-1.06l2.93,-0.2l4.91,-0.99l3.69,-2.28l2.93,0.31l2.64,1.68l0.42,-0.1l1.84,-3.23l3.17,-0.96l4.45,-0.69l7.56,-0.26l1.26,0.64l0.18,0.03l7.2,-1.06l10.81,0.8ZM203.94,57.59l0.01,0.32l1.97,2.97l0.51,-0.01l2.26,-3.75l6.05,-1.89l4.08,4.72l-0.36,2.95l0.38,0.33l4.95,-1.36l0.11,-0.05l2.23,-1.77l5.37,2.31l3.32,2.14l0.3,1.89l0.36,0.25l4.48,-1.01l2.49,2.8l0.14,0.09l5.99,1.78l2.09,1.74l2.18,3.83l-4.29,1.91l-0.01,0.54l5.9,2.83l3.95,0.94l3.54,3.84l0.2,0.1l3.58,0.25l-0.67,2.51l-4.18,4.54l-2.84,-1.61l-3.91,-3.95l-0.26,-0.09l-3.24,0.52l-0.25,0.26l-0.32,2.37l0.1,0.26l2.63,2.38l3.42,1.89l0.96,1.0l1.57,3.8l-0.74,2.43l-2.85,-0.96l-6.26,-3.15l-0.38,0.09l0.04,0.39l3.54,3.4l2.55,2.31l0.23,0.78l-6.26,-1.43l-5.33,-2.25l-2.73,-1.73l0.67,-0.86l-0.09,-0.45l-7.38,-4.01l-0.44,0.27l0.03,0.89l-6.85,0.61l-1.8,-1.17l1.43,-2.6l4.56,-0.07l5.15,-0.52l0.23,-0.45l-0.76,-1.34l0.8,-1.89l3.21,-4.06l0.05,-0.29l-0.72,-1.95l-0.97,-1.47l-0.11,-0.1l-3.84,-2.1l-4.53,-1.33l1.09,-0.75l0.05,-0.45l-2.65,-2.75l-0.18,-0.09l-2.12,-0.24l-1.91,-1.47l-0.39,0.02l-1.27,1.25l-4.4,0.56l-9.06,-0.99l-5.28,-1.31l-4.01,-0.67l-1.72,-1.31l2.32,-1.85l0.1,-0.33l-0.28,-0.2l-3.3,-0.02l-0.74,-4.36l1.86,-4.09l2.46,-1.88l5.74,-1.15l-1.5,2.55ZM261.28,159.28l0.19,0.14l1.82,0.42l1.66,-0.05l-0.66,0.68l-0.75,0.16l-3.0,-1.25l-0.46,-0.77l0.51,-0.52l0.68,1.19ZM230.87,84.48l-2.48,0.19l-0.52,-1.74l0.96,-2.17l2.03,-0.53l1.71,1.04l0.02,1.6l-0.22,0.46l-1.5,1.16ZM229.52,58.19l0.14,0.82l-4.99,-0.22l-2.73,0.63l-0.59,-0.23l-2.61,-2.4l0.08,-1.38l0.94,-0.25l5.61,0.51l4.14,2.54ZM222.12,105.0l-0.79,1.63l-0.75,-0.22l-0.52,-0.91l0.04,-0.09l0.84,-1.01l0.74,0.06l0.44,0.55ZM183.77,38.22l2.72,1.65l0.16,0.04l4.83,-0.01l1.92,1.52l-0.51,1.75l0.18,0.36l2.84,1.14l1.56,1.19l0.16,0.06l3.37,0.22l3.65,0.42l4.07,-1.1l5.05,-0.43l3.96,0.35l2.53,1.8l0.48,1.79l-1.37,1.16l-3.6,1.03l-3.22,-0.59l-7.17,0.76l-5.1,0.09l-4.0,-0.6l-6.48,-1.56l-0.81,-2.57l-0.3,-2.49l-0.1,-0.19l-2.51,-2.25l-0.16,-0.07l-5.12,-0.63l-2.61,-1.45l0.75,-1.71l4.88,0.32ZM207.46,91.26l0.42,1.62l0.42,0.19l1.12,-0.55l1.35,0.99l2.74,1.39l2.73,1.2l0.2,1.74l0.35,0.26l1.72,-0.29l1.31,0.97l-1.72,0.96l-3.68,-0.9l-1.34,-1.71l-0.43,-0.04l-2.46,2.1l-3.23,1.85l-0.74,-1.98l-0.31,-0.19l-2.47,0.28l1.49,-1.34l0.1,-0.19l0.32,-3.15l0.79,-3.45l1.34,0.25ZM215.59,102.66l-2.73,2.0l-1.49,-0.08l-0.37,-0.7l1.61,-1.56l3.0,0.03l-0.02,0.3ZM202.79,24.07l0.11,0.12l2.54,1.53l-3.01,1.47l-4.55,4.07l-4.3,0.38l-5.07,-0.68l-2.51,-2.09l0.03,-1.72l1.86,-1.4l0.1,-0.34l-0.29,-0.2l-4.49,0.04l-2.63,-1.79l-1.45,-2.36l1.61,-2.38l1.65,-1.69l2.47,-0.4l0.19,-0.48l-0.72,-0.89l5.1,-0.26l3.1,3.05l0.13,0.07l4.21,1.25l3.99,1.06l1.92,3.65ZM187.5,59.3l-0.15,0.1l-2.59,3.4l-2.5,-0.15l-1.47,-3.92l0.04,-2.24l1.22,-1.92l2.34,-1.26l5.11,0.17l4.28,1.06l-3.36,3.86l-2.9,0.9ZM186.19,48.8l-1.15,1.63l-3.42,-0.35l-2.68,-1.15l1.11,-1.88l3.34,-1.27l2.01,1.63l0.79,1.38ZM185.78,35.41l-0.95,0.13l-4.48,-0.33l-0.4,-0.91l4.5,0.07l1.45,0.82l-0.1,0.21ZM180.76,32.56l-3.43,1.03l-1.85,-1.14l-1.01,-1.92l-0.16,-1.87l2.87,0.2l1.39,0.35l2.75,1.75l-0.55,1.6ZM181.03,76.32l-1.21,1.2l-3.19,-1.26l-0.18,-0.01l-1.92,0.45l-2.88,-1.67l1.84,-1.16l1.6,-1.77l2.45,1.17l1.45,0.77l2.05,2.28ZM169.72,54.76l2.83,0.97l0.14,0.01l4.25,-0.58l0.47,1.01l-2.19,2.16l0.07,0.48l3.61,1.95l-0.41,3.84l-3.87,1.68l-2.23,-0.36l-1.73,-1.75l-6.07,-3.53l0.03,-1.01l4.79,0.55l0.3,-0.16l-0.04,-0.34l-2.55,-2.89l2.59,-2.05ZM174.44,40.56l1.49,1.87l0.07,2.48l-1.07,3.52l-3.87,0.48l-2.41,-0.72l0.05,-2.72l-0.33,-0.3l-3.79,0.36l-0.13,-3.31l2.36,0.14l0.15,-0.03l3.7,-1.74l3.44,0.29l0.31,-0.22l0.03,-0.12ZM170.14,31.5l0.75,1.74l-3.52,-0.52l-4.19,-1.77l-4.65,-0.17l1.65,-1.11l-0.05,-0.52l-2.86,-1.26l-0.13,-1.58l4.52,0.7l6.66,1.99l1.84,2.5ZM134.64,58.08l-1.08,1.93l0.34,0.44l5.44,-1.41l3.37,2.32l0.37,-0.02l2.66,-2.28l2.03,1.38l2.01,4.53l0.53,0.04l1.26,-1.93l0.03,-0.27l-1.67,-4.55l1.82,-0.58l2.36,0.73l2.69,1.84l1.53,4.46l0.77,3.24l0.15,0.19l4.22,2.26l4.32,2.04l-0.21,1.51l-3.87,0.34l-0.19,0.5l1.45,1.54l-0.65,1.23l-4.3,-0.65l-4.4,-1.19l-2.97,0.28l-4.67,1.48l-6.31,0.65l-4.27,0.39l-1.26,-1.91l-0.15,-0.12l-3.42,-1.2l-0.16,-0.01l-2.05,0.45l-2.66,-3.02l1.2,-0.34l3.82,-0.76l3.58,0.19l3.27,-0.78l0.23,-0.29l-0.24,-0.29l-4.84,-1.06l-5.42,0.35l-3.4,-0.09l-0.97,-1.22l5.39,-1.7l0.21,-0.33l-0.3,-0.25l-3.82,0.06l-3.95,-1.1l1.88,-3.13l1.68,-1.81l6.54,-2.84l2.11,0.77ZM158.85,56.58l-1.82,2.62l-3.38,-2.9l0.49,-0.39l3.17,-0.18l1.54,0.86ZM149.71,42.7l1.0,1.87l0.37,0.14l2.17,-0.83l2.33,0.2l0.38,2.16l-1.38,2.17l-8.33,0.76l-6.34,2.15l-3.51,0.1l-0.22,-1.13l4.98,-2.12l0.17,-0.34l-0.31,-0.23l-11.27,0.6l-3.04,-0.78l3.14,-4.57l2.2,-1.35l6.87,1.7l4.4,3.0l0.14,0.05l4.37,0.39l0.27,-0.48l-3.41,-4.68l1.96,-1.62l2.28,0.53l0.79,2.32ZM145.44,29.83l-2.18,0.77l-3.79,-0.0l0.02,-0.31l2.34,-1.5l1.2,0.23l2.42,0.83ZM144.83,34.5l-4.44,1.46l-3.18,-1.48l1.6,-1.36l3.51,-0.53l3.1,0.75l-0.6,1.16ZM119.02,65.87l-6.17,2.07l-1.19,-1.82l-0.13,-0.11l-5.48,-2.32l0.92,-1.7l1.73,-3.44l2.16,-3.15l-0.02,-0.36l-2.09,-2.56l7.84,-0.71l3.59,1.02l6.32,0.27l2.35,1.37l2.25,1.71l-2.68,1.04l-6.21,3.41l-3.1,3.28l-0.08,0.21l0.0,1.81ZM129.66,35.4l-0.3,3.55l-1.77,1.67l-2.34,0.27l-4.62,2.2l-3.89,0.76l-2.83,-0.93l3.85,-3.52l5.04,-3.36l3.75,0.07l3.11,-0.7ZM111.24,152.74l-0.82,0.29l-3.92,-1.39l-0.7,-1.06l-0.12,-0.1l-2.15,-1.09l-0.41,-0.84l-0.2,-0.16l-2.44,-0.56l-0.84,-1.56l0.1,-0.36l2.34,0.64l1.53,0.5l2.28,0.34l0.78,1.04l1.24,1.55l0.09,0.08l2.42,1.3l0.81,1.39ZM88.54,134.82l0.14,0.02l2.0,-0.23l-0.67,3.48l0.06,0.24l1.78,2.22l-0.24,-0.0l-1.4,-1.42l-0.91,-1.53l-1.26,-1.08l-0.42,-1.35l0.09,-0.66l0.82,0.31Z",name:"Canada"},CG:{path:"M453.66,296.61l-0.9,-0.82l-0.35,-0.04l-0.83,0.48l-0.77,0.83l-1.65,-2.13l1.66,-1.2l0.08,-0.39l-0.81,-1.43l0.59,-0.43l1.62,-0.29l0.24,-0.24l0.1,-0.58l0.94,0.84l0.19,0.08l2.21,0.11l0.27,-0.14l0.81,-1.29l0.32,-1.76l-0.27,-1.96l-0.06,-0.15l-1.08,-1.35l1.02,-2.74l-0.09,-0.34l-0.62,-0.5l-0.22,-0.06l-1.66,0.18l-0.55,-1.03l0.12,-0.73l2.85,0.09l1.98,0.65l2.0,0.59l0.38,-0.25l0.17,-1.3l1.26,-2.24l1.34,-1.19l1.54,0.38l1.35,0.12l-0.11,1.15l-0.74,1.34l-0.5,1.61l-0.31,2.22l0.12,1.41l-0.4,0.9l-0.06,0.88l-0.24,0.67l-1.57,1.15l-1.24,1.41l-1.09,2.43l-0.03,0.13l0.08,1.95l-0.55,0.69l-1.46,1.23l-1.32,1.41l-0.61,-0.29l-0.13,-0.57l-0.29,-0.23l-1.36,-0.02l-0.23,0.1l-0.72,0.81l-0.41,-0.16Z",name:"Republic of the Congo"},CF:{path:"M459.41,266.56l1.9,-0.17l0.22,-0.12l0.36,-0.5l0.14,0.02l0.55,0.51l0.29,0.07l3.15,-0.96l0.12,-0.07l1.05,-0.97l1.29,-0.87l0.12,-0.33l-0.17,-0.61l0.38,-0.12l2.36,0.15l0.15,-0.03l2.36,-1.17l0.12,-0.1l1.78,-2.72l1.18,-0.96l1.23,-0.34l0.21,0.79l0.07,0.13l1.37,1.5l0.01,0.86l-0.39,1.0l-0.01,0.17l0.16,0.78l0.1,0.17l0.91,0.76l1.89,1.09l1.24,0.92l0.02,0.67l0.12,0.23l1.67,1.3l0.99,1.03l0.61,1.46l0.14,0.15l1.79,0.95l0.2,0.4l-0.44,0.14l-1.54,-0.06l-1.98,-0.26l-0.93,0.22l-0.19,0.14l-0.3,0.48l-0.57,0.05l-0.91,-0.49l-0.26,-0.01l-2.7,1.21l-1.04,-0.23l-0.21,0.03l-0.34,0.19l-0.12,0.13l-0.64,1.3l-1.67,-0.43l-1.77,-0.24l-1.58,-0.91l-2.06,-0.85l-0.27,0.02l-1.42,0.88l-0.97,1.27l-0.06,0.14l-0.19,1.46l-1.3,-0.11l-1.67,-0.42l-0.27,0.07l-1.55,1.41l-0.99,1.76l-0.14,-1.18l-0.13,-0.22l-1.1,-0.78l-0.86,-1.2l-0.2,-0.84l-0.07,-0.13l-1.07,-1.19l0.16,-0.59l0.0,-0.15l-0.24,-1.01l0.18,-1.77l0.5,-0.38l0.09,-0.11l1.18,-2.4Z",name:"Central African Republic"},CD:{path:"M497.85,276.25l-0.14,2.77l0.2,0.3l0.57,0.19l-0.47,0.52l-1.0,0.71l-0.96,1.31l-0.56,1.22l-0.16,2.04l-0.54,0.89l-0.04,0.15l-0.02,1.76l-0.63,0.61l-0.09,0.2l-0.08,1.33l-0.2,0.11l-0.15,0.21l-0.23,1.37l0.03,0.2l0.6,1.08l0.16,2.96l0.44,2.29l-0.24,1.25l0.01,0.15l0.5,1.46l0.07,0.12l1.41,1.37l1.09,2.56l-0.51,-0.11l-3.45,0.45l-0.67,0.3l-0.15,0.15l-0.71,1.61l0.01,0.26l0.52,1.03l-0.43,2.9l-0.31,2.55l0.13,0.29l0.7,0.46l1.75,0.99l0.31,-0.01l0.26,-0.17l0.15,1.9l-1.44,-0.02l-0.94,-1.28l-0.94,-1.1l-0.17,-0.1l-1.76,-0.33l-0.5,-1.18l-0.42,-0.15l-1.44,0.75l-1.79,-0.32l-0.77,-1.05l-0.2,-0.12l-1.59,-0.23l-0.97,0.04l-0.1,-0.53l-0.27,-0.25l-0.86,-0.06l-1.13,-0.15l-1.62,0.37l-1.04,-0.06l-0.32,0.09l0.11,-2.56l-0.08,-0.21l-0.77,-0.87l-0.17,-1.41l0.36,-1.47l-0.03,-0.21l-0.48,-0.91l-0.04,-1.52l-0.3,-0.29l-2.65,0.02l0.13,-0.53l-0.29,-0.37l-1.28,0.01l-0.28,0.21l-0.07,0.24l-1.35,0.09l-0.26,0.18l-0.62,1.45l-0.25,0.42l-1.17,-0.3l-0.19,0.01l-0.79,0.34l-1.44,0.18l-1.41,-1.96l-0.7,-1.47l-0.61,-1.86l-0.28,-0.21l-7.39,-0.03l-0.92,0.3l-0.78,-0.03l-0.78,0.25l-0.11,-0.25l0.35,-0.15l0.18,-0.26l0.07,-1.02l0.33,-0.52l0.72,-0.42l0.52,0.2l0.33,-0.08l0.76,-0.86l0.99,0.02l0.11,0.48l0.16,0.2l0.94,0.44l0.35,-0.07l1.46,-1.56l1.44,-1.21l0.68,-0.85l0.06,-0.2l-0.08,-1.99l1.04,-2.33l1.1,-1.23l1.62,-1.19l0.11,-0.14l0.29,-0.8l0.08,-0.94l0.38,-0.82l0.03,-0.16l-0.13,-1.38l0.3,-2.16l0.47,-1.51l0.73,-1.31l0.04,-0.12l0.15,-1.51l0.21,-1.66l0.89,-1.16l1.16,-0.7l1.9,0.79l1.69,0.95l1.81,0.24l1.85,0.48l0.35,-0.16l0.71,-1.43l0.16,-0.09l1.03,0.23l0.19,-0.02l2.65,-1.19l0.86,0.46l0.17,0.03l0.81,-0.08l0.23,-0.14l0.31,-0.5l0.75,-0.17l1.83,0.26l1.64,0.06l0.72,-0.21l1.39,1.9l0.16,0.11l1.12,0.3l0.24,-0.04l0.58,-0.36l1.05,0.15l0.15,-0.02l1.15,-0.44l0.47,0.84l0.08,0.09l2.08,1.57Z",name:"Democratic Republic of the Congo"},CZ:{path:"M463.29,152.22l-0.88,-0.47l-0.18,-0.03l-1.08,0.15l-1.86,-0.94l-0.21,-0.02l-0.88,0.24l-0.13,0.07l-1.25,1.17l-1.63,-0.91l-1.38,-1.36l-1.22,-0.75l-0.24,-1.24l-0.33,-0.75l1.53,-0.6l0.98,-0.84l1.74,-0.62l0.11,-0.07l0.47,-0.47l0.46,0.27l0.24,0.03l0.96,-0.3l1.06,0.95l0.15,0.07l1.57,0.24l-0.1,0.6l0.16,0.32l1.36,0.68l0.41,-0.15l0.28,-0.62l1.29,0.28l0.19,0.84l0.26,0.23l1.73,0.18l0.74,1.02l-0.17,0.0l-0.25,0.13l-0.32,0.49l-0.46,0.11l-0.22,0.23l-0.13,0.57l-0.32,0.1l-0.2,0.22l-0.03,0.14l-0.65,0.25l-1.05,-0.05l-0.28,0.17l-0.22,0.43Z",name:"Czech Republic"},CY:{path:"M505.03,193.75l-1.51,0.68l-1.0,-0.3l-0.32,-0.63l0.69,-0.06l0.41,0.13l0.19,-0.0l0.62,-0.22l0.31,0.02l0.06,0.22l0.49,0.17l0.06,-0.01Z",name:"Cyprus"},CR:{path:"M213.0,263.84l-0.98,-0.4l-0.3,-0.31l0.16,-0.24l0.05,-0.21l-0.09,-0.56l-0.1,-0.18l-0.76,-0.65l-0.99,-0.5l-0.74,-0.28l-0.13,-0.58l-0.12,-0.18l-0.66,-0.45l-0.34,-0.0l-0.13,0.31l0.13,0.59l-0.17,0.21l-0.34,-0.42l-0.14,-0.1l-0.7,-0.22l-0.23,-0.34l0.01,-0.62l0.31,-0.74l-0.14,-0.38l-0.3,-0.15l0.47,-0.4l1.48,0.6l0.26,-0.02l0.47,-0.27l0.58,0.15l0.35,0.44l0.17,0.11l0.74,0.17l0.27,-0.07l0.3,-0.27l0.52,1.09l0.97,1.02l0.77,0.71l-0.41,0.1l-0.23,0.3l0.01,1.02l0.12,0.24l0.2,0.14l-0.07,0.05l-0.11,0.3l0.08,0.37l-0.23,0.63Z",name:"Costa Rica"},CU:{path:"M215.01,226.09l2.08,0.18l1.94,0.03l2.24,0.86l0.95,0.92l0.25,0.08l2.22,-0.28l0.79,0.55l3.68,2.81l0.19,0.06l0.77,-0.03l1.18,0.42l-0.12,0.47l0.27,0.37l1.78,0.1l1.59,0.9l-0.11,0.22l-1.5,0.3l-1.64,0.13l-1.75,-0.2l-2.69,0.19l1.0,-0.86l-0.03,-0.48l-1.02,-0.68l-0.13,-0.05l-1.52,-0.16l-0.74,-0.64l-0.57,-1.42l-0.3,-0.19l-1.36,0.1l-2.23,-0.67l-0.71,-0.52l-0.14,-0.06l-3.2,-0.4l-0.42,-0.25l0.56,-0.39l0.12,-0.33l-0.27,-0.22l-2.46,-0.13l-0.2,0.06l-1.72,1.31l-0.94,0.03l-0.25,0.15l-0.29,0.53l-1.04,0.24l-0.29,-0.07l0.7,-0.43l0.1,-0.11l0.5,-0.87l1.04,-0.54l1.23,-0.49l1.86,-0.25l0.62,-0.28Z",name:"Cuba"},SZ:{path:"M500.95,353.41l-0.41,0.97l-1.16,0.23l-1.29,-1.26l-0.02,-0.71l0.63,-0.93l0.23,-0.7l0.47,-0.12l1.04,0.4l0.32,1.05l0.2,1.08Z",name:"Swaziland"},SY:{path:"M510.84,199.83l0.09,-0.11l0.07,-0.2l-0.04,-1.08l0.56,-1.4l1.3,-1.01l0.1,-0.34l-0.41,-1.11l-0.24,-0.19l-0.89,-0.11l-0.2,-1.84l0.55,-1.05l1.3,-1.22l0.09,-0.19l0.09,-1.09l0.39,0.27l0.25,0.04l2.66,-0.77l1.35,0.52l2.06,-0.01l2.93,-1.08l1.35,0.04l2.14,-0.34l-0.83,1.16l-1.31,0.68l-0.16,0.3l0.23,2.03l-0.9,3.25l-5.43,2.87l-4.79,2.91l-2.32,-0.92Z",name:"Syria"},KG:{path:"M599.04,172.15l0.38,-0.9l1.43,-0.37l4.04,1.02l0.37,-0.23l0.36,-1.64l1.17,-0.52l3.45,1.24l0.2,-0.0l0.86,-0.31l4.09,0.08l3.61,0.31l1.18,1.02l0.11,0.06l1.19,0.34l-0.13,0.26l-3.84,1.58l-0.13,0.1l-0.81,1.08l-3.08,0.34l-0.24,0.16l-0.85,1.7l-2.43,-0.37l-0.14,0.01l-1.79,0.61l-2.39,1.4l-0.12,0.39l0.25,0.49l-0.48,0.45l-4.57,0.43l-3.04,-0.94l-2.45,0.18l0.14,-1.02l2.42,0.44l0.27,-0.08l0.81,-0.81l1.76,0.27l0.21,-0.05l3.21,-2.14l-0.03,-0.51l-2.97,-1.57l-0.26,-0.01l-1.64,0.69l-1.38,-0.84l1.81,-1.67l-0.09,-0.5l-0.46,-0.18Z",name:"Kyrgyzstan"},KE:{path:"M523.3,287.04l0.06,0.17l1.29,1.8l-1.46,0.84l-0.11,0.11l-0.55,0.93l-0.81,0.16l-0.24,0.24l-0.34,1.69l-0.81,1.06l-0.46,1.58l-0.76,0.63l-3.3,-2.3l-0.16,-1.32l-0.15,-0.23l-9.35,-5.28l-0.02,-2.4l1.92,-2.63l0.91,-1.83l0.01,-0.24l-1.09,-2.86l-0.29,-1.24l-1.09,-1.63l2.93,-2.85l0.92,0.3l0.0,1.19l0.09,0.22l0.86,0.83l0.21,0.08l1.65,0.0l3.09,2.08l0.16,0.05l0.79,0.03l0.54,-0.06l0.58,0.28l1.67,0.2l0.28,-0.12l0.69,-0.98l2.04,-0.94l0.86,0.73l0.19,0.07l1.1,0.0l-1.82,2.36l-0.06,0.18l0.03,9.12Z",name:"Kenya"},SS:{path:"M505.7,261.39l0.02,1.64l-0.27,0.55l-1.15,0.05l-0.24,0.15l-0.85,1.44l0.22,0.45l1.44,0.17l1.15,1.12l0.42,0.95l0.14,0.15l1.06,0.54l1.33,2.45l-3.06,2.98l-1.44,1.08l-1.75,0.01l-1.92,0.56l-1.5,-0.53l-0.27,0.03l-0.85,0.57l-1.98,-1.5l-0.56,-1.02l-0.37,-0.13l-1.32,0.5l-1.08,-0.15l-0.2,0.04l-0.56,0.35l-0.9,-0.24l-1.44,-1.97l-0.39,-0.77l-0.13,-0.13l-1.78,-0.94l-0.65,-1.5l-1.08,-1.12l-1.57,-1.22l-0.02,-0.68l-0.12,-0.23l-1.37,-1.02l-1.17,-0.68l0.2,-0.08l0.86,-0.48l0.14,-0.18l0.63,-2.22l0.6,-1.02l1.47,-0.28l0.35,0.56l1.29,1.48l0.14,0.09l0.69,0.22l0.22,-0.02l0.83,-0.4l1.58,0.08l0.26,0.39l0.25,0.13l2.49,0.0l0.3,-0.25l0.06,-0.35l1.13,-0.42l0.18,-0.18l0.22,-0.63l0.68,-0.38l1.95,1.37l0.23,0.05l1.29,-0.26l0.19,-0.12l1.23,-1.8l1.36,-1.37l0.08,-0.25l-0.21,-1.52l-0.06,-0.15l-0.25,-0.3l0.94,-0.08l0.26,-0.21l0.1,-0.32l0.6,0.09l-0.25,1.67l0.3,1.83l0.11,0.19l1.22,0.94l0.25,0.73l-0.04,1.2l0.26,0.31l0.09,0.01Z",name:"South Sudan"},SR:{path:"M278.1,270.26l2.71,0.45l0.31,-0.14l0.19,-0.32l1.82,-0.16l2.25,0.56l-1.09,1.81l-0.04,0.19l0.2,1.72l0.05,0.13l0.9,1.35l-0.39,0.99l-0.21,1.09l-0.48,0.8l-1.2,-0.44l-0.17,-0.01l-1.12,0.24l-0.95,-0.21l-0.35,0.2l-0.25,0.73l0.05,0.29l0.3,0.35l-0.06,0.13l-1.01,-0.15l-1.42,-2.03l-0.32,-1.36l-0.29,-0.23l-0.63,-0.0l-0.95,-1.56l0.41,-1.16l0.01,-0.17l-0.08,-0.35l1.29,-0.56l0.18,-0.22l0.35,-1.97Z",name:"Suriname"},KH:{path:"M680.28,257.89l-0.93,-1.2l-1.24,-2.56l-0.56,-2.9l1.45,-1.92l3.07,-0.46l2.26,0.35l2.03,0.98l0.38,-0.11l1.0,-1.55l1.86,0.79l0.52,1.51l-0.28,2.82l-4.05,1.88l-0.12,0.45l0.79,1.1l-2.2,0.17l-2.08,0.98l-1.89,-0.33Z",name:"Cambodia"},SV:{path:"M197.02,248.89l0.18,-0.05l0.59,0.17l0.55,0.51l0.64,0.35l0.06,0.22l0.37,0.21l1.01,-0.28l0.38,0.13l0.16,0.13l-0.14,0.81l-0.18,0.38l-1.22,-0.03l-0.84,-0.23l-1.11,-0.52l-1.31,-0.15l-0.49,-0.38l0.02,-0.08l0.76,-0.57l0.46,-0.27l0.11,-0.35Z",name:"El Salvador"},SK:{path:"M468.01,150.02l0.05,0.07l0.36,0.1l0.85,-0.37l1.12,1.02l0.33,0.05l1.38,-0.65l1.07,0.3l0.16,0.0l1.69,-0.43l1.95,1.02l-0.51,0.64l-0.45,1.2l-0.32,0.2l-2.55,-0.93l-0.17,-0.01l-0.82,0.2l-0.17,0.11l-0.53,0.68l-0.94,0.32l-0.14,-0.11l-0.29,-0.04l-1.18,0.48l-0.95,0.09l-0.26,0.21l-0.15,0.47l-1.84,0.34l-0.82,-0.31l-1.14,-0.73l-0.2,-0.89l0.42,-0.84l0.91,0.05l0.12,-0.02l0.86,-0.33l0.18,-0.21l0.03,-0.13l0.32,-0.1l0.2,-0.22l0.12,-0.55l0.39,-0.1l0.18,-0.13l0.3,-0.45l0.43,-0.0Z",name:"Slovakia"},KR:{path:"M737.31,185.72l0.84,0.08l0.27,-0.12l0.89,-1.2l1.63,-0.13l1.1,-0.2l0.21,-0.16l0.12,-0.24l1.86,2.95l0.59,1.79l0.02,3.17l-0.84,1.38l-2.23,0.55l-1.95,1.14l-1.91,0.21l-0.22,-1.21l0.45,-2.07l-0.01,-0.17l-0.99,-2.67l1.54,-0.4l0.17,-0.46l-1.55,-2.24Z",name:"South Korea"},SI:{path:"M455.77,159.59l1.79,0.21l0.18,-0.04l1.2,-0.68l2.12,-0.08l0.21,-0.1l0.38,-0.42l0.1,0.01l0.28,0.62l-1.71,0.71l-0.18,0.22l-0.21,1.1l-0.71,0.26l-0.2,0.28l0.01,0.55l-0.59,-0.04l-0.79,-0.47l-0.38,0.06l-0.36,0.41l-0.84,-0.05l0.05,-0.15l-0.56,-1.24l0.21,-1.17Z",name:"Slovenia"},KP:{path:"M747.76,172.02l-0.23,-0.04l-0.26,0.08l-1.09,1.02l-0.78,1.06l-0.06,0.19l0.09,1.95l-1.12,0.57l-0.53,0.58l-0.88,0.82l-1.69,0.51l-1.09,0.79l-0.12,0.22l-0.07,1.17l-0.22,0.25l0.09,0.47l0.96,0.46l1.22,1.1l-0.19,0.37l-0.91,0.16l-1.75,0.14l-0.22,0.12l-0.87,1.18l-0.95,-0.09l-0.3,0.18l-0.97,-0.44l-0.39,0.13l-0.25,0.44l-0.29,0.09l-0.03,-0.2l-0.18,-0.23l-0.62,-0.25l-0.43,-0.29l0.52,-0.97l0.52,-0.3l0.13,-0.38l-0.18,-0.42l0.59,-1.47l0.01,-0.21l-0.16,-0.48l-0.22,-0.2l-1.41,-0.31l-0.82,-0.55l1.74,-1.62l2.73,-1.58l1.62,-1.96l0.96,0.76l0.17,0.06l2.17,0.11l0.31,-0.37l-0.32,-1.31l3.61,-1.21l0.16,-0.13l0.79,-1.34l1.25,1.38Z",name:"North Korea"},SO:{path:"M543.8,256.48l0.61,-0.05l1.14,-0.37l1.31,-0.25l0.12,-0.05l1.11,-0.81l0.57,-0.0l0.03,0.39l-0.23,1.49l0.01,1.25l-0.52,0.92l-0.7,2.71l-1.19,2.79l-1.54,3.2l-2.13,3.66l-2.12,2.79l-2.92,3.39l-2.47,2.0l-3.76,2.5l-2.33,1.9l-2.77,3.06l-0.61,1.35l-0.28,0.29l-1.22,-1.69l-0.03,-8.92l2.12,-2.76l0.59,-0.68l1.47,-0.04l0.18,-0.06l2.15,-1.71l3.16,-0.11l0.21,-0.09l7.08,-7.55l1.76,-2.12l1.14,-1.57l0.06,-0.18l0.01,-4.67Z",name:"Somalia"},SN:{path:"M379.28,250.34l-0.95,-1.82l-0.09,-0.1l-0.83,-0.6l0.62,-0.28l0.13,-0.11l1.21,-1.8l0.6,-1.31l0.71,-0.68l1.09,0.2l0.18,-0.02l1.17,-0.53l1.25,-0.03l1.17,0.73l1.59,0.65l1.47,1.83l1.59,1.7l0.12,1.56l0.49,1.46l0.1,0.14l0.85,0.65l0.18,0.82l-0.08,0.57l-0.13,0.05l-1.29,-0.19l-0.29,0.13l-0.11,0.16l-0.35,0.04l-1.83,-0.61l-5.84,-0.13l-0.12,0.02l-0.6,0.26l-0.87,-0.06l-1.01,0.32l-0.26,-1.26l1.9,0.04l0.16,-0.04l0.54,-0.32l0.37,-0.02l0.15,-0.05l0.78,-0.5l0.92,0.46l0.12,0.03l1.09,0.04l0.15,-0.03l1.08,-0.57l0.11,-0.44l-0.51,-0.74l-0.39,-0.1l-0.76,0.39l-0.62,-0.01l-0.92,-0.58l-0.18,-0.05l-0.79,0.04l-0.2,0.09l-0.48,0.51l-2.41,0.06Z",name:"Senegal"},SL:{path:"M392.19,267.53l-0.44,-0.12l-1.73,-0.97l-1.24,-1.28l-0.4,-0.84l-0.27,-1.65l1.21,-1.0l0.09,-0.12l0.27,-0.66l0.32,-0.41l0.56,-0.05l0.16,-0.07l0.5,-0.41l1.75,0.0l0.59,0.77l0.49,0.96l-0.07,0.64l0.04,0.19l0.36,0.58l-0.03,0.84l0.24,0.2l-0.64,0.65l-1.13,1.37l-0.06,0.14l-0.12,0.66l-0.43,0.58Z",name:"Sierra Leone"},SB:{path:"M826.74,311.51l0.23,0.29l-0.95,-0.01l-0.39,-0.63l0.65,0.27l0.45,0.09ZM825.01,308.52l-1.18,-1.39l-0.37,-1.06l0.24,0.0l0.82,1.84l0.49,0.6ZM823.21,309.42l-0.44,0.03l-1.43,-0.24l-0.32,-0.24l0.08,-0.5l1.29,0.31l0.72,0.47l0.11,0.18ZM817.9,303.81l2.59,1.44l0.3,0.41l-1.21,-0.66l-1.34,-0.89l-0.34,-0.3ZM813.77,302.4l0.48,0.34l0.1,0.08l-0.33,-0.17l-0.25,-0.25Z",name:"Solomon Islands"},SA:{path:"M528.24,243.1l-0.2,-0.69l-0.07,-0.12l-0.69,-0.71l-0.18,-0.94l-0.12,-0.19l-1.24,-0.89l-1.28,-2.09l-0.7,-2.08l-0.07,-0.11l-1.73,-1.79l-0.11,-0.07l-1.03,-0.39l-1.57,-2.36l-0.27,-1.72l0.1,-1.53l-0.03,-0.15l-1.44,-2.93l-1.25,-1.13l-1.34,-0.56l-0.72,-1.33l0.11,-0.49l-0.02,-0.2l-0.7,-1.38l-0.08,-0.1l-0.68,-0.56l-0.97,-1.98l-2.8,-4.03l-0.25,-0.13l-0.85,0.01l0.29,-1.11l0.12,-0.97l0.23,-0.81l2.52,0.39l0.23,-0.06l1.08,-0.84l0.6,-0.95l1.78,-0.35l0.22,-0.17l0.37,-0.83l0.74,-0.42l0.08,-0.46l-2.17,-2.4l4.55,-1.26l0.12,-0.06l0.36,-0.32l2.83,0.71l3.67,1.91l7.04,5.5l0.17,0.06l4.64,0.22l2.06,0.24l0.55,1.15l0.28,0.17l1.56,-0.06l0.9,2.15l0.14,0.15l1.14,0.57l0.39,0.85l0.11,0.13l1.59,1.06l0.12,0.91l-0.23,0.83l0.01,0.18l0.32,0.9l0.07,0.11l0.68,0.7l0.33,0.86l0.37,0.65l0.09,0.1l0.76,0.53l0.25,0.04l0.45,-0.12l0.35,0.75l0.1,0.63l0.96,2.68l0.23,0.19l7.53,1.33l0.27,-0.09l0.24,-0.26l0.87,1.41l-1.58,4.96l-7.34,2.54l-7.28,1.02l-2.34,1.17l-0.12,0.1l-1.74,2.63l-0.86,0.32l-0.49,-0.68l-0.28,-0.12l-0.92,0.12l-2.32,-0.25l-0.41,-0.23l-0.15,-0.04l-2.89,0.06l-0.63,0.2l-0.91,-0.59l-0.43,0.11l-0.66,1.27l-0.03,0.21l0.21,0.89l-0.6,0.45Z",name:"Saudi Arabia"},SE:{path:"M476.42,90.44l-0.15,0.1l-2.43,2.86l-0.07,0.24l0.36,2.31l-3.84,3.1l-4.83,3.38l-0.11,0.15l-1.82,5.45l0.03,0.26l1.78,2.68l2.27,1.99l-2.13,3.88l-2.49,0.82l-0.2,0.24l-0.95,6.05l-1.32,3.09l-2.82,-0.32l-0.3,0.16l-1.34,2.64l-2.48,0.14l-0.76,-3.15l-2.09,-4.04l-1.85,-5.01l1.03,-1.98l2.06,-2.53l0.06,-0.13l0.83,-4.45l-0.06,-0.25l-1.54,-1.86l-0.15,-5.0l1.52,-3.48l2.28,0.06l0.27,-0.16l0.87,-1.59l-0.01,-0.31l-0.8,-1.21l3.79,-5.63l4.07,-7.54l2.23,0.01l0.29,-0.22l0.59,-2.15l4.46,0.66l0.34,-0.26l0.34,-2.64l1.21,-0.14l3.24,2.08l3.78,2.85l0.06,6.37l0.03,0.14l0.67,1.29l-3.95,1.07Z",name:"Sweden"},SD:{path:"M505.98,259.75l-0.31,-0.9l-0.1,-0.14l-1.2,-0.93l-0.27,-1.66l0.29,-1.83l-0.25,-0.34l-1.16,-0.17l-0.33,0.21l-0.11,0.37l-1.3,0.11l-0.21,0.49l0.55,0.68l0.18,1.29l-1.31,1.33l-1.18,1.72l-1.04,0.21l-2.0,-1.4l-0.32,-0.02l-0.95,0.52l-0.14,0.16l-0.21,0.6l-1.16,0.43l-0.19,0.23l-0.04,0.27l-2.08,0.0l-0.25,-0.39l-0.24,-0.13l-1.81,-0.09l-0.14,0.03l-0.8,0.38l-0.49,-0.16l-1.22,-1.39l-0.42,-0.67l-0.31,-0.14l-1.81,0.35l-0.2,0.14l-0.72,1.24l-0.61,2.14l-0.73,0.4l-0.62,0.22l-0.83,-0.68l-0.12,-0.6l0.38,-0.97l0.01,-1.14l-0.08,-0.2l-1.39,-1.53l-0.25,-0.97l0.03,-0.57l-0.11,-0.25l-0.81,-0.66l-0.03,-1.34l-0.04,-0.14l-0.52,-0.98l-0.31,-0.15l-0.42,0.07l0.12,-0.44l0.63,-1.03l0.03,-0.23l-0.24,-0.88l0.69,-0.66l0.02,-0.41l-0.4,-0.46l0.58,-1.39l1.04,-1.71l1.97,0.16l0.32,-0.3l-0.12,-10.24l0.02,-0.8l2.59,-0.01l0.3,-0.3l0.0,-4.92l29.19,0.0l0.68,2.17l-0.4,0.35l-0.1,0.27l0.36,2.69l0.93,3.15l0.12,0.16l2.05,1.4l-0.99,1.15l-1.75,0.4l-0.15,0.08l-0.79,0.79l-0.08,0.17l-0.24,1.69l-1.07,3.75l-0.0,0.16l0.25,0.96l-0.38,2.1l-0.98,2.41l-1.52,1.3l-1.07,1.94l-0.25,0.99l-1.08,0.64l-0.13,0.18l-0.46,1.65Z",name:"Sudan"},DO:{path:"M241.7,234.97l0.15,-0.22l1.73,0.01l1.43,0.64l0.15,0.03l0.45,-0.04l0.36,0.74l0.28,0.17l1.02,-0.04l-0.04,0.43l0.27,0.33l1.03,0.09l0.91,0.7l-0.57,0.64l-0.99,-0.47l-0.16,-0.03l-1.11,0.11l-0.79,-0.12l-0.26,0.09l-0.38,0.4l-0.66,0.11l-0.28,-0.45l-0.38,-0.12l-0.83,0.37l-0.14,0.13l-0.85,1.49l-0.27,-0.17l-0.1,-0.58l0.05,-0.67l-0.07,-0.21l-0.44,-0.53l0.35,-0.25l0.12,-0.19l0.19,-1.0l-0.2,-1.4Z",name:"Dominican Republic"},DJ:{path:"M528.78,253.36l0.34,0.45l-0.06,0.76l-1.26,0.54l-0.05,0.53l0.82,0.53l-0.57,0.83l-0.3,-0.25l-0.27,-0.05l-0.56,0.17l-1.07,-0.03l-0.04,-0.56l-0.16,-0.56l0.76,-1.07l0.76,-0.97l0.89,0.18l0.25,-0.06l0.51,-0.42Z",name:"Djibouti"},DK:{path:"M452.4,129.07l-1.27,2.39l-2.25,-1.69l-0.26,-1.08l3.15,-1.0l0.63,1.39ZM447.87,126.25l-0.35,0.76l-0.47,-0.24l-0.38,0.09l-1.8,2.53l-0.03,0.29l0.56,1.4l-1.22,0.4l-1.68,-0.41l-0.92,-1.76l-0.07,-3.47l0.38,-0.88l0.62,-0.93l2.07,-0.21l0.19,-0.1l0.84,-0.95l1.5,-0.76l-0.06,1.26l-0.7,1.1l-0.03,0.25l0.3,1.0l0.18,0.19l1.06,0.42Z",name:"Denmark"},DE:{path:"M445.51,131.69l0.03,0.94l0.21,0.28l2.32,0.74l-0.02,1.0l0.37,0.3l2.55,-0.65l1.36,-0.89l2.63,1.27l1.09,1.01l0.51,1.51l-0.6,0.78l-0.0,0.36l0.88,1.17l0.58,1.68l-0.18,1.08l0.03,0.18l0.87,1.81l-0.66,0.2l-0.55,-0.32l-0.36,0.05l-0.58,0.58l-1.73,0.62l-0.99,0.84l-1.77,0.7l-0.16,0.4l0.42,0.94l0.26,1.34l0.14,0.2l1.25,0.76l1.22,1.2l-0.71,1.2l-0.81,0.37l-0.17,0.32l0.34,1.99l-0.04,0.09l-0.47,-0.39l-0.17,-0.07l-1.2,-0.1l-1.85,0.57l-2.15,-0.13l-0.29,0.18l-0.21,0.5l-0.96,-0.67l-0.24,-0.05l-0.67,0.16l-2.6,-0.94l-0.34,0.1l-0.42,0.57l-1.64,-0.02l0.26,-1.88l1.24,-2.15l-0.21,-0.45l-3.54,-0.58l-0.98,-0.71l0.12,-1.26l-0.05,-0.2l-0.44,-0.64l0.27,-2.18l-0.38,-3.14l1.17,-0.0l0.27,-0.17l0.63,-1.26l0.65,-3.17l-0.02,-0.17l-0.41,-1.0l0.32,-0.47l1.77,-0.16l0.37,0.6l0.47,0.06l1.7,-1.69l0.06,-0.33l-0.55,-1.24l-0.09,-1.51l1.5,0.36l0.16,-0.01l1.22,-0.4Z",name:"Germany"},YE:{path:"M553.53,242.65l-1.51,0.58l-0.17,0.16l-0.48,1.14l-0.07,0.79l-2.31,1.0l-3.98,1.19l-2.28,1.8l-0.97,0.12l-0.7,-0.14l-0.23,0.05l-1.42,1.03l-1.51,0.47l-2.07,0.13l-0.68,0.15l-0.17,0.1l-0.49,0.6l-0.57,0.16l-0.18,0.13l-0.3,0.49l-1.06,-0.05l-0.13,0.02l-0.73,0.32l-1.48,-0.11l-0.55,-1.26l0.07,-1.32l-0.04,-0.16l-0.39,-0.72l-0.48,-1.85l-0.52,-0.79l0.08,-0.02l0.22,-0.36l-0.23,-1.05l0.24,-0.39l0.04,-0.19l-0.09,-0.95l0.96,-0.72l0.11,-0.31l-0.23,-0.98l0.46,-0.88l0.75,0.49l0.26,0.03l0.63,-0.22l2.76,-0.06l0.5,0.25l2.42,0.26l0.85,-0.11l0.52,0.71l0.35,0.1l1.17,-0.43l0.15,-0.12l1.75,-2.64l2.22,-1.11l6.95,-0.96l2.55,5.58Z",name:"Yemen"},AT:{path:"M463.17,154.15l-0.14,0.99l-1.15,0.01l-0.24,0.47l0.39,0.56l-0.75,1.84l-0.36,0.4l-2.06,0.07l-0.14,0.04l-1.18,0.67l-1.96,-0.23l-3.43,-0.78l-0.5,-0.97l-0.33,-0.16l-2.47,0.55l-0.2,0.16l-0.18,0.37l-1.27,-0.38l-1.28,-0.09l-0.81,-0.41l0.25,-0.51l0.03,-0.18l-0.05,-0.28l0.35,-0.08l1.16,0.81l0.45,-0.13l0.27,-0.64l2.0,0.12l1.84,-0.57l1.05,0.09l0.71,0.59l0.47,-0.11l0.23,-0.54l0.02,-0.17l-0.32,-1.85l0.69,-0.31l0.13,-0.12l0.73,-1.23l1.61,0.89l0.35,-0.04l1.35,-1.27l0.7,-0.19l1.84,0.93l0.18,0.03l1.08,-0.15l0.81,0.43l-0.07,0.15l-0.02,0.2l0.24,1.06Z",name:"Austria"},DZ:{path:"M450.58,224.94l-8.31,4.86l-7.23,5.12l-3.46,1.13l-2.42,0.22l-0.02,-1.33l-0.2,-0.28l-1.15,-0.42l-1.45,-0.69l-0.55,-1.13l-0.1,-0.12l-8.45,-5.72l-17.72,-12.17l0.03,-0.38l-0.02,-3.21l3.84,-1.91l2.46,-0.41l2.1,-0.75l0.14,-0.11l0.9,-1.3l2.84,-1.06l0.19,-0.27l0.09,-1.81l1.21,-0.2l0.15,-0.07l1.06,-0.96l3.19,-0.46l0.23,-0.18l0.46,-1.08l-0.08,-0.34l-0.6,-0.54l-0.83,-2.85l-0.18,-1.8l-0.82,-1.57l2.13,-1.37l2.65,-0.49l0.13,-0.05l1.55,-1.15l2.34,-0.85l4.2,-0.51l4.07,-0.23l1.21,0.41l0.23,-0.01l2.3,-1.11l2.52,-0.02l0.94,0.62l0.2,0.05l1.25,-0.13l-0.36,1.03l-0.01,0.14l0.39,2.66l-0.56,2.2l-1.49,1.52l-0.08,0.24l0.22,2.12l0.11,0.2l1.94,1.58l0.02,0.54l0.12,0.23l1.45,1.06l1.04,4.85l0.81,2.42l0.13,1.19l-0.43,2.17l0.17,1.28l-0.31,1.53l0.2,1.56l-0.9,1.02l-0.01,0.38l1.43,1.88l0.09,1.06l0.04,0.13l0.89,1.48l0.37,0.12l1.03,-0.43l1.79,1.12l0.89,1.34Z",name:"Algeria"},US:{path:"M892.64,99.05l1.16,0.57l0.21,0.02l1.45,-0.38l1.92,0.99l2.17,0.47l-1.65,0.72l-1.75,-0.79l-0.93,-0.7l-0.21,-0.06l-2.11,0.22l-0.35,-0.2l0.09,-0.87ZM183.29,150.37l0.39,1.54l0.12,0.17l0.78,0.55l0.14,0.05l1.74,0.2l2.52,0.5l2.4,0.98l0.17,0.02l1.96,-0.4l3.01,0.81l0.91,-0.02l2.22,-0.88l4.67,2.33l3.86,2.01l0.21,0.71l0.15,0.18l0.33,0.17l-0.02,0.05l0.23,0.43l0.67,0.1l0.21,-0.05l0.1,-0.07l0.05,0.29l0.09,0.16l0.5,0.5l0.21,0.09l0.56,0.0l0.13,0.13l-0.2,0.36l0.12,0.41l2.49,1.39l0.99,5.24l-0.69,1.68l-1.16,1.64l-0.6,1.18l-0.06,0.31l0.04,0.22l0.28,0.43l0.11,0.1l0.85,0.47l0.15,0.04l0.63,0.0l0.14,-0.04l2.87,-1.58l2.6,-0.49l3.28,-1.5l0.17,-0.23l0.04,-0.43l-0.23,-0.93l-0.24,-0.39l0.74,-0.32l4.7,-0.01l0.25,-0.13l0.77,-1.15l2.9,-2.41l1.04,-0.52l8.35,-0.02l0.28,-0.21l0.2,-0.6l0.7,-0.14l1.06,-0.48l0.13,-0.11l0.92,-1.49l0.75,-2.39l1.67,-2.08l0.59,0.6l0.3,0.07l1.52,-0.49l0.88,0.72l-0.0,4.14l0.08,0.2l1.6,1.72l0.31,0.72l-2.42,1.35l-2.55,1.05l-2.64,0.9l-0.14,0.11l-1.33,1.81l-0.44,0.7l-0.05,0.15l-0.03,1.6l0.03,0.14l0.83,1.59l0.24,0.16l0.78,0.06l-1.15,0.33l-1.25,-0.04l-1.83,0.52l-2.51,0.29l-2.17,0.88l-0.17,0.36l0.33,0.22l3.55,-0.54l0.15,0.11l-2.87,0.73l-1.19,0.0l-0.16,-0.33l-0.36,0.06l-0.76,0.82l0.17,0.5l0.42,0.08l-0.45,1.75l-1.4,1.74l-0.04,-0.17l-0.21,-0.22l-0.48,-0.13l-0.77,-0.69l-0.36,-0.03l-0.12,0.34l0.52,1.58l0.09,0.14l0.52,0.43l0.03,0.87l-0.74,1.05l-0.39,0.63l0.05,-0.12l-0.08,-0.34l-1.19,-1.03l-0.28,-2.31l-0.26,-0.26l-0.32,0.19l-0.48,1.27l-0.01,0.19l0.39,1.33l-1.14,-0.31l-0.36,0.18l0.14,0.38l1.57,0.85l0.1,2.58l0.22,0.28l0.55,0.15l0.21,0.81l0.33,2.72l-1.46,1.94l-2.5,0.81l-0.12,0.07l-1.58,1.58l-1.15,0.17l-0.15,0.06l-1.27,1.03l-0.09,0.13l-0.32,0.85l-2.71,1.79l-1.45,1.37l-1.18,1.64l-0.05,0.12l-0.39,1.96l0.0,0.13l0.44,1.91l0.85,2.37l1.1,1.91l0.03,1.2l1.16,3.07l-0.08,1.74l-0.1,0.99l-0.57,1.48l-0.54,0.24l-0.97,-0.26l-0.34,-1.02l-0.12,-0.16l-0.89,-0.58l-2.44,-4.28l-0.34,-0.94l0.49,-1.71l-0.02,-0.21l-0.7,-1.5l-2.0,-2.35l-0.11,-0.08l-0.98,-0.42l-0.25,0.01l-2.42,1.19l-0.26,-0.08l-1.26,-1.29l-1.57,-0.68l-0.16,-0.02l-2.79,0.34l-2.18,-0.3l-1.98,0.19l-1.12,0.45l-0.14,0.44l0.4,0.65l-0.04,1.02l0.09,0.22l0.29,0.3l-0.06,0.05l-0.77,-0.33l-0.26,0.01l-0.87,0.48l-1.64,-0.08l-1.79,-1.39l-0.23,-0.06l-2.11,0.33l-1.75,-0.61l-0.14,-0.01l-1.61,0.2l-2.11,0.64l-0.11,0.06l-2.25,1.99l-2.53,1.21l-1.43,1.38l-0.58,1.22l-0.03,0.12l-0.03,1.86l0.13,1.32l0.3,0.62l-0.46,0.04l-1.71,-0.57l-1.85,-0.79l-0.63,-1.14l-0.54,-1.85l-0.07,-0.12l-1.45,-1.51l-0.86,-1.58l-1.26,-1.87l-0.09,-0.09l-1.76,-1.09l-0.17,-0.04l-2.05,0.05l-0.23,0.12l-1.44,1.97l-1.84,-0.72l-1.19,-0.76l-0.6,-1.45l-0.9,-1.52l-1.49,-1.21l-1.27,-0.87l-0.89,-0.96l-0.22,-0.1l-4.34,-0.0l-0.3,0.3l-0.0,0.84l-6.62,0.02l-5.66,-1.93l-3.48,-1.24l0.11,-0.25l-0.3,-0.42l-3.18,0.3l-2.6,0.2l-0.35,-1.19l-0.08,-0.13l-1.62,-1.61l-0.13,-0.08l-1.02,-0.29l-0.22,-0.66l-0.25,-0.2l-1.31,-0.13l-0.82,-0.7l-0.16,-0.07l-2.25,-0.27l-0.48,-0.34l-0.28,-1.44l-0.07,-0.14l-2.41,-2.84l-2.03,-3.89l0.08,-0.58l-0.1,-0.27l-1.08,-0.94l-1.87,-2.36l-0.33,-2.31l-0.07,-0.15l-1.24,-1.5l0.52,-2.4l-0.09,-2.57l-0.78,-2.3l0.96,-2.83l0.61,-5.66l-0.46,-4.26l-0.79,-2.71l-0.68,-1.4l0.13,-0.26l3.24,0.97l1.28,2.88l0.52,0.06l0.62,-0.84l0.06,-0.22l-0.4,-2.61l-0.74,-2.29l68.9,-0.0l0.3,-0.3l0.01,-0.95l0.32,-0.01ZM32.5,67.43l1.75,1.99l0.41,0.04l1.02,-0.81l3.79,0.25l-0.1,0.72l0.24,0.34l3.83,0.77l2.6,-0.44l5.21,1.41l4.84,0.43l1.9,0.57l0.15,0.01l3.25,-0.71l3.72,1.32l2.52,0.58l-0.03,38.14l0.29,0.3l2.41,0.11l2.34,1.0l1.7,1.59l2.22,2.42l0.42,0.03l2.41,-2.04l2.25,-1.08l1.23,1.76l1.71,1.53l2.24,1.62l1.54,2.56l2.56,4.09l0.11,0.11l4.1,2.17l0.06,1.93l-1.12,1.35l-1.22,-1.14l-2.08,-1.05l-0.68,-2.94l-0.09,-0.16l-3.18,-2.84l-1.32,-3.35l-0.25,-0.19l-2.43,-0.24l-3.93,-0.09l-2.85,-1.02l-5.24,-3.85l-6.77,-2.04l-3.52,0.3l-4.84,-1.7l-2.96,-1.6l-0.23,-0.02l-2.78,0.8l-0.21,0.35l0.46,2.31l-1.11,0.19l-2.9,0.78l-2.24,1.26l-2.42,0.68l-0.29,-1.79l1.07,-3.49l2.54,-1.11l0.12,-0.45l-0.69,-0.96l-0.41,-0.07l-3.19,2.12l-1.76,2.54l-3.57,2.62l-0.03,0.46l1.63,1.59l-2.14,2.38l-2.64,1.49l-2.49,1.09l-0.16,0.17l-0.58,1.48l-3.8,1.79l-0.14,0.14l-0.75,1.57l-2.75,1.41l-1.62,-0.25l-0.16,0.02l-2.35,0.98l-2.54,1.19l-2.06,1.15l-4.05,0.93l-0.1,-0.15l2.45,-1.45l2.49,-1.1l2.61,-1.88l3.03,-0.39l0.19,-0.1l1.2,-1.41l3.43,-2.11l0.61,-0.75l1.81,-1.24l0.13,-0.2l0.42,-2.7l1.24,-2.12l-0.03,-0.35l-0.34,-0.09l-2.73,1.05l-0.67,-0.53l-0.39,0.02l-1.13,1.11l-1.43,-1.62l-0.49,0.06l-0.41,0.8l-0.67,-1.31l-0.42,-0.12l-2.43,1.43l-1.18,-0.0l-0.18,-1.86l0.43,-1.3l-0.09,-0.33l-1.61,-1.33l-0.26,-0.06l-3.11,0.68l-2.0,-1.66l-1.61,-0.85l-0.01,-1.97l-0.11,-0.23l-1.76,-1.48l0.86,-1.96l2.01,-2.13l0.88,-1.94l1.79,-0.25l1.65,0.6l0.31,-0.06l1.91,-1.8l1.67,0.31l0.22,-0.04l1.91,-1.23l0.13,-0.33l-0.47,-1.82l-0.15,-0.19l-1.0,-0.52l1.51,-1.27l0.09,-0.34l-0.29,-0.19l-1.62,0.06l-2.66,0.88l-0.13,0.09l-0.62,0.72l-1.77,-0.8l-0.16,-0.02l-3.48,0.44l-3.5,-0.92l-1.06,-1.61l-2.78,-2.09l3.07,-1.51l5.52,-2.01l1.65,0.0l-0.28,1.73l0.31,0.35l5.29,-0.16l0.23,-0.49l-2.03,-2.59l-0.1,-0.08l-3.03,-1.58l-1.79,-2.12l-2.4,-1.83l-3.18,-1.27l1.13,-1.84l4.28,-0.14l0.15,-0.05l3.16,-2.0l0.13,-0.17l0.57,-2.07l2.43,-2.02l2.42,-0.52l4.67,-1.98l2.22,0.29l0.2,-0.04l3.74,-2.37l3.57,0.91ZM37.66,123.49l-2.31,1.26l-1.04,-0.75l-0.31,-1.35l2.06,-1.16l1.24,-0.51l1.48,0.22l0.76,0.81l-1.89,1.49ZM30.89,233.84l1.2,0.57l0.35,0.3l0.48,0.69l-1.6,0.86l-0.3,0.31l-0.24,-0.14l0.05,-0.54l-0.02,-0.15l-0.36,-0.83l0.05,-0.12l0.39,-0.38l0.07,-0.31l-0.09,-0.27ZM29.06,231.89l0.5,0.14l0.31,0.19l-0.46,0.1l-0.34,-0.43ZM25.02,230.13l0.2,-0.11l0.4,0.47l-0.43,-0.05l-0.17,-0.31ZM21.29,228.68l0.1,-0.07l0.22,0.02l0.02,0.21l-0.02,0.02l-0.32,-0.18ZM6.0,113.33l-1.19,0.45l-1.5,-0.64l-0.94,-0.63l1.76,-0.46l1.71,0.29l0.16,0.98Z",name:"United States of America"},LV:{path:"M473.99,127.16l0.07,-2.15l1.15,-2.11l2.05,-1.07l1.84,2.48l0.25,0.12l2.01,-0.07l0.29,-0.25l0.45,-2.58l1.85,-0.56l0.98,0.4l2.13,1.33l0.16,0.05l1.97,0.01l1.02,0.7l0.21,1.67l0.71,1.84l-2.44,1.23l-1.36,0.53l-2.28,-1.62l-0.12,-0.05l-1.18,-0.2l-0.28,-0.6l-0.31,-0.17l-2.43,0.35l-4.17,-0.23l-0.12,0.02l-2.45,0.93Z",name:"Latvia"},UY:{path:"M276.9,363.17l1.3,-0.23l2.4,2.04l0.22,0.07l0.82,-0.07l2.48,1.7l1.93,1.5l1.28,1.67l-0.95,1.14l-0.04,0.31l0.63,1.45l-0.96,1.57l-2.65,1.47l-1.73,-0.53l-0.15,-0.01l-1.25,0.28l-2.22,-1.16l-0.16,-0.03l-1.56,0.08l-1.33,-1.36l0.17,-1.58l0.48,-0.55l0.07,-0.2l-0.02,-2.74l0.66,-2.8l0.57,-2.02Z",name:"Uruguay"},LB:{path:"M510.44,198.11l-0.48,0.03l-0.26,0.17l-0.15,0.32l-0.21,-0.0l0.72,-1.85l1.19,-1.9l0.74,0.09l0.27,0.73l-1.19,0.93l-0.09,0.13l-0.54,1.36Z",name:"Lebanon"},LA:{path:"M684.87,248.8l0.61,-0.86l0.05,-0.16l0.11,-2.17l-0.08,-0.22l-1.96,-2.16l-0.15,-2.44l-0.08,-0.18l-1.9,-2.1l-0.19,-0.1l-1.89,-0.18l-0.29,0.15l-0.42,0.76l-1.21,0.06l-0.67,-0.41l-0.31,-0.0l-2.2,1.29l-0.05,-1.77l0.61,-2.7l-0.27,-0.37l-1.44,-0.1l-0.12,-1.31l-0.12,-0.21l-0.87,-0.65l0.38,-0.68l1.76,-1.41l0.08,0.22l0.27,0.2l1.33,0.07l0.31,-0.34l-0.35,-2.75l0.85,-0.25l1.32,1.88l1.11,2.36l0.27,0.17l2.89,0.02l0.78,1.82l-1.32,0.56l-0.12,0.09l-0.72,0.93l0.1,0.45l2.93,1.52l3.62,5.27l1.88,1.78l0.58,1.67l-0.38,2.11l-1.87,-0.79l-0.37,0.11l-0.99,1.54l-1.51,-0.73Z",name:"Laos"},TW:{path:"M725.6,222.5l-1.5,4.22l-0.82,1.65l-1.01,-1.7l-0.26,-1.8l1.4,-2.48l1.8,-1.81l0.76,0.53l-0.38,1.39Z",name:"Taiwan"},TT:{path:"M266.35,259.46l0.41,-0.39l0.09,-0.23l-0.04,-0.75l1.14,-0.26l0.2,0.03l-0.07,1.37l-1.73,0.23Z",name:"Trinidad and Tobago"},TR:{path:"M513.25,175.38l3.63,1.17l0.14,0.01l2.88,-0.45l2.11,0.26l0.18,-0.03l2.9,-1.53l2.51,-0.13l2.25,1.37l0.36,0.88l-0.23,1.36l0.19,0.33l1.81,0.72l0.61,0.53l-1.31,0.64l-0.16,0.34l0.76,3.24l-0.44,0.8l0.01,0.3l1.19,2.02l-0.71,0.29l-0.74,-0.62l-0.15,-0.07l-2.91,-0.37l-0.15,0.02l-1.04,0.43l-2.78,0.44l-1.44,-0.03l-2.83,1.06l-1.95,0.01l-1.28,-0.52l-0.2,-0.01l-2.62,0.76l-0.7,-0.48l-0.47,0.22l-0.13,1.49l-1.01,0.94l-0.58,-0.82l0.79,-0.9l0.04,-0.34l-0.31,-0.15l-1.46,0.23l-2.03,-0.64l-0.3,0.07l-1.65,1.58l-3.58,0.3l-1.94,-1.47l-0.17,-0.06l-2.7,-0.1l-0.28,0.17l-0.51,1.06l-1.47,0.29l-2.32,-1.46l-0.17,-0.05l-2.55,0.05l-1.4,-2.7l-1.72,-1.54l1.11,-2.06l-0.07,-0.37l-1.35,-1.19l2.47,-2.51l3.74,-0.11l0.26,-0.17l0.96,-2.07l4.56,0.38l0.19,-0.05l2.97,-1.92l2.84,-0.83l4.03,-0.06l4.31,2.08ZM488.85,176.8l-1.81,1.38l-0.57,-1.01l0.02,-0.36l0.45,-0.25l0.13,-0.15l0.78,-1.87l-0.11,-0.37l-0.72,-0.47l1.91,-0.71l1.89,0.35l0.25,0.97l0.17,0.2l1.87,0.83l-0.19,0.31l-2.82,0.16l-0.18,0.07l-1.06,0.91Z",name:"Turkey"},LK:{path:"M625.44,266.07l-0.35,2.4l-0.9,0.61l-1.91,0.5l-1.04,-1.75l-0.43,-3.5l1.0,-3.6l1.34,1.09l1.13,1.72l1.16,2.52Z",name:"Sri Lanka"},TN:{path:"M444.91,206.18l-0.99,-4.57l-0.12,-0.18l-1.43,-1.04l-0.02,-0.53l-0.11,-0.22l-1.95,-1.59l-0.19,-1.85l1.44,-1.47l0.08,-0.14l0.59,-2.34l-0.38,-2.77l0.44,-1.28l2.52,-1.08l1.41,0.28l-0.06,1.2l0.43,0.28l1.81,-0.9l0.02,0.06l-1.14,1.28l-0.08,0.2l-0.02,1.32l0.11,0.24l0.74,0.6l-0.29,2.18l-1.56,1.35l-0.09,0.32l0.48,1.54l0.28,0.21l1.11,0.04l0.55,1.17l0.15,0.14l0.76,0.35l-0.12,1.79l-1.1,0.72l-0.8,0.91l-1.68,1.04l-0.13,0.32l0.25,1.08l-0.18,0.96l-0.74,0.39Z",name:"Tunisia"},TL:{path:"M734.21,307.22l0.17,-0.34l1.99,-0.52l1.72,-0.08l0.78,-0.3l0.29,0.1l-0.43,0.32l-2.57,1.09l-1.71,0.59l-0.05,-0.49l-0.19,-0.36Z",name:"East Timor"},TM:{path:"M553.16,173.51l-0.12,1.0l-0.26,-0.65l0.38,-0.34ZM553.54,173.16l0.13,-0.12l0.43,-0.09l-0.56,0.21ZM555.68,172.6l0.65,-0.14l1.53,0.76l1.71,2.29l0.27,0.12l1.27,-0.14l2.81,-0.04l0.29,-0.38l-0.35,-1.27l1.98,-0.97l1.96,-1.63l3.05,1.44l0.25,2.23l0.14,0.22l0.96,0.61l0.18,0.05l2.61,-0.13l0.68,0.44l1.2,2.97l0.1,0.13l2.85,2.03l1.67,1.41l2.66,1.45l3.13,1.17l-0.05,1.23l-0.36,-0.04l-1.12,-0.73l-0.44,0.14l-0.34,0.89l-1.96,0.52l-0.22,0.23l-0.47,2.17l-1.26,0.78l-1.93,0.42l-0.21,0.18l-0.46,1.14l-1.64,0.33l-2.3,-0.97l-0.2,-2.23l-0.28,-0.27l-1.76,-0.1l-2.78,-2.48l-0.15,-0.07l-1.95,-0.31l-2.82,-1.48l-1.78,-0.27l-0.18,0.03l-1.03,0.51l-1.6,-0.08l-0.22,0.08l-1.72,1.6l-1.83,0.46l-0.39,-1.7l0.36,-3.0l-0.16,-0.3l-1.73,-0.88l0.57,-1.77l-0.25,-0.39l-1.33,-0.14l0.41,-1.85l2.05,0.63l0.21,-0.01l2.2,-0.95l0.09,-0.49l-1.78,-1.75l-0.69,-1.66l-0.07,-0.03Z",name:"Turkmenistan"},TJ:{path:"M597.99,178.71l-0.23,0.23l-2.57,-0.47l-0.35,0.25l-0.24,1.7l0.32,0.34l2.66,-0.22l3.15,0.95l4.47,-0.42l0.58,2.45l0.39,0.21l0.71,-0.25l1.22,0.53l-0.06,1.01l0.29,1.28l-2.19,-0.0l-1.71,-0.21l-0.23,0.07l-1.51,1.25l-1.05,0.27l-0.77,0.51l-0.71,-0.67l0.22,-2.28l-0.24,-0.32l-0.43,-0.08l0.17,-0.57l-0.16,-0.36l-1.36,-0.66l-0.34,0.05l-1.08,1.01l-0.09,0.15l-0.25,1.09l-0.24,0.26l-1.36,-0.05l-0.27,0.14l-0.65,1.06l-0.58,-0.39l-0.3,-0.02l-1.68,0.86l-0.36,-0.16l1.28,-2.65l0.02,-0.2l-0.54,-2.17l-0.18,-0.21l-1.53,-0.58l0.41,-0.82l1.89,0.13l0.26,-0.12l1.19,-1.63l0.77,-1.82l2.66,-0.55l-0.33,0.87l0.01,0.23l0.36,0.82l0.3,0.18l0.23,-0.02Z",name:"Tajikistan"},LS:{path:"M493.32,359.69l0.69,0.65l-0.65,1.12l-0.38,0.8l-1.27,0.39l-0.18,0.15l-0.4,0.77l-0.59,0.18l-1.59,-1.78l1.16,-1.5l1.3,-1.02l0.97,-0.46l0.94,0.72Z",name:"Lesotho"},TH:{path:"M677.42,253.68l-1.7,-0.88l-0.14,-0.03l-1.77,0.04l0.3,-1.64l-0.3,-0.35l-2.21,0.01l-0.3,0.28l-0.2,2.76l-2.15,5.9l-0.02,0.13l0.17,1.83l0.28,0.27l1.45,0.07l0.93,2.1l0.44,2.15l0.08,0.15l1.4,1.44l0.16,0.09l1.43,0.27l1.04,1.05l-0.58,0.73l-1.24,0.22l-0.15,-0.99l-0.15,-0.22l-2.04,-1.1l-0.36,0.06l-0.23,0.23l-0.72,-0.71l-0.41,-1.18l-0.06,-0.11l-1.33,-1.42l-1.22,-1.2l-0.5,0.13l-0.15,0.54l-0.14,-0.41l0.26,-1.48l0.73,-2.38l1.2,-2.57l1.37,-2.35l0.02,-0.27l-0.95,-2.26l0.03,-1.19l-0.29,-1.42l-0.06,-0.13l-1.65,-2.0l-0.46,-0.99l0.62,-0.34l0.13,-0.15l0.92,-2.23l-0.02,-0.27l-1.05,-1.74l-1.57,-1.86l-1.04,-1.96l0.76,-0.34l0.16,-0.16l1.07,-2.63l1.58,-0.1l0.16,-0.06l1.43,-1.11l1.24,-0.52l0.84,0.62l0.13,1.43l0.28,0.27l1.34,0.09l-0.54,2.39l0.05,2.39l0.45,0.25l2.48,-1.45l0.6,0.36l0.17,0.04l1.47,-0.07l0.25,-0.15l0.41,-0.73l1.58,0.15l1.76,1.93l0.15,2.44l0.08,0.18l1.94,2.15l-0.1,1.96l-0.66,0.93l-2.25,-0.34l-3.24,0.49l-0.19,0.12l-1.6,2.12l-0.06,0.24l0.48,2.46Z",name:"Thailand"},TF:{path:"M593.76,417.73l1.38,0.84l2.15,0.37l0.04,0.31l-0.59,1.24l-3.36,0.19l-0.05,-1.38l0.43,-1.56Z",name:"French Southern and Antarctic Lands"},TG:{path:"M425.23,269.29l-1.49,0.4l-0.43,-0.68l-0.64,-1.54l-0.18,-1.16l0.54,-2.21l-0.04,-0.24l-0.59,-0.86l-0.23,-1.9l0.0,-1.82l-0.07,-0.19l-0.95,-1.19l0.1,-0.41l1.58,0.04l-0.23,0.97l0.08,0.28l1.55,1.55l0.09,1.13l0.08,0.19l0.42,0.43l-0.11,5.66l0.52,1.53Z",name:"Togo"},TD:{path:"M457.57,252.46l0.23,-1.08l-0.28,-0.36l-1.32,-0.05l0.0,-1.35l-0.1,-0.22l-0.9,-0.82l0.99,-3.1l3.12,-2.37l0.12,-0.23l0.13,-3.33l0.95,-5.2l0.53,-1.09l-0.07,-0.36l-0.94,-0.81l-0.03,-0.7l-0.12,-0.23l-0.84,-0.61l-0.57,-3.76l2.21,-1.26l19.67,9.88l0.12,9.74l-1.83,-0.15l-0.28,0.14l-1.14,1.89l-0.68,1.62l0.05,0.31l0.33,0.38l-0.61,0.58l-0.08,0.3l0.25,0.93l-0.58,0.95l-0.29,1.01l0.34,0.37l0.67,-0.11l0.39,0.73l0.03,1.4l0.11,0.23l0.8,0.65l-0.01,0.24l-1.38,0.37l-0.11,0.06l-1.27,1.03l-1.83,2.76l-2.21,1.1l-2.34,-0.15l-0.82,0.25l-0.2,0.37l0.19,0.68l-1.16,0.79l-1.01,0.94l-2.92,0.89l-0.5,-0.46l-0.17,-0.08l-0.41,-0.05l-0.28,0.12l-0.38,0.54l-1.36,0.12l0.1,-0.18l0.01,-0.27l-0.78,-1.72l-0.35,-1.03l-0.17,-0.18l-1.03,-0.41l-1.29,-1.28l0.36,-0.78l0.9,0.2l0.14,-0.0l0.67,-0.17l1.36,0.02l0.26,-0.45l-1.32,-2.22l0.09,-1.64l-0.17,-1.68l-0.04,-0.13l-0.93,-1.53Z",name:"Chad"},LY:{path:"M457.99,226.38l-1.57,0.87l-1.25,-1.28l-0.13,-0.08l-3.85,-1.11l-1.04,-1.57l-0.09,-0.09l-1.98,-1.23l-0.27,-0.02l-0.93,0.39l-0.72,-1.2l-0.09,-1.07l-0.06,-0.16l-1.33,-1.75l0.83,-0.94l0.07,-0.24l-0.21,-1.64l0.31,-1.43l-0.17,-1.29l0.43,-2.26l-0.15,-1.33l-0.73,-2.18l0.99,-0.52l0.16,-0.21l0.22,-1.16l-0.22,-1.06l1.54,-0.95l0.81,-0.92l1.19,-0.78l0.14,-0.23l0.12,-1.76l2.57,0.84l0.16,0.01l0.99,-0.23l2.01,0.45l3.19,1.2l1.12,2.36l0.2,0.16l2.24,0.53l3.5,1.14l2.65,1.36l0.29,-0.01l1.22,-0.71l1.27,-1.32l0.07,-0.29l-0.55,-2.0l0.69,-1.19l1.7,-1.23l1.61,-0.35l3.2,0.54l0.78,1.14l0.24,0.13l0.85,0.01l0.84,0.47l2.35,0.31l0.42,0.63l-0.79,1.16l-0.04,0.26l0.35,1.08l-0.61,1.6l-0.0,0.2l0.73,2.16l0.0,24.24l-2.58,0.01l-0.3,0.29l-0.02,0.62l-19.55,-9.83l-0.28,0.01l-2.53,1.44Z",name:"Libya"},AE:{path:"M550.59,223.8l0.12,0.08l1.92,-0.41l3.54,0.15l0.23,-0.09l1.71,-1.79l1.86,-1.7l1.31,-1.36l0.26,0.5l0.28,1.72l-0.93,0.01l-0.3,0.26l-0.21,1.73l0.11,0.27l0.08,0.06l-0.7,0.32l-0.17,0.27l-0.01,0.99l-0.68,1.02l-0.05,0.15l-0.06,0.96l-0.32,0.36l-7.19,-1.27l-0.79,-2.22Z",name:"United Arab Emirates"},VE:{path:"M240.66,256.5l0.65,0.91l-0.03,1.13l-1.05,1.39l-0.03,0.31l0.95,2.0l0.32,0.17l1.08,-0.16l0.24,-0.21l0.56,-1.83l-0.06,-0.29l-0.71,-0.81l-0.1,-1.58l2.9,-0.96l0.19,-0.37l-0.29,-1.02l0.45,-0.41l0.72,1.43l0.26,0.16l1.65,0.04l1.46,1.27l0.08,0.72l0.3,0.27l2.28,0.02l2.55,-0.25l1.34,1.06l0.14,0.06l1.92,0.31l0.2,-0.03l1.4,-0.79l0.15,-0.25l0.02,-0.36l2.82,-0.14l1.17,-0.01l-0.41,0.14l-0.14,0.46l0.86,1.19l0.22,0.12l1.93,0.18l1.73,1.13l0.37,1.9l0.31,0.24l1.21,-0.05l0.52,0.32l-1.63,1.21l-0.11,0.17l-0.22,0.92l0.07,0.27l0.63,0.69l-0.31,0.24l-1.48,0.39l-0.22,0.3l0.04,1.03l-0.59,0.6l-0.01,0.41l1.67,1.87l0.23,0.48l-0.72,0.76l-2.71,0.91l-1.78,0.39l-0.13,0.06l-0.6,0.49l-1.84,-0.58l-1.89,-0.33l-0.18,0.03l-0.47,0.23l-0.02,0.53l0.96,0.56l-0.08,1.58l0.35,1.58l0.26,0.23l1.91,0.19l0.02,0.07l-1.54,0.62l-0.18,0.2l-0.25,0.92l-0.88,0.35l-1.85,0.58l-0.16,0.13l-0.4,0.64l-1.66,0.14l-1.22,-1.18l-0.79,-2.52l-0.67,-0.88l-0.66,-0.43l0.99,-0.98l0.09,-0.26l-0.09,-0.56l-0.08,-0.16l-0.66,-0.69l-0.47,-1.54l0.18,-1.67l0.55,-0.85l0.45,-1.35l-0.15,-0.36l-0.89,-0.43l-0.19,-0.02l-1.39,0.28l-1.76,-0.13l-0.92,0.23l-1.64,-2.01l-0.17,-0.1l-1.54,-0.33l-3.05,0.23l-0.5,-0.73l-0.15,-0.12l-0.45,-0.15l-0.05,-0.28l0.28,-0.86l0.01,-0.15l-0.2,-1.01l-0.08,-0.15l-0.5,-0.5l-0.3,-1.08l-0.25,-0.22l-0.89,-0.12l0.54,-1.18l0.29,-1.73l0.66,-0.85l0.94,-0.7l0.09,-0.11l0.3,-0.6Z",name:"Venezuela"},AF:{path:"M574.42,192.1l2.24,0.95l0.18,0.02l1.89,-0.38l0.22,-0.18l0.46,-1.14l1.82,-0.4l1.5,-0.91l0.14,-0.19l0.46,-2.12l1.93,-0.51l0.2,-0.18l0.26,-0.68l0.87,0.57l0.13,0.05l0.79,0.09l1.35,0.02l1.83,0.59l0.75,0.34l0.26,-0.01l1.66,-0.85l0.7,0.46l0.42,-0.09l0.72,-1.17l1.32,0.05l0.23,-0.1l0.39,-0.43l0.07,-0.14l0.24,-1.08l0.86,-0.81l0.94,0.46l-0.2,0.64l0.23,0.38l0.49,0.09l-0.21,2.15l0.09,0.25l0.99,0.94l0.38,0.03l0.83,-0.57l1.06,-0.27l0.12,-0.06l1.46,-1.21l1.63,0.2l2.4,0.0l0.17,0.32l-1.12,0.25l-1.23,0.52l-2.86,0.33l-2.69,0.6l-0.13,0.06l-1.46,1.25l-0.07,0.36l0.58,1.18l0.25,1.21l-1.13,1.08l-0.09,0.25l0.09,0.98l-0.53,0.79l-2.22,-0.08l-0.28,0.44l0.83,1.57l-1.3,0.58l-0.13,0.11l-1.06,1.69l-0.05,0.18l0.13,1.51l-0.73,0.58l-0.78,-0.22l-0.14,-0.01l-1.91,0.36l-0.23,0.19l-0.2,0.57l-1.65,-0.0l-0.22,0.1l-1.4,1.56l-0.08,0.19l-0.08,2.13l-2.99,1.05l-1.67,-0.23l-0.27,0.1l-0.39,0.46l-1.43,-0.31l-2.43,0.4l-3.69,-1.23l1.96,-2.15l0.08,-0.24l-0.21,-1.78l-0.23,-0.26l-1.69,-0.42l-0.19,-1.62l-0.77,-2.08l0.98,-1.41l-0.14,-0.45l-0.82,-0.31l0.6,-1.79l0.93,-3.21Z",name:"Afghanistan"},IQ:{path:"M534.42,190.89l0.13,0.14l1.5,0.78l0.15,1.34l-1.13,0.87l-0.11,0.16l-0.58,2.2l0.04,0.24l1.73,2.67l0.12,0.1l2.99,1.49l1.18,1.94l-0.39,1.89l0.29,0.36l0.5,-0.0l0.02,1.17l0.08,0.2l0.83,0.86l-2.36,-0.29l-0.29,0.13l-1.74,2.49l-4.4,-0.21l-7.03,-5.49l-3.73,-1.94l-2.92,-0.74l-0.89,-3.0l5.33,-2.81l0.15,-0.19l0.95,-3.43l-0.2,-2.0l1.19,-0.61l0.11,-0.09l1.23,-1.73l0.92,-0.38l2.75,0.35l0.81,0.68l0.31,0.05l0.94,-0.38l1.5,3.17Z",name:"Iraq"},IS:{path:"M384.26,87.96l-0.51,2.35l0.08,0.28l2.61,2.58l-2.99,2.83l-7.16,2.72l-2.08,0.7l-9.51,-1.71l1.89,-1.36l-0.07,-0.53l-4.4,-1.59l3.33,-0.59l0.25,-0.32l-0.11,-1.2l-0.25,-0.27l-4.82,-0.88l1.38,-2.2l3.54,-0.57l3.8,2.74l0.33,0.01l3.68,-2.18l3.02,1.12l0.25,-0.02l4.01,-2.18l3.72,0.27Z",name:"Iceland"},IR:{path:"M556.2,187.5l2.05,-0.52l0.13,-0.07l1.69,-1.57l1.55,0.08l0.15,-0.03l1.02,-0.5l1.64,0.25l2.82,1.48l1.91,0.3l2.8,2.49l0.18,0.08l1.61,0.09l0.19,2.09l-1.0,3.47l-0.69,2.04l0.18,0.38l0.73,0.28l-0.85,1.22l-0.04,0.28l0.81,2.19l0.19,1.72l0.23,0.26l1.69,0.42l0.17,1.43l-2.18,2.39l-0.01,0.4l1.22,1.42l1.0,1.62l0.12,0.11l2.23,1.11l0.06,2.2l0.2,0.27l1.03,0.38l0.14,0.83l-3.38,1.3l-0.18,0.19l-0.87,2.85l-4.44,-0.76l-2.75,-0.62l-2.64,-0.32l-1.01,-3.11l-0.17,-0.19l-1.2,-0.48l-0.18,-0.01l-1.99,0.51l-2.42,1.25l-2.89,-0.84l-2.48,-2.03l-2.41,-0.79l-1.61,-2.47l-1.84,-3.63l-0.36,-0.15l-1.22,0.4l-1.48,-0.84l-0.37,0.06l-0.72,0.82l-1.08,-1.12l-0.02,-1.35l-0.3,-0.29l-0.43,0.0l0.34,-1.64l-0.04,-0.22l-1.29,-2.11l-0.12,-0.11l-3.0,-1.49l-1.62,-2.49l0.52,-1.98l1.18,-0.92l0.11,-0.27l-0.19,-1.66l-0.16,-0.23l-1.55,-0.81l-1.58,-3.33l-1.3,-2.2l0.41,-0.75l0.03,-0.21l-0.73,-3.12l1.2,-0.59l0.35,0.9l1.26,1.35l0.15,0.09l1.81,0.39l0.91,-0.09l0.15,-0.06l2.9,-2.13l0.7,-0.16l0.48,0.56l-0.75,1.26l0.05,0.37l1.56,1.53l0.28,0.08l0.37,-0.09l0.7,1.89l0.21,0.19l2.31,0.59l1.69,1.4l0.15,0.07l3.66,0.49l3.91,-0.76l0.23,-0.19l0.19,-0.52Z",name:"Iran"},AM:{path:"M530.51,176.08l2.91,-0.39l0.41,0.63l0.11,0.1l0.66,0.36l-0.32,0.47l0.07,0.41l1.1,0.84l-0.53,0.7l0.06,0.42l1.06,0.8l1.01,0.44l0.04,1.56l-0.44,0.04l-0.88,-1.46l0.01,-0.37l-0.3,-0.31l-0.98,0.01l-0.65,-0.69l-0.26,-0.09l-0.38,0.06l-0.97,-0.82l-1.64,-0.65l0.2,-1.2l-0.02,-0.16l-0.28,-0.69Z",name:"Armenia"},IT:{path:"M451.68,158.58l0.2,0.16l3.3,0.75l-0.22,1.26l0.02,0.18l0.35,0.78l-1.4,-0.32l-0.21,0.03l-2.04,1.1l-0.16,0.29l0.13,1.47l-0.29,0.82l0.02,0.24l0.82,1.57l0.1,0.11l2.28,1.5l1.29,2.53l2.79,2.43l0.2,0.07l1.83,-0.02l0.31,0.34l-0.46,0.39l0.06,0.5l4.06,1.97l2.06,1.49l0.17,0.36l-0.24,0.53l-1.08,-1.07l-0.15,-0.08l-2.18,-0.49l-0.33,0.15l-1.05,1.91l0.11,0.4l1.63,0.98l-0.22,1.12l-0.84,0.14l-0.22,0.15l-1.27,2.38l-0.54,0.12l0.01,-0.47l0.48,-1.46l0.5,-0.58l0.03,-0.35l-0.97,-1.69l-0.76,-1.48l-0.17,-0.15l-0.94,-0.33l-0.68,-1.18l-0.16,-0.13l-1.53,-0.52l-1.03,-1.14l-0.19,-0.1l-1.78,-0.19l-1.88,-1.3l-2.27,-1.94l-1.64,-1.68l-0.76,-2.94l-0.21,-0.21l-1.22,-0.35l-2.01,-1.0l-0.24,-0.01l-1.15,0.42l-0.11,0.07l-1.38,1.36l-0.5,0.11l0.19,-0.87l-0.21,-0.35l-1.19,-0.34l-0.56,-2.06l0.76,-0.82l0.03,-0.36l-0.68,-1.08l0.04,-0.31l0.68,0.42l0.19,0.04l1.21,-0.15l0.14,-0.06l1.18,-0.89l0.25,0.29l0.25,0.1l1.19,-0.1l0.25,-0.18l0.45,-1.04l1.61,0.34l0.19,-0.02l1.1,-0.53l0.17,-0.22l0.15,-0.95l1.19,0.35l0.35,-0.16l0.23,-0.47l2.11,-0.47l0.45,0.89ZM459.35,184.63l-0.71,1.81l0.0,0.23l0.33,0.79l-0.37,1.03l-1.6,-0.91l-1.33,-0.34l-3.24,-1.36l0.23,-0.99l2.73,0.24l3.95,-0.5ZM443.95,175.91l1.26,1.77l-0.31,3.47l-0.82,-0.13l-0.26,0.08l-0.83,0.79l-0.64,-0.52l-0.1,-3.42l-0.44,-1.34l0.91,0.1l0.21,-0.06l1.01,-0.74Z",name:"Italy"},VN:{path:"M690.8,230.21l-2.86,1.93l-2.09,2.46l-0.06,0.11l-0.55,1.8l0.04,0.26l4.26,6.1l2.31,1.63l1.46,1.97l1.12,4.62l-0.32,4.3l-1.97,1.57l-2.85,1.62l-2.09,2.14l-2.83,2.13l-0.67,-1.19l0.65,-1.58l-0.09,-0.35l-1.47,-1.14l1.67,-0.79l2.57,-0.18l0.22,-0.47l-0.89,-1.24l3.88,-1.8l0.17,-0.24l0.31,-3.05l-0.01,-0.13l-0.56,-1.63l0.44,-2.48l-0.01,-0.15l-0.63,-1.81l-0.08,-0.12l-1.87,-1.77l-3.64,-5.3l-0.11,-0.1l-2.68,-1.39l0.45,-0.59l1.53,-0.65l0.16,-0.39l-0.97,-2.27l-0.27,-0.18l-2.89,-0.02l-1.04,-2.21l-1.28,-1.83l0.96,-0.46l1.97,0.01l2.43,-0.3l0.13,-0.05l1.95,-1.29l1.04,0.85l0.13,0.06l1.98,0.42l-0.32,1.21l0.09,0.3l1.19,1.07l0.12,0.07l1.88,0.51Z",name:"Vietnam"},AR:{path:"M258.11,341.34l1.4,1.81l0.51,-0.06l0.89,-1.94l2.51,0.1l0.36,0.49l4.6,4.31l0.15,0.08l1.99,0.39l3.01,1.93l2.5,1.01l0.28,0.91l-2.4,3.97l0.17,0.44l2.57,0.74l2.81,0.41l2.09,-0.44l0.14,-0.07l2.27,-2.06l0.09,-0.17l0.38,-2.2l0.88,-0.36l1.05,1.29l-0.04,1.88l-1.98,1.4l-1.72,1.13l-2.84,2.65l-3.34,3.73l-0.07,0.12l-0.63,2.22l-0.67,2.85l0.02,2.73l-0.47,0.54l-0.07,0.17l-0.36,3.28l0.12,0.27l3.03,2.32l-0.31,1.78l0.11,0.29l1.44,1.15l-0.11,1.17l-2.32,3.57l-3.59,1.51l-4.95,0.6l-2.72,-0.29l-0.32,0.38l0.5,1.67l-0.49,2.13l0.01,0.16l0.4,1.29l-1.27,0.88l-2.41,0.39l-2.33,-1.05l-0.31,0.04l-0.97,0.78l-0.11,0.27l0.35,2.98l0.16,0.23l1.69,0.91l0.31,-0.02l1.08,-0.75l0.46,0.96l-2.1,0.88l-2.01,1.89l-0.09,0.18l-0.36,3.05l-0.51,1.42l-2.16,0.01l-0.19,0.07l-1.96,1.59l-0.1,0.15l-0.72,2.34l0.08,0.31l2.46,2.31l0.13,0.07l2.09,0.56l-0.74,2.45l-2.86,1.75l-0.12,0.14l-1.59,3.71l-2.2,1.24l-0.1,0.09l-1.03,1.54l-0.04,0.23l0.81,3.45l0.06,0.13l1.13,1.32l-2.59,-0.57l-5.89,-0.44l-0.92,-1.73l0.05,-2.4l-0.34,-0.3l-1.49,0.19l-0.72,-0.98l-0.2,-3.21l1.79,-1.33l0.1,-0.13l0.79,-2.04l0.02,-0.16l-0.27,-1.52l1.31,-2.69l0.91,-4.15l-0.23,-1.72l0.91,-0.49l0.15,-0.33l-0.27,-1.16l-0.15,-0.2l-0.87,-0.46l0.65,-1.01l-0.04,-0.37l-1.06,-1.09l-0.54,-3.2l0.83,-0.51l0.14,-0.29l-0.42,-3.6l0.58,-2.98l0.64,-2.5l1.41,-1.0l0.12,-0.32l-0.75,-2.8l-0.01,-2.48l1.81,-1.78l0.09,-0.22l-0.06,-2.3l1.39,-2.69l0.03,-0.14l0.01,-2.58l-0.11,-0.24l-0.57,-0.45l-1.1,-4.59l1.49,-2.73l0.04,-0.17l-0.23,-2.59l0.86,-2.38l1.6,-2.48l1.74,-1.65l0.04,-0.39l-0.64,-0.89l0.42,-0.7l0.04,-0.16l-0.08,-4.26l2.55,-1.23l0.16,-0.18l0.86,-2.75l-0.01,-0.22l-0.22,-0.48l1.84,-2.1l3.0,0.59ZM256.77,438.98l-2.1,0.15l-1.18,-1.14l-0.19,-0.08l-1.53,-0.09l-2.38,-0.0l-0.0,-6.28l0.4,0.65l1.25,2.55l0.11,0.12l3.26,2.07l3.19,0.8l-0.82,1.26Z",name:"Argentina"},AU:{path:"M705.55,353.06l0.09,0.09l0.37,0.05l0.13,-0.35l-0.57,-1.69l0.48,0.3l0.71,0.99l0.34,0.11l0.2,-0.29l-0.04,-1.37l-0.04,-0.14l-1.22,-2.07l-0.28,-0.9l-0.51,-0.69l0.24,-1.33l0.52,-0.7l0.34,-1.32l0.01,-0.13l-0.25,-1.44l0.51,-0.94l0.1,1.03l0.23,0.26l0.32,-0.14l1.01,-1.72l1.94,-0.84l1.27,-1.14l1.84,-0.92l1.0,-0.18l0.6,0.28l0.26,-0.0l1.94,-0.96l1.48,-0.28l0.19,-0.13l0.32,-0.49l0.51,-0.18l1.42,0.05l2.63,-0.76l0.11,-0.06l1.36,-1.15l0.08,-0.1l0.61,-1.33l1.42,-1.27l0.1,-0.19l0.11,-1.03l0.06,-1.32l1.39,-1.74l0.85,1.79l0.4,0.14l1.07,-0.51l0.11,-0.45l-0.77,-1.05l0.53,-0.84l0.86,0.43l0.43,-0.22l0.29,-1.85l1.29,-1.19l0.6,-0.98l1.16,-0.4l0.2,-0.27l0.02,-0.34l0.74,0.2l0.38,-0.27l0.03,-0.44l1.98,-0.61l1.7,1.08l1.36,1.48l0.22,0.1l1.55,0.02l1.57,0.24l0.33,-0.4l-0.48,-1.27l1.09,-1.86l1.06,-0.63l0.1,-0.42l-0.28,-0.46l0.93,-1.24l1.36,-0.8l1.16,0.27l0.14,0.0l2.1,-0.48l0.23,-0.3l-0.05,-1.3l-0.18,-0.26l-1.08,-0.49l0.44,-0.12l1.52,0.58l1.39,1.06l2.11,0.65l0.19,-0.0l0.59,-0.21l1.44,0.72l0.27,0.0l1.37,-0.68l0.84,0.2l0.26,-0.06l0.37,-0.3l0.82,0.89l-0.56,1.14l-0.84,0.91l-0.75,0.07l-0.26,0.38l0.26,0.9l-0.67,1.15l-0.88,1.24l-0.05,0.25l0.18,0.72l0.12,0.17l1.99,1.42l1.96,0.84l1.25,0.86l1.8,1.51l0.19,0.07l0.63,-0.0l1.15,0.58l0.34,0.7l0.17,0.15l2.39,0.88l0.24,-0.02l1.65,-0.88l0.14,-0.16l0.49,-1.37l0.52,-1.19l0.31,-1.39l0.75,-2.02l0.01,-0.19l-0.33,-1.16l0.16,-0.67l0.0,-0.13l-0.28,-1.41l0.3,-1.78l0.42,-0.45l0.05,-0.33l-0.33,-0.73l0.56,-1.25l0.48,-1.39l0.07,-0.69l0.58,-0.59l0.48,0.84l0.17,1.53l0.17,0.24l0.47,0.23l0.09,0.9l0.05,0.14l0.87,1.23l0.17,1.33l-0.09,0.89l0.03,0.15l0.9,2.0l0.43,0.13l1.38,-0.83l0.71,0.92l1.06,0.88l-0.22,0.96l0.0,0.14l0.53,2.2l0.38,1.3l0.15,0.18l0.52,0.26l0.62,2.01l-0.23,1.27l0.02,0.18l0.81,1.76l0.14,0.14l2.69,1.35l3.21,2.21l-0.2,0.4l0.04,0.34l1.39,1.6l0.95,2.78l0.43,0.16l0.79,-0.46l0.85,0.96l0.39,0.05l0.22,-0.15l0.36,2.33l0.09,0.18l1.78,1.63l1.16,1.01l1.9,2.1l0.67,2.05l0.06,1.47l-0.17,1.64l0.03,0.17l1.16,2.22l-0.14,2.28l-0.43,1.24l-0.68,2.44l0.04,1.63l-0.48,1.92l-1.06,2.43l-1.79,1.32l-0.1,0.12l-0.91,2.15l-0.82,1.37l-0.76,2.47l-0.98,1.46l-0.63,2.14l-0.33,2.02l0.1,0.82l-1.21,0.85l-2.71,0.1l-0.13,0.03l-2.31,1.19l-1.21,1.17l-1.34,1.11l-1.89,-1.18l-1.33,-0.46l0.32,-1.24l-0.4,-0.35l-1.46,0.61l-2.06,1.98l-1.99,-0.73l-1.43,-0.46l-1.45,-0.22l-2.32,-0.81l-1.51,-1.67l-0.45,-2.11l-0.6,-1.5l-0.07,-0.11l-1.23,-1.16l-0.16,-0.08l-1.96,-0.28l0.59,-0.99l0.03,-0.24l-0.61,-2.1l-0.54,-0.08l-1.16,1.85l-1.23,0.29l0.73,-0.88l0.06,-0.12l0.37,-1.57l0.93,-1.33l0.05,-0.2l-0.2,-2.07l-0.53,-0.17l-2.01,2.35l-1.52,0.94l-0.12,0.14l-0.82,1.93l-1.5,-0.9l0.07,-1.32l-0.06,-0.2l-1.57,-2.04l-1.15,-0.92l0.3,-0.41l-0.1,-0.44l-3.21,-1.69l-0.13,-0.03l-1.69,-0.08l-2.35,-1.31l-0.16,-0.04l-4.55,0.27l-3.24,0.99l-2.8,0.91l-2.33,-0.18l-0.17,0.03l-2.63,1.41l-2.14,0.64l-0.2,0.19l-0.47,1.42l-0.8,0.99l-1.99,0.06l-1.55,0.24l-2.27,-0.5l-1.79,0.3l-1.71,0.13l-0.19,0.09l-1.38,1.39l-0.58,-0.1l-0.21,0.04l-1.26,0.8l-1.13,0.85l-1.72,-0.1l-1.6,-0.0l-2.58,-1.76l-1.21,-0.49l0.04,-1.19l1.04,-0.32l0.16,-0.12l0.42,-0.64l0.05,-0.19l-0.09,-0.97l0.3,-2.0l-0.28,-1.64l-1.34,-2.84l-0.39,-1.49l0.1,-1.51l-0.04,-0.17l-0.96,-1.72l-0.06,-0.73l-0.09,-0.19l-1.04,-1.01l-0.3,-2.02l-0.05,-0.12l-1.23,-1.83ZM784.95,393.35l2.39,1.01l0.2,0.01l3.26,-0.96l1.19,0.16l0.16,3.19l-0.78,0.95l-0.07,0.16l-0.19,1.83l-0.43,-0.41l-0.44,0.03l-1.61,1.96l-0.4,-0.12l-1.38,-0.09l-1.43,-2.42l-0.37,-2.03l-1.4,-2.53l0.04,-0.94l1.27,0.2Z",name:"Australia"},IL:{path:"M509.04,199.22l0.71,0.0l0.27,-0.17l0.15,-0.33l0.19,-0.01l0.02,0.73l-0.27,0.34l0.02,0.08l-0.32,0.62l-0.65,-0.27l-0.41,0.19l-0.52,1.85l0.16,0.35l0.14,0.07l-0.17,0.1l-0.14,0.21l-0.11,0.73l0.39,0.33l0.81,-0.26l0.03,0.64l-0.97,3.43l-1.28,-3.67l0.62,-0.78l-0.03,-0.41l0.58,-1.16l0.5,-2.07l0.27,-0.54Z",name:"Israel"},IN:{path:"M615.84,192.58l2.4,2.97l-0.24,2.17l0.05,0.2l0.94,1.35l-0.06,0.97l-1.46,-0.3l-0.35,0.36l0.7,3.06l0.12,0.18l2.46,1.75l3.11,1.72l-1.23,0.96l-0.1,0.13l-0.97,2.55l0.16,0.38l2.41,1.02l2.37,1.33l3.27,1.52l3.43,0.37l1.37,1.3l0.17,0.08l1.92,0.25l3.0,0.62l2.15,-0.04l0.28,-0.22l0.29,-1.06l0.0,-0.13l-0.32,-1.66l0.16,-0.94l1.0,-0.37l0.23,2.28l0.18,0.24l2.28,1.02l0.2,0.02l1.52,-0.41l2.06,0.18l2.08,-0.08l0.29,-0.27l0.18,-1.66l-0.1,-0.26l-0.53,-0.44l1.38,-0.23l0.15,-0.07l2.26,-2.0l2.75,-1.65l1.97,0.63l0.25,-0.03l1.54,-0.99l0.89,1.28l-0.72,0.97l0.2,0.48l2.49,0.37l0.11,0.61l-0.69,0.39l-0.15,0.3l0.15,1.22l-1.36,-0.37l-0.23,0.03l-3.24,1.86l-0.15,0.28l0.07,1.44l-1.33,2.16l-0.04,0.13l-0.12,1.24l-0.98,1.91l-1.72,-0.53l-0.39,0.28l-0.09,2.66l-0.52,0.83l-0.04,0.23l0.21,0.89l-0.71,0.36l-1.21,-3.85l-0.29,-0.21l-0.69,0.01l-0.29,0.23l-0.28,1.17l-0.84,-0.84l0.6,-1.17l0.97,-0.13l0.23,-0.16l1.15,-2.25l-0.18,-0.42l-1.54,-0.47l-2.3,0.04l-2.13,-0.33l-0.19,-1.63l-0.26,-0.26l-1.13,-0.13l-1.93,-1.13l-0.42,0.13l-0.88,1.82l0.08,0.37l1.47,1.15l-1.21,0.77l-0.1,0.1l-0.56,0.97l0.13,0.42l1.31,0.61l-0.36,1.35l0.01,0.2l0.85,1.95l0.37,2.05l-0.26,0.68l-1.55,-0.02l-3.09,0.54l-0.25,0.32l0.13,1.84l-1.21,1.4l-3.64,1.79l-2.79,3.04l-1.86,1.61l-2.48,1.68l-0.13,0.25l-0.0,1.0l-1.07,0.55l-2.21,0.9l-1.13,0.13l-0.25,0.19l-0.75,1.96l-0.02,0.15l0.52,3.31l0.13,2.03l-1.03,2.35l-0.03,0.12l-0.01,4.03l-1.02,0.1l-0.23,0.15l-1.14,1.93l0.04,0.36l0.44,0.48l-1.83,0.57l-0.18,0.15l-0.81,1.65l-0.74,0.53l-2.14,-2.12l-1.14,-3.47l-0.96,-2.57l-0.9,-1.26l-1.3,-2.38l-0.61,-3.14l-0.44,-1.62l-2.29,-3.56l-1.03,-4.94l-0.74,-3.29l0.01,-3.12l-0.49,-2.51l-0.41,-0.22l-3.56,1.53l-1.59,-0.28l-2.96,-2.87l0.94,-0.74l0.06,-0.41l-0.74,-1.03l-2.73,-2.1l1.35,-1.43l5.38,0.01l0.29,-0.36l-0.5,-2.29l-0.09,-0.15l-1.33,-1.28l-0.27,-1.96l-0.12,-0.2l-1.36,-1.0l2.42,-2.48l2.77,0.2l0.24,-0.1l2.62,-2.85l1.59,-2.8l2.41,-2.74l0.07,-0.2l-0.04,-1.82l2.01,-1.51l-0.01,-0.49l-1.95,-1.33l-0.83,-1.81l-0.82,-2.27l0.98,-0.97l3.64,0.66l2.89,-0.42l0.17,-0.08l2.18,-2.15Z",name:"India"},TZ:{path:"M505.77,287.58l0.36,0.23l8.95,5.03l0.15,1.3l0.13,0.21l3.4,2.37l-1.07,2.88l-0.02,0.14l0.15,1.42l0.15,0.23l1.47,0.84l0.05,0.42l-0.66,1.44l-0.02,0.18l0.13,0.72l-0.16,1.16l0.03,0.19l0.87,1.57l1.03,2.48l0.12,0.14l0.53,0.32l-1.59,1.18l-2.64,0.95l-1.45,-0.04l-0.2,0.07l-0.81,0.69l-1.64,0.06l-0.68,0.3l-2.9,-0.69l-1.71,0.17l-0.65,-3.18l-0.05,-0.12l-1.35,-1.88l-0.19,-0.12l-2.41,-0.46l-1.38,-0.74l-1.63,-0.44l-0.96,-0.41l-0.95,-0.58l-1.31,-3.09l-1.47,-1.46l-0.45,-1.31l0.24,-1.34l-0.39,-1.99l0.71,-0.08l0.18,-0.09l0.91,-0.91l0.98,-1.31l0.59,-0.5l0.11,-0.24l-0.02,-0.81l-0.08,-0.2l-0.47,-0.5l-0.1,-0.67l0.51,-0.23l0.18,-0.25l0.14,-1.47l-0.05,-0.2l-0.76,-1.09l0.45,-0.15l2.71,0.03l5.01,-0.19Z",name:"Tanzania"},AZ:{path:"M539.36,175.66l0.16,0.09l1.11,0.2l0.32,-0.15l0.4,-0.71l1.22,-0.99l1.11,1.33l1.26,2.09l0.22,0.14l1.06,0.13l0.28,0.29l-1.46,0.17l-0.26,0.24l-0.43,2.26l-0.39,0.92l-0.85,0.63l-0.12,0.25l0.06,1.2l-0.22,0.05l-1.28,-1.25l0.74,-1.25l-0.03,-0.35l-0.74,-0.86l-0.3,-0.1l-1.05,0.27l-2.49,1.82l-0.04,-1.46l-0.18,-0.27l-1.09,-0.47l-0.8,-0.6l0.53,-0.7l-0.06,-0.42l-1.11,-0.84l0.34,-0.51l-0.11,-0.43l-0.89,-0.48l-0.33,-0.49l0.25,-0.2l1.78,0.81l1.35,0.18l0.25,-0.09l0.34,-0.35l0.02,-0.39l-1.04,-1.36l0.28,-0.18l0.49,0.07l1.65,1.74ZM533.53,180.16l0.63,0.67l0.22,0.09l0.8,-0.0l0.04,0.31l0.66,1.09l-0.94,-0.21l-1.16,-1.24l-0.25,-0.71Z",name:"Azerbaijan"},IE:{path:"M405.17,135.35l0.36,2.16l-1.78,2.84l-4.28,1.91l-3.02,-0.43l1.81,-3.13l0.02,-0.26l-1.23,-3.26l3.24,-2.56l1.54,-1.32l0.37,1.33l-0.49,1.77l0.3,0.38l1.49,-0.05l1.68,0.63Z",name:"Ireland"},ID:{path:"M756.56,287.86l0.69,4.02l0.15,0.21l2.59,1.5l0.39,-0.07l2.05,-2.61l2.75,-1.45l2.09,-0.0l2.08,0.85l1.85,0.89l2.52,0.46l0.08,15.44l-1.72,-1.6l-0.15,-0.07l-2.54,-0.51l-0.29,0.1l-0.53,0.62l-2.53,0.06l0.78,-1.51l1.48,-0.66l0.17,-0.34l-0.65,-2.74l-1.23,-2.19l-0.14,-0.13l-4.85,-2.13l-2.09,-0.23l-3.7,-2.28l-0.41,0.1l-0.67,1.11l-0.63,0.14l-0.41,-0.67l-0.01,-1.01l-0.14,-0.25l-1.39,-0.89l2.05,-0.69l1.73,0.05l0.29,-0.39l-0.21,-0.66l-0.29,-0.21l-3.5,-0.0l-0.9,-1.36l-0.19,-0.13l-2.14,-0.44l-0.65,-0.76l2.86,-0.51l1.28,-0.79l3.75,0.96l0.32,0.76ZM758.01,300.37l-0.79,1.04l-0.14,-1.07l0.4,-0.81l0.29,-0.47l0.24,0.31l-0.0,1.0ZM747.45,292.9l0.48,1.02l-1.45,-0.69l-2.09,-0.21l-1.45,0.16l-1.28,-0.07l0.35,-0.81l2.86,-0.1l2.58,0.68ZM741.15,285.69l-0.16,-0.25l-0.72,-3.08l0.47,-1.86l0.35,-0.38l0.1,0.73l0.25,0.26l1.28,0.19l0.18,0.78l-0.11,1.8l-0.96,-0.18l-0.35,0.22l-0.38,1.52l0.05,0.24ZM741.19,285.75l0.76,0.97l-0.11,0.05l-0.65,-1.02ZM739.18,293.52l-0.61,0.54l-1.44,-0.38l-0.25,-0.55l1.93,-0.09l0.36,0.48ZM728.4,295.87l-0.27,-0.07l-2.26,0.89l-0.37,-0.41l0.27,-0.8l-0.09,-0.33l-1.68,-1.37l0.17,-2.29l-0.42,-0.3l-1.67,0.76l-0.17,0.29l0.21,2.92l0.09,3.34l-1.22,0.28l-0.78,-0.54l0.65,-2.1l0.01,-0.14l-0.39,-2.42l-0.29,-0.25l-0.86,-0.02l-0.63,-1.4l0.99,-1.61l0.35,-1.97l1.24,-3.73l0.49,-0.96l1.95,-1.7l1.86,0.69l3.16,0.35l2.92,-0.1l0.17,-0.06l2.24,-1.65l0.11,0.14l-1.8,2.22l-1.72,0.44l-2.41,-0.48l-4.21,0.13l-2.19,0.36l-0.25,0.24l-0.36,1.9l0.08,0.27l2.24,2.23l0.4,0.02l1.29,-1.08l3.19,-0.58l-0.19,0.06l-1.04,1.4l-2.13,0.94l-0.12,0.45l2.26,3.06l-0.37,0.69l0.03,0.32l1.51,1.95ZM728.48,295.97l0.59,0.76l-0.02,1.37l-1.0,0.55l-0.64,-0.58l1.09,-1.84l-0.02,-0.26ZM728.64,286.95l0.79,-0.14l-0.07,0.39l-0.72,-0.24ZM732.38,310.1l-1.89,0.49l-0.06,-0.06l0.17,-0.64l1.0,-1.42l2.14,-0.87l0.1,0.2l0.04,0.58l-1.49,1.72ZM728.26,305.71l-0.17,0.63l-3.53,0.67l-3.02,-0.28l-0.0,-0.42l1.66,-0.44l1.47,0.71l0.16,0.03l1.75,-0.21l1.69,-0.69ZM722.98,310.33l-0.74,0.03l-2.52,-1.35l1.42,-0.3l1.19,0.7l0.72,0.63l-0.06,0.28ZM716.24,305.63l0.66,0.49l0.22,0.06l1.35,-0.18l0.31,0.53l-4.18,0.77l-0.8,-0.01l0.51,-0.86l1.2,-0.02l0.24,-0.12l0.49,-0.65ZM715.84,280.21l0.09,0.34l2.25,1.86l-2.25,0.22l-0.24,0.17l-0.84,1.71l-0.03,0.15l0.1,2.11l-2.27,1.62l-0.13,0.24l-0.06,2.46l-0.74,2.92l-0.02,-0.05l-0.39,-0.16l-2.62,1.04l-0.86,-1.33l-0.23,-0.14l-1.71,-0.14l-1.19,-0.76l-0.25,-0.03l-2.78,0.84l-0.79,-1.05l-0.26,-0.12l-1.61,0.13l-1.8,-0.25l-0.36,-3.13l-0.15,-0.23l-1.18,-0.65l-1.13,-2.02l-0.33,-2.1l0.27,-2.19l1.05,-1.17l0.28,1.12l0.1,0.16l1.71,1.41l0.28,0.05l1.55,-0.49l1.54,0.17l0.23,-0.07l1.4,-1.21l1.05,-0.19l2.3,0.68l0.16,0.0l2.04,-0.53l0.21,-0.19l1.26,-3.41l0.91,-0.82l0.09,-0.14l0.8,-2.64l2.63,0.0l1.71,0.33l-1.19,1.89l0.02,0.34l1.74,2.24l-0.37,1.0ZM692.67,302.0l0.26,0.19l4.8,0.25l0.28,-0.16l0.44,-0.83l4.29,1.12l0.85,1.52l0.23,0.15l3.71,0.45l2.37,1.15l-2.06,0.69l-2.77,-1.0l-2.25,0.07l-2.57,-0.18l-2.31,-0.45l-2.94,-0.97l-1.84,-0.25l-0.13,0.01l-0.97,0.29l-4.34,-0.98l-0.38,-0.94l-0.25,-0.19l-1.76,-0.14l1.31,-1.84l2.81,0.14l1.97,0.96l0.95,0.19l0.28,0.74ZM685.63,299.27l-2.36,0.04l-2.07,-2.05l-3.17,-2.02l-1.06,-1.5l-1.88,-2.02l-1.22,-1.85l-1.9,-3.49l-2.2,-2.11l-0.71,-2.08l-0.94,-1.99l-0.1,-0.12l-2.21,-1.54l-1.35,-2.17l-1.86,-1.39l-2.53,-2.68l-0.14,-0.81l1.22,0.08l3.76,0.47l2.16,2.4l1.94,1.7l1.37,1.04l2.35,2.67l0.22,0.1l2.44,0.04l1.99,1.62l1.42,2.06l0.09,0.09l1.67,1.0l-0.88,1.8l0.11,0.39l1.44,0.87l0.13,0.04l0.68,0.05l0.41,1.62l0.87,1.4l0.22,0.14l1.71,0.21l1.06,1.38l-0.61,3.04l-0.09,3.6Z",name:"Indonesia"},UA:{path:"M500.54,141.42l0.9,0.13l0.27,-0.11l0.52,-0.62l0.68,0.13l2.43,-0.3l1.32,1.57l-0.45,0.48l-0.07,0.26l0.21,1.03l0.27,0.24l1.85,0.15l0.76,1.22l-0.05,0.55l0.2,0.31l3.18,1.15l0.18,0.01l1.75,-0.47l1.42,1.41l0.22,0.09l1.42,-0.03l3.44,0.99l0.02,0.65l-0.97,1.62l-0.03,0.24l0.52,1.67l-0.29,0.79l-2.24,0.22l-0.14,0.05l-1.29,0.89l-0.13,0.23l-0.07,1.16l-1.75,0.22l-0.12,0.04l-1.6,0.98l-2.27,0.16l-0.12,0.04l-2.16,1.17l-0.16,0.29l0.15,1.94l0.14,0.23l1.23,0.75l0.18,0.04l2.06,-0.15l-0.22,0.51l-2.67,0.54l-3.27,1.72l-1.0,-0.45l0.45,-1.19l-0.19,-0.39l-2.34,-0.78l0.15,-0.2l2.32,-1.0l0.09,-0.49l-0.73,-0.72l-0.15,-0.08l-3.69,-0.75l-0.14,-0.96l-0.35,-0.25l-2.32,0.39l-0.21,0.15l-0.91,1.7l-1.77,2.1l-0.93,-0.44l-0.24,-0.0l-1.05,0.45l-0.48,-0.25l0.13,-0.07l0.14,-0.15l0.43,-1.04l0.67,-0.97l0.04,-0.26l-0.1,-0.31l0.04,-0.02l0.11,0.19l0.24,0.15l1.48,0.09l0.78,-0.25l0.07,-0.53l-0.27,-0.19l0.09,-0.25l-0.08,-0.33l-0.81,-0.74l-0.34,-1.24l-0.14,-0.18l-0.73,-0.42l0.15,-0.87l-0.11,-0.29l-1.13,-0.86l-0.15,-0.06l-0.97,-0.11l-1.79,-0.97l-0.2,-0.03l-1.66,0.32l-0.13,0.06l-0.52,0.41l-0.95,-0.0l-0.23,0.11l-0.56,0.66l-1.74,0.29l-0.79,0.43l-1.01,-0.68l-0.16,-0.05l-1.57,-0.01l-1.52,-0.35l-0.23,0.04l-0.71,0.45l-0.09,-0.43l-0.13,-0.19l-1.18,-0.74l0.38,-1.02l0.53,-0.64l0.35,0.12l0.37,-0.41l-0.57,-1.29l2.1,-2.5l1.16,-0.36l0.2,-0.2l0.27,-0.92l-0.01,-0.2l-1.1,-2.52l0.79,-0.09l0.13,-0.05l1.3,-0.86l1.83,-0.07l2.48,0.26l2.84,0.8l1.91,0.06l0.88,0.45l0.29,-0.01l0.72,-0.44l0.49,0.58l0.25,0.11l2.2,-0.16l0.94,0.3l0.39,-0.26l0.15,-1.57l0.61,-0.59l2.01,-0.19Z",name:"Ukraine"},QA:{path:"M548.47,221.47l-0.15,-1.72l0.59,-1.23l0.38,-0.16l0.54,0.6l0.04,1.4l-0.47,1.37l-0.41,0.11l-0.53,-0.37Z",name:"Qatar"},MZ:{path:"M507.71,314.14l1.65,-0.18l2.96,0.7l0.2,-0.02l0.6,-0.29l1.68,-0.06l0.18,-0.07l0.8,-0.69l1.5,0.02l2.74,-0.98l1.74,-1.27l0.25,0.7l-0.1,2.47l0.31,2.27l0.1,3.97l0.42,1.24l-0.7,1.71l-0.94,1.73l-1.52,1.52l-5.06,2.21l-2.88,2.8l-1.01,0.51l-1.72,1.81l-0.99,0.58l-0.15,0.23l-0.21,1.86l0.04,0.19l1.17,1.95l0.47,1.47l0.03,0.74l0.39,0.28l0.05,-0.01l-0.06,2.13l-0.39,1.19l0.1,0.33l0.42,0.32l-0.28,0.83l-0.95,0.86l-2.03,0.88l-3.08,1.49l-1.1,0.99l-0.09,0.28l0.21,1.13l0.21,0.23l0.38,0.11l-0.14,0.89l-1.39,-0.02l-0.17,-0.94l-0.38,-1.23l-0.2,-0.89l0.44,-2.91l-0.01,-0.14l-0.65,-1.88l-1.15,-3.55l2.52,-2.85l0.68,-1.89l0.29,-0.18l0.14,-0.2l0.28,-1.53l-0.03,-0.19l-0.36,-0.7l0.1,-1.83l0.49,-1.84l-0.01,-3.26l-0.14,-0.25l-1.3,-0.83l-0.11,-0.04l-1.08,-0.17l-0.47,-0.55l-0.1,-0.08l-1.16,-0.54l-0.13,-0.03l-1.83,0.04l-0.32,-2.25l7.19,-1.99l1.32,1.12l0.29,0.06l0.55,-0.19l0.75,0.49l0.11,0.81l-0.49,1.11l-0.02,0.15l0.19,1.81l0.09,0.18l1.63,1.59l0.48,-0.1l0.72,-1.68l0.99,-0.49l0.17,-0.29l-0.21,-3.29l-0.04,-0.13l-1.11,-1.92l-0.9,-0.82l-0.21,-0.08l-0.62,0.03l-0.63,-2.98l0.61,-1.67Z",name:"Mozambique"}},height:440.7063107441331,projection:{type:"mill",centralMeridian:11.5},width:900})
};
},{"jquery":33}],26:[function(require,module,exports){
/**
 * JavaScript BitArray - v0.2.0
 *
 * Licensed under the revised BSD License.
 * Copyright 2010-2012 Bram Stein
 * All rights reserved.
 */

/**
 * Creates a new empty BitArray with the given length or initialises the BitArray with the given hex representation.
 */
var BitArray = function (size, hex) {
    this.length = size;
    this.buffer = new ArrayBuffer(Math.ceil(this.length / 32) * 4);
    this.wordArray = new Uint32Array(this.buffer);

    if (hex) {
        hex = hex.slice(/^0x/.exec(hex) ? 2 : 0);

        if (hex.length * 4 > this.length) {
            throw 'Hex value is too large for this bit array.'
        } else if (hex.length * 4 < this.length) {
            // pad it
            while(hex.length * 4 < this.length) {
                hex = '0' + hex;
            }
        }

        for (var i = 0; i < (hex.length / 8); i++) {
            var slice = hex.slice(i * 8, i * 8 + 8);
            this.wordArray[i] = parseInt(slice, 16);
        }
    }
};

/**
 * Returns the total number of bits in this BitArray.
 */
BitArray.prototype.size = function() {
    return this.length;
};

/**
 * Sets the bit at index to a value (boolean.)
 */
BitArray.prototype.set = function(index, value) {
    if (arguments.length !== 2) {
        throw 'Index and value are required arguments.';
    }
    if (index > this.length - 1) {
        throw 'Index too large.' + index + ' ' + this.length;
    }
    var wordOffset = Math.floor(index / 32);
    // The underlying byte buffer will be initialized to zeros.
    var bitOffset = index - wordOffset * 32;
    if (value) {
        this.wordArray[wordOffset] |= (1 << bitOffset);
    } else {
        this.wordArray[wordOffset] &= ~(1 << bitOffset);
    }
    return this;
};

/**
 * Toggles the bit at index. If the bit is on, it is turned off. Likewise, if the bit is off it is turned on.
 */
BitArray.prototype.toggle = function(index) {
    if (index > this.length - 1) {
        throw 'Index too large.';
    }
    var wordOffset = Math.floor(index / 32);
    var bitOffset = index - wordOffset * 32;
    this.wordArray[wordOffset] ^= 1 << bitOffset;
    return this;
};

/**
 * Returns the value of the bit at index (boolean.)
 */
BitArray.prototype.get = function(index) {
    if (index > this.length - 1) {
        throw 'Index too large.';
    }
    var wordOffset = Math.floor(index / 32);
    var bitOffset = index - wordOffset * 32;
    return !! (this.wordArray[wordOffset] & (1 << bitOffset));
};

/**
 * Resets the BitArray so that it is empty and can be re-used.
 */
BitArray.prototype.reset = function() {
    this.buffer = new ArrayBuffer(Math.ceil(this.length / 32) * 4);
    this.wordArray = new Uint32Array(this.buffer);
    return this;
};

/**
 * Returns a copy of this BitArray.
 */
BitArray.prototype.copy = function() {
    var cp = new BitArray(this.length);
    for (var i = 0; i < this.wordArray.length; i++) {
        cp.wordArray[i] = this.wordArray[i];
    }
    return cp;
};

/**
 * Returns true if this BitArray equals another. Two BitArrays are considered
 * equal if both have the same length and bit pattern.
 */
BitArray.prototype.equals = function(x) {
    if (this.length !== x.length) {
        return false;
    }
    for (var i = 0; i < this.wordArray.length; i++) {
        if (this.wordArray[i] !== x.wordArray[i]) {
            return false;
        }
    }
    return true;
};

/**
 * Returns the JSON representation of this BitArray.
 */
BitArray.prototype.toJSON = function() {
    return JSON.stringify(this.toArray());
};

/**
 * Returns a string representation of the BitArray with bits
 * in mathemetical order.
 */
BitArray.prototype.toBinaryString = function () {
	return this.toArray().map(function (value) {
		return value ? '1' : '0';
	}).reverse().join('');
};

/**
 * Returns a hexadecimal string representation of the BitArray
 * with bits in logical order.
 */
BitArray.prototype.toHexString = function () {
    var result = [];

    for (var i = 0; i < this.wordArray.length; i += 1) {
        //result.push(this.wordArray[i].toString(16));
        result.push(('00000000' + (this.wordArray[i] >>> 0).toString(16)).slice(-8));
    }
    return result.join('');
};

/**
 * Returns a string representation of the BitArray with bits
 * in logical order.
 */
BitArray.prototype.toString = function() {
    return this.toArray().map(function(value) {
        return value ? '1': '0';
    }).join('');
};

/**
 * Convert the BitArray to an Array of boolean values (slow).
 */
BitArray.prototype.toArray = function() {
    var result = [];
    for (var i = 0; i < this.length; i++) {
        result.push(Boolean(this.get(i)));
    }
    return result;
};

/**
 * Returns the total number of bits set to one in this BitArray.
 */
BitArray.prototype.count = function() {
    var total = 0;
    for (var i = 0; i < this.wordArray.length; i++) {
        x = this.wordArray[i];
        // count bits of each 2-bit chunk
        x = x - ((x >> 1) & 0x55555555);
        // count bits of each 4-bit chunk
        x = (x & 0x33333333) + ((x >> 2) & 0x33333333);
        // count bits of each 8-bit chunk
        x = x + (x >> 4);
        // mask out junk
        x &= 0xF0F0F0F;
        // add all four 8-bit chunks
        total += (x * 0x01010101) >> 24;
    }
    return total;
};

/**
 * Inverts this BitArray.
 */
BitArray.prototype.not = function() {
    for (var i = 0; i < this.wordArray.length; i++) {
        this.wordArray[i] = ~(this.wordArray[i]);
    }
    return this;
};

/**
 * Bitwise OR on the values of this BitArray using BitArray x.
 */
BitArray.prototype.or = function(x) {
    if (this.length !== x.length) {
        throw 'Arguments must be of the same length.';
    }
    for (var i = 0; i < this.wordArray.length; i++) {
        this.wordArray[i] |= x.wordArray[i];
    }
    return this;
};

/**
 * Bitwise AND on the values of this BitArray using BitArray x.
 */
BitArray.prototype.and = function(x) {
    if (this.length !== x.length) {
        throw 'Arguments must be of the same length.';
    }
    for (var i = 0; i < this.wordArray.length; i++) {
        this.wordArray[i] &= x.wordArray[i];
    }
    return this;
};

/**
 * Bitwise XOR on the values of this BitArray using BitArray x.
 */
BitArray.prototype.xor = function(x) {
    if (this.length !== x.length) {
        throw 'Arguments must be of the same length.';
    }
    for (var i = 0; i < this.wordArray.length; i++) {
        this.wordArray[i] ^= x.wordArray[i];
    }
    return this;
};

module.exports = BitArray;

},{}],27:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],28:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}],29:[function(require,module,exports){
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],30:[function(require,module,exports){
(function (process,global){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = require('./support/isBuffer');

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = require('inherits');

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

}).call(this,require("/Users/wrossmck/Dropbox/Documents/workspace/panic-tycoon/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./support/isBuffer":29,"/Users/wrossmck/Dropbox/Documents/workspace/panic-tycoon/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":28,"inherits":27}],31:[function(require,module,exports){
/*!
 * deepcopy.js Copyright(c) 2013 sasa+1
 * https://github.com/sasaplus1/deepcopy.js
 * Released under the MIT License.
 */


/** export deepcopy function. */
module.exports = require('./lib/deepcopy');

},{"./lib/deepcopy":32}],32:[function(require,module,exports){
/*!
 * @license deepcopy.js Copyright(c) 2013 sasa+1
 * https://github.com/sasaplus1/deepcopy.js
 * Released under the MIT License.
 */

(function() {

  // fallback for util methods.
  var util = (typeof module !== 'undefined') ? require('util') : (function() {

    var to = Object.prototype.toString;

    function isArray(value) {
      return (
          typeof value === 'object' &&
          to.call(value) === '[object Array]');
    }

    function isDate(value) {
      return (
          typeof value === 'object' &&
          to.call(value) === '[object Date]');
    }

    function isRegExp(value) {
      return (
          typeof value === 'object' &&
          to.call(value) === '[object RegExp]');
    }

    return {
      // use Array.isArray if implemented.
      isArray: Array.isArray || isArray,
      isDate: isDate,
      isRegExp: isRegExp
    };

  }());

  // fallback for Object.keys.
  var getKeys = Object.keys || function(object) {
    var keys = [],
        key;

    if (object === null || typeof object !== 'object') {
      throw new TypeError('parameter type is not an Object');
    }

    for (key in object) {
      object.hasOwnProperty(key) && keys.push(key);
    }

    return keys;
  };

  /**
   * get element index from array.
   *
   * @private
   * @param {Array} array target array.
   * @param {*} searchElement find element.
   * @throws {TypeError} when parameter array is not an array.
   * @return {Number} return index of array. return -1 if element not found.
   */
  function indexOfArray(array, searchElement) {
    var i, len;

    if (!util.isArray(array)) {
      throw new TypeError('parameter type is not an Array');
    }

    for (i = 0, len = array.length; i < len; ++i) {
      if (array[i] === searchElement) {
        return i;
      }
    }

    return -1;
  }

  /**
   * get deep copy of target.
   *
   * return deep copy if target is Date, RegExp or primitive types.
   * return shallow copy if target is function.
   *
   * do recursive copy if target is Array or Object.
   * also can copy if target has circular reference.
   *
   * @param {*} target target of deep copy.
   * @return {*} deep copy value.
   */
  function deepcopy(target) {
    var clone = (util.isArray(target)) ? [] : {},
        visited = [target],
        ref = [clone];

    /**
     * get deep copy of target.
     *
     * @private
     * @param {*} target target of deep copy.
     * @param {Object|Array} clone reference of deep copy value.
     * @param {Object[]} visited copied references.
     * @param {Object[]} ref reference of own.
     * @return {*} deep copy value.
     */
    function deepcopy_(target, clone, visited, ref) {
      var keys, i, len, key, value, index, object, reference;

      // number, string, boolean, null, undefined and function.
      if (target === null || typeof target !== 'object') {
        return target;
      }

      if (util.isDate(target)) {
        return new Date(Number(target));
      }

      if (util.isRegExp(target)) {
        return new RegExp(
            target.source,
            String(target).slice(target.source.length + 2));
      }

      keys = getKeys(target);

      for (i = 0, len = keys.length; i < len; ++i) {
        key = keys[i];
        value = target[key];

        if (value !== null && typeof value === 'object') {
          index = indexOfArray(visited, value);
          if (index === -1) {
            object = (util.isArray(value)) ? [] : {};
            visited.push(value);
            ref.push(object);
          } else {
            reference = ref[index];
          }
        }

        // value is not reference type if object is undefined.
        // not used object variable if target is not reference type.
        clone[key] = reference || deepcopy_(value, object, visited, ref);
        index = object = reference = null;
      }

      return clone;
    }

    return deepcopy_(target, clone, visited, ref);
  }

  // export function.
  if (typeof module !== 'undefined') {
    module.exports = deepcopy;
  } else {
    this.deepcopy = deepcopy;
  }

}());

},{"util":30}],33:[function(require,module,exports){
/*!
 * jQuery JavaScript Library v1.11.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-05-01T17:42Z
 */

(function( global, factory ) {

	if ( typeof module === "object" && typeof module.exports === "object" ) {
		// For CommonJS and CommonJS-like environments where a proper window is present,
		// execute the factory and get jQuery
		// For environments that do not inherently posses a window with a document
		// (such as Node.js), expose a jQuery-making factory as module.exports
		// This accentuates the need for the creation of a real window
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Can't do this because several apps including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
// Support: Firefox 18+
//

var deletedIds = [];

var slice = deletedIds.slice;

var concat = deletedIds.concat;

var push = deletedIds.push;

var indexOf = deletedIds.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = {};



var
	version = "1.11.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android<4.1, IE<9
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num != null ?

			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Return all the elements in a clean array
			slice.call( this );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each: function( callback, args ) {
		return jQuery.each( this, callback, args );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map(this, function( elem, i ) {
			return callback.call( elem, i, elem );
		}));
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor(null);
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: deletedIds.sort,
	splice: deletedIds.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var src, copyIsArray, copy, name, options, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
		target = {};
	}

	// extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray(src) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend({
	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	// See test/unit/core.js for details concerning isFunction.
	// Since version 1.3, DOM methods and functions like alert
	// aren't supported. They return false on IE (#2968).
	isFunction: function( obj ) {
		return jQuery.type(obj) === "function";
	},

	isArray: Array.isArray || function( obj ) {
		return jQuery.type(obj) === "array";
	},

	isWindow: function( obj ) {
		/* jshint eqeqeq: false */
		return obj != null && obj == obj.window;
	},

	isNumeric: function( obj ) {
		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		return !jQuery.isArray( obj ) && obj - parseFloat( obj ) >= 0;
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	isPlainObject: function( obj ) {
		var key;

		// Must be an Object.
		// Because of IE, we also have to check the presence of the constructor property.
		// Make sure that DOM nodes and window objects don't pass through, as well
		if ( !obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		try {
			// Not own constructor property must be Object
			if ( obj.constructor &&
				!hasOwn.call(obj, "constructor") &&
				!hasOwn.call(obj.constructor.prototype, "isPrototypeOf") ) {
				return false;
			}
		} catch ( e ) {
			// IE8,9 Will throw exceptions on certain host objects #9897
			return false;
		}

		// Support: IE<9
		// Handle iteration over inherited properties before own properties.
		if ( support.ownLast ) {
			for ( key in obj ) {
				return hasOwn.call( obj, key );
			}
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.
		for ( key in obj ) {}

		return key === undefined || hasOwn.call( obj, key );
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call(obj) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	// Workarounds based on findings by Jim Driscoll
	// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
	globalEval: function( data ) {
		if ( data && jQuery.trim( data ) ) {
			// We use execScript on Internet Explorer
			// We use an anonymous function so that context is window
			// rather than jQuery in Firefox
			( window.execScript || function( data ) {
				window[ "eval" ].call( window, data );
			} )( data );
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	// args is for internal usage only
	each: function( obj, callback, args ) {
		var value,
			i = 0,
			length = obj.length,
			isArray = isArraylike( obj );

		if ( args ) {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			}

		// A special, fast, case for the most common use of each
		} else {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			}
		}

		return obj;
	},

	// Support: Android<4.1, IE<9
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArraylike( Object(arr) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		var len;

		if ( arr ) {
			if ( indexOf ) {
				return indexOf.call( arr, elem, i );
			}

			len = arr.length;
			i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

			for ( ; i < len; i++ ) {
				// Skip accessing in sparse arrays
				if ( i in arr && arr[ i ] === elem ) {
					return i;
				}
			}
		}

		return -1;
	},

	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		while ( j < len ) {
			first[ i++ ] = second[ j++ ];
		}

		// Support: IE<9
		// Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists)
		if ( len !== len ) {
			while ( second[j] !== undefined ) {
				first[ i++ ] = second[ j++ ];
			}
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var value,
			i = 0,
			length = elems.length,
			isArray = isArraylike( elems ),
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArray ) {
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var args, proxy, tmp;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: function() {
		return +( new Date() );
	},

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
});

// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
});

function isArraylike( obj ) {
	var length = obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	if ( obj.nodeType === 1 && length ) {
		return true;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v1.10.19
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-04-18
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + -(new Date()),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// General-purpose constants
	strundefined = typeof undefined,
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf if we can't use a native one
	indexOf = arr.indexOf || function( elem ) {
		var i = 0,
			len = this.length;
		for ( ; i < len; i++ ) {
			if ( this[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",
	// http://www.w3.org/TR/css3-syntax/#characters
	characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Loosely modeled on CSS identifier characters
	// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
	// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = characterEncoding.replace( "w", "w#" ),

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + characterEncoding + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + characterEncoding + ")" ),
		"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
		"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,
	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var match, elem, m, nodeType,
		// QSA vars
		i, groups, old, nid, newContext, newSelector;

	if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
		setDocument( context );
	}

	context = context || document;
	results = results || [];

	if ( !selector || typeof selector !== "string" ) {
		return results;
	}

	if ( (nodeType = context.nodeType) !== 1 && nodeType !== 9 ) {
		return [];
	}

	if ( documentIsHTML && !seed ) {

		// Shortcuts
		if ( (match = rquickExpr.exec( selector )) ) {
			// Speed-up: Sizzle("#ID")
			if ( (m = match[1]) ) {
				if ( nodeType === 9 ) {
					elem = context.getElementById( m );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document (jQuery #6963)
					if ( elem && elem.parentNode ) {
						// Handle the case where IE, Opera, and Webkit return items
						// by name instead of ID
						if ( elem.id === m ) {
							results.push( elem );
							return results;
						}
					} else {
						return results;
					}
				} else {
					// Context is not a document
					if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
						contains( context, elem ) && elem.id === m ) {
						results.push( elem );
						return results;
					}
				}

			// Speed-up: Sizzle("TAG")
			} else if ( match[2] ) {
				push.apply( results, context.getElementsByTagName( selector ) );
				return results;

			// Speed-up: Sizzle(".CLASS")
			} else if ( (m = match[3]) && support.getElementsByClassName && context.getElementsByClassName ) {
				push.apply( results, context.getElementsByClassName( m ) );
				return results;
			}
		}

		// QSA path
		if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
			nid = old = expando;
			newContext = context;
			newSelector = nodeType === 9 && selector;

			// qSA works strangely on Element-rooted queries
			// We can work around this by specifying an extra ID on the root
			// and working up from there (Thanks to Andrew Dupont for the technique)
			// IE 8 doesn't work on object elements
			if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
				groups = tokenize( selector );

				if ( (old = context.getAttribute("id")) ) {
					nid = old.replace( rescape, "\\$&" );
				} else {
					context.setAttribute( "id", nid );
				}
				nid = "[id='" + nid + "'] ";

				i = groups.length;
				while ( i-- ) {
					groups[i] = nid + toSelector( groups[i] );
				}
				newContext = rsibling.test( selector ) && testContext( context.parentNode ) || context;
				newSelector = groups.join(",");
			}

			if ( newSelector ) {
				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch(qsaError) {
				} finally {
					if ( !old ) {
						context.removeAttribute("id");
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = attrs.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== strundefined && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare,
		doc = node ? node.ownerDocument || node : preferredDoc,
		parent = doc.defaultView;

	// If no document and documentElement is available, return
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Set our document
	document = doc;
	docElem = doc.documentElement;

	// Support tests
	documentIsHTML = !isXML( doc );

	// Support: IE>8
	// If iframe document is assigned to "document" variable and if iframe has been reloaded,
	// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
	// IE6-8 do not support the defaultView property so parent will be undefined
	if ( parent && parent !== parent.top ) {
		// IE11 does not have attachEvent, so all must suffer
		if ( parent.addEventListener ) {
			parent.addEventListener( "unload", function() {
				setDocument();
			}, false );
		} else if ( parent.attachEvent ) {
			parent.attachEvent( "onunload", function() {
				setDocument();
			});
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( doc.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Check if getElementsByClassName can be trusted
	support.getElementsByClassName = rnative.test( doc.getElementsByClassName ) && assert(function( div ) {
		div.innerHTML = "<div class='a'></div><div class='a i'></div>";

		// Support: Safari<4
		// Catch class over-caching
		div.firstChild.className = "i";
		// Support: Opera<10
		// Catch gEBCN failure to find non-leading classes
		return div.getElementsByClassName("i").length === 2;
	});

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== strundefined && documentIsHTML ) {
				var m = context.getElementById( id );
				// Check parentNode to catch when Blackberry 4.6 returns
				// nodes that are no longer in the document #6963
				return m && m.parentNode ? [ m ] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== strundefined ) {
				return context.getElementsByTagName( tag );
			}
		} :
		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== strundefined && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			div.innerHTML = "<select msallowclip=''><option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( div.querySelectorAll("[msallowclip^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}
		});

		assert(function( div ) {
			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = doc.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( div.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully does not implement inclusive descendent
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === doc ? -1 :
				b === doc ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return doc;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch(e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== strundefined && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, outerCache, node, diff, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {
							// Seek `elem` from a previously-cached index
							outerCache = parent[ expando ] || (parent[ expando ] = {});
							cache = outerCache[ type ] || [];
							nodeIndex = cache[0] === dirruns && cache[1];
							diff = cache[0] === dirruns && cache[2];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									outerCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						// Use previously-cached element index if available
						} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
							diff = cache[1];

						// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
						} else {
							// Use the same loop as above to seek `elem` from the start
							while ( (node = ++nodeIndex && node && node[ dir ] ||
								(diff = nodeIndex = 0) || start.pop()) ) {

								if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
									// Cache the index of each encountered element
									if ( useCache ) {
										(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
									}

									if ( node === elem ) {
										break;
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf.call( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});
						if ( (oldCache = outerCache[ dir ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							outerCache[ dir ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf.call( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf.call( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			return ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context !== document && context;
			}

			// Add elements passing elementMatchers directly to results
			// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// Apply set filters to unmatched elements
			matchedCount += i;
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is no seed and only one group
	if ( match.length === 1 ) {

		// Take a shortcut and set the context if the root selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome<14
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.pseudos;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;



var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		});

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		});

	}

	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( jQuery.inArray( elem, qualifier ) >= 0 ) !== not;
	});
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		}));
};

jQuery.fn.extend({
	find: function( selector ) {
		var i,
			ret = [],
			self = this,
			len = self.length;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter(function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			}) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow(this, selector || [], false) );
	},
	not: function( selector ) {
		return this.pushStack( winnow(this, selector || [], true) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
});


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// Use the correct document accordingly with window argument (sandbox)
	document = window.document,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	init = jQuery.fn.init = function( selector, context ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector.charAt(0) === "<" && selector.charAt( selector.length - 1 ) === ">" && selector.length >= 3 ) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && (match[1] || !context) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[1] ) {
					context = context instanceof jQuery ? context[0] : context;

					// scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[1],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {
							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[2] );

					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {
						// Handle the case where IE and Opera return items
						// by name instead of ID
						if ( elem.id !== match[2] ) {
							return rootjQuery.find( selector );
						}

						// Otherwise, we inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || rootjQuery ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return typeof rootjQuery.ready !== "undefined" ?
				rootjQuery.ready( selector ) :
				// Execute immediately if ready is not present
				selector( jQuery );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	// methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.extend({
	dir: function( elem, dir, until ) {
		var matched = [],
			cur = elem[ dir ];

		while ( cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery( cur ).is( until )) ) {
			if ( cur.nodeType === 1 ) {
				matched.push( cur );
			}
			cur = cur[dir];
		}
		return matched;
	},

	sibling: function( n, elem ) {
		var r = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				r.push( n );
			}
		}

		return r;
	}
});

jQuery.fn.extend({
	has: function( target ) {
		var i,
			targets = jQuery( target, this ),
			len = targets.length;

		return this.filter(function() {
			for ( i = 0; i < len; i++ ) {
				if ( jQuery.contains( this, targets[i] ) ) {
					return true;
				}
			}
		});
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
				// Always skip document fragments
				if ( cur.nodeType < 11 && (pos ?
					pos.index(cur) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector(cur, selectors)) ) {

					matched.push( cur );
					break;
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.unique( matched ) : matched );
	},

	// Determine the position of an element within
	// the matched set of elements
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[0] && this[0].parentNode ) ? this.first().prevAll().length : -1;
		}

		// index in selector
		if ( typeof elem === "string" ) {
			return jQuery.inArray( this[0], jQuery( elem ) );
		}

		// Locate the position of the desired element
		return jQuery.inArray(
			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[0] : elem, this );
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.unique(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter(selector)
		);
	}
});

function sibling( cur, dir ) {
	do {
		cur = cur[ dir ];
	} while ( cur && cur.nodeType !== 1 );

	return cur;
}

jQuery.each({
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return jQuery.dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return jQuery.dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return jQuery.dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return jQuery.sibling( elem.firstChild );
	},
	contents: function( elem ) {
		return jQuery.nodeName( elem, "iframe" ) ?
			elem.contentDocument || elem.contentWindow.document :
			jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var ret = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			ret = jQuery.filter( selector, ret );
		}

		if ( this.length > 1 ) {
			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				ret = jQuery.unique( ret );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				ret = ret.reverse();
			}
		}

		return this.pushStack( ret );
	};
});
var rnotwhite = (/\S+/g);



// String to Object options format cache
var optionsCache = {};

// Convert String-formatted options into Object-formatted ones and store in cache
function createOptions( options ) {
	var object = optionsCache[ options ] = {};
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	});
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		( optionsCache[ options ] || createOptions( options ) ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,
		// Last fire value (for non-forgettable lists)
		memory,
		// Flag to know if list was already fired
		fired,
		// End of the loop when firing
		firingLength,
		// Index of currently firing callback (modified by remove if needed)
		firingIndex,
		// First callback to fire (used internally by add and fireWith)
		firingStart,
		// Actual callback list
		list = [],
		// Stack of fire calls for repeatable lists
		stack = !options.once && [],
		// Fire callbacks
		fire = function( data ) {
			memory = options.memory && data;
			fired = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = list.length;
			firing = true;
			for ( ; list && firingIndex < firingLength; firingIndex++ ) {
				if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
					memory = false; // To prevent further calls using add
					break;
				}
			}
			firing = false;
			if ( list ) {
				if ( stack ) {
					if ( stack.length ) {
						fire( stack.shift() );
					}
				} else if ( memory ) {
					list = [];
				} else {
					self.disable();
				}
			}
		},
		// Actual Callbacks object
		self = {
			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {
					// First, we save the current length
					var start = list.length;
					(function add( args ) {
						jQuery.each( args, function( _, arg ) {
							var type = jQuery.type( arg );
							if ( type === "function" ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && type !== "string" ) {
								// Inspect recursively
								add( arg );
							}
						});
					})( arguments );
					// Do we need to add the callbacks to the
					// current firing batch?
					if ( firing ) {
						firingLength = list.length;
					// With memory, if we're not firing then
					// we should call right away
					} else if ( memory ) {
						firingStart = start;
						fire( memory );
					}
				}
				return this;
			},
			// Remove a callback from the list
			remove: function() {
				if ( list ) {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
							// Handle firing indexes
							if ( firing ) {
								if ( index <= firingLength ) {
									firingLength--;
								}
								if ( index <= firingIndex ) {
									firingIndex--;
								}
							}
						}
					});
				}
				return this;
			},
			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
			},
			// Remove all callbacks from the list
			empty: function() {
				list = [];
				firingLength = 0;
				return this;
			},
			// Have the list do nothing anymore
			disable: function() {
				list = stack = memory = undefined;
				return this;
			},
			// Is it disabled?
			disabled: function() {
				return !list;
			},
			// Lock the list in its current state
			lock: function() {
				stack = undefined;
				if ( !memory ) {
					self.disable();
				}
				return this;
			},
			// Is it locked?
			locked: function() {
				return !stack;
			},
			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( list && ( !fired || stack ) ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					if ( firing ) {
						stack.push( args );
					} else {
						fire( args );
					}
				}
				return this;
			},
			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},
			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


jQuery.extend({

	Deferred: function( func ) {
		var tuples = [
				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks("memory") ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred(function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[1] ](function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.done( newDefer.resolve )
										.fail( newDefer.reject )
										.progress( newDefer.notify );
								} else {
									newDefer[ tuple[ 0 ] + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
								}
							});
						});
						fns = null;
					}).promise();
				},
				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[1] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(function() {
					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[0] ] = function() {
				deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[0] + "With" ] = list.fireWith;
		});

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( values === progressValues ) {
						deferred.notifyWith( contexts, values );

					} else if ( !(--remaining) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject )
						.progress( updateFunc( i, progressContexts, progressValues ) );
				} else {
					--remaining;
				}
			}
		}

		// if we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
});


// The deferred used on DOM ready
var readyList;

jQuery.fn.ready = function( fn ) {
	// Add the callback
	jQuery.ready.promise().done( fn );

	return this;
};

jQuery.extend({
	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
		if ( !document.body ) {
			return setTimeout( jQuery.ready );
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.triggerHandler ) {
			jQuery( document ).triggerHandler( "ready" );
			jQuery( document ).off( "ready" );
		}
	}
});

/**
 * Clean-up method for dom ready events
 */
function detach() {
	if ( document.addEventListener ) {
		document.removeEventListener( "DOMContentLoaded", completed, false );
		window.removeEventListener( "load", completed, false );

	} else {
		document.detachEvent( "onreadystatechange", completed );
		window.detachEvent( "onload", completed );
	}
}

/**
 * The ready event handler and self cleanup method
 */
function completed() {
	// readyState === "complete" is good enough for us to call the dom ready in oldIE
	if ( document.addEventListener || event.type === "load" || document.readyState === "complete" ) {
		detach();
		jQuery.ready();
	}
}

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called after the browser event has already occurred.
		// we once tried to use readyState "interactive" here, but it caused issues like the one
		// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
		if ( document.readyState === "complete" ) {
			// Handle it asynchronously to allow scripts the opportunity to delay ready
			setTimeout( jQuery.ready );

		// Standards-based browsers support DOMContentLoaded
		} else if ( document.addEventListener ) {
			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed, false );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed, false );

		// If IE event model is used
		} else {
			// Ensure firing before onload, maybe late but safe also for iframes
			document.attachEvent( "onreadystatechange", completed );

			// A fallback to window.onload, that will always work
			window.attachEvent( "onload", completed );

			// If IE and not a frame
			// continually check to see if the document is ready
			var top = false;

			try {
				top = window.frameElement == null && document.documentElement;
			} catch(e) {}

			if ( top && top.doScroll ) {
				(function doScrollCheck() {
					if ( !jQuery.isReady ) {

						try {
							// Use the trick by Diego Perini
							// http://javascript.nwbox.com/IEContentLoaded/
							top.doScroll("left");
						} catch(e) {
							return setTimeout( doScrollCheck, 50 );
						}

						// detach all dom ready events
						detach();

						// and execute any waiting functions
						jQuery.ready();
					}
				})();
			}
		}
	}
	return readyList.promise( obj );
};


var strundefined = typeof undefined;



// Support: IE<9
// Iteration over object's inherited properties before its own
var i;
for ( i in jQuery( support ) ) {
	break;
}
support.ownLast = i !== "0";

// Note: most support tests are defined in their respective modules.
// false until the test is run
support.inlineBlockNeedsLayout = false;

// Execute ASAP in case we need to set body.style.zoom
jQuery(function() {
	// Minified: var a,b,c,d
	var val, div, body, container;

	body = document.getElementsByTagName( "body" )[ 0 ];
	if ( !body || !body.style ) {
		// Return for frameset docs that don't have a body
		return;
	}

	// Setup
	div = document.createElement( "div" );
	container = document.createElement( "div" );
	container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
	body.appendChild( container ).appendChild( div );

	if ( typeof div.style.zoom !== strundefined ) {
		// Support: IE<8
		// Check if natively block-level elements act like inline-block
		// elements when setting their display to 'inline' and giving
		// them layout
		div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";

		support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;
		if ( val ) {
			// Prevent IE 6 from affecting layout for positioned elements #11048
			// Prevent IE from shrinking the body in IE 7 mode #12869
			// Support: IE<8
			body.style.zoom = 1;
		}
	}

	body.removeChild( container );
});




(function() {
	var div = document.createElement( "div" );

	// Execute the test only if not already executed in another module.
	if (support.deleteExpando == null) {
		// Support: IE<9
		support.deleteExpando = true;
		try {
			delete div.test;
		} catch( e ) {
			support.deleteExpando = false;
		}
	}

	// Null elements to avoid leaks in IE.
	div = null;
})();


/**
 * Determines whether an object can have data
 */
jQuery.acceptData = function( elem ) {
	var noData = jQuery.noData[ (elem.nodeName + " ").toLowerCase() ],
		nodeType = +elem.nodeType || 1;

	// Do not set data on non-element DOM nodes because it will not be cleared (#8335).
	return nodeType !== 1 && nodeType !== 9 ?
		false :

		// Nodes accept data unless otherwise specified; rejection can be conditional
		!noData || noData !== true && elem.getAttribute("classid") === noData;
};


var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /([A-Z])/g;

function dataAttr( elem, key, data ) {
	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {

		var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();

		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :
					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch( e ) {}

			// Make sure we set the data so it isn't changed later
			jQuery.data( elem, key, data );

		} else {
			data = undefined;
		}
	}

	return data;
}

// checks a cache object for emptiness
function isEmptyDataObject( obj ) {
	var name;
	for ( name in obj ) {

		// if the public data object is empty, the private is still empty
		if ( name === "data" && jQuery.isEmptyObject( obj[name] ) ) {
			continue;
		}
		if ( name !== "toJSON" ) {
			return false;
		}
	}

	return true;
}

function internalData( elem, name, data, pvt /* Internal Use Only */ ) {
	if ( !jQuery.acceptData( elem ) ) {
		return;
	}

	var ret, thisCache,
		internalKey = jQuery.expando,

		// We have to handle DOM nodes and JS objects differently because IE6-7
		// can't GC object references properly across the DOM-JS boundary
		isNode = elem.nodeType,

		// Only DOM nodes need the global jQuery cache; JS object data is
		// attached directly to the object so GC can occur automatically
		cache = isNode ? jQuery.cache : elem,

		// Only defining an ID for JS objects if its cache already exists allows
		// the code to shortcut on the same path as a DOM node with no cache
		id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;

	// Avoid doing any more work than we need to when trying to get data on an
	// object that has no data at all
	if ( (!id || !cache[id] || (!pvt && !cache[id].data)) && data === undefined && typeof name === "string" ) {
		return;
	}

	if ( !id ) {
		// Only DOM nodes need a new unique ID for each element since their data
		// ends up in the global cache
		if ( isNode ) {
			id = elem[ internalKey ] = deletedIds.pop() || jQuery.guid++;
		} else {
			id = internalKey;
		}
	}

	if ( !cache[ id ] ) {
		// Avoid exposing jQuery metadata on plain JS objects when the object
		// is serialized using JSON.stringify
		cache[ id ] = isNode ? {} : { toJSON: jQuery.noop };
	}

	// An object can be passed to jQuery.data instead of a key/value pair; this gets
	// shallow copied over onto the existing cache
	if ( typeof name === "object" || typeof name === "function" ) {
		if ( pvt ) {
			cache[ id ] = jQuery.extend( cache[ id ], name );
		} else {
			cache[ id ].data = jQuery.extend( cache[ id ].data, name );
		}
	}

	thisCache = cache[ id ];

	// jQuery data() is stored in a separate object inside the object's internal data
	// cache in order to avoid key collisions between internal data and user-defined
	// data.
	if ( !pvt ) {
		if ( !thisCache.data ) {
			thisCache.data = {};
		}

		thisCache = thisCache.data;
	}

	if ( data !== undefined ) {
		thisCache[ jQuery.camelCase( name ) ] = data;
	}

	// Check for both converted-to-camel and non-converted data property names
	// If a data property was specified
	if ( typeof name === "string" ) {

		// First Try to find as-is property data
		ret = thisCache[ name ];

		// Test for null|undefined property data
		if ( ret == null ) {

			// Try to find the camelCased property
			ret = thisCache[ jQuery.camelCase( name ) ];
		}
	} else {
		ret = thisCache;
	}

	return ret;
}

function internalRemoveData( elem, name, pvt ) {
	if ( !jQuery.acceptData( elem ) ) {
		return;
	}

	var thisCache, i,
		isNode = elem.nodeType,

		// See jQuery.data for more information
		cache = isNode ? jQuery.cache : elem,
		id = isNode ? elem[ jQuery.expando ] : jQuery.expando;

	// If there is already no cache entry for this object, there is no
	// purpose in continuing
	if ( !cache[ id ] ) {
		return;
	}

	if ( name ) {

		thisCache = pvt ? cache[ id ] : cache[ id ].data;

		if ( thisCache ) {

			// Support array or space separated string names for data keys
			if ( !jQuery.isArray( name ) ) {

				// try the string as a key before any manipulation
				if ( name in thisCache ) {
					name = [ name ];
				} else {

					// split the camel cased version by spaces unless a key with the spaces exists
					name = jQuery.camelCase( name );
					if ( name in thisCache ) {
						name = [ name ];
					} else {
						name = name.split(" ");
					}
				}
			} else {
				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = name.concat( jQuery.map( name, jQuery.camelCase ) );
			}

			i = name.length;
			while ( i-- ) {
				delete thisCache[ name[i] ];
			}

			// If there is no data left in the cache, we want to continue
			// and let the cache object itself get destroyed
			if ( pvt ? !isEmptyDataObject(thisCache) : !jQuery.isEmptyObject(thisCache) ) {
				return;
			}
		}
	}

	// See jQuery.data for more information
	if ( !pvt ) {
		delete cache[ id ].data;

		// Don't destroy the parent cache unless the internal data object
		// had been the only thing left in it
		if ( !isEmptyDataObject( cache[ id ] ) ) {
			return;
		}
	}

	// Destroy the cache
	if ( isNode ) {
		jQuery.cleanData( [ elem ], true );

	// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
	/* jshint eqeqeq: false */
	} else if ( support.deleteExpando || cache != cache.window ) {
		/* jshint eqeqeq: true */
		delete cache[ id ];

	// When all else fails, null
	} else {
		cache[ id ] = null;
	}
}

jQuery.extend({
	cache: {},

	// The following elements (space-suffixed to avoid Object.prototype collisions)
	// throw uncatchable exceptions if you attempt to set expando properties
	noData: {
		"applet ": true,
		"embed ": true,
		// ...but Flash objects (which have this classid) *can* handle expandos
		"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
	},

	hasData: function( elem ) {
		elem = elem.nodeType ? jQuery.cache[ elem[jQuery.expando] ] : elem[ jQuery.expando ];
		return !!elem && !isEmptyDataObject( elem );
	},

	data: function( elem, name, data ) {
		return internalData( elem, name, data );
	},

	removeData: function( elem, name ) {
		return internalRemoveData( elem, name );
	},

	// For internal use only.
	_data: function( elem, name, data ) {
		return internalData( elem, name, data, true );
	},

	_removeData: function( elem, name ) {
		return internalRemoveData( elem, name, true );
	}
});

jQuery.fn.extend({
	data: function( key, value ) {
		var i, name, data,
			elem = this[0],
			attrs = elem && elem.attributes;

		// Special expections of .data basically thwart jQuery.access,
		// so implement the relevant behavior ourselves

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = jQuery.data( elem );

				if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE11+
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice(5) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					jQuery._data( elem, "parsedAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each(function() {
				jQuery.data( this, key );
			});
		}

		return arguments.length > 1 ?

			// Sets one value
			this.each(function() {
				jQuery.data( this, key, value );
			}) :

			// Gets one value
			// Try to fetch any internally stored data first
			elem ? dataAttr( elem, key, jQuery.data( elem, key ) ) : undefined;
	},

	removeData: function( key ) {
		return this.each(function() {
			jQuery.removeData( this, key );
		});
	}
});


jQuery.extend({
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = jQuery._data( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray(data) ) {
					queue = jQuery._data( elem, type, jQuery.makeArray(data) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// not intended for public consumption - generates a queueHooks object, or returns the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return jQuery._data( elem, key ) || jQuery._data( elem, key, {
			empty: jQuery.Callbacks("once memory").add(function() {
				jQuery._removeData( elem, type + "queue" );
				jQuery._removeData( elem, key );
			})
		});
	}
});

jQuery.fn.extend({
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[0], type );
		}

		return data === undefined ?
			this :
			this.each(function() {
				var queue = jQuery.queue( this, type, data );

				// ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[0] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			});
	},
	dequeue: function( type ) {
		return this.each(function() {
			jQuery.dequeue( this, type );
		});
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},
	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = jQuery._data( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
});
var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;

var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHidden = function( elem, el ) {
		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
	};



// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = jQuery.access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		length = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {
			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < length; i++ ) {
				fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
			length ? fn( elems[0], key ) : emptyGet;
};
var rcheckableType = (/^(?:checkbox|radio)$/i);



(function() {
	// Minified: var a,b,c
	var input = document.createElement( "input" ),
		div = document.createElement( "div" ),
		fragment = document.createDocumentFragment();

	// Setup
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

	// IE strips leading whitespace when .innerHTML is used
	support.leadingWhitespace = div.firstChild.nodeType === 3;

	// Make sure that tbody elements aren't automatically inserted
	// IE will insert them into empty tables
	support.tbody = !div.getElementsByTagName( "tbody" ).length;

	// Make sure that link elements get serialized correctly by innerHTML
	// This requires a wrapper element in IE
	support.htmlSerialize = !!div.getElementsByTagName( "link" ).length;

	// Makes sure cloning an html5 element does not cause problems
	// Where outerHTML is undefined, this still works
	support.html5Clone =
		document.createElement( "nav" ).cloneNode( true ).outerHTML !== "<:nav></:nav>";

	// Check if a disconnected checkbox will retain its checked
	// value of true after appended to the DOM (IE6/7)
	input.type = "checkbox";
	input.checked = true;
	fragment.appendChild( input );
	support.appendChecked = input.checked;

	// Make sure textarea (and checkbox) defaultValue is properly cloned
	// Support: IE6-IE11+
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// #11217 - WebKit loses check when the name is after the checked attribute
	fragment.appendChild( div );
	div.innerHTML = "<input type='radio' checked='checked' name='t'/>";

	// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
	// old WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<9
	// Opera does not clone events (and typeof div.attachEvent === undefined).
	// IE9-10 clones events bound via attachEvent, but they don't trigger with .click()
	support.noCloneEvent = true;
	if ( div.attachEvent ) {
		div.attachEvent( "onclick", function() {
			support.noCloneEvent = false;
		});

		div.cloneNode( true ).click();
	}

	// Execute the test only if not already executed in another module.
	if (support.deleteExpando == null) {
		// Support: IE<9
		support.deleteExpando = true;
		try {
			delete div.test;
		} catch( e ) {
			support.deleteExpando = false;
		}
	}
})();


(function() {
	var i, eventName,
		div = document.createElement( "div" );

	// Support: IE<9 (lack submit/change bubble), Firefox 23+ (lack focusin event)
	for ( i in { submit: true, change: true, focusin: true }) {
		eventName = "on" + i;

		if ( !(support[ i + "Bubbles" ] = eventName in window) ) {
			// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
			div.setAttribute( eventName, "t" );
			support[ i + "Bubbles" ] = div.attributes[ eventName ].expando === false;
		}
	}

	// Null elements to avoid leaks in IE.
	div = null;
})();


var rformElems = /^(?:input|select|textarea)$/i,
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {
		var tmp, events, t, handleObjIn,
			special, eventHandle, handleObj,
			handlers, type, namespaces, origType,
			elemData = jQuery._data( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !(events = elemData.events) ) {
			events = elemData.events = {};
		}
		if ( !(eventHandle = elemData.handle) ) {
			eventHandle = elemData.handle = function( e ) {
				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== strundefined && (!e || jQuery.event.triggered !== e.type) ?
					jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
					undefined;
			};
			// Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
			eventHandle.elem = elem;
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend({
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join(".")
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !(handlers = events[ type ]) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener/attachEvent if the special events handler returns false
				if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
					// Bind the global event handler to the element
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );

					} else if ( elem.attachEvent ) {
						elem.attachEvent( "on" + type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

		// Nullify elem to prevent memory leaks in IE
		elem = null;
	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {
		var j, handleObj, tmp,
			origCount, t, events,
			special, handlers, type,
			namespaces, origType,
			elemData = jQuery.hasData( elem ) && jQuery._data( elem );

		if ( !elemData || !(events = elemData.events) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			delete elemData.handle;

			// removeData also checks for emptiness and clears the expando if empty
			// so use it instead of delete
			jQuery._removeData( elem, "events" );
		}
	},

	trigger: function( event, data, elem, onlyHandlers ) {
		var handle, ontype, cur,
			bubbleType, special, tmp, i,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf(".") >= 0 ) {
			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split(".");
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf(":") < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join(".");
		event.namespace_re = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === (elem.ownerDocument || document) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] && jQuery._data( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && jQuery.acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
				jQuery.acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Can't use an .isFunction() check here because IE6/7 fails that test.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && elem[ type ] && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					try {
						elem[ type ]();
					} catch ( e ) {
						// IE<9 dies on focus/blur to hidden element (#1486,#12518)
						// only reproducible on winXP IE8 native, not IE9 in IE8 mode
					}
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, ret, handleObj, matched, j,
			handlerQueue = [],
			args = slice.call( arguments ),
			handlers = ( jQuery._data( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[0] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or
				// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
							.apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( (event.result = ret) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var sel, handleObj, matches, i,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		// Avoid non-left-click bubbling in Firefox (#3861)
		if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

			/* jshint eqeqeq: false */
			for ( ; cur != this; cur = cur.parentNode || this ) {
				/* jshint eqeqeq: true */

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click") ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) >= 0 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push({ elem: cur, handlers: matches });
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
		}

		return handlerQueue;
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: IE<9
		// Fix target property (#1925)
		if ( !event.target ) {
			event.target = originalEvent.srcElement || document;
		}

		// Support: Chrome 23+, Safari?
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		// Support: IE<9
		// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
		event.metaKey = !!event.metaKey;

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split(" "),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
		filter: function( event, original ) {
			var body, eventDoc, doc,
				button = original.button,
				fromElement = original.fromElement;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add relatedTarget, if necessary
			if ( !event.relatedTarget && fromElement ) {
				event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	special: {
		load: {
			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {
			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					try {
						this.focus();
						return false;
					} catch ( e ) {
						// Support: IE<9
						// If we error on focus to hidden element (#1486, #12518),
						// let .trigger() run the handlers
					}
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {
			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( jQuery.nodeName( this, "input" ) && this.type === "checkbox" && this.click ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	},

	simulate: function( type, elem, event, bubble ) {
		// Piggyback on a donor event to simulate a different one.
		// Fake originalEvent to avoid donor's stopPropagation, but if the
		// simulated event prevents default then we do the same on the donor.
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true,
				originalEvent: {}
			}
		);
		if ( bubble ) {
			jQuery.event.trigger( e, null, elem );
		} else {
			jQuery.event.dispatch.call( elem, e );
		}
		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

jQuery.removeEvent = document.removeEventListener ?
	function( elem, type, handle ) {
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle, false );
		}
	} :
	function( elem, type, handle ) {
		var name = "on" + type;

		if ( elem.detachEvent ) {

			// #8545, #7054, preventing memory leaks for custom events in IE6-8
			// detachEvent needed property on element, by name of that event, to properly expose it to GC
			if ( typeof elem[ name ] === strundefined ) {
				elem[ name ] = null;
			}

			elem.detachEvent( name, handle );
		}
	};

jQuery.Event = function( src, props ) {
	// Allow instantiation without the 'new' keyword
	if ( !(this instanceof jQuery.Event) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&
				// Support: IE < 9, Android < 4.0
				src.returnValue === false ?
			returnTrue :
			returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;
		if ( !e ) {
			return;
		}

		// If preventDefault exists, run it on the original event
		if ( e.preventDefault ) {
			e.preventDefault();

		// Support: IE
		// Otherwise set the returnValue property of the original event to false
		} else {
			e.returnValue = false;
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;
		if ( !e ) {
			return;
		}
		// If stopPropagation exists, run it on the original event
		if ( e.stopPropagation ) {
			e.stopPropagation();
		}

		// Support: IE
		// Set the cancelBubble property of the original event to true
		e.cancelBubble = true;
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && e.stopImmediatePropagation ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
jQuery.each({
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mousenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
});

// IE submit delegation
if ( !support.submitBubbles ) {

	jQuery.event.special.submit = {
		setup: function() {
			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Lazy-add a submit handler when a descendant form may potentially be submitted
			jQuery.event.add( this, "click._submit keypress._submit", function( e ) {
				// Node name check avoids a VML-related crash in IE (#9807)
				var elem = e.target,
					form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ? elem.form : undefined;
				if ( form && !jQuery._data( form, "submitBubbles" ) ) {
					jQuery.event.add( form, "submit._submit", function( event ) {
						event._submit_bubble = true;
					});
					jQuery._data( form, "submitBubbles", true );
				}
			});
			// return undefined since we don't need an event listener
		},

		postDispatch: function( event ) {
			// If form was submitted by the user, bubble the event up the tree
			if ( event._submit_bubble ) {
				delete event._submit_bubble;
				if ( this.parentNode && !event.isTrigger ) {
					jQuery.event.simulate( "submit", this.parentNode, event, true );
				}
			}
		},

		teardown: function() {
			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
			jQuery.event.remove( this, "._submit" );
		}
	};
}

// IE change delegation and checkbox/radio fix
if ( !support.changeBubbles ) {

	jQuery.event.special.change = {

		setup: function() {

			if ( rformElems.test( this.nodeName ) ) {
				// IE doesn't fire change on a check/radio until blur; trigger it on click
				// after a propertychange. Eat the blur-change in special.change.handle.
				// This still fires onchange a second time for check/radio after blur.
				if ( this.type === "checkbox" || this.type === "radio" ) {
					jQuery.event.add( this, "propertychange._change", function( event ) {
						if ( event.originalEvent.propertyName === "checked" ) {
							this._just_changed = true;
						}
					});
					jQuery.event.add( this, "click._change", function( event ) {
						if ( this._just_changed && !event.isTrigger ) {
							this._just_changed = false;
						}
						// Allow triggered, simulated change events (#11500)
						jQuery.event.simulate( "change", this, event, true );
					});
				}
				return false;
			}
			// Delegated event; lazy-add a change handler on descendant inputs
			jQuery.event.add( this, "beforeactivate._change", function( e ) {
				var elem = e.target;

				if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "changeBubbles" ) ) {
					jQuery.event.add( elem, "change._change", function( event ) {
						if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
							jQuery.event.simulate( "change", this.parentNode, event, true );
						}
					});
					jQuery._data( elem, "changeBubbles", true );
				}
			});
		},

		handle: function( event ) {
			var elem = event.target;

			// Swallow native change events from checkbox/radio, we already triggered them above
			if ( this !== elem || event.isSimulated || event.isTrigger || (elem.type !== "radio" && elem.type !== "checkbox") ) {
				return event.handleObj.handler.apply( this, arguments );
			}
		},

		teardown: function() {
			jQuery.event.remove( this, "._change" );

			return !rformElems.test( this.nodeName );
		}
	};
}

// Create "bubbling" focus and blur events
if ( !support.focusinBubbles ) {
	jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
			};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = jQuery._data( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				jQuery._data( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = jQuery._data( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					jQuery._removeData( doc, fix );
				} else {
					jQuery._data( doc, fix, attaches );
				}
			}
		};
	});
}

jQuery.fn.extend({

	on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
		var type, origFn;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				this.on( type, selector, data, types[ type ], one );
			}
			return this;
		}

		if ( data == null && fn == null ) {
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return this;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return this.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		});
	},
	one: function( types, selector, data, fn ) {
		return this.on( types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {
			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {
			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {
			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each(function() {
			jQuery.event.remove( this, types, fn, selector );
		});
	},

	trigger: function( type, data ) {
		return this.each(function() {
			jQuery.event.trigger( type, data, this );
		});
	},
	triggerHandler: function( type, data ) {
		var elem = this[0];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
});


function createSafeFragment( document ) {
	var list = nodeNames.split( "|" ),
		safeFrag = document.createDocumentFragment();

	if ( safeFrag.createElement ) {
		while ( list.length ) {
			safeFrag.createElement(
				list.pop()
			);
		}
	}
	return safeFrag;
}

var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" +
		"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
	rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
	rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
	rleadingWhitespace = /^\s+/,
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	rtagName = /<([\w:]+)/,
	rtbody = /<tbody/i,
	rhtml = /<|&#?\w+;/,
	rnoInnerhtml = /<(?:script|style|link)/i,
	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptType = /^$|\/(?:java|ecma)script/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

	// We have to close these tags to support XHTML (#13200)
	wrapMap = {
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
		legend: [ 1, "<fieldset>", "</fieldset>" ],
		area: [ 1, "<map>", "</map>" ],
		param: [ 1, "<object>", "</object>" ],
		thead: [ 1, "<table>", "</table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
		// unless wrapped in a div with non-breaking characters in front of it.
		_default: support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>"  ]
	},
	safeFragment = createSafeFragment( document ),
	fragmentDiv = safeFragment.appendChild( document.createElement("div") );

wrapMap.optgroup = wrapMap.option;
wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

function getAll( context, tag ) {
	var elems, elem,
		i = 0,
		found = typeof context.getElementsByTagName !== strundefined ? context.getElementsByTagName( tag || "*" ) :
			typeof context.querySelectorAll !== strundefined ? context.querySelectorAll( tag || "*" ) :
			undefined;

	if ( !found ) {
		for ( found = [], elems = context.childNodes || context; (elem = elems[i]) != null; i++ ) {
			if ( !tag || jQuery.nodeName( elem, tag ) ) {
				found.push( elem );
			} else {
				jQuery.merge( found, getAll( elem, tag ) );
			}
		}
	}

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], found ) :
		found;
}

// Used in buildFragment, fixes the defaultChecked property
function fixDefaultChecked( elem ) {
	if ( rcheckableType.test( elem.type ) ) {
		elem.defaultChecked = elem.checked;
	}
}

// Support: IE<8
// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName("tbody")[0] ||
			elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = (jQuery.find.attr( elem, "type" ) !== null) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );
	if ( match ) {
		elem.type = match[1];
	} else {
		elem.removeAttribute("type");
	}
	return elem;
}

// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var elem,
		i = 0;
	for ( ; (elem = elems[i]) != null; i++ ) {
		jQuery._data( elem, "globalEval", !refElements || jQuery._data( refElements[i], "globalEval" ) );
	}
}

function cloneCopyEvent( src, dest ) {

	if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
		return;
	}

	var type, i, l,
		oldData = jQuery._data( src ),
		curData = jQuery._data( dest, oldData ),
		events = oldData.events;

	if ( events ) {
		delete curData.handle;
		curData.events = {};

		for ( type in events ) {
			for ( i = 0, l = events[ type ].length; i < l; i++ ) {
				jQuery.event.add( dest, type, events[ type ][ i ] );
			}
		}
	}

	// make the cloned public data object a copy from the original
	if ( curData.data ) {
		curData.data = jQuery.extend( {}, curData.data );
	}
}

function fixCloneNodeIssues( src, dest ) {
	var nodeName, e, data;

	// We do not need to do anything for non-Elements
	if ( dest.nodeType !== 1 ) {
		return;
	}

	nodeName = dest.nodeName.toLowerCase();

	// IE6-8 copies events bound via attachEvent when using cloneNode.
	if ( !support.noCloneEvent && dest[ jQuery.expando ] ) {
		data = jQuery._data( dest );

		for ( e in data.events ) {
			jQuery.removeEvent( dest, e, data.handle );
		}

		// Event data gets referenced instead of copied if the expando gets copied too
		dest.removeAttribute( jQuery.expando );
	}

	// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
	if ( nodeName === "script" && dest.text !== src.text ) {
		disableScript( dest ).text = src.text;
		restoreScript( dest );

	// IE6-10 improperly clones children of object elements using classid.
	// IE10 throws NoModificationAllowedError if parent is null, #12132.
	} else if ( nodeName === "object" ) {
		if ( dest.parentNode ) {
			dest.outerHTML = src.outerHTML;
		}

		// This path appears unavoidable for IE9. When cloning an object
		// element in IE9, the outerHTML strategy above is not sufficient.
		// If the src has innerHTML and the destination does not,
		// copy the src.innerHTML into the dest.innerHTML. #10324
		if ( support.html5Clone && ( src.innerHTML && !jQuery.trim(dest.innerHTML) ) ) {
			dest.innerHTML = src.innerHTML;
		}

	} else if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		// IE6-8 fails to persist the checked state of a cloned checkbox
		// or radio button. Worse, IE6-7 fail to give the cloned element
		// a checked appearance if the defaultChecked value isn't also set

		dest.defaultChecked = dest.checked = src.checked;

		// IE6-7 get confused and end up setting the value of a cloned
		// checkbox/radio button to an empty string instead of "on"
		if ( dest.value !== src.value ) {
			dest.value = src.value;
		}

	// IE6-8 fails to return the selected option to the default selected
	// state when cloning options
	} else if ( nodeName === "option" ) {
		dest.defaultSelected = dest.selected = src.defaultSelected;

	// IE6-8 fails to set the defaultValue to the correct value when
	// cloning other types of input fields
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

jQuery.extend({
	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var destElements, node, clone, i, srcElements,
			inPage = jQuery.contains( elem.ownerDocument, elem );

		if ( support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {
			clone = elem.cloneNode( true );

		// IE<=8 does not properly clone detached, unknown element nodes
		} else {
			fragmentDiv.innerHTML = elem.outerHTML;
			fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
		}

		if ( (!support.noCloneEvent || !support.noCloneChecked) &&
				(elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			// Fix all IE cloning issues
			for ( i = 0; (node = srcElements[i]) != null; ++i ) {
				// Ensure that the destination node is not null; Fixes #9587
				if ( destElements[i] ) {
					fixCloneNodeIssues( node, destElements[i] );
				}
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0; (node = srcElements[i]) != null; i++ ) {
					cloneCopyEvent( node, destElements[i] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		destElements = srcElements = node = null;

		// Return the cloned set
		return clone;
	},

	buildFragment: function( elems, context, scripts, selection ) {
		var j, elem, contains,
			tmp, tag, tbody, wrap,
			l = elems.length,

			// Ensure a safe fragment
			safe = createSafeFragment( context ),

			nodes = [],
			i = 0;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || safe.appendChild( context.createElement("div") );

					// Deserialize a standard representation
					tag = (rtagName.exec( elem ) || [ "", "" ])[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;

					tmp.innerHTML = wrap[1] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[2];

					// Descend through wrappers to the right content
					j = wrap[0];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Manually add leading whitespace removed by IE
					if ( !support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
						nodes.push( context.createTextNode( rleadingWhitespace.exec( elem )[0] ) );
					}

					// Remove IE's autoinserted <tbody> from table fragments
					if ( !support.tbody ) {

						// String was a <table>, *may* have spurious <tbody>
						elem = tag === "table" && !rtbody.test( elem ) ?
							tmp.firstChild :

							// String was a bare <thead> or <tfoot>
							wrap[1] === "<table>" && !rtbody.test( elem ) ?
								tmp :
								0;

						j = elem && elem.childNodes.length;
						while ( j-- ) {
							if ( jQuery.nodeName( (tbody = elem.childNodes[j]), "tbody" ) && !tbody.childNodes.length ) {
								elem.removeChild( tbody );
							}
						}
					}

					jQuery.merge( nodes, tmp.childNodes );

					// Fix #12392 for WebKit and IE > 9
					tmp.textContent = "";

					// Fix #12392 for oldIE
					while ( tmp.firstChild ) {
						tmp.removeChild( tmp.firstChild );
					}

					// Remember the top-level container for proper cleanup
					tmp = safe.lastChild;
				}
			}
		}

		// Fix #11356: Clear elements from fragment
		if ( tmp ) {
			safe.removeChild( tmp );
		}

		// Reset defaultChecked for any radios and checkboxes
		// about to be appended to the DOM in IE 6/7 (#8060)
		if ( !support.appendChecked ) {
			jQuery.grep( getAll( nodes, "input" ), fixDefaultChecked );
		}

		i = 0;
		while ( (elem = nodes[ i++ ]) ) {

			// #4087 - If origin and destination elements are the same, and this is
			// that element, do not do anything
			if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( safe.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( (elem = tmp[ j++ ]) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		tmp = null;

		return safe;
	},

	cleanData: function( elems, /* internal */ acceptData ) {
		var elem, type, id, data,
			i = 0,
			internalKey = jQuery.expando,
			cache = jQuery.cache,
			deleteExpando = support.deleteExpando,
			special = jQuery.event.special;

		for ( ; (elem = elems[i]) != null; i++ ) {
			if ( acceptData || jQuery.acceptData( elem ) ) {

				id = elem[ internalKey ];
				data = id && cache[ id ];

				if ( data ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Remove cache only if it was not already removed by jQuery.event.remove
					if ( cache[ id ] ) {

						delete cache[ id ];

						// IE does not allow us to delete expando properties from nodes,
						// nor does it have a removeAttribute function on Document nodes;
						// we must handle all of these cases
						if ( deleteExpando ) {
							delete elem[ internalKey ];

						} else if ( typeof elem.removeAttribute !== strundefined ) {
							elem.removeAttribute( internalKey );

						} else {
							elem[ internalKey ] = null;
						}

						deletedIds.push( id );
					}
				}
			}
		}
	}
});

jQuery.fn.extend({
	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().append( ( this[0] && this[0].ownerDocument || document ).createTextNode( value ) );
		}, null, value, arguments.length );
	},

	append: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		});
	},

	prepend: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		});
	},

	before: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		});
	},

	after: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		});
	},

	remove: function( selector, keepData /* Internal Use Only */ ) {
		var elem,
			elems = selector ? jQuery.filter( selector, this ) : this,
			i = 0;

		for ( ; (elem = elems[i]) != null; i++ ) {

			if ( !keepData && elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem ) );
			}

			if ( elem.parentNode ) {
				if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
					setGlobalEval( getAll( elem, "script" ) );
				}
				elem.parentNode.removeChild( elem );
			}
		}

		return this;
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; (elem = this[i]) != null; i++ ) {
			// Remove element nodes and prevent memory leaks
			if ( elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem, false ) );
			}

			// Remove any remaining nodes
			while ( elem.firstChild ) {
				elem.removeChild( elem.firstChild );
			}

			// If this is a select, ensure that it displays empty (#12336)
			// Support: IE<9
			if ( elem.options && jQuery.nodeName( elem, "select" ) ) {
				elem.options.length = 0;
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map(function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		});
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined ) {
				return elem.nodeType === 1 ?
					elem.innerHTML.replace( rinlinejQuery, "" ) :
					undefined;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				( support.htmlSerialize || !rnoshimcache.test( value )  ) &&
				( support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
				!wrapMap[ (rtagName.exec( value ) || [ "", "" ])[ 1 ].toLowerCase() ] ) {

				value = value.replace( rxhtmlTag, "<$1></$2>" );

				try {
					for (; i < l; i++ ) {
						// Remove element nodes and prevent memory leaks
						elem = this[i] || {};
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch(e) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var arg = arguments[ 0 ];

		// Make the changes, replacing each context element with the new content
		this.domManip( arguments, function( elem ) {
			arg = this.parentNode;

			jQuery.cleanData( getAll( this ) );

			if ( arg ) {
				arg.replaceChild( elem, this );
			}
		});

		// Force removal if there was no new content (e.g., from empty arguments)
		return arg && (arg.length || arg.nodeType) ? this : this.remove();
	},

	detach: function( selector ) {
		return this.remove( selector, true );
	},

	domManip: function( args, callback ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var first, node, hasScripts,
			scripts, doc, fragment,
			i = 0,
			l = this.length,
			set = this,
			iNoClone = l - 1,
			value = args[0],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return this.each(function( index ) {
				var self = set.eq( index );
				if ( isFunction ) {
					args[0] = value.call( this, index, self.html() );
				}
				self.domManip( args, callback );
			});
		}

		if ( l ) {
			fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			if ( first ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( this[i], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!jQuery._data( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

							if ( node.src ) {
								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( ( node.text || node.textContent || node.innerHTML || "" ).replace( rcleanScript, "" ) );
							}
						}
					}
				}

				// Fix #11809: Avoid leaking memory
				fragment = first = null;
			}
		}

		return this;
	}
});

jQuery.each({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			i = 0,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone(true);
			jQuery( insert[i] )[ original ]( elems );

			// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
});


var iframe,
	elemdisplay = {};

/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */
// Called only from within defaultDisplay
function actualDisplay( name, doc ) {
	var style,
		elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

		// getDefaultComputedStyle might be reliably used only on attached element
		display = window.getDefaultComputedStyle && ( style = window.getDefaultComputedStyle( elem[ 0 ] ) ) ?

			// Use of this method is a temporary fix (more like optmization) until something better comes along,
			// since it was removed from specification and supported only in FF
			style.display : jQuery.css( elem[ 0 ], "display" );

	// We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();

	return display;
}

/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {

			// Use the already-created iframe if possible
			iframe = (iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" )).appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = ( iframe[ 0 ].contentWindow || iframe[ 0 ].contentDocument ).document;

			// Support: IE
			doc.write();
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}


(function() {
	var shrinkWrapBlocksVal;

	support.shrinkWrapBlocks = function() {
		if ( shrinkWrapBlocksVal != null ) {
			return shrinkWrapBlocksVal;
		}

		// Will be changed later if needed.
		shrinkWrapBlocksVal = false;

		// Minified: var b,c,d
		var div, body, container;

		body = document.getElementsByTagName( "body" )[ 0 ];
		if ( !body || !body.style ) {
			// Test fired too early or in an unsupported environment, exit.
			return;
		}

		// Setup
		div = document.createElement( "div" );
		container = document.createElement( "div" );
		container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
		body.appendChild( container ).appendChild( div );

		// Support: IE6
		// Check if elements with layout shrink-wrap their children
		if ( typeof div.style.zoom !== strundefined ) {
			// Reset CSS: box-sizing; display; margin; border
			div.style.cssText =
				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
				"box-sizing:content-box;display:block;margin:0;border:0;" +
				"padding:1px;width:1px;zoom:1";
			div.appendChild( document.createElement( "div" ) ).style.width = "5px";
			shrinkWrapBlocksVal = div.offsetWidth !== 3;
		}

		body.removeChild( container );

		return shrinkWrapBlocksVal;
	};

})();
var rmargin = (/^margin/);

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );



var getStyles, curCSS,
	rposition = /^(top|right|bottom|left)$/;

if ( window.getComputedStyle ) {
	getStyles = function( elem ) {
		return elem.ownerDocument.defaultView.getComputedStyle( elem, null );
	};

	curCSS = function( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );

		// getPropertyValue is only needed for .css('filter') in IE9, see #12537
		ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

		if ( computed ) {

			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Chrome < 17 and Safari 5.0 uses "computed value" instead of "used value" for margin-right
			// Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
			// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
			if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		// Support: IE
		// IE returns zIndex value as an integer.
		return ret === undefined ?
			ret :
			ret + "";
	};
} else if ( document.documentElement.currentStyle ) {
	getStyles = function( elem ) {
		return elem.currentStyle;
	};

	curCSS = function( elem, name, computed ) {
		var left, rs, rsLeft, ret,
			style = elem.style;

		computed = computed || getStyles( elem );
		ret = computed ? computed[ name ] : undefined;

		// Avoid setting ret to empty string here
		// so we don't default to auto
		if ( ret == null && style && style[ name ] ) {
			ret = style[ name ];
		}

		// From the awesome hack by Dean Edwards
		// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

		// If we're not dealing with a regular pixel number
		// but a number that has a weird ending, we need to convert it to pixels
		// but not position css attributes, as those are proportional to the parent element instead
		// and we can't measure the parent instead because it might trigger a "stacking dolls" problem
		if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {

			// Remember the original values
			left = style.left;
			rs = elem.runtimeStyle;
			rsLeft = rs && rs.left;

			// Put in the new values to get a computed value out
			if ( rsLeft ) {
				rs.left = elem.currentStyle.left;
			}
			style.left = name === "fontSize" ? "1em" : ret;
			ret = style.pixelLeft + "px";

			// Revert the changed values
			style.left = left;
			if ( rsLeft ) {
				rs.left = rsLeft;
			}
		}

		// Support: IE
		// IE returns zIndex value as an integer.
		return ret === undefined ?
			ret :
			ret + "" || "auto";
	};
}




function addGetHookIf( conditionFn, hookFn ) {
	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			var condition = conditionFn();

			if ( condition == null ) {
				// The test was not ready at this point; screw the hook this time
				// but check again when needed next time.
				return;
			}

			if ( condition ) {
				// Hook not needed (or it's not possible to use it due to missing dependency),
				// remove it.
				// Since there are no other hooks for marginRight, remove the whole object.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.

			return (this.get = hookFn).apply( this, arguments );
		}
	};
}


(function() {
	// Minified: var b,c,d,e,f,g, h,i
	var div, style, a, pixelPositionVal, boxSizingReliableVal,
		reliableHiddenOffsetsVal, reliableMarginRightVal;

	// Setup
	div = document.createElement( "div" );
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
	a = div.getElementsByTagName( "a" )[ 0 ];
	style = a && a.style;

	// Finish early in limited (non-browser) environments
	if ( !style ) {
		return;
	}

	style.cssText = "float:left;opacity:.5";

	// Support: IE<9
	// Make sure that element opacity exists (as opposed to filter)
	support.opacity = style.opacity === "0.5";

	// Verify style float existence
	// (IE uses styleFloat instead of cssFloat)
	support.cssFloat = !!style.cssFloat;

	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	// Support: Firefox<29, Android 2.3
	// Vendor-prefix box-sizing
	support.boxSizing = style.boxSizing === "" || style.MozBoxSizing === "" ||
		style.WebkitBoxSizing === "";

	jQuery.extend(support, {
		reliableHiddenOffsets: function() {
			if ( reliableHiddenOffsetsVal == null ) {
				computeStyleTests();
			}
			return reliableHiddenOffsetsVal;
		},

		boxSizingReliable: function() {
			if ( boxSizingReliableVal == null ) {
				computeStyleTests();
			}
			return boxSizingReliableVal;
		},

		pixelPosition: function() {
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return pixelPositionVal;
		},

		// Support: Android 2.3
		reliableMarginRight: function() {
			if ( reliableMarginRightVal == null ) {
				computeStyleTests();
			}
			return reliableMarginRightVal;
		}
	});

	function computeStyleTests() {
		// Minified: var b,c,d,j
		var div, body, container, contents;

		body = document.getElementsByTagName( "body" )[ 0 ];
		if ( !body || !body.style ) {
			// Test fired too early or in an unsupported environment, exit.
			return;
		}

		// Setup
		div = document.createElement( "div" );
		container = document.createElement( "div" );
		container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
		body.appendChild( container ).appendChild( div );

		div.style.cssText =
			// Support: Firefox<29, Android 2.3
			// Vendor-prefix box-sizing
			"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" +
			"box-sizing:border-box;display:block;margin-top:1%;top:1%;" +
			"border:1px;padding:1px;width:4px;position:absolute";

		// Support: IE<9
		// Assume reasonable values in the absence of getComputedStyle
		pixelPositionVal = boxSizingReliableVal = false;
		reliableMarginRightVal = true;

		// Check for getComputedStyle so that this code is not run in IE<9.
		if ( window.getComputedStyle ) {
			pixelPositionVal = ( window.getComputedStyle( div, null ) || {} ).top !== "1%";
			boxSizingReliableVal =
				( window.getComputedStyle( div, null ) || { width: "4px" } ).width === "4px";

			// Support: Android 2.3
			// Div with explicit width and no margin-right incorrectly
			// gets computed margin-right based on width of container (#3333)
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			contents = div.appendChild( document.createElement( "div" ) );

			// Reset CSS: box-sizing; display; margin; border; padding
			contents.style.cssText = div.style.cssText =
				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
				"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
			contents.style.marginRight = contents.style.width = "0";
			div.style.width = "1px";

			reliableMarginRightVal =
				!parseFloat( ( window.getComputedStyle( contents, null ) || {} ).marginRight );
		}

		// Support: IE8
		// Check if table cells still have offsetWidth/Height when they are set
		// to display:none and there are still other visible table cells in a
		// table row; if so, offsetWidth/Height are not reliable for use when
		// determining if an element has been hidden directly using
		// display:none (it is still safe to use offsets if a parent element is
		// hidden; don safety goggles and see bug #4512 for more information).
		div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
		contents = div.getElementsByTagName( "td" );
		contents[ 0 ].style.cssText = "margin:0;border:0;padding:0;display:none";
		reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
		if ( reliableHiddenOffsetsVal ) {
			contents[ 0 ].style.display = "";
			contents[ 1 ].style.display = "none";
			reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
		}

		body.removeChild( container );
	}

})();


// A method for quickly swapping in/out CSS properties to get correct calculations.
jQuery.swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var
		ralpha = /alpha\([^)]*\)/i,
	ropacity = /opacity\s*=\s*([^)]*)/,

	// swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
	// see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),
	rrelNum = new RegExp( "^([+-])=(" + pnum + ")", "i" ),

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];


// return a css property mapped to a potentially vendor prefixed property
function vendorPropName( style, name ) {

	// shortcut for names that are not vendor prefixed
	if ( name in style ) {
		return name;
	}

	// check for vendor prefixed names
	var capName = name.charAt(0).toUpperCase() + name.slice(1),
		origName = name,
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in style ) {
			return name;
		}
	}

	return origName;
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = jQuery._data( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {
			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] = jQuery._data( elem, "olddisplay", defaultDisplay(elem.nodeName) );
			}
		} else {
			hidden = isHidden( elem );

			if ( display && display !== "none" || !hidden ) {
				jQuery._data( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

function setPositiveNumber( elem, value, subtract ) {
	var matches = rnumsplit.exec( value );
	return matches ?
		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?
		// If we already have the right measurement, avoid augmentation
		4 :
		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {
		// both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {
			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// at this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {
			// at this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// at this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {
		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test(val) ) {
			return val;
		}

		// we need the check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox && ( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend({
	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {
					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		// normalize float css property
		"float": support.cssFloat ? "cssFloat" : "styleFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {
		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// convert relative number strings (+= or -=) to relative numbers. #7345
			if ( type === "string" && (ret = rrelNum.exec( value )) ) {
				value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set. See: #7116
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add 'px' to the (except for certain CSS properties)
			if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
				value += "px";
			}

			// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
			// but it would mean to define eight (for every problematic property) identical functions
			if ( !support.clearCloneStyle && value === "" && name.indexOf("background") === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {

				// Support: IE
				// Swallow errors from 'invalid' CSS values (#5509)
				try {
					style[ name ] = value;
				} catch(e) {}
			}

		} else {
			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var num, val, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		//convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Return, converting to number if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
		}
		return val;
	}
});

jQuery.each([ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {
				// certain elements can have dimension info if we invisibly show them
				// however, it must have a current display style that would benefit from this
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) && elem.offsetWidth === 0 ?
					jQuery.swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, name, extra );
					}) :
					getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var styles = extra && getStyles( elem );
			return setPositiveNumber( elem, value, extra ?
				augmentWidthOrHeight(
					elem,
					name,
					extra,
					support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				) : 0
			);
		}
	};
});

if ( !support.opacity ) {
	jQuery.cssHooks.opacity = {
		get: function( elem, computed ) {
			// IE uses filters for opacity
			return ropacity.test( (computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "" ) ?
				( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
				computed ? "1" : "";
		},

		set: function( elem, value ) {
			var style = elem.style,
				currentStyle = elem.currentStyle,
				opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
				filter = currentStyle && currentStyle.filter || style.filter || "";

			// IE has trouble with opacity if it does not have layout
			// Force it by setting the zoom level
			style.zoom = 1;

			// if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
			// if value === "", then remove inline opacity #12685
			if ( ( value >= 1 || value === "" ) &&
					jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&
					style.removeAttribute ) {

				// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
				// if "filter:" is present at all, clearType is disabled, we want to avoid this
				// style.removeAttribute is IE Only, but so apparently is this code path...
				style.removeAttribute( "filter" );

				// if there is no filter style applied in a css rule or unset inline opacity, we are done
				if ( value === "" || currentStyle && !currentStyle.filter ) {
					return;
				}
			}

			// otherwise, set new filter values
			style.filter = ralpha.test( filter ) ?
				filter.replace( ralpha, opacity ) :
				filter + " " + opacity;
		}
	};
}

jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
	function( elem, computed ) {
		if ( computed ) {
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			// Work around by temporarily setting element display to inline-block
			return jQuery.swap( elem, { "display": "inline-block" },
				curCSS, [ elem, "marginRight" ] );
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each({
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// assumes a single number if not a string
				parts = typeof value === "string" ? value.split(" ") : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
});

jQuery.fn.extend({
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each(function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		});
	}
});


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || "swing";
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			if ( tween.elem[ tween.prop ] != null &&
				(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
				return tween.elem[ tween.prop ];
			}

			// passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails
			// so, simple values such as "10px" are parsed to Float.
			// complex values such as "rotate(1rad)" are returned as is.
			result = jQuery.css( tween.elem, tween.prop, "" );
			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {
			// use step hook for back compat - use cssHook if its there - use .style if its
			// available and use plain properties where available
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9
// Panic based approach to setting things on disconnected nodes

Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	}
};

jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rfxnum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" ),
	rrun = /queueHooks$/,
	animationPrefilters = [ defaultPrefilter ],
	tweeners = {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value ),
				target = tween.cur(),
				parts = rfxnum.exec( value ),
				unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

				// Starting value computation is required for potential unit mismatches
				start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
					rfxnum.exec( jQuery.css( tween.elem, prop ) ),
				scale = 1,
				maxIterations = 20;

			if ( start && start[ 3 ] !== unit ) {
				// Trust units reported by jQuery.css
				unit = unit || start[ 3 ];

				// Make sure we update the tween properties later on
				parts = parts || [];

				// Iteratively approximate from a nonzero starting point
				start = +target || 1;

				do {
					// If previous iteration zeroed out, double until we get *something*
					// Use a string for doubling factor so we don't accidentally see scale as unchanged below
					scale = scale || ".5";

					// Adjust and apply
					start = start / scale;
					jQuery.style( tween.elem, prop, start + unit );

				// Update scale, tolerating zero or NaN from tween.cur()
				// And breaking the loop if scale is unchanged or perfect, or if we've just had enough
				} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
			}

			// Update tween properties
			if ( parts ) {
				start = tween.start = +start || +target || 0;
				tween.unit = unit;
				// If a +=/-= token was provided, we're doing a relative animation
				tween.end = parts[ 1 ] ?
					start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
					+parts[ 2 ];
			}

			return tween;
		} ]
	};

// Animations created synchronously will run synchronously
function createFxNow() {
	setTimeout(function() {
		fxNow = undefined;
	});
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		attrs = { height: type },
		i = 0;

	// if we include width, step value is 1 to do all cssExpand values,
	// if we don't include width, step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( (tween = collection[ index ].call( animation, prop, value )) ) {

			// we're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = jQuery._data( elem, "fxshow" );

	// handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always(function() {
			// doing this makes sure that the complete handler will be called
			// before this completes
			anim.always(function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			});
		});
	}

	// height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE does not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		display = jQuery.css( elem, "display" );

		// Test default display if display is currently "none"
		checkDisplay = display === "none" ?
			jQuery._data( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

		if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {

			// inline-level elements accept inline-block;
			// block-level elements need to be inline with layout
			if ( !support.inlineBlockNeedsLayout || defaultDisplay( elem.nodeName ) === "inline" ) {
				style.display = "inline-block";
			} else {
				style.zoom = 1;
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		if ( !support.shrinkWrapBlocks() ) {
			anim.always(function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			});
		}
	}

	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

		// Any non-fx value stops us from restoring the original display value
		} else {
			display = undefined;
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = jQuery._data( elem, "fxshow", {} );
		}

		// store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done(function() {
				jQuery( elem ).hide();
			});
		}
		anim.done(function() {
			var prop;
			jQuery._removeData( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		});
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}

	// If this is a noop like .hide().hide(), restore an overwritten display value
	} else if ( (display === "none" ? defaultDisplay( elem.nodeName ) : display) === "inline" ) {
		style.display = display;
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// not quite $.extend, this wont overwrite keys already present.
			// also - reusing 'index' from above because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = animationPrefilters.length,
		deferred = jQuery.Deferred().always( function() {
			// don't match elem in the :animated selector
			delete tick.elem;
		}),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
				// archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ]);

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise({
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, { specialEasing: {} }, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,
					// if we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// resolve when we played the last frame
				// otherwise, reject
				if ( gotoEnd ) {
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		}),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		})
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {
	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.split(" ");
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			tweeners[ prop ] = tweeners[ prop ] || [];
			tweeners[ prop ].unshift( callback );
		}
	},

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			animationPrefilters.unshift( callback );
		} else {
			animationPrefilters.push( callback );
		}
	}
});

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
		opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend({
	fadeTo: function( speed, to, easing, callback ) {

		// show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// animate to the value specified
			.end().animate({ opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {
				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || jQuery._data( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each(function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = jQuery._data( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// start the next in the queue if the last step wasn't forced
			// timers currently will call their complete callbacks, which will dequeue
			// but only if they were gotoEnd
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		});
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each(function() {
			var index,
				data = jQuery._data( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// enable finishing flag on private data
			data.finish = true;

			// empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// turn off finishing flag
			delete data.finish;
		});
	}
});

jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
});

// Generate shortcuts for custom animations
jQuery.each({
	slideDown: genFx("show"),
	slideUp: genFx("hide"),
	slideToggle: genFx("toggle"),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
});

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		timers = jQuery.timers,
		i = 0;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];
		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;

jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	clearInterval( timerId );
	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,
	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = setTimeout( next, time );
		hooks.stop = function() {
			clearTimeout( timeout );
		};
	});
};


(function() {
	// Minified: var a,b,c,d,e
	var input, div, select, a, opt;

	// Setup
	div = document.createElement( "div" );
	div.setAttribute( "className", "t" );
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
	a = div.getElementsByTagName("a")[ 0 ];

	// First batch of tests.
	select = document.createElement("select");
	opt = select.appendChild( document.createElement("option") );
	input = div.getElementsByTagName("input")[ 0 ];

	a.style.cssText = "top:1px";

	// Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
	support.getSetAttribute = div.className !== "t";

	// Get the style information from getAttribute
	// (IE uses .cssText instead)
	support.style = /top/.test( a.getAttribute("style") );

	// Make sure that URLs aren't manipulated
	// (IE normalizes it by default)
	support.hrefNormalized = a.getAttribute("href") === "/a";

	// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
	support.checkOn = !!input.value;

	// Make sure that a selected-by-default option has a working selected property.
	// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
	support.optSelected = opt.selected;

	// Tests for enctype support on a form (#6743)
	support.enctype = !!document.createElement("form").enctype;

	// Make sure that the options inside disabled selects aren't marked as disabled
	// (WebKit marks them as disabled)
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE8 only
	// Check if we can trust getAttribute("value")
	input = document.createElement( "input" );
	input.setAttribute( "value", "" );
	support.input = input.getAttribute( "value" ) === "";

	// Check if an input maintains its value after becoming a radio
	input.value = "t";
	input.setAttribute( "type", "radio" );
	support.radioValue = input.value === "t";
})();


var rreturn = /\r/g;

jQuery.fn.extend({
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[0];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?
					// handle most common string cases
					ret.replace(rreturn, "") :
					// handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each(function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";
			} else if ( typeof val === "number" ) {
				val += "";
			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				});
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		});
	}
});

jQuery.extend({
	valHooks: {
		option: {
			get: function( elem ) {
				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :
					// Support: IE10-11+
					// option.text throws exceptions (#14686, #14858)
					jQuery.trim( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// oldIE doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&
							// Don't return options that are disabled or in a disabled optgroup
							( support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null ) &&
							( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					if ( jQuery.inArray( jQuery.valHooks.option.get( option ), values ) >= 0 ) {

						// Support: IE6
						// When new option element is added to select box we need to
						// force reflow of newly added node in order to workaround delay
						// of initialization properties
						try {
							option.selected = optionSet = true;

						} catch ( _ ) {

							// Will be executed only in IE6
							option.scrollHeight;
						}

					} else {
						option.selected = false;
					}
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}

				return options;
			}
		}
	}
});

// Radios and checkboxes getter/setter
jQuery.each([ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			// Support: Webkit
			// "" is returned instead of "on" if a value isn't specified
			return elem.getAttribute("value") === null ? "on" : elem.value;
		};
	}
});




var nodeHook, boolHook,
	attrHandle = jQuery.expr.attrHandle,
	ruseDefault = /^(?:checked|selected)$/i,
	getSetAttribute = support.getSetAttribute,
	getSetInput = support.input;

jQuery.fn.extend({
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each(function() {
			jQuery.removeAttr( this, name );
		});
	}
});

jQuery.extend({
	attr: function( elem, name, value ) {
		var hooks, ret,
			nType = elem.nodeType;

		// don't get/set attributes on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === strundefined ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {

			if ( value === null ) {
				jQuery.removeAttr( elem, name );

			} else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				elem.setAttribute( name, value + "" );
				return value;
			}

		} else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
			return ret;

		} else {
			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ?
				undefined :
				ret;
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( (name = attrNames[i++]) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {
					// Set corresponding property to false
					if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
						elem[ propName ] = false;
					// Support: IE<9
					// Also clear defaultChecked/defaultSelected (if appropriate)
					} else {
						elem[ jQuery.camelCase( "default-" + name ) ] =
							elem[ propName ] = false;
					}

				// See #9699 for explanation of this approach (setting first, then removal)
				} else {
					jQuery.attr( elem, name, "" );
				}

				elem.removeAttribute( getSetAttribute ? name : propName );
			}
		}
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" && jQuery.nodeName(elem, "input") ) {
					// Setting the type on a radio button after the value resets the value in IE6-9
					// Reset value to default in case type is set after value during creation
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	}
});

// Hook for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {
			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
			// IE<8 needs the *property* name
			elem.setAttribute( !getSetAttribute && jQuery.propFix[ name ] || name, name );

		// Use defaultChecked and defaultSelected for oldIE
		} else {
			elem[ jQuery.camelCase( "default-" + name ) ] = elem[ name ] = true;
		}

		return name;
	}
};

// Retrieve booleans specially
jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {

	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = getSetInput && getSetAttribute || !ruseDefault.test( name ) ?
		function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {
				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		} :
		function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem[ jQuery.camelCase( "default-" + name ) ] ?
					name.toLowerCase() :
					null;
			}
		};
});

// fix oldIE attroperties
if ( !getSetInput || !getSetAttribute ) {
	jQuery.attrHooks.value = {
		set: function( elem, value, name ) {
			if ( jQuery.nodeName( elem, "input" ) ) {
				// Does not return so that setAttribute is also used
				elem.defaultValue = value;
			} else {
				// Use nodeHook if defined (#1954); otherwise setAttribute is fine
				return nodeHook && nodeHook.set( elem, value, name );
			}
		}
	};
}

// IE6/7 do not support getting/setting some attributes with get/setAttribute
if ( !getSetAttribute ) {

	// Use this for any attribute in IE6/7
	// This fixes almost every IE6/7 issue
	nodeHook = {
		set: function( elem, value, name ) {
			// Set the existing or create a new attribute node
			var ret = elem.getAttributeNode( name );
			if ( !ret ) {
				elem.setAttributeNode(
					(ret = elem.ownerDocument.createAttribute( name ))
				);
			}

			ret.value = value += "";

			// Break association with cloned elements by also using setAttribute (#9646)
			if ( name === "value" || value === elem.getAttribute( name ) ) {
				return value;
			}
		}
	};

	// Some attributes are constructed with empty-string values when not defined
	attrHandle.id = attrHandle.name = attrHandle.coords =
		function( elem, name, isXML ) {
			var ret;
			if ( !isXML ) {
				return (ret = elem.getAttributeNode( name )) && ret.value !== "" ?
					ret.value :
					null;
			}
		};

	// Fixing value retrieval on a button requires this module
	jQuery.valHooks.button = {
		get: function( elem, name ) {
			var ret = elem.getAttributeNode( name );
			if ( ret && ret.specified ) {
				return ret.value;
			}
		},
		set: nodeHook.set
	};

	// Set contenteditable to false on removals(#10429)
	// Setting to empty string throws an error as an invalid value
	jQuery.attrHooks.contenteditable = {
		set: function( elem, value, name ) {
			nodeHook.set( elem, value === "" ? false : value, name );
		}
	};

	// Set width and height to auto instead of 0 on empty string( Bug #8150 )
	// This is for removals
	jQuery.each([ "width", "height" ], function( i, name ) {
		jQuery.attrHooks[ name ] = {
			set: function( elem, value ) {
				if ( value === "" ) {
					elem.setAttribute( name, "auto" );
					return value;
				}
			}
		};
	});
}

if ( !support.style ) {
	jQuery.attrHooks.style = {
		get: function( elem ) {
			// Return undefined in the case of empty string
			// Note: IE uppercases css property names, but if we were to .toLowerCase()
			// .cssText, that would destroy case senstitivity in URL's, like in "background"
			return elem.style.cssText || undefined;
		},
		set: function( elem, value ) {
			return ( elem.style.cssText = value + "" );
		}
	};
}




var rfocusable = /^(?:input|select|textarea|button|object)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend({
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		name = jQuery.propFix[ name ] || name;
		return this.each(function() {
			// try/catch handles cases where IE balks (such as removing a property on window)
			try {
				this[ name ] = undefined;
				delete this[ name ];
			} catch( e ) {}
		});
	}
});

jQuery.extend({
	propFix: {
		"for": "htmlFor",
		"class": "className"
	},

	prop: function( elem, name, value ) {
		var ret, hooks, notxml,
			nType = elem.nodeType;

		// don't get/set properties on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		if ( notxml ) {
			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
				ret :
				( elem[ name ] = value );

		} else {
			return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
				ret :
				elem[ name ];
		}
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {
				// elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				return tabindex ?
					parseInt( tabindex, 10 ) :
					rfocusable.test( elem.nodeName ) || rclickable.test( elem.nodeName ) && elem.href ?
						0 :
						-1;
			}
		}
	}
});

// Some attributes require a special call on IE
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !support.hrefNormalized ) {
	// href/src property should get the full normalized URL (#10299/#12915)
	jQuery.each([ "href", "src" ], function( i, name ) {
		jQuery.propHooks[ name ] = {
			get: function( elem ) {
				return elem.getAttribute( name, 4 );
			}
		};
	});
}

// Support: Safari, IE9+
// mis-reports the default selected property of an option
// Accessing the parent's selectedIndex property fixes it
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;

			if ( parent ) {
				parent.selectedIndex;

				// Make sure that it also works with optgroups, see #5701
				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
			return null;
		}
	};
}

jQuery.each([
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
});

// IE6/7 call enctype encoding
if ( !support.enctype ) {
	jQuery.propFix.enctype = "encoding";
}




var rclass = /[\t\r\n\f]/g;

jQuery.fn.extend({
	addClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			i = 0,
			len = this.length,
			proceed = typeof value === "string" && value;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).addClass( value.call( this, j, this.className ) );
			});
		}

		if ( proceed ) {
			// The disjunction here is for better compressibility (see removeClass)
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					" "
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			i = 0,
			len = this.length,
			proceed = arguments.length === 0 || typeof value === "string" && value;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).removeClass( value.call( this, j, this.className ) );
			});
		}
		if ( proceed ) {
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					""
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// only assign if different to avoid unneeded rendering.
					finalValue = value ? jQuery.trim( cur ) : "";
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( i ) {
				jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
			});
		}

		return this.each(function() {
			if ( type === "string" ) {
				// toggle individual class names
				var className,
					i = 0,
					self = jQuery( this ),
					classNames = value.match( rnotwhite ) || [];

				while ( (className = classNames[ i++ ]) ) {
					// check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( type === strundefined || type === "boolean" ) {
				if ( this.className ) {
					// store className if set
					jQuery._data( this, "__className__", this.className );
				}

				// If the element has a class name or if we're passed "false",
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				this.className = this.className || value === false ? "" : jQuery._data( this, "__className__" ) || "";
			}
		});
	},

	hasClass: function( selector ) {
		var className = " " + selector + " ",
			i = 0,
			l = this.length;
		for ( ; i < l; i++ ) {
			if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
				return true;
			}
		}

		return false;
	}
});




// Return jQuery for attributes-only inclusion


jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
});

jQuery.fn.extend({
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	},

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {
		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
	}
});


var nonce = jQuery.now();

var rquery = (/\?/);



var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;

jQuery.parseJSON = function( data ) {
	// Attempt to parse using the native JSON parser first
	if ( window.JSON && window.JSON.parse ) {
		// Support: Android 2.3
		// Workaround failure to string-cast null input
		return window.JSON.parse( data + "" );
	}

	var requireNonComma,
		depth = null,
		str = jQuery.trim( data + "" );

	// Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
	// after removing valid tokens
	return str && !jQuery.trim( str.replace( rvalidtokens, function( token, comma, open, close ) {

		// Force termination if we see a misplaced comma
		if ( requireNonComma && comma ) {
			depth = 0;
		}

		// Perform no more replacements after returning to outermost depth
		if ( depth === 0 ) {
			return token;
		}

		// Commas must not follow "[", "{", or ","
		requireNonComma = open || comma;

		// Determine new depth
		// array/object open ("[" or "{"): depth += true - false (increment)
		// array/object close ("]" or "}"): depth += false - true (decrement)
		// other cases ("," or primitive): depth += true - true (numeric cast)
		depth += !close - !open;

		// Remove this token
		return "";
	}) ) ?
		( Function( "return " + str ) )() :
		jQuery.error( "Invalid JSON: " + data );
};


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, tmp;
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	try {
		if ( window.DOMParser ) { // Standard
			tmp = new DOMParser();
			xml = tmp.parseFromString( data, "text/xml" );
		} else { // IE
			xml = new ActiveXObject( "Microsoft.XMLDOM" );
			xml.async = "false";
			xml.loadXML( data );
		}
	} catch( e ) {
		xml = undefined;
	}
	if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	// Document location
	ajaxLocParts,
	ajaxLocation,

	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, // IE leaves an \r character at EOL
	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat("*");

// #8138, IE may throw an exception when accessing
// a field from window.location if document.domain has been set
try {
	ajaxLocation = location.href;
} catch( e ) {
	// Use the href attribute of an A element
	// since IE will modify it given document.location
	ajaxLocation = document.createElement( "a" );
	ajaxLocation.href = "";
	ajaxLocation = ajaxLocation.href;
}

// Segment location into parts
ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {
			// For each dataType in the dataTypeExpression
			while ( (dataType = dataTypes[i++]) ) {
				// Prepend if requested
				if ( dataType.charAt( 0 ) === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

				// Otherwise append
				} else {
					(structure[ dataType ] = structure[ dataType ] || []).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		});
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var deep, key,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {
	var firstDataType, ct, finalDataType, type,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {
		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}
		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},
		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {
								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s[ "throws" ] ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend({

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: ajaxLocation,
		type: "GET",
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /xml/,
			html: /html/,
			json: /json/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var // Cross-domain detection vars
			parts,
			// Loop variable
			i,
			// URL without anti-cache param
			cacheURL,
			// Response headers as string
			responseHeadersString,
			// timeout handle
			timeoutTimer,

			// To know if global events are to be dispatched
			fireGlobals,

			transport,
			// Response headers
			responseHeaders,
			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),
			// Callbacks context
			callbackContext = s.context || s,
			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,
			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks("once memory"),
			// Status-dependent callbacks
			statusCode = s.statusCode || {},
			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},
			// The jqXHR state
			state = 0,
			// Default abort message
			strAbort = "canceled",
			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( (match = rheaders.exec( responseHeadersString )) ) {
								responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {
								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {
							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" ).replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		fireGlobals = s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger("ajaxStart");
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
				s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
			// Abort if not done already and return
			return jqXHR.abort();
		}

		// aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}
			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = setTimeout(function() {
					jqXHR.abort("timeout");
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {
				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );
				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader("Last-Modified");
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader("etag");
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {
				// We extract error from statusText
				// then normalize statusText and status for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger("ajaxStop");
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
});

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {
		// shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		return jQuery.ajax({
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		});
	};
});

// Attach a bunch of functions for handling common AJAX events
jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
});


jQuery._evalUrl = function( url ) {
	return jQuery.ajax({
		url: url,
		type: "GET",
		dataType: "script",
		async: false,
		global: false,
		"throws": true
	});
};


jQuery.fn.extend({
	wrapAll: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function(i) {
				jQuery(this).wrapAll( html.call(this, i) );
			});
		}

		if ( this[0] ) {
			// The elements to wrap the target around
			var wrap = jQuery( html, this[0].ownerDocument ).eq(0).clone(true);

			if ( this[0].parentNode ) {
				wrap.insertBefore( this[0] );
			}

			wrap.map(function() {
				var elem = this;

				while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
					elem = elem.firstChild;
				}

				return elem;
			}).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function(i) {
				jQuery(this).wrapInner( html.call(this, i) );
			});
		}

		return this.each(function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		});
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each(function(i) {
			jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
		});
	},

	unwrap: function() {
		return this.parent().each(function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		}).end();
	}
});


jQuery.expr.filters.hidden = function( elem ) {
	// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 ||
		(!support.reliableHiddenOffsets() &&
			((elem.style && elem.style.display) || jQuery.css( elem, "display" )) === "none");
};

jQuery.expr.filters.visible = function( elem ) {
	return !jQuery.expr.filters.hidden( elem );
};




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {
		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {
				// Treat each array item as a scalar.
				add( prefix, v );

			} else {
				// Item is non-scalar (array or object), encode its numeric index.
				buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
			}
		});

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {
		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {
		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {
			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		});

	} else {
		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

jQuery.fn.extend({
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map(function() {
			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		})
		.filter(function() {
			var type = this.type;
			// Use .is(":disabled") so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		})
		.map(function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					}) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		}).get();
	}
});


// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined ?
	// Support: IE6+
	function() {

		// XHR cannot access local files, always use ActiveX for that case
		return !this.isLocal &&

			// Support: IE7-8
			// oldIE XHR does not support non-RFC2616 methods (#13240)
			// See http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx
			// and http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9
			// Although this check for six methods instead of eight
			// since IE also does not support "trace" and "connect"
			/^(get|post|head|put|delete|options)$/i.test( this.type ) &&

			createStandardXHR() || createActiveXHR();
	} :
	// For all other browsers, use the standard XMLHttpRequest object
	createStandardXHR;

var xhrId = 0,
	xhrCallbacks = {},
	xhrSupported = jQuery.ajaxSettings.xhr();

// Support: IE<10
// Open requests must be manually aborted on unload (#5280)
if ( window.ActiveXObject ) {
	jQuery( window ).on( "unload", function() {
		for ( var key in xhrCallbacks ) {
			xhrCallbacks[ key ]( undefined, true );
		}
	});
}

// Determine support properties
support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
xhrSupported = support.ajax = !!xhrSupported;

// Create transport if the browser can provide an xhr
if ( xhrSupported ) {

	jQuery.ajaxTransport(function( options ) {
		// Cross domain only allowed if supported through XMLHttpRequest
		if ( !options.crossDomain || support.cors ) {

			var callback;

			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr(),
						id = ++xhrId;

					// Open the socket
					xhr.open( options.type, options.url, options.async, options.username, options.password );

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers["X-Requested-With"] ) {
						headers["X-Requested-With"] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						// Support: IE<9
						// IE's ActiveXObject throws a 'Type Mismatch' exception when setting
						// request header to a null-value.
						//
						// To keep consistent with other XHR implementations, cast the value
						// to string and ignore `undefined`.
						if ( headers[ i ] !== undefined ) {
							xhr.setRequestHeader( i, headers[ i ] + "" );
						}
					}

					// Do send the request
					// This may raise an exception which is actually
					// handled in jQuery.ajax (so no try/catch here)
					xhr.send( ( options.hasContent && options.data ) || null );

					// Listener
					callback = function( _, isAbort ) {
						var status, statusText, responses;

						// Was never called and is aborted or complete
						if ( callback && ( isAbort || xhr.readyState === 4 ) ) {
							// Clean up
							delete xhrCallbacks[ id ];
							callback = undefined;
							xhr.onreadystatechange = jQuery.noop;

							// Abort manually if needed
							if ( isAbort ) {
								if ( xhr.readyState !== 4 ) {
									xhr.abort();
								}
							} else {
								responses = {};
								status = xhr.status;

								// Support: IE<10
								// Accessing binary-data responseText throws an exception
								// (#11426)
								if ( typeof xhr.responseText === "string" ) {
									responses.text = xhr.responseText;
								}

								// Firefox throws an exception when accessing
								// statusText for faulty cross-domain requests
								try {
									statusText = xhr.statusText;
								} catch( e ) {
									// We normalize with Webkit giving an empty statusText
									statusText = "";
								}

								// Filter status for non standard behaviors

								// If the request is local and we have data: assume a success
								// (success with no data won't get notified, that's the best we
								// can do given current implementations)
								if ( !status && options.isLocal && !options.crossDomain ) {
									status = responses.text ? 200 : 404;
								// IE - #1450: sometimes returns 1223 when it should be 204
								} else if ( status === 1223 ) {
									status = 204;
								}
							}
						}

						// Call complete if needed
						if ( responses ) {
							complete( status, statusText, responses, xhr.getAllResponseHeaders() );
						}
					};

					if ( !options.async ) {
						// if we're in sync mode we fire the callback
						callback();
					} else if ( xhr.readyState === 4 ) {
						// (IE6 & IE7) if it's in cache and has been
						// retrieved directly we need to fire the callback
						setTimeout( callback );
					} else {
						// Add to the list of active xhr callbacks
						xhr.onreadystatechange = xhrCallbacks[ id ] = callback;
					}
				},

				abort: function() {
					if ( callback ) {
						callback( undefined, true );
					}
				}
			};
		}
	});
}

// Functions to create xhrs
function createStandardXHR() {
	try {
		return new window.XMLHttpRequest();
	} catch( e ) {}
}

function createActiveXHR() {
	try {
		return new window.ActiveXObject( "Microsoft.XMLHTTP" );
	} catch( e ) {}
}




// Install script dataType
jQuery.ajaxSetup({
	accepts: {
		script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /(?:java|ecma)script/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
});

// Handle cache's special case and global
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
		s.global = false;
	}
});

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function(s) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {

		var script,
			head = document.head || jQuery("head")[0] || document.documentElement;

		return {

			send: function( _, callback ) {

				script = document.createElement("script");

				script.async = true;

				if ( s.scriptCharset ) {
					script.charset = s.scriptCharset;
				}

				script.src = s.url;

				// Attach handlers for all browsers
				script.onload = script.onreadystatechange = function( _, isAbort ) {

					if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

						// Handle memory leak in IE
						script.onload = script.onreadystatechange = null;

						// Remove the script
						if ( script.parentNode ) {
							script.parentNode.removeChild( script );
						}

						// Dereference the script
						script = null;

						// Callback if not abort
						if ( !isAbort ) {
							callback( 200, "success" );
						}
					}
				};

				// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
				// Use native DOM manipulation to avoid our domManip AJAX trickery
				head.insertBefore( script, head.firstChild );
			},

			abort: function() {
				if ( script ) {
					script.onload( undefined, true );
				}
			}
		};
	}
});




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup({
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
});

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters["script json"] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always(function() {
			// Restore preexisting value
			window[ callbackName ] = overwritten;

			// Save back as free
			if ( s[ callbackName ] ) {
				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		});

		// Delegate to script
		return "script";
	}
});




// data: string of html
// context (optional): If specified, the fragment will be created in this context, defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}
	context = context || document;

	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[1] ) ];
	}

	parsed = jQuery.buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


// Keep a copy of the old load method
var _load = jQuery.fn.load;

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, response, type,
		self = this,
		off = url.indexOf(" ");

	if ( off >= 0 ) {
		selector = jQuery.trim( url.slice( off, url.length ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax({
			url: url,

			// if "type" variable is undefined, then "GET" method will be used
			type: type,
			dataType: "html",
			data: params
		}).done(function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		}).complete( callback && function( jqXHR, status ) {
			self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
		});
	}

	return this;
};




jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep(jQuery.timers, function( fn ) {
		return elem === fn.elem;
	}).length;
};





var docElem = window.document.documentElement;

/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ?
		elem :
		elem.nodeType === 9 ?
			elem.defaultView || elem.parentWindow :
			false;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			jQuery.inArray("auto", [ curCSSTop, curCSSLeft ] ) > -1;

		// need to be able to calculate position if either top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;
		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {
			options = options.call( elem, i, curOffset );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );
		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend({
	offset: function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each(function( i ) {
					jQuery.offset.setOffset( this, options, i );
				});
		}

		var docElem, win,
			box = { top: 0, left: 0 },
			elem = this[ 0 ],
			doc = elem && elem.ownerDocument;

		if ( !doc ) {
			return;
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) {
			return box;
		}

		// If we don't have gBCR, just use 0,0 rather than error
		// BlackBerry 5, iOS 3 (original iPhone)
		if ( typeof elem.getBoundingClientRect !== strundefined ) {
			box = elem.getBoundingClientRect();
		}
		win = getWindow( doc );
		return {
			top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
			left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			parentOffset = { top: 0, left: 0 },
			elem = this[ 0 ];

		// fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {
			// we assume that getBoundingClientRect is available when computed position is fixed
			offset = elem.getBoundingClientRect();
		} else {
			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top  += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		// note: when an element has margin: auto the offsetLeft and marginLeft
		// are the same in Safari causing offset.left to incorrectly be 0
		return {
			top:  offset.top  - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true)
		};
	},

	offsetParent: function() {
		return this.map(function() {
			var offsetParent = this.offsetParent || docElem;

			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position" ) === "static" ) ) {
				offsetParent = offsetParent.offsetParent;
			}
			return offsetParent || docElem;
		});
	}
});

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = /Y/.test( prop );

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? (prop in win) ? win[ prop ] :
					win.document.documentElement[ method ] :
					elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : jQuery( win ).scrollLeft(),
					top ? val : jQuery( win ).scrollTop()
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
});

// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// getComputedStyle returns percent when specified for top/left/bottom/right
// rather than make the css module depend on the offset module, we just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );
				// if curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
});


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
		// margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {
					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height], whichever is greatest
					// unfortunately, this causes bug #3838 in IE6/8 only, but there is currently no good, small way to fix it.
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?
					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	});
});


// The number of elements contained in the matched element set
jQuery.fn.size = function() {
	return this.length;
};

jQuery.fn.andSelf = jQuery.fn.addBack;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	});
}




var
	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in
// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === strundefined ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;

}));

},{}],34:[function(require,module,exports){
module.exports = function (css) {
  var head = document.getElementsByTagName('head')[0],
      style = document.createElement('style');

  style.type = 'text/css';

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  
  head.appendChild(style);
};

module.exports.byUrl = function(url) {
  var head = document.getElementsByTagName('head')[0],
      link = document.createElement('link');

  link.rel = 'stylesheet';
  link.href = url;
  
  head.appendChild(link);
};
},{}],35:[function(require,module,exports){
module.exports = require('cssify');

},{"cssify":34}]},{},[16])