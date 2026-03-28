// Passion Lab — Global Footer
// Lägg till <script src="footer.js"></script> precis innan </body> på varje sida

(function () {
  const html = `
    <footer>
      <div class="footer-inner">
        <div class="footer-top">
          <div class="footer-brand">
            <a href="index.html">
              <img src="logo.png" alt="Passion Lab" style="height:24px;display:block;margin-bottom:16px;opacity:.5;filter:brightness(0) invert(1)">
            </a>
            <p class="footer-tagline">Älska sånt folk älskar. Sveriges ledande byrå inom sponsring och event.</p>
          </div>
          <div class="footer-links">
            <h4>Vad vi gör</h4>
            <ul>
              <li><a href="sponsring.html">Sponsring</a></li>
              <li><a href="event.html">Event</a></li>
              <li><a href="reklam.html">Reklam</a></li>
            </ul>
          </div>
          <div class="footer-links">
            <h4>Företaget</h4>
            <ul>
              <li><a href="om-oss.html">Om oss</a></li>
              <li><a href="artiklar.html">Artiklar</a></li>
              <li><a href="kontakt.html">Kontakt</a></li>
            </ul>
          </div>
          <div class="footer-links">
            <h4>Kontakt</h4>
            <ul>
              <li><a href="mailto:hello@passionlab.se">hello@passionlab.se</a></li>
              <li><a href="#">Stockholm, Sverige</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p class="footer-copy">© ${new Date().getFullYear()} Passion Lab. Alla rättigheter förbehållna.</p>
          <div class="footer-social">
            <a href="https://instagram.com/passionlab" target="_blank">Instagram</a>
            <a href="#" target="_blank">LinkedIn</a>
            <a href="#" target="_blank">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  `;

  document.body.insertAdjacentHTML('beforeend', html);
})();
