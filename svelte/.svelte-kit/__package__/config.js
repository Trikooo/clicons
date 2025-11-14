let config = {};
try {
    config = eval("require")("clicons.config");
}
catch {
    config = {};
}
export default config;
