function resize(){var designSize=1920;var html=document.documentElement;var wW=html.clientWidth;if(wW<1280){wW=1280}var rem=wW*100/designSize;document.documentElement.style.fontSize=rem+'px'};resize();window.onresize=function(){resize()}