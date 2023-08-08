  
  $(document).ready(function() {
  	$(":input, a").attr("tabindex", "-1");
    
    /***Step 1 ********/
    
    $('#1-step').click(function(e) {
    	e.preventDefault();
      
      if ($("input[name='7']:checked").val() === 'Me preocupo mais com os ativos que farão parte da carteira.'  ) {

        $('.w-round div:nth-child(2)').trigger('tap');
        
       }
       
      if ($("input[name='7']:checked").val() === 'Me preocupo mais com a estratégia macro que fará parte da carteira.'  ) {
			e.preventDefault();

        $('.w-round div:nth-child(9)').trigger('tap');
       }
       if ($("input[name='7']:checked").val() === 'Não sei responder.'  ) {
			e.preventDefault();

        $('.w-round div:nth-child(10)').trigger('tap');
       }


		});
    
        /***Step 8 ********/

    
    $('#2-step').click(function(e) {
    	e.preventDefault();
       if ($("input[name='8']:checked").val() === 'Priorizo a preservação do meu patrimônio e uma baixa volatilidade, sendo portanto um investidor conservador acima de tudo.'  ) {
        $('.w-round div:nth-child(3)').trigger('tap');
       }
        if ($("input[name='8']:checked").val() === 'Acredito que uma carteira bem diversificada com ações americanas e de outros mercados desenvolvidos, títulos de renda fixa, ouro, commodities e fundos imobiliários, rebalanceada anualmente e com um bom histórico em diversos momentos do ciclo seja exatamen'  ) {
        $('.w-round div:nth-child(5)').trigger('tap');
       }
        if ($("input[name='8']:checked").val() === 'Gostaria de uma carteira diversificada, mas majoritariamente focada apenas em ações e/ou fundos imobiliários.'  ) {
        $('.w-round div:nth-child(7)').trigger('tap');
       }
        if ($("input[name='8']:checked").val() === 'Gostaria de uma carteira diversificada, mas majoritariamente focada em títulos de renda fixa.'  ) {
        $('.w-round div:nth-child(9)').trigger('tap');
       }
		});
    
    $('#2-prev').click(function(e) {
    	e.preventDefault();
      $('.w-round div:nth-child(1)').trigger('tap');
		});
    
    /***Step 11 ********/

    
    $('#3-step').click(function(e) {
    	e.preventDefault();
    	$('.w-round div:nth-child(4)').trigger('tap');
      
          
      if ($("input[name='11']:checked").val() === 'Valorizo qualidade da empresa. Me considero um investidor fundamentalista.'  ) {
				        $('#s1').show();
                console.log('Hi')
			}
            if ($("input[name='11']:checked").val() === 'Valorizo potencial de crescimento. Me considero um investidor aberto a novas tendências.'  ) {
				        $('#s2').show();
			}
            if ($("input[name='11']:checked").val() === 'Minha maior preocupação é com recorrência de dividendos em dólar, e não o crescimento do portfólio.'  ) {
				        $('#s3').show();
			}
            if ($("input[name='11']:checked").val() === 'Prefiro uma carteira de ações de empresas líderes dos principais índices antes de priorizar qualquer um dos objetivos acima.'  ) {
				        $('#s4').show();
			}
            if ($("input[name='11']:checked").val() === 'Minha preferência é pela diversificação entre classes de ativos que leve em consideração o meu perfil de risco, e que tenha um bom resultado histórico ao longo das variações cíclicas de mercado.'  ) {
				        $('#s5').show();
			}
		});
    
    $('#3-prev').click(function(e) {
    	e.preventDefault();
      $('.w-round div:nth-child(2)').trigger('tap');
		});

        /***Step 11 ANSWER ********/

    
    $('#4-step').click(function(e) {
    	e.preventDefault();
    	$('.w-round div:nth-child(11)').trigger('tap');
		});
    
    $('#4-prev').click(function(e) {
    	e.preventDefault();
      $('.w-round div:nth-child(3)').trigger('tap');
		});    
    
        /***Step 12 ********/

    
    $('#5-step').click(function(e) {
    	e.preventDefault();
    	$('.w-round div:nth-child(6)').trigger('tap');
      if ($("input[name='12']:checked").val() === 'Gostaria de adicionar exposição a renda fixa'  ) {
			$('#s6').show();
			}
      if ($("input[name='12']:checked").val() === 'Gostaria de exposição a renda fixa com foco em recorrência de dividendos (Perfil agressivo).'  ) {
			$('#s7').show();
			}
            if ($("input[name='12']:checked").val() === 'Gostaria de exposição a renda fixa com foco em alta qualidade de crédito (Perfil conservador).'  ) {
			$('#s8').show();
			}
            if ($("input[name='12']:checked").val() === 'Não gostaria de ter nada em renda fixa, mas estou aberto a commodities.'  ) {
			$('#s9').show();
			}
		});
    
    $('#5-prev').click(function(e) {
    	e.preventDefault();
      $('.w-round div:nth-child(4)').trigger('tap');
		});
    
    
            /***Step 12 ANSWER ********/

    
    $('#6-step').click(function(e) {
    	e.preventDefault();
    	$('.w-round div:nth-child(11)').trigger('tap');
		});
    
    $('#6-prev').click(function(e) {
    	e.preventDefault();
      $('.w-round div:nth-child(5)').trigger('tap');
		});    
            /***Step 13 ********/

    
    $('#7-step').click(function(e) {
    	e.preventDefault();
    	$('.w-round div:nth-child(8)').trigger('tap');
      if ($("input[name='13']:checked").val() === 'Valorizo qualidade da empresa. Me considero um investidor fundamentalista.'  ) {
			$('#s10').show();
			}
            if ($("input[name='13']:checked").val() === 'Valorizo potencial de crescimento. Me considero um investidor aberto a novas tendências.'  ) {
			$('#s11').show();
			}
            if ($("input[name='13']:checked").val() === 'Prefiro uma carteira de ações de empresas líderes globais dos principais índices americanos.'  ) {
			$('#s12').show();
			}
		});
    
    $('#7-prev').click(function(e) {
    	e.preventDefault();
      $('.w-round div:nth-child(5').trigger('tap');
		});
    
               /***Step 13 ANSWER ********/

    
    $('#8-step').click(function(e) {
    	e.preventDefault();
    	$('.w-round div:nth-child(11)').trigger('tap');
		});
    
    $('#8-prev').click(function(e) {
    	e.preventDefault();
      $('.w-round div:nth-child(7)').trigger('tap');
		}); 
    
    /***Step 9 ********/

    
    $('#9-step').click(function(e) {
    	e.preventDefault();
    	$('.w-round div:nth-child(11)').trigger('tap');
		});
    
    $('#9-prev').click(function(e) {
    	e.preventDefault();
      if ($("input[name='7']:checked").val() === 'Me preocupo mais com a estratégia macro que fará parte da carteira.'  ) {
			e.preventDefault();

        $('.w-round div:nth-child(1)').trigger('tap');
       }else{
       	        $('.w-round div:nth-child(2)').trigger('tap');
       }
		});
    
        
    /***Step 10 ********/

    
    $('#10-step').click(function(e) {
    	e.preventDefault();
    	$('.w-round div:nth-child(11)').trigger('tap');
		});
    
    $('#10-prev').click(function(e) {
    	e.preventDefault();
      $('.w-round div:nth-child(1)').trigger('tap');
		});
    
        /***Step 14 ********/

    
    $('#14-step').click(function(e) {
    	e.preventDefault();
    	$('.w-round div:nth-child(12)').trigger('tap');
		});
    
    $('#14-prev').click(function(e) {
    	e.preventDefault();
		$('.w-round div:nth-child(1)').trigger('tap');

		});
    
  
    /***Step 5 (FINAL) ********/
    
    $('#final-prev').click(function(e) {
			e.preventDefault();
          $('.w-round div:nth-child(11)').trigger('tap');
		});
    
    /*$('#submit-step').click(function(e) {
			e.preventDefault();
      
      if($('#details-input').val().length !=0){
        $('#details-alert').hide();
       }
       
      else
        {
          $('#details-alert').show();
        }
		});*/
    
    
	});
