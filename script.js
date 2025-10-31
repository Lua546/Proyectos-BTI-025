// --- 1. SIMULACIÓN DE DATOS (Ajustada para incluir URLs de video) ---
const projectsData = {
    "Videojuegos": [
        {
            imagen: "https://youtu.be/acEadRxQalo",
            url_sitio: "https://lucasbr111.github.io/SacroMango/",
            titulo: "Sacro Mango",
            integrantes: "Lucas Brítez, Luana Rolón y Axel Rolón"
        },
        {
            imagen: "https://drive.google.com/file/d/1SAvqm3Ugw0yfHpJp5NIUpZ2eap6ityDC/view?usp=drive_link", 
            titulo: "Memorias de mi Taita",
            integrantes: "Mauricio Galeano, Alejandro Chamorro y Yanina Miranda"
        },
        {
            imagen: "https://drive.google.com/file/d/1ws3jE_IYdKYqV_XiCx7RDx2Ng_p8f1Dn/view?usp=sharing", 
            url_sitio: "https://guardianesdelbosque00.itch.io/guardianes-del-bosque",
            titulo: "Guardian of the forest", 
            integrantes: "Luana Martínez y Liz López"
        },
        {
            imagen: "https://drive.google.com/file/d/1x2CgP9oLqpEY_1nRQx4vSv7ScKuVk9x5/view?usp=sharing",
            url_sitio: "https://lucasgimenez23.github.io/San-Juan-ara/", 
            titulo: "San Juan Ára",
            integrantes: "Isana Gómez, Lucas Giménez y Mathias Quintana"
        },
        {
            imagen: "https://www.youtube.com/watch?v=qMmWllPCy-w",
            url_sitio: "https://charlies092.github.io/game/", 
            titulo: "C.R.E.C.E: PEAK CV",
            integrantes: "Magalí Ramírez, Elias Armoa y Charlies Vera"
        },
        {
            url_sitio: "https://mercexp.itch.io/mercexp",
            imagen: "https://drive.google.com/file/d/1CQqgoKQoY4qlqSg5cImQZeBgvO4cqLjw/view?usp=drive_link", 
            titulo: "Mercado Express", 
            integrantes: "María Gómez, Ivan Alderete y Nayeli Silvero"
        },
        {
            imagen: "https://youtu.be/RPLptCkUzhA",
            url_sitio: "https://f23a9.magicloops.app/", 
            titulo: "The hollow of the realms", 
            integrantes: "Sharise Cabañas, Tatiana Ocampos y Fernando Bogado"
        },
        {
            imagen: "https://www.youtube.com/watch?v=iepKq4RnzVg", 
            titulo: "Camino a la Albirroja", 
            integrantes: "Julio Gómez, Lucas Portillo y Ayelen Vera"
        },
        {
            imagen: "https://www.youtube.com/watch?v=ahdW2l4gZ3w",
            url_sitio: "https://jojofaninsano1987.itch.io/desvelo",
            titulo: "La búsqueda de Mishi",
            integrantes: "Yadira Rivas, Aquiles Bobadilla y Karina Benítez"
        },
        {
            imagen: "", 
            titulo: "Solo en Casa", 
            integrantes: "Alexia Rodas, Fabio López y Denis Casco"
        }
    ],
    "Arduinos": [
        {
            url_sitio: "https://majitogmzz.github.io/",
            imagen: "https://drive.google.com/file/d/1nUvs32EZTwFYqQlvRyXevzs3PVES2Hmo/view?usp=drive_link",
            titulo: "Ardutag",
            integrantes: "María José Gómez y Nayeli Silvero"
        },
        {
            url_sitio:"https://lua546.github.io/AutoTend-web/",
            imagen: "https://www.youtube.com/watch?v=L5CCVfVrDSA",
            titulo: "Autotend",
            integrantes: "Yadira Rivas, Isana Gómez y Luana Rolón"
        },
        {
            url_sitio: "https://tjs3b.magicloops.app/",
            imagen: "https://www.youtube.com/watch?v=CxI-6xuIUSQ",
            titulo: "Arduweather",
            integrantes: "Codelock" 
        },
        {
            url_sitio: "https://GasGuardd.github.io",
            imagen: "https://youtu.be/ZtefUY7CGdM", 
            titulo: "GasGuard",
            integrantes: "Liz López, Luana Martínez y Karina Benítez" 
        },
        {
            url_sitio: "https://mach1nemags-lang.github.io/BINOVA/",
            imagen: "https://drive.google.com/file/d/11Gnkd2rICqbUZOoE-wbPxJsAoox8tUPj/view?usp=drive_link", 
            titulo: "Binova",
            integrantes: "Magalí Ramirez, Yanina Miranda y Tatiana Ocampos" 
        },
        {
            url_sitio:"https://p2iet.magicloops.app/",
            imagen: "imagenes/codelock.jpg", 
            titulo: "Codelock",
            integrantes: "Sharise Cabaña, Ivan Alderete y Fernando Bogado" 
        },
        {
            imagen: "", 
            titulo: "Dafstick",
            integrantes: "Alexia Rodas, Fabio López y Denis Casco" 
        },
        {
            imagen: "", 
            titulo: "Saveplug",
            integrantes: "Ayelen Vera, Alejandro Chamorro y Mauricio Galeano" 
        },
        {
            imagen: "", 
            titulo: "RaspBot",
            integrantes: "Julio Gómez, Lucas Portillo y Lucas Brítez" 
        },
        {
            imagen: "imagenes/safe.jpg", 
            titulo: "Safe Kitchen",
            integrantes: "Mathias Quintana y Lucas Giménez" 
        },
    ],
    "E-commerces": [
        {
            imagen: "imagenes/Firebing.png",
            url_sitio: "https://firebing.byethost15.com/Firebing/index.html?i=1",
            titulo: "Firebing",
            integrantes: "Mathias Quintana"
        },
        {
            imagen: "imagenes/Tienda Saludable.png",
            url_sitio: "https://tiendasaludable.byethost5.com/ecommerce-saludable/ecommerce-saludable/public/login.php",
            titulo: "Tienda Saludable",
            integrantes: "Alexia Rodas"
        },
        {
            imagen: "imagenes/Anon.png",
            url_sitio: "https://anonmusic.ct.ws/",
            titulo: "Anon",
            integrantes: "Luana Rolón"
        },
        {
            imagen: "imagenes/EjoGuapy.png",
            url_sitio: "https://userx0999.pythonanywhere.com/",
            titulo: "EjoGuapy",
            integrantes: "Mauricio Galeano"
        },
        {
            imagen: "imagenes/ElectroShop Paraguay.png",
            url_sitio: "https://electroshopparaguayoficial.yzz.me/",
            titulo: "ElectroShop Paraguay",
            integrantes: "Sharise Cabaña"
        },
        {
            imagen: "imagenes/SneakerHub.png",
            url_sitio: "https://sneakerhub.byethost16.com/SneakOut/public/",
            titulo: "SneakerHub",
            integrantes: "Lucas Portillo"
        },
        {
            imagen: "imagenes/WorldPhone.png",
            url_sitio: "https://worldphone.byethost7.com/WorldPhone/public/index.php",
            titulo: "WorldPhone",
            integrantes: "Fernando Bogado"
        },
        {
            imagen: "imagenes/Amai Repostería.png",
            url_sitio: "https://amaireposteriaa.byethost11.com/reposteria/public/index.php",
            titulo: "Amai Repostería",
            integrantes: "Nayeli Silvero"
        },
        {
            imagen: "imagenes/Imperial Parfums.png",
            url_sitio: "https://imperialparfums.byethost7.com/imperial-parfum/",
            titulo: "Imperial Parfums",
            integrantes: "Alejandro Chamorro"
        },
        {
            imagen: "imagenes/Nova Store.png",
            url_sitio: "https://novastore.byethost4.com/sales-system-starter/public/index.php",
            titulo: "Nova Store",
            integrantes: "Ivan Alderete"
        },
        {
            imagen: "imagenes/Línea de fuego.png",
            url_sitio: "http://lineadefuego.yzz.me/",
            titulo: "Línea de fuego",
            integrantes: "Lucas Giménez"
        },
        {
            imagen: "imagenes/Tienda CSF.png",
            url_sitio: "http://sanfrancisco.byethost5.com/comercial/home.php",
            titulo: "Tienda CSF",
            integrantes: "Charlies Vera"
        },
        {
            imagen: "imagenes/Arte Visual.png",
            url_sitio: "https://artevisual.xo.je/index.php",
            titulo: "Arte Visual",
            integrantes: "Yadira Rivas"
        },
        {
            imagen: "",
            url_sitio: "",
            titulo: "System Production",
            integrantes: "Julio Gómez"
        },
        {
            imagen: "imagenes/Cioccomanía.png",
            url_sitio: "https://xhanni.pythonanywhere.com/",
            titulo: "Cioccomanía",
            integrantes: "Yanina Miranda"
        },
        {
            imagen: "imagenes/Solara.png",
            url_sitio: "https://solaracheckout.byethost17.com/solara_checkout/solara/public/index.php",
            titulo: "Solara",
            integrantes: "Magalí Ramírez"
        },
        {
            imagen: "imagenes/Milliontech.png",
            url_sitio: "https://milliontech.byethost4.com/MilleniumTech/index.php?c=home&i=1",
            titulo: "MillionTech",
            integrantes: "Lucas Britez"
        },
        {
            imagen: "imagenes/Petstore.png",
            url_sitio: "https://petstore.page.gd/?i=1",
            titulo: "Petstore",
            integrantes: "Karina Benítez"
        },
        {
            imagen: "imagenes/Amor en Pétalos.png",
            url_sitio: "https://majogomez.byethost10.com/Amor_en_Petalos/index.php",
            titulo: "Amor en Pétalos",
            integrantes: "María José Gómez"
        },
        {
            imagen: "imagenes/Pet house.png",
            url_sitio: "https://pet-house-dc.infinityfreeapp.com/",
            titulo: "Pet House",
            integrantes: "Denis Casco"
        },
        {
            imagen: "imagenes/Saisa.png",
            url_sitio: "https://saisa.infinityfreeapp.com/public/",
            titulo: "Saisa",
            integrantes: "Isana Gómez"
        },
        {
            imagen: "imagenes/Naturaleza.png",
            url_sitio: "https://naturaleza.yzz.me",
            titulo: "Naturaleza",
            integrantes: "Aquiles Bobadilla"
        },
        {
            imagen: "imagenes/Soundscape.png",
            url_sitio: "https://soundscape.byethost7.com/?i=1",
            titulo: "SoundScape",
            integrantes: "Fabio López"
        },
        {
            imagen: "imagenes/Savage Stylish Store.png",
            url_sitio: "https://soundscape.byethost7.com/?i=1",
            titulo: "Savage Stylish Store",
            integrantes: "Elias Armoa"
        },
        {
            imagen: "imagenes/mo cuishle.png",
            url_sitio: "https://mocshle.gt.tc",
            titulo: "Mo Cuishle",
            integrantes: "Liz López"
        },
        {
            imagen: "imagenes/daylen cafeteria.png",
            url_sitio: "https://daylencoffee.up.railway.app/",
            titulo: "Daylen Cafetería",
            integrantes: "Ayelen Vera"
        },
        {
            imagen: "imagenes/tu farmacia online.png",
            url_sitio: "https://farmacia.infinityfreeapp.com",
            titulo: "Tu Farmacia Online",
            integrantes: "Luana Martínez"
        },
        {
            imagen: "imagenes/sweet bloom.png",
            url_sitio: "https://cafeteria.page.gd/index.php?i=1",
            titulo: "Sweet Bloom",
            integrantes: "Tatiana Ocampos"
        }
    ],
    "Videos con IA": [
        {
            categoria: "historia",
            imagen: "https://www.youtube.com/watch?v=Zp4Qo1kcbIA",
            url_sitio: "https://www.youtube.com/watch?v=Zp4Qo1kcbIA",
            titulo: "Reducciones jesuíticas del Paraguay",
            integrantes: "Lucas Brítez y Julio Gómez"
        },
        {
            categoria: "historia",
            imagen: "https://drive.google.com/file/d/1hDgfSv2-XT_oWY5mAVcgIbpYvyI5U8Oa/view?usp=sharing",
            url_sitio: "https://drive.google.com/file/d/1hDgfSv2-XT_oWY5mAVcgIbpYvyI5U8Oa/view?usp=sharing",
            titulo: "Fábrica de Hierro de Ybycuí \"La Rosada\"",
            integrantes: "Sharise Cabañas"
        },
        {
            categoria: "historia",
            imagen: "https://drive.google.com/file/d/1LB5BtPt6P4TGtihERVNO6lhs_VyyqY6a/view?usp=drive_link",
            url_sitio: "https://drive.google.com/file/d/1LB5BtPt6P4TGtihERVNO6lhs_VyyqY6a/view?usp=drive_link",
            titulo: "Rol de la Mujer Paraguaya en la Guerra Guazú",
            integrantes: "Ivan Alderete"
        },
        {
            categoria: "historia",
            imagen: "https://drive.google.com/file/d/1TfSKJMkmGbQbLQkOy08-UsLigZWO84ly/view?usp=sharing",
            url_sitio: "https://drive.google.com/file/d/1TfSKJMkmGbQbLQkOy08-UsLigZWO84ly/view?usp=sharing",
            titulo: "Batalla de Boquerón",
            integrantes: "Elias Armoa"
        },
        {
            categoria: "historia",
            imagen: "https://drive.google.com/file/d/12C0q6qUxWhDFoXQprCXJDEgNW8SSdp0M/view?usp=sharing",
            url_sitio: "https://drive.google.com/file/d/12C0q6qUxWhDFoXQprCXJDEgNW8SSdp0M/view?usp=sharing",
            titulo: "Batalla de Curupayty",
            integrantes: "Fabio López"
        },
        {
            categoria: "historia",
            imagen: "https://www.youtube.com/watch?v=aisOh7xfqTM",
            url_sitio: "https://www.youtube.com/watch?v=aisOh7xfqTM",
            titulo: "Batalla de Cerro Corá",
            integrantes: "Julio Gómez"
        },
        {
            categoria: "historia",
            imagen: "https://www.youtube.com/watch?v=WnYWktijGFM&t=4s",
            url_sitio: "https://www.youtube.com/watch?v=WnYWktijGFM&t=4s",
            titulo: "Fortaleza de Humaitá",
            integrantes: "Alejandro Chamorro y Lucas Portillo"
        },
        {
            categoria: "historia",
            imagen: "https://drive.google.com/file/d/12xtYM-m9tcOLgcY2vq9-C_2lQmb9Btet/view?usp=drive_link",
            url_sitio: "https://drive.google.com/file/d/12xtYM-m9tcOLgcY2vq9-C_2lQmb9Btet/view?usp=drive_link",
            titulo: "Represa de Itaipu",
            integrantes: "Luana Martínez"
        },
        {
            categoria: "historia",
            imagen: "https://www.youtube.com/watch?v=CBlH7od-6Ek",
            url_sitio:"https://www.youtube.com/watch?v=CBlH7od-6Ek",
            titulo: "Acosta Ñu",
            integrantes: "Magalí Ramírez"
        },
        {
            categoria: "historia",
            imagen: "https://www.youtube.com/watch?v=Zp4Qo1kcbIARuinas",
            url_sitio: "https://www.youtube.com/watch?v=Zp4Qo1kcbIARuinas",
            titulo: "Ruinas Jesuitas",
            integrantes: "Lucas Britez"
        },
        {
            categoria: "historia",
            imagen: "https://drive.google.com/file/d/1-fA-O8QcXXLRclzyY09v4gayeeelpJ0x/view?usp=drive_link",
            url_sitio: "https://drive.google.com/file/d/1-fA-O8QcXXLRclzyY09v4gayeeelpJ0x/view?usp=drive_link",
            titulo: "La dictadura del Dr. Francia",
            integrantes: "Karina Benítez"
        },
        {
            categoria: "historia",
            imagen: "https://drive.google.com/file/d/1o0eVCPkdR9ORcmHhn9GVYgXSEBhXkfck/view?usp=drive_link",
            url_sitio: "https://drive.google.com/file/d/1o0eVCPkdR9ORcmHhn9GVYgXSEBhXkfck/view?usp=drive_link",
            titulo: "Catedral Metropolitana",
            integrantes: "Nayeli Silvero"
        },
        {
            categoria: "historia",
            imagen: "https://drive.google.com/file/d/130k8ISapw9W-kDEw7BuVryE5PfAzaWjb/view?usp=drive_link",
            url_sitio: "https://drive.google.com/file/d/130k8ISapw9W-kDEw7BuVryE5PfAzaWjb/view?usp=drive_link",
            titulo: "Casa de la Independencia",
            integrantes: "Yadira Rivas"
        },
        {
            categoria: "historia",
            imagen: "https://www.youtube.com/watch?v=yaKGLnTWwGw",
            url_sitio: "https://www.youtube.com/watch?v=yaKGLnTWwGw",
            titulo: "El Mensu",
            integrantes: "María José Gómez"
        },
        {
            categoria: "historia",
            imagen: "https://drive.google.com/file/d/1Ejsn26hUyOwZFPUVEJnstshpimusJIEL/view?usp=drive_link",
            url_sitio: "https://drive.google.com/file/d/1Ejsn26hUyOwZFPUVEJnstshpimusJIEL/view?usp=drive_link",
            titulo: "El Ferrocarril Carlos Antonio López",
            integrantes: "Tatiana Ocampos"
        },
        {
            categoria: "historia",
            imagen: "https://www.youtube.com/watch?v=_ZjAAOogX8k",
            url_sitio: "https://www.youtube.com/watch?v=_ZjAAOogX8k",
            titulo: "Última batalla del Cnel. Valois Rivarola",
            integrantes: "Lucas Giménez"
        },
        {
            categoria: "historia",
            imagen: "https://www.youtube.com/watch?v=BGyFzxCwW-A",
            url_sitio: "https://www.youtube.com/watch?v=BGyFzxCwW-A",
            titulo: "Vapor Cué",
            integrantes: "Mauricio Galeano"
        },
        {
            categoria: "historia",
            imagen: "https://www.youtube.com/watch?v=ZyRIbfPYOf0", 
            url_sitio: "https://www.youtube.com/watch?v=ZyRIbfPYOf0",
            titulo: "Madame Lynch",
            integrantes: "Ayelen Vera"
        },
        {
            categoria: "historia",
            imagen: "https://drive.google.com/file/d/1vOmQBSqF19Mx30JzfZwWdneqVvELaOHd/view?usp=drive_link",
            url_sitio: "https://drive.google.com/file/d/1vOmQBSqF19Mx30JzfZwWdneqVvELaOHd/view?usp=drive_link",
            titulo: "Panteón Nacional de los Héroes",
            integrantes: "Fernando Bogado"
        },
        {
            categoria: "historia",
            imagen: "https://www.youtube.com/watch?v=GTSImOHenUQ", 
            url_sitio: "https://www.youtube.com/watch?v=GTSImOHenUQ",
            titulo: "Palacio de los López",
            integrantes: "Liz López"
        },
        {
            categoria: "historia",
            imagen: "https://drive.google.com/file/d/1IRiSz8_GnwoFx8Gq0F-2DkVJJ1uBk38A/view?usp=drive_link",
            url_sitio: "https://drive.google.com/file/d/1IRiSz8_GnwoFx8Gq0F-2DkVJJ1uBk38A/view?usp=drive_link",
            titulo: "Caída de Strossner",
            integrantes: "Luana Rolón"
        },
        {
            categoria: "historia",
            imagen: "https://drive.google.com/file/d/1ZmXtvvOuEq-i_ZskX2L-r85LqZD5MSVT/view?usp=sharing",
            url_sitio: "https://drive.google.com/file/d/1ZmXtvvOuEq-i_ZskX2L-r85LqZD5MSVT/view?usp=sharing",
            titulo: "Represa de Yasyretá",
            integrantes: "Isana Gómez"
        },
        {
            categoria: "historia",
            imagen: "https://www.tiktok.com/@pasadovivo_py/video/7503371496618872069", 
            url_sitio: "https://www.tiktok.com/@pasadovivo_py/video/7503371496618872069",
            titulo: "La batalla de Tuyutí",
            integrantes: "Yanina Miranda"
        },
        {
            categoria: "historia",
            imagen: "https://drive.google.com/file/d/1rjeNowQ6GQIS13leE4aZbBZPctrJDVy3/view?usp=drive_link",
            url_sitio: "https://drive.google.com/file/d/1rjeNowQ6GQIS13leE4aZbBZPctrJDVy3/view?usp=drive_link",
            titulo: "Teatro Municipal Ignacio A. Pane",
            integrantes: "Denis Casco"
        },
        {
            categoria: "historia",
            imagen: "https://drive.google.com/file/d/1wTtCm-okR74rJP9XCk2TUq7O9ABLiC_w/view?usp=drive_link",
            url_sitio: "https://drive.google.com/file/d/1wTtCm-okR74rJP9XCk2TUq7O9ABLiC_w/view?usp=drive_link",
            titulo: "Basílica de Caacupé",
            integrantes: "Alexia Rodas"
        },
        {
            categoria: "historia",
            imagen: "https://www.youtube.com/watch?v=2m-xKedAYAk",
            url_sitio: "https://www.youtube.com/watch?v=2m-xKedAYAk",
            titulo: "Independencia del Paraguay",
            integrantes: "Mathias Quintana"
        },
        {
            categoria: "historia",
            imagen: "https://drive.google.com/file/d/1EuNCbkGoz4UM_7DNQYNDtTPw4_0PL_Fj/view?usp=sharing",
            url_sitio: "https://drive.google.com/file/d/1EuNCbkGoz4UM_7DNQYNDtTPw4_0PL_Fj/view?usp=sharing",
            titulo: "Dictadura de Alfredo Stroessner",
            integrantes: "Charlies Vera"
        },
        {
            categoria: "musica",
            imagen: "https://www.tiktok.com/@pasadovivo_py/video/7508915611347488005", 
            url_sitio: "https://www.tiktok.com/@pasadovivo_py/video/7508915611347488005",
            titulo: "Che kamba resa jajái",
            integrantes: "Denis Casco"
        },
        {
            categoria: "musica",
            imagen: "https://drive.google.com/file/d/107ULMHcejIylr1rpjy65thkwVuhi1hqB/view?usp=sharing", 
            url_sitio: "https://drive.google.com/file/d/107ULMHcejIylr1rpjy65thkwVuhi1hqB/view?usp=sharing",
            titulo: "A mi Tierra",
            integrantes: "Nayeli Silvero"
        },
        {
            categoria: "musica",
            imagen: "https://drive.google.com/file/d/1yov7hNjW2tEGSeZtyz4rkpTSBXHO794c/view?usp=drive_link", 
            url_sitio: "https://drive.google.com/file/d/1yov7hNjW2tEGSeZtyz4rkpTSBXHO794c/view?usp=drive_link",
            titulo: "Tujami",
            integrantes: "Liz López"
        },
        {
            categoria: "musica",
            imagen: "https://www.tiktok.com/@pasadovivo_py/video/7508180937524514054?_r=1&_t=ZM-90zETroAY9I", 
            url_sitio: "https://www.tiktok.com/@pasadovivo_py/video/7508180937524514054?_r=1&_t=ZM-90zETroAY9I",
            titulo: "13 Tuyutí",
            integrantes: "Lucas Brítez"
        },
        {
            categoria: "musica",
            imagen: "https://www.tiktok.com/@pasadovivo_py/video/7513335542478671109?is_from_webapp=1&web_id=7528930583880271366", 
            url_sitio: "https://www.tiktok.com/@pasadovivo_py/video/7513335542478671109?is_from_webapp=1&web_id=7528930583880271366",
            titulo: "Galopera",
            integrantes: "Mauricio Galeano"
        },
        {
            categoria: "musica",
            imagen: "https://www.youtube.com/watch?v=48k4iBggfuQ", 
            url_sitio: "https://www.youtube.com/watch?v=48k4iBggfuQ",
            titulo: "Campamento Cerro León",
            integrantes: "Magalí Ramírez"
        },
        {
            categoria: "musica",
            imagen: "https://www.youtube.com/watch?v=NEYgSNWAR84", 
            url_sitio: "https://www.youtube.com/watch?v=NEYgSNWAR84",
            titulo: "India",
            integrantes: "Fabio López"
        },
        {
            categoria: "musica",
            imagen: "https://drive.google.com/file/d/1JW6Yxck-1SKFo6F3UNsr20oi0i-NHc36/view?usp=sharing", 
            url_sitio: "https://drive.google.com/file/d/1JW6Yxck-1SKFo6F3UNsr20oi0i-NHc36/view?usp=sharing",
            titulo: "Ñemity",
            integrantes: "Yadira Rivas"
        },
        {
            categoria: "musica",
            imagen: "https://www.youtube.com/watch?v=xRMskSxftk0", 
            url_sitio: "https://www.youtube.com/watch?v=xRMskSxftk0",
            titulo: "Mborayhu Asy",
            integrantes: "Elias Armoa"
        },
        {
            categoria: "musica",
            imagen: "https://drive.google.com/file/d/13puzhgbWCcl1F9GMQ8NHiWTaB_D3Gukd/view?usp=drive_link", 
            url_sitio: "https://drive.google.com/file/d/13puzhgbWCcl1F9GMQ8NHiWTaB_D3Gukd/view?usp=drive_link",
            titulo: "Mi guitarra y mi voz",
            integrantes: "Luana Rolón"
        },
        {
            categoria: "musica",
            imagen: "https://www.youtube.com/watch?v=qTIPINFdGLA", 
            url_sitio: "https://www.youtube.com/watch?v=qTIPINFdGLA",
            titulo: "Pájaro Choguy",
            integrantes: "Fernando Bogado"
        },
        {
            categoria: "musica",
            imagen: "https://www.youtube.com/watch?v=umoxoEItcMc", 
            url_sitio: "https://www.youtube.com/watch?v=umoxoEItcMc",
            titulo: "Mis noches sin ti",
            integrantes: "Yanina Miranda"
        },
        {
            categoria: "musica",
            imagen: "https://www.youtube.com/watch?v=HMJelY6slYo", 
            url_sitio: "https://www.youtube.com/watch?v=HMJelY6slYo",
            titulo: "Recuerdos de Ypacaraí",
            integrantes: "Isana Gómez"
        },
        {
            categoria: "musica",
            imagen: "https://drive.google.com/file/d/1UkBNFhvr7bQ0xjCdYiWPiuVCECcNV6Mh/view?usp=drive_link", 
            url_sitio: "https://drive.google.com/file/d/1UkBNFhvr7bQ0xjCdYiWPiuVCECcNV6Mh/view?usp=drive_link",
            titulo: "Guavira Poty",
            integrantes: "Charlies Vera"
        },
        {
            categoria: "musica",
            imagen: "https://drive.google.com/file/d/1PTJ-bFV8CeQYPXXlh8D_8_xDJXS4EwFb/view?usp=drive_link", 
            url_sitio: "https://drive.google.com/file/d/1PTJ-bFV8CeQYPXXlh8D_8_xDJXS4EwFb/view?usp=drive_link",
            titulo: "A mi tierra",
            integrantes: "Ivan Alderete"
        },
        {
            categoria: "musica",
            imagen: "https://drive.google.com/file/d/1YEG7561Oj_6Cgsz82F9bF-BpvAJtasZj/view?usp=drive_link", 
            url_sitio: "https://drive.google.com/file/d/1YEG7561Oj_6Cgsz82F9bF-BpvAJtasZj/view?usp=drive_link",
            titulo: "Mamama",
            integrantes: "Alexia Rodas"
        },
        {
            categoria: "musica",
            imagen: "https://www.tiktok.com/@pasadovivo_py/video/7510033254464965894?_r=1&_t=ZM-90zFMzMHdTo", 
            url_sitio: "https://www.tiktok.com/@pasadovivo_py/video/7510033254464965894?_r=1&_t=ZM-90zFMzMHdTo",
            titulo: "Rohecha che morena",
            integrantes: "María José Gómez"
        },
        {
            categoria: "musica",
            imagen: "https://drive.google.com/file/d/1ykuZasdVKK11O6gGjM9yoSldMNL9RnVT/view?usp=drivesdk", 
            url_sitio: "https://drive.google.com/file/d/1ykuZasdVKK11O6gGjM9yoSldMNL9RnVT/view?usp=drivesdk",
            titulo: "Mokoi Guyrai",
            integrantes: "Lucas Giménez"
        },
        {
            categoria: "musica",
            imagen: "https://www.tiktok.com/@pasadovivo_py/video/7510705855252204805?_r=1&_t=ZM-90zOa0F3SmZ", 
            url_sitio: "https://www.tiktok.com/@pasadovivo_py/video/7510705855252204805?_r=1&_t=ZM-90zOa0F3SmZ",
            titulo: "Nde rendape aju",
            integrantes: "Ayelen Vera"
        },
        {
            categoria: "musica",
            imagen: "https://www.youtube.com/watch?v=8M8dTwe_YiM", 
            url_sitio: "https://www.youtube.com/watch?v=8M8dTwe_YiM",
            titulo: "Himno Nacional Paraguayo",
            integrantes: "Lucas Portillo"
        },
        {
            categoria: "musica",
            imagen: "https://drive.google.com/file/d/14MYppGS2IsGoseOChkIQwcr2Qcth5QWY/view?usp=drive_link", 
            url_sitio: "https://drive.google.com/file/d/14MYppGS2IsGoseOChkIQwcr2Qcth5QWY/view?usp=drive_link",
            titulo: "Pajaro Campana",
            integrantes: "Tatiana Ocampo"
        },
        {
            categoria: "musica",
            imagen: "https://drive.google.com/file/d/1VLjJ0O5TAVfCu7K8qRk1rZTlciGvHoEg/view?usp=sharing", 
            url_sitio: "https://drive.google.com/file/d/1VLjJ0O5TAVfCu7K8qRk1rZTlciGvHoEg/view?usp=sharing",
            titulo: "Che Pyhare Mombyry",
            integrantes: "Mathias Quintana"
        },
        {
            categoria: "musica",
            imagen: "https://drive.google.com/file/d/1buM5uYhLDzHNL7qFCGjBQ4jq1s8dUBya/view?usp=sharing", 
            url_sitio: "https://drive.google.com/file/d/1buM5uYhLDzHNL7qFCGjBQ4jq1s8dUBya/view?usp=sharing",
            titulo: "Che la reina",
            integrantes: "Luana Martínez"
        },
        {
            categoria: "musica",
            imagen: "https://drive.google.com/file/d/1RZWFZQ_0WrxwpX0fiiV9NmOa5yO5DEYR/view?usp=sharing", 
            url_sitio: "https://drive.google.com/file/d/1RZWFZQ_0WrxwpX0fiiV9NmOa5yO5DEYR/view?usp=sharing",
            titulo: "Anahí",
            integrantes: "Sharise Cabaña"
        },
        {
            categoria: "musica",
            imagen: "https://drive.google.com/file/d/1n5XpX4q5_1rkmlq8WqRrI9mTCAI3iKWr/view?usp=sharing", 
            url_sitio: "https://drive.google.com/file/d/1n5XpX4q5_1rkmlq8WqRrI9mTCAI3iKWr/view?usp=sharing",
            titulo: "Paraguaya Linda",
            integrantes: "Karina Benítez"
        }
    ]
};

