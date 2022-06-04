function setup()
{
    canvas=createCanvas(280,280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    s1=window.speechSynthesis;
}
function clear()
{
    background("white");   
}
function draw()
{
    strokeWeight(13);
    stroke(0);
    if(mouseIsPressed)
    {
        line(pmouseX,pmouseY, mouseX, mouseY );
    }
}
function classifyCanvas()
{
    classifier.classify(canvas,gotresult);
}
function gotresult(error,results)
{
    if(error)
    {
        console.error(error);
    }
    console.log(results);
    document.getElementById("label").innerHTML="label:"+results[0].label;
    document.getElementById("confident").innerHTML="confident:"+ Math.round(results[0].confidence*100)+"%";
    u1=new SpeechSynthesisUtterance(results[0].label);
    s1.speak(u1);
}
function preload()
{
    classifier=ml5.imageClassifier('DoodleNet');
}