const generateRandom = (from, to) => {
    return Math.floor(Math.random() * (to - from + 1)) + from;
}

const onClickGeneratePwd = () => {
    const PWD_MIN_LEN = 8;
    const PWD_MAX_LEN = 12;
    const PWD_SYMS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-$#&~*!';
    const PWD_SYMS_LEN = PWD_SYMS.length - 1;
    let password = '';

    const pwdLen = generateRandom(PWD_MIN_LEN, PWD_MAX_LEN);

    for(let i = 0; i < pwdLen; i += 1){
        const rand = generateRandom(0, PWD_SYMS_LEN);
        password = `${ password }${ PWD_SYMS[rand] }`;
    }

    const randView = document.querySelector('.rand-pwd');

    randView.innerText = password;
    
}


document.querySelector('.rand-pwd-gen').addEventListener('click', onClickGeneratePwd);