// Referencias del DOM (Sin cambios)
const gallery = document.getElementById('projects-gallery');
const tabButtons = document.querySelectorAll('.tab-button');
const loadingMessage = document.getElementById('loading-message');


/**
 * Función auxiliar para convertir URLs de video a un iframe embed.
 * @param {string} url - La URL del video (YouTube, Google Drive o TikTok).
 * @param {string} title - Título del proyecto.
 * @returns {string} - El código HTML del iframe o una cadena vacía si no es video.
 */
function getEmbedHtml(url, title) {
    // 1. YouTube
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
        const videoIdMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|.+\?v=))([^&]*)/);
        const videoId = videoIdMatch ? videoIdMatch[1] : null;

        if (videoId) {
            return `<iframe 
                        src="https://www.youtube.com/embed/${videoId}" 
                        title="Video de YouTube: ${title}" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                        class="project-image video-embed"
                    ></iframe>`;
        }
    } 
    // 2. Google Drive
    else if (url.includes('drive.google.com') && url.includes('/view')) {
        const fileIdMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)\/view/);
        const fileId = fileIdMatch ? fileIdMatch[1] : null;

        if (fileId) {
            return `<iframe 
                        src="https://drive.google.com/file/d/${fileId}/preview" 
                        title="Video de Google Drive: ${title}" 
                        frameborder="0" 
                        allowfullscreen
                        class="project-image video-embed drive-embed"
                    ></iframe>`;
        }
    } 
    // 3. TikTok (¡NUEVO!)
    else if (url.includes('tiktok.com')) {
        // La URL de incrustación de TikTok es compleja y requiere un OEmbed o un script.
        // La forma más simple para un iframe directo es extraer el ID del video y usar el formato embed.
        // Formato: https://www.tiktok.com/@user/video/VIDEO_ID
        const videoIdMatch = url.match(/\/video\/(\d+)/);
        const videoId = videoIdMatch ? videoIdMatch[1] : null;

        if (videoId) {
            // TikTok requiere un script externo o usar el formato de iframe básico con el video ID
            // Nota: Este iframe solo funciona bien con el script de TikTok en la página o si el navegador lo permite.
            // Para una incrustación más robusta, se usaría la API de OEmbed de TikTok.
            // Usaremos una URL simplificada para incrustar el video:
            return `<iframe 
                        src="https://www.tiktok.com/embed/v2/${videoId}?lang=es-ES" 
                        title="Video de TikTok: ${title}" 
                        frameborder="0" 
                        allowfullscreen
                        scrolling="no"
                        class="project-image video-embed tiktok-embed"
                    ></iframe>`;
        }
    }

    // Si no es un formato de video conocido, se retorna vacío
    return '';
}

