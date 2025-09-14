const destinations = [
    {
        id: "bali",
        title: "Bali",
        country: "Indonesia",
        theme: ["Beach", "Culture"],
        price: 7999,
        duration: 6,
        rating: 4.8,
    },
    {
        id: "santorini",
        title: "Santorini",
        country: "Greece",
        theme: ["Beach", "Honeymoon", "Culture"],
        price: 12999,
        duration: 5,
        rating: 4.7,
    },
    {
        id: "maldives",
        title: "Maldives",
        country: "Maldives",
        theme: ["Beach", "Luxury"],
        price: 19990,
        duration: 5,
        rating: 4.9,
    },
    {
        id: "dubai",
        title: "Dubai",
        country: "UAE",
        theme: ["Luxury", "Family"],
        price: 9999,
        duration: 4,
        rating: 4.6,
    },
    {
        id: "phuket",
        title: "Phuket",
        country: "Thailand",
        theme: ["Beach", "Adventure", "Family"],
        price: 8999,
        duration: 6,
        rating: 4.5,
    },
    {
        id: "mauritius",
        title: "Mauritius",
        country: "Mauritius",
        theme: ["Beach", "Honeymoon"],
        price: 14990,
        duration: 7,
        rating: 4.7,
    },
];
const featuredIds = [
    "bali",
    "santorini",
    "maldives",
    "dubai",
    "phuket",
    "mauritius",
];
const packages = [
    {
        id: "pkg-bali",
        title: "Bali Beaches & Temples",
        location: "Bali, Indonesia",
        days: 6,
        price: 7999,
        rating: 4.8,
        highlights: [
            "Uluwatu sunset",
            "Nusa Penida day trip",
            "Ubud rice terraces",
        ],
    },
    {
        id: "pkg-santorini",
        title: "Santorini Blue & White",
        location: "Santorini, Greece",
        days: 5,
        price: 12999,
        rating: 4.7,
        highlights: ["Caldera cruise", "Oia sunset", "Wine tasting"],
    },
    {
        id: "pkg-dubai",
        title: "Dubai Gold & Dunes",
        location: "Dubai, UAE",
        days: 4,
        price: 9999,
        rating: 4.6,
        highlights: ["Desert safari", "Burj Khalifa", "Dubai Marina"],
    },
];
const testimonials = [
    {
        id: 1,
        name: "Aisha K.",
        text: "Flawless planning and amazing local guides. Highly recommend!",
        rating: 5,
    },
    {
        id: 2,
        name: "Liam P.",
        text: "Great value and friendly support. Will book again!",
        rating: 5,
    },
    {
        id: 3,
        name: "Meera S.",
        text: "Loved the itinerary and hotels. Smooth experience.",
        rating: 4.5,
    },
];
const team = [
    { name: "ABC DEF", role: "Founder & CEO" },
    { name: "GHI JKL", role: "Head of Operations" },
    { name: "MNO PQR", role: "Travel Designer" },
    { name: "STU VWXYZ", role: "Customer Success" },
];
const blogPosts = [
    {
        id: "b1",
        title: "Top 7 Beach Escapes for 2025",
        category: "Tips",
        excerpt:
            "From Bali to the Maldives, here’s where to find sunshine and serenity...",
        date: "Aug 12",
    },
    {
        id: "b2",
        title: "How to Plan a Stress‑Free Family Trip",
        category: "Family",
        excerpt: "Smart packing, flexible plans, and kid‑friendly picks...",
        date: "Aug 2",
    },
    {
        id: "b3",
        title: "Honeymoon Ideas: Santorini vs. Mauritius",
        category: "Romance",
        excerpt: "Two dreamy picks, one unforgettable trip...",
        date: "Jul 21",
    },
    {
        id: "b4",
        title: "Budget Dubai: Yes, It’s Possible",
        category: "Budget",
        excerpt: "Food halls, metro hacks, and sunset spots...",
        date: "Jul 9",
    },
    {
        id: "b5",
        title: "When to Visit Bali",
        category: "Guides",
        excerpt: "Weather, crowds, and festival season...",
        date: "Jun 28",
    },
    {
        id: "b6",
        title: "Packing List: Tropics Edition",
        category: "Tips",
        excerpt: "Light, breathable, and sand‑proof...",
        date: "Jun 10",
    },
];

