markdown
Copy code
# 💸 Bank Account Transfer System — Node.js + MongoDB

> 🚀 A secure and logical **Bank Account Transfer API** built using **Node.js**, **Express.js**, and **MongoDB**.  
> Ensures balance validation, prevents invalid transfers, and demonstrates safe sequential updates even **without using database-level transactions**.

---

## 🧠 Overview

This project simulates a **simple banking system** where users can:
- 🏦 Create bank accounts  
- 💰 Transfer money between accounts  
- ⚠️ Validate sufficient balance before transfers  
- ❌ Prevent invalid operations (like self-transfers or missing accounts)

It’s designed as a **mini-project** to showcase your backend and database handling skills for resumes, hackathons, and practical learning.

---

## ⚙️ Tech Stack

| Technology | Purpose |
|-------------|----------|
| 🟢 **Node.js** | Runtime environment |
| ⚡ **Express.js** | Backend framework |
| 🍃 **MongoDB** | Database |
| 🧩 **Mongoose** | ODM for MongoDB |
| 🧠 **REST API** | Architecture style |

---

## 🗂️ Project Structure

account-transfer-system/
│
├── config/
│ └── db.js # MongoDB connection setup
├── models/
│ └── User.js # User schema (name, balance)
├── routes/
│ └── transferRoutes.js # API routes for transfers
├── server.js # Main server entry
└── README.md # Documentation

yaml
Copy code

---

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/<your-username>/account-transfer-system.git
cd account-transfer-system
2️⃣ Install Dependencies
bash
Copy code
npm install
3️⃣ Start MongoDB
Ensure MongoDB is running locally (default: mongodb://localhost:27017).

4️⃣ Run the Server
bash
Copy code
npm start
🌐 The API will be live at: http://localhost:5000

🧾 API Endpoints
Method	Endpoint	Description
POST	/api/createUser	➕ Create a new user account
POST	/api/transfer	🔁 Transfer money between accounts

🧪 Testing with Postman
🧍‍♀️ Create User
POST /api/createUser

json
Copy code
{
  "name": "Vaidehi",
  "balance": 5000
}
👨‍💼 Create Another User
POST /api/createUser

json
Copy code
{
  "name": "Aarav",
  "balance": 2000
}
💳 Transfer Funds
POST /api/transfer

json
Copy code
{
  "senderId": "670f3d... (Vaidehi’s _id)",
  "receiverId": "670f3e... (Aarav’s _id)",
  "amount": 1000
}
✅ Successful Response:

json
Copy code
{
  "message": "✅ Transfer successful!",
  "transaction": {
    "from": "Vaidehi",
    "to": "Aarav",
    "amount": 1000,
    "senderBalance": 4000,
    "receiverBalance": 3000
  }
}
❌ Failed Response (Insufficient Balance):

json
Copy code
{
  "error": "Insufficient balance in sender’s account."
}
💡 Key Highlights
✨ Logical correctness maintained (no database transactions)
🔍 Proper validation for user existence and balance
🛑 Prevents invalid or duplicate transfers
⚡ Fast and clean Express.js API design
💾 Built using modern ES modules and async/await

