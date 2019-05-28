


$('button').click(function(){
    var input = $('input').val();
    $(".images").html("");
    if(input === "happy"){
        HappyMood ();
    } else if(input==="sad"){
        SadMood();
    }else if(input==="angry"){
      AngryMood();
    }else if(input==="tired"){
        TiredMood();
    }else{
     alert("Please enter Happy, Sad, Angry, or Tired !");   
    }
});



function HappyMood(){
    changeBackground("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlWnNiEDpkPjeo-2wpZLMPYax-TgbyMQFKpZOsei7J7rmSj0ad");
    changeTextColor("red");
    displayImage ("https://happyologist.co.uk/wp-content/uploads/happy.jpeg");
    displayImage ("http://static1.squarespace.com/static/59e51f9bf14aa199001d4943/t/59e90dda18b27d79ae7a4576/1508445663881/happyplace-type-yellowcircle-150.png?format=1500w");
    displayImage ("https://cdn.shopify.com/s/files/1/0079/1902/products/Moon_and_Lola_xx_Thimblepress_Word_Wall_Art_-_Happy.jpg?v=1500065143");
}

function SadMood(){
    changeBackground("https://dhggywfvre0o8.cloudfront.net/app/uploads/2017/11/22153252/Typeform-Blog-BlackFriday-Cover-AskAwesomely.jpg");
    changeTextColor("blue");
    displayImage ("https://i.ytimg.com/vi/iAeYPfrXwk4/maxresdefault.jpg");
    displayImage ("https://www.familyfriendpoems.com/images/hero/sad.jpg");
    displayImage ("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe4yBc7ULLHPrpPEPS-le9uWa4Oa3PQuScmxWDmQarDry8pR4YNQ");
}

function AngryMood(){
    changeBackground("https://www.abc.net.au/radionational/image/6289622-4x3-340x255.png");
    changeTextColor("purple");
    displayImage ("https://images.fatherly.com/wp-content/uploads/2018/08/angry-men.jpg?q=65&enable=upscale&w=600");
    displayImage ("https://cdn-images-1.medium.com/max/1600/1*OrGA_Yjyt4sELATYJkmFJQ.jpeg");
    displayImage ("https://i0.wp.com/www.nerdycreator.com/wp-content/uploads/2015/11/1103-Anger-Feeling-Angry.jpg");
}

function TiredMood(){
    changeBackground("https://images.tedium.co/2017/03/0322_purple.jpg");
    changeTextColor("yellow");
    displayImage ("https://cdn.newsapi.com.au/image/v1/68a9c1580f72081ece11dc866171d0c6");
    displayImage ("https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/11/26/12/featureimage.jpg?w968h681");
    displayImage ("https://2rdnmg1qbg403gumla1v9i2h-wpengine.netdna-ssl.com/wp-content/uploads/sites/3/2017/07/fatigue_917562466_770x533-650x428.jpg");
}
function changeBackground(backgroundImage){
    $('body').css('background-image', "url("+backgroundImage+")");
}

function displayImage(image){
    $('.chris').append('<img src ='+ image + '>');

}

function changeTextColor(color){
    $('body').css('color', color);
}