export function makePhoneCall(phoneNumber: number | string) {
  const a = document.createElement('a')
  a.href = `tel:${phoneNumber}`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}
