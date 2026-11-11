const year = document.getElementById('yr');
if (year) year.textContent = new Date().getFullYear();
const nav = document.getElementById('nav');
const menu = document.getElementById('menu');
menu?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(isOpen));
  menu.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  menu.textContent = isOpen ? '×' : '☰';
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menu?.setAttribute('aria-expanded', 'false');
  if (menu) { menu.textContent = '☰'; menu.setAttribute('aria-label', 'Open navigation'); }
}));

// The clinic has no verified public email or WhatsApp number in the supplied details.
// The enquiry is therefore prepared in the visitor's email app rather than sent to an unverified destination.
document.getElementById('form')?.addEventListener('submit', event => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget));
  const subject = `Appointment enquiry - ${data.name}`;
  const body = [
    'Hello Berlin Medical Centre,', '',
    'I would like to enquire about an appointment.',
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Service: ${data.service}`,
    `Message: ${data.message || 'Not provided'}`,
    '', 'Please contact me regarding availability. Thank you.'
  ].join('\n');
  const status = document.getElementById('form-status');
  status.textContent = 'Your email app will open with the enquiry prepared. If it does not, please call the clinic directly.';
  window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
