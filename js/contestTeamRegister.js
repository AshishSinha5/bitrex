var spanIcon='',spanErr='';
var flagQuiz=0;
var flagHunt=0;
var flagCSGO=0;
var flagCOD=0;
var flagHome=0;
var flagLaunch=0;
$(document).ready(function (e) {
    validateTeamContests();
    $(document).on('click', '#submit-quiz', function (e) {
        e.preventDefault();
        var info = {
            eventName: "quiz",
            teamName: $('#quiz-team-name').val().trim(),
            noOfParticipants: 2,
            emails: [
                {email: $("#quiz-email-1").val().trim()},
                {email: $("#quiz-email-2").val().trim()}
            ]
        };
        info = JSON.stringify(info);
        //console.log(info);
        if(flagQuiz)
        registerTeamEvent(info);
    });
    $(document).on('click', '#submit-hunt', function (e) {
        e.preventDefault();
        var info = {
            eventName: "hunt",
            teamName: $('#hunt-team-name').val().trim(),
            noOfParticipants: 2,
            emails: [
                {email: $("#hunt-email-1").val().trim()},
                {email: $("#hunt-email-2").val().trim()}
            ]
        };
        info = JSON.stringify(info);
       // console.log(info);
        if(flagHunt)
            registerTeamEvent(info);
    });
    $(document).on('click', '#submit-csgo', function (e) {
        e.preventDefault();
        var noOfParticipants = 5;
        var info = {
            eventName: "csgo",
            teamName: $('#csgo-team-name').val().trim(),
            noOfParticipants: noOfParticipants,
            emails: [
            ]
        };
        for (var i = 1; i <= noOfParticipants; i++)
            info.emails.push({email: $('#csgo-email-' + i).val().trim()});
        info = JSON.stringify(info);
       // console.log(info);
        if(flagCSGO)
            registerTeamEvent(info);
    });
    $(document).on('click', '#submit-cod', function (e) {
        e.preventDefault();
        var noOfParticipants = 6;
        var info = {
            eventName: "cod",
            teamName: $('#cod-team-name').val().trim(),
            noOfParticipants: noOfParticipants,
            emails: [
            ]
        };
        for (var i = 1; i <= noOfParticipants; i++)
            info.emails.push({email: $('#cod-email-' + i).val().trim()});
        info = JSON.stringify(info);
       // console.log(info);
        if(flagCOD)
            registerTeamEvent(info);
    });
    $(document).on('click', '#submit-homepage', function (e) {
        e.preventDefault();
        var noOfParticipants = $("#homepage-form-div").find($("input")).length - 1;
        var info = {
            eventName: "homepage",
            teamName: $('#homepage-team-name').val().trim(),
            noOfParticipants: noOfParticipants,
            emails: [
            ]
        };
        for (var i = 1; i <= noOfParticipants; i++)
            info.emails.push({email: $('#homepage-email-' + i).val().trim()});
        info = JSON.stringify(info);
        console.log(info);
        if(flagHome)
            registerTeamEvent(info);
    });
    $(document).on('click', '#submit-launch', function (e) {
        e.preventDefault();
        var noOfParticipants = $("#launch-form-div").find($("input")).length - 1;
        var info = {
            eventName: "launchpad",
            teamName: $('#launch-team-name').val().trim(),
            noOfParticipants: noOfParticipants,
            emails: [
            ]
        };
        for (var i = 1; i <= noOfParticipants; i++)
            info.emails.push({email: $('#launch-email-' + i).val().trim()});
        info = JSON.stringify(info);
        //console.log(info);
        if(flagLaunch)
            registerTeamEvent(info);
    });


});
var cleanStuffs=function(){
    $('#'+spanIcon).removeClass('fa fa-circle-o-notch fa-spin fa-check fa-close');
    $('#'+spanErr).html('');
};
var setSpanID=function(id){
    switch (id){
        case 'quiz-team-name':spanIcon='span-quiz-team'; spanErr='span-quiz-team-warn';break;
        case 'hunt-team-name':spanIcon='span-hunt-team';spanErr='span-hunt-team-warn';break;
        case 'homepage-team-name':spanIcon='span-homepage-team';spanErr='span-homepage-team-warn';break;
        case 'launch-team-name':spanIcon='span-launch-team';spanErr='span-launch-team-warn';break;
        case 'csgo-team-name':spanIcon='span-csgo-team';spanErr='span-csgo-team-warn';break;
        case 'cod-team-name':spanIcon='span-cod-team';spanErr='span-cod-team-warn';break;

    }
};
var validateTeamContests=function() {
    $(document).on('blur', '#quiz-team-name', function (e) {
        setSpanID('quiz-team-name');
        cleanStuffs();
        flagQuiz=1;
        var text = $('#quiz-team-name').val().trim();
        var result = validateTeamName(text);
        flagQuiz &= result ? 1 : 0;
        //alert(result+' '+flagQuiz);
        if (!result) {
            $('#span-quiz-team-warn').html('Invalid Team Name');
        }
        else {
            $('#span-quiz-team-warn').html('');
            checkTeamName(JSON.stringify({teamName: $('#quiz-team-name').val().trim()}));
        }
    });
    $(document).on('blur', '#quiz-email-1', function (e) {
        var text = $('#quiz-email-1').val().trim();
        var result = validateEmail(text);
        flagQuiz &= result ? 1 : 0;
        //alert(result+' '+flagQuiz);
        if (!result) {
            $('#span-quiz-email1-warn').html('Invalid Email');
        }
        else {
            $('#span-quiz-email1-warn').html('');
        }
    });
    $(document).on('blur', '#quiz-email-2', function (e) {
        var text = $('#quiz-email-2').val().trim();
        var result = validateEmail(text);
        flagQuiz &= result ? 1 : 0;
        //alert(result+' '+flagAlgo);
        if (!result) {
            $('#span-quiz-email2-warn').html('Invalid Email');
        }
        else {
            $('#span-quiz-email2-warn').html('');
        }
    });
    $(document).on('blur', '#hunt-team-name', function (e) {
        setSpanID('hunt-team-name');
        cleanStuffs();
        flagHunt=1;
        var text = $('#hunt-team-name').val().trim();
        var result = validateTeamName(text);
        flagHunt &= result ? 1 : 0;
        //alert(result+' '+flagQuiz);
        if (!result) {
            $('#span-hunt-team-warn').html('Invalid Team Name');
        }
        else {
            $('#span-hunt-team-warn').html('');
            checkTeamName(JSON.stringify({teamName: $('#hunt-team-name').val().trim()}));
        }
    });
    $(document).on('blur', '#hunt-email-1', function (e) {
        var text = $('#hunt-email-1').val().trim();
        var result = validateEmail(text);
        flagHunt &= result ? 1 : 0;
        //alert(result+' '+flagQuiz);
        if (!result) {
            $('#span-hunt-email1-warn').html('Invalid Email');
        }
        else {
            $('#span-hunt-email1-warn').html('');
        }
    });
    $(document).on('blur', '#hunt-email-2', function (e) {
        var text = $('#hunt-email-2').val().trim();
        var result = validateEmail(text);
        flagHunt &= result ? 1 : 0;
        //alert(result+' '+flagAlgo);
        if (!result) {
            $('#span-hunt-email2-warn').html('Invalid Email');
        }
        else {
            $('#span-hunt-email2-warn').html('');
        }
    });
    $(document).on('blur', '#csgo-team-name', function (e) {
        setSpanID('csgo-team-name');
        cleanStuffs();
        flagCSGO=1;
        var text = $('#csgo-team-name').val().trim();
        var result = validateTeamName(text);
        flagCSGO &= result ? 1 : 0;
        //alert(result+' '+flagQuiz);
        if (!result) {
            $('#span-csgo-team-warn').html('Invalid Team Name');
        }
        else {
            $('#span-csgo-team-warn').html('');
            checkTeamName(JSON.stringify({teamName: $('#csgo-team-name').val().trim()}));
        }
    });
    $(document).on('blur', '#csgo-email-1', function (e) {
        var text = $('#csgo-email-1').val().trim();
        var result = validateEmail(text);
        flagCSGO &= result ? 1 : 0;
        //alert(result+' '+flagQuiz);
        if (!result) {
            $('#span-csgo-email1-warn').html('Invalid Email');
        }
        else {
            $('#span-csgo-email1-warn').html('');
        }
    });
    $(document).on('blur', '#csgo-email-2', function (e) {
        var text = $('#csgo-email-2').val().trim();
        var result = validateEmail(text);
        flagCSGO &= result ? 1 : 0;
        //alert(result+' '+flagQuiz);
        if (!result) {
            $('#span-csgo-email2-warn').html('Invalid Email');
        }
        else {
            $('#span-csgo-email2-warn').html('');
        }
    });
    $(document).on('blur', '#csgo-email-3', function (e) {
        var text = $('#csgo-email-3').val().trim();
        var result = validateEmail(text);
        flagCSGO &= result ? 1 : 0;
        //alert(result+' '+flagQuiz);
        if (!result) {
            $('#span-csgo-email3-warn').html('Invalid Email');
        }
        else {
            $('#span-csgo-email3-warn').html('');
        }
    });
    $(document).on('blur', '#csgo-email-4', function (e) {
        var text = $('#csgo-email-4').val().trim();
        var result = validateEmail(text);
        flagCSGO &= result ? 1 : 0;
        //alert(result+' '+flagQuiz);
        if (!result) {
            $('#span-csgo-email4-warn').html('Invalid Email');
        }
        else {
            $('#span-csgo-email4-warn').html('');
        }
    });
    $(document).on('blur', '#csgo-email-5', function (e) {
        var text = $('#csgo-email-5').val().trim();
        var result = validateEmail(text);
        flagCSGO &= result ? 1 : 0;
        //alert(result+' '+flagQuiz);
        if (!result) {
            $('#span-csgo-email5-warn').html('Invalid Email');
        }
        else {
            $('#span-csgo-email5-warn').html('');
        }
    });
    $(document).on('blur', '#cod-team-name', function (e) {
        setSpanID('cod-team-name');
        cleanStuffs();
        flagCOD=1;
        var text = $('#cod-team-name').val().trim();
        var result = validateTeamName(text);
        flagCOD &= result ? 1 : 0;
        //alert(result+' '+flagQuiz);
        if (!result) {
            $('#span-cod-team-warn').html('Invalid Team Name');
        }
        else {
            $('#span-cod-team-warn').html('');
            checkTeamName(JSON.stringify({teamName: $('#cod-team-name').val().trim()}));
        }
    });
    $(document).on('blur', '#cod-email-1', function (e) {
        var text = $('#cod-email-1').val().trim();
        var result = validateEmail(text);
        flagCOD &= result ? 1 : 0;
        //alert(result+' '+flagQuiz);
        if (!result) {
            $('#span-cod-email1-warn').html('Invalid Email');
        }
        else {
            $('#span-cod-email1-warn').html('');
        }
    });
    $(document).on('blur', '#cod-email-2', function (e) {
        var text = $('#cod-email-2').val().trim();
        var result = validateEmail(text);
        flagCOD &= result ? 1 : 0;
        //alert(result+' '+flagQuiz);
        if (!result) {
            $('#span-cod-email2-warn').html('Invalid Email');
        }
        else {
            $('#span-cod-email2-warn').html('');
        }
    });
    $(document).on('blur', '#cod-email-3', function (e) {
        var text = $('#cod-email-3').val().trim();
        var result = validateEmail(text);
        flagCOD &= result ? 1 : 0;
        //alert(result+' '+flagQuiz);
        if (!result) {
            $('#span-cod-email3-warn').html('Invalid Email');
        }
        else {
            $('#span-cod-email3-warn').html('');
        }
    });
    $(document).on('blur', '#cod-email-4', function (e) {
        var text = $('#cod-email-4').val().trim();
        var result = validateEmail(text);
        flagCOD &= result ? 1 : 0;
        //alert(result+' '+flagQuiz);
        if (!result) {
            $('#span-cod-email4-warn').html('Invalid Email');
        }
        else {
            $('#span-cod-email4-warn').html('');
        }
    });
    $(document).on('blur', '#cod-email-5', function (e) {
        var text = $('#cod-email-5').val().trim();
        var result = validateEmail(text);
        flagCOD &= result ? 1 : 0;
        //alert(result+' '+flagQuiz);
        if (!result) {
            $('#span-cod-email5-warn').html('Invalid Email');
        }
        else {
            $('#span-cod-email5-warn').html('');
        }
    });
    $(document).on('blur', '#cod-email-6', function (e) {
        var text = $('#cod-email-6').val().trim();
        var result = validateEmail(text);
        flagCOD &= result ? 1 : 0;
        //alert(result+' '+flagQuiz);
        if (!result) {
            $('#span-cod-email6-warn').html('Invalid Email');
        }
        else {
            $('#span-cod-email6-warn').html('');
        }
    });
    $(document).on('blur', '#launch-team-name', function (e) {
        setSpanID('launch-team-name');
        cleanStuffs();
        flagLaunch=1;
        var text = $('#launch-team-name').val().trim();
        var result = validateTeamName(text);
        flagLaunch &= result ? 1 : 0;
        //alert(result+' '+flagQuiz);
        if (!result) {
            $('#span-launch-team-warn').html('Invalid Team Name');
        }
        else {
            $('#span-launch-team-warn').html('');
            checkTeamName(JSON.stringify({teamName: $('#launch-team-name').val().trim()}));
        }
    });

    var noOfParticipants = $("#launch-form-div").find($("input")).length - 1;
    for(var i=1;i<=noOfParticipants;i++){
        $(document).on('blur', '#launch-email-'+i, function (e) {
            var text = $('#cod-email-'+i).val().trim();
            var result = validateEmail(text);
            flagLaunch &= result ? 1 : 0;
            //alert(result+' '+flagQuiz);
            if (!result) {
                $('#span-launch-email'+ i +'-warn').html('Invalid Email');
            }
            else {
                $('#span-launch-email'+ i +'-warn').html('');
            }
        });
    }
    $(document).on('blur', '#homepage-team-name', function (e) {
        setSpanID('homepage-team-name');
        cleanStuffs();
        flagHome=1;
        var text = $('#homepage-team-name').val().trim();
        var result = validateTeamName(text);
        flagHome &= result ? 1 : 0;
        //alert(result+' '+flagQuiz);
        if (!result) {
            $('#span-homepage-team-warn').html('Invalid Team Name');
        }
        else {
            $('#span-homepage-team-warn').html('');
            checkTeamName(JSON.stringify({teamName: $('#homepage-team-name').val().trim()}));
        }
    });

    var noOfParticipants = $("#homepage-form-div").find($("input")).length - 1;
    for(var i=1;i<=noOfParticipants;i++){
        $(document).on('blur', '#homepage-email-'+i, function (e) {
            var text = $('#homepage-email-'+i).val().trim();
            var result = validateEmail(text);
            flagHome &= result ? 1 : 0;
            //alert(result+' '+flagQuiz);
            if (!result) {
                $('#span-homepage-email'+ i +'-warn').html('Invalid Email');
            }
            else {
                $('#span-homepage-email'+ i +'-warn').html('');
            }
        });
    }
};

