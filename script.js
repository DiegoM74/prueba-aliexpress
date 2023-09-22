function checkCode() {
    var code = document.getElementById("code").value.toUpperCase();
    var result = document.getElementById("result");

//sp
    if (code.startsWith("SP") && code.endsWith("CL") && code.length === 13) {
    result.innerHTML = "<p>Método de envío: AliExpress Standard Shipping<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://track.4px.com'>4PX Express</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 4 semanas<p/>";
 
//128
    } else if (code.length === 26 && code.startsWith("128")) {
    result.innerHTML = "<p>Método de envío: AliExpress Standard Shipping<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://track.4px.com'>4PX Express</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a> <p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 4 semanas<p/>";

//713
    } else if (code.length === 12 && code.startsWith("713")) {
    result.innerHTML = "<p>Método de envío: AliExpress Standard Shipping<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://track.4px.com'>4PX Express</a></p> <p>Transportista en Chile: <a href='https://centrodeayuda.chilexpress.cl'>Chilexpress</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 4 semanas<p/>";

//75/90
    } else if (code.length === 10 && (code.startsWith("90") || (code.startsWith("74") || code.startsWith("75") || code.startsWith("76"))) {
    result.innerHTML = "<p>Método de envío: AliExpress Standard Shipping<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://track.4px.com'>4PX Express</a></p> <p>Transportista en Chile: <a href='https://www.blue.cl'>BluExpress</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 4 semanas<p/>";

//99m
    } else if (code.length === 12 && code.startsWith("99M")) {
    result.innerHTML = "<p>Método de envío: AliExpress Standard Shipping<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://track.4px.com'>4PX Express</a></p> <p>Transportista en Chile: <a href='https://www.99minutos.com'>99minutos</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 3 a 6 semanas<p/>";

//miae
    } else if (code.startsWith("MIAE") && code.endsWith("CL") && code.length === 13) {
    result.innerHTML = "<p>Método de envío: AliExpress Saver Shipping<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://track.4px.com'>4PX Express</a></p> <p>Transportista en Chile: <a href='http://kd.hyuusoft.com/wxorder/new_detail_miya.jsp'>Mia Express</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 3 a 6 semanas<p/>";

//mia
    } else if (code.startsWith("MIA") && code.endsWith("CL") && code.length === 13) {
    result.innerHTML = "<p>Método de envío: AliExpress Standard Shipping<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://track.4px.com'>4PX Express</a></p> <p>Transportista en Chile: <a href='http://kd.hyuusoft.com/wxorder/new_detail_miya.jsp'>Mia Express</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 3 a 6 semanas<p/>";

//sm
    } else if (code.startsWith("SM") && code.endsWith("CL") && code.length === 13) {
    result.innerHTML = "<p>Método de envío: AliExpress Saver Shipping<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://track.4px.com'>4PX Express</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 5 semanas<p/>";

//132
    } else if (code.length === 26 && code.startsWith("132")) {
    result.innerHTML = "<p>Método de envío: AliExpress Saver Shipping<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://track.4px.com'>4PX Express</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 5 semanas<p/>";

//lp
    } else if (code.length === 16 && code.startsWith("LP")) {
    result.innerHTML = "<p>Para saber más información sobre este envío, pon el código en una de las dos páginas recomendadas<p/> <p>Estando ahí, busca otro código. Pon ese código en esta página para saber más información</p>";

//wshdo
    } else if (code.startsWith("WSHDO") && code.endsWith("YQ") && code.length === 17) {
    result.innerHTML = "<p>Método de envío: 360Lion Standard Packet<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://customer.360lion.com/track'>360Lion</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a> o <a href='https://centrodeayuda.chilexpress.cl'>Chilexpress</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 5 semanas<p/> <p>Para determinar que empresa repartirá, pon el código en Postal Ninja y busca el código alternativo que salga. Cópialo y pégalo en esta página</p>";

    //712
        } else if (code.length === 12 && code.startsWith("712")) {
        result.innerHTML = "<p>Transportista en Chile: <a href='https://centrodeayuda.chilexpress.cl'>Chilexpress</a><p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 4 semanas (para entregas internacionales)<p/>";

    // 8800
        } else if (code.length === 12 && code.startsWith("8800")) {
        result.innerHTML = "<p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento en Chile: Sí (algunas veces solo por sucursal virtual)<p/> <p>Tiempo estimado de entrega: 2 a 5 semanas (para entregas internacionales)<p/>";

//wshcl
    } else if (code.startsWith("WSHCL") && code.endsWith("YQ") && code.length === 17) {
    result.innerHTML = "<p>Método de envío: 360Lion Standard Packet<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://customer.360lion.com/track'>360Lion</a></p> <p>Transportista en Chile: <a href='https://centrodeayuda.chilexpress.cl'>Chilexpress</a>, <a href='https://starken.cl/'>Starken</a> o <a href='https://www.fedex.com/es-cl/home.html'>FedEx</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 5 semanas<p/> <p>Para determinar que empresa repartirá, pon el código en Postal Ninja y busca el código alternativo que salga. Cópialo y pégalo en esta página</p> <h5>(Starken y FedEx no están soportados en la página)</h5>";

//un
    } else if (code.startsWith("UN") && code.endsWith("MU") && code.length === 13) {
    result.innerHTML = "<p>Método de envío: Cainiao Super Economy Global / Mail Americas Standard<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a>, <a href='https://track.4px.com'>4PX Express</a> y <a href='https://mailamericas.com/tracking'>Mail Americas</a></p> <p>Transportista en Chile: Desconocido<p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: No<p/> <p>Tiempo estimado de entrega: 3 a 12 meses<p/>";
	
//s0
    } else if (code.length === 15 && code.startsWith("S00")) {
    result.innerHTML = "<p>Método de envío: Cainiao Super Economy Global<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a>, <a href='https://track.4px.com'>4PX Express</a> y/o <a href='https://www.yw56.com.cn/en'>Yanwen Express</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí (solo por sucursal virtual)<p/> <p>Tiempo estimado de entrega: 1 a 5 meses<p/>";

//sy e
    } else if (code.length === 13 && code.startsWith("SYAET")) {
    result.innerHTML = "<p>Método de envío: SunYou Economic Air Mail<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://www.sypost.net'>SunYou</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Aveces<p/> <p>Seguimiento en Chile: Sí (solo por sucursal virtual)<p/> <p>Tiempo estimado de entrega: 1 a 6 meses<p/> <p>Para saber el código de Correos Chile, pon el código en Postal Ninja y el código alternativo que salga será el de ellos.</p>";

//sy s
    } else if (code.length === 13 && code.startsWith("SYAE") || code.startsWith("SYCL") || code.startsWith("SYRM")) {
    result.innerHTML = "<p>Método de envío: SunYou Standard<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://www.sypost.net'>SunYou</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Aveces<p/> <p>Seguimiento en Chile: Sí (algunas veces solo por sucursal virtual)<p/> <p>Tiempo estimado de entrega: 2 a 4 semanas<p/> <p>Para saber el código de Correos Chile, pon el código en Postal Ninja y busca el código alternativo que salga.</p>";
	
//sy e
    } else if (code.length === 13 && code.startsWith("SY")) {
    result.innerHTML = "<p>Método de envío: SunYou Economic Air Mail<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://www.sypost.net'>SunYou</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Aveces<p/> <p>Seguimiento en Chile: Sí (solo por sucursal virtual)<p/> <p>Tiempo estimado de entrega: 1 a 6 meses<p/> <p>Para saber el código de Correos Chile, pon el código en Postal Ninja y el código alternativo que salga será el de ellos.</p>";

//ups
    } else if (code.length === 18 && code.startsWith("1Z")) {
    result.innerHTML = "<p>Método de envío: UPS<p/> <p>Transportista en China: <a href='https://www.ups.com/cl/es'>UPS</a></p> <p>Transportista en Chile: <a href='https://centrodeayuda.chilexpress.cl'>Chilexpress</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 1 a 3 semanas<p/>";
	
//yp
    } else if (code.length === 13 && code.startsWith("VR") || code.startsWith("UG") && code.endsWith("YP")) {
    result.innerHTML = "<p>Método de envío: Yanwen (special standard)<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://www.yw56.com.cn/en/'>Yanwen</a></p> <p>Transportista en Chile: <a href='https://correos.cl'>Correos Chile</a> o <a href='http://kd.hyuusoft.com/wxorder/new_detail_miya.jsp'>Mia Express</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 3 a 7 semanas<p/> <p>Para determinar que empresa repartirá, pon el código en Postal Ninja y busca el código alternativo que salga. Cópialo y pégalo en esta página</p>";
	
//533
    } else if (code.length === 28 && code.startsWith("533")) {
    result.innerHTML = "<p>Método de envío: Mail Americas Registered<p/> <p>Transportista en China: <a href='https://mailamericas.com/tracking'>Mail Americas</a></p> <p>Transportista en Chile: <a href='https://www.blue.cl'>BluExpress</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 5 semanas<p/> <p>Para obtener el código de BluExpress, al código quítale los primeros 5 dígitos. Los 10 siguientes serán el código de BluExpress</p>";
	
//hjyt
    } else if (code.length === 17 && code.startsWith("HJYTE") && code.endsWith("YQ")){
    result.innerHTML = "<p>Transportista en China: <a href='http://120.78.64.88:8082/en/trackIndex.htm'>HJYT Express</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: No<p/> <p>Seguimiento en Chile: No<p/> <p>Tiempo estimado de entrega: 2 a 5 semanas<p/>";
	
//sf
    } else if (code.length === 15 && code.startsWith("SF")) {
    result.innerHTML = "<p>Transportista en China: <a href='https://www.sf-express.com/we/ow/chn/en/waybill/list'>SF Express</a></p> <p>Transportista en Chile: Desconocido<p/> <p>Seguimiento por AliExpress: Aveces<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: Desconocido<p/>";
	
//yun
    } else if (code.length === 18 && code.startsWith("YT")) {
    result.innerHTML = "<p>Transportista en China: <a href='https://www.yuntrack.com/parcelTracking'>Yun Express</a></p> <p>Transportista en Chile: <a href='https://centrodeayuda.chilexpress.cl'>Chilexpress</a><p/> <p>Seguimiento por AliExpress: Aveces<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 4 semanas<p/>";
	
//qf
    } else if (code.length === 17 && code.startsWith("QFLFB") && code.endsWith("YQ")) {
    result.innerHTML = "<p>Transportista en China: <a href='http://111.230.15.119:8082/en/trackIndex.htm'>QFSY / QFL Express</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: No<p/> <p>Seguimiento en Chile: No<p/> <p>Tiempo estimado de entrega: 1 a 3 meses<p/>";

//eqt
    } else if (code.length === 17 && code.startsWith("EQTWL") && code.endsWith("YQ")) {
    result.innerHTML = "<p>Transportista en China: <a href='http://17post.kingtrans.cn/WebTrack'>EQT</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: No<p/> <p>Seguimiento en Chile: No<p/> <p>Tiempo estimado de entrega: 1 a 2 meses<p/>";

//anj
    } else if (code.length === 17 && code.startsWith("ANJZX") && code.endsWith("YQ")) {
    result.innerHTML = "<p>Transportista en China: <a href='https://anjuntrack.com/trajectory?orderNum='>Anjun</a></p> <p>Transportista en Chile: <a href='https://www.blue.cl'>BluExpress</a> o <a href='https://correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: No<p/> <p>Seguimiento en Chile: Síp/> <p>Tiempo estimado de entrega: 3 a 5 semanas<p/>";

//yye
    } else if (code.length === 17 && code.startsWith("YYGCL") && code.endsWith("YQ")) {
    result.innerHTML = "<p>Transportista en China: <a href='https://www.17track.net/es/carriers/yyexpress'>YYExpress</a></p> <p>Transportista en Chile: <a href='https://www.blue.cl'>BluExpress</a><p/> <p>Seguimiento por AliExpress: No<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 3 a 5 semanas<p/>";

//jnet
    } else if (code.length === 17 && code.startsWith("JNTCU") && code.endsWith("YQ")) {
    result.innerHTML = "<p>Transportista en China: <a href='https://www.17track.net/pt/carriers/j-net'>J-Net Express</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: No<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 5 semanas<p/>";

//qy
    } else if (code.length === 17 && code.startsWith("QYEAD") && code.endsWith("YQ")) {
    result.innerHTML = "<p>Transportista en China: <a href='http://www.qyexp.cn:8082/en/trackIndex.htm'>QYEXP</a></p> <p>Transportista en Chile: Desconocido<p/> <p>Seguimiento por AliExpress: No<p/> <p>Seguimiento en Chile: No<p/> <p>Tiempo estimado de entrega: Desconocido<p/>";

//cne
    } else if (code.length === 13 && code.startsWith("3A5V")) {
    result.innerHTML = "<p>Transportista en China: <a href='https://postal.ninja/en/p/cne-express/tracking'>CNE Express</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: No<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 3 a 5 semanas<p/>";

//ty
    } else if (code.length === 17 && code.startsWith("TYZRB") && code.endsWith("YQ")) {
    result.innerHTML = "<p>Transportista en China: <a href='https://www.aftership.com/es/carriers/topyou'>TopYou</a></p> <p>Transportista en Chile: <a href='https://www.fedex.com/es-cl/tracking.html'>FedEx</a><p/> <p>Seguimiento por AliExpress: No<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 3 a 5 semanas<p/>"

//mlcl
    } else if (code.length === 14 && code.startsWith("MLCL") && code.endsWith("N")) {
    result.innerHTML = "<p>Transportista en China: <a href='https://mailamericas.com/tracking'>Mail Americas</a></p> <p>Transportista en Chile: <a href='https://www.fedex.com/es-cl/tracking.html'>FedEx</a><p/> <p>Seguimiento por AliExpress: No<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 3 a 5 semanas<p/>"

//001
    } else if (code.length === 27 && code.startsWith("001")) {
    result.innerHTML = "<p>Transportista en China: <a href='https://mailamericas.com/tracking'>Mail Americas</a></p> <p>Transportista en Chile: <a href='https://www.fedex.com/es-cl/tracking.html'>FedEx</a><p/> <p>Seguimiento por AliExpress: No<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 3 a 5 semanas<p/>"

//cce
    } else if (code.length === 15 && code.startsWith("SJHSD") && code.endsWith("YQ")) {
    result.innerHTML = "<p>Transportista en China: <a href='https://www.17track.net/en/carriers/cce'>CCE Express</a></p> <p>Transportista en Chile: Desconocido<p/> <p>Seguimiento por AliExpress: No<p/> <p>Seguimiento en Chile: No<p/> <p>Tiempo estimado de entrega: 1 a 3 meses<p/>"

//lc
    } else if (code.length === 14 && code.startsWith("LCWL") && code.endsWith("YQ")) {
    result.innerHTML = "<p>Transportista en China: <a href='https://www.17track.net/en/carriers/liuchen'>Liuchen</a></p> <p>Transportista en Chile: Desconocido<p/> <p>Seguimiento por AliExpress: No<p/> <p>Seguimiento en Chile: No<p/> <p>Tiempo estimado de entrega: 1 a 3 meses<p/>"

//far
    } else if (code.length === 17 && code.startsWith("FAREX") && code.endsWith("YQ")) {
    result.innerHTML = "<p>Transportista en China: <a href='https://www.17track.net/en/carriers/far-international'>Far Internacional</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: No<p/> <p>Seguimiento en Chile: No<p/> <p>Tiempo estimado de entrega: 2 a 5 semanas<p/>"

//dhl e
    } else if (code.length === 22 && code.startsWith("HKYES")) {
    result.innerHTML = "<p>Transportista en China: <a href='https://ecommerceportal.dhl.com/track'>DHL eCommerce</a></p> <p>Transportista en Chile: Desconocido<p/> <p>Seguimiento por AliExpress: No<p/> <p>Seguimiento en Chile: No<p/> <p>Tiempo estimado de entrega: Desconocido<p/>"

//correos postales
    //cn
        //r
            } else if (code.endsWith("CN") && code.startsWith("R") || code.startsWith("C") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: China Post Registered Mail<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://www.aftership.com/carriers/china-post'>China Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 4 meses<p/>";

        //e
            } else if (code.endsWith("CN") && code.startsWith("E") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: China Post EMS<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://www.aftership.com/carriers/china-post'>China Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 4 meses<p/>";

        //ep
            } else if (code.endsWith("CN") && code.startsWith("L") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: China Post ePacket<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://www.aftership.com/carriers/china-post'>China Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Si (solo por sucursal virtual)<p/> <p>Tiempo estimado de entrega: 2 a 5 meses<p/>";

        //ec
            } else if (code.endsWith("CN") && code.startsWith("U") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: China Post Economy Mail<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://www.aftership.com/carriers/china-post'>China Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí (solo por sucursal virtual)<p/> <p>Tiempo estimado de entrega: 3 a 7 meses<p/>";
	
        //or
            } else if (code.endsWith("CN") && code.startsWith("A") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: China Post Ordinary Mail<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://www.aftership.com/carriers/china-post'>China Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: No<p/> <p>Seguimiento en Chile: No<p/> <p>Tiempo estimado de entrega: 3 a 9 meses<p/>";
		
    //sg
        //r
            } else if (code.endsWith("SG") && code.startsWith("R") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: AliExpress Standard Shipping / Singapore Post Registered Mail<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://www.singpost.com/track-items'>Singapore Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 4 meses<p/>";
	
        //e
            } else if (code.endsWith("SG") && code.startsWith("E") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: AliExpress Standard Shipping / Singapore Post EMS<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://www.singpost.com/track-items'>Singapore Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 4 meses<p/>";
	
        //ep
            } else if (code.endsWith("SG") && code.startsWith("L") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: Singapore Post ePacket<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://www.singpost.com/track-items'>Singapore Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí (solo por sucursal virtual)<p/> <p>Tiempo estimado de entrega: 2 a 5 meses<p/>";

        //ec
            } else if (code.endsWith("SG") && code.startsWith("U") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: Singapore Post Economic Mail<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://www.singpost.com/track-items'>Singapore Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí (solo por sucursal virtual)<p/> <p>Tiempo estimado de entrega: 3 a 7 meses<p/>";

        //or
            } else if (code.endsWith("SG") && code.startsWith("A") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: Singapore Post Ordinary Mail<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://www.singpost.com/track-items'>Singapore Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: No<p/> <p>Seguimiento en Chile: No<p/> <p>Tiempo estimado de entrega: 3 a 9 meses<p/>";

    //nl
        //r
            } else if (code.endsWith("NL") && code.startsWith("R") || code.startsWith("C") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: Netherlands Post Registered Mail<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://postnl.post/tracktrace'>Netherlands Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 4 meses<p/>";

        //e
            } else if (code.endsWith("NL") && code.startsWith("E") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: Netherlands Post EMS<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://postnl.post/tracktrace'>Netherlands Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 4 meses<p/>";

        //ep
            } else if (code.endsWith("NL") && code.startsWith("L") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: Netherlands Post ePacket<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://postnl.post/tracktrace'>Netherlands Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Si (solo por sucursal virtual)<p/> <p>Tiempo estimado de entrega: 2 a 5 meses<p/>";

        //ec
            } else if (code.endsWith("NL") && code.startsWith("U") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: Netherlands Post Economy Mail<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://postnl.post/tracktrace'>Netherlands Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí (solo por sucursal virtual)<p/> <p>Tiempo estimado de entrega: 3 a 7 meses<p/>";

        //or
            } else if (code.endsWith("NL") && code.startsWith("A") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: Netherlands Post Ordinary Mail<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://postnl.post/tracktrace'>Netherlands Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: No<p/> <p>Seguimiento en Chile: No<p/> <p>Tiempo estimado de entrega: 3 a 9 meses<p/>";

    //be
        //r
            } else if (code.endsWith("BE") && code.startsWith("R") || code.startsWith("C") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: Belgium Post Registered Mail<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://track.bpost.cloud/btr/web/#/home?lang=en'>Belgium Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 4 meses<p/>";

        //e
            } else if (code.endsWith("BE") && code.startsWith("E") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: Belgium Post EMS<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://track.bpost.cloud/btr/web/#/home?lang=en'>Belgium Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 4 meses<p/>";

        //ep
            } else if (code.endsWith("BE") && code.startsWith("L") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: Belgium Post ePacket<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://track.bpost.cloud/btr/web/#/home?lang=en'>Belgium Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Si (solo por sucursal virtual)<p/> <p>Tiempo estimado de entrega: 2 a 5 meses<p/>";

        //ec
            } else if (code.endsWith("BE") && code.startsWith("U") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: Belgium Post Economy Mail<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://track.bpost.cloud/btr/web/#/home?lang=en'>Belgium Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí (solo por sucursal virtual)<p/> <p>Tiempo estimado de entrega: 3 a 7 meses<p/>";

        //or
            } else if (code.endsWith("BE") && code.startsWith("A") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: Belgium Post Ordinary Mail<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://track.bpost.cloud/btr/web/#/home?lang=en'>Belgium Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: No<p/> <p>Seguimiento en Chile: No<p/> <p>Tiempo estimado de entrega: 3 a 9 meses<p/>";

    //us
        //r
            } else if (code.endsWith("US") && code.startsWith("R") || code.startsWith("C") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: USPS Registered Mail<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://es-tools.usps.com/go/TrackConfirmAction_input'>USPS</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 4 meses<p/>";

        //e
            } else if (code.endsWith("US") && code.startsWith("E") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: USPS EMS<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://es-tools.usps.com/go/TrackConfirmAction_input'>USPS</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 4 meses<p/>";

        //ep
            } else if (code.endsWith("US") && code.startsWith("L") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: USPS ePacket<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://es-tools.usps.com/go/TrackConfirmAction_input'>USPS</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Si (solo por sucursal virtual)<p/> <p>Tiempo estimado de entrega: 2 a 5 meses<p/>";

        //ec
            } else if (code.endsWith("US") && code.startsWith("U") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: USPS Economy Mail<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://es-tools.usps.com/go/TrackConfirmAction_input'>USPS</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí (solo por sucursal virtual)<p/> <p>Tiempo estimado de entrega: 3 a 7 meses<p/>";

        //or
            } else if (code.endsWith("US") && code.startsWith("A") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: USPS Ordinary Mail<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://es-tools.usps.com/go/TrackConfirmAction_input'>USPS</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: No<p/> <p>Seguimiento en Chile: No<p/> <p>Tiempo estimado de entrega: 3 a 9 meses<p/>";

    //es
        //r
            } else if (code.endsWith("ES") && code.startsWith("R") || code.startsWith("C") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: Correos España Registered Mail<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://www.correos.es/es/es/herramientas/localizador/envios'>Correos España</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 4 meses<p/>";

        //e
            } else if (code.endsWith("ES") && code.startsWith("E") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: Correos España EMS<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://www.correos.es/es/es/herramientas/localizador/envios'>Correos España</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 4 meses<p/>";

        //ep
            } else if (code.endsWith("ES") && code.startsWith("L") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: Correos España ePacket<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://www.correos.es/es/es/herramientas/localizador/envios'>Correos España</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Si (solo por sucursal virtual)<p/> <p>Tiempo estimado de entrega: 2 a 5 meses<p/>";

        //ec
            } else if (code.endsWith("ES") && code.startsWith("U") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: Correos España Economy Mail<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://www.correos.es/es/es/herramientas/localizador/envios'>Correos España</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí (solo por sucursal virtual)<p/> <p>Tiempo estimado de entrega: 3 a 7 meses<p/>";

        //or
            } else if (code.endsWith("ES") && code.startsWith("A") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: Correos España Ordinary Mail<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://www.correos.es/es/es/herramientas/localizador/envios'>Correos España</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: No<p/> <p>Seguimiento en Chile: No<p/> <p>Tiempo estimado de entrega: 3 a 9 meses<p/>";

    //hk
        //r
            } else if (code.endsWith("HK") && code.startsWith("R") || code.startsWith("C") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: Hongkong Post Registered Mail<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://webapp.hongkongpost.hk/en/mail_tracking/index.html'>Hongkong Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 4 meses<p/>";

        //e
            } else if (code.endsWith("HK") && code.startsWith("E") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: Hongkong Post EMS<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://webapp.hongkongpost.hk/en/mail_tracking/index.html'>Hongkong Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 4 meses<p/>";

        //ep
            } else if (code.endsWith("HK") && code.startsWith("L") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: Hongkong Post ePacket<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://webapp.hongkongpost.hk/en/mail_tracking/index.html'>Hongkong Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Si (solo por sucursal virtual)<p/> <p>Tiempo estimado de entrega: 2 a 5 meses<p/>";

        //ec
            } else if (code.endsWith("HK") && code.startsWith("U") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: Hongkong Post Economy Mail<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://webapp.hongkongpost.hk/en/mail_tracking/index.html'>Hongkong Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí (solo por sucursal virtual)<p/> <p>Tiempo estimado de entrega: 3 a 7 meses<p/>";

        //or
            } else if (code.endsWith("HK") && code.startsWith("A") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: Hongkong Post Ordinary Mail<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://webapp.hongkongpost.hk/en/mail_tracking/index.html'>Hongkong Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: No<p/> <p>Seguimiento en Chile: No<p/> <p>Tiempo estimado de entrega: 3 a 9 meses<p/>";
    
    //tr
        //r
            } else if (code.endsWith("TR") && code.startsWith("R") || code.startsWith("C") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: Turkish Post Registered Mail<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://track.ptt.gov.tr/'>Turkish Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 4 meses<p/>";

        //e
            } else if (code.endsWith("TR") && code.startsWith("E") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: Turkish Post EMS<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://track.ptt.gov.tr/'>Turkish Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 4 meses<p/>";

        //ep
            } else if (code.endsWith("TR") && code.startsWith("L") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: Turkish Post ePacket<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://track.ptt.gov.tr/'>Turkish Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Si (solo por sucursal virtual)<p/> <p>Tiempo estimado de entrega: 2 a 5 meses<p/>";

        //ec
            } else if (code.endsWith("TR") && code.startsWith("U") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: Turkish Post Economy Mail<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://track.ptt.gov.tr/'>Turkish Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí (solo por sucursal virtual)<p/> <p>Tiempo estimado de entrega: 3 a 7 meses<p/>";

        //or
            } else if (code.endsWith("TR") && code.startsWith("A") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: Turkish Post Ordinary Mail<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://track.ptt.gov.tr/'>Turkish Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: No<p/> <p>Seguimiento en Chile: No<p/> <p>Tiempo estimado de entrega: 3 a 9 meses<p/>";

    //vu
        //r
            } else if (code.endsWith("VU") && code.startsWith("R") || code.startsWith("C") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: Vanuatu Post Registered Mail<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://www.vanuatupost.vu/track-and-trace'>Vanuatu Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 4 meses<p/>";

        //e
            } else if (code.endsWith("VU") && code.startsWith("E") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: Vanuatu Post EMS<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://www.vanuatupost.vu/track-and-trace'>Vanuatu Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 4 meses<p/>";

        //ep
            } else if (code.endsWith("VU") && code.startsWith("L") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: Vanuatu Post ePacket<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://www.vanuatupost.vu/track-and-trace'>Vanuatu Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Si (solo por sucursal virtual)<p/> <p>Tiempo estimado de entrega: 2 a 5 meses<p/>";

        //ec
            } else if (code.endsWith("VU") && code.startsWith("U") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: Vanuatu Post Economy Mail<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://www.vanuatupost.vu/track-and-trace'>Vanuatu Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí (solo por sucursal virtual)<p/> <p>Tiempo estimado de entrega: 3 a 7 meses<p/>";

        //or
            } else if (code.endsWith("VU") && code.startsWith("A") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: Vanuatu Post Ordinary Mail<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://www.vanuatupost.vu/track-and-trace'>Vanuatu Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: No<p/> <p>Seguimiento en Chile: No<p/> <p>Tiempo estimado de entrega: 3 a 9 meses<p/>";

    //sb
        //r
            } else if (code.endsWith("SB") && code.startsWith("R") || code.startsWith("C") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: Serbia Post Registered Mail<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://www.posta.rs/eng/alati/pracenje-posiljke.aspx'>Serbia Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 4 meses<p/>";

        //e
            } else if (code.endsWith("SB") && code.startsWith("E") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: Serbia Post EMS<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://www.posta.rs/eng/alati/pracenje-posiljke.aspx'>Serbia Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 4 meses<p/>";

        //ep
            } else if (code.endsWith("SB") && code.startsWith("L") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: Serbia Post ePacket<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://www.posta.rs/eng/alati/pracenje-posiljke.aspx'>Serbia Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Si (solo por sucursal virtual)<p/> <p>Tiempo estimado de entrega: 2 a 5 meses<p/>";

        //ec
            } else if (code.endsWith("SB") && code.startsWith("U") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: Serbia Post Economy Mail<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://www.posta.rs/eng/alati/pracenje-posiljke.aspx'>Serbia Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí (solo por sucursal virtual)<p/> <p>Tiempo estimado de entrega: 3 a 7 meses<p/>";

        //or
            } else if (code.endsWith("SB") && code.startsWith("A") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: Serbia Post Ordinary Mail<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://www.posta.rs/eng/alati/pracenje-posiljke.aspx'>Serbia Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: No<p/> <p>Seguimiento en Chile: No<p/> <p>Tiempo estimado de entrega: 3 a 9 meses<p/>";

    //jp
        //r
            } else if (code.endsWith("JP") && code.startsWith("R") || code.startsWith("C") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: Japan Post Registered Mail<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://trackings.post.japanpost.jp/services/srv/search/input?locale=en'>Japan Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 4 meses<p/>";

        //e
            } else if (code.endsWith("JP") && code.startsWith("E") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: Japan Post EMS<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://trackings.post.japanpost.jp/services/srv/search/input?locale=en'>Japan Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí<p/> <p>Tiempo estimado de entrega: 2 a 4 meses<p/>";

        //ep
            } else if (code.endsWith("JP") && code.startsWith("L") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: Japan Post ePacket<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://trackings.post.japanpost.jp/services/srv/search/input?locale=en'>Japan Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Si (solo por sucursal virtual)<p/> <p>Tiempo estimado de entrega: 2 a 5 meses<p/>";

        //ec
            } else if (code.endsWith("JP") && code.startsWith("U") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: Japan Post Economy Mail<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://trackings.post.japanpost.jp/services/srv/search/input?locale=en'>Japan Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: Sí<p/> <p>Seguimiento en Chile: Sí (solo por sucursal virtual)<p/> <p>Tiempo estimado de entrega: 3 a 7 meses<p/>";

        //or
            } else if (code.endsWith("JP") && code.startsWith("A") && code.length === 13) {
            result.innerHTML = "<p>Método de envío: Japan Post Ordinary Mail<p/> <p>Transportista en China: <a href='https://global.cainiao.com'>Cainiao</a> y <a href='https://trackings.post.japanpost.jp/services/srv/search/input?locale=en'>Japan Post</a></p> <p>Transportista en Chile: <a href='https://www.correos.cl'>Correos Chile</a><p/> <p>Seguimiento por AliExpress: No<p/> <p>Seguimiento en Chile: No<p/> <p>Tiempo estimado de entrega: 3 a 9 meses<p/>";

    }
// invalido
    else
    result.innerHTML = "<p>Código inválido o desconocido.</p>";
}
