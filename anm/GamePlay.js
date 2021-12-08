
GamePlayManager = {
    init: function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
    },
    preload: function() {
		var me=this;
        me.load.image('background',"img/fondo1.jpg");
		me.load.spritesheet("man","img/man3.png",128,170);
		
    },
    create: function() {
		var me=this;
        me.game.add.sprite(0, 0, 'background');
		
		me.man=me.game.add.sprite(100,390,"man");
		me.man.animations.add("right",[0,1,2,3,4,5],8,true);
		me.game.cursores=me.input.keyboard.createCursorKeys();
		me.game.physics.startSystem(Phaser.Physics.ARCADE);
		me.man.animations.play("right");
    },
    update: function() {
		var me=this;
		me.man.x+=2;
		if(me.man.x>=me.game.world.width){
			me.man.x=-100;
			}
		
        
    }
}

var game = new Phaser.Game(1136, 640, Phaser.CANVAS);
    
game.state.add("gameplay", GamePlayManager);
game.state.start("gameplay");