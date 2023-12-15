(function($, ko) {

    // number validation
    ko.validation.rules['numbers'] = {
        validator: function(val) {
            if (val == undefined || val == "") return true;
            let pattern = /^[0-9]*$/;
            return pattern.test(val);
        },
        message: 'Accept only numbers'
    };
    
    // name validation
    ko.validation.rules['name'] = {
        validator: function(val) {
            if (val == undefined || val == "") return true;
             let pattern = /^[a-zA-Z0-9_ ]*$/;
            return pattern.test(val);
       
        },
        message: 'The legal characters for this field are numbers , alphabets , dash ( - ) and underscore ( _ )'
    };

    // email validation
    ko.validation.rules['email'] = {
        validator: function(val) {
            if (val == undefined || val == "") return true;
                let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return pattern.test(val);
       
        },
        message: 'Invalid Email address'
    };

   ko.validation.registerExtenders();
})(jQuery, ko);