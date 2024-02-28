import styles from "./PrivacyPolicy.module.css";

export default function PrivacyPolicy() {
  return (
    <div className={styles["privacy-container"]}>
      <h1>Datenschutzhinweise</h1>
      <section>
        <p className={styles["text-block"]}>
          Der Schutz Ihrer Privatsphäre ist für uns sehr wichtig. Nachstehend
          informieren wir Sie über den Umgang mit Ihren Daten hinsichtlich Ihres
          Besuchs auf unserer Website. Die vorliegende Datenschutzinformation
          erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie
          erläutert auch, wie und zu welchem Zweck das geschieht. Durch Nutzung
          dieser Website stimmen Sie der Datenverarbeitung gemäß unserer hier
          aufgeführten Bedingungen zu.
        </p>
        <h3>Verantwortlicher</h3>
        <p className={styles["text-block"]}>
          Moritz Zschunke <br />
          morzsch@gmail.com
        </p>
        <h3>Datenschutz und Informationen zur Speicherung</h3>
        <article className={styles["text-block"]}>
          Beim Aufrufen unserer Website werden durch den auf deinem Endgerät zum
          Einsatz kommenden Browser automatisch Informationen an den Server
          unserer Website gesendet. Diese Informationen werden temporär in einem
          sog. Logfile gespeichert. Folgende Informationen werden dabei ohne Ihr
          Zutun erfasst und bis zur automatisierten Löschung gespeichert:
          <ul className={styles["list"]}>
            <li>IP-Adresse des anfragenden Rechners,</li>
            <li>Datum und Uhrzeit des Zugriffs,</li>
            <li> Name und URL der abgerufenen Datei,</li>
            <li>
              Website, von welcher aus der Zugriff erfolgt (Referrer-URL),
            </li>
            <li>
              verwendeter Browser und ggf. das Betriebssystem deines Rechners
              sowie der Name deines Access-Providers.
            </li>
          </ul>
          <p>
            Die genannten Daten werden durch uns zu folgenden Zwecken
            verarbeitet:
          </p>
          <ul className={styles["list"]}>
            <li>
              Gewährleistung eines reibungslosen Verbindungsaufbaus der Website,
            </li>
            <li>Gewährleistung einer komfortablen Nutzung unserer Website, </li>
            <li>
              Auswertung der Systemsicherheit und -stabilität sowie zu weiteren
              administrativen Zwecken.
            </li>
          </ul>
          Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 S. 1
          lit. f DSGVO. Unser berechtigtes Interesse folgt aus oben
          aufgelisteten Zwecken zur Datenerhebung. In keinem Fall verwenden wir
          die erhobenen Daten zu dem Zweck, Rückschlüsse auf deine Person zu
          ziehen. Soweit innerhalb dieser Datenschutzinformation keine
          speziellere Speicherdauer genannt wurde, verbleiben deine
          personenbezogenen Daten bei uns, bis der Zweck für die
          Datenverarbeitung entfällt. Wenn du ein berechtigtes Löschersuchen
          geltend machst oder deine Einwilligung zur Datenverarbeitung
          widerrufst, werden deine Daten gelöscht, sofern wir keine anderen
          rechtlich zulässigen Gründe für die Speicherung deiner
          personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche
          Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung
          nach Fortfall dieser Gründe.
        </article>
        <h3>SSL- bzw. TLS-Verschlüsselung</h3>
        <p className={styles["text-block"]}>
          Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
          Übertragung vertraulicher Inhalte, wie zum Beispiel Anfragen, die du
          an uns als Seitenbetreiber sendest, eine SSL- bzw. TLS-
          Verschlüsselung. Eine verschlüsselte Verbindung erkennst du daran,
          dass die Adresszeile des Browsers von „http://“ auf „https://“
          wechselt und an dem Schloss-Symbol in deiner Browserzeile. Wenn die
          SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die du
          an uns übermittelst, nicht von Dritten mitgelesen werden.
        </p>
        <h3>Externes Hosting der Website</h3>
        <p className={styles["text-block"]}>
          Diese Website wird bei einem externen Dienstleister gehostet (Hoster).
          Die personenbezogenen Daten, die auf dieser Website erfasst werden,
          werden auf den Servern des Hosters gespeichert. Hierbei kann es sich
          v.a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten,
          Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige
          Daten, die über eine Website generiert werden, handeln. Der Einsatz
          des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren
          potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und
          im Interesse einer sicheren, schnellen und effizienten Bereitstellung
          unseres Online-Angebots durch einen professionellen Anbieter (Art. 6
          Abs. 1 lit. f DSGVO). Unser Hoster wird deine Daten nur insoweit
          verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten
          erforderlich ist und unsere Weisungen in Bezug auf diese Daten
          befolgen. Wir setzen folgenden Hoster für unsere Website ein:
        </p>
        <p className={styles["text-block"]}>
          Vercel Inc. <br />
          340 S Lemon Ave #4133 <br />
          Walnut, CA 91789 <br /> USA <br />
        </p>
        <p className={styles["text-block"]}>
          Die Datenübertragung in die USA erfolgt auf Basis der
          Standardvertragsklauseln der EU-Kommission. Die
          Datenschutzinformationen von Vercel finden Sie unter 
          <a href="https://vercel.com/legal/privacy-policy">
            https://vercel.com/legal/privacy-policy
          </a>
        </p>
        <h3>Kundenkonten</h3>
        <p className={styles["text-block"]}>
          Sie können sich auf unserer Website registrieren und dadurch ein
          Benutzerprofil anlegen. Wir verarbeiten Ihre personenbezogenen Daten
          nur, um Ihnen unsere Onlineservices zur Verfügung stellen zu können.
          Für die Neuregistrierung erheben wir ausschließlich Zugangsdaten
          (E-Mail-Adresse, Benutzername und Passwort). Diese Daten können von
          Ihnen jederzeit vollumfänglich gelöscht werden, sollten Sie unsere
          Dienste nicht mehr nutzen wollen.
        </p>
      </section>
    </div>
  );
}
