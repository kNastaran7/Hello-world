Function Pinterest_Login() {
        
window.pAsyncInit = function() {
        PDK.init({
            appId: "4903274313909551487", // Change this cookie: true });
    };

    (function(d, s, id){
        var js, pjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//assets.pinterest.com/sdk/sdk.js";
        pjs.parentNode.insertBefore(js, pjs);
    }(document, 'script', 'pinterest-jssdk'));
        
PDK.login({scope : 'read_public, write_public'}, function(session) {
  if (!session) {
    alert('The user chose not to grant permissions or closed the pop-up');
  } else {
    console.log('Thanks for authenticating. Getting your information...');
    PDK.me(function(response) {
      if (!response || response.error) {
        alert('Oops, there was a problem getting your information');
      } else {
        console.log('Welcome,  ' + response.data.first_name + '!');
      }
    });
  }
});
}
