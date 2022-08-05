(
    function sendMail() {
        $.ajax({
          type: 'POST',
          url: 'https://mandrillapp.com/api/1.0/messages/send.json',
          data: {
            'key': 'YOUR API KEY HERE',
            'message': {
              'from_email': 'YOUR@EMAIL.HERE',
              'to': [
                  {
                    'email': 'RECIPIENT@EMAIL.HERE',
                    'name': 'RECIPIENT NAME (OPTIONAL)',
                    'type': 'to'
                  }
                ],
              'autotext': 'true',
              'subject': 'YOUR SUBJECT HERE!',
              'html': 'YOUR EMAIL CONTENT HERE! YOU CAN USE HTML!'
            }
          }
         }).done(function(response) {
           console.log(response); // if you're into that sorta thing
         });
    },
    function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
}



)();