// State
let currentPage = "home";
let currentPageIndex = 1;
let filteredDestinations = [...destinations];
let blogGridView = true;
let currentPackage = {
    id: "pkg-bali",
    title: "Bali Beaches & Temples",
    location: "Bali, Indonesia",
    priceText: "₹79,999",
};

// Helpers
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
function navigate(page) {
    const pages = [
        "home",
        "destinations",
        "packages",
        "about",
        "blog",
        "contact",
    ];
    pages.forEach((p) => {
        document
            .getElementById(`page-${p}`)
            .classList.toggle("hidden", p !== page);
    });
    currentPage = page;
    toggleMobileMenu(false);
    scrollToTop();
    if (page === "home") {
        renderFeatured();
        renderCarousel();
        renderTestimonials();
    }
    if (page === "destinations") {
        renderDestinationGrid();
    }
    if (page === "packages") {
        renderPackageReviews();
    }
    if (page === "about") {
        renderTeam();
    }
    if (page === "blog") {
        renderBlog();
    }
    if (page === "contact") {
        /* none */
    }
}

// Header: mobile menu
function toggleMobileMenu(force) {
    const m = document.getElementById("mobileMenu");
    const open =
        force === undefined ? m.classList.contains("slide-hidden") : force;
    if (open) {
        m.classList.remove("slide-hidden", "opacity-0", "pointer-events-none");
        m.classList.add("slide-in");
    } else {
        m.classList.add("slide-hidden", "opacity-0", "pointer-events-none");
        m.classList.remove("slide-in");
    }
}

// Chat
function openChat() {
    document.getElementById("chatPanel").classList.remove("hidden");
}
function closeChat() {
    document.getElementById("chatPanel").classList.add("hidden");
}

// Enquiry modal
function openEnquiry() {
    // Prefill destination with current package title when on package page
    if (currentPage === "packages" && currentPackage?.title) {
        document.getElementById("qe-destination").value = currentPackage.title;
    }
    document.getElementById("enquiryModal").classList.remove("hidden");
}
function closeEnquiry() {
    document.getElementById("enquiryModal").classList.add("hidden");
}

// Build WhatsApp message and redirect
function submitQuickEnquiry() {
    const name = document.getElementById("qe-name").value.trim();
    const email = document.getElementById("qe-email").value.trim();
    const destination = document.getElementById("qe-destination").value.trim();
    const dates = document.getElementById("qe-dates").value;
    const msg = document.getElementById("qe-message").value.trim();

    if (!name || !email || !destination) {
        alert("Please fill your name, email, and destination.");
        return;
    }

    // Prefer current package context if available
    const pkgTitle = currentPackage?.title || destination;
    const pkgLocation = document.getElementById("pkgLocation")
        ? document.getElementById("pkgLocation").innerText
        : "";
    const pkgPrice = document.getElementById("pkgPriceText")
        ? document.getElementById("pkgPriceText").innerText
        : "";

    const text = `Solar Tourism Enquiry:
• Package: ${pkgTitle}
• Location: ${pkgLocation || "N/A"}
• Price: ${pkgPrice || "N/A"}

Traveler Details:
• Name: ${name}
• Email: ${email}
• Destination: ${destination}
• Dates: ${dates || "Flexible"}
• Notes: ${msg || "—"}

Please assist with availability and the best offer.`;

    const phone = "9322527567"; // CHANGE to your business WhatsApp number
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener");
    closeEnquiry();
}

// Quick book leads to enquiry -> WhatsApp
function quickBook() {
    openEnquiry();
}

