// 构造函数
function Header() {
	this.createDom();
	this.createLoginModal();
	this.createRegisterModal();
}

// 头部布局结构模板
Header.template = `<nav class="navbar navbar-inverse">
		  <div class="container-fluid">
		    <div class="navbar-header">
		      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
		        <span class="icon-bar"></span>
		        <span class="icon-bar"></span>
		        <span class="icon-bar"></span>
		      </button>
		      <a class="navbar-brand" href="#">职位管理系统</a>
		    </div>
		    <div class="collapse navbar-collapse" id="position-nav">
		      <ul class="nav navbar-nav">
		        <li class="active"><a href="/">首页</a></li>
		        <li><a href="/html/position.html">职位管理</a></li>
		      </ul>
		      <ul class="nav navbar-nav navbar-right">
		        <li data-toggle="modal" data-target="#loginModal"><a href="#">登录</a></li>
		        <li data-toggle="modal" data-target="#regModal"><a href="#">注册</a></li>
		      </ul>
		    </div>
		  </div>
		</nav>`;

// 原型继承
$.extend(Header.prototype, {
	// 创建头部的DOM结构
	createDom : function() {
		$(Header.template).appendTo(".header");
	},
	// 创建登录模态框
	createLoginModal : function() {
		new LoginModal();
	},
	// 创建注册模态框
	createRegisterModal : function() {
		new RegisterModal();
	}
});
