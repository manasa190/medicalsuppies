const productsData = [

    // ── 1. Diagnostic Equipment ──────────────────────────────────────
    { categoryId: "diagnostic", badge: "Diagnostic", name: "AED (Defibrillator)", desc: "Life-saving cardiac arrest response device.", price: "₹65,000", image: "1.png" },
    { categoryId: "diagnostic", badge: "Diagnostic", name: "ECG Machine (3-Ch)", desc: "3-Channel cardiac monitoring system.", price: "₹32,500", image: "2.png" },
    { categoryId: "diagnostic", badge: "Diagnostic", name: "ECG Machine (12-Ch)", desc: "12-Channel advanced ECG for full cardiac analysis.", price: "₹55,000", image: "3.png" },
    { categoryId: "diagnostic", badge: "Diagnostic", name: "Stethoscope", desc: "Premium Littmann acoustic stethoscope.", price: "₹8,900", image: "4.png" },
    { categoryId: "diagnostic", badge: "Diagnostic", name: "Pulse Oximeter", desc: "Fingertip SpO2 and pulse rate monitor.", price: "₹810", image: "5.png" },
    { categoryId: "diagnostic", badge: "Diagnostic", name: "Glucose Monitor", desc: "Fast blood glucose monitoring device.", price: "₹360", image: "6.png" },
    { categoryId: "diagnostic", badge: "Diagnostic", name: "ECG Electrodes (Pack)", desc: "High-adhesion ECG monitoring electrodes.", price: "₹350", image: "7.png" },

    // ── 2. Monitoring Equipment ──────────────────────────────────────
    { categoryId: "monitoring", badge: "Monitoring", name: "Patient Monitor", desc: "Multi-parameter ICU and ward patient monitor.", price: "₹12,199", image: "8.png" },

    // ── 3. Hospital Furniture ────────────────────────────────────────
    { categoryId: "furniture", badge: "Furniture", name: "Electric ICU Bed", desc: "Smart multi-function electric bed (SmartCare).", price: "₹58,669", image: "9.png" },
    { categoryId: "furniture", badge: "Furniture", name: "Semi-Fowler Bed", desc: "Adjustable hospital bed for ward use.", price: "₹17,021", image: "10.png" },
    { categoryId: "furniture", badge: "Mobility", name: "Wheelchair (Manual)", desc: "Durable manual wheelchair by Hero.", price: "₹8,500", image: "11.png" },
    { categoryId: "furniture", badge: "Mobility", name: "Commode Chair", desc: "Sturdy commode chair for patient care.", price: "₹1,800", image: "12.png" },
    { categoryId: "furniture", badge: "Mobility", name: "Crutches (Pair)", desc: "Lightweight alloy adjustable crutches.", price: "₹1,125", image: "13.png" },
    { categoryId: "furniture", badge: "Mobility", name: "Walking Frame", desc: "Stable walking frame for rehabilitation.", price: "₹2,200", image: "14.png" },

    // ── 4. Physiotherapy Equipment ───────────────────────────────────
    { categoryId: "physiotherapy", badge: "Physio", name: "IFT Machines", desc: "Interferential Therapy for pain relief.", price: "₹6,500", image: "15.png" },
    { categoryId: "physiotherapy", badge: "Physio", name: "Ultrasound Therapy", desc: "Deep tissue healing equipment.", price: "₹17,500", image: "16.png" }

];

document.addEventListener('DOMContentLoaded', () => {
    const categories = ['diagnostic', 'monitoring', 'furniture', 'physiotherapy'];


    categories.forEach(cat => {
        const grid = document.getElementById(`grid-${cat}`);
        if (!grid) return;

        const catProducts = productsData.filter(p => p.categoryId === cat);
        grid.innerHTML = catProducts.map(p => `
            <div class="product-card">
                <div class="product-card-img">
                    <img src="images/products/${p.image}" alt="${p.name}">
                    <span class="product-badge">${p.badge}</span>
                </div>
                <div class="product-card-body">
                    <h4>${p.name}</h4>
                    <p>${p.desc}</p>
                    <div class="product-card-footer">
                        <span class="product-price">${p.price}</span>
                        <a href="contact.html?product=${encodeURIComponent(p.name)}" class="product-quote-btn">Quote</a>
                    </div>
                </div>
            </div>
        `).join('');
    });
});

