var lists =[[['1', 'a', '2', 'no', '1', 'Timo hat den Athleten den Marathon laufen sehen.', 'Der Athlet ist den Marathon gelaufen.', 'Der Athlet hat den Marathon gesehen.', 'Der Athlet hat Timo gesehen.', 'Timo ist den Marathon gelaufen.', ''], ['2', 'b', '2', 'yes', '1', 'Die Kinder haben gesehen, dass Anna die Kühe milkt.', 'Die Kinder haben Anna gesehen.', 'Die Kinder haben die Kühe gesehen.', 'Die Kinder haben die Kühe gemolken.', 'Anna hat die Kinder gesehen.', ''], ['3', 'c', '3', 'no', '1', 'Der Imker hat Ahmed die Bienen Honig machen sehen gelehrt.', 'Der Imker hat Ahmed etwas gelehrt.', 'Der Imker hat die Bienen etwas gelehrt.', 'Der Imker hat die Bienen gesehen.', 'Ahmed hat den Imker etwas gelehrt.', ''], ['4', 'd', '3', 'yes', '1', 'Der blinde Zauberer hat gehört, wie der Prinz sah, wie die Ritter die Festung eroberten.', 'Die Ritter haben die Festung erobert.', 'Die Ritter haben die Festung gesehen.', 'Die Ritter haben den Prinz gesehen.', 'Der Prinz hat die Festung erobert.', ''], ['5', 'a', '2', 'no', '1', 'Die Lehrerin hat Felix die Murmeln aufräumen geholfen.', 'Felix hat die Murmeln aufgeräumt.', 'Felix hat den Murmeln geholfen.', 'Felix hat der Lehrerin geholfen.', 'Die Lehrerin hat die Murmeln aufgeräumt.', ''], ['6', 'b', '2', 'yes', '1', 'Das Kind hat Sophie geholfen, das Buch zu lesen.', 'Das Kind hat Sophie geholfen.', 'Das Kind hat dem Buch geholfen.', 'Das Kind hat das Buch gelesen.', 'Sophie hat dem Kind geholfen.', ''], ['7', 'c', '3', 'no', '1', 'Der Postbote hat den Reiniger Bob die Wäsche falten helfen sehen.', 'Bob hat die Wäsche gefaltet.', 'Bob hat der Wäsche geholfen.', 'Bob hat dem Reiniger geholfen.', 'Der Reiniger hat die Wäsche gefaltet.', ''], ['8', 'd', '3', 'yes', '1', 'Der Heimwerker hat den Vater gelehrt, Claudia zu helfen, das Auto zu reparieren.', 'Der Vater hat Claudia geholfen.', 'Der Vater hat dem Auto geholfen.', 'Der Vater hat das Auto repariert.', 'Claudia hat dem Vater geholfen.', ''], ['9', 'a', '2', 'no', '1', 'Der Gewerkschaftsführer hat den Chef den Mitarbeiter schelten gehört.', 'Der Chef hat den Mitarbeiter gescholten.', 'Der Chef hat den Mitarbeiter gehört.', 'Der Chef hat den Gewerkschaftsführer gehört.', 'Der Gewerkschaftsführer hat den Mitarbeiter gescholten.', ''], ['10', 'b', '2', 'yes', '1', 'Die Spion hat gehört, dass die Diplomatin das Geheimnis bespricht.', 'Der Spion hat die Diplomatin gehört.', 'Der Spion hat das Geheimnis gehört.', 'Der Spion hat das Geheimnis besprochen.', 'Die Diplomatin hat den Spion gehört.', ''], ['11', 'c', '3', 'no', '1', 'Der Ohrenarzt hat Patrizia die Blumen pflücken hören geholfen.', 'Patrizia hat die Kinder gehört.', 'Patrizia hat die Blumen gehört.', 'Patrizia hat die Blumen gepflückt.', 'Die Kinder haben Patrizia gehört.', ''], ['12', 'd', '3', 'yes', '1', 'Die Richterin ließ den Rechtsanwalt hören, dass der Zeuge den Vorwurf bestritt.', 'Die Richterin hat den Rechtsanwalt den Zeugen hören lassen.', 'Die Richterin hat den Zeugen den Vorwurf hören lassen.', 'Die Richterin hat den Zeugen gehört.', 'Der Rechtsanwalt hat die Richterin den Zeugen hören lassen.', ''], ['13', 'a', '2', 'no', '1', 'Hans hat die Männer die Pferde füttern gelehrt.', 'Die Männer haben die Pferde gefüttert.', 'Die Männer haben die Pferde etwas gelehrt.', 'Die Männer haben Hans etwas gelehrt.', 'Hans hat die Pferde gefüttert.', ''], ['14', 'b', '2', 'yes', '1', 'Die Lehrerin hat den Schüler gelehrt, den Brief zu schreiben.', 'Die Lehrerin hat den Schüler etwas gelehrt.', 'Die Lehrerin hat den Brief etwas gelehrt.', 'Die Lehrerin hat den Brief geschrieben.', 'Der Schüler hat die Lehrerin etwas gelehrt.', ''], ['15', 'c', '3', 'no', '1', 'Die Frau hat den Pfarrer den Laien das Gebet rezitieren lehren gehört.', 'Die Frau hat den Pfarrer gehört.', 'Die Frau hat den Laien gehört.', 'Die Frau hat den Laien etwas gelehrt.', 'Der Pfarrer hat die Frau gehört.', ''], ['16', 'd', '3', 'yes', '1', 'Die Kundin hat gesehen, wie der Bäcker den Lehrling lehrte, das Brot zu backen.', 'Der Lehrling hat das Brot gebacken.', 'Der Lehrling hat das Brot etwas gelehrt.', 'Der Lehrling hat den Bäcker etwas gelehrt.', 'Der Bäcker hat das Brot gebacken.', ''], ['17', 'a', '2', 'no', '1', 'Der Wahrsager hat den Dieb das Geld stehlen gefühlt.', 'Der Dieb hat das Geld gestohlen.', 'Der Dieb hat das Geld gefühlt.', 'Der Dieb hat den Wahrsager gefühlt.', 'Der Wahrsager hat das Geld gestohlen.', ''], ['18', 'b', '2', 'yes', '1', 'Der Hund hat gefühlt, wie das Erdbeben den Tisch erschütterte.', 'Der Hund hat das Erdbeben gefühlt.', 'Der Hund hat den Tisch gefühlt.', 'Der Hund hat den Tisch erschüttert.', 'Das Erdbeben hat den Hund gefühlt.', ''], ['19', 'c', '3', 'no', '1', 'Der Vater hat das Mädchen die Feder ihren Bauch kitzeln fühlen lassen.', 'Die Feder haben den Bauch gekitzelt.', 'Die Feder haben den Bauch gefühlt.', 'Die Feder haben das Mädchen gefühlt.', 'Das Mädchen hat ihren Bauch gekitzelt.', ''], ['20', 'd', '3', 'yes', '1', 'Das Medikament hat Julius geholfen, zu fühlen, wie die Grashalme seine Zehen berührten.', 'Julius hat die Grashalme gefühlt.', 'Julius hat seine Zehen gefühlt.', 'Julius hat seine Zehen berührt.', 'Die Grashalme haben Julius gefühlt.', ''], ['21', 'a', '2', 'no', '1', 'Der Wissenschaftler hat den Studenten das Rätsel lösen lassen.', 'Der Student hat das Rätsel gelöst.', 'Der Student hat das Rätsel sich lösen lassen.', 'Der Student hat den Wissenschaftler das Rätsel lösen lassen.', 'Der Wissenschaftler hat das Rätsel gelöst.', ''], ['22', 'b', '2', 'yes', '1', 'Hans hat den Hund erlaubt, den Apfel zu essen.', 'Hans hat den Hund essen lassen.', 'Hans hat den Apfel essen lassen.', 'Hans hat den Apfel gegessen.', 'Der Hund hat Hans essen lassen.', ''], ['23', 'c', '3', 'no', '1', 'Der Mann hat die Frau den Jungen das Fenster öffnen lassen gehört.', 'Die Frau hat den Jungen das Fenster öffnen lassen.', 'Die Frau hat das Fenster sich öffnen lassen.', 'Die Frau hat das Fenster geöffnet.', 'Der Junge hat die Frau das Fenster öffnen lassen.', ''], ['24', 'd', '3', 'yes', '1', 'Der Ausbilder hat die Pilotin gelehrt, den Computer zu erlauben, das Flugzeug zu steuern.', 'Der Ausbilder hat die Pilotin etwas gelehrt.', 'Der Ausbilder hat den Computer etwas gelehrt.', 'Der Ausbilder hat den Computer das Flugzeug steuern lassen.', 'Die Pilotin hat den Ausbilder etwas gelehrt.', ''], ['1', 'F', '1', 'Level 1', '0', 'Der Ball wurde durch das Fenster geworfen.', 'Der Ball wurde geworfen.', 'Die Büchse wurde geworfen.', 'Der Ball wurde durch die Tür geworfen.', 'Der Ball wurde aufgenommen.', ''], ['2', 'F', '1', 'Level 1', '0', 'Die Frau ist in Frankreich angekommen.', 'Die Frau ist angekommen.', 'Der Mann ist angekommen.', 'Die Frau ist in Deutschland angekommen.', 'Die Frau ist abgefahren.', ''], ['3', 'F', '1', 'Level 1', '0', 'Die Vase wurde mit Blumen gefüllt.', 'Die Vase wurde gefüllt.', 'Die Flasche wurde gefüllt.', 'Die Vase wurde mit Blättern gefüllt.', 'Die Vase wurde geleert.', ''], ['4', 'F', '1', 'Level 1', '0', 'Der Keks wurde von dem Jungen gegessen.', 'Der Keks wurde gegessen', 'Der Kuchen wurde gegessen', 'Der Keks wurde vom Mädchen gegessen', 'Der Keks wurde gebastelt.', '']], [['1', 'b', '2', 'yes', '2', 'Timo hat gesehen, dass der Athlet den Marathon lief.', 'Der Athlet ist den Marathon gelaufen.', 'Der Athlet hat den Marathon gesehen.', 'Der Athlet hat Timo gesehen.', 'Timo ist den Marathon gelaufen.', ''], ['2', 'c', '3', 'no', '2', 'Hans hat die Kinder Anna die Kühe melken sehen lassen.', 'Die Kinder haben Anna gesehen.', 'Die Kinder haben die Kühe gesehen.', 'Die Kinder haben die Kühe gemolken.', 'Anna hat die Kinder gesehen.', ''], ['3', 'd', '3', 'yes', '2', 'Der Imker hat Ahmed gelehrt, zu sehen, dass die Bienen Honig machen.', 'Der Imker hat Ahmed etwas gelehrt.', 'Der Imker hat die Bienen etwas gelehrt.', 'Der Imker hat die Bienen gesehen.', 'Ahmed hat den Imker etwas gelehrt.', ''], ['4', 'a', '2', 'no', '2', 'Der Prinz hat die Ritter die Festung erobern sehen.', 'Der Prinz hat die Ritter gesehen. ', 'Der Prinz hat die Festung gesehen.', 'Der Prinz hat die Festung erobert.', 'Die Ritter haben den Prinz gesehen.', ''], ['5', 'b', '2', 'yes', '2', 'Die Lehrerin hat Felix geholfen, die Murmeln aufzuräumen.', 'Felix hat die Murmeln aufgeräumt.', 'Felix hat den Murmeln geholfen.', 'Felix hat der Lehrerin geholfen.', 'Die Lehrerin hat die Murmeln aufgeräumt.', ''], ['6', 'c', '3', 'no', '2', 'Die Nachbarn haben das Kind Sophie das Buch lesen helfen gehört.', 'Die Nachbarn haben das Kind gehört.', 'Die Nachbarn haben Sophie gehört.', 'Die Nachbarn haben Sophie geholfen.', 'Das Kind hat den Nachbarn geholfen.', ''], ['7', 'd', '3', 'yes', '2', 'Der Postbote hat gesehen, dass der Reiniger Bob half, die Wäsche zu falten.', 'Bob hat die Wäsche gefaltet.', 'Bob hat der Wäsche geholfen.', 'Bob hat dem Reiniger geholfen.', 'Der Reiniger hat die Wäsche gefaltet.', ''], ['8', 'a', '2', 'no', '2', 'Der Vater hat Claudia das Auto reparieren geholfen.', 'Der Vater hat Claudia geholfen.', 'Der Vater hat dem Auto geholfen.', 'Der Vater hat das Auto repariert.', 'Claudia hat dem Vater geholfen.', ''], ['9', 'b', '2', 'yes', '2', 'Der Gewerkschaftsführer hat gehört, wie der Chef den Mitarbeiter schalt.', 'Der Chef hat den Mitarbeiter gescholten.', 'Der Chef hat den Mitarbeiter gehört.', 'Der Chef hat den Gewerkschaftsführer gehört.', 'Der Gewerkschaftsführer hat den Mitarbeiter gescholten.', ''], ['10', 'c', '3', 'no', '2', 'Der Hacker hat den Spion die Diplomatin das Geheimnis besprechen hören gelehrt.', 'Die Diplomatin hat das Geheimnis besprochen.', 'Die Diplomatin hat das Geheimnis gehört.', 'Die Diplomatin hat den Spion gehört.', 'Der Spion hat das Geheimnis besprochen.', ''], ['11', 'd', '3', 'yes', '2', 'Der Ohrenarzt hat Patrizia geholfen, zu hören, dass die Kinder die Blumen pflücken.', 'Patrizia hat die Kinder gehört.', 'Patrizia hat die Blumen gehört.', 'Patrizia hat die Blumen gepflückt.', 'Die Kinder haben Patrizia gehört.', ''], ['12', 'a', '2', 'no', '2', 'Der Rechtsanwalt hat den Zeugen den Vorwurf bestreiten gehört.', 'Der Rechtsanwalt hat den Zeugen gehört.', 'Der Rechtsanwalt hat den Vorwurf gehört.', 'Der Rechtsanwalt hat den Vorwurf bestritten.', 'Der Zeuge hat den Rechtsanwalt gehört.', ''], ['13', 'b', '2', 'yes', '2', 'Hans hat die Männer gelehrt, die Pferde zu füttern.', 'Die Männer haben die Pferde gefüttert.', 'Die Männer haben die Pferde etwas gelehrt.', 'Die Männer haben Hans etwas gelehrt.', 'Hans hat die Pferde gefüttert.', ''], ['14', 'c', '3', 'no', '2', 'Der Direktor hat die Lehrerin den Schüler den Brief schreiben lehren lassen.', 'Die Lehrerin hat den Schüler etwas gelehrt.', 'Die Lehrerin hat den Brief etwas gelehrt.', 'Die Lehrerin hat den Brief geschrieben.', 'Der Schüler hat die Lehrerin etwas gelehrt.', ''], ['15', 'd', '3', 'yes', '2', 'Die Frau hat gehört, dass der Pfarrer den Laien lehrte, das Gebet zu rezitieren.', 'Die Frau hat den Pfarrer gehört.', 'Die Frau hat den Laien gehört.', 'Die Frau hat den Laien etwas gelehrt.', 'Der Pfarrer hat die Frau gehört.', ''], ['16', 'a', '2', 'no', '2', 'Der Bäcker hat den Lehrling das Brot backen gelehrt.', 'Der Bäcker hat den Lehrling etwas gelehrt.', 'Der Bäcker hat das Brot etwas gelehrt.', 'Der Bäcker hat das Brot gebacken.', 'Der Lehrling hat den Bäcker etwas gelehrt.', ''], ['17', 'b', '2', 'yes', '2', 'Der Wahrsager hat gefühlt, dass der Dieb das Geld stiehlt.', 'Der Dieb hat das Geld gestohlen.', 'Der Dieb hat das Geld gefühlt.', 'Der Dieb hat den Wahrsager gefühlt.', 'Der Wahrsager hat das Geld gestohlen.', ''], ['18', 'c', '3', 'no', '2', 'Der Hundebesitzer hat den Hund das Erdbeben den Tisch erschüttern fühlen sehen.', 'Der Hundebesitzer hat den Hund gesehen.', 'Der Hundebesitzer hat das Erdbeben gesehen.', 'Der Hundebesitzer hat das Erdbeben gefühlt.', 'Der Hund hat den Hundebesitzer gesehen.', ''], ['19', 'd', '3', 'yes', '2', 'Der Vater hat zugelassen, dass das Mädchen fühlte, wie die Feder ihren Bauch kitzelten.', 'Die Feder haben den Bauch gekitzelt.', 'Die Feder haben den Bauch gefühlt.', 'Die Feder haben das Mädchen gefühlt.', 'Das Mädchen hat ihren Bauch gekitzelt.', ''], ['20', 'a', '2', 'no', '2', 'Julius hat die Grashalme seine Zehen berühren gefühlt.', 'Julius hat die Grashalme gefühlt.', 'Julius hat seine Zehen gefühlt.', 'Julius hat seine Zehen berührt.', 'Die Grashalme haben Julius gefühlt.', ''], ['21', 'b', '2', 'yes', '2', 'Der Wissenschaftler hat den Studenten erlaubt, das Rätsel zu lösen.', 'Der Student hat das Rätsel gelöst.', 'Der Student hat das Rätsel sich lösen lassen.', 'Der Student hat den Wissenschaftler das Rätsel lösen lassen.', 'Der Wissenschaftler hat das Rätsel gelöst.', ''], ['22', 'c', '3', 'no', '2', 'Die Mutter hat Hans den Hund den Apfel essen lassen geholfen.', 'Der Hund hat den Apfel gegessen.', 'Der Hund hat den Apfel essen lassen.', 'Der Hund hat Hans essen lassen.', 'Hans hat den Apfel gegessen.', ''], ['23', 'd', '3', 'yes', '2', 'Der Mann hat gehört, dass die Frau den Jungen erlaubte, das Fenster zu öffnen.', 'Die Frau hat den Jungen das Fenster öffnen lassen.', 'Die Frau hat das Fenster sich öffnen lassen.', 'Die Frau hat das Fenster geöffnet.', 'Der Junge hat die Frau das Fenster öffnen lassen.', ''], ['24', 'a', '2', 'no', '2', 'Die Pilotin hat den Computer das Flugzeug steuern lassen.', 'Die Pilotin hat den Computer das Flugzeug steuern lassen.', 'Die Pilotin hat das Flugzeug sich steuern lassen.', 'Die Pilotin hat das Flugzeug gesteuert.', 'Der Computer hat die Pilotin das Flugzeug steuern lassen.', ''], ['1', 'F', '1', 'Level 1', '0', 'Der Ball wurde durch das Fenster geworfen.', 'Der Ball wurde geworfen.', 'Die Büchse wurde geworfen.', 'Der Ball wurde durch die Tür geworfen.', 'Der Ball wurde aufgenommen.', ''], ['2', 'F', '1', 'Level 1', '0', 'Die Frau ist in Frankreich angekommen.', 'Die Frau ist angekommen.', 'Der Mann ist angekommen.', 'Die Frau ist in Deutschland angekommen.', 'Die Frau ist abgefahren.', ''], ['3', 'F', '1', 'Level 1', '0', 'Die Vase wurde mit Blumen gefüllt.', 'Die Vase wurde gefüllt.', 'Die Flasche wurde gefüllt.', 'Die Vase wurde mit Blättern gefüllt.', 'Die Vase wurde geleert.', ''], ['4', 'F', '1', 'Level 1', '0', 'Der Keks wurde von dem Jungen gegessen.', 'Der Keks wurde gegessen', 'Der Kuchen wurde gegessen', 'Der Keks wurde vom Mädchen gegessen', 'Der Keks wurde gebastelt.', '']], [['1', 'c', '3', 'no', '3', 'Das Fernglas hat Timo den Athleten den Marathon laufen sehen geholfen.', 'Der Athlet ist den Marathon gelaufen.', 'Der Athlet hat den Marathon gesehen.', 'Der Athlet hat Timo gesehen.', 'Timo ist den Marathon gelaufen.', ''], ['2', 'd', '3', 'yes', '3', 'Hans hat die Kinder zugelassen, zu sehen, dass Anna die Kühe milkt.', 'Die Kinder haben Anna gesehen.', 'Die Kinder haben die Kühe gesehen.', 'Die Kinder haben die Kühe gemolken.', 'Anna hat die Kinder gesehen.', ''], ['3', 'a', '2', 'no', '3', 'Ahmed hat die Bienen Honig machen sehen.', 'Die Bienen haben den Honig gemacht.', 'Die Bienen haben Ahmed gesehen.', 'Die Bienen haben den Honig gesehen.', 'Ahmed hat den Honig gemacht.', ''], ['4', 'b', '2', 'yes', '3', 'Der Prinz hat gesehen, wie die Ritter die Festung eroberten.', 'Der Prinz hat die Ritter gesehen. ', 'Der Prinz hat die Festung gesehen.', 'Der Prinz hat die Festung erobert.', 'Die Ritter haben den Prinz gesehen.', ''], ['5', 'c', '3', 'no', '3', 'Armin hat die Lehrerin Felix die Murmeln aufräumen helfen lassen.', 'Die Lehrerin hat Felix geholfen.', 'Die Lehrerin hat den Murmeln geholfen.', 'Die Lehrerin hat die Murmeln aufgeräumt.', 'Felix hat der Lehrerin geholfen.', ''], ['6', 'd', '3', 'yes', '3', 'Die Nachbarn haben gehört, dass das Kind Sophie beim Lesen des Buches half.', 'Die Nachbarn haben das Kind gehört.', 'Die Nachbarn haben Sophie gehört.', 'Die Nachbarn haben Sophie geholfen.', 'Das Kind hat den Nachbarn geholfen.', ''], ['7', 'a', '2', 'no', '3', 'Der Reiniger hat Bob die Wäsche falten geholfen.', 'Bob hat die Wäsche gefaltet.', 'Bob hat der Wäsche geholfen.', 'Bob hat dem Reiniger geholfen.', 'Der Reiniger hat die Wäsche gefaltet.', ''], ['8', 'b', '2', 'yes', '3', 'Der Vater hat Claudia geholfen, das Auto zu reparieren.', 'Der Vater hat Claudia geholfen.', 'Der Vater hat dem Auto geholfen.', 'Der Vater hat das Auto repariert.', 'Claudia hat dem Vater geholfen.', ''], ['9', 'c', '3', 'no', '3', 'Der Beobachter hat den Gewerkschaftsführer den Chef den Mitarbeiter schelten hören sehen.', 'Der Beobachter hat den Gewerkschaftsführer gesehen.', 'Der Beobachter hat den Chef gesehen.', 'Der Beobachter hat den Chef gehört.', 'Der Gewerkschaftsführer hat den Beobachter gesehen.', ''], ['10', 'd', '3', 'yes', '3', 'Der Hacker hat den Spion gelehrt, zu hören, wie die Diplomatin das Geheimnis bespricht.', 'Die Diplomatin hat das Geheimnis besprochen.', 'Die Diplomatin hat das Geheimnis gehört.', 'Die Diplomatin hat den Spion gehört.', 'Der Spion hat das Geheimnis besprochen.', ''], ['11', 'a', '2', 'no', '3', 'Patrizia hat die Kinder die Blumen pflücken gehört.', 'Die Kinder haben die Blumen gepflückt.', 'Die Kinder haben die Blumen gehört.', 'Die Kinder haben Patrizia gehört.', 'Patrizia hat die Blumen gepflückt.', ''], ['12', 'b', '2', 'yes', '3', 'Der Rechtsanwalt hat gehört, dass der Zeuge den Vorwurf bestritt.', 'Der Rechtsanwalt hat den Zeugen gehört.', 'Der Rechtsanwalt hat den Vorwurf gehört.', 'Der Rechtsanwalt hat den Vorwurf bestritten.', 'Der Zeuge hat den Rechtsanwalt gehört.', ''], ['13', 'c', '3', 'no', '3', 'Johanna hat Hans die Männer die Pferde füttern lehren geholfen.', 'Die Männer haben die Pferde gefüttert.', 'Die Männer haben die Pferde etwas gelehrt.', 'Die Männer haben Hans etwas gelehrt.', 'Hans hat die Pferde gefüttert.', ''], ['14', 'd', '3', 'yes', '3', 'Der Direktor hat die Lehrerin erlaubt, die Schüler zu lehren, den Brief zu schreiben.', 'Die Lehrerin hat den Schüler etwas gelehrt.', 'Die Lehrerin hat den Brief etwas gelehrt.', 'Die Lehrerin hat den Brief geschrieben.', 'Der Schüler hat die Lehrerin etwas gelehrt.', ''], ['15', 'a', '2', 'no', '3', 'Der Pfarrer hat den Laien das Gebet rezitieren gelehrt.', 'Der Laie hat das Gebet rezitiert.', 'Der Laie hat das Gebet gelehrt.', 'Der Laie hat den Pfarrer etwas gelehrt.', 'Der Pfarrer hat das Gebet rezitiert.', ''], ['16', 'b', '2', 'yes', '3', 'Der Bäcker hat den Lehrling gelehrt, das Brot zu backen.', 'Der Bäcker hat den Lehrling etwas gelehrt.', 'Der Bäcker hat das Brot etwas gelehrt.', 'Der Bäcker hat das Brot gebacken.', 'Der Lehrling hat den Bäcker etwas gelehrt.', ''], ['17', 'c', '3', 'no', '3', 'Der Guru hat den Wahrsager den Dieb das Geld stehlen fühlen gelehrt.', 'Der Wahrsager hat den Dieb gefühlt.', 'Der Wahrsager hat das Geld gefühlt.', 'Der Wahrsager hat das Geld gestohlen.', 'Der Dieb hat den Wahrsager gefühlt.', ''], ['18', 'd', '3', 'yes', '3', 'Der Hundebesitzer hat gesehen, dass der Hund fühlte, wie das Erdbeben den Tisch erschütterte.', 'Der Hundebesitzer hat den Hund gesehen.', 'Der Hundebesitzer hat das Erdbeben gesehen.', 'Der Hundebesitzer hat das Erdbeben gefühlt.', 'Der Hund hat den Hundebesitzer gesehen.', ''], ['19', 'a', '2', 'no', '3', 'Das Mädchen hat die Feder ihren Bauch kitzeln gefühlt.', 'Die Feder haben den Bauch gekitzelt.', 'Die Feder haben den Bauch gefühlt.', 'Die Feder haben das Mädchen gefühlt.', 'Das Mädchen hat ihren Bauch gekitzelt.', ''], ['20', 'b', '2', 'yes', '3', 'Julius hat gefühlt, wie die Grashalme seine Zehen berührten.', 'Julius hat die Grashalme gefühlt.', 'Julius hat seine Zehen gefühlt.', 'Julius hat seine Zehen berührt.', 'Die Grashalme haben Julius gefühlt.', ''], ['21', 'c', '3', 'no', '3', 'Dr Jansen hat den Wissenschaftler den Studenten das Rätsel lösen lassen sehen.', 'Dr Jansen hat den Wissenschaftler gesehen.', 'Dr Jansen hat den Studenten gesehen.', 'Dr Jansen hat den Studenten das Rätsel lösen lassen.', 'Der Wissenschaftler hat Dr Johnson gesehen.', ''], ['22', 'd', '3', 'yes', '3', 'Die Mutter hat Hans geholfen, den Hund zu erlauben, den Apfel zu essen.', 'Der Hund hat den Apfel gegessen.', 'Der Hund hat den Apfel essen lassen.', 'Der Hund hat Hans essen lassen.', 'Hans hat den Apfel gegessen.', ''], ['23', 'a', '2', 'no', '3', 'Die Frau hat den Jungen das Fenster öffnen lassen.', 'Der Junge hat das Fenster geöffnet.', 'Der Junge hat das Fenster sich öffnen lassen.', 'Der Junge hat die Frau das Fenster öffnen lassen.', 'Die Frau hat das Fenster geöffnet.', ''], ['24', 'b', '2', 'yes', '3', 'Die Pilotin hat den Computer erlaubt, das Flugzeug zu steuern.', 'Die Pilotin hat den Computer das Flugzeug steuern lassen.', 'Die Pilotin hat das Flugzeug sich steuern lassen.', 'Die Pilotin hat das Flugzeug gesteuert.', 'Der Computer hat die Pilotin das Flugzeug steuern lassen.', ''], ['1', 'F', '1', 'Level 1', '0', 'Der Ball wurde durch das Fenster geworfen.', 'Der Ball wurde geworfen.', 'Die Büchse wurde geworfen.', 'Der Ball wurde durch die Tür geworfen.', 'Der Ball wurde aufgenommen.', ''], ['2', 'F', '1', 'Level 1', '0', 'Die Frau ist in Frankreich angekommen.', 'Die Frau ist angekommen.', 'Der Mann ist angekommen.', 'Die Frau ist in Deutschland angekommen.', 'Die Frau ist abgefahren.', ''], ['3', 'F', '1', 'Level 1', '0', 'Die Vase wurde mit Blumen gefüllt.', 'Die Vase wurde gefüllt.', 'Die Flasche wurde gefüllt.', 'Die Vase wurde mit Blättern gefüllt.', 'Die Vase wurde geleert.', ''], ['4', 'F', '1', 'Level 1', '0', 'Der Keks wurde von dem Jungen gegessen.', 'Der Keks wurde gegessen', 'Der Kuchen wurde gegessen', 'Der Keks wurde vom Mädchen gegessen', 'Der Keks wurde gebastelt.', '']], [['1', 'd', '3', 'yes', '4', 'Das Fernglas hat Timo geholfen, um zu sehen, dass der Athlet den Marathon lief.', 'Der Athlet ist den Marathon gelaufen.', 'Der Athlet hat den Marathon gesehen.', 'Der Athlet hat Timo gesehen.', 'Timo ist den Marathon gelaufen.', ''], ['2', 'a', '2', 'no', '4', 'Die Kinder haben Anna die Kühe melken sehen.', 'Die Kinder haben Anna gesehen.', 'Die Kinder haben die Kühe gesehen.', 'Die Kinder haben die Kühe gemolken.', 'Anna hat die Kinder gesehen.', ''], ['3', 'b', '2', 'yes', '4', 'Ahmed hat gesehen, dass die Bienen Honig machen.', 'Die Bienen haben den Honig gemacht.', 'Die Bienen haben Ahmed gesehen.', 'Die Bienen haben den Honig gesehen.', 'Ahmed hat den Honig gemacht.', ''], ['4', 'c', '3', 'no', '4', 'Der blinde Zauberer hat den Prinz die Ritter die Festung erobern sehen gehört.', 'Die Ritter haben die Festung erobert.', 'Die Ritter haben die Festung gesehen.', 'Die Ritter haben den Prinz gesehen.', 'Der Prinz hat die Festung erobert.', ''], ['5', 'd', '3', 'yes', '4', 'Armin hat die Lehrerin dazu gebracht, Felix beim Aufräumen der Murmeln zu helfen.', 'Die Lehrerin hat Felix geholfen.', 'Die Lehrerin hat den Murmeln geholfen.', 'Die Lehrerin hat die Murmeln aufgeräumt.', 'Felix hat der Lehrerin geholfen.', ''], ['6', 'a', '2', 'no', '4', 'Das Kind hat Sophie das Buch lesen geholfen.', 'Das Kind hat Sophie geholfen.', 'Das Kind hat dem Buch geholfen.', 'Das Kind hat das Buch gelesen.', 'Sophie hat dem Kind geholfen.', ''], ['7', 'b', '2', 'yes', '4', 'Der Reiniger hat Bob geholfen, die Wäsche zu falten.', 'Bob hat die Wäsche gefaltet.', 'Bob hat der Wäsche geholfen.', 'Bob hat dem Reiniger geholfen.', 'Der Reiniger hat die Wäsche gefaltet.', ''], ['8', 'c', '3', 'no', '4', 'Der Heimwerker hat den Vater Claudia das Auto reparieren helfen lehren.', 'Der Vater hat Claudia geholfen.', 'Der Vater hat dem Auto geholfen.', 'Der Vater hat das Auto repariert.', 'Claudia hat dem Vater geholfen.', ''], ['9', 'd', '3', 'yes', '4', 'Der Beobachter hat gesehen, dass der Gewerkschaftsführer hörte, wie der Chef den Mitarbeiter schalt.', 'Der Beobachter hat den Gewerkschaftsführer gesehen.', 'Der Beobachter hat den Chef gesehen.', 'Der Beobachter hat den Chef gehört.', 'Der Gewerkschaftsführer hat den Beobachter gesehen.', ''], ['10', 'a', '2', 'no', '4', 'Der Spion hat die Diplomatin das Geheimnis besprechen gehört.', 'Der Spion hat die Diplomatin gehört.', 'Der Spion hat das Geheimnis gehört.', 'Der Spion hat das Geheimnis besprochen.', 'Die Diplomatin hat den Spion gehört.', ''], ['11', 'b', '2', 'yes', '4', 'Patrizia hat gehört, dass die Kinder die Blumen pflücken.', 'Die Kinder haben die Blumen gepflückt.', 'Die Kinder haben die Blumen gehört.', 'Die Kinder haben Patrizia gehört.', 'Patrizia hat die Blumen gepflückt.', ''], ['12', 'c', '3', 'no', '4', 'Die Richterin hat den Rechtsanwalt den Zeugen den Vorwurf bestreiten hören lassen.', 'Die Richterin hat den Rechtsanwalt den Zeugen hören lassen.', 'Die Richterin hat den Zeugen den Vorwurf hören lassen.', 'Die Richterin hat den Zeugen gehört.', 'Der Rechtsanwalt hat die Richterin den Zeugen hören lassen.', ''], ['13', 'd', '3', 'yes', '4', 'Johanna hat Hans geholfen, die Männer zu lehren, die Pferde zu füttern.', 'Die Männer haben die Pferde gefüttert.', 'Die Männer haben die Pferde etwas gelehrt.', 'Die Männer haben Hans etwas gelehrt.', 'Hans hat die Pferde gefüttert.', ''], ['14', 'a', '2', 'no', '4', 'Die Lehrerin hat den Schüler den Brief schreiben gelehrt.', 'Die Lehrerin hat den Schüler etwas gelehrt.', 'Die Lehrerin hat den Brief etwas gelehrt.', 'Die Lehrerin hat den Brief geschrieben.', 'Der Schüler hat die Lehrerin etwas gelehrt.', ''], ['15', 'b', '2', 'yes', '4', 'Der Pfarrer hat den Laien gelehrt, das Gebet zu rezitieren.', 'Der Laie hat das Gebet rezitiert.', 'Der Laie hat das Gebet gelehrt.', 'Der Laie hat den Pfarrer etwas gelehrt.', 'Der Pfarrer hat das Gebet rezitiert.', ''], ['16', 'c', '3', 'no', '4', 'Die Kundin hat den Bäcker den Lehrling das Brot backen lehren sehen.', 'Der Lehrling hat das Brot gebacken.', 'Der Lehrling hat das Brot etwas gelehrt.', 'Der Lehrling hat den Bäcker etwas gelehrt.', 'Der Bäcker hat das Brot gebacken.', ''], ['17', 'd', '3', 'yes', '4', 'Der Guru hat den Wahrsager gelehrt, zu fühlen, wie der Dieb das Geld stiehlt.', 'Der Wahrsager hat den Dieb gefühlt.', 'Der Wahrsager hat das Geld gefühlt.', 'Der Wahrsager hat das Geld gestohlen.', 'Der Dieb hat den Wahrsager gefühlt.', ''], ['18', 'a', '2', 'no', '4', 'Der Hund hat das Erdbeben den Tisch erschüttern gefühlt.', 'Der Hund hat das Erdbeben gefühlt.', 'Der Hund hat den Tisch gefühlt.', 'Der Hund hat den Tisch erschüttert.', 'Das Erdbeben hat den Hund gefühlt.', ''], ['19', 'b', '2', 'yes', '4', 'Das Mädchen hat gefühlt, wie die Feder ihren Bauch kitzelten.', 'Die Feder haben den Bauch gekitzelt.', 'Die Feder haben den Bauch gefühlt.', 'Die Feder haben das Mädchen gefühlt.', 'Das Mädchen hat ihren Bauch gekitzelt.', ''], ['20', 'c', '3', 'no', '4', 'Das Medikament hat Julius die Grashalme seine Zehen berühren fühlen helfen.', 'Julius hat die Grashalme gefühlt.', 'Julius hat seine Zehen gefühlt.', 'Julius hat seine Zehen berührt.', 'Die Grashalme haben Julius gefühlt.', ''], ['21', 'd', '3', 'yes', '4', 'Dr Jansen hat gesehen, dass der Wissenschaftler den Studenten erlaubte, das Rätsel zu lösen.', 'Dr Jansen hat den Wissenschaftler gesehen.', 'Dr Jansen hat den Studenten gesehen.', 'Dr Jansen hat den Studenten das Rätsel lösen lassen.', 'Der Wissenschaftler hat Dr Johnson gesehen.', ''], ['22', 'a', '2', 'no', '4', 'Hans hat den Hund den Apfel essen lassen.', 'Hans hat den Hund essen lassen.', 'Hans hat den Apfel essen lassen.', 'Hans hat den Apfel gegessen.', 'Der Hund hat Hans essen lassen.', ''], ['23', 'b', '2', 'yes', '4', 'Die Frau hat den Jungen erlaubt, das Fenster zu öffnen.', 'Der Junge hat das Fenster geöffnet.', 'Der Junge hat das Fenster sich öffnen lassen.', 'Der Junge hat die Frau das Fenster öffnen lassen.', 'Die Frau hat das Fenster geöffnet.', ''], ['24', 'c', '3', 'no', '4', 'Der Ausbilder hat die Pilotin den Computer das Flugzeug steuern lassen lehren.', 'Der Ausbilder hat die Pilotin etwas gelehrt.', 'Der Ausbilder hat den Computer etwas gelehrt.', 'Der Ausbilder hat den Computer das Flugzeug steuern lassen.', 'Die Pilotin hat den Ausbilder etwas gelehrt.', ''], ['1', 'F', '1', 'Level 1', '0', 'Der Ball wurde durch das Fenster geworfen.', 'Der Ball wurde geworfen.', 'Die Büchse wurde geworfen.', 'Der Ball wurde durch die Tür geworfen.', 'Der Ball wurde aufgenommen.', ''], ['2', 'F', '1', 'Level 1', '0', 'Die Frau ist in Frankreich angekommen.', 'Die Frau ist angekommen.', 'Der Mann ist angekommen.', 'Die Frau ist in Deutschland angekommen.', 'Die Frau ist abgefahren.', ''], ['3', 'F', '1', 'Level 1', '0', 'Die Vase wurde mit Blumen gefüllt.', 'Die Vase wurde gefüllt.', 'Die Flasche wurde gefüllt.', 'Die Vase wurde mit Blättern gefüllt.', 'Die Vase wurde geleert.', ''], ['4', 'F', '1', 'Level 1', '0', 'Der Keks wurde von dem Jungen gegessen.', 'Der Keks wurde gegessen', 'Der Kuchen wurde gegessen', 'Der Keks wurde vom Mädchen gegessen', 'Der Keks wurde gebastelt.', '']]];
var praclist =[['1', 'P', '1', 'Level 1', '0', 'Der Ball wurde durch das Fenster geworfen.', 'Der Ball wurde geworfen.', 'Die Büchse wurde geworfen.', 'Der Ball wurde durch die Tür geworfen.', 'Der Ball wurde aufgenommen.', '']];
