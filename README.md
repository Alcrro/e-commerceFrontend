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

