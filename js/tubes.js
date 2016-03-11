$('.youtube_player_iframe').each(function(){
  this.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*')
});