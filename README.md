# 🛒 E-commerce Backend API - System Design

## 1. Overview
Acest proiect este un backend API pentru o aplicație e-commerce, proiectat pentru a fi scalabil, sigur și ușor de întreținut.  
Se bazează pe arhitectură **Clean Architecture**, separând clar logica de business de infrastructură și facilitând extinderea.

**Stack principal:**
- **Backend:** Node.js + Express.js
- **Database:** MongoDB + Mongoose
- **Auth:** JWT + Refresh Tokens
- **Storage:** AWS S3 (imagini produse)
- **Containerizare:** Docker
- **Hosting:** AWS EC2 / Kubernetes (scalare orizontală)

---

## 2. Design Discussion (Transcript)

> **Arhitect:** Care e target-ul de utilizatori pentru primul an?  
> **Stakeholder:** Estimăm 50.000 de utilizatori înregistrați, din care 5.000 activi zilnic. La evenimente ca Black Friday putem avea și 50.000 de utilizatori simultan.  
> **Developer:** Atunci trebuie să gândim arhitectura pentru scalare orizontală și caching.

---

> **Arhitect:** Ce tipuri de utilizatori vom avea?  
> **Stakeholder:** Clienți finali, administratori și parteneri care se conectează prin API extern.  
> **Developer:** Ok, atunci vom avea roluri diferite și middleware de autorizare bazat pe roluri.

---

> **Arhitect:** Cum arată produsele din punct de vedere al datelor?  
> **Stakeholder:** Unele au mărimi și culori, altele specificații tehnice. Pot apărea câmpuri noi.  
> **Developer:** Folosim MongoDB pentru flexibilitate, evităm rigiditatea unui SQL clasic.

---

> **Arhitect:** Ce e mai important: viteză de răspuns sau acuratețea stocului în timp real?  
> **Stakeholder:** Viteză. E ok dacă actualizarea stocului apare cu o mică întârziere.  
> **Developer:** Atunci mergem pe *eventual consistency* și caching în Redis pentru produsele populare.

---

> **Arhitect:** Care e bugetul de hosting la început?  
> **Stakeholder:** Minimal, dar să putem scala rapid dacă traficul crește.  
> **Developer:** Începem cu MongoDB Atlas M10 și AWS EC2 t3.medium, apoi adăugăm instanțe și CDN când e nevoie.

---

> **Arhitect:** Ce punem în MVP și ce lăsăm pentru faza următoare?  
> **Stakeholder:** MVP-ul trebuie să aibă login, listare produse, filtrare, coș, plasare comandă și panel admin.  
> **Developer:** Plățile online, recomandările și notificările le facem în faza 2.

---

## 3. Architecture Diagram

[Client Web/Mobile]
|
v
[API Gateway / Express]
|
v
Controllers → Services → Repositories → MongoDB
| |
| v
| [AWS S3]
v
[Payment Gateway]


---

## 4. Core Entities / Schema

### User
- `_id`
- `username`
- `email`
- `passwordHash`
- `role` (USER, ADMIN)
- `cart` (array of product references)
- `orders` (array of order references)

### Product
- `_id`
- `name`
- `description`
- `price`
- `category`
- `stockQuantity`
- `images` (array of URLs)
- `createdAt`, `updatedAt`

### Order
- `_id`
- `user` (reference)
- `products` (array of `{ productId, quantity, price }`)
- `status` (PENDING, PAID, SHIPPED, DELIVERED)
- `totalPrice`
- `createdAt`, `updatedAt`

---

## 5. API Endpoints (Summary)

### Auth & User
- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/refresh-token`
- `GET /api/users/:id` *(protected)*
- `PATCH /api/users/:id` *(protected/admin)*

### Products
- `GET /api/products`
- `GET /api/products/:id`
- `POST /api/products` *(admin)*
- `PATCH /api/products/:id` *(admin)*
- `DELETE /api/products/:id` *(admin)*

### Orders
- `POST /api/orders` *(user)*
- `GET /api/orders/:id` *(user/admin)*
- `PATCH /api/orders/:id` *(admin)*
- `GET /api/orders` *(admin)*

---

## 6. Scalability & Security Considerations

- **Scalare orizontală** prin instanțe multiple + load balancer
- **Redis caching** pentru produse frecvent accesate
- **Rate limiting** și protecție împotriva brute force
- **CORS** configurat strict pentru frontend
- **Input validation** cu Zod
- **Backup zilnic** pentru MongoDB

---

## 7. Deployment

- **Docker** pentru medii dev/prod
- **Env vars** pentru secrete și config
- **CI/CD** cu GitHub Actions → AWS EC2 / Kubernetes
- **CDN** pentru livrare rapidă a resurselor statice

---

## 8. Future Improvements
- WebSocket pentru notificări în timp real
- Logging centralizat (Elastic Stack / Grafana)
- Search & filter avansat
- AI-based recommendations
