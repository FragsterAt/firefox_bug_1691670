
let btn = document.getElementById('load-chunk')

btn.addEventListener('click', async () => {
    let {log} = await import(/* webpackPrefetch: true */'./chunk');
    log()
})