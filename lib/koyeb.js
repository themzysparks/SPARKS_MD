/*
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                              ＭＹ ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ                                             // 
//                                                                                                      // 
//                                         Ｖ：１．０                                                    // 
//                                                                                                      // 
//                                                                                                      //
//         ░██████╗██████╗░░█████╗░██████╗░██╗░░██╗░██████╗                                             //
//        ██╔════╝██╔══██╗██╔══██╗██╔══██╗██║░██╔╝██╔════╝                                             //
//        ╚█████╗░██████╔╝███████║██████╔╝█████═╝░╚█████╗░                                             //
//        ░╚═══██╗██╔═══╝░██╔══██║██╔══██╗██╔═██╗░░╚═══██╗                                             //
//        ██████╔╝██║░░░░░██║░░██║██║░░██║██║░╚██╗██████╔╝                                             //
//        ╚═════╝░╚═╝░░░░░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░                                             //
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//

*
   * @project_name : SPARKS_MD
   * @author : SPARKS
   * @youtube : https://youtube.com/@cyberwithsparks
   * @instagram : https://www.instagram.com/sparksthemzy
   * @description : My private build made public for everyone to use with easy hosting.
   * @version : 1.0
   * Donation : https://paystack.com/pay/sparks_md_donation
   
   * I update my GitHub bots when I have time, focusing mainly on key projects.
*
   * Licensed under the GPL-3.0 License;
* 
   * Created By SPARKS.
   * © 2024 SPARKS TECH SOLUTIONS.
*/



//══════════════════════════════════════════════════════════════════════════════════════════════════════//