var registerTeamEvent = function (info) {
    $.ajax({
        url: "RegisterTeamEvents.php",
        type: "post",
        data: info,
        async: true,
        success: function (response) {
            console.log(response);
            jsondata=$.parseJSON(response);
             if(jsondata.msg){
                 $("#text-msg").html(jsondata.msg);
             }else{
                 $("#text-msg").html(jsondata.err);
             }
            $("#modal-msg").modal('toggle');
        },
        error: function (response, status, errorThrown) {
            console.log(response + status);
            alert(response); //result from server if error occured
            alert(errorThrown);  //error code
        },
        progress:function(e){
        },
        cache: false,
        contentType: false,
        processData: false
    });
};
var checkTeamName = function (info) {

    $.ajax({
        url: "CheckTeamNameExists.php",
        type: "post",
        data: info,
        async: true,
        success: function (response) {
            // alert(response);
            $('#'+spanIcon).removeClass('fa fa-circle-o-notch fa-spin');
            console.log(response);
            jsondata = $.parseJSON(response);
            if (jsondata.result === 0) {
                $('#'+spanIcon).addClass('fa fa-check');
            } else {
                $('#'+spanIcon).addClass('fa fa-close');
            }
        },
        error: function (response, status, errorThrown) {
            console.log(response + status);
            alert(response); //result from server if error occured
            alert(errorThrown);  //error code
        },
        progress:function () {
            $('#'+spanIcon).addClass('fa fa-circle-o-notch fa-spin');
        },
        cache: false,
        contentType: false,
        processData: false
    });
};