/**
 * Función para crear el HTML de una tarjeta de proyecto. (Ahora incluye el ícono de enlace para URL_Sitio)
 */
function createProjectCard(project) {
    const embedHtml = getEmbedHtml(project.imagen, project.titulo);
    let mediaContent;

    if (embedHtml) {
        // Si se generó el iframe (video), úsalo como contenido multimedia
        mediaContent = embedHtml;
    } else if (project.imagen && project.imagen.toString().trim() !== '') {
        // Si no es un video incrustable y la URL de imagen no está vacía, crea la etiqueta <img>
        mediaContent = `<img src="${project.imagen}" alt="Miniatura del proyecto ${project.titulo}" class="project-image">`;
    } else {
        // Si el campo imagen está vacío, NO incluir elemento de imagen
        mediaContent = '';
    }
    
    // Si existe una URL de sitio, envolveremos la tarjeta completa en un <a>
    const hasSite = project.url_sitio && project.url_sitio.toString().trim() !== '';
    const wrapperStart = hasSite ? `<a href="${project.url_sitio}" target="_blank" rel="noopener noreferrer" class="project-card-link">` : '';
    const wrapperEnd = hasSite ? `</a>` : '';

    return `
        ${wrapperStart}
        <div class="project-card">
            <div class="media-container">
                ${mediaContent}
            </div>
            <div class="card-content">
                <h3>${project.titulo}</h3>
                <p>Integrantes: <strong>${project.integrantes}</strong></p>
            </div>
        </div>
        ${wrapperEnd}
    `;
}

