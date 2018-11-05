// function sendEmail() {
//     var efHeight = $('#emailForm').height();
//     var efwidth = $('#emailForm').width();
//     console.log('efheight = ' + efHeight);

//     console.log('Setting height');
//     $('#sentDiv').css("width", efwidth);
//     $('#sentDiv').animate({height:efHeight});
//     $('#emailForm').slideUp();
//     $('#sentDiv').attr("src", "./images/email_sent_once.gif");
    
//     var objToSend = new Object();
//     objToSend.name = $('#SenderName').val();
//     objToSend.subject = $('#SenderSubject').val();
//     objToSend.email = $('#SenderEmail').val();
//     objToSend.message = $('#SenderMessage').val();
//     var jsonString= JSON.stringify(objToSend);
   
//     console.log("function Called " + jsonString); 

//     var testurl = "https://nodemailer-173012.appspot.com/sendMail"; 

//     $.ajax({
//             url: testurl,
//             contentType: 'application/json',
//             type: 'POST',
//             dataType: 'json',
//             data: jsonString,
//             success: function (data) {
//                 console.log(data);
//                 $('#sentDiv').attr("src", "./images/success.png");
//                 emptyVals();
//                 setTimeout(hideGifs, 1000);
//             },
//             error: function(XMLHttpRequest, textStatus, errorThrown) {
//                 $('#sentDiv').attr("src", "./images/fail.png");
//                 setTimeout(hideGifs, 1000);
//             }
//         });
//     return false;
// };

// function hideGifs(){
//     $('#sentDiv').css("width", 0);
//     $('#sentDiv').animate({height:0});
//     $('#emailForm').slideDown();
// }

// function emptyVals(){
//     console.log("empty vals");
//     $('#SenderName').val('');
//     $('#SenderSubject').val('');
//     $('#SenderEmail').val('');
//     $('#SenderMessage').val('');
//     return false;
// };


var vue = new Vue({
    el: '#ContactView',
    data: {
      formOpen: false,
      emailData: {
        Name:'',
        Email: '',
        Subject: '',
        Message: ''
      }
    },
    methods: {
      sendMail: function () {
        var templateParams = {
          Name: this.emailData.Name,
          Email: this.emailData.Email,
          Subject : this.emailData.Subject,
          Message : this.emailData.Message
      };

      emailjs.send('gmail', 'contact_template', templateParams)
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
          console.log('FAILED...', error);
        });  
        this.resetForm();
        this.formOpen = false;    
      },
      resetForm: function () {
        this.emailData = {
            Name:'',
            Email: '',
            Subject: '',
            Message: ''
        }
      },
      cancel: function() {
        this.formOpen = false;
        this.resetForm();
      }
    }
  })
