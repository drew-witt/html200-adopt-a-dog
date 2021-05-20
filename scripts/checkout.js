/*let info = [];
const form = document.querySelector('form');
const submit = document.getElementById("submit");

function submitEvent() {
	event.preventDefault();
	info.push(document.getElementById('name').value);
	info.push(document.getElementById('email').value);
	info.push(document.getElementById('street').value);
	info.push(document.getElementById('city').value);
	info.push(document.getElementById('state').value);
	info.push(document.getElementById('zip').value);
	info.push(document.querySelector('input[name="adopter"]:checked').value);
	info.push(document.getElementById('pickup').value);
	console.log(info);
	alert("Thank you. The form information has been received");
}

form.addEventListener("submit", submitEvent);
}*/

$('#submit-button').click(function() {
    jqueryFormValidation();
});

function jqueryFormValidation() {
    $("input, select").each((function( index ) {
        console.log( index + ": " + $(this).val() );
        if($(this).is(":checked")){
            console.log(index + ": " + $(this).val() + " is checked");
        }
      }));
}

$(window).bind("load", function() {
    $('.dog-card-adopt-link').click(function() {
        alert( "Dog Adopted!" );
        this.text = 'Added to Adoption Cart!';
        let cost = parseFloat($(this).parent().find('.price-value').text());
        console.log(cost);
        $('.cart-value').text(parseFloat($('.cart-value').text()) + cost);
        console.log($('.cart-value'));
    });
    $('.dog-card').mouseover(function() {
        $(this).addClass('dog-card-shadow');
    });

    $('.dog-card').mouseleave(function() {
        $(this).removeClass('dog-card-shadow');
    });
});
