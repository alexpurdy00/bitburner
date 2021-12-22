/** @param {NS} ns **/

var target = "rho-construction";

var port0Ram4 = ["n00dles"];
var port0Ram16 = ["foodnstuff",
    "harakiri-sushi",
    "hong-fang-tea",
    "joesguns",
    "nectar-net",
    "sigma-cosmetics"];

var port1Ram8 = ["CSEC"];
var port1Ram32 = ["iron-gym",
    "neo-net",
    "zer0",
    "max-hardware"];

var port2Ram0 = ["crush-fitness",
    "johnson-ortho"];
var port2Ram8 = ["the-hub"];
var port2Ram32 = ["omega-net",
    "phantasy"];
var port2Ram64 = ["silver-helix"];
var port2Ram128 = ["avmnite-02h"];

var port3Ram0 = ["comptek"];
var port3Ram16 = ["summit-uni"];
var port3Ram32 = ["rothman-uni"];
var port3Ram64 = ["catalyst", "rho-construction"];
var port3Ram128 = ["I.I.I.I", "netlink"];

export async function main(ns) {

if (fileExists("bruteSSH.exe")) {
    brutessh(target);
}
if (fileExists("FTPcrack.exe")) {
    ftpcrack(target);
}
if (fileExists("relaySMTP.exe")) {
    relaysmtp(target);
}
nuke(target);

if (serverExists("pserv-24")) {
    var ram = getServerRam("pserv-24");
    var threads = ((2 ^ ((Math.log2(ram)) - 3)) * 3);
    for (var i = 0; i < 25; ++i) {
        var serv = "pserv-" + i;
        killall(serv);
        scp("basic.script", serv);
        exec("basic.script", serv, threads);
    }
}

for (var i = 0; i < port0Ram4.length; ++i) {
    var serv = port0Ram4[i];
    killall(serv);
    scp("basic.script", serv);
    nuke(serv);
    exec("basic.script", serv, 1);
}

for (var i = 0; i < port0Ram16.length; ++i) {
    var serv = port0Ram16[i];
    killall(serv);
    scp("basic.script", serv);
    nuke(serv);
    exec("basic.script", serv, 6);
}

while (!fileExists("BruteSSH.exe")) {
    sleep(60000);
}

for (var i = 0; i < port1Ram8.length; ++i) {
    var serv = port1Ram8[i];
    killall(serv);
    scp("basic.script", serv);
    brutessh(serv);
    nuke(serv);
    //installBackdoor(serv);
    exec("basic.script", serv, 3);
}

for (var i = 0; i < port1Ram32.length; ++i) {
    var serv = port1Ram32[i];
    killall(serv);
    scp("basic.script", serv);
    brutessh(serv);
    nuke(serv);
    exec("basic.script", serv, 12);
}

while (!fileExists("FTPCrack.exe")) {
    sleep(60000);
}

for (var i = 0; i < port2Ram0.length; ++i) {
    var serv = port2Ram0[i];
    killall(serv);
    brutessh(serv);
    ftpcrack(serv);
    nuke(serv);
}

for (var i = 0; i < port2Ram8.length; ++i) {
    var serv = port2Ram8[i];
    scp("basic.script", serv)
    killall(serv);
    brutessh(serv);
    ftpcrack(serv);
    nuke(serv);
    exec("basic.script", serv, 3);
}

for (var i = 0; i < port2Ram32.length; ++i) {
    var serv = port2Ram32[i];
    scp("basic.script", serv)
    killall(serv);
    brutessh(serv);
    ftpcrack(serv);
    nuke(serv);
    exec("basic.script", serv, 12);
}

for (var i = 0; i < port2Ram64.length; ++i) {
    var serv = port2Ram64[i];
    scp("basic.script", serv)
    killall(serv);
    brutessh(serv);
    ftpcrack(serv);
    nuke(serv);
    exec("basic.script", serv, 24);
}

for (var i = 0; i < port2Ram128.length; ++i) {
    var serv = port2Ram128[i];
    scp("basic.script", serv)
    killall(serv);
    brutessh(serv);
    ftpcrack(serv);
    nuke(serv);
    //installBackdoor(serv);
    exec("basic.script", serv, 48);
}

while (!fileExists("relaySMTP.exe")) {
    sleep(60000);
}

for (var i = 0; i < port3Ram0.length; ++i) {
    var serv = port3Ram0[i];
    killall(serv);
    brutessh(serv);
    ftpcrack(serv);
    relaysmtp(serv);
    nuke(serv);
}

for (var i = 0; i < port3Ram16.length; ++i) {
    var serv = port3Ram16[i];
    scp("basic.script", serv)
    killall(serv);
    brutessh(serv);
    ftpcrack(serv);
    relaysmtp(serv);
    nuke(serv);
    exec("basic.script", serv, 6);
}

for (var i = 0; i < port3Ram32.length; ++i) {
    var serv = port3Ram32[i];
    scp("basic.script", serv)
    killall(serv);
    brutessh(serv);
    ftpcrack(serv);
    relaysmtp(serv);
    nuke(serv);
    exec("basic.script", serv, 12);
}

for (var i = 0; i < port3Ram64.length; ++i) {
    var serv = port3Ram64[i];
    scp("basic.script", serv)
    killall(serv);
    brutessh(serv);
    ftpcrack(serv);
    relaysmtp(serv);
    nuke(serv);
    exec("basic.script", serv, 24);
}

for (var i = 0; i < port3Ram128.length; ++i) {
    var serv = port3Ram128[i];
    scp("basic.script", serv)
    killall(serv);
    brutessh(serv);
    ftpcrack(serv);
    relaysmtp(serv);
    nuke(serv);
    //installBackdoor(serv);
    exec("basic.script", serv, 48);
}
}