// Hero search
function applySearch() {
    const dest = document.getElementById("search-destination").value.trim();
    const duration = document.getElementById("search-duration").value;
    const budget = document.getElementById("search-budget").value;
    navigate("destinations");
    if (dest) {
        filteredDestinations = destinations.filter((d) =>
            (d.title + " " + d.country)
                .toLowerCase()
                .includes(dest.toLowerCase())
        );
    } else {
        filteredDestinations = [...destinations];
    }
    if (duration !== "Any") {
        const dur = duration;
        filteredDestinations = filteredDestinations.filter((d) => {
            if (dur === "3-4 days") return d.duration <= 4;
            if (dur === "5-7 days") return d.duration >= 5 && d.duration <= 7;
            if (dur === "8-10 days") return d.duration >= 8 && d.duration <= 10;
            return true;
        });
    }
    if (budget !== "Any") {
        filteredDestinations = filteredDestinations.filter((d) => {
            if (budget === "Under ₹80,000") return d.price < 80000 / 100; // sample data scaled
            if (budget === "₹80,000 - ₹1,50,000")
                return d.price >= 80000 / 100 && d.price <= 150000 / 100;
            if (budget === "₹1,50,000+") return d.price > 150000 / 100;
            return true;
        });
    }
    currentPageIndex = 1;
    renderDestinationGrid();
}
function quickFilter(theme) {
    document.getElementById("search-destination").value = "";
    navigate("destinations");
    filteredDestinations = destinations.filter((d) => d.theme.includes(theme));
    currentPageIndex = 1;
    renderDestinationGrid();
}

// Home renders
function renderFeatured() {
    const grid = document.getElementById("featuredGrid");
    grid.innerHTML = "";
    featuredIds.forEach((id) => {
        const d = destinations.find((x) => x.id === id);
        if (!d) return;
        const card = document.createElement("div");
        card.className =
            "border rounded-2xl overflow-hidden card-shadow hover:-translate-y-0.5 transition bg-white";
        card.innerHTML = `
          <div class="relative aspect-[16/9] bg-slate-200 grid place-items-center text-slate-600">Destination Image
            <div class="absolute top-3 left-3 px-3 py-1 pill price-badge text-sm">₹${
                d.price
            }</div>
            <div class="absolute top-3 right-3 px-3 py-1 pill bg-white/90 text-slate-800 text-sm">${
                d.duration
            }D</div>
          </div>
          <div class="p-4">
            <div class="flex items-center justify-between">
              <div class="font-semibold">${d.title}</div>
              <div class="text-sm text-slate-500">${d.country}</div>
            </div>
            <div class="text-sm rating-star mt-1">★★★★★ <span class="text-slate-600 ml-1">${
                d.rating
            }</span></div>
            <div class="flex gap-2 mt-3">
              ${d.theme
                  .slice(0, 2)
                  .map(
                      (t) =>
                          `<span class="px-2 py-1 pill bg-slate-100 text-slate-700 text-xs">${t}</span>`
                  )
                  .join("")}
            </div>
            <div class="mt-4 flex items-center gap-2">
              <button class="px-3 py-2 rounded-lg bg-[var(--secondary)] text-white text-sm" onclick="openPackage('${
                  d.id
              }')">View Details</button>
              <button class="px-3 py-2 rounded-lg bg-[var(--primary)] text-white text-sm" onclick="quickBook()">Book Now</button>
            </div>
          </div>`;
        grid.appendChild(card);
    });
}
function renderCarousel() {
    const wrap = document.getElementById("packageCarousel");
    wrap.innerHTML = "";
    packages.forEach((p) => {
        const el = document.createElement("div");
        el.className =
            "min-w-[280px] max-w-[320px] snap-start border rounded-2xl overflow-hidden card-shadow bg-white";
        el.innerHTML = `
          <div class="relative aspect-[16/9] bg-slate-200 grid place-items-center text-slate-600">Package Image
            <div class="absolute top-3 left-3 px-3 py-1 pill price-badge text-sm">₹${
                p.price
            }</div>
            <div class="absolute top-3 right-3 px-3 py-1 pill bg-white/90 text-slate-800 text-sm">${
                p.days
            }D</div>
          </div>
          <div class="p-4">
            <div class="font-semibold">${p.title}</div>
            <div id="loc-${p.id}" class="text-sm text-slate-500">${
            p.location
        }</div>
            <div class="text-sm rating-star mt-1">★★★★★ <span class="text-slate-600 ml-1">${
                p.rating
            }</span></div>
            <ul class="text-sm text-slate-700 list-disc pl-5 mt-2">
              ${p.highlights
                  .slice(0, 2)
                  .map((h) => `<li>${h}</li>`)
                  .join("")}
            </ul>
            <div class="mt-4 flex items-center gap-2">
              <button class="px-3 py-2 rounded-lg bg-[var(--secondary)] text-white text-sm" onclick="openPackage('${
                  p.id
              }')">View Details</button>
              <button class="px-3 py-2 rounded-lg bg-[var(--primary)] text-white text-sm" onclick="quickBook()">Book Now</button>
            </div>
          </div>`;
        wrap.appendChild(el);
    });
}
function renderTestimonials() {
    const t = document.getElementById("testimonials");
    t.innerHTML = "";
    testimonials.forEach((r) => {
        const el = document.createElement("div");
        el.className = "p-5 border rounded-2xl bg-white card-shadow";
        el.innerHTML = `
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-slate-200 grid place-items-center heading">${r.name
                .split(" ")
                .map((w) => w[0])
                .join("")}</div>
            <div>
              <div class="font-semibold">${r.name}</div>
              <div class="text-xs rating-star">★★★★★</div>
            </div>
          </div>
          <p class="text-slate-700 mt-3">${r.text}</p>`;
        t.appendChild(el);
    });
}

