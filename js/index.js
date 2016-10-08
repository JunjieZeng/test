/**
 * Created by 1VAN on 2016/10/5.
 */
window.onload=function ( ) {
document.getElementsByTagName('header')[0].getElementsByTagName('li')[2].onclick=function () {
        document.getElementsByClassName('jumparea')[0].style.display='block';
        setTimeout(function () {
                document.getElementsByClassName('jumparea')[0].style.display='none';
        },3500)
}
}