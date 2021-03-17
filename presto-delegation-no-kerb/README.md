1. Make sure user is passed as attributeTableauServerUser for the db impersonation auth mode in connectionProperties.js file.   
```
 if (attr[connectionHelper.attributeTableauServerAuthMode] == connectionHelper.valueAuthModeDBImpersonate) {
            props["user"] = attr[connectionHelper.attributeTableauServerUser];
```
2. Make sure CAP_AUTH_DB_IMPERSONATE is added to plugin's manifest.xml customizations
3. Disable AppOption on the server - ask me which one. 
