var documentation = {
    name:'<h3 class="attr">Name</h3>The unique name of your package and should be down in lowercase. This property is <b>required</b> and your package will not install without it. This also indicates the name of you package in the public node module registry (if you choose to publish it) If you deploy your application on Nodejitsu, this property will represent the name of your application.',
    version:'<h3 class="attr">Version</h3>'+
            '<p> The version of the package is specified by <a href="http://semver.org/">Semantic Versioning</a>. Which assumes that a version number is written as <strong>MAJOR.MINOR.PATCH</strong> and you increment the: </p><ol> <li><strong>MAJOR</strong> version when you make incompatible API changes</li> <li><strong>MINOR</strong> version when you add functionality in a backwards-compatible manner</li> <li><strong>PATCH</strong> version when you make backwards-compatible bug fixes</li> </ol> <p></p>',
        author:'<h3 class="attr">Author</h3>The author of this package. Hopefully one day soon, it will be your name!',
    description:'<h3 class="attr">Description</h3>The description of the project. Try to keep it short and concise',
    contributors:'<h3 class="attr">Conributors</h3>An array of objects representing contributors to the project. Each object in the array represents one contributor.'
};

// $('.attr').on('mouseover',function(){
//  var value = $(this).text();                     
    
//  $("#explanation").text(documentation[value]);   
//  console.log(documentation[value]);              
//  $(this).parent().css('background-color','rgb(230,230,230)');

// });


$('.attr').parent().on('mouseover',function(){
    $(this).addClass('selected');   
    var val = $(this).find('.attr').text();
    
    $("#explanation .inner").html(documentation[val]);  
    // console.log(documentation[value]);               
    // $(this).parent().css('background-color','rgb(230,230,230)');             
    console.log('mouseover') ;

});

$('.attr').parent().on('mouseleave',function(){
    console.log($(this).find('.attr').text());  
    $(this).removeClass('selected');    

    // don't remove the previous selected attribute in order to keep the history
    // $("#explanation .inner").text('');   

    console.log('leave');
}); 

