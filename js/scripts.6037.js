$(function(){navigator.userAgent.match(/(iPod|iPhone|iPad)/)&&($(".section2").backstretch("/assets/images/about-story/lamp.jpg"),$(".section4").backstretch("/assets/images/about-story/fish.jpg"))}),$(document).ready(function(){function a(){return"ontouchstart"in window||"onmsgesturechange"in window}function b(){$("#work .clients li").has(".popup-block").hoverIntent(function(){$(this).find(".popup-block, img").fadeToggle("fast","linear")},function(){$(this).find(".popup-block, img").fadeToggle("fast","linear")})}function c(){$("#team-page .member-box .icon-info").bind("touchstart",function(){$(this).parent(".member-box").find(".popup-block").fadeToggle("slow")})}function d(){$("#team-page .member-box").has(".popup-block").hoverIntent(function(){$(this).find(".popup-block").fadeIn()},function(){$(this).find(".popup-block").fadeOut()})}$("a.smooth-scroll-to").click(function(a){$("html, body").animate({scrollTop:$(this.hash).offset().top},800),a.preventDefault()});var e=function(){var a=".popup-block, img",b=$(this),c=$("#work .clients .logo .popup-block:visible").parent(".logo");c.length&&c[0]!==b[0]&&c.find(a).fadeToggle("fast","linear"),b.find(a).fadeToggle("fast","linear")};a()?($("body").addClass("is-touch-device"),c(),$("#work .clients .logo").bind("touchstart",e)):(b(),d())});