(() => {

    const topEl = document.querySelector("#beer1"); //this is the object tag itself

//define a waypoint and run some animation
var waypoint = new Waypoint ({
    element: document.querySelector('#beer2').querySelector('.svg-graphic'),
    handler: function(direction) {
        console.log("scrolled to element", this.element);
        runAnimation(this.element, ["lGlass", "cGlass", "rGlass"]);
    },
        offset: 200
});

var waypoint = new Waypoint ({
    element: document.querySelector('#beer3').querySelector('.svg-graphic'),
    handler: function(direction) {
        console.log("scrolled to beer3", this.element);
        runAnimation(this.element, ["lBarrel, cBarrel, rBarrel"]);
    },
        offset: 200
}); //sos


    //function
    function runAnimation(parent, elements) {
        //debugger;
        console.log(parent,elements);

        // get the svg ref from the parent //parent is the object tag, 
        innerSVG = parent.contentDocument; //.contentDocument is the svg inside the object tag

        //props object
        let animProps = {};

        switch(parent.id) { //look at the parent
            case "bottle":
            animProps = {scaleX: 1.5, scaleY: 1.5, rotation: 360, transformOrigin: "50% 50%"};
            break; 
            
            case "glasses":
            animProps = {scaleX: 1.5, scaleY: 1.5};
            break;

            case "barrels":
            //run some other animation here
            break;

            default:
            //do nothing
            break;
        }


        // run an animation with Greensock
        elements.forEach(el =>{
            let target = innerSVG.querySelector(`#${el}`); //this is a backslash
            TweenMax.to(target, 0.6, animProps);
        })
    }

    function getData(){
//run a fetch call to the DB and get the data that foes with this graphic
debugger;

    }


    //event handling 
    topEl.addEventListener("mouseover", function() {
        runAnimation(this.querySelector('.svg-graphic'), ['lStar', 'rStar']); //getting the svg itself //lStar and rStar (could be id or class, because we didnt put anything it's fine) are from our svg
    }); //isolating the stars there, whatever you pass there, means something in the function

    topEl.addEventListener("click", getData);


})();