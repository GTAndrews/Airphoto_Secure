import { esriVersion } from 'config';
import { loadModules, setDefaultOptions } from 'esri-loader';

// *** Not used but kept for reference ***

setDefaultOptions({
    version: esriVersion,
    css: true,
  });

var token = loadModules([
    'esri/identity/ServerInfo',
    'esri/identity/IdentityManager']).then(([ServerInfo, IdentityManager]) => {
        // Generate and register token for secure services
        let serverInfo = new ServerInfo();
        serverInfo.server = "https://madgic.trentu.ca/rest/services";
        serverInfo.tokenServiceUrl = "https://madgic.trentu.ca/arcgis/tokens/generateToken";
        serverInfo.hasServer = true;
        var userInfo = {
            username : "ap_secure",
            password : "*9o=5hJ4*!8L0sk",
            client : "referer",
            referer : "https://madgic.trentu.ca",
            expiration: 60
        };
        IdentityManager.registerServers([serverInfo]);
        IdentityManager.generateToken(serverInfo, userInfo).then(function(response){
        response.server = serverInfo.server;
        response.userId = userInfo.username;
        IdentityManager.registerToken(response);
        token = response.token;
        return token;
        });
    });

export {token}