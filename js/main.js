$(document).ready(function(){

    // Slider
    if(window.location.href.indexOf('index') > -1){
        $('.galeria').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true,
            pager: true
        });
    }
    

    // Posts
    if(window.location.href.indexOf('index') > -1){
        var posts = [
            {
                title: '¿Que es MEAN stack?',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'MEAN se refiere a un conjunto de tecnonlogias que ayudan a crear aplicaciones web o sitios completamente funcionales y escalables con el uso de JavaScript en todas sus tecnologias, como M de MongoDB ya que es una base de datos NoSQL que nos permite utilizar una base de datos con Objetos JSON, E de expres que es una libreria en JavaScript, A de angular el framework más utilizado para el desarrollo de aplicaciones web MVC, N de NodeJs que es un conjunto de herramientas que permite la api RESTful con JavaScript'
            },
            {
                title: 'Patron de Diseño MVC',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'El patron de diseño de arquitectura de software MVC es llamado así por Modelo Vista Controlador, que este patron de diseño permite desarrollar aplicaciones web completamente asincronas que ayudan a la rapideza de la navegacion del sitio web asi como la utilizacion de gran cantidad de datos'
            },
            {
                title: 'JavaScript',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'JavaScript es el lenguaje de programación utilizado para el desarrollo de software enfocado a la web aunque tiene muchas otras apliaciones, hoy en día se enfoca al desarrollo de software enfocado a la web, ya que hay herramientas que ayudan a crear sitios que ahora son aplicaciones web completas usando patrones de diseño entre estos el más conocido es MVC'
            },
            {
                title: 'Aplicación Web',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Las aplicaciones web son sitios en la red completamente asincronos o que nos permiten navegar en el sitio y consultar datos o creando usuarios, publicar articulos y muchas otras cosas más, sin tener redireccionar para cambiar de paginas web permietiendo crear aplicaciones de servicios de banco, telefonoo, comercio, etc... '
            },
            {
                title: 'API RESTful',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'El API RESTful es una aplicación conectada a la base de datos y al frontend que ayuda a agilizar y llevar mejor el procesamiento de datos en gran cantidad con menos tiempo de espera y tener mayor control en el modelo de negocio de la empresa en cuestion o proyecto esto se conoce mejor como uno de los principales trabajos de un desarrollador backend'
            },
            {
                title: 'Diseño Web',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'El diseño web no tiene que ver con el diseño grafico, el diseño web se enfoca a la experiencia de usuario lo que ve en todo momento desde el tipo de letra hasta todos los elementos que puede interactuar en pantalla en una aplicacion o sitio web en el que el usuario navege estos aveces tienen colores, formas y posiciones diferentes'
            },
        ];
    
        posts.forEach((item, index) => {
            var post = 
            `<article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}}</span>
                    <p>
                        ${item.content}
                    </p>
                    <a href="#" class="button-more">Leer más</a>
            </article>
            `;
    
            $("#posts").append(post);
        });
    }
    

    // Selector de tema
    var theme = $("#theme");

    $("#to-green").click(function(){
        theme.attr("href", "css/green.css");
    });

    $("#to-red").click(function(){
        theme.attr("href", "css/red.css");
    });

    $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css");
    });

    // Scroll arriba de la web
    $(".subir").click(function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);

        return false;
    });

    // Login falso

    $("#login form").submit(function(){
        var form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);

    });

    var form_name = localStorage.getItem("form_name");

    if(form_name != null && form_name != "undefined"){
        var about_parrafo = $("#about p");
        about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong> ");
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");

        $("#login").hide();

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });

    }


    // Acordeon
    
    if(window.location.href.indexOf('about') > -1){
        $("#acordeon").accordion();
    }


    // Reloj
    if(window.location.href.indexOf('reloj') > -1){

        setInterval(function(){
            var reloj = moment().format("hh:mm:ss");
            $('#reloj').html(reloj);
        }, 1000);
        
    }


    // Validación
    if(window.location.href.indexOf('contact') > -1){

        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });

        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollTopOnError: true
        });
    }   
    

});