// Destinations page
function sortDestinations() {
    const v = document.getElementById("destSort").value;
    const arr = filteredDestinations;
    if (v === "price") arr.sort((a, b) => a.price - b.price);
    if (v === "duration") arr.sort((a, b) => a.duration - b.duration);
    if (v === "rating") arr.sort((a, b) => b.rating - a.rating);
    renderDestinationGrid();
}
function filterDestinations() {
    const checks = Array.from(
        document.querySelectorAll('aside input[type="checkbox"]:checked')
    ).map((c) => c.value);
    const dur = document.getElementById("filter-duration").value;
    const bud = document.getElementById("filter-budget").value;
    const rating = parseFloat(document.getElementById("filter-rating").value);
    document.getElementById("ratingValue").innerText = rating;

    filteredDestinations = destinations.filter((d) => {
        const themeOk = checks.length
            ? checks.some((c) => d.theme.includes(c))
            : true;
        const durOk =
            dur === "Any"
                ? true
                : dur === "3-4 days"
                ? d.duration <= 4
                : dur === "5-7 days"
                ? d.duration >= 5 && d.duration <= 7
                : dur === "8-10 days"
                ? d.duration >= 8 && d.duration <= 10
                : true;
        const budOk =
            bud === "Any"
                ? true
                : bud === "Under ₹80,000"
                ? d.price < 80000 / 100
                : bud === "₹80,000 - ₹1,50,000"
                ? d.price >= 80000 / 100 && d.price <= 150000 / 100
                : bud === "₹1,50,000+"
                ? d.price > 150000 / 100
                : true;
        const rateOk = d.rating >= rating;
        return themeOk && durOk && budOk && rateOk;
    });
    currentPageIndex = 1;
    renderDestinationGrid();
}
function resetFilters() {
    document
        .querySelectorAll('aside input[type="checkbox"]')
        .forEach((c) => (c.checked = false));
    document.getElementById("filter-duration").value = "Any";
    document.getElementById("filter-budget").value = "Any";
    document.getElementById("filter-rating").value = 4;
    document.getElementById("ratingValue").innerText = 4;
    filteredDestinations = [...destinations];
    currentPageIndex = 1;
    renderDestinationGrid();
}
function paginate(delta) {
    const total = Math.ceil(filteredDestinations.length / 6) || 1;
    currentPageIndex = Math.min(Math.max(1, currentPageIndex + delta), total);
    renderDestinationGrid();
}
function renderDestinationGrid() {
    const grid = document.getElementById("destGrid");
    grid.innerHTML = "";
    const start = (currentPageIndex - 1) * 6;
    const pageItems = filteredDestinations.slice(start, start + 6);
    pageItems.forEach((d) => {
        const el = document.createElement("div");
        el.className =
            "border rounded-2xl overflow-hidden card-shadow bg-white";
        el.innerHTML = `
          <div class="relative aspect-[16/9] bg-slate-200 grid place-items-center text-slate-600">Image
            <div class="absolute top-3 left-3 px-3 py-1 pill price-badge text-sm">₹${
                d.price
            }</div>
            <div class="absolute top-3 right-3 px-3 py-1 pill bg-white/90 text-slate-800 text-sm">${
                d.duration
            }D</div>
          </div>
          <div class="p-4">
            <div class="font-semibold">${d.title} — ${d.country}</div>
            <div class="text-sm rating-star mt-1">★★★★★ <span class="text-slate-600 ml-1">${
                d.rating
            }</span></div>
            <div class="flex flex-wrap gap-2 mt-2">
              ${d.theme
                  .slice(0, 3)
                  .map(
                      (t) =>
                          `<span class="px-2 py-1 pill bg-slate-100 text-slate-700 text-xs">${t}</span>`
                  )
                  .join("")}
            </div>
            <div class="mt-4 flex items-center gap-2">
              <button class="px-3 py-2 rounded-lg bg-[var(--secondary)] text-white text-sm" onclick="openPackage('${
                  d.id
              }')">View Details</button>
              <button class="px-3 py-2 rounded-lg border text-sm" onclick="quickBook()">Book Now</button>
            </div>
          </div>`;
        grid.appendChild(el);
    });
    const total = Math.ceil(filteredDestinations.length / 6) || 1;
    document.getElementById(
        "pageIndicator"
    ).innerText = `Page ${currentPageIndex} of ${total}`;
}

