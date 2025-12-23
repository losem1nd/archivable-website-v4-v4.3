// const navLinks = document.querySelectorAll('.nav-link');
// const tabContents = document.querySelectorAll('.tab-content');
// const tabDropdown = document.getElementById('tabDropdown');

// function showTab(tabId) {
//   tabContents.forEach(tc => tc.classList.add('hidden'));
//   document.getElementById(tabId).classList.remove('hidden');

//   navLinks.forEach(link => link.classList.toggle('active', link.dataset.tab === tabId));
//     if (tabDropdown) tabDropdown.value = tabId;
// }

// navLinks.forEach(link => link.addEventListener('click', () => showTab(link.dataset.tab)));
// if (tabDropdown) tabDropdown.addEventListener('change', () => showTab(tabDropdown.value));

(function(){
    var _a = document['querySelectorAll']('.nav-link'); 
    var _b = document['querySelectorAll']('.tab-content'); 
    var _c = document['getElementById']('tabDropdown'); 

    function _d(_e){
        _b['forEach'](function(_f){
            _f['classList']['add']('hidden');
        });

        document['getElementById'](_e)['classList']['remove']('hidden');

        _a['forEach'](function(_g){
            _g['classList']['toggle'](
                'active', 
                _g['dataset']['tab'] === _e
            );
        });

        _c ? _c['value'] = _e : null;
    }

    _a['forEach'](function(_h){
        _h['addEventListener'](
            'click', 
            function(){
                _d(this['dataset']['tab']);
            }
        );
    });

    if(_c){
        _c['addEventListener'](
            'change', 
            function(){
                _d(_c['value']);
            }
        );
    }

})();
