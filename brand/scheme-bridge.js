(function() {
  var params = new URLSearchParams(window.location.search);
  var scheme = params.get('scheme');
  if (!scheme || scheme === 'deep-night') return;

  var themes = {
    'ocean': {
      bg:'#082f49', text:'#f0f9ff',
      gold:'#facc15', lightGold:'#fde047', blue:'#38bdf8', parch:'#f0f9ff', mid:'#0c4a6e',
      goldRgb:'250,204,21', blueRgb:'56,189,248', parchRgb:'240,249,255', midRgb:'8,47,73',
      light: false,
    },
    'warm-ink': {
      bg:'#1c1a16', text:'#e0d8cc',
      gold:'#8a6a3a', lightGold:'#b08a50', blue:'#3a6e62', parch:'#e0d8cc', mid:'#2a2620',
      goldRgb:'138,106,58', blueRgb:'58,110,98', parchRgb:'224,216,204', midRgb:'42,38,32',
      light: false,
    },
    'linen': {
      bg:'#f7f5f0', text:'#1c1a16',
      gold:'#8a6a3a', lightGold:'#6b5230', blue:'#075985', parch:'#1c1a16', mid:'#e8e5df',
      goldRgb:'138,106,58', blueRgb:'7,89,133', parchRgb:'28,26,22', midRgb:'232,229,223',
      light: true,
    },
    'frost': {
      bg:'#f0f4f8', text:'#1e293b',
      gold:'#0d9488', lightGold:'#0f766e', blue:'#6366f1', parch:'#1e293b', mid:'#e2e8f0',
      goldRgb:'13,148,136', blueRgb:'99,102,241', parchRgb:'30,41,59', midRgb:'226,232,240',
      light: true,
    },
  };

  var t = themes[scheme];
  if (!t) return;

  document.body.style.background = t.bg;
  document.body.style.color = t.text;

  var css = document.createElement('style');
  css.textContent =
    '.wordmark { color: ' + t.text + ' !important; }' +
    '.wordmark .h-char { color: ' + t.gold + ' !important; }' +
    '.subtitle { color: rgba(' + t.blueRgb + ', 0.6) !important; }' +
    '.tagline { color: rgba(' + t.goldRgb + ', 0.4) !important; }' +
    '.core-statement { color: rgba(' + t.goldRgb + ', 0.7) !important; }' +
    '.core-statement span { color: rgba(' + t.blueRgb + ', 0.5) !important; }' +
    '.commute-statement { color: rgba(' + t.goldRgb + ', 0.5) !important; }' +
    '.instruction, .insight { color: rgba(' + t.blueRgb + ', 0.3) !important; }' +
    '.tradition-label { color: rgba(' + t.blueRgb + ', 0.7) !important; }' +
    '.tradition-line { background: rgba(' + t.blueRgb + ', 0.2) !important; }' +
    '.layer-card .name { color: rgba(' + t.goldRgb + ', 0.7) !important; }' +
    '.layer-card .desc { color: rgba(' + t.blueRgb + ', 0.5) !important; }' +
    '.layer-card:hover { background: rgba(' + t.blueRgb + ', 0.05) !important; }' +
    '.cb-1 { background: ' + t.gold + ' !important; }' +
    '.cb-2 { background: ' + t.blue + ' !important; }' +
    '.cb-3 { background: ' + t.mid + ' !important; }' +
    '.cb-4 { background: ' + t.parch + ' !important; }' +
    '.cb-5 { background: ' + t.bg + ' !important; border-color: rgba(' + t.blueRgb + ', 0.2) !important; }';
  document.head.appendChild(css);

  var hexMap = {
    '#baa370': t.gold, '#d4bc7c': t.lightGold,
    '#8ba4c7': t.blue, '#e0d8cc': t.parch,
  };

  var rgbaFrom = ['186,163,112', '186, 163, 112', '139,164,199', '139, 164, 199',
                  '224,216,204', '224, 216, 204', '26,36,64', '26, 36, 64'];
  var rgbaTo   = [t.goldRgb, t.goldRgb, t.blueRgb, t.blueRgb,
                  t.parchRgb, t.parchRgb, t.midRgb, t.midRgb];

  function remap(c) {
    if (!c) return null;
    var v = c.trim().toLowerCase();
    if (hexMap[v]) return hexMap[v];
    for (var i = 0; i < rgbaFrom.length; i++) {
      if (v.indexOf(rgbaFrom[i].toLowerCase()) !== -1) {
        return v.replace(rgbaFrom[i].toLowerCase(), rgbaTo[i]);
      }
    }
    return null;
  }

  document.querySelectorAll('svg *').forEach(function(el) {
    ['fill', 'stroke', 'stop-color'].forEach(function(attr) {
      var val = el.getAttribute(attr);
      if (val && val !== 'none' && val !== 'transparent' && val.indexOf('url(') === -1) {
        var mapped = remap(val);
        if (mapped) el.setAttribute(attr, mapped);
      }
    });
  });

  document.querySelectorAll('.gradient-bg').forEach(function(el) {
    el.style.background =
      'radial-gradient(ellipse at 35% 50%, rgba(' + t.midRgb + ', 0.4) 0%, transparent 60%),' +
      'radial-gradient(ellipse at 65% 50%, rgba(' + t.goldRgb + ', 0.06) 0%, transparent 50%)';
  });

  document.querySelectorAll('.gradient-orb.orb-1').forEach(function(el) {
    el.style.background = 'rgba(' + t.midRgb + ', 0.5)';
  });
  document.querySelectorAll('.gradient-orb.orb-2').forEach(function(el) {
    el.style.background = 'rgba(' + t.goldRgb + ', 0.08)';
  });

  var canvas = document.getElementById('bg');
  if (canvas) canvas.style.opacity = t.light ? '0.08' : '0.6';
})();
