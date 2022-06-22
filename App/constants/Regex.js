export function validateIp(ip) {
  return /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/.test(ip);
}
