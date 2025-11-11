let config: any = {};
try {
  config = eval("require")("clicons.config");
} catch {
  config = {};
}
export default config;

