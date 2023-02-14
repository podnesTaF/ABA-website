const input = document.getElementById('dateOfBirth');
const pb = document.getElementById('pb');
const sb = document.getElementById('sb');

const dateInputMask = function dateInputMask(elm, type) {
    elm.addEventListener('keypress', function(e) {
        if(e.keyCode < 47 || e.keyCode > 57) {
            e.preventDefault();
        }

        const len = elm.value.length;

        if(len !== 1 || len !== 3) {
            if(e.keyCode === 47) {
                e.preventDefault();
            }
        }

        if(len === 2) {
            if(type === 'date') {
                elm.value += '/';
            } else {
                elm.value += ':';
            }
        }

        if(len === 5) {
            if(type === 'date') {
                elm.value += '/';
            } else {
                elm.value += '.';
            }
        }

        if(type==='date') {
            if (len > 9) {
                elm.value = elm.value.slice(0, 9);
            }
        } else {
            if (len > 7) {
                elm.value = elm.value.slice(0, 7);
            }
        }
    });
};

dateInputMask(input, 'date');
dateInputMask(pb, 'time');
dateInputMask(sb, 'time');

const mask = (selector) => {
    function setMask() {
        let matrix = '+###############';

        maskList.forEach(item => {
            let code = item.code.replace(/[\s#]/g, ''),
                phone = this.value.replace(/[\s#-)(]/g, '');

            if (phone.includes(code)) {
                console.log(phone, code);
                matrix = item.code;
            }
        });

        let i = 0,
            val = this.value.replace(/\D/g, '');

        this.value = matrix.replace(/(?!\+)./g, function(a) {
            return /[#\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
        });
    }

    let inputs = document.querySelectorAll(selector);

    inputs.forEach(input => {
        if (!input.value) input.value = '';
        input.addEventListener('input', setMask);
    });
};

mask('#phone');