class Form {
    constructor() {



    }
    display() {
        var title = createElement('h1')
        title.html('Welcome To My Game !!')
        title.position(150, 50)
        var content = createElement('h3')
        content.html('This is a life happiness simulator you are given decisions and based on that your happiness.<br> The decisons will either increase or decrease,you need to try and live the happiest life ')
        content.position(90, 150)

        var Button = createButton('Enter')
        Button.position(950, 480)

        Button.mousePressed(function(){
            title.hide()
           content.hide()
           Button.hide()
           main=new Main()      
           main.display()    

         
        }
        )




    }
}

