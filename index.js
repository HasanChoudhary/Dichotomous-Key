var questionText = $(".question");
var monster_name = $(".monster_name");
var monster_image = $(".monster_image");
var questionNumber = 1;
var found = false;
$(".btn").click(function (){
    if(found == false){
        if(questionText.text() == "Does it have more than two eyes?" && questionNumber==1){
            switch(this.id){
                case "yes":
                    questionText.text("Does it have at least one eye attached to the body?");
                break;
                case "no":
                    questionText.text("Does it have freckles, and not have ears?");
                break;
            }
        }
        if(questionText.text() == "Does it have at least one eye attached to the body?" && questionNumber==2){
            switch(this.id){
                case "yes":
                    questionText.text("Is it Blue?");
                break;
                case "no":
                    questionText.text("Does it have arms?");
                break;
            }
        }
        else if(questionText.text() == "Does it have freckles, and not have ears?" && questionNumber==2){
            switch(this.id){
                case "yes":
                    questionText.text("What is its main colour?");
                    $(".no").text("Pink");
                    $(".yes").text("Green");
                break;
                case "no":
                    questionText.text("Are its eyeballs on an antenna?");
                break;
            }
        }
        if(questionText.text() == "Is it Blue?" && questionNumber==3){
            switch(this.id){
                case "yes":
                    $(".no").text("Click");
                    $(".yes").text("Click");
                    found = true;
                    questionText.text("Click To Identify New Monster");
                    monster_name.text("Cerritulus Caeruleum");
                    monster_image.attr("src", "images/Monster5.png");
                break;
                case "no":
                    $(".no").text("Click");
                    $(".yes").text("Click");
                    found = true;
                    questionText.text("Click To Identify New Monster");
                    monster_name.text("Cerritulus Deformem");
                    monster_image.attr("src", "images/Monster4.png");
                break;
            }
        }
        else if(questionText.text() == "Does it have arms?" && questionNumber==3){
            switch(this.id){
                case "yes":
                    $(".no").text("Click");
                    $(".yes").text("Click");
                    found = true;
                    questionText.text("Click To Identify New Monster");
                    monster_name.text("Oculos-fluente Lingua");
                    monster_image.attr("src", "images/Monster9.png");
                break;
                case "no":
                    $(".no").text("Click");
                    $(".yes").text("Click");
                    found = true;
                    questionText.text("Click To Identify New Monster");
                    monster_name.text("Oculos-fluente Nasus");
                    monster_image.attr("src", "images/Monster11.png");
                break;
            }
        }
        else if(questionText.text() == "What is its main colour?" && questionNumber==3){
            switch(this.id){
                case "yes":
                    questionText.text("Is it large or small?");
                    $(".no").text("Small");
                    $(".yes").text("Large");
                break;
                case "no":
                    questionText.text("How many eye branches does it have?");
                    $(".no").text("One");
                    $(".yes").text("Two");
                break;
            }
        }
        else if(questionText.text() == "Are its eyeballs on an antenna?" && questionNumber==3){
            switch(this.id){
                case "yes":
                    questionText.text("Does it have a mouth?");
                break;
                case "no":
                    questionText.text("Are its arms pointing down?");
                break;
            }
        }
        if(questionText.text() == "How many eye branches does it have?" && questionNumber==4){
            switch(this.id){
                case "yes":
                    $(".no").text("Click");
                    $(".yes").text("Click");
                    found = true;
                    questionText.text("Click To Identify New Monster");
                    monster_name.text("Rosea-oculi Duo");
                    monster_image.attr("src", "images/Monster10.png");
                break;
                case "no":
                    $(".no").text("Click");
                    $(".yes").text("Click");
                    found = true;
                    questionText.text("Click To Identify New Monster");
                    monster_name.text("Rosea-oculi Unus");
                    monster_image.attr("src", "images/Monster2.png");
                break;
            }
        }
        else if(questionText.text() == "Is it large or small?" && questionNumber==4){
            switch(this.id){
                case "yes":
                    $(".no").text("Click");
                    $(".yes").text("Click");
                    found = true;
                    questionText.text("Click To Identify New Monster");
                    monster_name.text("Viridi-pupillam Magna");
                    monster_image.attr("src", "images/Monster1.png");
                break;
                case "no":
                    $(".no").text("Click");
                    $(".yes").text("Click");
                    found = true;
                    questionText.text("Click To Identify New Monster");
                    monster_name.text("Viridi-pupillam Parvus");
                    monster_image.attr("src", "images/Monster6.png");
                break;
            }
        }
        else if(questionText.text() == "Does it have a mouth?" && questionNumber==4){
            switch(this.id){
                case "yes":
                    $(".no").text("Click");
                    $(".yes").text("Click");
                    found = true;
                    questionText.text("Click To Identify New Monster");
                    monster_name.text("Quousque-oculus Os");
                    monster_image.attr("src", "images/Monster12.png");
                break;
                case "no":
                    $(".no").text("Click");
                    $(".yes").text("Click");
                    found = true;
                    questionText.text("Click To Identify New Monster");
                    monster_name.text("Quousque-oculus Armis");
                    monster_image.attr("src", "images/Monster7.png");
                break;
            }
        }
        else if(questionText.text() == "Are its arms pointing down?" && questionNumber==4){
            switch(this.id){
                case "yes":
                    $(".no").text("Click");
                    $(".yes").text("Click");
                    found = true;
                    questionText.text("Click To Identify New Monster");
                    monster_name.text("Fixos-oculos Punctatum");
                    monster_image.attr("src", "images/Monster3.png");
                break;
                case "no":
                    $(".no").text("Click");
                    $(".yes").text("Click");
                    found = true;
                    questionText.text("Click To Identify New Monster");
                    monster_name.text("Fixos-oculos Purpura");
                    monster_image.attr("src", "images/Monster8.png");
                break;
            }
        }
        questionNumber++;
    }
    else{
        location.reload();
    }
});
