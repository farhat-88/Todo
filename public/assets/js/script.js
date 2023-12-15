function inArray(target, array){
    for(var i = 0; i < array.length; i++) {
        if(array[i] === target) {
            return true;
        }
    }

    return false; 
}

function cleanUpKO(invalid_fields, ko_object) {
    let invalid_fields_g = [ "validationErrors", "validationMessage", "displayErrors", "dirty", "updating", "isValid" ];
    let combined_if = invalid_fields_g.concat(invalid_fields);

    let new_object = {};

    let obj = ko_object;
    for (var prop in obj) {
        var propVal = obj[prop];
        if (ko.isObservable(propVal)) {
            var val = propVal();
            if ($.type(val) == 'object') {
               continue;
            }
            if( !inArray(prop, combined_if) ) {
                new_object[prop] = val;
            }
        }
    }

    return new_object;
}

ko.extenders.dirtyTrack = function (target, dirtyObservable) {
    target.subscribe(function () {
        dirtyObservable(true);
    });
    return target;
};
$(document).ready(function() {
    $(":input").inputmask();
});
Inputmask.extendAliases({
    "name": {
        regex: "(?=[a-zA-Z0-9_ ]{1,15})"
    },
    "number": {
        regex: "^[0-9]{1,6}(\\.\\d{1,2})?$"
    }
})