// Package page
function openPackage(id) {
    navigate("packages");
    // Update displayed package info
    const pkg = packages.find((p) => p.id.includes(id)) || packages[0];
    currentPackage = {
        id: pkg.id,
        title: pkg.title,
        location: pkg.location,
        priceText: `₹${pkg.price}`,
    };
    document.getElementById("pkgTitle").innerText = pkg.title;
    document.getElementById("pkgLocation").innerText = `📍 ${pkg.location}`;
    document.getElementById("pkgPriceText").innerText = `₹${pkg.price}`;
    document.getElementById("pkgStrike").innerText = `₹${Math.round(
        pkg.price * 1.12
    )}`;
    document.getElementById("pkgPriceMobile").innerText = `₹${pkg.price}`;
    renderPackageReviews();
}

function switchTab(e) {
    const tab = e.currentTarget.dataset.tab;
    document.querySelectorAll("#page-packages [data-tab]").forEach((btn) => {
        const active = btn.dataset.tab === tab;
        btn.classList.toggle("tab-active", active);
        btn.classList.toggle("tab-inactive", !active);
    });
    [
        "overview",
        "itinerary",
        "inclusions",
        "exclusions",
        "reviews",
        "faqs",
    ].forEach((t) => {
        document
            .getElementById(`tab-${t}`)
            .classList.toggle("hidden", t !== tab);
    });
}
function renderPackageReviews() {
    const wrap = document.getElementById("reviewList");
    if (!wrap) return;
    wrap.innerHTML = "";
    testimonials.slice(0, 4).forEach((r) => {
        const el = document.createElement("div");
        el.className = "p-4 border rounded-xl";
        el.innerHTML = `
          <div class="flex items-center justify-between">
            <div class="font-semibold">${r.name}</div>
            <div class="text-sm rating-star">★★★★★</div>
          </div>
          <p class="text-slate-700 mt-2">${r.text}</p>`;
        wrap.appendChild(el);
    });
}

