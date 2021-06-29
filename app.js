const senhaInsegura = "senhainsegura";
const encriptar = require('bcryptjs');

encriptar.genSalt(8, function(err, salt){
    encriptar.hash(senhaInsegura, salt, function(err, hash){
    console.log(hash);
  });
});