import * as fernet from 'fernet';
let secret = new fernet.Secret('TluxwB3fV_GWuLkR1_BzGs1Zk90TYAuhNMZP_0q4WyM=')
// Oh no! The code is going over the edge! What are you going to do?
let message = 'gAAAAABcEQ-gNBEH1hkD_I3gVGTPEMzE-o84iq00bH8H6qdb4MPoUyZQ4dEm7spX2_LJk3C1d-fjRaX-0nOc39Qxt9kZjlBp-RKmJ2lFAJmBStunfTxX2KXe6lzYpjGgD5GBJm7BC5I2G-oQ8DFWv6kQQqi99VC2HbGX2v0-UjEKq2LgKV6Qq2d92hGbY1JyjYv_HSJ1RXHh'
let token = new fernet.Token({secret: secret, token: message, ttl:5000})
console.log('Solution - a link" ', token.decode()) 