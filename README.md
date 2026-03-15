# ParkingAI Valencia
### Parking Decision Assistant · PM Portfolio · AI-First Product

A decision-support tool that helps drivers in Valencia find the most likely place to park — combining real open data from the city, time-based probability models, and AI reasoning via Claude.

**Live demo →** `https://graceful-sorbet-a7e743.netlify.app`

---

## The problem

Drivers in Valencia spend 15–20 minutes on average searching for parking in dense urban areas. This generates unnecessary CO₂, congestion, and frustration.

The ideal solution would be real-time detection of free street spaces. That data exists — Valencia operates 4,000+ street sensors through the VLCi platform — but it is restricted to municipal systems and not exposed via public APIs.

This creates a real product challenge: **the data exists, but access is fragmented or restricted.**

---

## Product approach

Instead of promising "free space detected", this tool answers a more honest and useful question:

> **Where do I have the best chance of finding parking near my destination?**

This shifts the product from detection to **decision optimisation** — a more realistic and defensible value proposition when full sensor data is unavailable.

The app estimates parking probability based on:
- Zone type (ORA blue / orange, municipal underground)
- Time of day and day of week
- Real capacity data from municipal parkings
- Claude AI reasoning over all available signals

---

## What's real vs estimated

| Data | Source | Status |
|------|--------|--------|
| 22 municipal parkings (location, capacity) | Ayuntamiento de Valencia Open Data | ✅ Real, live API |
| ORA zone locations, tariffs, schedules | Ayuntamiento de Valencia Open Data | ✅ Real |
| Parking availability | Estimated by hour + day pattern | ⚠️ Estimated |
| Street space availability | VLCi sensors (restricted access) | ❌ Not available publicly |

This is intentional and documented in the product. A good PM builds with available data and defines the roadmap toward better data.

---

## Architecture

```
User input (destination)
        ↓
Zone detection (Valencia neighborhoods)
        ↓
Netlify Function (proxy) → Valencia Open Data API
        ↓
Probability model (hour + day + zone type)
        ↓
Claude API (AI reasoning + recommendation)
        ↓
Ranked options with probability, cost, time
```

**No backend server. No database. Cost: €0/month.**

---

## Tech stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML, CSS, vanilla JavaScript |
| AI reasoning | Claude API (claude-sonnet) |
| Proxy / serverless | Netlify Functions |
| Map | Leaflet.js + OpenStreetMap |
| Data | Valencia Open Data (opendatasoft) |
| Deployment | Netlify (auto-deploy from GitHub) |

---

## Data sources

**Municipal parkings** — 22 underground parkings with real coordinates and capacity
`valencia.opendatasoft.com/explore/dataset/parkings/`

**ORA zones** — Blue (1–2h, 2€/h) and orange (30min, 1.5€/h) street parking zones
`valencia.opendatasoft.com/explore/dataset/aparcaments-ora-aparcamientos-ora/`

Both datasets are public, Creative Commons licensed, no authentication required.

---

## Coverage

Currently covers Valencia city only:
- Russafa / Ruzafa
- Ciutat Vella (Mercado Central, Cathedral, IVAM)
- Eixample
- Cabanyal
- Malvarrosa / Ciudad de las Artes
- Centro (Colón, Ayuntamiento, Glorieta)

Destinations outside Valencia city return a clear out-of-coverage message.

---

## Roadmap

**V2 — Better availability data**
- Request access to VLCi API (Valencia smart city platform) — 4,088 street sensors
- Integrate Valenbisi (public bike API, updates every 10min) as a demand proxy signal

**V3 — Private parking coverage**
- Parclick API integration (50–100 additional private garages in Valencia)
- ElParking API as secondary source
- Real-time availability for private operators

**V4 — Crowdsourcing loop**
- "I parked here" / "I'm leaving a spot" feedback buttons (already in UI)
- Weighted signal decay over time
- Local Guide Points incentive model

---

## Product insight

The biggest constraint in urban mobility products is not the algorithm — it's access to city infrastructure data.

Valencia has the sensors. The data exists. But the lack of open APIs forces products to rely on probabilistic models and behavioural patterns instead of ground truth.

This prototype was built to explore that constraint honestly: what can you build that is genuinely useful when you can't access the data you need?

The answer: a decision-support tool that is transparent about its limitations and still better than deciding blind.

---

## About

Built as a **Product Manager portfolio experiment** exploring:
- AI-first product design (Claude API as reasoning layer)
- Working with fragmented open urban data
- Honest product scoping under data constraints
- Serverless architecture with zero infrastructure cost

**Stack decision log:** Netlify Functions chosen over a dedicated backend to keep the project zero-cost and deployable in minutes. Claude API chosen over a rule-based recommendation engine because the reasoning quality is significantly better for ambiguous inputs ("near the stadium", "Mestalla area") and the cost per query is negligible for a prototype.
