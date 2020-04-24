(function propertiesbuilder(attr) {
    
    function isEmpty(str) {
        return (!str || 0 === str.length); 
    }

    var props = {};
    props["UID"] = attr[connectionHelper.attributeUsername];
    props["PWD"] = attr[connectionHelper.attributePassword];
   
    if (attr["workgroup-auth-mode"] == "db-impersonate") {
        var str = attr[":workgroup-auth-user"];
        
        if (!isEmpty(str)){
            // Strip domain, if any
            var arr = str.split("\\");
            if (arr.length == 2)
                props["DelegationUID"] = arr[1];
            else
                props["DelegationUID"] = str;
        }
    }

    if (attr["sslmode"] !== "") {
        props["ssl"] = "true";
    }

    return props;
})
