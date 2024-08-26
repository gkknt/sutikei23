class name {
    constructor(elm1,elm2,elm3,elm4,elm5,elm6) {
        this.elm1 = elm1;
        this.elm2 = elm2;
        this.elm3 = elm3;
        this.elm4 = elm4;
        this.sum=parseInt(elm5)*x+parseInt(elm6)

        this.vc1 = new VCanvas( elm1 );
        this.vc2 = new VCanvas( elm2 );
        this.vc3 = new VCanvas( elm3 );
        this.vc4 = new VCanvas( elm4 );

        this.background();
        this.vc1.forecolor( 0, 50, 50 );
        this.vc1.forecolor(0,50,50);

        nl.on( "start", ( key, params ) => {
            timer1.enable();
          });
    }
 

    background() {
        this.vc1.cls();
        this.vc2.cls();
    
        this.vc1.scale( -1.2, 1.2, 2.4, -2.4 );
        this.vc2.scale( -1.2, 1.2, 2.4, -2.4 );
    
        this.vc2.forecolor( 0, 0, 0 );
        this.vc2.beginPath();
        this.vc2.line( -1.2, 0, 1.2, 0 );
        this.vc2.line( 0, 1.2, 0, -1.2 );
        this.vc2.stroke();
    
        this.vc3.cls();
        this.vc4.cls();
    
        this.vc3.scale( -1.2, 1.2, 2.4, -2.4 );
        this.vc4.scale( -1.2, 1.2, 2.4, -2.4 );
    
        this.vc4.forecolor( 0, 0, 0 );
        this.vc4.beginPath();
        this.vc4.line( -1.2, 0, 1.2, 0 );
        this.vc4.line( 0, 1.2, 0, -1.2 );
        this.vc4.stroke();
        this.vc3.lineStart( 0, 0 );
        this.vc3.forecolor( 180, 0, 200, 0.3 );
    }

    
}
    
var guisetup = () => {
    var nl = new nylon();
	document.getElementById("start").addEventListener( "click", () => {
		nl.emit( "start", null );
	});
}

window.addEventListener("load", function(e) {
    guisetup();
    var x = new montecarlo(
        document.getElementById('graph1'),
        document.getElementById('graph1b'),
        document.getElementById('graph2'),
        document.getElementById('graph2b'),
        document.getElementById('inputx').value,
        document.getElementById('input').value
    );
      
});


