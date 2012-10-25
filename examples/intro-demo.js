$('#demo-start').click(function(){

    $('#demo-titles').empty().titleSequence([

        {
            content: 'This is<br />an example</br>title sequence',
            id: 'scroll1',
            css: { left: 0, top: '250px' },
            animate: { top: '16px' },
            duration: 3000,
            easing: 'linear',
            pause: 1200
        },

        {
            selector: '#scroll1',
            animate: { opacity: 0 },
            duration: 2000,
            pause: 900
        },

        {
            content: '',
            id: 'group1',
            css: { height: '300px', opacity: 0 }
        },

        {
            container: '#group1',
            content: 'You have seen ...',
            css: { left: '30px', top: '16px' },
        },

        {
            selector: '#group1',
            animate: { opacity: 1 },
            duration: 2000,
            pause: 900
        },

        {
            container: '#group1',
            content: '&bull; scrolling',
            css: { left: '38px', top: '150px' },
            animate: { top: '44px' },
            duration: 1200,
            pause: 500
        },

        {
            container: '#group1',
            content: '&bull; fading',
            css: { left: '38px', top: '76px', opacity: 0 },
            animate: { opacity: 1 },
            duration: 1200,
            pause: 500
        },

        {
            container: '#group1',
            content: '&bull; wipe in',
            css: { left: '38px', top: '104px', width: 0 },
            animate: { width: '240px' },
            duration: 1200,
            pause: 500
        },

        {
            container: '#group1',
            content: '&bull; wipe out?',
            css: { left: '38px', top: '132px', width: 0 },
            animate: { width: '240px' },
            duration: 1200,
            pause: 500
        },

        {
            selector: '#group1',
            animate: { width: 0 },
            duration: 1200,
            pause: 500
        },

        {
            delete: '#group1',
        },

        function(seq) {
            $('#demo-titles').css({ 'background-color': '#000000' });
            seq.next_cue();
        },

        {
            content: '',
            id: 'colour1',
            css: { height: '160px' },
            pause: 800
        },

        {
            container: '#colour1',
            content: "You",
            css: { left: 0, top: '22px', color: '#f5510a' },
            pause: 800
        },

        {
            container: '#colour1',
            content: "Can",
            css: { left: 0, top: '56px', color: '#0d8d10' },
            pause: 800
        },

        {
            container: '#colour1',
            content: "Use",
            css: { left: 0, top: '90px', color: '#0050ff' },
            pause: 800
        },

        {
            container: '#colour1',
            content: "Colour!",
            css: { left: 0, top: '124px', color: '#f00f0f' },
            pause: 1000
        },

        {
            selector: '#colour1',
            animate: { opacity: 0 },
            duration: 1600,
            pause: 800
        },

        {
            delete: '#colour1'
        },

        function(seq) {
            $('#demo-titles').css({ 'background-color': '#44c735' });
            seq.next_cue();
        },

        {
            content: '',
            id: 'fonts',
            css: { height: '160px' },
            pause: 800
        },

        {
            container: '#fonts',
            content: "And",
            css: { left: '90px', top: '16px', 'font-family': '"Trebuchet MS", Verdana, sans-serif', 'font-size': '40px', 'font-weight': 'bold' },
            pause: 1000
        },

        {
            container: '#fonts',
            content: "Fonts",
            css: { left: '40px', top: '34px', 'font-family': '"Times New Roman", Gerogia, serif', 'font-size': '76px', 'padding-top': '16px' },
            pause: 1000
        },

        {
            container: '#fonts',
            content: "too",
            css: { left: '110px', top: '94px', 'font-family': '"Courier New", monospace', 'font-size': '40px', 'font-weight': 'normal' },
            pause: 1000
        },

        {
            container: '#fonts',
            content: "of course",
            css: { left: '8px', top: '120px', 'font-family': '"Arial Black", sans-serif', 'font-size': '40px', 'font-weight': '900', 'padding-top': '6px' },
            pause: 1400
        },

        {
            selector: '#fonts',
            animate: { opacity: 0 },
            duration: 1600,
            pause: 800
        },

        function(seq) {
            $('#demo-titles').css({ 'background-color': '#eeeeee' });
            seq.next_cue();
        }

    ]);

});