// About page team
function renderTeam() {
    const grid = document.getElementById("teamGrid");
    grid.innerHTML = "";
    team.forEach((m) => {
        const card = document.createElement("div");
        card.className = "border rounded-2xl p-5 card-shadow bg-white";
        card.innerHTML = `
          <div class="w-16 h-16 rounded-full bg-slate-200 grid place-items-center heading text-lg">${m.name
              .split(" ")
              .map((w) => w[0])
              .join("")}</div>
          <div class="font-semibold mt-3">${m.name}</div>
          <div class="text-sm text-slate-600">${m.role}</div>
          <p class="text-sm text-slate-700 mt-2">Passionate about crafting unforgettable journeys.</p>`;
        grid.appendChild(card);
    });
}

// Blog
function toggleBlogView() {
    blogGridView = !blogGridView;
    renderBlog();
}
function renderBlog() {
    const grid = document.getElementById("blogGrid");
    grid.className = blogGridView
        ? "mt-8 grid md:grid-cols-3 gap-6"
        : "mt-8 grid grid-cols-1 gap-4";
    grid.innerHTML = "";
    blogPosts.forEach((b) => {
        const el = document.createElement("article");
        el.className =
            "border rounded-2xl overflow-hidden card-shadow bg-white";
        el.innerHTML = `
          <div class="aspect-[16/9] bg-slate-200 grid place-items-center text-slate-600">Cover Image</div>
          <div class="p-4">
            <div class="flex items-center justify-between">
              <span class="px-2 py-1 pill bg-sky-50 text-sky-700 text-xs">${b.category}</span>
              <span class="text-xs text-slate-500">${b.date}</span>
            </div>
            <h3 class="font-semibold mt-2">${b.title}</h3>
            <p class="text-sm text-slate-700 mt-1">${b.excerpt}</p>
            <div class="mt-3">
              <button class="px-3 py-2 rounded-lg border text-sm" onclick="alert('Demo article')">Read More</button>
            </div>
          </div>`;
        grid.appendChild(el);
    });
}

// Contact Enquiry (demo reset)
function submitEnquiry() {
    const name = document.getElementById("enq-name").value.trim();
    const email = document.getElementById("enq-email").value.trim();
    if (!name || !email) {
        alert("Please enter your name and email.");
        return;
    }
    // Redirect to WhatsApp with contact page details
    const destination = document.getElementById("enq-destination").value.trim();
    const dates = document.getElementById("enq-dates").value;
    const guests = document.getElementById("enq-guests").value;
    const note = document.getElementById("enq-message").value.trim();

    const text = `Solar Tourism Enquiry:
• From: Contact Page
• Name: ${name}
• Email: ${email}
• Destination: ${destination || "N/A"}
• Dates: ${dates || "Flexible"}
• Guests: ${guests}
• Notes: ${note || "—"}

Please assist with availability and the best offer.`;

    const phone = "9322527567"; // CHANGE to your business WhatsApp number
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener");

    // Reset fields
    document.getElementById("enq-name").value = "";
    document.getElementById("enq-email").value = "";
    document.getElementById("enq-phone").value = "";
    document.getElementById("enq-destination").value = "";
    document.getElementById("enq-dates").value = "";
    document.getElementById("enq-guests").selectedIndex = 0;
    document.getElementById("enq-message").value = "";
}

// Newsletter
function subscribeNewsletter() {
    const v = document.getElementById("newsletterEmail").value.trim();
    if (!v) {
        alert("Please add your email.");
        return;
    }
    alert("Subscribed! Welcome aboard ☀️");
    document.getElementById("newsletterEmail").value = "";
}
function subscribeFooter() {
    const v = document.getElementById("footerEmail").value.trim();
    if (!v) {
        alert("Please add your email.");
        return;
    }
    alert("Subscribed from footer! 🎉");
    document.getElementById("footerEmail").value = "";
}

// Share
function sharePackage() {
    alert(
        "Share this package: Copy link from your browser address bar (demo)."
    );
}

// Init
function init() {
    document.getElementById("year").innerText = new Date().getFullYear();
    navigate("home");
}
init();
