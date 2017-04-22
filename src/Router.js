/**
 * Created by girl on 2017/4/22.
 */

/**
 *
 * @param routes
 * @constructor pengfeng
 * routes格式是{路径:颜色}
 */
function Router(routes){
    this.routes = routes;
    this.currentUrl = '';
   return this.init();
}

Router.prototype.change = function(color){
    document.querySelector('body').style.backgroundColor = color;

}

Router.prototype.refresh = function(){
    this.currentUrl = window.location.hash.slice(1) || '/';
    this.change(this.routes[this.currentUrl]);
}

Router.prototype.init = function(){
    window.addEventListener('load',this.refresh.bind(this),false);
    window.addEventListener('hashchange',this.refresh.bind(this),false);
};

