let info=JSON.parse("[{\"question\":\"Компаниярасширяетсвойбизнесвдругиестраны.Всефилиалыдолжныпостояннооставатьсяподключеннымикголовномуофисукомпании.Какаясетеваятехнологиянеобходимадлявыполненияэтоготребования?\",\"answers\":[\"LAN\",\"MAN\",\"WAN\",\"WLAN\"],\"correctAnswer\":\"2\"},{\"question\":\"Домашнемупользователютребуетсяподключениекинтернет-провайдеру,обеспечивающеевысокоскоростнуюцифровуюпередачупообычнымтелефоннымлиниям.КакойтипISP-соединенияследуетиспользовать?\",\"answers\":[\"DSL\",\"dial-up\",\"satellite\",\"cellmodem\",\"cablemodem\"],\"correctAnswer\":\"0\"},{\"question\":\"Каккачествообслуживанияпомогаетсетиподдерживатьширокийспектрприложенийиуслуг?\",\"answers\":[\"ограничиваявоздействиесбоеввработесети\",\"благодарявозможностибыстроговосстановленияпослесбоеввсети\",\"путемпредоставлениямеханизмовдляуправленияперегруженнымсетевымтрафиком\",\"обеспечиваявозможностьростасетидляприемановыхпользователей\"],\"correctAnswer\":\"2\"},{\"question\":\"НакакоминтерфейсекоммутатораадминистраторнастроитIP-адрес,чтобыкоммутаторомможнобылоуправлятьудаленно?\",\"answers\":[\"FastEthernet0/1\",\"VLAN1\",\"vty0\",\"console0\"],\"correctAnswer\":\"1\"},{\"question\":\"ПослевнесенияизмененийвконфигурациюкоммутатораCiscoсетевойадминистраторвыдаеткомандуcopyrunning-configstartup-config.Каковрезультатвыполненияэтойкоманды?\",\"answers\":[\"Новаяконфигурациябудетсохраненавофлэш-памяти.\",\"Новаяконфигурациябудетзагруженаприперезапускекоммутатора.\",\"ТекущийфайлIOSбудетзамененновымнастроеннымфайлом.\",\"Измененияконфигурациибудутудалены,аисходнаяконфигурациявосстановлена.\"],\"correctAnswer\":\"1\"},{\"question\":\"КакоесоединениеобеспечиваетбезопасныйсеансCLIсшифрованиемдлякоммутатораCisco?\",\"answers\":[\"aconsoleconnection\",\"anAUXconnection\",\"aTelnetconnection\",\"anSSHconnection\"],\"correctAnswer\":\"3\"},{\"question\":\"Сетевойспециалистпытаетсянастроитьинтерфейс,введяследующуюкоманду:SanJose(config)#ipaddress192.168.2.1255.255.255.0.Командаотклоняетсяустройством.Каковапричинаэтого?\",\"answers\":[\"Командавводитсяизнеправильногорежимаработы.\",\"Синтаксискомандыневерен.\",\"Информацияомаскеподсетиневерна.\",\"Интерфейсвыключенидолженбытьвключен,преждечемкоммутаторприметIP-адрес.\"],\"correctAnswer\":\"0\"},{\"question\":\"КакуюфункциювыполняетнажатиеклавишиTabпривводекомандывIOS?\",\"answers\":[\"Этопрерываетвыполнениетекущейкомандыивозвращаетврежимконфигурации.\",\"ОнвыходитизрежимаконфигурацииивозвращаетсяврежимEXECпользователя.\",\"Онперемещаеткурсорвначалоследующейстроки.\",\"Онзавершаетостатокчастичнонабранногословавкоманде.\"],\"correctAnswer\":\"3\"},{\"question\":\"Какойпротоколотвечаетзауправлениеразмеромсегментовискоростьюобменасегментамимеждувеб-клиентомивеб-сервером?\",\"answers\":[\"TCP\",\"IP\",\"HTTP\",\"Ethernet\"],\"correctAnswer\":\"0\"},{\"question\":\"КакойуровеньотвечаетзамаршрутизациюсообщенийвсетиИнтернетвмоделиTCP/IP?\",\"answers\":[\"internet\",\"transport\",\"networkaccess\",\"session\"],\"correctAnswer\":\"0\"},{\"question\":\"КакоеутверждениеточноописываетпроцессинкапсуляцииTCP/IP,когдаПКотправляетданныевсеть?\",\"answers\":[\"ДанныепередаютсясуровняИнтернетанауровеньдоступаксети.\",\"Пакетыотправляютсясуровнядоступаксетинатранспортныйуровень.\",\"Сегментыотправляютсястранспортногоуровнянаинтернет-уровень.\",\"КадрыотправляютсясуровнядоступаксетинауровеньИнтернета.\"],\"correctAnswer\":\"2\"},{\"question\":\"КакойуникальныйадресвстроенвсетевуюкартуEthernetииспользуетсядлясвязивсетиEthernet?\",\"answers\":[\"hostaddress\",\"IPaddress\",\"MACaddress\",\"networkaddress\"],\"correctAnswer\":\"2\"},{\"question\":\"Сетевойадминистраторустраняетпроблемысподключениемнасервере.Используятестер,администраторзамечает,чтосигналы,генерируемыесетевойкартойсервера,искаженыинепригодныдляиспользования.НакакомуровнемоделиOSIклассифицируетсяошибка?\",\"answers\":[\"presentationlayer\",\"networklayer\",\"physicallayer\",\"datalinklayer\"],\"correctAnswer\":\"2\"},{\"question\":\"Сетевойадминистраторизмеряетпередачубитовпомагистраликомпаниидлякритическиважногофинансовогоприложения.Администраторзамечает,чтопропускнаяспособностьсетикажетсянижеожидаемой.Какиетрифакторамогутповлиятьнаразницувпропускнойспособности?(Выберитетри.)\",\"answers\":[\"объемтрафика,которыйвнастоящеевремяпроходитчерезсеть\",\"сложностьметодаинкапсуляции,применяемогокданным\",\"типтрафика,проходящегочерезсеть\",\"задержка,создаваемаяколичествомсетевыхустройств,черезкоторыепроходятданные\",\"пропускнаяспособностьWAN-соединениясИнтернетом\",\"надежностьинфраструктурыгигабитногоEthernetмагистрали\"],\"correctAnswer\":\"0\"},{\"question\":\"Какаяпроцедураиспользуетсядляуменьшенияэффектаперекрестныхпомехвмедныхкабелях?\",\"answers\":[\"требующиеправильногоподключениязаземления\",\"скручиваниепарпроводовпротивоположныхцепейвместе\",\"обертываниепучкапроводовметаллическимэкраном\",\"проектированиекабельнойинфраструктурыдляпредотвращенияперекрестныхпомех\",\"избегатьрезкихизгибовпримонтаже\"],\"correctAnswer\":\"1\"},{\"question\":\"ЧтоявляетсяхарактеристикойподуровняLLC?\",\"answers\":[\"Онобеспечиваетнеобходимуюлогическуюадресацию,котораяидентифицируетустройство.\",\"Онобеспечиваетразграничениеданныхвсоответствиистребованиямифизическойсигнализациисреды.\",\"Онразмещаетинформациювкадре,позволяянесколькимпротоколамуровня3использоватьодинитотжесетевойинтерфейсиноситель.\",\"Онопределяетпрограммныепроцессы,которыепредоставляютуслугифизическомууровню.\"],\"correctAnswer\":\"2\"},{\"question\":\"Какойметодиспользуетсядляуправлениядоступомнаосновесоперничествавбеспроводнойсети?\",\"answers\":[\"CSMA/CD\",\"priorityordering\",\"CSMA/CA\",\"tokenpassing\"],\"correctAnswer\":\"2\"},{\"question\":\"ЧтопроисходитвовремяпроцессаинкапсуляциинаканальномуровнедляПК,подключенногоксетиEthernet?\",\"answers\":[\"ДобавляетсяIP-адрес.\",\"Добавляетсялогическийадрес.\",\"Добавляетсяфизическийадрес.\",\"Добавляетсяномерпортапроцесса.\"],\"correctAnswer\":\"2\"},{\"question\":\"Какиетриосновныефункцииобеспечиваетинкапсуляцияданныхнауровне2?(Выберитетри.)\",\"answers\":[\"исправлениеошибокспомощьюметодаобнаружениястолкновений\",\"управлениесеансамиспомощьюномеровпортов\",\"адресациянаканальномуровне\",\"размещениеиудалениекадровизносителя\",\"обнаружениеошибокспомощьювычисленийCRC\",\"разделениегруппбитовнакадры\",\"преобразованиебитоввсигналыданных\"],\"correctAnswer\":\"2\"},{\"question\":\"КаковыдвехарактеристикиMAC-адресовEthernet?(Выберитедве.)\",\"answers\":[\"Ониглобальноуникальны.\",\"ОнидоступныдлямаршрутизациивИнтернете.\",\"Онивыражаютсяввиде12шестнадцатеричныхцифр.\",\"MAC-адресаиспользуютгибкуюиерархическуюструктуру.\",\"MAC-адресадолжныбытьуникальнымикакдляEthernet,такидляпоследовательныхинтерфейсовустройства.\"],\"correctAnswer\":\"0\"},{\"question\":\"ЕслиустройствополучаеткадрEthernetразмером60байт,чтоонобудетделать?\",\"answers\":[\"уронитькадр\",\"обрабатыватькадркакесть\",\"отправитьсообщениеобошибкенаотправляющееустройство\",\"добавитьслучайныебайтыданных,чтобысделатьегодлиной64байта,азатемпереслатьего\"],\"correctAnswer\":\"0\"},{\"question\":\"ЧтобудетделатьузелвсетиEthernet,еслионполучиткадрсMAC-адресомназначения,которыйнесовпадаетсегособственнымMAC-адресом?\",\"answers\":[\"Этоприведеткотбрасываниюкадра.\",\"Онпересылаеткадрследующемуузлу.\",\"Этопозволитудалитьрамкусносителя.\",\"Онотделяеткадрканалапередачиданных,чтобыпроверитьIP-адресназначения.\"],\"correctAnswer\":\"0\"},{\"question\":\"Прикакихдвухобстоятельствахкоммутаторбудетпересылатькадризвсехпортов,кромепорта,накоторыйбылполученкадр?(Выберитедва.)\",\"answers\":[\"Кадримеетшироковещательныйадресвкачествеадресаназначения.\",\"Адресназначениянеизвестенкоммутатору.\",\"Адресисточникавзаголовкекадраявляетсяшироковещательнымадресом.\",\"Адресисточникавкадреявляетсямногоадреснымадресом.\",\"Адресназначениявкадре-этоизвестныйодноадресныйадрес.\"],\"correctAnswer\":\"0\"},{\"question\":\"Какойметодкоммутацииимеетсамыйнизкийуровеньзадержки?\",\"answers\":[\"cut-through\",\"store-and-forward\",\"fragment-free\",\"fast-forward\"],\"correctAnswer\":\"3\"},{\"question\":\"КакиедвекомандыможноиспользоватьнахостеWindowsдляотображениятаблицымаршрутизации?(Выберитедве.)\",\"answers\":[\"netstat-s\",\"routeprint\",\"showiproute\",\"netstat-r\",\"tracert\"],\"correctAnswer\":\"1\"},{\"question\":\"Какиедвефункцииявляютсяосновнымифункциямимаршрутизатора?(Выберитедве.)\",\"answers\":[\"пересылкапакетов\",\"микросегментация\",\"разрешениедоменныхимен\",\"выборпути\",\"управлениепотоком\"],\"correctAnswer\":\"0\"},{\"question\":\"КакиетридиапазонаIP-адресовзарезервированыдлявнутреннегочастногоиспользования?(Выберитетри.)\",\"answers\":[\"10.0.0.0/8\",\"64.100.0.0/14\",\"127.16.0.0/12\",\"172.16.0.0/12\",\"192.31.7.0/24\",\"192.168.0.0/16\"],\"correctAnswer\":\"0\"},{\"question\":\"ДлякакойцелислужитNAT64вIPv6?\",\"answers\":[\"ОнпреобразуетпакетыIPv6впакетыIPv4.\",\"ОнпереводитчастныеIPv6-адресавпубличныеIPv6-адреса.\",\"ЭтопозволяеткомпаниямиспользоватьвсетиуникальныелокальныеадресаIPv6.\",\"ОнпреобразуетобычныеадресаIPv6в64-битныеадреса,которыеможноиспользоватьвИнтернете.\",\"Онпреобразует48-битныйMAC-адресв64-битныйадресхоста,которыйможетбытьиспользовандляавтоматическойадресациихостов.\"],\"correctAnswer\":\"0\"},{\"question\":\"Каководвоичноепредставление0xCA?\",\"answers\":[\"10111010\",\"11010101\",\"11001010\",\"11011010\"],\"correctAnswer\":\"2\"},{\"question\":\"Какминимум,какойадрестребуетсянаинтерфейсахсподдержкойIPv6?\",\"answers\":[\"link-local\",\"уникальныйместный\",\"сайтместный\",\"глобальнаяодноадреснаярассылка\"],\"correctAnswer\":\"0\"},{\"question\":\"КакаяслужбаобеспечиваетдинамическуюглобальнуюадресациюIPv6дляконечныхустройствбезиспользованиясервера,которыйведетучетдоступныхадресовIPv6?\",\"answers\":[\"DHCPv6сконтролемсостояния\",\"SLAAC\",\"статическаяадресацияIPv6\",\"DHCPv6безстатическогорежима\"],\"correctAnswer\":\"1\"},{\"question\":\"Каковацелькомандыping::1?\",\"answers\":[\"ОнпроверяетвнутреннююконфигурациюузлаIPv6.\",\"Онпроверяетшироковещательнуюспособностьвсеххостоввподсети.\",\"Онпроверяетмногоадреснуюсвязьсовсемихостамивподсети.\",\"Онпроверяетдостижимостьшлюзапоумолчаниюдлясети.\"],\"correctAnswer\":\"0\"},{\"question\":\"СколькополезныхIP-адресовдоступновсети192.168.1.0/27?\",\"answers\":[\"256\",\"254\",\"62\",\"30\",\"16\",\"32\"],\"correctAnswer\":\"3\"},{\"question\":\"Какаяподсетьбудетвключатьадрес192.168.1.96вкачествеполезногоадресахоста?\",\"answers\":[\"192.168.1.64/26\",\"192.168.1.32/27\",\"192.168.1.32/28\",\"192.168.1.64/29\"],\"correctAnswer\":\"0\"},{\"question\":\"Администраторсетихочетиметьоднуитужемаскуподсетидлятрехподсетейнанебольшомсайте.Насайтеимеютсяследующиесетииколичествоустройств:\",\"answers\":[\"255.255.255.0\",\"255.255.255.240\",\"255.255.255.248\",\"255.255.255.252\"],\"correctAnswer\":\"1\"},{\"question\":\"Какоеутверждениеверновотношениимаскированияподсетипеременнойдлины?\",\"answers\":[\"Каждаяподсетьимеетодинаковыйразмер.\",\"Размеркаждойподсетиможетбытьразным,взависимостиоттребований.\",\"Подсетиможнообъединятьвподсетитолькоодиндополнительныйраз.\",\"Битывозвращаются,анезаимствуются,длясозданиядополнительныхподсетей.\"],\"correctAnswer\":\"1\"},{\"question\":\"Какаямаскаподсетинеобходима,есливсетиIPv4имеется40устройств,которымнужныIP-адреса,аадресноепространствонедолжнорасходоватьсявпустую?\",\"answers\":[\"255.255.255.0\",\"255.255.255.128\",\"255.255.255.192\",\"255.255.255.224\",\"255.255.255.240\"],\"correctAnswer\":\"2\"},{\"question\":\"КакиедвехарактеристикиявляютсяобщимидляTCPиUDP?(Выберитедве.)\",\"answers\":[\"размерокнапоумолчанию\",\"бесконтактнаясвязь\",\"нумерацияпортов\",\"3-стороннеерукопожатие\",\"способностьпередаватьоцифрованныйголос\",\"использованиеконтрольнойсуммы\"],\"correctAnswer\":\"2\"},{\"question\":\"ПочемуномерапортоввключаютсявTCP-заголовоксегмента?\",\"answers\":[\"указатьправильныйинтерфейсмаршрутизатора,которыйдолжениспользоватьсядляпересылкисегмента\",\"дляопределениятого,какиепортыкоммутаторадолжныприниматьилипересылатьсегмент\",\"определить,какойпротоколуровня3следуетиспользоватьдляинкапсуляцииданных\",\"чтобыпринимающийхостмогнаправитьданныевсоответствующееприложение\",\"чтобыпринимающийхостмогсобратьпакетвправильномпорядке\"],\"correctAnswer\":\"3\"},{\"question\":\"КакимидвумяспособамиTCPиспользуетпорядковыеномеравсегменте?(Выберитедва.)\",\"answers\":[\"дляопределенияотсутствующихсегментоввпунктеназначения\",\"длясборкисегментовнаудаленномобъекте\",\"дляуказанияпорядка,вкоторомсегментыперемещаютсяотисточникакместуназначения\",\"ограничитьколичествосегментов,которыемогутбытьотправленысинтерфейсазаодинраз\",\"чтобыопределить,изменилсялипакетвовремятранспортировки\"],\"correctAnswer\":\"0\"},{\"question\":\"КакиедвапротоколаработаютнасамомверхнемуровнестекапротоколовTCP/IP?(Выберитедва.)\",\"answers\":[\"DNS\",\"Ethernet\",\"IP\",\"POP\",\"TCP\",\"UDP\"],\"correctAnswer\":\"0\"},{\"question\":\"Какоедоменноеимяявляетсяпримеромдоменаверхнегоуровня?\",\"answers\":[\"www.cisco.com\",\"cisco.com\",\".com\",\"root.cisco.com\"],\"correctAnswer\":\"2\"},{\"question\":\"Вчемразницамеждумоделямиклиент-сервериодноранговойсети?\",\"answers\":[\"Тольковмоделиклиент-серверможетпроисходитьпередачафайлов.\",\"Каждоеустройствоводноранговойсетиможетфункционироватькакклиентилисервер.\",\"Водноранговойсетиданныепередаютсябыстрее,чемвсетиклиент-сервер.\",\"Передачаданныхсиспользованиемустройства,выступающеговроликлиента,требуетналичиявыделенногосервера.\"],\"correctAnswer\":\"1\"},{\"question\":\"Какаясетеваямодельиспользуется,когдаавторзагружаетдокументсоднойглавойнафайловыйсерверкнижногоиздательства?\",\"answers\":[\"peer-to-peer\",\"master-slave\",\"client/server\",\"point-to-point\"],\"correctAnswer\":\"2\"},{\"question\":\"БеспроводнойхостдолжензапроситьIP-адрес.Какойпротоколбудетиспользоватьсядляобработкизапроса?\",\"answers\":[\"FTP\",\"HTTP\",\"DHCP\",\"ICMP\",\"SNMP\"],\"correctAnswer\":\"2\"},{\"question\":\"КакаясетеваяслужбапреобразуетURL-адрес,введенныйнакомпьютере,вIP-адрессервераназначения?\",\"answers\":[\"DNS\",\"DHCP\",\"FTP\",\"SNMP\"],\"correctAnswer\":\"0\"},{\"question\":\"Сетевойинженеранализируетотчетынедавнопроведеннойбазовойлиниисети.Какаяситуацияотражаетвозможнуюпроблемузадержки?\",\"answers\":[\"изменениепропускнойспособностивсоответствиисвыводомshowinterfaces\",\"таймаутследующегоузлапритрассировкемаршрута\",\"увеличениевремениоткликаназапросpingмеждухостами\",\"изменениеобъемаоперативнойпамятивсоответствиисвыводомshowversion\"],\"correctAnswer\":\"2\"},{\"question\":\"Какаяфункциябрандмауэраиспользуетсядляобеспечениятого,чтобыпакеты,поступающиевсеть,былилегитимнымиответаминазапросы,инициированныесвнутреннихузлов?\",\"answers\":[\"проверкапакетовсконтролемсостояния\",\"ФильтрацияURL-адресов\",\"фильтрацияприложений\",\"фильтрацияпакетов\"],\"correctAnswer\":\"0\"},{\"question\":\"Чтоявляетсяоднимизпризнаковтого,чтокомпьютерWindowsнеполучиладресIPv4отсервераDHCP?\",\"answers\":[\"Компьютернеможетвыполнитьping127.0.0.1.\",\"WindowsотображаетсообщениеотаймаутеDHCP.\",\"КомпьютерполучаетIP-адрес,начинающийсяс169.254.\",\"КомпьютернеможетпинговатьдругиеустройствавтойжесетисIP-адресамивдиапазоне169.254.0.0/16.\"],\"correctAnswer\":\"2\"},{\"question\":\"КакуюкомандуможетвыдатьадминистраторнамаршрутизатореCiscoдляотправкиотладочныхсообщенийналинииvty?\",\"answers\":[\"terminalmonitor\",\"loggingconsole\",\"loggingbuffered\",\"loggingsynchronous\"],\"correctAnswer\":\"0\"}]")