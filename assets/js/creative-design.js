/*!
=========================================================
* Creative Design Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/ 

// smooth scroll
$(document).ready(function()
{
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });




    $(document).click(function (event) 
    {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("navbar-collapse");
        if (_opened === true && !clickover.hasClass("navbar-toggle")) 
        {
            //  $("button.navbar-toggler").click();

            $(".navbar-collapse").collapse('hide');
            
        }
    });

    

}); 
