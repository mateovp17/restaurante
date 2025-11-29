// ==================== Función para cambiar idioma ====================
function changeLanguage() {
    const lang = document.getElementById('language').value;

    // ================= Header =================
    const headerText = document.getElementById('header-text');
    headerText.textContent = lang === 'es' ? "Sabores auténticos del Perú cerca de Tarragona" :
                             lang === 'en' ? "Authentic Peruvian flavors near Tarragona" :
                             lang === 'ca' ? "Sabors autèntics del Perú prop de Tarragona" :
                             "Saveurs péruviennes authentiques près de Tarragone";

    // ================= Botones de navegación =================
    const menuButtons = document.querySelectorAll('.menu-nav span');
    menuButtons.forEach(btn => {
        if(btn.textContent.includes('Carta') || btn.textContent.includes('Menu')) {
            btn.textContent = lang === 'es' ? "Carta" :
                              lang === 'en' ? "Menu" :
                              lang === 'ca' ? "Carta" :
                              "Menu";
        } else if(btn.textContent.includes('Sobre')) {
            btn.textContent = lang === 'es' ? "Sobre Nosotros" :
                              lang === 'en' ? "About Us" :
                              lang === 'ca' ? "Sobre Nosaltres" :
                              "À propos";
        } else if(btn.textContent.includes('Contacto')) {
            btn.textContent = lang === 'es' ? "Contacto" :
                              lang === 'en' ? "Contact" :
                              lang === 'ca' ? "Contacte" :
                              "Contact";
        }
    });

    // ================= Sección Sobre Nosotros =================
    document.getElementById('sobre-nosotros-title').textContent = lang === 'es' ? "Sobre Nosotros" :
                                                                  lang === 'en' ? "About Us" :
                                                                  lang === 'ca' ? "Sobre Nosaltres" :
                                                                  "À propos";

    document.getElementById('sobre-nosotros-text').textContent = lang === 'es' ? 
        "Somos un restaurante peruano tradicional con un toque moderno, ofreciendo los mejores sabores del Perú cerca de Tarragona." :
        lang === 'en' ? "We are a traditional Peruvian restaurant with a modern touch, offering the best flavors of Peru near Tarragona." :
        lang === 'ca' ? "Som un restaurant peruà tradicional amb un toc modern, oferint els millors sabors del Perú prop de Tarragona." :
        "Nous sommes un restaurant péruvien traditionnel avec une touche moderne, offrant les meilleures saveurs du Pérou près de Tarragone.";

    // ================= Sección Contacto =================
    document.getElementById('contacto-title').textContent = lang === 'es' ? "Contacto" :
                                                            lang === 'en' ? "Contact" :
                                                            lang === 'ca' ? "Contacte" :
                                                            "Contact";

    document.getElementById('direccion-text').textContent = lang === 'es' ? "Dirección: Tarragona, España" :
                                                              lang === 'en' ? "Address: Tarragona, Spain" :
                                                              lang === 'ca' ? "Adreça: Tarragona, Espanya" :
                                                              "Adresse : Tarragone, Espagne";

    document.getElementById('telefono-text').textContent = lang === 'es' ? "Teléfono: +34 600 000 000" :
                                                              lang === 'en' ? "Phone: +34 600 000 000" :
                                                              lang === 'ca' ? "Telèfon: +34 600 000 000" :
                                                              "Téléphone : +34 600 000 000";

    document.getElementById('email-text').textContent = lang === 'es' ? "Email: info@restaurante.com" :
                                                          lang === 'en' ? "Email: info@restaurant.com" :
                                                          lang === 'ca' ? "Correu: info@restaurante.com" :
                                                          "Email : info@restaurant.com";

    // ================= Categorías =================
    document.getElementById('entrantes-title').textContent = lang === 'es' ? "Entrantes y Anticuchos" :
                                                              lang === 'en' ? "Starters & Anticuchos" :
                                                              lang === 'ca' ? "Entrants i Anticuchos" :
                                                              "Entrées et Anticuchos";

    document.getElementById('ceviches-title').textContent = lang === 'es' ? "Ceviches y Tiraditos" :
                                                             lang === 'en' ? "Ceviches & Tiraditos" :
                                                             lang === 'ca' ? "Ceviches i Tiraditos" :
                                                             "Ceviches et Tiraditos";

    // ================= Platos Entrantes =================
    document.getElementById('anticucho-name').textContent = lang === 'es' ? "Anticuchos de Pollo" :
                                                            lang === 'en' ? "Chicken Anticuchos" :
                                                            lang === 'ca' ? "Anticuchos de Pollastre" :
                                                            "Anticuchos de Poulet";
    document.getElementById('anticucho-desc').textContent = lang === 'es' ? 
        "Brochetas de pollo marinadas con ají amarillo y especias, acompañadas de papas doradas." : 
        lang === 'en' ? "Chicken skewers marinated with yellow chili and spices, served with golden potatoes." :
        lang === 'ca' ? "Broquetes de pollastre marinades amb bitxo groc i espècies, acompanyades de patates daurades." :
        "Brochettes de poulet marinées au piment jaune et aux épices, servies avec des pommes de terre dorées."; 

    document.getElementById('causa-name').textContent = lang === 'es' ? "Causa Limeña" :
                                                        lang === 'en' ? "Causa Limeña" :
                                                        lang === 'ca' ? "Causa Limeña":
                                                        "Causa Limeña";
    document.getElementById('causa-desc').textContent = lang === 'es' ? 
        "Puré de papa amarilla sazonado con limón, relleno de pollo o atún, decorado con aceitunas y huevo." : 
        lang === 'en' ? "Yellow potato purée seasoned with lemon, stuffed with chicken or tuna, garnished with olives and egg." :
        lang === 'ca' ? "Purée de patata groga amanit amb llimona, farcit de pollastre o tonyina, decorat amb olives i ou." :
        "Purée de pomme de terre jaune assaisonnée de citron, farcie de poulet ou de thon, garnie d'olives et d'œuf.";

    document.getElementById('ajidegallina-name').textContent = lang === 'es' ? "Ají de Gallina" :
                                                              lang === 'en' ? "Ají de Gallina" :
                                                              lang === 'ca' ? "Ají de Gallina": 
                                                              "Ají de Gallina";
    document.getElementById('ajidegallina-desc').textContent = lang === 'es' ? 
        "Pollo deshilachado en salsa de ají amarillo y nueces, acompañado de arroz blanco y papa sancochada." :
        lang === 'en' ? "Shredded chicken in yellow chili and walnut sauce, served with white rice and boiled potatoes." :
        lang === 'ca' ?  "Pollastre esfilagarsat en salsa de bitxo groc i nous, acompanyat d'arròs blanc i patata bullida.":
        "Poulet effiloché dans une sauce au piment jaune et aux noix, servi avec du riz blanc et des pommes de terre bouillies.";   

    document.getElementById('tamal-name').textContent = lang === 'es' ? "Tamal Peruano" :
                                                        lang === 'en' ? "Peruvian Tamal" :
                                                        lang === 'ca' ? "Tamal Peruà":
                                                        "Tamal Péruvien";
    document.getElementById('tamal-desc').textContent = lang === 'es' ? 
        "Masa de maíz rellena de carne y especias, cocida al vapor en hoja de plátano." :
        lang === 'en' ? "Corn dough filled with meat and spices, steamed in banana leaf." :
        lang === 'ca' ? "Massa de blat de moro farcida de carn i espècies, cuita al vapor en fulla de plàtan.":
        "Pâte de maïs farcie de viande et d'épices, cuite à la vapeur dans une feuille de bananier.";

    document.getElementById('lomo-name').textContent = lang === 'es' ? "Lomo Saltado" :
                                                    lang === 'en' ? "Lomo Saltado" :
                                                    lang === 'ca' ? "Llom Saltat":
                                                    "Lomo Sauté";
    document.getElementById('lomo-desc').textContent = lang === 'es' ? 
        "Tiras de carne salteadas con cebolla, tomate y papas fritas, servido con arroz." :
        lang === 'en' ? "Strips of beef sautéed with onion, tomato, and fries, served with rice." :
        lang === 'ca' ? "Tires de carn saltades amb ceba, tomàquet i patates fregides, servit amb arròs.":
        "Lanières de bœuf sautées avec oignon, tomate et frites, servies avec du riz.";

    // ================= Platos Ceviches =================
    document.getElementById('ceviche-clasico-name').textContent = lang === 'es' ? "Ceviche Clásico" :
                                                                  lang === 'en' ? "Classic Ceviche" :
                                                                  lang === 'ca' ? "Ceviche Clàssic" :
                                                                  "Ceviche Classique";
    document.getElementById('ceviche-clasico-desc').textContent = lang === 'es' ? 
        "Pescado fresco marinado en limón con cebolla, cilantro y ají amarillo." : 
        lang === 'en' ? "Fresh fish marinated in lime with onion, cilantro, and yellow chili." :
        lang === 'ca' ? "Peix fresc marinat amb llima, ceba, coriandre i bitxo groc." :
        "Poisson frais mariné au citron vert avec oignon, coriandre et piment jaune.";

    document.getElementById('ceviche-mixto-name').textContent = lang === 'es' ? "Ceviche Mixto" :
                                                                 lang === 'en' ? "Mixed Ceviche" :
                                                                 lang === 'ca' ? "Ceviche Mixt" :
                                                                 "Ceviche Mixte";
    document.getElementById('ceviche-mixto-desc').textContent = lang === 'es' ? 
        "Mezcla de pescado y mariscos frescos, acompañado de choclo y camote." : 
        lang === 'en' ? "Mix of fresh fish and seafood, served with corn and sweet potato." :
        lang === 'ca' ? "Barreja de peix i marisc fresc, acompanyat de blat de moro i moniato." :
        "Mélange de poisson et de fruits de mer frais, servi avec du maïs et de la patate douce.";

    document.getElementById('tiradito-name').textContent = lang === 'es' ? "Tiradito de Atún" :
                                                            lang === 'en' ? "Tuna Tiradito" :
                                                            lang === 'ca' ? "Tiradito de Tonyina" :
                                                            "Tiradito de Thon";
    document.getElementById('tiradito-desc').textContent = lang === 'es' ? 
        "Láminas de atún fresco con salsa de limón y ají amarillo." :
        lang === 'en' ? "Slices of fresh tuna with lime and yellow chili sauce." :
        lang === 'ca' ? "Llesques de tonyina fresca amb salsa de llima i bitxo groc." :
        "Tranches de thon frais avec sauce au citron vert et piment jaune.";

    document.getElementById('pulpo-name').textContent = lang === 'es' ? "Ceviche de Pulpo" :
                                                         lang === 'en' ? "Octopus Ceviche" :
                                                         lang === 'ca' ? "Ceviche de Pop" :
                                                         "Ceviche de Poulpe";
    document.getElementById('pulpo-desc').textContent = lang === 'es' ? 
        "Pulpo fresco en limón con aceite de oliva, cilantro y cebolla morada." :
        lang === 'en' ? "Fresh octopus marinated in lime with olive oil, cilantro, and red onion." :
        lang === 'ca' ? "Pop fresc marinat amb llima, oli d'oliva, coriandre i ceba vermella." :
        "Poulpe frais mariné au citron vert avec de l'huile d'olive, de la coriandre et de l'oignon rouge.";
}

// ==================== Función para mostrar secciones ====================
function showSection(sectionId) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(sec => {
        sec.style.display = sec.id === sectionId ? 'block' : 'none';
    });
}

// ==================== Función para expandir/cerrar categorías ====================
function toggleMenu(id) {
    const menu = document.getElementById(id);
    menu.style.display = menu.style.display === 'grid' ? 'none' : 'grid';
}