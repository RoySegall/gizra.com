$(function(){navigator.userAgent.match(/(iPod|iPhone|iPad)/)&&($(".section2").backstretch("/assets/images/about-story/lamp.jpg"),$(".section4").backstretch("/assets/images/about-story/fish.jpg"))}),$(document).ready(function(){function a(){return"ontouchstart"in window||"onmsgesturechange"in window}a()?($("#team-page .icon-info").show(),$("#team-page .member-box .icon-info").bind("touchstart",function(){$(this).parent(".member-box").find(".popup-block").fadeToggle("slow","linear")})):($("#work .clients li").has(".popup-block").hoverIntent(function(){$(this).find("img").fadeOut(),$(this).find(".popup-block").fadeIn()},function(){$(this).find(".popup-block").fadeOut(),$(this).find("img").fadeIn()}),$("#team-page .member-box").has(".popup-block").hoverIntent(function(){$(this).find(".popup-block").fadeIn()},function(){$(this).find(".popup-block").fadeOut()}))});