// ... (El resto de las funciones y la inicialización de JS permanecen sin cambios) ...

/**
 * Muestra la galería de proyectos para una categoría específica.
 * @param {string} category - Nombre de la categoría a mostrar.
 */
function displayProjects(category) {
    const projects = projectsData[category];
    
    if (loadingMessage) {
        loadingMessage.style.display = 'none';
    }

    if (!projects || projects.length === 0) {
        gallery.innerHTML = `<p style="text-align: center; color: var(--light-accent);">No hay proyectos disponibles en la categoría "${category}".</p>`;
        return;
    }

    // Si la categoría es "Videos con IA", agrupamos por la propiedad `categoria`
    if (category === "Videos con IA") {
        const historia = projects.filter(p => (p.categoria || '').toString().toLowerCase() === 'historia');
        const musica = projects.filter(p => (p.categoria || '').toString().toLowerCase() === 'musica');

        const makeSection = (title, items) => {
            if (!items || items.length === 0) return '';
            const cards = items.map(createProjectCard).join('');
            return `
                <section class="ia-section">
                    <div class="ia-category-header">
                        <h2 class="ia-title">${title}</h2>
                        <div class="ia-divider" aria-hidden="true"></div>
                    </div>
                    <div class="gallery-grid">
                        ${cards}
                    </div>
                </section>
            `;
        };

        // Orden: Historia luego Música (si existen)
        const parts = [];
        if (historia.length) parts.push(makeSection('Historia del Paraguay', historia));
        if (musica.length) parts.push(makeSection('Música Paraguaya', musica));

        // Si no se encuentran items en ninguna subcategoría, fallback a la lista completa
        if (parts.length === 0) {
            gallery.innerHTML = projects.map(createProjectCard).join('');
        } else {
            // Envolver las secciones en un contenedor columnar para forzar apilamiento
            gallery.innerHTML = `
                <div class="ia-sections-container">
                    ${parts.join('<div class="ia-small-sep"></div>')}
                </div>
            `;
        }

        return;
    }

    const cardsHTML = projects.map(createProjectCard).join('');

    // Si la categoría es E-commerces, mostramos primero un recuadro informativo
    if (category === "E-commerces") {
        const adminInfoBoxHtml = `
            <div class="admin-info-box" role="note" aria-label="Información de acceso admin">
                <div class="admin-info-inner">
                    <h3 class="admin-info-title">Acceso administrador</h3>
                    <p class="admin-info-text">Para acceder como admin usar los siguientes datos:</p>
                    <ul class="admin-cred-list">
                        <li><strong>Usuario:</strong> admin</li>
                        <li><strong>Correo:</strong> admin@gmail.com</li>
                        <li><strong>Contraseña:</strong> admin1234</li>
                    </ul>
                </div>
            </div>
        `;

        // Eliminar cualquier recuadro existente para evitar duplicados
        const existingBox = document.querySelector('.admin-info-box');
        if (existingBox) existingBox.remove();

        // Crear el elemento y colocarlo ANTES de la galería (como hermano) para que quede por encima
        const wrapper = document.createElement('div');
        wrapper.innerHTML = adminInfoBoxHtml.trim();
        const adminElement = wrapper.firstElementChild;
        if (gallery.parentNode && adminElement) {
            gallery.parentNode.insertBefore(adminElement, gallery);
        }

        // Rellenar solo la galería con las tarjetas (sin incluir el recuadro dentro)
        gallery.innerHTML = `<div class="gallery-grid">${cardsHTML}</div>`;
    } else {
        // Al cambiar de categoría, eliminar el recuadro si existe
        const existingBox = document.querySelector('.admin-info-box');
        if (existingBox) existingBox.remove();
        gallery.innerHTML = cardsHTML;
    }
}


