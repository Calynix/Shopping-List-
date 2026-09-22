## Reflexeion
Catherine: Die pipeline ist an und für sich recht simpel gestaltet.
Schwierig zu verstehen ist sie nicht. Sie hat die verschiedenen Jobs die ihre jewwilige funktion übernehmen. 
Build baut die Applikation erst mal. Test lässt alle test laufen. Lint schaut ob Fehler vorhanden sind oder warnings und der provisorische 
deploy job würde alles deployen. In unserem Fall schmeisst es aber einfach einen String heraus.
Man könnte einen wirklichen deploy job einbauen als verbesserung und die einzelnen Jobs ausbauen und vielleicht auch 
Dinge wie secrets verwenden falls sie irgendwo gebraucht werden.
Der viel mühsamere Part der prüfung waren die tests.
Wir hatten enorme Schwierigkeiten mit der KI und den Tests. Sie hat uns nie die korrekten Jest tests herausgegeben was unser test job beinflusst hat.
Vorallem gegen das Ende zu war das unglaublich mühsam, da wir uns auf die Pipeline konzentrieren wollten, wir aber keine guten tests von der KI erhielten.
Wir haben die KI hauptsächlich für die tests verwendet und proiert mit den Fehlermeldungen der Pipeline des Jobs herauszufinden was falsch lief bei den tests. 