const axios = require("axios");
let koyeb_api = process.env.KOYEB_API;
let axiosConfig = {
  'headers': {
    'Content-Type': "application/json;charset=UTF-8",
    'Authorization': "Bearer " + koyeb_api
  }
};
async function get_deployments() {
  status = false;
  let _0xb11c16 = {
    'headers': {
      'Content-Type': "application/json;charset=UTF-8",
      'Authorization': "Bearer " + koyeb_api
    }
  };
  await axios.get("https://app.koyeb.com/v1/deployments", _0xb11c16).then(_0x37aadc => {
    let _0x670da4 = ['STOPPED', 'STOPPING', "ERROR", 'ERRPRING'];
    let _0x4d3aa1 = [];
    for (let _0x1c0a54 = 0x0; _0x1c0a54 < _0x37aadc.data.deployments.length; _0x1c0a54++) {
      if (!_0x670da4.includes(_0x37aadc.data.deployments[_0x1c0a54].status)) {
        _0x4d3aa1.push(_0x37aadc.data.deployments[_0x1c0a54].status);
      }
    }
    if (_0x4d3aa1.length > 0x1) {
      status = 'true';
    }
  });
  return status;
}
function checkArray(_0x2d7759, _0x521fd2) {
  var _0x115eea = false;
  for (var _0x186f9f = 0x0; _0x186f9f < _0x2d7759.length; _0x186f9f++) {
    if (_0x2d7759[_0x186f9f].key == _0x521fd2) {
      _0x115eea = true;
      break;
    }
  }
  return _0x115eea;
}
async function delvar(_0x41d25d) {
  var _0x1bfe66 = false;
  let {
    data: _0x1dc91f
  } = await axios.get("https://app.koyeb.com/v1/services", axiosConfig);
  let _0x1b494d = _0x1dc91f.services[0x0].id;
  let _0x4da952 = await axios.get("https://app.koyeb.com/v1/deployments/" + _0x1dc91f.services[0x0].latest_deployment_id, axiosConfig);
  let _0x533b51 = checkArray(_0x4da952.data.deployment.definition.env, _0x41d25d);
  if (_0x533b51 !== true) {
    return "_No such env in koyeb._";
  }
  let _0x5194a1 = [];
  for (var _0x4470bd = 0x0; _0x4470bd < _0x4da952.data.deployment.definition.env.length; _0x4470bd++) {
    if (_0x4da952.data.deployment.definition.env[_0x4470bd].key === _0x41d25d) {
      continue;
    }
    _0x5194a1.push(_0x4da952.data.deployment.definition.env[_0x4470bd]);
  }
  let _0x15ed48 = {
    'definition': {
      'name': _0x4da952.data.deployment.definition.name,
      'routes': _0x4da952.data.deployment.definition.routes,
      'ports': _0x4da952.data.deployment.definition.ports,
      'env': _0x5194a1,
      'regions': _0x4da952.data.deployment.definition.regions,
      'scalings': _0x4da952.data.deployment.definition.scalings,
      'instance_types': _0x4da952.data.deployment.definition.instance_types,
      'health_checks': _0x4da952.data.deployment.definition.health_checks,
      'docker': _0x4da952.data.deployment.definition.docker
    }
  };
  await axios.patch("https://app.koyeb.com/v1/services/" + _0x1b494d, _0x15ed48, axiosConfig).then(_0x410397 => {
    if (_0x410397.status === 0xc8) {
      _0x1bfe66 = "_Successfully deleted " + _0x41d25d + " var from koyeb._";
    } else {
      _0x1bfe66 = "_Please put Koyeb api key in var KOYEB_API._\nEg: KOYEB_API:api key";
    }
  });
  return _0x1bfe66;
}
async function change_env(_0x2f9884) {
  var _0x525c67 = "_Please put Koyeb api key in var KOYEB_API._\nEg: KOYEB_API:api key";
  let {
    data: _0x5c171a
  } = await axios.get("https://app.koyeb.com/v1/services", axiosConfig);
  let _0x10e554 = _0x5c171a.services[0x0].id;
  let _0xba8a66 = await axios.get("https://app.koyeb.com/v1/deployments/" + _0x5c171a.services[0x0].latest_deployment_id, axiosConfig);
  let _0x698966 = _0x2f9884.split(':');
  let _0x2dfc14 = [];
  for (var _0x59bb73 = 0x0; _0x59bb73 < _0xba8a66.data.deployment.definition.env.length; _0x59bb73++) {
    if (_0xba8a66.data.deployment.definition.env[_0x59bb73].key === _0x698966[0x0]) {
      _0x2dfc14.push({
        'scopes': ["region:fra"],
        'key': '' + _0x698966[0x0],
        'value': '' + _0x698966[0x1]
      });
    } else {
      _0x2dfc14.push(_0xba8a66.data.deployment.definition.env[_0x59bb73]);
    }
  }
  let _0x35302a = checkArray(_0x2dfc14, _0x698966[0x0]);
  if (!_0x35302a === true) {
    _0x2dfc14.push({
      'scopes': ["region:fra"],
      'key': '' + _0x698966[0x0],
      'value': '' + _0x698966[0x1]
    });
  }
  let _0x51f89b = {
    'definition': {
      'name': _0xba8a66.data.deployment.definition.name,
      'routes': _0xba8a66.data.deployment.definition.routes,
      'ports': _0xba8a66.data.deployment.definition.ports,
      'env': _0x2dfc14,
      'regions': _0xba8a66.data.deployment.definition.regions,
      'scalings': _0xba8a66.data.deployment.definition.scalings,
      'instance_types': _0xba8a66.data.deployment.definition.instance_types,
      'health_checks': _0xba8a66.data.deployment.definition.health_checks,
      'docker': _0xba8a66.data.deployment.definition.docker
    }
  };
  await axios.patch("https://app.koyeb.com/v1/services/" + _0x10e554, _0x51f89b, axiosConfig).then(_0x489004 => {
    if (_0x489004.status === 0xc8) {
      _0x525c67 = "Successfuly changed var _" + _0x698966[0x0] + ':' + _0x698966[0x1] + " ._";
    } else {
      _0x525c67 = "_Please put Koyeb api key in var KOYEB_API._\nEg: KOYEB_API:api key";
    }
  });
  return _0x525c67;
}
async function getallvar() {
  let {
    data: _0x8b770
  } = await axios.get("https://app.koyeb.com/v1/services", axiosConfig);
  let _0x4abbd6 = await axios.get("https://app.koyeb.com/v1/deployments/" + _0x8b770.services[0x0].latest_deployment_id, axiosConfig);
  let _0x69ce76 = [];
  for (var _0x28e0ec = 0x0; _0x28e0ec < _0x4abbd6.data.deployment.definition.env.length; _0x28e0ec++) {
    if (!_0x4abbd6.data.deployment.definition.env[_0x28e0ec].key) {
      continue;
    }
    _0x69ce76.push('*' + _0x4abbd6.data.deployment.definition.env[_0x28e0ec].key + "* : _" + _0x4abbd6.data.deployment.definition.env[_0x28e0ec].value + '_');
  }
  return _0x69ce76.join("\n");
}
async function getvar(_0x808c48) {
  let {
    data: _0x4f9b9c
  } = await axios.get("https://app.koyeb.com/v1/services", axiosConfig);
  let _0x5aee14 = await axios.get("https://app.koyeb.com/v1/deployments/" + _0x4f9b9c.services[0x0].latest_deployment_id, axiosConfig);
  for (var _0x47b6d2 = 0x0; _0x47b6d2 < _0x5aee14.data.deployment.definition.env.length; _0x47b6d2++) {
    if (!_0x5aee14.data.deployment.definition.env[_0x47b6d2].key) {
      continue;
    }
    if (_0x5aee14.data.deployment.definition.env[_0x47b6d2].key === _0x808c48) {
      return _0x5aee14.data.deployment.definition.env[_0x47b6d2].key + ':' + _0x5aee14.data.deployment.definition.env[_0x47b6d2].value;
    }
  }
}
async function redeploy() {
  var _0x25272e = false;
  try {
    _0x25272e = "_update started._";
  } catch (_0x201701) {
    _0x25272e = "*Got an error in redeploying.*\n*Please put koyeb api key in var KOYEB_API.*\n_Eg: KOYEB_API:api key from https://app.koyeb.com/account/api ._";
  }
  return _0x25272e;
}
module.exports = {
  'redeploy': redeploy,
  'getvar': getvar,
  'delvar': delvar,
  'getallvar': getallvar,
  'change_env': change_env,
  'get_deployments': get_deployments
};