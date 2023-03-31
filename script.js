var title = document.getElementById('title');
window.addEventListener('online',set);
window.addEventListener('offline',set);


function set()
{
    if(navigator.onLine){
        title.innerHTML = 'You are online';
    }else{
        title.innerHTML = 'you are offline';
    }
}
set();