(function propertiesbuilder(attr) {
	
    var props = [];

    logging.Log(connectionHelper.attributeAuthentication + ": " + attr[connectionHelper.attributeAuthentication]);
    logging.Log(connectionHelper.attributeTableauServerAuthMode + ": " + attr[connectionHelper.attributeTableauServerAuthMode]);
    logging.Log(connectionHelper.attributeTableauServerUser + ": " + attr[connectionHelper.attributeTableauServerUser]);
    logging.Log(connectionHelper.attributeUsername + ": " + attr[connectionHelper.attributeUsername]);
    
    if (attr[connectionHelper.attributeAuthentication] == connectionHelper.valueAuthIntegrated) {
        if (attr[connectionHelper.attributeTableauServerAuthMode] == connectionHelper.valueAuthModeDBImpersonate) {
            props["user"] = attr[connectionHelper.attributeTableauServerUser];
        } else {
            props["user"] = attr[connectionHelper.attributeUsername];
        }
    }
    
    if (attr[connectionHelper.attributeSSLMode] == "require")
    {        
        props["ssl"] = "true";
        props["sslmode"] = "require";
    }

    var formattedProps = [];

    for (var key in props) {
        formattedProps.push(connectionHelper.formatKeyValuePair(key, props[key]));
    }
    
    return formattedProps;
})
