$(function(){
    $('form').submit(function(){
        var erro = false
        var nome = $('[name=nome]').val();
        var email = $('[name=email]').val();
        var telefone = $('[name=telefone]').val();
        var mensagem = $('[name=mensagem]').val();
        resetForm()     //RESETAR FORMULARIO

        if(nome == ''){
            erro = true
            var el=$('[name=nome]');
            el.parent().find('span').html('Por favor,insira seu nome.')
            el.css('border','2px solid red')
        }

        if(email == ''){
            erro = true
            var el=$('[name=email]');
            el.parent().find('span').html('Por favor,insira seu email.')
            el.css('border','2px solid red')
        }

        if(telefone == ''){
            erro = true
            var el=$('[name=telefone]');
            el.parent().find('span').html('Por favor,insira seu telefone.')
            el.css('border','2px solid red')
        }

        if(mensagem == ''){
            erro = true
            var el=$('[name=mensagem]');
            el.parent().find('span').html('Por favor,insira sua mensagem.')
            el.css('border','2px solid red')
        }

        if(erro==false){
            $('.box-sucesso').fadeIn(function(){
                setTimeout(function(){
                    $('.box-sucesso').fadeOut();
                    
                },2000)
            });
            $(this)[0].reset()
        }

        return false;
    })
    function resetForm(){
        $('input[type=text],textarea').css('border','1px solid #ccc');
        $('span').html('')
    }

})