// --- INICIALIZACIÓN Y LISTENERS (Sin cambios) ---


// --- Búsqueda de proyectos ---
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.tabs-container').addEventListener('click', handleTabClick);

    const initialCategory = tabButtons[0].dataset.category;
    displayProjects(initialCategory);

    // Búsqueda
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');

    function filterProjects() {
        const query = searchInput.value.trim().toLowerCase();
        const activeTab = document.querySelector('.tab-button.active');
        const category = activeTab ? activeTab.dataset.category : (tabButtons[0] && tabButtons[0].dataset.category);

        // Si no hay categoría activa, salir
        if (!category) return;

        // Si la query está vacía, restauramos la vista completa de la categoría
        if (!query) {
            displayProjects(category);
            return;
        }

        const projects = projectsData[category] || [];

        const matches = (p) => {
            const title = (p.titulo || '').toString().toLowerCase();
            const integrantes = (p.integrantes || '').toString().toLowerCase();
            return title.includes(query) || integrantes.includes(query);
        };

        // Manejo especial para "Videos con IA" (mantener la agrupación)
        if (category === 'Videos con IA') {
            const historiaAll = projects.filter(p => (p.categoria || '').toString().toLowerCase() === 'historia');
            const musicaAll = projects.filter(p => (p.categoria || '').toString().toLowerCase() === 'musica');

            const historia = historiaAll.filter(matches);
            const musica = musicaAll.filter(matches);

            const makeSection = (title, items) => {
                if (!items || items.length === 0) return '';
                const cards = items.map(createProjectCard).join('');
                return `\n                <section class="ia-section">\n                    <div class="ia-category-header">\n                        <h2 class="ia-title">${title}</h2>\n                        <div class="ia-divider" aria-hidden="true"></div>\n                    </div>\n                    <div class="gallery-grid">\n                        ${cards}\n                    </div>\n                </section>\n            `;
            };

            const parts = [];
            if (historia.length) parts.push(makeSection('Historia del Paraguay', historia));
            if (musica.length) parts.push(makeSection('Música Paraguaya', musica));

            if (parts.length === 0) {
                gallery.innerHTML = '';
                const msg = document.createElement('p');
                msg.id = 'no-results-message';
                msg.textContent = 'No se encontraron proyectos.';
                msg.style.textAlign = 'center';
                msg.style.color = '#888';
                gallery.appendChild(msg);
            } else {
                gallery.innerHTML = `\n                <div class="ia-sections-container">\n                    ${parts.join('<div class="ia-small-sep"></div>')}\n                </div>`;
            }

            return;
        }

        // Para las demás categorías filtramos y renderizamos desde los datos
        const filtered = projects.filter(matches);

        if (filtered.length === 0) {
            // Mostrar mensaje de no resultados
            gallery.innerHTML = '';
            const msg = document.createElement('p');
            msg.id = 'no-results-message';
            msg.textContent = 'No se encontraron proyectos.';
            msg.style.textAlign = 'center';
            msg.style.color = '#888';
            gallery.appendChild(msg);
            return;
        }

        // Construir tarjetas filtradas
        const cards = filtered.map(createProjectCard).join('');

        // Si estamos en E-commerces, asegurarnos de que el recuadro admin exista POR ENCIMA
        if (category === 'E-commerces') {
            const existingBox = document.querySelector('.admin-info-box');
            if (!existingBox) {
                const adminInfoBoxHtml = `
                    <div class="admin-info-box" role="note" aria-label="Información de acceso admin">
                        <div class="admin-info-inner">
                            <h3 class="admin-info-title">Acceso administrador</h3>
                            <p class="admin-info-text">Para acceder como admin usar los siguientes datos:</p>
                            <ul class="admin-cred-list">
                                <li><strong>Correo:</strong> admin@gmail.com</li>
                                <li><strong>Contraseña:</strong> admin1234</li>
                            </ul>
                        </div>
                    </div>
                `;
                const wrapper = document.createElement('div');
                wrapper.innerHTML = adminInfoBoxHtml.trim();
                const adminElement = wrapper.firstElementChild;
                if (gallery.parentNode && adminElement) gallery.parentNode.insertBefore(adminElement, gallery);
            }
            gallery.innerHTML = `<div class="gallery-grid">${cards}</div>`;
        } else {
            // Asegurar limpieza del recuadro admin si existiera
            const existingBox = document.querySelector('.admin-info-box');
            if (existingBox) existingBox.remove();
            gallery.innerHTML = `<div class="gallery-grid">${cards}</div>`;
        }
    }

    searchBtn?.addEventListener('click', filterProjects);
    searchInput?.addEventListener('input', filterProjects);
    searchInput?.addEventListener('keydown', e => {
        if (e.key === 'Enter') filterProjects();
    });
});

function handleTabClick(e) {
    if (!e.target.classList.contains('tab-button')) return;

    const selectedCategory = e.target.dataset.category;

    tabButtons.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');

    displayProjects(selectedCategory);
}
